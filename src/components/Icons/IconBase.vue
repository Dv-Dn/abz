<template>
  <svg
    :style="{'margin':margin }"
    :class="{'Icon_disabled':disabled,
    'IconBase':!disabled}"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    role="presentation"
    @click="$emit('onClick')"
  >
    <title :id="iconName" lang="en">{{iconName}} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 26
    },
    height: {
      type: [Number, String],
      default: 26
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
    margin: {
      type: String,
      default: "0"
    },
    disabled: Boolean
  }
};
</script>
<style lang="scss" scoped>
.IconBase {
  cursor: pointer;
  transition: transform 0.1s ease-in;
  &:hover {
    transform: scale(1.05);
    g {
      fill: $primary;
    }
  }
}
g {
  transition: 0.3s;
}
.Icon_disabled {
  opacity: 0.5;
}
</style>