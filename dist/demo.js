!function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=40)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(48),o=e(14);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(4),o=e(13);t.exports=e(5)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(11),o=e(33),i=e(20),u=Object.defineProperty;n.f=e(5)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(17)("wks"),o=e(10),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(31),o=e(18);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(12);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(17)("keys"),o=e(10);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(0),o=e(8),i=e(53),u=e(3),f=function(t,n,e){var c,a,s,l=t&f.F,p=t&f.G,y=t&f.S,d=t&f.P,v=t&f.B,h=t&f.W,b=p?o:o[n]||(o[n]={}),m=b.prototype,g=p?r:y?r[n]:(r[n]||{}).prototype;p&&(e=n);for(c in e)(a=!l&&g&&void 0!==g[c])&&c in b||(s=a?g[c]:e[c],b[c]=p&&"function"!=typeof g[c]?e[c]:v&&a?i(s,r):h&&g[c]==s?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(s):d&&"function"==typeof s?i(Function.call,s):s,d&&((b.virtual||(b.virtual={}))[c]=s,t&f.R&&m&&!m[c]&&u(m,c,s)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,e){var r=e(12);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=!0},function(t,n){t.exports={}},function(t,n,e){var r=e(4).f,o=e(1),i=e(6)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){n.f=e(6)},function(t,n,e){var r=e(0),o=e(8),i=e(21),u=e(24),f=e(4).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:u.f(t)})}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(t,n,e,r){this.type="RektElement",this.tagName=t,this.props=n,this.children=e,this.key=r?String(r):void 0};n.default=r},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(t){this.type="RektText",this.text=t};n.default=r},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.isRektElement=function(t){return t&&"RektElement"===t.type},n.isRektText=function(t){return t&&"RektText"===t.type}},function(t,n,e){var r=e(14);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(1),o=e(2),i=e(49)(!1),u=e(16)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=u&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~i(a,e)||a.push(e));return a}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){t.exports=!e(5)&&!e(9)(function(){return 7!=Object.defineProperty(e(34)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(12),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){"use strict";var r=e(21),o=e(19),i=e(36),u=e(3),f=e(1),c=e(22),a=e(60),s=e(23),l=e(63),p=e(6)("iterator"),y=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,n,e,v,h,b,m){a(e,n,v);var g,x,O,_=function(t){if(!y&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",S="values"==h,j=!1,k=t.prototype,E=k[p]||k["@@iterator"]||h&&k[h],P=E||_(h),M=h?S?_("entries"):P:void 0,R="Array"==n?k.entries||E:E;if(R&&(O=l(R.call(new t)))!==Object.prototype&&(s(O,w,!0),r||f(O,p)||u(O,p,d)),S&&E&&"values"!==E.name&&(j=!0,P=function(){return E.call(this)}),r&&!m||!y&&!j&&k[p]||u(k,p,P),c[n]=P,c[w]=d,h)if(g={values:S?P:_("values"),keys:b?P:_("keys"),entries:M},m)for(x in g)x in k||i(k,x,g[x]);else o(o.P+o.F*(y||j),n,g);return g}},function(t,n,e){t.exports=e(3)},function(t,n,e){var r=e(11),o=e(61),i=e(18),u=e(16)("IE_PROTO"),f=function(){},c=function(){var t,n=e(34)("iframe"),r=i.length;for(n.style.display="none",e(62).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(f.prototype=r(t),e=new f,f.prototype=null,e[u]=t):e=c(),void 0===n?e:o(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(31),o=e(18).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){t.exports=e(41)},function(t,n,e){"use strict";var r=e(42),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=o.default.RektScript,u=o.default.RektDOM,f=i("div",{className:"container"},i("h1",{},"Rekt"),i("p",{},"This page is built using an incomplete imitation of React called Rekt!"),i("h2",{},"Things I'm working on:"),i("ul",{},i("li",{},"Writing (read, stealing) a simple diff algorithm")),i("h2",{},"Things I still need to complete:"),i("ul",{},i("li",{},"Write a function that applies diffs to the actual DOM"),i("li",{},"Write (or steal) a JSX parser"),i("li",{},"Figure out a way to handle event listeners"),i("li",{},"Write out the life cycle of a component")),i("h3",{style:{color:"pink"}},"#getRekt"));u.render(f,document.getElementById("app"))},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(43),i=r(o),u=e(44),f=r(u),c=e(27),a=r(c),s=e(28),l=r(s);n.default={RektScript:i.default,RektDOM:f.default,RektElement:a.default,RektText:l.default}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(27),i=r(o),u=e(28),f=r(u),c=e(29),a=function t(n){return n.map(function(n){if("string"==typeof n)return new f.default(n);if("number"==typeof n)return new f.default(String(n));if((0,c.isRektText)(n)||(0,c.isRektElement)(n))return n;if(Array.isArray(n))return t(n);throw new Error("Child is not of a valid type")})},s=function(t,n){for(var e=arguments.length,r=Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];var u=n;return u.hasOwnProperty("key")&&(u.key=void 0),new i.default(t,u,a(r),n.key)};n.default=s},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(45),i=r(o),u=e(55),f=r(u),c=e(29),a=function(t){return"number"==typeof t||"string"==typeof t},s=function(t){return t&&"object"===(void 0===t?"undefined":(0,f.default)(t))&&!1===Array.isArray(t)},l=function(t,n){(0,i.default)(n).forEach(function(e){var r=n[e];throw"function"==typeof r&&e.startsWith("on")?t.addEventListener(e.substring(2),r):s(r)?(0,i.default)(r).forEach(function(n){t[e][n]=r[n]}):a(r)&&(t[e]=r),new Error("Invalid prop")})},p={createElement:function(t){if((0,c.isRektText)(t))return document.createTextNode(t.text);var n=document.createElement(t.tagName);return l(n,t.props),t.children.map(p.createElement).forEach(n.appendChild.bind(n)),n},render:function(t,n){n.appendChild(p.createElement(t))}};n.default=p},function(t,n,e){t.exports={default:e(46),__esModule:!0}},function(t,n,e){e(47),t.exports=e(8).Object.keys},function(t,n,e){var r=e(30),o=e(7);e(52)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){var r=e(32);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(2),o=e(50),i=e(51);t.exports=function(t){return function(n,e,u){var f,c=r(n),a=o(c.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((f=c[s++])!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(15),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(15),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(19),o=e(8),i=e(9);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){var r=e(54);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(56),i=r(o),u=e(68),f=r(u),c="function"==typeof f.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":typeof t};n.default="function"==typeof f.default&&"symbol"===c(i.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":void 0===t?"undefined":c(t)}},function(t,n,e){t.exports={default:e(57),__esModule:!0}},function(t,n,e){e(58),e(64),t.exports=e(24).f("iterator")},function(t,n,e){"use strict";var r=e(59)(!0);e(35)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(15),o=e(14);t.exports=function(t){return function(n,e){var i,u,f=String(o(n)),c=r(e),a=f.length;return c<0||c>=a?t?"":void 0:(i=f.charCodeAt(c),i<55296||i>56319||c+1===a||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){"use strict";var r=e(37),o=e(13),i=e(23),u={};e(3)(u,e(6)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(4),o=e(11),i=e(7);t.exports=e(5)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),f=u.length,c=0;f>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){t.exports=e(0).document&&document.documentElement},function(t,n,e){var r=e(1),o=e(30),i=e(16)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){e(65);for(var r=e(0),o=e(3),i=e(22),u=e(6)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,n,e){"use strict";var r=e(66),o=e(67),i=e(22),u=e(2);t.exports=e(35)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){t.exports={default:e(69),__esModule:!0}},function(t,n,e){e(70),e(77),e(78),e(79),t.exports=e(8).Symbol},function(t,n,e){"use strict";var r=e(0),o=e(1),i=e(5),u=e(19),f=e(36),c=e(71).KEY,a=e(9),s=e(17),l=e(23),p=e(10),y=e(6),d=e(24),v=e(25),h=e(72),b=e(73),m=e(74),g=e(11),x=e(2),O=e(20),_=e(13),w=e(37),S=e(75),j=e(76),k=e(4),E=e(7),P=j.f,M=k.f,R=S.f,T=r.Symbol,A=r.JSON,N=A&&A.stringify,F=y("_hidden"),I=y("toPrimitive"),C={}.propertyIsEnumerable,W=s("symbol-registry"),D=s("symbols"),L=s("op-symbols"),J=Object.prototype,B="function"==typeof T,G=r.QObject,K=!G||!G.prototype||!G.prototype.findChild,z=i&&a(function(){return 7!=w(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=P(J,n);r&&delete J[n],M(t,n,e),r&&t!==J&&M(J,n,r)}:M,Y=function(t){var n=D[t]=w(T.prototype);return n._k=t,n},Q=B&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},U=function(t,n,e){return t===J&&U(L,n,e),g(t),n=O(n,!0),g(e),o(D,n)?(e.enumerable?(o(t,F)&&t[F][n]&&(t[F][n]=!1),e=w(e,{enumerable:_(0,!1)})):(o(t,F)||M(t,F,_(1,{})),t[F][n]=!0),z(t,n,e)):M(t,n,e)},X=function(t,n){g(t);for(var e,r=b(n=x(n)),o=0,i=r.length;i>o;)U(t,e=r[o++],n[e]);return t},q=function(t,n){return void 0===n?w(t):X(w(t),n)},H=function(t){var n=C.call(this,t=O(t,!0));return!(this===J&&o(D,t)&&!o(L,t))&&(!(n||!o(this,t)||!o(D,t)||o(this,F)&&this[F][t])||n)},V=function(t,n){if(t=x(t),n=O(n,!0),t!==J||!o(D,n)||o(L,n)){var e=P(t,n);return!e||!o(D,n)||o(t,F)&&t[F][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=R(x(t)),r=[],i=0;e.length>i;)o(D,n=e[i++])||n==F||n==c||r.push(n);return r},$=function(t){for(var n,e=t===J,r=R(e?L:x(t)),i=[],u=0;r.length>u;)!o(D,n=r[u++])||e&&!o(J,n)||i.push(D[n]);return i};B||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===J&&n.call(L,e),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),z(this,t,_(1,e))};return i&&K&&z(J,t,{configurable:!0,set:n}),Y(t)},f(T.prototype,"toString",function(){return this._k}),j.f=V,k.f=U,e(39).f=S.f=Z,e(26).f=H,e(38).f=$,i&&!e(21)&&f(J,"propertyIsEnumerable",H,!0),d.f=function(t){return Y(y(t))}),u(u.G+u.W+u.F*!B,{Symbol:T});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;tt.length>nt;)y(tt[nt++]);for(var tt=E(y.store),nt=0;tt.length>nt;)v(tt[nt++]);u(u.S+u.F*!B,"Symbol",{for:function(t){return o(W,t+="")?W[t]:W[t]=T(t)},keyFor:function(t){if(Q(t))return h(W,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){K=!0},useSimple:function(){K=!1}}),u(u.S+u.F*!B,"Object",{create:q,defineProperty:U,defineProperties:X,getOwnPropertyDescriptor:V,getOwnPropertyNames:Z,getOwnPropertySymbols:$}),A&&u(u.S+u.F*(!B||a(function(){var t=T();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!Q(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&m(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!Q(n))return n}),r[1]=n,N.apply(A,r)}}}),T.prototype[I]||e(3)(T.prototype,I,T.prototype.valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){var r=e(10)("meta"),o=e(12),i=e(1),u=e(4).f,f=0,c=Object.isExtensible||function(){return!0},a=!e(9)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},y=function(t){return a&&d.NEED&&c(t)&&!i(t,r)&&s(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:y}},function(t,n,e){var r=e(7),o=e(2);t.exports=function(t,n){for(var e,i=o(t),u=r(i),f=u.length,c=0;f>c;)if(i[e=u[c++]]===n)return e}},function(t,n,e){var r=e(7),o=e(38),i=e(26);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,f=e(t),c=i.f,a=0;f.length>a;)c.call(t,u=f[a++])&&n.push(u);return n}},function(t,n,e){var r=e(32);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(2),o=e(39).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?f(t):o(r(t))}},function(t,n,e){var r=e(26),o=e(13),i=e(2),u=e(20),f=e(1),c=e(33),a=Object.getOwnPropertyDescriptor;n.f=e(5)?a:function(t,n){if(t=i(t),n=u(n,!0),c)try{return a(t,n)}catch(t){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n){},function(t,n,e){e(25)("asyncIterator")},function(t,n,e){e(25)("observable")}]);