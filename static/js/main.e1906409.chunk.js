(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{245:function(e,t,a){e.exports=a(520)},250:function(e,t,a){},520:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),i=(a(250),a(251),a(243)),o=(a(88),a(9)),u=(a(101),a(31)),s=(a(140),a(60)),m=(a(256),a(257),a(239)),E=(a(141),a(18)),f=(a(104),a(22)),d=a(53),p=(a(263),a(72)),g=a(54),b=a(56),v=a(221),O=a.n(v),T=a(121),h=a.n(T),C=a(24);function S(){var e=Object(g.a)(['\n  position: "fixed";\n  z-index: 1;\n  width: "100%";\n']);return S=function(){return e},e}function j(){var e=Object(g.a)(["\n  line-height: 64px;\n  float: right;\n"]);return j=function(){return e},e}function y(){var e=Object(g.a)(['\n  height: 100%;\n  padding: 0.25em 0.5rem;\n  margin-bottom: 0 !important;\n  background: rgba(255, 255, 255, 0.2);\n  float: left;\n  font-family: "Indie Flower", cursive;\n  color: #ffffff !important;\n']);return y=function(){return e},e}var x,R=Object(b.a)(O.a)(y()),w=Object(b.a)(p.b)(j()),F=Object(b.a)(s.a.Header)(S()),k=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],l=Object(C.c)(function(e){return e.magic.data.magicCircles}),i=Object(C.c)(function(e){return e.magic.data.descriptors}),u=r.a.useState(void 0),s=Object(d.a)(u,2),g=s[0],b=s[1];return r.a.createElement(F,null,r.a.createElement(f.a,{xs:0,md:12},r.a.createElement(R,{level:1},"Grim\xf3rio Dand'A")),r.a.createElement(w,{theme:"dark",mode:"horizontal"},r.a.createElement(p.b.SubMenu,{key:"magicCircles",title:"Magic circles"},l&&l.map(function(e){return r.a.createElement(p.b.Item,{key:e.id,onClick:function(){b(e),c(!0)}},r.a.createElement("strong",null,e.name))})),r.a.createElement(p.b.SubMenu,{key:"descriptors",title:"Descriptors"},i&&i.map(function(e){return r.a.createElement(p.b.Item,{key:e.id,onClick:function(){b(e),c(!0)}},r.a.createElement("strong",null,e.name))})),r.a.createElement(p.b.Item,{key:"github"},r.a.createElement("a",{href:"https://github.com/antomarsi/grimorio-danda",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{style:{fontSize:"24px"},type:"github",theme:"filled"})))),r.a.createElement(m.a,{title:g?g.name:"",visible:a,onOk:function(){return c(!1)},onCancel:function(){return c(!1)},afterClose:function(){return b(void 0)}},r.a.createElement(E.a.Title,{level:3},g&&g.name),r.a.createElement("p",null,r.a.createElement(h.a,{source:g?g.description:"###No description found"})),r.a.createElement("p",null,g&&g.hasOwnProperty("descriptors")&&r.a.createElement("p",null,r.a.createElement(E.a.Text,{strong:!0},"Descriptors available: "),g.descriptors.map(function(e){var t=i.find(function(t){return t.id===e});return void 0===t?null:t.name}).join(", ")))))},_=a(70),I=a(48);!function(e){e.FETCH_REQUEST="@@favorite/FETCH_REQUEST",e.FETCH_SUCCESS="@@favorite/FETCH_SUCCESS",e.FETCH_ERROR="@@favorite/FETCH_ERROR",e.ADD_FAVORITE="@@favorite/ADD_FAVORITE",e.DELETE_FAVORITE="@@favorite/DELETE_FAVORITE"}(x||(x={}));var H,V=function(){try{var e=localStorage.getItem("fav");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),D={loading:!1,error:!1,favorites:V||[]};!function(e){e.FETCH_REQUEST="@@magics/FETCH_REQUEST",e.FETCH_SUCCESS="@@magics/FETCH_SUCCESS",e.FETCH_ERROR="@@magics/FETCH_ERROR",e.SET_FILTER="@@magics/SET_FILTER",e.RESET_FILTER="@@magics/RESET_FILTER"}(H||(H={}));var A={loading:!1,error:!1,data:{magics:[],descriptors:[],magicCircles:[]},filter:{isFavorited:!1,nameSearch:"",descriptors:[],magicCircle:[],tiers:[]}},U=a(241),L=a(44),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.FETCH_REQUEST:return Object(L.a)({},e,{loading:!0,error:!1});case H.SET_FILTER:return Object(L.a)({},e,{filter:t.payload});case H.FETCH_SUCCESS:return Object(L.a)({},e,{data:{magics:t.payload.magics,descriptors:t.payload.descriptors,magicCircles:t.payload.magicCircle},loading:!1,error:!1});case H.FETCH_ERROR:return Object(L.a)({},e,{loading:!1,error:!0});default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.FETCH_REQUEST:return Object(L.a)({},e,{loading:!0,error:!1});case x.FETCH_SUCCESS:return Object(L.a)({},e,{loading:!1,favorites:t.payload,error:!1});case x.FETCH_ERROR:return Object(L.a)({},e,{loading:!1,error:!1});case x.ADD_FAVORITE:return e.favorites.includes(t.payload)?e:Object(L.a)({},e,{favorites:[].concat(Object(_.a)(e.favorites),[t.payload])});case x.DELETE_FAVORITE:return Object(L.a)({},e,{favorites:e.favorites.filter(function(e){return e!==t.payload})});default:return e}},Q=function(){return Object(I.c)({magic:N,favorite:z})},M=a(36),B=a.n(M),J=a(23),K=a(43),P=function(e){return Object(K.action)(H.FETCH_SUCCESS,e)},X=function(e,t){return Object(K.action)(H.FETCH_ERROR,{title:e,message:t})},q=function(e){return Object(K.action)(H.SET_FILTER,e)},W=a(224),G=a.n(W).a.create({baseURL:"".concat("https://antomarsi.github.io/grimorio-danda/","/data"),headers:{"Content-Type":"application/json"}}),$=a(130),Y=a.n($),Z=B.a.mark(ee);function ee(e){var t;return B.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(J.b)(G.get,"magics.json",e.payload);case 3:return t=a.sent,a.next=6,Object(J.c)(P(t.data));case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(J.c)(X("Erro ao obter magias",a.t0.response?a.t0.response.data.error.message:a.t0));case 12:case"end":return a.stop()}},Z,null,[[0,8]])}var te=[Object(J.f)(H.FETCH_REQUEST,ee),Object(J.f)(H.FETCH_ERROR,function(e){Y.a.fire({type:"error",title:e.payload.title,text:e.payload.message})})],ae=function(e){return Object(K.action)(x.FETCH_SUCCESS,e)},ne=function(e,t){return Object(K.action)(x.FETCH_ERROR,{title:e,message:t})},re=B.a.mark(ie),ce=B.a.mark(oe),le=B.a.mark(ue);function ie(e){var t;return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(J.b)([localStorage,"getItem"],"favorites");case 3:return t=e.sent,e.next=6,Object(J.c)(ae(JSON.parse(t)));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(J.c)(ne("Erro ao obter favoritos",e.t0.response?e.t0.response.data.error.message:e.t0));case 12:case"end":return e.stop()}},re,null,[[0,8]])}function oe(e){var t;return B.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(J.d)(function(e){return e.favorite.favorites});case 3:if((t=a.sent).includes(e.payload)){a.next=8;break}return t.push(e.payload),a.next=8,Object(J.c)(ae(t));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(0),a.next=14,Object(J.c)(ne("Erro ao salvar favorito",a.t0.response?a.t0.response.data.error.message:a.t0));case 14:case"end":return a.stop()}},ce,null,[[0,10]])}function ue(e){var t,a;return B.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(J.d)(function(e){return e.favorite.favorites});case 3:if(!(t=n.sent).includes(e.payload)){n.next=9;break}return a=t.indexOf(e.payload),t=t.splice(a,1),n.next=9,Object(J.c)(ae(t));case 9:n.next=15;break;case 11:return n.prev=11,n.t0=n.catch(0),n.next=15,Object(J.c)(ne("Erro ao salvar favorito",n.t0.response?n.t0.response.data.error.message:n.t0));case 15:case"end":return n.stop()}},le,null,[[0,11]])}var se=[Object(J.f)(x.FETCH_REQUEST,ie),Object(J.e)(x.ADD_FAVORITE,oe),Object(J.e)(x.DELETE_FAVORITE,ue),Object(J.f)(x.FETCH_ERROR,function(e){Y.a.fire({type:"error",title:e.payload.title,text:e.payload.message})})],me=B.a.mark(Ee);function Ee(){return B.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)([].concat(Object(_.a)(te),Object(_.a)(se)));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},me)}var fe={favorite:D,magic:A},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d,a=Object(U.a)(),n=[a],r=Object(I.e)(Q(),e,t(I.a.apply(void 0,n)));return r.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("fav",t)}catch(a){}}(Object(_.a)(r.getState().favorite.favorites))}),a.run(Ee),r},pe=function(){return r.a.createElement(s.a.Footer,{style:{textAlign:"center"}},"Created by"," ",r.a.createElement("a",{href:"https://github.com/antomarsi",rel:"noopener noreferrer",target:"_blank"},"Ant\xf4nio Marco da Silva"))},ge=(a(103),a(33)),be=(a(213),a(40)),ve=(a(441),a(230)),Oe=(a(443),a(62)),Te=(a(180),a(240)),he=a(236),Ce=a(83),Se=a.n(Ce),je=function(){var e=Object(C.c)(function(e){return e.magic.filter}),t=Object(C.c)(function(e){return e.magic.data.magicCircles}),a=Object(C.c)(function(e){return e.magic.data.descriptors}),c=Object(C.b)(),l=Object(n.useState)(!1),i=Object(d.a)(l,2),s=i[0],m=i[1],E={xs:24,sm:8};return r.a.createElement(he.a,{initialValues:e,onSubmit:function(e,t){c(q(e)),t.setSubmitting(!1)},render:function(e){return r.a.createElement(Oe.a,{className:"ant-advanced-search-form",onSubmit:e.handleSubmit},r.a.createElement(u.a,{gutter:24},r.a.createElement(f.a,{span:23},r.a.createElement(Oe.a.Item,{style:{marginBottom:0}},r.a.createElement(Oe.a.Item,{style:{display:"inline-block",width:"90%"}},r.a.createElement(Te.a,{size:"large",placeholder:"Search by name or tag",name:"nameSearch",defaultValue:e.initialValues.nameSearch,onChange:e.handleChange})),r.a.createElement("span",{style:{display:"inline-block",width:"2%"}}),r.a.createElement(Oe.a.Item,{style:{display:"inline-block",float:"right",width:"8%"}},r.a.createElement(ve.a,{onChange:function(t){e.setFieldValue("isFavorited",t)},checkedChildren:r.a.createElement(o.a,{type:"star",theme:"filled",style:{color:"#faad14"}}),defaultChecked:e.initialValues.isFavorited,unCheckedChildren:r.a.createElement(o.a,{type:"star"}),checked:e.values.isFavorited}))))),r.a.createElement(Ce.SlideDown,{closed:!s,className:"custom-dropdown-slidedown"},s&&r.a.createElement(u.a,{gutter:24},r.a.createElement(f.a,E,r.a.createElement(Oe.a.Item,null,r.a.createElement(be.a,{mode:"multiple",style:{width:"100%"},placeholder:"Select magic circle(s)",defaultValue:e.initialValues.magicCircle,onChange:function(t){e.setFieldValue("magicCircle",t)},allowClear:!0},t.map(function(e){return r.a.createElement(be.a.Option,{key:e.id,value:e.id},e.name)})))),r.a.createElement(f.a,E,r.a.createElement(Oe.a.Item,null,r.a.createElement(be.a,{mode:"multiple",style:{width:"100%"},placeholder:"Select descriptor(s)",defaultValue:e.initialValues.descriptors,onChange:function(t){e.setFieldValue("descriptors",t)},allowClear:!0},a.map(function(e){return r.a.createElement(be.a.Option,{key:e.id,value:e.id},e.name)})))),r.a.createElement(f.a,E,r.a.createElement(Oe.a.Item,null,r.a.createElement(be.a,{mode:"multiple",style:{width:"100%"},placeholder:"Select tier(s)",defaultValue:e.initialValues.tiers,onChange:function(t){e.setFieldValue("tiers",t)},allowClear:!0},[0,1,2,3,4,5].map(function(e){return r.a.createElement(be.a.Option,{key:e,value:e},e)})))))),r.a.createElement(u.a,{gutter:8,style:{marginBottom:"1rem"}},r.a.createElement(f.a,{sm:{offset:11,span:4}},r.a.createElement(ge.a,{block:!0,type:"primary",htmlType:"submit",disabled:e.isSubmitting},"Search")),r.a.createElement(f.a,{sm:4},r.a.createElement(ge.a,{block:!0,onClick:function(){c(q(A.filter)),e.resetForm(),e.values=e.initialValues}},"Reset")),r.a.createElement(f.a,{sm:4},r.a.createElement(ge.a,{block:!0,onClick:function(){return m(!s)}},"+ Options ",r.a.createElement(o.a,{type:s?"up":"down"})))))}})},ye=(a(521),a(238)),xe=(a(522),a(237));function Re(){var e=Object(g.a)(["\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n"]);return Re=function(){return e},e}function we(){var e=Object(g.a)(["\n  font-size: 24px;\n  &.favorited {\n    color: #faad14 !important;\n  }\n"]);return we=function(){return e},e}var Fe=Object(b.a)(o.a)(we()),ke=b.a.a(Re()),_e=function(e){var t=e.magic,a=r.a.useState(!1),n=Object(d.a)(a,2),c=n[0],l=n[1],i=Object(C.c)(function(e){return e.favorite.favorites}),s=Object(C.c)(function(e){return e.magic.data.magicCircles}),m=Object(C.c)(function(e){return e.magic.data.descriptors}),p=Object(C.b)(),g=i.includes(t.id),b=t.circles.map(function(e){return{circle:s.filter(function(t){return t.id===e.id})[0],tier:e.tier}}),v=t.circles.map(function(e){return e.descriptor.map(function(e){return m.filter(function(t){return t.id===e})[0]})}).flat().filter(function(e,t,a){return t===a.indexOf(e)}),O=function(){var e;p(g?(e=t.id,Object(K.action)(x.DELETE_FAVORITE,e)):function(e){return Object(K.action)(x.ADD_FAVORITE,e)}(t.id))};return r.a.createElement(xe.a,{className:c?"open":"closed",title:r.a.createElement(u.a,null,r.a.createElement(f.a,null,r.a.createElement(ke,{onClick:function(){return l(!c)}},r.a.createElement(o.a,{type:c?"up":"down"})," ",t.icon&&r.a.createElement("div",null,r.a.createElement(o.a,{type:t.icon})," "),r.a.createElement(E.a.Text,null,t.name))),r.a.createElement(f.a,null,r.a.createElement(E.a.Text,{type:"secondary"},"".concat(b.map(function(e){return e&&e.circle?"".concat(e.circle.name," ").concat(e.tier):null}).join(", ")," (").concat(v.map(function(e){return e?e.name:null}).join(", "),")")))),bordered:!1,extra:r.a.createElement(u.a,null,r.a.createElement(f.a,{span:12},r.a.createElement(ge.a,{shape:"circle",type:"dashed",onClick:function(){return O()}},r.a.createElement(Fe,{type:"star",theme:g?"filled":"outlined",className:g?"favorited":""}))))},r.a.createElement(Ce.SlideDown,{closed:!c},c&&r.a.createElement("div",{style:{whiteSpace:"pre-wrap",paddingTop:"24px"}},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(E.a.Text,{strong:!0},"Execution Time: "),r.a.createElement(E.a.Text,null,t.executionTime)),r.a.createElement("p",null,r.a.createElement(E.a.Text,{strong:!0},"Range: "),r.a.createElement(E.a.Text,null,t.range)),r.a.createElement("p",null,r.a.createElement(E.a.Text,{strong:!0},"Duration: "),r.a.createElement(E.a.Text,null,t.duration)),r.a.createElement("p",null,r.a.createElement(E.a.Text,{strong:!0},"Resistance Test: "),r.a.createElement(E.a.Text,null,t.resistanceTest)),t.target&&r.a.createElement("p",null,r.a.createElement(E.a.Text,{strong:!0},"Target: "),r.a.createElement(E.a.Text,null,t.target)),t.area&&r.a.createElement("p",null,r.a.createElement(E.a.Text,{strong:!0},"Area: "),r.a.createElement(E.a.Text,null,t.area)),t.effect&&r.a.createElement("p",null,r.a.createElement(E.a.Text,{strong:!0},"Effect: "),r.a.createElement(E.a.Text,null,t.effect)),t.materialComponent&&r.a.createElement("p",null,r.a.createElement(E.a.Text,{strong:!0},"Material Component: "),r.a.createElement(E.a.Text,null,t.materialComponent)),t.xpCost&&r.a.createElement("p",null,r.a.createElement(E.a.Text,{strong:!0},"XP Cost: "),r.a.createElement(E.a.Text,null,t.xpCost)),r.a.createElement(h.a,{source:t.description})))))},Ie=a(526),He=a(525);function Ve(){var e=Object(g.a)(["\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n"]);return Ve=function(){return e},e}var De=b.a.a(Ve()),Ae=function(e){var t=Object(n.useState)(!0),a=Object(d.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(E.a.Title,{level:3},r.a.createElement(De,{onClick:function(){return l(!c)}},r.a.createElement(o.a,{type:c?"down":"up"}))," ","Tier ",e.tier,r.a.createElement(E.a.Text,{className:"magic-tier-subtitle"},e.values.length," spells for this tier.")),r.a.createElement(Se.a,{closed:!c},c&&r.a.createElement(ye.a,{itemLayout:"horizontal",dataSource:e.values,loading:e.loading,rowKey:function(e){return e.id},renderItem:function(e){return r.a.createElement(_e,{magic:e,key:e.id})}})))},Ue=function(){var e=Object(C.c)(function(e){return e.magic.filter}),t=Object(C.c)(function(e){return e.favorite.favorites}),a=Object(C.c)(function(a){return a.magic.data.magics.filter(function(a){return!e.isFavorited||t.includes(a.id)}).filter(function(t){return!e.nameSearch.length||t.name.toLowerCase().includes(e.nameSearch.toLowerCase())}).filter(function(t){return!e.tiers.length||e.tiers.some(function(e){return t.circles.some(function(t){return t.tier===e})})}).filter(function(t){return!e.magicCircle.length||e.magicCircle.some(function(e){return t.circles.some(function(t){return t.id===e})})}).filter(function(t){return!e.descriptors.length||e.descriptors.some(function(e){return t.circles.some(function(t){return t.descriptor.some(function(t){return t===e})})})})}),c=Object(C.c)(function(e){return e.magic.loading}),l=Object(C.c)(function(e){return e.magic.error}),i=Object(C.b)();Object(n.useEffect)(function(){i(Object(K.action)(H.FETCH_REQUEST))},[i]);var u=[0,1,2,3,4,5].map(function(e){return a.filter(function(t){return t.circles.find(function(t){return t.tier===e})})});return r.a.createElement("div",null,c&&r.a.createElement("div",{style:{textAlign:"center",fontSize:48}},r.a.createElement(o.a,{type:"loading"})),!c&&0===u.map(function(e,t){return e.length}).flat().reduce(function(e,t){return e+t},0)&&r.a.createElement("div",{style:{textAlign:"center",fontSize:48}},r.a.createElement(o.a,{type:"meh"}),r.a.createElement("br",null),r.a.createElement(E.a.Title,{level:4},"No spell found!")),l&&r.a.createElement("div",{style:{textAlign:"center",fontSize:48}},r.a.createElement(o.a,{type:"frown"}),r.a.createElement("br",null),r.a.createElement(E.a.Title,{level:4},"That's so sad... Bard, play Despacito!")),!c&&r.a.createElement(Ie.a,{className:"magic-tier-list"},u.map(function(e,t){return e.length>0&&r.a.createElement(He.a,{key:t,timeout:500,className:"magic-tier"},r.a.createElement(Ae,{tier:t,loading:c,values:e}))})))},Le=s.a.Content,Ne=de(),ze=function(){return r.a.createElement(C.a,{store:Ne},r.a.createElement(s.a,{className:"layout"},r.a.createElement(k,null),r.a.createElement(s.a,null,r.a.createElement(Le,{className:"page-content"},r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(u.a,null,r.a.createElement(je,null)),r.a.createElement(u.a,null,r.a.createElement(Ue,null))),r.a.createElement(i.a,null,r.a.createElement("div",{className:"ant-back-top-inner"},r.a.createElement(o.a,{type:"arrow-up"}))))),r.a.createElement(pe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[245,1,2]]]);
//# sourceMappingURL=main.e1906409.chunk.js.map