<template>
  <div class="Select">
    <div class="qwe">
      <div
        class="select-box__backdrop"
        @click="isOpen = false"
        v-if="isOpen"
      ></div>
      <div class="select-box" :class="{ 'select-box_open_shadow': isOpen }">
        <div
          @click="isOpen = !isOpen"
          :class="{ 'select-box_open_border': isOpen }"
        >
          <p :class="{ 'select-box_text_color': isOpen }">{{ value }}</p>
          <transition name="fade">
            <img src="../../assets/icons/caret-down.svg" v-show="!isOpen" />
          </transition>
        </div>

        <transition name="fade">
          <ul class="select-box__options" v-if="isOpen">
            <li
              @click="onSelect(a)"
              v-for="(a, i) in options"
              :key="i + '_' + a.id"
              v-show="a.name != value"
            >
              <p>{{ a.name }}</p>
            </li>
          </ul>
        </transition>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      value: "Select your position",
      isOpen: false,
      id: 0
    };
  },
  props: {
    options: {
      required: true
    }
  },
  methods: {
    onSelect(a) {
      this.value = a.name;
      this.id = a.id;
      this.isOpen = false;
      this.$emit("onChange", this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
$select-box_width: 555px;
.Select {
  min-width: 290px;
  .qwe {
    position: relative;
    display: block;
    min-height: 57px;
  }
  aside {
    @extend %input-error;
  }
  .select-box {
    position: absolute;
    z-index: 2;
    width: 100%;
    cursor: pointer;
    transition: 0.1s;
    border-radius: 3px;

    div {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 56px;
      padding: 0 16px 2px 16px;
      transition: 0.3s;
      border: 1px $border solid;
      border-radius: 4px;
    }
    ul {
      border-radius: 3px;
      background-color: #fff;
      li {
        padding: 18px;
        &:hover {
          background-color: rgba($primary, 0.2);
        }
      }
    }
    p {
      flex: 1;
      transition: 0.3s;

      @extend %p2;
    }
    img {
			margin-right: -4px;
			margin-top: 3px;
      width: 16px;
			height: 10px;
			@include respond-to(lg){
				margin-right: 3px;
				margin-top: 3px;
			}
			@include respond-to(xl){
				margin-right: -4px;
			}
    }
    .select-box_open_border {
      border: 1px rgba($border, 0) solid;
    }
    .select-box_text_color {
      color: $primary;
    }
  }
  .select-box_open_shadow {
    box-shadow: 0 3px 8px rgba(1, 1, 1, 0.24);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.select-box__backdrop {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
