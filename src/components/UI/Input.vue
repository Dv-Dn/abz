<template>
  <div :class="{ Input_isInvalid: error }">
    <label ref="inputLabel">
      <input
        :type="type"
        placeholder=" "
        @blur="Filled"
        @focus="Active"
        v-on="$listeners"
        @change="onChange"
      />
      <span>{{ label }}</span>
    </label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: "text" },
    validation: Boolean,
    required: Boolean,
    label: String,
    error: Boolean
  },
  methods: {
    Active() {
      let label = this.$refs.inputLabel;
      label.style.borderWidth = "2px";
      this.$emit("onFocus");
    },
    Filled() {
      let label = this.$refs.inputLabel;
      label.style.borderWidth = "1px";
      this.$emit("onBlur", event.target.value);
    },
    onChange() {
      this.$emit("onChange", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
div {
	position: relative;
	min-width: 220px;
  color: $grey;
  label {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    padding: 0 18px;
    border: 1px $border solid;
    border-radius: 4px;
    span {
      position: absolute;
      transition: 0.2s;
    }
    input {
      width: 100%;
      height: 20px;
      border: 0;
      &:focus {
        + span {
          z-index: 22;
          padding: 0 4px;
          transform: translateY(-28px) scale(0.75) translateX(-12px);
          background-color: #fff;
        }
      }
      &:not(:placeholder-shown) {
        + span {
          z-index: 22;
          padding: 0 4px;
          transform: translateY(-28px) scale(0.75) translateX(-12px);
          background-color: #fff;
        }
      }
    }
  }
  aside {
    @extend %input-error;
  }
}
.Input_isInvalid {
  color: $error;
  label {
    border: 1px $error solid;
  }
  aside {
    color: $error;
  }
}
</style>
