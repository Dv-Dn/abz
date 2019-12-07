<template>
  <button
    :class="{
		'btn-disabled':disabled,
		'btn-primary' : primary,
		'btn-secondary': secondary 
	}"
    :style="{
		'width':w,
		'height':h}"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: true
    },
    secondary: {
      type: Boolean,
      default: false
    },
    w: {
      type: String,
      default: "290px"
    },
    h: {
      type: String,
      default: "40px"
    }
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      if (!this.disabled) {
        this.$emit("onClick");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  font-size: 20px;
  transition: 0.3s;
	border-radius: 4px;
	padding-bottom: 3px;
}
.btn-primary {
  color: #fff;
  border: 1px $primary solid;
  background-color: $primary;
  &:hover {
    background-color: $hover;
  }
}
.btn-secondary {
  color: $primary;
  border: 2px $primary solid;
  background-color: #fff;
  &:hover {
    border: 2px $hover solid;
    background-color: rgba($hover, 0.2);
  }
}
.btn-disabled {
  color: $grey;
  background-color: $border;
  border: 1px $border solid;
  cursor: auto;
  &:hover {
    background-color: $border;
    border: 1px $border solid;
  }
}
</style>
