import{a as d,j as G}from"./jsx-runtime-93f93352.js";import{f as V,V as B}from"./icon-verified-badge-7d7bdb14.js";import{a as j}from"./index-ba39e096.js";import{p as f}from"./index-4d501b15.js";import{n as T}from"./emotion-styled.browser.esm-d2a4c519.js";import{a as R,F as h,T as U,c as L}from"./theme-ui-components.esm-f3994bb3.js";import{I as H}from"./InternalLink-c3ba4b9d.js";var S={},D={get exports(){return S},set exports(e){S=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var n=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var s=typeof o;if(s==="string"||s==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var c=r.apply(null,o);c&&n.push(c)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var i in o)t.call(o,i)&&o[i]&&n.push(i)}}}return n.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(D);const $=S,K=function(e,t){if(!t[e])throw new Error("Could not resolve the styleName ".concat(e));return t[e]};var M="theme-base",E="flag-icon",m="".concat(E,"-");function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Z=function(t,r){var n,a=t.code,o=t.flip,s=o===void 0?"":o,c=t.size,i=c===void 0?"":c,u=t.squared,p=u===void 0?!1:u,C=t.rotate,I=t.className,v=t.styleName,g=r.themeStyles,N=r.useCssModules;return n={},l(n,E,!0),l(n,"".concat(m,"squared"),p),l(n,"".concat(m).concat(i),i),l(n,"".concat(m).concat(a),a),l(n,"".concat(m,"flip-").concat(s),s),l(n,"".concat(m,"rotate-").concat(C||""),C),l(n,M,N&&g&&g[M]),l(n,v||"",N&&g&&v&&g[v]),l(n,I||"",I),n};const q=function(e,t,r){var n=t.useCssModules,a=Z(e,t),o=$(a);if(n){var s=e.className,c=o.split(" "),i=c.length;o=c.map(function(u,p){return s&&p===i-1?u:K(u,r||{})}).join(" ")}return o};var W=["lg","2x","3x","4x","5x"],Y=[30,60,90,180,270],z=["horizontal","vertical"],k=function(){return z},J=function(){return Y},Q=function(){return W},w=globalThis;function A(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){_(e,a,r[a])})}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var X=function(t,r,n,a){var o=r.useCssModules,s=r.customCodes;if(o&&s){var c=r.themeStyles;if(c){var i=Object.keys(c),u=Object.keys(s).filter(function(p){return!i.includes("flag-icon-".concat(p))});if(u.length>0)return new Error("Invalid prop(s) `themeStyles` supplied to `".concat(a,"`, expected `.flag-icon-[").concat(u.join("/"),"]`."))}else return new Error("Missing required prop(s) `themeStyles` supplied to `".concat(a,"`."))}},ee=function(t){var r="__themeStyles__";return Object.prototype.hasOwnProperty.call(t,r)?t:A({},t,_({},r,X.bind(w,t)))},te=function(t,r,n,a){var o=Object.keys(r),s=o.filter(function(c){return!Object.prototype.hasOwnProperty.call(t,c)});if(s.length>0)return new Error("Invalid prop(s) ".concat(JSON.stringify(s)," supplied to `").concat(a,"`, expected one of [").concat(o.join(","),"]."))},re=function(t){var r="__no__extra__props__validator___";return Object.prototype.hasOwnProperty.call(t,r)?t:A({},t,_({},r,te.bind(w,t)))};f.oneOf(Q());f.oneOf(J());f.oneOf(k());var ne={customCodes:f.object,themeStyles:f.object,useCssModules:f.bool},ae=function(){return re(ee(ne))};function oe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){se(e,a,r[a])})}return e}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ce={useCssModules:!0};const ie=function(e){var t=oe({},ce,e);return f.checkPropTypes(ae(),t,"key","FlagIconFactory options"),t};function le(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){ue(e,a,r[a])})}return e}function ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const de=function(e,t){return t&&t.themeStyles?le({},e,t.themeStyles):e};var P=function(t,r,n){return function(a){var o=a.Component,s=o===void 0?"span":o,c=a.children;return t.createElement(s,{className:q(a,r,n)},c)}};const fe="",pe="";function me(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){ge(e,a,r[a])})}return e}function ge(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ye=me({},fe,pe),ve=function(t,r){var n=ie(r),a=n.useCssModules;n.customCodes;var o=null;if(a){var s=de(ye,r);o=P(t,n,s)}else o=P(t,n);return o.displayName="FlagIcon",o};const y=ve(j,{useCssModules:!1}),b=T(y)`
  border-radius: 5px;
  background-size: cover !important;
  height: 23px;
  width: 35px !important;
`,O=T(y)`
  border-radius: 3px;
  background-size: cover !important;
  height: 14px;
  width: 21px !important;
`,F=e=>d(R,{...e,children:d(b,{code:e.code,children:e.children})});try{y.displayName="FlagIconFact",y.__docgenInfo={description:"",displayName:"FlagIconFact",props:{}}}catch{}try{b.displayName="FlagIconEvents",b.__docgenInfo={description:"",displayName:"FlagIconEvents",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<FlagIcon>"}}}}}catch{}try{O.displayName="FlagIconHowTos",O.__docgenInfo={description:"",displayName:"FlagIconHowTos",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<FlagIcon>"}}}}}catch{}try{F.displayName="FlagIcon",F.__docgenInfo={description:"",displayName:"FlagIcon",props:{}}}catch{}const he=new Set(["AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW"]),Se=e=>e&&he.has(e.toUpperCase()),x=e=>d(H,{"data-cy":"Username",to:`/u/${e.user.userName}`,sx:{border:"1px solid transparent",display:"inline-flex",paddingX:1,paddingY:"3px",borderRadius:1,marginLeft:-1,color:"black",fontSize:2,transition:"80ms ease-out all","&:focus":{borderColor:"#20B7EB",background:"softblue",outline:"none",color:"bluetag"},"&:hover":{borderColor:"#20B7EB",background:"softblue",color:"bluetag"},...e.sx||{}},children:G(h,{sx:{fontFamily:"body",justifyContent:"center",alignItems:"center"},children:[d(h,{mr:1,sx:{display:"inline-flex"},children:e.user.countryCode&&Se(e.user.countryCode)?d(O,{code:e.user.countryCode.toLowerCase()}):d(h,{"data-testid":"Username: unknown flag",sx:{backgroundImage:`url(${V})`,backgroundSize:"cover",borderRadius:"3px",height:"14px",width:"21px !important",justifyContent:"center",alignItems:"center",lineHeight:0,overflow:"hidden"}})}),d(U,{children:e.user.userName}),e.isVerified&&d(L,{src:B,sx:{ml:1,height:16,width:16},"data-testid":"Username: verified badge"})]})});try{x.displayName="Username",x.__docgenInfo={description:"",displayName:"Username",props:{isVerified:{defaultValue:null,description:"",name:"isVerified",required:!0,type:{name:"boolean"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUIStyleObject"}}}}}catch{}export{x as U};
//# sourceMappingURL=Username-19429699.js.map
