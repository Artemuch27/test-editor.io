(this["webpackJsonptokyo-white-react-admin-dashboard-js"]=this["webpackJsonptokyo-white-react-admin-dashboard-js"]||[]).push([[90],{1530:function(e,n,t){"use strict";t.r(n);var a=t(13),c=t.n(a),r=t(21),s=t(6),i=t(1),o=t(23),l=t(203),j=t(279),b=t(653),d=t(137),u=t(678),h=t(27),x=t(16),m=t(31),O=t(9),p=t(4),g=t(639),f=t(662),v=t(278),y=t(201),w=t(648),C=t(572),k=t(823),S=t(41),I=t(664),P=t(774),T=t(775),_=t(180),W=t(668),B=t(378),z=t(57),M=t(717),F=t(708),A=t(716),q=t(709),R=t(742),D=t(275),L=t(710),E=t(133),N=t(153),U=t(578),J=t(1521),V=t(698),X=t.n(V),G=t(134),H=t(7),K=t(702),Q=t.n(K),Y=t(677),Z=t(52),$=t.n(Z),ee=t(752),ne=t.n(ee),te=t(729),ae=t.n(te),ce=t(686),re=t.n(ce),se=t(281),ie=t(680),oe=t.n(ie),le=t(373),je=t(580),be=t(178),de=t(177),ue=t(1125),he=t.n(ue),xe=t(0),me=Object(p.a)(y.a)((function(e){var n=e.theme;return"\n     background: ".concat(n.colors.error.main,";\n     color: ").concat(n.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(n.colors.error.dark,";\n     }\n    ")}));var Oe=function(){var e=Object(i.useState)(!1),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(i.useRef)(null),r=Object(G.a)().t;return Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsxs)(S.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(xe.jsxs)(S.a,{display:"flex",alignItems:"center",children:[Object(xe.jsxs)(z.a,{variant:"h5",color:"text.secondary",children:[r("Bulk actions"),":"]}),Object(xe.jsx)(N.a,{arrow:!0,placement:"top",title:r("Resend verification email"),children:Object(xe.jsx)(U.a,{color:"primary",sx:{ml:1,p:1},children:Object(xe.jsx)(he.a,{})})}),Object(xe.jsx)(me,{sx:{ml:1},startIcon:Object(xe.jsx)(re.a,{}),variant:"contained",children:r("Delete")})]}),Object(xe.jsx)(U.a,{color:"primary",onClick:function(){a(!0)},ref:c,sx:{ml:2,p:1},children:Object(xe.jsx)(oe.a,{})})]}),Object(xe.jsx)(le.a,{disableScrollLock:!0,keepMounted:!0,anchorEl:c.current,open:t,onClose:function(){a(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:Object(xe.jsxs)(je.a,{sx:{p:1},component:"nav",children:[Object(xe.jsx)(be.a,{button:!0,children:Object(xe.jsx)(de.a,{primary:r("Bulk edit accounts")})}),Object(xe.jsx)(be.a,{button:!0,children:Object(xe.jsx)(de.a,{primary:r("Close selected accounts")})})]})})]})},pe=Object(p.a)(g.a)((function(){return"\n      .MuiDialog-paper {\n        overflow: visible;\n      }\n"})),ge=Object(p.a)(f.a)((function(e){var n=e.theme;return"\n      background-color: ".concat(n.colors.error.lighter,";\n      color: ").concat(n.colors.error.main,";\n      width: ").concat(n.spacing(12),";\n      height: ").concat(n.spacing(12),";\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(n.typography.pxToRem(45),";\n      }\n")})),fe=Object(p.a)(v.a)((function(e){var n=e.theme;return"\n\n  position: relative;\n  overflow: visible;\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border-radius: inherit;\n    z-index: 1;\n    transition: ".concat(n.transitions.create(["box-shadow"]),";\n  }\n      \n    &.Mui-selected::after {\n      box-shadow: 0 0 0 3px ").concat(n.colors.primary.main,";\n    }\n  ")})),ve=Object(p.a)(y.a)((function(e){var n=e.theme;return"\n     background: ".concat(n.colors.error.main,";\n     color: ").concat(n.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(n.colors.error.dark,";\n     }\n    ")})),ye=Object(p.a)(w.a)((function(e){var n=e.theme;return"\n    @media (max-width: ".concat(n.breakpoints.values.md,"px) {\n      .MuiTabs-scrollableX {\n        overflow-x: auto !important;\n      }\n\n      .MuiTabs-indicator {\n          box-shadow: none;\n      }\n    }\n    ")})),we=Object(i.forwardRef)((function(e,n){return Object(xe.jsx)(C.a,Object(x.a)({direction:"down",ref:n},e))})),Ce=function(e){var n={admin:{text:"Administrator",color:"error"},customer:{text:"Customer",color:"info"},subscriber:{text:"Subscriber",color:"warning"}}[e],t=n.text,a=n.color;return Object(xe.jsx)(Y.a,{color:a,children:t})},ke=function(e){var n=e.users,t=Object(i.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1],o=Object(G.a)().t,l=Object(se.b)().enqueueSnackbar,j=Object(m.g)(),d=[{value:"all",label:o("All users")},{value:"customer",label:o("Customers")},{value:"admin",label:o("Administrators")},{value:"subscriber",label:o("Subscribers")}],u=Object(i.useState)(0),p=Object(s.a)(u,2),g=p[0],w=p[1],C=Object(i.useState)(10),V=Object(s.a)(C,2),K=V[0],Y=V[1],Z=Object(i.useState)(""),ee=Object(s.a)(Z,2),te=ee[0],ce=ee[1],ie=Object(i.useState)({role:null}),le=Object(s.a)(ie,2),je=le[0],be=le[1],de=function(e){e.persist(),ce(e.target.value)},ue=function(e){r(e.target.checked?n.map((function(e){return e.id})):[])},he=function(e,n){c.includes(n)?r((function(e){return e.filter((function(e){return e!==n}))})):r((function(e){return[].concat(Object(h.a)(e),[n])}))},me=function(e,n){w(n)},ke=function(e){Y(parseInt(e.target.value))},Se=function(e,n,t){return e.filter((function(e){var a=!0;if(n){var c=!1;["email","name","username"].forEach((function(t){e[t].toLowerCase().includes(n.toLowerCase())&&(c=!0)})),t.role&&e.role!==t.role&&(a=!1),c||(a=!1)}return Object.keys(t).forEach((function(n){var c=t[n];c&&e[n]!==c&&(a=!1)})),a}))}(n,te,je),Ie=function(e,n,t){return e.slice(n*t,n*t+t)}(Se,g,K),Pe=c.length>0,Te=c.length>0&&c.length<n.length,_e=c.length===n.length,We=Object(i.useState)("table_view"),Be=Object(s.a)(We,2),ze=Be[0],Me=Be[1],Fe=Object(i.useState)(!1),Ae=Object(s.a)(Fe,2),qe=Ae[0],Re=Ae[1],De=function(){Re(!0)},Le=function(){Re(!1)};return Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsxs)(S.a,{display:"flex",alignItems:"center",flexDirection:{xs:"column",sm:"row"},justifyContent:{xs:"center",sm:"space-between"},pb:3,children:[Object(xe.jsx)(ye,{onChange:function(e,n){var t=null;"all"!==n&&(t=n),be((function(e){return Object(x.a)(Object(x.a)({},e),{},{role:t})})),r([])},scrollButtons:"auto",textColor:"secondary",value:je.role||"all",variant:"scrollable",children:d.map((function(e){return Object(xe.jsx)(I.a,{value:e.value,label:e.label},e.value)}))}),Object(xe.jsxs)(P.a,{sx:{mt:{xs:2,sm:0}},value:ze,exclusive:!0,onChange:function(e,n){Me(n)},children:[Object(xe.jsx)(T.a,{disableRipple:!0,value:"table_view",children:Object(xe.jsx)(ae.a,{})}),Object(xe.jsx)(T.a,{disableRipple:!0,value:"grid_view",children:Object(xe.jsx)(ne.a,{})})]})]}),"table_view"===ze&&Object(xe.jsxs)(v.a,{children:[Object(xe.jsxs)(S.a,{p:2,children:[!Pe&&Object(xe.jsx)(_.a,{sx:{m:0},InputProps:{startAdornment:Object(xe.jsx)(W.a,{position:"start",children:Object(xe.jsx)($.a,{})})},onChange:de,placeholder:o("Search by name, email or username..."),value:te,size:"small",fullWidth:!0,margin:"normal",variant:"outlined"}),Pe&&Object(xe.jsx)(Oe,{})]}),Object(xe.jsx)(B.a,{}),0===Ie.length?Object(xe.jsx)(xe.Fragment,{children:Object(xe.jsx)(z.a,{sx:{py:10},variant:"h3",fontWeight:"normal",color:"text.secondary",align:"center",children:o("We couldn't find any users matching your search criteria")})}):Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(M.a,{children:Object(xe.jsxs)(F.a,{children:[Object(xe.jsx)(A.a,{children:Object(xe.jsxs)(q.a,{children:[Object(xe.jsx)(R.a,{padding:"checkbox",children:Object(xe.jsx)(D.a,{checked:_e,indeterminate:Te,onChange:ue})}),Object(xe.jsx)(R.a,{children:o("Username")}),Object(xe.jsx)(R.a,{children:o("Name")}),Object(xe.jsx)(R.a,{children:o("Email")}),Object(xe.jsx)(R.a,{align:"center",children:o("Posts")}),Object(xe.jsx)(R.a,{children:o("Location")}),Object(xe.jsx)(R.a,{children:o("Role")}),Object(xe.jsx)(R.a,{align:"center",children:o("Actions")})]})}),Object(xe.jsx)(L.a,{children:Ie.map((function(e){var n=c.includes(e.id);return Object(xe.jsxs)(q.a,{hover:!0,selected:n,children:[Object(xe.jsx)(R.a,{padding:"checkbox",children:Object(xe.jsx)(D.a,{checked:n,onChange:function(n){return he(0,e.id)},value:n})}),Object(xe.jsx)(R.a,{children:Object(xe.jsx)(z.a,{variant:"h5",children:e.username})}),Object(xe.jsx)(R.a,{children:Object(xe.jsxs)(S.a,{display:"flex",alignItems:"center",children:[Object(xe.jsx)(f.a,{sx:{mr:1},src:e.avatar}),Object(xe.jsxs)(S.a,{children:[Object(xe.jsx)(E.a,{variant:"h5",component:O.b,to:"/".concat(j.pathname.split("/")[1],"/management/users/single/").concat(e.id),children:e.name}),Object(xe.jsx)(z.a,{noWrap:!0,variant:"subtitle2",children:e.jobtitle})]})]})}),Object(xe.jsx)(R.a,{children:Object(xe.jsx)(z.a,{children:e.email})}),Object(xe.jsx)(R.a,{align:"center",children:Object(xe.jsx)(z.a,{fontWeight:"bold",children:e.posts})}),Object(xe.jsx)(R.a,{children:Object(xe.jsx)(z.a,{children:e.location})}),Object(xe.jsx)(R.a,{children:Ce(e.role)}),Object(xe.jsx)(R.a,{align:"center",children:Object(xe.jsxs)(z.a,{noWrap:!0,children:[Object(xe.jsx)(N.a,{title:o("View"),arrow:!0,children:Object(xe.jsx)(U.a,{component:O.b,to:"/".concat(j.pathname.split("/")[1],"/management/users/single/").concat(e.id),color:"primary",children:Object(xe.jsx)(Q.a,{fontSize:"small"})})}),Object(xe.jsx)(N.a,{title:o("Delete"),arrow:!0,children:Object(xe.jsx)(U.a,{onClick:De,color:"primary",children:Object(xe.jsx)(re.a,{fontSize:"small"})})})]})})]},e.id)}))})]})}),Object(xe.jsx)(S.a,{p:2,children:Object(xe.jsx)(J.a,{component:"div",count:Se.length,onPageChange:me,onRowsPerPageChange:ke,page:g,rowsPerPage:K,rowsPerPageOptions:[5,10,15]})})]})]}),"grid_view"===ze&&Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(v.a,{sx:{p:2,mb:3},children:Object(xe.jsxs)(S.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[0!==Ie.length&&Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(S.a,{display:"flex",alignItems:"center",children:Object(xe.jsx)(N.a,{arrow:!0,placement:"top",title:o("Select all users"),children:Object(xe.jsx)(D.a,{checked:_e,indeterminate:Te,onChange:ue})})}),Pe&&Object(xe.jsx)(S.a,{flex:1,pl:2,children:Object(xe.jsx)(Oe,{})})]}),!Pe&&Object(xe.jsx)(_.a,{sx:{my:0,ml:0!==Ie.length?2:0},fullWidth:!0,InputProps:{startAdornment:Object(xe.jsx)(W.a,{position:"start",children:Object(xe.jsx)($.a,{})})},onChange:de,placeholder:o("Search by name, email or username..."),value:te,size:"small",margin:"normal",variant:"outlined"})]})}),0===Ie.length?Object(xe.jsx)(z.a,{sx:{py:10},variant:"h3",fontWeight:"normal",color:"text.secondary",align:"center",children:o("We couldn't find any users matching your search criteria")}):Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(b.a,{container:!0,spacing:3,children:Ie.map((function(e){var n=c.includes(e.id);return Object(xe.jsx)(b.a,{item:!0,xs:12,sm:6,md:4,children:Object(xe.jsx)(fe,{className:Object(H.a)({"Mui-selected":n}),children:Object(xe.jsxs)(S.a,{sx:{position:"relative",zIndex:"2"},children:[Object(xe.jsxs)(S.a,{px:2,pt:2,display:"flex",alignItems:"flex-start",justifyContent:"space-between",children:[Ce(e.role),Object(xe.jsx)(U.a,{color:"primary",sx:{p:.5},children:Object(xe.jsx)(oe.a,{})})]}),Object(xe.jsxs)(S.a,{p:2,display:"flex",alignItems:"flex-start",children:[Object(xe.jsx)(f.a,{sx:{width:50,height:50,mr:2},src:e.avatar}),Object(xe.jsxs)(S.a,{children:[Object(xe.jsxs)(S.a,{children:[Object(xe.jsx)(E.a,{variant:"h5",component:O.b,to:"/".concat(j.pathname.split("/")[1],"/management/users/single/").concat(e.id),children:e.name})," ",Object(xe.jsxs)(z.a,{component:"span",variant:"body2",color:"text.secondary",children:["(",e.username,")"]})]}),Object(xe.jsx)(z.a,{sx:{pt:.3},variant:"subtitle2",children:e.jobtitle}),Object(xe.jsx)(z.a,{sx:{pt:1},variant:"h6",children:e.email})]})]}),Object(xe.jsx)(B.a,{}),Object(xe.jsxs)(S.a,{pl:2,py:1,pr:1,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(xe.jsxs)(z.a,{children:[Object(xe.jsx)("b",{children:e.posts})," ",o("posts")]}),Object(xe.jsx)(D.a,{checked:n,onChange:function(n){return he(0,e.id)},value:n})]})]})})},e.id)}))}),Object(xe.jsxs)(v.a,{sx:{p:2,mt:3,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(xe.jsxs)(S.a,{children:[Object(xe.jsx)(z.a,{component:"span",variant:"subtitle1",children:o("Showing")})," ",Object(xe.jsx)("b",{children:K})," ",o("of")," ",Object(xe.jsx)("b",{children:Se.length})," ",Object(xe.jsx)("b",{children:o("users")})]}),Object(xe.jsx)(J.a,{component:"div",count:Se.length,onPageChange:me,onRowsPerPageChange:ke,page:g,rowsPerPage:K,labelRowsPerPage:"",rowsPerPageOptions:[5,10,15]})]})]})]}),!ze&&Object(xe.jsx)(v.a,{sx:{textAlign:"center",p:3},children:Object(xe.jsx)(z.a,{align:"center",variant:"h4",fontWeight:"normal",color:"text.secondary",sx:{my:5},gutterBottom:!0,children:o("Choose between table or grid views for displaying the users list.")})}),Object(xe.jsx)(pe,{open:qe,maxWidth:"sm",fullWidth:!0,TransitionComponent:we,keepMounted:!0,onClose:Le,children:Object(xe.jsxs)(S.a,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",p:5,children:[Object(xe.jsx)(ge,{children:Object(xe.jsx)(X.a,{})}),Object(xe.jsxs)(z.a,{align:"center",sx:{py:4,px:6},variant:"h3",children:[o("Are you sure you want to permanently delete this user account"),"?"]}),Object(xe.jsxs)(S.a,{children:[Object(xe.jsx)(y.a,{variant:"text",size:"large",sx:{mx:1},onClick:Le,children:o("Cancel")}),Object(xe.jsx)(ve,{onClick:function(){Re(!1),l(o("The user account has been removed"),{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},TransitionComponent:k.a})},size:"large",sx:{mx:1,px:3},variant:"contained",children:o("Delete")})]})]})})]})};ke.defaultProps={users:[]};var Se=ke,Ie=t(3),Pe=t(70),Te=t(164),_e=t(249),We=t(29),Be=t(642),ze=t(669),Me=t(1536),Fe=t(741),Ae=t(1420),qe=t(274),Re=t(681),De=t.n(Re),Le=t(772),Ee=t.n(Le),Ne=Object(p.a)("input")({display:"none"}),Ue=Object(p.a)(S.a)((function(e){var n=e.theme;return"\n\n    position: relative;\n\n    .MuiAvatar-root {\n      width: ".concat(n.spacing(16),";\n      height: ").concat(n.spacing(16),";\n    }\n")})),Je=Object(p.a)(S.a)((function(e){var n=e.theme;return"\n    position: absolute;\n    width: ".concat(n.spacing(6),";\n    height: ").concat(n.spacing(6),";\n    bottom: -").concat(n.spacing(2),";\n    right: -").concat(n.spacing(2),";\n\n    .MuiIconButton-root {\n      border-radius: 100%;\n      background: ").concat(n.colors.primary.main,";\n      color: ").concat(n.palette.primary.contrastText,";\n      box-shadow: ").concat(n.colors.shadows.primary,";\n      width: ").concat(n.spacing(6),";\n      height: ").concat(n.spacing(6),";\n      padding: 0;\n  \n      &:hover {\n        background: ").concat(n.colors.primary.dark,";\n      }\n    }\n")})),Ve=[{label:"Administrator",value:"admin"},{label:"Subscriber",value:"subscriber"},{label:"Customer",value:"customer"}];var Xe=function(){var e=Object(G.a)().t,n=Object(i.useState)(!1),t=Object(s.a)(n,2),a=t[0],o=t[1],l=Object(se.b)().enqueueSnackbar,j=Object(We.a)().user,d=Object(i.useState)({public:!0}),u=Object(s.a)(d,2),h=u[0],m=u[1],O=function(e){m(Object(x.a)(Object(x.a)({},h),{},Object(Ie.a)({},e.target.name,e.target.checked)))},p=function(){o(!1)};return Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsxs)(b.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(xe.jsxs)(b.a,{item:!0,children:[Object(xe.jsx)(z.a,{variant:"h3",component:"h3",gutterBottom:!0,children:e("Users Management")}),Object(xe.jsx)(z.a,{variant:"subtitle2",children:e("All aspects related to the app users can be managed from this page")})]}),Object(xe.jsx)(b.a,{item:!0,children:Object(xe.jsx)(y.a,{sx:{mt:{xs:2,sm:0}},onClick:function(){o(!0)},variant:"contained",startIcon:Object(xe.jsx)(De.a,{fontSize:"small"}),children:e("Create user")})})]}),Object(xe.jsxs)(g.a,{fullWidth:!0,maxWidth:"md",open:a,onClose:p,children:[Object(xe.jsxs)(Be.a,{sx:{p:3},children:[Object(xe.jsx)(z.a,{variant:"h4",gutterBottom:!0,children:e("Add new user")}),Object(xe.jsx)(z.a,{variant:"subtitle2",children:e("Fill in the fields below to create and add a new user to the site")})]}),Object(xe.jsx)(Te.c,{initialValues:{email:"",username:"",first_name:"",last_name:"",password:"",submit:null},validationSchema:Pe.d().shape({username:Pe.f().max(255).required(e("The username field is required")),first_name:Pe.f().max(255).required(e("The first name field is required")),last_name:Pe.f().max(255).required(e("The last name field is required")),email:Pe.f().email(e("The email provided should be a valid email address")).max(255).required(e("The email field is required")),password:Pe.f().max(255).required(e("The password field is required"))}),onSubmit:function(){var n=Object(r.a)(c.a.mark((function n(t,a){var r,s,i,j;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.resetForm,s=a.setErrors,i=a.setStatus,j=a.setSubmitting,n.prev=1,n.next=4,Object(_e.a)(1e3);case 4:r(),i({success:!0}),j(!1),l(e("The user account was created successfully"),{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},TransitionComponent:k.a}),o(!1),n.next=16;break;case 10:n.prev=10,n.t0=n.catch(1),console.error(n.t0),i({success:!1}),s({submit:n.t0.message}),j(!1);case 16:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e,t){return n.apply(this,arguments)}}(),children:function(n){var t=n.errors,a=n.handleBlur,c=n.handleChange,r=n.handleSubmit,s=n.isSubmitting,i=n.touched,o=n.values;return Object(xe.jsxs)("form",{onSubmit:r,children:[Object(xe.jsx)(ze.a,{dividers:!0,sx:{p:3},children:Object(xe.jsxs)(b.a,{container:!0,spacing:3,children:[Object(xe.jsx)(b.a,{item:!0,xs:12,lg:7,children:Object(xe.jsxs)(b.a,{container:!0,spacing:3,children:[Object(xe.jsx)(b.a,{item:!0,xs:12,children:Object(xe.jsx)(_.a,{error:Boolean(i.username&&t.username),fullWidth:!0,helperText:i.username&&t.username,label:e("Username"),name:"username",onBlur:a,onChange:c,value:o.username,variant:"outlined"})}),Object(xe.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(xe.jsx)(_.a,{error:Boolean(i.first_name&&t.first_name),fullWidth:!0,helperText:i.first_name&&t.first_name,label:e("First name"),name:"first_name",onBlur:a,onChange:c,value:o.first_name,variant:"outlined"})}),Object(xe.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(xe.jsx)(_.a,{error:Boolean(i.last_name&&t.last_name),fullWidth:!0,helperText:i.last_name&&t.last_name,label:e("Last name"),name:"last_name",onBlur:a,onChange:c,value:o.last_name,variant:"outlined"})}),Object(xe.jsx)(b.a,{item:!0,xs:12,children:Object(xe.jsx)(_.a,{error:Boolean(i.email&&t.email),fullWidth:!0,helperText:i.email&&t.email,label:e("Email address"),name:"email",onBlur:a,onChange:c,type:"email",value:o.email,variant:"outlined"})}),Object(xe.jsx)(b.a,{item:!0,xs:12,children:Object(xe.jsx)(_.a,{error:Boolean(i.password&&t.password),fullWidth:!0,margin:"normal",helperText:i.password&&t.password,label:e("Password"),name:"password",onBlur:a,onChange:c,type:"password",value:o.password,variant:"outlined"})}),Object(xe.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(xe.jsx)(Me.a,{disablePortal:!0,options:Ve,getOptionLabel:function(e){return e.label},renderInput:function(n){return Object(xe.jsx)(_.a,Object(x.a)(Object(x.a)({fullWidth:!0},n),{},{label:e("User role")}))}})})]})}),Object(xe.jsx)(b.a,{item:!0,xs:12,lg:5,justifyContent:"center",children:Object(xe.jsxs)(S.a,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",mt:3,children:[Object(xe.jsxs)(Ue,{children:[Object(xe.jsx)(f.a,{variant:"rounded",alt:j.name,src:j.avatar}),Object(xe.jsxs)(Je,{children:[Object(xe.jsx)(Ne,{accept:"image/*",id:"icon-button-file",name:"icon-button-file",type:"file"}),Object(xe.jsx)("label",{htmlFor:"icon-button-file",children:Object(xe.jsx)(U.a,{component:"span",color:"primary",children:Object(xe.jsx)(Ee.a,{})})})]})]}),Object(xe.jsx)(B.a,{flexItem:!0,sx:{m:4}}),Object(xe.jsxs)(S.a,{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"space-between",children:[Object(xe.jsx)(z.a,{variant:"h4",sx:{pb:1},children:e("Public Profile")}),Object(xe.jsx)(Fe.a,{checked:h.public,onChange:O,name:"public",color:"primary"})]})]})})]})}),Object(xe.jsxs)(Ae.a,{sx:{p:3},children:[Object(xe.jsx)(y.a,{color:"secondary",onClick:p,children:e("Cancel")}),Object(xe.jsx)(y.a,{type:"submit",startIcon:s?Object(xe.jsx)(qe.a,{size:"1rem"}):null,disabled:Boolean(t.submit)||s,variant:"contained",children:e("Add new user")})]})]})}})]})]})};n.default=function(){var e=Object(d.a)(),n=Object(i.useState)([]),t=Object(s.a)(n,2),a=t[0],h=t[1],x=Object(i.useCallback)(Object(r.a)(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.get("/api/users");case 3:t=n.sent,e.current&&h(t.data.users),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[e]);return Object(i.useEffect)((function(){x()}),[x]),Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(l.a,{children:Object(xe.jsx)("title",{children:"Users - Management"})}),Object(xe.jsx)(u.a,{children:Object(xe.jsx)(Xe,{})}),Object(xe.jsx)(b.a,{sx:{px:4},container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:4,children:Object(xe.jsx)(b.a,{item:!0,xs:12,children:Object(xe.jsx)(Se,{users:a})})}),Object(xe.jsx)(j.a,{})]})}},677:function(e,n,t){"use strict";var a=t(16),c=t(36),r=t(4),s=t(0),i=["className","color","children"],o=Object(r.a)("span")((function(e){var n=e.theme;return"\n      background-color: ".concat(n.colors.alpha.black[5],";\n      padding: ").concat(n.spacing(.5,1),";\n      font-size: ").concat(n.typography.pxToRem(13),";\n      border-radius: ").concat(n.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(n.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(n.colors.primary.lighter,";\n          color: ").concat(n.palette.primary.main,"\n        }\n\n        &-black {\n          background-color: ").concat(n.colors.alpha.black[100],";\n          color: ").concat(n.colors.alpha.white[100],";\n        }\n        \n        &-secondary {\n          background-color: ").concat(n.colors.secondary.lighter,";\n          color: ").concat(n.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(n.colors.success.lighter,";\n          color: ").concat(n.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(n.colors.warning.lighter,";\n          color: ").concat(n.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(n.colors.error.lighter,";\n          color: ").concat(n.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(n.colors.info.lighter,";\n          color: ").concat(n.palette.info.main,"\n        }\n      }\n")}));n.a=function(e){e.className;var n=e.color,t=void 0===n?"secondary":n,r=e.children,l=Object(c.a)(e,i);return Object(s.jsx)(o,Object(a.a)(Object(a.a)({className:"MuiLabel-".concat(t)},l),{},{children:r}))}},678:function(e,n,t){"use strict";var a=t(4),c=t(41),r=t(0),s=Object(a.a)(c.a)((function(e){var n=e.theme;return"\n        padding: ".concat(n.spacing(4),";\n")}));n.a=function(e){var n=e.children;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(s,{className:"MuiPageTitle-wrapper",children:n})})}}}]);
//# sourceMappingURL=90.17160b6b.chunk.js.map