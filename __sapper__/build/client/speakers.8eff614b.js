import{S as e,i as r,s as t,t as a,l as n,g as s,A as o,d as c,e as l,k as p,c as i,a as u,b as f,h as v,o as h,F as m,q as b,G as d,p as g,r as k,n as y,H as j}from"./index.558b5a8b.js";import{T as $,S,r as A,a as x}from"./talks.e1cd538f.js";import{S as E}from"./SocialMediaIcons.90416c90.js";import{B as w}from"./Banner.9291821a.js";function O(e){var r,t,l=e.speaker.company+"";return{c(){r=a("@ "),t=a(l)},l(e){r=n(e,"@ "),t=n(e,l)},m(e,a){s(e,r,a),s(e,t,a)},p(e,r){e.speaker&&l!==(l=r.speaker.company+"")&&o(t,l)},d(e){e&&(c(r),c(t))}}}function I(e){var r,t;return{c(){r=l("h3"),t=a("Master of Ceremony"),this.h()},l(e){r=i(e,"H3",{class:!0},!1);var a=u(r);t=n(a,"Master of Ceremony"),a.forEach(c),this.h()},h(){f(r,"class","row svelte-1rncpcs")},m(e,a){s(e,r,a),v(r,t)},p:y,i:y,o:y,d(e){e&&c(r)}}}function D(e){var r,t,o,m,d,y=e.talk.title+"",j=new S({props:{talk:e.talk}});return{c(){r=l("h3"),j.$$.fragment.c(),t=p(),o=l("p"),m=a(y),this.h()},l(e){r=i(e,"H3",{class:!0},!1);var a=u(r);j.$$.fragment.l(a),a.forEach(c),t=n(e,"\n            "),o=i(e,"P",{class:!0},!1);var s=u(o);m=n(s,y),s.forEach(c),this.h()},h(){f(r,"class","row svelte-1rncpcs"),f(o,"class","row svelte-1rncpcs")},m(e,a){s(e,r,a),h(j,r,null),s(e,t,a),s(e,o,a),v(o,m),d=!0},p(e,r){var t={};e.talk&&(t.talk=r.talk),j.$set(t)},i(e){d||(g(j.$$.fragment,e),d=!0)},o(e){b(j.$$.fragment,e),d=!1},d(e){e&&c(r),k(j),e&&(c(t),c(o))}}}function F(e){var r,t,y,j,$,S,A,x,w,F,P,V,M,T,B,C,_,q,U,H,W,G,J,L,N,R,z,K=e.speaker.name+"",Q=e.speaker.position+"",X=e.speaker.bio.en||e.speaker.bio.pl||"",Y=new E({props:{person:e.speaker}}),Z=e.speaker.company&&O(e),ee=[D,I],re=[];function te(e){return e.talk?0:1}return N=te(e),R=re[N]=ee[N](e),{c(){r=l("div"),t=l("div"),y=l("div"),j=l("a"),$=l("img"),F=p(),P=l("div"),Y.$$.fragment.c(),V=p(),M=l("div"),T=l("h2"),B=a(K),C=p(),_=l("p"),q=a(Q),U=p(),Z&&Z.c(),H=p(),W=l("p"),G=a(X),J=p(),L=l("div"),R.c(),this.h()},l(e){r=i(e,"DIV",{class:!0},!1);var a=u(r);t=i(a,"DIV",{class:!0},!1);var s=u(t);y=i(s,"DIV",{class:!0},!1);var o=u(y);j=i(o,"A",{href:!0,title:!0},!1);var l=u(j);$=i(l,"IMG",{src:!0,class:!0,alt:!0},!1),u($).forEach(c),l.forEach(c),F=n(o,"\n            "),P=i(o,"DIV",{class:!0},!1);var p=u(P);Y.$$.fragment.l(p),p.forEach(c),o.forEach(c),V=n(s,"\n\n        "),M=i(s,"DIV",{class:!0},!1);var f=u(M);T=i(f,"H2",{class:!0},!1);var v=u(T);B=n(v,K),v.forEach(c),C=n(f,"\n            "),_=i(f,"P",{class:!0},!1);var h=u(_);q=n(h,Q),U=n(h,"\n\n                "),Z&&Z.l(h),h.forEach(c),H=n(f,"\n            "),W=i(f,"P",{class:!0},!1);var m=u(W);G=n(m,X),m.forEach(c),f.forEach(c),s.forEach(c),J=n(a,"\n\n    "),L=i(a,"DIV",{class:!0},!1);var b=u(L);R.l(b),b.forEach(c),a.forEach(c),this.h()},h(){f($,"src",S=e.speaker.avatar_url),f($,"class","speaker-avatar svelte-1rncpcs"),f($,"alt",A="Avatar of "+e.speaker.name),f(j,"href",x=e.speaker.contact.twitter_url),f(j,"title",w=e.speaker.name),f(P,"class","social-media-icons svelte-1rncpcs"),f(y,"class","speaker-images col-md-4 col-sm-12 pl-0 svelte-1rncpcs"),f(T,"class","svelte-1rncpcs"),f(_,"class","speaker-position svelte-1rncpcs"),f(W,"class","speaker-bio svelte-1rncpcs"),f(M,"class","speaker-details col-md-8 col-sm-12 pr-0 svelte-1rncpcs"),f(t,"class","speaker row svelte-1rncpcs"),f(L,"class","talk-info svelte-1rncpcs"),f(r,"class","speaker-card svelte-1rncpcs")},m(e,a){s(e,r,a),v(r,t),v(t,y),v(y,j),v(j,$),v(y,F),v(y,P),h(Y,P,null),v(t,V),v(t,M),v(M,T),v(T,B),v(M,C),v(M,_),v(_,q),v(_,U),Z&&Z.m(_,null),v(M,H),v(M,W),v(W,G),v(r,J),v(r,L),re[N].m(L,null),z=!0},p(e,r){z&&!e.speaker||S===(S=r.speaker.avatar_url)||f($,"src",S),z&&!e.speaker||A===(A="Avatar of "+r.speaker.name)||f($,"alt",A),z&&!e.speaker||x===(x=r.speaker.contact.twitter_url)||f(j,"href",x),z&&!e.speaker||w===(w=r.speaker.name)||f(j,"title",w);var t={};e.speaker&&(t.person=r.speaker),Y.$set(t),z&&!e.speaker||K===(K=r.speaker.name+"")||o(B,K),z&&!e.speaker||Q===(Q=r.speaker.position+"")||o(q,Q),r.speaker.company?Z?Z.p(e,r):((Z=O(r)).c(),Z.m(_,null)):Z&&(Z.d(1),Z=null),z&&!e.speaker||X===(X=r.speaker.bio.en||r.speaker.bio.pl||"")||o(G,X);var a=N;(N=te(r))===a?re[N].p(e,r):(m(),b(re[a],1,1,()=>{re[a]=null}),d(),(R=re[N])||(R=re[N]=ee[N](r)).c(),g(R,1),R.m(L,null))},i(e){z||(g(Y.$$.fragment,e),g(R),z=!0)},o(e){b(Y.$$.fragment,e),b(R),z=!1},d(e){e&&c(r),k(Y),Z&&Z.d(),re[N].d()}}}function P(e,r,t){let{segment:a="",speaker:n={}}=r;const s=function(e){return $.find(r=>r.speaker===e)}(n);return e.$set=e=>{"segment"in e&&t("segment",a=e.segment),"speaker"in e&&t("speaker",n=e.speaker)},{segment:a,speaker:n,talk:s}}class V extends e{constructor(e){super(),r(this,e,P,F,t,["segment","speaker"])}}var M=[A,x];var T=Math.floor,B=Math.random;function C(e,r){var t,a,n=-1,s=e.length,o=s-1;for(r=void 0===r?s:r;++n<r;){var c=(a=o,(t=n)+T(B()*(a-t+1))),l=e[c];e[c]=e[n],e[n]=l}return e.length=r,e}function _(e){return C(function(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}(e))}function q(e,r){return function(e,r){for(var t=-1,a=null==e?0:e.length,n=Array(a);++t<a;)n[t]=r(e[t],t,e);return n}(r,function(r){return e[r]})}var U="object"==typeof global&&global&&global.Object===Object&&global,H="object"==typeof self&&self&&self.Object===Object&&self,W=U||H||Function("return this")(),G=W.Symbol,J=Object.prototype,L=J.hasOwnProperty,N=J.toString,R=G?G.toStringTag:void 0;var z=Object.prototype.toString;var K="[object Null]",Q="[object Undefined]",X=G?G.toStringTag:void 0;function Y(e){return null==e?void 0===e?Q:K:X&&X in Object(e)?function(e){var r=L.call(e,R),t=e[R];try{e[R]=void 0;var a=!0}catch(e){}var n=N.call(e);return a&&(r?e[R]=t:delete e[R]),n}(e):function(e){return z.call(e)}(e)}function Z(e){return null!=e&&"object"==typeof e}var ee="[object Arguments]";function re(e){return Z(e)&&Y(e)==ee}var te=Object.prototype,ae=te.hasOwnProperty,ne=te.propertyIsEnumerable,se=re(function(){return arguments}())?re:function(e){return Z(e)&&ae.call(e,"callee")&&!ne.call(e,"callee")},oe=Array.isArray;var ce="object"==typeof exports&&exports&&!exports.nodeType&&exports,le=ce&&"object"==typeof module&&module&&!module.nodeType&&module,pe=le&&le.exports===ce?W.Buffer:void 0,ie=(pe?pe.isBuffer:void 0)||function(){return!1},ue=9007199254740991,fe=/^(?:0|[1-9]\d*)$/;function ve(e,r){var t=typeof e;return!!(r=null==r?ue:r)&&("number"==t||"symbol"!=t&&fe.test(e))&&e>-1&&e%1==0&&e<r}var he=9007199254740991;function me(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=he}var be={};be["[object Float32Array]"]=be["[object Float64Array]"]=be["[object Int8Array]"]=be["[object Int16Array]"]=be["[object Int32Array]"]=be["[object Uint8Array]"]=be["[object Uint8ClampedArray]"]=be["[object Uint16Array]"]=be["[object Uint32Array]"]=!0,be["[object Arguments]"]=be["[object Array]"]=be["[object ArrayBuffer]"]=be["[object Boolean]"]=be["[object DataView]"]=be["[object Date]"]=be["[object Error]"]=be["[object Function]"]=be["[object Map]"]=be["[object Number]"]=be["[object Object]"]=be["[object RegExp]"]=be["[object Set]"]=be["[object String]"]=be["[object WeakMap]"]=!1;var de,ge="object"==typeof exports&&exports&&!exports.nodeType&&exports,ke=ge&&"object"==typeof module&&module&&!module.nodeType&&module,ye=ke&&ke.exports===ge&&U.process,je=function(){try{var e=ke&&ke.require&&ke.require("util").types;return e||ye&&ye.binding&&ye.binding("util")}catch(e){}}(),$e=je&&je.isTypedArray,Se=$e?(de=$e,function(e){return de(e)}):function(e){return Z(e)&&me(e.length)&&!!be[Y(e)]},Ae=Object.prototype.hasOwnProperty;function xe(e,r){var t=oe(e),a=!t&&se(e),n=!t&&!a&&ie(e),s=!t&&!a&&!n&&Se(e),o=t||a||n||s,c=o?function(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}(e.length,String):[],l=c.length;for(var p in e)!r&&!Ae.call(e,p)||o&&("length"==p||n&&("offset"==p||"parent"==p)||s&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||ve(p,l))||c.push(p);return c}var Ee=Object.prototype;var we=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Oe=Object.prototype.hasOwnProperty;function Ie(e){if(t=(r=e)&&r.constructor,r!==("function"==typeof t&&t.prototype||Ee))return we(e);var r,t,a=[];for(var n in Object(e))Oe.call(e,n)&&"constructor"!=n&&a.push(n);return a}var De="[object AsyncFunction]",Fe="[object Function]",Pe="[object GeneratorFunction]",Ve="[object Proxy]";function Me(e){return null!=e&&me(e.length)&&!function(e){if(!function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)}(e))return!1;var r=Y(e);return r==Fe||r==Pe||r==De||r==Ve}(e)}function Te(e){return null==e?[]:q(e,function(e){return Me(e)?xe(e):Ie(e)}(e))}function Be(e){return C(Te(e))}var Ce={name:"Barry Solone",position:"Master of Ceremony",company:"",country:"",bio:{en:""},avatar_url:"/speakers/barry-solone.jpg",contact:{twitter_url:"",github_url:""}};function _e(e,r,t){const a=Object.create(e);return a.speaker=r[t],a.i=t,a}function qe(e){var r,t;return{c(){r=l("p"),t=a("07 December 2021 in Warsaw, Poland"),this.h()},l(e){r=i(e,"P",{slot:!0},!1);var a=u(r);t=n(a,"07 December 2021 in Warsaw, Poland"),a.forEach(c),this.h()},h(){f(r,"slot","description")},m(e,a){s(e,r,a),v(r,t)},d(e){e&&c(r)}}}function Ue(e){var r,t;return{c(){r=l("h1"),t=a("ConFrontJS 2021 Speakers"),this.h()},l(e){r=i(e,"H1",{slot:!0},!1);var a=u(r);t=n(a,"ConFrontJS 2021 Speakers"),a.forEach(c),this.h()},h(){f(r,"slot","header")},m(e,a){s(e,r,a),v(r,t)},d(e){e&&c(r)}}}function He(e){var r;return{c(){r=p()},l(e){r=n(e,"\n        ")},m(e,t){s(e,r,t)},p:y,d(e){e&&c(r)}}}function We(e){var r,t,a,o=new V({props:{speaker:e.speaker}});return{c(){r=l("li"),o.$$.fragment.c(),t=p(),this.h()},l(e){r=i(e,"LI",{class:!0},!1);var a=u(r);o.$$.fragment.l(a),t=n(a,"\n                    "),a.forEach(c),this.h()},h(){f(r,"class","col-lg-6 col-md-12 svelte-1jwxvqx")},m(e,n){s(e,r,n),h(o,r,null),v(r,t),a=!0},p(e,r){var t={};e.SpeakersShuffle&&(t.speaker=r.speaker),o.$set(t)},i(e){a||(g(o.$$.fragment,e),a=!0)},o(e){b(o.$$.fragment,e),a=!1},d(e){e&&c(r),k(o)}}}function Ge(e){for(var r,t,a,o,y,$,S,A=new w({props:{image:"/promo/confrontjsAviTejas.png",$$slots:{default:[He],header:[Ue],description:[qe]},$$scope:{ctx:e}}}),x=e.SpeakersShuffle,E=[],O=0;O<x.length;O+=1)E[O]=We(_e(e,x,O));const I=e=>b(E[e],1,1,()=>{E[e]=null});return{c(){r=p(),t=l("div"),A.$$.fragment.c(),a=p(),o=l("div"),y=l("div"),$=l("ul");for(var e=0;e<E.length;e+=1)E[e].c();this.h()},l(e){r=n(e,"\n\n"),t=i(e,"DIV",{class:!0},!1);var s=u(t);A.$$.fragment.l(s),a=n(s,"\n\n    "),o=i(s,"DIV",{class:!0},!1);var l=u(o);y=i(l,"DIV",{class:!0},!1);var p=u(y);$=i(p,"UL",{class:!0},!1);for(var f=u($),v=0;v<E.length;v+=1)E[v].l(f);f.forEach(c),p.forEach(c),l.forEach(c),s.forEach(c),this.h()},h(){document.title="Speakers • ConFrontJS 2019 • Front-end Conference in Warsaw",f($,"class","row list-unstyled svelte-1jwxvqx"),f(y,"class","speakers-container svelte-1jwxvqx"),f(o,"class","content"),f(t,"class","speakers-page")},m(e,n){s(e,r,n),s(e,t,n),h(A,t,null),v(t,a),v(t,o),v(o,y),v(y,$);for(var c=0;c<E.length;c+=1)E[c].m($,null);S=!0},p(e,r){var t={};if(e.$$scope&&(t.$$scope={changed:e,ctx:r}),A.$set(t),e.SpeakersShuffle){x=r.SpeakersShuffle;for(var a=0;a<x.length;a+=1){const t=_e(r,x,a);E[a]?(E[a].p(e,t),g(E[a],1)):(E[a]=We(t),E[a].c(),g(E[a],1),E[a].m($,null))}for(m(),a=x.length;a<E.length;a+=1)I(a);d()}},i(e){if(!S){g(A.$$.fragment,e);for(var r=0;r<x.length;r+=1)g(E[r]);S=!0}},o(e){b(A.$$.fragment,e),E=E.filter(Boolean);for(let e=0;e<E.length;e+=1)b(E[e]);S=!1},d(e){e&&(c(r),c(t)),k(A),j(E,e)}}}function Je(e,r,t){const a=(oe(n=M)?_:Be)(n);var n;a.push(Ce);let{segment:s=""}=r;return e.$set=e=>{"segment"in e&&t("segment",s=e.segment)},{SpeakersShuffle:a,segment:s}}export default class extends e{constructor(e){super(),r(this,e,Je,Ge,t,["segment"])}}