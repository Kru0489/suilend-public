const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["main.js","main.css","assets/index-Deh--tjc.js","assets/index-CM4fsi0A.js","assets/index-q5dGmk1q.js"])))=>i.map(i=>d[i]);
var N=Object.defineProperty;var x=s=>{throw TypeError(s)};var R=(s,t,e)=>t in s?N(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var p=(s,t,e)=>R(s,typeof t!="symbol"?t+"":t,e),D=(s,t,e)=>t.has(s)||x("Cannot "+e);var h=(s,t,e)=>(D(s,t,"read from private field"),e?e.call(s):t.get(s)),_=(s,t,e)=>t.has(s)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(s):t.set(s,e),o=(s,t,e,i)=>(D(s,t,"write to private field"),i?i.call(s,e):t.set(s,e),e);var L=(s,t,e,i)=>({set _(r){o(s,t,r,e)},get _(){return h(s,t,i)}});import{ah as I,d as V,ai as B,aj as f,ak as W,al as $,_ as m,am as b,an as j,ao as K}from"../main.js";var a,c;const v=class v extends I{constructor(e){super(e.provider);p(this,"signer");_(this,a);_(this,c);V(this,{signer:e}),o(this,a,null),o(this,c,0)}async getAddress(){return this.signer.getAddress()}connect(e){return new v(this.signer.connect(e))}async getNonce(e){if(e==="pending"){h(this,a)==null&&o(this,a,super.getNonce("pending"));const i=h(this,c);return await h(this,a)+i}return super.getNonce(e)}increment(){L(this,c)._++}reset(){o(this,c,0),o(this,a,null)}async sendTransaction(e){const i=this.getNonce("pending");return this.increment(),e=await this.signer.populateTransaction(e),e.nonce=await i,await this.signer.sendTransaction(e)}signTransaction(e){return this.signer.signTransaction(e)}signMessage(e){return this.signer.signMessage(e)}signTypedData(e,i,r){return this.signer.signTypedData(e,i,r)}};a=new WeakMap,c=new WeakMap;let P=v;async function M(s,t,e){const i=typeof t=="string"?new B(t,s):t,r=(e==null?void 0:e.chain)??(await f.chainFromRpc(s))[1],n=new P(i);if(n.provider===null)try{n.connect(s)}catch(g){console.error("Cannot connect to network for signer",g)}return new q(r,await i.getAddress(),n,e)}class q extends W{constructor(e,i,r,n){super(e,i,r);p(this,"opts");this.opts=n}chain(){return this._chain}address(){return this._address}async sign(e){var w,E,T,y,A,C;const i=this.chain(),r=[];let n=500000n,g=100000000000n,l=1500000000n,u=100000000n;if(((w=this.opts)==null?void 0:w.overrides)===void 0&&i!=="Celo"){const d=await this._signer.provider.getFeeData();g=d.gasPrice??g,l=d.maxFeePerGas??l,u=d.maxPriorityFeePerGas??u}((E=this.opts)==null?void 0:E.maxGasLimit)!==void 0&&(n=n>((T=this.opts)==null?void 0:T.maxGasLimit)?(y=this.opts)==null?void 0:y.maxGasLimit:n);const G=i==="Oasis"?{gasLimit:n,gasPrice:g,type:0}:{gasLimit:n,maxFeePerGas:l,maxPriorityFeePerGas:u};for(const d of e){const{transaction:O,description:S}=d;(A=this.opts)!=null&&A.debug&&console.log(`Signing: ${S} for ${this.address()}`);const F={...O,...G,from:this.address(),nonce:await this._signer.getNonce(),...(C=this.opts)==null?void 0:C.overrides};r.push(await this._signer.signTransaction(F))}return r}}const J={Address:$,Platform:f,getSigner:M,protocols:{WormholeCore:()=>m(()=>import("../main.js").then(s=>s.dK),__vite__mapDeps([0,1])),TokenBridge:()=>m(()=>import("./index-Deh--tjc.js"),__vite__mapDeps([2,0,1])),PorticoBridge:()=>m(()=>import("./index-CM4fsi0A.js"),__vite__mapDeps([3,0,1,2])),CircleBridge:()=>m(()=>import("./index-q5dGmk1q.js"),__vite__mapDeps([4,0,1,2]))},getChain:(s,t,e)=>new b(t,new f(s,j(s,K,{[t]:e})))};export{J as default};