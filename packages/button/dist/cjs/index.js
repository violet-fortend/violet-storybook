"use strict";function e(e,n,t,o,i,s,r,d,c,l){"boolean"!=typeof r&&(c=d,d=r,r=!1);const a="function"==typeof t?t.options:t;let f;if(e&&e.render&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns,a._compiled=!0,i&&(a.functional=!0)),o&&(a._scopeId=o),s?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=f):n&&(f=r?function(e){n.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,d(e))}),f)if(a.functional){const e=a.render;a.render=function(n,t){return f.call(t),e(n,t)}}else{const e=a.beforeCreate;a.beforeCreate=e?[].concat(e,f):[f]}return t}const n=e({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("button",{on:{click:e.handleClick}},[e._t("default")],2)])},staticRenderFns:[]},undefined,{name:"VioletButton",methods:{handleClick(e){this.$emit("click",e),e.preventDefault()}}},undefined,false,undefined,!1,void 0,void 0,void 0);n.install=e=>{e.component(n.name,n)},module.exports=n;
