(this.webpackJsonptomsstory=this.webpackJsonptomsstory||[]).push([[0],{523:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(12),i=n.n(a),o=n(33),s=n(563),l=n(23),j=n(13),b=n(46),u=n(11),d=n(566),f=n(568),O=n(88),h=n(569),x={mainColor:"#809680",mainBoldColor:"#3c633b",mainComplementaryColor:"white"},p=(n(177),{APP_NAME:"Notepad",BASE_URL:"http://localhost:8080",ENV:"LOCAL"}),m=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e="undefined"===typeof window.navigator?"":navigator.userAgent,t=Boolean(e.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));r(t)}),[]),{isMobile:n}},g=n(3),v=Object(s.a)((function(e){return{offset:e.mixins.toolbar,topAppBar:{display:"flex",zIndex:e.zIndex.drawer+1,backgroundColor:x.mainComplementaryColor,boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",transition:"all 0.3s cubic-bezier(.25,.8,.25,1)","&:hover":{display:"flex",zIndex:e.zIndex.drawer+1,backgroundColor:x.mainColor,boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}},get topAppBarComplementary(){return this.topAppBar["&:hover"]},topAppBarTitle:{color:x.mainColor,fontWeight:600,flex:8,"&:hover":{color:x.mainComplementaryColor}},toolbarContainer:{marginLeft:"10%",marginRight:"10%",justifyContent:"space-between"},toolbarContainerForMobile:{justifyContent:"space-between"},navContainer:{flexDirection:"row"},btnLink:{fontSize:18,fontWeight:600},nabLink:{textDecoration:"none"}}})),C=function(){var e,t=v(),n=Object(c.useState)(!0),a=Object(u.a)(n,2),i=a[0],o=a[1],s=Object(c.useState)(t.topAppBar),j=Object(u.a)(s,2),C=j[0],y=j[1],w=m().isMobile,N=Object(c.useCallback)((function(){return i?x.mainColor:x.mainComplementaryColor}));return Object(c.useEffect)((function(){var e=function(e){o(window.scrollY<1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(c.useEffect)((function(){y(i?t.topAppBar:t.topAppBarComplementary)}),[i]),Object(g.jsxs)(r.a.Fragment,{children:[Object(g.jsx)(d.a,(e={position:"static",className:C},Object(b.a)(e,"position","fixed"),Object(b.a)(e,"onMouseOver",(function(){return o(!1)})),Object(b.a)(e,"onMouseLeave",(function(){return o(0==window.scrollY)})),Object(b.a)(e,"children",Object(g.jsx)("div",{className:t.navContainer,children:Object(g.jsxs)(f.a,{className:w?t.toolbarContainerForMobile:t.toolbarContainer,children:[Object(g.jsx)("div",{children:Object(g.jsxs)(l.b,{to:"/intro",className:t.nabLink,children:[Object(g.jsx)(O.a,{className:t.topAppBarTitle,style:{color:N()},variant:w?"h6":"h5",children:p.APP_NAME}),!w&&Object(g.jsx)(O.a,{className:t.topAppBarTitle,style:{color:N(),fontSize:w?14:20},children:"\uc9c0\uc2dd \uc800\uc7a5\uc18c"})]})}),Object(g.jsxs)("div",{children:[Object(g.jsx)(l.b,{to:"/intro",className:t.nabLink,children:Object(g.jsx)(h.a,{className:t.btnLink,style:{color:x.mainBoldColor,fontSize:w?16:20},children:"Intro"})}),Object(g.jsx)("span",{style:{color:N()},children:"|"}),Object(g.jsx)(l.b,{to:"/blogs",className:t.nabLink,children:Object(g.jsx)(h.a,{className:t.btnLink,style:{color:x.mainBoldColor,fontSize:w?16:20},children:"Blog"})}),Object(g.jsx)("span",{style:{color:N()},children:"|"}),Object(g.jsx)(l.b,{to:"//github.com/kwakjihoon0914",target:"_blank",className:t.nabLink,children:Object(g.jsx)(h.a,{className:t.btnLink,style:{color:x.mainBoldColor,fontSize:w?16:20},children:"Git"})})]})]})})),e)),Object(g.jsx)("div",{className:t.offset})]})},y=n(54),w=n.n(y),N=n(82),M=n(579),S=(n(590),n(574),n(575),n(570),n(571),n(572),n(573)),k=n(24),L=(n(64),n(576),n(577),n(85),Object(s.a)((function(e){return{drawer:{width:function(e){return"".concat(e.menuWidth,"px")},flexShrink:0},drawerPaper:{width:function(e){return"".concat(e.menuWidth,"px")}},drawerContainer:{width:function(e){return"".concat(e.menuWidth,"px")},overflow:"auto"},nestedMenu:{paddingLeft:e.spacing(4)},menuActive:{color:function(e){return e.menuActive?x.mainColor:"black"}}}})),n(166)),B=(n(114),Object(s.a)((function(e){return{contentPaper:{padding:e.spacing(2),margin:e.spacing(1)}}}))),A=function(){var e=B();return Object(g.jsx)(L.a,{elevation:2,className:e.contentPaper,children:Object(g.jsx)(O.a,{variant:"h6",children:"Comment"})})},T=n(155),E=n(587),z=n(162),P=n(578),D=n(580),Y=n(581),F=n(86),_=n(56),I=n.n(_);var W=new function(){this.convertYYYY_MM_DDFrom=function(e){return I()(e).format("YYYY-MM-DD")},this.convertYYYY_MM_DDFromNow=function(){return I()().format("YYYY-MM-DD")},this.convertUsingFormatFrom=function(e,t){return I()(e).format(t)},this.convertUsingFormatFromNow=function(e){return I()().format(e)}},R=Object(s.a)((function(e){return{titleContainer:{height:180,backgroundColor:"rgb(40, 42, 54)"},subTitleText:{textAlign:"center",position:"relative",top:"calc(40% - 40px)",color:x.mainComplementaryColor},createdInfoText:{textAlign:"center",position:"relative",top:"calc(40% - 20px)",color:x.mainColor},btnGroup:{justifyContent:"center",display:"flex",marginTop:10},searchBarContainer:{width:"40ch",margin:e.spacing(1)}}})),q=function(e){Object(T.a)(e);var t=m().isMobile,n=R({isMobile:t}),r=Object(c.useState)(""),a=Object(u.a)(r,2),i=a[0],o=a[1],s=Object(j.g)();return Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault();var t="/blogs?title=".concat(i);s.push(t)},noValidate:!0,autoComplete:"off",children:Object(g.jsx)(E.a,{value:i,onChange:function(e){return o(e.target.value)},className:n.searchBarContainer,label:"\uac80\uc0c9"})})},G=function(e){var t=e.title,n=e.subTitle,r=e.createdBy,a=e.createdAt,i=(e.lastModifiedAt,m().isMobile),o=R({isMobile:i}),s=Object(c.useState)(!1),l=Object(u.a)(s,2),b=l[0],d=l[1],f=Object(j.g)(),h=Object(c.useCallback)((function(){f.push("/blogs")}),[f]),p=Object(z.a)({typography:{h3:{fontSize:i?18:27},h6:{fontSize:i?15:23,margin:5},subtitle1:{fontSize:i?12:15}}});return Object(g.jsxs)(P.a,{theme:p,children:[Object(g.jsxs)("div",{className:o.titleContainer,children:[Object(g.jsx)(O.a,{className:o.subTitleText,variant:"h3",children:t}),Object(g.jsx)(O.a,{className:o.subTitleText,variant:"h6",children:n}),Object(g.jsxs)(O.a,{className:o.createdInfoText,variant:"subtitle1",children:["By. ",r," - ",a]})]}),Object(g.jsxs)(M.a,{className:o.btnGroup,children:[Object(g.jsx)("div",{style:{margin:10},children:Object(g.jsx)(D.a,{onClick:function(e){d(!b),b&&e.target.focus()},children:Object(g.jsx)(k.g,{size:30,color:x.mainColor})})}),Object(g.jsx)("div",{style:{margin:10},children:Object(g.jsx)(D.a,{children:Object(g.jsx)(F.a,{size:30,color:x.mainColor})})}),Object(g.jsx)("div",{style:{margin:10},children:Object(g.jsx)(D.a,{onClick:h,children:Object(g.jsx)(k.e,{size:30,color:x.mainColor})})})]}),Object(g.jsx)("div",{children:Object(g.jsx)(S.a,{in:b,children:Object(g.jsx)(Y.a,{in:b,children:Object(g.jsx)(M.a,{style:{justifyContent:"center",display:"flex"},children:Object(g.jsx)(q,{})})})})})]})},H=n(156),U=n.n(H),V=n(589),J=n(582),K=Object(s.a)((function(e){return{contentPaper:{padding:e.spacing(2),margin:e.spacing(1)}}})),Q={code:function(e){var t=e.language,n=e.value;return Object(g.jsx)(V.a,{style:J.a,language:t,children:n})}},X=function(e){var t=e.content,n=(e.type,m().isMobile),c=K({isMobile:n});return Object(g.jsx)(L.a,{elevation:2,className:c.contentPaper,children:Object(g.jsx)(U.a,{renderers:Q,children:t})})},Z=Object(s.a)((function(e){return{contentContainer:{width:"100%",overflow:"auto",backgroundColor:"#f6faf5"},wrapper:{justifyContent:"center",flexDirection:"row"}}})),$=function(e){var t=e.content,n=Z(),c=m().isMobile;return Object(g.jsx)(M.a,{className:n.contentContainer,children:t?Object(g.jsxs)("div",{children:[Object(g.jsx)(G,Object(o.a)({},t)),Object(g.jsx)(M.a,{container:!0,className:n.wrapper,children:Object(g.jsxs)(M.a,{item:!0,md:c?12:10,children:[Object(g.jsx)(X,{type:"md",content:t.text}),Object(g.jsx)(A,{type:"blog",requestId:t.id})]})})]}):Object(g.jsx)(G,{title:"\uc900\ube44\uc911",subTitle:"-",createdBy:"Kwak ji hoon",createdAt:"-"})})},ee=function(){var e=Object(c.useState)({width:void 0,height:void 0}),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},te=n(161),ne=n.n(te).a.create({baseURL:p.BASE_HOST,timeout:3e3,headers:{Authorization:"","Access-Control-Allow-Origin":"*"}}),ce={getContentOne:function(e){return ne.get("http://3.36.215.51:8080/blog/contents/".concat(e))},getLastContentByMenu:function(e){return ne.get("http://3.36.215.51:8080/blog/contents/".concat(e,"/last"))},getDefaultContentList:function(){return ne.get("http://3.36.215.51:8080/blog/contents")},getContentListByPage:function(e,t){return ne.get("http://3.36.215.51:8080/blog/contents?page=".concat(e,"&size=").concat(t))},getContentsByTitle:function(e,t,n){return ne.get("http://3.36.215.51:8080/blog/contents?page=".concat(t,"&size=").concat(n,"&title=").concat(e))}},re=Object(s.a)((function(e){return{blogContainer:{backgroundColor:"#f6faf5"}}})),ae=function(){var e=re(),t=Object(j.h)(),n=ee(),r=Object(c.useState)(null),a=Object(u.a)(r,2),i=a[0],o=a[1],s=Object(c.useState)(0),l=Object(u.a)(s,2),b=(l[0],l[1],Object(c.useState)(n)),d=Object(u.a)(b,2),f=(d[0],d[1],function(){var e=Object(N.a)(w.a.mark((function e(t,n){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=7;break}return e.next=4,ce.getLastContentByMenu(n);case 4:c=e.sent.data,e.next=10;break;case 7:return e.next=9,ce.getContentOne(t);case 9:c=e.sent.data;case 10:o(c),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),o(null),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}());return Object(c.useEffect)((function(){}),[n.width]),Object(c.useEffect)((function(){i&&i.title?document.title="".concat(i.title," - ").concat(p.APP_NAME," Blog"):document.title="".concat(p.APP_NAME)}),[i]),Object(c.useEffect)((function(){var e=t.params.id,n=t.params.menu;f(e,n)}),[t.params.menu,t.params.id]),Object(g.jsx)(M.a,{className:e.blogContainer,children:Object(g.jsx)(M.a,{children:Object(g.jsx)($,{content:i})})})},ie=Object(j.i)((function(e){var t=e.children,n=Object(j.h)();return Object(c.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[n]),Object(g.jsx)(g.Fragment,{children:t})})),oe=Object(s.a)((function(e){return{editorContainer:{padding:20}}})),se=function(){var e=oe(),t=Object(c.useState)("**Hello world!!!**"),n=Object(u.a)(t,2),r=n[0];n[1];return Object(c.useEffect)((function(){console.log(r),alert(1)}),[r]),Object(g.jsx)("div",{className:e.editorContainer,children:Object(g.jsxs)(M.a,{container:!0,spacing:1,children:[Object(g.jsx)(M.a,{item:!0,md:6}),Object(g.jsx)(M.a,{item:!0,md:6})]})})},le=Object(s.a)((function(e){return{}})),je=function(){le();return Object(c.useEffect)((function(){})),Object(g.jsx)(L.a,{elevation:2,children:Object(g.jsxs)("h3",{children:["\uc900\ube44\uc911 \uc785\ub2c8\ub2e4.  ",Object(g.jsx)(l.b,{to:"/blogs",children:"\ube14\ub85c\uadf8\ub85c \ub3cc\uc544\uac00\uae30"})]})})},be=n(163),ue=n(586),de=n(583),fe=n(584),Oe=n(585),he=Object(s.a)((function(e){return{cardContainer:{display:"flex",boxShadow:"-1px 10px 29px 0px rgba(0,0,0,0.2)",marginLeft:function(e){return e.isMobile?0:20},marginRight:function(e){return e.isMobile?0:20},marginTop:20,"&:hover":{boxShadow:"-1px 10px 29px 0px rgba(0,0,0,0.7)",cursor:"pointer"}},cardDetails:{flexDirection:"column"},innerTitle:{},cover:{width:function(e){return e.isMobile?100:180}}}})),xe=function(e){var t=e.content,n=m().isMobile,r=he({isMobile:n}),a=Object(j.g)(),i=Object(c.useCallback)((function(){var e="/blogs/".concat(t.id);a.push(e)}),[a]),o=Object(c.useCallback)((function(){return"../../images/"+t.thumbnail.toLowerCase()+".png"}),[t]),s=Object(c.useCallback)((function(){for(var e=[],n=t.menu;n;)e.unshift(n.name),n=n.parent;return e.join(" / ")}),[t]),l=Object(c.useCallback)((function(){var e=new Date(t.lastModifiedAt);return W.convertYYYY_MM_DDFrom(e)}),[t]);return Object(g.jsxs)(de.a,{className:r.cardContainer,onClick:i,children:[Object(g.jsx)(fe.a,{className:r.cover,image:o(),title:""}),Object(g.jsx)("div",{className:r.cardDetails,children:Object(g.jsxs)(Oe.a,{children:[Object(g.jsx)(O.a,{variant:"overline",color:"textSecondary",children:s()}),Object(g.jsx)(O.a,{style:{fontSize:n?15:25},color:"textPrimary",children:t.title}),Object(g.jsx)(O.a,{style:{fontSize:n?10:18},variant:"subtitle1",color:"textSecondary",children:t.subTitle}),Object(g.jsx)(O.a,{variant:"caption",component:"h2",children:l()})]})})]})},pe=Object(s.a)((function(e){return{}})),me=function(e){var t=e.contentList,n=m().isMobile;pe({isMobile:n});return Object(g.jsx)("div",{children:t.map((function(e){return Object(g.jsx)(xe,{content:e},e.id)}))})},ge=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=function(e){var t=e.target.documentElement.getBoundingClientRect().bottom,n=window.innerHeight;r(function(e,t){return e-t<30}(t,n))};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),{isBottom:n}},ve=Object(s.a)((function(e){return{root:{backgroundColor:"rgb(40, 42, 54)",width:"100%",height:180},titleWrapper:{justifyContent:"center",display:"flex",marginTop:40},btnGroup:{justifyContent:"center",display:"flex",marginTop:10},searchBarContainer:{width:"40ch",margin:e.spacing(1)}}})),Ce=function(e){var t=e.queryText,n=m().isMobile,r=ve({isMobile:n}),a=Object(c.useState)(t||""),i=Object(u.a)(a,2),o=i[0],s=i[1],l=Object(j.g)();return Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault();var t="/blogs?title=".concat(o);l.push(t)},noValidate:!0,autoComplete:"off",children:Object(g.jsx)(E.a,{value:o,onChange:function(e){return s(e.target.value)},className:r.searchBarContainer,label:"\uac80\uc0c9"})})},ye=function(e){var t=e.queryText,n=(e.location,ve()),r=Object(c.useState)(!1),a=Object(u.a)(r,2),i=a[0],o=a[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(M.a,{className:n.root,children:[Object(g.jsx)("div",{className:n.titleWrapper,children:Object(g.jsxs)(O.a,{variant:"h5",style:{color:"white",fontWeight:"600"},children:[Object(g.jsx)("span",{style:{fontSize:"150%"},children:"Tom"}),"'s",Object(g.jsx)("span",{style:{fontSize:"150%"},children:" Notepad"})]})}),Object(g.jsxs)(M.a,{className:n.btnGroup,children:[Object(g.jsx)("div",{style:{margin:10},children:Object(g.jsx)(D.a,{onClick:function(e){o(!i),i&&e.target.focus()},children:Object(g.jsx)(k.g,{size:30,color:x.mainColor})})}),Object(g.jsx)("div",{style:{margin:10},children:Object(g.jsx)(D.a,{children:Object(g.jsx)(F.a,{size:30,color:x.mainColor})})})]})]}),Object(g.jsx)(S.a,{in:i,children:Object(g.jsx)(Y.a,{in:i,children:Object(g.jsx)(M.a,{style:{justifyContent:"center",display:"flex"},children:Object(g.jsx)(Ce,{queryText:t})})})})]})},we=Object(s.a)((function(e){return{blogListContainer:{marginTop:0,flexDirection:"row",justifyContent:"center"},loadingContainer:{display:"flex",justifyContent:"center",width:"100%",margin:10},contentListCaption:{marginLeft:15,verticalAlign:"middle",display:"flex",flexDirection:"row"},contentListCaptionText:{marginTop:30,fontWeight:"600",fontSize:25,color:x.mainBoldColor}}})),Ne=function(e){var t=e.text,n=we();return Object(g.jsx)("div",{className:n.contentListCaption,children:Object(g.jsx)(O.a,{className:n.contentListCaptionText,variant:"h5",children:t})})},Me=function(e){var t=e.location,n=we(),r=ge().isBottom,a=m().isMobile,i=Object(c.useState)(!1),o=Object(u.a)(i,2),s=o[0],l=o[1],j=Object(c.useState)(!0),b=Object(u.a)(j,2),d=b[0],f=b[1],O=Object(c.useState)(-1),h=Object(u.a)(O,2),x=h[0],p=h[1],v=Object(c.useState)([]),C=Object(u.a)(v,2),y=C[0],S=C[1],k=function(){var e=Object(N.a)(w.a.mark((function e(t,n){var c,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,l(!0),c=0==t?[]:Object(be.a)(y),!n){e.next=9;break}return e.next=6,ce.getContentsByTitle(n,t,5);case 6:r=e.sent.data,e.next=12;break;case 9:return e.next=11,ce.getContentListByPage(t,5);case 11:r=e.sent.data;case 12:Array.prototype.push.apply(c,r.contents),S(c),p(r.pageRequest.page),0==r.contents.length&&f(!1),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:return e.prev=21,l(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(t,n){return e.apply(this,arguments)}}();function L(e){var n,c=(n=t.search,n=n.substring(1),Object.fromEntries(new URLSearchParams(n))).title;c&&""!=c.trim()?k(e,c):k(e)}return Object(c.useEffect)((function(){f(!0),L(0)}),[t.search]),Object(c.useEffect)((function(){r&&d&&L(x+1)}),[r]),Object(g.jsxs)(M.a,{container:!0,className:n.blogListContainer,children:[Object(g.jsx)(ye,{}),Object(g.jsx)(M.a,{md:a?12:10,children:Object(g.jsx)(M.a,{item:!0,children:y.length>0&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Ne,{text:"Hot"}),Object(g.jsx)(xe,{content:y[0]?y[0]:void 0}),Object(g.jsx)(Ne,{text:"New"}),Object(g.jsx)(me,{contentList:y}),s&&Object(g.jsx)("div",{className:n.loadingContainer,children:Object(g.jsx)(ue.a,{thickness:10,size:20})})]})})})]})},Se=Object(s.a)((function(e){return{}})),ke=function(){Se();return Object(c.useEffect)((function(){document.title=p.APP_NAME})),Object(g.jsx)(l.a,{children:Object(g.jsxs)(ie,{children:[Object(g.jsx)(C,{}),Object(g.jsxs)(j.d,{children:[Object(g.jsx)(j.b,{exact:!0,path:"/",children:Object(g.jsx)(j.a,{to:"/blogs"})}),Object(g.jsx)(j.b,{path:"/blogs/:menu/:id",render:function(e){return Object(g.jsx)(ae,Object(o.a)({},e))}}),Object(g.jsx)(j.b,{path:"/blogs/:id",render:function(e){return Object(g.jsx)(ae,Object(o.a)({},e))}}),Object(g.jsx)(j.b,{path:"/blogs",render:function(e){return Object(g.jsx)(Me,Object(o.a)({},e))}}),Object(g.jsx)(j.b,{path:"/edit",render:function(e){return Object(g.jsx)(se,Object(o.a)({},e))}}),Object(g.jsx)(j.b,{path:"/intro",render:function(e){return Object(g.jsx)(je,Object(o.a)({},e))}}),Object(g.jsx)("div",{style:{height:1200},children:"Not Found Page 404"})]})]})})},Le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,591)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(ke,{})}),document.getElementById("root")),Le()}},[[523,1,2]]]);
//# sourceMappingURL=main.3ed6acc9.chunk.js.map