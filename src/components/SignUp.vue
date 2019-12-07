<template>
  <section id="signUp">
    <div class="wrap">
      <h2>{{ get_signup.title1 }}</h2>
      <h5>
        {{ get_signup.title2 }}
      </h5>
      <div class="SignUp" ref="signUpForm" :key="formKey">
        <!--  -->
        <!-- Name Input  -->
        <!--  -->
        <UiInput
          class="SignUp__a"
          type="text"
          label="Name"
          @onBlur="inputNameOnBlur"
          :error="this.$v.name.$error"
          :value="name"
        >
          <!-- <aside v-if="$v.name.$required">This field is required</aside> -->
          <aside v-if="$v.name.$error">
            Username should contain 2-60 characters
          </aside>
          <aside v-else-if="$v.name.$invalid">Enter your name</aside>
        </UiInput>
        <!--  -->
        <!-- Email Input -->
        <!--  -->
        <UiInput
          class="SignUp__b"
          label="Email"
          :error="$v.email.$error"
          @onBlur="inputEmailOnBlur"
        >
          <aside v-if="$v.email.$error">
            This is not a valid e-mail address
          </aside>
          <aside v-else-if="$v.email.$invalid">Enter your email</aside>
        </UiInput>
        <!--  -->
        <!-- Phone input -->
        <!--  -->
        <UiInput
          class="SignUp__c"
          type="tel"
          label="Phone"
          :error="$v.phone.$error"
          @onBlur="inputPhoneOnBlur"
        >
          <aside v-if="$v.phone.$error">
            Phone number must be in the format "+380..."
          </aside>
          <aside v-else-if="$v.phone.$invalid">Enter your phone number</aside>
        </UiInput>
        <Select
          class="SignUp__d"
          :options="get_options"
          v-if="!options_is_loading"
          @onChange="inputSelectOnChange"
        >
          <aside v-if="$v.position.$invalid">
            Choose your desired position
          </aside>
        </Select>
        <InputFile
          class="SignUp__e"
          :fileName="this.photo.name"
          :hasError="photoHasError"
          @onChange="inputFileOnChange"
        >
          <aside v-if="!$v.photo.$error">
            File format jpg up to 5 MB, the minimum size of 70x70px
          </aside>
          <aside v-else-if="$v.photo.size">
            The photo size must not be greater than 5 Mb
          </aside>
          <aside v-else-if="$v.photo.type">
            The photo format must be jpeg/jpg type
          </aside>
          <aside v-else-if="$v.photo.px">
            Minimum size of photo 70x70px
          </aside>
        </InputFile>
      </div>
      <Button secondary :disabled="submitDisabled" @onClick="buttonSubmit"
        >Sign Up</Button
      >
      <Alert
        :title="alert.title"
        :text="alert.text"
        v-if="alert.isOpen"
        @onClick="() => (this.alert.isOpen = false)"
      />
    </div>
  </section>
</template>

<script>
import InputFile from "./UI/InputFile";
import Select from "./UI/Select";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Alert from "./UI/Alert";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  components: {
    InputFile,
    Select,
    UiInput: Input,
    Button,
    Alert
  },
  mixins: [validationMixin],
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      position: null,
      photo: {
        // Стартовый тип файла добавлен, чтобы валидатор photo.type изначально был false.(Я скорее всего затупил с условием валидатора)
        type: "image/jpeg"
      },
      formKey: "signUpForm",
      alert: {
        title: "",
        text: "",
        isOpen: false
      }
    };
  },

  // Валидаторы
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(60)
    },

    email: {
      required,
      alpha: val =>
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
          val
        )
    },

    phone: {
      required,
      numeric: val => /^[+]{0,1}380([0-9]{9})$/.test(val)
      // /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i.test(val)
    },

    position: { required, numeric: val => val != 0 },

    photo: {
      size: v => v.size >= 5242880,
      type: v => v.type !== "image/jpeg",
      px: v => {
        return new Promise(resolve => {
          let reader = new FileReader();
          reader.readAsDataURL(v);
          reader.onload = evt => {
            let img = new Image();
            img.onload = () => {
              if (img.width < 70 || img.height < 70) resolve(true);
              else resolve(false);
            };
            img.src = evt.target.result;
          };
        });
      }
    }
  },
  computed: {
    // При использовании стандартной проверки $v.photo.$error получаем ошибку, даже если все валидаторы прошли проверку.
    //Следующие 2 функии  используются в качестве альтернативы, в целях обхода бага.
    submitDisabled() {
      if (
        this.$v.name.$invalid ||
        this.$v.email.$invalid ||
        this.$v.phone.$invalid ||
        this.$v.position.$invalid ||
        this.$v.photo.size ||
        this.$v.photo.type ||
        this.$v.photo.px
      )
        return true;
      return false;
    },
    photoHasError() {
      if (this.$v.photo.size || this.$v.photo.type || this.$v.photo.px)
        return true;
      else return false;
    },

    // Работа с Vuex
    get_signup() {
      return this.$store.getters.get_signup;
    },
    get_options() {
      return this.$store.getters.get_options;
    },
    options_is_loading() {
      return this.$store.getters.options_is_loading;
    },
    get_answer_status() {
      return this.$store.getters.get_answer_status;
    }
  },
  mounted: function() {
    this.$store.dispatch("getOptions");
    this.$store.dispatch("getToken");
  },
  methods: {
    // При изменении полей используем проверку.
    inputNameOnBlur(value) {
      this.name = value;
      this.$v.name.$touch();
    },

    inputEmailOnBlur(value) {
      this.email = value;
      this.$v.email.$touch();
    },

    inputPhoneOnBlur(value) {
      this.phone = value;
      this.$v.phone.$touch();
    },
    inputSelectOnChange(id) {
      this.position = id;
      this.$v.position.$touch();
    },
    inputFileOnChange(file) {
      this.photo = file;
      this.$v.photo.$touch();
    },

    buttonSubmit() {
      let formData = new FormData();
      formData.append("position_id", this.position);
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("phone", this.phone);
      formData.append("photo", this.photo);
      this.$store.dispatch("postUser", formData);

      // Очистка формы путем изменения ключа блока с инпутами.
      this.formKey =
        "signUpForm" +
        Math.random() * 100 +
        "_" +
        Math.random() * 100 +
        "_" +
        Math.random() * 100;
      this.$v.$reset();

      // Вывод Alert в зависимости от полученного ответа с сервера.
      if (this.get_answer_status == "201" || this.get_answer_status == "200") {
        this.alert.title = "Congratulations";
        this.alert.text = "You have successfully passed the registration";
      } else {
        this.alert.title = "Condolences";
        this.alert.text = "Whoops something went wrong :(";
      }
      this.alert.isOpen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: 14px 0 70px 0;
  text-align: center;

  @include respond-to(md) {
    padding: 80px 0 120px 0;
  }
  @include respond-to(lg) {
    padding: 100px 0 139px 0;
  }
  @include respond-to(xl) {
    padding: 100px 0 149px 0;
  }
  h2 {
    margin-bottom: 10px;
  }
  h5 {
		width: 100%;
		line-height: 21px;
    @include respond-to(md) {
      max-width: 50%;
      margin-top: 22px;
    }
    @include respond-to(lg) {
      max-width: 100%;
      margin-top: 13px;
    }

    font-weight: 400;
    margin: 0 auto;
  }
}
.SignUp {
  display: grid;
  margin-top: 35px;
  margin-bottom: 63px;
  text-align: left;

  grid-row-gap: 35px;
  grid-template-areas:
    "a"
    "b"
    "c"
    "d"
    "e";

  @include respond-to(md) {
    margin-top: 53px;
    margin-bottom: 59px;

    grid-column-gap: 30px;
    grid-row-gap: 40px;
    grid-template-areas:
      "a a b b c c"
      "d d d e e e";
  }
  @include respond-to(lg) {
    margin-top: 63px;
  }
  @include respond-to(xl) {
    margin-bottom: 61px;
  }
}
@each $i in a, b, c, d, e {
  .SignUp__#{$i} {
    grid-area: $i;
  }
}
</style>
