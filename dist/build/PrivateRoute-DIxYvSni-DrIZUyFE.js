import{c4 as s,ap as r,j as u,b9 as c}from"./strapi-CmSSRMct.js";const p=({children:t})=>{const o=s("PrivateRoute",n=>n.token),{pathname:e,search:a}=r();return o!==null?t:u.jsx(c,{to:{pathname:"/auth/login",search:e!=="/"?`?redirectTo=${encodeURIComponent(`${e}${a}`)}`:void 0}})};export{p as P};