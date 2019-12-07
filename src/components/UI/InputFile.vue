<template>
  <div class="InputFile" :class="{ InputFile_error: hasError }">
    <label>
      <input type="file" @change="processFile" ref="inputFile" />
      <span>{{ this.fileName || "Upload your photo" }}</span>
      <button @click="openFile">
        <strong>Upload</strong>
        <IconBase icon-name="Upload" class="InputFile__upload-icon">
          <IconUpload />
        </IconBase>
      </button>
    </label>
    <slot></slot>
  </div>
</template>

<script>
import IconBase from "../Icons/IconBase";
import IconUpload from "../Icons/IconUpload";
export default {
  components: {
    IconBase,
    IconUpload
  },
  props: {
    fileName: String,
    hasError: Boolean
  },
  methods: {
    processFile(e) {
      let file = e.target.files[0];
      this.$emit("onChange", file);
    },
    openFile(e) {
      e.preventDefault();
      this.$refs.inputFile.click();
    }
  }
};
</script>

<style lang="scss" scoped>
.InputFile {
  display: block;
  width: 100%;
  min-width: 290px;
  aside {
    @extend %input-error;
  }

  label {
    display: flex;
    flex: 1;
    height: 56px;
    cursor: pointer;

    input {
      display: none;
    }

    span:nth-child(even) {
      line-height: 52px;
      flex: 1;
      padding-left: 16px;
      color: $grey;
      border: 1px $border solid;
      border-right: 0;
      border-radius: 4px 0 0 4px;

      @extend %p2;
    }
    button {
      width: 56px;
      color: $primary;
      border: 2px $primary solid;
      border-radius: 0 4px 4px 0;
      background-color: #fff;

      @include respond-to(md) {
        width: 131px;
      }
      &:hover {
        border: 2px $hover solid;
        background-color: rgba($hover, 0.2);
      }
      strong {
        display: none;

        @include respond-to(md) {
          display: block;
        }
      }
      .InputFile__upload-icon {
        padding-top: 4px;
        padding-left: 7px;
        @include respond-to(md) {
          display: none;
        }
      }
    }
  }
}
.InputFile_error {
  label {
    span:nth-child(even) {
      border: 1px $error solid;
    }
  }
  aside {
    color: $error;
  }
}
</style>
