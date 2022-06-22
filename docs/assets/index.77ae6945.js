var qf=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var ZM=qf((Bf,mo)=>{const jf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};jf();var Ni=typeof global!="undefined"?global:typeof self!="undefined"?self:typeof window!="undefined"?window:{};function go(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Xf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$f=go(Xf);function su(n){return!!n||n===""}function _o(n){if(Ce(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=et(i)?Kf(i):_o(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(et(n))return n;if(tt(n))return n}}const Yf=/;(?![^(]*\))/g,Zf=/:(.+)/;function Kf(n){const e={};return n.split(Yf).forEach(t=>{if(t){const i=t.split(Zf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xo(n){let e="";if(et(n))e=n;else if(Ce(n))for(let t=0;t<n.length;t++){const i=xo(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const bn=n=>et(n)?n:n==null?"":Ce(n)||tt(n)&&(n.toString===cu||!Ie(n.toString))?JSON.stringify(n,au,2):String(n),au=(n,e)=>e&&e.__v_isRef?au(n,e.value):ki(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:ou(e)?{[`Set(${e.size})`]:[...e.values()]}:tt(e)&&!Ce(e)&&!uu(e)?String(e):e,Xe={},Bi=[],Ut=()=>{},Jf=()=>!1,Qf=/^on[^a-z]/,Rs=n=>Qf.test(n),vo=n=>n.startsWith("onUpdate:"),dt=Object.assign,Mo=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},eh=Object.prototype.hasOwnProperty,Be=(n,e)=>eh.call(n,e),Ce=Array.isArray,ki=n=>Ds(n)==="[object Map]",ou=n=>Ds(n)==="[object Set]",Ie=n=>typeof n=="function",et=n=>typeof n=="string",yo=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",lu=n=>tt(n)&&Ie(n.then)&&Ie(n.catch),cu=Object.prototype.toString,Ds=n=>cu.call(n),th=n=>Ds(n).slice(8,-1),uu=n=>Ds(n)==="[object Object]",bo=n=>et(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,fs=go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ps=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},nh=/-(\w)/g,qi=Ps(n=>n.replace(nh,(e,t)=>t?t.toUpperCase():"")),ih=/\B([A-Z])/g,er=Ps(n=>n.replace(ih,"-$1").toLowerCase()),fu=Ps(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ys=Ps(n=>n?`on${fu(n)}`:""),xs=(n,e)=>!Object.is(n,e),hs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},vs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Ua=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Xo;const rh=()=>Xo||(Xo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof Ni!="undefined"?Ni:{});let Yt;class sh{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Yt&&(this.parent=Yt,this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ah(n,e=Yt){e&&e.active&&e.effects.push(n)}const So=n=>{const e=new Set(n);return e.w=0,e.n=0,e},hu=n=>(n.w&Un)>0,du=n=>(n.n&Un)>0,oh=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Un},lh=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];hu(r)&&!du(r)?r.delete(n):e[t++]=r,r.w&=~Un,r.n&=~Un}e.length=t}},Ba=new WeakMap;let hr=0,Un=1;const ka=30;let It;const ni=Symbol(""),Ga=Symbol("");class wo{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,ah(this,i)}run(){if(!this.active)return this.fn();let e=It,t=Fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=It,It=this,Fn=!0,Un=1<<++hr,hr<=ka?oh(this):$o(this),this.fn()}finally{hr<=ka&&lh(this),Un=1<<--hr,It=this.parent,Fn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){It===this?this.deferStop=!0:this.active&&($o(this),this.onStop&&this.onStop(),this.active=!1)}}function $o(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Fn=!0;const pu=[];function tr(){pu.push(Fn),Fn=!1}function nr(){const n=pu.pop();Fn=n===void 0?!0:n}function St(n,e,t){if(Fn&&It){let i=Ba.get(n);i||Ba.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=So()),mu(r)}}function mu(n,e){let t=!1;hr<=ka?du(n)||(n.n|=Un,t=!hu(n)):t=!n.has(It),t&&(n.add(It),It.deps.push(n))}function _n(n,e,t,i,r,s){const o=Ba.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ce(n))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ce(n)?bo(t)&&a.push(o.get("length")):(a.push(o.get(ni)),ki(n)&&a.push(o.get(Ga)));break;case"delete":Ce(n)||(a.push(o.get(ni)),ki(n)&&a.push(o.get(Ga)));break;case"set":ki(n)&&a.push(o.get(ni));break}if(a.length===1)a[0]&&Ha(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ha(So(l))}}function Ha(n,e){const t=Ce(n)?n:[...n];for(const i of t)i.computed&&Yo(i);for(const i of t)i.computed||Yo(i)}function Yo(n,e){(n!==It||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ch=go("__proto__,__v_isRef,__isVue"),gu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(yo)),uh=Eo(),fh=Eo(!1,!0),hh=Eo(!0),Zo=dh();function dh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let s=0,o=this.length;s<o;s++)St(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){tr();const i=je(this)[e].apply(this,t);return nr(),i}}),n}function Eo(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?Lh:yu:e?Mu:vu).get(i))return i;const o=Ce(i);if(!n&&o&&Be(Zo,r))return Reflect.get(Zo,r,s);const a=Reflect.get(i,r,s);return(yo(r)?gu.has(r):ch(r))||(n||St(i,"get",r),e)?a:ht(a)?o&&bo(r)?a:a.value:tt(a)?n?bu(a):Co(a):a}}const ph=_u(),mh=_u(!0);function _u(n=!1){return function(t,i,r,s){let o=t[i];if(Mr(o)&&ht(o)&&!ht(r))return!1;if(!n&&!Mr(r)&&(Va(r)||(r=je(r),o=je(o)),!Ce(t)&&ht(o)&&!ht(r)))return o.value=r,!0;const a=Ce(t)&&bo(i)?Number(i)<t.length:Be(t,i),l=Reflect.set(t,i,r,s);return t===je(s)&&(a?xs(r,o)&&_n(t,"set",i,r):_n(t,"add",i,r)),l}}function gh(n,e){const t=Be(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&_n(n,"delete",e,void 0),i}function _h(n,e){const t=Reflect.has(n,e);return(!yo(e)||!gu.has(e))&&St(n,"has",e),t}function xh(n){return St(n,"iterate",Ce(n)?"length":ni),Reflect.ownKeys(n)}const xu={get:uh,set:ph,deleteProperty:gh,has:_h,ownKeys:xh},vh={get:hh,set(n,e){return!0},deleteProperty(n,e){return!0}},Mh=dt({},xu,{get:fh,set:mh}),To=n=>n,Is=n=>Reflect.getPrototypeOf(n);function Or(n,e,t=!1,i=!1){n=n.__v_raw;const r=je(n),s=je(e);t||(e!==s&&St(r,"get",e),St(r,"get",s));const{has:o}=Is(r),a=i?To:t?Do:Ro;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function zr(n,e=!1){const t=this.__v_raw,i=je(t),r=je(n);return e||(n!==r&&St(i,"has",n),St(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Ur(n,e=!1){return n=n.__v_raw,!e&&St(je(n),"iterate",ni),Reflect.get(n,"size",n)}function Ko(n){n=je(n);const e=je(this);return Is(e).has.call(e,n)||(e.add(n),_n(e,"add",n,n)),this}function Jo(n,e){e=je(e);const t=je(this),{has:i,get:r}=Is(t);let s=i.call(t,n);s||(n=je(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?xs(e,o)&&_n(t,"set",n,e):_n(t,"add",n,e),this}function Qo(n){const e=je(this),{has:t,get:i}=Is(e);let r=t.call(e,n);r||(n=je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&_n(e,"delete",n,void 0),s}function el(){const n=je(this),e=n.size!==0,t=n.clear();return e&&_n(n,"clear",void 0,void 0),t}function Br(n,e){return function(i,r){const s=this,o=s.__v_raw,a=je(o),l=e?To:n?Do:Ro;return!n&&St(a,"iterate",ni),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function kr(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),o=ki(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?To:e?Do:Ro;return!e&&St(s,"iterate",l?Ga:ni),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Sn(n){return function(...e){return n==="delete"?!1:this}}function yh(){const n={get(s){return Or(this,s)},get size(){return Ur(this)},has:zr,add:Ko,set:Jo,delete:Qo,clear:el,forEach:Br(!1,!1)},e={get(s){return Or(this,s,!1,!0)},get size(){return Ur(this)},has:zr,add:Ko,set:Jo,delete:Qo,clear:el,forEach:Br(!1,!0)},t={get(s){return Or(this,s,!0)},get size(){return Ur(this,!0)},has(s){return zr.call(this,s,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:Br(!0,!1)},i={get(s){return Or(this,s,!0,!0)},get size(){return Ur(this,!0)},has(s){return zr.call(this,s,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:Br(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=kr(s,!1,!1),t[s]=kr(s,!0,!1),e[s]=kr(s,!1,!0),i[s]=kr(s,!0,!0)}),[n,t,e,i]}const[bh,Sh,wh,Eh]=yh();function Ao(n,e){const t=e?n?Eh:wh:n?Sh:bh;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Be(t,r)&&r in i?t:i,r,s)}const Th={get:Ao(!1,!1)},Ah={get:Ao(!1,!0)},Ch={get:Ao(!0,!1)},vu=new WeakMap,Mu=new WeakMap,yu=new WeakMap,Lh=new WeakMap;function Rh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dh(n){return n.__v_skip||!Object.isExtensible(n)?0:Rh(th(n))}function Co(n){return Mr(n)?n:Lo(n,!1,xu,Th,vu)}function Ph(n){return Lo(n,!1,Mh,Ah,Mu)}function bu(n){return Lo(n,!0,vh,Ch,yu)}function Lo(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Dh(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Gi(n){return Mr(n)?Gi(n.__v_raw):!!(n&&n.__v_isReactive)}function Mr(n){return!!(n&&n.__v_isReadonly)}function Va(n){return!!(n&&n.__v_isShallow)}function Su(n){return Gi(n)||Mr(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function wu(n){return vs(n,"__v_skip",!0),n}const Ro=n=>tt(n)?Co(n):n,Do=n=>tt(n)?bu(n):n;function Ih(n){Fn&&It&&(n=je(n),mu(n.dep||(n.dep=So())))}function Fh(n,e){n=je(n),n.dep&&Ha(n.dep)}function ht(n){return!!(n&&n.__v_isRef===!0)}function Nh(n){return ht(n)?n.value:n}const Oh={get:(n,e,t)=>Nh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return ht(r)&&!ht(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Eu(n){return Gi(n)?n:new Proxy(n,Oh)}class zh{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new wo(e,()=>{this._dirty||(this._dirty=!0,Fh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return Ih(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Uh(n,e,t=!1){let i,r;const s=Ie(n);return s?(i=n,r=Ut):(i=n.get,r=n.set),new zh(i,r,s||!r,t)}function Nn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){Fs(s,e,t)}return r}function Bt(n,e,t,i){if(Ie(n)){const s=Nn(n,e,t,i);return s&&lu(s)&&s.catch(o=>{Fs(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Bt(n[s],e,t,i));return r}function Fs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Nn(l,null,10,[n,o,a]);return}}Bh(n,t,r,i)}function Bh(n,e,t,i=!0){console.error(n)}let Ms=!1,Wa=!1;const bt=[];let pn=0;const _r=[];let dr=null,Di=0;const xr=[];let Dn=null,Pi=0;const Tu=Promise.resolve();let Po=null,qa=null;function kh(n){const e=Po||Tu;return n?e.then(this?n.bind(this):n):e}function Gh(n){let e=pn+1,t=bt.length;for(;e<t;){const i=e+t>>>1;yr(bt[i])<n?e=i+1:t=i}return e}function Au(n){(!bt.length||!bt.includes(n,Ms&&n.allowRecurse?pn+1:pn))&&n!==qa&&(n.id==null?bt.push(n):bt.splice(Gh(n.id),0,n),Cu())}function Cu(){!Ms&&!Wa&&(Wa=!0,Po=Tu.then(Du))}function Hh(n){const e=bt.indexOf(n);e>pn&&bt.splice(e,1)}function Lu(n,e,t,i){Ce(n)?t.push(...n):(!e||!e.includes(n,n.allowRecurse?i+1:i))&&t.push(n),Cu()}function Vh(n){Lu(n,dr,_r,Di)}function Wh(n){Lu(n,Dn,xr,Pi)}function Ns(n,e=null){if(_r.length){for(qa=e,dr=[...new Set(_r)],_r.length=0,Di=0;Di<dr.length;Di++)dr[Di]();dr=null,Di=0,qa=null,Ns(n,e)}}function Ru(n){if(Ns(),xr.length){const e=[...new Set(xr)];if(xr.length=0,Dn){Dn.push(...e);return}for(Dn=e,Dn.sort((t,i)=>yr(t)-yr(i)),Pi=0;Pi<Dn.length;Pi++)Dn[Pi]();Dn=null,Pi=0}}const yr=n=>n.id==null?1/0:n.id;function Du(n){Wa=!1,Ms=!0,Ns(n),bt.sort((t,i)=>yr(t)-yr(i));const e=Ut;try{for(pn=0;pn<bt.length;pn++){const t=bt[pn];t&&t.active!==!1&&Nn(t,null,14)}}finally{pn=0,bt.length=0,Ru(),Ms=!1,Po=null,(bt.length||_r.length||xr.length)&&Du(n)}}function qh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Xe;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||Xe;h&&(r=t.map(m=>m.trim())),f&&(r=t.map(Ua))}let a,l=i[a=Ys(e)]||i[a=Ys(qi(e))];!l&&s&&(l=i[a=Ys(er(e))]),l&&Bt(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Bt(c,n,6,r)}}function Pu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ie(n)){const l=c=>{const u=Pu(c,e,!0);u&&(a=!0,dt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(i.set(n,null),null):(Ce(s)?s.forEach(l=>o[l]=null):dt(o,s),i.set(n,o),o)}function Os(n,e){return!n||!Rs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Be(n,e[0].toLowerCase()+e.slice(1))||Be(n,er(e))||Be(n,e))}let en=null,zs=null;function ys(n){const e=en;return en=n,zs=n&&n.type.__scopeId||null,e}function jh(n){zs=n}function Xh(){zs=null}function $h(n,e=en,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&cl(-1);const s=ys(e),o=n(...r);return ys(s),i._d&&cl(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function Zs(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:p}=n;let d,_;const E=ys(n);try{if(t.shapeFlag&4){const T=r||i;d=Kt(u.call(T,T,f,s,m,h,g)),_=l}else{const T=e;d=Kt(T.length>1?T(s,{attrs:l,slots:a,emit:c}):T(s,null)),_=e.props?l:Yh(l)}}catch(T){vr.length=0,Fs(T,n,1),d=mn(oi)}let A=d;if(_&&p!==!1){const T=Object.keys(_),{shapeFlag:b}=A;T.length&&b&7&&(o&&T.some(vo)&&(_=Zh(_,o)),A=ji(A,_))}return t.dirs&&(A=ji(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),d=A,ys(E),d}const Yh=n=>{let e;for(const t in n)(t==="class"||t==="style"||Rs(t))&&((e||(e={}))[t]=n[t]);return e},Zh=(n,e)=>{const t={};for(const i in n)(!vo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Kh(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?tl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Os(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?tl(i,o,c):!0:!!o;return!1}function tl(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Os(t,s))return!0}return!1}function Jh({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Qh=n=>n.__isSuspense;function ed(n,e){e&&e.pendingBranch?Ce(n)?e.effects.push(...n):e.effects.push(n):Wh(n)}function td(n,e){if(at){let t=at.provides;const i=at.parent&&at.parent.provides;i===t&&(t=at.provides=Object.create(i)),t[n]=e}}function Ks(n,e,t=!1){const i=at||en;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ie(e)?e.call(i.proxy):e}}const nl={};function Js(n,e,t){return Iu(n,e,t)}function Iu(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=Xe){const a=at;let l,c=!1,u=!1;if(ht(n)?(l=()=>n.value,c=Va(n)):Gi(n)?(l=()=>n,i=!0):Ce(n)?(u=!0,c=n.some(_=>Gi(_)||Va(_)),l=()=>n.map(_=>{if(ht(_))return _.value;if(Gi(_))return Kn(_);if(Ie(_))return Nn(_,a,2)})):Ie(n)?e?l=()=>Nn(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Bt(n,a,3,[h])}:l=Ut,e&&i){const _=l;l=()=>Kn(_())}let f,h=_=>{f=d.onStop=()=>{Nn(_,a,4)}};if(Sr)return h=Ut,e?t&&Bt(e,a,3,[l(),u?[]:void 0,h]):l(),Ut;let m=u?[]:nl;const g=()=>{if(!!d.active)if(e){const _=d.run();(i||c||(u?_.some((E,A)=>xs(E,m[A])):xs(_,m)))&&(f&&f(),Bt(e,a,3,[_,m===nl?void 0:m,h]),m=_)}else d.run()};g.allowRecurse=!!e;let p;r==="sync"?p=g:r==="post"?p=()=>gt(g,a&&a.suspense):p=()=>Vh(g);const d=new wo(l,p);return e?t?g():m=d.run():r==="post"?gt(d.run.bind(d),a&&a.suspense):d.run(),()=>{d.stop(),a&&a.scope&&Mo(a.scope.effects,d)}}function nd(n,e,t){const i=this.proxy,r=et(n)?n.includes(".")?Fu(i,n):()=>i[n]:n.bind(i,i);let s;Ie(e)?s=e:(s=e.handler,t=e);const o=at;Xi(this);const a=Iu(r,s.bind(i),t);return o?Xi(o):ii(),a}function Fu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Kn(n,e){if(!tt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),ht(n))Kn(n.value,e);else if(Ce(n))for(let t=0;t<n.length;t++)Kn(n[t],e);else if(ou(n)||ki(n))n.forEach(t=>{Kn(t,e)});else if(uu(n))for(const t in n)Kn(n[t],e);return n}function Nu(n){return Ie(n)?{setup:n,name:n.name}:n}const ds=n=>!!n.type.__asyncLoader,Ou=n=>n.type.__isKeepAlive;function id(n,e){zu(n,"a",e)}function rd(n,e){zu(n,"da",e)}function zu(n,e,t=at){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Us(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ou(r.parent.vnode)&&sd(i,e,t,r),r=r.parent}}function sd(n,e,t,i){const r=Us(e,n,i,!0);Uu(()=>{Mo(i[e],r)},t)}function Us(n,e,t=at,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;tr(),Xi(t);const a=Bt(e,t,n,o);return ii(),nr(),a});return i?r.unshift(s):r.push(s),s}}const vn=n=>(e,t=at)=>(!Sr||n==="sp")&&Us(n,e,t),ad=vn("bm"),od=vn("m"),ld=vn("bu"),cd=vn("u"),ud=vn("bum"),Uu=vn("um"),fd=vn("sp"),hd=vn("rtg"),dd=vn("rtc");function pd(n,e=at){Us("ec",n,e)}function md(n,e){const t=en;if(t===null)return n;const i=ks(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=Xe]=e[s];Ie(o)&&(o={mounted:o,updated:o}),o.deep&&Kn(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c})}return n}function kn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(tr(),Bt(l,t,8,[n.el,a,n,e]),nr())}}const gd=Symbol();function _d(n,e,t,i){let r;const s=t&&t[i];if(Ce(n)||et(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(tt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}const ja=n=>n?Ku(n)?ks(n)||n.proxy:ja(n.parent):null,bs=dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ja(n.parent),$root:n=>ja(n.root),$emit:n=>n.emit,$options:n=>ku(n),$forceUpdate:n=>n.f||(n.f=()=>Au(n.update)),$nextTick:n=>n.n||(n.n=kh.bind(n.proxy)),$watch:n=>nd.bind(n)}),xd={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(i!==Xe&&Be(i,e))return o[e]=1,i[e];if(r!==Xe&&Be(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Be(c,e))return o[e]=3,s[e];if(t!==Xe&&Be(t,e))return o[e]=4,t[e];Xa&&(o[e]=0)}}const u=bs[e];let f,h;if(u)return e==="$attrs"&&St(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Xe&&Be(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Be(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return r!==Xe&&Be(r,e)?(r[e]=t,!0):i!==Xe&&Be(i,e)?(i[e]=t,!0):Be(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Xe&&Be(n,o)||e!==Xe&&Be(e,o)||(a=s[0])&&Be(a,o)||Be(i,o)||Be(bs,o)||Be(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Be(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Xa=!0;function vd(n){const e=ku(n),t=n.proxy,i=n.ctx;Xa=!1,e.beforeCreate&&il(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:E,destroyed:A,unmounted:T,render:b,renderTracked:D,renderTriggered:O,errorCaptured:y,serverPrefetch:R,expose:q,inheritAttrs:I,components:de,directives:ne,filters:N}=e;if(c&&Md(c,i,null,n.appContext.config.unwrapInjectedRef),o)for(const W in o){const V=o[W];Ie(V)&&(i[W]=V.bind(t))}if(r){const W=r.call(t,t);tt(W)&&(n.data=Co(W))}if(Xa=!0,s)for(const W in s){const V=s[W],U=Ie(V)?V.bind(t,t):Ie(V.get)?V.get.bind(t,t):Ut,Q=!Ie(V)&&Ie(V.set)?V.set.bind(t):Ut,he=Yd({get:U,set:Q});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>he.value,set:se=>he.value=se})}if(a)for(const W in a)Bu(a[W],i,t,W);if(l){const W=Ie(l)?l.call(t):l;Reflect.ownKeys(W).forEach(V=>{td(V,W[V])})}u&&il(u,n,"c");function G(W,V){Ce(V)?V.forEach(U=>W(U.bind(t))):V&&W(V.bind(t))}if(G(ad,f),G(od,h),G(ld,m),G(cd,g),G(id,p),G(rd,d),G(pd,y),G(dd,D),G(hd,O),G(ud,E),G(Uu,T),G(fd,R),Ce(q))if(q.length){const W=n.exposed||(n.exposed={});q.forEach(V=>{Object.defineProperty(W,V,{get:()=>t[V],set:U=>t[V]=U})})}else n.exposed||(n.exposed={});b&&n.render===Ut&&(n.render=b),I!=null&&(n.inheritAttrs=I),de&&(n.components=de),ne&&(n.directives=ne)}function Md(n,e,t=Ut,i=!1){Ce(n)&&(n=$a(n));for(const r in n){const s=n[r];let o;tt(s)?"default"in s?o=Ks(s.from||r,s.default,!0):o=Ks(s.from||r):o=Ks(s),ht(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function il(n,e,t){Bt(Ce(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Bu(n,e,t,i){const r=i.includes(".")?Fu(t,i):()=>t[i];if(et(n)){const s=e[n];Ie(s)&&Js(r,s)}else if(Ie(n))Js(r,n.bind(t));else if(tt(n))if(Ce(n))n.forEach(s=>Bu(s,e,t,i));else{const s=Ie(n.handler)?n.handler.bind(t):e[n.handler];Ie(s)&&Js(r,s,n)}}function ku(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ss(l,c,o,!0)),Ss(l,e,o)),s.set(e,l),l}function Ss(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ss(n,s,t,!0),r&&r.forEach(o=>Ss(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=yd[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const yd={data:rl,props:jn,emits:jn,methods:jn,computed:jn,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:jn,directives:jn,watch:Sd,provide:rl,inject:bd};function rl(n,e){return e?n?function(){return dt(Ie(n)?n.call(this,this):n,Ie(e)?e.call(this,this):e)}:e:n}function bd(n,e){return jn($a(n),$a(e))}function $a(n){if(Ce(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ut(n,e){return n?[...new Set([].concat(n,e))]:e}function jn(n,e){return n?dt(dt(Object.create(null),n),e):e}function Sd(n,e){if(!n)return e;if(!e)return n;const t=dt(Object.create(null),n);for(const i in e)t[i]=ut(n[i],e[i]);return t}function wd(n,e,t,i=!1){const r={},s={};vs(s,Bs,1),n.propsDefaults=Object.create(null),Gu(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Ph(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ed(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=je(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Os(n.emitsOptions,h))continue;const m=e[h];if(l)if(Be(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=qi(h);r[g]=Ya(l,a,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Gu(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Be(e,f)&&((u=er(f))===f||!Be(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ya(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Be(e,f)&&!0)&&(delete s[f],c=!0)}c&&_n(n,"set","$attrs")}function Gu(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(fs(l))continue;const c=e[l];let u;r&&Be(r,u=qi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Os(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=je(t),c=a||Xe;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ya(r,l,f,c[f],n,!Be(c,f))}}return o}function Ya(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Be(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Ie(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Xi(r),i=c[t]=l.call(null,e),ii())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===er(t))&&(i=!0))}return i}function Hu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ie(n)){const u=f=>{l=!0;const[h,m]=Hu(f,e,!0);dt(o,h),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return i.set(n,Bi),Bi;if(Ce(s))for(let u=0;u<s.length;u++){const f=qi(s[u]);sl(f)&&(o[f]=Xe)}else if(s)for(const u in s){const f=qi(u);if(sl(f)){const h=s[u],m=o[f]=Ce(h)||Ie(h)?{type:h}:h;if(m){const g=ll(Boolean,m.type),p=ll(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Be(m,"default"))&&a.push(f)}}}const c=[o,a];return i.set(n,c),c}function sl(n){return n[0]!=="$"}function al(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function ol(n,e){return al(n)===al(e)}function ll(n,e){return Ce(e)?e.findIndex(t=>ol(t,n)):Ie(e)&&ol(e,n)?0:-1}const Vu=n=>n[0]==="_"||n==="$stable",Io=n=>Ce(n)?n.map(Kt):[Kt(n)],Td=(n,e,t)=>{if(e._n)return e;const i=$h((...r)=>Io(e(...r)),t);return i._c=!1,i},Wu=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Vu(r))continue;const s=n[r];if(Ie(s))e[r]=Td(r,s,i);else if(s!=null){const o=Io(s);e[r]=()=>o}}},qu=(n,e)=>{const t=Io(e);n.slots.default=()=>t},Ad=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),vs(e,"_",t)):Wu(e,n.slots={})}else n.slots={},e&&qu(n,e);vs(n.slots,Bs,1)},Cd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Xe;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(dt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Wu(e,r)),o=e}else e&&(qu(n,e),o={default:1});if(s)for(const a in r)!Vu(a)&&!(a in o)&&delete r[a]};function ju(){return{app:null,config:{isNativeTag:Jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ld=0;function Rd(n,e){return function(i,r=null){Ie(i)||(i=Object.assign({},i)),r!=null&&!tt(r)&&(r=null);const s=ju(),o=new Set;let a=!1;const l=s.app={_uid:Ld++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Zd,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ie(c.install)?(o.add(c),c.install(l,...u)):Ie(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=mn(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,ks(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Za(n,e,t,i,r=!1){if(Ce(n)){n.forEach((h,m)=>Za(h,e&&(Ce(e)?e[m]:e),t,i,r));return}if(ds(i)&&!r)return;const s=i.shapeFlag&4?ks(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Xe?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(et(c)?(u[c]=null,Be(f,c)&&(f[c]=null)):ht(c)&&(c.value=null)),Ie(l))Nn(l,a,12,[o,u]);else{const h=et(l),m=ht(l);if(h||m){const g=()=>{if(n.f){const p=h?u[l]:l.value;r?Ce(p)&&Mo(p,s):Ce(p)?p.includes(s)||p.push(s):h?(u[l]=[s],Be(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Be(f,l)&&(f[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,gt(g,t)):g()}}}const gt=ed;function Dd(n){return Pd(n)}function Pd(n,e){const t=rh();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Ut,cloneNode:g,insertStaticContent:p}=n,d=(S,L,k,Y=null,Z=null,ie=null,re=!1,ae=null,le=!!L.dynamicChildren)=>{if(S===L)return;S&&!lr(S,L)&&(Y=we(S),oe(S,Z,ie,!0),S=null),L.patchFlag===-2&&(le=!1,L.dynamicChildren=null);const{type:v,ref:x,shapeFlag:P}=L;switch(v){case Fo:_(S,L,k,Y);break;case oi:E(S,L,k,Y);break;case Qs:S==null&&A(L,k,Y,re);break;case Zt:ne(S,L,k,Y,Z,ie,re,ae,le);break;default:P&1?D(S,L,k,Y,Z,ie,re,ae,le):P&6?N(S,L,k,Y,Z,ie,re,ae,le):(P&64||P&128)&&v.process(S,L,k,Y,Z,ie,re,ae,le,_e)}x!=null&&Z&&Za(x,S&&S.ref,ie,L||S,!L)},_=(S,L,k,Y)=>{if(S==null)i(L.el=a(L.children),k,Y);else{const Z=L.el=S.el;L.children!==S.children&&c(Z,L.children)}},E=(S,L,k,Y)=>{S==null?i(L.el=l(L.children||""),k,Y):L.el=S.el},A=(S,L,k,Y)=>{[S.el,S.anchor]=p(S.children,L,k,Y,S.el,S.anchor)},T=({el:S,anchor:L},k,Y)=>{let Z;for(;S&&S!==L;)Z=h(S),i(S,k,Y),S=Z;i(L,k,Y)},b=({el:S,anchor:L})=>{let k;for(;S&&S!==L;)k=h(S),r(S),S=k;r(L)},D=(S,L,k,Y,Z,ie,re,ae,le)=>{re=re||L.type==="svg",S==null?O(L,k,Y,Z,ie,re,ae,le):q(S,L,Z,ie,re,ae,le)},O=(S,L,k,Y,Z,ie,re,ae)=>{let le,v;const{type:x,props:P,shapeFlag:B,transition:$,patchFlag:te,dirs:ve}=S;if(S.el&&g!==void 0&&te===-1)le=S.el=g(S.el);else{if(le=S.el=o(S.type,ie,P&&P.is,P),B&8?u(le,S.children):B&16&&R(S.children,le,null,Y,Z,ie&&x!=="foreignObject",re,ae),ve&&kn(S,null,Y,"created"),P){for(const j in P)j!=="value"&&!fs(j)&&s(le,j,null,P[j],ie,S.children,Y,Z,Oe);"value"in P&&s(le,"value",null,P.value),(v=P.onVnodeBeforeMount)&&jt(v,Y,S)}y(le,S,S.scopeId,re,Y)}ve&&kn(S,null,Y,"beforeMount");const M=(!Z||Z&&!Z.pendingBranch)&&$&&!$.persisted;M&&$.beforeEnter(le),i(le,L,k),((v=P&&P.onVnodeMounted)||M||ve)&&gt(()=>{v&&jt(v,Y,S),M&&$.enter(le),ve&&kn(S,null,Y,"mounted")},Z)},y=(S,L,k,Y,Z)=>{if(k&&m(S,k),Y)for(let ie=0;ie<Y.length;ie++)m(S,Y[ie]);if(Z){let ie=Z.subTree;if(L===ie){const re=Z.vnode;y(S,re,re.scopeId,re.slotScopeIds,Z.parent)}}},R=(S,L,k,Y,Z,ie,re,ae,le=0)=>{for(let v=le;v<S.length;v++){const x=S[v]=ae?Pn(S[v]):Kt(S[v]);d(null,x,L,k,Y,Z,ie,re,ae)}},q=(S,L,k,Y,Z,ie,re)=>{const ae=L.el=S.el;let{patchFlag:le,dynamicChildren:v,dirs:x}=L;le|=S.patchFlag&16;const P=S.props||Xe,B=L.props||Xe;let $;k&&Gn(k,!1),($=B.onVnodeBeforeUpdate)&&jt($,k,L,S),x&&kn(L,S,k,"beforeUpdate"),k&&Gn(k,!0);const te=Z&&L.type!=="foreignObject";if(v?I(S.dynamicChildren,v,ae,k,Y,te,ie):re||U(S,L,ae,null,k,Y,te,ie,!1),le>0){if(le&16)de(ae,L,P,B,k,Y,Z);else if(le&2&&P.class!==B.class&&s(ae,"class",null,B.class,Z),le&4&&s(ae,"style",P.style,B.style,Z),le&8){const ve=L.dynamicProps;for(let M=0;M<ve.length;M++){const j=ve[M],ce=P[j],ue=B[j];(ue!==ce||j==="value")&&s(ae,j,ce,ue,Z,S.children,k,Y,Oe)}}le&1&&S.children!==L.children&&u(ae,L.children)}else!re&&v==null&&de(ae,L,P,B,k,Y,Z);(($=B.onVnodeUpdated)||x)&&gt(()=>{$&&jt($,k,L,S),x&&kn(L,S,k,"updated")},Y)},I=(S,L,k,Y,Z,ie,re)=>{for(let ae=0;ae<L.length;ae++){const le=S[ae],v=L[ae],x=le.el&&(le.type===Zt||!lr(le,v)||le.shapeFlag&70)?f(le.el):k;d(le,v,x,null,Y,Z,ie,re,!0)}},de=(S,L,k,Y,Z,ie,re)=>{if(k!==Y){for(const ae in Y){if(fs(ae))continue;const le=Y[ae],v=k[ae];le!==v&&ae!=="value"&&s(S,ae,v,le,re,L.children,Z,ie,Oe)}if(k!==Xe)for(const ae in k)!fs(ae)&&!(ae in Y)&&s(S,ae,k[ae],null,re,L.children,Z,ie,Oe);"value"in Y&&s(S,"value",k.value,Y.value)}},ne=(S,L,k,Y,Z,ie,re,ae,le)=>{const v=L.el=S?S.el:a(""),x=L.anchor=S?S.anchor:a("");let{patchFlag:P,dynamicChildren:B,slotScopeIds:$}=L;$&&(ae=ae?ae.concat($):$),S==null?(i(v,k,Y),i(x,k,Y),R(L.children,k,x,Z,ie,re,ae,le)):P>0&&P&64&&B&&S.dynamicChildren?(I(S.dynamicChildren,B,k,Z,ie,re,ae),(L.key!=null||Z&&L===Z.subTree)&&Xu(S,L,!0)):U(S,L,k,x,Z,ie,re,ae,le)},N=(S,L,k,Y,Z,ie,re,ae,le)=>{L.slotScopeIds=ae,S==null?L.shapeFlag&512?Z.ctx.activate(L,k,Y,re,le):J(L,k,Y,Z,ie,re,le):G(S,L,le)},J=(S,L,k,Y,Z,ie,re)=>{const ae=S.component=Vd(S,Y,Z);if(Ou(S)&&(ae.ctx.renderer=_e),Wd(ae),ae.asyncDep){if(Z&&Z.registerDep(ae,W),!S.el){const le=ae.subTree=mn(oi);E(null,le,L,k)}return}W(ae,S,L,k,Z,ie,re)},G=(S,L,k)=>{const Y=L.component=S.component;if(Kh(S,L,k))if(Y.asyncDep&&!Y.asyncResolved){V(Y,L,k);return}else Y.next=L,Hh(Y.update),Y.update();else L.el=S.el,Y.vnode=L},W=(S,L,k,Y,Z,ie,re)=>{const ae=()=>{if(S.isMounted){let{next:x,bu:P,u:B,parent:$,vnode:te}=S,ve=x,M;Gn(S,!1),x?(x.el=te.el,V(S,x,re)):x=te,P&&hs(P),(M=x.props&&x.props.onVnodeBeforeUpdate)&&jt(M,$,x,te),Gn(S,!0);const j=Zs(S),ce=S.subTree;S.subTree=j,d(ce,j,f(ce.el),we(ce),S,Z,ie),x.el=j.el,ve===null&&Jh(S,j.el),B&&gt(B,Z),(M=x.props&&x.props.onVnodeUpdated)&&gt(()=>jt(M,$,x,te),Z)}else{let x;const{el:P,props:B}=L,{bm:$,m:te,parent:ve}=S,M=ds(L);if(Gn(S,!1),$&&hs($),!M&&(x=B&&B.onVnodeBeforeMount)&&jt(x,ve,L),Gn(S,!0),P&&Le){const j=()=>{S.subTree=Zs(S),Le(P,S.subTree,S,Z,null)};M?L.type.__asyncLoader().then(()=>!S.isUnmounted&&j()):j()}else{const j=S.subTree=Zs(S);d(null,j,k,Y,S,Z,ie),L.el=j.el}if(te&&gt(te,Z),!M&&(x=B&&B.onVnodeMounted)){const j=L;gt(()=>jt(x,ve,j),Z)}(L.shapeFlag&256||ve&&ds(ve.vnode)&&ve.vnode.shapeFlag&256)&&S.a&&gt(S.a,Z),S.isMounted=!0,L=k=Y=null}},le=S.effect=new wo(ae,()=>Au(v),S.scope),v=S.update=()=>le.run();v.id=S.uid,Gn(S,!0),v()},V=(S,L,k)=>{L.component=S;const Y=S.vnode.props;S.vnode=L,S.next=null,Ed(S,L.props,Y,k),Cd(S,L.children,k),tr(),Ns(void 0,S.update),nr()},U=(S,L,k,Y,Z,ie,re,ae,le=!1)=>{const v=S&&S.children,x=S?S.shapeFlag:0,P=L.children,{patchFlag:B,shapeFlag:$}=L;if(B>0){if(B&128){he(v,P,k,Y,Z,ie,re,ae,le);return}else if(B&256){Q(v,P,k,Y,Z,ie,re,ae,le);return}}$&8?(x&16&&Oe(v,Z,ie),P!==v&&u(k,P)):x&16?$&16?he(v,P,k,Y,Z,ie,re,ae,le):Oe(v,Z,ie,!0):(x&8&&u(k,""),$&16&&R(P,k,Y,Z,ie,re,ae,le))},Q=(S,L,k,Y,Z,ie,re,ae,le)=>{S=S||Bi,L=L||Bi;const v=S.length,x=L.length,P=Math.min(v,x);let B;for(B=0;B<P;B++){const $=L[B]=le?Pn(L[B]):Kt(L[B]);d(S[B],$,k,null,Z,ie,re,ae,le)}v>x?Oe(S,Z,ie,!0,!1,P):R(L,k,Y,Z,ie,re,ae,le,P)},he=(S,L,k,Y,Z,ie,re,ae,le)=>{let v=0;const x=L.length;let P=S.length-1,B=x-1;for(;v<=P&&v<=B;){const $=S[v],te=L[v]=le?Pn(L[v]):Kt(L[v]);if(lr($,te))d($,te,k,null,Z,ie,re,ae,le);else break;v++}for(;v<=P&&v<=B;){const $=S[P],te=L[B]=le?Pn(L[B]):Kt(L[B]);if(lr($,te))d($,te,k,null,Z,ie,re,ae,le);else break;P--,B--}if(v>P){if(v<=B){const $=B+1,te=$<x?L[$].el:Y;for(;v<=B;)d(null,L[v]=le?Pn(L[v]):Kt(L[v]),k,te,Z,ie,re,ae,le),v++}}else if(v>B)for(;v<=P;)oe(S[v],Z,ie,!0),v++;else{const $=v,te=v,ve=new Map;for(v=te;v<=B;v++){const ye=L[v]=le?Pn(L[v]):Kt(L[v]);ye.key!=null&&ve.set(ye.key,v)}let M,j=0;const ce=B-te+1;let ue=!1,C=0;const fe=new Array(ce);for(v=0;v<ce;v++)fe[v]=0;for(v=$;v<=P;v++){const ye=S[v];if(j>=ce){oe(ye,Z,ie,!0);continue}let me;if(ye.key!=null)me=ve.get(ye.key);else for(M=te;M<=B;M++)if(fe[M-te]===0&&lr(ye,L[M])){me=M;break}me===void 0?oe(ye,Z,ie,!0):(fe[me-te]=v+1,me>=C?C=me:ue=!0,d(ye,L[me],k,null,Z,ie,re,ae,le),j++)}const pe=ue?Id(fe):Bi;for(M=pe.length-1,v=ce-1;v>=0;v--){const ye=te+v,me=L[ye],be=ye+1<x?L[ye+1].el:Y;fe[v]===0?d(null,me,k,be,Z,ie,re,ae,le):ue&&(M<0||v!==pe[M]?se(me,k,be,2):M--)}}},se=(S,L,k,Y,Z=null)=>{const{el:ie,type:re,transition:ae,children:le,shapeFlag:v}=S;if(v&6){se(S.component.subTree,L,k,Y);return}if(v&128){S.suspense.move(L,k,Y);return}if(v&64){re.move(S,L,k,_e);return}if(re===Zt){i(ie,L,k);for(let P=0;P<le.length;P++)se(le[P],L,k,Y);i(S.anchor,L,k);return}if(re===Qs){T(S,L,k);return}if(Y!==2&&v&1&&ae)if(Y===0)ae.beforeEnter(ie),i(ie,L,k),gt(()=>ae.enter(ie),Z);else{const{leave:P,delayLeave:B,afterLeave:$}=ae,te=()=>i(ie,L,k),ve=()=>{P(ie,()=>{te(),$&&$()})};B?B(ie,te,ve):ve()}else i(ie,L,k)},oe=(S,L,k,Y=!1,Z=!1)=>{const{type:ie,props:re,ref:ae,children:le,dynamicChildren:v,shapeFlag:x,patchFlag:P,dirs:B}=S;if(ae!=null&&Za(ae,null,k,S,!0),x&256){L.ctx.deactivate(S);return}const $=x&1&&B,te=!ds(S);let ve;if(te&&(ve=re&&re.onVnodeBeforeUnmount)&&jt(ve,L,S),x&6)K(S.component,k,Y);else{if(x&128){S.suspense.unmount(k,Y);return}$&&kn(S,null,L,"beforeUnmount"),x&64?S.type.remove(S,L,k,Z,_e,Y):v&&(ie!==Zt||P>0&&P&64)?Oe(v,L,k,!1,!0):(ie===Zt&&P&384||!Z&&x&16)&&Oe(le,L,k),Y&&Me(S)}(te&&(ve=re&&re.onVnodeUnmounted)||$)&&gt(()=>{ve&&jt(ve,L,S),$&&kn(S,null,L,"unmounted")},k)},Me=S=>{const{type:L,el:k,anchor:Y,transition:Z}=S;if(L===Zt){Se(k,Y);return}if(L===Qs){b(S);return}const ie=()=>{r(k),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(S.shapeFlag&1&&Z&&!Z.persisted){const{leave:re,delayLeave:ae}=Z,le=()=>re(k,ie);ae?ae(S.el,ie,le):le()}else ie()},Se=(S,L)=>{let k;for(;S!==L;)k=h(S),r(S),S=k;r(L)},K=(S,L,k)=>{const{bum:Y,scope:Z,update:ie,subTree:re,um:ae}=S;Y&&hs(Y),Z.stop(),ie&&(ie.active=!1,oe(re,S,L,k)),ae&&gt(ae,L),gt(()=>{S.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Oe=(S,L,k,Y=!1,Z=!1,ie=0)=>{for(let re=ie;re<S.length;re++)oe(S[re],L,k,Y,Z)},we=S=>S.shapeFlag&6?we(S.component.subTree):S.shapeFlag&128?S.suspense.next():h(S.anchor||S.el),Ee=(S,L,k)=>{S==null?L._vnode&&oe(L._vnode,null,null,!0):d(L._vnode||null,S,L,null,null,null,k),Ru(),L._vnode=S},_e={p:d,um:oe,m:se,r:Me,mt:J,mc:R,pc:U,pbc:I,n:we,o:n};let Ue,Le;return e&&([Ue,Le]=e(_e)),{render:Ee,hydrate:Ue,createApp:Rd(Ee,Ue)}}function Gn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Xu(n,e,t=!1){const i=n.children,r=e.children;if(Ce(i)&&Ce(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Pn(r[s]),a.el=o.el),t||Xu(o,a))}}function Id(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Fd=n=>n.__isTeleport,Zt=Symbol(void 0),Fo=Symbol(void 0),oi=Symbol(void 0),Qs=Symbol(void 0),vr=[];let Ot=null;function hn(n=!1){vr.push(Ot=n?null:[])}function Nd(){vr.pop(),Ot=vr[vr.length-1]||null}let br=1;function cl(n){br+=n}function $u(n){return n.dynamicChildren=br>0?Ot||Bi:null,Nd(),br>0&&Ot&&Ot.push(n),n}function Hn(n,e,t,i,r,s){return $u(yt(n,e,t,i,r,s,!0))}function Yu(n,e,t,i,r){return $u(mn(n,e,t,i,r,!0))}function Od(n){return n?n.__v_isVNode===!0:!1}function lr(n,e){return n.type===e.type&&n.key===e.key}const Bs="__vInternal",Zu=({key:n})=>n!=null?n:null,ps=({ref:n,ref_key:e,ref_for:t})=>n!=null?et(n)||ht(n)||Ie(n)?{i:en,r:n,k:e,f:!!t}:n:null;function yt(n,e=null,t=null,i=0,r=null,s=n===Zt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Zu(e),ref:e&&ps(e),scopeId:zs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(No(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=et(t)?8:16),br>0&&!o&&Ot&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ot.push(l),l}const mn=zd;function zd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===gd)&&(n=oi),Od(n)){const a=ji(n,e,!0);return t&&No(a,t),br>0&&!s&&Ot&&(a.shapeFlag&6?Ot[Ot.indexOf(n)]=a:Ot.push(a)),a.patchFlag|=-2,a}if($d(n)&&(n=n.__vccOpts),e){e=Ud(e);let{class:a,style:l}=e;a&&!et(a)&&(e.class=xo(a)),tt(l)&&(Su(l)&&!Ce(l)&&(l=dt({},l)),e.style=_o(l))}const o=et(n)?1:Qh(n)?128:Fd(n)?64:tt(n)?4:Ie(n)?2:0;return yt(n,e,t,i,r,o,s,!0)}function Ud(n){return n?Su(n)||Bs in n?dt({},n):n:null}function ji(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?kd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Zu(a),ref:e&&e.ref?t&&r?Ce(r)?r.concat(ps(e)):[r,ps(e)]:ps(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Zt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ji(n.ssContent),ssFallback:n.ssFallback&&ji(n.ssFallback),el:n.el,anchor:n.anchor}}function Bd(n=" ",e=0){return mn(Fo,null,n,e)}function ul(n="",e=!1){return e?(hn(),Yu(oi,null,n)):mn(oi,null,n)}function Kt(n){return n==null||typeof n=="boolean"?mn(oi):Ce(n)?mn(Zt,null,n.slice()):typeof n=="object"?Pn(n):mn(Fo,null,String(n))}function Pn(n){return n.el===null||n.memo?n:ji(n)}function No(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ce(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),No(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Bs in e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ie(e)?(e={default:e,_ctx:en},t=32):(e=String(e),i&64?(t=16,e=[Bd(e)]):t=8);n.children=e,n.shapeFlag|=t}function kd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=xo([e.class,i.class]));else if(r==="style")e.style=_o([e.style,i.style]);else if(Rs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ce(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function jt(n,e,t,i=null){Bt(n,e,7,[t,i])}const Gd=ju();let Hd=0;function Vd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Gd,s={uid:Hd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new sh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hu(i,r),emitsOptions:Pu(i,r),emit:null,emitted:null,propsDefaults:Xe,inheritAttrs:i.inheritAttrs,ctx:Xe,data:Xe,props:Xe,attrs:Xe,slots:Xe,refs:Xe,setupState:Xe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=qh.bind(null,s),n.ce&&n.ce(s),s}let at=null;const Xi=n=>{at=n,n.scope.on()},ii=()=>{at&&at.scope.off(),at=null};function Ku(n){return n.vnode.shapeFlag&4}let Sr=!1;function Wd(n,e=!1){Sr=e;const{props:t,children:i}=n.vnode,r=Ku(n);wd(n,t,r,e),Ad(n,i);const s=r?qd(n,e):void 0;return Sr=!1,s}function qd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=wu(new Proxy(n.ctx,xd));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Xd(n):null;Xi(n),tr();const s=Nn(i,n,0,[n.props,r]);if(nr(),ii(),lu(s)){if(s.then(ii,ii),e)return s.then(o=>{fl(n,o,e)}).catch(o=>{Fs(o,n,0)});n.asyncDep=s}else fl(n,s,e)}else Ju(n,e)}function fl(n,e,t){Ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=Eu(e)),Ju(n,t)}let hl;function Ju(n,e,t){const i=n.type;if(!n.render){if(!e&&hl&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=dt(dt({isCustomElement:s,delimiters:a},o),l);i.render=hl(r,c)}}n.render=i.render||Ut}Xi(n),tr(),vd(n),nr(),ii()}function jd(n){return new Proxy(n.attrs,{get(e,t){return St(n,"get","$attrs"),e[t]}})}function Xd(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=jd(n))},slots:n.slots,emit:n.emit,expose:e}}function ks(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Eu(wu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in bs)return bs[t](n)}}))}function $d(n){return Ie(n)&&"__vccOpts"in n}const Yd=(n,e)=>Uh(n,e,Sr),Zd="3.2.37",Kd="http://www.w3.org/2000/svg",Yn=typeof document!="undefined"?document:null,dl=Yn&&Yn.createElement("template"),Jd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Yn.createElementNS(Kd,n):Yn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},cloneNode(n){const e=n.cloneNode(!0);return"_value"in n&&(e._value=n._value),e},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{dl.innerHTML=i?`<svg>${n}</svg>`:n;const a=dl.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Qd(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function ep(n,e,t){const i=n.style,r=et(t);if(t&&!r){for(const s in t)Ka(i,s,t[s]);if(e&&!et(e))for(const s in e)t[s]==null&&Ka(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const pl=/\s*!important$/;function Ka(n,e,t){if(Ce(t))t.forEach(i=>Ka(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=tp(n,e);pl.test(t)?n.setProperty(er(i),t.replace(pl,""),"important"):n[i]=t}}const ml=["Webkit","Moz","ms"],ea={};function tp(n,e){const t=ea[e];if(t)return t;let i=qi(e);if(i!=="filter"&&i in n)return ea[e]=i;i=fu(i);for(let r=0;r<ml.length;r++){const s=ml[r]+i;if(s in n)return ea[e]=s}return e}const gl="http://www.w3.org/1999/xlink";function np(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(gl,e.slice(6,e.length)):n.setAttributeNS(gl,e,t);else{const s=$f(e);t==null||s&&!su(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function ip(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=su(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}const[Qu,rp]=(()=>{let n=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[n,e]})();let Ja=0;const sp=Promise.resolve(),ap=()=>{Ja=0},op=()=>Ja||(sp.then(ap),Ja=Qu());function Ii(n,e,t,i){n.addEventListener(e,t,i)}function lp(n,e,t,i){n.removeEventListener(e,t,i)}function cp(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=up(e);if(i){const c=s[e]=fp(i,r);Ii(n,a,c,l)}else o&&(lp(n,a,o,l),s[e]=void 0)}}const _l=/(?:Once|Passive|Capture)$/;function up(n){let e;if(_l.test(n)){e={};let t;for(;t=n.match(_l);)n=n.slice(0,n.length-t[0].length),e[t[0].toLowerCase()]=!0}return[er(n.slice(2)),e]}function fp(n,e){const t=i=>{const r=i.timeStamp||Qu();(rp||r>=t.attached-1)&&Bt(hp(i,t.value),e,5,[i])};return t.value=n,t.attached=op(),t}function hp(n,e){if(Ce(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const xl=/^on[a-z]/,dp=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Qd(n,i,r):e==="style"?ep(n,t,i):Rs(e)?vo(e)||cp(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pp(n,e,i,r))?ip(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),np(n,e,i,r))};function pp(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&xl.test(e)&&Ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||xl.test(e)&&et(t)?!1:e in n}const vl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ce(e)?t=>hs(e,t):e};function mp(n){n.target.composing=!0}function Ml(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const gp={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n._assign=vl(r);const s=i||r.props&&r.props.type==="number";Ii(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=Ua(a)),n._assign(a)}),t&&Ii(n,"change",()=>{n.value=n.value.trim()}),e||(Ii(n,"compositionstart",mp),Ii(n,"compositionend",Ml),Ii(n,"change",Ml))},mounted(n,{value:e}){n.value=e==null?"":e},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n._assign=vl(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(r||n.type==="number")&&Ua(n.value)===e))return;const o=e==null?"":e;n.value!==o&&(n.value=o)}},_p=dt({patchProp:dp},Jd);let yl;function xp(){return yl||(yl=Dd(_p))}const vp=(...n)=>{const e=xp().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Mp(i);if(!r)return;const s=e._component;!Ie(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Mp(n){return et(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="141",mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yp=0,bl=1,bp=2,ef=1,Sp=2,pr=3,wr=0,kt=1,$i=2,wp=1,On=0,Hi=1,Sl=2,wl=3,El=4,Ep=5,Fi=100,Tp=101,Ap=102,Tl=103,Al=104,Cp=200,Lp=201,Rp=202,Dp=203,tf=204,nf=205,Pp=206,Ip=207,Fp=208,Np=209,Op=210,zp=0,Up=1,Bp=2,Qa=3,kp=4,Gp=5,Hp=6,Vp=7,Gs=0,Wp=1,qp=2,gn=0,jp=1,Xp=2,$p=3,Yp=4,Zp=5,rf=300,Yi=301,Zi=302,eo=303,to=304,Hs=306,no=1e3,Ft=1001,io=1002,_t=1003,Cl=1004,Ll=1005,At=1006,Kp=1007,Vs=1008,li=1009,Jp=1010,Qp=1011,sf=1012,em=1013,Jn=1014,Qn=1015,Er=1016,tm=1017,nm=1018,Vi=1020,im=1021,rm=1022,zt=1023,sm=1024,am=1025,ri=1026,Ki=1027,om=1028,lm=1029,cm=1030,um=1031,fm=1033,ta=33776,na=33777,ia=33778,ra=33779,Rl=35840,Dl=35841,Pl=35842,Il=35843,hm=36196,Fl=37492,Nl=37496,Ol=37808,zl=37809,Ul=37810,Bl=37811,kl=37812,Gl=37813,Hl=37814,Vl=37815,Wl=37816,ql=37817,jl=37818,Xl=37819,$l=37820,Yl=37821,Zl=36492,ci=3e3,$e=3001,dm=3200,pm=3201,ir=0,mm=1,dn="srgb",ei="srgb-linear",sa=7680,gm=519,Kl=35044,Jl="300 es",ro=1035;class fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nt=[];for(let n=0;n<256;n++)nt[n]=(n<16?"0":"")+n.toString(16);const aa=Math.PI/180,Ql=180/Math.PI;function Rr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nt[n&255]+nt[n>>8&255]+nt[n>>16&255]+nt[n>>24&255]+"-"+nt[e&255]+nt[e>>8&255]+"-"+nt[e>>16&15|64]+nt[e>>24&255]+"-"+nt[t&63|128]+nt[t>>8&255]+"-"+nt[t>>16&255]+nt[t>>24&255]+nt[i&255]+nt[i>>8&255]+nt[i>>16&255]+nt[i>>24&255]).toLowerCase()}function ft(n,e,t){return Math.max(e,Math.min(t,n))}function _m(n,e){return(n%e+e)%e}function oa(n,e,t){return(1-t)*n+t*e}function ec(n){return(n&n-1)===0&&n!==0}function so(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class De{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],p=r[0],d=r[3],_=r[6],E=r[1],A=r[4],T=r[7],b=r[2],D=r[5],O=r[8];return s[0]=o*p+a*E+l*b,s[3]=o*d+a*A+l*D,s[6]=o*_+a*T+l*O,s[1]=c*p+u*E+f*b,s[4]=c*d+u*A+f*D,s[7]=c*_+u*T+f*O,s[2]=h*p+m*E+g*b,s[5]=h*d+m*A+g*D,s[8]=h*_+m*T+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(a*i-r*o)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function af(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function ws(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const la={[dn]:{[ei]:si},[ei]:{[dn]:ms}},Lt={legacyMode:!0,get workingColorSpace(){return ei},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(la[e]&&la[e][t]!==void 0){const i=la[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Je={r:0,g:0,b:0},Rt={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Hr(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Pe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ei){return this.r=e,this.g=t,this.b=i,Lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ei){if(e=_m(e,1),t=ft(t,0,1),i=ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ca(o,s,e+1/3),this.g=ca(o,s,e),this.b=ca(o,s,e-1/3)}return Lt.toWorkingColorSpace(this,r),this}setStyle(e,t=dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Lt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Lt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Lt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Lt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=dn){const i=of[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Lt.fromWorkingColorSpace(Hr(this,Je),e),ft(Je.r*255,0,255)<<16^ft(Je.g*255,0,255)<<8^ft(Je.b*255,0,255)<<0}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ei){Lt.fromWorkingColorSpace(Hr(this,Je),t);const i=Je.r,r=Je.g,s=Je.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ei){return Lt.fromWorkingColorSpace(Hr(this,Je),t),e.r=Je.r,e.g=Je.g,e.b=Je.b,e}getStyle(e=dn){return Lt.fromWorkingColorSpace(Hr(this,Je),e),e!==dn?`color(${e} ${Je.r} ${Je.g} ${Je.b})`:`rgb(${Je.r*255|0},${Je.g*255|0},${Je.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Rt),Rt.h+=e,Rt.s+=t,Rt.l+=i,this.setHSL(Rt.h,Rt.s,Rt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Rt),e.getHSL(Gr);const i=oa(Rt.h,Gr.h,t),r=oa(Rt.s,Gr.s,t),s=oa(Rt.l,Gr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Pe.NAMES=of;let _i;class lf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_i===void 0&&(_i=ws("canvas")),_i.width=e.width,_i.height=e.height;const i=_i.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=ws("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=si(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class cf{constructor(e=null){this.isSource=!0,this.uuid=Rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ua(r[o].image)):s.push(ua(r[o]))}else s=ua(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ua(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?lf.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xm=0;class Gt extends fi{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=Ft,r=Ft,s=At,o=Vs,a=zt,l=li,c=1,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Rr(),this.name="",this.source=new cf(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=rf;class ot{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,T=(m+1)/2,b=(_+1)/2,D=(u+h)/4,O=(f+p)/4,y=(g+d)/4;return A>T&&A>b?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=D/i,s=O/i):T>b?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=D/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=O/s,r=y/s),this.set(i,r,s,t),this}let E=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(d-g)/E,this.y=(f-p)/E,this.z=(h-u)/E,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zn extends fi{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:At,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uf extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vm extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==m||u!==g){let d=1-a;const _=l*h+c*m+u*g+f*p,E=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const b=Math.sqrt(A),D=Math.atan2(b,_*E);d=Math.sin(d*D)/b,a=Math.sin(a*D)/b}const T=a*E;if(l=l*d+h*T,c=c*d+m*T,u=u*d+g*T,f=f*d+p*T,d===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new F,tc=new ui;class Dr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Vn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Vn)}else i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox),ha.applyMatrix4(e.matrixWorld),this.union(ha);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Vr.subVectors(this.max,cr),xi.subVectors(e.a,cr),vi.subVectors(e.b,cr),Mi.subVectors(e.c,cr),wn.subVectors(vi,xi),En.subVectors(Mi,vi),Wn.subVectors(xi,Mi);let t=[0,-wn.z,wn.y,0,-En.z,En.y,0,-Wn.z,Wn.y,wn.z,0,-wn.x,En.z,0,-En.x,Wn.z,0,-Wn.x,-wn.y,wn.x,0,-En.y,En.x,0,-Wn.y,Wn.x,0];return!da(t,xi,vi,Mi,Vr)||(t=[1,0,0,0,1,0,0,0,1],!da(t,xi,vi,Mi,Vr))?!1:(Wr.crossVectors(wn,En),t=[Wr.x,Wr.y,Wr.z],da(t,xi,vi,Mi,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new F,new F,new F,new F,new F,new F,new F,new F],Vn=new F,ha=new Dr,xi=new F,vi=new F,Mi=new F,wn=new F,En=new F,Wn=new F,cr=new F,Vr=new F,Wr=new F,qn=new F;function da(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qn.fromArray(n,s);const a=r.x*Math.abs(qn.x)+r.y*Math.abs(qn.y)+r.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),u=i.dot(qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Mm=new Dr,nc=new F,qr=new F,pa=new F;class Ws{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Mm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){pa.subVectors(e,this.center);const t=pa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(pa.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?qr.set(0,0,1).multiplyScalar(e.radius):qr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(nc.copy(e.center).add(qr)),this.expandByPoint(nc.copy(e.center).sub(qr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new F,ma=new F,jr=new F,Tn=new F,ga=new F,Xr=new F,_a=new F;class ff{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.direction).multiplyScalar(t).add(this.origin),on.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ma.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(ma);const s=e.distanceTo(t)*.5,o=-this.direction.dot(jr),a=Tn.dot(this.direction),l=-Tn.dot(jr),c=Tn.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(jr).multiplyScalar(h).add(ma),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const i=on.dot(this.direction),r=on.dot(on)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,i,r,s){ga.subVectors(t,e),Xr.subVectors(i,e),_a.crossVectors(ga,Xr);let o=this.direction.dot(_a),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,e);const l=a*this.direction.dot(Xr.crossVectors(Tn,Xr));if(l<0)return null;const c=a*this.direction.dot(ga.cross(Tn));if(c<0||l+c>o)return null;const u=-a*Tn.dot(_a);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c,u,f,h,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yi.setFromMatrixColumn(e,0).length(),s=1/yi.setFromMatrixColumn(e,1).length(),o=1/yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,p=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,p=c*f;t[0]=h-p*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,p=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ym,e,bm)}lookAt(e,t,i){const r=this.elements;return vt.subVectors(e,t),vt.lengthSq()===0&&(vt.z=1),vt.normalize(),An.crossVectors(i,vt),An.lengthSq()===0&&(Math.abs(i.z)===1?vt.x+=1e-4:vt.z+=1e-4,vt.normalize(),An.crossVectors(i,vt)),An.normalize(),$r.crossVectors(vt,An),r[0]=An.x,r[4]=$r.x,r[8]=vt.x,r[1]=An.y,r[5]=$r.y,r[9]=vt.y,r[2]=An.z,r[6]=$r.z,r[10]=vt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],p=i[6],d=i[10],_=i[14],E=i[3],A=i[7],T=i[11],b=i[15],D=r[0],O=r[4],y=r[8],R=r[12],q=r[1],I=r[5],de=r[9],ne=r[13],N=r[2],J=r[6],G=r[10],W=r[14],V=r[3],U=r[7],Q=r[11],he=r[15];return s[0]=o*D+a*q+l*N+c*V,s[4]=o*O+a*I+l*J+c*U,s[8]=o*y+a*de+l*G+c*Q,s[12]=o*R+a*ne+l*W+c*he,s[1]=u*D+f*q+h*N+m*V,s[5]=u*O+f*I+h*J+m*U,s[9]=u*y+f*de+h*G+m*Q,s[13]=u*R+f*ne+h*W+m*he,s[2]=g*D+p*q+d*N+_*V,s[6]=g*O+p*I+d*J+_*U,s[10]=g*y+p*de+d*G+_*Q,s[14]=g*R+p*ne+d*W+_*he,s[3]=E*D+A*q+T*N+b*V,s[7]=E*O+A*I+T*J+b*U,s[11]=E*y+A*de+T*G+b*Q,s[15]=E*R+A*ne+T*W+b*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+p*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+d*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+_*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],E=f*d*c-p*h*c+p*l*m-a*d*m-f*l*_+a*h*_,A=g*h*c-u*d*c-g*l*m+o*d*m+u*l*_-o*h*_,T=u*p*c-g*f*c+g*a*m-o*p*m-u*a*_+o*f*_,b=g*f*l-u*p*l-g*a*h+o*p*h+u*a*d-o*f*d,D=t*E+i*A+r*T+s*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=E*O,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*_-i*h*_)*O,e[2]=(a*d*s-p*l*s+p*r*c-i*d*c-a*r*_+i*l*_)*O,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*O,e[4]=A*O,e[5]=(u*d*s-g*h*s+g*r*m-t*d*m-u*r*_+t*h*_)*O,e[6]=(g*l*s-o*d*s-g*r*c+t*d*c+o*r*_-t*l*_)*O,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*O,e[8]=T*O,e[9]=(g*f*s-u*p*s-g*i*m+t*p*m+u*i*_-t*f*_)*O,e[10]=(o*p*s-g*a*s+g*i*c-t*p*c-o*i*_+t*a*_)*O,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*O,e[12]=b*O,e[13]=(u*p*r-g*f*r+g*i*h-t*p*h-u*i*d+t*f*d)*O,e[14]=(g*a*r-o*p*r-g*i*l+t*p*l+o*i*d-t*a*d)*O,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,g=s*f,p=o*u,d=o*f,_=a*f,E=l*c,A=l*u,T=l*f,b=i.x,D=i.y,O=i.z;return r[0]=(1-(p+_))*b,r[1]=(m+T)*b,r[2]=(g-A)*b,r[3]=0,r[4]=(m-T)*D,r[5]=(1-(h+_))*D,r[6]=(d+E)*D,r[7]=0,r[8]=(g+A)*O,r[9]=(d-E)*O,r[10]=(1-(h+p))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yi.set(r[0],r[1],r[2]).length();const o=yi.set(r[4],r[5],r[6]).length(),a=yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dt.copy(this);const c=1/s,u=1/o,f=1/a;return Dt.elements[0]*=c,Dt.elements[1]*=c,Dt.elements[2]*=c,Dt.elements[4]*=u,Dt.elements[5]*=u,Dt.elements[6]*=u,Dt.elements[8]*=f,Dt.elements[9]*=f,Dt.elements[10]*=f,t.setFromRotationMatrix(Dt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),f=(t+e)*l,h=(i+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yi=new F,Dt=new it,ym=new F(0,0,0),bm=new F(1,1,1),An=new F,$r=new F,vt=new F,ic=new it,rc=new ui;class rr{constructor(e=0,t=0,i=0,r=rr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ic,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rc.setFromEuler(this),this.setFromQuaternion(rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}rr.DefaultOrder="XYZ";rr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class hf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sm=0;const sc=new F,bi=new ui,ln=new it,Yr=new F,ur=new F,wm=new F,Em=new ui,ac=new F(1,0,0),oc=new F(0,1,0),lc=new F(0,0,1),Tm={type:"added"},cc={type:"removed"};class wt extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DefaultUp.clone();const e=new F,t=new rr,i=new ui,r=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new tn}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=wt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(ac,e)}rotateY(e){return this.rotateOnAxis(oc,e)}rotateZ(e){return this.rotateOnAxis(lc,e)}translateOnAxis(e,t){return sc.copy(e).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ac,e)}translateY(e){return this.translateOnAxis(oc,e)}translateZ(e){return this.translateOnAxis(lc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yr.copy(e):Yr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(ur,Yr,this.up):ln.lookAt(Yr,ur,this.up),this.quaternion.setFromRotationMatrix(ln),r&&(ln.extractRotation(r.matrixWorld),bi.setFromRotationMatrix(ln),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(cc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,Em,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DefaultUp=new F(0,1,0);wt.DefaultMatrixAutoUpdate=!0;const Pt=new F,cn=new F,xa=new F,un=new F,Si=new F,wi=new F,uc=new F,va=new F,Ma=new F,ya=new F;class Qt{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Pt.subVectors(e,t),r.cross(Pt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Pt.subVectors(r,t),cn.subVectors(i,t),xa.subVectors(e,t);const o=Pt.dot(Pt),a=Pt.dot(cn),l=Pt.dot(xa),c=cn.dot(cn),u=cn.dot(xa),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,un),l.set(0,0),l.addScaledVector(s,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l}static isFrontFacing(e,t,i,r){return Pt.subVectors(i,t),cn.subVectors(e,t),Pt.cross(cn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Pt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Qt.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Si.subVectors(r,i),wi.subVectors(s,i),va.subVectors(e,i);const l=Si.dot(va),c=wi.dot(va);if(l<=0&&c<=0)return t.copy(i);Ma.subVectors(e,r);const u=Si.dot(Ma),f=wi.dot(Ma);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Si,o);ya.subVectors(e,s);const m=Si.dot(ya),g=wi.dot(ya);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(wi,a);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return uc.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(uc,a);const _=1/(d+p+h);return o=p*_,a=h*_,t.copy(i).addScaledVector(Si,o).addScaledVector(wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Am=0;class rt extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Rr(),this.name="",this.type="Material",this.blending=Hi,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=tf,this.blendDst=nf,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===wp;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(i.blending=this.blending),this.side!==wr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}rt.fromType=function(){return null};class zo extends rt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new F,Zr=new De;class nn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Kl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Pe),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new De),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new F),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new ot),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class df extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pf extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class rn extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cm=0;const Et=new it,ba=new wt,Ei=new F,Mt=new Dr,fr=new Dr,Qe=new F;class Mn extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?pf:df)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Et.makeRotationFromQuaternion(e),this.applyMatrix4(Et),this}rotateX(e){return Et.makeRotationX(e),this.applyMatrix4(Et),this}rotateY(e){return Et.makeRotationY(e),this.applyMatrix4(Et),this}rotateZ(e){return Et.makeRotationZ(e),this.applyMatrix4(Et),this}translate(e,t,i){return Et.makeTranslation(e,t,i),this.applyMatrix4(Et),this}scale(e,t,i){return Et.makeScale(e,t,i),this.applyMatrix4(Et),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mt.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Mt.min,fr.min),Mt.expandByPoint(Qe),Qe.addVectors(Mt.max,fr.max),Mt.expandByPoint(Qe)):(Mt.expandByPoint(fr.min),Mt.expandByPoint(fr.max))}Mt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Qe.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Qe));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Qe.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(e,c),Qe.add(Ei)),r=Math.max(r,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let q=0;q<a;q++)c[q]=new F,u[q]=new F;const f=new F,h=new F,m=new F,g=new De,p=new De,d=new De,_=new F,E=new F;function A(q,I,de){f.fromArray(r,q*3),h.fromArray(r,I*3),m.fromArray(r,de*3),g.fromArray(o,q*2),p.fromArray(o,I*2),d.fromArray(o,de*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const ne=1/(p.x*d.y-d.x*p.y);!isFinite(ne)||(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(ne),E.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(ne),c[q].add(_),c[I].add(_),c[de].add(_),u[q].add(E),u[I].add(E),u[de].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let q=0,I=T.length;q<I;++q){const de=T[q],ne=de.start,N=de.count;for(let J=ne,G=ne+N;J<G;J+=3)A(i[J+0],i[J+1],i[J+2])}const b=new F,D=new F,O=new F,y=new F;function R(q){O.fromArray(s,q*3),y.copy(O);const I=c[q];b.copy(I),b.sub(O.multiplyScalar(O.dot(I))).normalize(),D.crossVectors(y,I);const ne=D.dot(u[q])<0?-1:1;l[q*4]=b.x,l[q*4+1]=b.y,l[q*4+2]=b.z,l[q*4+3]=ne}for(let q=0,I=T.length;q<I;++q){const de=T[q],ne=de.start,N=de.count;for(let J=ne,G=ne+N;J<G;J+=3)R(i[J+0]),R(i[J+1]),R(i[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,d),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let f=0,h=c;f<u;f++,h++)o[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new it,Ti=new ff,Sa=new Ws,Cn=new F,Ln=new F,Rn=new F,wa=new F,Ea=new F,Ta=new F,Kr=new F,Jr=new F,Qr=new F,es=new De,ts=new De,ns=new De,Aa=new F,is=new F;class In extends wt{constructor(e=new Mn,t=new zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),e.ray.intersectsSphere(Sa)===!1)||(fc.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(fc),i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],E=r[_.materialIndex],A=Math.max(_.start,g.start),T=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let b=A,D=T;b<D;b+=3){const O=a.getX(b),y=a.getX(b+1),R=a.getX(b+2);o=rs(this,E,e,Ti,l,c,u,f,h,O,y,R),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(a.count,g.start+g.count);for(let _=p,E=d;_<E;_+=3){const A=a.getX(_),T=a.getX(_+1),b=a.getX(_+2);o=rs(this,r,e,Ti,l,c,u,f,h,A,T,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],E=r[_.materialIndex],A=Math.max(_.start,g.start),T=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let b=A,D=T;b<D;b+=3){const O=b,y=b+1,R=b+2;o=rs(this,E,e,Ti,l,c,u,f,h,O,y,R),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,E=d;_<E;_+=3){const A=_,T=_+1,b=_+2;o=rs(this,r,e,Ti,l,c,u,f,h,A,T,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Lm(n,e,t,i,r,s,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==$i,a),l===null)return null;is.copy(a),is.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(is);return c<t.near||c>t.far?null:{distance:c,point:is.clone(),object:n}}function rs(n,e,t,i,r,s,o,a,l,c,u,f){Cn.fromBufferAttribute(r,c),Ln.fromBufferAttribute(r,u),Rn.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){Kr.set(0,0,0),Jr.set(0,0,0),Qr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=h[g],_=s[g];d!==0&&(wa.fromBufferAttribute(_,c),Ea.fromBufferAttribute(_,u),Ta.fromBufferAttribute(_,f),o?(Kr.addScaledVector(wa,d),Jr.addScaledVector(Ea,d),Qr.addScaledVector(Ta,d)):(Kr.addScaledVector(wa.sub(Cn),d),Jr.addScaledVector(Ea.sub(Ln),d),Qr.addScaledVector(Ta.sub(Rn),d)))}Cn.add(Kr),Ln.add(Jr),Rn.add(Qr)}n.isSkinnedMesh&&(n.boneTransform(c,Cn),n.boneTransform(u,Ln),n.boneTransform(f,Rn));const m=Lm(n,e,t,i,Cn,Ln,Rn,Aa);if(m){a&&(es.fromBufferAttribute(a,c),ts.fromBufferAttribute(a,u),ns.fromBufferAttribute(a,f),m.uv=Qt.getUV(Aa,Cn,Ln,Rn,es,ts,ns,new De)),l&&(es.fromBufferAttribute(l,c),ts.fromBufferAttribute(l,u),ns.fromBufferAttribute(l,f),m.uv2=Qt.getUV(Aa,Cn,Ln,Rn,es,ts,ns,new De));const g={a:c,b:u,c:f,normal:new F,materialIndex:0};Qt.getNormal(Cn,Ln,Rn,g.normal),m.face=g}return m}class Pr extends Mn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(f,2));function g(p,d,_,E,A,T,b,D,O,y,R){const q=T/O,I=b/y,de=T/2,ne=b/2,N=D/2,J=O+1,G=y+1;let W=0,V=0;const U=new F;for(let Q=0;Q<G;Q++){const he=Q*I-ne;for(let se=0;se<J;se++){const oe=se*q-de;U[p]=oe*E,U[d]=he*A,U[_]=N,c.push(U.x,U.y,U.z),U[p]=0,U[d]=0,U[_]=D>0?1:-1,u.push(U.x,U.y,U.z),f.push(se/O),f.push(1-Q/y),W+=1}}for(let Q=0;Q<y;Q++)for(let he=0;he<O;he++){const se=h+he+J*Q,oe=h+he+J*(Q+1),Me=h+(he+1)+J*(Q+1),Se=h+(he+1)+J*Q;l.push(se,oe,Se),l.push(oe,Me,Se),V+=6}a.addGroup(m,V,R),m+=V,h+=W}}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function st(n){const e={};for(let t=0;t<n.length;t++){const i=Ji(n[t]);for(const r in i)e[r]=i[r]}return e}const Rm={clone:Ji,merge:st};var Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends rt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Dm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mf extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends mf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ql*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ql*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(aa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=90,Ci=1;class Im extends wt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Ct(Ai,Ci,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new F(1,0,0)),this.add(r);const s=new Ct(Ai,Ci,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new F(-1,0,0)),this.add(s);const o=new Ct(Ai,Ci,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new F(0,1,0)),this.add(o);const a=new Ct(Ai,Ci,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new F(0,-1,0)),this.add(a);const l=new Ct(Ai,Ci,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new F(0,0,1)),this.add(l);const c=new Ct(Ai,Ci,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new F(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=gn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class gf extends Gt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yi,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fm extends zn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:At}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Pr(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:Ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:On});s.uniforms.tEquirect.value=t;const o=new In(r,s),a=t.minFilter;return t.minFilter===Vs&&(t.minFilter=At),new Im(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ca=new F,Nm=new F,Om=new tn;class Xn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ca.subVectors(i,t).cross(Nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ca),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Om.getNormalMatrix(e),r=this.coplanarPoint(Ca).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new Ws,ss=new F;class _f{constructor(e=new Xn,t=new Xn,i=new Xn,r=new Xn,s=new Xn,o=new Xn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],g=i[10],p=i[11],d=i[12],_=i[13],E=i[14],A=i[15];return t[0].setComponents(a-r,f-l,p-h,A-d).normalize(),t[1].setComponents(a+r,f+l,p+h,A+d).normalize(),t[2].setComponents(a+s,f+c,p+m,A+_).normalize(),t[3].setComponents(a-s,f-c,p-m,A-_).normalize(),t[4].setComponents(a-o,f-u,p-g,A-E).normalize(),t[5].setComponents(a+o,f+u,p+g,A+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ss.x=r.normal.x>0?e.max.x:e.min.x,ss.y=r.normal.y>0?e.max.y:e.min.y,ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function zm(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Uo extends Mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const E=_*h-o;for(let A=0;A<c;A++){const T=A*f-s;g.push(T,-E,0),p.push(0,0,1),d.push(A/a),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let E=0;E<a;E++){const A=E+c*_,T=E+c*(_+1),b=E+1+c*(_+1),D=E+1+c*_;m.push(A,T,D),m.push(T,b,D)}this.setIndex(m),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(p,3)),this.setAttribute("uv",new rn(d,2))}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,km=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wm="vec3 transformed = vec3( position );",qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Xm=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,$m=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ig=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,rg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",fg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_g=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,bg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Eg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Lg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Dg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Pg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ig=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Og=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$g=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Kg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,r0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,s0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,m0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,_0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,A0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,C0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,L0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,R0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,D0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,P0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,I0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,B0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,G0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,H0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,J0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,f_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:Um,alphamap_pars_fragment:Bm,alphatest_fragment:km,alphatest_pars_fragment:Gm,aomap_fragment:Hm,aomap_pars_fragment:Vm,begin_vertex:Wm,beginnormal_vertex:qm,bsdfs:jm,iridescence_fragment:Xm,bumpmap_pars_fragment:$m,clipping_planes_fragment:Ym,clipping_planes_pars_fragment:Zm,clipping_planes_pars_vertex:Km,clipping_planes_vertex:Jm,color_fragment:Qm,color_pars_fragment:eg,color_pars_vertex:tg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:rg,defaultnormal_vertex:sg,displacementmap_pars_vertex:ag,displacementmap_vertex:og,emissivemap_fragment:lg,emissivemap_pars_fragment:cg,encodings_fragment:ug,encodings_pars_fragment:fg,envmap_fragment:hg,envmap_common_pars_fragment:dg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:Tg,envmap_vertex:gg,fog_vertex:_g,fog_pars_vertex:xg,fog_fragment:vg,fog_pars_fragment:Mg,gradientmap_pars_fragment:yg,lightmap_fragment:bg,lightmap_pars_fragment:Sg,lights_lambert_vertex:wg,lights_pars_begin:Eg,lights_toon_fragment:Ag,lights_toon_pars_fragment:Cg,lights_phong_fragment:Lg,lights_phong_pars_fragment:Rg,lights_physical_fragment:Dg,lights_physical_pars_fragment:Pg,lights_fragment_begin:Ig,lights_fragment_maps:Fg,lights_fragment_end:Ng,logdepthbuf_fragment:Og,logdepthbuf_pars_fragment:zg,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Bg,map_fragment:kg,map_pars_fragment:Gg,map_particle_fragment:Hg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:qg,morphcolor_vertex:jg,morphnormal_vertex:Xg,morphtarget_pars_vertex:$g,morphtarget_vertex:Yg,normal_fragment_begin:Zg,normal_fragment_maps:Kg,normal_pars_fragment:Jg,normal_pars_vertex:Qg,normal_vertex:e0,normalmap_pars_fragment:t0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:r0,iridescence_pars_fragment:s0,output_fragment:a0,packing:o0,premultiplied_alpha_fragment:l0,project_vertex:c0,dithering_fragment:u0,dithering_pars_fragment:f0,roughnessmap_fragment:h0,roughnessmap_pars_fragment:d0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:_0,skinbase_vertex:x0,skinning_pars_vertex:v0,skinning_vertex:M0,skinnormal_vertex:y0,specularmap_fragment:b0,specularmap_pars_fragment:S0,tonemapping_fragment:w0,tonemapping_pars_fragment:E0,transmission_fragment:T0,transmission_pars_fragment:A0,uv_pars_fragment:C0,uv_pars_vertex:L0,uv_vertex:R0,uv2_pars_fragment:D0,uv2_pars_vertex:P0,uv2_vertex:I0,worldpos_vertex:F0,background_vert:N0,background_frag:O0,cube_vert:z0,cube_frag:U0,depth_vert:B0,depth_frag:k0,distanceRGBA_vert:G0,distanceRGBA_frag:H0,equirect_vert:V0,equirect_frag:W0,linedashed_vert:q0,linedashed_frag:j0,meshbasic_vert:X0,meshbasic_frag:$0,meshlambert_vert:Y0,meshlambert_frag:Z0,meshmatcap_vert:K0,meshmatcap_frag:J0,meshnormal_vert:Q0,meshnormal_frag:e_,meshphong_vert:t_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:r_,meshtoon_vert:s_,meshtoon_frag:a_,points_vert:o_,points_frag:l_,shadow_vert:c_,shadow_frag:u_,sprite_vert:f_,sprite_frag:h_},xe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new tn},uv2Transform:{value:new tn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tn}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tn}}},Jt={basic:{uniforms:st([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:st([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.fog,xe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:st([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:st([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:st([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:st([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:st([xe.points,xe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:st([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:st([xe.common,xe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:st([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:st([xe.sprite,xe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new tn},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:st([xe.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:st([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:st([xe.lights,xe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Jt.physical={uniforms:st([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new De(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function d_(n,e,t,i,r,s){const o=new Pe(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function m(p,d){let _=!1,E=d.isScene===!0?d.background:null;E&&E.isTexture&&(E=e.get(E));const A=n.xr,T=A.getSession&&A.getSession();T&&T.environmentBlendMode==="additive"&&(E=null),E===null?g(o,a):E&&E.isColor&&(g(E,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Hs)?(c===void 0&&(c=new In(new Pr(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Ji(Jt.cube.uniforms),vertexShader:Jt.cube.vertexShader,fragmentShader:Jt.cube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,(u!==E||f!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new In(new Uo(2,2),new xn({name:"BackgroundMaterial",uniforms:Ji(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){t.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function p_(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function f(N,J,G,W,V){let U=!1;if(o){const Q=p(W,G,J);c!==Q&&(c=Q,m(c.object)),U=_(N,W,G,V),U&&E(N,W,G,V)}else{const Q=J.wireframe===!0;(c.geometry!==W.id||c.program!==G.id||c.wireframe!==Q)&&(c.geometry=W.id,c.program=G.id,c.wireframe=Q,U=!0)}V!==null&&t.update(V,34963),(U||u)&&(u=!1,y(N,J,G,W),V!==null&&n.bindBuffer(34963,t.get(V).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function p(N,J,G){const W=G.wireframe===!0;let V=a[N.id];V===void 0&&(V={},a[N.id]=V);let U=V[J.id];U===void 0&&(U={},V[J.id]=U);let Q=U[W];return Q===void 0&&(Q=d(h()),U[W]=Q),Q}function d(N){const J=[],G=[],W=[];for(let V=0;V<r;V++)J[V]=0,G[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:G,attributeDivisors:W,object:N,attributes:{},index:null}}function _(N,J,G,W){const V=c.attributes,U=J.attributes;let Q=0;const he=G.getAttributes();for(const se in he)if(he[se].location>=0){const Me=V[se];let Se=U[se];if(Se===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),Me===void 0||Me.attribute!==Se||Se&&Me.data!==Se.data)return!0;Q++}return c.attributesNum!==Q||c.index!==W}function E(N,J,G,W){const V={},U=J.attributes;let Q=0;const he=G.getAttributes();for(const se in he)if(he[se].location>=0){let Me=U[se];Me===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(Me=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(Me=N.instanceColor));const Se={};Se.attribute=Me,Me&&Me.data&&(Se.data=Me.data),V[se]=Se,Q++}c.attributes=V,c.attributesNum=Q,c.index=W}function A(){const N=c.newAttributes;for(let J=0,G=N.length;J<G;J++)N[J]=0}function T(N){b(N,0)}function b(N,J){const G=c.newAttributes,W=c.enabledAttributes,V=c.attributeDivisors;G[N]=1,W[N]===0&&(n.enableVertexAttribArray(N),W[N]=1),V[N]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,J),V[N]=J)}function D(){const N=c.newAttributes,J=c.enabledAttributes;for(let G=0,W=J.length;G<W;G++)J[G]!==N[G]&&(n.disableVertexAttribArray(G),J[G]=0)}function O(N,J,G,W,V,U){i.isWebGL2===!0&&(G===5124||G===5125)?n.vertexAttribIPointer(N,J,G,V,U):n.vertexAttribPointer(N,J,G,W,V,U)}function y(N,J,G,W){if(i.isWebGL2===!1&&(N.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const V=W.attributes,U=G.getAttributes(),Q=J.defaultAttributeValues;for(const he in U){const se=U[he];if(se.location>=0){let oe=V[he];if(oe===void 0&&(he==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),he==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),oe!==void 0){const Me=oe.normalized,Se=oe.itemSize,K=t.get(oe);if(K===void 0)continue;const Oe=K.buffer,we=K.type,Ee=K.bytesPerElement;if(oe.isInterleavedBufferAttribute){const _e=oe.data,Ue=_e.stride,Le=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let S=0;S<se.locationSize;S++)b(se.location+S,_e.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let S=0;S<se.locationSize;S++)T(se.location+S);n.bindBuffer(34962,Oe);for(let S=0;S<se.locationSize;S++)O(se.location+S,Se/se.locationSize,we,Me,Ue*Ee,(Le+Se/se.locationSize*S)*Ee)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<se.locationSize;_e++)b(se.location+_e,oe.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<se.locationSize;_e++)T(se.location+_e);n.bindBuffer(34962,Oe);for(let _e=0;_e<se.locationSize;_e++)O(se.location+_e,Se/se.locationSize,we,Me,Se*Ee,Se/se.locationSize*_e*Ee)}}else if(Q!==void 0){const Me=Q[he];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(se.location,Me);break;case 3:n.vertexAttrib3fv(se.location,Me);break;case 4:n.vertexAttrib4fv(se.location,Me);break;default:n.vertexAttrib1fv(se.location,Me)}}}}D()}function R(){de();for(const N in a){const J=a[N];for(const G in J){const W=J[G];for(const V in W)g(W[V].object),delete W[V];delete J[G]}delete a[N]}}function q(N){if(a[N.id]===void 0)return;const J=a[N.id];for(const G in J){const W=J[G];for(const V in W)g(W[V].object),delete W[V];delete J[G]}delete a[N.id]}function I(N){for(const J in a){const G=a[J];if(G[N.id]===void 0)continue;const W=G[N.id];for(const V in W)g(W[V].object),delete W[V];delete G[N.id]}}function de(){ne(),u=!0,c!==l&&(c=l,m(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:de,resetDefaultState:ne,dispose:R,releaseStatesOfGeometry:q,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:T,disableUnusedAttributes:D}}function m_(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function g_(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(O){if(O==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),d=n.getParameter(36347),_=n.getParameter(36348),E=n.getParameter(36349),A=h>0,T=o||e.has("OES_texture_float"),b=A&&T,D=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:A,floatFragmentTextures:T,floatVertexTextures:b,maxSamples:D}}function __(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Xn,a=new tn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const E=s?0:i,A=E*4;let T=_.clippingState||null;l.value=T,T=u(g,h,A,m);for(let b=0;b!==A;++b)T[b]=t[b];_.clippingState=T,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(d===null||d.length<_)&&(d=new Float32Array(_));for(let A=0,T=m;A!==p;++A,T+=4)o.copy(f[A]).applyMatrix4(E,a),o.normal.toArray(d,T),d[T+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function x_(n){let e=new WeakMap;function t(o,a){return a===eo?o.mapping=Yi:a===to&&(o.mapping=Zi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===eo||a===to)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fm(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class v_ extends mf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oi=4,hc=[.125,.215,.35,.446,.526,.582],Zn=20,La=new v_,dc=new Pe;let Ra=null;const $n=(1+Math.sqrt(5))/2,Ri=1/$n,pc=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,$n,Ri),new F(0,$n,-Ri),new F(Ri,0,$n),new F(-Ri,0,$n),new F($n,Ri,0),new F(-$n,Ri,0)];class mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ra=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra),e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:At,minFilter:At,generateMipmaps:!1,type:Er,format:zt,encoding:ci,depthBuffer:!1},r=gc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M_(s)),this._blurMaterial=y_(s,e,t)}return r}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,i,r){const a=new Ct(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(dc),u.toneMapping=gn,u.autoClear=!1;const m=new zo({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new In(new Pr,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(dc),p=!0);for(let _=0;_<6;_++){const E=_%3;E===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):E===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const A=this._cubeSize;as(r,E*A,_>2?A:0,A,A),u.setRenderTarget(r),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yi||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new In(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;as(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,La)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pc[(r-1)%pc.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new In(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):Zn;d>Zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Zn}`);const _=[];let E=0;for(let O=0;O<Zn;++O){const y=O/p,R=Math.exp(-y*y/2);_.push(R),O===0?E+=R:O<d&&(E+=2*R)}for(let O=0;O<_.length;O++)_[O]=_[O]/E;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-i;const T=this._sizeLods[r],b=3*T*(r>A-Oi?r-A+Oi:0),D=4*(this._cubeSize-T);as(t,b,D,3*T,2*T),l.setRenderTarget(t),l.render(f,La)}}function M_(n){const e=[],t=[],i=[];let r=n;const s=n-Oi+1+hc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Oi?l=hc[o-n+Oi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,_=1,E=new Float32Array(p*g*m),A=new Float32Array(d*g*m),T=new Float32Array(_*g*m);for(let D=0;D<m;D++){const O=D%3*2/3-1,y=D>2?0:-1,R=[O,y,0,O+2/3,y,0,O+2/3,y+1,0,O,y,0,O+2/3,y+1,0,O,y+1,0];E.set(R,p*g*D),A.set(h,d*g*D);const q=[D,D,D,D,D,D];T.set(q,_*g*D)}const b=new Mn;b.setAttribute("position",new nn(E,p)),b.setAttribute("uv",new nn(A,d)),b.setAttribute("faceIndex",new nn(T,_)),e.push(b),r>Oi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gc(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=Hs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function y_(n,e,t){const i=new Float32Array(Zn),r=new F(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function _c(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function xc(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===eo||l===to,u=l===Yi||l===Zi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new mc(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new mc(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function S_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function w_(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const E=m.array;p=m.version;for(let A=0,T=E.length;A<T;A+=3){const b=E[A+0],D=E[A+1],O=E[A+2];h.push(b,D,D,O,O,b)}}else{const E=g.array;p=g.version;for(let A=0,T=E.length/3-1;A<T;A+=3){const b=A+0,D=A+1,O=A+2;h.push(b,D,D,O,O,b)}}const d=new(af(h)?pf:df)(h,1);d.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function E_(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(r)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,a,h*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function T_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function A_(n,e){return n[0]-e[0]}function C_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Da(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function L_(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let G=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var g=G;_!==void 0&&_.texture.dispose();const T=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let q=0;T===!0&&(q=1),b===!0&&(q=2),D===!0&&(q=3);let I=u.attributes.position.count*q,de=1;I>e.maxTextureSize&&(de=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const ne=new Float32Array(I*de*4*d),N=new uf(ne,I,de,d);N.type=Qn,N.needsUpdate=!0;const J=q*4;for(let W=0;W<d;W++){const V=O[W],U=y[W],Q=R[W],he=I*de*4*W;for(let se=0;se<V.count;se++){const oe=se*J;T===!0&&(o.fromBufferAttribute(V,se),V.normalized===!0&&Da(o,V),ne[he+oe+0]=o.x,ne[he+oe+1]=o.y,ne[he+oe+2]=o.z,ne[he+oe+3]=0),b===!0&&(o.fromBufferAttribute(U,se),U.normalized===!0&&Da(o,U),ne[he+oe+4]=o.x,ne[he+oe+5]=o.y,ne[he+oe+6]=o.z,ne[he+oe+7]=0),D===!0&&(o.fromBufferAttribute(Q,se),Q.normalized===!0&&Da(o,Q),ne[he+oe+8]=o.x,ne[he+oe+9]=o.y,ne[he+oe+10]=o.z,ne[he+oe+11]=Q.itemSize===4?o.w:1)}}_={count:d,texture:N,size:new De(I,de)},s.set(u,_),u.addEventListener("dispose",G)}let E=0;for(let T=0;T<m.length;T++)E+=m[T];const A=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(n,"morphTargetBaseInfluence",A),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=i[u.id];if(d===void 0||d.length!==p){d=[];for(let b=0;b<p;b++)d[b]=[b,0];i[u.id]=d}for(let b=0;b<p;b++){const D=d[b];D[0]=b,D[1]=m[b]}d.sort(C_);for(let b=0;b<8;b++)b<p&&d[b][1]?(a[b][0]=d[b][0],a[b][1]=d[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(A_);const _=u.morphAttributes.position,E=u.morphAttributes.normal;let A=0;for(let b=0;b<8;b++){const D=a[b],O=D[0],y=D[1];O!==Number.MAX_SAFE_INTEGER&&y?(_&&u.getAttribute("morphTarget"+b)!==_[O]&&u.setAttribute("morphTarget"+b,_[O]),E&&u.getAttribute("morphNormal"+b)!==E[O]&&u.setAttribute("morphNormal"+b,E[O]),r[b]=y,A+=y):(_&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),E&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const T=u.morphTargetsRelative?1:1-A;h.getUniforms().setValue(n,"morphTargetBaseInfluence",T),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function R_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const vf=new Gt,Mf=new uf,yf=new vm,bf=new gf,vc=[],Mc=[],yc=new Float32Array(16),bc=new Float32Array(9),Sc=new Float32Array(4);function sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=vc[r];if(s===void 0&&(s=new Float32Array(r),vc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qs(n,e){let t=Mc[e];t===void 0&&(t=new Int32Array(e),Mc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function D_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function P_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function I_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function F_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function N_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;Sc.set(i),n.uniformMatrix2fv(this.addr,!1,Sc),mt(t,i)}}function O_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;bc.set(i),n.uniformMatrix3fv(this.addr,!1,bc),mt(t,i)}}function z_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;yc.set(i),n.uniformMatrix4fv(this.addr,!1,yc),mt(t,i)}}function U_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function B_(n,e){const t=this.cache;pt(t,e)||(n.uniform2iv(this.addr,e),mt(t,e))}function k_(n,e){const t=this.cache;pt(t,e)||(n.uniform3iv(this.addr,e),mt(t,e))}function G_(n,e){const t=this.cache;pt(t,e)||(n.uniform4iv(this.addr,e),mt(t,e))}function H_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function V_(n,e){const t=this.cache;pt(t,e)||(n.uniform2uiv(this.addr,e),mt(t,e))}function W_(n,e){const t=this.cache;pt(t,e)||(n.uniform3uiv(this.addr,e),mt(t,e))}function q_(n,e){const t=this.cache;pt(t,e)||(n.uniform4uiv(this.addr,e),mt(t,e))}function j_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||vf,r)}function X_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||yf,r)}function $_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bf,r)}function Y_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mf,r)}function Z_(n){switch(n){case 5126:return D_;case 35664:return P_;case 35665:return I_;case 35666:return F_;case 35674:return N_;case 35675:return O_;case 35676:return z_;case 5124:case 35670:return U_;case 35667:case 35671:return B_;case 35668:case 35672:return k_;case 35669:case 35673:return G_;case 5125:return H_;case 36294:return V_;case 36295:return W_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Y_}}function K_(n,e){n.uniform1fv(this.addr,e)}function J_(n,e){const t=sr(e,this.size,2);n.uniform2fv(this.addr,t)}function Q_(n,e){const t=sr(e,this.size,3);n.uniform3fv(this.addr,t)}function ex(n,e){const t=sr(e,this.size,4);n.uniform4fv(this.addr,t)}function tx(n,e){const t=sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nx(n,e){const t=sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ix(n,e){const t=sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rx(n,e){n.uniform1iv(this.addr,e)}function sx(n,e){n.uniform2iv(this.addr,e)}function ax(n,e){n.uniform3iv(this.addr,e)}function ox(n,e){n.uniform4iv(this.addr,e)}function lx(n,e){n.uniform1uiv(this.addr,e)}function cx(n,e){n.uniform2uiv(this.addr,e)}function ux(n,e){n.uniform3uiv(this.addr,e)}function fx(n,e){n.uniform4uiv(this.addr,e)}function hx(n,e,t){const i=e.length,r=qs(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||vf,r[s])}function dx(n,e,t){const i=e.length,r=qs(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||yf,r[s])}function px(n,e,t){const i=e.length,r=qs(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||bf,r[s])}function mx(n,e,t){const i=e.length,r=qs(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Mf,r[s])}function gx(n){switch(n){case 5126:return K_;case 35664:return J_;case 35665:return Q_;case 35666:return ex;case 35674:return tx;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return rx;case 35667:case 35671:return sx;case 35668:case 35672:return ax;case 35669:case 35673:return ox;case 5125:return lx;case 36294:return cx;case 36295:return ux;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}class _x{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Z_(t.type)}}class xx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=gx(t.type)}}class vx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function wc(n,e){n.seq.push(e),n.map[e.id]=e}function Mx(n,e,t){const i=n.name,r=i.length;for(Pa.lastIndex=0;;){const s=Pa.exec(i),o=Pa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wc(t,c===void 0?new _x(a,n,e):new xx(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new vx(a),wc(t,f)),t=f}}}class gs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Mx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ec(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let yx=0;function bx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Sx(n){switch(n){case ci:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Tc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+bx(n.getShaderSource(e),o)}else return r}function wx(n,e){const t=Sx(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ex(n,e){let t;switch(e){case jp:t="Linear";break;case Xp:t="Reinhard";break;case $p:t="OptimizedCineon";break;case Yp:t="ACESFilmic";break;case Zp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tx(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function Ax(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Cx(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function mr(n){return n!==""}function Ac(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(n){return n.replace(Lx,Rx)}function Rx(n,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ao(t)}const Dx=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(n){return n.replace(Px,Sf).replace(Dx,Ix)}function Ix(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Sf(n,e,t,i)}function Sf(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pr&&(e="SHADOWMAP_TYPE_VSM"),e}function Nx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yi:case Zi:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ox(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function zx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gs:e="ENVMAP_BLENDING_MULTIPLY";break;case Wp:e="ENVMAP_BLENDING_MIX";break;case qp:e="ENVMAP_BLENDING_ADD";break}return e}function Ux(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Bx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Fx(t),c=Nx(t),u=Ox(t),f=zx(t),h=Ux(t),m=t.isWebGL2?"":Tx(t),g=Ax(s),p=r.createProgram();let d,_,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(mr).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(mr).join(`
`),_.length>0&&(_+=`
`)):(d=[Rc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),_=[m,Rc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?ze.tonemapping_pars_fragment:"",t.toneMapping!==gn?Ex("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,wx("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),o=ao(o),o=Ac(o,t),o=Cc(o,t),a=ao(a),a=Ac(a,t),a=Cc(a,t),o=Lc(o),a=Lc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=E+d+o,T=E+_+a,b=Ec(r,35633,A),D=Ec(r,35632,T);if(r.attachShader(p,b),r.attachShader(p,D),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const R=r.getProgramInfoLog(p).trim(),q=r.getShaderInfoLog(b).trim(),I=r.getShaderInfoLog(D).trim();let de=!0,ne=!0;if(r.getProgramParameter(p,35714)===!1){de=!1;const N=Tc(r,b,"vertex"),J=Tc(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+R+`
`+N+`
`+J)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(q===""||I==="")&&(ne=!1);ne&&(this.diagnostics={runnable:de,programLog:R,vertexShader:{log:q,prefix:d},fragmentShader:{log:I,prefix:_}})}r.deleteShader(b),r.deleteShader(D);let O;this.getUniforms=function(){return O===void 0&&(O=new gs(r,p)),O};let y;return this.getAttributes=function(){return y===void 0&&(y=Cx(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=yx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=D,this}let kx=0;class Gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new Hx(e);t.set(e,i)}return t.get(e)}}class Hx{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}}function Vx(n,e,t,i,r,s,o){const a=new hf,l=new Gx,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,R,q,I,de){const ne=I.fog,N=de.geometry,J=y.isMeshStandardMaterial?I.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||J),W=!!G&&G.mapping===Hs?G.image.height:null,V=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const U=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Q=U!==void 0?U.length:0;let he=0;N.morphAttributes.position!==void 0&&(he=1),N.morphAttributes.normal!==void 0&&(he=2),N.morphAttributes.color!==void 0&&(he=3);let se,oe,Me,Se;if(V){const Ue=Jt[V];se=Ue.vertexShader,oe=Ue.fragmentShader}else se=y.vertexShader,oe=y.fragmentShader,l.update(y),Me=l.getVertexShaderID(y),Se=l.getFragmentShaderID(y);const K=n.getRenderTarget(),Oe=y.alphaTest>0,we=y.clearcoat>0,Ee=y.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:y.type,vertexShader:se,fragmentShader:oe,defines:y.defines,customVertexShaderID:Me,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:de.isInstancedMesh===!0,instancingColor:de.isInstancedMesh===!0&&de.instanceColor!==null,supportsVertexTextures:h,outputEncoding:K===null?n.outputEncoding:K.isXRRenderTarget===!0?K.texture.encoding:ci,map:!!y.map,matcap:!!y.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:W,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===mm,tangentSpaceNormalMap:y.normalMapType===ir,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===$e,clearcoat:we,clearcoatMap:we&&!!y.clearcoatMap,clearcoatRoughnessMap:we&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!y.clearcoatNormalMap,iridescence:Ee,iridescenceMap:Ee&&!!y.iridescenceMap,iridescenceThicknessMap:Ee&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Hi,alphaMap:!!y.alphaMap,alphaTest:Oe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!N.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!ne,useFog:y.fog===!0,fogExp2:ne&&ne.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:de.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:he,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:gn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$i,flipSided:y.side===kt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const q in y.defines)R.push(q),R.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(_(R,y),E(R,y),R.push(n.outputEncoding)),R.push(y.customProgramCacheKey),R.join()}function _(y,R){y.push(R.precision),y.push(R.outputEncoding),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.combine),y.push(R.vertexUvs),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function E(y,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.map&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.lightMap&&a.enable(7),R.aoMap&&a.enable(8),R.emissiveMap&&a.enable(9),R.bumpMap&&a.enable(10),R.normalMap&&a.enable(11),R.objectSpaceNormalMap&&a.enable(12),R.tangentSpaceNormalMap&&a.enable(13),R.clearcoat&&a.enable(14),R.clearcoatMap&&a.enable(15),R.clearcoatRoughnessMap&&a.enable(16),R.clearcoatNormalMap&&a.enable(17),R.iridescence&&a.enable(18),R.iridescenceMap&&a.enable(19),R.iridescenceThicknessMap&&a.enable(20),R.displacementMap&&a.enable(21),R.specularMap&&a.enable(22),R.roughnessMap&&a.enable(23),R.metalnessMap&&a.enable(24),R.gradientMap&&a.enable(25),R.alphaMap&&a.enable(26),R.alphaTest&&a.enable(27),R.vertexColors&&a.enable(28),R.vertexAlphas&&a.enable(29),R.vertexUvs&&a.enable(30),R.vertexTangents&&a.enable(31),R.uvsVertexOnly&&a.enable(32),R.fog&&a.enable(33),y.push(a.mask),a.disableAll(),R.useFog&&a.enable(0),R.flatShading&&a.enable(1),R.logarithmicDepthBuffer&&a.enable(2),R.skinning&&a.enable(3),R.morphTargets&&a.enable(4),R.morphNormals&&a.enable(5),R.morphColors&&a.enable(6),R.premultipliedAlpha&&a.enable(7),R.shadowMapEnabled&&a.enable(8),R.physicallyCorrectLights&&a.enable(9),R.doubleSided&&a.enable(10),R.flipSided&&a.enable(11),R.useDepthPacking&&a.enable(12),R.dithering&&a.enable(13),R.specularIntensityMap&&a.enable(14),R.specularColorMap&&a.enable(15),R.transmission&&a.enable(16),R.transmissionMap&&a.enable(17),R.thicknessMap&&a.enable(18),R.sheen&&a.enable(19),R.sheenColorMap&&a.enable(20),R.sheenRoughnessMap&&a.enable(21),R.decodeVideoTexture&&a.enable(22),R.opaque&&a.enable(23),y.push(a.mask)}function A(y){const R=g[y.type];let q;if(R){const I=Jt[R];q=Rm.clone(I.uniforms)}else q=y.uniforms;return q}function T(y,R){let q;for(let I=0,de=c.length;I<de;I++){const ne=c[I];if(ne.cacheKey===R){q=ne,++q.usedTimes;break}}return q===void 0&&(q=new Bx(n,R,y,s),c.push(q)),q}function b(y){if(--y.usedTimes===0){const R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),y.destroy()}}function D(y){l.remove(y)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:A,acquireProgram:T,releaseProgram:b,releaseShaderCache:D,programs:c,dispose:O}}function Wx(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function qx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,g,p,d){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=d),e++,_}function a(f,h,m,g,p,d){const _=o(f,h,m,g,p,d);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,h,m,g,p,d){const _=o(f,h,m,g,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||qx),i.length>1&&i.sort(h||Dc),r.length>1&&r.sort(h||Dc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function jx(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Pc,n.set(i,[s])):r>=n.get(i).length?(s=new Pc,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Xx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Pe};break;case"SpotLight":t={position:new F,direction:new F,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function $x(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Yx=0;function Zx(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function Kx(n,e){const t=new Xx,i=$x(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,o=new it,a=new it;function l(u,f){let h=0,m=0,g=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let p=0,d=0,_=0,E=0,A=0,T=0,b=0,D=0;u.sort(Zx);const O=f!==!0?Math.PI:1;for(let R=0,q=u.length;R<q;R++){const I=u[R],de=I.color,ne=I.intensity,N=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=de.r*ne*O,m+=de.g*ne*O,g+=de.b*ne*O;else if(I.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(I.sh.coefficients[G],ne);else if(I.isDirectionalLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*O),I.castShadow){const W=I.shadow,V=i.get(I);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,r.directionalShadow[p]=V,r.directionalShadowMap[p]=J,r.directionalShadowMatrix[p]=I.shadow.matrix,T++}r.directional[p]=G,p++}else if(I.isSpotLight){const G=t.get(I);if(G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(de).multiplyScalar(ne*O),G.distance=N,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,I.castShadow){const W=I.shadow,V=i.get(I);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,r.spotShadow[_]=V,r.spotShadowMap[_]=J,r.spotShadowMatrix[_]=I.shadow.matrix,D++}r.spot[_]=G,_++}else if(I.isRectAreaLight){const G=t.get(I);G.color.copy(de).multiplyScalar(ne),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),r.rectArea[E]=G,E++}else if(I.isPointLight){const G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*O),G.distance=I.distance,G.decay=I.decay,I.castShadow){const W=I.shadow,V=i.get(I);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,r.pointShadow[d]=V,r.pointShadowMap[d]=J,r.pointShadowMatrix[d]=I.shadow.matrix,b++}r.point[d]=G,d++}else if(I.isHemisphereLight){const G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(ne*O),G.groundColor.copy(I.groundColor).multiplyScalar(ne*O),r.hemi[A]=G,A++}}E>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const y=r.hash;(y.directionalLength!==p||y.pointLength!==d||y.spotLength!==_||y.rectAreaLength!==E||y.hemiLength!==A||y.numDirectionalShadows!==T||y.numPointShadows!==b||y.numSpotShadows!==D)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=E,r.point.length=d,r.hemi.length=A,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=D,y.directionalLength=p,y.pointLength=d,y.spotLength=_,y.rectAreaLength=E,y.hemiLength=A,y.numDirectionalShadows=T,y.numPointShadows=b,y.numSpotShadows=D,r.version=Yx++)}function c(u,f){let h=0,m=0,g=0,p=0,d=0;const _=f.matrixWorldInverse;for(let E=0,A=u.length;E<A;E++){const T=u[E];if(T.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),h++}else if(T.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(T.isRectAreaLight){const b=r.rectArea[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),a.identity(),o.copy(T.matrixWorld),o.premultiply(_),a.extractRotation(o),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(T.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(_),m++}else if(T.isHemisphereLight){const b=r.hemi[d];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function Ic(n,e){const t=new Kx(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Jx(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Ic(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Ic(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class wf extends rt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ef extends rt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ev=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tv(n,e,t){let i=new _f;const r=new De,s=new De,o=new ot,a=new wf({depthPacking:pm}),l=new Ef,c={},u=t.maxTextureSize,f={0:kt,1:wr,2:$i},h=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Qx,fragmentShader:ev}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new In(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef,this.render=function(T,b,D){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;const O=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),q=n.state;q.setBlending(On),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);for(let I=0,de=T.length;I<de;I++){const ne=T[I],N=ne.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const J=N.getFrameExtents();if(r.multiply(J),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,N.mapSize.y=s.y)),N.map===null&&!N.isPointLightShadow&&this.type===pr&&(N.map=new zn(r.x,r.y),N.map.texture.name=ne.name+".shadowMap",N.mapPass=new zn(r.x,r.y),N.camera.updateProjectionMatrix()),N.map===null){const W={minFilter:_t,magFilter:_t,format:zt};N.map=new zn(r.x,r.y,W),N.map.texture.name=ne.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const G=N.getViewportCount();for(let W=0;W<G;W++){const V=N.getViewport(W);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),q.viewport(o),N.updateMatrices(ne,W),i=N.getFrustum(),A(b,D,N.camera,ne,this.type)}!N.isPointLightShadow&&this.type===pr&&_(N,D),N.needsUpdate=!1}d.needsUpdate=!1,n.setRenderTarget(O,y,R)};function _(T,b){const D=e.update(p);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,D,h,p,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,D,m,p,null)}function E(T,b,D,O,y,R){let q=null;const I=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0?q=I:q=D.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const de=q.uuid,ne=b.uuid;let N=c[de];N===void 0&&(N={},c[de]=N);let J=N[ne];J===void 0&&(J=q.clone(),N[ne]=J),q=J}return q.visible=b.visible,q.wireframe=b.wireframe,R===pr?q.side=b.shadowSide!==null?b.shadowSide:b.side:q.side=b.shadowSide!==null?b.shadowSide:f[b.side],q.alphaMap=b.alphaMap,q.alphaTest=b.alphaTest,q.clipShadows=b.clipShadows,q.clippingPlanes=b.clippingPlanes,q.clipIntersection=b.clipIntersection,q.displacementMap=b.displacementMap,q.displacementScale=b.displacementScale,q.displacementBias=b.displacementBias,q.wireframeLinewidth=b.wireframeLinewidth,q.linewidth=b.linewidth,D.isPointLight===!0&&q.isMeshDistanceMaterial===!0&&(q.referencePosition.setFromMatrixPosition(D.matrixWorld),q.nearDistance=O,q.farDistance=y),q}function A(T,b,D,O,y){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===pr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const I=e.update(T),de=T.material;if(Array.isArray(de)){const ne=I.groups;for(let N=0,J=ne.length;N<J;N++){const G=ne[N],W=de[G.materialIndex];if(W&&W.visible){const V=E(T,W,O,D.near,D.far,y);n.renderBufferDirect(D,null,I,V,T,G)}}}else if(de.visible){const ne=E(T,de,O,D.near,D.far,y);n.renderBufferDirect(D,null,I,ne,T,null)}}const q=T.children;for(let I=0,de=q.length;I<de;I++)A(q[I],b,D,O,y)}}function nv(n,e,t){const i=t.isWebGL2;function r(){let C=!1;const fe=new ot;let pe=null;const ye=new ot(0,0,0,0);return{setMask:function(me){pe!==me&&!C&&(n.colorMask(me,me,me,me),pe=me)},setLocked:function(me){C=me},setClear:function(me,be,ge,Ae,Ve){Ve===!0&&(me*=Ae,be*=Ae,ge*=Ae),fe.set(me,be,ge,Ae),ye.equals(fe)===!1&&(n.clearColor(me,be,ge,Ae),ye.copy(fe))},reset:function(){C=!1,pe=null,ye.set(-1,0,0,0)}}}function s(){let C=!1,fe=null,pe=null,ye=null;return{setTest:function(me){me?Se(2929):K(2929)},setMask:function(me){fe!==me&&!C&&(n.depthMask(me),fe=me)},setFunc:function(me){if(pe!==me){if(me)switch(me){case zp:n.depthFunc(512);break;case Up:n.depthFunc(519);break;case Bp:n.depthFunc(513);break;case Qa:n.depthFunc(515);break;case kp:n.depthFunc(514);break;case Gp:n.depthFunc(518);break;case Hp:n.depthFunc(516);break;case Vp:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);pe=me}},setLocked:function(me){C=me},setClear:function(me){ye!==me&&(n.clearDepth(me),ye=me)},reset:function(){C=!1,fe=null,pe=null,ye=null}}}function o(){let C=!1,fe=null,pe=null,ye=null,me=null,be=null,ge=null,Ae=null,Ve=null;return{setTest:function(We){C||(We?Se(2960):K(2960))},setMask:function(We){fe!==We&&!C&&(n.stencilMask(We),fe=We)},setFunc:function(We,lt,Ht){(pe!==We||ye!==lt||me!==Ht)&&(n.stencilFunc(We,lt,Ht),pe=We,ye=lt,me=Ht)},setOp:function(We,lt,Ht){(be!==We||ge!==lt||Ae!==Ht)&&(n.stencilOp(We,lt,Ht),be=We,ge=lt,Ae=Ht)},setLocked:function(We){C=We},setClear:function(We){Ve!==We&&(n.clearStencil(We),Ve=We)},reset:function(){C=!1,fe=null,pe=null,ye=null,me=null,be=null,ge=null,Ae=null,Ve=null}}}const a=new r,l=new s,c=new o;let u={},f={},h=new WeakMap,m=[],g=null,p=!1,d=null,_=null,E=null,A=null,T=null,b=null,D=null,O=!1,y=null,R=null,q=null,I=null,de=null;const ne=n.getParameter(35661);let N=!1,J=0;const G=n.getParameter(7938);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),N=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),N=J>=2);let W=null,V={};const U=n.getParameter(3088),Q=n.getParameter(2978),he=new ot().fromArray(U),se=new ot().fromArray(Q);function oe(C,fe,pe){const ye=new Uint8Array(4),me=n.createTexture();n.bindTexture(C,me),n.texParameteri(C,10241,9728),n.texParameteri(C,10240,9728);for(let be=0;be<pe;be++)n.texImage2D(fe+be,0,6408,1,1,0,6408,5121,ye);return me}const Me={};Me[3553]=oe(3553,3553,1),Me[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Se(2929),l.setFunc(Qa),L(!1),k(bl),Se(2884),Le(On);function Se(C){u[C]!==!0&&(n.enable(C),u[C]=!0)}function K(C){u[C]!==!1&&(n.disable(C),u[C]=!1)}function Oe(C,fe){return f[C]!==fe?(n.bindFramebuffer(C,fe),f[C]=fe,i&&(C===36009&&(f[36160]=fe),C===36160&&(f[36009]=fe)),!0):!1}function we(C,fe){let pe=m,ye=!1;if(C)if(pe=h.get(fe),pe===void 0&&(pe=[],h.set(fe,pe)),C.isWebGLMultipleRenderTargets){const me=C.texture;if(pe.length!==me.length||pe[0]!==36064){for(let be=0,ge=me.length;be<ge;be++)pe[be]=36064+be;pe.length=me.length,ye=!0}}else pe[0]!==36064&&(pe[0]=36064,ye=!0);else pe[0]!==1029&&(pe[0]=1029,ye=!0);ye&&(t.isWebGL2?n.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Ee(C){return g!==C?(n.useProgram(C),g=C,!0):!1}const _e={[Fi]:32774,[Tp]:32778,[Ap]:32779};if(i)_e[Tl]=32775,_e[Al]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(_e[Tl]=C.MIN_EXT,_e[Al]=C.MAX_EXT)}const Ue={[Cp]:0,[Lp]:1,[Rp]:768,[tf]:770,[Op]:776,[Fp]:774,[Pp]:772,[Dp]:769,[nf]:771,[Np]:775,[Ip]:773};function Le(C,fe,pe,ye,me,be,ge,Ae){if(C===On){p===!0&&(K(3042),p=!1);return}if(p===!1&&(Se(3042),p=!0),C!==Ep){if(C!==d||Ae!==O){if((_!==Fi||T!==Fi)&&(n.blendEquation(32774),_=Fi,T=Fi),Ae)switch(C){case Hi:n.blendFuncSeparate(1,771,1,771);break;case Sl:n.blendFunc(1,1);break;case wl:n.blendFuncSeparate(0,769,0,1);break;case El:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Hi:n.blendFuncSeparate(770,771,1,771);break;case Sl:n.blendFunc(770,1);break;case wl:n.blendFuncSeparate(0,769,0,1);break;case El:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,A=null,b=null,D=null,d=C,O=Ae}return}me=me||fe,be=be||pe,ge=ge||ye,(fe!==_||me!==T)&&(n.blendEquationSeparate(_e[fe],_e[me]),_=fe,T=me),(pe!==E||ye!==A||be!==b||ge!==D)&&(n.blendFuncSeparate(Ue[pe],Ue[ye],Ue[be],Ue[ge]),E=pe,A=ye,b=be,D=ge),d=C,O=null}function S(C,fe){C.side===$i?K(2884):Se(2884);let pe=C.side===kt;fe&&(pe=!pe),L(pe),C.blending===Hi&&C.transparent===!1?Le(On):Le(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const ye=C.stencilWrite;c.setTest(ye),ye&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Z(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Se(32926):K(32926)}function L(C){y!==C&&(C?n.frontFace(2304):n.frontFace(2305),y=C)}function k(C){C!==yp?(Se(2884),C!==R&&(C===bl?n.cullFace(1029):C===bp?n.cullFace(1028):n.cullFace(1032))):K(2884),R=C}function Y(C){C!==q&&(N&&n.lineWidth(C),q=C)}function Z(C,fe,pe){C?(Se(32823),(I!==fe||de!==pe)&&(n.polygonOffset(fe,pe),I=fe,de=pe)):K(32823)}function ie(C){C?Se(3089):K(3089)}function re(C){C===void 0&&(C=33984+ne-1),W!==C&&(n.activeTexture(C),W=C)}function ae(C,fe){W===null&&re();let pe=V[W];pe===void 0&&(pe={type:void 0,texture:void 0},V[W]=pe),(pe.type!==C||pe.texture!==fe)&&(n.bindTexture(C,fe||Me[C]),pe.type=C,pe.texture=fe)}function le(){const C=V[W];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function v(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function x(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function P(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function B(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function M(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(C){he.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),he.copy(C))}function ce(C){se.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),se.copy(C))}function ue(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},W=null,V={},f={},h=new WeakMap,m=[],g=null,p=!1,d=null,_=null,E=null,A=null,T=null,b=null,D=null,O=!1,y=null,R=null,q=null,I=null,de=null,he.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Se,disable:K,bindFramebuffer:Oe,drawBuffers:we,useProgram:Ee,setBlending:Le,setMaterial:S,setFlipSided:L,setCullFace:k,setLineWidth:Y,setPolygonOffset:Z,setScissorTest:ie,activeTexture:re,bindTexture:ae,unbindTexture:le,compressedTexImage2D:v,texImage2D:ve,texImage3D:M,texStorage2D:$,texStorage3D:te,texSubImage2D:x,texSubImage3D:P,compressedTexSubImage2D:B,scissor:j,viewport:ce,reset:ue}}function iv(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(v,x){return _?new OffscreenCanvas(v,x):ws("canvas")}function A(v,x,P,B){let $=1;if((v.width>B||v.height>B)&&($=B/Math.max(v.width,v.height)),$<1||x===!0)if(typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&v instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&v instanceof ImageBitmap){const te=x?so:Math.floor,ve=te($*v.width),M=te($*v.height);p===void 0&&(p=E(ve,M));const j=P?E(ve,M):p;return j.width=ve,j.height=M,j.getContext("2d").drawImage(v,0,0,ve,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+ve+"x"+M+")."),j}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function T(v){return ec(v.width)&&ec(v.height)}function b(v){return a?!1:v.wrapS!==Ft||v.wrapT!==Ft||v.minFilter!==_t&&v.minFilter!==At}function D(v,x){return v.generateMipmaps&&x&&v.minFilter!==_t&&v.minFilter!==At}function O(v){n.generateMipmap(v)}function y(v,x,P,B,$=!1){if(a===!1)return x;if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let te=x;return x===6403&&(P===5126&&(te=33326),P===5131&&(te=33325),P===5121&&(te=33321)),x===33319&&(P===5126&&(te=33328),P===5131&&(te=33327),P===5121&&(te=33323)),x===6408&&(P===5126&&(te=34836),P===5131&&(te=34842),P===5121&&(te=B===$e&&$===!1?35907:32856),P===32819&&(te=32854),P===32820&&(te=32855)),(te===33325||te===33326||te===33327||te===33328||te===34842||te===34836)&&e.get("EXT_color_buffer_float"),te}function R(v,x,P){return D(v,P)===!0||v.isFramebufferTexture&&v.minFilter!==_t&&v.minFilter!==At?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function q(v){return v===_t||v===Cl||v===Ll?9728:9729}function I(v){const x=v.target;x.removeEventListener("dispose",I),ne(x),x.isVideoTexture&&g.delete(x)}function de(v){const x=v.target;x.removeEventListener("dispose",de),J(x)}function ne(v){const x=i.get(v);if(x.__webglInit===void 0)return;const P=v.source,B=d.get(P);if(B){const $=B[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&N(v),Object.keys(B).length===0&&d.delete(P)}i.remove(v)}function N(v){const x=i.get(v);n.deleteTexture(x.__webglTexture);const P=v.source,B=d.get(P);delete B[x.__cacheKey],o.memory.textures--}function J(v){const x=v.texture,P=i.get(v),B=i.get(x);if(B.__webglTexture!==void 0&&(n.deleteTexture(B.__webglTexture),o.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let $=0;$<6;$++)n.deleteFramebuffer(P.__webglFramebuffer[$]),P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[$]);else{if(n.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let $=0;$<P.__webglColorRenderbuffer.length;$++)P.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[$]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let $=0,te=x.length;$<te;$++){const ve=i.get(x[$]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(x[$])}i.remove(x),i.remove(v)}let G=0;function W(){G=0}function V(){const v=G;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),G+=1,v}function U(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.encoding),x.join()}function Q(v,x){const P=i.get(v);if(v.isVideoTexture&&ae(v),v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){const B=v.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(P,v,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,P.__webglTexture)}function he(v,x){const P=i.get(v);if(v.version>0&&P.__version!==v.version){we(P,v,x);return}t.activeTexture(33984+x),t.bindTexture(35866,P.__webglTexture)}function se(v,x){const P=i.get(v);if(v.version>0&&P.__version!==v.version){we(P,v,x);return}t.activeTexture(33984+x),t.bindTexture(32879,P.__webglTexture)}function oe(v,x){const P=i.get(v);if(v.version>0&&P.__version!==v.version){Ee(P,v,x);return}t.activeTexture(33984+x),t.bindTexture(34067,P.__webglTexture)}const Me={[no]:10497,[Ft]:33071,[io]:33648},Se={[_t]:9728,[Cl]:9984,[Ll]:9986,[At]:9729,[Kp]:9985,[Vs]:9987};function K(v,x,P){if(P?(n.texParameteri(v,10242,Me[x.wrapS]),n.texParameteri(v,10243,Me[x.wrapT]),(v===32879||v===35866)&&n.texParameteri(v,32882,Me[x.wrapR]),n.texParameteri(v,10240,Se[x.magFilter]),n.texParameteri(v,10241,Se[x.minFilter])):(n.texParameteri(v,10242,33071),n.texParameteri(v,10243,33071),(v===32879||v===35866)&&n.texParameteri(v,32882,33071),(x.wrapS!==Ft||x.wrapT!==Ft)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(v,10240,q(x.magFilter)),n.texParameteri(v,10241,q(x.minFilter)),x.minFilter!==_t&&x.minFilter!==At&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");if(x.type===Qn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(v,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Oe(v,x){let P=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",I));const B=x.source;let $=d.get(B);$===void 0&&($={},d.set(B,$));const te=U(x);if(te!==v.__cacheKey){$[te]===void 0&&($[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),$[te].usedTimes++;const ve=$[v.__cacheKey];ve!==void 0&&($[v.__cacheKey].usedTimes--,ve.usedTimes===0&&N(x)),v.__cacheKey=te,v.__webglTexture=$[te].texture}return P}function we(v,x,P){let B=3553;x.isDataArrayTexture&&(B=35866),x.isData3DTexture&&(B=32879);const $=Oe(v,x),te=x.source;if(t.activeTexture(33984+P),t.bindTexture(B,v.__webglTexture),te.version!==te.__currentVersion||$===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const ve=b(x)&&T(x.image)===!1;let M=A(x.image,ve,!1,u);M=le(x,M);const j=T(M)||a,ce=s.convert(x.format,x.encoding);let ue=s.convert(x.type),C=y(x.internalFormat,ce,ue,x.encoding,x.isVideoTexture);K(B,x,j);let fe;const pe=x.mipmaps,ye=a&&x.isVideoTexture!==!0,me=te.__currentVersion===void 0||$===!0,be=R(x,M,j);if(x.isDepthTexture)C=6402,a?x.type===Qn?C=36012:x.type===Jn?C=33190:x.type===Vi?C=35056:C=33189:x.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ri&&C===6402&&x.type!==sf&&x.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Jn,ue=s.convert(x.type)),x.format===Ki&&C===6402&&(C=34041,x.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Vi,ue=s.convert(x.type))),me&&(ye?t.texStorage2D(3553,1,C,M.width,M.height):t.texImage2D(3553,0,C,M.width,M.height,0,ce,ue,null));else if(x.isDataTexture)if(pe.length>0&&j){ye&&me&&t.texStorage2D(3553,be,C,pe[0].width,pe[0].height);for(let ge=0,Ae=pe.length;ge<Ae;ge++)fe=pe[ge],ye?t.texSubImage2D(3553,ge,0,0,fe.width,fe.height,ce,ue,fe.data):t.texImage2D(3553,ge,C,fe.width,fe.height,0,ce,ue,fe.data);x.generateMipmaps=!1}else ye?(me&&t.texStorage2D(3553,be,C,M.width,M.height),t.texSubImage2D(3553,0,0,0,M.width,M.height,ce,ue,M.data)):t.texImage2D(3553,0,C,M.width,M.height,0,ce,ue,M.data);else if(x.isCompressedTexture){ye&&me&&t.texStorage2D(3553,be,C,pe[0].width,pe[0].height);for(let ge=0,Ae=pe.length;ge<Ae;ge++)fe=pe[ge],x.format!==zt?ce!==null?ye?t.compressedTexSubImage2D(3553,ge,0,0,fe.width,fe.height,ce,fe.data):t.compressedTexImage2D(3553,ge,C,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage2D(3553,ge,0,0,fe.width,fe.height,ce,ue,fe.data):t.texImage2D(3553,ge,C,fe.width,fe.height,0,ce,ue,fe.data)}else if(x.isDataArrayTexture)ye?(me&&t.texStorage3D(35866,be,C,M.width,M.height,M.depth),t.texSubImage3D(35866,0,0,0,0,M.width,M.height,M.depth,ce,ue,M.data)):t.texImage3D(35866,0,C,M.width,M.height,M.depth,0,ce,ue,M.data);else if(x.isData3DTexture)ye?(me&&t.texStorage3D(32879,be,C,M.width,M.height,M.depth),t.texSubImage3D(32879,0,0,0,0,M.width,M.height,M.depth,ce,ue,M.data)):t.texImage3D(32879,0,C,M.width,M.height,M.depth,0,ce,ue,M.data);else if(x.isFramebufferTexture){if(me)if(ye)t.texStorage2D(3553,be,C,M.width,M.height);else{let ge=M.width,Ae=M.height;for(let Ve=0;Ve<be;Ve++)t.texImage2D(3553,Ve,C,ge,Ae,0,ce,ue,null),ge>>=1,Ae>>=1}}else if(pe.length>0&&j){ye&&me&&t.texStorage2D(3553,be,C,pe[0].width,pe[0].height);for(let ge=0,Ae=pe.length;ge<Ae;ge++)fe=pe[ge],ye?t.texSubImage2D(3553,ge,0,0,ce,ue,fe):t.texImage2D(3553,ge,C,ce,ue,fe);x.generateMipmaps=!1}else ye?(me&&t.texStorage2D(3553,be,C,M.width,M.height),t.texSubImage2D(3553,0,0,0,ce,ue,M)):t.texImage2D(3553,0,C,ce,ue,M);D(x,j)&&O(B),te.__currentVersion=te.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function Ee(v,x,P){if(x.image.length!==6)return;const B=Oe(v,x),$=x.source;if(t.activeTexture(33984+P),t.bindTexture(34067,v.__webglTexture),$.version!==$.__currentVersion||B===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const te=x.isCompressedTexture||x.image[0].isCompressedTexture,ve=x.image[0]&&x.image[0].isDataTexture,M=[];for(let ge=0;ge<6;ge++)!te&&!ve?M[ge]=A(x.image[ge],!1,!0,c):M[ge]=ve?x.image[ge].image:x.image[ge],M[ge]=le(x,M[ge]);const j=M[0],ce=T(j)||a,ue=s.convert(x.format,x.encoding),C=s.convert(x.type),fe=y(x.internalFormat,ue,C,x.encoding),pe=a&&x.isVideoTexture!==!0,ye=$.__currentVersion===void 0||B===!0;let me=R(x,j,ce);K(34067,x,ce);let be;if(te){pe&&ye&&t.texStorage2D(34067,me,fe,j.width,j.height);for(let ge=0;ge<6;ge++){be=M[ge].mipmaps;for(let Ae=0;Ae<be.length;Ae++){const Ve=be[Ae];x.format!==zt?ue!==null?pe?t.compressedTexSubImage2D(34069+ge,Ae,0,0,Ve.width,Ve.height,ue,Ve.data):t.compressedTexImage2D(34069+ge,Ae,fe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pe?t.texSubImage2D(34069+ge,Ae,0,0,Ve.width,Ve.height,ue,C,Ve.data):t.texImage2D(34069+ge,Ae,fe,Ve.width,Ve.height,0,ue,C,Ve.data)}}}else{be=x.mipmaps,pe&&ye&&(be.length>0&&me++,t.texStorage2D(34067,me,fe,M[0].width,M[0].height));for(let ge=0;ge<6;ge++)if(ve){pe?t.texSubImage2D(34069+ge,0,0,0,M[ge].width,M[ge].height,ue,C,M[ge].data):t.texImage2D(34069+ge,0,fe,M[ge].width,M[ge].height,0,ue,C,M[ge].data);for(let Ae=0;Ae<be.length;Ae++){const We=be[Ae].image[ge].image;pe?t.texSubImage2D(34069+ge,Ae+1,0,0,We.width,We.height,ue,C,We.data):t.texImage2D(34069+ge,Ae+1,fe,We.width,We.height,0,ue,C,We.data)}}else{pe?t.texSubImage2D(34069+ge,0,0,0,ue,C,M[ge]):t.texImage2D(34069+ge,0,fe,ue,C,M[ge]);for(let Ae=0;Ae<be.length;Ae++){const Ve=be[Ae];pe?t.texSubImage2D(34069+ge,Ae+1,0,0,ue,C,Ve.image[ge]):t.texImage2D(34069+ge,Ae+1,fe,ue,C,Ve.image[ge])}}}D(x,ce)&&O(34067),$.__currentVersion=$.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function _e(v,x,P,B,$){const te=s.convert(P.format,P.encoding),ve=s.convert(P.type),M=y(P.internalFormat,te,ve,P.encoding);i.get(x).__hasExternalTextures||($===32879||$===35866?t.texImage3D($,0,M,x.width,x.height,x.depth,0,te,ve,null):t.texImage2D($,0,M,x.width,x.height,0,te,ve,null)),t.bindFramebuffer(36160,v),re(x)?h.framebufferTexture2DMultisampleEXT(36160,B,$,i.get(P).__webglTexture,0,ie(x)):n.framebufferTexture2D(36160,B,$,i.get(P).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(v,x,P){if(n.bindRenderbuffer(36161,v),x.depthBuffer&&!x.stencilBuffer){let B=33189;if(P||re(x)){const $=x.depthTexture;$&&$.isDepthTexture&&($.type===Qn?B=36012:$.type===Jn&&(B=33190));const te=ie(x);re(x)?h.renderbufferStorageMultisampleEXT(36161,te,B,x.width,x.height):n.renderbufferStorageMultisample(36161,te,B,x.width,x.height)}else n.renderbufferStorage(36161,B,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,v)}else if(x.depthBuffer&&x.stencilBuffer){const B=ie(x);P&&re(x)===!1?n.renderbufferStorageMultisample(36161,B,35056,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(36161,B,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,v)}else{const B=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let $=0;$<B.length;$++){const te=B[$],ve=s.convert(te.format,te.encoding),M=s.convert(te.type),j=y(te.internalFormat,ve,M,te.encoding),ce=ie(x);P&&re(x)===!1?n.renderbufferStorageMultisample(36161,ce,j,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(36161,ce,j,x.width,x.height):n.renderbufferStorage(36161,j,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function Le(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);const B=i.get(x.depthTexture).__webglTexture,$=ie(x);if(x.depthTexture.format===ri)re(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,B,0,$):n.framebufferTexture2D(36160,36096,3553,B,0);else if(x.depthTexture.format===Ki)re(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,B,0,$):n.framebufferTexture2D(36160,33306,3553,B,0);else throw new Error("Unknown depthTexture format")}function S(v){const x=i.get(v),P=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Le(x.__webglFramebuffer,v)}else if(P){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(36160,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]=n.createRenderbuffer(),Ue(x.__webglDepthbuffer[B],v,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Ue(x.__webglDepthbuffer,v,!1);t.bindFramebuffer(36160,null)}function L(v,x,P){const B=i.get(v);x!==void 0&&_e(B.__webglFramebuffer,v,v.texture,36064,3553),P!==void 0&&S(v)}function k(v){const x=v.texture,P=i.get(v),B=i.get(x);v.addEventListener("dispose",de),v.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=x.version,o.memory.textures++);const $=v.isWebGLCubeRenderTarget===!0,te=v.isWebGLMultipleRenderTargets===!0,ve=T(v)||a;if($){P.__webglFramebuffer=[];for(let M=0;M<6;M++)P.__webglFramebuffer[M]=n.createFramebuffer()}else{if(P.__webglFramebuffer=n.createFramebuffer(),te)if(r.drawBuffers){const M=v.texture;for(let j=0,ce=M.length;j<ce;j++){const ue=i.get(M[j]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&v.samples>0&&re(v)===!1){const M=te?x:[x];P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer);for(let j=0;j<M.length;j++){const ce=M[j];P.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(36161,P.__webglColorRenderbuffer[j]);const ue=s.convert(ce.format,ce.encoding),C=s.convert(ce.type),fe=y(ce.internalFormat,ue,C,ce.encoding),pe=ie(v);n.renderbufferStorageMultisample(36161,pe,fe,v.width,v.height),n.framebufferRenderbuffer(36160,36064+j,36161,P.__webglColorRenderbuffer[j])}n.bindRenderbuffer(36161,null),v.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(P.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(36160,null)}}if($){t.bindTexture(34067,B.__webglTexture),K(34067,x,ve);for(let M=0;M<6;M++)_e(P.__webglFramebuffer[M],v,x,36064,34069+M);D(x,ve)&&O(34067),t.unbindTexture()}else if(te){const M=v.texture;for(let j=0,ce=M.length;j<ce;j++){const ue=M[j],C=i.get(ue);t.bindTexture(3553,C.__webglTexture),K(3553,ue,ve),_e(P.__webglFramebuffer,v,ue,36064+j,3553),D(ue,ve)&&O(3553)}t.unbindTexture()}else{let M=3553;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(a?M=v.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(M,B.__webglTexture),K(M,x,ve),_e(P.__webglFramebuffer,v,x,36064,M),D(x,ve)&&O(M),t.unbindTexture()}v.depthBuffer&&S(v)}function Y(v){const x=T(v)||a,P=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let B=0,$=P.length;B<$;B++){const te=P[B];if(D(te,x)){const ve=v.isWebGLCubeRenderTarget?34067:3553,M=i.get(te).__webglTexture;t.bindTexture(ve,M),O(ve),t.unbindTexture()}}}function Z(v){if(a&&v.samples>0&&re(v)===!1){const x=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],P=v.width,B=v.height;let $=16384;const te=[],ve=v.stencilBuffer?33306:36096,M=i.get(v),j=v.isWebGLMultipleRenderTargets===!0;if(j)for(let ce=0;ce<x.length;ce++)t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,M.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,M.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,M.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){te.push(36064+ce),v.depthBuffer&&te.push(ve);const ue=M.__ignoreDepthValues!==void 0?M.__ignoreDepthValues:!1;if(ue===!1&&(v.depthBuffer&&($|=256),v.stencilBuffer&&($|=1024)),j&&n.framebufferRenderbuffer(36008,36064,36161,M.__webglColorRenderbuffer[ce]),ue===!0&&(n.invalidateFramebuffer(36008,[ve]),n.invalidateFramebuffer(36009,[ve])),j){const C=i.get(x[ce]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,C,0)}n.blitFramebuffer(0,0,P,B,0,0,P,B,$,9728),m&&n.invalidateFramebuffer(36008,te)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),j)for(let ce=0;ce<x.length;ce++){t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ce,36161,M.__webglColorRenderbuffer[ce]);const ue=i.get(x[ce]).__webglTexture;t.bindFramebuffer(36160,M.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ce,3553,ue,0)}t.bindFramebuffer(36009,M.__webglMultisampledFramebuffer)}}function ie(v){return Math.min(f,v.samples)}function re(v){const x=i.get(v);return a&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(v){const x=o.render.frame;g.get(v)!==x&&(g.set(v,x),v.update())}function le(v,x){const P=v.encoding,B=v.format,$=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===ro||P!==ci&&(P===$e?a===!1?e.has("EXT_sRGB")===!0&&B===zt?(v.format=ro,v.minFilter=At,v.generateMipmaps=!1):x=lf.sRGBToLinear(x):(B!==zt||$!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",P)),x}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=Q,this.setTexture2DArray=he,this.setTexture3D=se,this.setTextureCube=oe,this.rebindTextures=L,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=S,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=re}function rv(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===li)return 5121;if(s===tm)return 32819;if(s===nm)return 32820;if(s===Jp)return 5120;if(s===Qp)return 5122;if(s===sf)return 5123;if(s===em)return 5124;if(s===Jn)return 5125;if(s===Qn)return 5126;if(s===Er)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===im)return 6406;if(s===zt)return 6408;if(s===sm)return 6409;if(s===am)return 6410;if(s===ri)return 6402;if(s===Ki)return 34041;if(s===om)return 6403;if(s===rm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ro)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===lm)return 36244;if(s===cm)return 33319;if(s===um)return 33320;if(s===fm)return 36249;if(s===ta||s===na||s===ia||s===ra)if(o===$e)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ta)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ta)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ia)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ra)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rl||s===Dl||s===Pl||s===Il)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Rl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Il)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fl||s===Nl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Fl)return o===$e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Nl)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ol||s===zl||s===Ul||s===Bl||s===kl||s===Gl||s===Hl||s===Vl||s===Wl||s===ql||s===jl||s===Xl||s===$l||s===Yl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ol)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zl)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ul)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Bl)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kl)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gl)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hl)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vl)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wl)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ql)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jl)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xl)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$l)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Yl)return o===$e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Zl)return o===$e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Vi?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class sv extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gr extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const av={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(av))),c&&e.hand){o=!0;for(const p of e.hand.values()){const d=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const E=new gr;E.matrixAutoUpdate=!1,E.visible=!1,c.joints[p.jointName]=E,c.add(E)}const _=c.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class ov extends Gt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ri,u!==ri&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ri&&(i=Jn),i===void 0&&u===Ki&&(i=Vi),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1}}class lv extends fi{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let p=null,d=null;const _=[],E=new Map,A=new Ct;A.layers.enable(1),A.viewport=new ot;const T=new Ct;T.layers.enable(2),T.viewport=new ot;const b=[A,T],D=new sv;D.layers.enable(1),D.layers.enable(2);let O=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Q=_[U];return Q===void 0&&(Q=new Ia,_[U]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(U){let Q=_[U];return Q===void 0&&(Q=new Ia,_[U]=Q),Q.getGripSpace()},this.getHand=function(U){let Q=_[U];return Q===void 0&&(Q=new Ia,_[U]=Q),Q.getHandSpace()};function R(U){const Q=E.get(U.inputSource);Q!==void 0&&Q.dispatchEvent({type:U.type,data:U.inputSource})}function q(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",I),E.forEach(function(U,Q){U!==void 0&&U.disconnect(Q)}),E.clear(),O=null,y=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",q),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:h}),d=new zn(h.framebufferWidth,h.framebufferHeight,{format:zt,type:li,encoding:e.outputEncoding})}else{let Q=null,he=null,se=null;g.depth&&(se=g.stencil?35056:33190,Q=g.stencil?Ki:ri,he=g.stencil?Vi:Jn);const oe={colorFormat:e.outputEncoding===$e?35907:32856,depthFormat:se,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),d=new zn(f.textureWidth,f.textureHeight,{format:zt,type:li,depthTexture:new ov(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Me=e.properties.get(d);Me.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(U){const Q=r.inputSources;for(let he=0;he<Q.length;he++){const se=Q[he].handedness==="right"?1:0;E.set(Q[he],_[se])}for(let he=0;he<U.removed.length;he++){const se=U.removed[he],oe=E.get(se);oe&&(oe.dispatchEvent({type:"disconnected",data:se}),E.delete(se))}for(let he=0;he<U.added.length;he++){const se=U.added[he],oe=E.get(se);oe&&oe.dispatchEvent({type:"connected",data:se})}}const de=new F,ne=new F;function N(U,Q,he){de.setFromMatrixPosition(Q.matrixWorld),ne.setFromMatrixPosition(he.matrixWorld);const se=de.distanceTo(ne),oe=Q.projectionMatrix.elements,Me=he.projectionMatrix.elements,Se=oe[14]/(oe[10]-1),K=oe[14]/(oe[10]+1),Oe=(oe[9]+1)/oe[5],we=(oe[9]-1)/oe[5],Ee=(oe[8]-1)/oe[0],_e=(Me[8]+1)/Me[0],Ue=Se*Ee,Le=Se*_e,S=se/(-Ee+_e),L=S*-Ee;Q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(L),U.translateZ(S),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const k=Se+S,Y=K+S,Z=Ue-L,ie=Le+(se-L),re=Oe*K/Y*k,ae=we*K/Y*k;U.projectionMatrix.makePerspective(Z,ie,re,ae,k,Y)}function J(U,Q){Q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;D.near=T.near=A.near=U.near,D.far=T.far=A.far=U.far,(O!==D.near||y!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,y=D.far);const Q=U.parent,he=D.cameras;J(D,Q);for(let oe=0;oe<he.length;oe++)J(he[oe],Q);D.matrixWorld.decompose(D.position,D.quaternion,D.scale),U.position.copy(D.position),U.quaternion.copy(D.quaternion),U.scale.copy(D.scale),U.matrix.copy(D.matrix),U.matrixWorld.copy(D.matrixWorld);const se=U.children;for(let oe=0,Me=se.length;oe<Me;oe++)se[oe].updateMatrixWorld(!0);he.length===2?N(D,A,T):D.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return D},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(U){f!==null&&(f.fixedFoveation=U),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=U)};let G=null;function W(U,Q){if(c=Q.getViewerPose(l||o),m=Q,c!==null){const se=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let oe=!1;se.length!==D.cameras.length&&(D.cameras.length=0,oe=!0);for(let Me=0;Me<se.length;Me++){const Se=se[Me];let K=null;if(h!==null)K=h.getViewport(Se);else{const we=u.getViewSubImage(f,Se);K=we.viewport,Me===0&&(e.setRenderTargetTextures(d,we.colorTexture,f.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(d))}let Oe=b[Me];Oe===void 0&&(Oe=new Ct,Oe.layers.enable(Me),Oe.viewport=new ot,b[Me]=Oe),Oe.matrix.fromArray(Se.transform.matrix),Oe.projectionMatrix.fromArray(Se.projectionMatrix),Oe.viewport.set(K.x,K.y,K.width,K.height),Me===0&&D.matrix.copy(Oe.matrix),oe===!0&&D.cameras.push(Oe)}}const he=r.inputSources;for(let se=0;se<_.length;se++){const oe=he[se],Me=E.get(oe);Me!==void 0&&Me.update(oe,Q,l||o)}G&&G(U,Q),m=null}const V=new xf;V.setAnimationLoop(W),this.setAnimationLoop=function(U){G=U},this.dispose=function(){}}}function cv(n,e){function t(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,E,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,A)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?a(p,d,_,E):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===kt&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===kt&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const T=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*T}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let E;d.map?E=d.map:d.specularMap?E=d.specularMap:d.displacementMap?E=d.displacementMap:d.normalMap?E=d.normalMap:d.bumpMap?E=d.bumpMap:d.roughnessMap?E=d.roughnessMap:d.metalnessMap?E=d.metalnessMap:d.alphaMap?E=d.alphaMap:d.emissiveMap?E=d.emissiveMap:d.clearcoatMap?E=d.clearcoatMap:d.clearcoatNormalMap?E=d.clearcoatNormalMap:d.clearcoatRoughnessMap?E=d.clearcoatRoughnessMap:d.iridescenceMap?E=d.iridescenceMap:d.iridescenceThicknessMap?E=d.iridescenceThicknessMap:d.specularIntensityMap?E=d.specularIntensityMap:d.specularColorMap?E=d.specularColorMap:d.transmissionMap?E=d.transmissionMap:d.thicknessMap?E=d.thicknessMap:d.sheenColorMap?E=d.sheenColorMap:d.sheenRoughnessMap&&(E=d.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix));let A;d.aoMap?A=d.aoMap:d.lightMap&&(A=d.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uv2Transform.value.copy(A.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function a(p,d,_,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=E*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let A;d.map?A=d.map:d.alphaMap&&(A=d.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===kt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function uv(){const n=ws("canvas");return n.style.display="block",n}function Tf(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:uv(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ci,this.physicallyCorrectLights=!1,this.toneMapping=gn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,E=0,A=null,T=-1,b=null;const D=new ot,O=new ot;let y=null,R=e.width,q=e.height,I=1,de=null,ne=null;const N=new ot(0,0,R,q),J=new ot(0,0,R,q);let G=!1;const W=new _f;let V=!1,U=!1,Q=null;const he=new it,se=new De,oe=new F,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return A===null?I:1}let K=t;function Oe(w,z){for(let X=0;X<w.length;X++){const H=w[X],ee=e.getContext(H,z);if(ee!==null)return ee}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",C,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",pe,!1),K===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),K=Oe(z,w),K===null)throw Oe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let we,Ee,_e,Ue,Le,S,L,k,Y,Z,ie,re,ae,le,v,x,P,B,$,te,ve,M,j;function ce(){we=new S_(K),Ee=new g_(K,we,n),we.init(Ee),M=new rv(K,we,Ee),_e=new nv(K,we,Ee),Ue=new T_,Le=new Wx,S=new iv(K,we,_e,Le,Ee,M,Ue),L=new x_(p),k=new b_(p),Y=new zm(K,Ee),j=new p_(K,we,Y,Ee),Z=new w_(K,Y,Ue,j),ie=new R_(K,Z,Y,Ue),$=new L_(K,Ee,S),x=new __(Le),re=new Vx(p,L,k,we,Ee,j,x),ae=new cv(p,Le),le=new jx,v=new Jx(we,Ee),B=new d_(p,L,_e,ie,u,o),P=new tv(p,ie,Ee),te=new m_(K,we,Ue,Ee),ve=new E_(K,we,Ue,Ee),Ue.programs=re.programs,p.capabilities=Ee,p.extensions=we,p.properties=Le,p.renderLists=le,p.shadowMap=P,p.state=_e,p.info=Ue}ce();const ue=new lv(p,K);this.xr=ue,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const w=we.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=we.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(R,q,!1))},this.getSize=function(w){return w.set(R,q)},this.setSize=function(w,z,X){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=w,q=z,e.width=Math.floor(w*I),e.height=Math.floor(z*I),X!==!1&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(R*I,q*I).floor()},this.setDrawingBufferSize=function(w,z,X){R=w,q=z,I=X,e.width=Math.floor(w*X),e.height=Math.floor(z*X),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,z,X,H){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,z,X,H),_e.viewport(D.copy(N).multiplyScalar(I).floor())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,z,X,H){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,z,X,H),_e.scissor(O.copy(J).multiplyScalar(I).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(w){_e.setScissorTest(G=w)},this.setOpaqueSort=function(w){de=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor.apply(B,arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha.apply(B,arguments)},this.clear=function(w=!0,z=!0,X=!0){let H=0;w&&(H|=16384),z&&(H|=256),X&&(H|=1024),K.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",C,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),le.dispose(),v.dispose(),Le.dispose(),L.dispose(),k.dispose(),ie.dispose(),j.dispose(),re.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ve),ue.removeEventListener("sessionend",We),Q&&(Q.dispose(),Q=null),lt.stop()};function C(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=Ue.autoReset,z=P.enabled,X=P.autoUpdate,H=P.needsUpdate,ee=P.type;ce(),Ue.autoReset=w,P.enabled=z,P.autoUpdate=X,P.needsUpdate=H,P.type=ee}function pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ye(w){const z=w.target;z.removeEventListener("dispose",ye),me(z)}function me(w){be(w),Le.remove(w)}function be(w){const z=Le.get(w).programs;z!==void 0&&(z.forEach(function(X){re.releaseProgram(X)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,X,H,ee,Te){z===null&&(z=Me);const Re=ee.isMesh&&ee.matrixWorld.determinant()<0,Ne=Hf(w,z,X,H,ee);_e.setMaterial(H,Re);let Fe=X.index;const qe=X.attributes.position;if(Fe===null){if(qe===void 0||qe.count===0)return}else if(Fe.count===0)return;let ke=1;H.wireframe===!0&&(Fe=Z.getWireframeAttribute(X),ke=2),j.setup(ee,H,Ne,X,Fe);let Ge,Ye=te;Fe!==null&&(Ge=Y.get(Fe),Ye=ve,Ye.setIndex(Ge));const Bn=Fe!==null?Fe.count:qe.count,hi=X.drawRange.start*ke,di=X.drawRange.count*ke,Vt=Te!==null?Te.start*ke:0,He=Te!==null?Te.count*ke:1/0,pi=Math.max(hi,Vt),Ze=Math.min(Bn,hi+di,Vt+He)-1,Wt=Math.max(0,Ze-pi+1);if(Wt!==0){if(ee.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*Se()),Ye.setMode(1)):Ye.setMode(4);else if(ee.isLine){let yn=H.linewidth;yn===void 0&&(yn=1),_e.setLineWidth(yn*Se()),ee.isLineSegments?Ye.setMode(1):ee.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else ee.isPoints?Ye.setMode(0):ee.isSprite&&Ye.setMode(4);if(ee.isInstancedMesh)Ye.renderInstances(pi,Wt,ee.count);else if(X.isInstancedBufferGeometry){const yn=Math.min(X.instanceCount,X._maxInstanceCount);Ye.renderInstances(pi,Wt,yn)}else Ye.render(pi,Wt)}},this.compile=function(w,z){h=v.get(w),h.init(),g.push(h),w.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(h.pushLight(X),X.castShadow&&h.pushShadow(X))}),h.setupLights(p.physicallyCorrectLights),w.traverse(function(X){const H=X.material;if(H)if(Array.isArray(H))for(let ee=0;ee<H.length;ee++){const Te=H[ee];js(Te,w,X)}else js(H,w,X)}),g.pop(),h=null};let ge=null;function Ae(w){ge&&ge(w)}function Ve(){lt.stop()}function We(){lt.start()}const lt=new xf;lt.setAnimationLoop(Ae),typeof self!="undefined"&&lt.setContext(self),this.setAnimationLoop=function(w){ge=w,ue.setAnimationLoop(w),w===null?lt.stop():lt.start()},ue.addEventListener("sessionstart",Ve),ue.addEventListener("sessionend",We),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(z),z=ue.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,z,A),h=v.get(w,g.length),h.init(),g.push(h),he.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(he),U=this.localClippingEnabled,V=x.init(this.clippingPlanes,U,z),f=le.get(w,m.length),f.init(),m.push(f),Ht(w,z,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(de,ne),V===!0&&x.beginShadows();const X=h.state.shadowsArray;if(P.render(X,w,z),V===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),B.render(f,w),h.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const H=z.cameras;for(let ee=0,Te=H.length;ee<Te;ee++){const Re=H[ee];qo(f,w,Re,Re.viewport)}}else qo(f,w,z);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(p,w,z),j.resetDefaultState(),T=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ht(w,z,X,H){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){H&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const Re=ie.update(w),Ne=w.material;Ne.visible&&f.push(w,Re,Ne,X,oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ue.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ue.render.frame),!w.frustumCulled||W.intersectsObject(w))){H&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const Re=ie.update(w),Ne=w.material;if(Array.isArray(Ne)){const Fe=Re.groups;for(let qe=0,ke=Fe.length;qe<ke;qe++){const Ge=Fe[qe],Ye=Ne[Ge.materialIndex];Ye&&Ye.visible&&f.push(w,Re,Ye,X,oe.z,Ge)}}else Ne.visible&&f.push(w,Re,Ne,X,oe.z,null)}}const Te=w.children;for(let Re=0,Ne=Te.length;Re<Ne;Re++)Ht(Te[Re],z,X,H)}function qo(w,z,X,H){const ee=w.opaque,Te=w.transmissive,Re=w.transparent;h.setupLightsView(X),Te.length>0&&kf(ee,z,X),H&&_e.viewport(D.copy(H)),ee.length>0&&Nr(ee,z,X),Te.length>0&&Nr(Te,z,X),Re.length>0&&Nr(Re,z,X),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function kf(w,z,X){const H=Ee.isWebGL2;Q===null&&(Q=new zn(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Er:li,minFilter:Vs,samples:H&&s===!0?4:0})),p.getDrawingBufferSize(se),H?Q.setSize(se.x,se.y):Q.setSize(so(se.x),so(se.y));const ee=p.getRenderTarget();p.setRenderTarget(Q),p.clear();const Te=p.toneMapping;p.toneMapping=gn,Nr(w,z,X),p.toneMapping=Te,S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q),p.setRenderTarget(ee)}function Nr(w,z,X){const H=z.isScene===!0?z.overrideMaterial:null;for(let ee=0,Te=w.length;ee<Te;ee++){const Re=w[ee],Ne=Re.object,Fe=Re.geometry,qe=H===null?Re.material:H,ke=Re.group;Ne.layers.test(X.layers)&&Gf(Ne,z,X,Fe,qe,ke)}}function Gf(w,z,X,H,ee,Te){w.onBeforeRender(p,z,X,H,ee,Te),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(p,z,X,H,w,Te),ee.transparent===!0&&ee.side===$i?(ee.side=kt,ee.needsUpdate=!0,p.renderBufferDirect(X,z,H,ee,w,Te),ee.side=wr,ee.needsUpdate=!0,p.renderBufferDirect(X,z,H,ee,w,Te),ee.side=$i):p.renderBufferDirect(X,z,H,ee,w,Te),w.onAfterRender(p,z,X,H,ee,Te)}function js(w,z,X){z.isScene!==!0&&(z=Me);const H=Le.get(w),ee=h.state.lights,Te=h.state.shadowsArray,Re=ee.state.version,Ne=re.getParameters(w,ee.state,Te,z,X),Fe=re.getProgramCacheKey(Ne);let qe=H.programs;H.environment=w.isMeshStandardMaterial?z.environment:null,H.fog=z.fog,H.envMap=(w.isMeshStandardMaterial?k:L).get(w.envMap||H.environment),qe===void 0&&(w.addEventListener("dispose",ye),qe=new Map,H.programs=qe);let ke=qe.get(Fe);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===Re)return jo(w,Ne),ke}else Ne.uniforms=re.getUniforms(w),w.onBuild(X,Ne,p),w.onBeforeCompile(Ne,p),ke=re.acquireProgram(Ne,Fe),qe.set(Fe,ke),H.uniforms=Ne.uniforms;const Ge=H.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=x.uniform),jo(w,Ne),H.needsLights=Wf(w),H.lightsStateVersion=Re,H.needsLights&&(Ge.ambientLightColor.value=ee.state.ambient,Ge.lightProbe.value=ee.state.probe,Ge.directionalLights.value=ee.state.directional,Ge.directionalLightShadows.value=ee.state.directionalShadow,Ge.spotLights.value=ee.state.spot,Ge.spotLightShadows.value=ee.state.spotShadow,Ge.rectAreaLights.value=ee.state.rectArea,Ge.ltc_1.value=ee.state.rectAreaLTC1,Ge.ltc_2.value=ee.state.rectAreaLTC2,Ge.pointLights.value=ee.state.point,Ge.pointLightShadows.value=ee.state.pointShadow,Ge.hemisphereLights.value=ee.state.hemi,Ge.directionalShadowMap.value=ee.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ge.spotShadowMap.value=ee.state.spotShadowMap,Ge.spotShadowMatrix.value=ee.state.spotShadowMatrix,Ge.pointShadowMap.value=ee.state.pointShadowMap,Ge.pointShadowMatrix.value=ee.state.pointShadowMatrix);const Ye=ke.getUniforms(),Bn=gs.seqWithValue(Ye.seq,Ge);return H.currentProgram=ke,H.uniformsList=Bn,ke}function jo(w,z){const X=Le.get(w);X.outputEncoding=z.outputEncoding,X.instancing=z.instancing,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Hf(w,z,X,H,ee){z.isScene!==!0&&(z=Me),S.resetTextureUnits();const Te=z.fog,Re=H.isMeshStandardMaterial?z.environment:null,Ne=A===null?p.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:ci,Fe=(H.isMeshStandardMaterial?k:L).get(H.envMap||Re),qe=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!H.normalMap&&!!X.attributes.tangent,Ge=!!X.morphAttributes.position,Ye=!!X.morphAttributes.normal,Bn=!!X.morphAttributes.color,hi=H.toneMapped?p.toneMapping:gn,di=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Vt=di!==void 0?di.length:0,He=Le.get(H),pi=h.state.lights;if(V===!0&&(U===!0||w!==b)){const qt=w===b&&H.id===T;x.setState(H,w,qt)}let Ze=!1;H.version===He.__version?(He.needsLights&&He.lightsStateVersion!==pi.state.version||He.outputEncoding!==Ne||ee.isInstancedMesh&&He.instancing===!1||!ee.isInstancedMesh&&He.instancing===!0||ee.isSkinnedMesh&&He.skinning===!1||!ee.isSkinnedMesh&&He.skinning===!0||He.envMap!==Fe||H.fog===!0&&He.fog!==Te||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==x.numPlanes||He.numIntersection!==x.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==ke||He.morphTargets!==Ge||He.morphNormals!==Ye||He.morphColors!==Bn||He.toneMapping!==hi||Ee.isWebGL2===!0&&He.morphTargetsCount!==Vt)&&(Ze=!0):(Ze=!0,He.__version=H.version);let Wt=He.currentProgram;Ze===!0&&(Wt=js(H,z,ee));let yn=!1,ar=!1,Xs=!1;const ct=Wt.getUniforms(),or=He.uniforms;if(_e.useProgram(Wt.program)&&(yn=!0,ar=!0,Xs=!0),H.id!==T&&(T=H.id,ar=!0),yn||b!==w){if(ct.setValue(K,"projectionMatrix",w.projectionMatrix),Ee.logarithmicDepthBuffer&&ct.setValue(K,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),b!==w&&(b=w,ar=!0,Xs=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const qt=ct.map.cameraPosition;qt!==void 0&&qt.setValue(K,oe.setFromMatrixPosition(w.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(K,"isOrthographic",w.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||ee.isSkinnedMesh)&&ct.setValue(K,"viewMatrix",w.matrixWorldInverse)}if(ee.isSkinnedMesh){ct.setOptional(K,ee,"bindMatrix"),ct.setOptional(K,ee,"bindMatrixInverse");const qt=ee.skeleton;qt&&(Ee.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),ct.setValue(K,"boneTexture",qt.boneTexture,S),ct.setValue(K,"boneTextureSize",qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const $s=X.morphAttributes;return($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&Ee.isWebGL2===!0)&&$.update(ee,X,H,Wt),(ar||He.receiveShadow!==ee.receiveShadow)&&(He.receiveShadow=ee.receiveShadow,ct.setValue(K,"receiveShadow",ee.receiveShadow)),ar&&(ct.setValue(K,"toneMappingExposure",p.toneMappingExposure),He.needsLights&&Vf(or,Xs),Te&&H.fog===!0&&ae.refreshFogUniforms(or,Te),ae.refreshMaterialUniforms(or,H,I,q,Q),gs.upload(K,He.uniformsList,or,S)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(gs.upload(K,He.uniformsList,or,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(K,"center",ee.center),ct.setValue(K,"modelViewMatrix",ee.modelViewMatrix),ct.setValue(K,"normalMatrix",ee.normalMatrix),ct.setValue(K,"modelMatrix",ee.matrixWorld),Wt}function Vf(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Wf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,z,X){Le.get(w.texture).__webglTexture=z,Le.get(w.depthTexture).__webglTexture=X;const H=Le.get(w);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=X===void 0,H.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,z){const X=Le.get(w);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,X=0){A=w,_=z,E=X;let H=!0;if(w){const Fe=Le.get(w);Fe.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),H=!1):Fe.__webglFramebuffer===void 0?S.setupRenderTarget(w):Fe.__hasExternalTextures&&S.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture)}let ee=null,Te=!1,Re=!1;if(w){const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture)&&(Re=!0);const qe=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(ee=qe[z],Te=!0):Ee.isWebGL2&&w.samples>0&&S.useMultisampledRTT(w)===!1?ee=Le.get(w).__webglMultisampledFramebuffer:ee=qe,D.copy(w.viewport),O.copy(w.scissor),y=w.scissorTest}else D.copy(N).multiplyScalar(I).floor(),O.copy(J).multiplyScalar(I).floor(),y=G;if(_e.bindFramebuffer(36160,ee)&&Ee.drawBuffers&&H&&_e.drawBuffers(w,ee),_e.viewport(D),_e.scissor(O),_e.setScissorTest(y),Te){const Fe=Le.get(w.texture);K.framebufferTexture2D(36160,36064,34069+z,Fe.__webglTexture,X)}else if(Re){const Fe=Le.get(w.texture),qe=z||0;K.framebufferTextureLayer(36160,36064,Fe.__webglTexture,X||0,qe)}T=-1},this.readRenderTargetPixels=function(w,z,X,H,ee,Te,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){_e.bindFramebuffer(36160,Ne);try{const Fe=w.texture,qe=Fe.format,ke=Fe.type;if(qe!==zt&&M.convert(qe)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ke===Er&&(we.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&we.has("EXT_color_buffer_float"));if(ke!==li&&M.convert(ke)!==K.getParameter(35738)&&!(ke===Qn&&(Ee.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-H&&X>=0&&X<=w.height-ee&&K.readPixels(z,X,H,ee,M.convert(qe),M.convert(ke),Te)}finally{const Fe=A!==null?Le.get(A).__webglFramebuffer:null;_e.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(w,z,X=0){const H=Math.pow(2,-X),ee=Math.floor(z.image.width*H),Te=Math.floor(z.image.height*H);S.setTexture2D(z,0),K.copyTexSubImage2D(3553,X,0,0,w.x,w.y,ee,Te),_e.unbindTexture()},this.copyTextureToTexture=function(w,z,X,H=0){const ee=z.image.width,Te=z.image.height,Re=M.convert(X.format),Ne=M.convert(X.type);S.setTexture2D(X,0),K.pixelStorei(37440,X.flipY),K.pixelStorei(37441,X.premultiplyAlpha),K.pixelStorei(3317,X.unpackAlignment),z.isDataTexture?K.texSubImage2D(3553,H,w.x,w.y,ee,Te,Re,Ne,z.image.data):z.isCompressedTexture?K.compressedTexSubImage2D(3553,H,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,Re,z.mipmaps[0].data):K.texSubImage2D(3553,H,w.x,w.y,Re,Ne,z.image),H===0&&X.generateMipmaps&&K.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,z,X,H,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=w.max.x-w.min.x+1,Re=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,Fe=M.convert(H.format),qe=M.convert(H.type);let ke;if(H.isData3DTexture)S.setTexture3D(H,0),ke=32879;else if(H.isDataArrayTexture)S.setTexture2DArray(H,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,H.flipY),K.pixelStorei(37441,H.premultiplyAlpha),K.pixelStorei(3317,H.unpackAlignment);const Ge=K.getParameter(3314),Ye=K.getParameter(32878),Bn=K.getParameter(3316),hi=K.getParameter(3315),di=K.getParameter(32877),Vt=X.isCompressedTexture?X.mipmaps[0]:X.image;K.pixelStorei(3314,Vt.width),K.pixelStorei(32878,Vt.height),K.pixelStorei(3316,w.min.x),K.pixelStorei(3315,w.min.y),K.pixelStorei(32877,w.min.z),X.isDataTexture||X.isData3DTexture?K.texSubImage3D(ke,ee,z.x,z.y,z.z,Te,Re,Ne,Fe,qe,Vt.data):X.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(ke,ee,z.x,z.y,z.z,Te,Re,Ne,Fe,Vt.data)):K.texSubImage3D(ke,ee,z.x,z.y,z.z,Te,Re,Ne,Fe,qe,Vt),K.pixelStorei(3314,Ge),K.pixelStorei(32878,Ye),K.pixelStorei(3316,Bn),K.pixelStorei(3315,hi),K.pixelStorei(32877,di),ee===0&&H.generateMipmaps&&K.generateMipmap(ke),_e.unbindTexture()},this.initTexture=function(w){S.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){_=0,E=0,A=null,_e.reset(),j.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class fv extends Tf{}fv.prototype.isWebGL1Renderer=!0;class hv extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class dv extends rt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Tr extends rt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fc=new F,Nc=new F,Oc=new it,Fa=new ff,os=new Ws;class pv extends wt{constructor(e=new Mn,t=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Fc.fromBufferAttribute(t,r-1),Nc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Fc.distanceTo(Nc);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(r),os.radius+=s,e.ray.intersectsSphere(os)===!1)return;Oc.copy(r).invert(),Fa.copy(e.ray).applyMatrix4(Oc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,f=new F,h=new F,m=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let A=_,T=E-1;A<T;A+=m){const b=g.getX(A),D=g.getX(A+1);if(c.fromBufferAttribute(d,b),u.fromBufferAttribute(d,D),Fa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(h);y<e.near||y>e.far||t.push({distance:y,point:f.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),E=Math.min(d.count,o.start+o.count);for(let A=_,T=E-1;A<T;A+=m){if(c.fromBufferAttribute(d,A),u.fromBufferAttribute(d,A+1),Fa.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const zc=new F,Uc=new F;class mv extends pv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)zc.fromBufferAttribute(t,r),Uc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zc.distanceTo(Uc);e.setAttribute("lineDistance",new rn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gv extends rt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new F;new F;new F;new F;new Qt;class _v extends rt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Pe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class xv extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Af extends rt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vv extends Af{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mv extends rt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yv extends rt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Pe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class bv extends rt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Sv extends rt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class wv extends rt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Pe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ev extends Tr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Tv={ShadowMaterial:_v,SpriteMaterial:dv,RawShaderMaterial:xv,ShaderMaterial:xn,PointsMaterial:gv,MeshPhysicalMaterial:vv,MeshStandardMaterial:Af,MeshPhongMaterial:Mv,MeshToonMaterial:yv,MeshNormalMaterial:bv,MeshLambertMaterial:Sv,MeshDepthMaterial:wf,MeshDistanceMaterial:Ef,MeshBasicMaterial:zo,MeshMatcapMaterial:wv,LineDashedMaterial:Ev,LineBasicMaterial:Tr,Material:rt};rt.fromType=function(n){return new Tv[n]};const Bc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Av{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Cv=new Av;class Cf{constructor(e){this.manager=e!==void 0?e:Cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const fn={};class Lv extends Cf{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fn[e]!==void 0){fn[e].push({onLoad:t,onProgress:i,onError:r});return}fn[e]=[],fn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=fn[e],f=c.body.getReader(),h=c.headers.get("Content-Length"),m=h?parseInt(h):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){E();function E(){f.read().then(({done:A,value:T})=>{if(A)_.close();else{p+=T.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let D=0,O=u.length;D<O;D++){const y=u[D];y.onProgress&&y.onProgress(b)}_.enqueue(T),E()}})}}});return new Response(d)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Bc.add(e,c);const u=fn[e];delete fn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=fn[e];if(u===void 0)throw this.manager.itemError(e),c;delete fn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const Lf="\\[\\]\\.:\\/",ko="[^"+Lf+"]",Rv="[^"+Lf.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",ko);/(WCOD+)?/.source.replace("WCOD",Rv);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ko);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ko);class kc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Xt=new Uint32Array(512),$t=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(Xt[n]=0,Xt[n|256]=32768,$t[n]=24,$t[n|256]=24):e<-14?(Xt[n]=1024>>-e-14,Xt[n|256]=1024>>-e-14|32768,$t[n]=-e-1,$t[n|256]=-e-1):e<=15?(Xt[n]=e+15<<10,Xt[n|256]=e+15<<10|32768,$t[n]=13,$t[n|256]=13):e<128?(Xt[n]=31744,Xt[n|256]=64512,$t[n]=24,$t[n|256]=24):(Xt[n]=31744,Xt[n|256]=64512,$t[n]=13,$t[n|256]=13)}const Rf=new Uint32Array(2048),Ir=new Uint32Array(64),Dv=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Rf[n]=e|t}for(let n=1024;n<2048;++n)Rf[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)Ir[n]=n<<23;Ir[31]=1199570944;Ir[32]=2147483648;for(let n=33;n<63;++n)Ir[n]=2147483648+(n-32<<23);Ir[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(Dv[n]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);const Gc={type:"change"},Na={type:"start"},Hc={type:"end"};class Pv extends fi{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",le),this._domElementKeyEvents=M},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gc),i.update(),s=r.NONE},this.update=function(){const M=new F,j=new ui().setFromUnitVectors(e.up,new F(0,1,0)),ce=j.clone().invert(),ue=new F,C=new ui,fe=2*Math.PI;return function(){const ye=i.object.position;M.copy(ye).sub(i.target),M.applyQuaternion(j),a.setFromVector3(M),i.autoRotate&&s===r.NONE&&R(O()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let me=i.minAzimuthAngle,be=i.maxAzimuthAngle;return isFinite(me)&&isFinite(be)&&(me<-Math.PI?me+=fe:me>Math.PI&&(me-=fe),be<-Math.PI?be+=fe:be>Math.PI&&(be-=fe),me<=be?a.theta=Math.max(me,Math.min(be,a.theta)):a.theta=a.theta>(me+be)/2?Math.max(me,a.theta):Math.min(be,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),M.setFromSpherical(a),M.applyQuaternion(ce),ye.copy(i.target).add(M),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ue.distanceToSquared(i.object.position)>o||8*(1-C.dot(i.object.quaternion))>o?(i.dispatchEvent(Gc),ue.copy(i.object.position),C.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",P),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",Z),i.domElement.removeEventListener("wheel",ae),i.domElement.removeEventListener("pointermove",k),i.domElement.removeEventListener("pointerup",Y),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",le)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new kc,l=new kc;let c=1;const u=new F;let f=!1;const h=new De,m=new De,g=new De,p=new De,d=new De,_=new De,E=new De,A=new De,T=new De,b=[],D={};function O(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function R(M){l.theta-=M}function q(M){l.phi-=M}const I=function(){const M=new F;return function(ce,ue){M.setFromMatrixColumn(ue,0),M.multiplyScalar(-ce),u.add(M)}}(),de=function(){const M=new F;return function(ce,ue){i.screenSpacePanning===!0?M.setFromMatrixColumn(ue,1):(M.setFromMatrixColumn(ue,0),M.crossVectors(i.object.up,M)),M.multiplyScalar(ce),u.add(M)}}(),ne=function(){const M=new F;return function(ce,ue){const C=i.domElement;if(i.object.isPerspectiveCamera){const fe=i.object.position;M.copy(fe).sub(i.target);let pe=M.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),I(2*ce*pe/C.clientHeight,i.object.matrix),de(2*ue*pe/C.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(ce*(i.object.right-i.object.left)/i.object.zoom/C.clientWidth,i.object.matrix),de(ue*(i.object.top-i.object.bottom)/i.object.zoom/C.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function N(M){i.object.isPerspectiveCamera?c/=M:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*M)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(M){i.object.isPerspectiveCamera?c*=M:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/M)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(M){h.set(M.clientX,M.clientY)}function W(M){E.set(M.clientX,M.clientY)}function V(M){p.set(M.clientX,M.clientY)}function U(M){m.set(M.clientX,M.clientY),g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;R(2*Math.PI*g.x/j.clientHeight),q(2*Math.PI*g.y/j.clientHeight),h.copy(m),i.update()}function Q(M){A.set(M.clientX,M.clientY),T.subVectors(A,E),T.y>0?N(y()):T.y<0&&J(y()),E.copy(A),i.update()}function he(M){d.set(M.clientX,M.clientY),_.subVectors(d,p).multiplyScalar(i.panSpeed),ne(_.x,_.y),p.copy(d),i.update()}function se(M){M.deltaY<0?J(y()):M.deltaY>0&&N(y()),i.update()}function oe(M){let j=!1;switch(M.code){case i.keys.UP:ne(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:ne(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:ne(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:ne(-i.keyPanSpeed,0),j=!0;break}j&&(M.preventDefault(),i.update())}function Me(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const M=.5*(b[0].pageX+b[1].pageX),j=.5*(b[0].pageY+b[1].pageY);h.set(M,j)}}function Se(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const M=.5*(b[0].pageX+b[1].pageX),j=.5*(b[0].pageY+b[1].pageY);p.set(M,j)}}function K(){const M=b[0].pageX-b[1].pageX,j=b[0].pageY-b[1].pageY,ce=Math.sqrt(M*M+j*j);E.set(0,ce)}function Oe(){i.enableZoom&&K(),i.enablePan&&Se()}function we(){i.enableZoom&&K(),i.enableRotate&&Me()}function Ee(M){if(b.length==1)m.set(M.pageX,M.pageY);else{const ce=ve(M),ue=.5*(M.pageX+ce.x),C=.5*(M.pageY+ce.y);m.set(ue,C)}g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;R(2*Math.PI*g.x/j.clientHeight),q(2*Math.PI*g.y/j.clientHeight),h.copy(m)}function _e(M){if(b.length===1)d.set(M.pageX,M.pageY);else{const j=ve(M),ce=.5*(M.pageX+j.x),ue=.5*(M.pageY+j.y);d.set(ce,ue)}_.subVectors(d,p).multiplyScalar(i.panSpeed),ne(_.x,_.y),p.copy(d)}function Ue(M){const j=ve(M),ce=M.pageX-j.x,ue=M.pageY-j.y,C=Math.sqrt(ce*ce+ue*ue);A.set(0,C),T.set(0,Math.pow(A.y/E.y,i.zoomSpeed)),N(T.y),E.copy(A)}function Le(M){i.enableZoom&&Ue(M),i.enablePan&&_e(M)}function S(M){i.enableZoom&&Ue(M),i.enableRotate&&Ee(M)}function L(M){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(M.pointerId),i.domElement.addEventListener("pointermove",k),i.domElement.addEventListener("pointerup",Y)),B(M),M.pointerType==="touch"?v(M):ie(M))}function k(M){i.enabled!==!1&&(M.pointerType==="touch"?x(M):re(M))}function Y(M){$(M),b.length===0&&(i.domElement.releasePointerCapture(M.pointerId),i.domElement.removeEventListener("pointermove",k),i.domElement.removeEventListener("pointerup",Y)),i.dispatchEvent(Hc),s=r.NONE}function Z(M){$(M)}function ie(M){let j;switch(M.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case mi.DOLLY:if(i.enableZoom===!1)return;W(M),s=r.DOLLY;break;case mi.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enablePan===!1)return;V(M),s=r.PAN}else{if(i.enableRotate===!1)return;G(M),s=r.ROTATE}break;case mi.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(i.enableRotate===!1)return;G(M),s=r.ROTATE}else{if(i.enablePan===!1)return;V(M),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Na)}function re(M){if(i.enabled!==!1)switch(s){case r.ROTATE:if(i.enableRotate===!1)return;U(M);break;case r.DOLLY:if(i.enableZoom===!1)return;Q(M);break;case r.PAN:if(i.enablePan===!1)return;he(M);break}}function ae(M){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(M.preventDefault(),i.dispatchEvent(Na),se(M),i.dispatchEvent(Hc))}function le(M){i.enabled===!1||i.enablePan===!1||oe(M)}function v(M){switch(te(M),b.length){case 1:switch(i.touches.ONE){case gi.ROTATE:if(i.enableRotate===!1)return;Me(),s=r.TOUCH_ROTATE;break;case gi.PAN:if(i.enablePan===!1)return;Se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case gi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Oe(),s=r.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;we(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Na)}function x(M){switch(te(M),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ee(M),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;_e(M),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(M),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;S(M),i.update();break;default:s=r.NONE}}function P(M){i.enabled!==!1&&M.preventDefault()}function B(M){b.push(M)}function $(M){delete D[M.pointerId];for(let j=0;j<b.length;j++)if(b[j].pointerId==M.pointerId){b.splice(j,1);return}}function te(M){let j=D[M.pointerId];j===void 0&&(j=new De,D[M.pointerId]=j),j.set(M.pageX,M.pageY)}function ve(M){const j=M.pointerId===b[0].pointerId?b[1]:b[0];return D[j.pointerId]}i.domElement.addEventListener("contextmenu",P),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",Z),i.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}class Iv extends Cf{constructor(e){super(e),this.splitLayer=!1}load(e,t,i,r){const s=this,o=new Lv(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){let t={x:0,y:0,z:0,e:0,f:0,extruding:!1,relative:!1};const i=[];let r;const s=new Tr({color:16711680});s.name="path";const o=new Tr({color:65280});o.name="extruded";function a(g){r={vertex:[],pathVertex:[],z:g.z},i.push(r)}function l(g,p){r===void 0&&a(g),t.extruding?(r.vertex.push(g.x,g.y,g.z),r.vertex.push(p.x,p.y,p.z)):(r.pathVertex.push(g.x,g.y,g.z),r.pathVertex.push(p.x,p.y,p.z))}function c(g,p){return t.relative?p:p-g}function u(g,p){return t.relative?g+p:p}const f=e.replace(/;.+/g,"").split(`
`);for(let g=0;g<f.length;g++){const p=f[g].split(" "),d=p[0].toUpperCase(),_={};if(p.splice(1).forEach(function(E){if(E[0]!==void 0){const A=E[0].toLowerCase(),T=parseFloat(E.substring(1));_[A]=T}}),d==="G0"||d==="G1"){const E={x:_.x!==void 0?u(t.x,_.x):t.x,y:_.y!==void 0?u(t.y,_.y):t.y,z:_.z!==void 0?u(t.z,_.z):t.z,e:_.e!==void 0?u(t.e,_.e):t.e,f:_.f!==void 0?u(t.f,_.f):t.f};c(t.e,E.e)>0&&(t.extruding=c(t.e,E.e)>0,(r==null||E.z!=r.z)&&a(E)),l(t,E),t=E}else if(!(d==="G2"||d==="G3")){if(d==="G90")t.relative=!1;else if(d==="G91")t.relative=!0;else if(d==="G92"){const E=t;E.x=_.x!==void 0?_.x:E.x,E.y=_.y!==void 0?_.y:E.y,E.z=_.z!==void 0?_.z:E.z,E.e=_.e!==void 0?_.e:E.e}}}function h(g,p,d){const _=new Mn;_.setAttribute("position",new rn(g,3));const E=new mv(_,p?o:s);E.name="layer"+d,m.add(E)}const m=new gr;if(m.name="gcode",this.splitLayer)for(let g=0;g<i.length;g++){const p=i[g];h(p.vertex,!0,g),h(p.pathVertex,!1,g)}else{const g=[],p=[];for(let d=0;d<i.length;d++){const _=i[d],E=_.vertex,A=_.pathVertex;for(let T=0;T<E.length;T++)g.push(E[T]);for(let T=0;T<A.length;T++)p.push(A[T])}h(g,!0,i.length),h(p,!1,i.length)}return m.quaternion.setFromEuler(new rr(-Math.PI/2,0,0)),m}}function _s(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function Fv(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function Df(n){let e,t,i;n.length!==2?(e=_s,t=(a,l)=>_s(n(a),l),i=(a,l)=>n(a)-l):(e=n===_s||n===Fv?n:Nv,t=n,i=n);function r(a,l,c=0,u=a.length){if(c<u){if(e(l,l)!==0)return u;do{const f=c+u>>>1;t(a[f],l)<0?c=f+1:u=f}while(c<u)}return c}function s(a,l,c=0,u=a.length){if(c<u){if(e(l,l)!==0)return u;do{const f=c+u>>>1;t(a[f],l)<=0?c=f+1:u=f}while(c<u)}return c}function o(a,l,c=0,u=a.length){const f=r(a,l,c,u-1);return f>c&&i(a[f-1],l)>-i(a[f],l)?f-1:f}return{left:r,center:o,right:s}}function Nv(){return 0}function Ov(n){return n===null?NaN:+n}const zv=Df(_s),Uv=zv.right;Df(Ov).center;var Bv=Uv,oo=Math.sqrt(50),lo=Math.sqrt(10),co=Math.sqrt(2);function kv(n,e,t){var i,r=-1,s,o,a;if(e=+e,n=+n,t=+t,n===e&&t>0)return[n];if((i=e<n)&&(s=n,n=e,e=s),(a=Pf(n,e,t))===0||!isFinite(a))return[];if(a>0){let l=Math.round(n/a),c=Math.round(e/a);for(l*a<n&&++l,c*a>e&&--c,o=new Array(s=c-l+1);++r<s;)o[r]=(l+r)*a}else{a=-a;let l=Math.round(n*a),c=Math.round(e*a);for(l/a<n&&++l,c/a>e&&--c,o=new Array(s=c-l+1);++r<s;)o[r]=(l+r)/a}return i&&o.reverse(),o}function Pf(n,e,t){var i=(e-n)/Math.max(0,t),r=Math.floor(Math.log(i)/Math.LN10),s=i/Math.pow(10,r);return r>=0?(s>=oo?10:s>=lo?5:s>=co?2:1)*Math.pow(10,r):-Math.pow(10,-r)/(s>=oo?10:s>=lo?5:s>=co?2:1)}function Gv(n,e,t){var i=Math.abs(e-n)/Math.max(0,t),r=Math.pow(10,Math.floor(Math.log(i)/Math.LN10)),s=i/r;return s>=oo?r*=10:s>=lo?r*=5:s>=co&&(r*=2),e<n?-r:r}function Go(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function If(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function Fr(){}var Ar=.7,Es=1/Ar,Wi="\\s*([+-]?\\d+)\\s*",Cr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",sn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Hv=/^#([0-9a-f]{3,8})$/,Vv=new RegExp(`^rgb\\(${Wi},${Wi},${Wi}\\)$`),Wv=new RegExp(`^rgb\\(${sn},${sn},${sn}\\)$`),qv=new RegExp(`^rgba\\(${Wi},${Wi},${Wi},${Cr}\\)$`),jv=new RegExp(`^rgba\\(${sn},${sn},${sn},${Cr}\\)$`),Xv=new RegExp(`^hsl\\(${Cr},${sn},${sn}\\)$`),$v=new RegExp(`^hsla\\(${Cr},${sn},${sn},${Cr}\\)$`),Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Go(Fr,Lr,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Wc,formatHex:Wc,formatHex8:Yv,formatHsl:Zv,formatRgb:qc,toString:qc});function Wc(){return this.rgb().formatHex()}function Yv(){return this.rgb().formatHex8()}function Zv(){return Ff(this).formatHsl()}function qc(){return this.rgb().formatRgb()}function Lr(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=Hv.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?jc(e):t===3?new xt(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?ls(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?ls(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=Vv.exec(n))?new xt(e[1],e[2],e[3],1):(e=Wv.exec(n))?new xt(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=qv.exec(n))?ls(e[1],e[2],e[3],e[4]):(e=jv.exec(n))?ls(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Xv.exec(n))?Yc(e[1],e[2]/100,e[3]/100,1):(e=$v.exec(n))?Yc(e[1],e[2]/100,e[3]/100,e[4]):Vc.hasOwnProperty(n)?jc(Vc[n]):n==="transparent"?new xt(NaN,NaN,NaN,0):null}function jc(n){return new xt(n>>16&255,n>>8&255,n&255,1)}function ls(n,e,t,i){return i<=0&&(n=e=t=NaN),new xt(n,e,t,i)}function Kv(n){return n instanceof Fr||(n=Lr(n)),n?(n=n.rgb(),new xt(n.r,n.g,n.b,n.opacity)):new xt}function uo(n,e,t,i){return arguments.length===1?Kv(n):new xt(n,e,t,i==null?1:i)}function xt(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}Go(xt,uo,If(Fr,{brighter(n){return n=n==null?Es:Math.pow(Es,n),new xt(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Ar:Math.pow(Ar,n),new xt(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new xt(ai(this.r),ai(this.g),ai(this.b),Ts(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Xc,formatHex:Xc,formatHex8:Jv,formatRgb:$c,toString:$c}));function Xc(){return`#${ti(this.r)}${ti(this.g)}${ti(this.b)}`}function Jv(){return`#${ti(this.r)}${ti(this.g)}${ti(this.b)}${ti((isNaN(this.opacity)?1:this.opacity)*255)}`}function $c(){const n=Ts(this.opacity);return`${n===1?"rgb(":"rgba("}${ai(this.r)}, ${ai(this.g)}, ${ai(this.b)}${n===1?")":`, ${n})`}`}function Ts(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function ai(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function ti(n){return n=ai(n),(n<16?"0":"")+n.toString(16)}function Yc(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new Nt(n,e,t,i)}function Ff(n){if(n instanceof Nt)return new Nt(n.h,n.s,n.l,n.opacity);if(n instanceof Fr||(n=Lr(n)),!n)return new Nt;if(n instanceof Nt)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),s=Math.max(e,t,i),o=NaN,a=s-r,l=(s+r)/2;return a?(e===s?o=(t-i)/a+(t<i)*6:t===s?o=(i-e)/a+2:o=(e-t)/a+4,a/=l<.5?s+r:2-s-r,o*=60):a=l>0&&l<1?0:o,new Nt(o,a,l,n.opacity)}function Qv(n,e,t,i){return arguments.length===1?Ff(n):new Nt(n,e,t,i==null?1:i)}function Nt(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}Go(Nt,Qv,If(Fr,{brighter(n){return n=n==null?Es:Math.pow(Es,n),new Nt(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Ar:Math.pow(Ar,n),new Nt(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new xt(Oa(n>=240?n-240:n+120,r,i),Oa(n,r,i),Oa(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new Nt(Zc(this.h),cs(this.s),cs(this.l),Ts(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=Ts(this.opacity);return`${n===1?"hsl(":"hsla("}${Zc(this.h)}, ${cs(this.s)*100}%, ${cs(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Zc(n){return n=(n||0)%360,n<0?n+360:n}function cs(n){return Math.max(0,Math.min(1,n||0))}function Oa(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}var Ho=n=>()=>n;function eM(n,e){return function(t){return n+t*e}}function tM(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function nM(n){return(n=+n)==1?Nf:function(e,t){return t-e?tM(e,t,n):Ho(isNaN(e)?t:e)}}function Nf(n,e){var t=e-n;return t?eM(n,t):Ho(isNaN(n)?e:n)}var Kc=function n(e){var t=nM(e);function i(r,s){var o=t((r=uo(r)).r,(s=uo(s)).r),a=t(r.g,s.g),l=t(r.b,s.b),c=Nf(r.opacity,s.opacity);return function(u){return r.r=o(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return i.gamma=n,i}(1);function iM(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,i=e.slice(),r;return function(s){for(r=0;r<t;++r)i[r]=n[r]*(1-s)+e[r]*s;return i}}function rM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function sM(n,e){var t=e?e.length:0,i=n?Math.min(t,n.length):0,r=new Array(i),s=new Array(t),o;for(o=0;o<i;++o)r[o]=Vo(n[o],e[o]);for(;o<t;++o)s[o]=e[o];return function(a){for(o=0;o<i;++o)s[o]=r[o](a);return s}}function aM(n,e){var t=new Date;return n=+n,e=+e,function(i){return t.setTime(n*(1-i)+e*i),t}}function As(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function oM(n,e){var t={},i={},r;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in n?t[r]=Vo(n[r],e[r]):i[r]=e[r];return function(s){for(r in t)i[r]=t[r](s);return i}}var fo=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,za=new RegExp(fo.source,"g");function lM(n){return function(){return n}}function cM(n){return function(e){return n(e)+""}}function uM(n,e){var t=fo.lastIndex=za.lastIndex=0,i,r,s,o=-1,a=[],l=[];for(n=n+"",e=e+"";(i=fo.exec(n))&&(r=za.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:As(i,r)})),t=za.lastIndex;return t<e.length&&(s=e.slice(t),a[o]?a[o]+=s:a[++o]=s),a.length<2?l[0]?cM(l[0].x):lM(e):(e=l.length,function(c){for(var u=0,f;u<e;++u)a[(f=l[u]).i]=f.x(c);return a.join("")})}function Vo(n,e){var t=typeof e,i;return e==null||t==="boolean"?Ho(e):(t==="number"?As:t==="string"?(i=Lr(e))?(e=i,Kc):uM:e instanceof Lr?Kc:e instanceof Date?aM:rM(e)?iM:Array.isArray(e)?sM:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?oM:As)(n,e)}function fM(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}function hM(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Cs(n,e){if((t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"))<0)return null;var t,i=n.slice(0,t);return[i.length>1?i[0]+i.slice(2):i,+n.slice(t+1)]}function Qi(n){return n=Cs(Math.abs(n)),n?n[1]:NaN}function dM(n,e){return function(t,i){for(var r=t.length,s=[],o=0,a=n[0],l=0;r>0&&a>0&&(l+a+1>i&&(a=Math.max(1,i-l)),s.push(t.substring(r-=a,r+a)),!((l+=a+1)>i));)a=n[o=(o+1)%n.length];return s.reverse().join(e)}}function pM(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var mM=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ls(n){if(!(e=mM.exec(n)))throw new Error("invalid format: "+n);var e;return new Wo({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Ls.prototype=Wo.prototype;function Wo(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}Wo.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function gM(n){e:for(var e=n.length,t=1,i=-1,r;t<e;++t)switch(n[t]){case".":i=r=t;break;case"0":i===0&&(i=t),r=t;break;default:if(!+n[t])break e;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var Of;function _M(n,e){var t=Cs(n,e);if(!t)return n+"";var i=t[0],r=t[1],s=r-(Of=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,o=i.length;return s===o?i:s>o?i+new Array(s-o+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+Cs(n,Math.max(0,e+s-1))[0]}function Jc(n,e){var t=Cs(n,e);if(!t)return n+"";var i=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}var Qc={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:hM,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>Jc(n*100,e),r:Jc,s:_M,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function eu(n){return n}var tu=Array.prototype.map,nu=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function xM(n){var e=n.grouping===void 0||n.thousands===void 0?eu:dM(tu.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?eu:pM(tu.call(n.numerals,String)),o=n.percent===void 0?"%":n.percent+"",a=n.minus===void 0?"\u2212":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function c(f){f=Ls(f);var h=f.fill,m=f.align,g=f.sign,p=f.symbol,d=f.zero,_=f.width,E=f.comma,A=f.precision,T=f.trim,b=f.type;b==="n"?(E=!0,b="g"):Qc[b]||(A===void 0&&(A=12),T=!0,b="g"),(d||h==="0"&&m==="=")&&(d=!0,h="0",m="=");var D=p==="$"?t:p==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",O=p==="$"?i:/[%p]/.test(b)?o:"",y=Qc[b],R=/[defgprs%]/.test(b);A=A===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,A)):Math.max(0,Math.min(20,A));function q(I){var de=D,ne=O,N,J,G;if(b==="c")ne=y(I)+ne,I="";else{I=+I;var W=I<0||1/I<0;if(I=isNaN(I)?l:y(Math.abs(I),A),T&&(I=gM(I)),W&&+I==0&&g!=="+"&&(W=!1),de=(W?g==="("?g:a:g==="-"||g==="("?"":g)+de,ne=(b==="s"?nu[8+Of/3]:"")+ne+(W&&g==="("?")":""),R){for(N=-1,J=I.length;++N<J;)if(G=I.charCodeAt(N),48>G||G>57){ne=(G===46?r+I.slice(N+1):I.slice(N))+ne,I=I.slice(0,N);break}}}E&&!d&&(I=e(I,1/0));var V=de.length+I.length+ne.length,U=V<_?new Array(_-V+1).join(h):"";switch(E&&d&&(I=e(U+I,U.length?_-ne.length:1/0),U=""),m){case"<":I=de+I+ne+U;break;case"=":I=de+U+I+ne;break;case"^":I=U.slice(0,V=U.length>>1)+de+I+ne+U.slice(V);break;default:I=U+de+I+ne;break}return s(I)}return q.toString=function(){return f+""},q}function u(f,h){var m=c((f=Ls(f),f.type="f",f)),g=Math.max(-8,Math.min(8,Math.floor(Qi(h)/3)))*3,p=Math.pow(10,-g),d=nu[8+g/3];return function(_){return m(p*_)+d}}return{format:c,formatPrefix:u}}var us,zf,Uf;vM({thousands:",",grouping:[3],currency:["$",""]});function vM(n){return us=xM(n),zf=us.format,Uf=us.formatPrefix,us}function MM(n){return Math.max(0,-Qi(Math.abs(n)))}function yM(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Qi(e)/3)))*3-Qi(Math.abs(n)))}function bM(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Qi(e)-Qi(n))+1}function SM(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function wM(n){return function(){return n}}function EM(n){return+n}var iu=[0,1];function zi(n){return n}function ho(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:wM(isNaN(e)?NaN:.5)}function TM(n,e){var t;return n>e&&(t=n,n=e,e=t),function(i){return Math.max(n,Math.min(e,i))}}function AM(n,e,t){var i=n[0],r=n[1],s=e[0],o=e[1];return r<i?(i=ho(r,i),s=t(o,s)):(i=ho(i,r),s=t(s,o)),function(a){return s(i(a))}}function CM(n,e,t){var i=Math.min(n.length,e.length)-1,r=new Array(i),s=new Array(i),o=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++o<i;)r[o]=ho(n[o],n[o+1]),s[o]=t(e[o],e[o+1]);return function(a){var l=Bv(n,a,1,i)-1;return s[l](r[l](a))}}function LM(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function RM(){var n=iu,e=iu,t=Vo,i,r,s,o=zi,a,l,c;function u(){var h=Math.min(n.length,e.length);return o!==zi&&(o=TM(n[0],n[h-1])),a=h>2?CM:AM,l=c=null,f}function f(h){return h==null||isNaN(h=+h)?s:(l||(l=a(n.map(i),e,t)))(i(o(h)))}return f.invert=function(h){return o(r((c||(c=a(e,n.map(i),As)))(h)))},f.domain=function(h){return arguments.length?(n=Array.from(h,EM),u()):n.slice()},f.range=function(h){return arguments.length?(e=Array.from(h),u()):e.slice()},f.rangeRound=function(h){return e=Array.from(h),t=fM,u()},f.clamp=function(h){return arguments.length?(o=h?!0:zi,u()):o!==zi},f.interpolate=function(h){return arguments.length?(t=h,u()):t},f.unknown=function(h){return arguments.length?(s=h,f):s},function(h,m){return i=h,r=m,u()}}function DM(){return RM()(zi,zi)}function PM(n,e,t,i){var r=Gv(n,e,t),s;switch(i=Ls(i==null?",f":i),i.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(e));return i.precision==null&&!isNaN(s=yM(r,o))&&(i.precision=s),Uf(i,o)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=bM(r,Math.max(Math.abs(n),Math.abs(e))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=MM(r))&&(i.precision=s-(i.type==="%")*2);break}}return zf(i)}function IM(n){var e=n.domain;return n.ticks=function(t){var i=e();return kv(i[0],i[i.length-1],t==null?10:t)},n.tickFormat=function(t,i){var r=e();return PM(r[0],r[r.length-1],t==null?10:t,i)},n.nice=function(t){t==null&&(t=10);var i=e(),r=0,s=i.length-1,o=i[r],a=i[s],l,c,u=10;for(a<o&&(c=o,o=a,a=c,c=r,r=s,s=c);u-- >0;){if(c=Pf(o,a,t),c===l)return i[r]=o,i[s]=a,e(i);if(c>0)o=Math.floor(o/c)*c,a=Math.ceil(a/c)*c;else if(c<0)o=Math.ceil(o*c)/c,a=Math.floor(a*c)/c;else break;l=c}return n},n}function po(){var n=DM();return n.copy=function(){return LM(n,po())},SM.apply(n,arguments),IM(n)}function Ui(n,e,t){this.k=n,this.x=e,this.y=t}Ui.prototype={constructor:Ui,scale:function(n){return n===1?this:new Ui(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new Ui(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new Ui(1,0,0);Ui.prototype;function FM(n,e,t){i("./1to1-section.png",(s,o)=>{console.log(s),console.log(o);const a=new Uint8Array(o.shape[0]*o.shape[1]);for(let l=0;l<o.data.length;l+=4)a[Math.floor(l/4)]=o.data[l];n(r(a,o.shape[0],o.shape[1]))});function i(s,o){const a=new Image;a.src=s,a.onload=()=>{const l={shape:[a.width,a.height],data:new Uint8ClampedArray(0)},c=document.createElement("canvas");c.width=a.width,c.height=a.height,t.px.x=a.width,t.px.y=a.height,t.dimensions.x=c.width*e.px_to_mm,t.dimensions.y=c.height*e.px_to_mm;const u=c.getContext("2d");if(u){u.drawImage(a,0,0);const f=u.getImageData(0,0,c.width,c.height);f&&(l.data=f.data,o(null,l))}}}function r(s,o,a){const l=[];l.push(`F${e.plunge_rate}`);let c=0;const u=new F(0,0,0),f=new F(0,0,0);function h(D,O,y,R){f.set(D,O,y),c+=u.distanceTo(f),u.set(D,O,y),l.push([R?"G1":"G0",`X${D.toFixed(4)}`,`Y${O.toFixed(4)}`,`Z${y.toFixed(4)}`].join(" "))}const m=e.skipX,g=e.skipY,p=po().domain([0,255]).range([-e.depth_mm,0]),d=po().domain([0,o]).range([0,o*e.px_to_mm]);let _=0,E=-g,A=g,T=0,b=0;for(;_<o;){if(A>0)for(;E<a-g;)E+=A,b=_*a+E,T=p(s[b]),h(d(_),d(E),T,!0);else for(;E>g;)E+=A,b=_*a+E,T=p(s[b]),h(d(_),d(E),T,!0);A=A>0?-g:g,_+=m}return console.log("lines length",l.length),console.log(t),t.lines.length=0,l.forEach((D,O)=>{O===2&&t.lines.push(`F${e.feed_rate}`),t.lines.push(D)}),t.bytes.value=t.lines.join(`
`).length,console.log("distanceTraveled",c),t.cutting.distance_mm=c,t.cutting.time=NM(t.cutting.distance_mm/e.feed_rate),l.join(`
`)}}function NM(n){let e=n;const t=Math.floor(e/3600);e-=t*3600;const i=Math.floor(e/60);return e-=i*60,`${t.toFixed(0)}hrs ${i.toFixed(0)}min ${e.toFixed(0)} sec`}(function(n,e){typeof define=="function"&&define.amd?define([],e):typeof Bf!="undefined"?e():(e(),n.FileSaver={})})(globalThis,function(){function n(a,l){return typeof l=="undefined"?l={autoBom:!1}:typeof l!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),l={autoBom:!l}),l.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function e(a,l,c){var u=new XMLHttpRequest;u.open("GET",a),u.responseType="blob",u.onload=function(){o(u.response,l,c)},u.onerror=function(){console.error("could not download file")},u.send()}function t(a){var l=new XMLHttpRequest;l.open("HEAD",a,!1);try{l.send()}catch{}return 200<=l.status&&299>=l.status}function i(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(l)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Ni=="object"&&Ni.global===Ni?Ni:void 0,s=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(a,l,c){var u=r.URL||r.webkitURL,f=document.createElement("a");l=l||a.name||"download",f.download=l,f.rel="noopener",typeof a=="string"?(f.href=a,f.origin===location.origin?i(f):t(f.href)?e(a,l,c):i(f,f.target="_blank")):(f.href=u.createObjectURL(a),setTimeout(function(){u.revokeObjectURL(f.href)},4e4),setTimeout(function(){i(f)},0))}:"msSaveOrOpenBlob"in navigator?function(a,l,c){if(l=l||a.name||"download",typeof a!="string")navigator.msSaveOrOpenBlob(n(a,c),l);else if(t(a))e(a,l,c);else{var u=document.createElement("a");u.href=a,u.target="_blank",setTimeout(function(){i(u)})}}:function(a,l,c,u){if(u=u||open("","_blank"),u&&(u.document.title=u.document.body.innerText="downloading..."),typeof a=="string")return e(a,l,c);var f=a.type==="application/octet-stream",h=/constructor/i.test(r.HTMLElement)||r.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent);if((m||f&&h||s)&&typeof FileReader!="undefined"){var g=new FileReader;g.onloadend=function(){var _=g.result;_=m?_:_.replace(/^data:[^;]*;/,"data:attachment/file;"),u?u.location.href=_:location=_,u=null},g.readAsDataURL(a)}else{var p=r.URL||r.webkitURL,d=p.createObjectURL(a);u?u.location=d:location.href=d,u=null,setTimeout(function(){p.revokeObjectURL(d)},4e4)}});r.saveAs=o.saveAs=o,typeof mo!="undefined"&&(mo.exports=o)});var OM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};const ru=new Iv,Tt={obj:new wt,scene:new hv},zM=Nu({name:"fuck-this",data(){return{msg:"foo",isGenerating:!1,options:{px_to_mm:.1,skipX:8,skipY:2,depth_mm:10,plunge_rate:50,feed_rate:100},step:{skipX:1,skipY:1,depth_mm:.1,px_to_mm:.01,plunge_speed:1,feed_rate:1},info:{px:{x:0,y:0},dimensions:{x:0,y:0},cutting:{distance_mm:0,time:0},lines:[],bytes:{value:0}}}},mounted(){let n,e;const t=this;i(),s(),t.do_conversion();function i(){const o=document.createElement("div");document.body.appendChild(o),n=new Ct(60,window.innerWidth/window.innerHeight,1,1e4),n.position.set(0,0,200),n.lookAt(Tt.scene.position),e=new Tf,e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),o.appendChild(e.domElement);const a=new Pv(n,e.domElement);a.addEventListener("change",s),a.minDistance=10,a.maxDistance=1e3,window.addEventListener("resize",r)}function r(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),s()}function s(){e.render(Tt.scene,n)}window.render=s},methods:{save_gcode:function(){const n=this;console.log("save gcode"),console.log(n.info.lines.join(`
`).length);var e=new Blob([n.info.lines.join(`
`)],{type:"text/plain;charset=utf-8"});(void 0)(e,`gcode_${Date().split(" ").slice(0,5).join("_")}.gcode`)},options_keys:function(){return console.log(Object.keys(this.options)),Object.keys(this.options)},do_conversion:function(){const n=this;n.isGenerating=!0,FM(e=>{Tt.scene.remove(Tt.obj),ru.parse(e),Tt.obj=ru.parse(e),console.log(Tt.obj),Tt.obj.children[1].geometry.computeBoundingBox(),console.log(Tt.obj.children[1].geometry.boundingBox),console.log(Tt.scene),Tt.obj.position.set(-1*(n.info.dimensions.x*.5),-50,0),Tt.scene.add(Tt.obj),window.render&&window.render(),n.isGenerating=!1},{...n.options},{...n.info})}}}),UM=n=>(jh("data-v-f24848fa"),n=n(),Xh(),n),BM={class:"ui"},kM=["option"],GM=["onUpdate:modelValue","step"],HM={class:"spacing-buttons"},VM={key:1},WM={key:0},qM=UM(()=>yt("h4",null,"Info",-1)),jM={key:1};function XM(n,e,t,i,r,s){return hn(),Hn("div",BM,[(hn(!0),Hn(Zt,null,_d(n.options_keys(),(o,a)=>(hn(),Hn("div",{option:o,key:`option${a}`,class:"ui-element"},[yt("div",null,bn(o),1),yt("div",null,[md(yt("input",{type:"number","onUpdate:modelValue":l=>n.options[o]=l,step:n.step[o]},null,8,GM),[[gp,n.options[o]]])])],8,kM))),128)),yt("div",HM,[n.isGenerating?(hn(),Hn("div",VM,"Generating...")):(hn(),Hn("button",{key:0,onClick:e[0]||(e[0]=(...o)=>n.do_conversion&&n.do_conversion(...o))},"Generate"))]),n.isGenerating?ul("",!0):(hn(),Hn("div",WM,[qM,yt("p",null,bn(n.info.px.x)+"px by "+bn(n.info.px.y)+"px",1),yt("p",null,bn(n.info.dimensions.x)+"mm by "+bn(n.info.dimensions.y)+"mm",1),yt("p",null,bn(n.info.cutting.distance_mm.toFixed(0))+"mm of travel",1),yt("p",null,bn(n.info.cutting.time),1)])),n.isGenerating?ul("",!0):(hn(),Hn("div",jM,[yt("button",{onClick:e[1]||(e[1]=(...o)=>n.save_gcode&&n.save_gcode(...o))},"Save GCode"),yt("p",null,bn((n.info.bytes.value/(1e3*1e3)).toFixed(2))+" MB",1)]))])}var $M=OM(zM,[["render",XM],["__scopeId","data-v-f24848fa"]]);const YM=Nu({__name:"App",setup(n){return(e,t)=>(hn(),Yu($M,{msg:"Hello Vue 3 + TypeScript + Vite"}))}});vp(YM).mount("#app")});export default ZM();
