(()=>{"use strict";var e,g={},h={};function r(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return g[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=g,e=[],r.O=(n,t,f,i)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,f,i]=e[c],s=!0,o=0;o<t.length;o++)(!1&i||a>=i)&&Object.keys(r.O).every(p=>r.O[p](t[o]))?t.splice(o--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var b=f();void 0!==b&&(n=b)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,f,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},(()=>{var n,e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__;r.t=function(t,f){if(1&f&&(t=this(t)),8&f||"object"==typeof t&&t&&(4&f&&t.__esModule||16&f&&"function"==typeof t.then))return t;var i=Object.create(null);r.r(i);var c={};n=n||[null,e({}),e([]),e(e)];for(var a=2&f&&t;"object"==typeof a&&!~n.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach(s=>c[s]=()=>t[s]);return c.default=()=>t,r.d(i,c),i}})(),r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{62:"e946b15c30b00f70",105:"b9ada2150d70e3d8",117:"4dd5f2730cac9acd",176:"b00dde7380ae5a1c",245:"1c3c88e3bbfc9c09",258:"7ad074656ee74eb5",280:"b7093f1fcff04293",284:"b92d8b94827e5a7c",315:"ad6fcd78e16c60ba",316:"f15b812ed2fff07a",325:"844ae5ece13b0ec4",366:"be7911a56bdbf59f",399:"b688e28d4be01d95",444:"409e548aa6ac1ccc",457:"cbaefe27e091c9ef",496:"59ec742b30494383",509:"ad8fddacfc9c3148",592:"5c54ec3bd5a6fa87",598:"0615509cd64a060f",603:"1d4f07cd37136d9f",626:"2bb54d81c99e30dc",649:"2c33ef69ec1b9391",697:"ade4051d5727af9f",735:"64367a0ed7db0d3b",736:"7021a9d697131dc5",810:"d041a50edfcf17b9",832:"ce1be3e6246df2e0",852:"f4157ed084e8f696",881:"7f3c957d2cf464d6",898:"857c828b2f17ee8b",920:"33591aca8a541c96",948:"1d0074bb99383bd2",961:"0147dd0c44243eba",991:"7f3a54da1a317302"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="BalacoClient:";r.l=(t,f,i,c)=>{if(e[t])e[t].push(f);else{var a,s;if(void 0!==i)for(var o=document.getElementsByTagName("script"),b=0;b<o.length;b++){var d=o[b];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+i),a.src=r.tu(t)),e[t]=[f];var l=(v,p)=>{a.onerror=a.onload=null,clearTimeout(u);var y=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),y&&y.forEach(_=>_(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="https://cdn.jsdelivr.net/gh/azota889/frontend/angular/",(()=>{var e={666:0};r.f.j=(f,i)=>{var c=r.o(e,f)?e[f]:void 0;if(0!==c)if(c)i.push(c[2]);else if(666!=f){var a=new Promise((d,l)=>c=e[f]=[d,l]);i.push(c[2]=a);var s=r.p+r.u(f),o=new Error;r.l(s,d=>{if(r.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var l=d&&("load"===d.type?"missing":d.type),u=d&&d.target&&d.target.src;o.message="Loading chunk "+f+" failed.\n("+l+": "+u+")",o.name="ChunkLoadError",o.type=l,o.request=u,c[1](o)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,i)=>{var o,b,[c,a,s]=i,d=0;if(c.some(u=>0!==e[u])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(s)var l=s(r)}for(f&&f(i);d<c.length;d++)r.o(e,b=c[d])&&e[b]&&e[b][0](),e[b]=0;return r.O(l)},t=self.webpackChunkBalacoClient=self.webpackChunkBalacoClient||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();