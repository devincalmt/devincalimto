(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1439:function(e,n,t){"use strict";t.d(n,{CR:function(){return f},XA:function(){return i},ZT:function(){return u},_T:function(){return c},ev:function(){return a},pi:function(){return o}});var r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)};function u(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var o=function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var u in n=arguments[t])Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u]);return e},o.apply(this,arguments)};function c(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var u=0;for(r=Object.getOwnPropertySymbols(e);u<r.length;u++)n.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(e,r[u])&&(t[r[u]]=e[r[u]])}return t}Object.create;function i(e){var n="function"===typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,u,o=t.call(e),c=[];try{for(;(void 0===n||n-- >0)&&!(r=o.next()).done;)c.push(r.value)}catch(i){u={error:i}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(u)throw u.error}}return c}function a(e,n,t){if(t||2===arguments.length)for(var r,u=0,o=n.length;u<o;u++)!r&&u in n||(r||(r=Array.prototype.slice.call(n,0,u)),r[u]=n[u]);return e.concat(r||Array.prototype.slice.call(n))}Object.create},1118:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(9917)}])},9917:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(5893),u=(t(6774),t(1439)),o=t(7294),c=t(4735),i=t(8868);function f(){var e=(0,o.useRef)(!1);return(0,i.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var a=t(240),l=t(6681),s=t(6316),p=function(e){var n=e.children,t=e.initial,r=e.isPresent,c=e.onExitComplete,i=e.custom,f=e.presenceAffectsLayout,p=(0,l.h)(d),y=(0,s.M)(),v=(0,o.useMemo)((function(){return{id:y,initial:t,isPresent:r,custom:i,onExitComplete:function(e){var n,t;p.set(e,!0);try{for(var r=(0,u.XA)(p.values()),o=r.next();!o.done;o=r.next()){if(!o.value)return}}catch(i){n={error:i}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(n)throw n.error}}null===c||void 0===c||c()},register:function(e){return p.set(e,!1),function(){return p.delete(e)}}}}),f?void 0:[r]);return(0,o.useMemo)((function(){p.forEach((function(e,n){return p.set(n,!1)}))}),[r]),o.useEffect((function(){!r&&!p.size&&(null===c||void 0===c||c())}),[r]),o.createElement(a.O.Provider,{value:v},n)};function d(){return new Map}var y=t(5364),v=t(5411),m=function(e){return e.key||""};var h=function(e){var n=e.children,t=e.custom,r=e.initial,a=void 0===r||r,l=e.onExitComplete,s=e.exitBeforeEnter,d=e.presenceAffectsLayout,h=void 0===d||d,b=(0,u.CR)(function(){var e=f(),n=(0,u.CR)((0,o.useState)(0),2),t=n[0],r=n[1],i=(0,o.useCallback)((function(){e.current&&r(t+1)}),[t]);return[(0,o.useCallback)((function(){return c.ZP.postRender(i)}),[i]),t]}(),1),O=b[0],w=(0,o.useContext)(y.p).forceRender;w&&(O=w);var E=f(),x=function(e){var n=[];return o.Children.forEach(e,(function(e){(0,o.isValidElement)(e)&&n.push(e)})),n}(n),g=x,_=new Set,j=(0,o.useRef)(g),P=(0,o.useRef)(new Map).current,C=(0,o.useRef)(!0);if((0,i.L)((function(){C.current=!1,function(e,n){e.forEach((function(e){var t=m(e);n.set(t,e)}))}(x,P),j.current=g})),(0,v.z)((function(){C.current=!0,P.clear(),_.clear()})),C.current)return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement(p,{key:m(e),isPresent:!0,initial:!!a&&void 0,presenceAffectsLayout:h},e)})));g=(0,u.ev)([],(0,u.CR)(g),!1);for(var k=j.current.map(m),R=x.map(m),S=k.length,A=0;A<S;A++){var L=k[A];-1===R.indexOf(L)&&_.add(L)}return s&&_.size&&(g=[]),_.forEach((function(e){if(-1===R.indexOf(e)){var n=P.get(e);if(n){var r=k.indexOf(e);g.splice(r,0,o.createElement(p,{key:m(n),isPresent:!1,onExitComplete:function(){P.delete(e),_.delete(e);var n=j.current.findIndex((function(n){return n.key===e}));if(j.current.splice(n,1),!_.size){if(j.current=x,!1===E.current)return;O(),l&&l()}},custom:t,presenceAffectsLayout:h},n))}}})),g=g.map((function(e){var n=e.key;return _.has(n)?e:o.createElement(p,{key:m(e),isPresent:!0,presenceAffectsLayout:h},e)})),o.createElement(o.Fragment,null,_.size?g:g.map((function(e){return(0,o.cloneElement)(e)})))};function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){b(e,n,t[n])}))}return e}var w=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsx)(h,{exitBeforeEnter:!0,children:(0,r.jsx)(n,O({},t))})}},6774:function(){},5364:function(e,n,t){"use strict";t.d(n,{p:function(){return r}});var r=(0,t(7294).createContext)({})},240:function(e,n,t){"use strict";t.d(n,{O:function(){return r}});var r=(0,t(7294).createContext)(null)},1741:function(e,n,t){"use strict";t.d(n,{j:function(){return r}});var r="undefined"!==typeof document},6681:function(e,n,t){"use strict";t.d(n,{h:function(){return u}});var r=t(7294);function u(e){var n=(0,r.useRef)(null);return null===n.current&&(n.current=e()),n.current}},6316:function(e,n,t){"use strict";t.d(n,{M:function(){return c}});var r=t(6681),u=0,o=function(){return u++},c=function(){return(0,r.h)(o)}},8868:function(e,n,t){"use strict";t.d(n,{L:function(){return u}});var r=t(7294),u=t(1741).j?r.useLayoutEffect:r.useEffect},5411:function(e,n,t){"use strict";t.d(n,{z:function(){return u}});var r=t(7294);function u(e){return(0,r.useEffect)((function(){return function(){return e()}}),[])}},4735:function(e,n,t){"use strict";t.d(n,{qY:function(){return d},ZP:function(){return O},iW:function(){return y},$B:function(){return b}});const r=1/60*1e3,u="undefined"!==typeof performance?()=>performance.now():()=>Date.now(),o="undefined"!==typeof window?e=>window.requestAnimationFrame(e):e=>setTimeout((()=>e(u())),r);let c=!0,i=!1,f=!1;const a={delta:0,timestamp:0},l=["read","update","preRender","render","postRender"],s=l.reduce(((e,n)=>(e[n]=function(e){let n=[],t=[],r=0,u=!1,o=!1;const c=new WeakSet,i={schedule:(e,o=!1,i=!1)=>{const f=i&&u,a=f?n:t;return o&&c.add(e),-1===a.indexOf(e)&&(a.push(e),f&&u&&(r=n.length)),e},cancel:e=>{const n=t.indexOf(e);-1!==n&&t.splice(n,1),c.delete(e)},process:f=>{if(u)o=!0;else{if(u=!0,[n,t]=[t,n],t.length=0,r=n.length,r)for(let t=0;t<r;t++){const r=n[t];r(f),c.has(r)&&(i.schedule(r),e())}u=!1,o&&(o=!1,i.process(f))}}};return i}((()=>i=!0)),e)),{}),p=l.reduce(((e,n)=>{const t=s[n];return e[n]=(e,n=!1,r=!1)=>(i||h(),t.schedule(e,n,r)),e}),{}),d=l.reduce(((e,n)=>(e[n]=s[n].cancel,e)),{}),y=l.reduce(((e,n)=>(e[n]=()=>s[n].process(a),e)),{}),v=e=>s[e].process(a),m=e=>{i=!1,a.delta=c?r:Math.max(Math.min(e-a.timestamp,40),1),a.timestamp=e,f=!0,l.forEach(v),f=!1,i&&(c=!1,o(m))},h=()=>{i=!0,c=!0,f||o(m)},b=()=>a;var O=p}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1118),n(880)}));var t=e.O();_N_E=t}]);