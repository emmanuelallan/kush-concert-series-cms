import{fe as s,ff as c,r as o}from"./strapi-CmSSRMct.js";function u(t){const e=s().getMonitor(),[a,r]=c(e,t);return o.useEffect(()=>e.subscribeToOffsetChange(r)),o.useEffect(()=>e.subscribeToStateChange(r)),a}export{u};
