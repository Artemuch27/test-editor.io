(this["webpackJsonptokyo-white-react-admin-dashboard-js"]=this["webpackJsonptokyo-white-react-admin-dashboard-js"]||[]).push([[94],{1423:function(t,n,a){"use strict";var e=a(3),o=a(5),i=a(2),r=a(1),c=(a(10),a(15)),s=a(152),d=a(4),l=a(14),g=a(201),j=a(274),u=a(65),h=a(68);function b(t){return Object(u.a)("MuiLoadingButton",t)}var f=Object(h.a)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),v=a(0),O=["children","disabled","loading","loadingIndicator","loadingPosition","variant"],x=Object(d.a)(g.a,{shouldForwardProp:function(t){return function(t){return"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t}(t)||"classes"===t},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(t,n){return[n.root,n.startIconLoadingStart&&Object(e.a)({},"& .".concat(f.startIconLoadingStart),n.startIconLoadingStart),n.endIconLoadingEnd&&Object(e.a)({},"& .".concat(f.endIconLoadingEnd),n.endIconLoadingEnd)]}})((function(t){var n=t.ownerState,a=t.theme;return Object(i.a)(Object(e.a)({},"& .".concat(f.startIconLoadingStart,", & .").concat(f.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0}),"center"===n.loadingPosition&&Object(e.a)({transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short})},"&.".concat(f.loading),{color:"transparent"}),"start"===n.loadingPosition&&n.fullWidth&&Object(e.a)({},"& .".concat(f.startIconLoadingStart,", & .").concat(f.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===n.loadingPosition&&n.fullWidth&&Object(e.a)({},"& .".concat(f.startIconLoadingStart,", & .").concat(f.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0,marginLeft:-8}))})),m=Object(d.a)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(t,n){var a=t.ownerState;return[n.loadingIndicator,n["loadingIndicator".concat(Object(c.a)(a.loadingPosition))]]}})((function(t){var n=t.theme,a=t.ownerState;return Object(i.a)({position:"absolute",visibility:"visible",display:"flex"},"start"===a.loadingPosition&&("outlined"===a.variant||"contained"===a.variant)&&{left:14},"start"===a.loadingPosition&&"text"===a.variant&&{left:6},"center"===a.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:n.palette.action.disabled},"end"===a.loadingPosition&&("outlined"===a.variant||"contained"===a.variant)&&{right:14},"end"===a.loadingPosition&&"text"===a.variant&&{right:6},"start"===a.loadingPosition&&a.fullWidth&&{position:"relative",left:-10},"end"===a.loadingPosition&&a.fullWidth&&{position:"relative",right:-10})})),p=Object(v.jsx)(j.a,{color:"inherit",size:16}),I=r.forwardRef((function(t,n){var a=Object(l.a)({props:t,name:"MuiLoadingButton"}),e=a.children,d=a.disabled,g=void 0!==d&&d,j=a.loading,u=void 0!==j&&j,h=a.loadingIndicator,f=void 0===h?p:h,I=a.loadingPosition,y=void 0===I?"center":I,w=a.variant,L=void 0===w?"text":w,P=Object(o.a)(a,O),S=Object(i.a)({},a,{disabled:g,loading:u,loadingIndicator:f,loadingPosition:y,variant:L}),W=function(t){var n=t.loading,a=t.loadingPosition,e=t.classes,o={root:["root",n&&"loading"],startIcon:[n&&"startIconLoading".concat(Object(c.a)(a))],endIcon:[n&&"endIconLoading".concat(Object(c.a)(a))],loadingIndicator:["loadingIndicator",n&&"loadingIndicator".concat(Object(c.a)(a))]},r=Object(s.a)(o,b,e);return Object(i.a)({},e,r)}(S);return Object(v.jsx)(x,Object(i.a)({disabled:g||u,ref:n},P,{variant:L,classes:W,ownerState:S,children:"end"===S.loadingPosition?Object(v.jsxs)(r.Fragment,{children:[e,u&&Object(v.jsx)(m,{className:W.loadingIndicator,ownerState:S,children:f})]}):Object(v.jsxs)(r.Fragment,{children:[u&&Object(v.jsx)(m,{className:W.loadingIndicator,ownerState:S,children:f}),e]})}))}));n.a=I},1476:function(t,n,a){"use strict";a.r(n);var e=a(6),o=a(1),i=a(4),r=a(653),c=a(41),s=a(57),d=a(581),l=a(201),g=a(203),j=a(771),u=a.n(j),h=a(1423),b=a(134),f=a(0),v=Object(i.a)(r.a)((function(t){var n=t.theme;return"\n    background: ".concat(n.colors.gradients.black1,";\n")})),O=Object(i.a)(c.a)((function(){return"\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"})),x=Object(i.a)(s.a)((function(t){var n=t.theme;return"\n      color: ".concat(n.colors.alpha.trueWhite[100],";\n")})),m=Object(i.a)(s.a)((function(t){var n=t.theme;return"\n      color: ".concat(n.colors.alpha.trueWhite[70],";\n")}));n.default=function(){var t=Object(b.a)().t,n=Object(o.useState)(!1),a=Object(e.a)(n,2),i=a[0],j=a[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g.a,{children:Object(f.jsx)("title",{children:"Status - 500"})}),Object(f.jsx)(O,{children:Object(f.jsxs)(r.a,{container:!0,sx:{height:"100%"},alignItems:"stretch",spacing:0,children:[Object(f.jsx)(r.a,{xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:Object(f.jsx)(d.a,{maxWidth:"sm",children:Object(f.jsxs)(c.a,{textAlign:"center",children:[Object(f.jsx)("img",{alt:"500",height:260,src:"/static/images/status/500.svg"}),Object(f.jsx)(s.a,{variant:"h2",sx:{my:2},children:t("There was an error, please try again later")}),Object(f.jsx)(s.a,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:4},children:t("The server encountered an internal error and was not able to complete your request")}),Object(f.jsx)(h.a,{onClick:function(){j(!0)},loading:i,variant:"outlined",color:"primary",startIcon:Object(f.jsx)(u.a,{}),children:t("Refresh view")}),Object(f.jsx)(l.a,{href:"/overview",variant:"contained",sx:{ml:1},children:t("Go back")})]})})}),Object(f.jsx)(v,{sx:{display:{xs:"none",md:"flex"}},xs:12,md:6,alignItems:"center",display:"flex",justifyContent:"center",item:!0,children:Object(f.jsx)(d.a,{maxWidth:"sm",children:Object(f.jsxs)(c.a,{textAlign:"center",children:[Object(f.jsx)(x,{variant:"h1",sx:{my:2},children:t("Tokyo White React Javascript Admin Dashboard")}),Object(f.jsx)(m,{variant:"h4",fontWeight:"normal",sx:{mb:4},children:t("High performance React template built with lots of powerful MUI (Material-UI) components across multiple product niches for fast & perfect apps development processes.")}),Object(f.jsx)(l.a,{href:"/overview",size:"large",variant:"contained",children:t("Overview")})]})})})]})})]})}},771:function(t,n,a){"use strict";var e=a(24);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(a(25)),i=a(0),r=(0,o.default)((0,i.jsx)("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"}),"RefreshTwoTone");n.default=r}}]);
//# sourceMappingURL=94.fc883e9f.chunk.js.map