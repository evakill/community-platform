import{j as h,F as N,a as m}from"./jsx-runtime-93f93352.js";import{B as A}from"./Button-af633f5e.js";import{I as J}from"./InternalLink-c3ba4b9d.js";import{U as X}from"./Username-19429699.js";import{k as B}from"./theme-ui-css.esm-b1576555.js";import{C as Q,e as F,a as _,c as H,T as W,A as G,F as K}from"./theme-ui-components.esm-f3994bb3.js";function S(e,a){if(a.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+a.length+" present")}function M(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?M=function(t){return typeof t}:M=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function g(e){S(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||M(e)==="object"&&a==="[object Date]"?new Date(e.getTime()):typeof e=="number"||a==="[object Number]"?new Date(e):((typeof e=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var Z={};function ee(){return Z}function j(e){var a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),e.getTime()-a.getTime()}function te(e,a){S(2,arguments);var t=g(e),n=g(a),r=t.getTime()-n.getTime();return r<0?-1:r>0?1:r}var ae={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ne=function(a,t,n){var r,i=ae[a];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};const re=ne;function C(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,n=e.formats[t]||e.formats[e.defaultWidth];return n}}var ie={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},oe={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ue={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},le={date:C({formats:ie,defaultWidth:"full"}),time:C({formats:oe,defaultWidth:"full"}),dateTime:C({formats:ue,defaultWidth:"full"})};const se=le;var de={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},me=function(a,t,n,r){return de[a]};const ce=me;function p(e){return function(a,t){var n=t!=null&&t.context?String(t.context):"standalone",r;if(n==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,l=t!=null&&t.width?String(t.width):i;r=e.formattingValues[l]||e.formattingValues[i]}else{var o=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;r=e.values[s]||e.values[o]}var u=e.argumentCallback?e.argumentCallback(a):a;return r[u]}}var fe={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},he={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ve={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ge={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ye={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},be={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},pe=function(a,t){var n=Number(a),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},we={ordinalNumber:pe,era:p({values:fe,defaultWidth:"wide"}),quarter:p({values:he,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:p({values:ve,defaultWidth:"wide"}),day:p({values:ge,defaultWidth:"wide"}),dayPeriod:p({values:ye,defaultWidth:"wide",formattingValues:be,defaultFormattingWidth:"wide"})};const Me=we;function w(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=a.match(r);if(!i)return null;var l=i[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(o)?Se(o,function(f){return f.test(l)}):Pe(o,function(f){return f.test(l)}),u;u=e.valueCallback?e.valueCallback(s):s,u=t.valueCallback?t.valueCallback(u):u;var v=a.slice(l.length);return{value:u,rest:v}}}function Pe(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function Se(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}function xe(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var r=n[0],i=a.match(e.parsePattern);if(!i)return null;var l=e.valueCallback?e.valueCallback(i[0]):i[0];l=t.valueCallback?t.valueCallback(l):l;var o=a.slice(r.length);return{value:l,rest:o}}}var De=/^(\d+)(th|st|nd|rd)?/i,ke=/\d+/i,We={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ce={any:[/^b/i,/^(a|c)/i]},Te={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ne={any:[/1/i,/2/i,/3/i,/4/i]},Ae={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Fe={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_e={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},je={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ve={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ee={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Oe={ordinalNumber:xe({matchPattern:De,parsePattern:ke,valueCallback:function(a){return parseInt(a,10)}}),era:w({matchPatterns:We,defaultMatchWidth:"wide",parsePatterns:Ce,defaultParseWidth:"any"}),quarter:w({matchPatterns:Te,defaultMatchWidth:"wide",parsePatterns:Ne,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:w({matchPatterns:Ae,defaultMatchWidth:"wide",parsePatterns:Fe,defaultParseWidth:"any"}),day:w({matchPatterns:_e,defaultMatchWidth:"wide",parsePatterns:je,defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:Ve,defaultMatchWidth:"any",parsePatterns:Ee,defaultParseWidth:"any"})};const qe=Oe;var ze={code:"en-US",formatDistance:re,formatLong:se,formatRelative:ce,localize:Me,match:qe,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ie=ze;function z(e,a){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}function Re(e){return z({},e)}var V=1e3*60,P=60*24,E=P*30,O=P*365;function Le(e,a,t){var n,r,i;S(2,arguments);var l=ee(),o=(n=(r=t==null?void 0:t.locale)!==null&&r!==void 0?r:l.locale)!==null&&n!==void 0?n:Ie;if(!o.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var s=te(e,a);if(isNaN(s))throw new RangeError("Invalid time value");var u=z(Re(t),{addSuffix:!!(t!=null&&t.addSuffix),comparison:s}),v,f;s>0?(v=g(a),f=g(e)):(v=g(e),f=g(a));var x=String((i=t==null?void 0:t.roundingMethod)!==null&&i!==void 0?i:"round"),c;if(x==="floor")c=Math.floor;else if(x==="ceil")c=Math.ceil;else if(x==="round")c=Math.round;else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var D=f.getTime()-v.getTime(),y=D/V,I=j(f)-j(v),b=(D-I)/V,k=t==null?void 0:t.unit,d;if(k?d=String(k):y<1?d="second":y<60?d="minute":y<P?d="hour":b<E?d="day":b<O?d="month":d="year",d==="second"){var R=c(D/1e3);return o.formatDistance("xSeconds",R,u)}else if(d==="minute"){var L=c(y);return o.formatDistance("xMinutes",L,u)}else if(d==="hour"){var U=c(y/60);return o.formatDistance("xHours",U,u)}else if(d==="day"){var Y=c(b/P);return o.formatDistance("xDays",Y,u)}else if(d==="month"){var T=c(b/E);return T===12&&k!=="month"?o.formatDistance("xYears",1,u):o.formatDistance("xMonths",T,u)}else if(d==="year"){var $=c(b/O);return o.formatDistance("xYears",$,u)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function Ue(e,a){return S(1,arguments),Le(e,Date.now(),a)}const Ye=B`
  from {
    background: lightgrey;
  }
  to {
    background: grey;
  }
`,q=e=>{const{imageUrl:a,lastActive:t,description:n,user:r,heading:i}=e,l=e.moderationStatus!=="rejected"?"This pin is awaiting moderation, it will be shown on general map once accepted.":"This pin has been rejected, it will not show on general map.",o={type:"member",moderation:e.moderationStatus},s=e.onPinModerated;return h(Q,{sx:{maxWidth:"230px"},"data-cy":"MapMemberCard",children:[h(J,{to:`/u/${r.username}`,children:[!!e.loading&&h(N,{children:[m(F,{ratio:230/120,sx:{background:"lightgrey",animation:`${Ye} 800ms ease infinite`}}),m(_,{sx:{p:2,height:"109px"}})]}),!e.loading&&h(N,{children:[m(F,{ratio:230/120,sx:{background:"lightgrey"},children:m(H,{src:a,sx:{objectFit:"cover",width:"100%",height:"100%"}})}),h(_,{sx:{p:2},children:[m(W,{mb:2,sx:{fontSize:"12px",color:"blue"},children:i}),m("div",{children:m(X,{isVerified:!!r.isVerified,user:{userName:r.username,countryCode:r.country}})}),m(W,{mb:2,sx:{wordBreak:"break-word",fontSize:1,display:"block",color:"black"},children:n}),h(W,{sx:{fontSize:0,color:"grey"},children:["Last active"," ",t?`${Ue(new Date(t))}`:"a long time"," ","ago"]})]})]}),o.moderation!=="accepted"&&m(G,{mb:2,"data-cy":"MapMemberCard: moderation status",variant:o.moderation==="rejected"?"failure":"info",sx:{mx:2,fontSize:1,textAlign:"left",padding:2},children:l})]}),e.isEditable&&h(K,{sx:{m:2,flexDirection:"row",justifyContent:"space-between"},children:[m(A,{small:!0,"data-cy":"MapMemberCard: accept",variant:"primary",icon:"check",onClick:()=>s&&s(!0),children:"Approve"}),m(A,{small:!0,"data-cy":"MapMemberCard: reject",variant:"outline",icon:"delete",onClick:()=>s&&s(!1),children:"Reject"})]})]})};try{q.displayName="MapMemberCard",q.__docgenInfo={description:"",displayName:"MapMemberCard",props:{loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},lastActive:{defaultValue:null,description:"",name:"lastActive",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"{ isVerified: boolean; username: string; country: string | null; }"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},moderationStatus:{defaultValue:null,description:"",name:"moderationStatus",required:!0,type:{name:"string"}},onPinModerated:{defaultValue:null,description:"",name:"onPinModerated",required:!1,type:{name:"((isPinApproved: boolean) => void)"}},isEditable:{defaultValue:null,description:"",name:"isEditable",required:!0,type:{name:"boolean"}}}}}catch{}export{q as M};
//# sourceMappingURL=MapMemberCard-c842f9ab.js.map
