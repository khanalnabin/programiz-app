var ye=Object.defineProperty;var $e=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var J=(e,t,n)=>($e(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function S(){}function ge(e){return e()}function le(){return Object.create(null)}function T(e){e.forEach(ge)}function me(e){return typeof e=="function"}function ke(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let K;function oe(e,t){return K||(K=document.createElement("a")),K.href=t,e===K.href}function we(e){return Object.keys(e).length===0}function ie(e){return e??""}function d(e,t){e.appendChild(t)}function x(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function V(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function p(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function y(){return w(" ")}function ve(){return w("")}function W(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function xe(e){return Array.from(e.childNodes)}function C(e,t){t=""+t,e.data!==t&&(e.data=t)}let B;function z(e){B=e}function je(){if(!B)throw new Error("Function called outside component initialization");return B}function Ee(e){je().$$.on_mount.push(e)}const A=[],se=[];let L=[];const ce=[],Oe=Promise.resolve();let R=!1;function Ne(){R||(R=!0,Oe.then(be))}function U(e){L.push(e)}const Q=new Set;let N=0;function be(){if(N!==0)return;const e=B;do{try{for(;N<A.length;){const t=A[N];N++,z(t),Ae(t.$$)}}catch(t){throw A.length=0,N=0,t}for(z(null),A.length=0,N=0;se.length;)se.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];Q.has(n)||(Q.add(n),n())}L.length=0}while(A.length);for(;ce.length;)ce.pop()();R=!1,Q.clear(),z(e)}function Ae(e){if(e.fragment!==null){e.update(),T(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}function Ce(e){const t=[],n=[];L.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),L=t}const Le=new Set;function Se(e,t){e&&e.i&&(Le.delete(e),e.i(t))}function M(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Me(e,t,n){const{fragment:l,after_update:o}=e.$$;l&&l.m(t,n),U(()=>{const i=e.$$.on_mount.map(ge).filter(me);e.$$.on_destroy?e.$$.on_destroy.push(...i):T(i),e.$$.on_mount=[]}),o.forEach(U)}function Pe(e,t){const n=e.$$;n.fragment!==null&&(Ce(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function qe(e,t){e.$$.dirty[0]===-1&&(A.push(e),Ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ze(e,t,n,l,o,i,s,u=[-1]){const r=B;z(e);const c=e.$$={fragment:null,ctx:[],props:i,update:S,not_equal:o,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:le(),dirty:u,skip_bound:!1,root:t.target||r.$$.root};s&&s(c.root);let _=!1;if(c.ctx=n?n(e,t.props||{},(f,a,...b)=>{const j=b.length?b[0]:a;return c.ctx&&o(c.ctx[f],c.ctx[f]=j)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](j),_&&qe(e,f)),a}):[],c.update(),_=!0,T(c.before_update),c.fragment=l?l(c.ctx):!1,t.target){if(t.hydrate){const f=xe(t.target);c.fragment&&c.fragment.l(f),f.forEach($)}else c.fragment&&c.fragment.c();t.intro&&Se(e.$$.fragment),Me(e,t.target,t.anchor),be()}z(r)}class Be{constructor(){J(this,"$$");J(this,"$$set")}$destroy(){Pe(this,1),this.$destroy=S}$on(t,n){if(!me(n))return S;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!we(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function re(e,t,n){const l=e.slice();return l[8]=t[n],l}function ue(e,t,n){const l=e.slice();return l[11]=t[n],l}function fe(e,t,n){const l=e.slice();return l[14]=t[n],l}function De(e){let t;return{c(){t=p("div"),t.textContent="Loading..."},m(n,l){x(n,t,l)},p:S,d(n){n&&$(t)}}}function Fe(e){let t,n,l=e[1].length>0&&ae(e),o=M(e[0]),i=[];for(let s=0;s<o.length;s+=1)i[s]=pe(re(e,o,s));return{c(){l&&l.c(),t=y();for(let s=0;s<i.length;s+=1)i[s].c();n=ve()},m(s,u){l&&l.m(s,u),x(s,t,u);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(s,u);x(s,n,u)},p(s,u){if(s[1].length>0?l?l.p(s,u):(l=ae(s),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),u&15){o=M(s[0]);let r;for(r=0;r<o.length;r+=1){const c=re(s,o,r);i[r]?i[r].p(c,u):(i[r]=pe(c),i[r].c(),i[r].m(n.parentNode,n))}for(;r<i.length;r+=1)i[r].d(1);i.length=o.length}},d(s){l&&l.d(s),s&&$(t),V(i,s),s&&$(n)}}}function ae(e){let t,n,l,o,i,s,u,r=M(e[1]),c=[];for(let _=0;_<r.length;_+=1)c[_]=de(fe(e,r,_));return{c(){t=p("div"),n=p("div");for(let _=0;_<c.length;_+=1)c[_].c();l=y(),o=p("div"),i=p("button"),i.textContent="Clear",h(n,"class","tag-list flex svelte-g0lxuv"),h(i,"class","svelte-g0lxuv"),h(o,"class","clear svelte-g0lxuv"),h(t,"class","tag-info flex justify-between items-center bg-white my-10 px-10 py-2 shadow svelte-g0lxuv")},m(_,f){x(_,t,f),d(t,n);for(let a=0;a<c.length;a+=1)c[a]&&c[a].m(n,null);d(t,l),d(t,o),d(o,i),s||(u=W(i,"click",e[5]),s=!0)},p(_,f){if(f&18){r=M(_[1]);let a;for(a=0;a<r.length;a+=1){const b=fe(_,r,a);c[a]?c[a].p(b,f):(c[a]=de(b),c[a].c(),c[a].m(n,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=r.length}},d(_){_&&$(t),V(c,_),s=!1,u()}}}function de(e){let t,n,l=e[14]+"",o,i,s,u,r,c;function _(){return e[6](e[14])}return{c(){t=p("div"),n=p("span"),o=w(l),i=y(),s=p("button"),s.textContent=" ✖ ",u=y(),h(n,"class","inline-block tl-text svelte-g0lxuv"),h(s,"class","tl-button svelte-g0lxuv"),h(t,"class","mx-2 p-2 svelte-g0lxuv")},m(f,a){x(f,t,a),d(t,n),d(n,o),d(t,i),d(t,s),d(t,u),r||(c=W(s,"click",_),r=!0)},p(f,a){e=f,a&2&&l!==(l=e[14]+"")&&C(o,l)},d(f){f&&$(t),r=!1,c()}}}function _e(e){let t,n,l,o,i,s,u,r,c=e[8].company+"",_,f,a,b=e[8].position+"",j,X,E,P,D=Math.round((Date.now()-e[8].posted_on)/864e5)+"",G,Y,Z,F,I=e[8].timing+"",H,ee,q,te,O=M(e[8].keywords),v=[];for(let g=0;g<O.length;g+=1)v[g]=he(ue(e,O,g));return{c(){t=p("div"),n=p("div"),l=p("div"),o=p("img"),s=y(),u=p("div"),r=p("div"),_=w(c),f=y(),a=p("div"),j=w(b),X=y(),E=p("div"),P=p("span"),G=w(D),Y=w("d ago"),Z=y(),F=p("span"),H=w(I),ee=y(),q=p("div");for(let g=0;g<v.length;g+=1)v[g].c();te=y(),h(o,"class","image object-fill h-16 w-16 rounded-full"),oe(o.src,i=e[8].company_logo)||h(o,"src",i),h(o,"alt",""),h(l,"class","logo rounded celements svelte-g0lxuv"),h(r,"class","company-name svelte-g0lxuv"),h(a,"class","job-name text-xl font-bold"),h(P,"class","detail svelte-g0lxuv"),h(F,"class","detail svelte-g0lxuv"),h(E,"class","job-details"),h(u,"class","description celements svelte-g0lxuv"),h(n,"class","company flex flex-row justify-around items-center w-auto svelte-g0lxuv"),h(q,"class","tags svelte-g0lxuv"),h(t,"class","job my-10 px-10 py-2 flex flex-row justify-between bg-white items-center shadow-md rounded-sm")},m(g,k){x(g,t,k),d(t,n),d(n,l),d(l,o),d(n,s),d(n,u),d(u,r),d(r,_),d(u,f),d(u,a),d(a,j),d(u,X),d(u,E),d(E,P),d(P,G),d(P,Y),d(E,Z),d(E,F),d(F,H),d(t,ee),d(t,q);for(let m=0;m<v.length;m+=1)v[m]&&v[m].m(q,null);d(t,te)},p(g,k){if(k&1&&!oe(o.src,i=g[8].company_logo)&&h(o,"src",i),k&1&&c!==(c=g[8].company+"")&&C(_,c),k&1&&b!==(b=g[8].position+"")&&C(j,b),k&1&&D!==(D=Math.round((Date.now()-g[8].posted_on)/864e5)+"")&&C(G,D),k&1&&I!==(I=g[8].timing+"")&&C(H,I),k&7){O=M(g[8].keywords);let m;for(m=0;m<O.length;m+=1){const ne=ue(g,O,m);v[m]?v[m].p(ne,k):(v[m]=he(ne),v[m].c(),v[m].m(q,null))}for(;m<v.length;m+=1)v[m].d(1);v.length=O.length}},d(g){g&&$(t),V(v,g)}}}function he(e){let t,n=e[11]+"",l,o,i,s;function u(){return e[7](e[11])}return{c(){t=p("button"),l=w(n),h(t,"class",o=ie(e[1].includes(e[11])?"tag selected":"tag ")+" svelte-g0lxuv")},m(r,c){x(r,t,c),d(t,l),i||(s=W(t,"click",u),i=!0)},p(r,c){e=r,c&1&&n!==(n=e[11]+"")&&C(l,n),c&3&&o!==(o=ie(e[1].includes(e[11])?"tag selected":"tag ")+" svelte-g0lxuv")&&h(t,"class",o)},d(r){r&&$(t),i=!1,s()}}}function pe(e){let t=e[1].length==0||e[3](e[8].keywords),n,l=t&&_e(e);return{c(){l&&l.c(),n=ve()},m(o,i){l&&l.m(o,i),x(o,n,i)},p(o,i){i&3&&(t=o[1].length==0||o[3](o[8].keywords)),t?l?l.p(o,i):(l=_e(o),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},d(o){l&&l.d(o),o&&$(n)}}}function Ie(e){let t,n;function l(s,u){return s[0]?Fe:De}let o=l(e),i=o(e);return{c(){t=p("div"),n=p("div"),i.c(),h(n,"class","ctr"),h(t,"class","page p-10 svelte-g0lxuv")},m(s,u){x(s,t,u),d(t,n),i.m(n,null)},p(s,[u]){o===(o=l(s))&&i?i.p(s,u):(i.d(1),i=o(s),i&&(i.c(),i.m(n,null)))},i:S,o:S,d(s){s&&$(t),i.d()}}}function Ke(e,t,n){let l,o=[];function i(f){o.includes(f)||n(1,o=[...o,f])}function s(f){let a=0;for(let b of o)f.includes(b)&&a++;return o.length==a}function u(f){o.splice(o.indexOf(f),1),n(1,o)}function r(){n(1,o=[])}return Ee(async()=>{const f=await fetch("https://storage.googleapis.com/programiz-static/hiring/software/job-listing-page-challenge/data.json");n(0,l=await f.json())}),[l,o,i,s,u,r,f=>u(f),f=>i(f)]}class Te extends Be{constructor(t){super(),ze(this,t,Ke,Ie,ke,{})}}new Te({target:document.getElementById("app")});
