webpackJsonp([139,78],{1:function(e,n){e.exports=function(e,n,t,o){var c,r=e=e||{},i=typeof e["default"];"object"!==i&&"function"!==i||(c=e,r=e["default"]);var s="function"==typeof r?r.options:r;if(n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns),t&&(s._scopeId=t),o){var u=Object.create(s.computed||null);Object.keys(o).forEach(function(e){var n=o[e];u[e]=function(){return n}}),s.computed=u}return{esModule:c,exports:r,options:s}}},370:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={methods:{showConfirm:function(){this.$modal.confirm({title:"Want to delete these items?",content:"some descriptions",onOk:function(){console.log("OK")},onCancel:function(){console.log("Cancel")}})}}},e.exports=n["default"]},1167:function(e,n,t){var o=t(1)(t(370),t(1242),null,null);e.exports=o.exports},1242:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("v-button",{nativeOn:{click:function(n){e.showConfirm(n)}}},[e._v("confirmation modal dialog")])],1)},staticRenderFns:[]}}});