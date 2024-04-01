(this["webpackJsonptokyo-white-react-admin-dashboard-js"]=this["webpackJsonptokyo-white-react-admin-dashboard-js"]||[]).push([[63],{1119:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var c=t(6),r=t(1),a=t(347),o=t(352),i=t(109);function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(a.a)(),s="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,l=Object(o.a)({name:"MuiUseMediaQuery",props:n,theme:t}),d=l.defaultMatches,j=void 0!==d&&d,u=l.matchMedia,b=void 0===u?s?window.matchMedia:null:u,h=l.noSsr,x=void 0!==h&&h,O=l.ssrMatchMedia,p=void 0===O?null:O;var f="function"===typeof e?e(t):e;f=f.replace(/^@media( ?)/m,"");var m=r.useState((function(){return x&&s?b(f).matches:p?p(f).matches:j})),g=Object(c.a)(m,2),v=g[0],y=g[1];return Object(i.a)((function(){var e=!0;if(s){var n=b(f),t=function(){e&&y(n.matches)};return t(),n.addListener(t),function(){e=!1,n.removeListener(t)}}}),[f,b,s]),v}},1538:function(e,n,t){"use strict";t.r(n);var c=t(13),r=t.n(c),a=t(21),o=t(6),i=t(1),s=t(23),l=t(203),d=t(279),j=t(678),u=t(653),b=t(137),h=t(134),x=t(31),O=t(9),p=t(57),f=t(201),m=t(681),g=t.n(m),v=t(0);var y=function(){var e=Object(h.a)().t,n=Object(x.g)();return Object(v.jsxs)(u.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(v.jsxs)(u.a,{item:!0,children:[Object(v.jsx)(p.a,{variant:"h3",component:"h3",gutterBottom:!0,children:e("Products")}),Object(v.jsx)(p.a,{variant:"subtitle2",children:e("Use this page to manage your products , the fast and easy way.")})]}),Object(v.jsx)(u.a,{item:!0,children:Object(v.jsx)(f.a,{sx:{mt:{xs:2,sm:0}},component:O.b,to:"/".concat(n.pathname.split("/")[1],"/management/commerce/products/create"),variant:"contained",startIcon:Object(v.jsx)(g.a,{fontSize:"small"}),children:e("Create product")})})]})},w=t(27),k=t(16),C=t(713),E=t.n(C),M=t(4),P=t(639),S=t(662),z=t(572),T=t(46),I=t(1119),L=t(823),R=t(278),_=t(41),D=t(180),W=t(668),F=t(1521),V=t(378),B=t(717),N=t(708),A=t(716),H=t(709),J=t(742),U=t(275),Y=t(710),$=t(133),q=t(153),Q=t(578),G=t(698),K=t.n(G),X=t(702),Z=t.n(X),ee=t(677),ne=t(686),te=t.n(ne),ce=t(281),re=t(37),ae=t(880),oe=t.n(ae),ie=t(52),se=t.n(ie),le=t(869),de=Object(M.a)(P.a)((function(){return"\n      .MuiDialog-paper {\n        overflow: visible;\n      }\n"})),je=Object(M.a)("img")((function(e){var n=e.theme;return"\n      width: ".concat(n.spacing(8),";\n      height: auto;\n")})),ue=Object(M.a)(S.a)((function(e){var n=e.theme;return"\n      background-color: ".concat(n.colors.error.lighter,";\n      color: ").concat(n.colors.error.main,";\n      width: ").concat(n.spacing(12),";\n      height: ").concat(n.spacing(12),";\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(n.typography.pxToRem(45),";\n      }\n")})),be=Object(M.a)(f.a)((function(e){var n=e.theme;return"\n     background: ".concat(n.colors.error.main,";\n     color: ").concat(n.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(n.colors.error.dark,";\n     }\n    ")})),he=Object(i.forwardRef)((function(e,n){return Object(v.jsx)(z.a,Object(k.a)({direction:"down",ref:n},e))})),xe=function(e){var n=e.products,t=Object(i.useState)([]),c=Object(o.a)(t,2),r=c[0],a=c[1],s=Object(h.a)().t,l=Object(ce.b)().enqueueSnackbar,d=Object(T.a)(),j=Object(x.g)(),u=Object(i.useState)(0),b=Object(o.a)(u,2),m=b[0],g=b[1],y=Object(i.useState)(5),k=Object(o.a)(y,2),C=k[0],M=k[1],P=Object(i.useState)(""),S=Object(o.a)(P,2),z=S[0],G=S[1],X=function(e,n){g(n)},ne=function(e){M(parseInt(e.target.value))},ae=function(e,n){return e.filter((function(e){var t=!0;if(n){var c=!1;["name"].forEach((function(t){e[t].toLowerCase().includes(n.toLowerCase())&&(c=!0)})),c||(t=!1)}return t}))}(n,z),ie=function(e,n,t){return e.slice(n*t,n*t+t)}(ae,m,C),xe=r.length>0,Oe=r.length>0&&r.length<n.length,pe=r.length===n.length,fe=Object(I.a)(d.breakpoints.down("md")),me=Object(i.useState)(!1),ge=Object(o.a)(me,2),ve=ge[0],ye=ge[1],we=function(){ye(!0)},ke=function(){ye(!1)};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(R.a,{children:[Object(v.jsxs)(_.a,{display:"flex",alignItems:"center",children:[xe&&Object(v.jsx)(_.a,{flex:1,p:2,children:Object(v.jsx)(le.a,{})}),!xe&&Object(v.jsxs)(_.a,{flex:1,p:2,display:{xs:"block",md:"flex"},alignItems:"center",justifyContent:"space-between",children:[Object(v.jsx)(_.a,{sx:{mb:{xs:2,md:0}},children:Object(v.jsx)(D.a,{size:"small",fullWidth:fe,onChange:function(e){e.persist(),G(e.target.value)},value:z,InputProps:{startAdornment:Object(v.jsx)(W.a,{position:"start",children:Object(v.jsx)(se.a,{})})},placeholder:s("Search by product name...")})}),Object(v.jsx)(F.a,{component:"div",count:ae.length,onPageChange:X,onRowsPerPageChange:ne,page:m,rowsPerPage:C,rowsPerPageOptions:[5,10,15]})]})]}),Object(v.jsx)(V.a,{}),0===ie.length?Object(v.jsx)(p.a,{sx:{py:10},variant:"h3",fontWeight:"normal",color:"text.secondary",align:"center",children:s("We couldn't find any products matching your search criteria")}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(B.a,{children:Object(v.jsxs)(N.a,{children:[Object(v.jsx)(A.a,{children:Object(v.jsxs)(H.a,{children:[Object(v.jsx)(J.a,{padding:"checkbox",children:Object(v.jsx)(U.a,{checked:pe,indeterminate:Oe,onChange:function(e){a(e.target.checked?n.map((function(e){return e.id})):[])}})}),Object(v.jsx)(J.a,{children:s("Product name")}),Object(v.jsx)(J.a,{children:s("Price")}),Object(v.jsx)(J.a,{align:"center",children:s("Stock")}),Object(v.jsx)(J.a,{align:"center",children:s("Rating")}),Object(v.jsx)(J.a,{align:"center",children:s("Orders")}),Object(v.jsx)(J.a,{children:s("Categories")}),Object(v.jsx)(J.a,{align:"center",children:s("Actions")})]})}),Object(v.jsx)(Y.a,{children:ie.map((function(e){var n=r.includes(e.id);return Object(v.jsxs)(H.a,{hover:!0,selected:n,children:[Object(v.jsx)(J.a,{padding:"checkbox",children:Object(v.jsx)(U.a,{checked:n,onChange:function(n){return t=e.id,void(r.includes(t)?a((function(e){return e.filter((function(e){return e!==t}))})):a((function(e){return[].concat(Object(w.a)(e),[t])})));var t},value:n})}),Object(v.jsx)(J.a,{children:Object(v.jsxs)(_.a,{display:"flex",alignItems:"center",children:[Object(v.jsx)(je,{src:e.images[0]}),Object(v.jsxs)(_.a,{pl:1,sx:{width:250},children:[Object(v.jsx)($.a,{component:O.b,to:"/".concat(j.pathname.split("/")[1],"/management/commerce/products/single/").concat(e.id),variant:"h5",children:e.name}),Object(v.jsx)(p.a,{variant:"subtitle2",noWrap:!0,children:e.summary})]})]})}),Object(v.jsxs)(J.a,{children:[Object(v.jsxs)(p.a,{sx:{textDecorationLine:0!==e.sale_price?"line-through":""},children:["$",E()(e.price).format("0,0.00")]}),0!==e.sale_price&&Object(v.jsx)(p.a,{children:Object(v.jsxs)(re.a,{color:"error",children:["$",E()(e.sale_price).format("0,0.00")]})})]}),Object(v.jsx)(J.a,{align:"center",children:Object(v.jsx)(ee.a,{color:"success",children:Object(v.jsx)("b",{children:e.stock})})}),Object(v.jsx)(J.a,{align:"center",children:Object(v.jsxs)(_.a,{display:"flex",alignItems:"center",children:[Object(v.jsx)(re.a,{color:"warning",children:Object(v.jsx)(oe.a,{fontSize:"small"})}),Object(v.jsx)(p.a,{variant:"h5",sx:{pl:.5},children:e.rating})]})}),Object(v.jsx)(J.a,{align:"center",children:e.orders}),Object(v.jsx)(J.a,{children:e.categories.map((function(e){return Object(v.jsxs)("span",{children:[Object(v.jsx)($.a,{href:"#",children:e}),","," "]},e)}))}),Object(v.jsx)(J.a,{align:"center",children:Object(v.jsxs)(p.a,{noWrap:!0,children:[Object(v.jsx)(q.a,{title:s("View"),arrow:!0,children:Object(v.jsx)(Q.a,{component:O.b,to:"/".concat(j.pathname.split("/")[1],"/management/commerce/products/single/").concat(e.id),color:"primary",children:Object(v.jsx)(Z.a,{fontSize:"small"})})}),Object(v.jsx)(q.a,{title:s("Delete"),arrow:!0,children:Object(v.jsx)(Q.a,{onClick:we,color:"primary",children:Object(v.jsx)(te.a,{fontSize:"small"})})})]})})]},e.id)}))})]})}),Object(v.jsx)(_.a,{p:2,children:Object(v.jsx)(F.a,{component:"div",count:ae.length,onPageChange:X,onRowsPerPageChange:ne,page:m,rowsPerPage:C,rowsPerPageOptions:[5,10,15]})})]})]}),Object(v.jsx)(de,{open:ve,maxWidth:"sm",fullWidth:!0,TransitionComponent:he,keepMounted:!0,onClose:ke,children:Object(v.jsxs)(_.a,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",p:5,children:[Object(v.jsx)(ue,{children:Object(v.jsx)(K.a,{})}),Object(v.jsxs)(p.a,{align:"center",sx:{pt:4,px:6},variant:"h3",children:[s("Do you really want to delete this product"),"?"]}),Object(v.jsx)(p.a,{align:"center",sx:{pt:2,pb:4,px:6},fontWeight:"normal",color:"text.secondary",variant:"h4",children:s("You won't be able to revert after deletion")}),Object(v.jsxs)(_.a,{children:[Object(v.jsx)(f.a,{variant:"text",size:"large",sx:{mx:1},onClick:ke,children:s("Cancel")}),Object(v.jsx)(be,{onClick:function(){ye(!1),l(s("You successfully deleted the product"),{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},TransitionComponent:L.a})},size:"large",sx:{mx:1,px:3},variant:"contained",children:s("Delete")})]})]})})]})};xe.defaultProps={products:[]};var Oe=xe;n.default=function(){var e=Object(b.a)(),n=Object(i.useState)([]),t=Object(o.a)(n,2),c=t[0],h=t[1],x=Object(i.useCallback)(Object(a.a)(r.a.mark((function n(){var t;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.get("/api/products");case 3:t=n.sent,e.current&&h(t.data.products),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[e]);return Object(i.useEffect)((function(){x()}),[x]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(l.a,{children:Object(v.jsx)("title",{children:"Products - Management"})}),Object(v.jsx)(j.a,{children:Object(v.jsx)(y,{})}),Object(v.jsx)(u.a,{sx:{px:4},container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:4,children:Object(v.jsx)(u.a,{item:!0,xs:12,children:Object(v.jsx)(Oe,{products:c})})}),Object(v.jsx)(d.a,{})]})}},677:function(e,n,t){"use strict";var c=t(16),r=t(36),a=t(4),o=t(0),i=["className","color","children"],s=Object(a.a)("span")((function(e){var n=e.theme;return"\n      background-color: ".concat(n.colors.alpha.black[5],";\n      padding: ").concat(n.spacing(.5,1),";\n      font-size: ").concat(n.typography.pxToRem(13),";\n      border-radius: ").concat(n.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(n.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(n.colors.primary.lighter,";\n          color: ").concat(n.palette.primary.main,"\n        }\n\n        &-black {\n          background-color: ").concat(n.colors.alpha.black[100],";\n          color: ").concat(n.colors.alpha.white[100],";\n        }\n        \n        &-secondary {\n          background-color: ").concat(n.colors.secondary.lighter,";\n          color: ").concat(n.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(n.colors.success.lighter,";\n          color: ").concat(n.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(n.colors.warning.lighter,";\n          color: ").concat(n.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(n.colors.error.lighter,";\n          color: ").concat(n.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(n.colors.info.lighter,";\n          color: ").concat(n.palette.info.main,"\n        }\n      }\n")}));n.a=function(e){e.className;var n=e.color,t=void 0===n?"secondary":n,a=e.children,l=Object(r.a)(e,i);return Object(o.jsx)(s,Object(c.a)(Object(c.a)({className:"MuiLabel-".concat(t)},l),{},{children:a}))}},678:function(e,n,t){"use strict";var c=t(4),r=t(41),a=t(0),o=Object(c.a)(r.a)((function(e){var n=e.theme;return"\n        padding: ".concat(n.spacing(4),";\n")}));n.a=function(e){var n=e.children;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(o,{className:"MuiPageTitle-wrapper",children:n})})}},698:function(e,n,t){"use strict";var c=t(24);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(25)),a=t(0),o=(0,r.default)((0,a.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");n.default=o},702:function(e,n,t){"use strict";var c=t(24);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(25)),a=t(0),o=(0,r.default)((0,a.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"LaunchTwoTone");n.default=o},823:function(e,n,t){"use strict";var c=t(2),r=t(5),a=t(1),o=(t(10),t(273)),i=t(60),s=t(46),l=t(71),d=t(30),j=t(0),u=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],b={entering:{transform:"none"},entered:{transform:"none"}},h={enter:i.b.enteringScreen,exit:i.b.leavingScreen},x=a.forwardRef((function(e,n){var t=e.addEndListener,i=e.appear,x=void 0===i||i,O=e.children,p=e.easing,f=e.in,m=e.onEnter,g=e.onEntered,v=e.onEntering,y=e.onExit,w=e.onExited,k=e.onExiting,C=e.style,E=e.timeout,M=void 0===E?h:E,P=e.TransitionComponent,S=void 0===P?o.a:P,z=Object(r.a)(e,u),T=Object(s.a)(),I=a.useRef(null),L=Object(d.a)(O.ref,n),R=Object(d.a)(I,L),_=function(e){return function(n){if(e){var t=I.current;void 0===n?e(t):e(t,n)}}},D=_(v),W=_((function(e,n){Object(l.b)(e);var t=Object(l.a)({style:C,timeout:M,easing:p},{mode:"enter"});e.style.webkitTransition=T.transitions.create("transform",t),e.style.transition=T.transitions.create("transform",t),m&&m(e,n)})),F=_(g),V=_(k),B=_((function(e){var n=Object(l.a)({style:C,timeout:M,easing:p},{mode:"exit"});e.style.webkitTransition=T.transitions.create("transform",n),e.style.transition=T.transitions.create("transform",n),y&&y(e)})),N=_(w);return Object(j.jsx)(S,Object(c.a)({appear:x,in:f,nodeRef:I,onEnter:W,onEntered:F,onEntering:D,onExit:B,onExited:N,onExiting:V,addEndListener:function(e){t&&t(I.current,e)},timeout:M},z,{children:function(e,n){return a.cloneElement(O,Object(c.a)({style:Object(c.a)({transform:"scale(0)",visibility:"exited"!==e||f?void 0:"hidden"},b[e],C,O.props.style),ref:R},n))}}))}));n.a=x},869:function(e,n,t){"use strict";var c=t(6),r=t(1),a=t(4),o=t(201),i=t(41),s=t(57),l=t(578),d=t(373),j=t(580),u=t(178),b=t(177),h=t(134),x=t(686),O=t.n(x),p=t(680),f=t.n(p),m=t(0),g=Object(a.a)(o.a)((function(e){var n=e.theme;return"\n     background: ".concat(n.colors.error.main,";\n     color: ").concat(n.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(n.colors.error.dark,";\n     }\n    ")}));n.a=function(){var e=Object(r.useState)(!1),n=Object(c.a)(e,2),t=n[0],a=n[1],o=Object(r.useRef)(null),x=Object(h.a)().t;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(i.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(m.jsxs)(i.a,{display:"flex",alignItems:"center",children:[Object(m.jsxs)(s.a,{variant:"h5",color:"text.secondary",children:[x("Bulk actions"),":"]}),Object(m.jsx)(g,{sx:{ml:1},startIcon:Object(m.jsx)(O.a,{}),variant:"contained",children:x("Delete")})]}),Object(m.jsx)(l.a,{color:"primary",onClick:function(){a(!0)},ref:o,sx:{ml:2,p:1},children:Object(m.jsx)(f.a,{})})]}),Object(m.jsx)(d.a,{disableScrollLock:!0,keepMounted:!0,anchorEl:o.current,open:t,onClose:function(){a(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:Object(m.jsxs)(j.a,{sx:{p:1},component:"nav",children:[Object(m.jsx)(u.a,{button:!0,children:Object(m.jsx)(b.a,{primary:x("Bulk delete selected")})}),Object(m.jsx)(u.a,{button:!0,children:Object(m.jsx)(b.a,{primary:x("Bulk edit selected")})})]})})]})}},880:function(e,n,t){"use strict";var c=t(24);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(25)),a=t(0),o=(0,r.default)([(0,a.jsx)("path",{d:"M12.58 15.07c-.2.92-.94 1.96-2.38 2.31 2.9 2.37 5.64.2 5.56-2.32 0-2.05-2.95-3.21-3.27-5.08-.87 2.26.41 3.66.09 5.09z",opacity:".3"},"0"),(0,a.jsx)("path",{d:"M19.48 12.35c-1.57-4.08-7.16-4.3-5.81-10.23.1-.44-.37-.78-.75-.55C9.29 3.71 6.68 8 8.87 13.62c.18.46-.36.89-.75.59-1.81-1.37-2-3.34-1.84-4.75.06-.52-.62-.77-.91-.34C4.69 10.16 4 11.84 4 14.37c.38 5.6 5.11 7.32 6.81 7.54 2.43.31 5.06-.14 6.95-1.87 2.08-1.93 2.84-5.01 1.72-7.69zm-9.28 5.03c1.44-.35 2.18-1.39 2.38-2.31.33-1.43-.96-2.83-.09-5.09.33 1.87 3.27 3.04 3.27 5.08.08 2.53-2.66 4.7-5.56 2.32z"},"1")],"LocalFireDepartmentTwoTone");n.default=o}}]);
//# sourceMappingURL=63.0c49d48b.chunk.js.map