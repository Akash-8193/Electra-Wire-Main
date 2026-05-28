!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._posthogChunkIds=e._posthogChunkIds||{},e._posthogChunkIds[n]="019dc17e-06ee-7160-9468-f01ebae7b179")}catch(e){}}();(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,933074,(e,r,t)=>{"use strict";var i=e.r(236581).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;t.c=function(e){return i.H.useMemoCache(e)}},433138,(e,r,t)=>{"use strict";r.exports=e.r(933074)},341578,(e,r,t)=>{r.exports=e.r(719085)},973736,e=>{"use strict";var r=e.i(514562),t=e.i(433138),i=e.i(236581);let o=(0,i.createContext)(null);e.s(["SiteShellProvider",0,e=>{let i,n=(0,t.c)(3),{value:s,children:a}=e;return n[0]!==a||n[1]!==s?(i=(0,r.jsx)(o.Provider,{value:s,children:a}),n[0]=a,n[1]=s,n[2]=i):i=n[2],i},"useSiteShellContext",0,()=>(0,i.useContext)(o)])},982459,e=>{"use strict";e.i(433714);var r=e.i(514562),t=e.i(433138),i=e.i(236581),o=e.i(341578),n=e.i(973736),s=e.i(69150),a=e.i(479578);let l=async(e,r)=>{try{let r=await Promise.resolve().then(()=>{let e=Error("Cannot find module '@sentry/nextjs'");throw e.code="MODULE_NOT_FOUND",e}).catch(()=>void 0);r?.captureException(e)}catch{}},c=async(e,r)=>{let t=(0,a.prepareErrorLog)(e,r);if((0,a.logToConsole)("error",t.message,t.metadata,t.error),t.error){let e=(0,a.generateAdditionalProperties)("error",t.error,t.metadata);s.default.captureException(t.error,e),await l(t.error,e);return}s.default.capture(a.APPLICATION_LOG_EVENT,{level:"error",message:t.message,...t.metadata??{}})},d=`
	.error-container {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	}
	.error-content {
		display: flex;
		width: 100%;
		max-width: 400px;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.error-inner {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.error-info {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}
	.error-icon {
		display: flex;
		height: 4rem;
		width: 4rem;
		align-items: center;
		justify-content: center;
	}
	.error-icon svg {
		height: 4rem;
		width: 4rem;
		color: rgba(0, 0, 0, 0.8);
		stroke: currentColor;
		fill: none;
	}
	.error-title {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.8);
		margin: 0;
	}
	.error-description {
		text-align: center;
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.43;
		color: rgba(0, 0, 0, 0.55);
		margin: 0;
	}
	.error-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.5rem;
		background-color: #000;
		padding: 0.75rem 1.5rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: #fff;
		border: none;
		cursor: pointer;
		transition: background-color 0.2s;
	}
	.error-button:hover {
		background-color: rgba(0, 0, 0, 0.9);
	}
	.error-button svg {
		height: 1.25rem;
		width: 1.25rem;
		stroke: currentColor;
		fill: none;
	}
`;e.s(["SiteErrorPage",0,e=>{let s,a,l,m,u,h,g,x,f=(0,t.c)(18),{error:p,reset:v}=e,b=(0,o.usePathname)(),y=(0,n.useSiteShellContext)(),j=(0,i.useRef)(!1);f[0]!==p||f[1]!==b||f[2]!==y?.businessId||f[3]!==y?.siteid||f[4]!==y?.visibilityStatus?(s=()=>{j.current||(j.current=!0,c(p,{message:"Customer website render error",pathname:b,siteId:y?.siteid,businessId:y?.businessId,visibilityStatus:y?.visibilityStatus,errorDigest:p.digest}))},f[0]=p,f[1]=b,f[2]=y?.businessId,f[3]=y?.siteid,f[4]=y?.visibilityStatus,f[5]=s):s=f[5],f[6]!==p||f[7]!==b||f[8]!==y?(a=[p,b,y],f[6]=p,f[7]=b,f[8]=y,f[9]=a):a=f[9],(0,i.useEffect)(s,a),f[10]!==v?(l=()=>{v?v():window.location.reload()},f[10]=v,f[11]=l):l=f[11];let S=l;return f[12]===Symbol.for("react.memo_cache_sentinel")?(m=(0,r.jsx)("style",{children:d}),f[12]=m):m=f[12],f[13]===Symbol.for("react.memo_cache_sentinel")?(u=(0,r.jsxs)("div",{className:"error-info",children:[(0,r.jsx)("div",{className:"error-icon",children:(0,r.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})})}),(0,r.jsx)("h1",{className:"error-title",children:"Something went wrong"}),(0,r.jsx)("p",{className:"error-description",children:"We're sorry, but something unexpected happened. Please try reloading the page."})]}),f[13]=u):u=f[13],f[14]===Symbol.for("react.memo_cache_sentinel")?(h=(0,r.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})}),g=(0,r.jsx)("span",{children:"Reload Page"}),f[14]=h,f[15]=g):(h=f[14],g=f[15]),f[16]!==S?(x=(0,r.jsxs)(r.Fragment,{children:[m,(0,r.jsx)("div",{className:"error-container",children:(0,r.jsx)("div",{className:"error-content",children:(0,r.jsxs)("div",{className:"error-inner",children:[u,(0,r.jsxs)("button",{onClick:S,className:"error-button",children:[h,g]})]})})})]}),f[16]=S,f[17]=x):x=f[17],x}],982459)},953294,e=>{"use strict";var r=e.i(514562),t=e.i(433138),i=e.i(982459);e.s(["default",0,e=>{let o,n=(0,t.c)(3),{error:s,reset:a}=e;return n[0]!==s||n[1]!==a?(o=(0,r.jsx)(i.SiteErrorPage,{error:s,reset:a}),n[0]=s,n[1]=a,n[2]=o):o=n[2],o}])}]);

//# sourceMappingURL=0q0xwi9dcexwj.js.map
//# chunkId=019dc17e-06ee-7160-9468-f01ebae7b179