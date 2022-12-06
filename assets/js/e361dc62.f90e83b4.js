"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5309],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>N});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var k=n.createContext({}),m=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(k.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,k=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),u=m(a),s=l,N=u["".concat(k,".").concat(s)]||u[s]||d[s]||r;return a?n.createElement(N,p(p({ref:e},o),{},{components:a})):n.createElement(N,p({ref:e},o))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=s;var i={};for(var k in e)hasOwnProperty.call(e,k)&&(i[k]=e[k]);i.originalType=t,i[u]="string"==typeof t?t:l,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3848:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>k,default:()=>s,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),p=["components"],i={id:"fp2",title:"FP2",sidebar_label:"FP2"},k=void 0,m={unversionedId:"cryptojs/fp2",id:"cryptojs/fp2",title:"FP2",description:"FP2",source:"@site/../docs/cryptojs/fp2.md",sourceDirName:"cryptojs",slug:"/cryptojs/fp2",permalink:"/docs/cryptojs/fp2",draft:!1,tags:[],version:"current",frontMatter:{id:"fp2",title:"FP2",sidebar_label:"FP2"},sidebar:"docs",previous:{title:"FP",permalink:"/docs/cryptojs/fp"},next:{title:"FP4",permalink:"/docs/cryptojs/fp4"}},o={},u=[{value:"FP2",id:"fp2",level:2},{value:"new FP2()",id:"new-fp2",level:3},{value:"fP2.reduce()",id:"fp2reduce",level:3},{value:"fP2.norm()",id:"fp2norm",level:3},{value:"fP2.iszilch()",id:"fp2iszilch",level:3},{value:"fP2.isunity()",id:"fp2isunity",level:3},{value:"fP2.cmove(g, d)",id:"fp2cmoveg-d",level:3},{value:"fP2.equals(x)",id:"fp2equalsx",level:3},{value:"fP2.getA()",id:"fp2geta",level:3},{value:"fP2.getB()",id:"fp2getb",level:3},{value:"fP2.set(c, d)",id:"fp2setc-d",level:3},{value:"fP2.seta(c)",id:"fp2setac",level:3},{value:"fP2.bset(c, d)",id:"fp2bsetc-d",level:3},{value:"fP2.bseta(c)",id:"fp2bsetac",level:3},{value:"fP2.copy(x)",id:"fp2copyx",level:3},{value:"fP2.zero()",id:"fp2zero",level:3},{value:"fP2.one(x)",id:"fp2onex",level:3},{value:"fP2.neg(x)",id:"fp2negx",level:3},{value:"fP2.conj()",id:"fp2conj",level:3},{value:"fP2.add(x)",id:"fp2addx",level:3},{value:"fP2.sub(x)",id:"fp2subx",level:3},{value:"fP2.pmul(s)",id:"fp2pmuls",level:3},{value:"fP2.imul(s)",id:"fp2imuls",level:3},{value:"fP2.sqr()",id:"fp2sqr",level:3},{value:"fP2.mul(y)",id:"fp2muly",level:3},{value:"fP2.sqrt() \u21d2",id:"fp2sqrt-",level:3},{value:"fP2.toString()",id:"fp2tostring",level:3},{value:"fP2.inverse()",id:"fp2inverse",level:3},{value:"fP2.div2()",id:"fp2div2",level:3},{value:"fP2.times_i()",id:"fp2times_i",level:3},{value:"fP2.mul_ip()",id:"fp2mul_ip",level:3},{value:"fP2.div_ip2()",id:"fp2div_ip2",level:3},{value:"fP2.div_ip()",id:"fp2div_ip",level:3},{value:"fP2.pow(e)",id:"fp2powe",level:3}],d={toc:u};function s(t){var e=t.components,a=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"FP2"}),(0,r.kt)("h2",{id:"fp2"},"FP2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2"},"FP2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_FP2_new"},"new FP2()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+reduce"},".reduce()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+norm"},".norm()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+iszilch"},".iszilch()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+isunity"},".isunity()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+cmove"},".cmove(g, d)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+equals"},".equals(x)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+getA"},".getA()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+getB"},".getB()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+set"},".set(c, d)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+seta"},".seta(c)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+bset"},".bset(c, d)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+bseta"},".bseta(c)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+copy"},".copy(x)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+zero"},".zero()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+one"},".one(x)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+neg"},".neg(x)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+conj"},".conj()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+add"},".add(x)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+sub"},".sub(x)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+pmul"},".pmul(s)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+imul"},".imul(s)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+sqr"},".sqr()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+mul"},".mul(y)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+sqrt"},".sqrt()")," \u21d2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+toString"},".toString()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+inverse"},".inverse()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+div2"},".div2()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+times_i"},".times_i()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+mul_ip"},".mul_ip()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+div_ip2"},".div_ip2()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+div_ip"},".div_ip()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#FP2+pow"},".pow(e)"))))),(0,r.kt)("a",{name:"new_FP2_new"}),(0,r.kt)("h3",{id:"new-fp2"},"new FP2()"),(0,r.kt)("p",null,"Creates an instance of FP2."),(0,r.kt)("a",{name:"FP2+reduce"}),(0,r.kt)("h3",{id:"fp2reduce"},"fP2.reduce()"),(0,r.kt)("p",null,"Reduces all components of possibly unreduced FP2 mod Modulus"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+norm"}),(0,r.kt)("h3",{id:"fp2norm"},"fP2.norm()"),(0,r.kt)("p",null,"Normalises the components of an FP2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+iszilch"}),(0,r.kt)("h3",{id:"fp2iszilch"},"fP2.iszilch()"),(0,r.kt)("p",null,"Tests for FP2 equal to zero"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+isunity"}),(0,r.kt)("h3",{id:"fp2isunity"},"fP2.isunity()"),(0,r.kt)("p",null,"Tests for FP2 equal to unity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+cmove"}),(0,r.kt)("h3",{id:"fp2cmoveg-d"},"fP2.cmove(g, d)"),(0,r.kt)("p",null,"Conditional copy of FP2 number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"g"),(0,r.kt)("td",{parentName:"tr",align:null},"FP2 instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"copy depends on this value")))),(0,r.kt)("a",{name:"FP2+equals"}),(0,r.kt)("h3",{id:"fp2equalsx"},"fP2.equals(x)"),(0,r.kt)("p",null,"Tests for equality of two FP2 instances"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"FP2 instance to compare")))),(0,r.kt)("a",{name:"FP2+getA"}),(0,r.kt)("h3",{id:"fp2geta"},"fP2.getA()"),(0,r.kt)("p",null,"extract a from this"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+getB"}),(0,r.kt)("h3",{id:"fp2getb"},"fP2.getB()"),(0,r.kt)("p",null,"extract b from this"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+set"}),(0,r.kt)("h3",{id:"fp2setc-d"},"fP2.set(c, d)"),(0,r.kt)("p",null,"Set FP2 from two FP values"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"FP instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"FP instance")))),(0,r.kt)("a",{name:"FP2+seta"}),(0,r.kt)("h3",{id:"fp2setac"},"fP2.seta(c)"),(0,r.kt)("p",null,"Set FP2 from one FP value"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"FP instance")))),(0,r.kt)("a",{name:"FP2+bset"}),(0,r.kt)("h3",{id:"fp2bsetc-d"},"fP2.bset(c, d)"),(0,r.kt)("p",null,"Set FP2 from two BIG values"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"BIG instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"BIG instance")))),(0,r.kt)("a",{name:"FP2+bseta"}),(0,r.kt)("h3",{id:"fp2bsetac"},"fP2.bseta(c)"),(0,r.kt)("p",null,"Set FP2 from one BIG value"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"BIG instance")))),(0,r.kt)("a",{name:"FP2+copy"}),(0,r.kt)("h3",{id:"fp2copyx"},"fP2.copy(x)"),(0,r.kt)("p",null,"Copy FP2 to another FP2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"FP2 instance to be copied")))),(0,r.kt)("a",{name:"FP2+zero"}),(0,r.kt)("h3",{id:"fp2zero"},"fP2.zero()"),(0,r.kt)("p",null,"Set FP2 to zero"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+one"}),(0,r.kt)("h3",{id:"fp2onex"},"fP2.one(x)"),(0,r.kt)("p",null,"Set FP2 to unity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"FP2 instance to be set to one")))),(0,r.kt)("a",{name:"FP2+neg"}),(0,r.kt)("h3",{id:"fp2negx"},"fP2.neg(x)"),(0,r.kt)("p",null,"negate this"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"FP2 instance to be set to one")))),(0,r.kt)("a",{name:"FP2+conj"}),(0,r.kt)("h3",{id:"fp2conj"},"fP2.conj()"),(0,r.kt)("p",null,"Conjugation of FP2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+add"}),(0,r.kt)("h3",{id:"fp2addx"},"fP2.add(x)"),(0,r.kt)("p",null,"addition of two FP2s"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"FP2 instance")))),(0,r.kt)("a",{name:"FP2+sub"}),(0,r.kt)("h3",{id:"fp2subx"},"fP2.sub(x)"),(0,r.kt)("p",null,"subtraction of two FP2s"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"FP2 instance")))),(0,r.kt)("a",{name:"FP2+pmul"}),(0,r.kt)("h3",{id:"fp2pmuls"},"fP2.pmul(s)"),(0,r.kt)("p",null,"Multiplication of an FP2 by an FP8"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"FP8 instance")))),(0,r.kt)("a",{name:"FP2+imul"}),(0,r.kt)("h3",{id:"fp2imuls"},"fP2.imul(s)"),(0,r.kt)("p",null,"Multiplication of an FP2 by a small integer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s"),(0,r.kt)("td",{parentName:"tr",align:null},"integer")))),(0,r.kt)("a",{name:"FP2+sqr"}),(0,r.kt)("h3",{id:"fp2sqr"},"fP2.sqr()"),(0,r.kt)("p",null,"Fast Squaring of an FP2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+mul"}),(0,r.kt)("h3",{id:"fp2muly"},"fP2.mul(y)"),(0,r.kt)("p",null,"Full unconditional Multiplication of two FP2s"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},"FP2 instance, the multiplier")))),(0,r.kt)("a",{name:"FP2+sqrt"}),(0,r.kt)("h3",{id:"fp2sqrt-"},"fP2.sqrt() \u21d2"),(0,r.kt)("p",null,"sqrt(a+ib) = sqrt(a+sqrt(a_a-n_b_b)/2)+ib/(2_sqrt(a+sqrt(a_a-n_b","*","b)/2))"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": true if this is QR",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+toString"}),(0,r.kt)("h3",{id:"fp2tostring"},"fP2.toString()"),(0,r.kt)("p",null,"convert this to hex string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+inverse"}),(0,r.kt)("h3",{id:"fp2inverse"},"fP2.inverse()"),(0,r.kt)("p",null,"Inverting an FP2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+div2"}),(0,r.kt)("h3",{id:"fp2div2"},"fP2.div2()"),(0,r.kt)("p",null,"Divide an FP2 by 2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+times_i"}),(0,r.kt)("h3",{id:"fp2times_i"},"fP2.times_i()"),(0,r.kt)("p",null,"Multiply an FP2 by sqrt(-1)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+mul_ip"}),(0,r.kt)("h3",{id:"fp2mul_ip"},"fP2.mul_ip()"),(0,r.kt)("p",null,"Multiply an FP2 by (1+sqrt(-1))"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+div_ip2"}),(0,r.kt)("h3",{id:"fp2div_ip2"},"fP2.div_ip2()"),(0,r.kt)("p",null,"Divide an FP2 by (1+sqrt(-1))/2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+div_ip"}),(0,r.kt)("h3",{id:"fp2div_ip"},"fP2.div_ip()"),(0,r.kt)("p",null,"Divide an FP2 by (1+sqrt(-1))"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("a",{name:"FP2+pow"}),(0,r.kt)("h3",{id:"fp2powe"},"fP2.pow(e)"),(0,r.kt)("p",null,"Raises an FP2 to the power of a BIG"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.kt)("a",{parentName:"p",href:"#FP2"},(0,r.kt)("code",null,"FP2")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"this"),": ",(0,r.kt)("code",null,'{"{"}FP2{"}"}'),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"e"),(0,r.kt)("td",{parentName:"tr",align:null},"BIG instance exponent")))))}s.isMDXComponent=!0}}]);