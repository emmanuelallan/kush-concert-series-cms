import{ar as f,aq as o}from"./strapi-CmSSRMct.js";function h(e,l,i,n=0){const t=o(l);for(;e&&n<t.length;)e=e[t[n++]];return n!==t.length&&!e||e===void 0?i:e}const g=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),y=e=>String(Math.floor(Number(e)))===e;function m(e,l,i){const n=f(e);let t=n,r=0;const s=o(l);for(;r<s.length-1;r++){const a=s[r],c=h(e,s.slice(0,r+1));if(c&&(g(c)||Array.isArray(c)))t=t[a]=f(c);else{const u=s[r+1];t=t[a]=y(u)&&Number(u)>=0?[]:{}}}return(r===0?e:t)[s[r]]===i?e:(delete t[s[r]],r===0&&i===void 0&&delete n[s[r]],n)}export{h as g,m as s};
