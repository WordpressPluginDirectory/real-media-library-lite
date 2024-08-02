var devowlWp_utils;(()=>{"use strict";var t,e={282:(t,e,o)=>{o.r(e),o.d(e,{AbstractCategory:()=>st,AbstractCategoryCollection:()=>rt,AbstractPost:()=>ot,AbstractPostCollection:()=>nt,BATCH_MAX_CHUNK_SIZE:()=>v,BaseOptions:()=>n,ClientCollection:()=>tt,ClientModel:()=>et,RouteHttpVerb:()=>H,SuspenseChunkTranslation:()=>ct,addCorruptRestApi:()=>N,addCorruptRestApiLog:()=>q,applyQueryString:()=>y,batchRequest:()=>T,commonRequest:()=>z,commonUrlBuilder:()=>g,createContextFactory:()=>l,createLocalizationFactory:()=>K,createRequestFactory:()=>B,handleCorrupRestApi:()=>L,handleCorruptRestApi:()=>D,locationRestKeyValueMapPatch:()=>at,locationRestPluginGet:()=>X,nonceDeprecationPool:()=>A,obfuscatePath:()=>d,parseResult:()=>$,qs:()=>m,removeCorruptRestApi:()=>F,simpleHash:()=>h,simpleObfuscate:()=>u,sprintf:()=>V,trailingslashit:()=>r,untrailingslashit:()=>s,useChunkTranslation:()=>it,waitForValidLogin:()=>_});class n{static slugCamelCase(t){return t.replace(/-([a-z])/g,(t=>t[1].toUpperCase()))}static getPureSlug(t,e){return void 0===e&&(e=!1),e?n.slugCamelCase(t):t}}const s=t=>t.endsWith("/")||t.endsWith("\\")?s(t.slice(0,-1)):t,r=t=>`${s(t)}/`;var a,i=o(568),c=o(594);function l(t){const e=(0,c.createContext)(t);return{StoreContext:e,StoreProvider:o=>{let{children:n}=o;return(0,i.jsx)(e.Provider,{value:t,children:n})},useStores:()=>(0,c.useContext)(e)}}function h(t){let e=0;for(const o of t)e=(e<<5>>>0)-e+o.charCodeAt(0),e&=2147483647;return e}function u(t,e,o){const n=e.length;if(!/^[a-z0-9]+$/i.test(e))return"";let s="",r=0;const a=t.length;for(let i=0;i<a;i++)if(/[a-z]/i.test(t[i])){const a=t[i]===t[i].toUpperCase()?"A".charCodeAt(0):"a".charCodeAt(0),c=e[(i-r)%n];let l;l=isNaN(parseInt(c,10))?(c.toLowerCase().charCodeAt(0)-a)%26:parseInt(c,10),l=o?l:-l,s+=String.fromCharCode(((t.charCodeAt(i)+l-a)%26+26)%26+a)}else s+=t[i],r++;return s}function d(t,e,o){void 0===o&&(o="keep-last-part");const n=e.split("/").map(((e,n,s)=>"keep-last-part"===o&&n===s.length-1?e:u(e,t,!0)));return n.splice(n.length-1,0,`${"full"===o?1:0}${t.toString()}`),n.join("/")}!function(t){t.GET="GET",t.POST="POST",t.PUT="PUT",t.PATCH="PATCH",t.DELETE="DELETE"}(a||(a={}));var p=o(976),f=o.n(p),m=o(423),w=o(177);function y(t,e,o){return t.search=m.stringify(o?f().all([m.parse(t.search),...e]):e,!0),t}function g(t){let{location:e,params:o={},nonce:n=!0,options:i,cookieValueAsParam:c}=t;const{obfuscatePath:l}=e,{href:u}=window.location,{restPathObfuscateOffset:p}=i,f=new URL(i.restRoot,u),g=m.parse(f.search),v=g.rest_route||f.pathname,b=[];let P=e.path.replace(/:([A-Za-z0-9-_]+)/g,((t,e)=>(b.push(e),o[e])));const C={};for(const t of Object.keys(o))-1===b.indexOf(t)&&(C[t]=o[t]);c&&(C._httpCookieInvalidate=h(JSON.stringify(c.map(w.A.get))));const{search:O,pathname:T}=new URL(e.path,u);if(O){const t=m.parse(O);for(const e in t)C[e]=t[e];P=T}f.protocol=window.location.protocol;const k=r(v);let _=s(e.namespace||i.restNamespace)+P;p&&l&&(_=d(p,_,l));const E=`${k}${_}`;return g.rest_route?g.rest_route=E:f.pathname=E,n&&i.restNonce&&(g._wpnonce=i.restNonce),y(f,g),["wp-json/","rest_route="].filter((t=>f.toString().indexOf(t)>-1)).length>0&&e.method&&e.method!==a.GET&&y(f,[{_method:e.method}],!0),y(f,[i.restQuery,C],!0),f.toString()}const v=25;let b,P=[];const C=Promise.resolve();async function O(){P=P.filter((t=>{let{options:{signal:e,onQueueItemFinished:o,waitForPromise:n=C},reject:s}=t;return!(null==e?void 0:e.aborted)||(null==o||o(!1),n.then((()=>s(e.reason))),!1)}));const t=P.splice(0,v);if(0!==t.length){try{const[{options:e}]=t,{signal:o,onQueueItemFinished:n,waitForPromise:s=C}=e,{responses:r}=await z({location:{path:"/",method:a.POST,namespace:"batch/v1"},options:e,request:{requests:t.map((t=>{let{request:e}=t;return e}))},settings:{signal:o}});for(let e=0;e<r.length;e++){const{resolve:o,reject:a}=t[e],{body:i,status:c}=r[e],l=c>=200&&c<400;null==n||n(l),s.then((()=>{l?o(i):a({responseJSON:i})}))}}catch(e){for(const{reject:o,options:{onQueueItemFinished:n,waitForPromise:s=C}}of t)null==n||n(!1),s.then((()=>o(e)))}P.length>0&&O()}}function T(t,e){return new Promise(((o,n)=>{P.push({resolve:o,reject:n,request:t,options:e}),clearTimeout(b),b=setTimeout(O,100)}))}let k=!1;function _(){var t;const e=window.jQuery;return(null==(t=window.wp)?void 0:t.heartbeat)&&e?(e(document).trigger("heartbeat-tick",[{"wp-auth-check":!1},"error",null]),k||(k=!0,e(document).ajaxSend(((t,o,n)=>{let{url:s,data:r}=n;(null==s?void 0:s.endsWith("/admin-ajax.php"))&&(null==r?void 0:r.indexOf("action=heartbeat"))>-1&&e("#wp-auth-check:visible").length>0&&o.abort()}))),new Promise((t=>{const o=setInterval((()=>{0===e("#wp-auth-check:visible").length&&(clearInterval(o),t())}),100)}))):new Promise((()=>{}))}const E={},S={};async function A(t,e){if(void 0!==e){const o=S[t]||new Promise((async(o,n)=>{try{const s=await window.fetch(e,{method:"POST"});if(s.ok){const e=await s.text();t===e?n():(E[t]=e,o(e))}else n()}catch(t){n()}}));return S[t]=o,o.finally((()=>{delete S[t]})),o}{if(void 0===t)return;await Promise.all(Object.values(S));let e=t;for(;E[e]&&(e=E[e],E[e]!==t););return Promise.resolve(e)}}const R="notice-corrupt-rest-api",x="data-namespace";async function j(t,e){void 0===e&&(e=async()=>{});const o=document.getElementById(R);if(o&&window.navigator.onLine){if(o.querySelector(`li[${x}="${t}"]`))return;try{await e()}catch(e){o.style.display="block";const n=document.createElement("li");n.setAttribute(x,t),n.innerHTML=`<code>${t}</code>`,o.childNodes[1].appendChild(n),o.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}}}async function F(t){const e=document.getElementById(R);if(e){const o=e.querySelector(`li[${x}="${t}"]`);if(null==o||o.remove(),!e.childNodes[1].childNodes.length){e.style.display="none";const t=e.querySelector("textarea");t&&(t.value="")}}}function N(t,e){let{method:o}=t;o===a.GET&&(e?j(e,(()=>{throw new Error})):(window.detectCorruptRestApiFailed=(window.detectCorruptRestApiFailed||0)+1,window.dispatchEvent(new CustomEvent(R))))}function q(t){let{route:e,method:o,ms:n,response:s}=t;const r=document.querySelector(`#${R} textarea`);if(r){const t=r.value.split("\n").slice(0,9);t.unshift(`[${(new Date).toLocaleTimeString()}] [${o||"GET"}] [${n}ms] ${e}; ${null==s?void 0:s.substr(0,999)}`),r.value=t.join("\n")}}function D(t){window.detectCorruptRestApiFailed=window.detectCorruptRestApiFailed||0,window.addEventListener("pageshow",(t=>{let{persisted:e}=t;const o=document.getElementById(R);o&&e&&0===window.detectCorruptRestApiFailed&&(o.style.display="none")}));const e=async()=>{if(window.detectCorruptRestApiFailed>0)for(const e of Object.keys(t))j(e,t[e])};let o;const n=()=>{clearTimeout(o),o=setTimeout(e,1e3)};n(),window.addEventListener(R,n)}const L=D;async function $(t,e,o){if(204===e.status)return{};const n=e.clone();try{return await e.json()}catch(e){const s=await n.text();if(""===s&&[a.DELETE,a.PUT].indexOf(o)>-1)return;let r;console.warn(`The response of ${t} contains unexpected JSON, try to resolve the JSON line by line...`,{body:s});for(const t of s.split("\n"))if(t.startsWith("[")||t.startsWith("{"))try{return JSON.parse(t)}catch(t){r=t}throw r}}var I=o(919),G=o.n(I);const U="application/json;charset=utf-8";async function z(t){let{location:e,options:o,request:n,params:s,settings:r={},cookieValueAsParam:i,multipart:c=!1,sendRestNonce:l=!0,sendReferer:h,replayReason:u,allowBatchRequest:d}=t;const{href:p}=window.location,m=e.namespace||o.restNamespace,w=g({location:e,params:s,nonce:!1,options:o,cookieValueAsParam:i});["wp-json/","rest_route="].filter((t=>w.indexOf(t)>-1)).length>0&&e.method&&e.method!==a.GET?r.method=a.POST:r.method=e.method||a.GET;const v=new URL(w,p),b=-1===["HEAD","GET"].indexOf(r.method);h&&(b?Object.assign(n,{_wp_http_referer:p}):(v.searchParams.set("_wp_http_referer",p.split("?")[0]),v.searchParams.set("_wp_http_referer_b64",`${btoa(p)}-`))),!b&&n&&y(v,[n],!0);const P=v.toString();let C;b&&(c?(C=G()(n,"boolean"==typeof c?{}:c),Array.from(C.values()).filter((t=>t instanceof File)).length>0||(C=JSON.stringify(n))):C=JSON.stringify(n));const O=await A(o.restNonce),k=void 0!==O,E=f().all([r,{headers:{..."string"==typeof C?{"Content-Type":U}:{},...k&&l?{"X-WP-Nonce":O}:{},Accept:"application/json, */*;q=0.1"}}],{isMergeableObject:t=>"[object Object]"===Object.prototype.toString.call(t)});if(E.body=C,d&&e.method!==a.GET&&!(C instanceof FormData))return T({method:e.method,path:g({location:e,params:s,nonce:!1,options:{...o,restRoot:"https://a.de/wp-json"},cookieValueAsParam:i}).substring(20),body:n},{...o,signal:r.signal,..."boolean"==typeof d?{}:d});let S,R=!1;const x=()=>{R=!0};window.addEventListener("pagehide",x),window.addEventListener("beforeunload",x);const j=(new Date).getTime();let D;try{S=await window.fetch(P,E),D=(new Date).getTime()-j,F(m)}catch(t){throw D=(new Date).getTime()-j,R||(q({method:e.method,route:v.pathname,ms:D,response:`${t}`}),N(r,m)),console.error(t),t}finally{window.removeEventListener("pagehide",x),window.removeEventListener("beforeunload",x)}if(!S.ok){let t,a,i=!1;try{if(t=await $(P,S,e.method),"private_site"===t.code&&403===S.status&&k&&!l&&(i=!0,a=1),"rest_cookie_invalid_nonce"===t.code&&k){const{restRecreateNonceEndpoint:t}=o;try{i=!0,2===u?(a=4,await _()):a=2,await A(O,t)}catch(t){}}const n=S.headers.get("retry-after");n.match(/^\d+$/)&&(i=1e3*+n,a=3)}catch(t){}if(i){const t={location:e,options:o,multipart:c,params:s,request:n,sendRestNonce:!0,settings:r,replayReason:a};return"number"==typeof i?new Promise((e=>setTimeout((()=>z(t).then(e)),i))):await z(t)}q({method:e.method,route:v.pathname,ms:D,response:JSON.stringify(t)}),N(r);const h=S;throw h.responseJSON=t,h}return $(P,S,e.method)}function B(t){return{urlBuilder:e=>g({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restPathObfuscateOffset:t.restPathObfuscateOffset}}),request:e=>z({...e,options:{restNamespace:t.restNamespace,restNonce:t.restNonce,restQuery:t.restQuery,restRoot:t.restRoot,restRecreateNonceEndpoint:t.restRecreateNonceEndpoint,restPathObfuscateOffset:t.restPathObfuscateOffset}})}}const H=a;var M=o(88);const Q=wp.i18n,W=wp;var J=o.n(W);function V(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];return Q.sprintf(t,...o)}function K(t){const{wpi18nLazy:e}=window;if(e&&e[t]&&J()&&J().i18n)for(const o of e[t])J().i18n.setLocaleData(o,t);return{_n:function(e,o,n){for(var s=arguments.length,r=new Array(s>3?s-3:0),a=3;a<s;a++)r[a-3]=arguments[a];return V(Q._n(e,o,n,t),...r)},_nx:function(e,o,n,s){for(var r=arguments.length,a=new Array(r>4?r-4:0),i=4;i<r;i++)a[i-4]=arguments[i];return V(Q._nx(e,o,s,n,t),...a)},_x:function(e,o){for(var n=arguments.length,s=new Array(n>2?n-2:0),r=2;r<n;r++)s[r-2]=arguments[r];return V(Q._x(e,o,t),...s)},__:function(e){for(var o=arguments.length,n=new Array(o>1?o-1:0),s=1;s<o;s++)n[s-1]=arguments[s];return V(Q.__(e,t),...n)},_i:function(t,e){return(0,M.A)({mixedString:t,components:e})}}}const X={path:"/plugin",method:a.GET};var Y=o(670);const Z=mobx;class tt{constructor(){this.entries=new Map,this.busy=!1,this.get=(0,Z.flow)((function*(t){const{request:e,params:o,clear:n=!1}=t||{};this.busy=!0;try{const{path:t,namespace:s}=this.annotated,r=yield this.annotated.request({location:{path:t,method:a.GET,namespace:s},request:e,params:o});n&&this.entries.clear();for(const t of r){const e=this.instance(t),o=this.entries.get(e.key);o?o.data=e.data:this.entries.set(e.key,e)}}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.getSingle=(0,Z.flow)((function*(t){if(!this.annotated.singlePath)throw new Error("There is no getSingle method allowed");const{request:e,params:o}=t||{};this.busy=!0;try{const{singlePath:t,namespace:n}=this.annotated,s=yield this.annotated.request({location:{path:t,method:a.GET,namespace:n},request:e,params:o}),r=this.instance(s);this.entries.set(r.key,r)}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientCollection.annotate annoation together with this class!")}),0)}static#t=this.annotate=t=>e=>class extends e{constructor(...e){super(...e),this.annotated=t}}}(0,Y.Cg)([Z.observable],tt.prototype,"entries",void 0),(0,Y.Cg)([Z.observable],tt.prototype,"busy",void 0);class et{get key(){var t;return null==(t=this.data)?void 0:t[this.annotated.keyId]}constructor(t,e={}){this.data={},this.busy=!1,this.persist=(0,Z.flow)((function*(t,e){if(!this.annotated.create)throw new Error("There is no persist method allowed");this.busy=!0;try{const{create:{path:o,method:n},namespace:s}=this.annotated,r=yield this.annotated.request({location:{path:o,method:n||a.POST,namespace:s},request:this.transformDataForPersist(),params:t||{},...e||{}});this.fromResponse(r),(null==e?void 0:e.allowBatchRequest)||(this.collection.entries.set(this.key,this),this.afterPersist())}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.patch=(0,Z.flow)((function*(t){if(!this.annotated.patch)throw new Error("There is no patch method allowed");this.busy=!0;try{const{patch:{path:e,method:o},namespace:n}=this.annotated,s=yield this.annotated.request({location:{path:e,method:o||a.PATCH,namespace:n},request:this.transformDataForPatch(),params:{[this.annotated.keyId]:this.key,...t||{}}});this.fromResponse(s),this.afterPatch()}catch(t){throw console.log(t),t}finally{this.busy=!1}})),this.delete=(0,Z.flow)((function*(t,e){if(!this.annotated.delete)throw new Error("There is no delete method allowed");this.busy=!0;try{const{delete:{path:o,method:n},namespace:s}=this.annotated,r=yield this.annotated.request({location:{path:o,method:n||a.DELETE,namespace:s},params:{[this.annotated.keyId]:this.key,...t||{}},...e||{}});return(null==e?void 0:e.allowBatchRequest)||(this.collection.entries.delete(this.key),this.afterDelete()),r}catch(t){throw console.log(t),t}finally{this.busy=!1}})),setTimeout((()=>{this.annotated||console.error("You have not used the @ClientModel.annotate annoation together with this class!")}),0),(0,Z.runInAction)((()=>{this.collection=t,this.data=e}))}static#t=this.annotate=t=>e=>class extends e{constructor(...e){super(...e),this.annotated=t}};fromResponse(t){return(0,Z.set)(this.data,t),this}transformDataForPersist(){return this.data}transformDataForPatch(){throw new Error("If you want to use patch method, you need to implement transformDataForPatch!")}afterPersist(){}afterPatch(){}afterDelete(){}}(0,Y.Cg)([Z.observable,(0,Y.Sn)("design:type",Object)],et.prototype,"data",void 0),(0,Y.Cg)([Z.observable,(0,Y.Sn)("design:type",Object)],et.prototype,"collection",void 0),(0,Y.Cg)([Z.observable],et.prototype,"busy",void 0),(0,Y.Cg)([Z.computed,(0,Y.Sn)("design:type",Function),(0,Y.Sn)("design:paramtypes",[]),(0,Y.Sn)("design:returntype",Object)],et.prototype,"key",null);class ot extends et{transformDataForPersist(){var t,e;const o={...super.transformDataForPersist()};return o.title=null==(t=o.title)?void 0:t.rendered,o.content=null==(e=o.content)?void 0:e.rendered,delete o._links,delete o.link,o}transformDataForPatch(){return this.transformDataForPersist()}}class nt extends tt{}class st extends et{transformDataForPersist(){const t={...super.transformDataForPersist()};return delete t._links,delete t.link,t}transformDataForPatch(){return this.transformDataForPersist()}}class rt extends tt{}const at={path:"/key-value-map/:name/:key",method:a.PATCH};function it(t,e){let{chunks:o,chunksLanguageFolder:n,textDomain:s,version:r}=e;const a=o[t.split("?")[0]],i=!!a,[l,h]=(0,c.useState)(!1),u=(0,c.useCallback)((async t=>{const e=window;e.wpi18nLazy=e.wpi18nLazy||{},e.wpi18nLazy.chunkUrls=e.wpi18nLazy.chunkUrls||[];const{chunkUrls:o}=e.wpi18nLazy,a=`${n}/${s}-${t}.json`;if(i&&-1===o.indexOf(a)){o.push(a);try{const t=await window.fetch(`${a}?ver=${r}`),{locale_data:{messages:e}}=await t.json();J().i18n.setLocaleData(e,s)}catch{}}}),[n,s]);return(0,c.useEffect)((()=>{i?Promise.all(a.map(u)).then((()=>{h(!0)})):h(!0)}),[i,u]),l}const ct=t=>{let{children:e,chunkFile:o,fallback:n,options:s}=t;const r=it(o,s());return(0,i.jsx)(i.Fragment,{children:r?e:n})}},594:t=>{t.exports=React}},o={};function n(t){var s=o[t];if(void 0!==s)return s.exports;var r=o[t]={exports:{}};return e[t].call(r.exports,r,r.exports,n),r.exports}n.m=e,t=[],n.O=(e,o,s,r)=>{if(!o){var a=1/0;for(h=0;h<t.length;h++){for(var[o,s,r]=t[h],i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((t=>n.O[t](o[c])))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){t.splice(h--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var h=t.length;h>0&&t[h-1][2]>r;h--)t[h]=t[h-1];t[h]=[o,s,r]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={57:0};n.O.j=e=>0===t[e];var e=(e,o)=>{var s,r,[a,i,c]=o,l=0;if(a.some((e=>0!==t[e]))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var h=c(n)}for(e&&e(o);l<a.length;l++)r=a[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(h)},o=self.webpackChunkdevowlWp_utils=self.webpackChunkdevowlWp_utils||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var s=n.O(void 0,[26],(()=>n(282)));s=n.O(s),devowlWp_utils=s})();
//# sourceMappingURL=https://sourcemap.devowl.io/real-media-library/4.22.21/a9d1165def9311ab05bffe192c1a3396/index.js.map
