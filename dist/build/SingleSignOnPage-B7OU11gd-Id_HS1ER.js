import{g as v,h as A,i as p,aH as x,aZ as O,aK as k,aO as j,n as C,q as E,a_ as F,a$ as T,t as q,j as s,b as f,P as g,Z as _,S as H,a0 as $,F as z,T as U,Q as R,_ as V,aW as B,U as u,b0 as Q,b1 as D,b2 as G}from"./strapi-BemxyVAD.js";import{u as N}from"./useAdminRoles-DHmyH8OJ-CXkYApfn.js";const Z=v().shape({autoRegister:A().required(p.required),defaultRole:x().when("autoRegister",(e,t)=>e?t.required(p.required):t.nullable()),ssoLockedRoles:O().nullable().of(x().when("ssoLockedRoles",(e,t)=>e?t.required(p.required):t.nullable()))}),K=()=>{const{formatMessage:e}=k(),t=j(l=>l.admin_app.permissions),{toggleNotification:o}=C(),{_unstableFormatAPIError:h,_unstableFormatValidationErrors:m}=E(),{isLoading:i,data:n}=F(),[d,{isLoading:M}]=T(),{isLoading:y,allowedActions:{canUpdate:L,canRead:I}}=q({...t.settings?.sso,readRoles:t.settings?.roles.read??[]}),{roles:S,isLoading:P}=N(void 0,{skip:!I}),w=async(l,c)=>{try{const a=await d(l);if("error"in a){G(a.error)&&a.error.name==="ValidationError"?c.setErrors(m(a.error)):o({type:"danger",message:h(a.error)});return}o({type:"success",message:e({id:"notification.success.saved"})})}catch{o({type:"danger",message:e({id:"notification.error",defaultMessage:"An error occurred, please try again."})})}},b=P||y||i;return s.jsxs(f.Root,{children:[s.jsx(g.Title,{children:e({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"SSO"})}),s.jsx(g.Main,{"aria-busy":M||b,tabIndex:-1,children:s.jsx(_,{method:"PUT",onSubmit:w,validationSchema:Z,disabled:!L,initialValues:n||{autoRegister:!1,defaultRole:null,ssoLockedRoles:null},children:({modified:l,isSubmitting:c})=>s.jsxs(s.Fragment,{children:[s.jsx(f.Header,{primaryAction:s.jsx(H,{disabled:!l,loading:c,startIcon:s.jsx($,{}),type:"submit",children:e({id:"global.save",defaultMessage:"Save"})}),title:e({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:e({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),s.jsx(f.Content,{children:c||b?s.jsx(g.Loading,{}):s.jsxs(z,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[s.jsx(U,{variant:"delta",tag:"h2",children:e({id:"global.settings",defaultMessage:"Settings"})}),s.jsx(R.Root,{gap:4,children:[{hint:e({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:e({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",size:6,type:"boolean"},{hint:e({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),label:e({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",options:S.map(({id:a,name:r})=>({label:r,value:a.toString()})),placeholder:e({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),size:6,type:"enumeration"},{hint:e({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),label:e({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",options:S.map(({id:a,name:r})=>({label:r,value:a.toString()})),placeholder:e({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),size:6,type:"multi"}].map(({size:a,...r})=>s.jsx(R.Item,{col:a,direction:"column",alignItems:"stretch",children:s.jsx(W,{...r})},r.name))})]})})]})})})]})},W=e=>{switch(e.type){case"multi":return s.jsx(J,{...e});default:return s.jsx(V,{...e})}},J=({hint:e,label:t,name:o,options:h,...m})=>{const i=B(o);return s.jsxs(u.Root,{name:o,hint:e,error:i.error,children:[s.jsx(u.Label,{children:t}),s.jsx(Q,{onChange:n=>i.onChange("ssoLockedRoles",n),onClear:()=>i.onChange("ssoLockedRoles",[]),value:i.value??[],withTags:!0,...m,children:h.map(({label:n,value:d})=>s.jsx(D,{value:d,children:n},d))}),s.jsx(u.Hint,{}),s.jsx(u.Error,{})]})},ee=()=>{const e=j(t=>t.admin_app.permissions.settings?.sso?.main);return s.jsx(g.Protect,{permissions:e,children:s.jsx(K,{})})};export{ee as ProtectedSSO,K as SingleSignOnPage};
