(this["webpackJsonpportfolio-v2"]=this["webpackJsonpportfolio-v2"]||[]).push([[3],{66:function(e,t,n){"use strict";function r(e){try{return d.insertRule(e,d.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function i(){c||(t.globalHide=c=!0,window.removeEventListener("scroll",i,!0),r("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",i,!0),window.document.removeEventListener("visibilitychange",i))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=r,t.cascade=function(e,t,n,r,i){var o=Math.log(r),a=(Math.log(i)-o)/(n-t);return Math.exp(o+a*(e-t))},t.animation=function(e){if(!d)return"";var t="@keyframes "+(v+h)+"{"+e+"}",n=p[e];return n?""+v+n:(d.insertRule(t,d.cssRules.length),p[e]=h,""+v+h++)},t.hideAll=i,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var o=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},u=t.disableSsr=function(){return t.ssr=a=!1},c=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),f=(t.ie10=!1,t.collapseend=void 0),h=1,p={},d=!1,v=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(u,1500),s||(t.collapseend=f=document.createEvent("Event"),f.initEvent("collapseend",!0,!0));var y=document.createElement("style");document.head.appendChild(y),y.sheet&&y.sheet.cssRules&&y.sheet.insertRule&&(d=y.sheet,window.addEventListener("scroll",i,!0),window.addEventListener("orientationchange",i,!0),window.document.addEventListener("visibilitychange",i))}},67:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){var n=t.distance,r=t.left,i=t.right,o=t.up,a=t.down,s=t.top,u=t.bottom,c=t.big,f=t.mirror,p=t.opposite,d=(n?n.toString():0)+((r?1:0)|(i?2:0)|(s||a?4:0)|(u||o?8:0)|(f?16:0)|(p?32:0)|(e?64:0)|(c?128:0));if(h.hasOwnProperty(d))return h[d];var v=r||i||o||a||s||u,y=void 0,m=void 0;if(v){if(!f!=!(e&&p)){var w=[i,r,u,s,a,o];r=w[0],i=w[1],s=w[2],u=w[3],o=w[4],a=w[5]}var b=n||(c?"2000px":"100%");y=r?"-"+b:i?b:"0",m=a||s?"-"+b:o||u?b:"0"}return h[d]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+y+", "+m+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),h[d]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,o=(e.out,e.forever),a=e.timeout,s=e.duration,u=void 0===s?l.defaults.duration:s,f=e.delay,h=void 0===f?l.defaults.delay:f,p=e.count,d=void 0===p?l.defaults.count:p,v=r(e,["children","out","forever","timeout","duration","delay","count"]),y={make:i,duration:void 0===a?u:a,delay:h,forever:o,count:d,style:{animationFillMode:"both"},reverse:v.left};return t?(0,c.default)(v,y,y,n):y}Object.defineProperty(t,"__esModule",{value:!0});var a,s=n(13),l=n(66),u=n(68),c=(a=u)&&a.__esModule?a:{default:a},f={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},h={};o.propTypes=f,t.default=o,e.exports=t.default},68:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t,n,r){return"in"in e&&(e.when=e.in),o.default.Children.count(r)<2?o.default.createElement(a.default,i({},e,{inEffect:t,outEffect:n,children:r})):(r=o.default.Children.map(r,(function(r){return o.default.createElement(a.default,i({},e,{inEffect:t,outEffect:n,children:r}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,r):o.default.createElement("span",null,r))};var o=r(n(1)),a=r(n(69));e.exports=t.default},69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=(r=l)&&r.__esModule?r:{default:r},c=n(13),f=n(66),h=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),p={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:h.isRequired,outEffect:(0,c.oneOfType)([h,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},d={transitionGroup:c.object},v=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.isOn=void 0===e.when||!!e.when,r.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:r.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},r.savedChild=!1,r.isShown=!1,f.observerMode?r.handleObserve=r.handleObserve.bind(r):(r.revealHandler=r.makeHandler(r.reveal),r.resizeHandler=r.makeHandler(r.resize)),r.saveRef=r.saveRef.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!f.observerMode&&this.props.collapse&&window.document.dispatchEvent(f.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var r=this,i=n.forever,o=n.count,a=n.delay,s=n.duration;if(!i){this.animationEndTimeout=window.setTimeout((function(){r&&r.el&&(r.animationEndTimeout=void 0,e.call(r))}),a+(s+(t?s:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var r=n.duration+(t.cascade?n.duration:0),i=this.isOn?this.getDimensionValue():0,o=void 0,a=void 0;if(t.collapseOnly)o=n.duration/3,a=n.delay;else{var s=r>>2,l=s>>1;o=s,a=n.delay+(this.isOn?0:r-s-l),e.style.animationDuration=r-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:i,transition:"height "+o+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],r="style"in n&&n.style.animationName||void 0,i=void 0;e.collapseOnly?i={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(r=n.make),i={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:r}),className:n.className}),this.setState(e.collapse?this.collapse(i,e,n):i),t?(this.savedChild=u.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),f.ssr&&(0,f.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&f.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];f.globalHide||(0,f.hideAll)(),this&&this.el&&(e||(e=this.props),f.ssr&&(0,f.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):f.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,r=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!r||f.ssr&&!f.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):f.ssr&&(f.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return u.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):u.default.Children.toArray(e);var r=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=r.duration,s=r.reverse,l=n.length,c=2*o;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),o=c/2);var h=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":i(e))&&e?u.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,f.cascade)(s?h--:h++,0,l,o,c))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===i(this.props.children)){var e=u.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:u.default.createElement("div",null,e)}return u.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,r=t.props,i=r.style,o=r.className,s=r.children,l=this.props.disabled?o:(this.props.outEffect?f.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),c=a({},i,{opacity:1})):c=this.props.disabled?i:a({},i,this.state.style);var h=a({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:c},this.props.refProp,this.saveRef)),p=u.default.cloneElement(t,h,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?u.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):u.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,f.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,r=window.pageYOffset-t.getTop(this.el),i=Math.min(n,window.innerHeight)*(f.globalHide?e.fraction:0);return r>i-window.innerHeight&&r<n-i}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){f.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!f.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(u.default.Component);v.propTypes=p,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=d,v.displayName="RevealBase",t.default=v,e.exports=t.default},71:function(e,t,n){e.exports=n(72)},72:function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,o=Object.create(i.prototype),a=new _(r||[]);return o._invoke=function(e,t,n){var r=f;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return j()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=R(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=c(e,t,n);if("normal"===l.type){if(r=n.done?d:h,l.arg===v)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=d,n.method="throw",n.arg=l.arg)}}}(e,n,a),o}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function w(){}var b={};b[o]=function(){return this};var g=Object.getPrototypeOf,E=g&&g(g(T([])));E&&E!==n&&r.call(E,o)&&(b=E);var O=w.prototype=y.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(i,o,a,s){var l=c(e[i],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(l.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function R(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,R(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=c(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function T(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:t,done:!0}}return m.prototype=O.constructor=w,w.constructor=m,m.displayName=l(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,l(e,s,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},x(k.prototype),k.prototype[a]=function(){return this},e.AsyncIterator=k,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new k(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(O),l(O,s,"Generator"),O[o]=function(){return this},O.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=T,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},74:function(e,t,n){"use strict";var r=n(18);function i(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var o=n(28);function a(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||i(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=n(29),l=n(30);function u(e){return Object(s.a)(e)||i(e)||Object(o.a)(e)||Object(l.a)()}var c=n(71),f=n.n(c);function h(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(o.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw a}}}}function p(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(u){return void n(u)}s.done?t(l):Promise.resolve(l).then(r,i)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){p(o,r,i,a,s,"next",e)}function s(e){p(o,r,i,a,s,"throw",e)}a(void 0)}))}}var v=n(1),y=n.n(v),m=f.a.mark(_),w=f.a.mark(T),b=f.a.mark(j);function g(e){return E.apply(this,arguments)}function E(){return(E=d(f.a.mark((function e(t){var n,r,i,o,a,s,l=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=l.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=l[i];o=0,a=r;case 2:if(!(o<a.length)){e.next=21;break}s=a[o],e.t0=typeof s,e.next="string"===e.t0?7:"number"===e.t0?10:"function"===e.t0?13:16;break;case 7:return e.next=9,O(t,s);case 9:return e.abrupt("break",18);case 10:return e.next=12,k(s);case 12:return e.abrupt("break",18);case 13:return e.next=15,s.apply(void 0,[t].concat(r));case 15:return e.abrupt("break",18);case 16:return e.next=18,s;case 18:o++,e.next=2;break;case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return x.apply(this,arguments)}function x(){return(x=d(f.a.mark((function e(t,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=C(t.textContent,n),e.next=3,L(t,[].concat(a(j(t.textContent,r)),a(T(n,r))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return R.apply(this,arguments)}function R(){return(R=d(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return S.apply(this,arguments)}function S(){return(S=d(f.a.mark((function e(t,n){var r,i,o,a=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.length>2&&void 0!==a[2]?a[2]:60,i=h(_(n)),e.prev=2,i.s();case 4:if((o=i.n()).done){e.next=11;break}return(0,o.value)(t),e.next=9,k(r+r*(Math.random()-.5));case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),i.e(e.t0);case 16:return e.prev=16,i.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,13,16,19]])})))).apply(this,arguments)}function _(e){var t,n,r;return f.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=h(e),i.prev=1,r=f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.value,e.next=3,function(e){return requestAnimationFrame((function(){return e.textContent=t}))};case 3:case"end":return e.stop()}}),e)})),t.s();case 4:if((n=t.n()).done){i.next=8;break}return i.delegateYield(r(),"t0",6);case 6:i.next=4;break;case 8:i.next=13;break;case 10:i.prev=10,i.t1=i.catch(1),t.e(i.t1);case 13:return i.prev=13,t.f(),i.finish(13);case 16:case"end":return i.stop()}}),m,null,[[1,10,13,16]])}function T(e){var t,n,r,i,o=arguments;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=u(e),n=t.slice(0),r=o.length>1&&void 0!==o[1]?o[1]:0,i=o.length>2&&void 0!==o[2]?o[2]:n.length;case 3:if(!(r<i)){a.next=8;break}return a.next=6,n.slice(0,++r).join("");case 6:a.next=3;break;case 8:case"end":return a.stop()}}),w)}function j(e){var t,n,r,i,o=arguments;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=u(e),n=t.slice(0),r=o.length>1&&void 0!==o[1]?o[1]:0,i=o.length>2&&void 0!==o[2]?o[2]:n.length;case 3:if(!(i>r)){a.next=8;break}return a.next=6,n.slice(0,--i).join("");case 6:a.next=3;break;case 8:case"end":return a.stop()}}),b)}function C(e,t){var n=u(t).slice(0);return[].concat(a(e),[NaN]).findIndex((function(e,t){return n[t]!==e}))}var P="styles_typicalWrapper__1_Uvh";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}('.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}');var A=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},N=Object(v.memo)((function(e){var t=e.steps,n=e.loop,r=e.className,i=e.wrapper,o=void 0===i?"p":i,a=Object(v.useRef)(null),s=o,l=[P];return r&&l.unshift(r),Object(v.useEffect)((function(){n===1/0?g.apply(void 0,[a.current].concat(A(t),[g])):"number"===typeof n?g.apply(void 0,[a.current].concat(A(Array(n).fill(t).flat()))):g.apply(void 0,[a.current].concat(A(t)))})),y.a.createElement(s,{ref:a,className:l.join(" ")})}));t.a=N}}]);
//# sourceMappingURL=3.5b0e5c4a.chunk.js.map