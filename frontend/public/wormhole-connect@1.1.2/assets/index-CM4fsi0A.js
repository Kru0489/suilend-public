var _=Object.defineProperty;var j=(p,e,t)=>e in p?_(p,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[e]=t;var u=(p,e,t)=>j(p,typeof e!="symbol"?e+"":e,t);import{b$ as D,aF as T,ax as b,b9 as S,b3 as I,aC as s,c0 as z,bh as G,aj as F,al as B,c1 as f,c2 as h,c3 as H,c4 as g,c5 as M,o as y,c6 as Y,c7 as J,c8 as K,c9 as X,ca as Z,cb as tt,ao as et}from"../main.js";import{EvmTokenBridge as nt}from"./index-Deh--tjc.js";const v=new D(["function start((bytes32,address,address,address,address,address,uint256,uint256,uint256,uint256)) returns (address,uint16,uint64)","function receiveMessageAndSwap(bytes)"]),ot=new D(["function quoteExactInputSingle((address,address,uint256,uint24,uint160)) public view returns (uint256,uint160,uint32,uint256)"]),st="https://gfx.relayers.xlabs.xyz/api/v1/swap/quote";class rt{static async quoteRelayer(e,t,o){var i;if(T(t)||T(o))throw new Error("how did you get here tho?");const n=b.encode(t.toUniversalAddress().toUint8Array(),!1),r=b.encode(o.toUniversalAddress().toUint8Array(),!1),a={targetChain:S(e),sourceToken:n,targetToken:r};try{const c=await I.post(st,a);return BigInt(c.data.fee)}catch(c){throw I.isAxiosError(c)?new Error(`Error getting relayer fee: ${(i=c.response)==null?void 0:i.statusText}`):c}}}const A=100,x={ETH:[s.tokenId("Arbitrum","native"),s.tokenId("Base","native"),s.tokenId("Ethereum","native"),s.tokenId("Optimism","native")],WETH:[s.tokenId("Arbitrum","0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"),s.tokenId("Avalanche","0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB"),s.tokenId("Base","0x4200000000000000000000000000000000000006"),s.tokenId("Bsc","0x2170Ed0880ac9A755fd29B2688956BD959F933F8"),s.tokenId("Ethereum","0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"),s.tokenId("Optimism","0x4200000000000000000000000000000000000006"),s.tokenId("Polygon","0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619")],wstETH:[s.tokenId("Arbitrum","0x5979D7b546E38E414F7E9822514be443A4800529"),s.tokenId("Base","0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452"),s.tokenId("Ethereum","0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0"),s.tokenId("Optimism","0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb"),s.tokenId("Polygon","0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD")],USDT:[s.tokenId("Arbitrum","0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"),s.tokenId("Avalanche","0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7"),s.tokenId("Base","0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2"),s.tokenId("Bsc","0x55d398326f99059fF775485246999027B3197955"),s.tokenId("Ethereum","0xdAC17F958D2ee523a2206206994597C13D831ec7"),s.tokenId("Optimism","0x94b008aA00579c1307B0EF2c499aD98a8ce58e58"),s.tokenId("Polygon","0xc2132D05D31c914a87C6611C10748AEb04B58e8F"),s.tokenId("Celo","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e")]};class E{constructor(e,t,o,n){u(this,"network");u(this,"chain");u(this,"provider");u(this,"contracts");u(this,"chainId");u(this,"core");u(this,"tokenBridge");if(this.network=e,this.chain=t,this.provider=o,this.contracts=n,!n.portico)throw new Error("Unsupported chain, no contract addresses for: "+t);this.core=new z(e,t,o,n),this.tokenBridge=new nt(e,t,o,n),this.chainId=G.get(e,t)}static async fromRpc(e,t){const[o,n]=await F.chainFromRpc(e),r=t[n];if(r.network!==o)throw new Error(`Network mismatch: ${r.network} != ${o}`);return new E(o,n,e,r.contracts)}async*transfer(e,t,o,n,r,d,a){const{minAmountStart:i,minAmountFinish:c}=a.swapAmounts;if(i===0n)throw new Error("Invalid min swap amount");if(c===0n)throw new Error("Invalid min swap amount");const l=new B(e).toString(),[k,m]=f(this.network,this.chain,o),[U,P]=f(this.network,t.chain,r),w=h(m),q=h(await this.getTransferrableToken(w)),R=h(t),N=h(P),O=new Date().valueOf()%2**4,$=H.serializeFlagSet({flags:{shouldWrapNative:k,shouldUnwrapNative:U},recipientChain:S(t.chain),bridgeNonce:O,feeTierStart:A,feeTierFinish:A,padding:new Uint8Array(19)}),Q=v.encodeFunctionData("start",[[$,w.toLowerCase(),q,N.toLowerCase(),R,d,n.toString(),i.toString(),c.toString(),a.relayerFee.toString()]]),W=this.getTokenGroup(m.address.toString()),C=this.getPorticoAddress(W);k||(yield*this.approve(w,l,n,C));const L=await this.core.getMessageFee(),V={to:C,data:Q,value:L+(k?n:0n)};yield this.createUnsignedTransaction(g(V,l),"PorticoBridge.Transfer")}async*redeem(e,t){const o=M(t.payload.payload.flagSet.recipientChain),n=t.payload.payload.finalTokenAddress.toNative(o).toString(),r=this.getTokenGroup(n),d=this.getPorticoAddress(r),i=await new y(d,v.fragments,this.provider).getFunction("receiveMessageAndSwap").populateTransaction(Y(t)),c=new B(e).toString();yield this.createUnsignedTransaction(g(i,c),"PorticoBridge.Redeem")}async isTransferCompleted(e){return await this.tokenBridge.tokenBridge.isTransferCompleted(J(e.hash))}async quoteSwap(e,t,o,n){const[,r]=f(this.network,this.chain,e),[,d]=f(this.network,this.chain,t),a=h(r),i=h(d);if(K(a,i))return n;const c=this.getQuoterAddress(o);return(await new y(c,ot.fragments,this.provider).getFunction("quoteExactInputSingle").staticCall([a,i,n,A,0]))[0]}async quoteRelay(e,t){return await rt.quoteRelayer(this.chain,e,t)}async getTransferrableToken(e){const t=s.tokenId(this.chain,e),[,o]=f(this.network,this.chain,t);if(this.chain==="Ethereum")return o;const n=Object.values(x).find(a=>a.find(i=>i.chain===this.chain&&h(i)===h(o)));if(!n)throw new Error(`No token group found for ${e} on ${this.chain}`);const r=n.find(a=>a.chain==="Ethereum");if(!r)throw new Error(`No Ethereum origin token found for ${e} on ${this.chain}`);const d=await this.tokenBridge.getWrappedAsset(r);return s.tokenId(this.chain,d.toString())}supportedTokens(){const e=[];for(const[t,o]of Object.entries(x))for(const n of o)n.chain===this.chain&&e.push({group:t,token:n});return e}getTokenGroup(e){const o=this.supportedTokens().find(n=>h(n.token)===e);if(!o)throw new Error("Token not found");return o.group}async*approve(e,t,o,n){const r=F.getTokenImplementation(this.provider,e);if(await r.allowance(t,n)<o){const a=await r.approve.populateTransaction(n,o);yield this.createUnsignedTransaction(g(a,t),"PorticoBridge.Approve")}}createUnsignedTransaction(e,t){return new X(Z(e,this.chainId),this.network,this.chain,t,!1)}getPorticoAddress(e){const t=this.contracts.portico;return e==="USDT"&&t.porticoPancakeSwap||t.porticoUniswap}getQuoterAddress(e){const t=this.contracts.portico;return e==="USDT"&&t.pancakeSwapQuoterV2||t.uniswapQuoterV2}}tt(et,"PorticoBridge",E);export{E as EvmPorticoBridge};