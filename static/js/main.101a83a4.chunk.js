(this.webpackJsonptomsstory=this.webpackJsonptomsstory||[]).push([[0],{539:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(12),i=n.n(a),o=n(37),s=n(578),l=n(18),j=n(13),b=n(54),u=n(9),d=n(580),O=n(582),x=n(94),h=n(583),f={mainColor:"#809680",mainBoldColor:"#3c633b",mainComplementaryColor:"white"},p=(n(192),{APP_NAME:"Notepad",BASE_URL:"http://localhost:8080",ENV:"LOCAL"}),m=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e="undefined"===typeof window.navigator?"":navigator.userAgent,t=Boolean(e.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));r(t)}),[]),{isMobile:n}},g=n(2),v=Object(s.a)((function(e){return{offset:e.mixins.toolbar,topAppBar:{display:"flex",zIndex:e.zIndex.drawer+1,backgroundColor:f.mainComplementaryColor,boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",transition:"all 0.3s cubic-bezier(.25,.8,.25,1)","&:hover":{display:"flex",zIndex:e.zIndex.drawer+1,backgroundColor:f.mainColor,boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}},get topAppBarComplementary(){return this.topAppBar["&:hover"]},topAppBarTitle:{color:f.mainColor,fontWeight:600,flex:8,"&:hover":{color:f.mainComplementaryColor}},toolbarContainer:{marginLeft:"10%",marginRight:"10%",justifyContent:"space-between"},toolbarContainerForMobile:{justifyContent:"space-between"},navContainer:{flexDirection:"row"},btnLink:{fontSize:18,fontWeight:600},nabLink:{textDecoration:"none"}}})),C=function(){var e,t=v(),n=Object(c.useState)(!0),a=Object(u.a)(n,2),i=a[0],o=a[1],s=Object(c.useState)(t.topAppBar),j=Object(u.a)(s,2),C=j[0],y=j[1],w=m().isMobile,N=Object(c.useCallback)((function(){return i?f.mainColor:f.mainComplementaryColor}));return Object(c.useEffect)((function(){var e=function(e){o(window.scrollY<1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(c.useEffect)((function(){y(i?t.topAppBar:t.topAppBarComplementary)}),[i]),Object(g.jsxs)(r.a.Fragment,{children:[Object(g.jsx)(d.a,(e={position:"static",className:C},Object(b.a)(e,"position","fixed"),Object(b.a)(e,"onMouseOver",(function(){return o(!1)})),Object(b.a)(e,"onMouseLeave",(function(){return o(0==window.scrollY)})),Object(b.a)(e,"children",Object(g.jsx)("div",{className:t.navContainer,children:Object(g.jsxs)(O.a,{className:w?t.toolbarContainerForMobile:t.toolbarContainer,children:[Object(g.jsx)("div",{children:Object(g.jsxs)(l.b,{to:"/intro",className:t.nabLink,children:[Object(g.jsx)(x.a,{className:t.topAppBarTitle,style:{color:N()},variant:w?"h6":"h5",children:p.APP_NAME}),!w&&Object(g.jsx)(x.a,{className:t.topAppBarTitle,style:{color:N(),fontSize:w?14:20},children:"\uc9c0\uc2dd \uc800\uc7a5\uc18c"})]})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(l.b,{to:"/intro",className:t.nabLink,children:Object(g.jsx)(h.a,{className:t.btnLink,style:{color:f.mainBoldColor,fontSize:w?16:20},children:"Intro"})}),Object(g.jsx)("span",{style:{color:N()},children:"|"}),Object(g.jsx)(l.b,{to:"/blogs",className:t.nabLink,children:Object(g.jsx)(h.a,{className:t.btnLink,style:{color:f.mainBoldColor,fontSize:w?16:20},children:"Blog"})}),Object(g.jsx)("span",{style:{color:N()},children:"|"}),Object(g.jsx)("a",{href:"https://github.com/kwakjihoon0914",target:"_blank",className:t.nabLink,children:Object(g.jsx)(h.a,{className:t.btnLink,style:{color:f.mainBoldColor,fontSize:w?16:20},children:"Git"})})]})]})})),e)),Object(g.jsx)("div",{className:t.offset})]})},y=n(42),w=n.n(y),N=n(57),k=n(596),S=(n(608),n(588),n(589),n(584),n(585),n(586),n(587)),M=n(22),B=(n(70),n(590),n(591),n(90),Object(s.a)((function(e){return{drawer:{width:function(e){return"".concat(e.menuWidth,"px")},flexShrink:0},drawerPaper:{width:function(e){return"".concat(e.menuWidth,"px")}},drawerContainer:{width:function(e){return"".concat(e.menuWidth,"px")},overflow:"auto"},nestedMenu:{paddingLeft:e.spacing(4)},menuActive:{color:function(e){return e.menuActive?f.mainColor:"black"}}}})),n(177)),L=(n(123),Object(s.a)((function(e){return{contentPaper:{padding:e.spacing(2),margin:e.spacing(1)}}})),n(164)),T=n(609),A=n(173),E=n(595),P=n(597),z=n(598),D=n(91),Y=n(62),F=n.n(Y);var I=new function(){this.convertYYYY_MM_DDFrom=function(e){return F()(e).format("YYYY-MM-DD")},this.convertYYYY_MM_DDFromNow=function(){return F()().format("YYYY-MM-DD")},this.convertUsingFormatFrom=function(e,t){return F()(e).format(t)},this.convertUsingFormatFromNow=function(e){return F()().format(e)}},W=Object(s.a)((function(e){return{titleContainer:{height:180,backgroundColor:"rgb(40, 42, 54)"},subTitleText:{textAlign:"center",position:"relative",top:"calc(40% - 40px)",color:f.mainComplementaryColor},createdInfoText:{textAlign:"center",position:"relative",top:"calc(40% - 20px)",color:f.mainColor},btnGroup:{justifyContent:"center",display:"flex",marginTop:10},searchBarContainer:{width:"40ch",margin:e.spacing(1)}}})),_=function(e){Object(L.a)(e);var t=m().isMobile,n=W({isMobile:t}),r=Object(c.useState)(""),a=Object(u.a)(r,2),i=a[0],o=a[1],s=Object(j.g)(),b=function(e){e&&e.preventDefault();var t="/blogs?title=".concat(i);s.push(t)};return Object(g.jsx)("form",{onSubmit:b,noValidate:!0,autoComplete:"off",children:Object(g.jsx)(T.a,{value:i,onChange:function(e){return o(e.target.value)},className:n.searchBarContainer,InputProps:{endAdornment:Object(g.jsx)(l.b,{children:Object(g.jsx)(M.g,{color:"grey",style:{margin:2},onClick:b,size:25})})},label:"\uac80\uc0c9"})})},R=function(e){var t=e.title,n=e.subTitle,r=e.createdBy,a=(e.createdAt,e.lastModifiedAt),i=m().isMobile,o=W({isMobile:i}),s=Object(c.useState)(!1),l=Object(u.a)(s,2),b=l[0],d=l[1],O=Object(j.g)(),h=Object(c.useCallback)((function(){O.push("/blogs")}),[O]),p=Object(A.a)({typography:{h3:{fontSize:i?18:27},h6:{fontSize:i?15:23,margin:5},subtitle1:{fontSize:i?12:15}}}),v=Object(c.useCallback)((function(){var e=new Date(a);return I.convertYYYY_MM_DDFrom(e)}),[a]);return Object(g.jsxs)(E.a,{theme:p,children:[Object(g.jsxs)("div",{className:o.titleContainer,children:[Object(g.jsx)(x.a,{className:o.subTitleText,variant:"h3",children:t}),Object(g.jsx)(x.a,{className:o.subTitleText,variant:"h6",children:n}),Object(g.jsxs)(x.a,{className:o.createdInfoText,variant:"subtitle1",children:["By. ",r," - ",v()]})]}),Object(g.jsxs)(k.a,{className:o.btnGroup,children:[Object(g.jsx)("div",{style:{margin:10},children:Object(g.jsx)(P.a,{onClick:function(e){d(!b),b&&e.target.focus()},children:Object(g.jsx)(M.g,{size:30,color:f.mainColor})})}),Object(g.jsx)("div",{style:{margin:10},children:Object(g.jsx)(P.a,{children:Object(g.jsx)(D.a,{size:30,color:f.mainColor})})}),Object(g.jsx)("div",{style:{margin:10},children:Object(g.jsx)(P.a,{onClick:h,children:Object(g.jsx)(M.e,{size:30,color:f.mainColor})})})]}),Object(g.jsx)("div",{children:Object(g.jsx)(S.a,{in:b,children:Object(g.jsx)(z.a,{in:b,children:Object(g.jsx)(k.a,{style:{justifyContent:"center",display:"flex"},children:Object(g.jsx)(_,{})})})})})]})},q=n(165),H=n.n(q),G=n(607),U=n(599),V=Object(s.a)((function(e){return{contentPaper:{padding:e.spacing(2),margin:e.spacing(1)}}})),J={code:function(e){var t=e.language,n=e.value;return Object(g.jsx)(G.a,{style:U.a,language:t,children:n})}},K=function(e){var t=e.content,n=(e.type,m().isMobile),c=V({isMobile:n});return Object(g.jsx)(B.a,{elevation:2,className:c.contentPaper,children:Object(g.jsx)(H.a,{renderers:J,children:t})})},Q=Object(s.a)((function(e){return{contentContainer:{width:"100%",overflow:"auto",backgroundColor:"#f6faf5"},wrapper:{justifyContent:"center",flexDirection:"row"}}})),X=function(e){var t=e.content,n=Q(),c=m().isMobile;return Object(g.jsx)(k.a,{className:n.contentContainer,children:t?Object(g.jsxs)("div",{children:[Object(g.jsx)(R,Object(o.a)({},t)),Object(g.jsx)(k.a,{container:!0,className:n.wrapper,children:Object(g.jsx)(k.a,{item:!0,xs:c?12:10,children:Object(g.jsx)(K,{type:"md",content:t.text})})})]}):Object(g.jsx)(R,{title:".",subTitle:".",createdBy:".",createdAt:"."})})},Z=function(){var e=Object(c.useState)({width:void 0,height:void 0}),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},$=n(170),ee=n.n($).a.create({baseURL:p.BASE_HOST,timeout:3e3,headers:{Authorization:"","Access-Control-Allow-Origin":"*"}}),te="https://blog.gy-tech.org",ne={getContentOne:function(e){return ee.get("".concat(te,"/blog/contents/").concat(e))},getContentHotOne:function(){return ee.get("".concat(te,"/blog/contents/hot"))},getLastContentByMenu:function(e){return ee.get("".concat(te,"/blog/contents/").concat(e,"/last"))},getDefaultContentList:function(){return ee.get("".concat(te,"/blog/contents"))},getContentListByPage:function(e,t){return ee.get("".concat(te,"/blog/contents?page=").concat(e,"&size=").concat(t))},getContentsByTitle:function(e,t,n){return ee.get("".concat(te,"/blog/contents?page=").concat(t,"&size=").concat(n,"&title=").concat(e))},getAllMenus:function(){return ee.get("".concat(te,"/blog/menus"))},createContent:function(e){return ee.post("".concat(te,"/blog/contents"),e)}},ce=Object(s.a)((function(e){return{blogContainer:{backgroundColor:"#f6faf5"}}})),re=function(){var e=ce(),t=Object(j.h)(),n=Z(),r=Object(c.useState)(null),a=Object(u.a)(r,2),i=a[0],o=a[1],s=Object(c.useState)(0),l=Object(u.a)(s,2),b=(l[0],l[1],Object(c.useState)(n)),d=Object(u.a)(b,2),O=(d[0],d[1],function(){var e=Object(N.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=7;break}return e.next=4,ne.getLastContentByMenu(n);case 4:c=e.sent.data,e.next=10;break;case 7:return e.next=9,ne.getContentOne(t);case 9:c=e.sent.data;case 10:o(c),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),o(null),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}());return Object(c.useEffect)((function(){}),[n.width]),Object(c.useEffect)((function(){i&&i.title?document.title="".concat(i.title," - ").concat(p.APP_NAME," Blog"):document.title="".concat(p.APP_NAME)}),[i]),Object(c.useEffect)((function(){var e=t.params.id,n=t.params.menu;O(e,n)}),[t.params.menu,t.params.id]),Object(g.jsx)(k.a,{className:e.blogContainer,children:Object(g.jsx)(k.a,{children:Object(g.jsx)(X,{content:i})})})},ae=Object(j.i)((function(e){var t=e.children,n=Object(j.h)();return Object(c.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[n]),Object(g.jsx)(g.Fragment,{children:t})})),ie=n(594),oe=n(611),se=n(605),le=n(604),je=(n(171),n(172),Object(s.a)((function(e){return{editorContainer:{margin:5},titleInput:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},titleInputWrapper:{margin:5,marginLeft:10,marginRight:10,borderWidth:1,borderColor:"black"},selectBox:{marginLeft:10},inputBox:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center"},editorGrid:{padding:15}}}))),be=function(){var e=je(),t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)("**Hello world!!!**"),o=Object(u.a)(i,2),s=o[0],l=o[1],b=Object(c.useState)(),d=Object(u.a)(b,2),O=d[0],x=d[1],f=Object(c.useState)(),p=Object(u.a)(f,2),m=p[0],v=p[1],C=Object(c.useState)(),y=Object(u.a)(C,2),S=y[0],M=y[1],B=Object(c.useState)("md"),L=Object(u.a)(B,2),A=L[0],E=L[1],P=Object(j.g)(),z=function(){var e=Object(N.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.getAllMenus();case 3:t=(t=e.sent.data).filter((function(e){return"MENU"==e.type})),a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){z()}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:e.selectBox,children:[Object(g.jsxs)(ie.a,{className:e.selectBox,required:!0,children:[Object(g.jsx)(oe.a,{htmlFor:"menu-native-required",children:"Menu"}),Object(g.jsx)(se.a,{inputProps:{id:"menu-native-required"},onChange:function(e){M(e.target.value)},native:!0,value:S,name:"menu",children:r.map((function(e){return Object(g.jsx)("option",{value:e.id,children:e.name},e.id)}))})]}),Object(g.jsxs)(ie.a,{className:e.selectBox,required:!0,children:[Object(g.jsx)(oe.a,{htmlFor:"type-native-required",children:"Type"}),Object(g.jsxs)(se.a,{inputProps:{id:"type-native-required"},onChange:function(e){E(e.target.value)},native:!0,name:"type",children:[Object(g.jsx)("option",{value:"md",children:"Markdown"}),Object(g.jsx)("option",{value:"html",children:"HTML"})]})]})]}),Object(g.jsxs)("div",{className:e.inputBox,children:[Object(g.jsx)("div",{className:e.titleInputWrapper,children:Object(g.jsx)(T.a,{className:e.titleInput,onChange:function(e){x(e.target.value)},label:"Title",fullWidth:!0,margin:"normal",inputProps:{style:{padding:8}},InputLabelProps:{shrink:!0},variant:"outlined"})}),Object(g.jsx)("div",{className:e.titleInputWrapper,children:Object(g.jsx)(T.a,{className:e.titleInput,onChange:function(e){v(e.target.value)},label:"Sub Title",fullWidth:!0,margin:"normal",inputProps:{style:{padding:8}},InputLabelProps:{shrink:!0},variant:"outlined"})})]}),Object(g.jsx)(k.a,{container:!0,children:Object(g.jsx)(k.a,{className:e.editorGrid,item:!0,xs:12,children:Object(g.jsx)(le.a,{border:1,borderColor:"primary.main",borderRadius:5,padding:2,children:Object(g.jsx)("textarea",{style:{width:"100%",height:300},onChange:function(e){l(e.target.value)},children:s})})})}),Object(g.jsx)("div",{className:e.inputBox,children:Object(g.jsx)(h.a,{onClick:function(){var e={title:O,subTitle:m,text:s,menu:{id:S},type:A};ne.createContent(e).then((function(e){P.push("/blogs/".concat(e.data.id))})).catch((function(e){alert("ERROR")})),console.log(e)},variant:"contained",color:"primary",children:"save"})})]})},ue=Object(s.a)((function(e){return{}})),de=function(){ue();return Object(c.useEffect)((function(){})),Object(g.jsx)(B.a,{elevation:2,children:Object(g.jsxs)("h3",{children:["\uc900\ube44\uc911 \uc785\ub2c8\ub2e4.  ",Object(g.jsx)(l.b,{to:"/blogs",children:"\ube14\ub85c\uadf8\ub85c \ub3cc\uc544\uac00\uae30"})]})})},Oe=n(174),xe=n(603),he=n(600),fe=n(601),pe=n(602),me=Object(s.a)((function(e){return{cardContainer:{display:"flex",boxShadow:"-1px 10px 29px 0px rgba(0,0,0,0.2)",marginTop:20,"&:hover":{boxShadow:"-1px 10px 29px 0px rgba(0,0,0,0.7)",cursor:"pointer"}},cardDetails:{flexDirection:"column"},innerTitle:{},cover:{width:function(e){return e.isMobile?100:180}}}})),ge=function(e){var t=e.content,n=m().isMobile,r=me({isMobile:n}),a=Object(j.g)(),i=Object(c.useCallback)((function(){var e="/blogs/".concat(t.id);a.push(e)}),[a]),o=Object(c.useCallback)((function(){return t&&t.thumbnail?t.thumbnail:""}),[t]),s=Object(c.useCallback)((function(){if(!t||!t.menu)return"";for(var e=[],n=t.menu;n;)e.unshift(n.name),n=n.parent;return e.join(" / ")}),[t]),l=Object(c.useCallback)((function(){var e=new Date(t.lastModifiedAt);return I.convertYYYY_MM_DDFrom(e)}),[t]);return Object(g.jsxs)(he.a,{className:r.cardContainer,onClick:i,children:[Object(g.jsx)(fe.a,{className:r.cover,image:o(),title:""}),Object(g.jsx)("div",{className:r.cardDetails,children:Object(g.jsxs)(pe.a,{children:[Object(g.jsx)(x.a,{variant:"overline",color:"textSecondary",children:s()}),Object(g.jsx)(x.a,{style:{fontSize:n?15:25},color:"textPrimary",children:t.title}),Object(g.jsx)(x.a,{style:{fontSize:n?10:18},variant:"subtitle1",color:"textSecondary",children:t.subTitle}),Object(g.jsx)(x.a,{variant:"caption",component:"h2",children:l()})]})})]})},ve=Object(s.a)((function(e){return{}})),Ce=function(e){var t=e.contentList,n=m().isMobile;ve({isMobile:n});return Object(g.jsx)("div",{children:t.map((function(e){return Object(g.jsx)(ge,{content:e},e.id)}))})},ye=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=function(e){var t=e.target.documentElement.getBoundingClientRect().bottom,n=window.innerHeight;r(function(e,t){return e-t<30}(t,n))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),{isBottom:n}},we=Object(s.a)((function(e){return{root:{backgroundColor:"rgb(40, 42, 54)",width:"100%",height:180},titleWrapper:{justifyContent:"center",display:"flex",marginTop:40},btnGroup:{justifyContent:"center",display:"flex",marginTop:10},searchBarContainer:{width:"40ch",margin:e.spacing(1)}}})),Ne=function(e){var t=e.queryText,n=m().isMobile,r=we({isMobile:n}),a=Object(c.useState)(t||""),i=Object(u.a)(a,2),o=i[0],s=i[1],b=Object(j.g)(),d=function(e){e&&e.preventDefault();var t="/blogs?title=".concat(o);b.push(t)};return Object(g.jsx)("form",{onSubmit:d,noValidate:!0,autoComplete:"off",children:Object(g.jsx)(T.a,{value:o,onChange:function(e){return s(e.target.value)},InputProps:{endAdornment:Object(g.jsx)(l.b,{children:Object(g.jsx)(M.g,{color:"grey",style:{margin:2},onClick:d,size:25})})},className:r.searchBarContainer,label:"\uac80\uc0c9"})})},ke=function(e){var t=e.queryText,n=(e.location,we()),r=Object(c.useState)(!1),a=Object(u.a)(r,2),i=a[0],o=a[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(k.a,{className:n.root,children:[Object(g.jsx)("div",{className:n.titleWrapper,children:Object(g.jsxs)(x.a,{variant:"h5",style:{color:"white",fontWeight:"600"},children:[Object(g.jsx)("span",{style:{fontSize:"150%"},children:"Tom"}),"'s",Object(g.jsx)("span",{style:{fontSize:"150%"},children:" Notepad"})]})}),Object(g.jsxs)(k.a,{className:n.btnGroup,children:[Object(g.jsx)("div",{style:{margin:10},children:Object(g.jsx)(P.a,{onClick:function(e){o(!i),i&&e.target.focus()},children:Object(g.jsx)(M.g,{size:30,color:f.mainColor})})}),Object(g.jsx)("div",{style:{margin:10},children:Object(g.jsx)(P.a,{children:Object(g.jsx)(D.a,{size:30,color:f.mainColor})})})]})]}),Object(g.jsx)(S.a,{in:i,children:Object(g.jsx)(z.a,{in:i,children:Object(g.jsx)(k.a,{style:{justifyContent:"center",display:"flex"},children:Object(g.jsx)(Ne,{queryText:t})})})})]})},Se=Object(s.a)((function(e){return{cardContainer:{display:"flex",boxShadow:"-1px 10px 29px 0px rgba(0,0,0,0.2)",marginTop:20,"&:hover":{boxShadow:"-1px 10px 29px 0px rgba(0,0,0,0.7)",cursor:"pointer"}},fake:{backgroundColor:"#e8e8e8",color:"#e8e8e8",margin:5},cardDetails:{flexDirection:"column"},innerTitle:{},cover:{width:function(e){return e.isMobile?100:180}}}})),Me=function(e){e.content;var t=m().isMobile,n=Se({isMobile:t}),r=Object(j.g)(),a=Object(c.useCallback)((function(){}),[r]);return Object(g.jsxs)(he.a,{className:n.cardContainer,onClick:a,children:[Object(g.jsx)(fe.a,{className:n.cover,image:"../../images/loading.gif",title:"loading"}),Object(g.jsx)("div",{className:n.cardDetails,children:Object(g.jsxs)(pe.a,{children:[Object(g.jsx)(x.a,{variant:"overline",color:"textSecondary",children:Object(g.jsx)("span",{className:n.fake,children:"---------"})}),Object(g.jsx)(x.a,{style:{fontSize:t?15:25},color:"textPrimary",children:Object(g.jsx)("span",{className:n.fake,children:"--------------------"})}),Object(g.jsx)(x.a,{style:{fontSize:t?10:18},variant:"subtitle1",color:"textSecondary",children:Object(g.jsx)("span",{className:n.fake,children:"--------------------------------------"})}),Object(g.jsx)(x.a,{variant:"caption",component:"h2",children:Object(g.jsx)("span",{className:n.fake,children:"-------------"})})]})})]})},Be=Object(s.a)((function(e){return{blogListContainer:{marginTop:0,flexDirection:"row",justifyContent:"center"},loadingContainer:{display:"flex",justifyContent:"center",width:"100%",margin:10},contentListCaption:{marginLeft:15,verticalAlign:"middle",display:"flex",flexDirection:"row"},contentListCaptionText:{marginTop:30,fontWeight:"600",fontSize:25,color:f.mainBoldColor}}})),Le=function(e){var t=e.text,n=Be();return Object(g.jsx)("div",{className:n.contentListCaption,children:Object(g.jsx)(x.a,{className:n.contentListCaptionText,variant:"h5",children:t})})},Te=function(e){var t=e.location,n=Be(),r=ye().isBottom,a=m().isMobile,i=Object(c.useState)(!1),o=Object(u.a)(i,2),s=o[0],l=o[1],j=Object(c.useState)(!0),b=Object(u.a)(j,2),d=b[0],O=b[1],h=Object(c.useState)(-1),f=Object(u.a)(h,2),p=f[0],v=f[1],C=Object(c.useState)([]),y=Object(u.a)(C,2),S=y[0],M=y[1],B=Object(c.useState)(),L=Object(u.a)(B,2),T=L[0],A=L[1],E=Object(c.useState)(""),P=Object(u.a)(E,2),z=P[0],D=P[1],Y=(Object(c.useRef)(z),function(){var e=Object(N.a)(w.a.mark((function e(t,n){var c,r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!s){e.next=3;break}return e.abrupt("return");case 3:if(l(!0),c=0==t?[]:Object(Oe.a)(S),!n){e.next=11;break}return e.next=8,ne.getContentsByTitle(n,t,5);case 8:r=e.sent.data,e.next=17;break;case 11:return e.next=13,ne.getContentListByPage(t,5);case 13:return r=e.sent.data,e.next=16,ne.getContentHotOne();case 16:a=e.sent.data;case 17:Array.prototype.push.apply(c,r.contents),A(a),M(c),v(r.pageRequest.page),0==r.contents.length&&O(!1),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),console.log(e.t0);case 27:return e.prev=27,l(!1),e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[0,24,27,30]])})));return function(t,n){return e.apply(this,arguments)}}());function F(e){var n=function(e){return e=e.substring(1),Object.fromEntries(new URLSearchParams(e))}(t.search).title;n&&""!=n.trim()?(D(n),Y(e,n)):(D(""),Y(e))}return Object(c.useEffect)((function(){O(!0),F(0)}),[t.search]),Object(c.useEffect)((function(){r&&d&&F(p+1)}),[r]),Object(g.jsxs)(k.a,{container:!0,className:n.blogListContainer,children:[Object(g.jsx)(ke,{}),Object(g.jsx)(k.a,{item:!0,xs:a?12:10,children:Object(g.jsxs)(k.a,{item:!0,children:[S.length>0&&""==z.trim()&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Le,{text:"Hot"}),Object(g.jsx)(ge,{content:T||void 0}),Object(g.jsx)(Le,{text:"New"}),Object(g.jsx)(Ce,{contentList:S})]}),""!=z.trim()&&Object(g.jsx)(g.Fragment,{children:S.length>0?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(x.a,{style:{margin:15},children:[Object(g.jsxs)("span",{style:{color:"#fa3830"},children:["'",z.trim(),"' "]}),"\uc5d0 \ub300\ud55c \uac80\uc0c9\uacb0\uacfc"]}),Object(g.jsx)(Ce,{contentList:S})]}):Object(g.jsx)(k.a,{container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(g.jsxs)(x.a,{style:{margin:30},children:[Object(g.jsxs)("span",{style:{color:"#fa3830"},children:["'",z.trim(),"' "]}),"\ub300\ud55c \uac80\uc0c9\uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."]})})}),s&&Object(g.jsx)("div",{className:n.loadingContainer,children:Object(g.jsx)(xe.a,{thickness:10,size:20})}),0==S.length&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Me,{content:{title:"",subTitle:""}}),Object(g.jsx)(Me,{content:{title:"",subTitle:""}})]})]})})]})},Ae=Object(s.a)((function(e){return{}})),Ee=function(){Ae();return Object(c.useEffect)((function(){document.title=p.APP_NAME})),Object(g.jsx)(l.a,{children:Object(g.jsxs)(ae,{children:[Object(g.jsx)(C,{}),Object(g.jsxs)(j.d,{children:[Object(g.jsx)(j.b,{exact:!0,path:"/",children:Object(g.jsx)(j.a,{to:"/blogs"})}),Object(g.jsx)(j.b,{path:"/blogs/:menu/:id",render:function(e){return Object(g.jsx)(re,Object(o.a)({},e))}}),Object(g.jsx)(j.b,{path:"/blogs/:id",render:function(e){return Object(g.jsx)(re,Object(o.a)({},e))}}),Object(g.jsx)(j.b,{path:"/blogs",render:function(e){return Object(g.jsx)(Te,Object(o.a)({},e))}}),Object(g.jsx)(j.b,{path:"/edit",render:function(e){return Object(g.jsx)(be,Object(o.a)({},e))}}),Object(g.jsx)(j.b,{path:"/intro",render:function(e){return Object(g.jsx)(de,Object(o.a)({},e))}}),Object(g.jsx)("div",{style:{height:1200},children:"Not Found Page 404"})]})]})})},Pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,613)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(Ee,{})}),document.getElementById("root")),Pe()}},[[539,1,2]]]);
//# sourceMappingURL=main.101a83a4.chunk.js.map