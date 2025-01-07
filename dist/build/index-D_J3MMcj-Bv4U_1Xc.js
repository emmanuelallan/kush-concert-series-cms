import{g as E,h as U,i as d,k as i,l as n,u as $,m as le,r as T,n as ue,o as ce,q as pe,s as he,t as me,v as ae,w as be,x as ge,j as e,P as k,y as fe,z as xe,A as V,C as F,T as M,V as ve,D as je,E as z,I as Pe,G as ye,H as qe,M as L,J as Me,K as Le,N as Re,O as we,F as Te,Q as X,S as K,U as P,W as ke,X as Ce}from"./strapi-CS4Zu_gP.js";import{u as Se,L as I}from"./index-Cn5HftCc-Dku5eOkP-BDmFvSJj.js";import{P as s}from"./index-C83io3RP.js";const B=({description:r,disabled:x,intlLabel:m,error:u,name:c,onChange:v,placeholder:t,providerToEditName:b,type:h,value:l})=>{const{formatMessage:o}=$(),g=c==="noName"?`${window.strapi.backendURL}/api/connect/${b}/callback`:l,j=o({id:m.id,defaultMessage:m.defaultMessage},{provider:b,...m.values}),p=r?o({id:r.id,defaultMessage:r.defaultMessage},{provider:b,...r.values}):"";if(h==="bool")return e.jsxs(P.Root,{hint:p,name:c,children:[e.jsx(P.Label,{children:j}),e.jsx(ke,{"aria-label":c,checked:l,disabled:x,offLabel:o({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:o({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:q=>{v({target:{name:c,value:q.target.checked}})}}),e.jsx(P.Hint,{})]});const y=t?o({id:t.id,defaultMessage:t.defaultMessage},{...t.values}):"",C=u?o({id:u,defaultMessage:u}):"";return e.jsxs(P.Root,{error:C,name:c,children:[e.jsx(P.Label,{children:j}),e.jsx(Ce,{disabled:x,onChange:v,placeholder:y,type:h,value:g}),e.jsx(P.Error,{})]})};B.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""};B.propTypes={description:s.shape({id:s.string.isRequired,defaultMessage:s.string.isRequired,values:s.object}),disabled:s.bool,error:s.string,intlLabel:s.shape({id:s.string.isRequired,defaultMessage:s.string.isRequired,values:s.object}).isRequired,name:s.string.isRequired,onChange:s.func.isRequired,placeholder:s.shape({id:s.string.isRequired,defaultMessage:s.string.isRequired,values:s.object}),providerToEditName:s.string.isRequired,type:s.string.isRequired,value:s.oneOfType([s.bool,s.string])};const D=({headerBreadcrumbs:r,initialData:x,isSubmiting:m,layout:u,isOpen:c,onSubmit:v,onToggle:t,providerToEditName:b})=>{const{formatMessage:h}=$();return e.jsx(L.Root,{open:c,onOpenChange:t,children:e.jsxs(L.Content,{children:[e.jsx(L.Header,{children:e.jsx(Me,{label:r.join(", "),children:r.map((l,o,g)=>e.jsx(Le,{isCurrent:o===g.length-1,children:l},l))})}),e.jsx(Re,{onSubmit:l=>v(l),initialValues:x,validationSchema:u.schema,validateOnChange:!1,children:({errors:l,handleChange:o,values:g})=>e.jsxs(we,{children:[e.jsx(L.Body,{children:e.jsx(Te,{direction:"column",alignItems:"stretch",gap:1,children:e.jsx(X.Root,{gap:5,children:u.form.map(j=>j.map(p=>e.jsx(X.Item,{col:p.size,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(B,{...p,error:l[p.name],onChange:o,value:g[p.name],providerToEditName:b})},p.name)))})})}),e.jsxs(L.Footer,{children:[e.jsx(K,{variant:"tertiary",onClick:t,type:"button",children:h({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),e.jsx(K,{type:"submit",loading:m,children:h({id:"global.save",defaultMessage:"Save"})})]})]})})]})})};D.defaultProps={initialData:null,providerToEditName:null};D.propTypes={headerBreadcrumbs:s.arrayOf(s.string).isRequired,initialData:s.object,layout:s.shape({form:s.arrayOf(s.array),schema:s.object}).isRequired,isOpen:s.bool.isRequired,isSubmiting:s.bool.isRequired,onSubmit:s.func.isRequired,onToggle:s.func.isRequired,providerToEditName:s.string};const J={id:n("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},Z={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},N={id:n("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},O={id:n("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},_={id:n("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},Y={id:n("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},R={id:n("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},ee={id:n("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},se=/^$|^[a-z][a-z0-9+.-]*:\/\/[^\s/$.?#](?:[^\s]*[^\s/$.?#])?$/i,Ee=/^(([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+)(:\d+)?(\/\S*)?$/i,A={email:{form:[[{intlLabel:O,name:"enabled",type:"bool",description:N,size:6}]],schema:E().shape({enabled:U().required(d.required.id)})},providers:{form:[[{intlLabel:O,name:"enabled",type:"bool",description:N,size:6,validations:{required:!0}}],[{intlLabel:_,name:"key",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:ee,name:"secret",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:J,placeholder:Z,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:Y,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:E().shape({enabled:U().required(d.required.id),key:i().when("enabled",{is:!0,then:i().required(d.required.id),otherwise:i()}),secret:i().when("enabled",{is:!0,then:i().required(d.required.id),otherwise:i()}),callback:i().when("enabled",{is:!0,then:i().matches(se,d.regex.id).required(d.required.id),otherwise:i()})})},providersWithSubdomain:{form:[[{intlLabel:O,name:"enabled",type:"bool",description:N,size:6,validations:{required:!0}}],[{intlLabel:_,name:"key",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:ee,name:"secret",type:"text",placeholder:R,size:12,validations:{required:!0}}],[{intlLabel:{id:n({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:R,size:12,validations:{required:!1}}],[{intlLabel:{id:n("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:n("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:J,placeholder:Z,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:Y,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:E().shape({enabled:U().required(d.required.id),key:i().when("enabled",{is:!0,then:i().required(d.required.id),otherwise:i()}),secret:i().when("enabled",{is:!0,then:i().required(d.required.id),otherwise:i()}),subdomain:i().when("enabled",{is:!0,then:i().matches(Ee,d.regex.id).required(d.required.id),otherwise:i()}),callback:i().when("enabled",{is:!0,then:i().matches(se,d.regex.id).required(d.required.id),otherwise:i()})})}},Ue=()=>{const{formatMessage:r,locale:x}=$(),m=le(),{trackUsage:u}=Se(),[c,v]=T.useState(!1),[t,b]=T.useState(null),{toggleNotification:h}=ue(),{get:l,put:o}=ce(),{formatAPIError:g}=pe(),j=he(x,{sensitivity:"base"}),{isLoading:p,allowedActions:{canUpdate:y}}=me({update:ae.updateProviders}),{isLoading:C,data:q}=be(["users-permissions","get-providers"],async()=>{const{data:a}=await l("/users-permissions/providers");return a},{initialData:{}}),H=ge(a=>o("/users-permissions/providers",a),{async onSuccess(){await m.invalidateQueries(["users-permissions","get-providers"]),h({type:"success",message:r({id:n("notification.success.submit")})}),u("didEditAuthenticationProvider"),S()},onError(a){h({type:"danger",message:g(a)})},refetchActive:!1}),w=Object.entries(q).reduce((a,[f,ne])=>{const{icon:Q,enabled:de,subdomain:oe}=ne;return a.push({name:f,icon:Q==="envelope"?["fas","envelope"]:["fab",Q],enabled:de,subdomain:oe}),a},[]).sort((a,f)=>j.compare(a.name,f.name)),ie=C||p,W=T.useMemo(()=>t?!!w.find(f=>f.name===t)?.subdomain:!1,[w,t]),re=T.useMemo(()=>t==="email"?A.email:W?A.providersWithSubdomain:A.providers,[t,W]),S=()=>{v(a=>!a)},G=a=>{y&&(b(a.name),S())},te=async a=>{u("willEditAuthenticationProvider"),H.mutate({providers:{...q,[t]:a}})};return ie?e.jsx(k.Loading,{}):e.jsxs(I.Root,{children:[e.jsx(k.Title,{children:r({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:r({id:n("HeaderNav.link.providers"),defaultMessage:"Providers"})})}),e.jsxs(k.Main,{children:[e.jsx(I.Header,{title:r({id:n("HeaderNav.link.providers"),defaultMessage:"Providers"})}),e.jsx(I.Content,{children:e.jsxs(fe,{colCount:3,rowCount:w.length+1,children:[e.jsx(xe,{children:e.jsxs(V,{children:[e.jsx(F,{children:e.jsx(M,{variant:"sigma",textColor:"neutral600",children:r({id:"global.name",defaultMessage:"Name"})})}),e.jsx(F,{children:e.jsx(M,{variant:"sigma",textColor:"neutral600",children:r({id:n("Providers.status"),defaultMessage:"Status"})})}),e.jsx(F,{children:e.jsx(M,{variant:"sigma",children:e.jsx(ve,{children:r({id:"global.settings",defaultMessage:"Settings"})})})})]})}),e.jsx(je,{children:w.map(a=>e.jsxs(V,{onClick:()=>y?G(a):void 0,children:[e.jsx(z,{width:"45%",children:e.jsx(M,{fontWeight:"semiBold",textColor:"neutral800",children:a.name})}),e.jsx(z,{width:"65%",children:e.jsx(M,{textColor:a.enabled?"success600":"danger600","data-testid":`enable-${a.name}`,children:a.enabled?r({id:"global.enabled",defaultMessage:"Enabled"}):r({id:"global.disabled",defaultMessage:"Disabled"})})}),e.jsx(z,{onClick:f=>f.stopPropagation(),children:y&&e.jsx(Pe,{onClick:()=>G(a),variant:"ghost",label:"Edit",children:e.jsx(ye,{})})})]},a.name))})]})})]}),e.jsx(D,{initialData:q[t],isOpen:c,isSubmiting:H.isLoading,layout:re,headerBreadcrumbs:[r({id:n("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),qe(t)],onToggle:S,onSubmit:te,providerToEditName:t})]})},Ne=()=>e.jsx(k.Protect,{permissions:ae.readProviders,children:e.jsx(Ue,{})});export{Ue as ProvidersPage,Ne as default};
