var Qp=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var iA=Qp((qp,Wr)=>{const em=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};em();var Lr=typeof global!="undefined"?global:typeof self!="undefined"?self:typeof window!="undefined"?window:{};function lc(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const tm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nm=lc(tm);function Sh(t){return!!t||t===""}function cc(t){if(Pe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=mt(i)?sm(i):cc(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(mt(t))return t;if(gt(t))return t}}const im=/;(?![^(]*\))/g,rm=/:(.+)/;function sm(t){const e={};return t.split(im).forEach(n=>{if(n){const i=n.split(rm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function uc(t){let e="";if(mt(t))e=t;else if(Pe(t))for(let n=0;n<t.length;n++){const i=uc(t[n]);i&&(e+=i+" ")}else if(gt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const li=t=>mt(t)?t:t==null?"":Pe(t)||gt(t)&&(t.toString===Ah||!Ue(t.toString))?JSON.stringify(t,wh,2):String(t),wh=(t,e)=>e&&e.__v_isRef?wh(t,e.value):Or(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Th(e)?{[`Set(${e.size})`]:[...e.values()]}:gt(e)&&!Pe(e)&&!Ch(e)?String(e):e,it={},Nr=[],un=()=>{},am=()=>!1,om=/^on[^a-z]/,eo=t=>om.test(t),fc=t=>t.startsWith("onUpdate:"),Rt=Object.assign,hc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lm=Object.prototype.hasOwnProperty,Ye=(t,e)=>lm.call(t,e),Pe=Array.isArray,Or=t=>to(t)==="[object Map]",Th=t=>to(t)==="[object Set]",Ue=t=>typeof t=="function",mt=t=>typeof t=="string",dc=t=>typeof t=="symbol",gt=t=>t!==null&&typeof t=="object",Eh=t=>gt(t)&&Ue(t.then)&&Ue(t.catch),Ah=Object.prototype.toString,to=t=>Ah.call(t),cm=t=>to(t).slice(8,-1),Ch=t=>to(t)==="[object Object]",pc=t=>mt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ea=lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),no=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},um=/-(\w)/g,Yr=no(t=>t.replace(um,(e,n)=>n?n.toUpperCase():"")),fm=/\B([A-Z])/g,es=no(t=>t.replace(fm,"-$1").toLowerCase()),Dh=no(t=>t.charAt(0).toUpperCase()+t.slice(1)),Po=no(t=>t?`on${Dh(t)}`:""),Oa=(t,e)=>!Object.is(t,e),Aa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ka=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Tl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let su;const hm=()=>su||(su=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof Lr!="undefined"?Lr:{});let wn;class dm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&wn&&(this.parent=wn,this.index=(wn.scopes||(wn.scopes=[])).push(this)-1)}run(e){if(this.active){const n=wn;try{return wn=this,e()}finally{wn=n}}}on(){wn=this}off(){wn=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function pm(t,e=wn){e&&e.active&&e.effects.push(t)}const mc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Lh=t=>(t.w&Ai)>0,Rh=t=>(t.n&Ai)>0,mm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ai},gm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Lh(r)&&!Rh(r)?r.delete(t):e[n++]=r,r.w&=~Ai,r.n&=~Ai}e.length=n}},El=new WeakMap;let gs=0,Ai=1;const Al=30;let rn;const qi=Symbol(""),Cl=Symbol("");class gc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,pm(this,i)}run(){if(!this.active)return this.fn();let e=rn,n=bi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=rn,rn=this,bi=!0,Ai=1<<++gs,gs<=Al?mm(this):au(this),this.fn()}finally{gs<=Al&&gm(this),Ai=1<<--gs,rn=this.parent,bi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){rn===this?this.deferStop=!0:this.active&&(au(this),this.onStop&&this.onStop(),this.active=!1)}}function au(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bi=!0;const Ph=[];function ts(){Ph.push(bi),bi=!1}function ns(){const t=Ph.pop();bi=t===void 0?!0:t}function Vt(t,e,n){if(bi&&rn){let i=El.get(t);i||El.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=mc()),Ih(r)}}function Ih(t,e){let n=!1;gs<=Al?Rh(t)||(t.n|=Ai,n=!Lh(t)):n=!t.has(rn),n&&(t.add(rn),rn.deps.push(t))}function ei(t,e,n,i,r,s){const a=El.get(t);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(n==="length"&&Pe(t))a.forEach((l,c)=>{(c==="length"||c>=i)&&o.push(l)});else switch(n!==void 0&&o.push(a.get(n)),e){case"add":Pe(t)?pc(n)&&o.push(a.get("length")):(o.push(a.get(qi)),Or(t)&&o.push(a.get(Cl)));break;case"delete":Pe(t)||(o.push(a.get(qi)),Or(t)&&o.push(a.get(Cl)));break;case"set":Or(t)&&o.push(a.get(qi));break}if(o.length===1)o[0]&&Dl(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Dl(mc(l))}}function Dl(t,e){const n=Pe(t)?t:[...t];for(const i of n)i.computed&&ou(i);for(const i of n)i.computed||ou(i)}function ou(t,e){(t!==rn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const _m=lc("__proto__,__v_isRef,__isVue"),Fh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dc)),xm=_c(),vm=_c(!1,!0),ym=_c(!0),lu=Mm();function Mm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=tt(this);for(let s=0,a=this.length;s<a;s++)Vt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(tt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ts();const i=tt(this)[e].apply(this,n);return ns(),i}}),t}function _c(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?km:zh:e?Uh:kh).get(i))return i;const a=Pe(i);if(!t&&a&&Ye(lu,r))return Reflect.get(lu,r,s);const o=Reflect.get(i,r,s);return(dc(r)?Fh.has(r):_m(r))||(t||Vt(i,"get",r),e)?o:Lt(o)?a&&pc(r)?o:o.value:gt(o)?t?Bh(o):yc(o):o}}const bm=Nh(),Sm=Nh(!0);function Nh(t=!1){return function(n,i,r,s){let a=n[i];if(Es(a)&&Lt(a)&&!Lt(r))return!1;if(!t&&!Es(r)&&(Ll(r)||(r=tt(r),a=tt(a)),!Pe(n)&&Lt(a)&&!Lt(r)))return a.value=r,!0;const o=Pe(n)&&pc(i)?Number(i)<n.length:Ye(n,i),l=Reflect.set(n,i,r,s);return n===tt(s)&&(o?Oa(r,a)&&ei(n,"set",i,r):ei(n,"add",i,r)),l}}function wm(t,e){const n=Ye(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&ei(t,"delete",e,void 0),i}function Tm(t,e){const n=Reflect.has(t,e);return(!dc(e)||!Fh.has(e))&&Vt(t,"has",e),n}function Em(t){return Vt(t,"iterate",Pe(t)?"length":qi),Reflect.ownKeys(t)}const Oh={get:xm,set:bm,deleteProperty:wm,has:Tm,ownKeys:Em},Am={get:ym,set(t,e){return!0},deleteProperty(t,e){return!0}},Cm=Rt({},Oh,{get:vm,set:Sm}),xc=t=>t,io=t=>Reflect.getPrototypeOf(t);function $s(t,e,n=!1,i=!1){t=t.__v_raw;const r=tt(t),s=tt(e);n||(e!==s&&Vt(r,"get",e),Vt(r,"get",s));const{has:a}=io(r),o=i?xc:n?Sc:bc;if(a.call(r,e))return o(t.get(e));if(a.call(r,s))return o(t.get(s));t!==r&&t.get(e)}function Zs(t,e=!1){const n=this.__v_raw,i=tt(n),r=tt(t);return e||(t!==r&&Vt(i,"has",t),Vt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ks(t,e=!1){return t=t.__v_raw,!e&&Vt(tt(t),"iterate",qi),Reflect.get(t,"size",t)}function cu(t){t=tt(t);const e=tt(this);return io(e).has.call(e,t)||(e.add(t),ei(e,"add",t,t)),this}function uu(t,e){e=tt(e);const n=tt(this),{has:i,get:r}=io(n);let s=i.call(n,t);s||(t=tt(t),s=i.call(n,t));const a=r.call(n,t);return n.set(t,e),s?Oa(e,a)&&ei(n,"set",t,e):ei(n,"add",t,e),this}function fu(t){const e=tt(this),{has:n,get:i}=io(e);let r=n.call(e,t);r||(t=tt(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&ei(e,"delete",t,void 0),s}function hu(){const t=tt(this),e=t.size!==0,n=t.clear();return e&&ei(t,"clear",void 0,void 0),n}function Js(t,e){return function(i,r){const s=this,a=s.__v_raw,o=tt(a),l=e?xc:t?Sc:bc;return!t&&Vt(o,"iterate",qi),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Qs(t,e,n){return function(...i){const r=this.__v_raw,s=tt(r),a=Or(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?xc:e?Sc:bc;return!e&&Vt(s,"iterate",l?Cl:qi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ci(t){return function(...e){return t==="delete"?!1:this}}function Dm(){const t={get(s){return $s(this,s)},get size(){return Ks(this)},has:Zs,add:cu,set:uu,delete:fu,clear:hu,forEach:Js(!1,!1)},e={get(s){return $s(this,s,!1,!0)},get size(){return Ks(this)},has:Zs,add:cu,set:uu,delete:fu,clear:hu,forEach:Js(!1,!0)},n={get(s){return $s(this,s,!0)},get size(){return Ks(this,!0)},has(s){return Zs.call(this,s,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:Js(!0,!1)},i={get(s){return $s(this,s,!0,!0)},get size(){return Ks(this,!0)},has(s){return Zs.call(this,s,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:Js(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Qs(s,!1,!1),n[s]=Qs(s,!0,!1),e[s]=Qs(s,!1,!0),i[s]=Qs(s,!0,!0)}),[t,n,e,i]}const[Lm,Rm,Pm,Im]=Dm();function vc(t,e){const n=e?t?Im:Pm:t?Rm:Lm;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ye(n,r)&&r in i?n:i,r,s)}const Fm={get:vc(!1,!1)},Nm={get:vc(!1,!0)},Om={get:vc(!0,!1)},kh=new WeakMap,Uh=new WeakMap,zh=new WeakMap,km=new WeakMap;function Um(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zm(t){return t.__v_skip||!Object.isExtensible(t)?0:Um(cm(t))}function yc(t){return Es(t)?t:Mc(t,!1,Oh,Fm,kh)}function Bm(t){return Mc(t,!1,Cm,Nm,Uh)}function Bh(t){return Mc(t,!0,Am,Om,zh)}function Mc(t,e,n,i,r){if(!gt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const a=zm(t);if(a===0)return t;const o=new Proxy(t,a===2?i:n);return r.set(t,o),o}function kr(t){return Es(t)?kr(t.__v_raw):!!(t&&t.__v_isReactive)}function Es(t){return!!(t&&t.__v_isReadonly)}function Ll(t){return!!(t&&t.__v_isShallow)}function Hh(t){return kr(t)||Es(t)}function tt(t){const e=t&&t.__v_raw;return e?tt(e):t}function Gh(t){return ka(t,"__v_skip",!0),t}const bc=t=>gt(t)?yc(t):t,Sc=t=>gt(t)?Bh(t):t;function Hm(t){bi&&rn&&(t=tt(t),Ih(t.dep||(t.dep=mc())))}function Gm(t,e){t=tt(t),t.dep&&Dl(t.dep)}function Lt(t){return!!(t&&t.__v_isRef===!0)}function Vm(t){return Lt(t)?t.value:t}const Wm={get:(t,e,n)=>Vm(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Lt(r)&&!Lt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Vh(t){return kr(t)?t:new Proxy(t,Wm)}class Ym{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new gc(e,()=>{this._dirty||(this._dirty=!0,Gm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=tt(this);return Hm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function jm(t,e,n=!1){let i,r;const s=Ue(t);return s?(i=t,r=un):(i=t.get,r=t.set),new Ym(i,r,s||!r,n)}function Si(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){ro(s,e,n)}return r}function fn(t,e,n,i){if(Ue(t)){const s=Si(t,e,n,i);return s&&Eh(s)&&s.catch(a=>{ro(a,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(fn(t[s],e,n,i));return r}function ro(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Si(l,null,10,[t,a,o]);return}}qm(t,n,r,i)}function qm(t,e,n,i=!0){console.error(t)}let Ua=!1,Rl=!1;const Gt=[];let Xn=0;const Ms=[];let _s=null,Tr=0;const bs=[];let _i=null,Er=0;const Wh=Promise.resolve();let wc=null,Pl=null;function Xm(t){const e=wc||Wh;return t?e.then(this?t.bind(this):t):e}function $m(t){let e=Xn+1,n=Gt.length;for(;e<n;){const i=e+n>>>1;As(Gt[i])<t?e=i+1:n=i}return e}function Yh(t){(!Gt.length||!Gt.includes(t,Ua&&t.allowRecurse?Xn+1:Xn))&&t!==Pl&&(t.id==null?Gt.push(t):Gt.splice($m(t.id),0,t),jh())}function jh(){!Ua&&!Rl&&(Rl=!0,wc=Wh.then($h))}function Zm(t){const e=Gt.indexOf(t);e>Xn&&Gt.splice(e,1)}function qh(t,e,n,i){Pe(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),jh()}function Km(t){qh(t,_s,Ms,Tr)}function Jm(t){qh(t,_i,bs,Er)}function so(t,e=null){if(Ms.length){for(Pl=e,_s=[...new Set(Ms)],Ms.length=0,Tr=0;Tr<_s.length;Tr++)_s[Tr]();_s=null,Tr=0,Pl=null,so(t,e)}}function Xh(t){if(so(),bs.length){const e=[...new Set(bs)];if(bs.length=0,_i){_i.push(...e);return}for(_i=e,_i.sort((n,i)=>As(n)-As(i)),Er=0;Er<_i.length;Er++)_i[Er]();_i=null,Er=0}}const As=t=>t.id==null?1/0:t.id;function $h(t){Rl=!1,Ua=!0,so(t),Gt.sort((n,i)=>As(n)-As(i));const e=un;try{for(Xn=0;Xn<Gt.length;Xn++){const n=Gt[Xn];n&&n.active!==!1&&Si(n,null,14)}}finally{Xn=0,Gt.length=0,Xh(),Ua=!1,wc=null,(Gt.length||Ms.length||bs.length)&&$h(t)}}function Qm(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||it;let r=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||it;h&&(r=n.map(m=>m.trim())),f&&(r=n.map(Tl))}let o,l=i[o=Po(e)]||i[o=Po(Yr(e))];!l&&s&&(l=i[o=Po(es(e))]),l&&fn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,fn(c,t,6,r)}}function Zh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!Ue(t)){const l=c=>{const u=Zh(c,e,!0);u&&(o=!0,Rt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(i.set(t,null),null):(Pe(s)?s.forEach(l=>a[l]=null):Rt(a,s),i.set(t,a),a)}function ao(t,e){return!t||!eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(t,e[0].toLowerCase()+e.slice(1))||Ye(t,es(e))||Ye(t,e))}let Ln=null,oo=null;function za(t){const e=Ln;return Ln=t,oo=t&&t.type.__scopeId||null,e}function eg(t){oo=t}function tg(){oo=null}function ng(t,e=Ln,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Mu(-1);const s=za(e),a=t(...r);return za(s),i._d&&Mu(1),a};return i._n=!0,i._c=!0,i._d=!0,i}function Io(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:p}=t;let d,_;const T=za(t);try{if(n.shapeFlag&4){const E=r||i;d=En(u.call(E,E,f,s,m,h,g)),_=l}else{const E=e;d=En(E.length>1?E(s,{attrs:l,slots:o,emit:c}):E(s,null)),_=e.props?l:ig(l)}}catch(E){Ss.length=0,ro(E,t,1),d=Kn(Qi)}let A=d;if(_&&p!==!1){const E=Object.keys(_),{shapeFlag:b}=A;E.length&&b&7&&(a&&E.some(fc)&&(_=rg(_,a)),A=jr(A,_))}return n.dirs&&(A=jr(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),d=A,za(T),d}const ig=t=>{let e;for(const n in t)(n==="class"||n==="style"||eo(n))&&((e||(e={}))[n]=t[n]);return e},rg=(t,e)=>{const n={};for(const i in t)(!fc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function sg(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?du(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!ao(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?du(i,a,c):!0:!!a;return!1}function du(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ao(n,s))return!0}return!1}function ag({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const og=t=>t.__isSuspense;function lg(t,e){e&&e.pendingBranch?Pe(t)?e.effects.push(...t):e.effects.push(t):Jm(t)}function cg(t,e){if(Mt){let n=Mt.provides;const i=Mt.parent&&Mt.parent.provides;i===n&&(n=Mt.provides=Object.create(i)),n[t]=e}}function Fo(t,e,n=!1){const i=Mt||Ln;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ue(e)?e.call(i.proxy):e}}const pu={};function No(t,e,n){return Kh(t,e,n)}function Kh(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:a}=it){const o=Mt;let l,c=!1,u=!1;if(Lt(t)?(l=()=>t.value,c=Ll(t)):kr(t)?(l=()=>t,i=!0):Pe(t)?(u=!0,c=t.some(_=>kr(_)||Ll(_)),l=()=>t.map(_=>{if(Lt(_))return _.value;if(kr(_))return Hi(_);if(Ue(_))return Si(_,o,2)})):Ue(t)?e?l=()=>Si(t,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),fn(t,o,3,[h])}:l=un,e&&i){const _=l;l=()=>Hi(_())}let f,h=_=>{f=d.onStop=()=>{Si(_,o,4)}};if(Ds)return h=un,e?n&&fn(e,o,3,[l(),u?[]:void 0,h]):l(),un;let m=u?[]:pu;const g=()=>{if(!!d.active)if(e){const _=d.run();(i||c||(u?_.some((T,A)=>Oa(T,m[A])):Oa(_,m)))&&(f&&f(),fn(e,o,3,[_,m===pu?void 0:m,h]),m=_)}else d.run()};g.allowRecurse=!!e;let p;r==="sync"?p=g:r==="post"?p=()=>Ft(g,o&&o.suspense):p=()=>Km(g);const d=new gc(l,p);return e?n?g():m=d.run():r==="post"?Ft(d.run.bind(d),o&&o.suspense):d.run(),()=>{d.stop(),o&&o.scope&&hc(o.scope.effects,d)}}function ug(t,e,n){const i=this.proxy,r=mt(t)?t.includes(".")?Jh(i,t):()=>i[t]:t.bind(i,i);let s;Ue(e)?s=e:(s=e.handler,n=e);const a=Mt;qr(this);const o=Kh(r,s.bind(i),n);return a?qr(a):Xi(),o}function Jh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Hi(t,e){if(!gt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Lt(t))Hi(t.value,e);else if(Pe(t))for(let n=0;n<t.length;n++)Hi(t[n],e);else if(Th(t)||Or(t))t.forEach(n=>{Hi(n,e)});else if(Ch(t))for(const n in t)Hi(t[n],e);return t}function Qh(t){return Ue(t)?{setup:t,name:t.name}:t}const Ca=t=>!!t.type.__asyncLoader,ed=t=>t.type.__isKeepAlive;function fg(t,e){td(t,"a",e)}function hg(t,e){td(t,"da",e)}function td(t,e,n=Mt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(lo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ed(r.parent.vnode)&&dg(i,e,n,r),r=r.parent}}function dg(t,e,n,i){const r=lo(e,t,i,!0);nd(()=>{hc(i[e],r)},n)}function lo(t,e,n=Mt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;ts(),qr(n);const o=fn(e,n,t,a);return Xi(),ns(),o});return i?r.unshift(s):r.push(s),s}}const ii=t=>(e,n=Mt)=>(!Ds||t==="sp")&&lo(t,e,n),pg=ii("bm"),mg=ii("m"),gg=ii("bu"),_g=ii("u"),xg=ii("bum"),nd=ii("um"),vg=ii("sp"),yg=ii("rtg"),Mg=ii("rtc");function bg(t,e=Mt){lo("ec",t,e)}function Sg(t,e){const n=Ln;if(n===null)return t;const i=uo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[a,o,l,c=it]=e[s];Ue(a)&&(a={mounted:a,updated:a}),a.deep&&Hi(o),r.push({dir:a,instance:i,value:o,oldValue:void 0,arg:l,modifiers:c})}return t}function Di(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ts(),fn(l,n,8,[t.el,o,t,e]),ns())}}const wg=Symbol();function Tg(t,e,n,i){let r;const s=n&&n[i];if(Pe(t)||mt(t)){r=new Array(t.length);for(let a=0,o=t.length;a<o;a++)r[a]=e(t[a],a,void 0,s&&s[a])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s&&s[a])}else if(gt(t))if(t[Symbol.iterator])r=Array.from(t,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(t);r=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];r[o]=e(t[c],c,o,s&&s[o])}}else r=[];return n&&(n[i]=r),r}const Il=t=>t?md(t)?uo(t)||t.proxy:Il(t.parent):null,Ba=Rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Il(t.parent),$root:t=>Il(t.root),$emit:t=>t.emit,$options:t=>rd(t),$forceUpdate:t=>t.f||(t.f=()=>Yh(t.update)),$nextTick:t=>t.n||(t.n=Xm.bind(t.proxy)),$watch:t=>ug.bind(t)}),Eg={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(i!==it&&Ye(i,e))return a[e]=1,i[e];if(r!==it&&Ye(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&Ye(c,e))return a[e]=3,s[e];if(n!==it&&Ye(n,e))return a[e]=4,n[e];Fl&&(a[e]=0)}}const u=Ba[e];let f,h;if(u)return e==="$attrs"&&Vt(t,"get",e),u(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(n!==it&&Ye(n,e))return a[e]=4,n[e];if(h=l.config.globalProperties,Ye(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==it&&Ye(r,e)?(r[e]=n,!0):i!==it&&Ye(i,e)?(i[e]=n,!0):Ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==it&&Ye(t,a)||e!==it&&Ye(e,a)||(o=s[0])&&Ye(o,a)||Ye(i,a)||Ye(Ba,a)||Ye(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Fl=!0;function Ag(t){const e=rd(t),n=t.proxy,i=t.ctx;Fl=!1,e.beforeCreate&&mu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:p,deactivated:d,beforeDestroy:_,beforeUnmount:T,destroyed:A,unmounted:E,render:b,renderTracked:R,renderTriggered:O,errorCaptured:M,serverPrefetch:D,expose:Y,inheritAttrs:I,components:pe,directives:ne,filters:N}=e;if(c&&Cg(c,i,null,t.appContext.config.unwrapInjectedRef),a)for(const W in a){const V=a[W];Ue(V)&&(i[W]=V.bind(n))}if(r){const W=r.call(n,n);gt(W)&&(t.data=yc(W))}if(Fl=!0,s)for(const W in s){const V=s[W],U=Ue(V)?V.bind(n,n):Ue(V.get)?V.get.bind(n,n):un,Q=!Ue(V)&&Ue(V.set)?V.set.bind(n):un,de=i0({get:U,set:Q});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>de.value,set:se=>de.value=se})}if(o)for(const W in o)id(o[W],i,n,W);if(l){const W=Ue(l)?l.call(n):l;Reflect.ownKeys(W).forEach(V=>{cg(V,W[V])})}u&&mu(u,t,"c");function H(W,V){Pe(V)?V.forEach(U=>W(U.bind(n))):V&&W(V.bind(n))}if(H(pg,f),H(mg,h),H(gg,m),H(_g,g),H(fg,p),H(hg,d),H(bg,M),H(Mg,R),H(yg,O),H(xg,T),H(nd,E),H(vg,D),Pe(Y))if(Y.length){const W=t.exposed||(t.exposed={});Y.forEach(V=>{Object.defineProperty(W,V,{get:()=>n[V],set:U=>n[V]=U})})}else t.exposed||(t.exposed={});b&&t.render===un&&(t.render=b),I!=null&&(t.inheritAttrs=I),pe&&(t.components=pe),ne&&(t.directives=ne)}function Cg(t,e,n=un,i=!1){Pe(t)&&(t=Nl(t));for(const r in t){const s=t[r];let a;gt(s)?"default"in s?a=Fo(s.from||r,s.default,!0):a=Fo(s.from||r):a=Fo(s),Lt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function mu(t,e,n){fn(Pe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function id(t,e,n,i){const r=i.includes(".")?Jh(n,i):()=>n[i];if(mt(t)){const s=e[t];Ue(s)&&No(r,s)}else if(Ue(t))No(r,t.bind(n));else if(gt(t))if(Pe(t))t.forEach(s=>id(s,e,n,i));else{const s=Ue(t.handler)?t.handler.bind(n):e[t.handler];Ue(s)&&No(r,s,t)}}function rd(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ha(l,c,a,!0)),Ha(l,e,a)),s.set(e,l),l}function Ha(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ha(t,s,n,!0),r&&r.forEach(a=>Ha(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=Dg[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const Dg={data:gu,props:Oi,emits:Oi,methods:Oi,computed:Oi,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Oi,directives:Oi,watch:Rg,provide:gu,inject:Lg};function gu(t,e){return e?t?function(){return Rt(Ue(t)?t.call(this,this):t,Ue(e)?e.call(this,this):e)}:e:t}function Lg(t,e){return Oi(Nl(t),Nl(e))}function Nl(t){if(Pe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Oi(t,e){return t?Rt(Rt(Object.create(null),t),e):e}function Rg(t,e){if(!t)return e;if(!e)return t;const n=Rt(Object.create(null),t);for(const i in e)n[i]=Ct(t[i],e[i]);return n}function Pg(t,e,n,i=!1){const r={},s={};ka(s,co,1),t.propsDefaults=Object.create(null),sd(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Bm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Ig(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=tt(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ao(t.emitsOptions,h))continue;const m=e[h];if(l)if(Ye(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=Yr(h);r[g]=Ol(l,o,g,m,t,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{sd(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ye(e,f)&&((u=es(f))===f||!Ye(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ol(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ye(e,f)&&!0)&&(delete s[f],c=!0)}c&&ei(t,"set","$attrs")}function sd(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ea(l))continue;const c=e[l];let u;r&&Ye(r,u=Yr(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:ao(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=tt(n),c=o||it;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ol(r,l,f,c[f],t,!Ye(c,f))}}return a}function Ol(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=Ye(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ue(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(qr(r),i=c[n]=l.call(null,e),Xi())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===es(n))&&(i=!0))}return i}function ad(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!Ue(t)){const u=f=>{l=!0;const[h,m]=ad(f,e,!0);Rt(a,h),m&&o.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return i.set(t,Nr),Nr;if(Pe(s))for(let u=0;u<s.length;u++){const f=Yr(s[u]);_u(f)&&(a[f]=it)}else if(s)for(const u in s){const f=Yr(u);if(_u(f)){const h=s[u],m=a[f]=Pe(h)||Ue(h)?{type:h}:h;if(m){const g=yu(Boolean,m.type),p=yu(String,m.type);m[0]=g>-1,m[1]=p<0||g<p,(g>-1||Ye(m,"default"))&&o.push(f)}}}const c=[a,o];return i.set(t,c),c}function _u(t){return t[0]!=="$"}function xu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function vu(t,e){return xu(t)===xu(e)}function yu(t,e){return Pe(e)?e.findIndex(n=>vu(n,t)):Ue(e)&&vu(e,t)?0:-1}const od=t=>t[0]==="_"||t==="$stable",Tc=t=>Pe(t)?t.map(En):[En(t)],Fg=(t,e,n)=>{if(e._n)return e;const i=ng((...r)=>Tc(e(...r)),n);return i._c=!1,i},ld=(t,e,n)=>{const i=t._ctx;for(const r in t){if(od(r))continue;const s=t[r];if(Ue(s))e[r]=Fg(r,s,i);else if(s!=null){const a=Tc(s);e[r]=()=>a}}},cd=(t,e)=>{const n=Tc(e);t.slots.default=()=>n},Ng=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=tt(e),ka(e,"_",n)):ld(e,t.slots={})}else t.slots={},e&&cd(t,e);ka(t.slots,co,1)},Og=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=it;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:(Rt(r,e),!n&&o===1&&delete r._):(s=!e.$stable,ld(e,r)),a=e}else e&&(cd(t,e),a={default:1});if(s)for(const o in r)!od(o)&&!(o in a)&&delete r[o]};function ud(){return{app:null,config:{isNativeTag:am,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kg=0;function Ug(t,e){return function(i,r=null){Ue(i)||(i=Object.assign({},i)),r!=null&&!gt(r)&&(r=null);const s=ud(),a=new Set;let o=!1;const l=s.app={_uid:kg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:r0,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ue(c.install)?(a.add(c),c.install(l,...u)):Ue(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=Kn(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,f),o=!0,l._container=c,c.__vue_app__=l,uo(h.component)||h.component.proxy}},unmount(){o&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function kl(t,e,n,i,r=!1){if(Pe(t)){t.forEach((h,m)=>kl(h,e&&(Pe(e)?e[m]:e),n,i,r));return}if(Ca(i)&&!r)return;const s=i.shapeFlag&4?uo(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===it?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(mt(c)?(u[c]=null,Ye(f,c)&&(f[c]=null)):Lt(c)&&(c.value=null)),Ue(l))Si(l,o,12,[a,u]);else{const h=mt(l),m=Lt(l);if(h||m){const g=()=>{if(t.f){const p=h?u[l]:l.value;r?Pe(p)&&hc(p,s):Pe(p)?p.includes(s)||p.push(s):h?(u[l]=[s],Ye(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=a,Ye(f,l)&&(f[l]=a)):m&&(l.value=a,t.k&&(u[t.k]=a))};a?(g.id=-1,Ft(g,n)):g()}}}const Ft=lg;function zg(t){return Bg(t)}function Bg(t,e){const n=hm();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=un,cloneNode:g,insertStaticContent:p}=t,d=(S,L,B,$=null,Z=null,ie=null,re=!1,ae=null,ce=!!L.dynamicChildren)=>{if(S===L)return;S&&!us(S,L)&&($=Ce(S),oe(S,Z,ie,!0),S=null),L.patchFlag===-2&&(ce=!1,L.dynamicChildren=null);const{type:v,ref:x,shapeFlag:P}=L;switch(v){case Ec:_(S,L,B,$);break;case Qi:T(S,L,B,$);break;case Oo:S==null&&A(L,B,$,re);break;case Tn:ne(S,L,B,$,Z,ie,re,ae,ce);break;default:P&1?R(S,L,B,$,Z,ie,re,ae,ce):P&6?N(S,L,B,$,Z,ie,re,ae,ce):(P&64||P&128)&&v.process(S,L,B,$,Z,ie,re,ae,ce,xe)}x!=null&&Z&&kl(x,S&&S.ref,ie,L||S,!L)},_=(S,L,B,$)=>{if(S==null)i(L.el=o(L.children),B,$);else{const Z=L.el=S.el;L.children!==S.children&&c(Z,L.children)}},T=(S,L,B,$)=>{S==null?i(L.el=l(L.children||""),B,$):L.el=S.el},A=(S,L,B,$)=>{[S.el,S.anchor]=p(S.children,L,B,$,S.el,S.anchor)},E=({el:S,anchor:L},B,$)=>{let Z;for(;S&&S!==L;)Z=h(S),i(S,B,$),S=Z;i(L,B,$)},b=({el:S,anchor:L})=>{let B;for(;S&&S!==L;)B=h(S),r(S),S=B;r(L)},R=(S,L,B,$,Z,ie,re,ae,ce)=>{re=re||L.type==="svg",S==null?O(L,B,$,Z,ie,re,ae,ce):Y(S,L,Z,ie,re,ae,ce)},O=(S,L,B,$,Z,ie,re,ae)=>{let ce,v;const{type:x,props:P,shapeFlag:z,transition:X,patchFlag:te,dirs:ye}=S;if(S.el&&g!==void 0&&te===-1)ce=S.el=g(S.el);else{if(ce=S.el=a(S.type,ie,P&&P.is,P),z&8?u(ce,S.children):z&16&&D(S.children,ce,null,$,Z,ie&&x!=="foreignObject",re,ae),ye&&Di(S,null,$,"created"),P){for(const j in P)j!=="value"&&!Ea(j)&&s(ce,j,null,P[j],ie,S.children,$,Z,Ge);"value"in P&&s(ce,"value",null,P.value),(v=P.onVnodeBeforeMount)&&Mn(v,$,S)}M(ce,S,S.scopeId,re,$)}ye&&Di(S,null,$,"beforeMount");const y=(!Z||Z&&!Z.pendingBranch)&&X&&!X.persisted;y&&X.beforeEnter(ce),i(ce,L,B),((v=P&&P.onVnodeMounted)||y||ye)&&Ft(()=>{v&&Mn(v,$,S),y&&X.enter(ce),ye&&Di(S,null,$,"mounted")},Z)},M=(S,L,B,$,Z)=>{if(B&&m(S,B),$)for(let ie=0;ie<$.length;ie++)m(S,$[ie]);if(Z){let ie=Z.subTree;if(L===ie){const re=Z.vnode;M(S,re,re.scopeId,re.slotScopeIds,Z.parent)}}},D=(S,L,B,$,Z,ie,re,ae,ce=0)=>{for(let v=ce;v<S.length;v++){const x=S[v]=ae?xi(S[v]):En(S[v]);d(null,x,L,B,$,Z,ie,re,ae)}},Y=(S,L,B,$,Z,ie,re)=>{const ae=L.el=S.el;let{patchFlag:ce,dynamicChildren:v,dirs:x}=L;ce|=S.patchFlag&16;const P=S.props||it,z=L.props||it;let X;B&&Li(B,!1),(X=z.onVnodeBeforeUpdate)&&Mn(X,B,L,S),x&&Di(L,S,B,"beforeUpdate"),B&&Li(B,!0);const te=Z&&L.type!=="foreignObject";if(v?I(S.dynamicChildren,v,ae,B,$,te,ie):re||U(S,L,ae,null,B,$,te,ie,!1),ce>0){if(ce&16)pe(ae,L,P,z,B,$,Z);else if(ce&2&&P.class!==z.class&&s(ae,"class",null,z.class,Z),ce&4&&s(ae,"style",P.style,z.style,Z),ce&8){const ye=L.dynamicProps;for(let y=0;y<ye.length;y++){const j=ye[y],ue=P[j],fe=z[j];(fe!==ue||j==="value")&&s(ae,j,ue,fe,Z,S.children,B,$,Ge)}}ce&1&&S.children!==L.children&&u(ae,L.children)}else!re&&v==null&&pe(ae,L,P,z,B,$,Z);((X=z.onVnodeUpdated)||x)&&Ft(()=>{X&&Mn(X,B,L,S),x&&Di(L,S,B,"updated")},$)},I=(S,L,B,$,Z,ie,re)=>{for(let ae=0;ae<L.length;ae++){const ce=S[ae],v=L[ae],x=ce.el&&(ce.type===Tn||!us(ce,v)||ce.shapeFlag&70)?f(ce.el):B;d(ce,v,x,null,$,Z,ie,re,!0)}},pe=(S,L,B,$,Z,ie,re)=>{if(B!==$){for(const ae in $){if(Ea(ae))continue;const ce=$[ae],v=B[ae];ce!==v&&ae!=="value"&&s(S,ae,v,ce,re,L.children,Z,ie,Ge)}if(B!==it)for(const ae in B)!Ea(ae)&&!(ae in $)&&s(S,ae,B[ae],null,re,L.children,Z,ie,Ge);"value"in $&&s(S,"value",B.value,$.value)}},ne=(S,L,B,$,Z,ie,re,ae,ce)=>{const v=L.el=S?S.el:o(""),x=L.anchor=S?S.anchor:o("");let{patchFlag:P,dynamicChildren:z,slotScopeIds:X}=L;X&&(ae=ae?ae.concat(X):X),S==null?(i(v,B,$),i(x,B,$),D(L.children,B,x,Z,ie,re,ae,ce)):P>0&&P&64&&z&&S.dynamicChildren?(I(S.dynamicChildren,z,B,Z,ie,re,ae),(L.key!=null||Z&&L===Z.subTree)&&fd(S,L,!0)):U(S,L,B,x,Z,ie,re,ae,ce)},N=(S,L,B,$,Z,ie,re,ae,ce)=>{L.slotScopeIds=ae,S==null?L.shapeFlag&512?Z.ctx.activate(L,B,$,re,ce):J(L,B,$,Z,ie,re,ce):H(S,L,ce)},J=(S,L,B,$,Z,ie,re)=>{const ae=S.component=Kg(S,$,Z);if(ed(S)&&(ae.ctx.renderer=xe),Jg(ae),ae.asyncDep){if(Z&&Z.registerDep(ae,W),!S.el){const ce=ae.subTree=Kn(Qi);T(null,ce,L,B)}return}W(ae,S,L,B,Z,ie,re)},H=(S,L,B)=>{const $=L.component=S.component;if(sg(S,L,B))if($.asyncDep&&!$.asyncResolved){V($,L,B);return}else $.next=L,Zm($.update),$.update();else L.el=S.el,$.vnode=L},W=(S,L,B,$,Z,ie,re)=>{const ae=()=>{if(S.isMounted){let{next:x,bu:P,u:z,parent:X,vnode:te}=S,ye=x,y;Li(S,!1),x?(x.el=te.el,V(S,x,re)):x=te,P&&Aa(P),(y=x.props&&x.props.onVnodeBeforeUpdate)&&Mn(y,X,x,te),Li(S,!0);const j=Io(S),ue=S.subTree;S.subTree=j,d(ue,j,f(ue.el),Ce(ue),S,Z,ie),x.el=j.el,ye===null&&ag(S,j.el),z&&Ft(z,Z),(y=x.props&&x.props.onVnodeUpdated)&&Ft(()=>Mn(y,X,x,te),Z)}else{let x;const{el:P,props:z}=L,{bm:X,m:te,parent:ye}=S,y=Ca(L);if(Li(S,!1),X&&Aa(X),!y&&(x=z&&z.onVnodeBeforeMount)&&Mn(x,ye,L),Li(S,!0),P&&Ie){const j=()=>{S.subTree=Io(S),Ie(P,S.subTree,S,Z,null)};y?L.type.__asyncLoader().then(()=>!S.isUnmounted&&j()):j()}else{const j=S.subTree=Io(S);d(null,j,B,$,S,Z,ie),L.el=j.el}if(te&&Ft(te,Z),!y&&(x=z&&z.onVnodeMounted)){const j=L;Ft(()=>Mn(x,ye,j),Z)}(L.shapeFlag&256||ye&&Ca(ye.vnode)&&ye.vnode.shapeFlag&256)&&S.a&&Ft(S.a,Z),S.isMounted=!0,L=B=$=null}},ce=S.effect=new gc(ae,()=>Yh(v),S.scope),v=S.update=()=>ce.run();v.id=S.uid,Li(S,!0),v()},V=(S,L,B)=>{L.component=S;const $=S.vnode.props;S.vnode=L,S.next=null,Ig(S,L.props,$,B),Og(S,L.children,B),ts(),so(void 0,S.update),ns()},U=(S,L,B,$,Z,ie,re,ae,ce=!1)=>{const v=S&&S.children,x=S?S.shapeFlag:0,P=L.children,{patchFlag:z,shapeFlag:X}=L;if(z>0){if(z&128){de(v,P,B,$,Z,ie,re,ae,ce);return}else if(z&256){Q(v,P,B,$,Z,ie,re,ae,ce);return}}X&8?(x&16&&Ge(v,Z,ie),P!==v&&u(B,P)):x&16?X&16?de(v,P,B,$,Z,ie,re,ae,ce):Ge(v,Z,ie,!0):(x&8&&u(B,""),X&16&&D(P,B,$,Z,ie,re,ae,ce))},Q=(S,L,B,$,Z,ie,re,ae,ce)=>{S=S||Nr,L=L||Nr;const v=S.length,x=L.length,P=Math.min(v,x);let z;for(z=0;z<P;z++){const X=L[z]=ce?xi(L[z]):En(L[z]);d(S[z],X,B,null,Z,ie,re,ae,ce)}v>x?Ge(S,Z,ie,!0,!1,P):D(L,B,$,Z,ie,re,ae,ce,P)},de=(S,L,B,$,Z,ie,re,ae,ce)=>{let v=0;const x=L.length;let P=S.length-1,z=x-1;for(;v<=P&&v<=z;){const X=S[v],te=L[v]=ce?xi(L[v]):En(L[v]);if(us(X,te))d(X,te,B,null,Z,ie,re,ae,ce);else break;v++}for(;v<=P&&v<=z;){const X=S[P],te=L[z]=ce?xi(L[z]):En(L[z]);if(us(X,te))d(X,te,B,null,Z,ie,re,ae,ce);else break;P--,z--}if(v>P){if(v<=z){const X=z+1,te=X<x?L[X].el:$;for(;v<=z;)d(null,L[v]=ce?xi(L[v]):En(L[v]),B,te,Z,ie,re,ae,ce),v++}}else if(v>z)for(;v<=P;)oe(S[v],Z,ie,!0),v++;else{const X=v,te=v,ye=new Map;for(v=te;v<=z;v++){const we=L[v]=ce?xi(L[v]):En(L[v]);we.key!=null&&ye.set(we.key,v)}let y,j=0;const ue=z-te+1;let fe=!1,C=0;const he=new Array(ue);for(v=0;v<ue;v++)he[v]=0;for(v=X;v<=P;v++){const we=S[v];if(j>=ue){oe(we,Z,ie,!0);continue}let ge;if(we.key!=null)ge=ye.get(we.key);else for(y=te;y<=z;y++)if(he[y-te]===0&&us(we,L[y])){ge=y;break}ge===void 0?oe(we,Z,ie,!0):(he[ge-te]=v+1,ge>=C?C=ge:fe=!0,d(we,L[ge],B,null,Z,ie,re,ae,ce),j++)}const me=fe?Hg(he):Nr;for(y=me.length-1,v=ue-1;v>=0;v--){const we=te+v,ge=L[we],Te=we+1<x?L[we+1].el:$;he[v]===0?d(null,ge,B,Te,Z,ie,re,ae,ce):fe&&(y<0||v!==me[y]?se(ge,B,Te,2):y--)}}},se=(S,L,B,$,Z=null)=>{const{el:ie,type:re,transition:ae,children:ce,shapeFlag:v}=S;if(v&6){se(S.component.subTree,L,B,$);return}if(v&128){S.suspense.move(L,B,$);return}if(v&64){re.move(S,L,B,xe);return}if(re===Tn){i(ie,L,B);for(let P=0;P<ce.length;P++)se(ce[P],L,B,$);i(S.anchor,L,B);return}if(re===Oo){E(S,L,B);return}if($!==2&&v&1&&ae)if($===0)ae.beforeEnter(ie),i(ie,L,B),Ft(()=>ae.enter(ie),Z);else{const{leave:P,delayLeave:z,afterLeave:X}=ae,te=()=>i(ie,L,B),ye=()=>{P(ie,()=>{te(),X&&X()})};z?z(ie,te,ye):ye()}else i(ie,L,B)},oe=(S,L,B,$=!1,Z=!1)=>{const{type:ie,props:re,ref:ae,children:ce,dynamicChildren:v,shapeFlag:x,patchFlag:P,dirs:z}=S;if(ae!=null&&kl(ae,null,B,S,!0),x&256){L.ctx.deactivate(S);return}const X=x&1&&z,te=!Ca(S);let ye;if(te&&(ye=re&&re.onVnodeBeforeUnmount)&&Mn(ye,L,S),x&6)K(S.component,B,$);else{if(x&128){S.suspense.unmount(B,$);return}X&&Di(S,null,L,"beforeUnmount"),x&64?S.type.remove(S,L,B,Z,xe,$):v&&(ie!==Tn||P>0&&P&64)?Ge(v,L,B,!1,!0):(ie===Tn&&P&384||!Z&&x&16)&&Ge(ce,L,B),$&&Se(S)}(te&&(ye=re&&re.onVnodeUnmounted)||X)&&Ft(()=>{ye&&Mn(ye,L,S),X&&Di(S,null,L,"unmounted")},B)},Se=S=>{const{type:L,el:B,anchor:$,transition:Z}=S;if(L===Tn){Ae(B,$);return}if(L===Oo){b(S);return}const ie=()=>{r(B),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(S.shapeFlag&1&&Z&&!Z.persisted){const{leave:re,delayLeave:ae}=Z,ce=()=>re(B,ie);ae?ae(S.el,ie,ce):ce()}else ie()},Ae=(S,L)=>{let B;for(;S!==L;)B=h(S),r(S),S=B;r(L)},K=(S,L,B)=>{const{bum:$,scope:Z,update:ie,subTree:re,um:ae}=S;$&&Aa($),Z.stop(),ie&&(ie.active=!1,oe(re,S,L,B)),ae&&Ft(ae,L),Ft(()=>{S.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Ge=(S,L,B,$=!1,Z=!1,ie=0)=>{for(let re=ie;re<S.length;re++)oe(S[re],L,B,$,Z)},Ce=S=>S.shapeFlag&6?Ce(S.component.subTree):S.shapeFlag&128?S.suspense.next():h(S.anchor||S.el),De=(S,L,B)=>{S==null?L._vnode&&oe(L._vnode,null,null,!0):d(L._vnode||null,S,L,null,null,null,B),Xh(),L._vnode=S},xe={p:d,um:oe,m:se,r:Se,mt:J,mc:D,pc:U,pbc:I,n:Ce,o:t};let We,Ie;return e&&([We,Ie]=e(xe)),{render:De,hydrate:We,createApp:Ug(De,We)}}function Li({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function fd(t,e,n=!1){const i=t.children,r=e.children;if(Pe(i)&&Pe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=xi(r[s]),o.el=a.el),n||fd(a,o))}}function Hg(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}const Gg=t=>t.__isTeleport,Tn=Symbol(void 0),Ec=Symbol(void 0),Qi=Symbol(void 0),Oo=Symbol(void 0),Ss=[];let on=null;function Yn(t=!1){Ss.push(on=t?null:[])}function Vg(){Ss.pop(),on=Ss[Ss.length-1]||null}let Cs=1;function Mu(t){Cs+=t}function hd(t){return t.dynamicChildren=Cs>0?on||Nr:null,Vg(),Cs>0&&on&&on.push(t),t}function Ri(t,e,n,i,r,s){return hd(Bt(t,e,n,i,r,s,!0))}function dd(t,e,n,i,r){return hd(Kn(t,e,n,i,r,!0))}function Wg(t){return t?t.__v_isVNode===!0:!1}function us(t,e){return t.type===e.type&&t.key===e.key}const co="__vInternal",pd=({key:t})=>t!=null?t:null,Da=({ref:t,ref_key:e,ref_for:n})=>t!=null?mt(t)||Lt(t)||Ue(t)?{i:Ln,r:t,k:e,f:!!n}:t:null;function Bt(t,e=null,n=null,i=0,r=null,s=t===Tn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pd(e),ref:e&&Da(e),scopeId:oo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return o?(Ac(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=mt(n)?8:16),Cs>0&&!a&&on&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&on.push(l),l}const Kn=Yg;function Yg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===wg)&&(t=Qi),Wg(t)){const o=jr(t,e,!0);return n&&Ac(o,n),Cs>0&&!s&&on&&(o.shapeFlag&6?on[on.indexOf(t)]=o:on.push(o)),o.patchFlag|=-2,o}if(n0(t)&&(t=t.__vccOpts),e){e=jg(e);let{class:o,style:l}=e;o&&!mt(o)&&(e.class=uc(o)),gt(l)&&(Hh(l)&&!Pe(l)&&(l=Rt({},l)),e.style=cc(l))}const a=mt(t)?1:og(t)?128:Gg(t)?64:gt(t)?4:Ue(t)?2:0;return Bt(t,e,n,i,r,a,s,!0)}function jg(t){return t?Hh(t)||co in t?Rt({},t):t:null}function jr(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:a}=t,o=e?Xg(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&pd(o),ref:e&&e.ref?n&&r?Pe(r)?r.concat(Da(e)):[r,Da(e)]:Da(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tn?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jr(t.ssContent),ssFallback:t.ssFallback&&jr(t.ssFallback),el:t.el,anchor:t.anchor}}function qg(t=" ",e=0){return Kn(Ec,null,t,e)}function bu(t="",e=!1){return e?(Yn(),dd(Qi,null,t)):Kn(Qi,null,t)}function En(t){return t==null||typeof t=="boolean"?Kn(Qi):Pe(t)?Kn(Tn,null,t.slice()):typeof t=="object"?xi(t):Kn(Ec,null,String(t))}function xi(t){return t.el===null||t.memo?t:jr(t)}function Ac(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Pe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ac(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(co in e)?e._ctx=Ln:r===3&&Ln&&(Ln.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:Ln},n=32):(e=String(e),i&64?(n=16,e=[qg(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=uc([e.class,i.class]));else if(r==="style")e.style=cc([e.style,i.style]);else if(eo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Pe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Mn(t,e,n,i=null){fn(t,e,7,[n,i])}const $g=ud();let Zg=0;function Kg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||$g,s={uid:Zg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new dm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ad(i,r),emitsOptions:Zh(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Qm.bind(null,s),t.ce&&t.ce(s),s}let Mt=null;const qr=t=>{Mt=t,t.scope.on()},Xi=()=>{Mt&&Mt.scope.off(),Mt=null};function md(t){return t.vnode.shapeFlag&4}let Ds=!1;function Jg(t,e=!1){Ds=e;const{props:n,children:i}=t.vnode,r=md(t);Pg(t,n,r,e),Ng(t,i);const s=r?Qg(t,e):void 0;return Ds=!1,s}function Qg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gh(new Proxy(t.ctx,Eg));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?t0(t):null;qr(t),ts();const s=Si(i,t,0,[t.props,r]);if(ns(),Xi(),Eh(s)){if(s.then(Xi,Xi),e)return s.then(a=>{Su(t,a,e)}).catch(a=>{ro(a,t,0)});t.asyncDep=s}else Su(t,s,e)}else gd(t,e)}function Su(t,e,n){Ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:gt(e)&&(t.setupState=Vh(e)),gd(t,n)}let wu;function gd(t,e,n){const i=t.type;if(!t.render){if(!e&&wu&&!i.render){const r=i.template;if(r){const{isCustomElement:s,compilerOptions:a}=t.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Rt(Rt({isCustomElement:s,delimiters:o},a),l);i.render=wu(r,c)}}t.render=i.render||un}qr(t),ts(),Ag(t),ns(),Xi()}function e0(t){return new Proxy(t.attrs,{get(e,n){return Vt(t,"get","$attrs"),e[n]}})}function t0(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=e0(t))},slots:t.slots,emit:t.emit,expose:e}}function uo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vh(Gh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ba)return Ba[n](t)}}))}function n0(t){return Ue(t)&&"__vccOpts"in t}const i0=(t,e)=>jm(t,e,Ds),r0="3.2.37",s0="http://www.w3.org/2000/svg",zi=typeof document!="undefined"?document:null,Tu=zi&&zi.createElement("template"),a0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?zi.createElementNS(s0,t):zi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>zi.createTextNode(t),createComment:t=>zi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>zi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Tu.innerHTML=i?`<svg>${t}</svg>`:t;const o=Tu.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function o0(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function l0(t,e,n){const i=t.style,r=mt(n);if(n&&!r){for(const s in n)Ul(i,s,n[s]);if(e&&!mt(e))for(const s in e)n[s]==null&&Ul(i,s,"")}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Eu=/\s*!important$/;function Ul(t,e,n){if(Pe(n))n.forEach(i=>Ul(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=c0(t,e);Eu.test(n)?t.setProperty(es(i),n.replace(Eu,""),"important"):t[i]=n}}const Au=["Webkit","Moz","ms"],ko={};function c0(t,e){const n=ko[e];if(n)return n;let i=Yr(e);if(i!=="filter"&&i in t)return ko[e]=i;i=Dh(i);for(let r=0;r<Au.length;r++){const s=Au[r]+i;if(s in t)return ko[e]=s}return e}const Cu="http://www.w3.org/1999/xlink";function u0(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Cu,e.slice(6,e.length)):t.setAttributeNS(Cu,e,n);else{const s=nm(e);n==null||s&&!Sh(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function f0(t,e,n,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sh(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(e)}const[_d,h0]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let zl=0;const d0=Promise.resolve(),p0=()=>{zl=0},m0=()=>zl||(d0.then(p0),zl=_d());function Ar(t,e,n,i){t.addEventListener(e,n,i)}function g0(t,e,n,i){t.removeEventListener(e,n,i)}function _0(t,e,n,i,r=null){const s=t._vei||(t._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=x0(e);if(i){const c=s[e]=v0(i,r);Ar(t,o,c,l)}else a&&(g0(t,o,a,l),s[e]=void 0)}}const Du=/(?:Once|Passive|Capture)$/;function x0(t){let e;if(Du.test(t)){e={};let n;for(;n=t.match(Du);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[es(t.slice(2)),e]}function v0(t,e){const n=i=>{const r=i.timeStamp||_d();(h0||r>=n.attached-1)&&fn(y0(i,n.value),e,5,[i])};return n.value=t,n.attached=m0(),n}function y0(t,e){if(Pe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Lu=/^on[a-z]/,M0=(t,e,n,i,r=!1,s,a,o,l)=>{e==="class"?o0(t,i,r):e==="style"?l0(t,n,i):eo(e)?fc(e)||_0(t,e,n,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):b0(t,e,i,r))?f0(t,e,i,s,a,o,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),u0(t,e,i,r))};function b0(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Lu.test(e)&&Ue(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Lu.test(e)&&mt(n)?!1:e in t}const Ru=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Pe(e)?n=>Aa(e,n):e};function S0(t){t.target.composing=!0}function Pu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const w0={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=Ru(r);const s=i||r.props&&r.props.type==="number";Ar(t,e?"change":"input",a=>{if(a.target.composing)return;let o=t.value;n&&(o=o.trim()),s&&(o=Tl(o)),t._assign(o)}),n&&Ar(t,"change",()=>{t.value=t.value.trim()}),e||(Ar(t,"compositionstart",S0),Ar(t,"compositionend",Pu),Ar(t,"change",Pu))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=Ru(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&Tl(t.value)===e))return;const a=e==null?"":e;t.value!==a&&(t.value=a)}},T0=Rt({patchProp:M0},a0);let Iu;function E0(){return Iu||(Iu=zg(T0))}const A0=(...t)=>{const e=E0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=C0(i);if(!r)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function C0(t){return mt(t)?document.querySelector(t):t}//! moment.js
//! version : 2.29.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var xd;function Me(){return xd.apply(null,arguments)}function D0(t){xd=t}function dn(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function $i(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function $e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cc(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var e;for(e in t)if($e(t,e))return!1;return!0}function Nt(t){return t===void 0}function ti(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function zs(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function vd(t,e){var n=[],i,r=t.length;for(i=0;i<r;++i)n.push(e(t[i],i));return n}function vi(t,e){for(var n in e)$e(e,n)&&(t[n]=e[n]);return $e(e,"toString")&&(t.toString=e.toString),$e(e,"valueOf")&&(t.valueOf=e.valueOf),t}function On(t,e,n,i){return Vd(t,e,n,i,!0).utc()}function L0(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Ne(t){return t._pf==null&&(t._pf=L0()),t._pf}var Bl;Array.prototype.some?Bl=Array.prototype.some:Bl=function(t){var e=Object(this),n=e.length>>>0,i;for(i=0;i<n;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};function Dc(t){if(t._isValid==null){var e=Ne(t),n=Bl.call(e.parsedDateParts,function(r){return r!=null}),i=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidEra&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(i=i&&e.charsLeftOver===0&&e.unusedTokens.length===0&&e.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=i;else return i}return t._isValid}function fo(t){var e=On(NaN);return t!=null?vi(Ne(e),t):Ne(e).userInvalidated=!0,e}var Fu=Me.momentProperties=[],Uo=!1;function Lc(t,e){var n,i,r,s=Fu.length;if(Nt(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),Nt(e._i)||(t._i=e._i),Nt(e._f)||(t._f=e._f),Nt(e._l)||(t._l=e._l),Nt(e._strict)||(t._strict=e._strict),Nt(e._tzm)||(t._tzm=e._tzm),Nt(e._isUTC)||(t._isUTC=e._isUTC),Nt(e._offset)||(t._offset=e._offset),Nt(e._pf)||(t._pf=Ne(e)),Nt(e._locale)||(t._locale=e._locale),s>0)for(n=0;n<s;n++)i=Fu[n],r=e[i],Nt(r)||(t[i]=r);return t}function Bs(t){Lc(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Uo===!1&&(Uo=!0,Me.updateOffset(this),Uo=!1)}function pn(t){return t instanceof Bs||t!=null&&t._isAMomentObject!=null}function yd(t){Me.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+t)}function Kt(t,e){var n=!0;return vi(function(){if(Me.deprecationHandler!=null&&Me.deprecationHandler(null,t),n){var i=[],r,s,a,o=arguments.length;for(s=0;s<o;s++){if(r="",typeof arguments[s]=="object"){r+=`
[`+s+"] ";for(a in arguments[0])$e(arguments[0],a)&&(r+=a+": "+arguments[0][a]+", ");r=r.slice(0,-2)}else r=arguments[s];i.push(r)}yd(t+`
Arguments: `+Array.prototype.slice.call(i).join("")+`
`+new Error().stack),n=!1}return e.apply(this,arguments)},e)}var Nu={};function Md(t,e){Me.deprecationHandler!=null&&Me.deprecationHandler(t,e),Nu[t]||(yd(e),Nu[t]=!0)}Me.suppressDeprecationWarnings=!1;Me.deprecationHandler=null;function kn(t){return typeof Function!="undefined"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function R0(t){var e,n;for(n in t)$e(t,n)&&(e=t[n],kn(e)?this[n]=e:this["_"+n]=e);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Hl(t,e){var n=vi({},t),i;for(i in e)$e(e,i)&&($i(t[i])&&$i(e[i])?(n[i]={},vi(n[i],t[i]),vi(n[i],e[i])):e[i]!=null?n[i]=e[i]:delete n[i]);for(i in t)$e(t,i)&&!$e(e,i)&&$i(t[i])&&(n[i]=vi({},n[i]));return n}function Rc(t){t!=null&&this.set(t)}var Gl;Object.keys?Gl=Object.keys:Gl=function(t){var e,n=[];for(e in t)$e(t,e)&&n.push(e);return n};var P0={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function I0(t,e,n){var i=this._calendar[t]||this._calendar.sameElse;return kn(i)?i.call(e,n):i}function Nn(t,e,n){var i=""+Math.abs(t),r=e-i.length,s=t>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+i}var Pc=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ea=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,zo={},Ur={};function Ee(t,e,n,i){var r=i;typeof i=="string"&&(r=function(){return this[i]()}),t&&(Ur[t]=r),e&&(Ur[e[0]]=function(){return Nn(r.apply(this,arguments),e[1],e[2])}),n&&(Ur[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),t)})}function F0(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function N0(t){var e=t.match(Pc),n,i;for(n=0,i=e.length;n<i;n++)Ur[e[n]]?e[n]=Ur[e[n]]:e[n]=F0(e[n]);return function(r){var s="",a;for(a=0;a<i;a++)s+=kn(e[a])?e[a].call(r,t):e[a];return s}}function La(t,e){return t.isValid()?(e=bd(e,t.localeData()),zo[e]=zo[e]||N0(e),zo[e](t)):t.localeData().invalidDate()}function bd(t,e){var n=5;function i(r){return e.longDateFormat(r)||r}for(ea.lastIndex=0;n>=0&&ea.test(t);)t=t.replace(ea,i),ea.lastIndex=0,n-=1;return t}var O0={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function k0(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.match(Pc).map(function(i){return i==="MMMM"||i==="MM"||i==="DD"||i==="dddd"?i.slice(1):i}).join(""),this._longDateFormat[t])}var U0="Invalid date";function z0(){return this._invalidDate}var B0="%d",H0=/\d{1,2}/;function G0(t){return this._ordinal.replace("%d",t)}var V0={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function W0(t,e,n,i){var r=this._relativeTime[n];return kn(r)?r(t,e,n,i):r.replace(/%d/i,t)}function Y0(t,e){var n=this._relativeTime[t>0?"future":"past"];return kn(n)?n(e):n.replace(/%s/i,e)}var ws={};function wt(t,e){var n=t.toLowerCase();ws[n]=ws[n+"s"]=ws[e]=t}function Jt(t){return typeof t=="string"?ws[t]||ws[t.toLowerCase()]:void 0}function Ic(t){var e={},n,i;for(i in t)$e(t,i)&&(n=Jt(i),n&&(e[n]=t[i]));return e}var Sd={};function Tt(t,e){Sd[t]=e}function j0(t){var e=[],n;for(n in t)$e(t,n)&&e.push({unit:n,priority:Sd[n]});return e.sort(function(i,r){return i.priority-r.priority}),e}function ho(t){return t%4===0&&t%100!==0||t%400===0}function Xt(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function He(t){var e=+t,n=0;return e!==0&&isFinite(e)&&(n=Xt(e)),n}function is(t,e){return function(n){return n!=null?(wd(this,t,n),Me.updateOffset(this,e),this):Ga(this,t)}}function Ga(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function wd(t,e,n){t.isValid()&&!isNaN(n)&&(e==="FullYear"&&ho(t.year())&&t.month()===1&&t.date()===29?(n=He(n),t._d["set"+(t._isUTC?"UTC":"")+e](n,t.month(),vo(n,t.month()))):t._d["set"+(t._isUTC?"UTC":"")+e](n))}function q0(t){return t=Jt(t),kn(this[t])?this[t]():this}function X0(t,e){if(typeof t=="object"){t=Ic(t);var n=j0(t),i,r=n.length;for(i=0;i<r;i++)this[n[i].unit](t[n[i].unit])}else if(t=Jt(t),kn(this[t]))return this[t](e);return this}var Td=/\d/,Yt=/\d\d/,Ed=/\d{3}/,Fc=/\d{4}/,po=/[+-]?\d{6}/,st=/\d\d?/,Ad=/\d\d\d\d?/,Cd=/\d\d\d\d\d\d?/,mo=/\d{1,3}/,Nc=/\d{1,4}/,go=/[+-]?\d{1,6}/,rs=/\d+/,_o=/[+-]?\d+/,$0=/Z|[+-]\d\d:?\d\d/gi,xo=/Z|[+-]\d\d(?::?\d\d)?/gi,Z0=/[+-]?\d+(\.\d{1,3})?/,Hs=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Va;Va={};function be(t,e,n){Va[t]=kn(e)?e:function(i,r){return i&&n?n:e}}function K0(t,e){return $e(Va,t)?Va[t](e._strict,e._locale):new RegExp(J0(t))}function J0(t){return Ht(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,n,i,r,s){return n||i||r||s}))}function Ht(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Vl={};function nt(t,e){var n,i=e,r;for(typeof t=="string"&&(t=[t]),ti(e)&&(i=function(s,a){a[e]=He(s)}),r=t.length,n=0;n<r;n++)Vl[t[n]]=i}function Gs(t,e){nt(t,function(n,i,r,s){r._w=r._w||{},e(n,r._w,r,s)})}function Q0(t,e,n){e!=null&&$e(Vl,t)&&Vl[t](e,n._a,n,t)}var St=0,$n=1,Cn=2,dt=3,ln=4,Zn=5,Gi=6,e_=7,t_=8;function n_(t,e){return(t%e+e)%e}var ct;Array.prototype.indexOf?ct=Array.prototype.indexOf:ct=function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};function vo(t,e){if(isNaN(t)||isNaN(e))return NaN;var n=n_(e,12);return t+=(e-n)/12,n===1?ho(t)?29:28:31-n%7%2}Ee("M",["MM",2],"Mo",function(){return this.month()+1});Ee("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});Ee("MMMM",0,0,function(t){return this.localeData().months(this,t)});wt("month","M");Tt("month",8);be("M",st);be("MM",st,Yt);be("MMM",function(t,e){return e.monthsShortRegex(t)});be("MMMM",function(t,e){return e.monthsRegex(t)});nt(["M","MM"],function(t,e){e[$n]=He(t)-1});nt(["MMM","MMMM"],function(t,e,n,i){var r=n._locale.monthsParse(t,i,n._strict);r!=null?e[$n]=r:Ne(n).invalidMonth=t});var i_="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Dd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ld=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,r_=Hs,s_=Hs;function a_(t,e){return t?dn(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||Ld).test(e)?"format":"standalone"][t.month()]:dn(this._months)?this._months:this._months.standalone}function o_(t,e){return t?dn(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[Ld.test(e)?"format":"standalone"][t.month()]:dn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function l_(t,e,n){var i,r,s,a=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)s=On([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(s,"").toLocaleLowerCase();return n?e==="MMM"?(r=ct.call(this._shortMonthsParse,a),r!==-1?r:null):(r=ct.call(this._longMonthsParse,a),r!==-1?r:null):e==="MMM"?(r=ct.call(this._shortMonthsParse,a),r!==-1?r:(r=ct.call(this._longMonthsParse,a),r!==-1?r:null)):(r=ct.call(this._longMonthsParse,a),r!==-1?r:(r=ct.call(this._shortMonthsParse,a),r!==-1?r:null))}function c_(t,e,n){var i,r,s;if(this._monthsParseExact)return l_.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(r=On([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),!n&&!this._monthsParse[i]&&(s="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[i]=new RegExp(s.replace(".",""),"i")),n&&e==="MMMM"&&this._longMonthsParse[i].test(t))return i;if(n&&e==="MMM"&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}}function Rd(t,e){var n;if(!t.isValid())return t;if(typeof e=="string"){if(/^\d+$/.test(e))e=He(e);else if(e=t.localeData().monthsParse(e),!ti(e))return t}return n=Math.min(t.date(),vo(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function Pd(t){return t!=null?(Rd(this,t),Me.updateOffset(this,!0),this):Ga(this,"Month")}function u_(){return vo(this.year(),this.month())}function f_(t){return this._monthsParseExact?($e(this,"_monthsRegex")||Id.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):($e(this,"_monthsShortRegex")||(this._monthsShortRegex=r_),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function h_(t){return this._monthsParseExact?($e(this,"_monthsRegex")||Id.call(this),t?this._monthsStrictRegex:this._monthsRegex):($e(this,"_monthsRegex")||(this._monthsRegex=s_),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function Id(){function t(a,o){return o.length-a.length}var e=[],n=[],i=[],r,s;for(r=0;r<12;r++)s=On([2e3,r]),e.push(this.monthsShort(s,"")),n.push(this.months(s,"")),i.push(this.months(s,"")),i.push(this.monthsShort(s,""));for(e.sort(t),n.sort(t),i.sort(t),r=0;r<12;r++)e[r]=Ht(e[r]),n[r]=Ht(n[r]);for(r=0;r<24;r++)i[r]=Ht(i[r]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+e.join("|")+")","i")}Ee("Y",0,0,function(){var t=this.year();return t<=9999?Nn(t,4):"+"+t});Ee(0,["YY",2],0,function(){return this.year()%100});Ee(0,["YYYY",4],0,"year");Ee(0,["YYYYY",5],0,"year");Ee(0,["YYYYYY",6,!0],0,"year");wt("year","y");Tt("year",1);be("Y",_o);be("YY",st,Yt);be("YYYY",Nc,Fc);be("YYYYY",go,po);be("YYYYYY",go,po);nt(["YYYYY","YYYYYY"],St);nt("YYYY",function(t,e){e[St]=t.length===2?Me.parseTwoDigitYear(t):He(t)});nt("YY",function(t,e){e[St]=Me.parseTwoDigitYear(t)});nt("Y",function(t,e){e[St]=parseInt(t,10)});function Ts(t){return ho(t)?366:365}Me.parseTwoDigitYear=function(t){return He(t)+(He(t)>68?1900:2e3)};var Fd=is("FullYear",!0);function d_(){return ho(this.year())}function p_(t,e,n,i,r,s,a){var o;return t<100&&t>=0?(o=new Date(t+400,e,n,i,r,s,a),isFinite(o.getFullYear())&&o.setFullYear(t)):o=new Date(t,e,n,i,r,s,a),o}function Ls(t){var e,n;return t<100&&t>=0?(n=Array.prototype.slice.call(arguments),n[0]=t+400,e=new Date(Date.UTC.apply(null,n)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)):e=new Date(Date.UTC.apply(null,arguments)),e}function Wa(t,e,n){var i=7+e-n,r=(7+Ls(t,0,i).getUTCDay()-e)%7;return-r+i-1}function Nd(t,e,n,i,r){var s=(7+n-i)%7,a=Wa(t,i,r),o=1+7*(e-1)+s+a,l,c;return o<=0?(l=t-1,c=Ts(l)+o):o>Ts(t)?(l=t+1,c=o-Ts(t)):(l=t,c=o),{year:l,dayOfYear:c}}function Rs(t,e,n){var i=Wa(t.year(),e,n),r=Math.floor((t.dayOfYear()-i-1)/7)+1,s,a;return r<1?(a=t.year()-1,s=r+Jn(a,e,n)):r>Jn(t.year(),e,n)?(s=r-Jn(t.year(),e,n),a=t.year()+1):(a=t.year(),s=r),{week:s,year:a}}function Jn(t,e,n){var i=Wa(t,e,n),r=Wa(t+1,e,n);return(Ts(t)-i+r)/7}Ee("w",["ww",2],"wo","week");Ee("W",["WW",2],"Wo","isoWeek");wt("week","w");wt("isoWeek","W");Tt("week",5);Tt("isoWeek",5);be("w",st);be("ww",st,Yt);be("W",st);be("WW",st,Yt);Gs(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=He(t)});function m_(t){return Rs(t,this._week.dow,this._week.doy).week}var g_={dow:0,doy:6};function __(){return this._week.dow}function x_(){return this._week.doy}function v_(t){var e=this.localeData().week(this);return t==null?e:this.add((t-e)*7,"d")}function y_(t){var e=Rs(this,1,4).week;return t==null?e:this.add((t-e)*7,"d")}Ee("d",0,"do","day");Ee("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});Ee("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});Ee("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});Ee("e",0,0,"weekday");Ee("E",0,0,"isoWeekday");wt("day","d");wt("weekday","e");wt("isoWeekday","E");Tt("day",11);Tt("weekday",11);Tt("isoWeekday",11);be("d",st);be("e",st);be("E",st);be("dd",function(t,e){return e.weekdaysMinRegex(t)});be("ddd",function(t,e){return e.weekdaysShortRegex(t)});be("dddd",function(t,e){return e.weekdaysRegex(t)});Gs(["dd","ddd","dddd"],function(t,e,n,i){var r=n._locale.weekdaysParse(t,i,n._strict);r!=null?e.d=r:Ne(n).invalidWeekday=t});Gs(["d","e","E"],function(t,e,n,i){e[i]=He(t)});function M_(t,e){return typeof t!="string"?t:isNaN(t)?(t=e.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function b_(t,e){return typeof t=="string"?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function Oc(t,e){return t.slice(e,7).concat(t.slice(0,e))}var S_="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Od="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),w_="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),T_=Hs,E_=Hs,A_=Hs;function C_(t,e){var n=dn(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(e)?"format":"standalone"];return t===!0?Oc(n,this._week.dow):t?n[t.day()]:n}function D_(t){return t===!0?Oc(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function L_(t){return t===!0?Oc(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function R_(t,e,n){var i,r,s,a=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)s=On([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(s,"").toLocaleLowerCase();return n?e==="dddd"?(r=ct.call(this._weekdaysParse,a),r!==-1?r:null):e==="ddd"?(r=ct.call(this._shortWeekdaysParse,a),r!==-1?r:null):(r=ct.call(this._minWeekdaysParse,a),r!==-1?r:null):e==="dddd"?(r=ct.call(this._weekdaysParse,a),r!==-1||(r=ct.call(this._shortWeekdaysParse,a),r!==-1)?r:(r=ct.call(this._minWeekdaysParse,a),r!==-1?r:null)):e==="ddd"?(r=ct.call(this._shortWeekdaysParse,a),r!==-1||(r=ct.call(this._weekdaysParse,a),r!==-1)?r:(r=ct.call(this._minWeekdaysParse,a),r!==-1?r:null)):(r=ct.call(this._minWeekdaysParse,a),r!==-1||(r=ct.call(this._weekdaysParse,a),r!==-1)?r:(r=ct.call(this._shortWeekdaysParse,a),r!==-1?r:null))}function P_(t,e,n){var i,r,s;if(this._weekdaysParseExact)return R_.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(r=On([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(s="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[i]=new RegExp(s.replace(".",""),"i")),n&&e==="dddd"&&this._fullWeekdaysParse[i].test(t))return i;if(n&&e==="ddd"&&this._shortWeekdaysParse[i].test(t))return i;if(n&&e==="dd"&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}}function I_(t){if(!this.isValid())return t!=null?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return t!=null?(t=M_(t,this.localeData()),this.add(t-e,"d")):e}function F_(t){if(!this.isValid())return t!=null?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return t==null?e:this.add(t-e,"d")}function N_(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var e=b_(t,this.localeData());return this.day(this.day()%7?e:e-7)}else return this.day()||7}function O_(t){return this._weekdaysParseExact?($e(this,"_weekdaysRegex")||kc.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):($e(this,"_weekdaysRegex")||(this._weekdaysRegex=T_),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function k_(t){return this._weekdaysParseExact?($e(this,"_weekdaysRegex")||kc.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):($e(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=E_),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function U_(t){return this._weekdaysParseExact?($e(this,"_weekdaysRegex")||kc.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):($e(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=A_),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function kc(){function t(u,f){return f.length-u.length}var e=[],n=[],i=[],r=[],s,a,o,l,c;for(s=0;s<7;s++)a=On([2e3,1]).day(s),o=Ht(this.weekdaysMin(a,"")),l=Ht(this.weekdaysShort(a,"")),c=Ht(this.weekdays(a,"")),e.push(o),n.push(l),i.push(c),r.push(o),r.push(l),r.push(c);e.sort(t),n.sort(t),i.sort(t),r.sort(t),this._weekdaysRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+e.join("|")+")","i")}function Uc(){return this.hours()%12||12}function z_(){return this.hours()||24}Ee("H",["HH",2],0,"hour");Ee("h",["hh",2],0,Uc);Ee("k",["kk",2],0,z_);Ee("hmm",0,0,function(){return""+Uc.apply(this)+Nn(this.minutes(),2)});Ee("hmmss",0,0,function(){return""+Uc.apply(this)+Nn(this.minutes(),2)+Nn(this.seconds(),2)});Ee("Hmm",0,0,function(){return""+this.hours()+Nn(this.minutes(),2)});Ee("Hmmss",0,0,function(){return""+this.hours()+Nn(this.minutes(),2)+Nn(this.seconds(),2)});function kd(t,e){Ee(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}kd("a",!0);kd("A",!1);wt("hour","h");Tt("hour",13);function Ud(t,e){return e._meridiemParse}be("a",Ud);be("A",Ud);be("H",st);be("h",st);be("k",st);be("HH",st,Yt);be("hh",st,Yt);be("kk",st,Yt);be("hmm",Ad);be("hmmss",Cd);be("Hmm",Ad);be("Hmmss",Cd);nt(["H","HH"],dt);nt(["k","kk"],function(t,e,n){var i=He(t);e[dt]=i===24?0:i});nt(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t});nt(["h","hh"],function(t,e,n){e[dt]=He(t),Ne(n).bigHour=!0});nt("hmm",function(t,e,n){var i=t.length-2;e[dt]=He(t.substr(0,i)),e[ln]=He(t.substr(i)),Ne(n).bigHour=!0});nt("hmmss",function(t,e,n){var i=t.length-4,r=t.length-2;e[dt]=He(t.substr(0,i)),e[ln]=He(t.substr(i,2)),e[Zn]=He(t.substr(r)),Ne(n).bigHour=!0});nt("Hmm",function(t,e,n){var i=t.length-2;e[dt]=He(t.substr(0,i)),e[ln]=He(t.substr(i))});nt("Hmmss",function(t,e,n){var i=t.length-4,r=t.length-2;e[dt]=He(t.substr(0,i)),e[ln]=He(t.substr(i,2)),e[Zn]=He(t.substr(r))});function B_(t){return(t+"").toLowerCase().charAt(0)==="p"}var H_=/[ap]\.?m?\.?/i,G_=is("Hours",!0);function V_(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}var zd={calendar:P0,longDateFormat:O0,invalidDate:U0,ordinal:B0,dayOfMonthOrdinalParse:H0,relativeTime:V0,months:i_,monthsShort:Dd,week:g_,weekdays:S_,weekdaysMin:w_,weekdaysShort:Od,meridiemParse:H_},at={},fs={},Ps;function W_(t,e){var n,i=Math.min(t.length,e.length);for(n=0;n<i;n+=1)if(t[n]!==e[n])return n;return i}function Ou(t){return t&&t.toLowerCase().replace("_","-")}function Y_(t){for(var e=0,n,i,r,s;e<t.length;){for(s=Ou(t[e]).split("-"),n=s.length,i=Ou(t[e+1]),i=i?i.split("-"):null;n>0;){if(r=yo(s.slice(0,n).join("-")),r)return r;if(i&&i.length>=n&&W_(s,i)>=n-1)break;n--}e++}return Ps}function j_(t){return t.match("^[^/\\\\]*$")!=null}function yo(t){var e=null,n;if(at[t]===void 0&&typeof Wr!="undefined"&&Wr&&Wr.exports&&j_(t))try{e=Ps._abbr,n=require,n("./locale/"+t),wi(e)}catch{at[t]=null}return at[t]}function wi(t,e){var n;return t&&(Nt(e)?n=ri(t):n=zc(t,e),n?Ps=n:typeof console!="undefined"&&console.warn&&console.warn("Locale "+t+" not found. Did you forget to load it?")),Ps._abbr}function zc(t,e){if(e!==null){var n,i=zd;if(e.abbr=t,at[t]!=null)Md("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=at[t]._config;else if(e.parentLocale!=null)if(at[e.parentLocale]!=null)i=at[e.parentLocale]._config;else if(n=yo(e.parentLocale),n!=null)i=n._config;else return fs[e.parentLocale]||(fs[e.parentLocale]=[]),fs[e.parentLocale].push({name:t,config:e}),null;return at[t]=new Rc(Hl(i,e)),fs[t]&&fs[t].forEach(function(r){zc(r.name,r.config)}),wi(t),at[t]}else return delete at[t],null}function q_(t,e){if(e!=null){var n,i,r=zd;at[t]!=null&&at[t].parentLocale!=null?at[t].set(Hl(at[t]._config,e)):(i=yo(t),i!=null&&(r=i._config),e=Hl(r,e),i==null&&(e.abbr=t),n=new Rc(e),n.parentLocale=at[t],at[t]=n),wi(t)}else at[t]!=null&&(at[t].parentLocale!=null?(at[t]=at[t].parentLocale,t===wi()&&wi(t)):at[t]!=null&&delete at[t]);return at[t]}function ri(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Ps;if(!dn(t)){if(e=yo(t),e)return e;t=[t]}return Y_(t)}function X_(){return Gl(at)}function Bc(t){var e,n=t._a;return n&&Ne(t).overflow===-2&&(e=n[$n]<0||n[$n]>11?$n:n[Cn]<1||n[Cn]>vo(n[St],n[$n])?Cn:n[dt]<0||n[dt]>24||n[dt]===24&&(n[ln]!==0||n[Zn]!==0||n[Gi]!==0)?dt:n[ln]<0||n[ln]>59?ln:n[Zn]<0||n[Zn]>59?Zn:n[Gi]<0||n[Gi]>999?Gi:-1,Ne(t)._overflowDayOfYear&&(e<St||e>Cn)&&(e=Cn),Ne(t)._overflowWeeks&&e===-1&&(e=e_),Ne(t)._overflowWeekday&&e===-1&&(e=t_),Ne(t).overflow=e),t}var $_=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Z_=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,K_=/Z|[+-]\d\d(?::?\d\d)?/,ta=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Bo=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],J_=/^\/?Date\((-?\d+)/i,Q_=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,ex={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Bd(t){var e,n,i=t._i,r=$_.exec(i)||Z_.exec(i),s,a,o,l,c=ta.length,u=Bo.length;if(r){for(Ne(t).iso=!0,e=0,n=c;e<n;e++)if(ta[e][1].exec(r[1])){a=ta[e][0],s=ta[e][2]!==!1;break}if(a==null){t._isValid=!1;return}if(r[3]){for(e=0,n=u;e<n;e++)if(Bo[e][1].exec(r[3])){o=(r[2]||" ")+Bo[e][0];break}if(o==null){t._isValid=!1;return}}if(!s&&o!=null){t._isValid=!1;return}if(r[4])if(K_.exec(r[4]))l="Z";else{t._isValid=!1;return}t._f=a+(o||"")+(l||""),Gc(t)}else t._isValid=!1}function tx(t,e,n,i,r,s){var a=[nx(t),Dd.indexOf(e),parseInt(n,10),parseInt(i,10),parseInt(r,10)];return s&&a.push(parseInt(s,10)),a}function nx(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function ix(t){return t.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function rx(t,e,n){if(t){var i=Od.indexOf(t),r=new Date(e[0],e[1],e[2]).getDay();if(i!==r)return Ne(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function sx(t,e,n){if(t)return ex[t];if(e)return 0;var i=parseInt(n,10),r=i%100,s=(i-r)/100;return s*60+r}function Hd(t){var e=Q_.exec(ix(t._i)),n;if(e){if(n=tx(e[4],e[3],e[2],e[5],e[6],e[7]),!rx(e[1],n,t))return;t._a=n,t._tzm=sx(e[8],e[9],e[10]),t._d=Ls.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),Ne(t).rfc2822=!0}else t._isValid=!1}function ax(t){var e=J_.exec(t._i);if(e!==null){t._d=new Date(+e[1]);return}if(Bd(t),t._isValid===!1)delete t._isValid;else return;if(Hd(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:Me.createFromInputFallback(t)}Me.createFromInputFallback=Kt("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function Cr(t,e,n){return t!=null?t:e!=null?e:n}function ox(t){var e=new Date(Me.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function Hc(t){var e,n,i=[],r,s,a;if(!t._d){for(r=ox(t),t._w&&t._a[Cn]==null&&t._a[$n]==null&&lx(t),t._dayOfYear!=null&&(a=Cr(t._a[St],r[St]),(t._dayOfYear>Ts(a)||t._dayOfYear===0)&&(Ne(t)._overflowDayOfYear=!0),n=Ls(a,0,t._dayOfYear),t._a[$n]=n.getUTCMonth(),t._a[Cn]=n.getUTCDate()),e=0;e<3&&t._a[e]==null;++e)t._a[e]=i[e]=r[e];for(;e<7;e++)t._a[e]=i[e]=t._a[e]==null?e===2?1:0:t._a[e];t._a[dt]===24&&t._a[ln]===0&&t._a[Zn]===0&&t._a[Gi]===0&&(t._nextDay=!0,t._a[dt]=0),t._d=(t._useUTC?Ls:p_).apply(null,i),s=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[dt]=24),t._w&&typeof t._w.d!="undefined"&&t._w.d!==s&&(Ne(t).weekdayMismatch=!0)}}function lx(t){var e,n,i,r,s,a,o,l,c;e=t._w,e.GG!=null||e.W!=null||e.E!=null?(s=1,a=4,n=Cr(e.GG,t._a[St],Rs(rt(),1,4).year),i=Cr(e.W,1),r=Cr(e.E,1),(r<1||r>7)&&(l=!0)):(s=t._locale._week.dow,a=t._locale._week.doy,c=Rs(rt(),s,a),n=Cr(e.gg,t._a[St],c.year),i=Cr(e.w,c.week),e.d!=null?(r=e.d,(r<0||r>6)&&(l=!0)):e.e!=null?(r=e.e+s,(e.e<0||e.e>6)&&(l=!0)):r=s),i<1||i>Jn(n,s,a)?Ne(t)._overflowWeeks=!0:l!=null?Ne(t)._overflowWeekday=!0:(o=Nd(n,i,r,s,a),t._a[St]=o.year,t._dayOfYear=o.dayOfYear)}Me.ISO_8601=function(){};Me.RFC_2822=function(){};function Gc(t){if(t._f===Me.ISO_8601){Bd(t);return}if(t._f===Me.RFC_2822){Hd(t);return}t._a=[],Ne(t).empty=!0;var e=""+t._i,n,i,r,s,a,o=e.length,l=0,c,u;for(r=bd(t._f,t._locale).match(Pc)||[],u=r.length,n=0;n<u;n++)s=r[n],i=(e.match(K0(s,t))||[])[0],i&&(a=e.substr(0,e.indexOf(i)),a.length>0&&Ne(t).unusedInput.push(a),e=e.slice(e.indexOf(i)+i.length),l+=i.length),Ur[s]?(i?Ne(t).empty=!1:Ne(t).unusedTokens.push(s),Q0(s,i,t)):t._strict&&!i&&Ne(t).unusedTokens.push(s);Ne(t).charsLeftOver=o-l,e.length>0&&Ne(t).unusedInput.push(e),t._a[dt]<=12&&Ne(t).bigHour===!0&&t._a[dt]>0&&(Ne(t).bigHour=void 0),Ne(t).parsedDateParts=t._a.slice(0),Ne(t).meridiem=t._meridiem,t._a[dt]=cx(t._locale,t._a[dt],t._meridiem),c=Ne(t).era,c!==null&&(t._a[St]=t._locale.erasConvertYear(c,t._a[St])),Hc(t),Bc(t)}function cx(t,e,n){var i;return n==null?e:t.meridiemHour!=null?t.meridiemHour(e,n):(t.isPM!=null&&(i=t.isPM(n),i&&e<12&&(e+=12),!i&&e===12&&(e=0)),e)}function ux(t){var e,n,i,r,s,a,o=!1,l=t._f.length;if(l===0){Ne(t).invalidFormat=!0,t._d=new Date(NaN);return}for(r=0;r<l;r++)s=0,a=!1,e=Lc({},t),t._useUTC!=null&&(e._useUTC=t._useUTC),e._f=t._f[r],Gc(e),Dc(e)&&(a=!0),s+=Ne(e).charsLeftOver,s+=Ne(e).unusedTokens.length*10,Ne(e).score=s,o?s<i&&(i=s,n=e):(i==null||s<i||a)&&(i=s,n=e,a&&(o=!0));vi(t,n||e)}function fx(t){if(!t._d){var e=Ic(t._i),n=e.day===void 0?e.date:e.day;t._a=vd([e.year,e.month,n,e.hour,e.minute,e.second,e.millisecond],function(i){return i&&parseInt(i,10)}),Hc(t)}}function hx(t){var e=new Bs(Bc(Gd(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function Gd(t){var e=t._i,n=t._f;return t._locale=t._locale||ri(t._l),e===null||n===void 0&&e===""?fo({nullInput:!0}):(typeof e=="string"&&(t._i=e=t._locale.preparse(e)),pn(e)?new Bs(Bc(e)):(zs(e)?t._d=e:dn(n)?ux(t):n?Gc(t):dx(t),Dc(t)||(t._d=null),t))}function dx(t){var e=t._i;Nt(e)?t._d=new Date(Me.now()):zs(e)?t._d=new Date(e.valueOf()):typeof e=="string"?ax(t):dn(e)?(t._a=vd(e.slice(0),function(n){return parseInt(n,10)}),Hc(t)):$i(e)?fx(t):ti(e)?t._d=new Date(e):Me.createFromInputFallback(t)}function Vd(t,e,n,i,r){var s={};return(e===!0||e===!1)&&(i=e,e=void 0),(n===!0||n===!1)&&(i=n,n=void 0),($i(t)&&Cc(t)||dn(t)&&t.length===0)&&(t=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=r,s._l=n,s._i=t,s._f=e,s._strict=i,hx(s)}function rt(t,e,n,i){return Vd(t,e,n,i,!1)}var px=Kt("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=rt.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:fo()}),mx=Kt("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=rt.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:fo()});function Wd(t,e){var n,i;if(e.length===1&&dn(e[0])&&(e=e[0]),!e.length)return rt();for(n=e[0],i=1;i<e.length;++i)(!e[i].isValid()||e[i][t](n))&&(n=e[i]);return n}function gx(){var t=[].slice.call(arguments,0);return Wd("isBefore",t)}function _x(){var t=[].slice.call(arguments,0);return Wd("isAfter",t)}var xx=function(){return Date.now?Date.now():+new Date},hs=["year","quarter","month","week","day","hour","minute","second","millisecond"];function vx(t){var e,n=!1,i,r=hs.length;for(e in t)if($e(t,e)&&!(ct.call(hs,e)!==-1&&(t[e]==null||!isNaN(t[e]))))return!1;for(i=0;i<r;++i)if(t[hs[i]]){if(n)return!1;parseFloat(t[hs[i]])!==He(t[hs[i]])&&(n=!0)}return!0}function yx(){return this._isValid}function Mx(){return gn(NaN)}function Mo(t){var e=Ic(t),n=e.year||0,i=e.quarter||0,r=e.month||0,s=e.week||e.isoWeek||0,a=e.day||0,o=e.hour||0,l=e.minute||0,c=e.second||0,u=e.millisecond||0;this._isValid=vx(e),this._milliseconds=+u+c*1e3+l*6e4+o*1e3*60*60,this._days=+a+s*7,this._months=+r+i*3+n*12,this._data={},this._locale=ri(),this._bubble()}function Ra(t){return t instanceof Mo}function Wl(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function bx(t,e,n){var i=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),s=0,a;for(a=0;a<i;a++)(n&&t[a]!==e[a]||!n&&He(t[a])!==He(e[a]))&&s++;return s+r}function Yd(t,e){Ee(t,0,0,function(){var n=this.utcOffset(),i="+";return n<0&&(n=-n,i="-"),i+Nn(~~(n/60),2)+e+Nn(~~n%60,2)})}Yd("Z",":");Yd("ZZ","");be("Z",xo);be("ZZ",xo);nt(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=Vc(xo,t)});var Sx=/([\+\-]|\d\d)/gi;function Vc(t,e){var n=(e||"").match(t),i,r,s;return n===null?null:(i=n[n.length-1]||[],r=(i+"").match(Sx)||["-",0,0],s=+(r[1]*60)+He(r[2]),s===0?0:r[0]==="+"?s:-s)}function Wc(t,e){var n,i;return e._isUTC?(n=e.clone(),i=(pn(t)||zs(t)?t.valueOf():rt(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+i),Me.updateOffset(n,!1),n):rt(t).local()}function Yl(t){return-Math.round(t._d.getTimezoneOffset())}Me.updateOffset=function(){};function wx(t,e,n){var i=this._offset||0,r;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=Vc(xo,t),t===null)return this}else Math.abs(t)<16&&!n&&(t=t*60);return!this._isUTC&&e&&(r=Yl(this)),this._offset=t,this._isUTC=!0,r!=null&&this.add(r,"m"),i!==t&&(!e||this._changeInProgress?Xd(this,gn(t-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,Me.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?i:Yl(this)}function Tx(t,e){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function Ex(t){return this.utcOffset(0,t)}function Ax(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Yl(this),"m")),this}function Cx(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=Vc($0,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function Dx(t){return this.isValid()?(t=t?rt(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function Lx(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Rx(){if(!Nt(this._isDSTShifted))return this._isDSTShifted;var t={},e;return Lc(t,this),t=Gd(t),t._a?(e=t._isUTC?On(t._a):rt(t._a),this._isDSTShifted=this.isValid()&&bx(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Px(){return this.isValid()?!this._isUTC:!1}function Ix(){return this.isValid()?this._isUTC:!1}function jd(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Fx=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Nx=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function gn(t,e){var n=t,i=null,r,s,a;return Ra(t)?n={ms:t._milliseconds,d:t._days,M:t._months}:ti(t)||!isNaN(+t)?(n={},e?n[e]=+t:n.milliseconds=+t):(i=Fx.exec(t))?(r=i[1]==="-"?-1:1,n={y:0,d:He(i[Cn])*r,h:He(i[dt])*r,m:He(i[ln])*r,s:He(i[Zn])*r,ms:He(Wl(i[Gi]*1e3))*r}):(i=Nx.exec(t))?(r=i[1]==="-"?-1:1,n={y:Pi(i[2],r),M:Pi(i[3],r),w:Pi(i[4],r),d:Pi(i[5],r),h:Pi(i[6],r),m:Pi(i[7],r),s:Pi(i[8],r)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(a=Ox(rt(n.from),rt(n.to)),n={},n.ms=a.milliseconds,n.M=a.months),s=new Mo(n),Ra(t)&&$e(t,"_locale")&&(s._locale=t._locale),Ra(t)&&$e(t,"_isValid")&&(s._isValid=t._isValid),s}gn.fn=Mo.prototype;gn.invalid=Mx;function Pi(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function ku(t,e){var n={};return n.months=e.month()-t.month()+(e.year()-t.year())*12,t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function Ox(t,e){var n;return t.isValid()&&e.isValid()?(e=Wc(e,t),t.isBefore(e)?n=ku(t,e):(n=ku(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function qd(t,e){return function(n,i){var r,s;return i!==null&&!isNaN(+i)&&(Md(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=i,i=s),r=gn(n,i),Xd(this,r,t),this}}function Xd(t,e,n,i){var r=e._milliseconds,s=Wl(e._days),a=Wl(e._months);!t.isValid()||(i=i==null?!0:i,a&&Rd(t,Ga(t,"Month")+a*n),s&&wd(t,"Date",Ga(t,"Date")+s*n),r&&t._d.setTime(t._d.valueOf()+r*n),i&&Me.updateOffset(t,s||a))}var kx=qd(1,"add"),Ux=qd(-1,"subtract");function $d(t){return typeof t=="string"||t instanceof String}function zx(t){return pn(t)||zs(t)||$d(t)||ti(t)||Hx(t)||Bx(t)||t===null||t===void 0}function Bx(t){var e=$i(t)&&!Cc(t),n=!1,i=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],r,s,a=i.length;for(r=0;r<a;r+=1)s=i[r],n=n||$e(t,s);return e&&n}function Hx(t){var e=dn(t),n=!1;return e&&(n=t.filter(function(i){return!ti(i)&&$d(t)}).length===0),e&&n}function Gx(t){var e=$i(t)&&!Cc(t),n=!1,i=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],r,s;for(r=0;r<i.length;r+=1)s=i[r],n=n||$e(t,s);return e&&n}function Vx(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Wx(t,e){arguments.length===1&&(arguments[0]?zx(arguments[0])?(t=arguments[0],e=void 0):Gx(arguments[0])&&(e=arguments[0],t=void 0):(t=void 0,e=void 0));var n=t||rt(),i=Wc(n,this).startOf("day"),r=Me.calendarFormat(this,i)||"sameElse",s=e&&(kn(e[r])?e[r].call(this,n):e[r]);return this.format(s||this.localeData().calendar(r,this,rt(n)))}function Yx(){return new Bs(this)}function jx(t,e){var n=pn(t)?t:rt(t);return this.isValid()&&n.isValid()?(e=Jt(e)||"millisecond",e==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf()):!1}function qx(t,e){var n=pn(t)?t:rt(t);return this.isValid()&&n.isValid()?(e=Jt(e)||"millisecond",e==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf()):!1}function Xx(t,e,n,i){var r=pn(t)?t:rt(t),s=pn(e)?e:rt(e);return this.isValid()&&r.isValid()&&s.isValid()?(i=i||"()",(i[0]==="("?this.isAfter(r,n):!this.isBefore(r,n))&&(i[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function $x(t,e){var n=pn(t)?t:rt(t),i;return this.isValid()&&n.isValid()?(e=Jt(e)||"millisecond",e==="millisecond"?this.valueOf()===n.valueOf():(i=n.valueOf(),this.clone().startOf(e).valueOf()<=i&&i<=this.clone().endOf(e).valueOf())):!1}function Zx(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function Kx(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function Jx(t,e,n){var i,r,s;if(!this.isValid())return NaN;if(i=Wc(t,this),!i.isValid())return NaN;switch(r=(i.utcOffset()-this.utcOffset())*6e4,e=Jt(e),e){case"year":s=Pa(this,i)/12;break;case"month":s=Pa(this,i);break;case"quarter":s=Pa(this,i)/3;break;case"second":s=(this-i)/1e3;break;case"minute":s=(this-i)/6e4;break;case"hour":s=(this-i)/36e5;break;case"day":s=(this-i-r)/864e5;break;case"week":s=(this-i-r)/6048e5;break;default:s=this-i}return n?s:Xt(s)}function Pa(t,e){if(t.date()<e.date())return-Pa(e,t);var n=(e.year()-t.year())*12+(e.month()-t.month()),i=t.clone().add(n,"months"),r,s;return e-i<0?(r=t.clone().add(n-1,"months"),s=(e-i)/(i-r)):(r=t.clone().add(n+1,"months"),s=(e-i)/(r-i)),-(n+s)||0}Me.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";Me.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Qx(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ev(t){if(!this.isValid())return null;var e=t!==!0,n=e?this.clone().utc():this;return n.year()<0||n.year()>9999?La(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):kn(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",La(n,"Z")):La(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function tv(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="",n,i,r,s;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",e="Z"),n="["+t+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",s=e+'[")]',this.format(n+i+r+s)}function nv(t){t||(t=this.isUtc()?Me.defaultFormatUtc:Me.defaultFormat);var e=La(this,t);return this.localeData().postformat(e)}function iv(t,e){return this.isValid()&&(pn(t)&&t.isValid()||rt(t).isValid())?gn({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function rv(t){return this.from(rt(),t)}function sv(t,e){return this.isValid()&&(pn(t)&&t.isValid()||rt(t).isValid())?gn({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function av(t){return this.to(rt(),t)}function Zd(t){var e;return t===void 0?this._locale._abbr:(e=ri(t),e!=null&&(this._locale=e),this)}var Kd=Kt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function Jd(){return this._locale}var Ya=1e3,zr=60*Ya,ja=60*zr,Qd=(365*400+97)*24*ja;function Br(t,e){return(t%e+e)%e}function ep(t,e,n){return t<100&&t>=0?new Date(t+400,e,n)-Qd:new Date(t,e,n).valueOf()}function tp(t,e,n){return t<100&&t>=0?Date.UTC(t+400,e,n)-Qd:Date.UTC(t,e,n)}function ov(t){var e,n;if(t=Jt(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?tp:ep,t){case"year":e=n(this.year(),0,1);break;case"quarter":e=n(this.year(),this.month()-this.month()%3,1);break;case"month":e=n(this.year(),this.month(),1);break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=n(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=Br(e+(this._isUTC?0:this.utcOffset()*zr),ja);break;case"minute":e=this._d.valueOf(),e-=Br(e,zr);break;case"second":e=this._d.valueOf(),e-=Br(e,Ya);break}return this._d.setTime(e),Me.updateOffset(this,!0),this}function lv(t){var e,n;if(t=Jt(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?tp:ep,t){case"year":e=n(this.year()+1,0,1)-1;break;case"quarter":e=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=n(this.year(),this.month()+1,1)-1;break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=ja-Br(e+(this._isUTC?0:this.utcOffset()*zr),ja)-1;break;case"minute":e=this._d.valueOf(),e+=zr-Br(e,zr)-1;break;case"second":e=this._d.valueOf(),e+=Ya-Br(e,Ya)-1;break}return this._d.setTime(e),Me.updateOffset(this,!0),this}function cv(){return this._d.valueOf()-(this._offset||0)*6e4}function uv(){return Math.floor(this.valueOf()/1e3)}function fv(){return new Date(this.valueOf())}function hv(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function dv(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function pv(){return this.isValid()?this.toISOString():null}function mv(){return Dc(this)}function gv(){return vi({},Ne(this))}function _v(){return Ne(this).overflow}function xv(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}Ee("N",0,0,"eraAbbr");Ee("NN",0,0,"eraAbbr");Ee("NNN",0,0,"eraAbbr");Ee("NNNN",0,0,"eraName");Ee("NNNNN",0,0,"eraNarrow");Ee("y",["y",1],"yo","eraYear");Ee("y",["yy",2],0,"eraYear");Ee("y",["yyy",3],0,"eraYear");Ee("y",["yyyy",4],0,"eraYear");be("N",Yc);be("NN",Yc);be("NNN",Yc);be("NNNN",Dv);be("NNNNN",Lv);nt(["N","NN","NNN","NNNN","NNNNN"],function(t,e,n,i){var r=n._locale.erasParse(t,i,n._strict);r?Ne(n).era=r:Ne(n).invalidEra=t});be("y",rs);be("yy",rs);be("yyy",rs);be("yyyy",rs);be("yo",Rv);nt(["y","yy","yyy","yyyy"],St);nt(["yo"],function(t,e,n,i){var r;n._locale._eraYearOrdinalRegex&&(r=t.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?e[St]=n._locale.eraYearOrdinalParse(t,r):e[St]=parseInt(t,10)});function vv(t,e){var n,i,r,s=this._eras||ri("en")._eras;for(n=0,i=s.length;n<i;++n){switch(typeof s[n].since){case"string":r=Me(s[n].since).startOf("day"),s[n].since=r.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":r=Me(s[n].until).startOf("day").valueOf(),s[n].until=r.valueOf();break}}return s}function yv(t,e,n){var i,r,s=this.eras(),a,o,l;for(t=t.toUpperCase(),i=0,r=s.length;i<r;++i)if(a=s[i].name.toUpperCase(),o=s[i].abbr.toUpperCase(),l=s[i].narrow.toUpperCase(),n)switch(e){case"N":case"NN":case"NNN":if(o===t)return s[i];break;case"NNNN":if(a===t)return s[i];break;case"NNNNN":if(l===t)return s[i];break}else if([a,o,l].indexOf(t)>=0)return s[i]}function Mv(t,e){var n=t.since<=t.until?1:-1;return e===void 0?Me(t.since).year():Me(t.since).year()+(e-t.offset)*n}function bv(){var t,e,n,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),i[t].since<=n&&n<=i[t].until||i[t].until<=n&&n<=i[t].since)return i[t].name;return""}function Sv(){var t,e,n,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),i[t].since<=n&&n<=i[t].until||i[t].until<=n&&n<=i[t].since)return i[t].narrow;return""}function wv(){var t,e,n,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),i[t].since<=n&&n<=i[t].until||i[t].until<=n&&n<=i[t].since)return i[t].abbr;return""}function Tv(){var t,e,n,i,r=this.localeData().eras();for(t=0,e=r.length;t<e;++t)if(n=r[t].since<=r[t].until?1:-1,i=this.clone().startOf("day").valueOf(),r[t].since<=i&&i<=r[t].until||r[t].until<=i&&i<=r[t].since)return(this.year()-Me(r[t].since).year())*n+r[t].offset;return this.year()}function Ev(t){return $e(this,"_erasNameRegex")||jc.call(this),t?this._erasNameRegex:this._erasRegex}function Av(t){return $e(this,"_erasAbbrRegex")||jc.call(this),t?this._erasAbbrRegex:this._erasRegex}function Cv(t){return $e(this,"_erasNarrowRegex")||jc.call(this),t?this._erasNarrowRegex:this._erasRegex}function Yc(t,e){return e.erasAbbrRegex(t)}function Dv(t,e){return e.erasNameRegex(t)}function Lv(t,e){return e.erasNarrowRegex(t)}function Rv(t,e){return e._eraYearOrdinalRegex||rs}function jc(){var t=[],e=[],n=[],i=[],r,s,a=this.eras();for(r=0,s=a.length;r<s;++r)e.push(Ht(a[r].name)),t.push(Ht(a[r].abbr)),n.push(Ht(a[r].narrow)),i.push(Ht(a[r].name)),i.push(Ht(a[r].abbr)),i.push(Ht(a[r].narrow));this._erasRegex=new RegExp("^("+i.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+e.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}Ee(0,["gg",2],0,function(){return this.weekYear()%100});Ee(0,["GG",2],0,function(){return this.isoWeekYear()%100});function bo(t,e){Ee(0,[t,t.length],0,e)}bo("gggg","weekYear");bo("ggggg","weekYear");bo("GGGG","isoWeekYear");bo("GGGGG","isoWeekYear");wt("weekYear","gg");wt("isoWeekYear","GG");Tt("weekYear",1);Tt("isoWeekYear",1);be("G",_o);be("g",_o);be("GG",st,Yt);be("gg",st,Yt);be("GGGG",Nc,Fc);be("gggg",Nc,Fc);be("GGGGG",go,po);be("ggggg",go,po);Gs(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=He(t)});Gs(["gg","GG"],function(t,e,n,i){e[i]=Me.parseTwoDigitYear(t)});function Pv(t){return np.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Iv(t){return np.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function Fv(){return Jn(this.year(),1,4)}function Nv(){return Jn(this.isoWeekYear(),1,4)}function Ov(){var t=this.localeData()._week;return Jn(this.year(),t.dow,t.doy)}function kv(){var t=this.localeData()._week;return Jn(this.weekYear(),t.dow,t.doy)}function np(t,e,n,i,r){var s;return t==null?Rs(this,i,r).year:(s=Jn(t,i,r),e>s&&(e=s),Uv.call(this,t,e,n,i,r))}function Uv(t,e,n,i,r){var s=Nd(t,e,n,i,r),a=Ls(s.year,0,s.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}Ee("Q",0,"Qo","quarter");wt("quarter","Q");Tt("quarter",7);be("Q",Td);nt("Q",function(t,e){e[$n]=(He(t)-1)*3});function zv(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}Ee("D",["DD",2],"Do","date");wt("date","D");Tt("date",9);be("D",st);be("DD",st,Yt);be("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient});nt(["D","DD"],Cn);nt("Do",function(t,e){e[Cn]=He(t.match(st)[0])});var ip=is("Date",!0);Ee("DDD",["DDDD",3],"DDDo","dayOfYear");wt("dayOfYear","DDD");Tt("dayOfYear",4);be("DDD",mo);be("DDDD",Ed);nt(["DDD","DDDD"],function(t,e,n){n._dayOfYear=He(t)});function Bv(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?e:this.add(t-e,"d")}Ee("m",["mm",2],0,"minute");wt("minute","m");Tt("minute",14);be("m",st);be("mm",st,Yt);nt(["m","mm"],ln);var Hv=is("Minutes",!1);Ee("s",["ss",2],0,"second");wt("second","s");Tt("second",15);be("s",st);be("ss",st,Yt);nt(["s","ss"],Zn);var Gv=is("Seconds",!1);Ee("S",0,0,function(){return~~(this.millisecond()/100)});Ee(0,["SS",2],0,function(){return~~(this.millisecond()/10)});Ee(0,["SSS",3],0,"millisecond");Ee(0,["SSSS",4],0,function(){return this.millisecond()*10});Ee(0,["SSSSS",5],0,function(){return this.millisecond()*100});Ee(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});Ee(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});Ee(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});Ee(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});wt("millisecond","ms");Tt("millisecond",16);be("S",mo,Td);be("SS",mo,Yt);be("SSS",mo,Ed);var yi,rp;for(yi="SSSS";yi.length<=9;yi+="S")be(yi,rs);function Vv(t,e){e[Gi]=He(("0."+t)*1e3)}for(yi="S";yi.length<=9;yi+="S")nt(yi,Vv);rp=is("Milliseconds",!1);Ee("z",0,0,"zoneAbbr");Ee("zz",0,0,"zoneName");function Wv(){return this._isUTC?"UTC":""}function Yv(){return this._isUTC?"Coordinated Universal Time":""}var le=Bs.prototype;le.add=kx;le.calendar=Wx;le.clone=Yx;le.diff=Jx;le.endOf=lv;le.format=nv;le.from=iv;le.fromNow=rv;le.to=sv;le.toNow=av;le.get=q0;le.invalidAt=_v;le.isAfter=jx;le.isBefore=qx;le.isBetween=Xx;le.isSame=$x;le.isSameOrAfter=Zx;le.isSameOrBefore=Kx;le.isValid=mv;le.lang=Kd;le.locale=Zd;le.localeData=Jd;le.max=mx;le.min=px;le.parsingFlags=gv;le.set=X0;le.startOf=ov;le.subtract=Ux;le.toArray=hv;le.toObject=dv;le.toDate=fv;le.toISOString=ev;le.inspect=tv;typeof Symbol!="undefined"&&Symbol.for!=null&&(le[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});le.toJSON=pv;le.toString=Qx;le.unix=uv;le.valueOf=cv;le.creationData=xv;le.eraName=bv;le.eraNarrow=Sv;le.eraAbbr=wv;le.eraYear=Tv;le.year=Fd;le.isLeapYear=d_;le.weekYear=Pv;le.isoWeekYear=Iv;le.quarter=le.quarters=zv;le.month=Pd;le.daysInMonth=u_;le.week=le.weeks=v_;le.isoWeek=le.isoWeeks=y_;le.weeksInYear=Ov;le.weeksInWeekYear=kv;le.isoWeeksInYear=Fv;le.isoWeeksInISOWeekYear=Nv;le.date=ip;le.day=le.days=I_;le.weekday=F_;le.isoWeekday=N_;le.dayOfYear=Bv;le.hour=le.hours=G_;le.minute=le.minutes=Hv;le.second=le.seconds=Gv;le.millisecond=le.milliseconds=rp;le.utcOffset=wx;le.utc=Ex;le.local=Ax;le.parseZone=Cx;le.hasAlignedHourOffset=Dx;le.isDST=Lx;le.isLocal=Px;le.isUtcOffset=Ix;le.isUtc=jd;le.isUTC=jd;le.zoneAbbr=Wv;le.zoneName=Yv;le.dates=Kt("dates accessor is deprecated. Use date instead.",ip);le.months=Kt("months accessor is deprecated. Use month instead",Pd);le.years=Kt("years accessor is deprecated. Use year instead",Fd);le.zone=Kt("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Tx);le.isDSTShifted=Kt("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Rx);function jv(t){return rt(t*1e3)}function qv(){return rt.apply(null,arguments).parseZone()}function sp(t){return t}var Ze=Rc.prototype;Ze.calendar=I0;Ze.longDateFormat=k0;Ze.invalidDate=z0;Ze.ordinal=G0;Ze.preparse=sp;Ze.postformat=sp;Ze.relativeTime=W0;Ze.pastFuture=Y0;Ze.set=R0;Ze.eras=vv;Ze.erasParse=yv;Ze.erasConvertYear=Mv;Ze.erasAbbrRegex=Av;Ze.erasNameRegex=Ev;Ze.erasNarrowRegex=Cv;Ze.months=a_;Ze.monthsShort=o_;Ze.monthsParse=c_;Ze.monthsRegex=h_;Ze.monthsShortRegex=f_;Ze.week=m_;Ze.firstDayOfYear=x_;Ze.firstDayOfWeek=__;Ze.weekdays=C_;Ze.weekdaysMin=L_;Ze.weekdaysShort=D_;Ze.weekdaysParse=P_;Ze.weekdaysRegex=O_;Ze.weekdaysShortRegex=k_;Ze.weekdaysMinRegex=U_;Ze.isPM=B_;Ze.meridiem=V_;function qa(t,e,n,i){var r=ri(),s=On().set(i,e);return r[n](s,t)}function ap(t,e,n){if(ti(t)&&(e=t,t=void 0),t=t||"",e!=null)return qa(t,e,n,"month");var i,r=[];for(i=0;i<12;i++)r[i]=qa(t,i,n,"month");return r}function qc(t,e,n,i){typeof t=="boolean"?(ti(e)&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,ti(e)&&(n=e,e=void 0),e=e||"");var r=ri(),s=t?r._week.dow:0,a,o=[];if(n!=null)return qa(e,(n+s)%7,i,"day");for(a=0;a<7;a++)o[a]=qa(e,(a+s)%7,i,"day");return o}function Xv(t,e){return ap(t,e,"months")}function $v(t,e){return ap(t,e,"monthsShort")}function Zv(t,e,n){return qc(t,e,n,"weekdays")}function Kv(t,e,n){return qc(t,e,n,"weekdaysShort")}function Jv(t,e,n){return qc(t,e,n,"weekdaysMin")}wi("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=He(t%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th";return t+n}});Me.lang=Kt("moment.lang is deprecated. Use moment.locale instead.",wi);Me.langData=Kt("moment.langData is deprecated. Use moment.localeData instead.",ri);var Un=Math.abs;function Qv(){var t=this._data;return this._milliseconds=Un(this._milliseconds),this._days=Un(this._days),this._months=Un(this._months),t.milliseconds=Un(t.milliseconds),t.seconds=Un(t.seconds),t.minutes=Un(t.minutes),t.hours=Un(t.hours),t.months=Un(t.months),t.years=Un(t.years),this}function op(t,e,n,i){var r=gn(e,n);return t._milliseconds+=i*r._milliseconds,t._days+=i*r._days,t._months+=i*r._months,t._bubble()}function ey(t,e){return op(this,t,e,1)}function ty(t,e){return op(this,t,e,-1)}function Uu(t){return t<0?Math.floor(t):Math.ceil(t)}function ny(){var t=this._milliseconds,e=this._days,n=this._months,i=this._data,r,s,a,o,l;return t>=0&&e>=0&&n>=0||t<=0&&e<=0&&n<=0||(t+=Uu(jl(n)+e)*864e5,e=0,n=0),i.milliseconds=t%1e3,r=Xt(t/1e3),i.seconds=r%60,s=Xt(r/60),i.minutes=s%60,a=Xt(s/60),i.hours=a%24,e+=Xt(a/24),l=Xt(lp(e)),n+=l,e-=Uu(jl(l)),o=Xt(n/12),n%=12,i.days=e,i.months=n,i.years=o,this}function lp(t){return t*4800/146097}function jl(t){return t*146097/4800}function iy(t){if(!this.isValid())return NaN;var e,n,i=this._milliseconds;if(t=Jt(t),t==="month"||t==="quarter"||t==="year")switch(e=this._days+i/864e5,n=this._months+lp(e),t){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(e=this._days+Math.round(jl(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return e*24+i/36e5;case"minute":return e*1440+i/6e4;case"second":return e*86400+i/1e3;case"millisecond":return Math.floor(e*864e5)+i;default:throw new Error("Unknown unit "+t)}}function ry(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+He(this._months/12)*31536e6:NaN}function si(t){return function(){return this.as(t)}}var sy=si("ms"),ay=si("s"),oy=si("m"),ly=si("h"),cy=si("d"),uy=si("w"),fy=si("M"),hy=si("Q"),dy=si("y");function py(){return gn(this)}function my(t){return t=Jt(t),this.isValid()?this[t+"s"]():NaN}function ir(t){return function(){return this.isValid()?this._data[t]:NaN}}var gy=ir("milliseconds"),_y=ir("seconds"),xy=ir("minutes"),vy=ir("hours"),yy=ir("days"),My=ir("months"),by=ir("years");function Sy(){return Xt(this.days()/7)}var jn=Math.round,Rr={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function wy(t,e,n,i,r){return r.relativeTime(e||1,!!n,t,i)}function Ty(t,e,n,i){var r=gn(t).abs(),s=jn(r.as("s")),a=jn(r.as("m")),o=jn(r.as("h")),l=jn(r.as("d")),c=jn(r.as("M")),u=jn(r.as("w")),f=jn(r.as("y")),h=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||a<=1&&["m"]||a<n.m&&["mm",a]||o<=1&&["h"]||o<n.h&&["hh",o]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(h=h||u<=1&&["w"]||u<n.w&&["ww",u]),h=h||c<=1&&["M"]||c<n.M&&["MM",c]||f<=1&&["y"]||["yy",f],h[2]=e,h[3]=+t>0,h[4]=i,wy.apply(null,h)}function Ey(t){return t===void 0?jn:typeof t=="function"?(jn=t,!0):!1}function Ay(t,e){return Rr[t]===void 0?!1:e===void 0?Rr[t]:(Rr[t]=e,t==="s"&&(Rr.ss=e-1),!0)}function Cy(t,e){if(!this.isValid())return this.localeData().invalidDate();var n=!1,i=Rr,r,s;return typeof t=="object"&&(e=t,t=!1),typeof t=="boolean"&&(n=t),typeof e=="object"&&(i=Object.assign({},Rr,e),e.s!=null&&e.ss==null&&(i.ss=e.s-1)),r=this.localeData(),s=Ty(this,!n,i,r),n&&(s=r.pastFuture(+this,s)),r.postformat(s)}var Ho=Math.abs;function lr(t){return(t>0)-(t<0)||+t}function So(){if(!this.isValid())return this.localeData().invalidDate();var t=Ho(this._milliseconds)/1e3,e=Ho(this._days),n=Ho(this._months),i,r,s,a,o=this.asSeconds(),l,c,u,f;return o?(i=Xt(t/60),r=Xt(i/60),t%=60,i%=60,s=Xt(n/12),n%=12,a=t?t.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",c=lr(this._months)!==lr(o)?"-":"",u=lr(this._days)!==lr(o)?"-":"",f=lr(this._milliseconds)!==lr(o)?"-":"",l+"P"+(s?c+s+"Y":"")+(n?c+n+"M":"")+(e?u+e+"D":"")+(r||i||t?"T":"")+(r?f+r+"H":"")+(i?f+i+"M":"")+(t?f+a+"S":"")):"P0D"}var je=Mo.prototype;je.isValid=yx;je.abs=Qv;je.add=ey;je.subtract=ty;je.as=iy;je.asMilliseconds=sy;je.asSeconds=ay;je.asMinutes=oy;je.asHours=ly;je.asDays=cy;je.asWeeks=uy;je.asMonths=fy;je.asQuarters=hy;je.asYears=dy;je.valueOf=ry;je._bubble=ny;je.clone=py;je.get=my;je.milliseconds=gy;je.seconds=_y;je.minutes=xy;je.hours=vy;je.days=yy;je.weeks=Sy;je.months=My;je.years=by;je.humanize=Cy;je.toISOString=So;je.toString=So;je.toJSON=So;je.locale=Zd;je.localeData=Jd;je.toIsoString=Kt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",So);je.lang=Kd;Ee("X",0,0,"unix");Ee("x",0,0,"valueOf");be("x",_o);be("X",Z0);nt("X",function(t,e,n){n._d=new Date(parseFloat(t)*1e3)});nt("x",function(t,e,n){n._d=new Date(He(t))});//! moment.js
Me.version="2.29.3";D0(rt);Me.fn=le;Me.min=gx;Me.max=_x;Me.now=xx;Me.utc=On;Me.unix=jv;Me.months=Xv;Me.isDate=zs;Me.locale=wi;Me.invalid=fo;Me.duration=gn;Me.isMoment=pn;Me.weekdays=Zv;Me.parseZone=qv;Me.localeData=ri;Me.isDuration=Ra;Me.monthsShort=$v;Me.weekdaysMin=Jv;Me.defineLocale=zc;Me.updateLocale=q_;Me.locales=X_;Me.weekdaysShort=Kv;Me.normalizeUnits=Jt;Me.relativeTimeRounding=Ey;Me.relativeTimeThreshold=Ay;Me.calendarFormat=Vx;Me.prototype=le;Me.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="141",cr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ur={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dy=0,zu=1,Ly=2,cp=1,Ry=2,xs=3,Is=0,hn=1,Xr=2,Py=1,Ti=0,Hr=1,Bu=2,Hu=3,Gu=4,Iy=5,Dr=100,Fy=101,Ny=102,Vu=103,Wu=104,Oy=200,ky=201,Uy=202,zy=203,up=204,fp=205,By=206,Hy=207,Gy=208,Vy=209,Wy=210,Yy=0,jy=1,qy=2,ql=3,Xy=4,$y=5,Zy=6,Ky=7,wo=0,Jy=1,Qy=2,Qn=0,eM=1,tM=2,nM=3,iM=4,rM=5,hp=300,$r=301,Zr=302,Xl=303,$l=304,To=306,Zl=1e3,sn=1001,Kl=1002,Ot=1003,Yu=1004,ju=1005,$t=1006,sM=1007,Eo=1008,er=1009,aM=1010,oM=1011,dp=1012,lM=1013,Vi=1014,Wi=1015,Fs=1016,cM=1017,uM=1018,Gr=1020,fM=1021,hM=1022,cn=1023,dM=1024,pM=1025,Zi=1026,Kr=1027,mM=1028,gM=1029,_M=1030,xM=1031,vM=1033,Go=33776,Vo=33777,Wo=33778,Yo=33779,qu=35840,Xu=35841,$u=35842,Zu=35843,yM=36196,Ku=37492,Ju=37496,Qu=37808,ef=37809,tf=37810,nf=37811,rf=37812,sf=37813,af=37814,of=37815,lf=37816,cf=37817,uf=37818,ff=37819,hf=37820,df=37821,pf=36492,tr=3e3,ot=3001,MM=3200,bM=3201,ss=0,SM=1,qn="srgb",Yi="srgb-linear",jo=7680,wM=519,mf=35044,gf="300 es",Jl=1035;class rr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const _t=[];for(let t=0;t<256;t++)_t[t]=(t<16?"0":"")+t.toString(16);const qo=Math.PI/180,_f=180/Math.PI;function Vs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[t&255]+_t[t>>8&255]+_t[t>>16&255]+_t[t>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[n&63|128]+_t[n>>8&255]+"-"+_t[n>>16&255]+_t[n>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function Dt(t,e,n){return Math.max(e,Math.min(n,t))}function TM(t,e){return(t%e+e)%e}function Xo(t,e,n){return(1-n)*t+n*e}function xf(t){return(t&t-1)===0&&t!==0}function Ql(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}class Oe{constructor(e=0,n=0){this.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],p=r[0],d=r[3],_=r[6],T=r[1],A=r[4],E=r[7],b=r[2],R=r[5],O=r[8];return s[0]=a*p+o*T+l*b,s[3]=a*d+o*A+l*R,s[6]=a*_+o*E+l*O,s[1]=c*p+u*T+f*b,s[4]=c*d+u*A+f*R,s[7]=c*_+u*E+f*O,s[2]=h*p+m*T+g*b,s[5]=h*d+m*A+g*R,s[8]=h*_+m*E+g*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,g=n*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*n-r*l)*p,e[5]=(r*s-o*n)*p,e[6]=m*p,e[7]=(i*l-c*n)*p,e[8]=(a*n-i*s)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=n*s+i*l,r[3]=n*a+i*c,r[6]=n*o+i*u,r[1]=-i*s+n*l,r[4]=-i*a+n*c,r[7]=-i*o+n*u,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function pp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>65535)return!0;return!1}function Xa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ia(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const $o={[qn]:{[Yi]:Ki},[Yi]:{[qn]:Ia}},Qt={legacyMode:!0,get workingColorSpace(){return Yi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if($o[e]&&$o[e][n]!==void 0){const i=$o[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},en={h:0,s:0,l:0},na={h:0,s:0,l:0};function Zo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function ia(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Yi){return this.r=e,this.g=n,this.b=i,Qt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Yi){if(e=TM(e,1),n=Dt(n,0,1),i=Dt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Zo(a,s,e+1/3),this.g=Zo(a,s,e),this.b=Zo(a,s,e-1/3)}return Qt.toWorkingColorSpace(this,r),this}setStyle(e,n=qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Qt.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Qt.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Qt.toWorkingColorSpace(this,n),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Qt.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=qn){const i=mp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return Qt.fromWorkingColorSpace(ia(this,ht),e),Dt(ht.r*255,0,255)<<16^Dt(ht.g*255,0,255)<<8^Dt(ht.b*255,0,255)<<0}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Yi){Qt.fromWorkingColorSpace(ia(this,ht),n);const i=ht.r,r=ht.g,s=ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Yi){return Qt.fromWorkingColorSpace(ia(this,ht),n),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=qn){return Qt.fromWorkingColorSpace(ia(this,ht),e),e!==qn?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(en),en.h+=e,en.s+=n,en.l+=i,this.setHSL(en.h,en.s,en.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(en),e.getHSL(na);const i=Xo(en.h,na.h,n),r=Xo(en.s,na.s,n),s=Xo(en.l,na.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ke.NAMES=mp;let fr;class gp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=Xa("canvas")),fr.width=e.width,fr.height=e.height;const i=fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=Xa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ki(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _p{constructor(e=null){this.isSource=!0,this.uuid=Vs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ko(r[a].image)):s.push(Ko(r[a]))}else s=Ko(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ko(t){return typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap?gp.getDataURL(t):t.data?{data:Array.prototype.slice.call(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EM=0;class mn extends rr{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=sn,r=sn,s=$t,a=Eo,o=cn,l=er,c=1,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Vs(),this.name="",this.source=new _p(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zl:e.x=e.x-Math.floor(e.x);break;case sn:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zl:e.y=e.y-Math.floor(e.y);break;case sn:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=hp;class bt{constructor(e=0,n=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],p=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(c+1)/2,E=(m+1)/2,b=(_+1)/2,R=(u+h)/4,O=(f+p)/4,M=(g+d)/4;return A>E&&A>b?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=R/i,s=O/i):E>b?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=M/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=O/s,r=M/s),this.set(i,r,s,n),this}let T=Math.sqrt((d-g)*(d-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(d-g)/T,this.y=(f-p)/T,this.z=(h-u)/T,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ei extends rr{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:$t,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new _p(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xp extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class AM extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerp(e,n,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,n,r)}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=g,e[n+3]=p;return}if(f!==p||l!==h||c!==m||u!==g){let d=1-o;const _=l*h+c*m+u*g+f*p,T=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const b=Math.sqrt(A),R=Math.atan2(b,_*T);d=Math.sin(d*R)/b,o=Math.sin(o*R)/b}const E=o*T;if(l=l*d+h*E,c=c*d+m*E,u=u*d+g*E,f=f*d+p*E,d===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],g=s[a+3];return e[n]=o*g+u*f+l*m-c*h,e[n+1]=l*g+u*h+c*f-o*m,e[n+2]=c*g+u*m+o*h-l*f,e[n+3]=u*g-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,n)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){this.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,n)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,n)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,n)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(vf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*n+a*r-o*i,u=l*i+o*n-s*r,f=l*r+s*i-a*n,h=-s*n-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,n)):this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jo=new F,vf=new nr;class Ws{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<n&&(n=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(n,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<n&&(n=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(n,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Ii.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ii)}else i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox),Qo.applyMatrix4(e.matrixWorld),this.union(Qo);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),ra.subVectors(this.max,ds),hr.subVectors(e.a,ds),dr.subVectors(e.b,ds),pr.subVectors(e.c,ds),ui.subVectors(dr,hr),fi.subVectors(pr,dr),Fi.subVectors(hr,pr);let n=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Fi.z,Fi.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Fi.z,0,-Fi.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Fi.y,Fi.x,0];return!el(n,hr,dr,pr,ra)||(n=[1,0,0,0,1,0,0,0,1],!el(n,hr,dr,pr,ra))?!1:(sa.crossVectors(ui,fi),n=[sa.x,sa.y,sa.z],el(n,hr,dr,pr,ra))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ii.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new F,new F,new F,new F,new F,new F,new F,new F],Ii=new F,Qo=new Ws,hr=new F,dr=new F,pr=new F,ui=new F,fi=new F,Fi=new F,ds=new F,ra=new F,sa=new F,Ni=new F;function el(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ni.fromArray(t,s);const o=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=e.dot(Ni),c=n.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const CM=new Ws,yf=new F,aa=new F,tl=new F;class Ao{constructor(e=new F,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):CM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){tl.subVectors(e,this.center);const n=tl.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(tl.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?aa.set(0,0,1).multiplyScalar(e.radius):aa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(yf.copy(e.center).add(aa)),this.expandByPoint(yf.copy(e.center).sub(aa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new F,nl=new F,oa=new F,hi=new F,il=new F,la=new F,rl=new F;class vp{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Bn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Bn.copy(this.direction).multiplyScalar(n).add(this.origin),Bn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nl.copy(e).add(n).multiplyScalar(.5),oa.copy(n).sub(e).normalize(),hi.copy(this.origin).sub(nl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(oa),o=hi.dot(this.direction),l=-hi.dot(oa),c=hi.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(oa).multiplyScalar(h).add(nl),m}intersectSphere(e,n){Bn.subVectors(e.center,this.origin);const i=Bn.dot(this.direction),r=Bn.dot(Bn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||i!==i)&&(i=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,n,i,r,s){il.subVectors(n,e),la.subVectors(i,e),rl.crossVectors(il,la);let a=this.direction.dot(rl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);const l=o*this.direction.dot(la.crossVectors(hi,la));if(l<0)return null;const c=o*this.direction.dot(il.cross(hi));if(c<0||l+c>a)return null;const u=-o*hi.dot(rl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,n,i,r,s,a,o,l,c,u,f,h,m,g,p,d){const _=this.elements;return _[0]=e,_[4]=n,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=p,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/mr.setFromMatrixColumn(e,0).length(),s=1/mr.setFromMatrixColumn(e,1).length(),a=1/mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,g=o*u,p=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+g*c,n[5]=h-p*c,n[9]=-o*l,n[2]=p-h*c,n[6]=g+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,p=c*f;n[0]=h+p*o,n[4]=g*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=m*o-g,n[6]=p+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,p=c*f;n[0]=h-p*o,n[4]=-a*f,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*u,n[9]=p-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=o*u,p=o*f;n[0]=l*u,n[4]=g*c-m,n[8]=h*c+p,n[1]=l*f,n[5]=p*c+h,n[9]=m*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,g=o*l,p=o*c;n[0]=l*u,n[4]=p-h*f,n[8]=g*f+m,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=m*f+g,n[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,m=a*c,g=o*l,p=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+p,n[5]=a*u,n[9]=m*f-g,n[2]=g*f-m,n[6]=o*u,n[10]=p*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DM,e,LM)}lookAt(e,n,i){const r=this.elements;return Ut.subVectors(e,n),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),di.crossVectors(i,Ut),di.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),di.crossVectors(i,Ut)),di.normalize(),ca.crossVectors(Ut,di),r[0]=di.x,r[4]=ca.x,r[8]=Ut.x,r[1]=di.y,r[5]=ca.y,r[9]=Ut.y,r[2]=di.z,r[6]=ca.z,r[10]=Ut.z,this}multiply(e,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,n)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],p=i[6],d=i[10],_=i[14],T=i[3],A=i[7],E=i[11],b=i[15],R=r[0],O=r[4],M=r[8],D=r[12],Y=r[1],I=r[5],pe=r[9],ne=r[13],N=r[2],J=r[6],H=r[10],W=r[14],V=r[3],U=r[7],Q=r[11],de=r[15];return s[0]=a*R+o*Y+l*N+c*V,s[4]=a*O+o*I+l*J+c*U,s[8]=a*M+o*pe+l*H+c*Q,s[12]=a*D+o*ne+l*W+c*de,s[1]=u*R+f*Y+h*N+m*V,s[5]=u*O+f*I+h*J+m*U,s[9]=u*M+f*pe+h*H+m*Q,s[13]=u*D+f*ne+h*W+m*de,s[2]=g*R+p*Y+d*N+_*V,s[6]=g*O+p*I+d*J+_*U,s[10]=g*M+p*pe+d*H+_*Q,s[14]=g*D+p*ne+d*W+_*de,s[3]=T*R+A*Y+E*N+b*V,s[7]=T*O+A*I+E*J+b*U,s[11]=T*M+A*pe+E*H+b*Q,s[15]=T*D+A*ne+E*W+b*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],p=e[7],d=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+p*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+d*(+n*c*f-n*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+_*(-r*o*u-n*l*f+n*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],p=e[13],d=e[14],_=e[15],T=f*d*c-p*h*c+p*l*m-o*d*m-f*l*_+o*h*_,A=g*h*c-u*d*c-g*l*m+a*d*m+u*l*_-a*h*_,E=u*p*c-g*f*c+g*o*m-a*p*m-u*o*_+a*f*_,b=g*f*l-u*p*l-g*o*h+a*p*h+u*o*d-a*f*d,R=n*T+i*A+r*E+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=T*O,e[1]=(p*h*s-f*d*s-p*r*m+i*d*m+f*r*_-i*h*_)*O,e[2]=(o*d*s-p*l*s+p*r*c-i*d*c-o*r*_+i*l*_)*O,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*O,e[4]=A*O,e[5]=(u*d*s-g*h*s+g*r*m-n*d*m-u*r*_+n*h*_)*O,e[6]=(g*l*s-a*d*s-g*r*c+n*d*c+a*r*_-n*l*_)*O,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*m+n*l*m)*O,e[8]=E*O,e[9]=(g*f*s-u*p*s-g*i*m+n*p*m+u*i*_-n*f*_)*O,e[10]=(a*p*s-g*o*s+g*i*c-n*p*c-a*i*_+n*o*_)*O,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*m-n*o*m)*O,e[12]=b*O,e[13]=(u*p*r-g*f*r+g*i*h-n*p*h-u*i*d+n*f*d)*O,e[14]=(g*o*r-a*p*r-g*i*l+n*p*l+a*i*d-n*o*d)*O,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*h+n*o*h)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,g=s*f,p=a*u,d=a*f,_=o*f,T=l*c,A=l*u,E=l*f,b=i.x,R=i.y,O=i.z;return r[0]=(1-(p+_))*b,r[1]=(m+E)*b,r[2]=(g-A)*b,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(h+_))*R,r[6]=(d+T)*R,r[7]=0,r[8]=(g+A)*O,r[9]=(d-T)*O,r[10]=(1-(h+p))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=mr.set(r[0],r[1],r[2]).length();const a=mr.set(r[4],r[5],r[6]).length(),o=mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const c=1/s,u=1/a,f=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,n.setFromRotationMatrix(tn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(n-e),c=2*s/(i-r),u=(n+e)/(n-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,n,i,r,s,a){const o=this.elements,l=1/(n-e),c=1/(i-r),u=1/(a-s),f=(n+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const mr=new F,tn=new xt,DM=new F(0,0,0),LM=new F(1,1,1),di=new F,ca=new F,Ut=new F,Mf=new xt,bf=new nr;class as{constructor(e=0,n=0,i=0,r=as.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bf.setFromEuler(this),this.setFromQuaternion(bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}as.DefaultOrder="XYZ";as.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class yp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RM=0;const Sf=new F,gr=new nr,Hn=new xt,ua=new F,ps=new F,PM=new F,IM=new nr,wf=new F(1,0,0),Tf=new F(0,1,0),Ef=new F(0,0,1),FM={type:"added"},Af={type:"removed"};class Wt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DefaultUp.clone();const e=new F,n=new as,i=new nr,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Rn}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Wt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new yp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(wf,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,n){return Sf.copy(e).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wf,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ua.copy(e):ua.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ps,ua,this.up):Hn.lookAt(ua,ps,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(Hn),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(FM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Af)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Af)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,PM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,IM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DefaultUp=new F(0,1,0);Wt.DefaultMatrixAutoUpdate=!0;const nn=new F,Gn=new F,sl=new F,Vn=new F,_r=new F,xr=new F,Cf=new F,al=new F,ol=new F,ll=new F;class Dn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),nn.subVectors(e,n),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){nn.subVectors(r,n),Gn.subVectors(i,n),sl.subVectors(e,n);const a=nn.dot(nn),o=nn.dot(Gn),l=nn.dot(sl),c=Gn.dot(Gn),u=Gn.dot(sl),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vn),Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Vn),l.set(0,0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l}static isFrontFacing(e,n,i,r){return nn.subVectors(i,n),Gn.subVectors(e,n),nn.cross(Gn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),nn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Dn.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;_r.subVectors(r,i),xr.subVectors(s,i),al.subVectors(e,i);const l=_r.dot(al),c=xr.dot(al);if(l<=0&&c<=0)return n.copy(i);ol.subVectors(e,r);const u=_r.dot(ol),f=xr.dot(ol);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(_r,a);ll.subVectors(e,s);const m=_r.dot(ll),g=xr.dot(ll);if(g>=0&&m<=g)return n.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(xr,o);const d=u*g-m*f;if(d<=0&&f-u>=0&&m-g>=0)return Cf.subVectors(s,r),o=(f-u)/(f-u+(m-g)),n.copy(r).addScaledVector(Cf,o);const _=1/(d+p+h);return a=p*_,o=h*_,n.copy(i).addScaledVector(_r,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let NM=0;class vt extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Hr,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=up,this.blendDst=fp,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Py;continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(i.blending=this.blending),this.side!==Is&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}vt.fromType=function(){return null};class $c extends vt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new F,fa=new Oe;class Pn{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=mf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),a=new ke),n[i++]=a.r,n[i++]=a.g,n[i++]=a.b}return this}copyVector2sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),a=new Oe),n[i++]=a.x,n[i++]=a.y}return this}copyVector3sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),a=new F),n[i++]=a.x,n[i++]=a.y,n[i++]=a.z}return this}copyVector4sArray(e){const n=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let a=e[r];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),a=new bt),n[i++]=a.x,n[i++]=a.y,n[i++]=a.z,n[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fa.fromBufferAttribute(this,n),fa.applyMatrix3(e),this.setXY(n,fa.x,fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix3(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyMatrix4(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.applyNormalMatrix(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ft.fromBufferAttribute(this,n),ft.transformDirection(e),this.setXYZ(n,ft.x,ft.y,ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){return this.array[e*this.itemSize]}setX(e,n){return this.array[e*this.itemSize]=n,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,n){return this.array[e*this.itemSize+1]=n,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,n){return this.array[e*this.itemSize+2]=n,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,n){return this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mf&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Mp extends Pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class bp extends Pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class In extends Pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let OM=0;const jt=new xt,cl=new Wt,vr=new F,zt=new Ws,ms=new Ws,pt=new F;class ai extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pp(e)?bp:Mp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Rn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,n,i){return jt.makeTranslation(e,n,i),this.applyMatrix4(jt),this}scale(e,n,i){return jt.makeScale(e,n,i),this.applyMatrix4(jt),this}lookAt(e){return cl.lookAt(e),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new In(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(zt.min,ms.min),zt.expandByPoint(pt),pt.addVectors(zt.max,ms.max),zt.expandByPoint(pt)):(zt.expandByPoint(ms.min),zt.expandByPoint(ms.max))}zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pt.fromBufferAttribute(o,c),l&&(vr.fromBufferAttribute(e,c),pt.add(vr)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let Y=0;Y<o;Y++)c[Y]=new F,u[Y]=new F;const f=new F,h=new F,m=new F,g=new Oe,p=new Oe,d=new Oe,_=new F,T=new F;function A(Y,I,pe){f.fromArray(r,Y*3),h.fromArray(r,I*3),m.fromArray(r,pe*3),g.fromArray(a,Y*2),p.fromArray(a,I*2),d.fromArray(a,pe*2),h.sub(f),m.sub(f),p.sub(g),d.sub(g);const ne=1/(p.x*d.y-d.x*p.y);!isFinite(ne)||(_.copy(h).multiplyScalar(d.y).addScaledVector(m,-p.y).multiplyScalar(ne),T.copy(m).multiplyScalar(p.x).addScaledVector(h,-d.x).multiplyScalar(ne),c[Y].add(_),c[I].add(_),c[pe].add(_),u[Y].add(T),u[I].add(T),u[pe].add(T))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let Y=0,I=E.length;Y<I;++Y){const pe=E[Y],ne=pe.start,N=pe.count;for(let J=ne,H=ne+N;J<H;J+=3)A(i[J+0],i[J+1],i[J+2])}const b=new F,R=new F,O=new F,M=new F;function D(Y){O.fromArray(s,Y*3),M.copy(O);const I=c[Y];b.copy(I),b.sub(O.multiplyScalar(O.dot(I))).normalize(),R.crossVectors(M,I);const ne=R.dot(u[Y])<0?-1:1;l[Y*4]=b.x,l[Y*4+1]=b.y,l[Y*4+2]=b.z,l[Y*4+3]=ne}for(let Y=0,I=E.length;Y<I;++Y){const pe=E[Y],ne=pe.start,N=pe.count;for(let J=ne,H=ne+N;J<H;J+=3)D(i[J+0]),D(i[J+1]),D(i[J+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,p),a.fromBufferAttribute(n,d),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,d),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,n){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const a=i[r].array,o=e.attributes[r],l=o.array,c=o.itemSize*n,u=Math.min(l.length,a.length-c);for(let f=0,h=c;f<u;f++,h++)a[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)pt.fromBufferAttribute(e,n),pt.normalize(),e.setXYZ(n,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,d=l.length;p<d;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new Pn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ai,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Df=new xt,yr=new vp,ul=new Ao,pi=new F,mi=new F,gi=new F,fl=new F,hl=new F,dl=new F,ha=new F,da=new F,pa=new F,ma=new Oe,ga=new Oe,_a=new Oe,pl=new F,xa=new F;class Mi extends Wt{constructor(e=new ai,n=new $c){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),e.ray.intersectsSphere(ul)===!1)||(Df.copy(s).invert(),yr.copy(e.ray).applyMatrix4(Df),i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],T=r[_.materialIndex],A=Math.max(_.start,g.start),E=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let b=A,R=E;b<R;b+=3){const O=o.getX(b),M=o.getX(b+1),D=o.getX(b+2);a=va(this,T,e,yr,l,c,u,f,h,O,M,D),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(o.count,g.start+g.count);for(let _=p,T=d;_<T;_+=3){const A=o.getX(_),E=o.getX(_+1),b=o.getX(_+2);a=va(this,r,e,yr,l,c,u,f,h,A,E,b),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,d=m.length;p<d;p++){const _=m[p],T=r[_.materialIndex],A=Math.max(_.start,g.start),E=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let b=A,R=E;b<R;b+=3){const O=b,M=b+1,D=b+2;a=va(this,T,e,yr,l,c,u,f,h,O,M,D),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const p=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let _=p,T=d;_<T;_+=3){const A=_,E=_+1,b=_+2;a=va(this,r,e,yr,l,c,u,f,h,A,E,b),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function kM(t,e,n,i,r,s,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side!==Xr,o),l===null)return null;xa.copy(o),xa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xa);return c<n.near||c>n.far?null:{distance:c,point:xa.clone(),object:t}}function va(t,e,n,i,r,s,a,o,l,c,u,f){pi.fromBufferAttribute(r,c),mi.fromBufferAttribute(r,u),gi.fromBufferAttribute(r,f);const h=t.morphTargetInfluences;if(s&&h){ha.set(0,0,0),da.set(0,0,0),pa.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const d=h[g],_=s[g];d!==0&&(fl.fromBufferAttribute(_,c),hl.fromBufferAttribute(_,u),dl.fromBufferAttribute(_,f),a?(ha.addScaledVector(fl,d),da.addScaledVector(hl,d),pa.addScaledVector(dl,d)):(ha.addScaledVector(fl.sub(pi),d),da.addScaledVector(hl.sub(mi),d),pa.addScaledVector(dl.sub(gi),d)))}pi.add(ha),mi.add(da),gi.add(pa)}t.isSkinnedMesh&&(t.boneTransform(c,pi),t.boneTransform(u,mi),t.boneTransform(f,gi));const m=kM(t,e,n,i,pi,mi,gi,pl);if(m){o&&(ma.fromBufferAttribute(o,c),ga.fromBufferAttribute(o,u),_a.fromBufferAttribute(o,f),m.uv=Dn.getUV(pl,pi,mi,gi,ma,ga,_a,new Oe)),l&&(ma.fromBufferAttribute(l,c),ga.fromBufferAttribute(l,u),_a.fromBufferAttribute(l,f),m.uv2=Dn.getUV(pl,pi,mi,gi,ma,ga,_a,new Oe));const g={a:c,b:u,c:f,normal:new F,materialIndex:0};Dn.getNormal(pi,mi,gi,g.normal),m.face=g}return m}class Ys extends ai{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(f,2));function g(p,d,_,T,A,E,b,R,O,M,D){const Y=E/O,I=b/M,pe=E/2,ne=b/2,N=R/2,J=O+1,H=M+1;let W=0,V=0;const U=new F;for(let Q=0;Q<H;Q++){const de=Q*I-ne;for(let se=0;se<J;se++){const oe=se*Y-pe;U[p]=oe*T,U[d]=de*A,U[_]=N,c.push(U.x,U.y,U.z),U[p]=0,U[d]=0,U[_]=R>0?1:-1,u.push(U.x,U.y,U.z),f.push(se/O),f.push(1-Q/M),W+=1}}for(let Q=0;Q<M;Q++)for(let de=0;de<O;de++){const se=h+de+J*Q,oe=h+de+J*(Q+1),Se=h+(de+1)+J*(Q+1),Ae=h+(de+1)+J*Q;l.push(se,oe,Ae),l.push(oe,Se,Ae),V+=6}o.addGroup(m,V,D),m+=V,h+=W}}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function yt(t){const e={};for(let n=0;n<t.length;n++){const i=Jr(t[n]);for(const r in i)e[r]=i[r]}return e}const UM={clone:Jr,merge:yt};var zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends vt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=zM,this.fragmentShader=BM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Sp extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zt extends Sp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _f*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mr=90,br=1;class HM extends Wt{constructor(e,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Zt(Mr,br,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new F(1,0,0)),this.add(r);const s=new Zt(Mr,br,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new F(-1,0,0)),this.add(s);const a=new Zt(Mr,br,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new F(0,1,0)),this.add(a);const o=new Zt(Mr,br,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new F(0,-1,0)),this.add(o);const l=new Zt(Mr,br,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new F(0,0,1)),this.add(l);const c=new Zt(Mr,br,e,n);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new F(0,0,-1)),this.add(c)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Qn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,a),e.setRenderTarget(i,3),e.render(n,o),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class wp extends mn{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:$r,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GM extends Ei{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$t}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ys(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ti});s.uniforms.tEquirect.value=n;const a=new Mi(r,s),o=n.minFilter;return n.minFilter===Eo&&(n.minFilter=$t),new HM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const ml=new F,VM=new F,WM=new Rn;class ki{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ml.subVectors(i,n).cross(VM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||WM.getNormalMatrix(e),r=this.coplanarPoint(ml).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Ao,ya=new F;class Tp{constructor(e=new ki,n=new ki,i=new ki,r=new ki,s=new ki,a=new ki){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],g=i[10],p=i[11],d=i[12],_=i[13],T=i[14],A=i[15];return n[0].setComponents(o-r,f-l,p-h,A-d).normalize(),n[1].setComponents(o+r,f+l,p+h,A+d).normalize(),n[2].setComponents(o+s,f+c,p+m,A+_).normalize(),n[3].setComponents(o-s,f-c,p-m,A-_).normalize(),n[4].setComponents(o-a,f-u,p-g,A-T).normalize(),n[5].setComponents(o+a,f+u,p+g,A+T).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ya.x=r.normal.x>0?e.max.x:e.min.x,ya.y=r.normal.y>0?e.max.y:e.min.y,ya.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ep(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function YM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=t.createBuffer();t.bindBuffer(u,m),t.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;t.bindBuffer(f,c),m.count===-1?t.bufferSubData(f,0,h):(n?t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Zc extends ai{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=n/l,m=[],g=[],p=[],d=[];for(let _=0;_<u;_++){const T=_*h-a;for(let A=0;A<c;A++){const E=A*f-s;g.push(E,-T,0),p.push(0,0,1),d.push(A/o),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let T=0;T<o;T++){const A=T+c*_,E=T+c*(_+1),b=T+1+c*(_+1),R=T+1+c*_;m.push(A,E,R),m.push(E,b,R)}this.setIndex(m),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(p,3)),this.setAttribute("uv",new In(d,2))}static fromJSON(e){return new Zc(e.width,e.height,e.widthSegments,e.heightSegments)}}var jM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JM="vec3 transformed = vec3( position );",QM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,tb=`#ifdef USE_IRIDESCENCE
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
#endif`,nb=`#ifdef USE_BUMPMAP
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
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fb=`#define PI 3.141592653589793
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
}`,hb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,db=`vec3 transformedNormal = objectNormal;
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
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",vb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Lb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pb=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Ib=`uniform bool receiveShadow;
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
#endif`,Fb=`#if defined( USE_ENVMAP )
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
#endif`,Nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ob=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,zb=`PhysicalMaterial material;
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
#endif`,Bb=`struct PhysicalMaterial {
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
}`,Hb=`
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tS=`#ifdef USE_MORPHNORMALS
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
#endif`,nS=`#ifdef USE_MORPHTARGETS
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
#endif`,iS=`#ifdef USE_MORPHTARGETS
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
#endif`,rS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,sS=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cS=`#ifdef USE_NORMALMAP
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
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,hS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bS=`#ifdef USE_SHADOWMAP
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
#endif`,SS=`#ifdef USE_SHADOWMAP
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
#endif`,wS=`#ifdef USE_SHADOWMAP
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
#endif`,TS=`float getShadowMask() {
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
}`,ES=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AS=`#ifdef USE_SKINNING
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
#endif`,CS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DS=`#ifdef USE_SKINNING
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
#endif`,LS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FS=`#ifdef USE_TRANSMISSION
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
#endif`,NS=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,kS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,US=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,zS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,BS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,HS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`#include <envmap_common_pars_fragment>
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
}`,qS=`#include <common>
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
}`,XS=`#if DEPTH_PACKING == 3200
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
}`,$S=`#define DISTANCE
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
}`,ZS=`#define DISTANCE
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QS=`uniform float scale;
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
}`,ew=`uniform vec3 diffuse;
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
}`,tw=`#include <common>
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
}`,nw=`uniform vec3 diffuse;
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
}`,iw=`#define LAMBERT
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
}`,rw=`uniform vec3 diffuse;
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
}`,sw=`#define MATCAP
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
}`,aw=`#define MATCAP
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
}`,ow=`#define NORMAL
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
}`,lw=`#define NORMAL
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
}`,cw=`#define PHONG
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
}`,uw=`#define PHONG
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
}`,fw=`#define STANDARD
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
}`,hw=`#define STANDARD
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
}`,dw=`#define TOON
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
}`,pw=`#define TOON
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
}`,mw=`uniform float size;
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
}`,gw=`uniform vec3 diffuse;
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
}`,_w=`#include <common>
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
}`,xw=`uniform vec3 color;
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
}`,vw=`uniform float rotation;
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
}`,yw=`uniform vec3 diffuse;
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
}`,Ve={alphamap_fragment:jM,alphamap_pars_fragment:qM,alphatest_fragment:XM,alphatest_pars_fragment:$M,aomap_fragment:ZM,aomap_pars_fragment:KM,begin_vertex:JM,beginnormal_vertex:QM,bsdfs:eb,iridescence_fragment:tb,bumpmap_pars_fragment:nb,clipping_planes_fragment:ib,clipping_planes_pars_fragment:rb,clipping_planes_pars_vertex:sb,clipping_planes_vertex:ab,color_fragment:ob,color_pars_fragment:lb,color_pars_vertex:cb,color_vertex:ub,common:fb,cube_uv_reflection_fragment:hb,defaultnormal_vertex:db,displacementmap_pars_vertex:pb,displacementmap_vertex:mb,emissivemap_fragment:gb,emissivemap_pars_fragment:_b,encodings_fragment:xb,encodings_pars_fragment:vb,envmap_fragment:yb,envmap_common_pars_fragment:Mb,envmap_pars_fragment:bb,envmap_pars_vertex:Sb,envmap_physical_pars_fragment:Fb,envmap_vertex:wb,fog_vertex:Tb,fog_pars_vertex:Eb,fog_fragment:Ab,fog_pars_fragment:Cb,gradientmap_pars_fragment:Db,lightmap_fragment:Lb,lightmap_pars_fragment:Rb,lights_lambert_vertex:Pb,lights_pars_begin:Ib,lights_toon_fragment:Nb,lights_toon_pars_fragment:Ob,lights_phong_fragment:kb,lights_phong_pars_fragment:Ub,lights_physical_fragment:zb,lights_physical_pars_fragment:Bb,lights_fragment_begin:Hb,lights_fragment_maps:Gb,lights_fragment_end:Vb,logdepthbuf_fragment:Wb,logdepthbuf_pars_fragment:Yb,logdepthbuf_pars_vertex:jb,logdepthbuf_vertex:qb,map_fragment:Xb,map_pars_fragment:$b,map_particle_fragment:Zb,map_particle_pars_fragment:Kb,metalnessmap_fragment:Jb,metalnessmap_pars_fragment:Qb,morphcolor_vertex:eS,morphnormal_vertex:tS,morphtarget_pars_vertex:nS,morphtarget_vertex:iS,normal_fragment_begin:rS,normal_fragment_maps:sS,normal_pars_fragment:aS,normal_pars_vertex:oS,normal_vertex:lS,normalmap_pars_fragment:cS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:fS,clearcoat_pars_fragment:hS,iridescence_pars_fragment:dS,output_fragment:pS,packing:mS,premultiplied_alpha_fragment:gS,project_vertex:_S,dithering_fragment:xS,dithering_pars_fragment:vS,roughnessmap_fragment:yS,roughnessmap_pars_fragment:MS,shadowmap_pars_fragment:bS,shadowmap_pars_vertex:SS,shadowmap_vertex:wS,shadowmask_pars_fragment:TS,skinbase_vertex:ES,skinning_pars_vertex:AS,skinning_vertex:CS,skinnormal_vertex:DS,specularmap_fragment:LS,specularmap_pars_fragment:RS,tonemapping_fragment:PS,tonemapping_pars_fragment:IS,transmission_fragment:FS,transmission_pars_fragment:NS,uv_pars_fragment:OS,uv_pars_vertex:kS,uv_vertex:US,uv2_pars_fragment:zS,uv2_pars_vertex:BS,uv2_vertex:HS,worldpos_vertex:GS,background_vert:VS,background_frag:WS,cube_vert:YS,cube_frag:jS,depth_vert:qS,depth_frag:XS,distanceRGBA_vert:$S,distanceRGBA_frag:ZS,equirect_vert:KS,equirect_frag:JS,linedashed_vert:QS,linedashed_frag:ew,meshbasic_vert:tw,meshbasic_frag:nw,meshlambert_vert:iw,meshlambert_frag:rw,meshmatcap_vert:sw,meshmatcap_frag:aw,meshnormal_vert:ow,meshnormal_frag:lw,meshphong_vert:cw,meshphong_frag:uw,meshphysical_vert:fw,meshphysical_frag:hw,meshtoon_vert:dw,meshtoon_frag:pw,points_vert:mw,points_frag:gw,shadow_vert:_w,shadow_frag:xw,sprite_vert:vw,sprite_frag:yw},ve={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Rn},uv2Transform:{value:new Rn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rn}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rn}}},An={basic:{uniforms:yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:yt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:yt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:yt([ve.points,ve.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:yt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:yt([ve.common,ve.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:yt([ve.sprite,ve.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Rn},t2D:{value:null}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},cube:{uniforms:yt([ve.envmap,{opacity:{value:1}}]),vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:yt([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:yt([ve.lights,ve.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};An.physical={uniforms:yt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};function Mw(t,e,n,i,r,s){const a=new ke(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function m(p,d){let _=!1,T=d.isScene===!0?d.background:null;T&&T.isTexture&&(T=e.get(T));const A=t.xr,E=A.getSession&&A.getSession();E&&E.environmentBlendMode==="additive"&&(T=null),T===null?g(a,o):T&&T.isColor&&(g(T,1),_=!0),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),T&&(T.isCubeTexture||T.mapping===To)?(c===void 0&&(c=new Mi(new Ys(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Jr(An.cube.uniforms),vertexShader:An.cube.vertexShader,fragmentShader:An.cube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,(u!==T||f!==T.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,h=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Mi(new Zc(2,2),new ni({name:"BackgroundMaterial",uniforms:Jr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,h=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,d){n.buffers.color.setClear(p.r,p.g,p.b,d,s)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),o=d,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function bw(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function f(N,J,H,W,V){let U=!1;if(a){const Q=p(W,H,J);c!==Q&&(c=Q,m(c.object)),U=_(N,W,H,V),U&&T(N,W,H,V)}else{const Q=J.wireframe===!0;(c.geometry!==W.id||c.program!==H.id||c.wireframe!==Q)&&(c.geometry=W.id,c.program=H.id,c.wireframe=Q,U=!0)}V!==null&&n.update(V,34963),(U||u)&&(u=!1,M(N,J,H,W),V!==null&&t.bindBuffer(34963,n.get(V).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function p(N,J,H){const W=H.wireframe===!0;let V=o[N.id];V===void 0&&(V={},o[N.id]=V);let U=V[J.id];U===void 0&&(U={},V[J.id]=U);let Q=U[W];return Q===void 0&&(Q=d(h()),U[W]=Q),Q}function d(N){const J=[],H=[],W=[];for(let V=0;V<r;V++)J[V]=0,H[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:H,attributeDivisors:W,object:N,attributes:{},index:null}}function _(N,J,H,W){const V=c.attributes,U=J.attributes;let Q=0;const de=H.getAttributes();for(const se in de)if(de[se].location>=0){const Se=V[se];let Ae=U[se];if(Ae===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor)),Se===void 0||Se.attribute!==Ae||Ae&&Se.data!==Ae.data)return!0;Q++}return c.attributesNum!==Q||c.index!==W}function T(N,J,H,W){const V={},U=J.attributes;let Q=0;const de=H.getAttributes();for(const se in de)if(de[se].location>=0){let Se=U[se];Se===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor));const Ae={};Ae.attribute=Se,Se&&Se.data&&(Ae.data=Se.data),V[se]=Ae,Q++}c.attributes=V,c.attributesNum=Q,c.index=W}function A(){const N=c.newAttributes;for(let J=0,H=N.length;J<H;J++)N[J]=0}function E(N){b(N,0)}function b(N,J){const H=c.newAttributes,W=c.enabledAttributes,V=c.attributeDivisors;H[N]=1,W[N]===0&&(t.enableVertexAttribArray(N),W[N]=1),V[N]!==J&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,J),V[N]=J)}function R(){const N=c.newAttributes,J=c.enabledAttributes;for(let H=0,W=J.length;H<W;H++)J[H]!==N[H]&&(t.disableVertexAttribArray(H),J[H]=0)}function O(N,J,H,W,V,U){i.isWebGL2===!0&&(H===5124||H===5125)?t.vertexAttribIPointer(N,J,H,V,U):t.vertexAttribPointer(N,J,H,W,V,U)}function M(N,J,H,W){if(i.isWebGL2===!1&&(N.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const V=W.attributes,U=H.getAttributes(),Q=J.defaultAttributeValues;for(const de in U){const se=U[de];if(se.location>=0){let oe=V[de];if(oe===void 0&&(de==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),de==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),oe!==void 0){const Se=oe.normalized,Ae=oe.itemSize,K=n.get(oe);if(K===void 0)continue;const Ge=K.buffer,Ce=K.type,De=K.bytesPerElement;if(oe.isInterleavedBufferAttribute){const xe=oe.data,We=xe.stride,Ie=oe.offset;if(xe.isInstancedInterleavedBuffer){for(let S=0;S<se.locationSize;S++)b(se.location+S,xe.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let S=0;S<se.locationSize;S++)E(se.location+S);t.bindBuffer(34962,Ge);for(let S=0;S<se.locationSize;S++)O(se.location+S,Ae/se.locationSize,Ce,Se,We*De,(Ie+Ae/se.locationSize*S)*De)}else{if(oe.isInstancedBufferAttribute){for(let xe=0;xe<se.locationSize;xe++)b(se.location+xe,oe.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let xe=0;xe<se.locationSize;xe++)E(se.location+xe);t.bindBuffer(34962,Ge);for(let xe=0;xe<se.locationSize;xe++)O(se.location+xe,Ae/se.locationSize,Ce,Se,Ae*De,Ae/se.locationSize*xe*De)}}else if(Q!==void 0){const Se=Q[de];if(Se!==void 0)switch(Se.length){case 2:t.vertexAttrib2fv(se.location,Se);break;case 3:t.vertexAttrib3fv(se.location,Se);break;case 4:t.vertexAttrib4fv(se.location,Se);break;default:t.vertexAttrib1fv(se.location,Se)}}}}R()}function D(){pe();for(const N in o){const J=o[N];for(const H in J){const W=J[H];for(const V in W)g(W[V].object),delete W[V];delete J[H]}delete o[N]}}function Y(N){if(o[N.id]===void 0)return;const J=o[N.id];for(const H in J){const W=J[H];for(const V in W)g(W[V].object),delete W[V];delete J[H]}delete o[N.id]}function I(N){for(const J in o){const H=o[J];if(H[N.id]===void 0)continue;const W=H[N.id];for(const V in W)g(W[V].object),delete W[V];delete H[N.id]}}function pe(){ne(),u=!0,c!==l&&(c=l,m(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:pe,resetDefaultState:ne,dispose:D,releaseStatesOfGeometry:Y,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:E,disableUnusedAttributes:R}}function Sw(t,e,n,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),n.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function ww(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(O){if(O==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&t instanceof WebGL2ComputeRenderingContext;let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),h=t.getParameter(35660),m=t.getParameter(3379),g=t.getParameter(34076),p=t.getParameter(34921),d=t.getParameter(36347),_=t.getParameter(36348),T=t.getParameter(36349),A=h>0,E=a||e.has("OES_texture_float"),b=A&&E,R=a?t.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:A,floatFragmentTextures:E,floatVertexTextures:b,maxSamples:R}}function Tw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ki,o=new Rn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||i!==0||r;return r=h,n=u(f,m,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,p=f.clipIntersection,d=f.clipShadows,_=t.get(f);if(!r||g===null||g.length===0||s&&!d)s?u(null):c();else{const T=s?0:i,A=T*4;let E=_.clippingState||null;l.value=E,E=u(g,h,A,m);for(let b=0;b!==A;++b)E[b]=n[b];_.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const p=f!==null?f.length:0;let d=null;if(p!==0){if(d=l.value,g!==!0||d===null){const _=m+p*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(d===null||d.length<_)&&(d=new Float32Array(_));for(let A=0,E=m;A!==p;++A,E+=4)a.copy(f[A]).applyMatrix4(T,o),a.normal.toArray(d,E),d[E+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,d}}function Ew(t){let e=new WeakMap;function n(a,o){return o===Xl?a.mapping=$r:o===$l&&(a.mapping=Zr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Xl||o===$l)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new GM(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Aw extends Sp{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Pr=4,Lf=[.125,.215,.35,.446,.526,.582],Bi=20,gl=new Aw,Rf=new ke;let _l=null;const Ui=(1+Math.sqrt(5))/2,wr=1/Ui,Pf=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ui,wr),new F(0,Ui,-wr),new F(wr,0,Ui),new F(-wr,0,Ui),new F(Ui,wr,0),new F(-Ui,wr,0)];class If{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){_l=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l),e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$r||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Fs,format:cn,encoding:tr,depthBuffer:!1},r=Ff(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ff(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cw(s)),this._blurMaterial=Dw(s,e,n)}return r}_compileMaterial(e){const n=new Mi(this._lodPlanes[0],e);this._renderer.compile(n,gl)}_sceneToCubeUV(e,n,i,r){const o=new Zt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Rf),u.toneMapping=Qn,u.autoClear=!1;const m=new $c({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new Mi(new Ys,m);let p=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,p=!0):(m.color.copy(Rf),p=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):T===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const A=this._cubeSize;Ma(r,T*A,_>2?A:0,A,A),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$r||e.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ma(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,gl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pf[(r-1)%Pf.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Mi(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Bi-1),p=s/g,d=isFinite(s)?1+Math.floor(u*p):Bi;d>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Bi}`);const _=[];let T=0;for(let O=0;O<Bi;++O){const M=O/p,D=Math.exp(-M*M/2);_.push(D),O===0?T+=D:O<d&&(T+=2*D)}for(let O=0;O<_.length;O++)_[O]=_[O]/T;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=g,h.mipInt.value=A-i;const E=this._sizeLods[r],b=3*E*(r>A-Pr?r-A+Pr:0),R=4*(this._cubeSize-E);Ma(n,b,R,3*E,2*E),l.setRenderTarget(n),l.render(f,gl)}}function Cw(t){const e=[],n=[],i=[];let r=t;const s=t-Pr+1+Lf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Pr?l=Lf[a-t+Pr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,p=3,d=2,_=1,T=new Float32Array(p*g*m),A=new Float32Array(d*g*m),E=new Float32Array(_*g*m);for(let R=0;R<m;R++){const O=R%3*2/3-1,M=R>2?0:-1,D=[O,M,0,O+2/3,M,0,O+2/3,M+1,0,O,M,0,O+2/3,M+1,0,O,M+1,0];T.set(D,p*g*R),A.set(h,d*g*R);const Y=[R,R,R,R,R,R];E.set(Y,_*g*R)}const b=new ai;b.setAttribute("position",new Pn(T,p)),b.setAttribute("uv",new Pn(A,d)),b.setAttribute("faceIndex",new Pn(E,_)),e.push(b),r>Pr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ff(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Dw(t,e,n){const i=new Float32Array(Bi),r=new F(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Nf(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Of(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function Lw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xl||l===$l,u=l===$r||l===Zr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new If(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new If(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Rw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Pw(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const p=m[g];for(let d=0,_=p.length;d<_;d++)e.update(p[d],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let p=0;if(m!==null){const T=m.array;p=m.version;for(let A=0,E=T.length;A<E;A+=3){const b=T[A+0],R=T[A+1],O=T[A+2];h.push(b,R,R,O,O,b)}}else{const T=g.array;p=g.version;for(let A=0,E=T.length/3-1;A<E;A+=3){const b=A+0,R=A+1,O=A+2;h.push(b,R,R,O,O,b)}}const d=new(pp(h)?bp:Mp)(h,1);d.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,d)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Iw(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){t.drawElements(s,m,o,h*l),n.update(m,s,1)}function f(h,m,g){if(g===0)return;let p,d;if(r)p=t,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,m,o,h*l,g),n.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Fw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case 4:n.triangles+=o*(s/3);break;case 1:n.lines+=o*(s/2);break;case 3:n.lines+=o*(s-1);break;case 2:n.lines+=o*s;break;case 0:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Nw(t,e){return t[0]-e[0]}function Ow(t,e){return Math.abs(e[1])-Math.abs(t[1])}function xl(t,e){let n=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?n=127:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),t.divideScalar(n)}function kw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new bt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==d){let H=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var g=H;_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,O=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let Y=0;E===!0&&(Y=1),b===!0&&(Y=2),R===!0&&(Y=3);let I=u.attributes.position.count*Y,pe=1;I>e.maxTextureSize&&(pe=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const ne=new Float32Array(I*pe*4*d),N=new xp(ne,I,pe,d);N.type=Wi,N.needsUpdate=!0;const J=Y*4;for(let W=0;W<d;W++){const V=O[W],U=M[W],Q=D[W],de=I*pe*4*W;for(let se=0;se<V.count;se++){const oe=se*J;E===!0&&(a.fromBufferAttribute(V,se),V.normalized===!0&&xl(a,V),ne[de+oe+0]=a.x,ne[de+oe+1]=a.y,ne[de+oe+2]=a.z,ne[de+oe+3]=0),b===!0&&(a.fromBufferAttribute(U,se),U.normalized===!0&&xl(a,U),ne[de+oe+4]=a.x,ne[de+oe+5]=a.y,ne[de+oe+6]=a.z,ne[de+oe+7]=0),R===!0&&(a.fromBufferAttribute(Q,se),Q.normalized===!0&&xl(a,Q),ne[de+oe+8]=a.x,ne[de+oe+9]=a.y,ne[de+oe+10]=a.z,ne[de+oe+11]=Q.itemSize===4?a.w:1)}}_={count:d,texture:N,size:new Oe(I,pe)},s.set(u,_),u.addEventListener("dispose",H)}let T=0;for(let E=0;E<m.length;E++)T+=m[E];const A=u.morphTargetsRelative?1:1-T;h.getUniforms().setValue(t,"morphTargetBaseInfluence",A),h.getUniforms().setValue(t,"morphTargetInfluences",m),h.getUniforms().setValue(t,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let d=i[u.id];if(d===void 0||d.length!==p){d=[];for(let b=0;b<p;b++)d[b]=[b,0];i[u.id]=d}for(let b=0;b<p;b++){const R=d[b];R[0]=b,R[1]=m[b]}d.sort(Ow);for(let b=0;b<8;b++)b<p&&d[b][1]?(o[b][0]=d[b][0],o[b][1]=d[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(Nw);const _=u.morphAttributes.position,T=u.morphAttributes.normal;let A=0;for(let b=0;b<8;b++){const R=o[b],O=R[0],M=R[1];O!==Number.MAX_SAFE_INTEGER&&M?(_&&u.getAttribute("morphTarget"+b)!==_[O]&&u.setAttribute("morphTarget"+b,_[O]),T&&u.getAttribute("morphNormal"+b)!==T[O]&&u.setAttribute("morphNormal"+b,T[O]),r[b]=M,A+=M):(_&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),T&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const E=u.morphTargetsRelative?1:1-A;h.getUniforms().setValue(t,"morphTargetBaseInfluence",E),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Uw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const Ap=new mn,Cp=new xp,Dp=new AM,Lp=new wp,kf=[],Uf=[],zf=new Float32Array(16),Bf=new Float32Array(9),Hf=new Float32Array(4);function os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=kf[r];if(s===void 0&&(s=new Float32Array(r),kf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Co(t,e){let n=Uf[e];n===void 0&&(n=new Int32Array(e),Uf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function Vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;Hf.set(i),t.uniformMatrix2fv(this.addr,!1,Hf),It(n,i)}}function Ww(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;Bf.set(i),t.uniformMatrix3fv(this.addr,!1,Bf),It(n,i)}}function Yw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Pt(n,i))return;zf.set(i),t.uniformMatrix4fv(this.addr,!1,zf),It(n,i)}}function jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qw(t,e){const n=this.cache;Pt(n,e)||(t.uniform2iv(this.addr,e),It(n,e))}function Xw(t,e){const n=this.cache;Pt(n,e)||(t.uniform3iv(this.addr,e),It(n,e))}function $w(t,e){const n=this.cache;Pt(n,e)||(t.uniform4iv(this.addr,e),It(n,e))}function Zw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Kw(t,e){const n=this.cache;Pt(n,e)||(t.uniform2uiv(this.addr,e),It(n,e))}function Jw(t,e){const n=this.cache;Pt(n,e)||(t.uniform3uiv(this.addr,e),It(n,e))}function Qw(t,e){const n=this.cache;Pt(n,e)||(t.uniform4uiv(this.addr,e),It(n,e))}function e1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Ap,r)}function t1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dp,r)}function n1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Lp,r)}function i1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cp,r)}function r1(t){switch(t){case 5126:return zw;case 35664:return Bw;case 35665:return Hw;case 35666:return Gw;case 35674:return Vw;case 35675:return Ww;case 35676:return Yw;case 5124:case 35670:return jw;case 35667:case 35671:return qw;case 35668:case 35672:return Xw;case 35669:case 35673:return $w;case 5125:return Zw;case 36294:return Kw;case 36295:return Jw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function s1(t,e){t.uniform1fv(this.addr,e)}function a1(t,e){const n=os(e,this.size,2);t.uniform2fv(this.addr,n)}function o1(t,e){const n=os(e,this.size,3);t.uniform3fv(this.addr,n)}function l1(t,e){const n=os(e,this.size,4);t.uniform4fv(this.addr,n)}function c1(t,e){const n=os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function u1(t,e){const n=os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function f1(t,e){const n=os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function h1(t,e){t.uniform1iv(this.addr,e)}function d1(t,e){t.uniform2iv(this.addr,e)}function p1(t,e){t.uniform3iv(this.addr,e)}function m1(t,e){t.uniform4iv(this.addr,e)}function g1(t,e){t.uniform1uiv(this.addr,e)}function _1(t,e){t.uniform2uiv(this.addr,e)}function x1(t,e){t.uniform3uiv(this.addr,e)}function v1(t,e){t.uniform4uiv(this.addr,e)}function y1(t,e,n){const i=e.length,r=Co(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||Ap,r[s])}function M1(t,e,n){const i=e.length,r=Co(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||Dp,r[s])}function b1(t,e,n){const i=e.length,r=Co(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||Lp,r[s])}function S1(t,e,n){const i=e.length,r=Co(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||Cp,r[s])}function w1(t){switch(t){case 5126:return s1;case 35664:return a1;case 35665:return o1;case 35666:return l1;case 35674:return c1;case 35675:return u1;case 35676:return f1;case 5124:case 35670:return h1;case 35667:case 35671:return d1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return _1;case 36295:return x1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return S1}}class T1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=r1(n.type)}}class E1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=w1(n.type)}}class A1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function Gf(t,e){t.seq.push(e),t.map[e.id]=e}function C1(t,e,n){const i=t.name,r=i.length;for(vl.lastIndex=0;;){const s=vl.exec(i),a=vl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Gf(n,c===void 0?new T1(o,t,e):new E1(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new A1(o),Gf(n,f)),n=f}}}class Fa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);C1(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Vf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let D1=0;function L1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function R1(t){switch(t){case tr:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Wf(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+L1(t.getShaderSource(e),a)}else return r}function P1(t,e){const n=R1(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function I1(t,e){let n;switch(e){case eM:n="Linear";break;case tM:n="Reinhard";break;case nM:n="OptimizedCineon";break;case iM:n="ACESFilmic";break;case rM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function F1(t){return[t.extensionDerivatives||!!t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function N1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function O1(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function vs(t){return t!==""}function Yf(t,e){return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(t){return t.replace(k1,U1)}function U1(t,e){const n=Ve[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return ec(n)}const z1=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(t){return t.replace(B1,Rp).replace(z1,H1)}function H1(t,e,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Rp(t,e,n,i)}function Rp(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xf(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ry?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xs&&(e="SHADOWMAP_TYPE_VSM"),e}function V1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $r:case Zr:e="ENVMAP_TYPE_CUBE";break;case To:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zr:e="ENVMAP_MODE_REFRACTION";break}return e}function Y1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Jy:e="ENVMAP_BLENDING_MIX";break;case Qy:e="ENVMAP_BLENDING_ADD";break}return e}function j1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function q1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=G1(n),c=V1(n),u=W1(n),f=Y1(n),h=j1(n),m=n.isWebGL2?"":F1(n),g=N1(s),p=r.createProgram();let d,_,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=[g].filter(vs).join(`
`),d.length>0&&(d+=`
`),_=[m,g].filter(vs).join(`
`),_.length>0&&(_+=`
`)):(d=[Xf(n),"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),_=[m,Xf(n),"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qn?"#define TONE_MAPPING":"",n.toneMapping!==Qn?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Qn?I1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.encodings_pars_fragment,P1("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vs).join(`
`)),a=ec(a),a=Yf(a,n),a=jf(a,n),o=ec(o),o=Yf(o,n),o=jf(o,n),a=qf(a),o=qf(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",n.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=T+d+a,E=T+_+o,b=Vf(r,35633,A),R=Vf(r,35632,E);if(r.attachShader(p,b),r.attachShader(p,R),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),t.debug.checkShaderErrors){const D=r.getProgramInfoLog(p).trim(),Y=r.getShaderInfoLog(b).trim(),I=r.getShaderInfoLog(R).trim();let pe=!0,ne=!0;if(r.getProgramParameter(p,35714)===!1){pe=!1;const N=Wf(r,b,"vertex"),J=Wf(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+D+`
`+N+`
`+J)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(Y===""||I==="")&&(ne=!1);ne&&(this.diagnostics={runnable:pe,programLog:D,vertexShader:{log:Y,prefix:d},fragmentShader:{log:I,prefix:_}})}r.deleteShader(b),r.deleteShader(R);let O;this.getUniforms=function(){return O===void 0&&(O=new Fa(r,p)),O};let M;return this.getAttributes=function(){return M===void 0&&(M=O1(r,p)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=D1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=R,this}let X1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;return n.has(e)===!1&&n.set(e,new Set),n.get(e)}_getShaderStage(e){const n=this.shaderCache;if(n.has(e)===!1){const i=new Z1(e);n.set(e,i)}return n.get(e)}}class Z1{constructor(e){this.id=X1++,this.code=e,this.usedTimes=0}}function K1(t,e,n,i,r,s,a){const o=new yp,l=new $1,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M,D,Y,I,pe){const ne=I.fog,N=pe.geometry,J=M.isMeshStandardMaterial?I.environment:null,H=(M.isMeshStandardMaterial?n:e).get(M.envMap||J),W=!!H&&H.mapping===To?H.image.height:null,V=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const U=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Q=U!==void 0?U.length:0;let de=0;N.morphAttributes.position!==void 0&&(de=1),N.morphAttributes.normal!==void 0&&(de=2),N.morphAttributes.color!==void 0&&(de=3);let se,oe,Se,Ae;if(V){const We=An[V];se=We.vertexShader,oe=We.fragmentShader}else se=M.vertexShader,oe=M.fragmentShader,l.update(M),Se=l.getVertexShaderID(M),Ae=l.getFragmentShaderID(M);const K=t.getRenderTarget(),Ge=M.alphaTest>0,Ce=M.clearcoat>0,De=M.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:M.type,vertexShader:se,fragmentShader:oe,defines:M.defines,customVertexShaderID:Se,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:pe.isInstancedMesh===!0,instancingColor:pe.isInstancedMesh===!0&&pe.instanceColor!==null,supportsVertexTextures:h,outputEncoding:K===null?t.outputEncoding:K.isXRRenderTarget===!0?K.texture.encoding:tr,map:!!M.map,matcap:!!M.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:W,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===SM,tangentSpaceNormalMap:M.normalMapType===ss,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===ot,clearcoat:Ce,clearcoatMap:Ce&&!!M.clearcoatMap,clearcoatRoughnessMap:Ce&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:Ce&&!!M.clearcoatNormalMap,iridescence:De,iridescenceMap:De&&!!M.iridescenceMap,iridescenceThicknessMap:De&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Hr,alphaMap:!!M.alphaMap,alphaTest:Ge,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!N.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!ne,useFog:M.fog===!0,fogExp2:ne&&ne.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:f,skinning:pe.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:de,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&Y.length>0,shadowMapType:t.shadowMap.type,toneMapping:M.toneMapped?t.toneMapping:Qn,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xr,flipSided:M.side===hn,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const D=[];if(M.shaderID?D.push(M.shaderID):(D.push(M.customVertexShaderID),D.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Y in M.defines)D.push(Y),D.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(_(D,M),T(D,M),D.push(t.outputEncoding)),D.push(M.customProgramCacheKey),D.join()}function _(M,D){M.push(D.precision),M.push(D.outputEncoding),M.push(D.envMapMode),M.push(D.envMapCubeUVHeight),M.push(D.combine),M.push(D.vertexUvs),M.push(D.fogExp2),M.push(D.sizeAttenuation),M.push(D.morphTargetsCount),M.push(D.morphAttributeCount),M.push(D.numDirLights),M.push(D.numPointLights),M.push(D.numSpotLights),M.push(D.numHemiLights),M.push(D.numRectAreaLights),M.push(D.numDirLightShadows),M.push(D.numPointLightShadows),M.push(D.numSpotLightShadows),M.push(D.shadowMapType),M.push(D.toneMapping),M.push(D.numClippingPlanes),M.push(D.numClipIntersection),M.push(D.depthPacking)}function T(M,D){o.disableAll(),D.isWebGL2&&o.enable(0),D.supportsVertexTextures&&o.enable(1),D.instancing&&o.enable(2),D.instancingColor&&o.enable(3),D.map&&o.enable(4),D.matcap&&o.enable(5),D.envMap&&o.enable(6),D.lightMap&&o.enable(7),D.aoMap&&o.enable(8),D.emissiveMap&&o.enable(9),D.bumpMap&&o.enable(10),D.normalMap&&o.enable(11),D.objectSpaceNormalMap&&o.enable(12),D.tangentSpaceNormalMap&&o.enable(13),D.clearcoat&&o.enable(14),D.clearcoatMap&&o.enable(15),D.clearcoatRoughnessMap&&o.enable(16),D.clearcoatNormalMap&&o.enable(17),D.iridescence&&o.enable(18),D.iridescenceMap&&o.enable(19),D.iridescenceThicknessMap&&o.enable(20),D.displacementMap&&o.enable(21),D.specularMap&&o.enable(22),D.roughnessMap&&o.enable(23),D.metalnessMap&&o.enable(24),D.gradientMap&&o.enable(25),D.alphaMap&&o.enable(26),D.alphaTest&&o.enable(27),D.vertexColors&&o.enable(28),D.vertexAlphas&&o.enable(29),D.vertexUvs&&o.enable(30),D.vertexTangents&&o.enable(31),D.uvsVertexOnly&&o.enable(32),D.fog&&o.enable(33),M.push(o.mask),o.disableAll(),D.useFog&&o.enable(0),D.flatShading&&o.enable(1),D.logarithmicDepthBuffer&&o.enable(2),D.skinning&&o.enable(3),D.morphTargets&&o.enable(4),D.morphNormals&&o.enable(5),D.morphColors&&o.enable(6),D.premultipliedAlpha&&o.enable(7),D.shadowMapEnabled&&o.enable(8),D.physicallyCorrectLights&&o.enable(9),D.doubleSided&&o.enable(10),D.flipSided&&o.enable(11),D.useDepthPacking&&o.enable(12),D.dithering&&o.enable(13),D.specularIntensityMap&&o.enable(14),D.specularColorMap&&o.enable(15),D.transmission&&o.enable(16),D.transmissionMap&&o.enable(17),D.thicknessMap&&o.enable(18),D.sheen&&o.enable(19),D.sheenColorMap&&o.enable(20),D.sheenRoughnessMap&&o.enable(21),D.decodeVideoTexture&&o.enable(22),D.opaque&&o.enable(23),M.push(o.mask)}function A(M){const D=g[M.type];let Y;if(D){const I=An[D];Y=UM.clone(I.uniforms)}else Y=M.uniforms;return Y}function E(M,D){let Y;for(let I=0,pe=c.length;I<pe;I++){const ne=c[I];if(ne.cacheKey===D){Y=ne,++Y.usedTimes;break}}return Y===void 0&&(Y=new q1(t,D,M,s),c.push(Y)),Y}function b(M){if(--M.usedTimes===0){const D=c.indexOf(M);c[D]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:A,acquireProgram:E,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:O}}function J1(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Q1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $f(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Zf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,m,g,p,d){let _=t[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:d},t[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=d),e++,_}function o(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):n.push(_)}function l(f,h,m,g,p,d){const _=a(f,h,m,g,p,d);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):n.unshift(_)}function c(f,h){n.length>1&&n.sort(f||Q1),i.length>1&&i.sort(h||$f),r.length>1&&r.sort(h||$f)}function u(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function eT(){let t=new WeakMap;function e(i,r){let s;return t.has(i)===!1?(s=new Zf,t.set(i,[s])):r>=t.get(i).length?(s=new Zf,t.get(i).push(s)):s=t.get(i)[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function tT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new ke};break;case"SpotLight":n={position:new F,direction:new F,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":n={color:new ke,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function nT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iT=0;function rT(t,e){return(e.castShadow?1:0)-(t.castShadow?1:0)}function sT(t,e){const n=new tT,i=nT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new F);const s=new F,a=new xt,o=new xt;function l(u,f){let h=0,m=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let p=0,d=0,_=0,T=0,A=0,E=0,b=0,R=0;u.sort(rT);const O=f!==!0?Math.PI:1;for(let D=0,Y=u.length;D<Y;D++){const I=u[D],pe=I.color,ne=I.intensity,N=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=pe.r*ne*O,m+=pe.g*ne*O,g+=pe.b*ne*O;else if(I.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(I.sh.coefficients[H],ne);else if(I.isDirectionalLight){const H=n.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*O),I.castShadow){const W=I.shadow,V=i.get(I);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,r.directionalShadow[p]=V,r.directionalShadowMap[p]=J,r.directionalShadowMatrix[p]=I.shadow.matrix,E++}r.directional[p]=H,p++}else if(I.isSpotLight){const H=n.get(I);if(H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(pe).multiplyScalar(ne*O),H.distance=N,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,I.castShadow){const W=I.shadow,V=i.get(I);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,r.spotShadow[_]=V,r.spotShadowMap[_]=J,r.spotShadowMatrix[_]=I.shadow.matrix,R++}r.spot[_]=H,_++}else if(I.isRectAreaLight){const H=n.get(I);H.color.copy(pe).multiplyScalar(ne),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),r.rectArea[T]=H,T++}else if(I.isPointLight){const H=n.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*O),H.distance=I.distance,H.decay=I.decay,I.castShadow){const W=I.shadow,V=i.get(I);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,r.pointShadow[d]=V,r.pointShadowMap[d]=J,r.pointShadowMatrix[d]=I.shadow.matrix,b++}r.point[d]=H,d++}else if(I.isHemisphereLight){const H=n.get(I);H.skyColor.copy(I.color).multiplyScalar(ne*O),H.groundColor.copy(I.groundColor).multiplyScalar(ne*O),r.hemi[A]=H,A++}}T>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==p||M.pointLength!==d||M.spotLength!==_||M.rectAreaLength!==T||M.hemiLength!==A||M.numDirectionalShadows!==E||M.numPointShadows!==b||M.numSpotShadows!==R)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=T,r.point.length=d,r.hemi.length=A,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=R,M.directionalLength=p,M.pointLength=d,M.spotLength=_,M.rectAreaLength=T,M.hemiLength=A,M.numDirectionalShadows=E,M.numPointShadows=b,M.numSpotShadows=R,r.version=iT++)}function c(u,f){let h=0,m=0,g=0,p=0,d=0;const _=f.matrixWorldInverse;for(let T=0,A=u.length;T<A;T++){const E=u[T];if(E.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),h++}else if(E.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(E.isRectAreaLight){const b=r.rectArea[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(_),o.identity(),a.copy(E.matrixWorld),a.premultiply(_),o.extractRotation(a),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(E.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const b=r.hemi[d];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:r}}function Kf(t,e){const n=new sT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function aT(t,e){let n=new WeakMap;function i(s,a=0){let o;return n.has(s)===!1?(o=new Kf(t,e),n.set(s,[o])):a>=n.get(s).length?(o=new Kf(t,e),n.get(s).push(o)):o=n.get(s)[a],o}function r(){n=new WeakMap}return{get:i,dispose:r}}class Pp extends vt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ip extends vt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const oT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lT=`uniform sampler2D shadow_pass;
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
}`;function cT(t,e,n){let i=new Tp;const r=new Oe,s=new Oe,a=new bt,o=new Pp({depthPacking:bM}),l=new Ip,c={},u=n.maxTextureSize,f={0:hn,1:Is,2:Xr},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:oT,fragmentShader:lT}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new ai;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Mi(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cp,this.render=function(E,b,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;const O=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(Ti),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);for(let I=0,pe=E.length;I<pe;I++){const ne=E[I],N=ne.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const J=N.getFrameExtents();if(r.multiply(J),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,N.mapSize.y=s.y)),N.map===null&&!N.isPointLightShadow&&this.type===xs&&(N.map=new Ei(r.x,r.y),N.map.texture.name=ne.name+".shadowMap",N.mapPass=new Ei(r.x,r.y),N.camera.updateProjectionMatrix()),N.map===null){const W={minFilter:Ot,magFilter:Ot,format:cn};N.map=new Ei(r.x,r.y,W),N.map.texture.name=ne.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const H=N.getViewportCount();for(let W=0;W<H;W++){const V=N.getViewport(W);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),Y.viewport(a),N.updateMatrices(ne,W),i=N.getFrustum(),A(b,R,N.camera,ne,this.type)}!N.isPointLightShadow&&this.type===xs&&_(N,R),N.needsUpdate=!1}d.needsUpdate=!1,t.setRenderTarget(O,M,D)};function _(E,b){const R=e.update(p);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(b,null,R,h,p,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(b,null,R,m,p,null)}function T(E,b,R,O,M,D){let Y=null;const I=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0?Y=I:Y=R.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const pe=Y.uuid,ne=b.uuid;let N=c[pe];N===void 0&&(N={},c[pe]=N);let J=N[ne];J===void 0&&(J=Y.clone(),N[ne]=J),Y=J}return Y.visible=b.visible,Y.wireframe=b.wireframe,D===xs?Y.side=b.shadowSide!==null?b.shadowSide:b.side:Y.side=b.shadowSide!==null?b.shadowSide:f[b.side],Y.alphaMap=b.alphaMap,Y.alphaTest=b.alphaTest,Y.clipShadows=b.clipShadows,Y.clippingPlanes=b.clippingPlanes,Y.clipIntersection=b.clipIntersection,Y.displacementMap=b.displacementMap,Y.displacementScale=b.displacementScale,Y.displacementBias=b.displacementBias,Y.wireframeLinewidth=b.wireframeLinewidth,Y.linewidth=b.linewidth,R.isPointLight===!0&&Y.isMeshDistanceMaterial===!0&&(Y.referencePosition.setFromMatrixPosition(R.matrixWorld),Y.nearDistance=O,Y.farDistance=M),Y}function A(E,b,R,O,M){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===xs)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const I=e.update(E),pe=E.material;if(Array.isArray(pe)){const ne=I.groups;for(let N=0,J=ne.length;N<J;N++){const H=ne[N],W=pe[H.materialIndex];if(W&&W.visible){const V=T(E,W,O,R.near,R.far,M);t.renderBufferDirect(R,null,I,V,E,H)}}}else if(pe.visible){const ne=T(E,pe,O,R.near,R.far,M);t.renderBufferDirect(R,null,I,ne,E,null)}}const Y=E.children;for(let I=0,pe=Y.length;I<pe;I++)A(Y[I],b,R,O,M)}}function uT(t,e,n){const i=n.isWebGL2;function r(){let C=!1;const he=new bt;let me=null;const we=new bt(0,0,0,0);return{setMask:function(ge){me!==ge&&!C&&(t.colorMask(ge,ge,ge,ge),me=ge)},setLocked:function(ge){C=ge},setClear:function(ge,Te,_e,Re,Je){Je===!0&&(ge*=Re,Te*=Re,_e*=Re),he.set(ge,Te,_e,Re),we.equals(he)===!1&&(t.clearColor(ge,Te,_e,Re),we.copy(he))},reset:function(){C=!1,me=null,we.set(-1,0,0,0)}}}function s(){let C=!1,he=null,me=null,we=null;return{setTest:function(ge){ge?Ae(2929):K(2929)},setMask:function(ge){he!==ge&&!C&&(t.depthMask(ge),he=ge)},setFunc:function(ge){if(me!==ge){if(ge)switch(ge){case Yy:t.depthFunc(512);break;case jy:t.depthFunc(519);break;case qy:t.depthFunc(513);break;case ql:t.depthFunc(515);break;case Xy:t.depthFunc(514);break;case $y:t.depthFunc(518);break;case Zy:t.depthFunc(516);break;case Ky:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);me=ge}},setLocked:function(ge){C=ge},setClear:function(ge){we!==ge&&(t.clearDepth(ge),we=ge)},reset:function(){C=!1,he=null,me=null,we=null}}}function a(){let C=!1,he=null,me=null,we=null,ge=null,Te=null,_e=null,Re=null,Je=null;return{setTest:function(Qe){C||(Qe?Ae(2960):K(2960))},setMask:function(Qe){he!==Qe&&!C&&(t.stencilMask(Qe),he=Qe)},setFunc:function(Qe,Et,_n){(me!==Qe||we!==Et||ge!==_n)&&(t.stencilFunc(Qe,Et,_n),me=Qe,we=Et,ge=_n)},setOp:function(Qe,Et,_n){(Te!==Qe||_e!==Et||Re!==_n)&&(t.stencilOp(Qe,Et,_n),Te=Qe,_e=Et,Re=_n)},setLocked:function(Qe){C=Qe},setClear:function(Qe){Je!==Qe&&(t.clearStencil(Qe),Je=Qe)},reset:function(){C=!1,he=null,me=null,we=null,ge=null,Te=null,_e=null,Re=null,Je=null}}}const o=new r,l=new s,c=new a;let u={},f={},h=new WeakMap,m=[],g=null,p=!1,d=null,_=null,T=null,A=null,E=null,b=null,R=null,O=!1,M=null,D=null,Y=null,I=null,pe=null;const ne=t.getParameter(35661);let N=!1,J=0;const H=t.getParameter(7938);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),N=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),N=J>=2);let W=null,V={};const U=t.getParameter(3088),Q=t.getParameter(2978),de=new bt().fromArray(U),se=new bt().fromArray(Q);function oe(C,he,me){const we=new Uint8Array(4),ge=t.createTexture();t.bindTexture(C,ge),t.texParameteri(C,10241,9728),t.texParameteri(C,10240,9728);for(let Te=0;Te<me;Te++)t.texImage2D(he+Te,0,6408,1,1,0,6408,5121,we);return ge}const Se={};Se[3553]=oe(3553,3553,1),Se[34067]=oe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(2929),l.setFunc(ql),L(!1),B(zu),Ae(2884),Ie(Ti);function Ae(C){u[C]!==!0&&(t.enable(C),u[C]=!0)}function K(C){u[C]!==!1&&(t.disable(C),u[C]=!1)}function Ge(C,he){return f[C]!==he?(t.bindFramebuffer(C,he),f[C]=he,i&&(C===36009&&(f[36160]=he),C===36160&&(f[36009]=he)),!0):!1}function Ce(C,he){let me=m,we=!1;if(C)if(me=h.get(he),me===void 0&&(me=[],h.set(he,me)),C.isWebGLMultipleRenderTargets){const ge=C.texture;if(me.length!==ge.length||me[0]!==36064){for(let Te=0,_e=ge.length;Te<_e;Te++)me[Te]=36064+Te;me.length=ge.length,we=!0}}else me[0]!==36064&&(me[0]=36064,we=!0);else me[0]!==1029&&(me[0]=1029,we=!0);we&&(n.isWebGL2?t.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function De(C){return g!==C?(t.useProgram(C),g=C,!0):!1}const xe={[Dr]:32774,[Fy]:32778,[Ny]:32779};if(i)xe[Vu]=32775,xe[Wu]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(xe[Vu]=C.MIN_EXT,xe[Wu]=C.MAX_EXT)}const We={[Oy]:0,[ky]:1,[Uy]:768,[up]:770,[Wy]:776,[Gy]:774,[By]:772,[zy]:769,[fp]:771,[Vy]:775,[Hy]:773};function Ie(C,he,me,we,ge,Te,_e,Re){if(C===Ti){p===!0&&(K(3042),p=!1);return}if(p===!1&&(Ae(3042),p=!0),C!==Iy){if(C!==d||Re!==O){if((_!==Dr||E!==Dr)&&(t.blendEquation(32774),_=Dr,E=Dr),Re)switch(C){case Hr:t.blendFuncSeparate(1,771,1,771);break;case Bu:t.blendFunc(1,1);break;case Hu:t.blendFuncSeparate(0,769,0,1);break;case Gu:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Hr:t.blendFuncSeparate(770,771,1,771);break;case Bu:t.blendFunc(770,1);break;case Hu:t.blendFuncSeparate(0,769,0,1);break;case Gu:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,A=null,b=null,R=null,d=C,O=Re}return}ge=ge||he,Te=Te||me,_e=_e||we,(he!==_||ge!==E)&&(t.blendEquationSeparate(xe[he],xe[ge]),_=he,E=ge),(me!==T||we!==A||Te!==b||_e!==R)&&(t.blendFuncSeparate(We[me],We[we],We[Te],We[_e]),T=me,A=we,b=Te,R=_e),d=C,O=null}function S(C,he){C.side===Xr?K(2884):Ae(2884);let me=C.side===hn;he&&(me=!me),L(me),C.blending===Hr&&C.transparent===!1?Ie(Ti):Ie(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const we=C.stencilWrite;c.setTest(we),we&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Z(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ae(32926):K(32926)}function L(C){M!==C&&(C?t.frontFace(2304):t.frontFace(2305),M=C)}function B(C){C!==Dy?(Ae(2884),C!==D&&(C===zu?t.cullFace(1029):C===Ly?t.cullFace(1028):t.cullFace(1032))):K(2884),D=C}function $(C){C!==Y&&(N&&t.lineWidth(C),Y=C)}function Z(C,he,me){C?(Ae(32823),(I!==he||pe!==me)&&(t.polygonOffset(he,me),I=he,pe=me)):K(32823)}function ie(C){C?Ae(3089):K(3089)}function re(C){C===void 0&&(C=33984+ne-1),W!==C&&(t.activeTexture(C),W=C)}function ae(C,he){W===null&&re();let me=V[W];me===void 0&&(me={type:void 0,texture:void 0},V[W]=me),(me.type!==C||me.texture!==he)&&(t.bindTexture(C,he||Se[C]),me.type=C,me.texture=he)}function ce(){const C=V[W];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function v(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function x(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function P(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function z(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function y(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(C){de.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),de.copy(C))}function ue(C){se.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),se.copy(C))}function fe(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},W=null,V={},f={},h=new WeakMap,m=[],g=null,p=!1,d=null,_=null,T=null,A=null,E=null,b=null,R=null,O=!1,M=null,D=null,Y=null,I=null,pe=null,de.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ae,disable:K,bindFramebuffer:Ge,drawBuffers:Ce,useProgram:De,setBlending:Ie,setMaterial:S,setFlipSided:L,setCullFace:B,setLineWidth:$,setPolygonOffset:Z,setScissorTest:ie,activeTexture:re,bindTexture:ae,unbindTexture:ce,compressedTexImage2D:v,texImage2D:ye,texImage3D:y,texStorage2D:X,texStorage3D:te,texSubImage2D:x,texSubImage3D:P,compressedTexSubImage2D:z,scissor:j,viewport:ue,reset:fe}}function fT(t,e,n,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(v,x){return _?new OffscreenCanvas(v,x):Xa("canvas")}function A(v,x,P,z){let X=1;if((v.width>z||v.height>z)&&(X=z/Math.max(v.width,v.height)),X<1||x===!0)if(typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&v instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&v instanceof ImageBitmap){const te=x?Ql:Math.floor,ye=te(X*v.width),y=te(X*v.height);p===void 0&&(p=T(ye,y));const j=P?T(ye,y):p;return j.width=ye,j.height=y,j.getContext("2d").drawImage(v,0,0,ye,y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+ye+"x"+y+")."),j}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function E(v){return xf(v.width)&&xf(v.height)}function b(v){return o?!1:v.wrapS!==sn||v.wrapT!==sn||v.minFilter!==Ot&&v.minFilter!==$t}function R(v,x){return v.generateMipmaps&&x&&v.minFilter!==Ot&&v.minFilter!==$t}function O(v){t.generateMipmap(v)}function M(v,x,P,z,X=!1){if(o===!1)return x;if(v!==null){if(t[v]!==void 0)return t[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let te=x;return x===6403&&(P===5126&&(te=33326),P===5131&&(te=33325),P===5121&&(te=33321)),x===33319&&(P===5126&&(te=33328),P===5131&&(te=33327),P===5121&&(te=33323)),x===6408&&(P===5126&&(te=34836),P===5131&&(te=34842),P===5121&&(te=z===ot&&X===!1?35907:32856),P===32819&&(te=32854),P===32820&&(te=32855)),(te===33325||te===33326||te===33327||te===33328||te===34842||te===34836)&&e.get("EXT_color_buffer_float"),te}function D(v,x,P){return R(v,P)===!0||v.isFramebufferTexture&&v.minFilter!==Ot&&v.minFilter!==$t?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function Y(v){return v===Ot||v===Yu||v===ju?9728:9729}function I(v){const x=v.target;x.removeEventListener("dispose",I),ne(x),x.isVideoTexture&&g.delete(x)}function pe(v){const x=v.target;x.removeEventListener("dispose",pe),J(x)}function ne(v){const x=i.get(v);if(x.__webglInit===void 0)return;const P=v.source,z=d.get(P);if(z){const X=z[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&N(v),Object.keys(z).length===0&&d.delete(P)}i.remove(v)}function N(v){const x=i.get(v);t.deleteTexture(x.__webglTexture);const P=v.source,z=d.get(P);delete z[x.__cacheKey],a.memory.textures--}function J(v){const x=v.texture,P=i.get(v),z=i.get(x);if(z.__webglTexture!==void 0&&(t.deleteTexture(z.__webglTexture),a.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let X=0;X<6;X++)t.deleteFramebuffer(P.__webglFramebuffer[X]),P.__webglDepthbuffer&&t.deleteRenderbuffer(P.__webglDepthbuffer[X]);else{if(t.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&t.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&t.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let X=0;X<P.__webglColorRenderbuffer.length;X++)P.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(P.__webglColorRenderbuffer[X]);P.__webglDepthRenderbuffer&&t.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let X=0,te=x.length;X<te;X++){const ye=i.get(x[X]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(x[X])}i.remove(x),i.remove(v)}let H=0;function W(){H=0}function V(){const v=H;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),H+=1,v}function U(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.encoding),x.join()}function Q(v,x){const P=i.get(v);if(v.isVideoTexture&&ae(v),v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){const z=v.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(P,v,x);return}}n.activeTexture(33984+x),n.bindTexture(3553,P.__webglTexture)}function de(v,x){const P=i.get(v);if(v.version>0&&P.__version!==v.version){Ce(P,v,x);return}n.activeTexture(33984+x),n.bindTexture(35866,P.__webglTexture)}function se(v,x){const P=i.get(v);if(v.version>0&&P.__version!==v.version){Ce(P,v,x);return}n.activeTexture(33984+x),n.bindTexture(32879,P.__webglTexture)}function oe(v,x){const P=i.get(v);if(v.version>0&&P.__version!==v.version){De(P,v,x);return}n.activeTexture(33984+x),n.bindTexture(34067,P.__webglTexture)}const Se={[Zl]:10497,[sn]:33071,[Kl]:33648},Ae={[Ot]:9728,[Yu]:9984,[ju]:9986,[$t]:9729,[sM]:9985,[Eo]:9987};function K(v,x,P){if(P?(t.texParameteri(v,10242,Se[x.wrapS]),t.texParameteri(v,10243,Se[x.wrapT]),(v===32879||v===35866)&&t.texParameteri(v,32882,Se[x.wrapR]),t.texParameteri(v,10240,Ae[x.magFilter]),t.texParameteri(v,10241,Ae[x.minFilter])):(t.texParameteri(v,10242,33071),t.texParameteri(v,10243,33071),(v===32879||v===35866)&&t.texParameteri(v,32882,33071),(x.wrapS!==sn||x.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(v,10240,Y(x.magFilter)),t.texParameteri(v,10241,Y(x.minFilter)),x.minFilter!==Ot&&x.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");if(x.type===Wi&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Fs&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(t.texParameterf(v,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Ge(v,x){let P=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",I));const z=x.source;let X=d.get(z);X===void 0&&(X={},d.set(z,X));const te=U(x);if(te!==v.__cacheKey){X[te]===void 0&&(X[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,P=!0),X[te].usedTimes++;const ye=X[v.__cacheKey];ye!==void 0&&(X[v.__cacheKey].usedTimes--,ye.usedTimes===0&&N(x)),v.__cacheKey=te,v.__webglTexture=X[te].texture}return P}function Ce(v,x,P){let z=3553;x.isDataArrayTexture&&(z=35866),x.isData3DTexture&&(z=32879);const X=Ge(v,x),te=x.source;if(n.activeTexture(33984+P),n.bindTexture(z,v.__webglTexture),te.version!==te.__currentVersion||X===!0){t.pixelStorei(37440,x.flipY),t.pixelStorei(37441,x.premultiplyAlpha),t.pixelStorei(3317,x.unpackAlignment),t.pixelStorei(37443,0);const ye=b(x)&&E(x.image)===!1;let y=A(x.image,ye,!1,u);y=ce(x,y);const j=E(y)||o,ue=s.convert(x.format,x.encoding);let fe=s.convert(x.type),C=M(x.internalFormat,ue,fe,x.encoding,x.isVideoTexture);K(z,x,j);let he;const me=x.mipmaps,we=o&&x.isVideoTexture!==!0,ge=te.__currentVersion===void 0||X===!0,Te=D(x,y,j);if(x.isDepthTexture)C=6402,o?x.type===Wi?C=36012:x.type===Vi?C=33190:x.type===Gr?C=35056:C=33189:x.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Zi&&C===6402&&x.type!==dp&&x.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Vi,fe=s.convert(x.type)),x.format===Kr&&C===6402&&(C=34041,x.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Gr,fe=s.convert(x.type))),ge&&(we?n.texStorage2D(3553,1,C,y.width,y.height):n.texImage2D(3553,0,C,y.width,y.height,0,ue,fe,null));else if(x.isDataTexture)if(me.length>0&&j){we&&ge&&n.texStorage2D(3553,Te,C,me[0].width,me[0].height);for(let _e=0,Re=me.length;_e<Re;_e++)he=me[_e],we?n.texSubImage2D(3553,_e,0,0,he.width,he.height,ue,fe,he.data):n.texImage2D(3553,_e,C,he.width,he.height,0,ue,fe,he.data);x.generateMipmaps=!1}else we?(ge&&n.texStorage2D(3553,Te,C,y.width,y.height),n.texSubImage2D(3553,0,0,0,y.width,y.height,ue,fe,y.data)):n.texImage2D(3553,0,C,y.width,y.height,0,ue,fe,y.data);else if(x.isCompressedTexture){we&&ge&&n.texStorage2D(3553,Te,C,me[0].width,me[0].height);for(let _e=0,Re=me.length;_e<Re;_e++)he=me[_e],x.format!==cn?ue!==null?we?n.compressedTexSubImage2D(3553,_e,0,0,he.width,he.height,ue,he.data):n.compressedTexImage2D(3553,_e,C,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?n.texSubImage2D(3553,_e,0,0,he.width,he.height,ue,fe,he.data):n.texImage2D(3553,_e,C,he.width,he.height,0,ue,fe,he.data)}else if(x.isDataArrayTexture)we?(ge&&n.texStorage3D(35866,Te,C,y.width,y.height,y.depth),n.texSubImage3D(35866,0,0,0,0,y.width,y.height,y.depth,ue,fe,y.data)):n.texImage3D(35866,0,C,y.width,y.height,y.depth,0,ue,fe,y.data);else if(x.isData3DTexture)we?(ge&&n.texStorage3D(32879,Te,C,y.width,y.height,y.depth),n.texSubImage3D(32879,0,0,0,0,y.width,y.height,y.depth,ue,fe,y.data)):n.texImage3D(32879,0,C,y.width,y.height,y.depth,0,ue,fe,y.data);else if(x.isFramebufferTexture){if(ge)if(we)n.texStorage2D(3553,Te,C,y.width,y.height);else{let _e=y.width,Re=y.height;for(let Je=0;Je<Te;Je++)n.texImage2D(3553,Je,C,_e,Re,0,ue,fe,null),_e>>=1,Re>>=1}}else if(me.length>0&&j){we&&ge&&n.texStorage2D(3553,Te,C,me[0].width,me[0].height);for(let _e=0,Re=me.length;_e<Re;_e++)he=me[_e],we?n.texSubImage2D(3553,_e,0,0,ue,fe,he):n.texImage2D(3553,_e,C,ue,fe,he);x.generateMipmaps=!1}else we?(ge&&n.texStorage2D(3553,Te,C,y.width,y.height),n.texSubImage2D(3553,0,0,0,ue,fe,y)):n.texImage2D(3553,0,C,ue,fe,y);R(x,j)&&O(z),te.__currentVersion=te.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function De(v,x,P){if(x.image.length!==6)return;const z=Ge(v,x),X=x.source;if(n.activeTexture(33984+P),n.bindTexture(34067,v.__webglTexture),X.version!==X.__currentVersion||z===!0){t.pixelStorei(37440,x.flipY),t.pixelStorei(37441,x.premultiplyAlpha),t.pixelStorei(3317,x.unpackAlignment),t.pixelStorei(37443,0);const te=x.isCompressedTexture||x.image[0].isCompressedTexture,ye=x.image[0]&&x.image[0].isDataTexture,y=[];for(let _e=0;_e<6;_e++)!te&&!ye?y[_e]=A(x.image[_e],!1,!0,c):y[_e]=ye?x.image[_e].image:x.image[_e],y[_e]=ce(x,y[_e]);const j=y[0],ue=E(j)||o,fe=s.convert(x.format,x.encoding),C=s.convert(x.type),he=M(x.internalFormat,fe,C,x.encoding),me=o&&x.isVideoTexture!==!0,we=X.__currentVersion===void 0||z===!0;let ge=D(x,j,ue);K(34067,x,ue);let Te;if(te){me&&we&&n.texStorage2D(34067,ge,he,j.width,j.height);for(let _e=0;_e<6;_e++){Te=y[_e].mipmaps;for(let Re=0;Re<Te.length;Re++){const Je=Te[Re];x.format!==cn?fe!==null?me?n.compressedTexSubImage2D(34069+_e,Re,0,0,Je.width,Je.height,fe,Je.data):n.compressedTexImage2D(34069+_e,Re,he,Je.width,Je.height,0,Je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?n.texSubImage2D(34069+_e,Re,0,0,Je.width,Je.height,fe,C,Je.data):n.texImage2D(34069+_e,Re,he,Je.width,Je.height,0,fe,C,Je.data)}}}else{Te=x.mipmaps,me&&we&&(Te.length>0&&ge++,n.texStorage2D(34067,ge,he,y[0].width,y[0].height));for(let _e=0;_e<6;_e++)if(ye){me?n.texSubImage2D(34069+_e,0,0,0,y[_e].width,y[_e].height,fe,C,y[_e].data):n.texImage2D(34069+_e,0,he,y[_e].width,y[_e].height,0,fe,C,y[_e].data);for(let Re=0;Re<Te.length;Re++){const Qe=Te[Re].image[_e].image;me?n.texSubImage2D(34069+_e,Re+1,0,0,Qe.width,Qe.height,fe,C,Qe.data):n.texImage2D(34069+_e,Re+1,he,Qe.width,Qe.height,0,fe,C,Qe.data)}}else{me?n.texSubImage2D(34069+_e,0,0,0,fe,C,y[_e]):n.texImage2D(34069+_e,0,he,fe,C,y[_e]);for(let Re=0;Re<Te.length;Re++){const Je=Te[Re];me?n.texSubImage2D(34069+_e,Re+1,0,0,fe,C,Je.image[_e]):n.texImage2D(34069+_e,Re+1,he,fe,C,Je.image[_e])}}}R(x,ue)&&O(34067),X.__currentVersion=X.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function xe(v,x,P,z,X){const te=s.convert(P.format,P.encoding),ye=s.convert(P.type),y=M(P.internalFormat,te,ye,P.encoding);i.get(x).__hasExternalTextures||(X===32879||X===35866?n.texImage3D(X,0,y,x.width,x.height,x.depth,0,te,ye,null):n.texImage2D(X,0,y,x.width,x.height,0,te,ye,null)),n.bindFramebuffer(36160,v),re(x)?h.framebufferTexture2DMultisampleEXT(36160,z,X,i.get(P).__webglTexture,0,ie(x)):t.framebufferTexture2D(36160,z,X,i.get(P).__webglTexture,0),n.bindFramebuffer(36160,null)}function We(v,x,P){if(t.bindRenderbuffer(36161,v),x.depthBuffer&&!x.stencilBuffer){let z=33189;if(P||re(x)){const X=x.depthTexture;X&&X.isDepthTexture&&(X.type===Wi?z=36012:X.type===Vi&&(z=33190));const te=ie(x);re(x)?h.renderbufferStorageMultisampleEXT(36161,te,z,x.width,x.height):t.renderbufferStorageMultisample(36161,te,z,x.width,x.height)}else t.renderbufferStorage(36161,z,x.width,x.height);t.framebufferRenderbuffer(36160,36096,36161,v)}else if(x.depthBuffer&&x.stencilBuffer){const z=ie(x);P&&re(x)===!1?t.renderbufferStorageMultisample(36161,z,35056,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(36161,z,35056,x.width,x.height):t.renderbufferStorage(36161,34041,x.width,x.height),t.framebufferRenderbuffer(36160,33306,36161,v)}else{const z=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let X=0;X<z.length;X++){const te=z[X],ye=s.convert(te.format,te.encoding),y=s.convert(te.type),j=M(te.internalFormat,ye,y,te.encoding),ue=ie(x);P&&re(x)===!1?t.renderbufferStorageMultisample(36161,ue,j,x.width,x.height):re(x)?h.renderbufferStorageMultisampleEXT(36161,ue,j,x.width,x.height):t.renderbufferStorage(36161,j,x.width,x.height)}}t.bindRenderbuffer(36161,null)}function Ie(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);const z=i.get(x.depthTexture).__webglTexture,X=ie(x);if(x.depthTexture.format===Zi)re(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,z,0,X):t.framebufferTexture2D(36160,36096,3553,z,0);else if(x.depthTexture.format===Kr)re(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,z,0,X):t.framebufferTexture2D(36160,33306,3553,z,0);else throw new Error("Unknown depthTexture format")}function S(v){const x=i.get(v),P=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Ie(x.__webglFramebuffer,v)}else if(P){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)n.bindFramebuffer(36160,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]=t.createRenderbuffer(),We(x.__webglDepthbuffer[z],v,!1)}else n.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),We(x.__webglDepthbuffer,v,!1);n.bindFramebuffer(36160,null)}function L(v,x,P){const z=i.get(v);x!==void 0&&xe(z.__webglFramebuffer,v,v.texture,36064,3553),P!==void 0&&S(v)}function B(v){const x=v.texture,P=i.get(v),z=i.get(x);v.addEventListener("dispose",pe),v.isWebGLMultipleRenderTargets!==!0&&(z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture()),z.__version=x.version,a.memory.textures++);const X=v.isWebGLCubeRenderTarget===!0,te=v.isWebGLMultipleRenderTargets===!0,ye=E(v)||o;if(X){P.__webglFramebuffer=[];for(let y=0;y<6;y++)P.__webglFramebuffer[y]=t.createFramebuffer()}else{if(P.__webglFramebuffer=t.createFramebuffer(),te)if(r.drawBuffers){const y=v.texture;for(let j=0,ue=y.length;j<ue;j++){const fe=i.get(y[j]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&v.samples>0&&re(v)===!1){const y=te?x:[x];P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,P.__webglMultisampledFramebuffer);for(let j=0;j<y.length;j++){const ue=y[j];P.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(36161,P.__webglColorRenderbuffer[j]);const fe=s.convert(ue.format,ue.encoding),C=s.convert(ue.type),he=M(ue.internalFormat,fe,C,ue.encoding),me=ie(v);t.renderbufferStorageMultisample(36161,me,he,v.width,v.height),t.framebufferRenderbuffer(36160,36064+j,36161,P.__webglColorRenderbuffer[j])}t.bindRenderbuffer(36161,null),v.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),We(P.__webglDepthRenderbuffer,v,!0)),n.bindFramebuffer(36160,null)}}if(X){n.bindTexture(34067,z.__webglTexture),K(34067,x,ye);for(let y=0;y<6;y++)xe(P.__webglFramebuffer[y],v,x,36064,34069+y);R(x,ye)&&O(34067),n.unbindTexture()}else if(te){const y=v.texture;for(let j=0,ue=y.length;j<ue;j++){const fe=y[j],C=i.get(fe);n.bindTexture(3553,C.__webglTexture),K(3553,fe,ye),xe(P.__webglFramebuffer,v,fe,36064+j,3553),R(fe,ye)&&O(3553)}n.unbindTexture()}else{let y=3553;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(o?y=v.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(y,z.__webglTexture),K(y,x,ye),xe(P.__webglFramebuffer,v,x,36064,y),R(x,ye)&&O(y),n.unbindTexture()}v.depthBuffer&&S(v)}function $(v){const x=E(v)||o,P=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let z=0,X=P.length;z<X;z++){const te=P[z];if(R(te,x)){const ye=v.isWebGLCubeRenderTarget?34067:3553,y=i.get(te).__webglTexture;n.bindTexture(ye,y),O(ye),n.unbindTexture()}}}function Z(v){if(o&&v.samples>0&&re(v)===!1){const x=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],P=v.width,z=v.height;let X=16384;const te=[],ye=v.stencilBuffer?33306:36096,y=i.get(v),j=v.isWebGLMultipleRenderTargets===!0;if(j)for(let ue=0;ue<x.length;ue++)n.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ue,36161,null),n.bindFramebuffer(36160,y.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ue,3553,null,0);n.bindFramebuffer(36008,y.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,y.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){te.push(36064+ue),v.depthBuffer&&te.push(ye);const fe=y.__ignoreDepthValues!==void 0?y.__ignoreDepthValues:!1;if(fe===!1&&(v.depthBuffer&&(X|=256),v.stencilBuffer&&(X|=1024)),j&&t.framebufferRenderbuffer(36008,36064,36161,y.__webglColorRenderbuffer[ue]),fe===!0&&(t.invalidateFramebuffer(36008,[ye]),t.invalidateFramebuffer(36009,[ye])),j){const C=i.get(x[ue]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,C,0)}t.blitFramebuffer(0,0,P,z,0,0,P,z,X,9728),m&&t.invalidateFramebuffer(36008,te)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),j)for(let ue=0;ue<x.length;ue++){n.bindFramebuffer(36160,y.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+ue,36161,y.__webglColorRenderbuffer[ue]);const fe=i.get(x[ue]).__webglTexture;n.bindFramebuffer(36160,y.__webglFramebuffer),t.framebufferTexture2D(36009,36064+ue,3553,fe,0)}n.bindFramebuffer(36009,y.__webglMultisampledFramebuffer)}}function ie(v){return Math.min(f,v.samples)}function re(v){const x=i.get(v);return o&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(v){const x=a.render.frame;g.get(v)!==x&&(g.set(v,x),v.update())}function ce(v,x){const P=v.encoding,z=v.format,X=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===Jl||P!==tr&&(P===ot?o===!1?e.has("EXT_sRGB")===!0&&z===cn?(v.format=Jl,v.minFilter=$t,v.generateMipmaps=!1):x=gp.sRGBToLinear(x):(z!==cn||X!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",P)),x}this.allocateTextureUnit=V,this.resetTextureUnits=W,this.setTexture2D=Q,this.setTexture2DArray=de,this.setTexture3D=se,this.setTextureCube=oe,this.rebindTextures=L,this.setupRenderTarget=B,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=S,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=re}function hT(t,e,n){const i=n.isWebGL2;function r(s,a=null){let o;if(s===er)return 5121;if(s===cM)return 32819;if(s===uM)return 32820;if(s===aM)return 5120;if(s===oM)return 5122;if(s===dp)return 5123;if(s===lM)return 5124;if(s===Vi)return 5125;if(s===Wi)return 5126;if(s===Fs)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===fM)return 6406;if(s===cn)return 6408;if(s===dM)return 6409;if(s===pM)return 6410;if(s===Zi)return 6402;if(s===Kr)return 34041;if(s===mM)return 6403;if(s===hM)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Jl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===gM)return 36244;if(s===_M)return 33319;if(s===xM)return 33320;if(s===vM)return 36249;if(s===Go||s===Vo||s===Wo||s===Yo)if(a===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Go)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Go)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qu||s===Xu||s===$u||s===Zu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===qu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$u)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===yM)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ku||s===Ju)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ku)return a===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ju)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qu||s===ef||s===tf||s===nf||s===rf||s===sf||s===af||s===of||s===lf||s===cf||s===uf||s===ff||s===hf||s===df)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Qu)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ef)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tf)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nf)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rf)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sf)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===af)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===of)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lf)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cf)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uf)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ff)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hf)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===df)return a===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===pf)return a===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Gr?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class dT extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ys extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pT={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred")if(o!==null&&(r=n.getPose(e.targetRaySpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pT))),c&&e.hand){a=!0;for(const p of e.hand.values()){const d=n.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const T=new ys;T.matrixAutoUpdate=!1,T.visible=!1,c.joints[p.jointName]=T,c.add(T)}const _=c.joints[p.jointName];d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class mT extends mn{constructor(e,n,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Zi,u!==Zi&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zi&&(i=Vi),i===void 0&&u===Kr&&(i=Gr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1}}class gT extends rr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=n.getContextAttributes();let p=null,d=null;const _=[],T=new Map,A=new Zt;A.layers.enable(1),A.viewport=new bt;const E=new Zt;E.layers.enable(2),E.viewport=new bt;const b=[A,E],R=new dT;R.layers.enable(1),R.layers.enable(2);let O=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Q=_[U];return Q===void 0&&(Q=new yl,_[U]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(U){let Q=_[U];return Q===void 0&&(Q=new yl,_[U]=Q),Q.getGripSpace()},this.getHand=function(U){let Q=_[U];return Q===void 0&&(Q=new yl,_[U]=Q),Q.getHandSpace()};function D(U){const Q=T.get(U.inputSource);Q!==void 0&&Q.dispatchEvent({type:U.type,data:U.inputSource})}function Y(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",I),T.forEach(function(U,Q){U!==void 0&&U.disconnect(Q)}),T.clear(),O=null,M=null,e.setRenderTarget(p),h=null,f=null,u=null,r=null,d=null,V.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:h}),d=new Ei(h.framebufferWidth,h.framebufferHeight,{format:cn,type:er,encoding:e.outputEncoding})}else{let Q=null,de=null,se=null;g.depth&&(se=g.stencil?35056:33190,Q=g.stencil?Kr:Zi,de=g.stencil?Gr:Vi);const oe={colorFormat:e.outputEncoding===ot?35907:32856,depthFormat:se,scaleFactor:s};u=new XRWebGLBinding(r,n),f=u.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),d=new Ei(f.textureWidth,f.textureHeight,{format:cn,type:er,depthTexture:new mT(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Se=e.properties.get(d);Se.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),V.setContext(r),V.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(U){const Q=r.inputSources;for(let de=0;de<Q.length;de++){const se=Q[de].handedness==="right"?1:0;T.set(Q[de],_[se])}for(let de=0;de<U.removed.length;de++){const se=U.removed[de],oe=T.get(se);oe&&(oe.dispatchEvent({type:"disconnected",data:se}),T.delete(se))}for(let de=0;de<U.added.length;de++){const se=U.added[de],oe=T.get(se);oe&&oe.dispatchEvent({type:"connected",data:se})}}const pe=new F,ne=new F;function N(U,Q,de){pe.setFromMatrixPosition(Q.matrixWorld),ne.setFromMatrixPosition(de.matrixWorld);const se=pe.distanceTo(ne),oe=Q.projectionMatrix.elements,Se=de.projectionMatrix.elements,Ae=oe[14]/(oe[10]-1),K=oe[14]/(oe[10]+1),Ge=(oe[9]+1)/oe[5],Ce=(oe[9]-1)/oe[5],De=(oe[8]-1)/oe[0],xe=(Se[8]+1)/Se[0],We=Ae*De,Ie=Ae*xe,S=se/(-De+xe),L=S*-De;Q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(L),U.translateZ(S),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const B=Ae+S,$=K+S,Z=We-L,ie=Ie+(se-L),re=Ge*K/$*B,ae=Ce*K/$*B;U.projectionMatrix.makePerspective(Z,ie,re,ae,B,$)}function J(U,Q){Q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;R.near=E.near=A.near=U.near,R.far=E.far=A.far=U.far,(O!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,M=R.far);const Q=U.parent,de=R.cameras;J(R,Q);for(let oe=0;oe<de.length;oe++)J(de[oe],Q);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),U.position.copy(R.position),U.quaternion.copy(R.quaternion),U.scale.copy(R.scale),U.matrix.copy(R.matrix),U.matrixWorld.copy(R.matrixWorld);const se=U.children;for(let oe=0,Se=se.length;oe<Se;oe++)se[oe].updateMatrixWorld(!0);de.length===2?N(R,A,E):R.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(U){f!==null&&(f.fixedFoveation=U),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=U)};let H=null;function W(U,Q){if(c=Q.getViewerPose(l||a),m=Q,c!==null){const se=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let oe=!1;se.length!==R.cameras.length&&(R.cameras.length=0,oe=!0);for(let Se=0;Se<se.length;Se++){const Ae=se[Se];let K=null;if(h!==null)K=h.getViewport(Ae);else{const Ce=u.getViewSubImage(f,Ae);K=Ce.viewport,Se===0&&(e.setRenderTargetTextures(d,Ce.colorTexture,f.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(d))}let Ge=b[Se];Ge===void 0&&(Ge=new Zt,Ge.layers.enable(Se),Ge.viewport=new bt,b[Se]=Ge),Ge.matrix.fromArray(Ae.transform.matrix),Ge.projectionMatrix.fromArray(Ae.projectionMatrix),Ge.viewport.set(K.x,K.y,K.width,K.height),Se===0&&R.matrix.copy(Ge.matrix),oe===!0&&R.cameras.push(Ge)}}const de=r.inputSources;for(let se=0;se<_.length;se++){const oe=de[se],Se=T.get(oe);Se!==void 0&&Se.update(oe,Q,l||a)}H&&H(U,Q),m=null}const V=new Ep;V.setAnimationLoop(W),this.setAnimationLoop=function(U){H=U},this.dispose=function(){}}}function _T(t,e){function n(p,d){p.fogColor.value.copy(d.color),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,_,T,A){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),c(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&h(p,d,A)):d.isMeshMatcapMaterial?(r(p,d),m(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(s(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?o(p,d,_,T):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.bumpMap&&(p.bumpMap.value=d.bumpMap,p.bumpScale.value=d.bumpScale,d.side===hn&&(p.bumpScale.value*=-1)),d.displacementMap&&(p.displacementMap.value=d.displacementMap,p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap),d.normalMap&&(p.normalMap.value=d.normalMap,p.normalScale.value.copy(d.normalScale),d.side===hn&&p.normalScale.value.negate()),d.specularMap&&(p.specularMap.value=d.specularMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const E=t.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*E}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity);let T;d.map?T=d.map:d.specularMap?T=d.specularMap:d.displacementMap?T=d.displacementMap:d.normalMap?T=d.normalMap:d.bumpMap?T=d.bumpMap:d.roughnessMap?T=d.roughnessMap:d.metalnessMap?T=d.metalnessMap:d.alphaMap?T=d.alphaMap:d.emissiveMap?T=d.emissiveMap:d.clearcoatMap?T=d.clearcoatMap:d.clearcoatNormalMap?T=d.clearcoatNormalMap:d.clearcoatRoughnessMap?T=d.clearcoatRoughnessMap:d.iridescenceMap?T=d.iridescenceMap:d.iridescenceThicknessMap?T=d.iridescenceThicknessMap:d.specularIntensityMap?T=d.specularIntensityMap:d.specularColorMap?T=d.specularColorMap:d.transmissionMap?T=d.transmissionMap:d.thicknessMap?T=d.thicknessMap:d.sheenColorMap?T=d.sheenColorMap:d.sheenRoughnessMap&&(T=d.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix));let A;d.aoMap?A=d.aoMap:d.lightMap&&(A=d.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uv2Transform.value.copy(A.matrix))}function s(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function o(p,d,_,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*_,p.scale.value=T*.5,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let A;d.map?A=d.map:d.alphaMap&&(A=d.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map),d.alphaMap&&(p.alphaMap.value=d.alphaMap),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.roughness.value=d.roughness,p.metalness.value=d.metalness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function h(p,d,_){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),p.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===hn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap)}function m(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){p.referencePosition.value.copy(d.referencePosition),p.nearDistance.value=d.nearDistance,p.farDistance.value=d.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xT(){const t=Xa("canvas");return t.style.display="block",t}function Fp(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:xT(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,a=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,o=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",c=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let u;n!==null?u=n.getContextAttributes().alpha:u=t.alpha!==void 0?t.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=tr,this.physicallyCorrectLights=!1,this.toneMapping=Qn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let d=!1,_=0,T=0,A=null,E=-1,b=null;const R=new bt,O=new bt;let M=null,D=e.width,Y=e.height,I=1,pe=null,ne=null;const N=new bt(0,0,D,Y),J=new bt(0,0,D,Y);let H=!1;const W=new Tp;let V=!1,U=!1,Q=null;const de=new xt,se=new Oe,oe=new F,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return A===null?I:1}let K=n;function Ge(w,k){for(let q=0;q<w.length;q++){const G=w[q],ee=e.getContext(G,k);if(ee!==null)return ee}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xc}`),e.addEventListener("webglcontextlost",C,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",me,!1),K===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),K=Ge(k,w),K===null)throw Ge(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ce,De,xe,We,Ie,S,L,B,$,Z,ie,re,ae,ce,v,x,P,z,X,te,ye,y,j;function ue(){Ce=new Rw(K),De=new ww(K,Ce,t),Ce.init(De),y=new hT(K,Ce,De),xe=new uT(K,Ce,De),We=new Fw,Ie=new J1,S=new fT(K,Ce,xe,Ie,De,y,We),L=new Ew(p),B=new Lw(p),$=new YM(K,De),j=new bw(K,Ce,$,De),Z=new Pw(K,$,We,j),ie=new Uw(K,Z,$,We),X=new kw(K,De,S),x=new Tw(Ie),re=new K1(p,L,B,Ce,De,j,x),ae=new _T(p,Ie),ce=new eT,v=new aT(Ce,De),z=new Mw(p,L,xe,ie,u,a),P=new cT(p,ie,De),te=new Sw(K,Ce,We,De),ye=new Iw(K,Ce,We,De),We.programs=re.programs,p.capabilities=De,p.extensions=Ce,p.properties=Ie,p.renderLists=ce,p.shadowMap=P,p.state=xe,p.info=We}ue();const fe=new gT(p,K);this.xr=fe,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const w=Ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(D,Y,!1))},this.getSize=function(w){return w.set(D,Y)},this.setSize=function(w,k,q){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=w,Y=k,e.width=Math.floor(w*I),e.height=Math.floor(k*I),q!==!1&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(D*I,Y*I).floor()},this.setDrawingBufferSize=function(w,k,q){D=w,Y=k,I=q,e.width=Math.floor(w*q),e.height=Math.floor(k*q),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,k,q,G){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,k,q,G),xe.viewport(R.copy(N).multiplyScalar(I).floor())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,k,q,G){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,k,q,G),xe.scissor(O.copy(J).multiplyScalar(I).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(w){xe.setScissorTest(H=w)},this.setOpaqueSort=function(w){pe=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor.apply(z,arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha.apply(z,arguments)},this.clear=function(w=!0,k=!0,q=!0){let G=0;w&&(G|=16384),k&&(G|=256),q&&(G|=1024),K.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",C,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",me,!1),ce.dispose(),v.dispose(),Ie.dispose(),L.dispose(),B.dispose(),ie.dispose(),j.dispose(),re.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Je),fe.removeEventListener("sessionend",Qe),Q&&(Q.dispose(),Q=null),Et.stop()};function C(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const w=We.autoReset,k=P.enabled,q=P.autoUpdate,G=P.needsUpdate,ee=P.type;ue(),We.autoReset=w,P.enabled=k,P.autoUpdate=q,P.needsUpdate=G,P.type=ee}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function we(w){const k=w.target;k.removeEventListener("dispose",we),ge(k)}function ge(w){Te(w),Ie.remove(w)}function Te(w){const k=Ie.get(w).programs;k!==void 0&&(k.forEach(function(q){re.releaseProgram(q)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,q,G,ee,Le){k===null&&(k=Se);const Fe=ee.isMesh&&ee.matrixWorld.determinant()<0,Be=Zp(w,k,q,G,ee);xe.setMaterial(G,Fe);let ze=q.index;const et=q.attributes.position;if(ze===null){if(et===void 0||et.count===0)return}else if(ze.count===0)return;let qe=1;G.wireframe===!0&&(ze=Z.getWireframeAttribute(q),qe=2),j.setup(ee,G,Be,q,ze);let Xe,lt=te;ze!==null&&(Xe=$.get(ze),lt=ye,lt.setIndex(Xe));const Ci=ze!==null?ze.count:et.count,sr=q.drawRange.start*qe,ar=q.drawRange.count*qe,xn=Le!==null?Le.start*qe:0,Ke=Le!==null?Le.count*qe:1/0,or=Math.max(sr,xn),ut=Math.min(Ci,sr+ar,xn+Ke)-1,vn=Math.max(0,ut-or+1);if(vn!==0){if(ee.isMesh)G.wireframe===!0?(xe.setLineWidth(G.wireframeLinewidth*Ae()),lt.setMode(1)):lt.setMode(4);else if(ee.isLine){let oi=G.linewidth;oi===void 0&&(oi=1),xe.setLineWidth(oi*Ae()),ee.isLineSegments?lt.setMode(1):ee.isLineLoop?lt.setMode(2):lt.setMode(3)}else ee.isPoints?lt.setMode(0):ee.isSprite&&lt.setMode(4);if(ee.isInstancedMesh)lt.renderInstances(or,vn,ee.count);else if(q.isInstancedBufferGeometry){const oi=Math.min(q.instanceCount,q._maxInstanceCount);lt.renderInstances(or,vn,oi)}else lt.render(or,vn)}},this.compile=function(w,k){h=v.get(w),h.init(),g.push(h),w.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(h.pushLight(q),q.castShadow&&h.pushShadow(q))}),h.setupLights(p.physicallyCorrectLights),w.traverse(function(q){const G=q.material;if(G)if(Array.isArray(G))for(let ee=0;ee<G.length;ee++){const Le=G[ee];Do(Le,w,q)}else Do(G,w,q)}),g.pop(),h=null};let _e=null;function Re(w){_e&&_e(w)}function Je(){Et.stop()}function Qe(){Et.start()}const Et=new Ep;Et.setAnimationLoop(Re),typeof self!="undefined"&&Et.setContext(self),this.setAnimationLoop=function(w){_e=w,fe.setAnimationLoop(w),w===null?Et.stop():Et.start()},fe.addEventListener("sessionstart",Je),fe.addEventListener("sessionend",Qe),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(k),k=fe.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,k,A),h=v.get(w,g.length),h.init(),g.push(h),de.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),W.setFromProjectionMatrix(de),U=this.localClippingEnabled,V=x.init(this.clippingPlanes,U,k),f=ce.get(w,m.length),f.init(),m.push(f),_n(w,k,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(pe,ne),V===!0&&x.beginShadows();const q=h.state.shadowsArray;if(P.render(q,w,k),V===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),z.render(f,w),h.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const G=k.cameras;for(let ee=0,Le=G.length;ee<Le;ee++){const Fe=G[ee];iu(f,w,Fe,Fe.viewport)}}else iu(f,w,k);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(p,w,k),j.resetDefaultState(),E=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function _n(w,k,q,G){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){G&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(de);const Fe=ie.update(w),Be=w.material;Be.visible&&f.push(w,Fe,Be,q,oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==We.render.frame&&(w.skeleton.update(),w.skeleton.frame=We.render.frame),!w.frustumCulled||W.intersectsObject(w))){G&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(de);const Fe=ie.update(w),Be=w.material;if(Array.isArray(Be)){const ze=Fe.groups;for(let et=0,qe=ze.length;et<qe;et++){const Xe=ze[et],lt=Be[Xe.materialIndex];lt&&lt.visible&&f.push(w,Fe,lt,q,oe.z,Xe)}}else Be.visible&&f.push(w,Fe,Be,q,oe.z,null)}}const Le=w.children;for(let Fe=0,Be=Le.length;Fe<Be;Fe++)_n(Le[Fe],k,q,G)}function iu(w,k,q,G){const ee=w.opaque,Le=w.transmissive,Fe=w.transparent;h.setupLightsView(q),Le.length>0&&Xp(ee,k,q),G&&xe.viewport(R.copy(G)),ee.length>0&&Xs(ee,k,q),Le.length>0&&Xs(Le,k,q),Fe.length>0&&Xs(Fe,k,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Xp(w,k,q){const G=De.isWebGL2;Q===null&&(Q=new Ei(1,1,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Fs:er,minFilter:Eo,samples:G&&s===!0?4:0})),p.getDrawingBufferSize(se),G?Q.setSize(se.x,se.y):Q.setSize(Ql(se.x),Ql(se.y));const ee=p.getRenderTarget();p.setRenderTarget(Q),p.clear();const Le=p.toneMapping;p.toneMapping=Qn,Xs(w,k,q),p.toneMapping=Le,S.updateMultisampleRenderTarget(Q),S.updateRenderTargetMipmap(Q),p.setRenderTarget(ee)}function Xs(w,k,q){const G=k.isScene===!0?k.overrideMaterial:null;for(let ee=0,Le=w.length;ee<Le;ee++){const Fe=w[ee],Be=Fe.object,ze=Fe.geometry,et=G===null?Fe.material:G,qe=Fe.group;Be.layers.test(q.layers)&&$p(Be,k,q,ze,et,qe)}}function $p(w,k,q,G,ee,Le){w.onBeforeRender(p,k,q,G,ee,Le),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(p,k,q,G,w,Le),ee.transparent===!0&&ee.side===Xr?(ee.side=hn,ee.needsUpdate=!0,p.renderBufferDirect(q,k,G,ee,w,Le),ee.side=Is,ee.needsUpdate=!0,p.renderBufferDirect(q,k,G,ee,w,Le),ee.side=Xr):p.renderBufferDirect(q,k,G,ee,w,Le),w.onAfterRender(p,k,q,G,ee,Le)}function Do(w,k,q){k.isScene!==!0&&(k=Se);const G=Ie.get(w),ee=h.state.lights,Le=h.state.shadowsArray,Fe=ee.state.version,Be=re.getParameters(w,ee.state,Le,k,q),ze=re.getProgramCacheKey(Be);let et=G.programs;G.environment=w.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(w.isMeshStandardMaterial?B:L).get(w.envMap||G.environment),et===void 0&&(w.addEventListener("dispose",we),et=new Map,G.programs=et);let qe=et.get(ze);if(qe!==void 0){if(G.currentProgram===qe&&G.lightsStateVersion===Fe)return ru(w,Be),qe}else Be.uniforms=re.getUniforms(w),w.onBuild(q,Be,p),w.onBeforeCompile(Be,p),qe=re.acquireProgram(Be,ze),et.set(ze,qe),G.uniforms=Be.uniforms;const Xe=G.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=x.uniform),ru(w,Be),G.needsLights=Jp(w),G.lightsStateVersion=Fe,G.needsLights&&(Xe.ambientLightColor.value=ee.state.ambient,Xe.lightProbe.value=ee.state.probe,Xe.directionalLights.value=ee.state.directional,Xe.directionalLightShadows.value=ee.state.directionalShadow,Xe.spotLights.value=ee.state.spot,Xe.spotLightShadows.value=ee.state.spotShadow,Xe.rectAreaLights.value=ee.state.rectArea,Xe.ltc_1.value=ee.state.rectAreaLTC1,Xe.ltc_2.value=ee.state.rectAreaLTC2,Xe.pointLights.value=ee.state.point,Xe.pointLightShadows.value=ee.state.pointShadow,Xe.hemisphereLights.value=ee.state.hemi,Xe.directionalShadowMap.value=ee.state.directionalShadowMap,Xe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Xe.spotShadowMap.value=ee.state.spotShadowMap,Xe.spotShadowMatrix.value=ee.state.spotShadowMatrix,Xe.pointShadowMap.value=ee.state.pointShadowMap,Xe.pointShadowMatrix.value=ee.state.pointShadowMatrix);const lt=qe.getUniforms(),Ci=Fa.seqWithValue(lt.seq,Xe);return G.currentProgram=qe,G.uniformsList=Ci,qe}function ru(w,k){const q=Ie.get(w);q.outputEncoding=k.outputEncoding,q.instancing=k.instancing,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Zp(w,k,q,G,ee){k.isScene!==!0&&(k=Se),S.resetTextureUnits();const Le=k.fog,Fe=G.isMeshStandardMaterial?k.environment:null,Be=A===null?p.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:tr,ze=(G.isMeshStandardMaterial?B:L).get(G.envMap||Fe),et=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qe=!!G.normalMap&&!!q.attributes.tangent,Xe=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,Ci=!!q.morphAttributes.color,sr=G.toneMapped?p.toneMapping:Qn,ar=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xn=ar!==void 0?ar.length:0,Ke=Ie.get(G),or=h.state.lights;if(V===!0&&(U===!0||w!==b)){const yn=w===b&&G.id===E;x.setState(G,w,yn)}let ut=!1;G.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==or.state.version||Ke.outputEncoding!==Be||ee.isInstancedMesh&&Ke.instancing===!1||!ee.isInstancedMesh&&Ke.instancing===!0||ee.isSkinnedMesh&&Ke.skinning===!1||!ee.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==ze||G.fog===!0&&Ke.fog!==Le||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==x.numPlanes||Ke.numIntersection!==x.numIntersection)||Ke.vertexAlphas!==et||Ke.vertexTangents!==qe||Ke.morphTargets!==Xe||Ke.morphNormals!==lt||Ke.morphColors!==Ci||Ke.toneMapping!==sr||De.isWebGL2===!0&&Ke.morphTargetsCount!==xn)&&(ut=!0):(ut=!0,Ke.__version=G.version);let vn=Ke.currentProgram;ut===!0&&(vn=Do(G,k,ee));let oi=!1,ls=!1,Lo=!1;const At=vn.getUniforms(),cs=Ke.uniforms;if(xe.useProgram(vn.program)&&(oi=!0,ls=!0,Lo=!0),G.id!==E&&(E=G.id,ls=!0),oi||b!==w){if(At.setValue(K,"projectionMatrix",w.projectionMatrix),De.logarithmicDepthBuffer&&At.setValue(K,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),b!==w&&(b=w,ls=!0,Lo=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const yn=At.map.cameraPosition;yn!==void 0&&yn.setValue(K,oe.setFromMatrixPosition(w.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&At.setValue(K,"isOrthographic",w.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ee.isSkinnedMesh)&&At.setValue(K,"viewMatrix",w.matrixWorldInverse)}if(ee.isSkinnedMesh){At.setOptional(K,ee,"bindMatrix"),At.setOptional(K,ee,"bindMatrixInverse");const yn=ee.skeleton;yn&&(De.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),At.setValue(K,"boneTexture",yn.boneTexture,S),At.setValue(K,"boneTextureSize",yn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ro=q.morphAttributes;return(Ro.position!==void 0||Ro.normal!==void 0||Ro.color!==void 0&&De.isWebGL2===!0)&&X.update(ee,q,G,vn),(ls||Ke.receiveShadow!==ee.receiveShadow)&&(Ke.receiveShadow=ee.receiveShadow,At.setValue(K,"receiveShadow",ee.receiveShadow)),ls&&(At.setValue(K,"toneMappingExposure",p.toneMappingExposure),Ke.needsLights&&Kp(cs,Lo),Le&&G.fog===!0&&ae.refreshFogUniforms(cs,Le),ae.refreshMaterialUniforms(cs,G,I,Y,Q),Fa.upload(K,Ke.uniformsList,cs,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fa.upload(K,Ke.uniformsList,cs,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&At.setValue(K,"center",ee.center),At.setValue(K,"modelViewMatrix",ee.modelViewMatrix),At.setValue(K,"normalMatrix",ee.normalMatrix),At.setValue(K,"modelMatrix",ee.matrixWorld),vn}function Kp(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Jp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,k,q){Ie.get(w.texture).__webglTexture=k,Ie.get(w.depthTexture).__webglTexture=q;const G=Ie.get(w);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=q===void 0,G.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const q=Ie.get(w);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,q=0){A=w,_=k,T=q;let G=!0;if(w){const ze=Ie.get(w);ze.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),G=!1):ze.__webglFramebuffer===void 0?S.setupRenderTarget(w):ze.__hasExternalTextures&&S.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture)}let ee=null,Le=!1,Fe=!1;if(w){const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture)&&(Fe=!0);const et=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(ee=et[k],Le=!0):De.isWebGL2&&w.samples>0&&S.useMultisampledRTT(w)===!1?ee=Ie.get(w).__webglMultisampledFramebuffer:ee=et,R.copy(w.viewport),O.copy(w.scissor),M=w.scissorTest}else R.copy(N).multiplyScalar(I).floor(),O.copy(J).multiplyScalar(I).floor(),M=H;if(xe.bindFramebuffer(36160,ee)&&De.drawBuffers&&G&&xe.drawBuffers(w,ee),xe.viewport(R),xe.scissor(O),xe.setScissorTest(M),Le){const ze=Ie.get(w.texture);K.framebufferTexture2D(36160,36064,34069+k,ze.__webglTexture,q)}else if(Fe){const ze=Ie.get(w.texture),et=k||0;K.framebufferTextureLayer(36160,36064,ze.__webglTexture,q||0,et)}E=-1},this.readRenderTargetPixels=function(w,k,q,G,ee,Le,Fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){xe.bindFramebuffer(36160,Be);try{const ze=w.texture,et=ze.format,qe=ze.type;if(et!==cn&&y.convert(et)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=qe===Fs&&(Ce.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(qe!==er&&y.convert(qe)!==K.getParameter(35738)&&!(qe===Wi&&(De.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-G&&q>=0&&q<=w.height-ee&&K.readPixels(k,q,G,ee,y.convert(et),y.convert(qe),Le)}finally{const ze=A!==null?Ie.get(A).__webglFramebuffer:null;xe.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(w,k,q=0){const G=Math.pow(2,-q),ee=Math.floor(k.image.width*G),Le=Math.floor(k.image.height*G);S.setTexture2D(k,0),K.copyTexSubImage2D(3553,q,0,0,w.x,w.y,ee,Le),xe.unbindTexture()},this.copyTextureToTexture=function(w,k,q,G=0){const ee=k.image.width,Le=k.image.height,Fe=y.convert(q.format),Be=y.convert(q.type);S.setTexture2D(q,0),K.pixelStorei(37440,q.flipY),K.pixelStorei(37441,q.premultiplyAlpha),K.pixelStorei(3317,q.unpackAlignment),k.isDataTexture?K.texSubImage2D(3553,G,w.x,w.y,ee,Le,Fe,Be,k.image.data):k.isCompressedTexture?K.compressedTexSubImage2D(3553,G,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Fe,k.mipmaps[0].data):K.texSubImage2D(3553,G,w.x,w.y,Fe,Be,k.image),G===0&&q.generateMipmaps&&K.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(w,k,q,G,ee=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=w.max.x-w.min.x+1,Fe=w.max.y-w.min.y+1,Be=w.max.z-w.min.z+1,ze=y.convert(G.format),et=y.convert(G.type);let qe;if(G.isData3DTexture)S.setTexture3D(G,0),qe=32879;else if(G.isDataArrayTexture)S.setTexture2DArray(G,0),qe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,G.flipY),K.pixelStorei(37441,G.premultiplyAlpha),K.pixelStorei(3317,G.unpackAlignment);const Xe=K.getParameter(3314),lt=K.getParameter(32878),Ci=K.getParameter(3316),sr=K.getParameter(3315),ar=K.getParameter(32877),xn=q.isCompressedTexture?q.mipmaps[0]:q.image;K.pixelStorei(3314,xn.width),K.pixelStorei(32878,xn.height),K.pixelStorei(3316,w.min.x),K.pixelStorei(3315,w.min.y),K.pixelStorei(32877,w.min.z),q.isDataTexture||q.isData3DTexture?K.texSubImage3D(qe,ee,k.x,k.y,k.z,Le,Fe,Be,ze,et,xn.data):q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(qe,ee,k.x,k.y,k.z,Le,Fe,Be,ze,xn.data)):K.texSubImage3D(qe,ee,k.x,k.y,k.z,Le,Fe,Be,ze,et,xn),K.pixelStorei(3314,Xe),K.pixelStorei(32878,lt),K.pixelStorei(3316,Ci),K.pixelStorei(3315,sr),K.pixelStorei(32877,ar),ee===0&&G.generateMipmaps&&K.generateMipmap(qe),xe.unbindTexture()},this.initTexture=function(w){S.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){_=0,T=0,A=null,xe.reset(),j.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class vT extends Fp{}vT.prototype.isWebGL1Renderer=!0;class yT extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class MT extends vt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Ns extends vt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jf=new F,Qf=new F,eh=new xt,Ml=new vp,ba=new Ao;class bT extends Wt{constructor(e=new ai,n=new Ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Jf.fromBufferAttribute(n,r-1),Qf.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Jf.distanceTo(Qf);e.setAttribute("lineDistance",new In(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(r),ba.radius+=s,e.ray.intersectsSphere(ba)===!1)return;eh.copy(r).invert(),Ml.copy(e.ray).applyMatrix4(eh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,u=new F,f=new F,h=new F,m=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){const _=Math.max(0,a.start),T=Math.min(g.count,a.start+a.count);for(let A=_,E=T-1;A<E;A+=m){const b=g.getX(A),R=g.getX(A+1);if(c.fromBufferAttribute(d,b),u.fromBufferAttribute(d,R),Ml.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(h);M<e.near||M>e.far||n.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),T=Math.min(d.count,a.start+a.count);for(let A=_,E=T-1;A<E;A+=m){if(c.fromBufferAttribute(d,A),u.fromBufferAttribute(d,A+1),Ml.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||n.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const th=new F,nh=new F;class ST extends bT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)th.fromBufferAttribute(n,r),nh.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+th.distanceTo(nh);e.setAttribute("lineDistance",new In(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wT extends vt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new F;new F;new F;new F;new Dn;class TT extends vt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ET extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Np extends vt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class AT extends Np{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class CT extends vt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DT extends vt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ke(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class LT extends vt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class RT extends vt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class PT extends vt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ke(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class IT extends Ns{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const FT={ShadowMaterial:TT,SpriteMaterial:MT,RawShaderMaterial:ET,ShaderMaterial:ni,PointsMaterial:wT,MeshPhysicalMaterial:AT,MeshStandardMaterial:Np,MeshPhongMaterial:CT,MeshToonMaterial:DT,MeshNormalMaterial:LT,MeshLambertMaterial:RT,MeshDepthMaterial:Pp,MeshDistanceMaterial:Ip,MeshBasicMaterial:$c,MeshMatcapMaterial:PT,LineDashedMaterial:IT,LineBasicMaterial:Ns,Material:vt};vt.fromType=function(t){return new FT[t]};const ih={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class NT{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const OT=new NT;class Op{constructor(e){this.manager=e!==void 0?e:OT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Wn={};class kT extends Op{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ih.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Wn[e]!==void 0){Wn[e].push({onLoad:n,onProgress:i,onError:r});return}Wn[e]=[],Wn[e].push({onLoad:n,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wn[e],f=c.body.getReader(),h=c.headers.get("Content-Length"),m=h?parseInt(h):0,g=m!==0;let p=0;const d=new ReadableStream({start(_){T();function T(){f.read().then(({done:A,value:E})=>{if(A)_.close();else{p+=E.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let R=0,O=u.length;R<O;R++){const M=u[R];M.onProgress&&M.onProgress(b)}_.enqueue(E),T()}})}}});return new Response(d)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ih.add(e,c);const u=Wn[e];delete Wn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Wn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wn[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const kp="\\[\\]\\.:\\/",Jc="[^"+kp+"]",UT="[^"+kp.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Jc);/(WCOD+)?/.source.replace("WCOD",UT);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jc);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jc);class rh{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Dt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bn=new Uint32Array(512),Sn=new Uint32Array(512);for(let t=0;t<256;++t){const e=t-127;e<-27?(bn[t]=0,bn[t|256]=32768,Sn[t]=24,Sn[t|256]=24):e<-14?(bn[t]=1024>>-e-14,bn[t|256]=1024>>-e-14|32768,Sn[t]=-e-1,Sn[t|256]=-e-1):e<=15?(bn[t]=e+15<<10,bn[t|256]=e+15<<10|32768,Sn[t]=13,Sn[t|256]=13):e<128?(bn[t]=31744,bn[t|256]=64512,Sn[t]=24,Sn[t|256]=24):(bn[t]=31744,bn[t|256]=64512,Sn[t]=13,Sn[t|256]=13)}const Up=new Uint32Array(2048),js=new Uint32Array(64),zT=new Uint32Array(64);for(let t=1;t<1024;++t){let e=t<<13,n=0;for(;(e&8388608)===0;)e<<=1,n-=8388608;e&=-8388609,n+=947912704,Up[t]=e|n}for(let t=1024;t<2048;++t)Up[t]=939524096+(t-1024<<13);for(let t=1;t<31;++t)js[t]=t<<23;js[31]=1199570944;js[32]=2147483648;for(let t=33;t<63;++t)js[t]=2147483648+(t-32<<23);js[63]=3347054592;for(let t=1;t<64;++t)t!==32&&(zT[t]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);const sh={type:"change"},bl={type:"start"},ah={type:"end"};class BT extends rr{constructor(e,n){super(),n===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),n===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cr.ROTATE,MIDDLE:cr.DOLLY,RIGHT:cr.PAN},this.touches={ONE:ur.ROTATE,TWO:ur.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",ce),this._domElementKeyEvents=y},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(sh),i.update(),s=r.NONE},this.update=function(){const y=new F,j=new nr().setFromUnitVectors(e.up,new F(0,1,0)),ue=j.clone().invert(),fe=new F,C=new nr,he=2*Math.PI;return function(){const we=i.object.position;y.copy(we).sub(i.target),y.applyQuaternion(j),o.setFromVector3(y),i.autoRotate&&s===r.NONE&&D(O()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ge=i.minAzimuthAngle,Te=i.maxAzimuthAngle;return isFinite(ge)&&isFinite(Te)&&(ge<-Math.PI?ge+=he:ge>Math.PI&&(ge-=he),Te<-Math.PI?Te+=he:Te>Math.PI&&(Te-=he),ge<=Te?o.theta=Math.max(ge,Math.min(Te,o.theta)):o.theta=o.theta>(ge+Te)/2?Math.max(ge,o.theta):Math.min(Te,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),y.setFromSpherical(o),y.applyQuaternion(ue),we.copy(i.target).add(y),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||fe.distanceToSquared(i.object.position)>a||8*(1-C.dot(i.object.quaternion))>a?(i.dispatchEvent(sh),fe.copy(i.object.position),C.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",P),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",Z),i.domElement.removeEventListener("wheel",ae),i.domElement.removeEventListener("pointermove",B),i.domElement.removeEventListener("pointerup",$),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ce)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new rh,l=new rh;let c=1;const u=new F;let f=!1;const h=new Oe,m=new Oe,g=new Oe,p=new Oe,d=new Oe,_=new Oe,T=new Oe,A=new Oe,E=new Oe,b=[],R={};function O(){return 2*Math.PI/60/60*i.autoRotateSpeed}function M(){return Math.pow(.95,i.zoomSpeed)}function D(y){l.theta-=y}function Y(y){l.phi-=y}const I=function(){const y=new F;return function(ue,fe){y.setFromMatrixColumn(fe,0),y.multiplyScalar(-ue),u.add(y)}}(),pe=function(){const y=new F;return function(ue,fe){i.screenSpacePanning===!0?y.setFromMatrixColumn(fe,1):(y.setFromMatrixColumn(fe,0),y.crossVectors(i.object.up,y)),y.multiplyScalar(ue),u.add(y)}}(),ne=function(){const y=new F;return function(ue,fe){const C=i.domElement;if(i.object.isPerspectiveCamera){const he=i.object.position;y.copy(he).sub(i.target);let me=y.length();me*=Math.tan(i.object.fov/2*Math.PI/180),I(2*ue*me/C.clientHeight,i.object.matrix),pe(2*fe*me/C.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(ue*(i.object.right-i.object.left)/i.object.zoom/C.clientWidth,i.object.matrix),pe(fe*(i.object.top-i.object.bottom)/i.object.zoom/C.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function N(y){i.object.isPerspectiveCamera?c/=y:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*y)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(y){i.object.isPerspectiveCamera?c*=y:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/y)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(y){h.set(y.clientX,y.clientY)}function W(y){T.set(y.clientX,y.clientY)}function V(y){p.set(y.clientX,y.clientY)}function U(y){m.set(y.clientX,y.clientY),g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;D(2*Math.PI*g.x/j.clientHeight),Y(2*Math.PI*g.y/j.clientHeight),h.copy(m),i.update()}function Q(y){A.set(y.clientX,y.clientY),E.subVectors(A,T),E.y>0?N(M()):E.y<0&&J(M()),T.copy(A),i.update()}function de(y){d.set(y.clientX,y.clientY),_.subVectors(d,p).multiplyScalar(i.panSpeed),ne(_.x,_.y),p.copy(d),i.update()}function se(y){y.deltaY<0?J(M()):y.deltaY>0&&N(M()),i.update()}function oe(y){let j=!1;switch(y.code){case i.keys.UP:ne(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:ne(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:ne(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:ne(-i.keyPanSpeed,0),j=!0;break}j&&(y.preventDefault(),i.update())}function Se(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const y=.5*(b[0].pageX+b[1].pageX),j=.5*(b[0].pageY+b[1].pageY);h.set(y,j)}}function Ae(){if(b.length===1)p.set(b[0].pageX,b[0].pageY);else{const y=.5*(b[0].pageX+b[1].pageX),j=.5*(b[0].pageY+b[1].pageY);p.set(y,j)}}function K(){const y=b[0].pageX-b[1].pageX,j=b[0].pageY-b[1].pageY,ue=Math.sqrt(y*y+j*j);T.set(0,ue)}function Ge(){i.enableZoom&&K(),i.enablePan&&Ae()}function Ce(){i.enableZoom&&K(),i.enableRotate&&Se()}function De(y){if(b.length==1)m.set(y.pageX,y.pageY);else{const ue=ye(y),fe=.5*(y.pageX+ue.x),C=.5*(y.pageY+ue.y);m.set(fe,C)}g.subVectors(m,h).multiplyScalar(i.rotateSpeed);const j=i.domElement;D(2*Math.PI*g.x/j.clientHeight),Y(2*Math.PI*g.y/j.clientHeight),h.copy(m)}function xe(y){if(b.length===1)d.set(y.pageX,y.pageY);else{const j=ye(y),ue=.5*(y.pageX+j.x),fe=.5*(y.pageY+j.y);d.set(ue,fe)}_.subVectors(d,p).multiplyScalar(i.panSpeed),ne(_.x,_.y),p.copy(d)}function We(y){const j=ye(y),ue=y.pageX-j.x,fe=y.pageY-j.y,C=Math.sqrt(ue*ue+fe*fe);A.set(0,C),E.set(0,Math.pow(A.y/T.y,i.zoomSpeed)),N(E.y),T.copy(A)}function Ie(y){i.enableZoom&&We(y),i.enablePan&&xe(y)}function S(y){i.enableZoom&&We(y),i.enableRotate&&De(y)}function L(y){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(y.pointerId),i.domElement.addEventListener("pointermove",B),i.domElement.addEventListener("pointerup",$)),z(y),y.pointerType==="touch"?v(y):ie(y))}function B(y){i.enabled!==!1&&(y.pointerType==="touch"?x(y):re(y))}function $(y){X(y),b.length===0&&(i.domElement.releasePointerCapture(y.pointerId),i.domElement.removeEventListener("pointermove",B),i.domElement.removeEventListener("pointerup",$)),i.dispatchEvent(ah),s=r.NONE}function Z(y){X(y)}function ie(y){let j;switch(y.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case cr.DOLLY:if(i.enableZoom===!1)return;W(y),s=r.DOLLY;break;case cr.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enablePan===!1)return;V(y),s=r.PAN}else{if(i.enableRotate===!1)return;H(y),s=r.ROTATE}break;case cr.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(i.enableRotate===!1)return;H(y),s=r.ROTATE}else{if(i.enablePan===!1)return;V(y),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(bl)}function re(y){if(i.enabled!==!1)switch(s){case r.ROTATE:if(i.enableRotate===!1)return;U(y);break;case r.DOLLY:if(i.enableZoom===!1)return;Q(y);break;case r.PAN:if(i.enablePan===!1)return;de(y);break}}function ae(y){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(y.preventDefault(),i.dispatchEvent(bl),se(y),i.dispatchEvent(ah))}function ce(y){i.enabled===!1||i.enablePan===!1||oe(y)}function v(y){switch(te(y),b.length){case 1:switch(i.touches.ONE){case ur.ROTATE:if(i.enableRotate===!1)return;Se(),s=r.TOUCH_ROTATE;break;case ur.PAN:if(i.enablePan===!1)return;Ae(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ur.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ge(),s=r.TOUCH_DOLLY_PAN;break;case ur.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ce(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(bl)}function x(y){switch(te(y),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;De(y),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;xe(y),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(y),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;S(y),i.update();break;default:s=r.NONE}}function P(y){i.enabled!==!1&&y.preventDefault()}function z(y){b.push(y)}function X(y){delete R[y.pointerId];for(let j=0;j<b.length;j++)if(b[j].pointerId==y.pointerId){b.splice(j,1);return}}function te(y){let j=R[y.pointerId];j===void 0&&(j=new Oe,R[y.pointerId]=j),j.set(y.pageX,y.pageY)}function ye(y){const j=y.pointerId===b[0].pointerId?b[1]:b[0];return R[j.pointerId]}i.domElement.addEventListener("contextmenu",P),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",Z),i.domElement.addEventListener("wheel",ae,{passive:!1}),this.update()}}class HT extends Op{constructor(e){super(e),this.splitLayer=!1}load(e,n,i,r){const s=this,a=new kT(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{n(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){let n={x:0,y:0,z:0,e:0,f:0,extruding:!1,relative:!1};const i=[];let r;const s=new Ns({color:16711680});s.name="path";const a=new Ns({color:65280});a.name="extruded";function o(g){r={vertex:[],pathVertex:[],z:g.z},i.push(r)}function l(g,p){r===void 0&&o(g),n.extruding?(r.vertex.push(g.x,g.y,g.z),r.vertex.push(p.x,p.y,p.z)):(r.pathVertex.push(g.x,g.y,g.z),r.pathVertex.push(p.x,p.y,p.z))}function c(g,p){return n.relative?p:p-g}function u(g,p){return n.relative?g+p:p}const f=e.replace(/;.+/g,"").split(`
`);for(let g=0;g<f.length;g++){const p=f[g].split(" "),d=p[0].toUpperCase(),_={};if(p.splice(1).forEach(function(T){if(T[0]!==void 0){const A=T[0].toLowerCase(),E=parseFloat(T.substring(1));_[A]=E}}),d==="G0"||d==="G1"){const T={x:_.x!==void 0?u(n.x,_.x):n.x,y:_.y!==void 0?u(n.y,_.y):n.y,z:_.z!==void 0?u(n.z,_.z):n.z,e:_.e!==void 0?u(n.e,_.e):n.e,f:_.f!==void 0?u(n.f,_.f):n.f};c(n.e,T.e)>0&&(n.extruding=c(n.e,T.e)>0,(r==null||T.z!=r.z)&&o(T)),l(n,T),n=T}else if(!(d==="G2"||d==="G3")){if(d==="G90")n.relative=!1;else if(d==="G91")n.relative=!0;else if(d==="G92"){const T=n;T.x=_.x!==void 0?_.x:T.x,T.y=_.y!==void 0?_.y:T.y,T.z=_.z!==void 0?_.z:T.z,T.e=_.e!==void 0?_.e:T.e}}}function h(g,p,d){const _=new ai;_.setAttribute("position",new In(g,3));const T=new ST(_,p?a:s);T.name="layer"+d,m.add(T)}const m=new ys;if(m.name="gcode",this.splitLayer)for(let g=0;g<i.length;g++){const p=i[g];h(p.vertex,!0,g),h(p.pathVertex,!1,g)}else{const g=[],p=[];for(let d=0;d<i.length;d++){const _=i[d],T=_.vertex,A=_.pathVertex;for(let E=0;E<T.length;E++)g.push(T[E]);for(let E=0;E<A.length;E++)p.push(A[E])}h(g,!0,i.length),h(p,!1,i.length)}return m.quaternion.setFromEuler(new as(-Math.PI/2,0,0)),m}}function Na(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function GT(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function zp(t){let e,n,i;t.length!==2?(e=Na,n=(o,l)=>Na(t(o),l),i=(o,l)=>t(o)-l):(e=t===Na||t===GT?t:VT,n=t,i=t);function r(o,l,c=0,u=o.length){if(c<u){if(e(l,l)!==0)return u;do{const f=c+u>>>1;n(o[f],l)<0?c=f+1:u=f}while(c<u)}return c}function s(o,l,c=0,u=o.length){if(c<u){if(e(l,l)!==0)return u;do{const f=c+u>>>1;n(o[f],l)<=0?c=f+1:u=f}while(c<u)}return c}function a(o,l,c=0,u=o.length){const f=r(o,l,c,u-1);return f>c&&i(o[f-1],l)>-i(o[f],l)?f-1:f}return{left:r,center:a,right:s}}function VT(){return 0}function WT(t){return t===null?NaN:+t}const YT=zp(Na),jT=YT.right;zp(WT).center;var qT=jT,tc=Math.sqrt(50),nc=Math.sqrt(10),ic=Math.sqrt(2);function XT(t,e,n){var i,r=-1,s,a,o;if(e=+e,t=+t,n=+n,t===e&&n>0)return[t];if((i=e<t)&&(s=t,t=e,e=s),(o=Bp(t,e,n))===0||!isFinite(o))return[];if(o>0){let l=Math.round(t/o),c=Math.round(e/o);for(l*o<t&&++l,c*o>e&&--c,a=new Array(s=c-l+1);++r<s;)a[r]=(l+r)*o}else{o=-o;let l=Math.round(t*o),c=Math.round(e*o);for(l/o<t&&++l,c/o>e&&--c,a=new Array(s=c-l+1);++r<s;)a[r]=(l+r)/o}return i&&a.reverse(),a}function Bp(t,e,n){var i=(e-t)/Math.max(0,n),r=Math.floor(Math.log(i)/Math.LN10),s=i/Math.pow(10,r);return r>=0?(s>=tc?10:s>=nc?5:s>=ic?2:1)*Math.pow(10,r):-Math.pow(10,-r)/(s>=tc?10:s>=nc?5:s>=ic?2:1)}function $T(t,e,n){var i=Math.abs(e-t)/Math.max(0,n),r=Math.pow(10,Math.floor(Math.log(i)/Math.LN10)),s=i/r;return s>=tc?r*=10:s>=nc?r*=5:s>=ic&&(r*=2),e<t?-r:r}function Qc(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Hp(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function qs(){}var Os=.7,$a=1/Os,Vr="\\s*([+-]?\\d+)\\s*",ks="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Fn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",ZT=/^#([0-9a-f]{3,8})$/,KT=new RegExp(`^rgb\\(${Vr},${Vr},${Vr}\\)$`),JT=new RegExp(`^rgb\\(${Fn},${Fn},${Fn}\\)$`),QT=new RegExp(`^rgba\\(${Vr},${Vr},${Vr},${ks}\\)$`),eE=new RegExp(`^rgba\\(${Fn},${Fn},${Fn},${ks}\\)$`),tE=new RegExp(`^hsl\\(${ks},${Fn},${Fn}\\)$`),nE=new RegExp(`^hsla\\(${ks},${Fn},${Fn},${ks}\\)$`),oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Qc(qs,Us,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:lh,formatHex:lh,formatHex8:iE,formatHsl:rE,formatRgb:ch,toString:ch});function lh(){return this.rgb().formatHex()}function iE(){return this.rgb().formatHex8()}function rE(){return Gp(this).formatHsl()}function ch(){return this.rgb().formatRgb()}function Us(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=ZT.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?uh(e):n===3?new kt(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Sa(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Sa(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=KT.exec(t))?new kt(e[1],e[2],e[3],1):(e=JT.exec(t))?new kt(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=QT.exec(t))?Sa(e[1],e[2],e[3],e[4]):(e=eE.exec(t))?Sa(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=tE.exec(t))?dh(e[1],e[2]/100,e[3]/100,1):(e=nE.exec(t))?dh(e[1],e[2]/100,e[3]/100,e[4]):oh.hasOwnProperty(t)?uh(oh[t]):t==="transparent"?new kt(NaN,NaN,NaN,0):null}function uh(t){return new kt(t>>16&255,t>>8&255,t&255,1)}function Sa(t,e,n,i){return i<=0&&(t=e=n=NaN),new kt(t,e,n,i)}function sE(t){return t instanceof qs||(t=Us(t)),t?(t=t.rgb(),new kt(t.r,t.g,t.b,t.opacity)):new kt}function rc(t,e,n,i){return arguments.length===1?sE(t):new kt(t,e,n,i==null?1:i)}function kt(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}Qc(kt,rc,Hp(qs,{brighter(t){return t=t==null?$a:Math.pow($a,t),new kt(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Os:Math.pow(Os,t),new kt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new kt(Ji(this.r),Ji(this.g),Ji(this.b),Za(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:fh,formatHex:fh,formatHex8:aE,formatRgb:hh,toString:hh}));function fh(){return`#${ji(this.r)}${ji(this.g)}${ji(this.b)}`}function aE(){return`#${ji(this.r)}${ji(this.g)}${ji(this.b)}${ji((isNaN(this.opacity)?1:this.opacity)*255)}`}function hh(){const t=Za(this.opacity);return`${t===1?"rgb(":"rgba("}${Ji(this.r)}, ${Ji(this.g)}, ${Ji(this.b)}${t===1?")":`, ${t})`}`}function Za(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Ji(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function ji(t){return t=Ji(t),(t<16?"0":"")+t.toString(16)}function dh(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new an(t,e,n,i)}function Gp(t){if(t instanceof an)return new an(t.h,t.s,t.l,t.opacity);if(t instanceof qs||(t=Us(t)),!t)return new an;if(t instanceof an)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),s=Math.max(e,n,i),a=NaN,o=s-r,l=(s+r)/2;return o?(e===s?a=(n-i)/o+(n<i)*6:n===s?a=(i-e)/o+2:a=(e-n)/o+4,o/=l<.5?s+r:2-s-r,a*=60):o=l>0&&l<1?0:a,new an(a,o,l,t.opacity)}function oE(t,e,n,i){return arguments.length===1?Gp(t):new an(t,e,n,i==null?1:i)}function an(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}Qc(an,oE,Hp(qs,{brighter(t){return t=t==null?$a:Math.pow($a,t),new an(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Os:Math.pow(Os,t),new an(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new kt(Sl(t>=240?t-240:t+120,r,i),Sl(t,r,i),Sl(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new an(ph(this.h),wa(this.s),wa(this.l),Za(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Za(this.opacity);return`${t===1?"hsl(":"hsla("}${ph(this.h)}, ${wa(this.s)*100}%, ${wa(this.l)*100}%${t===1?")":`, ${t})`}`}}));function ph(t){return t=(t||0)%360,t<0?t+360:t}function wa(t){return Math.max(0,Math.min(1,t||0))}function Sl(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}var eu=t=>()=>t;function lE(t,e){return function(n){return t+n*e}}function cE(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function uE(t){return(t=+t)==1?Vp:function(e,n){return n-e?cE(e,n,t):eu(isNaN(e)?n:e)}}function Vp(t,e){var n=e-t;return n?lE(t,n):eu(isNaN(t)?e:t)}var mh=function t(e){var n=uE(e);function i(r,s){var a=n((r=rc(r)).r,(s=rc(s)).r),o=n(r.g,s.g),l=n(r.b,s.b),c=Vp(r.opacity,s.opacity);return function(u){return r.r=a(u),r.g=o(u),r.b=l(u),r.opacity=c(u),r+""}}return i.gamma=t,i}(1);function fE(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(s){for(r=0;r<n;++r)i[r]=t[r]*(1-s)+e[r]*s;return i}}function hE(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function dE(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),s=new Array(n),a;for(a=0;a<i;++a)r[a]=tu(t[a],e[a]);for(;a<n;++a)s[a]=e[a];return function(o){for(a=0;a<i;++a)s[a]=r[a](o);return s}}function pE(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function Ka(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function mE(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=tu(t[r],e[r]):i[r]=e[r];return function(s){for(r in n)i[r]=n[r](s);return i}}var sc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,wl=new RegExp(sc.source,"g");function gE(t){return function(){return t}}function _E(t){return function(e){return t(e)+""}}function xE(t,e){var n=sc.lastIndex=wl.lastIndex=0,i,r,s,a=-1,o=[],l=[];for(t=t+"",e=e+"";(i=sc.exec(t))&&(r=wl.exec(e));)(s=r.index)>n&&(s=e.slice(n,s),o[a]?o[a]+=s:o[++a]=s),(i=i[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:Ka(i,r)})),n=wl.lastIndex;return n<e.length&&(s=e.slice(n),o[a]?o[a]+=s:o[++a]=s),o.length<2?l[0]?_E(l[0].x):gE(e):(e=l.length,function(c){for(var u=0,f;u<e;++u)o[(f=l[u]).i]=f.x(c);return o.join("")})}function tu(t,e){var n=typeof e,i;return e==null||n==="boolean"?eu(e):(n==="number"?Ka:n==="string"?(i=Us(e))?(e=i,mh):xE:e instanceof Us?mh:e instanceof Date?pE:hE(e)?fE:Array.isArray(e)?dE:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?mE:Ka)(t,e)}function vE(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}function yE(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Ja(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,i=t.slice(0,n);return[i.length>1?i[0]+i.slice(2):i,+t.slice(n+1)]}function Qr(t){return t=Ja(Math.abs(t)),t?t[1]:NaN}function ME(t,e){return function(n,i){for(var r=n.length,s=[],a=0,o=t[0],l=0;r>0&&o>0&&(l+o+1>i&&(o=Math.max(1,i-l)),s.push(n.substring(r-=o,r+o)),!((l+=o+1)>i));)o=t[a=(a+1)%t.length];return s.reverse().join(e)}}function bE(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var SE=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Qa(t){if(!(e=SE.exec(t)))throw new Error("invalid format: "+t);var e;return new nu({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Qa.prototype=nu.prototype;function nu(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}nu.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function wE(t){e:for(var e=t.length,n=1,i=-1,r;n<e;++n)switch(t[n]){case".":i=r=n;break;case"0":i===0&&(i=n),r=n;break;default:if(!+t[n])break e;i>0&&(i=0);break}return i>0?t.slice(0,i)+t.slice(r+1):t}var Wp;function TE(t,e){var n=Ja(t,e);if(!n)return t+"";var i=n[0],r=n[1],s=r-(Wp=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=i.length;return s===a?i:s>a?i+new Array(s-a+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+Ja(t,Math.max(0,e+s-1))[0]}function gh(t,e){var n=Ja(t,e);if(!n)return t+"";var i=n[0],r=n[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}var _h={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:yE,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>gh(t*100,e),r:gh,s:TE,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function xh(t){return t}var vh=Array.prototype.map,yh=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function EE(t){var e=t.grouping===void 0||t.thousands===void 0?xh:ME(vh.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",i=t.currency===void 0?"":t.currency[1]+"",r=t.decimal===void 0?".":t.decimal+"",s=t.numerals===void 0?xh:bE(vh.call(t.numerals,String)),a=t.percent===void 0?"%":t.percent+"",o=t.minus===void 0?"\u2212":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(f){f=Qa(f);var h=f.fill,m=f.align,g=f.sign,p=f.symbol,d=f.zero,_=f.width,T=f.comma,A=f.precision,E=f.trim,b=f.type;b==="n"?(T=!0,b="g"):_h[b]||(A===void 0&&(A=12),E=!0,b="g"),(d||h==="0"&&m==="=")&&(d=!0,h="0",m="=");var R=p==="$"?n:p==="#"&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",O=p==="$"?i:/[%p]/.test(b)?a:"",M=_h[b],D=/[defgprs%]/.test(b);A=A===void 0?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,A)):Math.max(0,Math.min(20,A));function Y(I){var pe=R,ne=O,N,J,H;if(b==="c")ne=M(I)+ne,I="";else{I=+I;var W=I<0||1/I<0;if(I=isNaN(I)?l:M(Math.abs(I),A),E&&(I=wE(I)),W&&+I==0&&g!=="+"&&(W=!1),pe=(W?g==="("?g:o:g==="-"||g==="("?"":g)+pe,ne=(b==="s"?yh[8+Wp/3]:"")+ne+(W&&g==="("?")":""),D){for(N=-1,J=I.length;++N<J;)if(H=I.charCodeAt(N),48>H||H>57){ne=(H===46?r+I.slice(N+1):I.slice(N))+ne,I=I.slice(0,N);break}}}T&&!d&&(I=e(I,1/0));var V=pe.length+I.length+ne.length,U=V<_?new Array(_-V+1).join(h):"";switch(T&&d&&(I=e(U+I,U.length?_-ne.length:1/0),U=""),m){case"<":I=pe+I+ne+U;break;case"=":I=pe+U+I+ne;break;case"^":I=U.slice(0,V=U.length>>1)+pe+I+ne+U.slice(V);break;default:I=U+pe+I+ne;break}return s(I)}return Y.toString=function(){return f+""},Y}function u(f,h){var m=c((f=Qa(f),f.type="f",f)),g=Math.max(-8,Math.min(8,Math.floor(Qr(h)/3)))*3,p=Math.pow(10,-g),d=yh[8+g/3];return function(_){return m(p*_)+d}}return{format:c,formatPrefix:u}}var Ta,Yp,jp;AE({thousands:",",grouping:[3],currency:["$",""]});function AE(t){return Ta=EE(t),Yp=Ta.format,jp=Ta.formatPrefix,Ta}function CE(t){return Math.max(0,-Qr(Math.abs(t)))}function DE(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Qr(e)/3)))*3-Qr(Math.abs(t)))}function LE(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,Qr(e)-Qr(t))+1}function RE(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function PE(t){return function(){return t}}function IE(t){return+t}var Mh=[0,1];function Ir(t){return t}function ac(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:PE(isNaN(e)?NaN:.5)}function FE(t,e){var n;return t>e&&(n=t,t=e,e=n),function(i){return Math.max(t,Math.min(e,i))}}function NE(t,e,n){var i=t[0],r=t[1],s=e[0],a=e[1];return r<i?(i=ac(r,i),s=n(a,s)):(i=ac(i,r),s=n(s,a)),function(o){return s(i(o))}}function OE(t,e,n){var i=Math.min(t.length,e.length)-1,r=new Array(i),s=new Array(i),a=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++a<i;)r[a]=ac(t[a],t[a+1]),s[a]=n(e[a],e[a+1]);return function(o){var l=qT(t,o,1,i)-1;return s[l](r[l](o))}}function kE(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function UE(){var t=Mh,e=Mh,n=tu,i,r,s,a=Ir,o,l,c;function u(){var h=Math.min(t.length,e.length);return a!==Ir&&(a=FE(t[0],t[h-1])),o=h>2?OE:NE,l=c=null,f}function f(h){return h==null||isNaN(h=+h)?s:(l||(l=o(t.map(i),e,n)))(i(a(h)))}return f.invert=function(h){return a(r((c||(c=o(e,t.map(i),Ka)))(h)))},f.domain=function(h){return arguments.length?(t=Array.from(h,IE),u()):t.slice()},f.range=function(h){return arguments.length?(e=Array.from(h),u()):e.slice()},f.rangeRound=function(h){return e=Array.from(h),n=vE,u()},f.clamp=function(h){return arguments.length?(a=h?!0:Ir,u()):a!==Ir},f.interpolate=function(h){return arguments.length?(n=h,u()):n},f.unknown=function(h){return arguments.length?(s=h,f):s},function(h,m){return i=h,r=m,u()}}function zE(){return UE()(Ir,Ir)}function BE(t,e,n,i){var r=$T(t,e,n),s;switch(i=Qa(i==null?",f":i),i.type){case"s":{var a=Math.max(Math.abs(t),Math.abs(e));return i.precision==null&&!isNaN(s=DE(r,a))&&(i.precision=s),jp(i,a)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=LE(r,Math.max(Math.abs(t),Math.abs(e))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=CE(r))&&(i.precision=s-(i.type==="%")*2);break}}return Yp(i)}function HE(t){var e=t.domain;return t.ticks=function(n){var i=e();return XT(i[0],i[i.length-1],n==null?10:n)},t.tickFormat=function(n,i){var r=e();return BE(r[0],r[r.length-1],n==null?10:n,i)},t.nice=function(n){n==null&&(n=10);var i=e(),r=0,s=i.length-1,a=i[r],o=i[s],l,c,u=10;for(o<a&&(c=a,a=o,o=c,c=r,r=s,s=c);u-- >0;){if(c=Bp(a,o,n),c===l)return i[r]=a,i[s]=o,e(i);if(c>0)a=Math.floor(a/c)*c,o=Math.ceil(o/c)*c;else if(c<0)a=Math.ceil(a*c)/c,o=Math.floor(o*c)/c;else break;l=c}return t},t}function oc(){var t=zE();return t.copy=function(){return kE(t,oc())},RE.apply(t,arguments),HE(t)}function Fr(t,e,n){this.k=t,this.x=e,this.y=n}Fr.prototype={constructor:Fr,scale:function(t){return t===1?this:new Fr(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Fr(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new Fr(1,0,0);Fr.prototype;function GE(t,e,n){i("./1to1-section.png",(s,a)=>{console.log(s),console.log(a);const o=new Uint8Array(a.shape[0]*a.shape[1]);for(let l=0;l<a.data.length;l+=4)o[Math.floor(l/4)]=a.data[l];t(r(o,a.shape[0],a.shape[1]))});function i(s,a){const o=new Image;o.src=s,o.onload=()=>{const l={shape:[o.width,o.height],data:new Uint8ClampedArray(0)},c=document.createElement("canvas");c.width=o.width,c.height=o.height,n.px.x=o.width,n.px.y=o.height,n.dimensions.x=c.width*e.px_to_mm,n.dimensions.y=c.height*e.px_to_mm;const u=c.getContext("2d");if(u){u.drawImage(o,0,0);const f=u.getImageData(0,0,c.width,c.height);f&&(l.data=f.data,a(null,l))}}}function r(s,a,o){const l=[];l.push(`F${e.plunge_rate}`);let c=0;const u=new F(0,0,0),f=new F(0,0,0);function h(M,D,Y,I){f.set(M,D,Y),c+=u.distanceTo(f),u.set(M,D,Y),l.push([I?"G1":"G0",`X${M.toFixed(4)}`,`Y${D.toFixed(4)}`,`Z${Y.toFixed(4)}`].join(" "))}const m=e.skipX,g=e.skipY,p=e.depth_mm,d=e.px_to_mm,_=oc().domain([0,255]).range([-p,0]),T=oc().domain([0,a]).range([0,a*d]);let A=0,E=-1,b=g,R=0,O=0;for(;A<a;){if(b>0)for(;E<o-g;)E+=b,O=A*o+E,R=_(s[O]),h(T(A),T(E),R,!0);else for(;E>g;)E+=b,O=A*o+E,R=_(s[O]),h(T(A),T(E),R,!0);b=b>0?-g:g,A+=m}return console.log("lines length",l.length),console.log(n),n.lines.length=0,l.forEach((M,D)=>{D===2&&n.lines.push(`F${e.feed_rate}`),n.lines.push(M)}),n.bytes.value=n.lines.join(`
`).length,console.log("distanceTraveled",c),n.cutting.distance_mm=c,l.join(`
`)}}(function(t,e){typeof define=="function"&&define.amd?define([],e):typeof qp!="undefined"?e():(e(),t.FileSaver={})})(globalThis,function(){function t(o,l){return typeof l=="undefined"?l={autoBom:!1}:typeof l!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),l={autoBom:!l}),l.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function e(o,l,c){var u=new XMLHttpRequest;u.open("GET",o),u.responseType="blob",u.onload=function(){a(u.response,l,c)},u.onerror=function(){console.error("could not download file")},u.send()}function n(o){var l=new XMLHttpRequest;l.open("HEAD",o,!1);try{l.send()}catch{}return 200<=l.status&&299>=l.status}function i(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(l)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Lr=="object"&&Lr.global===Lr?Lr:void 0,s=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(o,l,c){var u=r.URL||r.webkitURL,f=document.createElement("a");l=l||o.name||"download",f.download=l,f.rel="noopener",typeof o=="string"?(f.href=o,f.origin===location.origin?i(f):n(f.href)?e(o,l,c):i(f,f.target="_blank")):(f.href=u.createObjectURL(o),setTimeout(function(){u.revokeObjectURL(f.href)},4e4),setTimeout(function(){i(f)},0))}:"msSaveOrOpenBlob"in navigator?function(o,l,c){if(l=l||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(t(o,c),l);else if(n(o))e(o,l,c);else{var u=document.createElement("a");u.href=o,u.target="_blank",setTimeout(function(){i(u)})}}:function(o,l,c,u){if(u=u||open("","_blank"),u&&(u.document.title=u.document.body.innerText="downloading..."),typeof o=="string")return e(o,l,c);var f=o.type==="application/octet-stream",h=/constructor/i.test(r.HTMLElement)||r.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent);if((m||f&&h||s)&&typeof FileReader!="undefined"){var g=new FileReader;g.onloadend=function(){var _=g.result;_=m?_:_.replace(/^data:[^;]*;/,"data:attachment/file;"),u?u.location.href=_:location=_,u=null},g.readAsDataURL(o)}else{var p=r.URL||r.webkitURL,d=p.createObjectURL(o);u?u.location=d:location.href=d,u=null,setTimeout(function(){p.revokeObjectURL(d)},4e4)}});r.saveAs=a.saveAs=a,typeof Wr!="undefined"&&(Wr.exports=a)});var VE=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n};const bh=new HT,qt={obj:new Wt,scene:new yT},WE=Qh({name:"fuck-this",data(){return{msg:"foo",isGenerating:!1,options:{px_to_mm:.15,skipX:8,skipY:1,depth_mm:10,plunge_rate:50,feed_rate:100},step:{skipX:1,skipY:1,depth_mm:.1,px_to_mm:.01,plunge_speed:1,feed_rate:1},info:{px:{x:0,y:0},dimensions:{x:0,y:0},cutting:{distance_mm:0},lines:[],bytes:{value:0}}}},mounted(){let t,e;const n=this;i(),s(),n.do_conversion();function i(){const a=document.createElement("div");document.body.appendChild(a),t=new Zt(60,window.innerWidth/window.innerHeight,1,1e4),t.position.set(0,0,200),t.lookAt(qt.scene.position),e=new Fp,e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),a.appendChild(e.domElement);const o=new BT(t,e.domElement);o.addEventListener("change",s),o.minDistance=10,o.maxDistance=1e3,window.addEventListener("resize",r)}function r(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),s()}function s(){e.render(qt.scene,t)}window.render=s},methods:{save_gcode:function(){const t=this;console.log("save gcode"),console.log(t.info.lines.join(`
`).length);var e=new Blob([t.info.lines.join(`
`)],{type:"text/plain;charset=utf-8"});(void 0)(e,`gcode_${Date().split(" ").slice(0,5).join("_")}.gcode`)},options_keys:function(){return console.log(Object.keys(this.options)),Object.keys(this.options)},cutting_time:function(){const t=(void 0)(this.info.cutting.distance_mm/this.options.feed_rate,"seconds");return`${t.hours()} hours, ${t.minutes()} minutes, ${t.seconds()} seconds`},do_conversion:function(){const t=this;t.isGenerating=!0,GE(e=>{qt.scene.remove(qt.obj),bh.parse(e),qt.obj=bh.parse(e),console.log(qt.obj),qt.obj.children[1].geometry.computeBoundingBox(),console.log(qt.obj.children[1].geometry.boundingBox),console.log(qt.scene),qt.obj.position.set(-1*(t.info.dimensions.x*.5),-50,0),qt.scene.add(qt.obj),window.render&&window.render(),t.isGenerating=!1},{...t.options},{...t.info})}}}),YE=t=>(eg("data-v-6e7d6354"),t=t(),tg(),t),jE={class:"ui"},qE=["option"],XE=["onUpdate:modelValue","step"],$E={class:"spacing-buttons"},ZE={key:1},KE={key:0},JE=YE(()=>Bt("h4",null,"Info",-1)),QE={key:1};function eA(t,e,n,i,r,s){return Yn(),Ri("div",jE,[(Yn(!0),Ri(Tn,null,Tg(t.options_keys(),(a,o)=>(Yn(),Ri("div",{option:a,key:`option${o}`,class:"ui-element"},[Bt("div",null,li(a),1),Bt("div",null,[Sg(Bt("input",{type:"number","onUpdate:modelValue":l=>t.options[a]=l,step:t.step[a]},null,8,XE),[[w0,t.options[a]]])])],8,qE))),128)),Bt("div",$E,[t.isGenerating?(Yn(),Ri("div",ZE,"Generating...")):(Yn(),Ri("button",{key:0,onClick:e[0]||(e[0]=(...a)=>t.do_conversion&&t.do_conversion(...a))},"Generate"))]),t.isGenerating?bu("",!0):(Yn(),Ri("div",KE,[JE,Bt("p",null,li(t.info.px.x)+"px by "+li(t.info.px.y)+"px",1),Bt("p",null,li(t.info.dimensions.x)+"mm by "+li(t.info.dimensions.y)+"mm",1),Bt("p",null,li(t.info.cutting.distance_mm.toFixed(0))+"mm of travel.",1),Bt("p",null,li(t.cutting_time())+".",1)])),t.isGenerating?bu("",!0):(Yn(),Ri("div",QE,[Bt("button",{onClick:e[1]||(e[1]=(...a)=>t.save_gcode&&t.save_gcode(...a))},"Save GCode"),Bt("p",null,li((t.info.bytes.value/(1e3*1e3)).toFixed(2))+" MB",1)]))])}var tA=VE(WE,[["render",eA],["__scopeId","data-v-6e7d6354"]]);const nA=Qh({__name:"App",setup(t){return(e,n)=>(Yn(),dd(tA,{msg:"Hello Vue 3 + TypeScript + Vite"}))}});A0(nA).mount("#app")});export default iA();
