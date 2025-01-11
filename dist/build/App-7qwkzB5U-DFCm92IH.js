const __vite__fileDeps=["ConfigureTheView-BuULTlH7-CkH_awMB.js","strapi-CmSSRMct.js","strapi-COJtagOC.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as J,r as M,bz as Te,fi as $e,aP as T,aK as C,fj as c,j as e,P as L,R as Pe,a as ue,B as $,T as X,a3 as Qe,fk as Ve,ap as je,bp as be,fl as Ue,fm as ze,fn as Oe,fo as Ge,fp as Ne,fq as E,fr as He,b as D,ab as ye,fs as _e,I as H,b8 as qe,bx as Me,c$ as We,ft as B,fu as Ke,dp as Je,bg as Xe,fv as Ye,fw as Ze,Q as W,fx as es,G as ss,fy as ts,fz as as,F as P,V as ns,b4 as os,fA as is,aS as _,fB as rs,fC as ls,fD as ds,fE as cs,fF as us,c3 as gs,S as v,bf as K,an as ge,ao as fs,fG as hs,fH as fe,fI as ps,fJ as xs,c as ms,a4 as js,a5 as bs,fK as ys,fL as Ms,bk as he,bj as Cs,bl as Fs,M as y,dk as Ss,fM as vs,aT as ks,N as Ls,O as ws,U as pe,fN as Es,n as As,m as Rs,o as Is,x as Bs,fO as q,fP as Ds,eJ as Ts}from"./strapi-CmSSRMct.js";const $s=(s,{pathname:n,query:a})=>{const o=[{id:null,label:{id:c("plugin.name"),defaultMessage:"Media Library"},href:s?E(n,a||{}):void 0}];return s?.parent&&typeof s?.parent!="number"&&s?.parent?.parent&&o.push([]),s?.parent&&typeof s.parent!="number"&&o.push({id:s.parent.id,label:s.parent.name,href:E(n,a||{},{folder:s.parent.id?.toString(),folderPath:s.parent.path})}),s&&o.push({id:s.id,label:s.name}),o},Ps=s=>{const{id:n}=cs();return e.jsx($,{position:"relative",zIndex:2,children:e.jsx(ye,{"aria-labelledby":`${n}-title`,...s})})},Qs=({selected:s,onSuccess:n})=>{const{formatMessage:a}=C(),{remove:o}=Ms(),d=async()=>{await o(s),n()};return e.jsxs(he.Root,{children:[e.jsx(he.Trigger,{children:e.jsx(v,{variant:"danger-light",size:"S",startIcon:e.jsx(Cs,{}),children:a({id:"global.delete",defaultMessage:"Delete"})})}),e.jsx(Fs,{onConfirm:d})]})},Vs=()=>{const{formatMessage:s}=C(),{toggleNotification:n}=As(),a=Rs(),{post:o}=Is(),i=Bs(({destinationFolderId:h,filesAndFolders:f})=>{const l=f.reduce((g,j)=>{const{id:r,type:S}=j,p=S==="asset"?"fileIds":"folderIds";return g[p]||(g[p]=[]),g[p].push(r),g},{});return o("/upload/actions/bulk-move",{...l,destinationFolderId:h})},{onSuccess(h){const{data:{data:f}}=h;f?.files?.length>0&&(a.refetchQueries([q,"assets"],{active:!0}),a.refetchQueries([q,"asset-count"],{active:!0})),a.refetchQueries([q,"folders"],{active:!0}),n({type:"success",message:s({id:c("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."})})}});return{...i,move:(h,f)=>i.mutateAsync({destinationFolderId:h,filesAndFolders:f})}},Us=({onClose:s,selected:n=[],currentFolder:a})=>{const{formatMessage:o}=C(),{data:d,isLoading:i}=vs(),{move:u}=Vs();if(!d)return null;const h=async(l,{setErrors:g})=>{try{if(typeof l.destination!="string"){const j=l.destination.value;await u(j,n),s()}}catch(j){const r=Ds(j);if(r&&"errors"in r){const S=r.errors?.reduce((p,A)=>(p[A.values?.path?.length||"destination"]=A.defaultMessage,p),{});Ts(S)||g(S)}}};if(i)return e.jsx(y.Content,{children:e.jsx(y.Body,{children:e.jsx(P,{justifyContent:"center",paddingTop:4,paddingBottom:4,children:e.jsx(ks,{children:o({id:c("content.isLoading"),defaultMessage:"Content is loading."})})})})});const f={destination:{value:a?.id||"",label:a?.name||d[0].label}};return e.jsx(y.Content,{children:e.jsx(Ls,{validateOnChange:!1,onSubmit:h,initialValues:f,children:({values:l,errors:g,setFieldValue:j})=>e.jsxs(ws,{noValidate:!0,children:[e.jsx(y.Header,{children:e.jsx(y.Title,{children:o({id:c("modal.folder.move.title"),defaultMessage:"Move elements to"})})}),e.jsx(y.Body,{children:e.jsx(W.Root,{gap:4,children:e.jsx(W.Item,{xs:12,col:12,direction:"column",alignItems:"stretch",children:e.jsxs(pe.Root,{id:"folder-destination",children:[e.jsx(pe.Label,{children:o({id:c("form.input.label.folder-location"),defaultMessage:"Location"})}),e.jsx(Es,{options:d,onChange:r=>{j("destination",r)},defaultValue:typeof l.destination!="string"?l.destination:void 0,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:g?.destination,ariaErrorMessage:"destination-error"}),g.destination&&e.jsx(X,{variant:"pi",tag:"p",textColor:"danger600",children:g.destination})]})})})}),e.jsxs(y.Footer,{children:[e.jsx(y.Close,{children:e.jsx(v,{variant:"tertiary",name:"cancel",children:o({id:"cancel",defaultMessage:"Cancel"})})}),e.jsx(v,{type:"submit",loading:i,children:o({id:"modal.folder.move.submit",defaultMessage:"Move"})})]})]})})})},zs=({selected:s=[],onSuccess:n,currentFolder:a})=>{const{formatMessage:o}=C(),[d,i]=M.useState(!1),u=()=>{i(!1),n()};return e.jsxs(y.Root,{open:d,onOpenChange:i,children:[e.jsx(y.Trigger,{children:e.jsx(v,{variant:"secondary",size:"S",startIcon:e.jsx(Ss,{}),children:o({id:"global.move",defaultMessage:"Move"})})}),e.jsx(Us,{currentFolder:a,onClose:u,selected:s})]})},Os=({selected:s=[],onSuccess:n,currentFolder:a})=>{const{formatMessage:o}=C(),d=s?.reduce(function(i,u){return u?.type==="folder"&&"files"in u&&u?.files&&"count"in u.files?i+u?.files?.count:i+1},0);return e.jsxs(P,{gap:2,paddingBottom:5,children:[e.jsx(X,{variant:"epsilon",textColor:"neutral600",children:o({id:c("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:s?.filter(({type:i})=>i==="folder").length,numberAssets:d})}),e.jsx(Qs,{selected:s,onSuccess:n}),e.jsx(zs,{currentFolder:a,selected:s,onSuccess:n})]})},Gs=({isFiltering:s,canCreate:n,canRead:a})=>s?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:a?n?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},Ns=({canCreate:s,isFiltering:n,canRead:a,onActionClick:o})=>{const{formatMessage:d}=C(),i=Gs({isFiltering:n,canCreate:s,canRead:a});return e.jsx(us,{icon:a?void 0:gs,action:s&&!n&&e.jsx(v,{variant:"secondary",startIcon:e.jsx(K,{}),onClick:o,children:d({id:c("header.actions.add-assets"),defaultMessage:"Add new assets"})}),content:d({...i,id:c(i.id)})})},Hs=()=>{const[s,n]=M.useState(!1),{formatMessage:a}=C(),{trackUsage:o}=be(),[{query:d},i]=T(),u=d?.filters?.$and||[],h=l=>{i({filters:{$and:l},page:1})},f=l=>{o("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(l[l.length-1])[0]}),i({filters:{$and:l},page:1})};return e.jsxs(ge.Root,{open:s,onOpenChange:n,children:[e.jsx(ge.Trigger,{children:e.jsx(v,{variant:"tertiary",startIcon:e.jsx(fs,{}),size:"S",children:a({id:"app.utils.filters",defaultMessage:"Filters"})})}),e.jsx(hs,{displayedFilters:fe,filters:u,onSubmit:f,onToggle:n}),e.jsx(ps,{appliedFilters:u,filtersSchema:fe,onRemoveFilter:h})]})},_s=({breadcrumbs:s=null,canCreate:n,folder:a=null,onToggleEditFolderDialog:o,onToggleUploadAssetDialog:d})=>{const{formatMessage:i}=C(),{pathname:u}=je(),[{query:h}]=T(),f={...h,folder:a?.parent&&typeof a.parent!="number"&&a.parent.id?a.parent.id:void 0,folderPath:a?.parent&&typeof a.parent!="number"&&a.parent.path?a.parent.path:void 0};return e.jsx(D.Header,{title:i({id:c("plugin.name"),defaultMessage:"Media Library"}),subtitle:s&&typeof s!="boolean"&&a&&e.jsx(xs,{label:i({id:c("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:s,currentFolderId:a?.id}),navigationAction:a&&e.jsx(ms,{tag:js,startIcon:e.jsx(bs,{}),to:`${u}?${Me.stringify(f,{encode:!1})}`,children:i({id:c("header.actions.folder-level-up"),defaultMessage:"Back"})}),primaryAction:n&&e.jsxs(P,{gap:2,children:[e.jsx(v,{startIcon:e.jsx(K,{}),variant:"secondary",onClick:o,children:i({id:c("header.actions.add-folder"),defaultMessage:"Add new folder"})}),e.jsx(v,{startIcon:e.jsx(K,{}),onClick:d,children:i({id:c("header.actions.add-assets"),defaultMessage:"Add new assets"})})]})})},qs=J($)`
  height: 3.2rem;
  display: flex;
  align-items: center;
`,xe=J(X)`
  max-width: 100%;
`,me=J($)`
  svg {
    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }
`,Ws=()=>{const s=Qe(),{canRead:n,canCreate:a,canUpdate:o,canCopyLink:d,canDownload:i,canConfigureView:u,isLoading:h}=Ve(),f=M.useRef(),{formatMessage:l}=C(),{pathname:g}=je(),{trackUsage:j}=be(),[{query:r},S]=T(),p=!!(r._q||r.filters),[A,Ce]=Ue(ys.view,B.GRID),k=A===B.GRID,{data:b,isLoading:Fe,error:Se}=ze({skipWhen:!n,query:r}),{data:ve,isLoading:ke,error:Le}=Oe({enabled:n&&b?.pagination?.page===1&&!Ge(r),query:r}),{data:Q,isLoading:Y,error:we}=Ne(r?.folder,{enabled:n&&!!r?.folder});we?.name==="NotFoundError"&&s(g);const R=ve?.map(t=>({...t,type:"folder",folderURL:E(g,r,{folder:t.id.toString(),folderPath:t.path}),isSelectable:o}))??[],x=R?.length||0,I=b?.results?.map(t=>({...t,type:"asset",isSelectable:o}))||[],m=I?.length??0,Ee=b?.pagination?.total,Ae=Y||ke||h||Fe,[Z,Re]=M.useState(!1),[ee,se]=M.useState(!1),[V,U]=M.useState(void 0),[z,te]=M.useState(void 0),[F,{selectOne:O,selectAll:ae}]=He(["type","id"],[]),ne=F?.length>0&&F?.length!==m+x,G=()=>Re(t=>!t),oe=({created:t=!1}={})=>{t&&r?.page!=="1"&&S({...r,page:1}),se(w=>!w)},ie=(t,w)=>{t&&j("didSelectAllMediaLibraryElements"),ae(w)},re=t=>{j("didSortMediaLibraryElements",{location:"upload",sort:t}),S({sort:t})},le=t=>{te(t),se(!0)},Ie=t=>{te(null),oe(t),f.current&&f.current.focus()},de=t=>{t===m&&b?.pagination?.page===b?.pagination?.pageCount&&b?.pagination?.page&&b.pagination.page>1&&S({...r,page:b.pagination.page-1})},Be=()=>{ae(),de(F.length)};return Ae?e.jsx(L.Loading,{}):Se||Le?e.jsx(L.Error,{}):e.jsxs(D.Root,{children:[e.jsxs(L.Main,{children:[e.jsx(_s,{breadcrumbs:Y?null:$s(Q,{pathname:g,query:r}),canCreate:a,onToggleEditFolderDialog:oe,onToggleUploadAssetDialog:G,folder:Q}),e.jsx(D.Action,{startActions:e.jsxs(e.Fragment,{children:[o&&k&&(m>0||x>0)&&e.jsx(qs,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200",children:e.jsx(ye,{"aria-label":l({id:c("bulk.select.label"),defaultMessage:"Select all folders & assets"}),checked:ne?"indeterminate":(m>0||x>0)&&F.length===m+x,onCheckedChange:t=>ie(t,[...I,...R])})}),n&&k&&e.jsx(_e,{value:r?.sort,onChangeSort:re}),n&&e.jsx(Hs,{})]}),endActions:e.jsxs(e.Fragment,{children:[u?e.jsx(me,{paddingTop:1,paddingBottom:1,children:e.jsx(H,{tag:qe,to:{pathname:`${g}/configuration`,search:Me.stringify(r,{encode:!1})},label:l({id:"app.links.configure-view",defaultMessage:"Configure the view"}),children:e.jsx(We,{})})}):null,e.jsx(me,{paddingTop:1,paddingBottom:1,children:e.jsx(H,{label:l(k?{id:c("view-switch.list"),defaultMessage:"List View"}:{id:c("view-switch.grid"),defaultMessage:"Grid View"}),onClick:()=>Ce(k?B.LIST:B.GRID),children:k?e.jsx(Ke,{}):e.jsx(Je,{})})}),e.jsx(Xe,{label:l({id:c("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}})]})}),e.jsxs(D.Content,{children:[F.length>0&&e.jsx(Os,{currentFolder:Q,selected:F,onSuccess:Be}),x===0&&m===0&&e.jsx(Ns,{canCreate:a,canRead:n,isFiltering:p,onActionClick:G}),n&&!k&&(m>0||x>0)&&e.jsx(Ye,{assetCount:m,folderCount:x,indeterminate:ne,onChangeSort:re,onChangeFolder:(t,w)=>s(E(g,r,{folder:t.toString(),folderPath:w})),onEditAsset:U,onEditFolder:le,onSelectOne:O,onSelectAll:ie,rows:[...R,...I],selected:F,shouldDisableBulkSelect:!o,sortQuery:r?.sort??""}),n&&k&&e.jsxs(e.Fragment,{children:[x>0&&e.jsx(Ze,{title:(p&&m>0||!p)&&l({id:c("list.folders.title"),defaultMessage:"Folders ({count})"},{count:x})||"",children:R.map(t=>{const De=!!F.filter(({type:N})=>N==="folder").find(N=>N.id===t.id),ce=E(g,r,{folder:t?.id.toString(),folderPath:t?.path});return e.jsx(W.Item,{col:3,direction:"column",alignItems:"stretch",children:e.jsx(es,{ref:z&&t.id===z.id?f:void 0,ariaLabel:t.name,id:`folder-${t.id}`,to:ce,startAction:t.isSelectable?e.jsx(Ps,{"data-testid":`folder-checkbox-${t.id}`,checked:De,onCheckedChange:()=>O(t)}):null,cardActions:e.jsx(H,{label:l({id:c("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>le(t),children:e.jsx(ss,{})}),children:e.jsx(ts,{children:e.jsx(as,{to:ce,children:e.jsxs(P,{tag:"h2",direction:"column",alignItems:"start",maxWidth:"100%",children:[e.jsxs(xe,{fontWeight:"semiBold",textColor:"neutral800",ellipsis:!0,children:[t.name,e.jsx(ns,{children:":"})]}),e.jsx(xe,{tag:"span",textColor:"neutral600",variant:"pi",ellipsis:!0,children:l({id:c("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:t.children?.count,filesCount:t.files?.count})})]})})})})},`folder-${t.id}`)})}),m>0&&x>0&&e.jsx($,{paddingTop:6,paddingBottom:4,children:e.jsx(os,{})}),m>0&&e.jsx(is,{assets:I,onEditAsset:U,onSelectAsset:O,selectedAssets:F.filter(({type:t})=>t==="asset"),title:(!p||p&&x>0)&&b?.pagination?.page===1&&l({id:c("list.assets.title"),defaultMessage:"Assets ({count})"},{count:Ee})||""})]}),e.jsxs(_.Root,{...b?.pagination,children:[e.jsx(_.PageSize,{}),e.jsx(_.Links,{})]})]})]}),Z&&e.jsx(rs,{open:Z,onClose:G,trackedLocation:"upload",folderId:r?.folder}),ee&&e.jsx(ls,{open:ee,onClose:()=>Ie(),folder:z,parentFolderId:r?.folder,location:"upload"}),V&&e.jsx(ds,{onClose:t=>{t===null&&de(1),U(void 0)},open:!!V,asset:V,canUpdate:o,canCopyLink:d,canDownload:i,trackedLocation:"upload"})]})},Ks=M.lazy(async()=>Te(()=>import("./ConfigureTheView-BuULTlH7-CkH_awMB.js"),__vite__mapDeps([0,1,2])).then(s=>({default:s.ConfigureTheView}))),Xs=()=>{const{config:{isLoading:s,isError:n,data:a}}=$e(),[{rawQuery:o},d]=T(),{formatMessage:i}=C(),u=i({id:c("plugin.name"),defaultMessage:"Media Library"});return M.useEffect(()=>{s||n||o||d({sort:a.sort,page:1,pageSize:a.pageSize})},[s,n,a,o,d]),s?e.jsxs(e.Fragment,{children:[e.jsx(L.Title,{children:u}),e.jsx(L.Loading,{})]}):e.jsx(L.Main,{children:o?e.jsx(M.Suspense,{fallback:e.jsx(L.Loading,{}),children:e.jsxs(Pe,{children:[e.jsx(ue,{index:!0,element:e.jsx(Ws,{})}),e.jsx(ue,{path:"configuration",element:e.jsx(Ks,{config:a})})]})}):null})};export{Xs as Upload};