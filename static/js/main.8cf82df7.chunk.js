(this.webpackJsonpthelist=this.webpackJsonpthelist||[]).push([[0],{161:function(e,t,a){},162:function(e,t,a){},164:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},178:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(28),r=a.n(s),i=(a(161),a(162),a(0)),o=a.n(i),l=a(2),j=a(14),d=(a(164),a(30)),u=a(3),b=function(){return Object(u.jsx)("div",{className:"home_logo",children:Object(u.jsx)("h1",{className:"logo_h1",children:Object(u.jsxs)(d.b,{to:"/home",children:[Object(u.jsx)("span",{className:"logo_mainLine",children:"the"}),Object(u.jsx)("span",{className:"logo_mainLine listID",children:"LIST."})]})})})},O=a(113),h=(a(166),a(136)),p=a(74),m=a(20),x=a(50),f=Object(h.a)({apiKey:"AIzaSyBDV2MS4yXCQz1lZaGweaNFcMg9tMC_J3c",authDomain:"thelist-18d98.firebaseapp.com",projectId:"thelist-18d98",databaseURL:"thelist-18d98.firebaseio.com",storageBucket:"thelist-18d98.appspot.com",messagingSenderId:"845337646998",appId:"1:845337646998:web:430c37dbaa97245d88efb7",measurementId:"G-5R2Q4ZCQZB"}),v=Object(p.a)(f),g=Object(m.g)(f),N=Object(x.c)(f),w=(a(167),function(){return Object(u.jsx)("div",{className:"lds-dual-ring"})}),k=Object(c.createContext)(),y=function(e){var t=e.children,a=Object(c.useState)(null),n=Object(j.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(!0),o=Object(j.a)(i,2),l=o[0],d=o[1];return Object(c.useEffect)((function(){Object(p.b)(v,(function(e){r(e),d(!1)}))}),[]),l?Object(u.jsx)(w,{}):Object(u.jsx)(k.Provider,{value:{user:s},children:t})},_=a(21),C=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(_.f)(),r=Object(c.useContext)(k).user,i=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.c)(v);case 2:s("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"header_nav",onClick:function(){return window.scroll(0,0)},children:Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)("div",{className:"NavLogo",children:Object(u.jsx)(b,{})}),r?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"links",children:[Object(u.jsx)(d.b,{to:"/profile",children:Object(u.jsx)("span",{className:"links_profile",children:"Profile"})}),Object(u.jsx)("span",{className:"links_logout",onClick:i,children:"Logout"}),Object(u.jsx)("div",{className:"hamburger",children:Object(u.jsx)("a",{href:"#",onClick:function(){return n(!a)},children:Object(u.jsx)(O.a,{style:{width:"25px",height:"25px"}})})})]}),Object(u.jsxs)("div",{className:a?"mob_links":"mob_displayoff",children:[Object(u.jsx)(d.b,{to:"/profile",children:Object(u.jsx)("span",{className:"mob_profile",onClick:function(){return n(!a)},children:"Profile"})}),Object(u.jsx)("span",{className:"mob_logout",onClick:function(){i(),n(!a)},children:"Logout"})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"links",children:[Object(u.jsx)("div",{className:"links_register",children:Object(u.jsx)(d.b,{to:"/register",children:"Register"})}),Object(u.jsx)("div",{className:"links_signin",children:Object(u.jsx)(d.b,{to:"/signin",children:"Sign In"})}),Object(u.jsx)("div",{className:"hamburger",children:Object(u.jsx)("a",{href:"#",onClick:function(){return n(!a)},children:Object(u.jsx)(O.a,{style:{width:"25px",height:"25px"}})})})]}),Object(u.jsxs)("div",{className:a?"mob_links":"mob_displayoff",children:[Object(u.jsx)("div",{className:"mob_reg",onClick:function(){return n(!a)},children:Object(u.jsx)(d.b,{to:"/register",children:"Register"})}),Object(u.jsx)("div",{className:"mob_signin",onClick:function(){return n(!a)},children:Object(u.jsx)(d.b,{to:"/signin",children:"Sign In"})})]})]})]})})})},S=a(7),P=a(19),F=(a(168),a(71)),T=function(){var e=Object(c.useState)({email:"",password:"",error:null,loading:!1}),t=Object(j.a)(e,2),a=t[0],n=t[1],s=a.email,r=a.password,i=a.error,b=a.loading,O=function(e){n(Object(P.a)(Object(P.a)({},a),{},Object(S.a)({},e.target.name,e.target.value)))},h=Object(_.f)(),p=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n(Object(P.a)(Object(P.a)({},a),{},{error:null,loading:!0})),s&&r){e.next=6;break}n(Object(P.a)(Object(P.a)({},a),{},{error:"All fields are required"})),e.next=16;break;case 6:return e.prev=6,e.next=9,Object(F.d)(v,s,r);case 9:e.sent,h("/home"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),"Firebase: Error (auth/user-not-found)."===e.t0.message?n(Object(P.a)(Object(P.a)({},a),{},{error:"User not found",loading:!1})):"Firebase: Error (auth/wrong-password)."===e.t0.message?n(Object(P.a)(Object(P.a)({},a),{},{error:"Incorrect Password",loading:!1})):n(Object(P.a)(Object(P.a)({},a),{},{error:e.t0.message,loading:!1}));case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"signin_outer",children:Object(u.jsxs)("div",{className:"main_signin",children:[Object(u.jsx)("div",{className:"signin_heading",children:Object(u.jsx)("h3",{children:"Sign In"})}),Object(u.jsx)("div",{className:"signin_email signin_input",children:Object(u.jsx)("input",{type:"email",required:!0,name:"email",value:s,onChange:O,placeholder:"Email..."})}),Object(u.jsx)("div",{className:"signin_password signin_input",children:Object(u.jsx)("input",{type:"password",required:!0,name:"password",placeholder:"Password...",value:r,onChange:O})}),i?Object(u.jsx)("p",{className:"errorclass",children:i}):null,Object(u.jsxs)("div",{className:"loginbutton",children:[Object(u.jsx)("button",{onClick:p,disabled:b,children:b?"...":"Sign In"}),Object(u.jsxs)("p",{className:"signinp",children:["Don't have an account?",Object(u.jsx)(d.b,{to:"/register",children:Object(u.jsx)("span",{className:"signinSpan",children:"Sign Up"})})]})]})]})})},U=(a(169),function(){var e=Object(c.useState)({name:"",email:"",password:"",error:null,loading:!1}),t=Object(j.a)(e,2),a=t[0],n=t[1],s=a.name,r=a.email,i=a.password,b=a.error,O=a.loading,h=function(e){n(Object(P.a)(Object(P.a)({},a),{},Object(S.a)({},e.target.name,e.target.value)))},p=Object(_.f)(),x=function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n(Object(P.a)(Object(P.a)({},a),{},{error:null,loading:!0})),s&&r&&i){e.next=6;break}n(Object(P.a)(Object(P.a)({},a),{},{error:"All fields are required"})),e.next=19;break;case 6:return e.prev=6,e.next=9,Object(F.a)(v,r,i);case 9:return c=e.sent,e.next=12,Object(m.h)(Object(m.d)(g,"users",c.user.uid),{uid:c.user.uid,name:s,email:r,createdAt:m.a.fromDate(new Date)});case 12:n({name:"",email:"",password:"",error:null,loading:"false"}),p("/home"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),"Firebase: Error (auth/invalid-email)."===e.t0.message?n(Object(P.a)(Object(P.a)({},a),{},{error:"Invalid Email",loading:!1})):"Firebase: Password should be at least 6 characters (auth/weak-password)."==e.t0.message?n(Object(P.a)(Object(P.a)({},a),{},{error:"Password should be at least 6 characters",loading:!1})):"Firebase: Error (auth/email-already-in-use)."===e.t0.message?n(Object(P.a)(Object(P.a)({},a),{},{error:"Email already in use",loading:!1})):n(Object(P.a)(Object(P.a)({},a),{},{error:e.t0.message,loading:!1}));case 19:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"signup_outer",children:Object(u.jsxs)("div",{className:"main_signup",children:[Object(u.jsx)("div",{className:"signup_heading",children:Object(u.jsx)("h3",{children:"Sign Up"})}),Object(u.jsx)("div",{className:"signup_name signup_input",children:Object(u.jsx)("input",{type:"text",autoFocus:!0,name:"name",required:!0,placeholder:"Name...",value:s,onChange:h})}),Object(u.jsx)("div",{className:"signup_email signup_input",children:Object(u.jsx)("input",{type:"email",required:!0,name:"email",value:r,onChange:h,placeholder:"Email..."})}),Object(u.jsx)("div",{className:"signup_password signup_input",children:Object(u.jsx)("input",{type:"password",required:!0,name:"password",placeholder:"Password...",value:i,onChange:h})}),b?Object(u.jsx)("p",{className:"errorclass",children:b}):null,Object(u.jsxs)("div",{className:"signupbutton",children:[Object(u.jsx)("button",{onClick:x,disabled:O,children:O?"...":"Sign Up"}),Object(u.jsxs)("p",{children:["Have an account?",Object(u.jsx)(d.b,{to:"/signin",children:Object(u.jsx)("span",{className:"signinSpan",children:"Sign In"})})]})]})]})})}),I=(a(170),a(171),a(285)),B=a(290),D=a(291),E=a(88),L=a.n(E),W=a(103),z=a.n(W),A=a(142),M=a.n(A),R=a(104),q=a.n(R),H=Object(I.a)({root:{width:"100% ",position:"fixed",bottom:"0",color:"white",backgroundColor:"#282c34",alignItems:"center",display:"flex",justifyContent:"center",zIndex:100}}),V=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),a=t[0],n=t[1],s=H(),r=Object(_.f)();return Object(c.useEffect)((function(){0===a?r("/watched"):1===a?r("/Plan"):2===a?r("/Favs"):3===a&&r("/search")}),[a,r]),Object(u.jsx)("div",{className:"bottomNav",children:Object(u.jsxs)(B.a,{showLabels:!0,value:a,className:s.root,onChange:function(e,t){n(t)},children:[Object(u.jsx)(D.a,{label:"Watched",style:{color:"black"},icon:Object(u.jsx)(L.a,{})}),Object(u.jsx)(D.a,{label:"Plan to Watch",style:{color:"black"},icon:Object(u.jsx)(z.a,{})}),Object(u.jsx)(D.a,{label:"Favorites",style:{color:"black"},icon:Object(u.jsx)(M.a,{})}),Object(u.jsx)(D.a,{label:"Search",style:{color:"black"},icon:Object(u.jsx)(q.a,{})})]})})},J=(a(178),a(107)),Q=a.n(J),Z="https://image.tmdb.org/t/p/w300",G=a(60),K=a.n(G),X=a(143),Y=a.n(X),$=(a(229),a(230),function(e){return e.preventDefault()}),ee=function(e){var t=e.id,a=e.media_type,n=Object(c.useState)([]),s=Object(j.a)(n,2),r=s[0],i=s[1],d=r.map((function(e){return Object(u.jsxs)("div",{className:"carouselItem",children:[Object(u.jsx)("img",{src:e.profile_path?"".concat(Z,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:$,className:"carouselItem__img"}),Object(u.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),b=function(){var e=Object(l.a)(o.a.mark((function e(){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.get("https://api.themoviedb.org/3/".concat(a?"tv":"movie","/").concat(t,"/credits?api_key=").concat("01539e3343f779187896ca74e1d78e6c","&language=en-US"));case 2:c=e.sent,n=c.data,i(n.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),Object(u.jsx)(Y.a,{mouseTracking:!0,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},items:d,autoPlay:!0})},te=a(144),ae=a.n(te),ce=a(292),ne=function(e){e.delID,e.index;var t=e.id,a=e.mediaType,n=e.w,s=e.f,r=e.l,i=e.p,d=(e.k,Object(c.useState)([])),b=Object(j.a)(d,2),O=b[0],h=b[1],p=Object(c.useState)(!1),x=Object(j.a)(p,2),f=x[0],N=x[1],w=Object(c.useState)(!0),k=Object(j.a)(w,2),y=k[0],_=k[1];"movie"===a?a=0:"tv"===a&&(a=1);var C="https://api.themoviedb.org/3/".concat(a?"tv":"movie","/").concat(t,"?api_key=").concat("01539e3343f779187896ca74e1d78e6c","&language=en-US"),S=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.get(C);case 2:t=e.sent,a=t.data,h(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(m.b)(g,"users/".concat(v.currentUser.uid,"/").concat(v.currentUser.uid,"Watched")),e.next=3,Object(m.h)(Object(m.d)(c,"".concat(t)),{id:t,mediaType:a},{merge:!0});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(m.b)(g,"users/".concat(v.currentUser.uid,"/").concat(v.currentUser.uid,"Plan")),e.next=3,Object(m.h)(Object(m.d)(c,"".concat(t)),{id:t,mediaType:a},{merge:!0});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(m.b)(g,"users/".concat(v.currentUser.uid,"/").concat(v.currentUser.uid,"Favs")),e.next=3,Object(m.h)(Object(m.d)(c,"".concat(t)),{id:t,mediaType:a},{merge:!0});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(o.a.mark((function e(a,c,n,s,r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=6;break}return e.next=3,Object(m.c)(Object(m.d)(g,"users/".concat(v.currentUser.uid,"/").concat(v.currentUser.uid,"Watched"),"".concat(t)));case 3:_(!1),e.next=20;break;case 6:if(!n){e.next=12;break}return e.next=9,Object(m.c)(Object(m.d)(g,"users/".concat(v.currentUser.uid,"/").concat(v.currentUser.uid,"Plan"),"".concat(t)));case 9:_(!1),e.next=20;break;case 12:if(!r){e.next=17;break}return e.next=15,Object(m.c)(Object(m.d)(g,"users/".concat(v.currentUser.uid,"/").concat(v.currentUser.uid,"Favs"),"".concat(t)));case 15:e.next=20;break;case 17:return e.next=19,Object(m.c)(Object(m.d)(g,"users/".concat(v.currentUser.uid,"/").concat(v.currentUser.uid,"Favs"),"".concat(t)));case 19:_(!1);case 20:case"end":return e.stop()}}),e)})));return function(t,a,c,n,s){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){S()}),[t]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:y?"movies":"hideButton",children:[Object(u.jsx)("img",{src:O.poster_path?"".concat(Z).concat(O.poster_path):"https://www.movienewz.com/img/films/poster-holder.jpg",alt:O.name||O.title,className:"Content_portrait"}),Object(u.jsx)("img",{src:O.backdrop_path?"".concat(Z).concat(O.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:O.name||O.title,className:"Content_landscape"}),Object(u.jsxs)("div",{className:"Content_about",children:[Object(u.jsxs)("span",{className:"Content_title",children:[O.name||O.title," (",(O.first_air_date||O.release_date||"-----").substring(0,4),")"]}),O.tagline&&Object(u.jsx)("i",{className:"tagline",children:O.tagline}),Object(u.jsx)("span",{className:"Content_description",children:O.overview}),Object(u.jsx)("span",{className:"release",children:O.release_date?"Release Date : ".concat(O.release_date):"First Air Date : ".concat(O.first_air_date)}),Object(u.jsx)(ee,{id:t,media_type:a}),Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("button",{className:n||i&&!r?"hideButton":"icon addToWatched",onClick:function(){P(t=t,a=a)},children:[Object(u.jsx)("div",{class:"tooltip",children:"\u2714"}),Object(u.jsx)(L.a,{})]}),Object(u.jsxs)("button",{className:i?"icon addToWatched":"hideButton",onClick:function(){P(t=t,a=a),U(t,n=!1,i=i,s=!1)},children:[Object(u.jsx)("div",{class:"tooltip",children:"\u2714"}),Object(u.jsx)(L.a,{})]}),Object(u.jsxs)("button",{className:s||r?"icon addToWatched  ":"hideButton",onClick:function(){F(t=t,a=a)},children:[Object(u.jsx)("div",{class:"tooltip",children:"\u2714"}),Object(u.jsx)(z.a,{})]}),Object(u.jsx)("button",{className:s&&!r?"hideButton":"favBTN",onClick:function(){f?U(t,n=!1,i=!1,s=s,!0):T(t=t,a=a),N(!f)},children:Object(u.jsx)(ce.a,{children:Object(u.jsx)(ae.a,{className:f?"red":"normal"})})}),Object(u.jsx)("button",{className:n?"":"hideButton",onClick:function(){U(t,n=n,i=!1,s=!1)},children:Object(u.jsx)(Q.a,{})}),Object(u.jsx)("button",{className:i?"":"hideButton",onClick:function(){U(t,n=!1,i=i,s=!1)},children:Object(u.jsx)(Q.a,{})}),Object(u.jsx)("button",{className:s?"":"hideButton",style:{color:"white"},onClick:function(){U(t,n=!1,i=!1,s=s)},children:Object(u.jsx)(Q.a,{})})]})]}),Object(u.jsxs)("div",{className:"img-footer",children:[Object(u.jsx)("h3",{children:O.title||O.name}),Object(u.jsx)("span",{className:"".concat(O.vote_average<=6?"red":O.vote_average<=8?"orange":"green"),children:O.vote_average})]})]})})},se=a(287),re=a(145),ie=a(281),oe=(a(231),Object(re.a)({palette:{type:"dark"}})),le=function(e){var t=e.setPage,a=e.numOfPages;return Object(u.jsx)("div",{className:"PaginationDiv",style:{color:"white",width:"100%",display:"flex",justifyContent:"center",marginTop:10,marginBottom:10},children:Object(u.jsx)(ie.a,{theme:oe,children:Object(u.jsx)(se.a,{count:a,shape:"rounded",color:"secondary",onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},hideNextButton:!0,hidePrevButton:!0})})})},je=function(){var e=Object(c.useState)(1),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),r=Object(j.a)(s,2),i=r[0],d=r[1],b=Object(c.useState)([]),O=Object(j.a)(b,2),h=O[0],p=O[1],m=(_.g.id,"https://api.themoviedb.org/3/trending/all/day?api_key=".concat("01539e3343f779187896ca74e1d78e6c","&page=").concat(a)),x=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.get(m).then((function(e){p(e.data.results),d(e.data.total_pages)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){x()}),[a]),Object(u.jsx)("div",{className:"trendBound",children:Object(u.jsxs)("div",{className:"trending",children:[Object(u.jsx)("span",{className:"trendingTitle",children:"Trending Today"}),h&&h.map((function(e){return Object(u.jsx)(ne,{index:e.id,id:e.id,mediaType:e.media_type,l:!0},e.id)})),Object(u.jsx)("div",{className:"Pagination",children:Object(u.jsx)(le,{setPage:n,numOfPages:i})}),Object(u.jsx)("div",{className:"homenav",children:Object(u.jsx)(V,{})})]})})},de=(a(232),function(){return Object(u.jsxs)("div",{className:"home_div",children:[Object(u.jsxs)("div",{className:"home_hero",children:[Object(u.jsx)("h1",{className:"home_h11",children:"This is"}),Object(u.jsxs)("h1",{className:"home_h12",children:[Object(u.jsx)("span",{className:"mainLine",children:"the"}),Object(u.jsx)("span",{className:"mainLine listID",children:"LIST."})]})]}),Object(u.jsx)("div",{className:"center-con",children:Object(u.jsx)("a",{class:"ca3-scroll-down-link ca3-scroll-down-arrow","data-ca3_iconfont":"ETmodules","data-ca3_icon":""})})]})}),ue=function(){return Object(c.useContext)(k).user?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(je,{})," "]}):Object(u.jsx)(de,{})},be=a(147),Oe=["component"],he=function(e){e.component;var t=Object(be.a)(e,Oe),a=Object(c.useContext)(k).user,n=Object(_.f)();return Object(u.jsx)(_.a,Object(P.a)(Object(P.a)({},t),{},{exact:!0,render:function(e){a?Object(P.a)({},e):n("/signin")}}))},pe=a(284),me=a(282),xe=a(288),fe=a(283),ve=(a(233),function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(j.a)(s,2),i=r[0],d=r[1],b=Object(c.useState)(1),O=Object(j.a)(b,2),h=O[0],p=O[1],m=Object(c.useState)([]),x=Object(j.a)(m,2),f=x[0],v=x[1],g=Object(c.useState)(),N=Object(j.a)(g,2),w=N[0],k=N[1],y=Object(re.a)({palette:{type:"dark",primary:{main:"#fff"}}}),_=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=").concat("01539e3343f779187896ca74e1d78e6c","&language=en-US&query=").concat(i,"&page=").concat(h,"&include_adult=false"));case 3:t=e.sent,c=t.data,v(c.results),k(c.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){window.scroll(0,0),_()}),[a,h]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"SearchPage",children:[Object(u.jsxs)(ie.a,{theme:y,children:[Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)(pe.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return d(e.target.value)}}),Object(u.jsx)(me.a,{onClick:_,variant:"contained",style:{marginLeft:10},children:Object(u.jsx)(q.a,{fontSize:"large"})})]}),Object(u.jsx)("div",{className:"tabs",children:Object(u.jsxs)(xe.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){n(t),p(1)},centered:!0,style:{paddingBottom:5},"aria-label":"disabled tabs example",children:[Object(u.jsx)(fe.a,{style:{width:"50%"},label:"Search Movie"}),Object(u.jsx)(fe.a,{style:{width:"50%"},label:"Search Series"})]})})]}),Object(u.jsxs)("div",{className:"trending",children:[f&&f.map((function(e){return Object(u.jsx)(ne,{index:e.id,id:e.id,poster:e.poster_path,title:e.title||e.name,rating:e.vote_average,mediaType:a,l:!0},e.id)})),i&&!f&&(a?Object(u.jsx)("h2",{children:"No Series Found"}):Object(u.jsx)("h2",{children:"No Movies Found"}))]}),w>1&&Object(u.jsx)(le,{setPage:p,numOfPages:w}),Object(u.jsx)("div",{className:"homenav",children:Object(u.jsx)(V,{})})]})})}),ge=function(){var e=Object(m.b)(g,"users/".concat(v.currentUser.uid,"/").concat(v.currentUser.uid,"Plan")),t=Object(c.useState)(),a=Object(j.a)(t,2),n=a[0],s=a[1],r=function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.f)(e);case 2:a=t.sent,s(a.docs.map((function(e){return Object(P.a)(Object(P.a)({},e.data()),{},{id:e.id})})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(u.jsxs)("div",{className:"WatchedPage",children:[Object(u.jsx)("span",{className:"trendingTitle",children:"Plan to watch"}),n&&n.map((function(e){return Object(u.jsx)(ne,{index:e.id,id:e.id,mediaType:e.mediaType,p:!0},e.id)})),Object(u.jsx)("div",{className:"homenav",children:Object(u.jsx)(V,{})})]})},Ne=(a(234),function(){var e=Object(m.b)(g,"users/".concat(v.currentUser.uid,"/").concat(v.currentUser.uid,"Watched")),t=Object(c.useState)(),a=Object(j.a)(t,2),n=a[0],s=a[1],r=function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.f)(e);case 2:a=t.sent,s(a.docs.map((function(e){return Object(P.a)(Object(P.a)({},e.data()),{},{id:e.id})})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(u.jsxs)("div",{className:"WatchedPage",children:[Object(u.jsx)("span",{className:"trendingTitle",children:"Finished Watching"}),n&&n.map((function(e){return Object(u.jsx)(ne,{delId:e.id,index:e.id,id:e.id,mediaType:e.mediaType,w:!0},e.id)})),Object(u.jsx)("div",{className:"homenav",children:Object(u.jsx)(V,{})})]})}),we=function(){var e=Object(m.b)(g,"users/".concat(v.currentUser.uid,"/").concat(v.currentUser.uid,"Favs")),t=Object(c.useState)(),a=Object(j.a)(t,2),n=a[0],s=a[1],r=function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.f)(e);case 2:a=t.sent,s(a.docs.map((function(e){return Object(P.a)(Object(P.a)({},e.data()),{},{id:e.id})})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()})),Object(u.jsxs)("div",{className:"WatchedPage",children:[Object(u.jsx)("span",{className:"trendingTitle",children:"Favorites"}),n&&n.map((function(e){return Object(u.jsx)(ne,{index:e.id,id:e.id,mediaType:e.mediaType,f:!0},e.id)})),Object(u.jsx)("div",{className:"homenav",children:Object(u.jsx)(V,{})})]})},ke=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:"25px",height:"25px",cursor:"pointer"},viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})})},ye=a.p+"static/media/Defaultavatar.cb2574ca.jpg",_e=function(e){var t=e.deleteImage;return Object(u.jsx)("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",style:{width:"25px",height:"25px",cursor:"pointer",color:"#f24957"},viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})})},Ce=(a(235),function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(),r=Object(j.a)(s,2),i=r[0],d=r[1],b=Object(_.f)("");Object(c.useEffect)((function(){if(Object(m.e)(Object(m.d)(g,"users",v.currentUser.uid)).then((function(e){e.exists&&d(e.data())})),a){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(x.d)(N,"avatar/".concat((new Date).getTime()," - ").concat(a.name)),e.prev=1,!i.avatarPath){e.next=5;break}return e.next=5,Object(x.a)(Object(x.d)(N,i.avatarPath));case 5:return e.next=7,Object(x.e)(t,a);case 7:return c=e.sent,e.next=10,Object(x.b)(Object(x.d)(N,c.ref.fullPath));case 10:return s=e.sent,e.next=13,Object(m.i)(Object(m.d)(g,"users",v.currentUser.uid),{avatar:s,avatarPath:c.ref.fullPath});case 13:n(""),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[a]);var O=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!window.confirm("Delete avatar?")){e.next=8;break}return e.next=5,Object(x.a)(Object(x.d)(N,i.avatarPath));case 5:return e.next=7,Object(m.i)(Object(m.d)(g,"users",v.currentUser.uid),{avatar:"",avatarPath:""});case 7:b("/");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"trendBound",children:[Object(u.jsxs)("div",{className:"proSec",children:[console.log(i),i?Object(u.jsxs)("div",{className:"profile_container",children:[Object(u.jsxs)("div",{className:"img_container",children:[Object(u.jsx)("img",{src:i.avatar||ye,alt:"avatar"}),Object(u.jsx)("div",{className:"overlay",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"photo",children:Object(u.jsx)(ke,{})}),i.avatar?Object(u.jsx)(_e,{deleteImage:O}):null,Object(u.jsx)("input",{type:"file",accept:"image/*",style:{display:"none"},id:"photo",onChange:function(e){return n(e.target.files[0])}})]})})]}),Object(u.jsxs)("div",{className:"text_container",children:[Object(u.jsx)("h3",{children:i.name}),Object(u.jsx)("p",{children:i.email}),Object(u.jsxs)("p",{children:["Joined on: ",i.createdAt.toDate().toDateString()]})]})]}):null]}),Object(u.jsx)(V,{})]})});var Se=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(y,{children:Object(u.jsx)(d.a,{children:Object(u.jsx)("div",{className:"bound",children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(C,{}),Object(u.jsxs)(_.c,{children:[Object(u.jsx)(he,{path:"/profile",element:Object(u.jsx)(Ce,{})}),Object(u.jsx)(he,{path:"/search",element:Object(u.jsx)(ve,{})}),Object(u.jsx)(he,{path:"/watched",element:Object(u.jsx)(Ne,{})}),Object(u.jsx)(he,{path:"/Plan",element:Object(u.jsx)(ge,{})}),Object(u.jsx)(he,{path:"/Favs",element:Object(u.jsx)(we,{})}),Object(u.jsx)(he,{path:"/home",element:Object(u.jsx)(je,{})}),Object(u.jsx)(_.a,{path:"/signin",element:Object(u.jsx)(T,{})}),Object(u.jsx)(_.a,{path:"/register",element:Object(u.jsx)(U,{})}),Object(u.jsx)(_.a,{exact:!0,path:"/",element:Object(u.jsx)(ue,{})})]})]})})})})})},Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,294)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(Se,{})}),document.getElementById("root")),Pe()}},[[236,1,2]]]);
//# sourceMappingURL=main.8cf82df7.chunk.js.map