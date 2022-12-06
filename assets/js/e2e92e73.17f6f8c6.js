"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2050],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o=["components"],l={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},s=void 0,d={unversionedId:"dta-details/configuration",id:"dta-details/configuration",title:"Configuration",description:"The Milagro D-TA can be configured either by editing its configuration file or using command line flags.",source:"@site/../docs/dta-details/configuration.md",sourceDirName:"dta-details",slug:"/dta-details/configuration",permalink:"/docs/dta-details/configuration",draft:!1,tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Configuration"},sidebar:"docs",previous:{title:"API",permalink:"/docs/dta-details/api"},next:{title:"Identity Documents",permalink:"/docs/dta-details/identity-documents"}},u={},c=[{value:"Configuration File",id:"configuration-file",level:2},{value:"Command Line Flags",id:"command-line-flags",level:2},{value:"INIT",id:"init",level:3},{value:"DAEMON",id:"daemon",level:3}],p={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Milagro D-TA can be configured either by editing its configuration file or using command line flags.   "),(0,r.kt)("admonition",{title:"running a D-TA as a principal with an external master fiduciary (as described below) is not currently supported but will be in the next release.",type:"important"}),(0,r.kt)("h2",{id:"configuration-file"},"Configuration File"),(0,r.kt)("p",null,"The config file is located in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.milagro/config.yaml")),(0,r.kt)("admonition",{title:"this configuration method is not yet supported when running in Docker.  Please use the command line flags described below.",type:"important"}),(0,r.kt)("p",null,"The default values are shown below with some explanatory comments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n// http ports\nhttp:\n  listenAddr: :5556\n  metricsAddr: :5557\n\n// You can secure the endpoints with an oAuth 2.0 compatible identity provider\n  oidcProvider: ""\n  oidcClientID: ""\n  oidcClientKey: ""\n\n// If the endpoints are accessed from a web app put address here\n  corsAllow: http://localhost:3000\n\nnode:\n\n// D-TA can be "principal", "master fiduciary" or "multi" \n  nodeType: multi\n\n// If D-TA is running as principal tell it where its Master Fiduciary is \n// (if nodeType is "multi" use localhost on same port)\n  masterFiduciaryServer: http://localhost:5556\n\n// IPFS Hash Address of Master Fiduciary\'s Identity document \n// (if nodeType is "multi"use nodeID (see below))\n  masterFiduciaryNodeID: QmfZkZ8WR9N2nVg8rktbR2n7hBFN3HmYuFJeVuS3gcT3Mz\n\n// IPFS Hash Address of this node\'s identity document\n// (created and logged to stdout on startup)\n  nodeID: QmfZkZ8WR9N2nVg8rktbR2n7hBFN3HmYuFJeVuS3gcT3Mz\n\n// String used to refer to this node\n  nodeName: 17c9f630d2e098e4\n\n// Uses embedded "bolt" DB by defaultD-TA \n// (In productiion you should use external highly available database)\n  dataStore: embedded\n\n// configure logs\nlog:\n  format: text\n  level: info\n\n// IPFS - by default D-TA connects to private IPFS network\n  connector: embedded\n  bootstrap:\n  - /ip4/34.252.47.231/tcp/4001/ipfs/QmcEPkctfqQs6vbvTD8EdJmzy4zouAtrV8AwjLbGhbURep\n  listenAddress: /ip4/0.0.0.0/tcp/4001\n  apiAddress: http://localhost:5001\n\n// Define the plugin to be used.  Default is "milagro".  Currently available alternative plugins are "bitcoinwallet" and "safeguardsecret"\nplugins:\n  service: milagro\n\n')),(0,r.kt)("h2",{id:"command-line-flags"},"Command Line Flags"),(0,r.kt)("p",null,"To view available service commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"\n ./milagro\nMilagro DTA\nUSAGE\n    milagro <command> [options]\n    \nCOMMANDS\n    init    Initialize configuration\n    daemon  Starts the milagro daemon\n\n")),(0,r.kt)("p",null,"To view the available initialization option flags, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-help")," flag:"),(0,r.kt)("h3",{id:"init"},"INIT"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\n./milagro init -help\nUsage of init:\n  -interactive\n        Interactive setup\n  -masterfiduciarynode string\n        Master fiduciary node\n  -nodename string\n        Node name\n  -service string\n        Service plugin (default "milagro")\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"masterfiduciarynode")," - if you want to use an external master fiduciary, use this flag to set its identity (nodeID) and endpoint separated with a comma. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"\nQmR7JfvEwTbSkBZuRLdDcRTpZik2ZAuHnn9BA7giX7oJNK,http://123.456.789.1:5556\n\n")),(0,r.kt)("admonition",{title:"By default a D-TA will be both a principal and master fiduciary. ",type:"note"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nodename")," - set your DT-A node name (nodeName) here.  By default, a random name with be generated if none is specified.   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"service"),' - use this flag to set which plugin to use.  Default is "milagro".  Currently available plugins are "bitcoinwallet" and "safeguardsecret".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"interactive"),' - use this flag to prompt for values for the other flags.  For example, to set the name (nodeName) of this DT-A to "alice", the identity (nodeID) of the external fiduciary to "QmR7JfvEwTbSkBZuRLdDcRTpZik2ZAuHnn9BA7giX7oJNK", the endpoint of the master fiduciary to "http: and to use the "bitcoinwallet" plugin: ')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"\n\n\n")),(0,r.kt)("h3",{id:"daemon"},"DAEMON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"\n\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"service"),' - use this flag to set which plugin to use.  Default is "milagro".  Currently available plugins are "bitcoinwallet" and "safeguardsecret".')))}m.isMDXComponent=!0}}]);