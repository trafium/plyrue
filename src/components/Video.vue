<template>
  <video v-bind="videoAttributes">
    <slot></slot>
    <template v-if="sources">
      <source v-for="source in sources" :key="source.src" v-bind="source">
    </template>
    <template v-if="captions">
      <track
        v-for="caption in captions"
        :key="caption.label"
        v-bind="caption"
        kind="captions"
        default>
    </template>
  </video>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    sources: {
      type: Array,
      default: () => []
    },
    captions: {
      type: Array,
      default: () => []
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    crossorigin: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: false
    },
    muted: {
      type: Boolean,
      default: false
    },
    preload: {
      type: String,
      default: 'none'
    },
    playsinline: {
      type: Boolean,
      default: false
    },
    poster: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    }
  },
  computed: {
    videoAttributes() {
      const attributes = { ...this.$props };
      delete attributes.sources;
      delete attributes.captions;
      return attributes;
    }
  }
};
</script>
