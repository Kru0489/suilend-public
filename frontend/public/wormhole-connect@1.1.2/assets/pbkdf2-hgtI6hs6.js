import{bt as g,bu as P,bv as F,bw as A,bx as I,by as L,b2 as R}from"../main.js";function _(u,p,d,i){F(u);const f=A({dkLen:32,asyncTick:10},i),{c:y,dkLen:l,asyncTick:t}=f;if(I(y),I(l),I(t),y<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const n=L(p),o=L(d),s=new Uint8Array(l),b=R.create(u,n),e=b._cloneInto().update(o);return{c:y,dkLen:l,asyncTick:t,DK:s,PRF:b,PRFSalt:e}}function h(u,p,d,i,f){return u.destroy(),p.destroy(),i&&i.destroy(),f.fill(0),d}function T(u,p,d,i){const{c:f,dkLen:y,DK:l,PRF:t,PRFSalt:n}=_(u,p,d,i);let o;const s=new Uint8Array(4),b=g(s),e=new Uint8Array(t.outputLen);for(let r=1,k=0;k<y;r++,k+=t.outputLen){const a=l.subarray(k,k+t.outputLen);b.setInt32(0,r,!1),(o=n._cloneInto(o)).update(s).digestInto(e),a.set(e.subarray(0,a.length));for(let w=1;w<f;w++){t._cloneInto(o).update(e).digestInto(e);for(let c=0;c<a.length;c++)a[c]^=e[c]}}return h(t,n,l,o,e)}async function m(u,p,d,i){const{c:f,dkLen:y,asyncTick:l,DK:t,PRF:n,PRFSalt:o}=_(u,p,d,i);let s;const b=new Uint8Array(4),e=g(b),r=new Uint8Array(n.outputLen);for(let k=1,a=0;a<y;k++,a+=n.outputLen){const w=t.subarray(a,a+n.outputLen);e.setInt32(0,k,!1),(s=o._cloneInto(s)).update(b).digestInto(r),w.set(r.subarray(0,w.length)),await P(f-1,l,()=>{n._cloneInto(s).update(r).digestInto(r);for(let c=0;c<w.length;c++)w[c]^=r[c]})}return h(n,o,t,s,r)}const U=Object.freeze(Object.defineProperty({__proto__:null,pbkdf2:T,pbkdf2Async:m},Symbol.toStringTag,{value:"Module"}));export{U as a,T as p};