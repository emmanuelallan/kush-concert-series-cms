import{aK as x,Y as m,n as P,q as b,c2 as M,r as T,j as s,P as n,b as d,y,z as C,A as u,C as c,T as l,D as E,E as p,aO as I}from"./strapi-BemxyVAD.js";const A=()=>{const{formatMessage:e}=x(),{notifyStatus:t}=m(),{toggleNotification:a}=P(),{_unstableFormatAPIError:g}=b(),{isLoading:h,data:i,error:r}=M();return T.useEffect(()=>{i&&t(e({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:e({id:"global.plugins",defaultMessage:"Plugins"})})),r&&a({type:"danger",message:g(r)})},[i,r,g,e,t,a]),h?s.jsx(n.Loading,{}):s.jsx(d.Root,{children:s.jsxs(n.Main,{children:[s.jsx(d.Header,{title:e({id:"global.plugins",defaultMessage:"Plugins"}),subtitle:e({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),s.jsx(d.Content,{children:s.jsxs(y,{colCount:2,rowCount:i?.plugins?.length??1,children:[s.jsx(C,{children:s.jsxs(u,{children:[s.jsx(c,{children:s.jsx(l,{variant:"sigma",textColor:"neutral600",children:e({id:"global.name",defaultMessage:"Name"})})}),s.jsx(c,{children:s.jsx(l,{variant:"sigma",textColor:"neutral600",children:e({id:"global.description",defaultMessage:"description"})})})]})}),s.jsx(E,{children:i?.plugins.map(({name:o,displayName:f,description:j})=>s.jsxs(u,{children:[s.jsx(p,{children:s.jsx(l,{textColor:"neutral800",variant:"omega",fontWeight:"bold",children:e({id:`global.plugins.${o}`,defaultMessage:f})})}),s.jsx(p,{children:s.jsx(l,{textColor:"neutral800",children:e({id:`global.plugins.${o}.description`,defaultMessage:j})})})]},o))})]})})]})})},N=()=>{const{formatMessage:e}=x(),t=I(a=>a.admin_app.permissions);return s.jsxs(n.Protect,{permissions:t.marketplace?.main,children:[s.jsx(n.Title,{children:e({id:"global.plugins",defaultMessage:"Plugins"})}),s.jsx(A,{})]})};export{A as InstalledPlugins,N as ProtectedInstalledPlugins};
