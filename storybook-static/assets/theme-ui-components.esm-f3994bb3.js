import{g as v,c as m,j as A}from"./theme-ui-css.esm-b1576555.js";import{R as n,r as K}from"./index-ba39e096.js";import{u as $}from"./emotion-element-6a883da9.browser.esm-7636857e.js";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},s.apply(this,arguments)}function c(t,r){if(t==null)return{};var e={},a=Object.keys(t),i,o;for(o=0;o<a.length;o++)i=a[o],!(r.indexOf(i)>=0)&&(e[i]=t[i]);return e}function _(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}function T(t,r){if(t){if(typeof t=="string")return _(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _(t,r)}}function j(t,r){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=T(t))||r&&t&&typeof t.length=="number"){e&&(t=e);var a=0;return function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var P=["__themeKey","__css","variant","css","sx","as"],b=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","m","mt","mr","mb","ml","mx","my","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","p","pt","pr","pb","pl","px","py","color","backgroundColor","bg","opacity"],L=function(r){for(var e={},a=j(b),i;!(i=a()).done;){var o=i.value;e[o]=r[o]}return e},l=K.forwardRef(function(r,e){var a=$(),i=r,o=i.__themeKey,f=o===void 0?"variants":o,d=i.__css,u=i.variant,x=i.css,w=i.sx,h=i.as,R=h===void 0?"div":h,p=c(i,P),S={boxSizing:"border-box",margin:0,minWidth:0},E=m(d)(a),g=v(a,f+"."+u)||v(a,u),z=g&&m(g)(a),B=m(w)(a),I=m(L(p))(a),C=[S,E,z,B,I,x];return b.forEach(function(k){delete p[k]}),A(R,s({ref:e,css:C},p))}),J=n.forwardRef(function(r,e){return n.createElement(l,s({ref:e},r,{sx:s({display:"flex"},r.sx)}))});var O=l,Q=n.forwardRef(function(r,e){return n.createElement(O,s({ref:e,as:"button",variant:"primary"},r,{__themeKey:"buttons",__css:{appearance:"none",display:r.hidden?void 0:"inline-block",textAlign:"center",lineHeight:"inherit",textDecoration:"none",fontSize:"inherit",px:3,py:2,color:"white",bg:"primary",border:0,borderRadius:4}}))}),Z=n.forwardRef(function(r,e){return n.createElement(l,s({ref:e,as:"a",variant:"styles.a"},r,{__themeKey:"links"}))}),ee=n.forwardRef(function(r,e){return n.createElement(l,s({as:"span",ref:e,variant:"default"},r,{__themeKey:"text"}))}),re=n.forwardRef(function(r,e){return n.createElement(l,s({ref:e,as:"h2",variant:"heading"},r,{__themeKey:"text",__css:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))}),te=n.forwardRef(function(r,e){var a=r.__css;return n.createElement(l,s({ref:e,as:"img"},r,{__themeKey:"images",__css:s({maxWidth:"100%",height:"auto"},a)}))}),ae=n.forwardRef(function(r,e){return n.createElement(l,s({ref:e,variant:"primary"},r,{__themeKey:"cards"}))}),H=["sx","autofillBackgroundColor"],y={boxShadow:"inset 0 0 0 1000px var(--theme-ui-input-autofill-bg)",fontSize:"inherit",":first-line":{fontSize:"1rem"}},F={display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:4,color:"inherit",bg:"transparent",":autofill, :autofill:hover, :autofill:focus":y,":-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus":y},ne=n.forwardRef(function(r,e){var a=r.sx,i=r.autofillBackgroundColor,o=i===void 0?"background":i,f=c(r,H);return n.createElement(l,s({ref:e,as:"input",variant:"input",sx:s({"--theme-ui-input-autofill-bg":function(u){return u.colors&&v(u.colors,o,null)}},a)},f,{__themeKey:"forms",__css:F}))}),W=["size"],G=n.forwardRef(function(r,e){var a=r.size,i=a===void 0?24:a,o=c(r,W),f=s({xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"currentcolor"},o);return n.createElement(l,s({ref:e,as:"svg"},f))});G.displayName="SVG";var ie=n.forwardRef(function(r,e){return n.createElement(l,s({ref:e,as:"textarea",variant:"textarea"},r,{__themeKey:"forms",__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:4,color:"inherit",bg:"transparent"}}))}),V=["size"],M=n.forwardRef(function(r,e){var a,i=r.size,o=i===void 0?32:i,f=c(r,V),d=((a=f.__css)==null?void 0:a.label)||"IconButton";return n.createElement(l,s({ref:e,as:"button",variant:"icon"},f,{__themeKey:"buttons",__css:{label:d,appearance:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",padding:1,width:o,height:o,color:"inherit",bg:"transparent",border:"none",borderRadius:4}}))}),U=["size"],X=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),oe=n.forwardRef(function(r,e){var a=r.size,i=a===void 0?32:a,o=c(r,U);return n.createElement(M,s({ref:e,size:i,title:"Close","aria-label":"Close",variant:"close"},o,{children:X}))}),se=n.forwardRef(function(r,e){return n.createElement(l,s({ref:e,variant:"primary"},r,{__themeKey:"alerts",__css:{display:"flex",alignItems:"center",px:3,py:2,fontWeight:"bold",color:"white",bg:"primary",borderRadius:4}}))}),Y=["ratio","children"],le=n.forwardRef(function(r,e){var a=r.ratio,i=a===void 0?4/3:a,o=r.children,f=c(r,Y);return n.createElement(l,{ref:e,sx:{position:"relative",overflow:"hidden"}},n.createElement(l,{sx:{width:"100%",height:0,paddingBottom:100/i+"%"}}),n.createElement(l,s({},f,{__css:{position:"absolute",top:0,right:0,bottom:0,left:0}}),o))});export{se as A,Q as B,ae as C,J as F,re as H,ne as I,Z as L,ee as T,l as a,ie as b,te as c,oe as d,le as e};
//# sourceMappingURL=theme-ui-components.esm-f3994bb3.js.map
