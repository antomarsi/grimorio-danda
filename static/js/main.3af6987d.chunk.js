(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{226:function(e,t,n){e.exports=n(476)},231:function(e,t,n){},476:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),c=n(6),l=n.n(c),o=(n(231),n(105)),u=n(205),s=n(121),m=n(106),f=n(123),d=(n(232),n(233),n(34)),E=n(23),p=n(85),g=n(70),v=n(9),h=n(480),b=n(73),T=n(38),O=n(482),y=n(47),C=n(71),S=n(28),j=n(29);!function(e){e.GET_FAVORITES="@@favorite/GET_FAVORITE",e.ADD_FAVORITE="@@favorite/ADD_FAVORITE",e.DELETE_FAVORITE="@@favorite/DELETE_FAVORITE",e.TOGGLE_FAVORITE="@@favorite/TOGGLE_FAVORITE"}(a||(a={}));var w=function(e){return Object(j.action)(a.TOGGLE_FAVORITE,e)},R=n(107),x=Object(R.a)([function(e){return e.favorites}],function(e){return e.favorites}),F=n(108),k=n.n(F);function I(){var e=Object(g.a)(["\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n"]);return I=function(){return e},e}function _(){var e=Object(g.a)(["\n  font-size: 24px;\n  &.favorited {\n    color: #faad14 !important;\n  }\n"]);return _=function(){return e},e}var A,L=Object(C.a)(v.a)(_()),V=C.a.a(I()),D=Object(E.c)(function(e,t){return{magicCircles:e.magic.magicCircle,descriptors:e.magic.descriptors,favorites:x(e)}},function(e){return Object(S.b)({toggleFavorite:w},e)})(function(e){var t=e.magic,n=e.magicCircles,a=e.descriptors,r=e.toggleFavorite,c=e.favorites,l=i.a.useState(!1),o=Object(p.a)(l,2),u=o[0],s=o[1],m=c.indexOf(t.id)>-1,f=t.circles.map(function(e){return e?{circle:n.filter(function(t){return t.id===e.id})[0],tier:e.tier}:null}),d=t.circles.map(function(e){return e.descriptor.map(function(e){return a.filter(function(t){return t.id===e})[0]})}).flat().filter(function(e,t,n){return t===n.indexOf(e)});return i.a.createElement(h.a,{title:i.a.createElement(b.a,null,i.a.createElement(T.a,null,i.a.createElement(V,{onClick:function(){return s(!u)}},i.a.createElement(v.a,{type:u?"up":"down"})," ",t.icon&&i.a.createElement("div",null,i.a.createElement(v.a,{type:t.icon})," "),i.a.createElement(O.a.Text,null,t.name))),i.a.createElement(T.a,null,i.a.createElement(O.a.Text,{type:"secondary"},"".concat(f.map(function(e){return e&&e.circle?"".concat(e.circle.name," ").concat(e.tier):null}).join(", ")," (").concat(d.map(function(e){return e?e.name:null}).join(", "),")")))),bordered:!1,extra:i.a.createElement(b.a,null,i.a.createElement(T.a,{span:12},i.a.createElement(y.a,{shape:"circle",type:"dashed",onClick:function(){return r(t.id)}},i.a.createElement(L,{type:"star",theme:m?"filled":"outlined",className:m?"favorited":""}))))},i.a.createElement("div",{style:{whiteSpace:"pre-wrap"}},u&&i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement(O.a.Text,{strong:!0},"Execution Time: "),i.a.createElement(O.a.Text,null,t.executionTime)),i.a.createElement("p",null,i.a.createElement(O.a.Text,{strong:!0},"Range: "),i.a.createElement(O.a.Text,null,t.range)),i.a.createElement("p",null,i.a.createElement(O.a.Text,{strong:!0},"Duration: "),i.a.createElement(O.a.Text,null,t.duration)),i.a.createElement("p",null,i.a.createElement(O.a.Text,{strong:!0},"Resistance Test: "),i.a.createElement(O.a.Text,null,t.resistanceTest)),t.target&&i.a.createElement("p",null,i.a.createElement(O.a.Text,{strong:!0},"Target: "),i.a.createElement(O.a.Text,null,t.target)),t.area&&i.a.createElement("p",null,i.a.createElement(O.a.Text,{strong:!0},"Area: "),i.a.createElement(O.a.Text,null,t.area)),t.effect&&i.a.createElement("p",null,i.a.createElement(O.a.Text,{strong:!0},"Effect: "),i.a.createElement(O.a.Text,null,t.effect)),t.materialComponent&&i.a.createElement("p",null,i.a.createElement(O.a.Text,{strong:!0},"Material Component: "),i.a.createElement(O.a.Text,null,t.materialComponent)),t.xpCost&&i.a.createElement("p",null,i.a.createElement(O.a.Text,{strong:!0},"XP Cost: "),i.a.createElement(O.a.Text,null,t.xpCost)),i.a.createElement(k.a,{source:t.description}))))}),H=n(481),U=Object(R.a)([function(e){return e.magic.magics},function(e){return e.favorites.favorites},function(e){return e.filter}],function(e,t,n){return e.filter(function(e){return!(n.isFavorited&&!t.includes(e.id))&&(!(n.magicCircle.length&&!e.circles.find(function(e){return n.magicCircle.indexOf(e.id)>-1}))&&(!(n.tiers.length&&!e.circles.find(function(e){return n.tiers.indexOf(e.tier)>-1}))&&((!n.descriptors.length||!e.circles.find(function(e){return!e.descriptor.find(function(e){return n.descriptors.indexOf(e)>-1})}))&&!(n.nameSearch.length&&!e.name.toLowerCase().includes(n.nameSearch.toLowerCase())||e.tags&&!e.tags.map(function(e){return e.toLowerCase()}).includes(n.nameSearch.toLowerCase())))))})}),G=Object(E.c)(function(e){return{loading:e.magic.loading,magics:U(e)}})(function(e){var t=e.magics,n=e.loading,a=[0,1,2,3,4,5].map(function(e){return t.filter(function(t){return t.circles.find(function(t){return t.tier===e})})});return i.a.createElement("div",null,n&&i.a.createElement("div",{style:{textAlign:"center",fontSize:48}},i.a.createElement(v.a,{type:"loading"})),!n&&0===a.map(function(e,t){return e.length}).flat()[0]&&i.a.createElement("div",{style:{textAlign:"center",fontSize:48}},i.a.createElement(v.a,{type:"meh"}),i.a.createElement("br",null),i.a.createElement(O.a.Title,{level:4},"No spell found!")),!n&&a.map(function(e,t){return!!e.length&&i.a.createElement(H.a,{key:t,itemLayout:"horizontal",dataSource:e,loading:n,rowKey:function(e){return e.id},header:i.a.createElement(O.a.Title,{level:3},"Tier ",t),renderItem:function(e){return i.a.createElement(D,{magic:e})}})}))}),z=n(25),N=n(479),P=n(484),M=n(477),W=n(84);!function(e){e.GET_FILTER="@@filter/GET_FILTER",e.UPDATE_FILTER="@@filter/UPDATE_FILTER",e.RESET_FILTER="@@filter/RESET_FILTER"}(A||(A={}));var J=function(e){return Object(j.action)(A.UPDATE_FILTER,e)},Q=function(){return Object(j.action)(A.RESET_FILTER)},q=n(224),B={descriptors:[],magicCircle:[],tiers:[],isFavorited:!1,nameSearch:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.UPDATE_FILTER:return Object(z.a)({},e,t.payload);case A.RESET_FILTER:return Object(z.a)({},e,B);default:return e}},X=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleReset=function(){n.props.resetFilter(),n.props.setValues(B)},n.toggle=function(){var e=n.state.expand;n.setState({expand:!e})},n.render=function(){var e=n.props,t=e.descriptors,a=e.magicCircles,r=e.values,c=e.handleChange,l=e.handleSubmit,o=e.setFieldValue,u=n.state.expand,s={xs:24,sm:8};return i.a.createElement(N.a,{className:"ant-advanced-search-form",onSubmit:l},i.a.createElement(b.a,{gutter:24},i.a.createElement(T.a,{span:23},i.a.createElement(N.a.Item,null,i.a.createElement(N.a.Item,{style:{display:"inline-block",width:"90%"}},i.a.createElement(P.a,{size:"large",placeholder:"Search by name or tag",name:"nameSearch",value:r.nameSearch,onChange:c})),i.a.createElement("span",{style:{display:"inline-block",width:"2%"}}),i.a.createElement(N.a.Item,{style:{display:"inline-block",float:"right",width:"8%"}},i.a.createElement(M.a,{onChange:function(e){o("isFavorited",e)},checkedChildren:i.a.createElement(v.a,{type:"star",theme:"filled",style:{color:"#faad14"}}),unCheckedChildren:i.a.createElement(v.a,{type:"star"}),checked:r.isFavorited}))))),u&&i.a.createElement(b.a,{gutter:24},i.a.createElement(T.a,s,i.a.createElement(N.a.Item,null,i.a.createElement(W.a,{mode:"multiple",style:{width:"100%"},placeholder:"Select magic circle(s)",value:r.magicCircle,onChange:function(e){o("magicCircle",e)},allowClear:!0},a.map(function(e){return i.a.createElement(W.a.Option,{key:e.id,value:e.id},e.name)})))),i.a.createElement(T.a,s,i.a.createElement(N.a.Item,null,i.a.createElement(W.a,{mode:"multiple",style:{width:"100%"},placeholder:"Select descriptor(s)",value:r.descriptors,onChange:function(e){o("descriptors",e)},allowClear:!0},t.filter(function(e){return!(r.magicCircle.length>0&&!a.filter(function(e){return r.magicCircle.includes(e.id)}).find(function(t){return t.descriptors.includes(e.id)}))}).map(function(e){return i.a.createElement(W.a.Option,{key:e.id,value:e.id},e.name)})))),i.a.createElement(T.a,s,i.a.createElement(N.a.Item,null,i.a.createElement(W.a,{mode:"multiple",style:{width:"100%"},placeholder:"Select tier(s)",value:r.tiers,onChange:function(e){o("tiers",e)},allowClear:!0},[0,1,2,3,4,5].map(function(e){return i.a.createElement(W.a.Option,{key:e,value:e},e)}))))),i.a.createElement(b.a,null,i.a.createElement(T.a,{span:24,style:{textAlign:"right"}},i.a.createElement(y.a,{type:"primary",htmlType:"submit",disabled:n.props.isSubmitting},"Search"),i.a.createElement(y.a,{style:{marginLeft:8},onClick:n.handleReset},"Reset"),i.a.createElement(y.a,{size:"small",style:{marginLeft:8,fontSize:12},onClick:n.toggle},"More Options ",i.a.createElement(v.a,{type:u?"up":"down"})))))},n.state=Object(z.a)({},n.state,{expand:!1}),n}return Object(f.a)(t,e),t}(r.Component),$=Object(q.a)({mapPropsToValues:function(e){return e.filterValues},handleSubmit:function(e,t){var n=t.props,a=t.setSubmitting;t.setValues;n.updateFilter(e),a(!1)}})(X),Y=Object(E.c)(function(e){return{filterValues:e.filter,descriptors:e.magic.descriptors,magicCircles:e.magic.magicCircle}},function(e){return Object(S.b)({resetFilter:Q,updateFilter:J},e)})($),Z=function(){return i.a.createElement("div",null,i.a.createElement(b.a,null,i.a.createElement(Y,null)),i.a.createElement(b.a,null,i.a.createElement(G,null)))},ee=function(e){return i.a.createElement(d.c,null,i.a.createElement(d.a,{exact:!0,path:"/",component:Z}),i.a.createElement(d.a,{exact:!0,path:"/teste",component:Z}))},te=n(78),ne=n(478),ae=n(486),re=n(483),ie=n(485),ce=n(220),le=n.n(ce),oe=n(79);function ue(){var e=Object(g.a)(["\n  line-height: 64px;\n  float: right;\n"]);return ue=function(){return e},e}function se(){var e=Object(g.a)(['\n  height: 100%;\n  padding: 0.25em 0.5rem;\n  margin-bottom: 0 !important;\n  background: rgba(255, 255, 255, 0.2);\n  float: left;\n  font-family: "Indie Flower", cursive;\n  color: #ffffff !important;\n']);return se=function(){return e},e}var me,fe=Object(C.a)(le.a)(se()),de=Object(C.a)(ie.b)(ue()),Ee=Object(E.c)(function(e,t){return{magicCircles:e.magic.magicCircle,descriptors:e.magic.descriptors}})(function(e){var t=e.magicCircles,n=e.descriptors,a=i.a.useState(!1),r=Object(p.a)(a,2),c=r[0],l=r[1],o=i.a.useState(void 0),u=Object(p.a)(o,2),s=u[0],m=u[1];return i.a.createElement(ne.a.Header,{style:{position:"fixed",zIndex:1,width:"100%"}},i.a.createElement(oe.b,{to:"/"},i.a.createElement(fe,{level:1},"Grim\xf3rio Dand'A")),i.a.createElement(de,{theme:"dark",mode:"horizontal"},i.a.createElement(ie.b.SubMenu,{key:"magicCircles",title:"Magic circles"},t&&t.map(function(e){return i.a.createElement(ie.b.Item,{key:e.id,onClick:function(){m(e),l(!0)}},i.a.createElement("strong",null,e.name))})),i.a.createElement(ie.b.SubMenu,{key:"descriptors",title:"Descriptors"},n&&n.map(function(e){return i.a.createElement(ie.b.Item,{key:e.id,onClick:function(){m(e),l(!0)}},i.a.createElement("strong",null,e.name))})),i.a.createElement(ie.b.Item,{key:"github"},i.a.createElement("a",{href:"https://github.com/antomarsi/grimorio-danda",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(v.a,{style:{fontSize:"24px"},type:"github",theme:"filled"})))),i.a.createElement(re.a,{title:s?s.name:"",visible:c,onOk:function(){return l(!1)},onCancel:function(){return l(!1)},afterClose:function(){return m(void 0)}},i.a.createElement(O.a.Title,{level:3},s&&s.name),i.a.createElement("p",null,i.a.createElement(k.a,{source:s?s.description:"###No description found"})),i.a.createElement("p",null,s&&s.hasOwnProperty("descriptors")&&i.a.createElement("p",null,i.a.createElement(O.a.Text,{strong:!0},"Descriptors avalibles: "),s.descriptors.map(function(e){var t=n.find(function(t){return t.id===e});return void 0===t?null:t.name}).join(", ")))))}),pe=n(222),ge=n.n(pe);!function(e){e.FETCH_REQUEST="@@magics/FETCH_REQUEST",e.FETCH_SUCCESS="@@magics/FETCH_SUCCESS",e.FETCH_ERROR="@@magics/FETCH_ERROR"}(me||(me={}));var ve=function(){return function(e){return e(Object(j.action)(me.FETCH_REQUEST)),ge.a.get("data/magics.json").then(function(t){var n;e((n=t.data,Object(j.action)(me.FETCH_SUCCESS,n)))}).catch(function(t){var n;e((n=t.message,Object(j.action)(me.FETCH_ERROR,n)))})}},he=ne.a.Content,be=ne.a.Footer,Te=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.magicRequest()}},{key:"render",value:function(){var e=this.props.history;return i.a.createElement(te.a,{history:e},i.a.createElement(oe.a,null,i.a.createElement(ne.a,{className:"layout"},i.a.createElement(Ee,null),i.a.createElement(he,{style:{padding:"0 50px",marginTop:80}},i.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},i.a.createElement(ee,null))),i.a.createElement(ae.a,null,i.a.createElement("div",{className:"ant-back-top-inner"},i.a.createElement(v.a,{type:"arrow-up"}))),i.a.createElement(be,{style:{textAlign:"center"}},"Created by"," ",i.a.createElement("a",{href:"https://github.com/antomarsi",rel:"noopener noreferrer",target:"_blank"},"Ant\xf4nio Marco da Silva")))))}}]),t}(r.Component),Oe=Object(E.c)(null,function(e){return Object(S.b)({magicRequest:ve},e)})(Te),ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ce(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Se=n(223),je=n(204),we=n(168),Re={favorites:[]},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.GET_FAVORITES:return Object(z.a)({},e,{loading:!0});case a.ADD_FAVORITE:return e.favorites.includes(t.payload)?e:Object(z.a)({},e,{favorites:[].concat(Object(we.a)(e.favorites),[t.payload])});case a.DELETE_FAVORITE:return Object(z.a)({},e,{favorites:e.favorites.filter(function(e){return e!==t.payload})});case a.TOGGLE_FAVORITE:return e.favorites.includes(t.payload)?Object(z.a)({},e,{favorites:e.favorites.filter(function(e){return e!==t.payload})}):Object(z.a)({},e,{favorites:[].concat(Object(we.a)(e.favorites),[t.payload])});default:return e}},Fe={magics:[],magicCircle:[],descriptors:[],errors:void 0,loading:!1},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me.FETCH_REQUEST:return Object(z.a)({},e,{loading:!0});case me.FETCH_SUCCESS:return Object(z.a)({},e,{magics:t.payload.magics,descriptors:t.payload.descriptors,magicCircle:t.payload.magicCircle,loading:!1});case me.FETCH_ERROR:return Object(z.a)({},e,{loading:!1,errors:t.payload});default:return e}},Ie=function(e){return Object(S.c)({router:Object(te.b)(e),favorites:xe,magic:ke,filter:K})},_e=function(e,t){var n=[Se.a,Object(je.a)(e)];return Object(S.d)(Ie(e),t,S.a.apply(void 0,n))},Ae=n(30),Le=Object(Ae.a)(),Ve={magic:{loading:!1,magics:[],descriptors:[],magicCircle:[]},favorites:{favorites:[]},filter:B},De=localStorage.getItem("favorites");"string"===typeof De&&(Ve.favorites=JSON.parse(De));var He=_e(Le,Ve);He.subscribe(function(){localStorage.setItem("favorites",JSON.stringify(He.getState().favorites))}),l.a.render(i.a.createElement(E.a,{store:He},i.a.createElement(Oe,{history:Le})),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/grimorio-danda",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/grimorio-danda","/service-worker.js");ye?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ce(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ce(t,e)})}}()}},[[226,1,2]]]);
//# sourceMappingURL=main.3af6987d.chunk.js.map