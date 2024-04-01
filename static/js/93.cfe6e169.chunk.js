(this["webpackJsonptokyo-white-react-admin-dashboard-js"]=this["webpackJsonptokyo-white-react-admin-dashboard-js"]||[]).push([[93],{1508:function(e,t,a){"use strict";a.r(t);var c=a(6),n=a(1),r=a(203),s=a(279),i=a(4),o=a(41),l=a(662),j=a(46),b=a(648),x=a(664),d=a(278),h=a(653),p=a(378),O=a(57),m=a(201),u=a(134),g=a(74),v=a.n(g),y=a(678),f=a(375),w=a(373),k=a(658),S=a(29),C=a(847),T=a.n(C),z=a(154),I=a.n(z),B=a(736),R=a.n(B),V=a(0),M=Object(i.a)(l.a)((function(e){var t=e.theme;return"\n      width: ".concat(t.spacing(8),";\n      height: ").concat(t.spacing(8),";\n      color: ").concat(t.colors.primary.main,";\n      margin-right: ").concat(t.spacing(2),";\n      background: ").concat("dark"===t.palette.mode?t.colors.alpha.trueWhite[10]:t.colors.alpha.white[50],";\n      box-shadow: ").concat("dark"===t.palette.mode?"0 1px 0 ".concat(Object(f.a)(Object(f.e)(t.colors.primary.main,.8),.2),", 0px 2px 4px -3px rgba(0, 0, 0, 0.3), 0px 5px 16px -4px rgba(0, 0, 0, .5)"):"0px 2px 4px -3px ".concat(Object(f.a)(t.colors.alpha.black[100],.4),", 0px 5px 16px -4px ").concat(Object(f.a)(t.colors.alpha.black[100],.2)),";\n")}));var D=function(){var e=Object(u.a)().t,t=Object(S.a)().user,a=[{value:"today",text:e("Today")},{value:"yesterday",text:e("Yesterday")},{value:"last_month",text:e("Last month")},{value:"last_year",text:e("Last year")}],r=Object(n.useState)(!1),s=Object(c.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(a[3].text),b=Object(c.a)(j,2),x=b[0],d=b[1],h=Object(n.useRef)(null);return Object(V.jsxs)(o.a,{display:"flex",alignItems:{xs:"stretch",md:"center"},flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",children:[Object(V.jsxs)(o.a,{display:"flex",alignItems:"center",children:[Object(V.jsx)(M,{variant:"rounded",children:Object(V.jsx)(R.a,{fontSize:"large"})}),Object(V.jsxs)(o.a,{children:[Object(V.jsxs)(O.a,{variant:"h3",component:"h3",gutterBottom:!0,children:[e("Welcome"),", ",t.name,"!"]}),Object(V.jsx)(O.a,{variant:"subtitle2",children:e("Manage your day to day tasks with style! Enjoy a well built UI system.")})]})]}),Object(V.jsxs)(o.a,{mt:{xs:3,md:0},children:[Object(V.jsx)(m.a,{variant:"outlined",ref:h,onClick:function(){return l(!0)},sx:{mr:1},endIcon:Object(V.jsx)(I.a,{fontSize:"small"}),children:x}),Object(V.jsx)(w.a,{disableScrollLock:!0,anchorEl:h.current,onClose:function(){return l(!1)},open:i,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:a.map((function(e){return Object(V.jsx)(k.a,{onClick:function(){d(e.text),l(!1)},children:e.text},e.value)}))}),Object(V.jsx)(m.a,{variant:"contained",startIcon:Object(V.jsx)(T.a,{}),children:e("Export")})]})]})},W=a(701),P=a(575),H=a(153),L=a(663),A=a(629),F=a(725),q=a(630),J=a(37),E=Object(i.a)("span")((function(e){var t=e.theme;return"\n    border-radius: 22px;\n    width: ".concat(t.spacing(1.5),";\n    height: ").concat(t.spacing(1.5),";\n    display: inline-block;\n    margin-right: ").concat(t.spacing(.5),";\n    border: ").concat(t.colors.alpha.white[100]," solid 2px;\n")})),N=Object(i.a)(l.a)((function(e){var t=e.theme;return"\n    width: ".concat(t.spacing(7),";\n    height: ").concat(t.spacing(7),";\n")})),Y=Object(i.a)(W.a)((function(e){var t=e.theme;return"\n        flex-grow: 1;\n        height: 10px;\n        \n        &.MuiLinearProgress-root {\n          background-color: ".concat(t.colors.alpha.black[10],";\n        }\n        \n        .MuiLinearProgress-bar {\n          border-radius: ").concat(t.general.borderRadiusXl,";\n        }\n")}));var _=function(){var e=Object(u.a)().t,t=Object(j.a)();return Object(V.jsxs)(h.a,{container:!0,spacing:4,children:[Object(V.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(V.jsxs)(o.a,{children:[Object(V.jsxs)(o.a,{display:"flex",alignItems:"center",pb:3,children:[Object(V.jsx)(P.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},overlap:"circular",badgeContent:Object(V.jsx)(H.a,{arrow:!0,placement:"top",title:"".concat(e("Offline since")," ").concat(Object(L.a)(Object(A.a)(new Date,14),new Date,{addSuffix:!0})),children:Object(V.jsx)(E,{style:{background:"".concat(t.colors.error.main)}})}),children:Object(V.jsx)(N,{alt:"Remy Sharp",src:"/static/images/avatars/4.jpg"})}),Object(V.jsxs)(o.a,{sx:{ml:1.5},children:[Object(V.jsx)(O.a,{variant:"h4",noWrap:!0,gutterBottom:!0,children:"Hanna Siphron"}),Object(V.jsx)(O.a,{variant:"subtitle2",noWrap:!0,children:e("Web Dev Support Team")})]})]}),Object(V.jsxs)(O.a,{variant:"subtitle2",gutterBottom:!0,children:[Object(V.jsx)(J.a,{color:"black",children:"4"})," ",e("out of")," ",Object(V.jsx)(J.a,{color:"black",children:"6"})," ",e("tasks completed")]}),Object(V.jsx)(Y,{value:65,color:"primary",variant:"determinate"})]})}),Object(V.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(V.jsxs)(o.a,{children:[Object(V.jsxs)(o.a,{display:"flex",alignItems:"center",pb:3,children:[Object(V.jsx)(P.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},overlap:"circular",badgeContent:Object(V.jsx)(H.a,{arrow:!0,placement:"top",title:"".concat(e("Online since")," ").concat(Object(L.a)(Object(F.a)(new Date,6),new Date,{addSuffix:!0})),children:Object(V.jsx)(E,{style:{background:"".concat(t.colors.success.main)}})}),children:Object(V.jsx)(N,{alt:"Ann Saris",src:"/static/images/avatars/3.jpg"})}),Object(V.jsxs)(o.a,{sx:{ml:1.5},children:[Object(V.jsx)(O.a,{variant:"h4",noWrap:!0,gutterBottom:!0,children:"Ann Saris"}),Object(V.jsx)(O.a,{variant:"subtitle2",noWrap:!0,children:e("Senior Book Keeper")})]})]}),Object(V.jsxs)(O.a,{variant:"subtitle2",gutterBottom:!0,children:[Object(V.jsx)(J.a,{color:"black",children:"2"})," ",e("out of")," ",Object(V.jsx)(J.a,{color:"black",children:"8"})," ",e("tasks completed")]}),Object(V.jsx)(Y,{value:25,color:"primary",variant:"determinate"})]})}),Object(V.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(V.jsxs)(o.a,{children:[Object(V.jsxs)(o.a,{display:"flex",alignItems:"center",pb:3,children:[Object(V.jsx)(P.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},overlap:"circular",badgeContent:Object(V.jsx)(H.a,{arrow:!0,placement:"top",title:"".concat(e("Offline since")," ").concat(Object(L.a)(Object(q.a)(new Date,7),new Date,{addSuffix:!0})),children:Object(V.jsx)(E,{style:{background:"".concat(t.colors.error.main)}})}),children:Object(V.jsx)(N,{alt:"James Stanton",src:"/static/images/avatars/5.jpg"})}),Object(V.jsxs)(o.a,{sx:{ml:1.5},children:[Object(V.jsx)(O.a,{variant:"h4",noWrap:!0,gutterBottom:!0,children:"James Stanton"}),Object(V.jsx)(O.a,{variant:"subtitle2",noWrap:!0,children:e("Phone Pre-Sales Assistant")})]})]}),Object(V.jsxs)(O.a,{variant:"subtitle2",gutterBottom:!0,children:[Object(V.jsx)(J.a,{color:"black",children:"10"})," ",e("out of")," ",Object(V.jsx)(J.a,{color:"black",children:"20"})," ",e("tasks completed")]}),Object(V.jsx)(Y,{value:50,color:"primary",variant:"determinate"})]})})]})},U=a(44),X=a.n(U),G=a(202),K=a.n(G),Q=Object(i.a)("span")((function(e){var t=e.theme;return"\n    border-radius: 22px;\n    background: ".concat(t.colors.primary.lighter,";\n    width: ").concat(t.spacing(1.5),";\n    height: ").concat(t.spacing(1.5),";\n    display: inline-block;\n    margin-right: ").concat(t.spacing(.5),";\n")})),$=Object(i.a)("span")((function(e){var t=e.theme;return"\n    border-radius: 22px;\n    background: ".concat(t.colors.primary.main,";\n    width: ").concat(t.spacing(1.5),";\n    height: ").concat(t.spacing(1.5),";\n    display: inline-block;\n    margin-right: ").concat(t.spacing(.5),";\n")}));var Z=function(){var e=Object(u.a)().t,t=Object(j.a)(),a={chart:{background:"transparent",type:"bar",toolbar:{show:!1},zoom:{enabled:!1}},plotOptions:{bar:{horizontal:!1,borderRadius:6,columnWidth:"35%"}},colors:[t.colors.primary.main,Object(f.a)(t.colors.primary.main,.5)],dataLabels:{enabled:!1},fill:{opacity:1},theme:{mode:t.palette.mode},stroke:{show:!0,width:3,colors:["transparent"]},legend:{show:!1},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],grid:{strokeDashArray:5,borderColor:t.palette.divider},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t.palette.text.secondary}}},yaxis:{tickAmount:6,axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t.palette.text.secondary}}},tooltip:{x:{show:!1},marker:{show:!1},y:{formatter:function(e){return"$ ".concat(e,"k")}},theme:"dark"}},r=[{value:"today",text:e("Today")},{value:"yesterday",text:e("Yesterday")},{value:"last_month",text:e("Last month")},{value:"last_year",text:e("Last year")}],s=Object(n.useRef)(null),i=Object(n.useState)(!1),l=Object(c.a)(i,2),b=l[0],x=l[1],d=Object(n.useState)(r[3].text),h=Object(c.a)(d,2),p=h[0],g=h[1];return Object(V.jsxs)(o.a,{children:[Object(V.jsxs)(o.a,{mb:2,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(O.a,{variant:"h4",children:e("Tasks Analytics")}),Object(V.jsx)(m.a,{size:"small",variant:"contained",color:"secondary",ref:s,onClick:function(){return x(!0)},endIcon:Object(V.jsx)(X.a,{fontSize:"small"}),children:p}),Object(V.jsx)(w.a,{disableScrollLock:!0,anchorEl:s.current,onClose:function(){return x(!1)},open:b,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:r.map((function(e){return Object(V.jsx)(k.a,{onClick:function(){g(e.text),x(!1)},children:e.text},e.value)}))})]}),Object(V.jsxs)(o.a,{display:"flex",alignItems:"center",pb:2,children:[Object(V.jsxs)(O.a,{variant:"body2",color:"text.secondary",sx:{display:"flex",alignItems:"center",mr:2},children:[Object(V.jsx)($,{}),e("tasks created")]}),Object(V.jsxs)(O.a,{variant:"body2",color:"text.secondary",sx:{display:"flex",alignItems:"center"},children:[Object(V.jsx)(Q,{}),e("tasks completed")]})]}),Object(V.jsx)(K.a,{options:a,series:[{name:"Income",data:[28,47,41,34,69,91,49,82,52,72,32,99]},{name:"Expenses",data:[38,85,64,40,97,82,58,42,55,46,57,70]}],type:"bar",height:270})]})},ee=a(899),te=a(688),ae=a(578),ce=a(665),ne=a(680),re=a.n(ne),se=a(9),ie=a(790),oe=a.n(ie),le=a(108),je=a.n(le),be=a(55),xe=a.n(be),de=Object(i.a)(l.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.success.lighter,";\n      color:  ").concat(t.colors.success.main,";\n")})),he=Object(i.a)("span")((function(e){var t=e.theme;return"\n    border-radius: 22px;\n    width: ".concat(t.spacing(1.8),";\n    height: ").concat(t.spacing(1.8),";\n    display: inline-block;\n    border: 2px solid ").concat(t.colors.alpha.white[100],";\n    margin-right: ").concat(t.spacing(.5),";\n")})),pe=Object(i.a)(W.a)((function(e){var t=e.theme;return"\n        flex-grow: 1;\n        height: 10px;\n        margin: ".concat(t.spacing(1,0,2),";\n        \n        &.MuiLinearProgress-root {\n          background-color: ").concat(t.colors.alpha.black[10],";\n        }\n        \n        .MuiLinearProgress-bar {\n          border-radius: ").concat(t.general.borderRadiusXl,";\n        }\n")}));var Oe=function(){var e=Object(u.a)().t,t=Object(j.a)();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(o.a,{display:"flex",alignItems:"center",justifyContent:"space-between",sx:{pb:3},children:[Object(V.jsx)(O.a,{variant:"h3",children:e("Projects")}),Object(V.jsx)(o.a,{children:Object(V.jsx)(m.a,{size:"small",variant:"outlined",children:e("View all projects")})})]}),Object(V.jsxs)(h.a,{container:!0,spacing:4,children:[Object(V.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(V.jsxs)(o.a,{children:[Object(V.jsx)(te.a,{sx:{px:0,pt:0},avatar:Object(V.jsx)(de,{children:Object(V.jsx)(je.a,{})}),action:Object(V.jsx)(ae.a,{size:"small",color:"primary",children:Object(V.jsx)(re.a,{})}),title:e("Fix Urgent Mobile App Bugs"),titleTypographyProps:{variant:"h5",color:"textPrimary"}}),Object(V.jsxs)(o.a,{children:[Object(V.jsxs)(O.a,{variant:"subtitle2",gutterBottom:!0,children:[e("Tasks done"),":"," ",Object(V.jsx)(J.a,{color:"black",children:Object(V.jsx)("b",{children:"25"})}),Object(V.jsxs)("b",{children:[" ",e("/100")]})]}),Object(V.jsx)(pe,{value:25,color:"primary",variant:"determinate"})]}),Object(V.jsxs)(o.a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(V.jsxs)(ce.a,{children:[Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Remy Sharp"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Remy Sharp",src:"/static/images/avatars/1.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Travis Howard"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Travis Howard",src:"/static/images/avatars/2.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Cindy Baker"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Cindy Baker",src:"/static/images/avatars/3.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Agnes Walker"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Agnes Walker",src:"/static/images/avatars/4.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Trevor Henderson"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Trevor Henderson",src:"/static/images/avatars/5.jpg"})})]}),Object(V.jsxs)(o.a,{children:[Object(V.jsx)(H.a,{arrow:!0,title:e("View project calendar"),placement:"top",children:Object(V.jsx)(ae.a,{size:"small",color:"secondary",sx:{ml:.5},children:Object(V.jsx)(oe.a,{fontSize:"small"})})}),Object(V.jsx)(H.a,{arrow:!0,title:e("Mark project as favourite"),placement:"top",children:Object(V.jsx)(ae.a,{size:"small",sx:{color:"".concat(t.colors.warning.main),ml:.5},children:Object(V.jsx)(xe.a,{fontSize:"small"})})})]})]})]})}),Object(V.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(V.jsxs)(o.a,{children:[Object(V.jsx)(te.a,{sx:{px:0,pt:0},avatar:Object(V.jsx)(l.a,{sx:{background:"".concat(t.colors.gradients.blue1)},children:"RP"}),action:Object(V.jsx)(ae.a,{size:"small",color:"primary",children:Object(V.jsx)(re.a,{})}),title:e("Replace Placeholder Images"),titleTypographyProps:{variant:"h5",color:"textPrimary"}}),Object(V.jsxs)(o.a,{children:[Object(V.jsxs)(O.a,{variant:"subtitle2",gutterBottom:!0,children:[e("Tasks done"),":"," ",Object(V.jsx)(J.a,{color:"black",children:Object(V.jsx)("b",{children:"80"})}),Object(V.jsxs)("b",{children:[" ",e("/100")]})]}),Object(V.jsx)(pe,{value:80,color:"primary",variant:"determinate"})]}),Object(V.jsxs)(o.a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(V.jsxs)(ce.a,{children:[Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Remy Sharp"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Remy Sharp",src:"/static/images/avatars/4.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Travis Howard"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Travis Howard",src:"/static/images/avatars/3.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Trevor Henderson"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Trevor Henderson",src:"/static/images/avatars/1.jpg"})})]}),Object(V.jsxs)(o.a,{children:[Object(V.jsx)(H.a,{arrow:!0,title:e("View project calendar"),placement:"top",children:Object(V.jsx)(ae.a,{size:"small",color:"secondary",sx:{ml:.5},children:Object(V.jsx)(oe.a,{fontSize:"small"})})}),Object(V.jsx)(H.a,{arrow:!0,title:e("Mark project as favourite"),placement:"top",children:Object(V.jsx)(ae.a,{size:"small",sx:{color:"".concat(t.colors.warning.main),ml:.5},children:Object(V.jsx)(xe.a,{fontSize:"small"})})})]})]})]})}),Object(V.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(V.jsxs)(o.a,{children:[Object(V.jsx)(te.a,{sx:{px:0,pt:0},avatar:Object(V.jsx)(P.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},overlap:"circular",badgeContent:Object(V.jsx)(H.a,{arrow:!0,placement:"top",title:e("Online right now"),children:Object(V.jsx)(he,{style:{background:"".concat(t.colors.success.main)}})}),children:Object(V.jsx)(l.a,{alt:"Remy Sharp",src:"/static/images/avatars/1.jpg"})}),action:Object(V.jsx)(ae.a,{size:"small",color:"primary",children:Object(V.jsx)(re.a,{})}),title:e("BloomUI Redesign Project"),titleTypographyProps:{variant:"h5",color:"textPrimary"}}),Object(V.jsxs)(o.a,{children:[Object(V.jsxs)(O.a,{variant:"subtitle2",gutterBottom:!0,children:[e("Tasks done"),":"," ",Object(V.jsx)(J.a,{color:"black",children:Object(V.jsx)("b",{children:"87"})}),Object(V.jsxs)("b",{children:[" ",e("/100")]})]}),Object(V.jsx)(pe,{value:87,color:"primary",variant:"determinate"})]}),Object(V.jsxs)(o.a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(V.jsxs)(ce.a,{children:[Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Remy Sharp"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Remy Sharp",src:"/static/images/avatars/1.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Cindy Baker"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Cindy Baker",src:"/static/images/avatars/3.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Agnes Walker"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Agnes Walker",src:"/static/images/avatars/2.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Trevor Henderson"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Trevor Henderson",src:"/static/images/avatars/4.jpg"})})]}),Object(V.jsxs)(o.a,{children:[Object(V.jsx)(H.a,{arrow:!0,title:e("View project calendar"),placement:"top",children:Object(V.jsx)(ae.a,{size:"small",color:"secondary",sx:{ml:.5},children:Object(V.jsx)(oe.a,{fontSize:"small"})})}),Object(V.jsx)(H.a,{arrow:!0,title:e("Mark project as favourite"),placement:"top",children:Object(V.jsx)(ae.a,{size:"small",sx:{color:"".concat(t.colors.warning.main),ml:.5},children:Object(V.jsx)(xe.a,{fontSize:"small"})})})]})]})]})})]})]})},me=a(275),ue=a(1540),ge=a(277),ve=a(672),ye=a(673),fe=a(674),we=a(676),ke=a(641),Se=a(675),Ce=a(771),Te=a.n(Ce),ze=a(1063),Ie=a.n(ze),Be=a(33),Re=a.n(Be),Ve=a(298),Me=a.n(Ve),De=Object(i.a)(ve.a)((function(e){var t=e.theme;return"\n    margin-left: ".concat(t.spacing(2),";\n\n    .MuiTimelineDot-root {\n      left: -").concat(t.spacing(2),";\n      margin-top: 0;\n      top: ").concat(t.spacing(.5),";\n    }\n    \n    .MuiTimelineContent-root {\n      padding-left: ").concat(t.spacing(4),";\n    }\n    \n    .MuiFormControlLabel-root {\n      margin-left: -").concat(t.spacing(.7),";\n    }\n    \n    .MuiFormControlLabel-label {\n      color: ").concat(t.colors.alpha.black[50],";\n    }\n")})),We=Object(i.a)(me.a)((function(e){var t=e.theme;return"\n    padding: ".concat(t.spacing(.5),";\n")}));var Pe=function(){var e=Object(u.a)().t;return Object(V.jsxs)(o.a,{children:[Object(V.jsx)(te.a,{sx:{px:0,pt:0},action:Object(V.jsx)(H.a,{arrow:!0,title:e("Refresh list"),children:Object(V.jsx)(ae.a,{size:"small",color:"primary",children:Object(V.jsx)(Te.a,{})})}),title:e("Checklist")}),Object(V.jsxs)(De,{children:[Object(V.jsxs)(ye.a,{children:[Object(V.jsxs)(fe.a,{children:[Object(V.jsx)(Se.a,{color:"primary",children:Object(V.jsx)(Ie.a,{})}),Object(V.jsx)(we.a,{})]}),Object(V.jsxs)(ke.a,{children:[Object(V.jsx)(O.a,{variant:"h4",sx:{pb:2},children:e("Tasks Quick List")}),Object(V.jsxs)(ue.a,{children:[Object(V.jsx)(ge.a,{control:Object(V.jsx)(We,{color:"primary",name:"checkedC"}),label:e("Prepare website launch")}),Object(V.jsx)(ge.a,{control:Object(V.jsx)(We,{color:"primary",name:"checkedC"}),label:e("Build React Native application")}),Object(V.jsx)(ge.a,{control:Object(V.jsx)(We,{color:"primary",name:"checkedC"}),label:e("Fix remaining bugs for first 4 pages")})]})]})]}),Object(V.jsxs)(ye.a,{children:[Object(V.jsxs)(fe.a,{children:[Object(V.jsx)(Se.a,{color:"primary",children:Object(V.jsx)(Re.a,{})}),Object(V.jsx)(we.a,{})]}),Object(V.jsxs)(ke.a,{children:[Object(V.jsx)(O.a,{variant:"h4",sx:{pb:2},children:e("Project Management")}),Object(V.jsxs)(ue.a,{children:[Object(V.jsx)(ge.a,{control:Object(V.jsx)(We,{color:"primary",name:"checkedC"}),label:e("Complete sales pitch")}),Object(V.jsx)(ge.a,{control:Object(V.jsx)(We,{color:"primary",name:"checkedC"}),label:e("Improve SEO visibility")})]})]})]}),Object(V.jsxs)(ye.a,{children:[Object(V.jsxs)(fe.a,{children:[Object(V.jsx)(Se.a,{color:"primary",children:Object(V.jsx)(Me.a,{})}),Object(V.jsx)(we.a,{})]}),Object(V.jsxs)(ke.a,{children:[Object(V.jsx)(O.a,{variant:"h4",sx:{pb:2},children:e("Business & Marketing")}),Object(V.jsxs)(ue.a,{children:[Object(V.jsx)(ge.a,{control:Object(V.jsx)(We,{color:"primary",name:"checkedC"}),label:e("Create marketing campaign")}),Object(V.jsx)(ge.a,{control:Object(V.jsx)(We,{color:"primary",name:"checkedC"}),label:e("Sign business contract with partners")})]})]})]})]})]})},He=a(806),Le=a(580),Ae=a(178),Fe=a(177),qe=a(1064),Je=a.n(qe),Ee=a(728),Ne=a.n(Ee),Ye=a(1065),_e=a.n(Ye);var Ue=function(){var e=Object(u.a)().t,t=Object(j.a)();return Object(V.jsxs)(o.a,{children:[Object(V.jsx)(l.a,{sx:{mx:"auto",mb:1.5,width:t.spacing(12),height:t.spacing(12)},variant:"rounded",alt:"Craig Donin",src:"/static/images/avatars/4.jpg"}),Object(V.jsx)(O.a,{align:"center",variant:"h4",gutterBottom:!0,children:"Craig Donin"}),Object(V.jsx)(O.a,{align:"center",variant:"subtitle2",gutterBottom:!0,children:e("Senior Web Developer")}),Object(V.jsxs)(o.a,{display:"flex",alignItems:"center",justifyContent:"center",children:[Object(V.jsx)(He.a,{value:4,defaultValue:5,precision:1,readOnly:!0}),Object(V.jsx)(O.a,{variant:"h5",sx:{pl:.5},children:"4.1"})]}),Object(V.jsxs)(o.a,{py:2,display:"flex",alignItems:"center",justifyContent:"center",children:[Object(V.jsx)(H.a,{arrow:!0,placement:"top",title:e("Call"),children:Object(V.jsx)(ae.a,{color:"primary",sx:{mx:.5},children:Object(V.jsx)(Je.a,{})})}),Object(V.jsx)(H.a,{arrow:!0,placement:"top",title:e("Send email"),children:Object(V.jsx)(ae.a,{color:"primary",sx:{mx:.5},children:Object(V.jsx)(Ne.a,{})})}),Object(V.jsx)(H.a,{arrow:!0,placement:"top",title:e("Send message"),children:Object(V.jsx)(ae.a,{color:"primary",sx:{mx:.5},children:Object(V.jsx)(_e.a,{})})})]}),Object(V.jsxs)(Le.a,{sx:{px:2},children:[Object(V.jsx)(p.a,{component:"li"}),Object(V.jsxs)(Ae.a,{sx:{py:1.5},children:[Object(V.jsx)(Fe.a,{primary:e("Join Date"),primaryTypographyProps:{variant:"subtitle2"}}),Object(V.jsx)(O.a,{variant:"subtitle2",color:"text.primary",children:"22 January 2021"})]}),Object(V.jsx)(p.a,{component:"li"}),Object(V.jsxs)(Ae.a,{sx:{py:1.5},children:[Object(V.jsx)(Fe.a,{primary:e("Company"),primaryTypographyProps:{variant:"subtitle2"}}),Object(V.jsx)(O.a,{variant:"subtitle2",color:"text.primary",children:"Google Inc."})]}),Object(V.jsx)(p.a,{component:"li"}),Object(V.jsxs)(Ae.a,{sx:{py:1.5},children:[Object(V.jsx)(Fe.a,{primary:e("Tasks"),primaryTypographyProps:{variant:"subtitle2"}}),Object(V.jsx)(O.a,{variant:"subtitle2",color:"text.primary",fontWeight:"bold",children:"67 active"})]})]})]})},Xe=a(654),Ge=a(655),Ke=a(668),Qe=a(133),$e=a(938),Ze=a(722),et=a(1510),tt=a(281),at=a(1066),ct=a(901),nt=a.n(ct),rt=a(52),st=a.n(rt),it=Object(i.a)(Xe.a)((function(e){var t=e.theme;return"\n    background-color: ".concat(t.colors.alpha.white[100],";\n    padding-right: ").concat(t.spacing(.7),"\n")}));var ot=function(){var e=Object(u.a)().t,t=Object(j.a)(),a=Object(tt.b)().enqueueSnackbar,r=function(){a(e("You clicked on delete!"),{variant:"error"})},s=function(){a(e("You clicked on the chip!"),{variant:"success"})},i=[{value:"popular",text:e("Most popular")},{value:"recent",text:e("Recent tasks")},{value:"updated",text:e("Latest updated tasks")},{value:"oldest",text:e("Oldest tasks first")}],b=Object(n.useRef)(null),x=Object(n.useState)(!1),g=Object(c.a)(x,2),v=g[0],y=g[1],f=Object(n.useState)(i[0].text),S=Object(c.a)(f,2),C=S[0],T=S[1];return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Ge.a,{variant:"outlined",fullWidth:!0,children:Object(V.jsx)(it,{type:"text",placeholder:e("Search terms here..."),endAdornment:Object(V.jsx)(Ke.a,{position:"end",children:Object(V.jsx)(m.a,{variant:"contained",size:"small",children:e("Search")})}),startAdornment:Object(V.jsx)(Ke.a,{position:"start",children:Object(V.jsx)(st.a,{})})})}),Object(V.jsxs)(o.a,{py:3,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(o.a,{children:Object(V.jsxs)(O.a,{variant:"subtitle2",children:[e("Showing"),":"," ",Object(V.jsx)(J.a,{color:"black",children:Object(V.jsx)("b",{children:"57 tasks"})})]})}),Object(V.jsxs)(o.a,{display:"flex",alignItems:"center",children:[Object(V.jsxs)(O.a,{variant:"subtitle2",sx:{pr:1},children:[e("Sort by"),":"]}),Object(V.jsx)(m.a,{size:"small",variant:"outlined",ref:b,onClick:function(){return y(!0)},endIcon:Object(V.jsx)(X.a,{fontSize:"small"}),children:C}),Object(V.jsx)(w.a,{disableScrollLock:!0,anchorEl:b.current,onClose:function(){return y(!1)},open:v,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:i.map((function(e){return Object(V.jsx)(k.a,{onClick:function(){T(e.text),y(!1)},children:e.text},e.value)}))})]})]}),Object(V.jsxs)(h.a,{container:!0,spacing:3,children:[Object(V.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(V.jsxs)(d.a,{variant:"outlined",sx:{p:3,background:"".concat(t.colors.alpha.black[5])},children:[Object(V.jsx)(o.a,{children:Object(V.jsx)(He.a,{value:4,defaultValue:5,precision:1,readOnly:!0})}),Object(V.jsx)(Qe.a,{href:"#",variant:"h3",color:"text.primary",children:"Migrate hosting to a more performant web server datacenter"}),Object(V.jsxs)(o.a,{sx:{py:2},children:[Object(V.jsx)($e.a,{sx:{mr:.5},size:"small",label:e("Website"),color:"secondary",onClick:s,onDelete:r}),Object(V.jsx)($e.a,{sx:{mr:.5},size:"small",label:e("Integrations"),color:"secondary",onClick:s,onDelete:r})]}),Object(V.jsx)(O.a,{sx:{pb:2},color:"text.secondary",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout beatae vitae dicta sunt explicabo."}),Object(V.jsx)(m.a,{size:"small",variant:"contained",children:e("View task")}),Object(V.jsx)(p.a,{sx:{my:2}}),Object(V.jsxs)(Ze.a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(V.jsxs)(O.a,{display:"flex",alignItems:"center",variant:"subtitle2",children:[Object(V.jsx)(nt.a,{sx:{mr:1}}),Object(L.a)(Object(A.a)(new Date,24),new Date,{addSuffix:!0})]}),Object(V.jsxs)(ce.a,{children:[Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Remy Sharp"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Remy Sharp",src:"/static/images/avatars/3.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Trevor Henderson"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Trevor Henderson",src:"/static/images/avatars/4.jpg"})})]})]})]})}),Object(V.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(V.jsxs)(d.a,{variant:"outlined",sx:{p:3,background:"".concat(t.colors.alpha.black[5])},children:[Object(V.jsx)(o.a,{children:Object(V.jsx)(He.a,{value:4,defaultValue:5,precision:1,readOnly:!0})}),Object(V.jsx)(Qe.a,{href:"#",variant:"h3",color:"text.primary",children:"Improve conversion rated by integrating new analytics tools"}),Object(V.jsxs)(o.a,{sx:{py:2},children:[Object(V.jsx)($e.a,{sx:{mr:.5},size:"small",label:e("Website"),color:"secondary",onClick:s,onDelete:r}),Object(V.jsx)($e.a,{sx:{mr:.5},size:"small",label:e("Integrations"),color:"secondary",onClick:s,onDelete:r})]}),Object(V.jsx)(O.a,{sx:{pb:2},color:"text.secondary",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."}),Object(V.jsx)(m.a,{size:"small",variant:"contained",children:e("View task")}),Object(V.jsx)(p.a,{sx:{my:2}}),Object(V.jsxs)(Ze.a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(V.jsxs)(O.a,{display:"flex",alignItems:"center",variant:"subtitle2",children:[Object(V.jsx)(nt.a,{sx:{mr:1}}),Object(L.a)(Object(at.a)(new Date,2),new Date,{addSuffix:!0})]}),Object(V.jsxs)(ce.a,{children:[Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Remy Sharp"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Remy Sharp",src:"/static/images/avatars/2.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Travis Howard"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Travis Howard",src:"/static/images/avatars/3.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Trevor Henderson"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Trevor Henderson",src:"/static/images/avatars/4.jpg"})})]})]})]})}),Object(V.jsx)(h.a,{item:!0,xs:12,md:4,children:Object(V.jsxs)(d.a,{variant:"outlined",sx:{p:3,background:"".concat(t.colors.alpha.black[5])},children:[Object(V.jsx)(o.a,{children:Object(V.jsx)(He.a,{value:4,defaultValue:5,precision:1,readOnly:!0})}),Object(V.jsx)(Qe.a,{href:"#",variant:"h3",color:"text.primary",children:"Increase the website speed on mobile and tablet devices"}),Object(V.jsxs)(o.a,{sx:{py:2},children:[Object(V.jsx)($e.a,{sx:{mr:.5},size:"small",label:e("Website"),color:"secondary",onClick:s,onDelete:r}),Object(V.jsx)($e.a,{sx:{mr:.5},size:"small",label:e("Integrations"),color:"secondary",onClick:s,onDelete:r})]}),Object(V.jsx)(O.a,{sx:{pb:2},color:"text.secondary",children:"Nemo enim ipsam voluptatem quia accusantium doloremque laudantium voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."}),Object(V.jsx)(m.a,{size:"small",variant:"contained",children:e("View task")}),Object(V.jsx)(p.a,{sx:{my:2}}),Object(V.jsxs)(Ze.a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(V.jsxs)(O.a,{display:"flex",alignItems:"center",variant:"subtitle2",children:[Object(V.jsx)(nt.a,{sx:{mr:1}}),Object(L.a)(Object(A.a)(new Date,31),new Date,{addSuffix:!0})]}),Object(V.jsxs)(ce.a,{children:[Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Remy Sharp"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Remy Sharp",src:"/static/images/avatars/1.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Travis Howard"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Travis Howard",src:"/static/images/avatars/2.jpg"})}),Object(V.jsx)(H.a,{arrow:!0,title:"".concat(e("View profile for")," Trevor Henderson"),children:Object(V.jsx)(l.a,{sx:{width:30,height:30},component:se.b,to:"#",alt:"Trevor Henderson",src:"/static/images/avatars/5.jpg"})})]})]})]})})]}),Object(V.jsx)(o.a,{sx:{pt:4},display:"flex",alignItems:"center",justifyContent:"center",children:Object(V.jsx)(et.a,{showFirstButton:!0,showLastButton:!0,count:15,defaultPage:6,siblingCount:0,size:"large",shape:"rounded",color:"primary"})})]})},lt=Object(i.a)(o.a)((function(e){var t=e.theme;return"\n      padding: 0 ".concat(t.spacing(8),";\n      position: relative;\n      bottom: -1px;\n\n      .MuiTabs-root {\n        height: 44px;\n        min-height: 44px;\n      }\n\n      .MuiTabs-scrollableX {\n        overflow-x: auto !important;\n      }\n\n      .MuiTabs-indicator {\n          min-height: 4px;\n          height: 4px;\n          box-shadow: none;\n          bottom: -4px;\n          background: none;\n          border: 0;\n\n          &:after {\n            position: absolute;\n            left: 50%;\n            width: 28px;\n            content: ' ';\n            margin-left: -14px;\n            background: ").concat(t.colors.primary.main,";\n            border-radius: inherit;\n            height: 100%;\n          }\n      }\n\n      .MuiTab-root {\n          &.MuiButtonBase-root {\n              height: 44px;\n              min-height: 44px;\n              background: ").concat(t.colors.alpha.white[50],";\n              border: 1px solid ").concat(t.colors.alpha.black[10],";\n              border-bottom: 0;\n              position: relative;\n              margin-right: ").concat(t.spacing(1),";\n              font-size: ").concat(t.typography.pxToRem(14),";\n              color: ").concat(t.colors.alpha.black[80],";\n              border-bottom-left-radius: 0;\n              border-bottom-right-radius: 0;\n\n              .MuiTouchRipple-root {\n                opacity: .1;\n              }\n\n              &:after {\n                position: absolute;\n                left: 0;\n                right: 0;\n                width: 100%;\n                bottom: 0;\n                height: 1px;\n                content: '';\n                background: ").concat(t.colors.alpha.black[10],";\n              }\n\n              &:hover {\n                color: ").concat(t.colors.alpha.black[100],";\n              }\n          }\n\n          &.Mui-selected {\n              color: ").concat(t.colors.alpha.black[100],";\n              background: ").concat(t.colors.alpha.white[100],";\n              border-bottom-color: ").concat(t.colors.alpha.white[100],";\n\n              &:after {\n                height: 0;\n              }\n          }\n      }\n  ")})),jt=Object(i.a)(l.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.primary.lighter,";\n      color: ").concat(t.colors.primary.main,";\n      width: ").concat(t.spacing(10),";\n      height: ").concat(t.spacing(10),";\n      margin: 0 auto ").concat(t.spacing(2),";\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(t.typography.pxToRem(42),";\n      }\n")}));t.default=function(){var e=Object(u.a)().t,t=Object(j.a)(),a=Object(n.useState)("analytics"),i=Object(c.a)(a,2),l=i[0],g=i[1],f=[{value:"analytics",label:e("Analytics Overview")},{value:"taskSearch",label:e("Task Search")},{value:"projectsBoard",label:e("Projects Board")}];return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(r.a,{children:Object(V.jsx)("title",{children:"Tasks Dashboard"})}),Object(V.jsx)(y.a,{children:Object(V.jsx)(D,{})}),Object(V.jsx)(lt,{children:Object(V.jsx)(b.a,{onChange:function(e,t){g(t)},value:l,variant:"scrollable",scrollButtons:"auto",textColor:"primary",indicatorColor:"primary",children:f.map((function(e){return Object(V.jsx)(x.a,{label:e.label,value:e.value},e.value)}))})}),Object(V.jsx)(d.a,{variant:"outlined",sx:{mx:4},children:Object(V.jsxs)(h.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:0,children:["analytics"===l&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(h.a,{item:!0,xs:12,children:Object(V.jsx)(o.a,{p:4,children:Object(V.jsx)(_,{})})}),Object(V.jsxs)(h.a,{item:!0,xs:12,children:[Object(V.jsx)(p.a,{}),Object(V.jsx)(o.a,{p:4,sx:{background:"".concat(t.colors.alpha.black[5])},children:Object(V.jsxs)(h.a,{container:!0,spacing:4,children:[Object(V.jsx)(h.a,{item:!0,xs:12,sm:6,md:8,children:Object(V.jsx)(Z,{})}),Object(V.jsx)(h.a,{item:!0,xs:12,sm:6,md:4,children:Object(V.jsx)(ee.a,{})})]})}),Object(V.jsx)(p.a,{})]}),Object(V.jsxs)(h.a,{item:!0,xs:12,children:[Object(V.jsx)(o.a,{p:4,children:Object(V.jsx)(Oe,{})}),Object(V.jsx)(p.a,{})]}),Object(V.jsx)(h.a,{item:!0,xs:12,children:Object(V.jsx)(o.a,{sx:{background:"".concat(t.colors.alpha.black[5])},children:Object(V.jsxs)(h.a,{container:!0,spacing:0,children:[Object(V.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(o.a,{p:4,sx:{background:"".concat(t.colors.alpha.white[70])},children:Object(V.jsx)(Pe,{})})}),Object(V.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(o.a,{p:4,children:Object(V.jsx)(Ue,{})})})]})})})]}),"taskSearch"===l&&Object(V.jsx)(h.a,{item:!0,xs:12,children:Object(V.jsx)(o.a,{p:4,children:Object(V.jsx)(ot,{})})}),"projectsBoard"===l&&Object(V.jsx)(h.a,{item:!0,xs:12,children:Object(V.jsxs)(o.a,{sx:{py:{xs:3,md:8,lg:12},textAlign:"center"},children:[Object(V.jsx)(jt,{children:Object(V.jsx)(v.a,{})}),Object(V.jsx)(O.a,{variant:"h2",children:e("No boards available")}),Object(V.jsxs)(O.a,{variant:"h4",sx:{pt:1,pb:3},fontWeight:"normal",color:"text.secondary",children:[e("Browse the projects board application or create a new one right here"),"!"]}),Object(V.jsx)(m.a,{color:"primary",variant:"outlined",sx:{borderWidth:"2px","&:hover":{borderWidth:"2px"}},children:e("Create project board")})]})})]})}),Object(V.jsx)(s.a,{})]})}},678:function(e,t,a){"use strict";var c=a(4),n=a(41),r=a(0),s=Object(c.a)(n.a)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(4),";\n")}));t.a=function(e){var t=e.children;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(s,{className:"MuiPageTitle-wrapper",children:t})})}},899:function(e,t,a){"use strict";var c=a(4),n=a(278),r=a(662),s=a(57),i=a(701),o=a(46),l=a(695),j=a(41),b=a(134),x=a(793),d=a.n(x),h=a(900),p=a.n(h),O=a(0),m=Object(c.a)(n.a)((function(e){var t=e.theme;return"\n    background: ".concat(t.colors.gradients.blue3,";\n    color: ").concat(t.colors.alpha.trueWhite[100],";\n")})),u=Object(c.a)(r.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.success.main,";\n      color: ").concat(t.palette.success.contrastText,";\n      width: ").concat(t.spacing(8),";\n      height: ").concat(t.spacing(8),";\n      box-shadow: ").concat(t.colors.shadows.success,";\n")})),g=Object(c.a)(r.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.error.main,";\n      color: ").concat(t.palette.error.contrastText,";\n      width: ").concat(t.spacing(8),";\n      height: ").concat(t.spacing(8),";\n      box-shadow: ").concat(t.colors.shadows.error,";\n")})),v=Object(c.a)(s.a)((function(e){var t=e.theme;return"\n      color: ".concat(t.colors.alpha.trueWhite[70],";\n")})),y=Object(c.a)(i.a)((function(e){var t=e.theme;return"\n        flex-grow: 1;\n        margin-right: ".concat(t.spacing(1),";\n        height: 10px;\n        background-color: ").concat(t.colors.error.main,";\n\n        .MuiLinearProgress-barColorPrimary {\n          background-color: ").concat(t.colors.success.main,";\n          border-top-right-radius: ").concat(t.general.borderRadius,";\n          border-bottom-right-radius: ").concat(t.general.borderRadius,";\n        }\n")}));t.a=function(){var e=Object(b.a)().t,t=Object(o.a)();return Object(O.jsxs)(m,{sx:{p:2},children:[Object(O.jsx)(s.a,{variant:"h3",sx:{px:2,pb:1,pt:2,fontSize:"".concat(t.typography.pxToRem(23)),color:"".concat(t.colors.alpha.trueWhite[100])},children:e("Performance")}),Object(O.jsxs)(l.a,{children:[Object(O.jsxs)(j.a,{display:"flex",sx:{px:2,pb:3},alignItems:"center",children:[Object(O.jsx)(u,{sx:{mr:2},variant:"rounded",children:Object(O.jsx)(d.a,{fontSize:"large"})}),Object(O.jsxs)(j.a,{children:[Object(O.jsx)(s.a,{variant:"h1",children:"23"}),Object(O.jsx)(v,{variant:"subtitle2",noWrap:!0,children:e("tasks created")})]})]}),Object(O.jsxs)(j.a,{display:"flex",sx:{px:2,pb:3},alignItems:"center",children:[Object(O.jsx)(g,{sx:{mr:2},variant:"rounded",children:Object(O.jsx)(p.a,{fontSize:"large"})}),Object(O.jsxs)(j.a,{children:[Object(O.jsx)(s.a,{variant:"h1",children:"5"}),Object(O.jsx)(v,{variant:"subtitle2",noWrap:!0,children:e("tasks closed")})]})]}),Object(O.jsx)(j.a,{pt:3,children:Object(O.jsx)(y,{value:73,color:"primary",variant:"determinate"})})]})]})}}}]);
//# sourceMappingURL=93.cfe6e169.chunk.js.map