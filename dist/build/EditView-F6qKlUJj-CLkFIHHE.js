import{g as N,k as S,i as M,c1 as _,aK as w,n as q,a3 as K,ap as O,r as k,bp as U,b_ as G,aO as C,t as Q,aJ as $,q as D,j as e,P as h,N as H,O as z,b as J,F as L,B as Y,T as W,Q as m,b2 as F}from"./strapi-BemxyVAD.js";import{u as X,a as Z,b as ee}from"./transferTokens-CQP13miB-DhZJuopS.js";import{T as f}from"./constants-CRj0ViV1-Q2dfXdfa.js";import{F as se,T as te,a as ne,b as re,L as ae,c as ie}from"./TokenTypeSelect-Cmc58ea--BCK4mcwR.js";import"./index-CfEmO0xg.js";import"./index-BRVyLNfZ.js";const oe=N().shape({name:S().max(100).required(M.required.id),description:S().nullable(),lifespan:_().integer().min(0).nullable().defined(M.required.id),permissions:S().required(M.required.id)}),le=()=>{const{formatMessage:a}=w(),{toggleNotification:r}=q(),d=K(),{state:p}=O(),[t,l]=k.useState(p&&"accessKey"in p.transferToken?{...p.transferToken}:null),{trackUsage:o}=U();G("EditView",n=>n.setCurrentStep);const x=C(n=>n.admin_app.permissions.settings?.["transfer-tokens"]),{allowedActions:{canCreate:j,canUpdate:v,canRegenerate:R}}=Q(x),g=$("/settings/transfer-tokens/:id")?.params?.id,i=g==="create",{_unstableFormatAPIError:T,_unstableFormatValidationErrors:P}=D();k.useEffect(()=>{o(i?"didAddTokenFromList":"didEditTokenFromList",{tokenType:f})},[i,o]);const{data:y,error:E}=X(g,{skip:i||t!==null||!g});k.useEffect(()=>{E&&r({type:"danger",message:T(E)})},[E,T,r]),k.useEffect(()=>{y&&l(y)},[y]);const[A]=Z(),[V]=ee(),B=async(n,c)=>{o(i?"willCreateToken":"willEditToken",{tokenType:f});const u=n.permissions.split("-");if((s=>s.length===1?s[0]==="push"||s[0]==="pull":s[0]==="push"&&s[1]==="pull")(u))try{if(i){const s=await A({...n,lifespan:n?.lifespan&&n.lifespan!=="0"?parseInt(n.lifespan.toString(),10):null,permissions:u});if("error"in s){F(s.error)&&s.error.name==="ValidationError"?c.setErrors(P(s.error)):r({type:"danger",message:T(s.error)});return}l(s.data),r({type:"success",message:a({id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"})}),o("didCreateToken",{type:t?.permissions,tokenType:f}),d(`../transfer-tokens/${s.data.id.toString()}`,{replace:!0,state:{transferToken:s.data}})}else{const s=await V({id:g,name:n.name,description:n.description,permissions:u});if("error"in s){F(s.error)&&s.error.name==="ValidationError"?c.setErrors(P(s.error)):r({type:"danger",message:T(s.error)});return}l(s.data),r({type:"success",message:a({id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),o("didEditToken",{type:t?.permissions,tokenType:f})}}catch{r({type:"danger",message:a({id:"notification.error",defaultMessage:"Something went wrong"})})}},I=v&&!i||j&&i;return!i&&!t?e.jsx(h.Loading,{}):e.jsxs(h.Main,{children:[e.jsx(h.Title,{children:a({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Transfer Tokens"})}),e.jsx(H,{validationSchema:oe,validateOnChange:!1,initialValues:{name:t?.name||"",description:t?.description||"",lifespan:t?.lifespan||null,permissions:t?.permissions.join("-")??""},enableReinitialize:!0,onSubmit:(n,c)=>B(n,c),children:({errors:n,handleChange:c,isSubmitting:u,values:b})=>e.jsxs(z,{children:[e.jsx(se,{title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"TokenCreate Transfer Token"},token:t,setToken:l,canEditInputs:I,canRegenerate:R,isSubmitting:u,regenerateUrl:"/admin/transfer/tokens/"}),e.jsx(J.Content,{children:e.jsxs(L,{direction:"column",alignItems:"stretch",gap:6,children:[t&&!!t?.name&&"accessKey"in t&&e.jsx(te,{token:t.accessKey,tokenType:f}),e.jsx(ce,{errors:n,onChange:c,canEditInputs:I,isCreating:i,values:b,transferToken:t})]})})]})})]})},he=()=>{const a=C(r=>r.admin_app.permissions.settings?.["transfer-tokens"].read);return e.jsx(h.Protect,{permissions:a,children:e.jsx(le,{})})},ce=({errors:a={},onChange:r,canEditInputs:d,isCreating:p,values:t,transferToken:l={}})=>{const{formatMessage:o}=w(),x=[{value:"push",label:{id:"Settings.transferTokens.types.push",defaultMessage:"Push"}},{value:"pull",label:{id:"Settings.transferTokens.types.pull",defaultMessage:"Pull"}},{value:"push-pull",label:{id:"Settings.transferTokens.types.push-pull",defaultMessage:"Full Access"}}];return e.jsx(Y,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(L,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(W,{variant:"delta",tag:"h2",children:o({id:"global.details",defaultMessage:"Details"})}),e.jsxs(m.Root,{gap:5,children:[e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(ne,{error:a.name,value:t.name,canEditInputs:d,onChange:r})},"name"),e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(re,{error:a.description,value:t.description,canEditInputs:d,onChange:r})},"description"),e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(ae,{isCreating:p,error:a.lifespan,value:t.lifespan,onChange:r,token:l})},"lifespan"),e.jsx(m.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(ie,{name:"permissions",value:t.permissions,error:a.permissions,label:{id:"Settings.tokens.form.type",defaultMessage:"Token type"},onChange:j=>{r({target:{name:"permissions",value:j}})},options:x,canEditInputs:d})},"permissions")]})]})})};export{le as EditView,he as ProtectedEditView};
