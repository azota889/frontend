(()=>{"use strict";var e,g={},v={};function r(e){var f=v[e];if(void 0!==f)return f.exports;var t=v[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,e=[],r.O=(f,t,n,d)=>{if(!t){var a=1/0;for(o=0;o<e.length;o++){for(var[t,n,d]=e[o],l=!0,c=0;c<t.length;c++)(!1&d||a>=d)&&Object.keys(r.O).every(p=>r.O[p](t[c]))?t.splice(c--,1):(l=!1,d<a&&(a=d));if(l){e.splice(o--,1);var b=n();void 0!==b&&(f=b)}}return f}d=d||0;for(var o=e.length;o>0&&e[o-1][2]>d;o--)e[o]=e[o-1];e[o]=[t,n,d]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},(()=>{var f,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,n){if(1&n&&(t=this(t)),8&n||"object"==typeof t&&t&&(4&n&&t.__esModule||16&n&&"function"==typeof t.then))return t;var d=Object.create(null);r.r(d);var o={};f=f||[null,e({}),e([]),e(e)];for(var a=2&n&&t;"object"==typeof a&&!~f.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(l=>o[l]=()=>t[l]);return o.default=()=>t,r.d(d,o),d}})(),r.d=(e,f)=>{for(var t in f)r.o(f,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:f[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((f,t)=>(r.f[t](e,f),f),[])),r.u=e=>(592===e?"common":e)+"."+{6:"1e7ca4becfeb4c0c",117:"706fa22792390fd5",144:"9767607671b13692",161:"61ce1f2342664250",176:"fa1993bfe84f8c32",201:"35beb7b9f45a92d5",221:"443526b13ac175a5",239:"87ae318a0931847f",258:"a93ad74e488de8cf",280:"f64c4af3f5d7eda9",444:"8b77c64860b05169",449:"29036b4da6d4ca5d",475:"4ab49e90b27e25a8",490:"8791c89d5fbaee35",496:"0521e2ee41bada51",505:"9b2179fe8a2f4042",506:"0463d7d147f192ea",592:"1a9641610da74db3",598:"36b082c538546253",602:"45e95e40ef501b6d",603:"c718125db2ca8240",626:"57f9c97194dc826f",649:"ea3f07f99919f4ad",735:"fe123536b5e51a24",736:"50d4b805927cac6d",778:"649be721fb298ca3",810:"fbca47c45b16dc58",852:"48ba549e04397774",898:"9d708f2dddabe6c0",920:"33591aca8a541c96"}[e]+".js",r.miniCssF=e=>{},r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="BalacoClient:";r.l=(t,n,d,o)=>{if(e[t])e[t].push(n);else{var a,l;if(void 0!==d)for(var c=document.getElementsByTagName("script"),b=0;b<c.length;b++){var i=c[b];if(i.getAttribute("src")==t||i.getAttribute("data-webpack")==f+d){a=i;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",f+d),a.src=r.tu(t)),e[t]=[n];var s=(h,p)=>{a.onerror=a.onload=null,clearTimeout(u);var _=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),_&&_.forEach(y=>y(p)),h)return h(p)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:f=>f},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend/angular/",(()=>{var e={666:0};r.f.j=(n,d)=>{var o=r.o(e,n)?e[n]:void 0;if(0!==o)if(o)d.push(o[2]);else if(666!=n){var a=new Promise((i,s)=>o=e[n]=[i,s]);d.push(o[2]=a);var l=r.p+r.u(n),c=new Error;r.l(l,i=>{if(r.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var s=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.src;c.message="Loading chunk "+n+" failed.\n("+s+": "+u+")",c.name="ChunkLoadError",c.type=s,c.request=u,o[1](c)}},"chunk-"+n,n)}else e[n]=0},r.O.j=n=>0===e[n];var f=(n,d)=>{var c,b,[o,a,l]=d,i=0;if(o.some(u=>0!==e[u])){for(c in a)r.o(a,c)&&(r.m[c]=a[c]);if(l)var s=l(r)}for(n&&n(d);i<o.length;i++)r.o(e,b=o[i])&&e[b]&&e[b][0](),e[b]=0;return r.O(s)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(f.bind(null,0)),t.push=f.bind(null,t.push.bind(t))})()})();