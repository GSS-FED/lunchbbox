(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(88),o=n.n(i),l=(n(98),n(24)),c=n(10),d=n(2);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=r.a.createElement("title",null,"Group"),u=r.a.createElement("desc",null,"Created with Sketch."),m=r.a.createElement("g",{id:"Symbols",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"per",transform:"translate(-16.000000, -44.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(16.000000, 44.000000)"},r.a.createElement("rect",{id:"Rectangle",fill:"#FECE2E",x:0,y:0,width:32,height:12,rx:6}),r.a.createElement("path",{d:"M21,3.49677419 C21,3.65806452 20.9354839,3.81935484 20.8193548,3.93548387 L15.2709677,9.48387097 C15.1548387,9.6 14.9935484,9.66451613 14.8322581,9.66451613 C14.6709677,9.66451613 14.5096774,9.6 14.3935484,9.48387097 L11.1806452,6.27096774 C11.0645161,6.15483871 11,5.99354839 11,5.83225806 C11,5.67096774 11.0645161,5.50967742 11.1806452,5.39354839 L12.0580645,4.51612903 C12.1741935,4.4 12.3354839,4.33548387 12.4967742,4.33548387 C12.6580645,4.33548387 12.8193548,4.4 12.9354839,4.51612903 L14.8322581,6.41935484 L19.0645161,2.18064516 C19.1806452,2.06451613 19.3419355,2 19.5032258,2 C19.6645161,2 19.8258065,2.06451613 19.9419355,2.18064516 L20.8193548,3.05806452 C20.9354839,3.17419355 21,3.33548387 21,3.49677419 Z",id:"\\uF00C",fill:"#505050",fillRule:"nonzero"})))),h=function(e){var t=e.svgRef,n=s(e,["svgRef"]);return r.a.createElement("svg",p({width:"32px",height:"12px",viewBox:"0 0 32 12",ref:t},n),f,u,m)},g=r.a.forwardRef(function(e,t){return r.a.createElement(h,p({svgRef:t},e))}),C=(n.p,d.a.label.withConfig({displayName:"AvatarCheckbox__Label",componentId:"yhi41f-0"})(["font-size:16px;margin-bottom:8px;margin-right:10px;display:inline-block;position:relative;cursor:pointer;"])),b=Object(d.a)(g).withConfig({displayName:"AvatarCheckbox__CheckboxWithAnimation",componentId:"yhi41f-1"})(["position:absolute;left:calc(50% - 16px);bottom:26px;transition:opacity 0.3s,transform 0.3s cubic-bezier(0.25,0.1,0.47,1.67);opacity:",";transform:",";"],function(e){return e.ischecked?1:0},function(e){return e.ischecked?"scale(1)":"scale(0)"}),E=d.a.img.withConfig({displayName:"AvatarCheckbox__Avatar",componentId:"yhi41f-2"})(["width:50px;height:50px;border-radius:20px;object-fit:cover;opacity:",";transition:all 0.3s;border:solid 3px #fece2e;"],function(e){return e.ischecked?1:.5}),x=d.a.div.withConfig({displayName:"AvatarCheckbox__TextCenter",componentId:"yhi41f-3"})(["text-align:center;"]),y=function(e){return r.a.createElement(C,null,r.a.createElement(E,{ischecked:e.ischecked,alt:e.member.name,src:e.member.avatar[0].thumbnails.large.url}),r.a.createElement(x,null,r.a.createElement("input",{style:{display:"none"},type:"checkbox",onChange:e.handleChange,checked:e.ischecked}),e.member.name),r.a.createElement(b,{ischecked:e.ischecked?1:0}))},L=n(49),v=n.n(L),w="keyv7sHqzJx3CNjUp",k="appbBH2HPUYrrBv1u";v.a.configure({endpointUrl:"https://api.airtable.com",apiKey:w});var O=v.a.base(k),_=function(e){var t=r.a.useState([]),n=Object(c.a)(t,2),a=n[0],i=n[1],o=r.a.useState([]),l=Object(c.a)(o,2),d=l[0],p=l[1];return r.a.useEffect(function(){O("\u4e2d\u9910\u597d\u670b\u53cb").select({fields:["\u6210\u54e1","\u982d\u50cf"]}).firstPage(function(e,t){i(t.map(function(e){return{id:e.id,name:e.get("\u6210\u54e1"),avatar:e.get("\u982d\u50cf")}}))}),O("\u4e2d\u5348\u597d\u9910\u5ef3").select({fields:["\u9910\u5ef3","\u4e0d\u662f\u90a3\u9ebc\u611b\u9019\u9593\u7684\u4eba"]}).firstPage(function(e,t){p(t.map(function(e){return{id:e.id,name:e.get("\u9910\u5ef3"),noLike:e.get("\u4e0d\u662f\u90a3\u9ebc\u611b\u9019\u9593\u7684\u4eba")}}))})},[]),{members:a,restaurant:d}};function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=r.a.createElement("title",null,"logo"),I=r.a.createElement("desc",null,"Created with Sketch."),N=r.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Result",transform:"translate(-20.000000, -31.000000)"},r.a.createElement("rect",{fill:"#FECE2E",x:0,y:0,width:414,height:896}),r.a.createElement("rect",{id:"Rectangle",fill:"#FFFFFF",x:0,y:0,width:414,height:168}),r.a.createElement("g",{id:"logo",transform:"translate(20.000000, 30.000000)"},r.a.createElement("text",{id:"LUNCH-BOX",fontFamily:"ArialRoundedMTBold, Arial Rounded MT Bold",fontSize:22,fontWeight:"normal","line-spacing":22,letterSpacing:-2,fill:"#505050"},r.a.createElement("tspan",{x:53,y:21},"LUNCH"),r.a.createElement("tspan",{x:53,y:43},"BOX")),r.a.createElement("g",{id:"lunchbox",transform:"translate(0.000000, 1.000000)"},r.a.createElement("path",{d:"M37.7692308,8.33333333 L19.5144615,8.33333333 C19.1589378,8.33324371 18.8207462,8.49970673 18.5869538,8.78986667 C17.4884513,10.1530667 15.4066462,11 13.1538462,11 C9.81829744,11 7,9.16817778 7,7 C7,4.83182222 9.81829744,3 13.1538462,3 C15.4066462,3 17.4884513,3.84693333 18.5869538,5.21013333 C18.8207462,5.50029327 19.1589378,5.66675629 19.5144615,5.66666667 L37.7692308,5.66666667 C38.4486659,5.66745054 38.9992764,6.26394527 39,7 C38.9992764,7.73605473 38.4486659,8.33254946 37.7692308,8.33333333 Z",id:"Path",fill:"#FECE2E"}),r.a.createElement("path",{d:"M6,23.25 L6,24.5 L17.4489796,24.5 C17.7839553,24.5000266 18.1051945,24.6318048 18.342,24.8663333 L20.4974388,27 L24.5025612,27 L26.658,24.8663333 C26.8948055,24.6318048 27.2160447,24.5000266 27.5510204,24.5 L39,24.5 L39,23.25 C38.9992576,22.5599487 38.4343375,22.0007349 37.7372449,22 L7.2627551,22 C6.56566245,22.0007349 6.00074238,22.5599487 6,23.25 Z",id:"Path",fill:"#FECE2E"}),r.a.createElement("path",{d:"M37.0841037,40.8676923 L38,34 L8,34 L8.91589632,40.8698022 C9.00654307,41.5173055 9.52975918,41.9975338 10.1472644,42 L35.8527356,42 C36.4707863,41.9970784 36.9940824,41.51588 37.0841037,40.8676923 Z",id:"Path",fill:"#FECE2E"}),r.a.createElement("path",{d:"M42,30.75 L42,28.25 C41.9992586,27.5599487 41.435096,27.0007349 40.7389381,27 L28.5664956,27 L26.4139469,29.1336667 C26.1774589,29.3681952 25.8566505,29.4999734 25.5221239,29.5 L20.4778761,29.5 C20.1433495,29.4999734 19.8225411,29.3681952 19.5860531,29.1336667 L17.4335044,27 L5.26106195,27 C4.56490399,27.0007349 4.00074138,27.5599487 4,28.25 L4,30.75 C4.00074138,31.4400513 4.56490399,31.9992651 5.26106195,32 L40.7389381,32 C41.435096,31.9992651 41.9992586,31.4400513 42,30.75 Z",id:"Path",fill:"#FECE2E"}),r.a.createElement("path",{d:"M36.6171875,2.51953125 L18.4695078,2.51953125 C16.8177031,0.9325625 14.2333359,0 11.421875,0 C9.15698438,0 7.01067969,0.5993125 5.37835938,1.68741406 C3.58882031,2.88032813 2.60351563,4.51802344 2.60351563,6.29882813 C2.60351563,8.07929688 3.58882031,9.71732813 5.37835938,10.9102422 C7.01067969,11.9983438 9.15698438,12.5976563 11.421875,12.5976563 C14.2336719,12.5976563 16.8177031,11.6650938 18.4695078,10.078125 L36.6171875,10.078125 C38.7010078,10.078125 40.3964844,8.38264844 40.3964844,6.29882813 C40.3964844,4.21500781 38.7010078,2.51953125 36.6171875,2.51953125 Z M36.6171875,7.55859375 L17.9323438,7.55859375 C17.5684441,7.55850907 17.2222848,7.71578736 16.9829844,7.9899375 C15.8586016,9.27792188 13.72775,10.078125 11.421875,10.078125 C8.00774219,10.078125 5.12304688,8.347375 5.12304688,6.29882813 C5.12304688,4.25028125 8.00774219,2.51953125 11.421875,2.51953125 C13.72775,2.51953125 15.8586016,3.31973438 16.9829844,4.60771875 C17.2222848,4.88186889 17.5684441,5.03914718 17.9323438,5.0390625 L36.6171875,5.0390625 C37.3126298,5.03980312 37.8762125,5.60338579 37.8769531,6.29882813 C37.8762125,6.99427046 37.3126298,7.55785313 36.6171875,7.55859375 Z M40.4804688,22.9764453 C41.9468359,23.4964766 43,24.8966641 43,26.5390625 L43,29.0585938 C43,31.1377109 41.31225,32.8298281 39.2351484,32.8375547 L38.2575703,39.7531641 C37.9931875,41.6051875 36.3847188,43 34.5158984,43 L8.48410156,43 C6.61528125,43 5.00714844,41.6051875 4.74276563,39.7551797 L3.76485156,32.8375547 C1.68775,32.8298281 0,31.1377109 0,29.0585938 L0,26.5390625 C0,24.8966641 1.05316406,23.4964766 2.51953125,22.9764453 L2.51953125,21.5 C2.51953125,19.4161797 4.21500781,17.7207031 6.29882813,17.7207031 L36.7011719,17.7207031 C38.7849922,17.7207031 40.4804688,19.4161797 40.4804688,21.5 L40.4804688,22.9764453 Z M5.0390625,21.5 L5.0390625,22.7597656 L16.4609375,22.7597656 C16.7951202,22.7597924 17.1155989,22.8926001 17.3518438,23.1289609 L19.5021797,25.2792969 L23.4978203,25.2792969 L25.6481563,23.1289609 C25.8844011,22.8926001 26.2048798,22.7597924 26.5390625,22.7597656 L37.9609375,22.7597656 L37.9609375,21.5 C37.9601969,20.8045577 37.3966142,20.240975 36.7011719,20.2402344 L6.29882813,20.2402344 C5.60338579,20.240975 5.03980312,20.8045577 5.0390625,21.5 Z M35.7628984,39.39875 L36.6904219,32.8378906 L6.30957813,32.8378906 L7.23710156,39.4007656 C7.32889905,40.01934 7.85875728,40.4781127 8.48410156,40.4804688 L34.5158984,40.4804688 C35.1417951,40.4776777 35.6717344,40.0179782 35.7628984,39.39875 Z M40.4804688,29.0585938 L40.4804688,26.5390625 C40.4797281,25.8436202 39.9161455,25.2800375 39.2207031,25.2792969 L27.0607734,25.2792969 L24.9104375,27.4296328 C24.6741926,27.6659936 24.3537139,27.7988013 24.0195313,27.7988281 L18.9804688,27.7988281 C18.6462861,27.7988013 18.3258074,27.6659936 18.0895625,27.4296328 L15.9392266,25.2792969 L3.77929688,25.2792969 C3.08385454,25.2800375 2.52027187,25.8436202 2.51953125,26.5390625 L2.51953125,29.0585938 C2.52027187,29.7540361 3.08385454,30.3176188 3.77929688,30.3183594 L39.2207031,30.3183594 C39.9161455,30.3176188 40.4797281,29.7540361 40.4804688,29.0585938 Z",id:"Shape",fill:"#505050",fillRule:"nonzero"}))))),P=function(e){var t=e.svgRef,n=R(e,["svgRef"]);return r.a.createElement("svg",j({width:"122px",height:"43px",viewBox:"0 0 122 43",ref:t},n),A,I,N)},z=r.a.forwardRef(function(e,t){return r.a.createElement(P,j({svgRef:t},e))}),F=(n.p,n(50)),M=d.a.div.withConfig({displayName:"App__Container",componentId:"g2qa2-0"})(["margin:0 auto;display:flex;flex-direction:column;"]),S=d.a.div.withConfig({displayName:"App__PrimaryButton",componentId:"g2qa2-1"})(["box-sizing:border-box;margin:10px auto;width:158px;padding:12px 16px;font-size:24px;border:solid 3px #505050;border-radius:28px;cursor:pointer;"]),B=d.a.div.withConfig({displayName:"App__BottomBackground",componentId:"g2qa2-2"})(["background-color:#ffcc00;min-height:calc(100vh - 194px);"]),Z=Object(F.a)(B)({open:{delayChildren:100,staggerChildren:50},closed:{}}),q=d.a.div.withConfig({displayName:"App__TopLayout",componentId:"g2qa2-3"})(["margin:28px;"]),T=d.a.div.withConfig({displayName:"App__TopLogoArea",componentId:"g2qa2-4"})(["display:flex;justify-content:space-between;margin-bottom:16px;"]),W=d.a.span.withConfig({displayName:"App__Text",componentId:"g2qa2-5"})(["color:",";font-size:",";margin-right:",";"],function(e){return e.color?e.color:"#000"},function(e){return e.size?e.size:"16px"},function(e){return e.marginRight?e.marginRight:0});var H=d.a.div.withConfig({displayName:"App__RestaurantCardContainer",componentId:"g2qa2-6"})(["margin:28px;background-color:#fff;border-radius:20px;display:flex;"]),U=Object(F.a)(H)({open:{y:0,opacity:1},closed:{y:30,opacity:0}}),J=d.a.div.withConfig({displayName:"App__RestaurantPhoto",componentId:"g2qa2-7"})(["width:140px;height:140px;margin:10px;border:solid;border-radius:16px;background:#ffffff;flex:auto 0 0;"]),G=d.a.div.withConfig({displayName:"App__RestaurantTitle",componentId:"g2qa2-8"})(["font-size:32px;display:flex;align-items:center;"]),X=function(e){return r.a.createElement(U,null,r.a.createElement(J,null),r.a.createElement(G,null,e.name))},K=function(e){return r.a.createElement("div",null,r.a.createElement(W,{color:"#505050",size:"26px",marginRight:"8px"},e.selectedCount),r.a.createElement(W,{color:"#a7a7a7",size:"18px"},"/"),r.a.createElement(W,{color:"#a7a7a7",size:"20px"},e.total))},Y=function(){var e=_(),t=e.members,n=e.restaurant,a=r.a.useState([]),i=Object(c.a)(a,2),o=i[0],d=i[1],p=r.a.useState(["","",""]),s=Object(c.a)(p,2),f=s[0],u=s[1];return r.a.createElement(M,null,r.a.createElement(q,null,r.a.createElement(T,null,r.a.createElement(z,null),r.a.createElement(K,{total:t.length,selectedCount:o.length})),r.a.createElement("div",null,t.map(function(e){var t=o.includes(e.id);return r.a.createElement(y,{key:e.id,member:e,ischecked:t,handleChange:function(){if(t){var n=Object(l.a)(o),a=n.indexOf(e.id);a>-1&&n.splice(a,1),d(n)}else d(function(t){return[].concat(Object(l.a)(t),[e.id])})}})}))),r.a.createElement(Z,{pose:""!==f[0]?"open":"closed"},!!f&&f.map(function(e,t){return r.a.createElement(X,{key:t,name:e.name})})),r.a.createElement(S,{onClick:function(){var e=Object(l.a)(n).filter(function(e){return void 0===e.noLike||0===e.noLike.filter(function(e){return o.indexOf(e)>-1}).length}).sort(function(e,t){return Math.random()>.5?-1:1}).slice(0,3);u(e)}},""===f[0]?"\u5230\u5e95\u5403\u4ec0\u9ebc":"\u6211\u60f3\u5403\u5225\u7684"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,n){e.exports=n(246)},98:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.15fb0d64.chunk.js.map