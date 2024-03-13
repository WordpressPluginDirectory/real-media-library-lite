var devowlWp_realUtils;(()=>{"use strict";var t={n:e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},d:(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{RatingPointer:()=>p,isRatable:()=>o});const s=devowlWp_utils,i=()=>window[s.BaseOptions.getPureSlug("real-utils",!0)].others;function o(t){return i().canBeRated.indexOf(t)>-1}let n,r;function a(){return n||(n=(0,s.createRequestFactory)(window[s.BaseOptions.getPureSlug("real-utils",!0)]))}function l(){return r||(r=(0,s.createLocalizationFactory)("devowl-wp-real-utils"))}const u=function(){return l().__(...arguments)},c=jQuery;var d=t.n(c);const h={path:"/rating/:slug/dismiss",method:s.RouteHttpVerb.DELETE};class p{constructor(t,e,s,i){this.slug=void 0,this.$handler=void 0,this.description=void 0,this.className=void 0,this.slug=t,this.$handler=e,this.description=s,this.className=i,this.init()}close(t,e){if(t.preventDefault(),this.$handler.pointer("close"),this.$handler.pointer("destroy"),e){const t=i().rateLinks[this.slug];window.open(t,"_blank")}!function(){a().request(...arguments)}({location:h,params:{slug:this.slug,force:e}})}buttons(){const t=d()(`<a class="button" href="#">${u("Not now")}</a>`).click((t=>{this.close(t,!1)})),e=d()(`<a class="button button-primary" href="#">${u("Give it a rating")}</a>`).click((t=>{this.close(t,!0)}));return d()('<div class="real-utils-pointer-buttons" />').append(e,t)}init(){const{canBeRated:t}=i();t.splice(t.indexOf(this.slug),1);const e=u("Do us a favor!"),s=this.description||u("Awesome, you have just used a functionality of <strong>%s</strong>. Do you like it? Please do us a favor and rate us!",i().names[this.slug]);this.$handler.pointer({pointerClass:`wp-pointer real-utils-rate-pointer ${this.className?this.className:""}`,content:`<h3>${e}</h3><p>${s}</p>`,buttons:this.buttons.bind(this)}).pointer("open")}}devowlWp_realUtils=e})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-media-library/4.22.10/20592e31f751b9e360665e3fa12a2dec/helper.js.map
