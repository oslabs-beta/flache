/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={487:e=>{var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=t},12:e=>{var t,n;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3)for(var o=e[r]<<16|e[r+1]<<8|e[r+2],i=0;i<4;i++)8*r+6*i<=8*e.length?n.push(t.charAt(o>>>6*(3-i)&63)):n.push("=");return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var n=[],r=0,o=0;r<e.length;o=++r%4)0!=o&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|t.indexOf(e.charAt(r))>>>6-2*o);return n}},e.exports=n},738:e=>{function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},483:(e,t,n)=>{e.exports=function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[a]={exports:{}};t[a][0].call(f.exports,(function(e){return o(t[a][1][e]||e)}),f,f.exports,e,t,n,r)}return n[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,r){(function(e){"use strict";var n,r,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(s),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),n=function(){u.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)n="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){s(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(s,0)};else{var c=new e.MessageChannel;c.port1.onmessage=s,n=function(){c.port2.postMessage(0)}}var f=[];function s(){var e,t;r=!0;for(var n=f.length;n;){for(t=f,f=[],e=-1;++e<n;)t[e]();n=f.length}r=!1}t.exports=function(e){1!==f.push(e)||r||n()}}).call(this,void 0!==n.g?n.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";var r=e(1);function o(){}var i={},a=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function f(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==o&&h(this,e)}function s(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function l(e,t,n){r((function(){var r;try{r=t(n)}catch(t){return i.reject(e,t)}r===e?i.reject(e,new TypeError("Cannot resolve promise with itself")):i.resolve(e,r)}))}function d(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function h(e,t){var n=!1;function r(t){n||(n=!0,i.reject(e,t))}function o(t){n||(n=!0,i.resolve(e,t))}var a=v((function(){t(o,r)}));"error"===a.status&&r(a.value)}function v(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}t.exports=f,f.prototype.catch=function(e){return this.then(null,e)},f.prototype.then=function(e,t){if("function"!=typeof e&&this.state===u||"function"!=typeof t&&this.state===a)return this;var n=new this.constructor(o);return this.state!==c?l(n,this.state===u?e:t,this.outcome):this.queue.push(new s(n,e,t)),n},s.prototype.callFulfilled=function(e){i.resolve(this.promise,e)},s.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},s.prototype.callRejected=function(e){i.reject(this.promise,e)},s.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},i.resolve=function(e,t){var n=v(d,t);if("error"===n.status)return i.reject(e,n.value);var r=n.value;if(r)h(e,r);else{e.state=u,e.outcome=t;for(var o=-1,a=e.queue.length;++o<a;)e.queue[o].callFulfilled(t)}return e},i.reject=function(e,t){e.state=a,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},f.resolve=function(e){return e instanceof this?e:i.resolve(new this(o),e)},f.reject=function(e){var t=new this(o);return i.reject(t,e)},f.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var a=new Array(n),u=0,c=-1,f=new this(o);++c<n;)s(e[c],c);return f;function s(e,o){t.resolve(e).then((function(e){a[o]=e,++u!==n||r||(r=!0,i.resolve(f,a))}),(function(e){r||(r=!0,i.reject(f,e))}))}},f.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n,r=e.length,a=!1;if(!r)return this.resolve([]);for(var u=-1,c=new this(o);++u<r;)n=e[u],t.resolve(n).then((function(e){a||(a=!0,i.resolve(c,e))}),(function(e){a||(a=!0,i.reject(c,e))}));return c}},{1:1}],3:[function(e,t,r){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(2))}).call(this,void 0!==n.g?n.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var o=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();function i(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if("TypeError"!==o.name)throw o;for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)n.append(e[r]);return n.getBlob(t.type)}}"undefined"==typeof Promise&&e(3);var a=Promise;function u(e,t){t&&e.then((function(e){t(null,e)}),(function(e){t(e)}))}function c(e,t,n){"function"==typeof t&&e.then(t),"function"==typeof n&&e.catch(n)}function f(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function s(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var l="local-forage-detect-blob-support",d=void 0,h={},v=Object.prototype.toString,y="readonly",p="readwrite";function b(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}function g(e){return"boolean"==typeof d?a.resolve(d):function(e){return new a((function(t){var n=e.transaction(l,p),r=i([""]);n.objectStore(l).put(r,"key"),n.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},n.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}(e).then((function(e){return d=e}))}function m(e){var t=h[e.name],n={};n.promise=new a((function(e,t){n.resolve=e,n.reject=t})),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then((function(){return n.promise})):t.dbReady=n.promise}function _(e){var t=h[e.name].deferredOperations.pop();if(t)return t.resolve(),t.promise}function w(e,t){var n=h[e.name].deferredOperations.pop();if(n)return n.reject(t),n.promise}function I(e,t){return new a((function(n,r){if(h[e.name]=h[e.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},e.db){if(!t)return n(e.db);m(e),e.db.close()}var i=[e.name];t&&i.push(e.version);var a=o.open.apply(o,i);t&&(a.onupgradeneeded=function(t){var n=a.result;try{n.createObjectStore(e.storeName),t.oldVersion<=1&&n.createObjectStore(l)}catch(n){if("ConstraintError"!==n.name)throw n;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),a.onerror=function(e){e.preventDefault(),r(a.error)},a.onsuccess=function(){var t=a.result;t.onversionchange=function(e){e.target.close()},n(t),_(e)}}))}function S(e){return I(e,!1)}function E(e){return I(e,!0)}function N(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||n){if(n){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function j(e){return i([b(atob(e.data))],{type:e.type})}function A(e){return e&&e.__local_forage_encoded_blob}function O(e){var t=this,n=t._initReady().then((function(){var e=h[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return c(n,e,e),n}function x(e,t,n,r){void 0===r&&(r=1);try{var o=e.db.transaction(e.storeName,t);n(null,o)}catch(o){if(r>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return a.resolve().then((function(){if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),E(e)})).then((function(){return function(e){m(e);for(var t=h[e.name],n=t.forages,r=0;r<n.length;r++){var o=n[r];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,S(e).then((function(t){return e.db=t,N(e)?E(e):t})).then((function(r){e.db=t.db=r;for(var o=0;o<n.length;o++)n[o]._dbInfo.db=r})).catch((function(t){throw w(e,t),t}))}(e).then((function(){x(e,t,n,r-1)}))})).catch(n);n(o)}}var T={_driver:"asyncStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var o=h[n.name];o||(o={forages:[],db:null,dbReady:null,deferredOperations:[]},h[n.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=O);var i=[];function u(){return a.resolve()}for(var c=0;c<o.forages.length;c++){var f=o.forages[c];f!==t&&i.push(f._initReady().catch(u))}var s=o.forages.slice(0);return a.all(i).then((function(){return n.db=o.db,S(n)})).then((function(e){return n.db=e,N(n,t._defaultConfig.version)?E(n):e})).then((function(e){n.db=o.db=e,t._dbInfo=n;for(var r=0;r<s.length;r++){var i=s[r];i!==t&&(i._dbInfo.db=n.db,i._dbInfo.version=n.version)}}))},_support:function(){try{if(!o||!o.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),iterate:function(e,t){var n=this,r=new a((function(t,r){n.ready().then((function(){x(n._dbInfo,y,(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName).openCursor(),u=1;a.onsuccess=function(){var n=a.result;if(n){var r=n.value;A(r)&&(r=j(r));var o=e(r,n.key,u++);void 0!==o?t(o):n.continue()}else t()},a.onerror=function(){r(a.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},getItem:function(e,t){var n=this;e=f(e);var r=new a((function(t,r){n.ready().then((function(){x(n._dbInfo,y,(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),A(e)&&(e=j(e)),t(e)},a.onerror=function(){r(a.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},setItem:function(e,t,n){var r=this;e=f(e);var o=new a((function(n,o){var i;r.ready().then((function(){return i=r._dbInfo,"[object Blob]"===v.call(t)?g(i.db).then((function(e){return e?t:(n=t,new a((function(e,t){var r=new FileReader;r.onerror=t,r.onloadend=function(t){var r=btoa(t.target.result||"");e({__local_forage_encoded_blob:!0,data:r,type:n.type})},r.readAsBinaryString(n)})));var n})):t})).then((function(t){x(r._dbInfo,p,(function(i,a){if(i)return o(i);try{var u=a.objectStore(r._dbInfo.storeName);null===t&&(t=void 0);var c=u.put(t,e);a.oncomplete=function(){void 0===t&&(t=null),n(t)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}}))})).catch(o)}));return u(o,n),o},removeItem:function(e,t){var n=this;e=f(e);var r=new a((function(t,r){n.ready().then((function(){x(n._dbInfo,p,(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName).delete(e);i.oncomplete=function(){t()},i.onerror=function(){r(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;r(e)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},clear:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){x(t._dbInfo,p,(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;n(e)}}catch(e){n(e)}}))})).catch(n)}));return u(n,e),n},length:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){x(t._dbInfo,y,(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){n(i.error)}}catch(e){n(e)}}))})).catch(n)}));return u(n,e),n},key:function(e,t){var n=this,r=new a((function(t,r){e<0?t(null):n.ready().then((function(){x(n._dbInfo,y,(function(o,i){if(o)return r(o);try{var a=i.objectStore(n._dbInfo.storeName),u=!1,c=a.openKeyCursor();c.onsuccess=function(){var n=c.result;n?0===e||u?t(n.key):(u=!0,n.advance(e)):t(null)},c.onerror=function(){r(c.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,t),r},keys:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){x(t._dbInfo,y,(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).openKeyCursor(),a=[];i.onsuccess=function(){var t=i.result;t?(a.push(t.key),t.continue()):e(a)},i.onerror=function(){n(i.error)}}catch(e){n(e)}}))})).catch(n)}));return u(n,e),n},dropInstance:function(e,t){t=s.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,i=this;if(e.name){var c=e.name===n.name&&i._dbInfo.db?a.resolve(i._dbInfo.db):S(e).then((function(t){var n=h[e.name],r=n.forages;n.db=t;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=t;return t}));r=e.storeName?c.then((function(t){if(t.objectStoreNames.contains(e.storeName)){var n=t.version+1;m(e);var r=h[e.name],i=r.forages;t.close();for(var u=0;u<i.length;u++){var c=i[u];c._dbInfo.db=null,c._dbInfo.version=n}var f=new a((function(t,r){var i=o.open(e.name,n);i.onerror=function(e){i.result.close(),r(e)},i.onupgradeneeded=function(){i.result.deleteObjectStore(e.storeName)},i.onsuccess=function(){var e=i.result;e.close(),t(e)}}));return f.then((function(e){r.db=e;for(var t=0;t<i.length;t++){var n=i[t];n._dbInfo.db=e,_(n._dbInfo)}})).catch((function(t){throw(w(e,t)||a.resolve()).catch((function(){})),t}))}})):c.then((function(t){m(e);var n=h[e.name],r=n.forages;t.close();for(var i=0;i<r.length;i++)r[i]._dbInfo.db=null;var u=new a((function(t,n){var r=o.deleteDatabase(e.name);r.onerror=function(){var e=r.result;e&&e.close(),n(r.error)},r.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},r.onsuccess=function(){var e=r.result;e&&e.close(),t(e)}}));return u.then((function(e){n.db=e;for(var t=0;t<r.length;t++)_(r[t]._dbInfo)})).catch((function(t){throw(w(e,t)||a.resolve()).catch((function(){})),t}))}))}else r=a.reject("Invalid arguments");return u(r,t),r}};var R="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",B=/^~~local_forage_type~([^~]+)~/,D="__lfsc__:",C=D.length,k="arbf",F="blob",L="si08",M="ui08",P="uic8",z="si16",q="si32",U="ur16",W="ui32",H="fl32",K="fl64",G=C+k.length,Q=Object.prototype.toString;function X(e){var t,n,r,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(t=0;t<u;t+=4)n=R.indexOf(e[t]),r=R.indexOf(e[t+1]),o=R.indexOf(e[t+2]),i=R.indexOf(e[t+3]),s[c++]=n<<2|r>>4,s[c++]=(15&r)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function J(e){var t,n=new Uint8Array(e),r="";for(t=0;t<n.length;t+=3)r+=R[n[t]>>2],r+=R[(3&n[t])<<4|n[t+1]>>4],r+=R[(15&n[t+1])<<2|n[t+2]>>6],r+=R[63&n[t+2]];return n.length%3==2?r=r.substring(0,r.length-1)+"=":n.length%3==1&&(r=r.substring(0,r.length-2)+"=="),r}var V={serialize:function(e,t){var n="";if(e&&(n=Q.call(e)),e&&("[object ArrayBuffer]"===n||e.buffer&&"[object ArrayBuffer]"===Q.call(e.buffer))){var r,o=D;e instanceof ArrayBuffer?(r=e,o+=k):(r=e.buffer,"[object Int8Array]"===n?o+=L:"[object Uint8Array]"===n?o+=M:"[object Uint8ClampedArray]"===n?o+=P:"[object Int16Array]"===n?o+=z:"[object Uint16Array]"===n?o+=U:"[object Int32Array]"===n?o+=q:"[object Uint32Array]"===n?o+=W:"[object Float32Array]"===n?o+=H:"[object Float64Array]"===n?o+=K:t(new Error("Failed to get type for BinaryArray"))),t(o+J(r))}else if("[object Blob]"===n){var i=new FileReader;i.onload=function(){var n="~~local_forage_type~"+e.type+"~"+J(this.result);t("__lfsc__:blob"+n)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(n){console.error("Couldn't convert value into a JSON string: ",e),t(null,n)}},deserialize:function(e){if(e.substring(0,C)!==D)return JSON.parse(e);var t,n=e.substring(G),r=e.substring(C,G);if(r===F&&B.test(n)){var o=n.match(B);t=o[1],n=n.substring(o[0].length)}var a=X(n);switch(r){case k:return a;case F:return i([a],{type:t});case L:return new Int8Array(a);case M:return new Uint8Array(a);case P:return new Uint8ClampedArray(a);case z:return new Int16Array(a);case U:return new Uint16Array(a);case q:return new Int32Array(a);case W:return new Uint32Array(a);case H:return new Float32Array(a);case K:return new Float64Array(a);default:throw new Error("Unkown type: "+r)}},stringToBuffer:X,bufferToString:J};function $(e,t,n,r){e.executeSql("CREATE TABLE IF NOT EXISTS "+t.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],n,r)}function Y(e,t,n,r,o,i){e.executeSql(n,r,o,(function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],(function(e,u){u.rows.length?i(e,a):$(e,t,(function(){e.executeSql(n,r,o,i)}),i)}),i):i(e,a)}),i)}function Z(e,t,n,r){var o=this;e=f(e);var i=new a((function(i,a){o.ready().then((function(){void 0===t&&(t=null);var u=t,c=o._dbInfo;c.serializer.serialize(t,(function(t,f){f?a(f):c.db.transaction((function(n){Y(n,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,t],(function(){i(u)}),(function(e,t){a(t)}))}),(function(t){if(t.code===t.QUOTA_ERR){if(r>0)return void i(Z.apply(o,[e,u,n,r-1]));a(t)}}))}))})).catch(a)}));return u(i,n),i}function ee(e){return new a((function(t,n){e.transaction((function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(n,r){for(var o=[],i=0;i<r.rows.length;i++)o.push(r.rows.item(i).name);t({db:e,storeNames:o})}),(function(e,t){n(t)}))}),(function(e){n(e)}))}))}var te={_driver:"webSQLStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var r in e)n[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new a((function(e,r){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(e){return r(e)}n.db.transaction((function(o){$(o,n,(function(){t._dbInfo=n,e()}),(function(e,t){r(t)}))}),r)}));return n.serializer=V,o},_support:"function"==typeof openDatabase,iterate:function(e,t){var n=this,r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){Y(n,o,"SELECT * FROM "+o.storeName,[],(function(n,r){for(var i=r.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),void 0!==(f=e(f,c.key,u+1)))return void t(f)}t()}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},getItem:function(e,t){var n=this;e=f(e);var r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){Y(n,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],(function(e,n){var r=n.rows.length?n.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},setItem:function(e,t,n){return Z.apply(this,[e,t,n,1])},removeItem:function(e,t){var n=this;e=f(e);var r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){Y(n,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],(function(){t()}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},clear:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){Y(t,r,"DELETE FROM "+r.storeName,[],(function(){e()}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n},length:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){Y(t,r,"SELECT COUNT(key) as c FROM "+r.storeName,[],(function(t,n){var r=n.rows.item(0).c;e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n},key:function(e,t){var n=this,r=new a((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){Y(n,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],(function(e,n){var r=n.rows.length?n.rows.item(0).key:null;t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return u(r,t),r},keys:function(e){var t=this,n=new a((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){Y(t,r,"SELECT key FROM "+r.storeName,[],(function(t,n){for(var r=[],o=0;o<n.rows.length;o++)r.push(n.rows.item(o).key);e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return u(n,e),n},dropInstance:function(e,t){t=s.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,o=this;return u(r=e.name?new a((function(t){var r;r=e.name===n.name?o._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?t({db:r,storeNames:[e.storeName]}):t(ee(r))})).then((function(e){return new a((function(t,n){e.db.transaction((function(r){function o(e){return new a((function(t,n){r.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){t()}),(function(e,t){n(t)}))}))}for(var i=[],u=0,c=e.storeNames.length;u<c;u++)i.push(o(e.storeNames[u]));a.all(i).then((function(){t()})).catch((function(e){n(e)}))}),(function(e){n(e)}))}))})):a.reject("Invalid arguments"),t),r}};function ne(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function re(){return!function(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(e){return!0}}()||localStorage.length>0}var oe={_driver:"localStorageWrapper",_initStorage:function(e){var t={};if(e)for(var n in e)t[n]=e[n];return t.keyPrefix=ne(e,this._defaultConfig),re()?(this._dbInfo=t,t.serializer=V,a.resolve()):a.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}(),iterate:function(e,t){var n=this,r=n.ready().then((function(){for(var t=n._dbInfo,r=t.keyPrefix,o=r.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(r)){var f=localStorage.getItem(c);if(f&&(f=t.serializer.deserialize(f)),void 0!==(f=e(f,c.substring(o),a++)))return f}}}));return u(r,t),r},getItem:function(e,t){var n=this;e=f(e);var r=n.ready().then((function(){var t=n._dbInfo,r=localStorage.getItem(t.keyPrefix+e);return r&&(r=t.serializer.deserialize(r)),r}));return u(r,t),r},setItem:function(e,t,n){var r=this;e=f(e);var o=r.ready().then((function(){void 0===t&&(t=null);var n=t;return new a((function(o,i){var a=r._dbInfo;a.serializer.serialize(t,(function(t,r){if(r)i(r);else try{localStorage.setItem(a.keyPrefix+e,t),o(n)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}}))}))}));return u(o,n),o},removeItem:function(e,t){var n=this;e=f(e);var r=n.ready().then((function(){var t=n._dbInfo;localStorage.removeItem(t.keyPrefix+e)}));return u(r,t),r},clear:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var r=localStorage.key(n);0===r.indexOf(e)&&localStorage.removeItem(r)}}));return u(n,e),n},length:function(e){var t=this.keys().then((function(e){return e.length}));return u(t,e),t},key:function(e,t){var n=this,r=n.ready().then((function(){var t,r=n._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(r.keyPrefix.length)),t}));return u(r,t),r},keys:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo,n=localStorage.length,r=[],o=0;o<n;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&r.push(i.substring(e.keyPrefix.length))}return r}));return u(n,e),n},dropInstance:function(e,t){if(t=s.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r,o=this;return r=e.name?new a((function(t){e.storeName?t(ne(e,o._defaultConfig)):t(e.name+"/")})).then((function(e){for(var t=localStorage.length-1;t>=0;t--){var n=localStorage.key(t);0===n.indexOf(e)&&localStorage.removeItem(n)}})):a.reject("Invalid arguments"),u(r,t),r}},ie=function(e,t){for(var n=e.length,r=0;r<n;){if((o=e[r])===(i=t)||"number"==typeof o&&"number"==typeof i&&isNaN(o)&&isNaN(i))return!0;r++}var o,i;return!1},ae=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},ue={},ce={},fe={INDEXEDDB:T,WEBSQL:te,LOCALSTORAGE:oe},se=[fe.INDEXEDDB._driver,fe.WEBSQL._driver,fe.LOCALSTORAGE._driver],le=["dropInstance"],de=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(le),he={description:"",driver:se.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function ve(e,t){e[t]=function(){var n=arguments;return e.ready().then((function(){return e[t].apply(e,n)}))}}function ye(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var n in t)t.hasOwnProperty(n)&&(ae(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}var pe=function(){function e(t){for(var n in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),fe)if(fe.hasOwnProperty(n)){var r=fe[n],o=r._driver;this[n]=o,ue[o]||this.defineDriver(r)}this._defaultConfig=ye({},he),this._config=ye({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":r(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,n){var r=new a((function(t,n){try{var r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void n(o);for(var i=de.concat("_initStorage"),c=0,f=i.length;c<f;c++){var s=i[c];if((!ie(le,s)||e[s])&&"function"!=typeof e[s])return void n(o)}!function(){for(var t=function(e){return function(){var t=new Error("Method "+e+" is not implemented by the current driver"),n=a.reject(t);return u(n,arguments[arguments.length-1]),n}},n=0,r=le.length;n<r;n++){var o=le[n];e[o]||(e[o]=t(o))}}();var l=function(n){ue[r]&&console.info("Redefining LocalForage driver: "+r),ue[r]=e,ce[r]=n,t()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(l,n):l(!!e._support):l(!0)}catch(e){n(e)}}));return c(r,t,n),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,n){var r=ue[e]?a.resolve(ue[e]):a.reject(new Error("Driver not found."));return c(r,t,n),r},e.prototype.getSerializer=function(e){var t=a.resolve(V);return c(t,e),t},e.prototype.ready=function(e){var t=this,n=t._driverSet.then((function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready}));return c(n,e,e),n},e.prototype.setDriver=function(e,t,n){var r=this;ae(e)||(e=[e]);var o=this._getSupportedDrivers(e);function i(){r._config.driver=r.driver()}function u(e){return r._extend(e),i(),r._ready=r._initStorage(r._config),r._ready}var f=null!==this._driverSet?this._driverSet.catch((function(){return a.resolve()})):a.resolve();return this._driverSet=f.then((function(){var e=o[0];return r._dbInfo=null,r._ready=null,r.getDriver(e).then((function(e){r._driver=e._driver,i(),r._wrapLibraryMethodsWithReady(),r._initDriver=function(e){return function(){var t=0;return function n(){for(;t<e.length;){var o=e[t];return t++,r._dbInfo=null,r._ready=null,r.getDriver(o).then(u).catch(n)}i();var c=new Error("No available storage method found.");return r._driverSet=a.reject(c),r._driverSet}()}}(o)}))})).catch((function(){i();var e=new Error("No available storage method found.");return r._driverSet=a.reject(e),r._driverSet})),c(this._driverSet,t,n),this._driverSet},e.prototype.supports=function(e){return!!ce[e]},e.prototype._extend=function(e){ye(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t=[],n=0,r=e.length;n<r;n++){var o=e[n];this.supports(o)&&t.push(o)}return t},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,t=de.length;e<t;e++)ve(this,de[e])},e.prototype.createInstance=function(t){return new e(t)},e}(),be=new pe;t.exports=be},{3:3}]},{},[4])(4)},568:(e,t,n)=>{var r,o,i,a,u;r=n(12),o=n(487).utf8,i=n(738),a=n(487).bin,(u=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?a.stringToBytes(e):o.stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var n=r.bytesToWords(e),c=8*e.length,f=1732584193,s=-271733879,l=-1732584194,d=271733878,h=0;h<n.length;h++)n[h]=16711935&(n[h]<<8|n[h]>>>24)|4278255360&(n[h]<<24|n[h]>>>8);n[c>>>5]|=128<<c%32,n[14+(c+64>>>9<<4)]=c;var v=u._ff,y=u._gg,p=u._hh,b=u._ii;for(h=0;h<n.length;h+=16){var g=f,m=s,_=l,w=d;f=v(f,s,l,d,n[h+0],7,-680876936),d=v(d,f,s,l,n[h+1],12,-389564586),l=v(l,d,f,s,n[h+2],17,606105819),s=v(s,l,d,f,n[h+3],22,-1044525330),f=v(f,s,l,d,n[h+4],7,-176418897),d=v(d,f,s,l,n[h+5],12,1200080426),l=v(l,d,f,s,n[h+6],17,-1473231341),s=v(s,l,d,f,n[h+7],22,-45705983),f=v(f,s,l,d,n[h+8],7,1770035416),d=v(d,f,s,l,n[h+9],12,-1958414417),l=v(l,d,f,s,n[h+10],17,-42063),s=v(s,l,d,f,n[h+11],22,-1990404162),f=v(f,s,l,d,n[h+12],7,1804603682),d=v(d,f,s,l,n[h+13],12,-40341101),l=v(l,d,f,s,n[h+14],17,-1502002290),f=y(f,s=v(s,l,d,f,n[h+15],22,1236535329),l,d,n[h+1],5,-165796510),d=y(d,f,s,l,n[h+6],9,-1069501632),l=y(l,d,f,s,n[h+11],14,643717713),s=y(s,l,d,f,n[h+0],20,-373897302),f=y(f,s,l,d,n[h+5],5,-701558691),d=y(d,f,s,l,n[h+10],9,38016083),l=y(l,d,f,s,n[h+15],14,-660478335),s=y(s,l,d,f,n[h+4],20,-405537848),f=y(f,s,l,d,n[h+9],5,568446438),d=y(d,f,s,l,n[h+14],9,-1019803690),l=y(l,d,f,s,n[h+3],14,-187363961),s=y(s,l,d,f,n[h+8],20,1163531501),f=y(f,s,l,d,n[h+13],5,-1444681467),d=y(d,f,s,l,n[h+2],9,-51403784),l=y(l,d,f,s,n[h+7],14,1735328473),f=p(f,s=y(s,l,d,f,n[h+12],20,-1926607734),l,d,n[h+5],4,-378558),d=p(d,f,s,l,n[h+8],11,-2022574463),l=p(l,d,f,s,n[h+11],16,1839030562),s=p(s,l,d,f,n[h+14],23,-35309556),f=p(f,s,l,d,n[h+1],4,-1530992060),d=p(d,f,s,l,n[h+4],11,1272893353),l=p(l,d,f,s,n[h+7],16,-155497632),s=p(s,l,d,f,n[h+10],23,-1094730640),f=p(f,s,l,d,n[h+13],4,681279174),d=p(d,f,s,l,n[h+0],11,-358537222),l=p(l,d,f,s,n[h+3],16,-722521979),s=p(s,l,d,f,n[h+6],23,76029189),f=p(f,s,l,d,n[h+9],4,-640364487),d=p(d,f,s,l,n[h+12],11,-421815835),l=p(l,d,f,s,n[h+15],16,530742520),f=b(f,s=p(s,l,d,f,n[h+2],23,-995338651),l,d,n[h+0],6,-198630844),d=b(d,f,s,l,n[h+7],10,1126891415),l=b(l,d,f,s,n[h+14],15,-1416354905),s=b(s,l,d,f,n[h+5],21,-57434055),f=b(f,s,l,d,n[h+12],6,1700485571),d=b(d,f,s,l,n[h+3],10,-1894986606),l=b(l,d,f,s,n[h+10],15,-1051523),s=b(s,l,d,f,n[h+1],21,-2054922799),f=b(f,s,l,d,n[h+8],6,1873313359),d=b(d,f,s,l,n[h+15],10,-30611744),l=b(l,d,f,s,n[h+6],15,-1560198380),s=b(s,l,d,f,n[h+13],21,1309151649),f=b(f,s,l,d,n[h+4],6,-145523070),d=b(d,f,s,l,n[h+11],10,-1120210379),l=b(l,d,f,s,n[h+2],15,718787259),s=b(s,l,d,f,n[h+9],21,-343485551),f=f+g>>>0,s=s+m>>>0,l=l+_>>>0,d=d+w>>>0}return r.endian([f,s,l,d])})._ff=function(e,t,n,r,o,i,a){var u=e+(t&n|~t&r)+(o>>>0)+a;return(u<<i|u>>>32-i)+t},u._gg=function(e,t,n,r,o,i,a){var u=e+(t&r|n&~r)+(o>>>0)+a;return(u<<i|u>>>32-i)+t},u._hh=function(e,t,n,r,o,i,a){var u=e+(t^n^r)+(o>>>0)+a;return(u<<i|u>>>32-i)+t},u._ii=function(e,t,n,r,o,i,a){var u=e+(n^(t|~r))+(o>>>0)+a;return(u<<i|u>>>32-i)+t},u._blocksize=16,u._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(u(e,t));return t&&t.asBytes?n:t&&t.asString?a.bytesToString(n):r.bytesToHex(n)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(483),t=n.n(e),r=n(568),o=n.n(r);fetch("url",{});const i=(e,t)=>{const n=t.method.toUpperCase();if("GET"===n)return`${n}/${e}`;if("POST"===n){if(!Object.hasOwn(t,"body"))throw new Error("Must include a body with POST request");return`${n}/${o()(JSON.stringify(t.body))}/${e}`}},a={method:"GET",mode:"cors",cache:"default",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded"},redirect:"follow",referrerPolicy:"no-referrer-when-downgrade",body:null},u={maxCapacity:null,ttl:5e3,config:{name:"httpCache",storeName:"request_response",description:"A cache for client-side http requests",driver:[t().INDEXEDDB,t().LOCALSTORAGE],version:1}};class c{constructor(e=u){this.store=t().createInstance({...u.config,...e.config}),this.details=t().createInstance({name:"cacheDetails",storeName:"requests",description:"A list of past requests",version:1}),this.ttl=e.ttl||u.ttl,this.maxCapacity=e.maxCapacity,console.log("store initiated ttl is:",this.ttl)}async getSize(){const e=await this.store.keys();return await e.length}setItem(e,t){return this.store.setItem(e,t,((e,t)=>e?e.message:`${t} added to store`))}listRequests(e=!1){}}c.prototype.flacheRequest=async function(e,t){t={...a,...t};let n=i(e,t);const r=await this.store.getItem(n).then((e=>e?this.validateCache(n,e):null)).catch((e=>e));if(!r){const r=await this.getFetchRequest(e,t);return console.log(r),r?(r.ttl=Date.now()+this.ttl,await this.store.setItem(n,r),r.data):null}return r.data},c.prototype.generateKey=i,c.prototype.validateCache=async function(e,t){return t.ttl<Date.now()?(console.log("cache miss",t.ttl),await this.store.removeItem(e),null):t},c.prototype.getFetchRequest=async function(e,t){return console.log("Fetching from Server..."),await fetch(e,t).then((e=>async function(e){try{return{type:"json",data:await e.json()}}catch(t){return console.log(t.message),async function(e){try{return{type:"text",data:await e.text()}}catch(t){return console.log(t.message),async function(e){try{return{type:"blob",data:await e.blob()}}catch(t){return console.log(t.message),async function(e){try{return{type:"buffer",data:await e.arrayBuffer()}}catch(e){return console.log(e.message),null}}(e)}}(e)}}(e)}}(e))).catch((e=>console.log("Fetch error",e.message)))}})()})();