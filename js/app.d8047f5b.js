(function(a){function t(t){for(var r,l,i=t[0],s=t[1],c=t[2],d=0,f=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(a[r]=s[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var a,t=0;t<o.length;t++){for(var e=o[t],r=!0,i=1;i<e.length;i++){var s=e[i];0!==n[s]&&(r=!1)}r&&(o.splice(t--,1),a=l(l.s=e[0]))}return a}var r={},n={app:0},o=[];function l(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=a,l.c=r,l.d=function(a,t,e){l.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},l.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},l.t=function(a,t){if(1&t&&(a=l(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)l.d(e,r,function(t){return a[t]}.bind(null,r));return e},l.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return l.d(t,"a",t),t},l.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=s;o.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"01c4":function(a,t,e){},"06f5":function(a,t,e){"use strict";e("1426")},1426:function(a,t,e){},"45d1":function(a,t,e){},"56d7":function(a,t,e){"use strict";e.r(t);var r=e("2b0e"),n=e("7496"),o=function(){var a=this,t=a._self._c;return t(n["a"],[t("router-view",{staticStyle:{"z-index":"1"}}),t("particles-bg",{staticStyle:{"z-index":"0"},attrs:{canvas:{backgroundColor:"#888"},type:"fountain",num:5,bg:!0}})],1)},l=[],i=e("5c51"),s={components:{ParticlesBg:i["a"]}},c=s,u=(e("f5ef"),e("2877")),d=Object(u["a"])(c,o,l,!1,null,null,null),f=d.exports,p=e("f309");r["a"].use(p["a"]);var m=new p["a"]({}),v=e("8c4f"),g=e("8336"),h=e("b0af"),b=e("99d9"),y=e("a523"),_=e("169a"),k=e("ce7e"),x=e("132d"),j=e("2fa4"),C=e("8654"),w=function(){var a=this,t=a._self._c;return t(n["a"],{staticClass:"mt-10"},[t("Navbar",[t(g["a"],{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",color:"success"},on:{click:function(t){a.dialog=!0}}},[t(x["a"],{attrs:{dark:""}},[a._v("mdi-account-multiple-plus")])],1)],1),t(y["a"],[t("PlayerList",{attrs:{players:a.players}}),t(_["a"],{attrs:{width:"500"},model:{value:a.dialog,callback:function(t){a.dialog=t},expression:"dialog"}},[t(h["a"],[t(b["d"],{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[a._v(" Lisa mängija ")]),t(b["c"],[t(C["a"],{attrs:{label:"Nimi"},model:{value:a.playerName,callback:function(t){a.playerName=t},expression:"playerName"}})],1),t(k["a"]),t(b["a"],[t(j["a"]),t(g["a"],{attrs:{color:"primary",text:""},on:{click:function(t){return a.addPlayer()}}},[a._v("Lisa")]),t(g["a"],{attrs:{color:"danger",text:""},on:{click:function(t){a.dialog=!1}}},[a._v("sulge")])],1)],1)],1)],1)],1)},O=[],P=(e("14d9"),function(){var a=this,t=a._self._c;return t("div",[t("div",{staticClass:"text-center",staticStyle:{"padding-bottom":"5%"}},[t(g["a"],{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",color:"error"},on:{click:function(t){return a.reload()}}},[t(x["a"],{attrs:{dark:""}},[a._v("mdi-refresh")])],1),t(g["a"],{staticClass:"mx-2",attrs:{fab:"",dark:"",large:"",color:"primary"},on:{click:function(t){a.infoDialog=!0}}},[t(x["a"],{attrs:{dark:""}},[a._v("mdi-information-outline")])],1),a._t("default")],2),t(_["a"],{attrs:{width:"500"},model:{value:a.infoDialog,callback:function(t){a.infoDialog=t},expression:"infoDialog"}},[t("About")],1)],1)}),N=[],S=function(){var a=this,t=a._self._c;return t(h["a"],[t(b["d"],{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[a._v("Rakenduse info")]),t(b["c"],[a._v("Rakendus on loodud, et meeles pidada mugavalt oma discgolfi mängu skoori.")]),t(k["a"]),t(b["a"],[t(j["a"]),t(g["a"],{attrs:{color:"danger",text:""},on:{click:function(t){a.infoDialog=!1}}},[a._v("sulge")])],1)],1)},D=[],A={name:"About",data(){return{aboutDialog:!1}},methods:{showDialog(){this.dialog=!0}}},R=A,L=Object(u["a"])(R,S,D,!1,null,null,null),T=L.exports,M={name:"Navbar",data:()=>({infoDialog:!1}),components:{About:T},methods:{reload(){location.reload()}}},V=M,z=Object(u["a"])(V,P,N,!1,null,null,null),B=z.exports,G=e("0798"),H=e("62ad"),J=e("0fd9"),E=function(){var a=this,t=a._self._c;return a.players.length>0?t("div",a._l(a.players,(function(e,r){return t(J["a"],{key:r,attrs:{dense:""}},[t(H["a"],{attrs:{cols:"8"}},[t(h["a"],{attrs:{color:"#009933",dark:""}},[t(b["d"],{staticClass:"headline"},[a._v(a._s(e.name))]),t(b["b"],[t("h1",[a._v(a._s(e.score))])]),t(b["a"],{staticClass:"text-right",attrs:{color:"error"}},[t(g["a"],{attrs:{text:""},on:{click:function(t){return a.playerRem(r)}}},[a._v("Eemalda mängija")])],1)],1)],1),t(H["a"],{staticClass:"ratinBtns",attrs:{cols:"4"}},[t(g["a"],{staticClass:"mx-2",attrs:{large:"",color:"success"},on:{click:function(a){e.score+=1}}},[t(x["a"],[a._v("mdi-plus")])],1),t(g["a"],{staticClass:"mx-2",attrs:{large:"",color:"error"},on:{click:function(a){e.score-=1}}},[t(x["a"],[a._v("mdi-minus")])],1)],1)],1)})),1):t("div",[t(G["a"],{attrs:{outlined:"",type:"warning",prominent:"",border:"left"}},[a._v("Lisa mängija, et punkte lisada.")])],1)},F=[],I={name:"PlayerList",props:["players"],methods:{playerRem(a){this.players.splice(a,1)}}},K=I,$=Object(u["a"])(K,E,F,!1,null,null,null),q=$.exports,Q={name:"Home",components:{Navbar:B,PlayerList:q},data:()=>({dialog:!1,players:[],playerName:"",infoDialog:!1}),methods:{addPlayer(){let a=this.players,t={name:this.playerName,score:0};a.push(t),this.dialog=!1}}},U=Q,W=(e("06f5"),Object(u["a"])(U,w,O,!1,null,null,null)),X=W.exports,Y=function(){var a=this,t=a._self._c;return t(y["a"],{staticClass:"startCont"},[t(h["a"],{attrs:{"max-width":"600","max-height":"900"}},[t(b["d"],{staticClass:"headline warning lighten-2",attrs:{"primary-title":""}},[a._v(" Vali rada või loo enda rada ")]),t(b["c"],{staticStyle:{height:"100%"}},[t("div",{staticClass:"cardContent"},[t("h3",[a._v("Raja loomine")]),t("strong",[a._v("Vali mitu korvi on ja alusta skoori lugemist.")]),a.create?a._e():t(g["a"],{attrs:{color:"primary"},on:{click:function(t){a.create=!0}}},[t(x["a"],{attrs:{left:""}},[a._v(" mdi-pencil ")]),a._v(" Loo rada ")],1),t("br"),a.create?t("div",[t("CreateTrack")],1):a._e(),t(k["a"]),t("h3",[a._v("Raja valimine")]),t("strong",[a._v(" Vali ette lisatud rada kus mängida sooviksid ja alusta soori lugemist. ")]),t(g["a"],{attrs:{color:"primary"}},[t(x["a"],{attrs:{left:""}},[a._v(" mdi-pencil")]),a._v(" VALI RADA ")],1),t(k["a"]),t("strong",[a._v("Alusta ilma rajata")]),a.create?a._e():t(g["a"],{attrs:{color:"primary"},on:{click:a.navigateToStartGame}},[t(x["a"],{attrs:{left:""}},[a._v(" mdi-play ")]),a._v(" Alusta ")],1)],1)])],1)],1)},Z=[],aa=function(){var a=this,t=a._self._c;return t("div",[t(C["a"],{attrs:{label:"Korvide arv",rules:[a.numberRule],value:a.caskets}}),t("div",{staticClass:"btnCont"},[t(g["a"],{attrs:{color:"primary"}},[a._v("Alusta mängu")])],1)],1)},ta=[],ea={name:"CreateTrack",data:()=>({numberRule:a=>!isNaN(parseFloat(a))&&a>=0&&a<=99||"Number has to be between 0 and 99",caskets:0})},ra=ea,na=(e("e22d"),Object(u["a"])(ra,aa,ta,!1,null,"8472b85a",null)),oa=na.exports,la={name:"Start",components:{CreateTrack:oa},data:()=>({create:!1}),methods:{navigateToStartGame:()=>{fa.push("/dashboard")}}},ia=la,sa=(e("6c9d"),Object(u["a"])(ia,Y,Z,!1,null,"093f63c5",null)),ca=sa.exports;r["a"].use(v["a"]);const ua=[{path:"/",name:"Home",component:ca},{path:"/dashboard",name:"Dashboard",component:X}],da=new v["a"]({mode:"history",base:"/",routes:ua});var fa=da;r["a"].config.productionTip=!1,new r["a"]({vuetify:m,router:fa,render:a=>a(f)}).$mount("#app")},"6c9d":function(a,t,e){"use strict";e("01c4")},9518:function(a,t,e){},e22d:function(a,t,e){"use strict";e("9518")},f5ef:function(a,t,e){"use strict";e("45d1")}});
//# sourceMappingURL=app.d8047f5b.js.map