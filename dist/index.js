!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(){var t=document.createElement("div");return t.setAttribute("id","material-dialog"),t.appendChild(document.createElement("h2")),t.firstChild.classList.add("title"),t.appendChild(document.createElement("div")),t.lastChild.classList.add("body"),t.appendChild(document.createElement("div")),t.lastChild.classList.add("actions"),t}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();n(1);var a=document.getElementById("material-dialog-background"),s=null;a||(a=document.createElement("div"),a.setAttribute("id","material-dialog-background"),document.body.appendChild(a)),a.addEventListener("click",function(t){t.preventDefault(),s&&s.closeFromBackground()});var l=function(){function t(e){return o(this,t),this.title=e.title||null,this.body=e.body||null,this.size=e.size||"small",this.actions=e.actions||[],this.dismissable=void 0===e.dismissable||e.dismissable,this.modalDom=i(),this.prepareModal(),this}return r(t,[{key:"undismissable",value:function(){return this.dismissable=!1,this}},{key:"prepareModal",value:function(){var t=this;this.modalDom.classList.add(this.size),this.modalDom.firstChild.innerHTML=this.title,this.modalDom.childNodes[1].innerHTML=this.body;var e=!0,n=!1,o=void 0;try{for(var i,r=this.actions[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var a=i.value;!function(e){var n=document.createElement("button");if(n.innerHTML=e.text,e.action){var o=t;n.addEventListener("click",function(t){t.preventDefault(),e.action(o)})}t.modalDom.lastChild.appendChild(n)}(a)}}catch(t){n=!0,o=t}finally{try{!e&&r.return&&r.return()}finally{if(n)throw o}}}},{key:"closeFromBackground",value:function(){this.dismissable&&this.close()}},{key:"close",value:function(){this.modalDom.classList.remove("opened");var t=this.modalDom;setTimeout(function(){a.classList.remove("opened"),document.body.classList.remove("no-scroll"),document.body.removeChild(t),setTimeout(function(){s=null},200)},200)}},{key:"show",value:function(){var t=this;return s?void console.log("there is another active modal!"):(a.classList.add("opened"),document.body.appendChild(this.modalDom),document.body.classList.add("no-scroll"),this.modalDom.classList.add("closed"),this.modalDom.classList.remove("closed"),setTimeout(function(){t.modalDom.classList.add("opened")},100),this.title||this.modalDom.removeChild(this.modalDom.childNodes[0]),this.actions.length||this.modalDom.removeChild(this.modalDom.childNodes[this.title?2:1]),s=this,this)}}]),t}();window.Dialog=l,e.default=l},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]);var i={};i.transform=void 0;n(4)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),e.push([t.i,"body.no-scroll{overflow:hidden}#material-dialog-background{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.4);opacity:0;visibility:hidden;transition-property:opacity,visibility;transition-duration:.2s;transition-timing-function:ease-in}#material-dialog-background.opened{opacity:1;z-index:99999998;visibility:visible}#material-dialog{font-family:Roboto,sans-serif;position:fixed;left:0;right:0;margin:auto;top:50%;padding:24px;transform:translateY(-40%);background-color:#fff;border-radius:2px;z-index:99999999;box-shadow:0 10px 15px rgba(0,0,0,.25);opacity:0;visibility:hidden;transition-property:visibility,opacity,transform;transition-duration:.2s;transition-timing-function:ease}#material-dialog.opened{transform:translateY(-50%);opacity:1;visibility:visible}#material-dialog.small{width:500px}#material-dialog.medium{width:800px}#material-dialog.large{width:1024px}#material-dialog h1,#material-dialog h2,#material-dialog h3,#material-dialog h4{margin:0}#material-dialog .title{font-size:15pt;margin-bottom:20px}#material-dialog .body{font-size:13pt;color:#646464}#material-dialog .actions{margin-top:24px;text-align:right}#material-dialog .actions button{border:none;background-color:transparent;margin-left:8px;height:36px;border-radius:2px;padding-left:8px;padding-right:8x;color:#6464fa;text-transform:uppercase;font-weight:700;cursor:pointer;min-width:64px}#material-dialog .actions button:active,#material-dialog .actions button:hover{background-color:hsla(0,0%,71%,.4)}",""])},function(t,e){function n(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=o(i);return[n].concat(i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"})).concat([r]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=m[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(c(o.parts[r],e))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(c(o.parts[r],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function i(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],a=e.base?r[0]+e.base:r[0],s=r[1],l=r[2],d=r[3],c={css:s,media:l,sourceMap:d};o[a]?o[a].parts.push(c):n.push(o[a]={id:a,parts:[c]})}return n}function r(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=y[y.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",d(e,t.attrs),r(t,e),e}function l(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",d(e,t.attrs),r(t,e),e}function d(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function c(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var d=b++;n=g||(g=s(e)),o=u.bind(null,n,d,!1),i=u.bind(null,n,d,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),o=p.bind(null,n,e),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=f.bind(null,n),i=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}function u(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function f(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=x(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},h=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,b=0,y=[],x=n(5);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=i(t,e);return o(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var s=n[a],l=m[s.id];l.refs--,r.push(l)}if(t){o(i(t,e),e)}for(var a=0;a<r.length;a++){var l=r[a];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete m[l.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i))return t;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},function(t,e,n){"use strict";function o(){new s.default({title:"Use Google's location service?",body:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",size:"small",actions:[{text:"Disagree",action:function(t){t.close()}},{text:"Agree"}],dismissable:!1}).show()}function i(){new s.default({title:"Use Google's location service?",body:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",size:"medium"}).show()}function r(){new s.default({title:"Use Google's location service?",body:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",size:"large"}).show()}var a=n(0),s=function(t){return t&&t.__esModule?t:{default:t}}(a),l=document.getElementById("small-button"),d=document.getElementById("medium-button"),c=document.getElementById("large-button");l.addEventListener("click",o),d.addEventListener("click",i),c.addEventListener("click",r),o()}]);