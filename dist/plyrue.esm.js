import 'plyr/dist/plyr.css';
import Plyr from 'plyr';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

//
//
//
//
//
//
//
//
//
var script = {
  inheritAttrs: false,
  props: {
    sources: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    autoplay: {
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
    src: {
      type: String,
      default: null
    }
  },
  computed: {
    attributes: function attributes() {
      var attributes = _objectSpread2({}, this.$props);

      delete attributes.sources;
      return attributes;
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('audio', _vm._b({}, 'audio', _vm.attributes, false), [_vm._t("default"), _vm._v(" "), _vm.sources ? _vm._l(_vm.sources, function (source) {
    return _c('source', _vm._b({
      key: source.src
    }, 'source', source, false));
  }) : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* component normalizer */

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "Audio.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var Audio = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__);

var script$1 = {
  render: function render() {
    return this.$scopedSlots.default({});
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = undefined;
/* component normalizer */

function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "Default.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var Default = __vue_normalize__$1({}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  inheritAttrs: false,
  props: {
    sources: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    captions: {
      type: Array,
      default: function _default() {
        return [];
      }
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
    videoAttributes: function videoAttributes() {
      var attributes = _objectSpread2({}, this.$props);

      delete attributes.sources;
      delete attributes.captions;
      return attributes;
    }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('video', _vm._b({}, 'video', _vm.videoAttributes, false), [_vm._t("default"), _vm._v(" "), _vm.sources ? _vm._l(_vm.sources, function (source) {
    return _c('source', _vm._b({
      key: source.src
    }, 'source', source, false));
  }) : _vm._e(), _vm._v(" "), _vm.captions ? _vm._l(_vm.captions, function (caption) {
    return _c('track', _vm._b({
      key: caption.label,
      attrs: {
        "kind": "captions",
        "default": ""
      }
    }, 'track', caption, false));
  }) : _vm._e()], 2);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* component normalizer */

function __vue_normalize__$2(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "Video.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var Video = __vue_normalize__$2({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2);

//
//
//
//
//
//
var YOUTUBE_VIDEO = 'https://www.youtube.com/watch?v=';
var YOUTUBE_EMBED = 'https://www.youtube.com/embed/';
var script$3 = {
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      default: null
    }
  },
  computed: {
    source: function source() {
      var src = this.src;
      /**
       * This fixes `Refused to display 'src' in a frame
       * because it set 'X-Frame-Options' to 'SAMEORIGIN'` error
       */

      if (src.includes(YOUTUBE_VIDEO)) {
        return src.replace(YOUTUBE_VIDEO, YOUTUBE_EMBED);
      }

      return src;
    }
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "plyr__video-embed"
  }, [_c('iframe', _vm._b({
    attrs: {
      "src": _vm.source
    }
  }, 'iframe', _vm.$attrs, false))]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* component normalizer */

function __vue_normalize__$3(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "VideoEmbed.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var VideoEmbed = __vue_normalize__$3({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3);

//
var script$4 = {
  name: 'plyrue',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'default'
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    poster: {
      type: String,
      default: null
    }
  },
  mounted: function mounted() {
    var _this = this;

    var $el = this.$el,
        options = this.options,
        emitPlayerEvent = this.emitPlayerEvent;
    var poster = this.poster || options.poster;
    this.player = new Plyr($el.firstChild, options);
    if (poster) this.player.poster = poster;
    this.$emit('player', this.player);
    var events = Object.keys(this.$listeners);
    events.forEach(function (event) {
      _this.player.on(event, emitPlayerEvent);
    });
  },
  beforeDestroy: function beforeDestroy() {
    try {
      this.player && this.player.destroy();
    } catch (e) {
      /**
       * Suppresing Youtube Widget API error
       * when plyrue gets destroyed in case of embed compoent
       * */
      console.warn(e.message);
    }
  },
  methods: {
    emitPlayerEvent: function emitPlayerEvent(event) {
      this.$emit(event.type, event);
    }
  },
  computed: {
    component: function component() {
      return "plyrue-".concat(this.type);
    }
  },
  components: {
    'plyrue-audio': Audio,
    'plyrue-default': Default,
    'plyrue-video': Video,
    'plyrue-embed': VideoEmbed
  }
};

/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "plyrue"
  }, [_c(_vm.component, _vm._b({
    tag: "component",
    scopedSlots: _vm._u([_vm._l(_vm.$scopedSlots, function (_, slot) {
      return {
        key: slot,
        fn: function fn(scope) {
          return [_vm._t(slot, null, null, scope)];
        }
      };
    })], null, true)
  }, 'component', _vm.$attrs, false))], 1);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = false;
/* component normalizer */

function __vue_normalize__$4(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "Plyrue.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var Plyrue = __vue_normalize__$4({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4);

var PlyruePlugin = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var name = options.name || Plyrue.name;
    Vue.component(name, Plyrue);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(PlyruePlugin);
}

export default PlyruePlugin;
export { Plyrue as PlyrueComponent, PlyruePlugin };
