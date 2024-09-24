function $E(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function HE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var l_={exports:{}},pu={},u_={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),qE=Symbol.for("react.portal"),WE=Symbol.for("react.fragment"),KE=Symbol.for("react.strict_mode"),GE=Symbol.for("react.profiler"),QE=Symbol.for("react.provider"),XE=Symbol.for("react.context"),YE=Symbol.for("react.forward_ref"),JE=Symbol.for("react.suspense"),ZE=Symbol.for("react.memo"),eT=Symbol.for("react.lazy"),Rm=Symbol.iterator;function tT(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var c_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,d_={};function cs(t,e,n){this.props=t,this.context=e,this.refs=d_,this.updater=n||c_}cs.prototype.isReactComponent={};cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function f_(){}f_.prototype=cs.prototype;function Md(t,e,n){this.props=t,this.context=e,this.refs=d_,this.updater=n||c_}var Ud=Md.prototype=new f_;Ud.constructor=Md;h_(Ud,cs.prototype);Ud.isPureReactComponent=!0;var Am=Array.isArray,p_=Object.prototype.hasOwnProperty,Fd={current:null},m_={key:!0,ref:!0,__self:!0,__source:!0};function g_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)p_.call(e,r)&&!m_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:$o,type:t,key:s,ref:o,props:i,_owner:Fd.current}}function nT(t,e){return{$$typeof:$o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===$o}function rT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function Pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rT(""+t.key):e.toString(36)}function el(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $o:case qE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pc(o,0):r,Am(i)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),el(i,e,n,"",function(c){return c})):i!=null&&(jd(i)&&(i=nT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Am(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Pc(s,l);o+=el(s,e,n,u,i)}else if(u=tT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Pc(s,l++),o+=el(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ka(t,e,n){if(t==null)return t;var r=[],i=0;return el(t,r,"","",function(s){return e.call(n,s,i++)}),r}function iT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},tl={transition:null},sT={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:tl,ReactCurrentOwner:Fd};function y_(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:ka,forEach:function(t,e,n){ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ka(t,function(){e++}),e},toArray:function(t){return ka(t,function(e){return e})||[]},only:function(t){if(!jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=cs;Z.Fragment=WE;Z.Profiler=GE;Z.PureComponent=Md;Z.StrictMode=KE;Z.Suspense=JE;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sT;Z.act=y_;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=h_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)p_.call(e,u)&&!m_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:$o,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:XE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QE,_context:t},t.Consumer=t};Z.createElement=g_;Z.createFactory=function(t){var e=g_.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:YE,render:t}};Z.isValidElement=jd;Z.lazy=function(t){return{$$typeof:eT,_payload:{_status:-1,_result:t},_init:iT}};Z.memo=function(t,e){return{$$typeof:ZE,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};Z.unstable_act=y_;Z.useCallback=function(t,e){return ut.current.useCallback(t,e)};Z.useContext=function(t){return ut.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ut.current.useEffect(t,e)};Z.useId=function(){return ut.current.useId()};Z.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ut.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};Z.useRef=function(t){return ut.current.useRef(t)};Z.useState=function(t){return ut.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ut.current.useTransition()};Z.version="18.3.1";u_.exports=Z;var V=u_.exports;const In=HE(V),oT=$E({__proto__:null,default:In},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aT=V,lT=Symbol.for("react.element"),uT=Symbol.for("react.fragment"),cT=Object.prototype.hasOwnProperty,hT=aT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dT={key:!0,ref:!0,__self:!0,__source:!0};function __(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)cT.call(e,r)&&!dT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:lT,type:t,key:s,ref:o,props:i,_owner:hT.current}}pu.Fragment=uT;pu.jsx=__;pu.jsxs=__;l_.exports=pu;var R=l_.exports,gh={},v_={exports:{}},Pt={},w_={exports:{}},E_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var J=z.length;z.push(Q);e:for(;0<J;){var _e=J-1>>>1,ae=z[_e];if(0<i(ae,Q))z[_e]=Q,z[J]=ae,J=_e;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],J=z.pop();if(J!==Q){z[0]=J;e:for(var _e=0,ae=z.length,Pe=ae>>>1;_e<Pe;){var un=2*(_e+1)-1,cn=z[un],hn=un+1,dn=z[hn];if(0>i(cn,J))hn<ae&&0>i(dn,cn)?(z[_e]=dn,z[hn]=J,_e=hn):(z[_e]=cn,z[un]=J,_e=un);else if(hn<ae&&0>i(dn,J))z[_e]=dn,z[hn]=J,_e=hn;else break e}}return Q}function i(z,Q){var J=z.sortIndex-Q.sortIndex;return J!==0?J:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,E=!1,P=!1,k=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function D(z){if(k=!1,I(z),!P)if(n(u)!==null)P=!0,ws(L);else{var Q=n(c);Q!==null&&ln(D,Q.startTime-z)}}function L(z,Q){P=!1,k&&(k=!1,v(y),y=-1),E=!0;var J=m;try{for(I(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||z&&!C());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,m=p.priorityLevel;var ae=_e(p.expirationTime<=Q);Q=t.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(u)&&r(u),I(Q)}else r(u);p=n(u)}if(p!==null)var Pe=!0;else{var un=n(c);un!==null&&ln(D,un.startTime-Q),Pe=!1}return Pe}finally{p=null,m=J,E=!1}}var M=!1,T=null,y=-1,S=5,w=-1;function C(){return!(t.unstable_now()-w<S)}function N(){if(T!==null){var z=t.unstable_now();w=z;var Q=!0;try{Q=T(!0,z)}finally{Q?A():(M=!1,T=null)}}else M=!1}var A;if(typeof _=="function")A=function(){_(N)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,Cr=ht.port2;ht.port1.onmessage=N,A=function(){Cr.postMessage(null)}}else A=function(){x(N,0)};function ws(z){T=z,M||(M=!0,A())}function ln(z,Q){y=x(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){P||E||(P=!0,ws(L))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return z()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=m;m=z;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function(z,Q,J){var _e=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?_e+J:_e):J=_e,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=J+ae,z={id:f++,callback:Q,priorityLevel:z,startTime:J,expirationTime:ae,sortIndex:-1},J>_e?(z.sortIndex=J,e(c,z),n(u)===null&&z===n(c)&&(k?(v(y),y=-1):k=!0,ln(D,J-_e))):(z.sortIndex=ae,e(u,z),P||E||(P=!0,ws(L))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var Q=m;return function(){var J=m;m=Q;try{return z.apply(this,arguments)}finally{m=J}}}})(E_);w_.exports=E_;var fT=w_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pT=V,At=fT;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T_=new Set,go={};function si(t,e){qi(t,e),qi(t+"Capture",e)}function qi(t,e){for(go[t]=e,t=0;t<e.length;t++)T_.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yh=Object.prototype.hasOwnProperty,mT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cm={},km={};function gT(t){return yh.call(km,t)?!0:yh.call(Cm,t)?!1:mT.test(t)?km[t]=!0:(Cm[t]=!0,!1)}function yT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _T(t,e,n,r){if(e===null||typeof e>"u"||yT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bd,zd);qe[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bd,zd);qe[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bd,zd);qe[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_T(e,n,i,r)&&(n=null),r||i===null?gT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var bn=pT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),Ei=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),Hd=Symbol.for("react.strict_mode"),_h=Symbol.for("react.profiler"),I_=Symbol.for("react.provider"),S_=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),vh=Symbol.for("react.suspense"),wh=Symbol.for("react.suspense_list"),Wd=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),R_=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Cc;function qs(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var kc=!1;function Nc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qs(t):""}function vT(t){switch(t.tag){case 5:return qs(t.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function Eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case Ei:return"Portal";case _h:return"Profiler";case Hd:return"StrictMode";case vh:return"Suspense";case wh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S_:return(t.displayName||"Context")+".Consumer";case I_:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wd:return e=t.displayName||null,e!==null?e:Eh(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return Eh(t(e))}catch{}}return null}function wT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eh(e);case 8:return e===Hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ET(t){var e=A_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=ET(t))}function P_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=A_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Th(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function C_(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function Ih(t,e){C_(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||Tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function Li(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Ws(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function k_(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function N_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?N_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,x_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TT=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){TT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function D_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function O_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=D_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var IT=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ph(t,e){if(e){if(IT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nh=null,Vi=null,Mi=null;function Lm(t){if(t=Wo(t)){if(typeof Nh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=vu(e),Nh(t.stateNode,t.type,e))}}function b_(t){Vi?Mi?Mi.push(t):Mi=[t]:Vi=t}function L_(){if(Vi){var t=Vi,e=Mi;if(Mi=Vi=null,Lm(t),e)for(t=0;t<e.length;t++)Lm(e[t])}}function V_(t,e){return t(e)}function M_(){}var xc=!1;function U_(t,e,n){if(xc)return t(e,n);xc=!0;try{return V_(t,e,n)}finally{xc=!1,(Vi!==null||Mi!==null)&&(M_(),L_())}}function _o(t,e){var n=t.stateNode;if(n===null)return null;var r=vu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var xh=!1;if(Pn)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){xh=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{xh=!1}function ST(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var to=!1,Il=null,Sl=!1,Dh=null,RT={onError:function(t){to=!0,Il=t}};function AT(t,e,n,r,i,s,o,l,u){to=!1,Il=null,ST.apply(RT,arguments)}function PT(t,e,n,r,i,s,o,l,u){if(AT.apply(this,arguments),to){if(to){var c=Il;to=!1,Il=null}else throw Error(j(198));Sl||(Sl=!0,Dh=c)}}function oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function F_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vm(t){if(oi(t)!==t)throw Error(j(188))}function CT(t){var e=t.alternate;if(!e){if(e=oi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vm(i),t;if(s===r)return Vm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function j_(t){return t=CT(t),t!==null?B_(t):null}function B_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=B_(t);if(e!==null)return e;t=t.sibling}return null}var z_=At.unstable_scheduleCallback,Mm=At.unstable_cancelCallback,kT=At.unstable_shouldYield,NT=At.unstable_requestPaint,Ce=At.unstable_now,xT=At.unstable_getCurrentPriorityLevel,Gd=At.unstable_ImmediatePriority,$_=At.unstable_UserBlockingPriority,Rl=At.unstable_NormalPriority,DT=At.unstable_LowPriority,H_=At.unstable_IdlePriority,mu=null,Yt=null;function OT(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:VT,bT=Math.log,LT=Math.LN2;function VT(t){return t>>>=0,t===0?32:31-(bT(t)/LT|0)|0}var Oa=64,ba=4194304;function Ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Al(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ks(l):(s&=o,s!==0&&(r=Ks(s)))}else o=n&~i,o!==0?r=Ks(o):s!==0&&(r=Ks(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function MT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=MT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function q_(){var t=Oa;return Oa<<=1,!(Oa&4194240)&&(Oa=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function FT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function W_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K_,Xd,G_,Q_,X_,bh=!1,La=[],er=null,tr=null,nr=null,vo=new Map,wo=new Map,$n=[],jT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Um(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":vo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(e.pointerId)}}function Ms(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wo(e),e!==null&&Xd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function BT(t,e,n,r,i){switch(e){case"focusin":return er=Ms(er,t,e,n,r,i),!0;case"dragenter":return tr=Ms(tr,t,e,n,r,i),!0;case"mouseover":return nr=Ms(nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vo.set(s,Ms(vo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wo.set(s,Ms(wo.get(s)||null,t,e,n,r,i)),!0}return!1}function Y_(t){var e=Mr(t.target);if(e!==null){var n=oi(e);if(n!==null){if(e=n.tag,e===13){if(e=F_(n),e!==null){t.blockedOn=e,X_(t.priority,function(){G_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kh=r,n.target.dispatchEvent(r),kh=null}else return e=Wo(n),e!==null&&Xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Fm(t,e,n){nl(t)&&n.delete(e)}function zT(){bh=!1,er!==null&&nl(er)&&(er=null),tr!==null&&nl(tr)&&(tr=null),nr!==null&&nl(nr)&&(nr=null),vo.forEach(Fm),wo.forEach(Fm)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,bh||(bh=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,zT)))}function Eo(t){function e(i){return Us(i,t)}if(0<La.length){Us(La[0],t);for(var n=1;n<La.length;n++){var r=La[n];r.blockedOn===t&&(r.blockedOn=null)}}for(er!==null&&Us(er,t),tr!==null&&Us(tr,t),nr!==null&&Us(nr,t),vo.forEach(e),wo.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)Y_(n),n.blockedOn===null&&$n.shift()}var Ui=bn.ReactCurrentBatchConfig,Pl=!0;function $T(t,e,n,r){var i=oe,s=Ui.transition;Ui.transition=null;try{oe=1,Yd(t,e,n,r)}finally{oe=i,Ui.transition=s}}function HT(t,e,n,r){var i=oe,s=Ui.transition;Ui.transition=null;try{oe=4,Yd(t,e,n,r)}finally{oe=i,Ui.transition=s}}function Yd(t,e,n,r){if(Pl){var i=Lh(t,e,n,r);if(i===null)zc(t,e,r,Cl,n),Um(t,r);else if(BT(i,t,e,n,r))r.stopPropagation();else if(Um(t,r),e&4&&-1<jT.indexOf(t)){for(;i!==null;){var s=Wo(i);if(s!==null&&K_(s),s=Lh(t,e,n,r),s===null&&zc(t,e,r,Cl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zc(t,e,r,null,n)}}var Cl=null;function Lh(t,e,n,r){if(Cl=null,t=Kd(r),t=Mr(t),t!==null)if(e=oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=F_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cl=t,null}function J_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xT()){case Gd:return 1;case $_:return 4;case Rl:case DT:return 16;case H_:return 536870912;default:return 16}default:return 16}}var Xn=null,Jd=null,rl=null;function Z_(){if(rl)return rl;var t,e=Jd,n=e.length,r,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return rl=i.slice(t,1<r?1-r:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Va(){return!0}function jm(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Va:jm,this.isPropagationStopped=jm,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zd=Ct(hs),qo=Ee({},hs,{view:0,detail:0}),qT=Ct(qo),Oc,bc,Fs,gu=Ee({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Oc=t.screenX-Fs.screenX,bc=t.screenY-Fs.screenY):bc=Oc=0,Fs=t),Oc)},movementY:function(t){return"movementY"in t?t.movementY:bc}}),Bm=Ct(gu),WT=Ee({},gu,{dataTransfer:0}),KT=Ct(WT),GT=Ee({},qo,{relatedTarget:0}),Lc=Ct(GT),QT=Ee({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),XT=Ct(QT),YT=Ee({},hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JT=Ct(YT),ZT=Ee({},hs,{data:0}),zm=Ct(ZT),eI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nI[t])?!!e[t]:!1}function ef(){return rI}var iI=Ee({},qo,{key:function(t){if(t.key){var e=eI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sI=Ct(iI),oI=Ee({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=Ct(oI),aI=Ee({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),lI=Ct(aI),uI=Ee({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),cI=Ct(uI),hI=Ee({},gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dI=Ct(hI),fI=[9,13,27,32],tf=Pn&&"CompositionEvent"in window,no=null;Pn&&"documentMode"in document&&(no=document.documentMode);var pI=Pn&&"TextEvent"in window&&!no,ev=Pn&&(!tf||no&&8<no&&11>=no),Hm=" ",qm=!1;function tv(t,e){switch(t){case"keyup":return fI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function mI(t,e){switch(t){case"compositionend":return nv(e);case"keypress":return e.which!==32?null:(qm=!0,Hm);case"textInput":return t=e.data,t===Hm&&qm?null:t;default:return null}}function gI(t,e){if(Ii)return t==="compositionend"||!tf&&tv(t,e)?(t=Z_(),rl=Jd=Xn=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ev&&e.locale!=="ko"?null:e.data;default:return null}}var yI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yI[t.type]:e==="textarea"}function rv(t,e,n,r){b_(r),e=kl(e,"onChange"),0<e.length&&(n=new Zd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ro=null,To=null;function _I(t){pv(t,0)}function yu(t){var e=Ai(t);if(P_(e))return t}function vI(t,e){if(t==="change")return e}var iv=!1;if(Pn){var Vc;if(Pn){var Mc="oninput"in document;if(!Mc){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),Mc=typeof Km.oninput=="function"}Vc=Mc}else Vc=!1;iv=Vc&&(!document.documentMode||9<document.documentMode)}function Gm(){ro&&(ro.detachEvent("onpropertychange",sv),To=ro=null)}function sv(t){if(t.propertyName==="value"&&yu(To)){var e=[];rv(e,To,t,Kd(t)),U_(_I,e)}}function wI(t,e,n){t==="focusin"?(Gm(),ro=e,To=n,ro.attachEvent("onpropertychange",sv)):t==="focusout"&&Gm()}function EI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(To)}function TI(t,e){if(t==="click")return yu(e)}function II(t,e){if(t==="input"||t==="change")return yu(e)}function SI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:SI;function Io(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yh.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xm(t,e){var n=Qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function av(){for(var t=window,e=Tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tl(t.document)}return e}function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RI(t){var e=av(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(r!==null&&nf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Xm(n,s);var o=Xm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var AI=Pn&&"documentMode"in document&&11>=document.documentMode,Si=null,Vh=null,io=null,Mh=!1;function Ym(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mh||Si==null||Si!==Tl(r)||(r=Si,"selectionStart"in r&&nf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&Io(io,r)||(io=r,r=kl(Vh,"onSelect"),0<r.length&&(e=new Zd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Si)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ri={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Uc={},lv={};Pn&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function _u(t){if(Uc[t])return Uc[t];if(!Ri[t])return t;var e=Ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lv)return Uc[t]=e[n];return t}var uv=_u("animationend"),cv=_u("animationiteration"),hv=_u("animationstart"),dv=_u("transitionend"),fv=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,e){fv.set(t,e),si(e,[t])}for(var Fc=0;Fc<Jm.length;Fc++){var jc=Jm[Fc],PI=jc.toLowerCase(),CI=jc[0].toUpperCase()+jc.slice(1);Er(PI,"on"+CI)}Er(uv,"onAnimationEnd");Er(cv,"onAnimationIteration");Er(hv,"onAnimationStart");Er("dblclick","onDoubleClick");Er("focusin","onFocus");Er("focusout","onBlur");Er(dv,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function Zm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PT(r,e,void 0,t),t.currentTarget=null}function pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Zm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Zm(i,l,c),s=u}}}if(Sl)throw t=Dh,Sl=!1,Dh=null,t}function de(t,e){var n=e[zh];n===void 0&&(n=e[zh]=new Set);var r=t+"__bubble";n.has(r)||(mv(e,t,2,!1),n.add(r))}function Bc(t,e,n){var r=0;e&&(r|=4),mv(n,t,r,e)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function So(t){if(!t[Ua]){t[Ua]=!0,T_.forEach(function(n){n!=="selectionchange"&&(kI.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ua]||(e[Ua]=!0,Bc("selectionchange",!1,e))}}function mv(t,e,n,r){switch(J_(e)){case 1:var i=$T;break;case 4:i=HT;break;default:i=Yd}n=i.bind(null,e,n,t),i=void 0,!xh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Mr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}U_(function(){var c=s,f=Kd(n),p=[];e:{var m=fv.get(t);if(m!==void 0){var E=Zd,P=t;switch(t){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":E=sI;break;case"focusin":P="focus",E=Lc;break;case"focusout":P="blur",E=Lc;break;case"beforeblur":case"afterblur":E=Lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=KT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=lI;break;case uv:case cv:case hv:E=XT;break;case dv:E=cI;break;case"scroll":E=qT;break;case"wheel":E=dI;break;case"copy":case"cut":case"paste":E=JT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=$m}var k=(e&4)!==0,x=!k&&t==="scroll",v=k?m!==null?m+"Capture":null:m;k=[];for(var _=c,I;_!==null;){I=_;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,v!==null&&(D=_o(_,v),D!=null&&k.push(Ro(_,D,I)))),x)break;_=_.return}0<k.length&&(m=new E(m,P,null,n,f),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==kh&&(P=n.relatedTarget||n.fromElement)&&(Mr(P)||P[Cn]))break e;if((E||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,E?(P=n.relatedTarget||n.toElement,E=c,P=P?Mr(P):null,P!==null&&(x=oi(P),P!==x||P.tag!==5&&P.tag!==6)&&(P=null)):(E=null,P=c),E!==P)){if(k=Bm,D="onMouseLeave",v="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(k=$m,D="onPointerLeave",v="onPointerEnter",_="pointer"),x=E==null?m:Ai(E),I=P==null?m:Ai(P),m=new k(D,_+"leave",E,n,f),m.target=x,m.relatedTarget=I,D=null,Mr(f)===c&&(k=new k(v,_+"enter",P,n,f),k.target=I,k.relatedTarget=x,D=k),x=D,E&&P)t:{for(k=E,v=P,_=0,I=k;I;I=gi(I))_++;for(I=0,D=v;D;D=gi(D))I++;for(;0<_-I;)k=gi(k),_--;for(;0<I-_;)v=gi(v),I--;for(;_--;){if(k===v||v!==null&&k===v.alternate)break t;k=gi(k),v=gi(v)}k=null}else k=null;E!==null&&eg(p,m,E,k,!1),P!==null&&x!==null&&eg(p,x,P,k,!0)}}e:{if(m=c?Ai(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var L=vI;else if(Wm(m))if(iv)L=II;else{L=EI;var M=wI}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=TI);if(L&&(L=L(t,c))){rv(p,L,n,f);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Sh(m,"number",m.value)}switch(M=c?Ai(c):window,t){case"focusin":(Wm(M)||M.contentEditable==="true")&&(Si=M,Vh=c,io=null);break;case"focusout":io=Vh=Si=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,Ym(p,n,f);break;case"selectionchange":if(AI)break;case"keydown":case"keyup":Ym(p,n,f)}var T;if(tf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ii?tv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(ev&&n.locale!=="ko"&&(Ii||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ii&&(T=Z_()):(Xn=f,Jd="value"in Xn?Xn.value:Xn.textContent,Ii=!0)),M=kl(c,y),0<M.length&&(y=new zm(y,t,null,n,f),p.push({event:y,listeners:M}),T?y.data=T:(T=nv(n),T!==null&&(y.data=T)))),(T=pI?mI(t,n):gI(t,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(f=new zm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=T))}pv(p,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=_o(t,n),s!=null&&r.unshift(Ro(t,s,i)),s=_o(t,e),s!=null&&r.push(Ro(t,s,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=_o(n,s),u!=null&&o.unshift(Ro(n,u,l))):i||(u=_o(n,s),u!=null&&o.push(Ro(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var NI=/\r\n?/g,xI=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(NI,`
`).replace(xI,"")}function Fa(t,e,n){if(e=tg(e),tg(t)!==e&&n)throw Error(j(425))}function Nl(){}var Uh=null,Fh=null;function jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bh=typeof setTimeout=="function"?setTimeout:void 0,DI=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,OI=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(t){return ng.resolve(null).then(t).catch(bI)}:Bh;function bI(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Eo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Eo(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ds=Math.random().toString(36).slice(2),Gt="__reactFiber$"+ds,Ao="__reactProps$"+ds,Cn="__reactContainer$"+ds,zh="__reactEvents$"+ds,LI="__reactListeners$"+ds,VI="__reactHandles$"+ds;function Mr(t){var e=t[Gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[Gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rg(t);t!==null;){if(n=t[Gt])return n;t=rg(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[Gt]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function vu(t){return t[Ao]||null}var $h=[],Pi=-1;function Tr(t){return{current:t}}function fe(t){0>Pi||(t.current=$h[Pi],$h[Pi]=null,Pi--)}function ue(t,e){Pi++,$h[Pi]=t.current,t.current=e}var mr={},nt=Tr(mr),gt=Tr(!1),qr=mr;function Wi(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function xl(){fe(gt),fe(nt)}function ig(t,e,n){if(nt.current!==mr)throw Error(j(168));ue(nt,e),ue(gt,n)}function gv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,wT(t)||"Unknown",i));return Ee({},n,r)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,qr=nt.current,ue(nt,t),ue(gt,gt.current),!0}function sg(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=gv(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,fe(gt),fe(nt),ue(nt,t)):fe(gt),ue(gt,n)}var yn=null,wu=!1,Hc=!1;function yv(t){yn===null?yn=[t]:yn.push(t)}function MI(t){wu=!0,yv(t)}function Ir(){if(!Hc&&yn!==null){Hc=!0;var t=0,e=oe;try{var n=yn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,wu=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),z_(Gd,Ir),i}finally{oe=e,Hc=!1}}return null}var Ci=[],ki=0,Ol=null,bl=0,kt=[],Nt=0,Wr=null,_n=1,vn="";function Or(t,e){Ci[ki++]=bl,Ci[ki++]=Ol,Ol=t,bl=e}function _v(t,e,n){kt[Nt++]=_n,kt[Nt++]=vn,kt[Nt++]=Wr,Wr=t;var r=_n;t=vn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var s=32-jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_n=1<<32-jt(e)+i|n<<i|r,vn=s+t}else _n=1<<s|n<<i|r,vn=t}function rf(t){t.return!==null&&(Or(t,1),_v(t,1,0))}function sf(t){for(;t===Ol;)Ol=Ci[--ki],Ci[ki]=null,bl=Ci[--ki],Ci[ki]=null;for(;t===Wr;)Wr=kt[--Nt],kt[Nt]=null,vn=kt[--Nt],kt[Nt]=null,_n=kt[--Nt],kt[Nt]=null}var St=null,Et=null,me=!1,Ft=null;function vv(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function og(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,Et=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:_n,overflow:vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,Et=null,!0):!1;default:return!1}}function Hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qh(t){if(me){var e=Et;if(e){var n=e;if(!og(t,e)){if(Hh(t))throw Error(j(418));e=rr(n.nextSibling);var r=St;e&&og(t,e)?vv(r,n):(t.flags=t.flags&-4097|2,me=!1,St=t)}}else{if(Hh(t))throw Error(j(418));t.flags=t.flags&-4097|2,me=!1,St=t}}}function ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function ja(t){if(t!==St)return!1;if(!me)return ag(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jh(t.type,t.memoizedProps)),e&&(e=Et)){if(Hh(t))throw wv(),Error(j(418));for(;e;)vv(t,e),e=rr(e.nextSibling)}if(ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=St?rr(t.stateNode.nextSibling):null;return!0}function wv(){for(var t=Et;t;)t=rr(t.nextSibling)}function Ki(){Et=St=null,me=!1}function of(t){Ft===null?Ft=[t]:Ft.push(t)}var UI=bn.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lg(t){var e=t._init;return e(t._payload)}function Ev(t){function e(v,_){if(t){var I=v.deletions;I===null?(v.deletions=[_],v.flags|=16):I.push(_)}}function n(v,_){if(!t)return null;for(;_!==null;)e(v,_),_=_.sibling;return null}function r(v,_){for(v=new Map;_!==null;)_.key!==null?v.set(_.key,_):v.set(_.index,_),_=_.sibling;return v}function i(v,_){return v=ar(v,_),v.index=0,v.sibling=null,v}function s(v,_,I){return v.index=I,t?(I=v.alternate,I!==null?(I=I.index,I<_?(v.flags|=2,_):I):(v.flags|=2,_)):(v.flags|=1048576,_)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function l(v,_,I,D){return _===null||_.tag!==6?(_=Yc(I,v.mode,D),_.return=v,_):(_=i(_,I),_.return=v,_)}function u(v,_,I,D){var L=I.type;return L===Ti?f(v,_,I.props.children,D,I.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Bn&&lg(L)===_.type)?(D=i(_,I.props),D.ref=js(v,_,I),D.return=v,D):(D=hl(I.type,I.key,I.props,null,v.mode,D),D.ref=js(v,_,I),D.return=v,D)}function c(v,_,I,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==I.containerInfo||_.stateNode.implementation!==I.implementation?(_=Jc(I,v.mode,D),_.return=v,_):(_=i(_,I.children||[]),_.return=v,_)}function f(v,_,I,D,L){return _===null||_.tag!==7?(_=zr(I,v.mode,D,L),_.return=v,_):(_=i(_,I),_.return=v,_)}function p(v,_,I){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Yc(""+_,v.mode,I),_.return=v,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Na:return I=hl(_.type,_.key,_.props,null,v.mode,I),I.ref=js(v,null,_),I.return=v,I;case Ei:return _=Jc(_,v.mode,I),_.return=v,_;case Bn:var D=_._init;return p(v,D(_._payload),I)}if(Ws(_)||Ls(_))return _=zr(_,v.mode,I,null),_.return=v,_;Ba(v,_)}return null}function m(v,_,I,D){var L=_!==null?_.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:l(v,_,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Na:return I.key===L?u(v,_,I,D):null;case Ei:return I.key===L?c(v,_,I,D):null;case Bn:return L=I._init,m(v,_,L(I._payload),D)}if(Ws(I)||Ls(I))return L!==null?null:f(v,_,I,D,null);Ba(v,I)}return null}function E(v,_,I,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return v=v.get(I)||null,l(_,v,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Na:return v=v.get(D.key===null?I:D.key)||null,u(_,v,D,L);case Ei:return v=v.get(D.key===null?I:D.key)||null,c(_,v,D,L);case Bn:var M=D._init;return E(v,_,I,M(D._payload),L)}if(Ws(D)||Ls(D))return v=v.get(I)||null,f(_,v,D,L,null);Ba(_,D)}return null}function P(v,_,I,D){for(var L=null,M=null,T=_,y=_=0,S=null;T!==null&&y<I.length;y++){T.index>y?(S=T,T=null):S=T.sibling;var w=m(v,T,I[y],D);if(w===null){T===null&&(T=S);break}t&&T&&w.alternate===null&&e(v,T),_=s(w,_,y),M===null?L=w:M.sibling=w,M=w,T=S}if(y===I.length)return n(v,T),me&&Or(v,y),L;if(T===null){for(;y<I.length;y++)T=p(v,I[y],D),T!==null&&(_=s(T,_,y),M===null?L=T:M.sibling=T,M=T);return me&&Or(v,y),L}for(T=r(v,T);y<I.length;y++)S=E(T,v,y,I[y],D),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?y:S.key),_=s(S,_,y),M===null?L=S:M.sibling=S,M=S);return t&&T.forEach(function(C){return e(v,C)}),me&&Or(v,y),L}function k(v,_,I,D){var L=Ls(I);if(typeof L!="function")throw Error(j(150));if(I=L.call(I),I==null)throw Error(j(151));for(var M=L=null,T=_,y=_=0,S=null,w=I.next();T!==null&&!w.done;y++,w=I.next()){T.index>y?(S=T,T=null):S=T.sibling;var C=m(v,T,w.value,D);if(C===null){T===null&&(T=S);break}t&&T&&C.alternate===null&&e(v,T),_=s(C,_,y),M===null?L=C:M.sibling=C,M=C,T=S}if(w.done)return n(v,T),me&&Or(v,y),L;if(T===null){for(;!w.done;y++,w=I.next())w=p(v,w.value,D),w!==null&&(_=s(w,_,y),M===null?L=w:M.sibling=w,M=w);return me&&Or(v,y),L}for(T=r(v,T);!w.done;y++,w=I.next())w=E(T,v,y,w.value,D),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?y:w.key),_=s(w,_,y),M===null?L=w:M.sibling=w,M=w);return t&&T.forEach(function(N){return e(v,N)}),me&&Or(v,y),L}function x(v,_,I,D){if(typeof I=="object"&&I!==null&&I.type===Ti&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Na:e:{for(var L=I.key,M=_;M!==null;){if(M.key===L){if(L=I.type,L===Ti){if(M.tag===7){n(v,M.sibling),_=i(M,I.props.children),_.return=v,v=_;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Bn&&lg(L)===M.type){n(v,M.sibling),_=i(M,I.props),_.ref=js(v,M,I),_.return=v,v=_;break e}n(v,M);break}else e(v,M);M=M.sibling}I.type===Ti?(_=zr(I.props.children,v.mode,D,I.key),_.return=v,v=_):(D=hl(I.type,I.key,I.props,null,v.mode,D),D.ref=js(v,_,I),D.return=v,v=D)}return o(v);case Ei:e:{for(M=I.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===I.containerInfo&&_.stateNode.implementation===I.implementation){n(v,_.sibling),_=i(_,I.children||[]),_.return=v,v=_;break e}else{n(v,_);break}else e(v,_);_=_.sibling}_=Jc(I,v.mode,D),_.return=v,v=_}return o(v);case Bn:return M=I._init,x(v,_,M(I._payload),D)}if(Ws(I))return P(v,_,I,D);if(Ls(I))return k(v,_,I,D);Ba(v,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,_!==null&&_.tag===6?(n(v,_.sibling),_=i(_,I),_.return=v,v=_):(n(v,_),_=Yc(I,v.mode,D),_.return=v,v=_),o(v)):n(v,_)}return x}var Gi=Ev(!0),Tv=Ev(!1),Ll=Tr(null),Vl=null,Ni=null,af=null;function lf(){af=Ni=Vl=null}function uf(t){var e=Ll.current;fe(Ll),t._currentValue=e}function Wh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){Vl=t,af=Ni=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(af!==t)if(t={context:t,memoizedValue:e,next:null},Ni===null){if(Vl===null)throw Error(j(308));Ni=t,Vl.dependencies={lanes:0,firstContext:t}}else Ni=Ni.next=t;return e}var Ur=null;function cf(t){Ur===null?Ur=[t]:Ur.push(t)}function Iv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cf(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,cf(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}function ug(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,k=l;switch(m=e,E=n,k.tag){case 1:if(P=k.payload,typeof P=="function"){p=P.call(E,p,m);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=k.payload,m=typeof P=="function"?P.call(E,p,m):P,m==null)break e;p=Ee({},p,m);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=E,u=p):f=f.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=p}}function cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Ko={},Jt=Tr(Ko),Po=Tr(Ko),Co=Tr(Ko);function Fr(t){if(t===Ko)throw Error(j(174));return t}function df(t,e){switch(ue(Co,e),ue(Po,t),ue(Jt,Ko),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ah(e,t)}fe(Jt),ue(Jt,e)}function Qi(){fe(Jt),fe(Po),fe(Co)}function Rv(t){Fr(Co.current);var e=Fr(Jt.current),n=Ah(e,t.type);e!==n&&(ue(Po,t),ue(Jt,n))}function ff(t){Po.current===t&&(fe(Jt),fe(Po))}var ve=Tr(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function pf(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var ol=bn.ReactCurrentDispatcher,Wc=bn.ReactCurrentBatchConfig,Kr=0,we=null,De=null,Me=null,Fl=!1,so=!1,ko=0,FI=0;function Xe(){throw Error(j(321))}function mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function gf(t,e,n,r,i,s){if(Kr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?$I:HI,t=n(r,i),so){s=0;do{if(so=!1,ko=0,25<=s)throw Error(j(301));s+=1,Me=De=null,e.updateQueue=null,ol.current=qI,t=n(r,i)}while(so)}if(ol.current=jl,e=De!==null&&De.next!==null,Kr=0,Me=De=we=null,Fl=!1,e)throw Error(j(300));return t}function yf(){var t=ko!==0;return ko=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?we.memoizedState=Me=t:Me=Me.next=t,Me}function bt(){if(De===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Me===null?we.memoizedState:Me.next;if(e!==null)Me=e,De=t;else{if(t===null)throw Error(j(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Me===null?we.memoizedState=Me=t:Me=Me.next=t}return Me}function No(t,e){return typeof e=="function"?e(t):e}function Kc(t){var e=bt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Kr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,we.lanes|=f,Gr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Ht(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,Gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=bt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ht(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Av(){}function Pv(t,e){var n=we,r=bt(),i=e(),s=!Ht(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,_f(Nv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,xo(9,kv.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(j(349));Kr&30||Cv(n,e,i)}return i}function Cv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kv(t,e,n,r){e.value=n,e.getSnapshot=r,xv(e)&&Dv(t)}function Nv(t,e,n){return n(function(){xv(e)&&Dv(t)})}function xv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function Dv(t){var e=kn(t,1);e!==null&&Bt(e,t,1,-1)}function hg(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},e.queue=t,t=t.dispatch=zI.bind(null,we,t),[e.memoizedState,t]}function xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ov(){return bt().memoizedState}function al(t,e,n,r){var i=Kt();we.flags|=t,i.memoizedState=xo(1|e,n,void 0,r===void 0?null:r)}function Eu(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&mf(r,o.deps)){i.memoizedState=xo(e,n,s,r);return}}we.flags|=t,i.memoizedState=xo(1|e,n,s,r)}function dg(t,e){return al(8390656,8,t,e)}function _f(t,e){return Eu(2048,8,t,e)}function bv(t,e){return Eu(4,2,t,e)}function Lv(t,e){return Eu(4,4,t,e)}function Vv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mv(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,Vv.bind(null,e,t),n)}function vf(){}function Uv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jv(t,e,n){return Kr&21?(Ht(n,e)||(n=q_(),we.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function jI(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Wc.transition;Wc.transition={};try{t(!1),e()}finally{oe=n,Wc.transition=r}}function Bv(){return bt().memoizedState}function BI(t,e,n){var r=or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zv(t))$v(e,n);else if(n=Iv(t,e,n,r),n!==null){var i=lt();Bt(n,t,r,i),Hv(n,e,r)}}function zI(t,e,n){var r=or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zv(t))$v(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ht(l,o)){var u=e.interleaved;u===null?(i.next=i,cf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Iv(t,e,i,r),n!==null&&(i=lt(),Bt(n,t,r,i),Hv(n,e,r))}}function zv(t){var e=t.alternate;return t===we||e!==null&&e===we}function $v(t,e){so=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}var jl={readContext:Ot,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},$I={readContext:Ot,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:dg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,Vv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=BI.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:hg,useDebugValue:vf,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=hg(!1),e=t[0];return t=jI.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=Kt();if(me){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ue===null)throw Error(j(349));Kr&30||Cv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,dg(Nv.bind(null,r,s,t),[t]),r.flags|=2048,xo(9,kv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=Ue.identifierPrefix;if(me){var n=vn,r=_n;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HI={readContext:Ot,useCallback:Uv,useContext:Ot,useEffect:_f,useImperativeHandle:Mv,useInsertionEffect:bv,useLayoutEffect:Lv,useMemo:Fv,useReducer:Kc,useRef:Ov,useState:function(){return Kc(No)},useDebugValue:vf,useDeferredValue:function(t){var e=bt();return jv(e,De.memoizedState,t)},useTransition:function(){var t=Kc(No)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:Pv,useId:Bv,unstable_isNewReconciler:!1},qI={readContext:Ot,useCallback:Uv,useContext:Ot,useEffect:_f,useImperativeHandle:Mv,useInsertionEffect:bv,useLayoutEffect:Lv,useMemo:Fv,useReducer:Gc,useRef:Ov,useState:function(){return Gc(No)},useDebugValue:vf,useDeferredValue:function(t){var e=bt();return De===null?e.memoizedState=t:jv(e,De.memoizedState,t)},useTransition:function(){var t=Gc(No)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:Pv,useId:Bv,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=or(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Bt(e,t,i,r),sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=or(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Bt(e,t,i,r),sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=or(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ir(t,i,r),e!==null&&(Bt(e,t,r,n),sl(e,t,r))}};function fg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Io(n,r)||!Io(i,s):!0}function qv(t,e,n){var r=!1,i=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=yt(e)?qr:nt.current,r=e.contextTypes,s=(r=r!=null)?Wi(t,i):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function Gh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},hf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=yt(e)?qr:nt.current,i.context=Wi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tu.enqueueReplaceState(i,i.state,null),Ml(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Xi(t,e){try{var n="",r=e;do n+=vT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var WI=typeof WeakMap=="function"?WeakMap:Map;function Wv(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zl||(zl=!0,sd=r),Qh(t,e)},n}function Kv(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qh(t,e),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new WI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=oS.bind(null,t,e,n),e.then(t,t))}function gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var KI=bn.ReactCurrentOwner,mt=!1;function at(t,e,n,r){e.child=t===null?Tv(e,null,n,r):Gi(e,t.child,n,r)}function _g(t,e,n,r,i){n=n.render;var s=e.ref;return Fi(e,i),r=gf(t,e,n,r,s,i),n=yf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(me&&n&&rf(e),e.flags|=1,at(t,e,r,i),e.child)}function vg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gv(t,e,s,r,i)):(t=hl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(o,r)&&t.ref===e.ref)return Nn(t,e,i)}return e.flags|=1,t=ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function Gv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Io(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Nn(t,e,i)}return Xh(t,e,n,r,i)}function Qv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Di,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(Di,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(Di,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(Di,wt),wt|=r;return at(t,e,i,n),e.child}function Xv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xh(t,e,n,r,i){var s=yt(n)?qr:nt.current;return s=Wi(e,s),Fi(e,i),n=gf(t,e,n,r,s,i),r=yf(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(me&&r&&rf(e),e.flags|=1,at(t,e,n,i),e.child)}function wg(t,e,n,r,i){if(yt(n)){var s=!0;Dl(e)}else s=!1;if(Fi(e,i),e.stateNode===null)ll(t,e),qv(e,n,r),Gh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ot(c):(c=yt(n)?qr:nt.current,c=Wi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&pg(e,o,r,c),zn=!1;var m=e.memoizedState;o.state=m,Ml(e,r,o,i),u=e.memoizedState,l!==r||m!==u||gt.current||zn?(typeof f=="function"&&(Kh(e,n,f,r),u=e.memoizedState),(l=zn||fg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Sv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Mt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ot(u):(u=yt(n)?qr:nt.current,u=Wi(e,u));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&pg(e,o,r,u),zn=!1,m=e.memoizedState,o.state=m,Ml(e,r,o,i);var P=e.memoizedState;l!==p||m!==P||gt.current||zn?(typeof E=="function"&&(Kh(e,n,E,r),P=e.memoizedState),(c=zn||fg(e,n,c,r,m,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Yh(t,e,n,r,s,i)}function Yh(t,e,n,r,i,s){Xv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sg(e,n,!1),Nn(t,e,s);r=e.stateNode,KI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gi(e,t.child,null,s),e.child=Gi(e,null,l,s)):at(t,e,l,s),e.memoizedState=r.state,i&&sg(e,n,!0),e.child}function Yv(t){var e=t.stateNode;e.pendingContext?ig(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ig(t,e.context,!1),df(t,e.containerInfo)}function Eg(t,e,n,r,i){return Ki(),of(i),e.flags|=256,at(t,e,n,r),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Zh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jv(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ve,i&1),t===null)return qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ru(o,r,0,null),t=zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zh(n),e.memoizedState=Jh,t):wf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return GI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ar(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ar(l,s):(s=zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jh,r}return s=t.child,t=s.sibling,r=ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wf(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function za(t,e,n,r){return r!==null&&of(r),Gi(e,t.child,null,n),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qc(Error(j(422))),za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ru({mode:"visible",children:r.children},i,0,null),s=zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gi(e,t.child,null,o),e.child.memoizedState=Zh(o),e.memoizedState=Jh,s);if(!(e.mode&1))return za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Qc(s,r,void 0),za(t,e,o,r)}if(l=(o&t.childLanes)!==0,mt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Bt(r,t,i,-1))}return Af(),r=Qc(Error(j(421))),za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=aS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=rr(i.nextSibling),St=e,me=!0,Ft=null,t!==null&&(kt[Nt++]=_n,kt[Nt++]=vn,kt[Nt++]=Wr,_n=t.id,vn=t.overflow,Wr=e),e=wf(e,r.children),e.flags|=4096,e)}function Tg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wh(t.return,e,n)}function Xc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,n,e);else if(t.tag===19)Tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ul(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xc(e,!0,n,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QI(t,e,n){switch(e.tag){case 3:Yv(e),Ki();break;case 5:Rv(e);break;case 1:yt(e.type)&&Dl(e);break;case 4:df(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(Ll,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ve,ve.current&1),e.flags|=128,null):n&e.child.childLanes?Jv(t,e,n):(ue(ve,ve.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);ue(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Zv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Qv(t,e,n)}return Nn(t,e,n)}var e0,ed,t0,n0;e0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};t0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fr(Jt.current);var s=null;switch(n){case"input":i=Th(t,i),r=Th(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Rh(t,i),r=Rh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Nl)}Ph(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(go.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(go.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};n0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bs(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function XI(t,e,n){var r=e.pendingProps;switch(sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return yt(e.type)&&xl(),Ye(e),null;case 3:return r=e.stateNode,Qi(),fe(gt),fe(nt),pf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ft!==null&&(ld(Ft),Ft=null))),ed(t,e),Ye(e),null;case 5:ff(e);var i=Fr(Co.current);if(n=e.type,t!==null&&e.stateNode!=null)t0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return Ye(e),null}if(t=Fr(Jt.current),ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Gt]=e,r[Ao]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Gs.length;i++)de(Gs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":xm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Om(r,s),de("invalid",r)}Ph(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fa(r.textContent,l,t),i=["children",""+l]):go.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":xa(r),Dm(r,s,!0);break;case"textarea":xa(r),bm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Nl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=N_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Gt]=e,t[Ao]=r,e0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ch(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gs.length;i++)de(Gs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":xm(t,r),i=Th(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":Om(t,r),i=Rh(t,r),de("invalid",t);break;default:i=r}Ph(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?O_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&x_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&yo(t,u):typeof u=="number"&&yo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(go.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&$d(t,s,u,o))}switch(n){case"input":xa(t),Dm(t,r,!1);break;case"textarea":xa(t),bm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Li(t,!!r.multiple,s,!1):r.defaultValue!=null&&Li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)n0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Fr(Co.current),Fr(Jt.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gt]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:Fa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=e,e.stateNode=r}return Ye(e),null;case 13:if(fe(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&Et!==null&&e.mode&1&&!(e.flags&128))wv(),Ki(),e.flags|=98560,s=!1;else if(s=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Gt]=e}else Ki(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Ft!==null&&(ld(Ft),Ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ve.current&1?be===0&&(be=3):Af())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Qi(),ed(t,e),t===null&&So(e.stateNode.containerInfo),Ye(e),null;case 10:return uf(e.type._context),Ye(e),null;case 17:return yt(e.type)&&xl(),Ye(e),null;case 19:if(fe(ve),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bs(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ul(t),o!==null){for(e.flags|=128,Bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>Yi&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ul(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ye(e),null}else 2*Ce()-s.renderingStartTime>Yi&&n!==1073741824&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=ve.current,ue(ve,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function YI(t,e){switch(sf(e),e.tag){case 1:return yt(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),fe(gt),fe(nt),pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ff(e),null;case 13:if(fe(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ve),null;case 4:return Qi(),null;case 10:return uf(e.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var $a=!1,et=!1,JI=typeof WeakSet=="function"?WeakSet:Set,$=null;function xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function td(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Ig=!1;function ZI(t,e){if(Uh=Pl,t=av(),nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)m=p,p=E;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(E=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fh={focusedElem:t,selectionRange:n},Pl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var k=P.memoizedProps,x=P.memoizedState,v=e.stateNode,_=v.getSnapshotBeforeUpdate(e.elementType===e.type?k:Mt(e.type,k),x);v.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Re(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=Ig,Ig=!1,P}function oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&td(e,n,s)}i=i.next}while(i!==r)}}function Iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function r0(t){var e=t.alternate;e!==null&&(t.alternate=null,r0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gt],delete e[Ao],delete e[zh],delete e[LI],delete e[VI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i0(t){return t.tag===5||t.tag===3||t.tag===4}function Sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nl));else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function id(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}var je=null,Ut=!1;function Fn(t,e,n){for(n=n.child;n!==null;)s0(t,e,n),n=n.sibling}function s0(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(mu,n)}catch{}switch(n.tag){case 5:et||xi(n,e);case 6:var r=je,i=Ut;je=null,Fn(t,e,n),je=r,Ut=i,je!==null&&(Ut?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Ut?(t=je,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),Eo(t)):$c(je,n.stateNode));break;case 4:r=je,i=Ut,je=n.stateNode.containerInfo,Ut=!0,Fn(t,e,n),je=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&td(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!et&&(xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,Fn(t,e,n),et=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function Rg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JI),e.forEach(function(r){var i=lS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Ut=!1;break e;case 3:je=l.stateNode.containerInfo,Ut=!0;break e;case 4:je=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(je===null)throw Error(j(160));s0(s,o,i),je=null,Ut=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o0(e,t),e=e.sibling}function o0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Wt(t),r&4){try{oo(3,t,t.return),Iu(3,t)}catch(k){Re(t,t.return,k)}try{oo(5,t,t.return)}catch(k){Re(t,t.return,k)}}break;case 1:Vt(e,t),Wt(t),r&512&&n!==null&&xi(n,n.return);break;case 5:if(Vt(e,t),Wt(t),r&512&&n!==null&&xi(n,n.return),t.flags&32){var i=t.stateNode;try{yo(i,"")}catch(k){Re(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&C_(i,s),Ch(l,o);var c=Ch(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?O_(i,p):f==="dangerouslySetInnerHTML"?x_(i,p):f==="children"?yo(i,p):$d(i,f,p,c)}switch(l){case"input":Ih(i,s);break;case"textarea":k_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Li(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Li(i,!!s.multiple,s.defaultValue,!0):Li(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ao]=s}catch(k){Re(t,t.return,k)}}break;case 6:if(Vt(e,t),Wt(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Re(t,t.return,k)}}break;case 3:if(Vt(e,t),Wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(e.containerInfo)}catch(k){Re(t,t.return,k)}break;case 4:Vt(e,t),Wt(t);break;case 13:Vt(e,t),Wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(If=Ce())),r&4&&Rg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(et=(c=et)||f,Vt(e,t),et=c):Vt(e,t),Wt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(m=$,E=m.child,m.tag){case 0:case 11:case 14:case 15:oo(4,m,m.return);break;case 1:xi(m,m.return);var P=m.stateNode;if(typeof P.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(k){Re(r,n,k)}}break;case 5:xi(m,m.return);break;case 22:if(m.memoizedState!==null){Pg(p);continue}}E!==null?(E.return=m,$=E):Pg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=D_("display",o))}catch(k){Re(t,t.return,k)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Re(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Vt(e,t),Wt(t),r&4&&Rg(t);break;case 21:break;default:Vt(e,t),Wt(t)}}function Wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i0(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yo(i,""),r.flags&=-33);var s=Sg(t);id(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Sg(t);rd(t,l,o);break;default:throw Error(j(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eS(t,e,n){$=t,a0(t)}function a0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$a;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=$a;var c=et;if($a=o,(et=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Cg(i):u!==null?(u.return=o,$=u):Cg(i);for(;s!==null;)$=s,a0(s),s=s.sibling;$=i,$a=l,et=c}Ag(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Ag(t)}}function Ag(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||Iu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Eo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}et||e.flags&512&&nd(e)}catch(m){Re(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Pg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Cg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Iu(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Re(e,i,u)}}var s=e.return;try{nd(e)}catch(u){Re(e,s,u)}break;case 5:var o=e.return;try{nd(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var tS=Math.ceil,Bl=bn.ReactCurrentDispatcher,Ef=bn.ReactCurrentOwner,Dt=bn.ReactCurrentBatchConfig,re=0,Ue=null,xe=null,$e=0,wt=0,Di=Tr(0),be=0,Do=null,Gr=0,Su=0,Tf=0,ao=null,ft=null,If=0,Yi=1/0,gn=null,zl=!1,sd=null,sr=null,Ha=!1,Yn=null,$l=0,lo=0,od=null,ul=-1,cl=0;function lt(){return re&6?Ce():ul!==-1?ul:ul=Ce()}function or(t){return t.mode&1?re&2&&$e!==0?$e&-$e:UI.transition!==null?(cl===0&&(cl=q_()),cl):(t=oe,t!==0||(t=window.event,t=t===void 0?16:J_(t.type)),t):1}function Bt(t,e,n,r){if(50<lo)throw lo=0,od=null,Error(j(185));Ho(t,n,r),(!(re&2)||t!==Ue)&&(t===Ue&&(!(re&2)&&(Su|=n),be===4&&Hn(t,$e)),_t(t,r),n===1&&re===0&&!(e.mode&1)&&(Yi=Ce()+500,wu&&Ir()))}function _t(t,e){var n=t.callbackNode;UT(t,e);var r=Al(t,t===Ue?$e:0);if(r===0)n!==null&&Mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mm(n),e===1)t.tag===0?MI(kg.bind(null,t)):yv(kg.bind(null,t)),OI(function(){!(re&6)&&Ir()}),n=null;else{switch(W_(r)){case 1:n=Gd;break;case 4:n=$_;break;case 16:n=Rl;break;case 536870912:n=H_;break;default:n=Rl}n=m0(n,l0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l0(t,e){if(ul=-1,cl=0,re&6)throw Error(j(327));var n=t.callbackNode;if(ji()&&t.callbackNode!==n)return null;var r=Al(t,t===Ue?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hl(t,r);else{e=r;var i=re;re|=2;var s=c0();(Ue!==t||$e!==e)&&(gn=null,Yi=Ce()+500,Br(t,e));do try{iS();break}catch(l){u0(t,l)}while(!0);lf(),Bl.current=s,re=i,xe!==null?e=0:(Ue=null,$e=0,e=be)}if(e!==0){if(e===2&&(i=Oh(t),i!==0&&(r=i,e=ad(t,i))),e===1)throw n=Do,Br(t,0),Hn(t,r),_t(t,Ce()),n;if(e===6)Hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!nS(i)&&(e=Hl(t,r),e===2&&(s=Oh(t),s!==0&&(r=s,e=ad(t,s))),e===1))throw n=Do,Br(t,0),Hn(t,r),_t(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:br(t,ft,gn);break;case 3:if(Hn(t,r),(r&130023424)===r&&(e=If+500-Ce(),10<e)){if(Al(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bh(br.bind(null,t,ft,gn),e);break}br(t,ft,gn);break;case 4:if(Hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tS(r/1960))-r,10<r){t.timeoutHandle=Bh(br.bind(null,t,ft,gn),r);break}br(t,ft,gn);break;case 5:br(t,ft,gn);break;default:throw Error(j(329))}}}return _t(t,Ce()),t.callbackNode===n?l0.bind(null,t):null}function ad(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Hl(t,e),t!==2&&(e=ft,ft=n,e!==null&&ld(e)),t}function ld(t){ft===null?ft=t:ft.push.apply(ft,t)}function nS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~Tf,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function kg(t){if(re&6)throw Error(j(327));ji();var e=Al(t,0);if(!(e&1))return _t(t,Ce()),null;var n=Hl(t,e);if(t.tag!==0&&n===2){var r=Oh(t);r!==0&&(e=r,n=ad(t,r))}if(n===1)throw n=Do,Br(t,0),Hn(t,e),_t(t,Ce()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,ft,gn),_t(t,Ce()),null}function Sf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Yi=Ce()+500,wu&&Ir())}}function Qr(t){Yn!==null&&Yn.tag===0&&!(re&6)&&ji();var e=re;re|=1;var n=Dt.transition,r=oe;try{if(Dt.transition=null,oe=1,t)return t()}finally{oe=r,Dt.transition=n,re=e,!(re&6)&&Ir()}}function Rf(){wt=Di.current,fe(Di)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,DI(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(sf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xl();break;case 3:Qi(),fe(gt),fe(nt),pf();break;case 5:ff(r);break;case 4:Qi();break;case 13:fe(ve);break;case 19:fe(ve);break;case 10:uf(r.type._context);break;case 22:case 23:Rf()}n=n.return}if(Ue=t,xe=t=ar(t.current,null),$e=wt=e,be=0,Do=null,Tf=Su=Gr=0,ft=ao=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ur=null}return t}function u0(t,e){do{var n=xe;try{if(lf(),ol.current=jl,Fl){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fl=!1}if(Kr=0,Me=De=we=null,so=!1,ko=0,Ef.current=null,n===null||n.return===null){be=1,Do=e,xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=gg(o);if(E!==null){E.flags&=-257,yg(E,o,l,s,e),E.mode&1&&mg(s,c,e),e=E,u=c;var P=e.updateQueue;if(P===null){var k=new Set;k.add(u),e.updateQueue=k}else P.add(u);break e}else{if(!(e&1)){mg(s,c,e),Af();break e}u=Error(j(426))}}else if(me&&l.mode&1){var x=gg(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),yg(x,o,l,s,e),of(Xi(u,l));break e}}s=u=Xi(u,l),be!==4&&(be=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=Wv(s,u,e);ug(s,v);break e;case 1:l=u;var _=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(sr===null||!sr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=Kv(s,l,e);ug(s,D);break e}}s=s.return}while(s!==null)}d0(n)}catch(L){e=L,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function c0(){var t=Bl.current;return Bl.current=jl,t===null?jl:t}function Af(){(be===0||be===3||be===2)&&(be=4),Ue===null||!(Gr&268435455)&&!(Su&268435455)||Hn(Ue,$e)}function Hl(t,e){var n=re;re|=2;var r=c0();(Ue!==t||$e!==e)&&(gn=null,Br(t,e));do try{rS();break}catch(i){u0(t,i)}while(!0);if(lf(),re=n,Bl.current=r,xe!==null)throw Error(j(261));return Ue=null,$e=0,be}function rS(){for(;xe!==null;)h0(xe)}function iS(){for(;xe!==null&&!kT();)h0(xe)}function h0(t){var e=p0(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?d0(t):xe=e,Ef.current=null}function d0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YI(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,xe=null;return}}else if(n=XI(n,e,wt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);be===0&&(be=5)}function br(t,e,n){var r=oe,i=Dt.transition;try{Dt.transition=null,oe=1,sS(t,e,n,r)}finally{Dt.transition=i,oe=r}return null}function sS(t,e,n,r){do ji();while(Yn!==null);if(re&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FT(t,s),t===Ue&&(xe=Ue=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ha||(Ha=!0,m0(Rl,function(){return ji(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=oe;oe=1;var l=re;re|=4,Ef.current=null,ZI(t,n),o0(n,t),RI(Fh),Pl=!!Uh,Fh=Uh=null,t.current=n,eS(n),NT(),re=l,oe=o,Dt.transition=s}else t.current=n;if(Ha&&(Ha=!1,Yn=t,$l=i),s=t.pendingLanes,s===0&&(sr=null),OT(n.stateNode),_t(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zl)throw zl=!1,t=sd,sd=null,t;return $l&1&&t.tag!==0&&ji(),s=t.pendingLanes,s&1?t===od?lo++:(lo=0,od=t):lo=0,Ir(),null}function ji(){if(Yn!==null){var t=W_($l),e=Dt.transition,n=oe;try{if(Dt.transition=null,oe=16>t?16:t,Yn===null)var r=!1;else{if(t=Yn,Yn=null,$l=0,re&6)throw Error(j(331));var i=re;for(re|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:oo(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var m=f.sibling,E=f.return;if(r0(f),f===c){$=null;break}if(m!==null){m.return=E,$=m;break}$=E}}}var P=s.alternate;if(P!==null){var k=P.child;if(k!==null){P.child=null;do{var x=k.sibling;k.sibling=null,k=x}while(k!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,$=v;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,$=I;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Iu(9,l)}}catch(L){Re(l,l.return,L)}if(l===o){$=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,$=D;break e}$=l.return}}if(re=i,Ir(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(mu,t)}catch{}r=!0}return r}finally{oe=n,Dt.transition=e}}return!1}function Ng(t,e,n){e=Xi(n,e),e=Wv(t,e,1),t=ir(t,e,1),e=lt(),t!==null&&(Ho(t,1,e),_t(t,e))}function Re(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=Xi(n,t),t=Kv(e,t,1),e=ir(e,t,1),t=lt(),e!==null&&(Ho(e,1,t),_t(e,t));break}}e=e.return}}function oS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&($e&n)===n&&(be===4||be===3&&($e&130023424)===$e&&500>Ce()-If?Br(t,0):Tf|=n),_t(t,e)}function f0(t,e){e===0&&(t.mode&1?(e=ba,ba<<=1,!(ba&130023424)&&(ba=4194304)):e=1);var n=lt();t=kn(t,e),t!==null&&(Ho(t,e,n),_t(t,n))}function aS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),f0(t,n)}function lS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),f0(t,n)}var p0;p0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,QI(t,e,n);mt=!!(t.flags&131072)}else mt=!1,me&&e.flags&1048576&&_v(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ll(t,e),t=e.pendingProps;var i=Wi(e,nt.current);Fi(e,n),i=gf(null,e,r,t,i,n);var s=yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,Dl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hf(e),i.updater=Tu,e.stateNode=i,i._reactInternals=e,Gh(e,r,t,n),e=Yh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&rf(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=cS(r),t=Mt(r,t),i){case 0:e=Xh(null,e,r,t,n);break e;case 1:e=wg(null,e,r,t,n);break e;case 11:e=_g(null,e,r,t,n);break e;case 14:e=vg(null,e,r,Mt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Xh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),wg(t,e,r,i,n);case 3:e:{if(Yv(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Sv(t,e),Ml(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xi(Error(j(423)),e),e=Eg(t,e,r,n,i);break e}else if(r!==i){i=Xi(Error(j(424)),e),e=Eg(t,e,r,n,i);break e}else for(Et=rr(e.stateNode.containerInfo.firstChild),St=e,me=!0,Ft=null,n=Tv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ki(),r===i){e=Nn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return Rv(e),t===null&&qh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,jh(r,i)?o=null:s!==null&&jh(r,s)&&(e.flags|=32),Xv(t,e),at(t,e,o,n),e.child;case 6:return t===null&&qh(e),null;case 13:return Jv(t,e,n);case 4:return df(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gi(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),_g(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(Ll,r._currentValue),r._currentValue=o,s!==null)if(Ht(s.value,o)){if(s.children===i.children&&!gt.current){e=Nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Sn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Wh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fi(e,n),i=Ot(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),vg(t,e,r,i,n);case 15:return Gv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),ll(t,e),e.tag=1,yt(r)?(t=!0,Dl(e)):t=!1,Fi(e,n),qv(e,r,i),Gh(e,r,i,n),Yh(null,e,r,!0,t,n);case 19:return Zv(t,e,n);case 22:return Qv(t,e,n)}throw Error(j(156,e.tag))};function m0(t,e){return z_(t,e)}function uS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new uS(t,e,n,r)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cS(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Wd)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return zr(n.children,i,s,e);case Hd:o=8,i|=8;break;case _h:return t=xt(12,n,e,i|2),t.elementType=_h,t.lanes=s,t;case vh:return t=xt(13,n,e,i),t.elementType=vh,t.lanes=s,t;case wh:return t=xt(19,n,e,i),t.elementType=wh,t.lanes=s,t;case R_:return Ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I_:o=10;break e;case S_:o=9;break e;case qd:o=11;break e;case Wd:o=14;break e;case Bn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function Ru(t,e,n,r){return t=xt(22,t,r,e),t.elementType=R_,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cf(t,e,n,r,i,s,o,l,u){return t=new hS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(s),t}function dS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function g0(t){if(!t)return mr;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(yt(n))return gv(t,n,e)}return e}function y0(t,e,n,r,i,s,o,l,u){return t=Cf(n,r,!0,t,i,s,o,l,u),t.context=g0(null),n=t.current,r=lt(),i=or(n),s=Sn(r,i),s.callback=e??null,ir(n,s,i),t.current.lanes=i,Ho(t,i,r),_t(t,r),t}function Au(t,e,n,r){var i=e.current,s=lt(),o=or(i);return n=g0(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(i,e,o),t!==null&&(Bt(t,i,o,s),sl(t,i,o)),o}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kf(t,e){xg(t,e),(t=t.alternate)&&xg(t,e)}function fS(){return null}var _0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}Pu.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Au(t,e,null,null)};Pu.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){Au(null,t,null,null)}),e[Cn]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&Y_(t)}};function xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function pS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ql(o);s.call(c)}}var o=y0(e,r,t,0,null,!1,!1,"",Dg);return t._reactRootContainer=o,t[Cn]=o.current,So(t.nodeType===8?t.parentNode:t),Qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ql(u);l.call(c)}}var u=Cf(t,0,!1,null,null,!1,!1,"",Dg);return t._reactRootContainer=u,t[Cn]=u.current,So(t.nodeType===8?t.parentNode:t),Qr(function(){Au(e,u,n,r)}),u}function ku(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=ql(o);l.call(u)}}Au(e,o,t,i)}else o=pS(n,e,t,i,r);return ql(o)}K_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ks(e.pendingLanes);n!==0&&(Qd(e,n|1),_t(e,Ce()),!(re&6)&&(Yi=Ce()+500,Ir()))}break;case 13:Qr(function(){var r=kn(t,1);if(r!==null){var i=lt();Bt(r,t,1,i)}}),kf(t,1)}};Xd=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=lt();Bt(e,t,134217728,n)}kf(t,134217728)}};G_=function(t){if(t.tag===13){var e=or(t),n=kn(t,e);if(n!==null){var r=lt();Bt(n,t,e,r)}kf(t,e)}};Q_=function(){return oe};X_=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Nh=function(t,e,n){switch(e){case"input":if(Ih(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vu(r);if(!i)throw Error(j(90));P_(r),Ih(r,i)}}}break;case"textarea":k_(t,n);break;case"select":e=n.value,e!=null&&Li(t,!!n.multiple,e,!1)}};V_=Sf;M_=Qr;var mS={usingClientEntryPoint:!1,Events:[Wo,Ai,vu,b_,L_,Sf]},zs={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gS={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=j_(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||fS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qa.isDisabled&&qa.supportsFiber)try{mu=qa.inject(gS),Yt=qa}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mS;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xf(e))throw Error(j(200));return dS(t,e,null,n)};Pt.createRoot=function(t,e){if(!xf(t))throw Error(j(299));var n=!1,r="",i=_0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cf(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,So(t.nodeType===8?t.parentNode:t),new Nf(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=j_(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return Qr(t)};Pt.hydrate=function(t,e,n){if(!Cu(e))throw Error(j(200));return ku(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!xf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=_0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=y0(e,null,t,1,n??null,i,!1,s,o),t[Cn]=e.current,So(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pu(e)};Pt.render=function(t,e,n){if(!Cu(e))throw Error(j(200));return ku(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!Cu(t))throw Error(j(40));return t._reactRootContainer?(Qr(function(){ku(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Sf;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return ku(t,e,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function v0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0)}catch(t){console.error(t)}}v0(),v_.exports=Pt;var yS=v_.exports,Og=yS;gh.createRoot=Og.createRoot,gh.hydrateRoot=Og.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oo.apply(this,arguments)}var Jn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Jn||(Jn={}));const bg="popstate";function _S(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ud("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wl(i)}return wS(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function w0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vS(){return Math.random().toString(36).substr(2,8)}function Lg(t,e){return{usr:t.state,key:t.key,idx:e}}function ud(t,e,n,r){return n===void 0&&(n=null),Oo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fs(e):e,{state:n,key:e&&e.key||r||vS()})}function Wl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function fs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function wS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Jn.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Oo({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Jn.Pop;let x=f(),v=x==null?null:x-c;c=x,u&&u({action:l,location:k.location,delta:v})}function m(x,v){l=Jn.Push;let _=ud(k.location,x,v);c=f()+1;let I=Lg(_,c),D=k.createHref(_);try{o.pushState(I,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(D)}s&&u&&u({action:l,location:k.location,delta:1})}function E(x,v){l=Jn.Replace;let _=ud(k.location,x,v);c=f();let I=Lg(_,c),D=k.createHref(_);o.replaceState(I,"",D),s&&u&&u({action:l,location:k.location,delta:0})}function P(x){let v=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof x=="string"?x:Wl(x);return _=_.replace(/ $/,"%20"),Ae(v,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,v)}let k={get action(){return l},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(bg,p),u=x,()=>{i.removeEventListener(bg,p),u=null}},createHref(x){return e(i,x)},createURL:P,encodeLocation(x){let v=P(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:E,go(x){return o.go(x)}};return k}var Vg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vg||(Vg={}));function ES(t,e,n){return n===void 0&&(n="/"),TS(t,e,n,!1)}function TS(t,e,n,r){let i=typeof e=="string"?fs(e):e,s=Ji(i.pathname||"/",n);if(s==null)return null;let o=E0(t);IS(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=bS(s);l=DS(o[u],c,r)}return l}function E0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ae(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=lr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),E0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:NS(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of T0(s.path))i(s,o,u)}),e}function T0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=T0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function IS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const SS=/^:[\w-]+$/,RS=3,AS=2,PS=1,CS=10,kS=-2,Mg=t=>t==="*";function NS(t,e){let n=t.split("/"),r=n.length;return n.some(Mg)&&(r+=kS),e&&(r+=AS),n.filter(i=>!Mg(i)).reduce((i,s)=>i+(SS.test(s)?RS:s===""?PS:CS),r)}function xS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function DS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Kl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Kl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:lr([s,p.pathname]),pathnameBase:US(lr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=lr([s,p.pathnameBase]))}return o}function Kl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=OS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:E}=f;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const P=l[p];return E&&!P?c[m]=void 0:c[m]=(P||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function OS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),w0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return w0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ji(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function LS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?fs(t):t;return{pathname:n?n.startsWith("/")?n:VS(n,e):e,search:FS(r),hash:jS(i)}}function VS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function MS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function I0(t,e){let n=MS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function S0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=fs(t):(i=Oo({},t),Ae(!i.pathname||!i.pathname.includes("?"),Zc("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Zc("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Zc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=LS(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const lr=t=>t.join("/").replace(/\/\/+/g,"/"),US=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),FS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function BS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const R0=["post","put","patch","delete"];new Set(R0);const zS=["get",...R0];new Set(zS);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bo.apply(this,arguments)}const Nu=V.createContext(null),A0=V.createContext(null),Sr=V.createContext(null),xu=V.createContext(null),Rr=V.createContext({outlet:null,matches:[],isDataRoute:!1}),P0=V.createContext(null);function $S(t,e){let{relative:n}=e===void 0?{}:e;Go()||Ae(!1);let{basename:r,navigator:i}=V.useContext(Sr),{hash:s,pathname:o,search:l}=Du(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:lr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Go(){return V.useContext(xu)!=null}function Qo(){return Go()||Ae(!1),V.useContext(xu).location}function C0(t){V.useContext(Sr).static||V.useLayoutEffect(t)}function Xo(){let{isDataRoute:t}=V.useContext(Rr);return t?iR():HS()}function HS(){Go()||Ae(!1);let t=V.useContext(Nu),{basename:e,future:n,navigator:r}=V.useContext(Sr),{matches:i}=V.useContext(Rr),{pathname:s}=Qo(),o=JSON.stringify(I0(i,n.v7_relativeSplatPath)),l=V.useRef(!1);return C0(()=>{l.current=!0}),V.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=S0(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:lr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}const qS=V.createContext(null);function WS(t){let e=V.useContext(Rr).outlet;return e&&V.createElement(qS.Provider,{value:t},e)}function Du(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=V.useContext(Sr),{matches:i}=V.useContext(Rr),{pathname:s}=Qo(),o=JSON.stringify(I0(i,r.v7_relativeSplatPath));return V.useMemo(()=>S0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function KS(t,e){return GS(t,e)}function GS(t,e,n,r){Go()||Ae(!1);let{navigator:i}=V.useContext(Sr),{matches:s}=V.useContext(Rr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Qo(),f;if(e){var p;let x=typeof e=="string"?fs(e):e;u==="/"||(p=x.pathname)!=null&&p.startsWith(u)||Ae(!1),f=x}else f=c;let m=f.pathname||"/",E=m;if(u!=="/"){let x=u.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let P=ES(t,{pathname:E}),k=ZS(P&&P.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:lr([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:lr([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&k?V.createElement(xu.Provider,{value:{location:bo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Jn.Pop}},k):k}function QS(){let t=rR(),e=BS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,null)}const XS=V.createElement(QS,null);class YS extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?V.createElement(Rr.Provider,{value:this.props.routeContext},V.createElement(P0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JS(t){let{routeContext:e,match:n,children:r}=t,i=V.useContext(Nu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(Rr.Provider,{value:e},r)}function ZS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Ae(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:E}=n,P=p.route.loader&&m[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||P){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let E,P=!1,k=null,x=null;n&&(E=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||XS,u&&(c<0&&m===0?(P=!0,x=null):c===m&&(P=!0,x=p.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,m+1)),_=()=>{let I;return E?I=k:P?I=x:p.route.Component?I=V.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=f,V.createElement(JS,{match:p,routeContext:{outlet:f,matches:v,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?V.createElement(YS,{location:n.location,revalidation:n.revalidation,component:k,error:E,children:_(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):_()},null)}var k0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(k0||{}),Gl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Gl||{});function eR(t){let e=V.useContext(Nu);return e||Ae(!1),e}function tR(t){let e=V.useContext(A0);return e||Ae(!1),e}function nR(t){let e=V.useContext(Rr);return e||Ae(!1),e}function N0(t){let e=nR(),n=e.matches[e.matches.length-1];return n.route.id||Ae(!1),n.route.id}function rR(){var t;let e=V.useContext(P0),n=tR(Gl.UseRouteError),r=N0(Gl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function iR(){let{router:t}=eR(k0.UseNavigateStable),e=N0(Gl.UseNavigateStable),n=V.useRef(!1);return C0(()=>{n.current=!0}),V.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,bo({fromRouteId:e},s)))},[t,e])}function sR(t){return WS(t.context)}function mn(t){Ae(!1)}function oR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Jn.Pop,navigator:s,static:o=!1,future:l}=t;Go()&&Ae(!1);let u=e.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:u,navigator:s,static:o,future:bo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=fs(r));let{pathname:f="/",search:p="",hash:m="",state:E=null,key:P="default"}=r,k=V.useMemo(()=>{let x=Ji(f,u);return x==null?null:{location:{pathname:x,search:p,hash:m,state:E,key:P},navigationType:i}},[u,f,p,m,E,P,i]);return k==null?null:V.createElement(Sr.Provider,{value:c},V.createElement(xu.Provider,{children:n,value:k}))}function aR(t){let{children:e,location:n}=t;return KS(cd(e),n)}new Promise(()=>{});function cd(t,e){e===void 0&&(e=[]);let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let s=[...e,i];if(r.type===V.Fragment){n.push.apply(n,cd(r.props.children,s));return}r.type!==mn&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=cd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ql.apply(this,arguments)}function x0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function lR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uR(t,e){return t.button===0&&(!e||e==="_self")&&!lR(t)}const cR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],hR=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],dR="6";try{window.__reactRouterVersion=dR}catch{}const fR=V.createContext({isTransitioning:!1}),pR="startTransition",Ug=oT[pR];function mR(t){let{basename:e,children:n,future:r,window:i}=t,s=V.useRef();s.current==null&&(s.current=_S({window:i,v5Compat:!0}));let o=s.current,[l,u]=V.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=V.useCallback(p=>{c&&Ug?Ug(()=>u(p)):u(p)},[u,c]);return V.useLayoutEffect(()=>o.listen(f),[o,f]),V.createElement(oR,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const gR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_R=V.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,unstable_viewTransition:p}=e,m=x0(e,cR),{basename:E}=V.useContext(Sr),P,k=!1;if(typeof c=="string"&&yR.test(c)&&(P=c,gR))try{let I=new URL(window.location.href),D=c.startsWith("//")?new URL(I.protocol+c):new URL(c),L=Ji(D.pathname,E);D.origin===I.origin&&L!=null?c=L+D.search+D.hash:k=!0}catch{}let x=$S(c,{relative:i}),v=wR(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,unstable_viewTransition:p});function _(I){r&&r(I),I.defaultPrevented||v(I)}return V.createElement("a",Ql({},m,{href:P||x,onClick:k||s?r:_,ref:n,target:u}))}),ur=V.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,unstable_viewTransition:c,children:f}=e,p=x0(e,hR),m=Du(u,{relative:p.relative}),E=Qo(),P=V.useContext(A0),{navigator:k,basename:x}=V.useContext(Sr),v=P!=null&&ER(m)&&c===!0,_=k.encodeLocation?k.encodeLocation(m).pathname:m.pathname,I=E.pathname,D=P&&P.navigation&&P.navigation.location?P.navigation.location.pathname:null;i||(I=I.toLowerCase(),D=D?D.toLowerCase():null,_=_.toLowerCase()),D&&x&&(D=Ji(D,x)||D);const L=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let M=I===_||!o&&I.startsWith(_)&&I.charAt(L)==="/",T=D!=null&&(D===_||!o&&D.startsWith(_)&&D.charAt(_.length)==="/"),y={isActive:M,isPending:T,isTransitioning:v},S=M?r:void 0,w;typeof s=="function"?w=s(y):w=[s,M?"active":null,T?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let C=typeof l=="function"?l(y):l;return V.createElement(_R,Ql({},p,{"aria-current":S,className:w,ref:n,style:C,to:u,unstable_viewTransition:c}),typeof f=="function"?f(y):f)});var hd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(hd||(hd={}));var Fg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fg||(Fg={}));function vR(t){let e=V.useContext(Nu);return e||Ae(!1),e}function wR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l}=e===void 0?{}:e,u=Xo(),c=Qo(),f=Du(t,{relative:o});return V.useCallback(p=>{if(uR(p,n)){p.preventDefault();let m=r!==void 0?r:Wl(c)===Wl(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}function ER(t,e){e===void 0&&(e={});let n=V.useContext(fR);n==null&&Ae(!1);let{basename:r}=vR(hd.useViewTransitionState),i=Du(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ji(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ji(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Kl(i.pathname,o)!=null||Kl(i.pathname,s)!=null}const TR=()=>R.jsxs("div",{className:"container-fluid grad1",children:[R.jsxs(ur,{to:"/",style:{textDecoration:"none"},children:[R.jsx("h1",{className:"logo",children:"GF"}),R.jsx("br",{})]}),R.jsx("span",{children:"Server' s tips tracker"}),R.jsx("br",{}),R.jsxs("ul",{className:"row ul-row",children:[R.jsx("li",{className:"col-6",children:R.jsx(ur,{className:"nav-item",to:"login",children:R.jsx("span",{className:"login",children:"login"})})}),R.jsx("li",{className:"col-6",children:R.jsx(ur,{className:"nav-item",to:"signup",children:R.jsx("span",{className:"login",children:"signup"})})})]}),R.jsx(sR,{})]});var jg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},O0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[f],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(D0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new SR;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const P=c<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RR=function(t){const e=D0(t);return O0.encodeByteArray(e,!0)},Xl=function(t){return RR(t).replace(/\./g,"")},b0=function(t){try{return O0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=()=>AR().__FIREBASE_DEFAULTS__,CR=()=>{if(typeof process>"u"||typeof jg>"u")return;const t=jg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&b0(t[1]);return e&&JSON.parse(e)},Ou=()=>{try{return PR()||CR()||kR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},L0=t=>{var e,n;return(n=(e=Ou())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},V0=t=>{const e=L0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},M0=()=>{var t;return(t=Ou())===null||t===void 0?void 0:t.config},U0=t=>{var e;return(e=Ou())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Xl(JSON.stringify(n)),Xl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function DR(){var t;const e=(t=Ou())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LR(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VR(){return!DR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function MR(){try{return typeof indexedDB=="object"}catch{return!1}}function UR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FR,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yo.prototype.create)}}class Yo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new an(i,l,r)}}function jR(t,e){return t.replace(BR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const BR=/\{\$([^}]+)}/g;function zR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bg(s)&&Bg(o)){if(!Lo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $R(t,e){const n=new HR(t,e);return n.subscribe.bind(n)}class HR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=eh),i.error===void 0&&(i.error=eh),i.complete===void 0&&(i.complete=eh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function eh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){return t&&t._delegate?t._delegate:t}class gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GR(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KR(t){return t===Lr?void 0:t}function GR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const XR={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},YR=te.INFO,JR={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},ZR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Df{constructor(e){this.name=e,this._logLevel=YR,this._logHandler=ZR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const eA=(t,e)=>e.some(n=>t instanceof n);let zg,$g;function tA(){return zg||(zg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nA(){return $g||($g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j0=new WeakMap,dd=new WeakMap,B0=new WeakMap,th=new WeakMap,Of=new WeakMap;function rA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&j0.set(n,t)}).catch(()=>{}),Of.set(e,t),e}function iA(t){if(dd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dd.set(t,e)}let fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||B0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sA(t){fd=t(fd)}function oA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nh(this),e,...n);return B0.set(r,e.sort?e.sort():[e]),cr(r)}:nA().includes(t)?function(...e){return t.apply(nh(this),e),cr(j0.get(this))}:function(...e){return cr(t.apply(nh(this),e))}}function aA(t){return typeof t=="function"?oA(t):(t instanceof IDBTransaction&&iA(t),eA(t,tA())?new Proxy(t,fd):t)}function cr(t){if(t instanceof IDBRequest)return rA(t);if(th.has(t))return th.get(t);const e=aA(t);return e!==t&&(th.set(t,e),Of.set(e,t)),e}const nh=t=>Of.get(t);function lA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(cr(o.result),u.oldVersion,u.newVersion,cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const uA=["get","getKey","getAll","getAllKeys","count"],cA=["put","add","delete","clear"],rh=new Map;function Hg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rh.get(e))return rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return rh.set(e,s),s}sA(t=>({...t,get:(e,n,r)=>Hg(e,n)||t.get(e,n,r),has:(e,n)=>!!Hg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",qg="0.10.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Df("@firebase/app"),fA="@firebase/app-compat",pA="@firebase/analytics-compat",mA="@firebase/analytics",gA="@firebase/app-check-compat",yA="@firebase/app-check",_A="@firebase/auth",vA="@firebase/auth-compat",wA="@firebase/database",EA="@firebase/database-compat",TA="@firebase/functions",IA="@firebase/functions-compat",SA="@firebase/installations",RA="@firebase/installations-compat",AA="@firebase/messaging",PA="@firebase/messaging-compat",CA="@firebase/performance",kA="@firebase/performance-compat",NA="@firebase/remote-config",xA="@firebase/remote-config-compat",DA="@firebase/storage",OA="@firebase/storage-compat",bA="@firebase/firestore",LA="@firebase/vertexai-preview",VA="@firebase/firestore-compat",MA="firebase",UA="10.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="[DEFAULT]",FA={[pd]:"fire-core",[fA]:"fire-core-compat",[mA]:"fire-analytics",[pA]:"fire-analytics-compat",[yA]:"fire-app-check",[gA]:"fire-app-check-compat",[_A]:"fire-auth",[vA]:"fire-auth-compat",[wA]:"fire-rtdb",[EA]:"fire-rtdb-compat",[TA]:"fire-fn",[IA]:"fire-fn-compat",[SA]:"fire-iid",[RA]:"fire-iid-compat",[AA]:"fire-fcm",[PA]:"fire-fcm-compat",[CA]:"fire-perf",[kA]:"fire-perf-compat",[NA]:"fire-rc",[xA]:"fire-rc-compat",[DA]:"fire-gcs",[OA]:"fire-gcs-compat",[bA]:"fire-fst",[VA]:"fire-fst-compat",[LA]:"fire-vertex","fire-js":"fire-js",[MA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new Map,jA=new Map,gd=new Map;function Wg(t,e){try{t.container.addComponent(e)}catch(n){Xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yr(t){const e=t.name;if(gd.has(e))return Xr.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,t);for(const n of Yl.values())Wg(n,t);for(const n of jA.values())Wg(n,t);return!0}function bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Qt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new Yo("app","Firebase",BA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=UA;function z0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:md,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=M0()),!n)throw hr.create("no-options");const s=Yl.get(i);if(s){if(Lo(n,s.options)&&Lo(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new QR(i);for(const u of gd.values())o.addComponent(u);const l=new zA(n,r,o);return Yl.set(i,l),l}function bf(t=md){const e=Yl.get(t);if(!e&&t===md&&M0())return z0();if(!e)throw hr.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let i=(r=FA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xr.warn(l.join(" "));return}Yr(new gr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="firebase-heartbeat-database",HA=1,Vo="firebase-heartbeat-store";let ih=null;function $0(){return ih||(ih=lA($A,HA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),ih}async function qA(t){try{const n=(await $0()).transaction(Vo),r=await n.objectStore(Vo).get(H0(t));return await n.done,r}catch(e){if(e instanceof an)Xr.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xr.warn(n.message)}}}async function Kg(t,e){try{const r=(await $0()).transaction(Vo,"readwrite");await r.objectStore(Vo).put(e,H0(t)),await r.done}catch(n){if(n instanceof an)Xr.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xr.warn(r.message)}}}function H0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=1024,KA=30*24*60*60*1e3;class GA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gg();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=KA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gg(),{heartbeatsToSend:r,unsentEntries:i}=QA(this._heartbeatsCache.heartbeats),s=Xl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Gg(){return new Date().toISOString().substring(0,10)}function QA(t,e=WA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return MR()?UR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qg(t){return Xl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t){Yr(new gr("platform-logger",e=>new hA(e),"PRIVATE")),Yr(new gr("heartbeat",e=>new GA(e),"PRIVATE")),Zt(pd,qg,t),Zt(pd,qg,"esm2017"),Zt("fire-js","")}YA("");var JA="firebase",ZA="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(JA,ZA,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="firebasestorage.googleapis.com",W0="storageBucket",eP=2*60*1e3,tP=10*60*1e3,nP=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends an{constructor(e,n,r=0){super(sh(e),`Firebase Storage: ${n} (${sh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ie.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function sh(t){return"storage/"+t}function Lf(){const t="An unknown error occurred, please check the error payload for server response.";return new Ie(pe.UNKNOWN,t)}function rP(t){return new Ie(pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function iP(t){return new Ie(pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function sP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ie(pe.UNAUTHENTICATED,t)}function oP(){return new Ie(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function aP(t){return new Ie(pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function K0(){return new Ie(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function G0(){return new Ie(pe.CANCELED,"User canceled the upload/download.")}function lP(t){return new Ie(pe.INVALID_URL,"Invalid URL '"+t+"'.")}function uP(t){return new Ie(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cP(){return new Ie(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+W0+"' property when initializing the app?")}function Q0(){return new Ie(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function hP(){return new Ie(pe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function dP(){return new Ie(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function fP(t){return new Ie(pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yd(t){return new Ie(pe.INVALID_ARGUMENT,t)}function X0(){return new Ie(pe.APP_DELETED,"The Firebase app was deleted.")}function pP(t){return new Ie(pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function uo(t,e){return new Ie(pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $s(t){throw new Ie(pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Tt.makeFromUrl(e,n)}catch{return new Tt(e,"")}if(r.path==="")return r;throw uP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${f}/b/${i}/o${m}`,"i"),P={bucket:1,path:3},k=n===q0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",v=new RegExp(`^https?://${k}/${i}/${x}`,"i"),I=[{regex:l,indices:u,postModify:s},{regex:E,indices:P,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<I.length;D++){const L=I[D],M=L.regex.exec(e);if(M){const T=M[L.indices.bucket];let y=M[L.indices.path];y||(y=""),r=new Tt(T,y),L.postModify(r);break}}if(r==null)throw lP(e);return r}}class mP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...x){c||(c=!0,e.apply(null,x))}function p(x){i=setTimeout(()=>{i=null,t(E,u())},x)}function m(){s&&clearTimeout(s)}function E(x,...v){if(c){m();return}if(x){m(),f.call(null,x,...v);return}if(u()||o){m(),f.call(null,x,...v);return}r<64&&(r*=2);let I;l===1?(l=2,I=0):I=(r+Math.random())*1e3,p(I)}let P=!1;function k(x){P||(P=!0,m(),!c&&(i!==null?(x||(l=2),clearTimeout(i),p(0)):x||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function yP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){return t!==void 0}function vP(t){return typeof t=="function"}function wP(t){return typeof t=="object"&&!Array.isArray(t)}function Lu(t){return typeof t=="string"||t instanceof String}function Xg(t){return Vf()&&t instanceof Blob}function Vf(){return typeof Blob<"u"}function Yg(t,e,n,r){if(r<e)throw yd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw yd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Y0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $r;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($r||($r={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e,n,r,i,s,o,l,u,c,f,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,P)=>{this.resolve_=E,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Wa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===$r.NO_ERROR,u=s.getStatus();if(!l||J0(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===$r.ABORT;r(!1,new Wa(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Wa(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());_P(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Lf();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?X0():G0();o(u)}else{const u=K0();o(u)}};this.canceled_?n(!1,new Wa(!1,null,!0)):this.backoffId_=gP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&yP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function TP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function IP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function SP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function RP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function AP(t,e,n,r,i,s,o=!0){const l=Y0(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return SP(c,e),TP(c,n),IP(c,s),RP(c,r),new EP(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function CP(...t){const e=PP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Vf())return new Blob(t);throw new Ie(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function kP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t){if(typeof atob>"u")throw fP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class oh{constructor(e,n){this.data=e,this.contentType=n||null}}function xP(t,e){switch(t){case Xt.RAW:return new oh(Z0(e));case Xt.BASE64:case Xt.BASE64URL:return new oh(e1(t,e));case Xt.DATA_URL:return new oh(OP(e),bP(e))}throw Lf()}function Z0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function DP(t){let e;try{e=decodeURIComponent(t)}catch{throw uo(Xt.DATA_URL,"Malformed data URL.")}return Z0(e)}function e1(t,e){switch(t){case Xt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw uo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Xt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw uo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=NP(e)}catch(i){throw i.message.includes("polyfill")?i:uo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class t1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw uo(Xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=LP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function OP(t){const e=new t1(t);return e.base64?e1(Xt.BASE64,e.rest):DP(e.rest)}function bP(t){return new t1(t).contentType}function LP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){let r=0,i="";Xg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Xg(this.data_)){const r=this.data_,i=kP(r,e,n);return i===null?null:new qn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new qn(r,!0)}}static getBlob(...e){if(Vf()){const n=e.map(r=>r instanceof qn?r.data_:r);return new qn(CP.apply(null,n))}else{const n=e.map(o=>Lu(o)?xP(Xt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new qn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){let e;try{e=JSON.parse(t)}catch{return null}return wP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function r1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t,e){return e}class ot{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||UP}}let Ka=null;function FP(t){return!Lu(t)||t.length<2?t:r1(t)}function i1(){if(Ka)return Ka;const t=[];t.push(new ot("bucket")),t.push(new ot("generation")),t.push(new ot("metageneration")),t.push(new ot("name","fullPath",!0));function e(s,o){return FP(o)}const n=new ot("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ot("size");return i.xform=r,t.push(i),t.push(new ot("timeCreated")),t.push(new ot("updated")),t.push(new ot("md5Hash",null,!0)),t.push(new ot("cacheControl",null,!0)),t.push(new ot("contentDisposition",null,!0)),t.push(new ot("contentEncoding",null,!0)),t.push(new ot("contentLanguage",null,!0)),t.push(new ot("contentType",null,!0)),t.push(new ot("metadata","customMetadata",!0)),Ka=t,Ka}function jP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Tt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function BP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return jP(r,t),r}function s1(t,e,n){const r=n1(e);return r===null?null:BP(t,r,n)}function zP(t,e,n,r){const i=n1(e);if(i===null||!Lu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),E=ps(m,n,r),P=Y0({alt:"media",token:c});return E+P})[0]}function o1(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class li{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t){if(!t)throw Lf()}function Mf(t,e){function n(r,i){const s=s1(t,i,e);return Rn(s!==null),s}return n}function $P(t,e){function n(r,i){const s=s1(t,i,e);return Rn(s!==null),zP(s,i,t.host,t._protocol)}return n}function Zo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=oP():i=sP():n.getStatus()===402?i=iP(t.bucket):n.getStatus()===403?i=aP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Uf(t){const e=Zo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=rP(t.path)),s.serverResponse=i.serverResponse,s}return n}function HP(t,e,n){const r=e.fullServerUrl(),i=ps(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new li(i,s,Mf(t,n),o);return l.errorHandler=Uf(e),l}function qP(t,e,n){const r=e.fullServerUrl(),i=ps(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new li(i,s,$P(t,n),o);return l.errorHandler=Uf(e),l}function WP(t,e){const n=e.fullServerUrl(),r=ps(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,c){}const l=new li(r,i,o,s);return l.successCodes=[200,204],l.errorHandler=Uf(e),l}function KP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function a1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=KP(null,e)),r}function GP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let I="";for(let D=0;D<2;D++)I=I+Math.random().toString().slice(2);return I}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=a1(e,r,i),f=o1(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",E=qn.getBlob(p,r,m);if(E===null)throw Q0();const P={name:c.fullPath},k=ps(s,t.host,t._protocol),x="POST",v=t.maxUploadRetryTime,_=new li(k,x,Mf(t,n),v);return _.urlParams=P,_.headers=o,_.body=E.uploadData(),_.errorHandler=Zo(e),_}class Jl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Ff(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Rn(!1)}return Rn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function QP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=a1(e,r,i),l={name:o.fullPath},u=ps(s,t.host,t._protocol),c="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=o1(o,n),m=t.maxUploadRetryTime;function E(k){Ff(k);let x;try{x=k.getResponseHeader("X-Goog-Upload-URL")}catch{Rn(!1)}return Rn(Lu(x)),x}const P=new li(u,c,E,m);return P.urlParams=l,P.headers=f,P.body=p,P.errorHandler=Zo(e),P}function XP(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const f=Ff(c,["active","final"]);let p=null;try{p=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Rn(!1)}p||Rn(!1);const m=Number(p);return Rn(!isNaN(m)),new Jl(m,r.size(),f==="final")}const o="POST",l=t.maxUploadRetryTime,u=new li(n,o,s,l);return u.headers=i,u.errorHandler=Zo(e),u}const Jg=256*1024;function YP(t,e,n,r,i,s,o,l){const u=new Jl(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw hP();const c=u.total-u.current;let f=c;i>0&&(f=Math.min(f,i));const p=u.current,m=p+f;let E="";f===0?E="finalize":c===f?E="upload, finalize":E="upload";const P={"X-Goog-Upload-Command":E,"X-Goog-Upload-Offset":`${u.current}`},k=r.slice(p,m);if(k===null)throw Q0();function x(D,L){const M=Ff(D,["active","final"]),T=u.current+f,y=r.size();let S;return M==="final"?S=Mf(e,s)(D,L):S=null,new Jl(T,y,M==="final",S)}const v="POST",_=e.maxUploadRetryTime,I=new li(n,v,x,_);return I.headers=P,I.body=k.uploadData(),I.progressCallback=l||null,I.errorHandler=Zo(t),I}const dt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ah(t){switch(t){case"running":case"pausing":case"canceling":return dt.RUNNING;case"paused":return dt.PAUSED;case"success":return dt.SUCCESS;case"canceled":return dt.CANCELED;case"error":return dt.ERROR;default:return dt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n,r){if(vP(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class ZP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$r.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$r.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$r.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw $s("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $s("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $s("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $s("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $s("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class e2 extends ZP{initXhr(){this.xhr_.responseType="text"}}function Vr(){return new e2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=i1(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(pe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(J0(i.status,[]))if(s)i=K0();else{this.sleepTime=Math.max(this.sleepTime*2,nP),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(pe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=QP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Vr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=XP(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Vr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Jg*this._chunkMultiplier,n=new Jl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=YP(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const l=this._ref.storage._makeRequest(o,Vr,i,s,!1);this._request=l,l.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Jg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=HP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Vr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=GP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Vr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=G0(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ah(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new JP(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ah(this._state)){case dt.SUCCESS:yi(this._resolve.bind(null,this.snapshot))();break;case dt.CANCELED:case dt.ERROR:const n=this._reject;yi(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ah(this._state)){case dt.RUNNING:case dt.PAUSED:e.next&&yi(e.next.bind(e,this.snapshot))();break;case dt.SUCCESS:e.complete&&yi(e.complete.bind(e))();break;case dt.CANCELED:case dt.ERROR:e.error&&yi(e.error.bind(e,this._error))();break;default:e.error&&yi(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n){this._service=e,n instanceof Tt?this._location=n:this._location=Tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Jr(e,n)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return r1(this._location.path)}get storage(){return this._service}get parent(){const e=VP(this._location.path);if(e===null)return null;const n=new Tt(this._location.bucket,e);return new Jr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw pP(e)}}function n2(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new t2(t,new qn(e),n)}function r2(t){t._throwIfRoot("getDownloadURL");const e=qP(t.storage,t._location,i1());return t.storage.makeRequestWithTokens(e,Vr).then(n=>{if(n===null)throw dP();return n})}function i2(t){t._throwIfRoot("deleteObject");const e=WP(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Vr)}function s2(t,e){const n=MP(t._location.path,e),r=new Tt(t._location.bucket,n);return new Jr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){return/^[A-Za-z]+:\/\//.test(t)}function a2(t,e){return new Jr(t,e)}function l1(t,e){if(t instanceof jf){const n=t;if(n._bucket==null)throw cP();const r=new Jr(n,n._bucket);return e!=null?l1(r,e):r}else return e!==void 0?s2(t,e):t}function l2(t,e){if(e&&o2(e)){if(t instanceof jf)return a2(t,e);throw yd("To use ref(service, url), the first argument must be a Storage instance.")}else return l1(t,e)}function Zg(t,e){const n=e==null?void 0:e[W0];return n==null?null:Tt.makeFromBucketSpec(n,t)}function u2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:F0(i,t.app.options.projectId))}class jf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=q0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eP,this._maxUploadRetryTime=tP,this._requests=new Set,i!=null?this._bucket=Tt.makeFromBucketSpec(i,this._host):this._bucket=Zg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=Zg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new mP(X0());{const o=AP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const ey="@firebase/storage",ty="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="storage";function c2(t,e,n){return t=ye(t),n2(t,e,n)}function h2(t){return t=ye(t),r2(t)}function d2(t){return t=ye(t),i2(t)}function ny(t,e){return t=ye(t),l2(t,e)}function f2(t=bf(),e){t=ye(t);const r=bu(t,u1).getImmediate({identifier:e}),i=V0("storage");return i&&p2(r,...i),r}function p2(t,e,n,r={}){u2(t,e,n,r)}function m2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new jf(n,r,i,e,ai)}function g2(){Yr(new gr(u1,m2,"PUBLIC").setMultipleInstances(!0)),Zt(ey,ty,""),Zt(ey,ty,"esm2017")}g2();var ry=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,c1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function S(){}S.prototype=y.prototype,T.D=y.prototype,T.prototype=new S,T.prototype.constructor=T,T.C=function(w,C,N){for(var A=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)A[ht-2]=arguments[ht];return y.prototype[C].apply(w,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,S){S||(S=0);var w=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)w[C]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(C=0;16>C;++C)w[C]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=T.g[0],S=T.g[1],C=T.g[2];var N=T.g[3],A=y+(N^S&(C^N))+w[0]+3614090360&4294967295;y=S+(A<<7&4294967295|A>>>25),A=N+(C^y&(S^C))+w[1]+3905402710&4294967295,N=y+(A<<12&4294967295|A>>>20),A=C+(S^N&(y^S))+w[2]+606105819&4294967295,C=N+(A<<17&4294967295|A>>>15),A=S+(y^C&(N^y))+w[3]+3250441966&4294967295,S=C+(A<<22&4294967295|A>>>10),A=y+(N^S&(C^N))+w[4]+4118548399&4294967295,y=S+(A<<7&4294967295|A>>>25),A=N+(C^y&(S^C))+w[5]+1200080426&4294967295,N=y+(A<<12&4294967295|A>>>20),A=C+(S^N&(y^S))+w[6]+2821735955&4294967295,C=N+(A<<17&4294967295|A>>>15),A=S+(y^C&(N^y))+w[7]+4249261313&4294967295,S=C+(A<<22&4294967295|A>>>10),A=y+(N^S&(C^N))+w[8]+1770035416&4294967295,y=S+(A<<7&4294967295|A>>>25),A=N+(C^y&(S^C))+w[9]+2336552879&4294967295,N=y+(A<<12&4294967295|A>>>20),A=C+(S^N&(y^S))+w[10]+4294925233&4294967295,C=N+(A<<17&4294967295|A>>>15),A=S+(y^C&(N^y))+w[11]+2304563134&4294967295,S=C+(A<<22&4294967295|A>>>10),A=y+(N^S&(C^N))+w[12]+1804603682&4294967295,y=S+(A<<7&4294967295|A>>>25),A=N+(C^y&(S^C))+w[13]+4254626195&4294967295,N=y+(A<<12&4294967295|A>>>20),A=C+(S^N&(y^S))+w[14]+2792965006&4294967295,C=N+(A<<17&4294967295|A>>>15),A=S+(y^C&(N^y))+w[15]+1236535329&4294967295,S=C+(A<<22&4294967295|A>>>10),A=y+(C^N&(S^C))+w[1]+4129170786&4294967295,y=S+(A<<5&4294967295|A>>>27),A=N+(S^C&(y^S))+w[6]+3225465664&4294967295,N=y+(A<<9&4294967295|A>>>23),A=C+(y^S&(N^y))+w[11]+643717713&4294967295,C=N+(A<<14&4294967295|A>>>18),A=S+(N^y&(C^N))+w[0]+3921069994&4294967295,S=C+(A<<20&4294967295|A>>>12),A=y+(C^N&(S^C))+w[5]+3593408605&4294967295,y=S+(A<<5&4294967295|A>>>27),A=N+(S^C&(y^S))+w[10]+38016083&4294967295,N=y+(A<<9&4294967295|A>>>23),A=C+(y^S&(N^y))+w[15]+3634488961&4294967295,C=N+(A<<14&4294967295|A>>>18),A=S+(N^y&(C^N))+w[4]+3889429448&4294967295,S=C+(A<<20&4294967295|A>>>12),A=y+(C^N&(S^C))+w[9]+568446438&4294967295,y=S+(A<<5&4294967295|A>>>27),A=N+(S^C&(y^S))+w[14]+3275163606&4294967295,N=y+(A<<9&4294967295|A>>>23),A=C+(y^S&(N^y))+w[3]+4107603335&4294967295,C=N+(A<<14&4294967295|A>>>18),A=S+(N^y&(C^N))+w[8]+1163531501&4294967295,S=C+(A<<20&4294967295|A>>>12),A=y+(C^N&(S^C))+w[13]+2850285829&4294967295,y=S+(A<<5&4294967295|A>>>27),A=N+(S^C&(y^S))+w[2]+4243563512&4294967295,N=y+(A<<9&4294967295|A>>>23),A=C+(y^S&(N^y))+w[7]+1735328473&4294967295,C=N+(A<<14&4294967295|A>>>18),A=S+(N^y&(C^N))+w[12]+2368359562&4294967295,S=C+(A<<20&4294967295|A>>>12),A=y+(S^C^N)+w[5]+4294588738&4294967295,y=S+(A<<4&4294967295|A>>>28),A=N+(y^S^C)+w[8]+2272392833&4294967295,N=y+(A<<11&4294967295|A>>>21),A=C+(N^y^S)+w[11]+1839030562&4294967295,C=N+(A<<16&4294967295|A>>>16),A=S+(C^N^y)+w[14]+4259657740&4294967295,S=C+(A<<23&4294967295|A>>>9),A=y+(S^C^N)+w[1]+2763975236&4294967295,y=S+(A<<4&4294967295|A>>>28),A=N+(y^S^C)+w[4]+1272893353&4294967295,N=y+(A<<11&4294967295|A>>>21),A=C+(N^y^S)+w[7]+4139469664&4294967295,C=N+(A<<16&4294967295|A>>>16),A=S+(C^N^y)+w[10]+3200236656&4294967295,S=C+(A<<23&4294967295|A>>>9),A=y+(S^C^N)+w[13]+681279174&4294967295,y=S+(A<<4&4294967295|A>>>28),A=N+(y^S^C)+w[0]+3936430074&4294967295,N=y+(A<<11&4294967295|A>>>21),A=C+(N^y^S)+w[3]+3572445317&4294967295,C=N+(A<<16&4294967295|A>>>16),A=S+(C^N^y)+w[6]+76029189&4294967295,S=C+(A<<23&4294967295|A>>>9),A=y+(S^C^N)+w[9]+3654602809&4294967295,y=S+(A<<4&4294967295|A>>>28),A=N+(y^S^C)+w[12]+3873151461&4294967295,N=y+(A<<11&4294967295|A>>>21),A=C+(N^y^S)+w[15]+530742520&4294967295,C=N+(A<<16&4294967295|A>>>16),A=S+(C^N^y)+w[2]+3299628645&4294967295,S=C+(A<<23&4294967295|A>>>9),A=y+(C^(S|~N))+w[0]+4096336452&4294967295,y=S+(A<<6&4294967295|A>>>26),A=N+(S^(y|~C))+w[7]+1126891415&4294967295,N=y+(A<<10&4294967295|A>>>22),A=C+(y^(N|~S))+w[14]+2878612391&4294967295,C=N+(A<<15&4294967295|A>>>17),A=S+(N^(C|~y))+w[5]+4237533241&4294967295,S=C+(A<<21&4294967295|A>>>11),A=y+(C^(S|~N))+w[12]+1700485571&4294967295,y=S+(A<<6&4294967295|A>>>26),A=N+(S^(y|~C))+w[3]+2399980690&4294967295,N=y+(A<<10&4294967295|A>>>22),A=C+(y^(N|~S))+w[10]+4293915773&4294967295,C=N+(A<<15&4294967295|A>>>17),A=S+(N^(C|~y))+w[1]+2240044497&4294967295,S=C+(A<<21&4294967295|A>>>11),A=y+(C^(S|~N))+w[8]+1873313359&4294967295,y=S+(A<<6&4294967295|A>>>26),A=N+(S^(y|~C))+w[15]+4264355552&4294967295,N=y+(A<<10&4294967295|A>>>22),A=C+(y^(N|~S))+w[6]+2734768916&4294967295,C=N+(A<<15&4294967295|A>>>17),A=S+(N^(C|~y))+w[13]+1309151649&4294967295,S=C+(A<<21&4294967295|A>>>11),A=y+(C^(S|~N))+w[4]+4149444226&4294967295,y=S+(A<<6&4294967295|A>>>26),A=N+(S^(y|~C))+w[11]+3174756917&4294967295,N=y+(A<<10&4294967295|A>>>22),A=C+(y^(N|~S))+w[2]+718787259&4294967295,C=N+(A<<15&4294967295|A>>>17),A=S+(N^(C|~y))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var S=y-this.blockSize,w=this.B,C=this.h,N=0;N<y;){if(C==0)for(;N<=S;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<y;)if(w[C++]=T.charCodeAt(N++),C==this.blockSize){i(this,w),C=0;break}}else for(;N<y;)if(w[C++]=T[N++],C==this.blockSize){i(this,w),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var S=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=S&255,S/=256;for(this.u(T),T=Array(16),y=S=0;4>y;++y)for(var w=0;32>w;w+=8)T[S++]=this.g[y]>>>w&255;return T};function s(T,y){var S=l;return Object.prototype.hasOwnProperty.call(S,T)?S[T]:S[T]=y(T)}function o(T,y){this.h=y;for(var S=[],w=!0,C=T.length-1;0<=C;C--){var N=T[C]|0;w&&N==y||(S[C]=N,w=!1)}this.g=S}var l={};function u(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return x(c(-T));for(var y=[],S=1,w=0;T>=S;w++)y[w]=T/S|0,S*=4294967296;return new o(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return x(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(y,8)),w=p,C=0;C<T.length;C+=8){var N=Math.min(8,T.length-C),A=parseInt(T.substring(C,C+N),y);8>N?(N=c(Math.pow(y,N)),w=w.j(N).add(c(A))):(w=w.j(S),w=w.add(c(A)))}return w}var p=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var T=0,y=1,S=0;S<this.g.length;S++){var w=this.i(S);T+=(0<=w?w:4294967296+w)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(k(this))return"-"+x(this).toString(T);for(var y=c(Math.pow(T,6)),S=this,w="";;){var C=D(S,y).g;S=v(S,C.j(y));var N=((0<S.g.length?S.g[0]:S.h)>>>0).toString(T);if(S=C,P(S))return N+w;for(;6>N.length;)N="0"+N;w=N+w}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=v(this,T),k(T)?-1:P(T)?0:1};function x(T){for(var y=T.g.length,S=[],w=0;w<y;w++)S[w]=~T.g[w];return new o(S,~T.h).add(m)}t.abs=function(){return k(this)?x(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],w=0,C=0;C<=y;C++){var N=w+(this.i(C)&65535)+(T.i(C)&65535),A=(N>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);w=A>>>16,N&=65535,A&=65535,S[C]=A<<16|N}return new o(S,S[S.length-1]&-2147483648?-1:0)};function v(T,y){return T.add(x(y))}t.j=function(T){if(P(this)||P(T))return p;if(k(this))return k(T)?x(this).j(x(T)):x(x(this).j(T));if(k(T))return x(this.j(x(T)));if(0>this.l(E)&&0>T.l(E))return c(this.m()*T.m());for(var y=this.g.length+T.g.length,S=[],w=0;w<2*y;w++)S[w]=0;for(w=0;w<this.g.length;w++)for(var C=0;C<T.g.length;C++){var N=this.i(w)>>>16,A=this.i(w)&65535,ht=T.i(C)>>>16,Cr=T.i(C)&65535;S[2*w+2*C]+=A*Cr,_(S,2*w+2*C),S[2*w+2*C+1]+=N*Cr,_(S,2*w+2*C+1),S[2*w+2*C+1]+=A*ht,_(S,2*w+2*C+1),S[2*w+2*C+2]+=N*ht,_(S,2*w+2*C+2)}for(w=0;w<y;w++)S[w]=S[2*w+1]<<16|S[2*w];for(w=y;w<2*y;w++)S[w]=0;return new o(S,0)};function _(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function I(T,y){this.g=T,this.h=y}function D(T,y){if(P(y))throw Error("division by zero");if(P(T))return new I(p,p);if(k(T))return y=D(x(T),y),new I(x(y.g),x(y.h));if(k(y))return y=D(T,x(y)),new I(x(y.g),y.h);if(30<T.g.length){if(k(T)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var S=m,w=y;0>=w.l(T);)S=L(S),w=L(w);var C=M(S,1),N=M(w,1);for(w=M(w,2),S=M(S,2);!P(w);){var A=N.add(w);0>=A.l(T)&&(C=C.add(S),N=A),w=M(w,1),S=M(S,1)}return y=v(T,C.j(y)),new I(C,y)}for(C=p;0<=T.l(y);){for(S=Math.max(1,Math.floor(T.m()/y.m())),w=Math.ceil(Math.log(S)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),N=c(S),A=N.j(y);k(A)||0<A.l(T);)S-=w,N=c(S),A=N.j(y);P(N)&&(N=m),C=C.add(N),T=v(T,A)}return new I(C,T)}t.A=function(T){return D(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],w=0;w<y;w++)S[w]=this.i(w)&T.i(w);return new o(S,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],w=0;w<y;w++)S[w]=this.i(w)|T.i(w);return new o(S,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],w=0;w<y;w++)S[w]=this.i(w)^T.i(w);return new o(S,this.h^T.h)};function L(T){for(var y=T.g.length+1,S=[],w=0;w<y;w++)S[w]=T.i(w)<<1|T.i(w-1)>>>31;return new o(S,T.h)}function M(T,y){var S=y>>5;y%=32;for(var w=T.g.length-S,C=[],N=0;N<w;N++)C[N]=0<y?T.i(N+S)>>>y|T.i(N+S+1)<<32-y:T.i(N+S);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,c1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Hr=o}).apply(typeof ry<"u"?ry:typeof self<"u"?self:typeof window<"u"?window:{});var Ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h1,d1,Ys,f1,dl,_d,p1,m1,g1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ga=="object"&&Ga];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var O=a[g];if(!(O in d))break e;d=d[O]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,O={next:function(){if(!g&&d<a.length){var b=d++;return{value:h(b,a[b]),done:!1}}return g=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,g),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function E(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,O,b){for(var B=Array(arguments.length-2),le=2;le<arguments.length;le++)B[le-2]=arguments[le];return h.prototype[O].apply(g,B)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function x(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const O=a.length||0,b=g.length||0;a.length=O+b;for(let B=0;B<b;B++)a[O+B]=g[B]}else a.push(g)}}class v{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function M(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function T(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,h){let d,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(d in g)a[d]=g[d];for(let b=0;b<S.length;b++)d=S[b],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function C(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function N(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ht{constructor(){this.h=this.g=null}add(h,d){const g=Cr.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Cr=new v(()=>new ws,a=>a.reset());class ws{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ln,z=!1,Q=new ht,J=()=>{const a=l.Promise.resolve(void 0);ln=()=>{a.then(_e)}};var _e=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){N(d)}var h=Cr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Pe.prototype.h=function(){this.defaultPrevented=!0};var un=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function cn(a,h){if(Pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{D(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:hn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}P(cn,Pe);var hn={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),dE=0;function fE(a,h,d,g,O){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=O,this.key=++dE,this.da=this.fa=!1}function da(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function fa(a){this.src=a,this.g={},this.h=0}fa.prototype.add=function(a,h,d,g,O){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var B=sc(a,h,g,O);return-1<B?(h=a[B],d||(h.fa=!1)):(h=new fE(h,this.src,b,!!g,O),h.fa=d,a.push(h)),h};function ic(a,h){var d=h.type;if(d in a.g){var g=a.g[d],O=Array.prototype.indexOf.call(g,h,void 0),b;(b=0<=O)&&Array.prototype.splice.call(g,O,1),b&&(da(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function sc(a,h,d,g){for(var O=0;O<a.length;++O){var b=a[O];if(!b.da&&b.listener==h&&b.capture==!!d&&b.ha==g)return O}return-1}var oc="closure_lm_"+(1e6*Math.random()|0),ac={};function Ap(a,h,d,g,O){if(Array.isArray(h)){for(var b=0;b<h.length;b++)Ap(a,h[b],d,g,O);return null}return d=kp(d),a&&a[dn]?a.K(h,d,c(g)?!!g.capture:!!g,O):pE(a,h,d,!1,g,O)}function pE(a,h,d,g,O,b){if(!h)throw Error("Invalid event type");var B=c(O)?!!O.capture:!!O,le=uc(a);if(le||(a[oc]=le=new fa(a)),d=le.add(h,d,g,B,b),d.proxy)return d;if(g=mE(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)un||(O=B),O===void 0&&(O=!1),a.addEventListener(h.toString(),g,O);else if(a.attachEvent)a.attachEvent(Cp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function mE(){function a(d){return h.call(a.src,a.listener,d)}const h=gE;return a}function Pp(a,h,d,g,O){if(Array.isArray(h))for(var b=0;b<h.length;b++)Pp(a,h[b],d,g,O);else g=c(g)?!!g.capture:!!g,d=kp(d),a&&a[dn]?(a=a.i,h=String(h).toString(),h in a.g&&(b=a.g[h],d=sc(b,d,g,O),-1<d&&(da(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[h],a.h--)))):a&&(a=uc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=sc(h,d,g,O)),(d=-1<a?h[a]:null)&&lc(d))}function lc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[dn])ic(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Cp(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=uc(h))?(ic(d,a),d.h==0&&(d.src=null,h[oc]=null)):da(a)}}}function Cp(a){return a in ac?ac[a]:ac[a]="on"+a}function gE(a,h){if(a.da)a=!0;else{h=new cn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&lc(a),a=d.call(g,h)}return a}function uc(a){return a=a[oc],a instanceof fa?a:null}var cc="__closure_events_fn_"+(1e9*Math.random()>>>0);function kp(a){return typeof a=="function"?a:(a[cc]||(a[cc]=function(h){return a.handleEvent(h)}),a[cc])}function Ke(){ae.call(this),this.i=new fa(this),this.M=this,this.F=null}P(Ke,ae),Ke.prototype[dn]=!0,Ke.prototype.removeEventListener=function(a,h,d,g){Pp(this,a,h,d,g)};function it(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Pe(h,a);else if(h instanceof Pe)h.target=h.target||a;else{var O=h;h=new Pe(g,a),w(h,O)}if(O=!0,d)for(var b=d.length-1;0<=b;b--){var B=h.g=d[b];O=pa(B,g,!0,h)&&O}if(B=h.g=a,O=pa(B,g,!0,h)&&O,O=pa(B,g,!1,h)&&O,d)for(b=0;b<d.length;b++)B=h.g=d[b],O=pa(B,g,!1,h)&&O}Ke.prototype.N=function(){if(Ke.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)da(d[g]);delete a.g[h],a.h--}}this.F=null},Ke.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Ke.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function pa(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,b=0;b<h.length;++b){var B=h[b];if(B&&!B.da&&B.capture==d){var le=B.listener,Fe=B.ha||B.src;B.fa&&ic(a.i,B),O=le.call(Fe,g)!==!1&&O}}return O&&!g.defaultPrevented}function Np(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function xp(a){a.g=Np(()=>{a.g=null,a.i&&(a.i=!1,xp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class yE extends ae{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:xp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Es(a){ae.call(this),this.h=a,this.g={}}P(Es,ae);var Dp=[];function Op(a){M(a.g,function(h,d){this.g.hasOwnProperty(d)&&lc(h)},a),a.g={}}Es.prototype.N=function(){Es.aa.N.call(this),Op(this)},Es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hc=l.JSON.stringify,_E=l.JSON.parse,vE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function dc(){}dc.prototype.h=null;function bp(a){return a.h||(a.h=a.i())}function Lp(){}var Ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fc(){Pe.call(this,"d")}P(fc,Pe);function pc(){Pe.call(this,"c")}P(pc,Pe);var kr={},Vp=null;function ma(){return Vp=Vp||new Ke}kr.La="serverreachability";function Mp(a){Pe.call(this,kr.La,a)}P(Mp,Pe);function Is(a){const h=ma();it(h,new Mp(h))}kr.STAT_EVENT="statevent";function Up(a,h){Pe.call(this,kr.STAT_EVENT,a),this.stat=h}P(Up,Pe);function st(a){const h=ma();it(h,new Up(h,a))}kr.Ma="timingevent";function Fp(a,h){Pe.call(this,kr.Ma,a),this.size=h}P(Fp,Pe);function Ss(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Rs(){this.g=!0}Rs.prototype.xa=function(){this.g=!1};function wE(a,h,d,g,O,b){a.info(function(){if(a.g)if(b)for(var B="",le=b.split("&"),Fe=0;Fe<le.length;Fe++){var ie=le[Fe].split("=");if(1<ie.length){var Ge=ie[0];ie=ie[1];var Qe=Ge.split("_");B=2<=Qe.length&&Qe[1]=="type"?B+(Ge+"="+ie+"&"):B+(Ge+"=redacted&")}}else B=null;else B=b;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+h+`
`+d+`
`+B})}function EE(a,h,d,g,O,b,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+h+`
`+d+`
`+b+" "+B})}function di(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+IE(a,d)+(g?" "+g:"")})}function TE(a,h){a.info(function(){return"TIMEOUT: "+h})}Rs.prototype.info=function(){};function IE(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var O=g[1];if(Array.isArray(O)&&!(1>O.length)){var b=O[0];if(b!="noop"&&b!="stop"&&b!="close")for(var B=1;B<O.length;B++)O[B]=""}}}}return hc(d)}catch{return h}}var ga={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mc;function ya(){}P(ya,dc),ya.prototype.g=function(){return new XMLHttpRequest},ya.prototype.i=function(){return{}},mc=new ya;function Vn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new Es(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bp}function Bp(){this.i=null,this.g="",this.h=!1}var zp={},gc={};function yc(a,h,d){a.L=1,a.v=Ea(fn(h)),a.m=d,a.P=!0,$p(a,null)}function $p(a,h){a.F=Date.now(),_a(a),a.A=fn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),rm(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Bp,a.g=Em(a.j,d?h:null,!a.m),0<a.O&&(a.M=new yE(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Dp[0]=O.toString()),O=Dp);for(var b=0;b<O.length;b++){var B=Ap(d,O[b],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Is(),wE(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const h=this.M;h&&pn(a)==3?h.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const Qe=pn(this.g);var h=this.g.Ba();const mi=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||cm(this.g)))){this.J||Qe!=4||h==7||(h==8||0>=mi?Is(3):Is(2)),_c(this);var d=this.g.Z();this.X=d;t:if(Hp(this)){var g=cm(this.g);a="";var O=g.length,b=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nr(this),As(this);var B="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(b&&h==O-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,EE(this.i,this.u,this.A,this.l,this.R,Qe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Fe=this.g;if((le=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(le)){var ie=le;break t}}ie=null}if(d=ie)di(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vc(this,d);else{this.o=!1,this.s=3,st(12),Nr(this),As(this);break e}}if(this.P){d=!0;let Lt;for(;!this.J&&this.C<B.length;)if(Lt=SE(this,B),Lt==gc){Qe==4&&(this.s=4,st(14),d=!1),di(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==zp){this.s=4,st(15),di(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else di(this.i,this.l,Lt,null),vc(this,Lt);if(Hp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||B.length!=0||this.h.h||(this.s=1,st(16),d=!1),this.o=this.o&&d,!d)di(this.i,this.l,B,"[Invalid Chunked Response]"),Nr(this),As(this);else if(0<B.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Rc(Ge),Ge.M=!0,st(11))}}else di(this.i,this.l,B,null),vc(this,B);Qe==4&&Nr(this),this.o&&!this.J&&(Qe==4?ym(this.j,this):(this.o=!1,_a(this)))}else BE(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),Nr(this),As(this)}}}catch{}finally{}};function Hp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function SE(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?gc:(d=Number(h.substring(d,g)),isNaN(d)?zp:(g+=1,g+d>h.length?gc:(h=h.slice(g,g+d),a.C=g+d,h)))}Vn.prototype.cancel=function(){this.J=!0,Nr(this)};function _a(a){a.S=Date.now()+a.I,qp(a,a.I)}function qp(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ss(m(a.ba,a),h)}function _c(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(TE(this.i,this.A),this.L!=2&&(Is(),st(17)),Nr(this),this.s=2,As(this)):qp(this,this.S-a)};function As(a){a.j.G==0||a.J||ym(a.j,a)}function Nr(a){_c(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Op(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function vc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||wc(d.h,a))){if(!a.K&&wc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Aa(d),Sa(d);else break e;Sc(d),st(18)}}else d.za=O[1],0<d.za-d.T&&37500>O[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ss(m(d.Za,d),6e3));if(1>=Gp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Dr(d,11)}else if((a.K||d.g==a)&&Aa(d),!_(h))for(O=d.Da.g.parse(h),h=0;h<O.length;h++){let ie=O[h];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const Ge=ie[3];Ge!=null&&(d.la=Ge,d.j.info("VER="+d.la));const Qe=ie[4];Qe!=null&&(d.Aa=Qe,d.j.info("SVER="+d.Aa));const mi=ie[5];mi!=null&&typeof mi=="number"&&0<mi&&(g=1.5*mi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Lt=a.g;if(Lt){const Ca=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ca){var b=g.h;b.g||Ca.indexOf("spdy")==-1&&Ca.indexOf("quic")==-1&&Ca.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ec(b,b.h),b.h=null))}if(g.D){const Ac=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ac&&(g.ya=Ac,he(g.I,g.D,Ac))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var B=a;if(g.qa=wm(g,g.J?g.ia:null,g.W),B.K){Qp(g.h,B);var le=B,Fe=g.L;Fe&&(le.I=Fe),le.B&&(_c(le),_a(le)),g.g=B}else mm(g);0<d.i.length&&Ra(d)}else ie[0]!="stop"&&ie[0]!="close"||Dr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Dr(d,7):Ic(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}Is(4)}catch{}}var RE=class{constructor(a,h){this.g=a,this.map=h}};function Wp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gp(a){return a.h?1:a.g?a.g.size:0}function wc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ec(a,h){a.g?a.g.add(h):a.h=h}function Qp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Wp.prototype.cancel=function(){if(this.i=Xp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function AE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function PE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Yp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=PE(a),g=AE(a),O=g.length,b=0;b<O;b++)h.call(void 0,g[b],d&&d[b],a)}var Jp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CE(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),O=null;if(0<=g){var b=a[d].substring(0,g);O=a[d].substring(g+1)}else b=a[d];h(b,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function xr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof xr){this.h=a.h,va(this,a.j),this.o=a.o,this.g=a.g,wa(this,a.s),this.l=a.l;var h=a.i,d=new ks;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Zp(this,d),this.m=a.m}else a&&(h=String(a).match(Jp))?(this.h=!1,va(this,h[1]||"",!0),this.o=Ps(h[2]||""),this.g=Ps(h[3]||"",!0),wa(this,h[4]),this.l=Ps(h[5]||"",!0),Zp(this,h[6]||"",!0),this.m=Ps(h[7]||"")):(this.h=!1,this.i=new ks(null,this.h))}xr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Cs(h,em,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Cs(h,em,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Cs(d,d.charAt(0)=="/"?xE:NE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Cs(d,OE)),a.join("")};function fn(a){return new xr(a)}function va(a,h,d){a.j=d?Ps(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function wa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Zp(a,h,d){h instanceof ks?(a.i=h,bE(a.i,a.h)):(d||(h=Cs(h,DE)),a.i=new ks(h,a.h))}function he(a,h,d){a.i.set(h,d)}function Ea(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ps(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Cs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,kE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function kE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var em=/[#\/\?@]/g,NE=/[#\?:]/g,xE=/[#\?]/g,DE=/[#\?@]/g,OE=/#/g;function ks(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&CE(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ks.prototype,t.add=function(a,h){Mn(this),this.i=null,a=fi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function tm(a,h){Mn(a),h=fi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function nm(a,h){return Mn(a),h=fi(a,h),a.g.has(h)}t.forEach=function(a,h){Mn(this),this.g.forEach(function(d,g){d.forEach(function(O){a.call(h,O,g,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const O=a[g];for(let b=0;b<O.length;b++)d.push(h[g])}return d},t.V=function(a){Mn(this);let h=[];if(typeof a=="string")nm(this,a)&&(h=h.concat(this.g.get(fi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Mn(this),this.i=null,a=fi(this,a),nm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function rm(a,h,d){tm(a,h),0<d.length&&(a.i=null,a.g.set(fi(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const b=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var O=b;B[g]!==""&&(O+="="+encodeURIComponent(String(B[g]))),a.push(O)}}return this.i=a.join("&")};function fi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function bE(a,h){h&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(d,g){var O=g.toLowerCase();g!=O&&(tm(this,g),rm(this,O,d))},a)),a.j=h}function LE(a,h){const d=new Rs;if(l.Image){const g=new Image;g.onload=E(Un,d,"TestLoadImage: loaded",!0,h,g),g.onerror=E(Un,d,"TestLoadImage: error",!1,h,g),g.onabort=E(Un,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=E(Un,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function VE(a,h){const d=new Rs,g=new AbortController,O=setTimeout(()=>{g.abort(),Un(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(b=>{clearTimeout(O),b.ok?Un(d,"TestPingServer: ok",!0,h):Un(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Un(d,"TestPingServer: error",!1,h)})}function Un(a,h,d,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(d)}catch{}}function ME(){this.g=new vE}function UE(a,h,d){const g=d||"";try{Yp(a,function(O,b){let B=O;c(O)&&(B=hc(O)),h.push(g+b+"="+encodeURIComponent(B))})}catch(O){throw h.push(g+"type="+encodeURIComponent("_badmap")),O}}function Ns(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Ns,dc),Ns.prototype.g=function(){return new Ta(this.l,this.j)},Ns.prototype.i=function(a){return function(){return a}}({});function Ta(a,h){Ke.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Ta,Ke),t=Ta.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ds(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;im(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function im(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?xs(this):Ds(this),this.readyState==3&&im(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,xs(this))},t.Qa=function(a){this.g&&(this.response=a,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ds(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sm(a){let h="";return M(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Tc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=sm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,h,d))}function Se(a){Ke.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Se,Ke);var FE=/^https?$/i,jE=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mc.g(),this.v=this.o?bp(this.o):bp(mc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){om(this,b);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)d.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const b of g.keys())d.set(b,g.get(b));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jE,h,void 0))||g||O||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,B]of d)this.g.setRequestHeader(b,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{um(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){om(this,b)}};function om(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,am(a),Ia(a)}function am(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,it(this,"complete"),it(this,"abort"),Ia(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ia(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lm(this):this.bb())},t.bb=function(){lm(this)};function lm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pn(a)!=4||a.Z()!=2)){if(a.u&&pn(a)==4)Np(a.Ea,0,a);else if(it(a,"readystatechange"),pn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=B===0){var O=String(a.D).match(Jp)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),g=!FE.test(O?O.toLowerCase():"")}d=g}if(d)it(a,"complete"),it(a,"success");else{a.m=6;try{var b=2<pn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",am(a)}}finally{Ia(a)}}}}function Ia(a,h){if(a.g){um(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||it(a,"ready");try{d.onreadystatechange=g}catch{}}}function um(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),_E(h)}};function cm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function BE(a){const h={};a=(a.g&&2<=pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=C(a[g]);const O=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=h[O]||[];h[O]=b,b.push(d)}T(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function hm(a){this.Aa=0,this.i=[],this.j=new Rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Os("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Os("baseRetryDelayMs",5e3,a),this.cb=Os("retryDelaySeedMs",1e4,a),this.Wa=Os("forwardChannelMaxRetries",2,a),this.wa=Os("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Wp(a&&a.concurrentRequestLimit),this.Da=new ME,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hm.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){st(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=wm(this,null,this.W),Ra(this)};function Ic(a){if(dm(a),a.G==3){var h=a.U++,d=fn(a.I);if(he(d,"SID",a.K),he(d,"RID",h),he(d,"TYPE","terminate"),bs(a,d),h=new Vn(a,a.j,h),h.L=2,h.v=Ea(fn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Em(h.j,null),h.g.ea(h.v)),h.F=Date.now(),_a(h)}vm(a)}function Sa(a){a.g&&(Rc(a),a.g.cancel(),a.g=null)}function dm(a){Sa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Aa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ra(a){if(!Kp(a.h)&&!a.s){a.s=!0;var h=a.Ga;ln||J(),z||(ln(),z=!0),Q.add(h,a),a.B=0}}function zE(a,h){return Gp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ss(m(a.Ga,a,h),_m(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new Vn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=y(b),w(b,this.S)):b=this.S),this.m!==null||this.O||(O.H=b,b=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=pm(this,O,h),d=fn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),bs(this,d),b&&(this.O?h="headers="+encodeURIComponent(String(sm(b)))+"&"+h:this.m&&Tc(d,this.m,b)),Ec(this.h,O),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",h),he(d,"SID","null"),O.T=!0,yc(O,d,null)):yc(O,d,h),this.G=2}}else this.G==3&&(a?fm(this,a):this.i.length==0||Kp(this.h)||fm(this))};function fm(a,h){var d;h?d=h.l:d=a.U++;const g=fn(a.I);he(g,"SID",a.K),he(g,"RID",d),he(g,"AID",a.T),bs(a,g),a.m&&a.o&&Tc(g,a.m,a.o),d=new Vn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=pm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ec(a.h,d),yc(d,g,h)}function bs(a,h){a.H&&M(a.H,function(d,g){he(h,g,d)}),a.l&&Yp({},function(d,g){he(h,g,d)})}function pm(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let b=-1;for(;;){const B=["count="+d];b==-1?0<d?(b=O[0].g,B.push("ofs="+b)):b=0:B.push("ofs="+b);let le=!0;for(let Fe=0;Fe<d;Fe++){let ie=O[Fe].g;const Ge=O[Fe].map;if(ie-=b,0>ie)b=Math.max(0,O[Fe].g-100),le=!1;else try{UE(Ge,B,"req"+ie+"_")}catch{g&&g(Ge)}}if(le){g=B.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function mm(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ln||J(),z||(ln(),z=!0),Q.add(h,a),a.v=0}}function Sc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ss(m(a.Fa,a),_m(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ss(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),Sa(this),gm(this))};function Rc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function gm(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=fn(a.qa);he(h,"RID","rpc"),he(h,"SID",a.K),he(h,"AID",a.T),he(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(h,"TO",a.ja),he(h,"TYPE","xmlhttp"),bs(a,h),a.m&&a.o&&Tc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ea(fn(h)),d.m=null,d.P=!0,$p(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Sa(this),Sc(this),st(19))};function Aa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ym(a,h){var d=null;if(a.g==h){Aa(a),Rc(a),a.g=null;var g=2}else if(wc(a.h,h))d=h.D,Qp(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;g=ma(),it(g,new Fp(g,d)),Ra(a)}else mm(a);else if(O=h.s,O==3||O==0&&0<h.X||!(g==1&&zE(a,h)||g==2&&Sc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),O){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function _m(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Dr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const O=!g;g=new xr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||va(g,"https"),Ea(g),O?LE(g.toString(),d):VE(g.toString(),d)}else st(2);a.G=0,a.l&&a.l.sa(h),vm(a),dm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function vm(a){if(a.G=0,a.ka=[],a.l){const h=Xp(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function wm(a,h,d){var g=d instanceof xr?fn(d):new xr(d);if(g.g!="")h&&(g.g=h+"."+g.g),wa(g,g.s);else{var O=l.location;g=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var b=new xr(null);g&&va(b,g),h&&(b.g=h),O&&wa(b,O),d&&(b.l=d),g=b}return d=a.D,h=a.ya,d&&h&&he(g,d,h),he(g,"VER",a.la),bs(a,g),g}function Em(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Se(new Ns({eb:d})):new Se(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tm(){}t=Tm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Pa(){}Pa.prototype.g=function(a,h){return new vt(a,h)};function vt(a,h){Ke.call(this),this.g=new hm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new pi(this)}P(vt,Ke),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Ic(this.g)},vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=hc(a),a=d);h.i.push(new RE(h.Ya++,a)),h.G==3&&Ra(h)},vt.prototype.N=function(){this.g.l=null,delete this.j,Ic(this.g),delete this.g,vt.aa.N.call(this)};function Im(a){fc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(Im,fc);function Sm(){pc.call(this),this.status=1}P(Sm,pc);function pi(a){this.g=a}P(pi,Tm),pi.prototype.ua=function(){it(this.g,"a")},pi.prototype.ta=function(a){it(this.g,new Im(a))},pi.prototype.sa=function(a){it(this.g,new Sm)},pi.prototype.ra=function(){it(this.g,"b")},Pa.prototype.createWebChannel=Pa.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,g1=function(){return new Pa},m1=function(){return ma()},p1=kr,_d={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ga.NO_ERROR=0,ga.TIMEOUT=8,ga.HTTP_ERROR=6,dl=ga,jp.COMPLETE="complete",f1=jp,Lp.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",Ke.prototype.listen=Ke.prototype.K,Ys=Lp,d1=Ns,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,h1=Se}).apply(typeof Ga<"u"?Ga:typeof self<"u"?self:typeof window<"u"?window:{});const iy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="10.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new Df("@firebase/firestore");function Hs(){return Zr.logLevel}function H(t,...e){if(Zr.logLevel<=te.DEBUG){const n=e.map(Bf);Zr.debug(`Firestore (${ms}): ${t}`,...n)}}function xn(t,...e){if(Zr.logLevel<=te.ERROR){const n=e.map(Bf);Zr.error(`Firestore (${ms}): ${t}`,...n)}}function Zi(t,...e){if(Zr.logLevel<=te.WARN){const n=e.map(Bf);Zr.warn(`Firestore (${ms}): ${t}`,...n)}}function Bf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function ce(t,e){t||G()}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class _2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class v2{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new y1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Ze(e)}}class w2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class E2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new w2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class T2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new T2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=S2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function es(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Le(0,0))}static max(){return new X(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Mo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Mo{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const R2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Mo{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return R2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ge.fromString(e))}static fromName(e){return new W(ge.fromString(e).popFirst(5))}static empty(){return new W(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ge(e.slice()))}}function A2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new yr(i,W.empty(),e)}function P2(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(X.min(),W.empty(),-1)}static max(){return new yr(X.max(),W.empty(),-1)}}function C2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class N2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==k2)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function x2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ta(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}zf.oe=-1;function Vu(t){return t==null}function Zl(t){return t===0&&1/t==-1/0}function D2(t){return typeof t=="number"&&Number.isInteger(t)&&!Zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function v1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qa(this.root,e,this.comparator,!0)}}class Qa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new oy(this.data.getIterator())}getIteratorFrom(e){return new oy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class oy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new It([])}unionWith(e){let n=new He(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new w1("Invalid base64 string: "+s):s}}(e);return new rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const O2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(ce(!!t),typeof t=="string"){let e=0;const n=O2.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ei(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hf(t){const e=t.mapValue.fields.__previous_value__;return $f(e)?Hf(e):e}function Uo(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Fo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Fo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$f(t)?4:L2(t)?9007199254740991:10:G()}function sn(t,e){if(t===e)return!0;const n=ti(t);if(n!==ti(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Uo(t).isEqual(Uo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_r(i.timestampValue),l=_r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ei(i.bytesValue).isEqual(ei(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),l=Ne(s.doubleValue);return o===l?Zl(o)===Zl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return es(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(sy(o)!==sy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!sn(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function jo(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=ti(t),r=ti(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ay(t.timestampValue,e.timestampValue);case 4:return ay(Uo(t),Uo(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ei(s),u=ei(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=se(l[c],u[c]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=se(Ne(s.latitude),Ne(o.latitude));return l!==0?l:se(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],u=o.values||[];for(let c=0;c<l.length&&c<u.length;++c){const f=ts(l[c],u[c]);if(f)return f}return se(l.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Xa.mapValue&&o===Xa.mapValue)return 0;if(s===Xa.mapValue)return 1;if(o===Xa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=se(u[p],f[p]);if(m!==0)return m;const E=ts(l[u[p]],c[f[p]]);if(E!==0)return E}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function ay(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=_r(t),r=_r(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function ns(t){return vd(t)}function vd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ei(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vd(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function wd(t){return!!t&&"integerValue"in t}function qf(t){return!!t&&"arrayValue"in t}function ly(t){return!!t&&"nullValue"in t}function uy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fl(t){return!!t&&"mapValue"in t}function co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function L2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=co(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=co(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(co(this.value))}}function E1(t){const e=[];return ui(t.fields,(n,r)=>{const i=new ze([n]);if(fl(r)){const s=E1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new It(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,X.min(),X.min(),X.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,X.min(),X.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,X.min(),X.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.position=e,this.inclusive=n}}function cy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ts(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function hy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n="asc"){this.field=e,this.dir=n}}function V2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{}class Oe extends T1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new U2(e,n,r):n==="array-contains"?new B2(e,r):n==="in"?new z2(e,r):n==="not-in"?new $2(e,r):n==="array-contains-any"?new H2(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new F2(e,r):new j2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ts(n,this.value)):n!==null&&ti(this.value)===ti(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends T1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new on(e,n)}matches(e){return I1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function I1(t){return t.op==="and"}function S1(t){return M2(t)&&I1(t)}function M2(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function Ed(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+ns(t.value);if(S1(t))return t.filters.map(e=>Ed(e)).join(",");{const e=t.filters.map(n=>Ed(n)).join(",");return`${t.op}(${e})`}}function R1(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&sn(r.value,i.value)}(t,e):t instanceof on?function(r,i){return i instanceof on&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&R1(o,i.filters[l]),!0):!1}(t,e):void G()}function A1(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ns(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(A1).join(" ,")+"}"}(t):"Filter"}class U2 extends Oe{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class F2 extends Oe{constructor(e,n){super(e,"in",n),this.keys=P1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class j2 extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=P1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function P1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class B2 extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qf(n)&&jo(n.arrayValue,this.value)}}class z2 extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jo(this.value.arrayValue,n)}}class $2 extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!jo(this.value.arrayValue,n)}}class H2 extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function dy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new q2(t,e,n,r,i,s,o)}function Wf(t){const e=Y(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ed(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),e.ue=n}return e.ue}function Kf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!V2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!R1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hy(t.startAt,e.startAt)&&hy(t.endAt,e.endAt)}function Td(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function W2(t,e,n,r,i,s,o,l){return new Mu(t,e,n,r,i,s,o,l)}function C1(t){return new Mu(t)}function fy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function K2(t){return t.collectionGroup!==null}function ho(t){const e=Y(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new tu(s,r))}),n.has(ze.keyField().canonicalString())||e.ce.push(new tu(ze.keyField(),r))}return e.ce}function en(t){const e=Y(t);return e.le||(e.le=G2(e,ho(t))),e.le}function G2(t,e){if(t.limitType==="F")return dy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new tu(i.field,s)});const n=t.endAt?new eu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eu(t.startAt.position,t.startAt.inclusive):null;return dy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Id(t,e,n){return new Mu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uu(t,e){return Kf(en(t),en(e))&&t.limitType===e.limitType}function k1(t){return`${Wf(en(t))}|lt:${t.limitType}`}function _i(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>A1(i)).join(", ")}]`),Vu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ns(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ns(i)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function Fu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ho(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=cy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ho(r),i)||r.endAt&&!function(o,l,u){const c=cy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ho(r),i))}(t,e)}function Q2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function N1(t){return(e,n)=>{let r=!1;for(const i of ho(t)){const s=X2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function X2(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ts(u,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return v1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=new Te(W.comparator);function Dn(){return Y2}const x1=new Te(W.comparator);function Js(...t){let e=x1;for(const n of t)e=e.insert(n.key,n);return e}function D1(t){let e=x1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return fo()}function O1(){return fo()}function fo(){return new gs(t=>t.toString(),(t,e)=>t.isEqual(e))}const J2=new Te(W.comparator),Z2=new He(W.comparator);function ee(...t){let e=Z2;for(const n of t)e=e.add(n);return e}const eC=new He(se);function tC(){return eC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zl(e)?"-0":e}}function L1(t){return{integerValue:""+t}}function nC(t,e){return D2(e)?L1(e):b1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this._=void 0}}function rC(t,e,n){return t instanceof nu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$f(s)&&(s=Hf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof rs?M1(t,e):t instanceof Bo?U1(t,e):function(i,s){const o=V1(i,s),l=py(o)+py(i.Pe);return wd(o)&&wd(i.Pe)?L1(l):b1(i.serializer,l)}(t,e)}function iC(t,e,n){return t instanceof rs?M1(t,e):t instanceof Bo?U1(t,e):n}function V1(t,e){return t instanceof ru?function(r){return wd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class nu extends ju{}class rs extends ju{constructor(e){super(),this.elements=e}}function M1(t,e){const n=F1(e);for(const r of t.elements)n.some(i=>sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Bo extends ju{constructor(e){super(),this.elements=e}}function U1(t,e){let n=F1(e);for(const r of t.elements)n=n.filter(i=>!sn(i,r));return{arrayValue:{values:n}}}class ru extends ju{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function py(t){return Ne(t.integerValue||t.doubleValue)}function F1(t){return qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n){this.field=e,this.transform=n}}function oC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof rs&&i instanceof rs||r instanceof Bo&&i instanceof Bo?es(r.elements,i.elements,sn):r instanceof ru&&i instanceof ru?sn(r.Pe,i.Pe):r instanceof nu&&i instanceof nu}(t.transform,e.transform)}class aC{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bu{}function j1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gf(t.key,zt.none()):new na(t.key,t.data,zt.none());{const n=t.data,r=pt.empty();let i=new He(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ar(t.key,r,new It(i.toArray()),zt.none())}}function lC(t,e,n){t instanceof na?function(i,s,o){const l=i.value.clone(),u=gy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(i,s,o){if(!pl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=gy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(B1(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function po(t,e,n,r){return t instanceof na?function(s,o,l,u){if(!pl(s.precondition,o))return l;const c=s.value.clone(),f=yy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(s,o,l,u){if(!pl(s.precondition,o))return l;const c=yy(s.fieldTransforms,u,o),f=o.data;return f.setAll(B1(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return pl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function uC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=V1(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function my(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&es(r,i,(s,o)=>oC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends Bu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ar extends Bu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function B1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function gy(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,iC(o,l,n[i]))}return r}function yy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,rC(s,o,e))}return r}class Gf extends Bu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cC extends Bu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=O1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=j1(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,(n,r)=>my(n,r))&&es(this.baseMutations,e.baseMutations,(n,r)=>my(n,r))}}class Qf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return J2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Qf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,ne;function pC(t){switch(t){default:return G();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function z1(t){if(t===void 0)return xn("GRPC error has no .code"),U.UNKNOWN;switch(t){case ke.OK:return U.OK;case ke.CANCELLED:return U.CANCELLED;case ke.UNKNOWN:return U.UNKNOWN;case ke.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case ke.INTERNAL:return U.INTERNAL;case ke.UNAVAILABLE:return U.UNAVAILABLE;case ke.UNAUTHENTICATED:return U.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case ke.NOT_FOUND:return U.NOT_FOUND;case ke.ALREADY_EXISTS:return U.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return U.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case ke.ABORTED:return U.ABORTED;case ke.OUT_OF_RANGE:return U.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return U.UNIMPLEMENTED;case ke.DATA_LOSS:return U.DATA_LOSS;default:return G()}}(ne=ke||(ke={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=new Hr([4294967295,4294967295],0);function _y(t){const e=mC().encode(t),n=new c1;return n.update(e),new Uint8Array(n.digest())}function vy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([i,s],0)]}class Xf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zs(`Invalid padding: ${n}`);if(r<0)throw new Zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Hr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Hr.fromNumber(r)));return i.compare(gC)===1&&(i=new Hr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=_y(e),[r,i]=vy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=_y(e),[r,i]=vy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zu(X.min(),i,new Te(se),Dn(),ee())}}class ra{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ra(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class $1{constructor(e,n){this.targetId=e,this.me=n}}class H1{constructor(e,n,r=rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class wy{constructor(){this.fe=0,this.ge=Ty(),this.pe=rt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new ra(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Ty()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=Ey(),this.Qe=new Te(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Td(s))if(r===0){const o=new W(s.path);this.Ue(n,o,tt.newNoDocument(o,X.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ei(r).toUint8Array()}catch(u){if(u instanceof w1)return Zi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Xf(o,i,s)}catch(u){return Zi(u instanceof Zs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Td(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,tt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ee();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new zu(e,n,this.Qe,this.ke,r);return this.ke=Dn(),this.qe=Ey(),this.Qe=new Te(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new wy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new He(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new wy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ey(){return new Te(W.comparator)}function Ty(){return new Te(W.comparator)}const _C={asc:"ASCENDING",desc:"DESCENDING"},vC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wC={and:"AND",or:"OR"};class EC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sd(t,e){return t.useProto3Json||Vu(e)?e:{value:e}}function iu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function q1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TC(t,e){return iu(t,e.toTimestamp())}function tn(t){return ce(!!t),X.fromTimestamp(function(n){const r=_r(n);return new Le(r.seconds,r.nanos)}(t))}function Yf(t,e){return Rd(t,e).canonicalString()}function Rd(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function W1(t){const e=ge.fromString(t);return ce(Y1(e)),e}function Ad(t,e){return Yf(t.databaseId,e.path)}function lh(t,e){const n=W1(e);if(n.get(1)!==t.databaseId.projectId)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(G1(n))}function K1(t,e){return Yf(t.databaseId,e)}function IC(t){const e=W1(t);return e.length===4?ge.emptyPath():G1(e)}function Pd(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function G1(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Iy(t,e,n){return{name:Ad(t,e),fields:n.value.mapValue.fields}}function SC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ce(f===void 0||typeof f=="string"),rt.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?U.UNKNOWN:z1(c.code);return new q(f,c.message||"")}(o);n=new H1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lh(t,r.document.name),s=tn(r.document.updateTime),o=r.document.createTime?tn(r.document.createTime):X.min(),l=new pt({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new ml(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lh(t,r.document),s=r.readTime?tn(r.readTime):X.min(),o=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ml([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lh(t,r.document),s=r.removedTargetIds||[];n=new ml([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fC(i,s),l=r.targetId;n=new $1(l,o)}}return n}function RC(t,e){let n;if(e instanceof na)n={update:Iy(t,e.key,e.value)};else if(e instanceof Gf)n={delete:Ad(t,e.key)};else if(e instanceof Ar)n={update:Iy(t,e.key,e.data),updateMask:bC(e.fieldMask)};else{if(!(e instanceof cC))return G();n={verify:Ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof nu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof rs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Bo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ru)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:TC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function AC(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?tn(i.updateTime):tn(s);return o.isEqual(X.min())&&(o=tn(s)),new aC(o,i.transformResults||[])}(n,e))):[]}function PC(t,e){return{documents:[K1(t,e.path)]}}function CC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=K1(t,i);const s=function(c){if(c.length!==0)return X1(on.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:vi(m.field),direction:xC(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function kC(t){let e=IC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=Q1(p);return m instanceof on&&S1(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new tu(wi(P.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Vu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,E=p.values||[];return new eu(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,E=p.values||[];return new eu(E,m)}(n.endAt)),W2(e,i,o,s,l,"F",u,c)}function NC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Q1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=wi(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=wi(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wi(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wi(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(wi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>Q1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function xC(t){return _C[t]}function DC(t){return vC[t]}function OC(t){return wC[t]}function vi(t){return{fieldPath:t.canonicalString()}}function wi(t){return ze.fromServerFormat(t.fieldPath)}function X1(t){return t instanceof Oe?function(n){if(n.op==="=="){if(uy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NAN"}};if(ly(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(uy(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NAN"}};if(ly(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(n.field),op:DC(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(i=>X1(i));return r.length===1?r[0]:{compositeFilter:{op:OC(n.op),filters:r}}}(t):G()}function bC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Y1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,i,s=X.min(),o=X.min(),l=rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.ct=e}}function VC(t){const e=kC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Id(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this._n=new UC}addToCollectionParentIndex(e,n){return this._n.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(yr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class UC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new He(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new He(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new is(0)}static Ln(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(){this.changes=new gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&po(r.mutation,i,It.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Js();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Dn();const o=fo(),l=function(){return fo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Ar)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),po(f.mutation,c,f.mutation.getFieldMask(),Le.now())):o.set(c.key,It.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new jC(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=fo();let i=new Te((o,l)=>o-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||It.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=O1();f.forEach(m=>{if(!s.has(m)){const E=j1(n.get(m),r.get(m));E!==null&&p.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):K2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(jr());let l=-1,u=s;return o.next(c=>F.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ee())).next(f=>({batchId:l,changes:D1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Js();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Js();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(p,m){return new Mu(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,tt.newInvalidDocument(f)))});let l=Js();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&po(f.mutation,c,It.empty(),Le.now()),Fu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return F.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:tn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:VC(i.bundledQuery),readTime:tn(i.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.overlays=new Te(W.comparator),this.hr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=jr(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Te((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=jr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=jr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dC(n,r));let s=this.hr.get(n);s===void 0&&(s=ee(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.Pr=new He(Ve.Ir),this.Tr=new He(Ve.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ve(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new W(new ge([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new W(new ge([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ee();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return W.comparator(e.key,n.key)||se(e.pr,n.pr)}static Er(e,n){return se(e.pr,n.pr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new He(Ve.Ir)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(se);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new W(s),0);let l=new He(se);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.pr)),!0)},o),F.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ve(n,0),i=this.wr.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.vr=e,this.docs=function(){return new Te(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,l=new W(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||C2(P2(f),r)<=0||(i.has(f.key)||Fu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Fr(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new WC(this)}getSize(e){return F.resolve(this.size)}}class WC extends FC{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e){this.persistence=e,this.Mr=new gs(n=>Wf(n),Kf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Jf,this.targetCount=0,this.Lr=is.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),F.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.qn(n),F.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n){this.Br={},this.overlays={},this.kr=new zf(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new KC(this),this.indexManager=new MC,this.remoteDocumentCache=function(i){return new qC(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new LC(n),this.$r=new zC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $C,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new HC(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new QC(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class QC extends N2{constructor(e){super(),this.currentSequenceNumber=e}}class Zf{constructor(e){this.persistence=e,this.zr=new Jf,this.jr=null}static Hr(e){return new Zf(e)}get Jr(){if(this.jr)return this.jr;throw G()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),F.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const i=W.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return F.or([()=>F.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ep(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return VR()?8:x2(We())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XC;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Hs()<=te.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",_i(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(Hs()<=te.DEBUG&&H("QueryEngine","Query:",_i(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Hs()<=te.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",_i(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):F.resolve())}ji(e,n){if(fy(n))return F.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Id(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,l);return this.Xi(n,c,o,u.readTime)?this.ji(e,Id(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return fy(n)||i.isEqual(X.min())?F.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?F.resolve(null):(Hs()<=te.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_i(n)),this.es(e,o,n,A2(i,-1)).next(l=>l))})}Zi(e,n){let r=new He(N1(e));return n.forEach((i,s)=>{Fu(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Hs()<=te.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",_i(n)),this.zi.getDocumentsMatchingQuery(e,n,yr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Te(se),this.rs=new gs(s=>Wf(s),Kf),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function ZC(t,e,n,r){return new JC(t,e,n,r)}async function J1(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ee();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:l}))})})}function ek(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let E=F.resolve();return m.forEach(P=>{E=E.next(()=>f.getEntry(u,P)).next(k=>{const x=c.docVersions.get(P);ce(x!==null),k.version.compareTo(x)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),f.addEntry(k)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ee();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Z1(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function tk(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Qr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,f.addedDocuments,p)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(rt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(p,E),function(k,x,v){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(m,E,f)&&l.push(n.Qr.updateTargetData(s,E))});let u=Dn(),c=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(nk(s,o,e.documentUpdates).next(f=>{u=f.cs,c=f.ls})),!r.isEqual(X.min())){const f=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function nk(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function rk(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ik(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Cd(t,e,n){const r=Y(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ta(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Sy(t,e,n){const r=Y(t);let i=X.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=Y(u),m=p.rs.get(f);return m!==void 0?F.resolve(p.ns.get(m)):p.Qr.getTargetData(c,f)}(r,o,en(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ee())).next(l=>(sk(r,Q2(e),l),{documents:l,hs:s})))}function sk(t,e,n){let r=t.ss.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Ry{constructor(){this.activeTargetIds=tC()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ok{constructor(){this.no=new Ry,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Ry,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya=null;function uh(){return Ya===null?Ya=function(){return 268435456+Math.round(2147483648*Math.random())}():Ya++,"0x"+Ya.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection";class ck extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=uh(),u=this.vo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,u,c,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Zi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=lk[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=uh();return new Promise((o,l)=>{const u=new h1;u.setWithCredentials(!0),u.listenOnce(f1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case dl.NO_ERROR:const f=u.getResponseJson();H(Je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case dl.TIMEOUT:H(Je,`RPC '${e}' ${s} timed out`),l(new q(U.DEADLINE_EXCEEDED,"Request time out"));break;case dl.HTTP_ERROR:const p=u.getStatus();if(H(Je,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const P=function(x){const v=x.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(v)>=0?v:U.UNKNOWN}(E.status);l(new q(P,E.message))}else l(new q(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(U.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{H(Je,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(Je,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=uh(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=g1(),l=m1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new d1({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(Je,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,E=!1;const P=new uk({lo:x=>{E?H(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(m||(H(Je,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(Je,`RPC '${e}' stream ${i} sending:`,x),p.send(x))},ho:()=>p.close()}),k=(x,v,_)=>{x.listen(v,I=>{try{_(I)}catch(D){setTimeout(()=>{throw D},0)}})};return k(p,Ys.EventType.OPEN,()=>{E||(H(Je,`RPC '${e}' stream ${i} transport opened.`),P.mo())}),k(p,Ys.EventType.CLOSE,()=>{E||(E=!0,H(Je,`RPC '${e}' stream ${i} transport closed`),P.po())}),k(p,Ys.EventType.ERROR,x=>{E||(E=!0,Zi(Je,`RPC '${e}' stream ${i} transport errored:`,x),P.po(new q(U.UNAVAILABLE,"The operation could not be completed")))}),k(p,Ys.EventType.MESSAGE,x=>{var v;if(!E){const _=x.data[0];ce(!!_);const I=_,D=I.error||((v=I[0])===null||v===void 0?void 0:v.error);if(D){H(Je,`RPC '${e}' stream ${i} received error:`,D);const L=D.status;let M=function(S){const w=ke[S];if(w!==void 0)return z1(w)}(L),T=D.message;M===void 0&&(M=U.INTERNAL,T="Unknown error status: "+L+" with message "+D.message),E=!0,P.po(new q(M,T)),p.close()}else H(Je,`RPC '${e}' stream ${i} received:`,_),P.yo(_)}}),k(l,p1.STAT_EVENT,x=>{x.stat===_d.PROXY?H(Je,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===_d.NOPROXY&&H(Je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.fo()},0),P}}function ch(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){return new EC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,r,i,s,o,l,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new ew(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new q(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hk extends tw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=SC(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?tn(o.readTime):X.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Pd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Td(u)?{documents:PC(s,u)}:{query:CC(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=q1(s,o.resumeToken);const c=Sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=iu(s,o.snapshotVersion.toTimestamp());const c=Sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=NC(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Pd(this.serializer),n.removeTarget=e,this.i_(n)}}class dk extends tw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=AC(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.A_(r,n)}return ce(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Pd(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RC(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Rd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(U.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,Rd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(U.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class pk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(xn(n),this.y_=!1):H("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{ci(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=Y(u);c.M_.add(4),await ia(c),c.N_.set("Unknown"),c.M_.delete(4),await Hu(c)}(this))})}),this.N_=new pk(r,i)}}async function Hu(t){if(ci(t))for(const e of t.x_)await e(!0)}async function ia(t){for(const e of t.x_)await e(!1)}function nw(t,e){const n=Y(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),ip(n)?rp(n):ys(n).Xo()&&np(n,e))}function tp(t,e){const n=Y(t),r=ys(n);n.F_.delete(e),r.Xo()&&rw(n,e),n.F_.size===0&&(r.Xo()?r.n_():ci(n)&&n.N_.set("Unknown"))}function np(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).P_(e)}function rw(t,e){t.L_.xe(e),ys(t).I_(e)}function rp(t){t.L_=new yC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.N_.w_()}function ip(t){return ci(t)&&!ys(t).Zo()&&t.F_.size>0}function ci(t){return Y(t).M_.size===0}function iw(t){t.L_=void 0}async function gk(t){t.N_.set("Online")}async function yk(t){t.F_.forEach((e,n)=>{np(t,e)})}async function _k(t,e){iw(t),ip(t)?(t.N_.D_(e),rp(t)):t.N_.set("Unknown")}async function vk(t,e,n){if(t.N_.set("Online"),e instanceof H1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await su(t,r)}else if(e instanceof ml?t.L_.Ke(e):e instanceof $1?t.L_.He(e):t.L_.We(e),!n.isEqual(X.min()))try{const r=await Z1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.F_.get(c);f&&s.F_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.F_.get(u);if(!f)return;s.F_.set(u,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),rw(s,u);const p=new Zn(f.target,u,c,f.sequenceNumber);np(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await su(t,r)}}async function su(t,e,n){if(!ta(e))throw e;t.M_.add(1),await ia(t),t.N_.set("Offline"),n||(n=()=>Z1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Hu(t)})}function sw(t,e){return e().catch(n=>su(t,n,e))}async function qu(t){const e=Y(t),n=vr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;wk(e);)try{const i=await rk(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,Ek(e,i)}catch(i){await su(e,i)}ow(e)&&aw(e)}function wk(t){return ci(t)&&t.v_.length<10}function Ek(t,e){t.v_.push(e);const n=vr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function ow(t){return ci(t)&&!vr(t).Zo()&&t.v_.length>0}function aw(t){vr(t).start()}async function Tk(t){vr(t).V_()}async function Ik(t){const e=vr(t);for(const n of t.v_)e.d_(n.mutations)}async function Sk(t,e,n){const r=t.v_.shift(),i=Qf.from(r,e,n);await sw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qu(t)}async function Rk(t,e){e&&vr(t).E_&&await async function(r,i){if(function(o){return pC(o)&&o!==U.ABORTED}(i.code)){const s=r.v_.shift();vr(r).t_(),await sw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qu(r)}}(t,e),ow(t)&&aw(t)}async function Py(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ci(n);n.M_.add(3),await ia(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Hu(n)}async function Ak(t,e){const n=Y(t);e?(n.M_.delete(2),await Hu(n)):e||(n.M_.add(2),await ia(n),n.N_.set("Unknown"))}function ys(t){return t.B_||(t.B_=function(n,r,i){const s=Y(n);return s.f_(),new hk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:gk.bind(null,t),To:yk.bind(null,t),Ao:_k.bind(null,t),h_:vk.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),ip(t)?rp(t):t.N_.set("Unknown")):(await t.B_.stop(),iw(t))})),t.B_}function vr(t){return t.k_||(t.k_=function(n,r,i){const s=Y(n);return s.f_(),new dk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:Tk.bind(null,t),Ao:Rk.bind(null,t),R_:Ik.bind(null,t),A_:Sk.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await qu(t)):(await t.k_.stop(),t.v_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new sp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function op(t,e){if(xn("AsyncQueue",`${e}: ${t}`),ta(t))return new q(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Js(),this.sortedSet=new Te(this.comparator)}static emptySet(e){return new Bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.q_=new Te(W.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):G():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ss{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ss(e,n,Bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class Ck{constructor(){this.queries=new gs(e=>k1(e),Uu),this.onlineState="Unknown",this.z_=new Set}}async function kk(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new Pk,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=op(o,`Initialization of query '${_i(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&ap(n)}async function Nk(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xk(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&ap(n)}function Dk(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function ap(t){t.z_.forEach(e=>{e.next()})}var kd,ky;(ky=kd||(kd={})).J_="default",ky.Cache="cache";class Ok{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==kd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.key=e}}class uw{constructor(e){this.key=e}}class bk{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ee(),this.mutatedKeys=ee(),this.Ia=N1(e),this.Ta=new Bi(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Cy,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),E=Fu(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let x=!1;m&&E?m.data.isEqual(E.data)?P!==k&&(r.track({type:3,doc:E}),x=!0):this.Ra(m,E)||(r.track({type:2,doc:E}),x=!0,(u&&this.Ia(E,u)>0||c&&this.Ia(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),x=!0):m&&!E&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(l=!0)),x&&(E?(o=o.add(E),s=k?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((f,p)=>function(E,P){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return k(E)-k(P)}(f.type,p.type)||this.Ia(f.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,c=u!==this.ha;return this.ha=u,o.length!==0||c?{snapshot:new ss(this.query,e.Ta,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Cy,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ee(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new uw(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new lw(r))}),n}pa(e){this.la=e.hs,this.Pa=ee();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ss.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Lk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Vk{constructor(e){this.key=e,this.wa=!1}}class Mk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new gs(l=>k1(l),Uu),this.Da=new Map,this.Ca=new Set,this.va=new Te(W.comparator),this.Fa=new Map,this.Ma=new Jf,this.xa={},this.Oa=new Map,this.Na=is.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Uk(t,e,n=!0){const r=mw(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await cw(r,e,n,!0),i}async function Fk(t,e){const n=mw(t);await cw(n,e,!0,!1)}async function cw(t,e,n,r){const i=await ik(t.localStore,en(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await jk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&nw(t.remoteStore,i),l}async function jk(t,e,n,r,i){t.Ba=(p,m,E)=>async function(k,x,v,_){let I=x.view.da(v);I.Xi&&(I=await Sy(k.localStore,x.query,!1).then(({documents:T})=>x.view.da(T,I)));const D=_&&_.targetChanges.get(x.targetId),L=_&&_.targetMismatches.get(x.targetId)!=null,M=x.view.applyChanges(I,k.isPrimaryClient,D,L);return xy(k,x.targetId,M.fa),M.snapshot}(t,p,m,E);const s=await Sy(t.localStore,e,!0),o=new bk(e,s.hs),l=o.da(s.documents),u=ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);xy(t,n,c.fa);const f=new Lk(e,n,o);return t.ba.set(e,f),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function Bk(t,e,n){const r=Y(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Uu(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Cd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&tp(r.remoteStore,i.targetId),Nd(r,i.targetId)}).catch(ea)):(Nd(r,i.targetId),await Cd(r.localStore,i.targetId,!0))}async function zk(t,e){const n=Y(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),tp(n.remoteStore,r.targetId))}async function $k(t,e,n){const r=Xk(t);try{const i=await function(o,l){const u=Y(o),c=Le.now(),f=l.reduce((E,P)=>E.add(P.key),ee());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let P=Dn(),k=ee();return u.os.getEntries(E,f).next(x=>{P=x,P.forEach((v,_)=>{_.isValidDocument()||(k=k.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,P)).next(x=>{p=x;const v=[];for(const _ of l){const I=uC(_,p.get(_.key).overlayedDocument);I!=null&&v.push(new Ar(_.key,I,E1(I.value.mapValue),zt.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,v,l)}).next(x=>{m=x;const v=x.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(E,x.batchId,v)})}).then(()=>({batchId:m.batchId,changes:D1(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.xa[o.currentUser.toKey()];c||(c=new Te(se)),c=c.insert(l,u),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await sa(r,i.changes),await qu(r.remoteStore)}catch(i){const s=op(i,"Failed to persist write");n.reject(s)}}async function hw(t,e){const n=Y(t);try{const r=await tk(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?ce(o.wa):i.removedDocuments.size>0&&(ce(o.wa),o.wa=!1))}),await sa(n,r,e)}catch(r){await ea(r)}}function Ny(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.U_)m.j_(l)&&(c=!0)}),c&&ap(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hk(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Te(W.comparator);o=o.insert(s,tt.newNoDocument(s,X.min()));const l=ee().add(s),u=new zu(X.min(),new Map,new Te(se),o,l);await hw(r,u),r.va=r.va.remove(s),r.Fa.delete(e),lp(r)}else await Cd(r.localStore,e,!1).then(()=>Nd(r,e,n)).catch(ea)}async function qk(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await ek(n.localStore,e);fw(n,r,null),dw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await sa(n,i)}catch(i){await ea(i)}}async function Wk(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ce(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);fw(r,e,n),dw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await sa(r,i)}catch(i){await ea(i)}}function dw(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function fw(t,e,n){const r=Y(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function Nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||pw(t,r)})}function pw(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(tp(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),lp(t))}function xy(t,e,n){for(const r of n)r instanceof lw?(t.Ma.addReference(r.key,e),Kk(t,r)):r instanceof uw?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||pw(t,r.key)):G()}function Kk(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ca.add(r),lp(t))}function lp(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new W(ge.fromString(e)),r=t.Na.next();t.Fa.set(r,new Vk(n)),t.va=t.va.insert(n,r),nw(t.remoteStore,new Zn(en(C1(n.path)),r,"TargetPurposeLimboResolution",zf.oe))}}async function sa(t,e,n){const r=Y(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,u)=>{o.push(r.Ba(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const f=ep.Ki(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,c){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.qi,E=>f.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>F.forEach(m.Qi,E=>f.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!ta(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const E=f.ns.get(m),P=E.snapshotVersion,k=E.withLastLimboFreeSnapshotVersion(P);f.ns=f.ns.insert(m,k)}}}(r.localStore,s))}async function Gk(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await J1(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(u=>{u.reject(new q(U.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await sa(n,r.us)}}function Qk(t,e){const n=Y(t),r=n.Fa.get(e);if(r&&r.wa)return ee().add(r.key);{let i=ee();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function mw(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Qk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hk.bind(null,e),e.Sa.h_=xk.bind(null,e.eventManager),e.Sa.ka=Dk.bind(null,e.eventManager),e}function Xk(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wk.bind(null,e),e}class Dy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$u(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ZC(this.persistence,new YC,e.initialUser,this.serializer)}createPersistence(e){return new GC(Zf.Hr,this.serializer)}createSharedClientState(e){return new ok}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ny(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gk.bind(null,this.syncEngine),await Ak(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ck}()}createDatastore(e){const n=$u(e.databaseInfo.databaseId),r=function(s){return new ck(s)}(e.databaseInfo);return function(s,o,l,u){return new fk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new mk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ny(this.syncEngine,n,0),function(){return Ay.D()?new Ay:new ak}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new Mk(i,s,o,l,u,c);return f&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=Y(r);H("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await ia(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=_1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=op(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await J1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Oy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tN(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Py(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Py(e.remoteStore,i)),t._onlineComponents=e}function eN(t){return t.name==="FirebaseError"?t.code===U.FAILED_PRECONDITION||t.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function tN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await hh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!eN(n))throw n;Zi("Error using user provided cache. Falling back to memory cache: "+n),await hh(t,new Dy)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await hh(t,new Dy);return t._offlineComponents}async function gw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Oy(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Oy(t,new Yk))),t._onlineComponents}function nN(t){return gw(t).then(e=>e.syncEngine)}async function rN(t){const e=await gw(t),n=e.eventManager;return n.onListen=Uk.bind(null,e.syncEngine),n.onUnlisten=Bk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Fk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zk.bind(null,e.syncEngine),n}function iN(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new Jk({next:m=>{o.enqueueAndForget(()=>Nk(s,p)),m.fromCache&&u.source==="server"?c.reject(new q(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new Ok(l,f,{includeMetadataChanges:!0,ra:!0});return kk(s,p)}(await rN(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t,e,n){if(!n)throw new q(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sN(t,e,n,r){if(e===!0&&r===!0)throw new q(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ly(t){if(!W.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vy(t){if(W.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function up(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=up(t);throw new q(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new My({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new My(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new y2;switch(r.type){case"firstParty":return new E2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=by.get(n);r&&(H("ComponentProvider","Removing Datastore"),by.delete(n),r.terminate())}(this),Promise.resolve()}}function oN(t,e,n,r={}){var i;const s=(t=wr(t,Wu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Zi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ze.MOCK_USER;else{l=F0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ze(c)}t._authCredentials=new _2(new y1(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ku(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class fr extends Ku{constructor(e,n,r){super(e,n,C1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new W(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function vw(t,e,...n){if(t=ye(t),_w("collection","path",e),t instanceof Wu){const r=ge.fromString(e,...n);return Vy(r),new fr(t,null,r)}{if(!(t instanceof Rt||t instanceof fr))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Vy(r),new fr(t.firestore,null,r)}}function gl(t,e,...n){if(t=ye(t),arguments.length===1&&(e=_1.newId()),_w("doc","path",e),t instanceof Wu){const r=ge.fromString(e,...n);return Ly(r),new Rt(t,null,new W(r))}{if(!(t instanceof Rt||t instanceof fr))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return Ly(r),new Rt(t.firestore,t instanceof fr?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ew(this,"async_queue_retry"),this.hu=()=>{const n=ch();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=ch();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new dr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!ta(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=sp.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&G()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class oa extends Wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new aN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ew(this),this._firestoreClient.terminate()}}function lN(t,e){const n=typeof t=="object"?t:bf(),r=typeof t=="string"?t:"(default)",i=bu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=V0("firestore");s&&oN(i,...s)}return i}function ww(t){return t._firestoreClient||Ew(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ew(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new b2(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,yw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Zk(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(rt.fromBase64String(e))}catch(n){throw new q(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=/^__.*__$/;class cN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new na(e,this.data,n,this.fieldTransforms)}}class Tw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Iw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Xu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Xu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return ou(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Iw(this.fu)&&uN.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class hN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$u(e)}Fu(e,n,r,i=!1){return new Xu({fu:e,methodName:n,vu:r,path:ze.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sw(t){const e=t._freezeSettings(),n=$u(t._databaseId);return new hN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dN(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);dp("Data must be an object, but it was:",o,r);const l=Rw(r,o);let u,c;if(s.merge)u=new It(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=xd(e,p,n);if(!o.contains(m))throw new q(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Pw(f,m)||f.push(m)}u=new It(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new cN(new pt(l),u,c)}class Yu extends Qu{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yu}}function fN(t,e,n){return new Xu({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class hp extends Qu{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=fN(this,e,!0),r=this.Mu.map(s=>aa(s,n)),i=new rs(r);return new sC(e.path,i)}isEqual(e){return e instanceof hp&&Lo(this.Mu,e.Mu)}}function pN(t,e,n,r){const i=t.Fu(1,e,n);dp("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();ui(r,(u,c)=>{const f=fp(e,u,n);c=ye(c);const p=i.Su(f);if(c instanceof Yu)s.push(f);else{const m=aa(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new It(s);return new Tw(o,l,i.fieldTransforms)}function mN(t,e,n,r,i,s){const o=t.Fu(1,e,n),l=[xd(e,r,n)],u=[i];if(s.length%2!=0)throw new q(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(xd(e,s[m])),u.push(s[m+1]);const c=[],f=pt.empty();for(let m=l.length-1;m>=0;--m)if(!Pw(c,l[m])){const E=l[m];let P=u[m];P=ye(P);const k=o.Su(E);if(P instanceof Yu)c.push(E);else{const x=aa(P,k);x!=null&&(c.push(E),f.set(E,x))}}const p=new It(c);return new Tw(f,p,o.fieldTransforms)}function aa(t,e){if(Aw(t=ye(t)))return dp("Unsupported field value:",e,t),Rw(t,e);if(t instanceof Qu)return function(r,i){if(!Iw(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=aa(l,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:iu(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:iu(i.serializer,s)}}if(r instanceof cp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof os)return{bytesValue:q1(i.serializer,r._byteString)};if(r instanceof Rt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yf(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${up(r)}`)}(t,e)}function Rw(t,e){const n={};return v1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(r,i)=>{const s=aa(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Aw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof cp||t instanceof os||t instanceof Rt||t instanceof Qu)}function dp(t,e,n){if(!Aw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=up(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function xd(t,e,n){if((e=ye(e))instanceof Gu)return e._internalPath;if(typeof e=="string")return fp(t,e);throw ou("Field path arguments must be of type string or ",t,!1,void 0,n)}const gN=new RegExp("[~\\*/\\[\\]]");function fp(t,e,n){if(e.search(gN)>=0)throw ou(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gu(...e.split("."))._internalPath}catch{throw ou(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ou(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(U.INVALID_ARGUMENT,l+t+u)}function Pw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yN extends Cw{data(){return super.data()}}function kw(t,e){return typeof e=="string"?fp(t,e):e instanceof Gu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vN{convertValue(e,n="none"){switch(ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new cp(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Uo(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ce(Y1(r));const i=new Fo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class EN extends Cw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yl extends EN{data(e={}){return super.data(e)}}class TN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ja(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yl(this._firestore,this._userDataWriter,r.key,r,new Ja(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ja(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ja(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:IN(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class SN extends vN{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function Nw(t){t=wr(t,Ku);const e=wr(t.firestore,oa),n=ww(e),r=new SN(e);return _N(t._query),iN(n,t._query).then(i=>new TN(e,r,t,i))}function Uy(t,e,n){t=wr(t,Rt);const r=wr(t.firestore,oa),i=wN(t.converter,e);return pp(r,[dN(Sw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zt.none())])}function RN(t,e,n,...r){t=wr(t,Rt);const i=wr(t.firestore,oa),s=Sw(i);let o;return o=typeof(e=ye(e))=="string"||e instanceof Gu?mN(s,"updateDoc",t._key,e,n,r):pN(s,"updateDoc",t._key,e),pp(i,[o.toMutation(t._key,zt.exists(!0))])}function AN(t){return pp(wr(t.firestore,oa),[new Gf(t._key,zt.none())])}function pp(t,e){return function(r,i){const s=new dr;return r.asyncQueue.enqueueAndForget(async()=>$k(await nN(r),i,s)),s.promise}(ww(t),e)}function PN(...t){return new hp("arrayUnion",t)}(function(e,n=!0){(function(i){ms=i})(ai),Yr(new gr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new oa(new v2(r.getProvider("auth-internal")),new I2(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fo(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Zt(iy,"4.6.2",e),Zt(iy,"4.6.2","esm2017")})();function mp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function xw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CN=xw,Dw=new Yo("auth","Firebase",xw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new Df("@firebase/auth");function kN(t,...e){au.logLevel<=te.WARN&&au.warn(`Auth (${ai}): ${t}`,...e)}function _l(t,...e){au.logLevel<=te.ERROR&&au.error(`Auth (${ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw gp(t,...e)}function nn(t,...e){return gp(t,...e)}function Ow(t,e,n){const r=Object.assign(Object.assign({},CN()),{[e]:n});return new Yo("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return Ow(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dw.create(t,...e)}function K(t,e,...n){if(!t)throw gp(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _l(e),new Error(e)}function On(t,e){t||wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NN(){return Fy()==="http:"||Fy()==="https:"}function Fy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NN()||OR()||"connection"in navigator)?navigator.onLine:!0}function DN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=xR()||bR()}get(){return xN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=new la(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ln(t,e,n,r,i={}){return Lw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Jo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),bw.fetch()(Vw(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Lw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ON),e);try{const i=new VN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Za(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Za(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ow(t,f,c);qt(t,f)}}catch(i){if(i instanceof an)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function ua(t,e,n,r,i={}){const s=await Ln(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Vw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yp(t.config,i):`${t.config.apiScheme}://${i}`}function LN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),bN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}function jy(t){return t!==void 0&&t.enterprise!==void 0}class MN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return LN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function UN(t,e){return Ln(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t,e){return Ln(t,"POST","/v1/accounts:delete",e)}async function Mw(t,e){return Ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jN(t,e=!1){const n=ye(t),r=await n.getIdToken(e),i=_p(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mo(dh(i.auth_time)),issuedAtTime:mo(dh(i.iat)),expirationTime:mo(dh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function dh(t){return Number(t)*1e3}function _p(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _l("JWT malformed, contained fewer than 3 sections"),null;try{const i=b0(n);return i?JSON.parse(i):(_l("Failed to decode base64 JWT payload"),null)}catch(i){return _l("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function By(t){const e=_p(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&BN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await as(t,Mw(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Uw(s.providerUserInfo):[],l=HN(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Od(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function $N(t){const e=ye(t);await lu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Uw(t){return t.map(e=>{var{providerId:n}=e,r=mp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qN(t,e){const n=await Lw(t,{},async()=>{const r=Jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Vw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",bw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WN(t,e){return Ln(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):By(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=By(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Od(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await as(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jN(this,e)}reload(){return $N(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await as(this,FN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,E=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:I,emailVerified:D,isAnonymous:L,providerData:M,stsTokenManager:T}=n;K(I&&T,e,"internal-error");const y=zi.fromJSON(this.name,T);K(typeof I=="string",e,"internal-error"),jn(p,e.name),jn(m,e.name),K(typeof D=="boolean",e,"internal-error"),K(typeof L=="boolean",e,"internal-error"),jn(E,e.name),jn(P,e.name),jn(k,e.name),jn(x,e.name),jn(v,e.name),jn(_,e.name);const S=new En({uid:I,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:L,photoURL:P,phoneNumber:E,tenantId:k,stsTokenManager:y,createdAt:v,lastLoginAt:_});return M&&Array.isArray(M)&&(S.providerData=M.map(w=>Object.assign({},w))),x&&(S._redirectEventId=x),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new zi;i.updateFromServerResponse(n);const s=new En({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Uw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new zi;l.updateFromIdToken(r);const u=new En({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Od(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=new Map;function Tn(t){On(t instanceof Function,"Expected a class definition");let e=zy.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fw.type="NONE";const $y=Fw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t,e,n){return`firebase:${t}:${e}:${n}`}class $i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?En._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $i(Tn($y),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Tn($y);const o=vl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=En._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new $i(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new $i(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hw(e))return"Blackberry";if(qw(e))return"Webos";if(vp(e))return"Safari";if((e.includes("chrome/")||Bw(e))&&!e.includes("edge/"))return"Chrome";if($w(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jw(t=We()){return/firefox\//i.test(t)}function vp(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bw(t=We()){return/crios\//i.test(t)}function zw(t=We()){return/iemobile/i.test(t)}function $w(t=We()){return/android/i.test(t)}function Hw(t=We()){return/blackberry/i.test(t)}function qw(t=We()){return/webos/i.test(t)}function Ju(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KN(t=We()){var e;return Ju(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GN(){return LR()&&document.documentMode===10}function Ww(t=We()){return Ju(t)||$w(t)||qw(t)||Hw(t)||/windows phone/i.test(t)||zw(t)}function QN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t,e=[]){let n;switch(t){case"Browser":n=Hy(We());break;case"Worker":n=`${Hy(We())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ai}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(t,e={}){return Ln(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=6;class ZN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:JN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qy(this),this.idTokenSubscription=new qy(this),this.beforeStateQueue=new XN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $i.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Mw(this,{idToken:e}),r=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qt(this.app))return Promise.reject(An(this));const n=e?ye(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YN(this),n=new ZN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await WN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await $i.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hi(t){return ye(t)}class qy{constructor(e){this.auth=e,this.observer=null,this.addObserver=$R(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tx(t){Zu=t}function Gw(t){return Zu.loadJS(t)}function nx(){return Zu.recaptchaEnterpriseScript}function rx(){return Zu.gapiScript}function ix(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sx="recaptcha-enterprise",ox="NO_RECAPTCHA";class ax{constructor(e){this.type=sx,this.auth=hi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{UN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new MN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;jy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ox)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&jy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=nx();u.length!==0&&(u+=l),Gw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Wy(t,e,n,r=!1){const i=new ax(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Wy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Wy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t,e){const n=bu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Lo(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function ux(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cx(t,e,n){const r=hi(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Qw(e),{host:o,port:l}=hx(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),dx()}function Qw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hx(t){const e=Qw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ky(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ky(o)}}}function Ky(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function fx(t,e){return Ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(t,e){return ua(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mx(t,e){return ua(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function gx(t,e){return ua(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends wp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new zo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new zo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,n,"signInWithPassword",px);case"emailLink":return mx(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bd(e,r,"signUpPassword",fx);case"emailLink":return gx(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e){return ua(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx="http://localhost";class ni extends wp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hi(e,n)}buildRequest(){const e={requestUri:yx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vx(t){const e=Qs(Xs(t)).link,n=e?Qs(Xs(e)).deep_link_id:null,r=Qs(Xs(t)).deep_link_id;return(r?Qs(Xs(r)).link:null)||r||n||e||t}class Ep{constructor(e){var n,r,i,s,o,l;const u=Qs(Xs(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=_x((i=u.mode)!==null&&i!==void 0?i:null);K(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=vx(e);try{return new Ep(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ep.parseLink(n);return K(r,"argument-error"),zo._fromEmailAndCode(e,r.code,r.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends Xw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ca{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ca{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ca{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(t,e){return ua(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await En._fromIdTokenResponse(e,r,i),o=Gy(r);return new ri({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gy(r);return new ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu extends an{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uu(e,n,r,i)}}function Yw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uu._fromErrorAndOperation(t,s,e,r):s})}async function Ex(t,e,n=!1){const r=await as(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx(t,e,n=!1){const{auth:r}=t;if(Qt(r.app))return Promise.reject(An(r));const i="reauthenticate";try{const s=await as(t,Yw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=_p(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,e,n=!1){if(Qt(t.app))return Promise.reject(An(t));const r="signIn",i=await Yw(t,r,e),s=await ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ix(t,e){return Jw(hi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(t){const e=hi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Sx(t,e,n){if(Qt(t.app))return Promise.reject(An(t));const r=hi(t),o=await bd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wx).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Zw(t),u}),l=await ri._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Rx(t,e,n){return Qt(t.app)?Promise.reject(An(t)):Ix(ye(t),_s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Zw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ax(t,e){return Ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ye(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await as(r,Ax(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Cx(t,e,n,r){return ye(t).onIdTokenChanged(e,n,r)}function kx(t,e,n){return ye(t).beforeAuthStateChanged(e,n)}function Nx(t,e,n,r){return ye(t).onAuthStateChanged(e,n,r)}function xx(t){return ye(t).signOut()}async function Dx(t){return ye(t).delete()}const cu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(cu,"1"),this.storage.removeItem(cu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(){const t=We();return vp(t)||Ju(t)}const bx=1e3,Lx=10;class tE extends eE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ox()&&QN(),this.fallbackToPolling=Ww(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Lx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tE.type="LOCAL";const Vx=tE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE extends eE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nE.type="SESSION";const rE=nE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ec(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await Mx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Tp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function Fx(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function jx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zx(){return iE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="firebaseLocalStorageDb",$x=1,hu="firebaseLocalStorage",oE="fbase_key";class ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([hu],e?"readwrite":"readonly").objectStore(hu)}function Hx(){const t=indexedDB.deleteDatabase(sE);return new ha(t).toPromise()}function Ld(){const t=indexedDB.open(sE,$x);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hu,{keyPath:oE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hu)?e(r):(r.close(),await Hx(),e(await Ld()))})})}async function Qy(t,e,n){const r=tc(t,!0).put({[oE]:e,value:n});return new ha(r).toPromise()}async function qx(t,e){const n=tc(t,!1).get(e),r=await new ha(n).toPromise();return r===void 0?null:r.value}function Xy(t,e){const n=tc(t,!0).delete(e);return new ha(n).toPromise()}const Wx=800,Kx=3;class aE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ld(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Kx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(zx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jx(),!this.activeServiceWorker)return;this.sender=new Ux(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ld();return await Qy(e,cu,"1"),await Xy(e,cu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=tc(i,!1).getAll();return new ha(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aE.type="LOCAL";const Gx=aE;new la(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t,e){return e?Tn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends wp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xx(t){return Jw(t.auth,new Ip(t),t.bypassAuthState)}function Yx(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Tx(n,new Ip(t),t.bypassAuthState)}async function Jx(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Ex(n,new Ip(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xx;case"linkViaPopup":case"linkViaRedirect":return Jx;case"reauthViaPopup":case"reauthViaRedirect":return Yx;default:qt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=new la(2e3,1e4);class Oi extends lE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Oi.currentPopupAction&&Oi.currentPopupAction.cancel(),Oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zx.get())};e()}}Oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD="pendingRedirect",wl=new Map;class tD extends lE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const r=await nD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nD(t,e){const n=sD(e),r=iD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function rD(t,e){wl.set(t._key(),e)}function iD(t){return Tn(t._redirectPersistence)}function sD(t){return vl(eD,t.config.apiKey,t.name)}async function oD(t,e,n=!1){if(Qt(t.app))return Promise.reject(An(t));const r=hi(t),i=Qx(r,e),o=await new tD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=10*60*1e3;class lD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yy(e))}saveEventToCache(e){this.cachedEventUids.add(Yy(e)),this.lastProcessedEventTime=Date.now()}}function Yy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(t,e={}){return Ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dD=/^https?/;async function fD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cD(t);for(const n of e)try{if(pD(n))return}catch{}qt(t,"unauthorized-domain")}function pD(t){const e=Dd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!dD.test(n))return!1;if(hD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD=new la(3e4,6e4);function Jy(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gD(t){return new Promise((e,n)=>{var r,i,s;function o(){Jy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jy(),n(nn(t,"network-request-failed"))},timeout:mD.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const l=ix("iframefcb");return rn()[l]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},Gw(`${rx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw El=null,e})}let El=null;function yD(t){return El=El||gD(t),El}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=new la(5e3,15e3),vD="__/auth/iframe",wD="emulator/auth/iframe",ED={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ID(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yp(e,wD):`https://${t.config.authDomain}/${vD}`,r={apiKey:e.apiKey,appName:t.name,v:ai},i=TD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jo(r).slice(1)}`}async function SD(t){const e=await yD(t),n=rn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:ID(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ED,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),l=rn().setTimeout(()=>{s(o)},_D.get());function u(){rn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AD=500,PD=600,CD="_blank",kD="http://localhost";class Zy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ND(t,e,n,r=AD,i=PD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},RD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=We().toLowerCase();n&&(l=Bw(c)?CD:n),jw(c)&&(e=e||kD,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[E,P])=>`${m}${E}=${P},`,"");if(KN(c)&&l!=="_self")return xD(e||"",l),new Zy(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new Zy(p)}function xD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD="__/auth/handler",OD="emulator/auth/handler",bD=encodeURIComponent("fac");async function e_(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ai,eventId:i};if(e instanceof Xw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ca){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${bD}=${encodeURIComponent(u)}`:"";return`${LD(t)}?${Jo(l).slice(1)}${c}`}function LD({config:t}){return t.emulator?yp(t,OD):`https://${t.authDomain}/${DD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="webStorageSupport";class VD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rE,this._completeRedirectFn=oD,this._overrideRedirectResult=rD}async _openPopup(e,n,r,i){var s;On((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await e_(e,n,r,Dd(),i);return ND(e,o,Tp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await e_(e,n,r,Dd(),i);return Fx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SD(e),r=new lD(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fh,{type:fh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fh];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ww()||vp()||Ju()}}const MD=VD;var t_="@firebase/auth",n_="1.7.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jD(t){Yr(new gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kw(t)},c=new ex(r,i,s,u);return ux(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new gr("auth-internal",e=>{const n=hi(e.getProvider("auth").getImmediate());return(r=>new UD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(t_,n_,FD(t)),Zt(t_,n_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=5*60,zD=U0("authIdTokenMaxAge")||BD;let r_=null;const $D=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zD)return;const i=n==null?void 0:n.token;r_!==i&&(r_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HD(t=bf()){const e=bu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lx(t,{popupRedirectResolver:MD,persistence:[Gx,Vx,rE]}),r=U0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=$D(s.toString());kx(n,o,()=>o(n.currentUser)),Cx(n,l=>o(l))}}const i=L0("auth");return i&&cx(n,`http://${i}`),n}function qD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jD("Browser");const WD={apiKey:"AIzaSyDBR8M6dM6_pkJTaDddP-x-lbxSW7HtE4o",authDomain:"my-tip-tracker.firebaseapp.com",projectId:"my-tip-tracker",storageBucket:"my-tip-tracker.appspot.com",messagingSenderId:"596284627841",appId:"1:596284627841:web:2c8752ff2b7fe66fb12680",measurementId:"G-8Q1QLQY2KZ"},Sp=z0(WD),i_=f2(Sp),$t=HD(Sp),bi=lN(Sp),KD={templateTitle:"signupData",fields:[{type:"email",label:"email",placeholder:"gf@example.com"},{type:"password",label:"password",placeholder:"******"}]},GD={templateTitle:"loginData",fields:[{type:"email",label:"email",placeholder:"gf@example.com"},{type:"password",label:"password",placeholder:"******"}]},QD={templateTitle:"profile",fields:[{type:"",displayName:"",email:""}]},XD={templateTitle:"tipsForm",fields:[{type:"number",label:"TipsBrut",placeholder:"enter tips brut"},{type:"number",label:"TipsNet",placeholder:"enter tips net"}]},YD={templateTitle:"update",fields:[{type:"text",label:"displayName",placeholder:"display name"}]},JD=[{titles:["week day","date","tips(brut)","tips(net)"]}],ZD=({src:t})=>{const e=$t.currentUser;return R.jsxs(R.Fragment,{children:[R.jsx("div",{className:"col-12",children:R.jsx("div",{className:"container-fluid",children:R.jsx("img",{src:t,alt:"avatar",style:{widht:"200px",height:"200px",borderRadius:"50%",aspectRatio:"1 / 1",backgroundPosition:"cover"}})})}),R.jsxs("section",{className:"here mt-5 mx-5",children:[R.jsxs("p",{className:"col-12",children:["Display name: ",e==null?void 0:e.displayName]}),R.jsxs("p",{className:"col-12",children:["Contact: ",e==null?void 0:e.email]}),R.jsxs("p",{className:"col-12",children:["Created on: ",e==null?void 0:e.metadata.creationTime]})]})]})};var cE={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s_=In.createContext&&In.createContext(cE),e4=["attr","size","title"];function t4(t,e){if(t==null)return{};var n=n4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function n4(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function du(){return du=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},du.apply(this,arguments)}function o_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?o_(Object(n),!0).forEach(function(r){r4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function r4(t,e,n){return e=i4(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i4(t){var e=s4(t,"string");return typeof e=="symbol"?e:e+""}function s4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function hE(t){return t&&t.map((e,n)=>In.createElement(e.tag,fu({key:n},e.attr),hE(e.child)))}function Rp(t){return e=>In.createElement(o4,du({attr:fu({},t.attr)},e),hE(t.child))}function o4(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=t4(t,e4),l=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),In.createElement("svg",du({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:fu(fu({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&In.createElement("title",null,s),t.children)};return s_!==void 0?In.createElement(s_.Consumer,null,n=>e(n)):e(cE)}function ls(t){return Rp({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"},child:[]}]})(t)}function us(t){return Rp({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M136 25.01c-16.5 0-31.3 3.4-41.29 8.4-9.9 5-13.7 10.6-13.7 14.6 0 3.9 3.8 9.61 13.7 14.5 9.99 5 24.79 8.5 41.29 8.5s31.3-3.5 41.2-8.5c10-4.89 13.8-10.6 13.8-14.5 0-4-3.8-9.6-13.8-14.6-9.9-5-24.7-8.4-41.2-8.4zm160 32c-16.5 0-31.3 3.4-41.2 8.4-10 5-13.8 10.6-13.8 14.6 0 3.9 3.8 9.61 13.8 14.5 9.9 5 24.7 8.49 41.2 8.49 4.6 0 9-.3 13.2-.8 4.3-5.49 10.4-10.36 17.5-13.6 8.2-3.7 17.7-6.7 24.3-8.59 0-4-3.8-9.6-13.8-14.6-9.9-5-24.7-8.4-41.2-8.4zM81.01 75.4c-.4 14.66 15.48 20.64 25.49 23.6 17.9 5.2 41.1 5.2 59 0 12.8-3.66 25.4-10.72 25.5-23.6-16.1 10.63-39.6 13.49-55 13.6-19.5-1.63-39.98-3.65-54.99-13.6zM376 96.31c-16.5 0-31.3 3.4-41.2 8.49-10 4.9-13.8 10.6-13.8 14.5 0 4 3.8 9.6 13.8 14.6 9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 10-5 13.8-10.6 13.8-14.6 0-3.9-3.8-9.6-13.8-14.5-9.9-5.09-24.7-8.49-41.2-8.49zM241 107.4v2.4c2.9 1 5.7 2.2 8.3 3.5 9 4.5 16.8 10.8 20.8 18.7 10.2 2.5 21.7 3.4 32.9 2.7v-13.9c-2.3.1-4.6.2-7 .2-18.9 0-36.1-3.7-49.3-10.3-2-1-3.9-2.1-5.7-3.3zm-159.99.1c-.34 14.6 15.52 20.6 25.49 23.6 6.8 1.9 14.4 3.2 22.2 3.6 2-5.2 5.6-9.8 10.2-13.7-12.8.3-25.7-1.3-37.4-4.6-7.79-2.3-14.69-5.2-20.49-8.9zM200 121c-16.5 0-31.3 3.5-41.2 8.4-10 5-13.8 10.6-13.8 14.6s3.8 9.6 13.8 14.6c9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 10-5 13.8-10.6 13.8-14.6s-3.8-9.6-13.8-14.6c-9.9-4.9-24.7-8.4-41.2-8.4zM81.01 139.5c-.34 14.6 15.52 20.6 25.49 23.6 6.3 1.8 13.3 3 20.5 3.5v-13.8c-8.8-.6-17.4-2.1-25.5-4.4-7.79-2.3-14.69-5.2-20.49-8.9zM321 146.8c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.2 41.1 5.2 59 0 12.7-3.7 25.4-10.7 25.5-23.6-1.8 1.1-3.7 2.2-5.7 3.2-13.2 6.6-30.4 10.3-49.3 10.3s-36.1-3.7-49.3-10.3c-2-1-3.9-2.1-5.7-3.2zm-48 4.2v13.7c9.4 1.9 19.9 2.6 30 2v-13.8c-10.1.5-20.3-.1-30-1.9zm-128 20.4c-.5 6 2.2 10.9 5.5 13.8 4.2 3.6 11 7.3 20 9.9 17.9 5.1 41.1 5.1 59 0 9-2.6 15.8-6.3 20-9.9 4.9-4.1 5.5-8.1 5.5-13.8-1.8 1.2-3.7 2.3-5.7 3.3-13.2 6.6-30.4 10.3-49.3 10.3s-36.1-3.7-49.3-10.3c-2-1-3.9-2.1-5.7-3.3zm-63.99.1c-.34 14.6 15.52 20.6 25.49 23.6 6.3 1.8 13.3 3 20.5 3.5v-13.8c-8.8-.6-17.4-2.1-25.5-4.4-7.79-2.3-14.69-5.2-20.49-8.9zM321 178.8c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.2 41.1 5.2 59 0 12.7-3.7 25.4-10.7 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.3-47.3 6.3-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-48 4.2v13.7c9.4 1.9 19.9 2.6 30 2v-13.8c-10.1.5-20.3-.1-30-1.9zM81.01 203.5c-.34 14.6 15.52 20.6 25.49 23.6 6.3 1.8 13.3 3 20.5 3.5v-13.8c-8.8-.6-17.4-2.1-25.5-4.4-7.79-2.3-14.69-5.2-20.49-8.9zm63.99 0c-.5 6 2.2 10.8 5.5 13.7 4.2 3.6 11 7.3 20 9.9 17.9 5.1 41.1 5.1 59 0 9-2.6 15.8-6.3 20-9.9 4.9-4.1 5.5-8 5.5-13.7-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm176 7.3c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.2 41.1 5.2 59 0 12.7-3.7 25.4-10.7 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.3-47.3 6.3-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-48 4.2v13.7c9.4 1.9 19.9 2.6 30 2v-13.8c-10.1.5-20.3-.1-30-1.9zm-128 20.5v2.3c2.9 1 5.7 2.2 8.3 3.5 9 4.5 16.8 10.8 20.8 18.7 17.3 4.2 38.7 3.9 55.4-.9 9-2.6 15.8-6.3 20-9.9 4.9-4.1 5.5-8 5.5-13.7-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm176 7.3c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.2 41.1 5.2 59 0 12.7-3.7 25.4-10.7 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.3-47.3 6.3-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-48 4.2v13.7c9.4 1.9 19.9 2.6 30 2v-13.8c-10.1.5-20.3-.1-30-1.9zm-169 2c-16.49 0-31.29 3.5-41.29 8.4-9.9 5-13.7 10.6-13.7 14.6s3.8 9.6 13.7 14.6c10 5 24.8 8.4 41.29 8.4 16.5 0 31.3-3.4 41.2-8.4 10-5 13.8-10.6 13.8-14.6s-3.8-9.6-13.8-14.6c-9.9-4.9-24.7-8.4-41.2-8.4zm151 18.5c-5.8 3.7-12.7 6.6-20.5 8.9-18 5.1-38.6 6-57.5 2.6v13.7c16.8 3.5 36.7 2.9 52.5-1.6 12.6-3.7 25.4-10.8 25.5-23.6zm66 7.3c-.3 14.2 14.7 20.3 24.6 23.3 5.6-4.5 10.7-7.9 16.7-10.4-7.2-.8-14.2-2.1-20.8-4-7.8-2.3-14.7-5.2-20.5-8.9zm110 0c-2.8 1.8-5.9 3.4-9.3 4.9 3.1.3 6.2.7 9.1 1.2.4-2 .2-4 .2-6.1zM273 279v13.6c10.9 2.1 20 2.6 30 2.2v-13.9c-10.1.5-20.3-.1-30-1.9zm135 18c-16.5 0-31.3 3.5-41.2 8.4-10 5-13.8 10.6-13.8 14.6s3.8 9.6 13.8 14.6c9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 10-5 13.8-10.6 13.8-14.6s-3.8-9.6-13.8-14.6c-9.9-4.9-24.7-8.4-41.2-8.4zm-358.99 2.4c-.29 14.8 15.31 20.7 25.5 23.7 17.9 5.1 41.09 5.1 58.99 0 12.7-3.7 25.4-10.8 25.5-23.7-1.8 1.2-3.7 2.3-5.7 3.3-13.2 6.6-30.4 10.3-49.3 10.3-19.61-1.6-39.88-3.6-54.99-13.6zm205.99.1c-5.8 3.7-12.7 6.6-20.5 8.9-18 5.1-38.6 6-57.5 2.6v13.7c16.8 3.5 36.7 2.9 52.5-1.6 12.6-3.7 25.4-10.8 25.5-23.6zm66 7.3c-.4 10.3 8 16.1 13.8 19.1 0 0 .1.1.2.1v-12.4c-5.2-1.9-9.9-4.2-14-6.8zM49.01 331.5c-.34 14.6 15.52 20.6 25.5 23.6 17.9 5.1 41.09 5.1 58.99 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.29 6.2-68.99 0-7.8-2.3-14.7-5.2-20.5-8.9zM177 343v13.6c4.9 1.1 10.2 1.8 15.7 2.2 2-5.3 5.6-9.9 10.2-13.8-8.7.2-17.5-.5-25.9-2zm87 2c-16.5 0-31.3 3.5-41.2 8.4-10 5-13.8 10.6-13.8 14.6s3.8 9.6 13.8 14.6c9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 10-5 13.8-10.6 13.8-14.6s-3.8-9.6-13.8-14.6c-9.9-4.9-24.7-8.4-41.2-8.4zm89 2.4c-.1 14.8 15.2 20.7 25.5 23.7 17.9 5.1 41.1 5.1 59 0 12.7-3.7 25.4-10.8 25.5-23.7-15.8 9.6-39.7 13.5-55 13.6-19.6-1.6-39.9-3.6-55-13.6zM49.01 363.5c-.34 14.6 15.52 20.6 25.5 23.6 17.9 5.1 41.09 5.1 58.99 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.29 6.2-68.99 0-7.8-2.3-14.7-5.2-20.5-8.9zm303.99 16c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.1 41.1 5.1 59 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-144 15.9c-.5 6 2.2 10.9 5.5 13.8 4.2 3.6 11 7.3 20 9.9 17.9 5.1 41.1 5.1 59 0 9-2.6 15.8-6.3 20-9.9 4.2-3.6 5.5-6.7 5.5-9.2v-4.6c-1.8 1.2-3.7 2.3-5.7 3.3-13.2 6.6-30.4 10.3-49.3 10.3s-36.1-3.7-49.3-10.3c-2-1-3.9-2.1-5.7-3.3zm-159.99.1c-.34 14.6 15.52 20.6 25.5 23.6 17.9 5.1 41.09 5.1 58.99 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.29 6.2-68.99 0-7.8-2.3-14.7-5.2-20.5-8.9zm303.99 16c-.2 14.7 15.4 20.6 25.5 23.6 17.9 5.1 41.1 5.1 59 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-303.99 16c-.34 14.6 15.52 20.6 25.5 23.6 17.9 5.1 41.09 5.1 58.99 0 12.6-3.7 25.4-10.8 25.5-23.6-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.29 6.2-68.99 0-7.8-2.3-14.7-5.2-20.5-8.9zm159.99 0c-.4 10.3 8 16.1 13.8 19.1 9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 9.9-6.2 13.8-8.6 13.8-19.1-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm144 16c-.4 10.3 8 16.1 13.8 19.1 9.9 5 24.7 8.4 41.2 8.4 16.5 0 31.3-3.4 41.2-8.4 9.9-6.2 13.8-8.6 13.8-19.1-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.3 6.2-69 0-7.8-2.3-14.7-5.2-20.5-8.9zm-303.99 16c-.44 10.2 7.88 16.1 13.7 19.1 10 5 24.8 8.4 41.29 8.4 16.5 0 31.3-3.4 41.2-8.4 9.9-6.2 13.8-8.6 13.8-19.1-5.8 3.7-12.7 6.6-20.5 8.9-21.7 6.2-47.29 6.2-68.99 0-7.8-2.3-14.7-5.2-20.5-8.9z"},child:[]}]})(t)}const ii=({children:t,type:e,disabled:n,onClick:r,loading:i})=>R.jsx("div",{className:"btn-div p-0",children:R.jsx("button",{className:"button btn",type:e,disabled:n,onClick:r,children:i?R.jsx(R.Fragment,{children:"Please wait..."}):R.jsx(R.Fragment,{children:R.jsx("span",{className:"show-save",children:t})})})}),a4=({fields:t})=>{const e=V.useMemo(()=>new Date,[]),n=e.toString().slice(0,3);var r=("0"+(e.getMonth()+1)).slice(-2),i=("0"+e.getDate()).slice(-2),s=e.getFullYear(),o=r+"/"+i+"/"+s;const[l,u]=V.useState(!1),[c,f]=V.useState([]),[p,m]=V.useState([]),[E,P]=V.useState(!1),[k,x]=V.useState(!1),[v,_]=V.useState({TipsBrut:0,TipsNet:0,dayName:"",date:o}),I=Xo(),D=V.useRef(),L=$t.currentUser,M=w=>{const{name:C,value:N}=w.target;_({...v,[C]:N})},T=V.useCallback(async()=>{p.pop(),p.push(v);try{await Uy(gl(bi,"users",L.uid),{displayName:L.displayName,email:L.email,photoURL:L.photoURL,tips:p,date:o})}catch(w){console.log("error",w.message)}finally{console.log("did set doc"),u(!1),_({TipsBrut:0,TipsNet:0,dayName:"",date:o}),I("/dashboard")}},[p,L,o,I,v]),y=V.useCallback(async w=>{w.preventDefault(),console.log("update the collection");const C=gl(bi,"users",L.uid);p!=null&&p.length&&v.date===o&&T();try{await RN(C,{tips:PN({...v,date:o})})}catch(N){console.log(N.message)}finally{console.log("did update doc/arrayUnion"),_({TipsBrut:0,TipsNet:0,dayName:"",date:o}),I("/dashboard")}},[L,o,I,v,p,T]),S=V.useCallback(async w=>{w.preventDefault(),console.log("create the collection"),l&&(console.log("true, there is a collection"),y());try{await Uy(gl(bi,"users",L.uid),{displayName:L.displayName,email:L.email,photoURL:L.photoURL,tips:v,date:o})}catch(C){console.log("error",C.message)}finally{console.log("added for first time to doc"),_({TipsBrut:0,TipsNet:0,dayName:"",date:o}),I("/dashboard")}},[L,v,o,l,I,y]);return V.useEffect(()=>{const w=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];if(!(!n||!v)){for(let C of w)if(C.toString().slice(0,3)===n){const N="dayName";v[N]||_({...v,[N]:C})}}},[n,v,i]),V.useEffect(()=>{(async()=>{const C=await Nw(vw(bi,"users")),N=[];C.forEach(A=>{const ht=A.data();N.push(ht)}),f(N)})()},[]),V.useEffect(()=>{if(c.length){const w=c.filter(C=>C.email===L.email);m(w.tips),u(!0)}else console.log("there are no users",c)},[c,L]),R.jsx("div",{className:"row you tips g-0","data-testid":"card-body-tips-form",children:R.jsxs("form",{ref:D,className:"form px-5",onSubmit:l?y:S,children:[R.jsx("br",{}),t&&t.map(w=>{var C;return R.jsxs("div",{className:"col-12",children:[R.jsxs("label",{"data-testid":`enterTipsForm-label-${w.label}`,htmlFor:w.label,className:"form-label here mb-3",name:w.label,children:[w.label,":"]}),R.jsx("br",{}),R.jsx("br",{}),w.label==="Tipsbrut"&&R.jsx(ls,{"data-testid":"fa-sack-dollar",className:"hum-icon-form"}),w.label==="TipsNet"&&R.jsx(us,{"data-testid":"fa-gi-coins",className:"hum-icon-form"}),R.jsx("input",{"data-testid":"input",role:"spinbutton",id:w.label,inputMode:"numeric",type:w.type,className:"tips-input mb-3 mx-2",placeholder:w.placeholder,style:{fontStyle:"oblique",paddingLeft:"3%",color:"black"},value:(C=v.field)==null?void 0:C.label,onChange:M,name:w.label,onKeyDown:N=>["e","E","+","-"].includes(N.key)&&N.preventDefault()}),R.jsx("br",{}),R.jsx("br",{})]},w.label)}),R.jsx(ii,{type:"submit",className:"button",disabled:!1,loading:k,children:"add tips"}),E&&R.jsx("span",{className:"text-danger","data-testid":"oops",children:"Oops, something went wrong..."})]})})};function a_(t){console.log(t);function e(s,o,l){const u=new Date(o,l,0).getDate(),c=[],f=new Map;console.log(f);for(const p of s){const m=parseInt(p.date.slice(3,5));f.set(m,p)}for(let p=1;p<=u;p++){const m=f.get(p)||{TipsNet:"0",TipsBrut:"0",dayName:new Date(o,l-1,p).toLocaleDateString("en-US",{weekday:"long"}),date:`${String(l).padStart(2,"0")}/${String(p).padStart(2,"0")}/${o}`};c.push(m)}return c}const i=e(t,2024,8);console.log(i)}const ph=[],mh=[];function l4(t){ph.length=0,mh.length=0;function e(n,r){return new Date(n,r,0).getDate()}if(e(2024,7),t)for(let n=0;n<t.length;n++){t[n].date.slice(6,10),t[n].date.slice(3,5);const r=t[n].date.slice(0,2);r==="07"&&ph.push(t[n]),r==="08"&&mh.push(t[n])}a_(ph),a_(mh)}const u4=({cardBodyTemplate:t})=>{const e=t.tips;l4(e);const[n,r]=V.useState(e),i=JD[0].titles,s=["January","February","March","April","May","June","July","August","September","October","November","December"],o=s[new Date().getMonth()];s[new Date("2024-07-23").getMonth()];const l=V.useCallback(p=>{r(p)},[]);V.useEffect(()=>{let p=[];const m=new Date;m.getFullYear(),m.getMonth()+1,m.getDate();const E=(k,x)=>{let v=[],_=new Date(k);for(;_<=new Date(x);)v.push(new Date(_)),_.setDate(_.getDate()+1);return v};if(t){if(e){let k,x;for(let v=0;v<e.length;v++){var P=e.length;const _=e[v].date.split("/")[1],I=e[(v+1)%P].date.split("/")[1];if(k=e[v].date,x=e[(v+1)%P].date,I-_>1){let D=E(k,x);D=D.map(L=>{let M=String(L.getDate()).padStart(2,"0"),T=String(L.getMonth()+1).padStart(2,"0"),y=L.getFullYear();return`${T}/${M}/${y}`}),D.pop(),D.shift(),p.push({dayName:e[v].dayName,date:e[v].date?e[v].date:0,TipsBrut:e[v].TipsBrut,TipsNet:e[v].TipsNet});for(let L of D){let T=new Date(`${L}`).toLocaleString("en-us",{weekday:"long"});p.push({dayName:T,date:L,TipsBrut:0,TipsNet:0})}}I-_===1&&p.push(e[v])}}l(p)}},[t,l,e]);let u,c;const f=p=>{if(p){for(let m=0;m<n.length;m++)if(n[m].date===p.date){const E=n[m-6]?parseInt(n[m-6].TipsNet):0,P=n[m-5]?parseInt(n[m-5].TipsNet):0,k=n[m-4]?parseInt(n[m-4].TipsNet):0,x=n[m-3]?parseInt(n[m-3].TipsNet):0,v=n[m-2]?parseInt(n[m-2].TipsNet):0,_=n[m-1]?parseInt(n[m-1].TipsNet):0,I=parseInt(n[m].TipsNet),D=n[m-6]?parseInt(n[m-6].TipsBrut):0,L=n[m-5]?parseInt(n[m-5].TipsBrut):0,M=n[m-4]?parseInt(n[m-4].TipsBrut):0,T=n[m-3]?parseInt(n[m-3].TipsBrut):0,y=n[m-2]?parseInt(n[m-2].TipsBrut):0,S=n[m-1]?parseInt(n[m-1].TipsBrut):0,w=parseInt(n[m].TipsBrut);u=I+_+v+x+k+P+E,c=w+S+y+T+M+L+D}}return R.jsxs("div",{className:"row bg-info g-0",style:{width:" 100%"},children:[R.jsx("div",{className:"col-3",children:"weekly total: "}),R.jsx("div",{className:"col-3"}),R.jsx("div",{className:"col-3",children:c}),R.jsx("div",{className:"col-3",children:u})]})};return R.jsxs(R.Fragment,{children:[R.jsx("h5",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:o}),R.jsx("br",{}),R.jsxs("div",{className:"you g-0 m-0 p-0",children:[R.jsx("div",{className:"here",children:R.jsx("div",{className:"row bg-secondary g-0",children:i&&i.map(p=>R.jsxs("div",{className:"col-3",children:[p==="tips(brut)"&&R.jsxs(R.Fragment,{children:[R.jsx(ls,{}),"tips(brut)"]}),p==="tips(net)"&&R.jsxs(R.Fragment,{children:[R.jsx(us,{}),"tips(net)"]}),p==="week day"&&R.jsx(R.Fragment,{children:"week day"}),p==="date"&&R.jsx(R.Fragment,{children:"date"})]},p))})}),R.jsx("div",{className:"here",children:R.jsx("div",{className:"py-2",children:n&&n.map(p=>R.jsxs("div",{className:"row g-0",children:[R.jsx("span",{className:"col-3",children:p.dayName}),R.jsx("span",{className:"col-3",children:p.date}),R.jsx("span",{className:"col-3",children:p.TipsBrut}),R.jsx("span",{className:"col-3",children:p.TipsNet}),p.dayName==="Sunday"?R.jsxs(R.Fragment,{children:[R.jsx("div",{className:"row g-0",children:R.jsx("span",{className:"col-12 bg-info",children:n?R.jsx(R.Fragment,{children:f(p)}):null})}),R.jsx("div",{className:"here",children:R.jsx("div",{className:"row bg-secondary mt-2",children:i&&i.map(m=>R.jsxs("div",{className:"col-3",children:[m==="tips(brut)"&&R.jsxs(R.Fragment,{children:[R.jsx(ls,{}),"tips(brut)"]}),m==="tips(net)"&&R.jsxs(R.Fragment,{children:[R.jsx(us,{}),"tips(net)"]}),m==="week day"&&R.jsx(R.Fragment,{children:"week day"}),m==="date"&&R.jsx(R.Fragment,{children:"date"})]},m))})})]}):R.jsx(R.Fragment,{})]},p.date))})})]})]})},c4=({fields:t})=>{const[e,n]=V.useState(""),[r,i]=V.useState(""),[s,o]=V.useState(""),l=Xo(),u=f=>{const{name:p,value:m}=f.target;n(""),i(""),o({...s,[p]:m})},c=f=>{if(f.preventDefault(),!s.email||!s.password){n("All fields are required");return}const p=s.email,m=s.password;Rx($t,p,m).then(E=>{E.user,i("You are now Loggedin"),o({email:"",password:""}),l("/dashboard")}).catch(E=>{const P=E.code,k=E.message;n(k,P)})};return R.jsx("div",{className:"row you tips g-0","data-testid":"card-body-tips-form",children:R.jsxs("form",{className:"form px-5",onSubmit:c,children:[R.jsx("br",{}),t&&t.map(f=>{var p;return R.jsxs("div",{className:"col-12",children:[R.jsxs("label",{"data-testid":`enterTipsForm-label-${f.label}`,htmlFor:f.label,className:"form-label here mb-3",name:f.label,children:[f.label,":"]}),R.jsx("br",{}),R.jsx("br",{}),f.label==="Tips brut"&&R.jsx(ls,{"data-testid":"fa-sack-dollar",className:"hum-icon-form"})," ",f.label==="Tips net"&&R.jsx(us,{"data-testid":"fa-gi-coins",className:"hum-icon-form"}),R.jsx("input",{"data-testid":"input",role:"spinbutton",id:f.label,type:f.type,className:"tips-input mb-3 mx-2",placeholder:"placeholder",style:{fontStyle:"oblique",paddingLeft:"3%",color:"black"},autoComplete:"on",name:f.label,value:(p=s.field)==null?void 0:p.label,onChange:u}),R.jsx("br",{}),R.jsx("br",{})]},f.label)}),R.jsx(ii,{type:"submit",className:"button",disabled:!1,children:"save"}),e&&R.jsx("span",{className:"text-danger","data-testid":"oops",children:"Oops, something went wrong..."})]})})},h4=({fields:t})=>{const[e,n]=V.useState(""),[r,i]=V.useState(""),[s,o]=V.useState({email:"",password:""}),l=Xo(),u=f=>{const{name:p,value:m}=f.target;n(""),i(""),o({...s,[p]:m})},c=f=>{if(f.preventDefault(),!s.email||!s.password){n("All fields are required...");return}const p=s.email,m=s.password;Sx($t,p,m).then(E=>{const P=E.user;console.log(P),i("Congratulation Your account has been created..."),o({email:"",password:""}),l("/login")}).catch(E=>{const P=E.code,k=E.message;n(k,P)})};return R.jsx("div",{className:"row you tips g-0","data-testid":"card-body-tips-form",children:R.jsxs("form",{className:"form px-5",onSubmit:c,children:[R.jsx("br",{}),t&&t.map(f=>{var p;return R.jsxs("div",{className:"col-12",children:[R.jsxs("label",{"data-testid":`enterTipsForm-label-${f.label}`,htmlFor:f.label,className:"form-label here mb-3",name:f.label,children:[f.label,":"]}),R.jsx("br",{}),R.jsx("br",{}),f.label==="Tips brut"&&R.jsx(ls,{"data-testid":"fa-sack-dollar",className:"hum-icon-form"})," ",f.label==="Tips net"&&R.jsx(us,{"data-testid":"fa-gi-coins",className:"hum-icon-form"}),R.jsx("input",{"data-testid":"input",role:"spinbutton",id:f.label,inputMode:"numeric",type:f.type,className:"tips-input mb-3 mx-2",placeholder:f.placeholder,style:{fontStyle:"oblique",paddingLeft:"3%",color:"black"},autoComplete:"on",name:f.label,value:(p=s.field)==null?void 0:p.label,onChange:u})]},f.label)}),R.jsx(ii,{type:"submit",className:"button",disabled:!1,children:"save"}),r&&R.jsx("span",{className:"text-success",children:r}),e&&R.jsx("span",{className:"text-danger","data-testid":"oops",children:e})]})})},Vd="/assets/profileicon--P8uRRW4.png",d4=({handleUrl:t})=>{const[e,n]=V.useState(null),[r,i]=V.useState(Vd),[s,o]=V.useState(""),l=()=>{const f=ny(i_,"images/star-icon-13.jpg");d2(f).then(()=>{console.log("File deleted successfully")}).catch(p=>{console.log("Uh-oh, an error occurred!",p.message)})},u=f=>{f.target.files[0]&&n(f.target.files[0])},c=f=>{f.preventDefault();const p={contentType:e.name},m=ny(i_,"images/"+e.name),E=c2(m,e,p);E.on("state_changed",P=>{const k=P.bytesTransferred/P.totalBytes*100;switch(console.log("Upload is "+k+"% done"),o("Upload is "+k+"% done"),P.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running");break;default:console.log("Nothing running")}},P=>{switch(console.log("Big error my friend",P.message),P.code){case"storage/unauthorized":console.log("User doesn't have permission to access the object",P.message);break;case"storage/canceled":console.log("User canceled the upload",P.message);break;case"storage/unknown":console.log("Unknown error occurred, inspect error.serverResponse",P.message);break;default:console.log("Oops, something happened!")}},()=>{h2(E.snapshot.ref).then(P=>{console.log("File available at",P),i(P),t(P,e)})})};return R.jsxs(R.Fragment,{children:[R.jsxs("div",{className:"container-fluid",children:[s?R.jsx(R.Fragment,{children:s}):R.jsx(R.Fragment,{}),R.jsx("img",{src:r||Vd,alt:"avatar",style:{widht:"200px",height:"200px",borderRadius:"50%"}})]}),R.jsxs("div",{children:[R.jsx("div",{children:"Select files:"}),R.jsx("input",{type:"file",id:"choose",name:"choose",autoComplete:"off",multiple:!0,onChange:u}),R.jsx("br",{}),R.jsx("br",{}),R.jsx(ii,{type:"submit",style:{color:"black"},onClick:c,children:"save"}),R.jsx(ii,{type:"button",style:{color:"black"},onClick:l,children:"delete"})]})]})},f4=({fields:t})=>{const[e,n]=V.useState(!1),[r,i]=V.useState(!1),[s,o]=V.useState({displayName:"",email:"",photoURL:""}),l=V.useRef(),u=Xo(),c=$t.currentUser,f=E=>{const{name:P,value:k}=E.target;o({...s,[P]:k})},p=async E=>{E.preventDefault();try{await Px($t.currentUser,{displayName:s.displayName,photoURL:s.photoURL,createdAt:c.metadata.creationTime})}catch(P){console.log("An error occurred",P.message),n("Oops, something went wrong.")}finally{console.log("profile updated!"),u("/profile")}},m=E=>{if(E){const P="photoURL",k=E;o({...s,[P]:k})}};return R.jsxs("div",{className:"row you tips g-0","data-testid":"card-body-tips-form",children:[R.jsx(d4,{handleUrl:m}),R.jsxs("form",{ref:l,className:"form px-5",onSubmit:p,children:[R.jsx("br",{}),t&&t.map(E=>R.jsxs("div",{className:"col-12",children:[R.jsxs("label",{"data-testid":`enterTipsForm-label-${E.label}`,htmlFor:E.label,className:"form-label here mb-3",name:E.label,children:[E.label,":"]}),R.jsx("br",{}),R.jsx("br",{}),E.label==="Tips brut"?R.jsx(ls,{"data-testid":"fa-sack-dollar",className:"hum-icon-form"}):R.jsx(us,{"data-testid":"fa-gi-coins",className:"hum-icon-form"}),R.jsx("input",{"data-testid":"input",role:"spinbutton",id:E.label,inputMode:"numeric",type:E.type,className:"tips-input mb-3 mx-2 text-black",placeholder:E.placeholder,style:{fontStyle:"oblique",paddingLeft:"3%"},name:E.label,value:s.field,onChange:f,autoComplete:"off"}),R.jsx("br",{}),R.jsx("br",{})]},E.label)),R.jsx(ii,{type:"submit",className:"button",disabled:!1,loading:r,children:"update"}),e&&R.jsx("span",{className:"text-danger","data-testid":"oops",children:e})]})]})},vs=({title:t,cardBodyTemplate:e={},footer:n,src:r})=>{const{templateTitle:i,fields:s}=e,o=l=>{switch(i){case"signupData":return R.jsx(h4,{fields:l});case"loginData":return R.jsx(c4,{fields:l});case"profile":return R.jsx(ZD,{fields:l,src:r});case"tipsForm":return R.jsx(a4,{fields:l,cardBodyTemplate:e});case"update":return R.jsx(f4,{fields:l,src:r});default:return R.jsx(u4,{fields:l,cardBodyTemplate:e})}};return R.jsxs("div",{className:"card main-card bg-transparent",children:[R.jsx("div",{className:"card-title p-5",children:t}),R.jsx("div",{className:"card-body wild",children:o(s)}),R.jsx("div",{className:"card-footer p-5",children:window.location.pathname==="/profile"?R.jsx(ur,{to:"/update",children:"update"}):R.jsx(R.Fragment,{children:n})})]})},nc=()=>R.jsx("div",{className:"container-nav",children:R.jsxs("ul",{className:"nav",children:[R.jsx("li",{className:"nav-link",children:R.jsx(ur,{className:"nav-text",to:"/enterTips",children:"enter Tips"})}),R.jsx("li",{className:"nav-link",children:R.jsx(ur,{className:"nav-text",to:"/dashboard",children:"dashboard"})}),R.jsx("li",{className:"nav-link",children:R.jsx(ur,{className:"nav-text",to:"/profile",children:"profile"})})]})}),rc=({firstname:t})=>R.jsxs("div",{className:"container-roundup",children:[R.jsxs("h1",{className:"name",children:["Hello ",t]}),R.jsx("span",{className:"paragraph",children:"Any update?"})]}),p4=()=>{const t=$t.currentUser;return R.jsxs("div",{className:"grad1",children:[R.jsx(ur,{className:"nav-item",to:"/",children:R.jsx("div",{className:"logofor-pages",children:"GF"})}),R.jsx(nc,{}),R.jsxs("div",{className:"container-fluid g-0",children:[R.jsx(rc,{firstname:"Sy"}),R.jsx(vs,{title:"Profile title",footer:"Profile footer",cardBodyTemplate:QD,src:t!=null&&t.photoURL?t.photoURL:Vd})]})]})};function m4(t){return Rp({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 464c-114.69 0-208-93.47-208-208.35 0-62.45 27.25-121 74.76-160.55a22 22 0 1 1 28.17 33.8C113.48 160.1 92 206.3 92 255.65 92 346.27 165.57 420 256 420s164-73.73 164-164.35A164 164 0 0 0 360.17 129a22 22 0 1 1 28-33.92A207.88 207.88 0 0 1 464 255.65C464 370.53 370.69 464 256 464z"},child:[]},{tag:"path",attr:{d:"M256 272a22 22 0 0 1-22-22V70a22 22 0 0 1 44 0v180a22 22 0 0 1-22 22z"},child:[]}]})(t)}const g4=()=>{const[t,e]=V.useState([]),[n,r]=V.useState([]),i=$t.currentUser;Nx($t,o=>{o&&o.uid});const s=()=>{xx($t).then(()=>{}).catch(o=>{console.log("An error happened.",o.message)})};return V.useEffect(()=>{(async()=>{const l=await Nw(vw(bi,"users")),u=[];l.forEach(c=>{const f=c.data();u.push(f)}),e(u)})()},[]),V.useEffect(()=>{if(t)for(let o of t)o.email===i.email&&r(o)},[t,i]),R.jsxs("div",{className:"grad1",children:[R.jsx(m4,{className:"on-off",onClick:s}),R.jsx(nc,{}),R.jsxs("div",{className:"container-fluid g-0",children:[R.jsx(rc,{firstname:"Sy"}),R.jsx(vs,{className:"p-0 m-0 g-0",title:"Dashboard title",footer:"Dashboard footer",cardBodyTemplate:n})]})]})},y4=()=>R.jsxs("div",{className:"grad1",children:[R.jsx(nc,{}),R.jsxs("div",{className:"container-fluid g-0",children:[R.jsx(rc,{firstname:"Sy"}),R.jsx(vs,{role:"card",title:new Date().toString(),footer:"Enter tips footer",cardBodyTemplate:XD,"data-testid":"card-component"})]})]}),_4=()=>R.jsx("div",{className:"container-fluid g-0",children:R.jsx(vs,{className:"p-0 m-0 g-0",title:"Login title",footer:"Login footer",cardBodyTemplate:GD})}),v4=()=>R.jsx("div",{className:"container-fluid g-0",children:R.jsx(vs,{className:"p-0 m-0 g-0",title:"Signup title",footer:"Signup footer",cardBodyTemplate:KD})}),w4=()=>{const t=$t.currentUser,e=async()=>{try{await AN(gl(bi,"users",t.uid))}catch(r){console.log(r.message)}finally{console.log("success deleting firestore user")}},n=()=>{console.log(t.uid),Dx(t).then(()=>{console.log("User deleted.")}).catch(r=>{console.log("An error ocurred.",r.message)})};return R.jsxs("div",{className:"grad1",children:[R.jsx(nc,{}),R.jsxs("div",{className:"container-fluid g-0",children:[R.jsx(rc,{firstname:"Sy"}),R.jsx(vs,{role:"card",title:new Date().toString(),footer:"Enter tips footer",cardBodyTemplate:YD,"data-testid":"card-component"})]}),R.jsx(ii,{type:"button",onClick:r=>{n(),e()},children:"delete your account here."})]})},E4=()=>{const[t,e]=V.useState(""),n=["orange","banana","fraise","melon","abricot"];return V.useEffect(()=>{for(let r=0;r<n.length;r++)r===n.length-1&&e(r+1)},[n.length]),R.jsx("h1",{className:"d-flex justify-content-center",style:{marginTop:"40%",fontSize:"8rem"},children:t})};function T4(){return R.jsx(mR,{children:R.jsxs(aR,{children:[R.jsxs(mn,{path:"/",element:R.jsx(TR,{}),children:[R.jsx(mn,{path:"signup",element:R.jsx(v4,{})}),R.jsx(mn,{path:"login",element:R.jsx(_4,{})})]}),R.jsx(mn,{path:"/dashboard",element:R.jsx(g4,{})}),R.jsx(mn,{path:"/Team",element:R.jsx(E4,{})}),R.jsx(mn,{path:"/enterTips",element:R.jsx(y4,{})}),R.jsx(mn,{path:"/profile",element:R.jsx(p4,{})}),R.jsx(mn,{path:"/update",element:R.jsx(w4,{})})]})})}gh.createRoot(document.getElementById("root")).render(R.jsx(In.StrictMode,{children:R.jsx(T4,{})}));
