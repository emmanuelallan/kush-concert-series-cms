import{hM as U,g8 as ne}from"./strapi-CS4Zu_gP.js";var M={exports:{}};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Y=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;function ie(v){if(v==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(v)}function fe(){try{if(!Object.assign)return!1;var v=new String("abc");if(v[5]="de",Object.getOwnPropertyNames(v)[0]==="5")return!1;for(var g={},l=0;l<10;l++)g["_"+String.fromCharCode(l)]=l;var w=Object.getOwnPropertyNames(g).map(function(y){return g[y]});if(w.join("")!=="0123456789")return!1;var T={};return"abcdefghijklmnopqrst".split("").forEach(function(y){T[y]=y}),Object.keys(Object.assign({},T)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var oe=fe()?Object.assign:function(v,g){for(var l,w=ie(v),T,y=1;y<arguments.length;y++){l=Object(arguments[y]);for(var p in l)te.call(l,p)&&(w[p]=l[p]);if(Y){T=Y(l);for(var j=0;j<T.length;j++)ae.call(l,T[j])&&(w[T[j]]=l[T[j]])}}return w},ue="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$=ue,B=Function.call.bind(Object.prototype.hasOwnProperty),m=function(){};{var se=$,k={},ce=B;m=function(v){var g="Warning: "+v;typeof console<"u"&&console.error(g);try{throw new Error(g)}catch{}}}function D(v,g,l,w,T){for(var y in v)if(ce(v,y)){var p;try{if(typeof v[y]!="function"){var j=Error((w||"React class")+": "+l+" type `"+y+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof v[y]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw j.name="Invariant Violation",j}p=v[y](g,y,w,l,null,se)}catch(b){p=b}if(p&&!(p instanceof Error)&&m((w||"React class")+": type specification of "+l+" `"+y+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof p+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),p instanceof Error&&!(p.message in k)){k[p.message]=!0;var d=T?T():"";m("Failed "+l+" type: "+p.message+(d??""))}}}D.resetWarningCache=function(){k={}};var le=D,ve=U,ye=oe,I=$,_=B,q=le,R=function(){};R=function(v){var g="Warning: "+v;typeof console<"u"&&console.error(g);try{throw new Error(g)}catch{}};function C(){return null}var de=function(v,g){var l=typeof Symbol=="function"&&Symbol.iterator,w="@@iterator";function T(e){var r=e&&(l&&e[l]||e[w]);if(typeof r=="function")return r}var y="<<anonymous>>",p={array:E("array"),bigint:E("bigint"),bool:E("boolean"),func:E("function"),number:E("number"),object:E("object"),string:E("string"),symbol:E("symbol"),any:L(),arrayOf:J,element:z(),elementType:H(),instanceOf:X,node:Z(),objectOf:K,oneOf:G,oneOfType:Q,shape:F,exact:V};function j(e,r){return e===r?e!==0||1/e===1/r:e!==e&&r!==r}function d(e,r){this.message=e,this.data=r&&typeof r=="object"?r:{},this.stack=""}d.prototype=Error.prototype;function b(e){var r={},f=0;function a(o,t,i,u,c,s,O){if(u=u||y,s=s||i,O!==I){if(g){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}else if(typeof console<"u"){var x=u+":"+i;!r[x]&&f<3&&(R("You are manually calling a React.PropTypes validation function for the `"+s+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[x]=!0,f++)}}return t[i]==null?o?t[i]===null?new d("The "+c+" `"+s+"` is marked as required "+("in `"+u+"`, but its value is `null`.")):new d("The "+c+" `"+s+"` is marked as required in "+("`"+u+"`, but its value is `undefined`.")):null:e(t,i,u,c,s)}var n=a.bind(null,!1);return n.isRequired=a.bind(null,!0),n}function E(e){function r(f,a,n,o,t,i){var u=f[a],c=P(u);if(c!==e){var s=S(u);return new d("Invalid "+o+" `"+t+"` of type "+("`"+s+"` supplied to `"+n+"`, expected ")+("`"+e+"`."),{expectedType:e})}return null}return b(r)}function L(){return b(C)}function J(e){function r(f,a,n,o,t){if(typeof e!="function")return new d("Property `"+t+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var i=f[a];if(!Array.isArray(i)){var u=P(i);return new d("Invalid "+o+" `"+t+"` of type "+("`"+u+"` supplied to `"+n+"`, expected an array."))}for(var c=0;c<i.length;c++){var s=e(i,c,n,o,t+"["+c+"]",I);if(s instanceof Error)return s}return null}return b(r)}function z(){function e(r,f,a,n,o){var t=r[f];if(!v(t)){var i=P(t);return new d("Invalid "+n+" `"+o+"` of type "+("`"+i+"` supplied to `"+a+"`, expected a single ReactElement."))}return null}return b(e)}function H(){function e(r,f,a,n,o){var t=r[f];if(!ve.isValidElementType(t)){var i=P(t);return new d("Invalid "+n+" `"+o+"` of type "+("`"+i+"` supplied to `"+a+"`, expected a single ReactElement type."))}return null}return b(e)}function X(e){function r(f,a,n,o,t){if(!(f[a]instanceof e)){var i=e.name||y,u=re(f[a]);return new d("Invalid "+o+" `"+t+"` of type "+("`"+u+"` supplied to `"+n+"`, expected ")+("instance of `"+i+"`."))}return null}return b(r)}function G(e){if(!Array.isArray(e))return arguments.length>1?R("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):R("Invalid argument supplied to oneOf, expected an array."),C;function r(f,a,n,o,t){for(var i=f[a],u=0;u<e.length;u++)if(j(i,e[u]))return null;var c=JSON.stringify(e,function(O,h){var x=S(h);return x==="symbol"?String(h):h});return new d("Invalid "+o+" `"+t+"` of value `"+String(i)+"` "+("supplied to `"+n+"`, expected one of "+c+"."))}return b(r)}function K(e){function r(f,a,n,o,t){if(typeof e!="function")return new d("Property `"+t+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var i=f[a],u=P(i);if(u!=="object")return new d("Invalid "+o+" `"+t+"` of type "+("`"+u+"` supplied to `"+n+"`, expected an object."));for(var c in i)if(_(i,c)){var s=e(i,c,n,o,t+"."+c,I);if(s instanceof Error)return s}return null}return b(r)}function Q(e){if(!Array.isArray(e))return R("Invalid argument supplied to oneOfType, expected an instance of array."),C;for(var r=0;r<e.length;r++){var f=e[r];if(typeof f!="function")return R("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+ee(f)+" at index "+r+"."),C}function a(n,o,t,i,u){for(var c=[],s=0;s<e.length;s++){var O=e[s],h=O(n,o,t,i,u,I);if(h==null)return null;h.data&&_(h.data,"expectedType")&&c.push(h.data.expectedType)}var x=c.length>0?", expected one of type ["+c.join(", ")+"]":"";return new d("Invalid "+i+" `"+u+"` supplied to "+("`"+t+"`"+x+"."))}return b(a)}function Z(){function e(r,f,a,n,o){return A(r[f])?null:new d("Invalid "+n+" `"+o+"` supplied to "+("`"+a+"`, expected a ReactNode."))}return b(e)}function W(e,r,f,a,n){return new d((e||"React class")+": "+r+" type `"+f+"."+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+n+"`.")}function F(e){function r(f,a,n,o,t){var i=f[a],u=P(i);if(u!=="object")return new d("Invalid "+o+" `"+t+"` of type `"+u+"` "+("supplied to `"+n+"`, expected `object`."));for(var c in e){var s=e[c];if(typeof s!="function")return W(n,o,t,c,S(s));var O=s(i,c,n,o,t+"."+c,I);if(O)return O}return null}return b(r)}function V(e){function r(f,a,n,o,t){var i=f[a],u=P(i);if(u!=="object")return new d("Invalid "+o+" `"+t+"` of type `"+u+"` "+("supplied to `"+n+"`, expected `object`."));var c=ye({},f[a],e);for(var s in c){var O=e[s];if(_(e,s)&&typeof O!="function")return W(n,o,t,s,S(O));if(!O)return new d("Invalid "+o+" `"+t+"` key `"+s+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(f[a],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(e),null,"  "));var h=O(i,s,n,o,t+"."+s,I);if(h)return h}return null}return b(r)}function A(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(A);if(e===null||v(e))return!0;var r=T(e);if(r){var f=r.call(e),a;if(r!==e.entries){for(;!(a=f.next()).done;)if(!A(a.value))return!1}else for(;!(a=f.next()).done;){var n=a.value;if(n&&!A(n[1]))return!1}}else return!1;return!0;default:return!1}}function N(e,r){return e==="symbol"?!0:r?r["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&r instanceof Symbol:!1}function P(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":N(r,e)?"symbol":r}function S(e){if(typeof e>"u"||e===null)return""+e;var r=P(e);if(r==="object"){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function ee(e){var r=S(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}function re(e){return!e.constructor||!e.constructor.name?y:e.constructor.name}return p.checkPropTypes=q,p.resetWarningCache=q.resetWarningCache,p.PropTypes=p,p};{var pe=U,ge=!0;M.exports=de(pe.isElement,ge)}var be=M.exports;const Te=ne(be);export{Te as P};