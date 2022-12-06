"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8218],{9058:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(3366),l=a(7294),n=a(6010),o=a(3285),i=a(7524),s=a(9960),m=a(5999);const c="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",p="sidebarItemLink_mo7H",v="sidebarItemLinkActive_I1ZP";function f(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(u,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(d,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:v},e.title))})))))}var h=a(3102);function E(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return l.createElement(h.Zo,{component:E,props:e})}function P(e){var t=e.sidebar,a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(b,{sidebar:t}):l.createElement(f,{sidebar:t}):null}var N=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,r.Z)(e,N),m=t&&t.items.length>0;return l.createElement(o.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(P,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},756:(e,t,a)=>{a.d(t,{Z:()=>j});var r=a(7294),l=a(6010),n=a(9460),o=a(4996);function i(e){var t,a=e.children,l=e.className,i=(0,n.C)(),s=i.frontMatter,m=i.assets,c=(0,o.C)().withBaseUrl,u=null!=(t=m.image)?t:s.image;return r.createElement("article",{className:l,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&r.createElement("meta",{itemProp:"image",content:c(u,{absolute:!0})}),a)}var s=a(9960);const m="title_f1Hy";function c(e){var t=e.className,a=(0,n.C)(),o=a.metadata,i=a.isBlogPostPage,c=o.permalink,u=o.title,d=i?"h1":"h2";return r.createElement(d,{className:(0,l.Z)(m,t),itemProp:"headline"},i?u:r.createElement(s.Z,{itemProp:"url",to:c},u))}var u=a(5999),d=a(2263),g=["zero","one","two","few","many","other"];function p(e){return g.filter((function(t){return e.includes(t)}))}var v={locale:"en",pluralForms:p(["one","other"]),select:function(e){return 1===e?"one":"other"}};function f(){var e=(0,d.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:p(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),v}var t,a}),[e])}function h(){var e=f();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}const E="container_mt6G";function b(e){var t,a=e.readingTime,l=(t=h().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return r.createElement(r.Fragment,null,l(a))}function P(e){var t=e.date,a=e.formattedDate;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function N(){return r.createElement(r.Fragment,null," \xb7 ")}function _(e){var t=e.className,a=(0,n.C)().metadata,o=a.date,i=a.formattedDate,s=a.readingTime;return r.createElement("div",{className:(0,l.Z)(E,"margin-vert--md",t)},r.createElement(P,{date:o,formattedDate:i}),void 0!==s&&r.createElement(r.Fragment,null,r.createElement(N,null),r.createElement(b,{readingTime:s})))}function Z(e){return e.href?r.createElement(s.Z,e):r.createElement(r.Fragment,null,e.children)}function k(e){var t=e.author,a=e.className,n=t.name,o=t.title,i=t.url,s=t.imageURL,m=t.email,c=i||m&&"mailto:"+m||void 0;return r.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},s&&r.createElement(Z,{href:c,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:s,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(Z,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},n))),o&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const C="authorCol_Hf19",T="imageOnlyAuthorRow_pa_O",w="imageOnlyAuthorCol_G86a";function y(e){var t=e.className,a=(0,n.C)(),o=a.metadata.authors,i=a.assets;if(0===o.length)return null;var s=o.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?T:"row",t)},o.map((function(e,t){var a;return r.createElement("div",{className:(0,l.Z)(!s&&"col col--6",s?w:C),key:t},r.createElement(k,{author:Object.assign({},e,{imageURL:null!=(a=i.authorsImageUrls[t])?a:e.imageURL})}))})))}function B(){return r.createElement("header",null,r.createElement(c,null),r.createElement(_,null),r.createElement(y,null))}var I=a(8780),F=a(9334);function M(e){var t=e.children,a=e.className,o=(0,n.C)().isBlogPostPage;return r.createElement("div",{id:o?I.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},r.createElement(F.Z,null,t))}var L=a(4881),R=a(6233),x=a(7462),A=a(3366),O=["blogPostTitle"];function U(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function D(e){var t=e.blogPostTitle,a=(0,A.Z)(e,O);return r.createElement(s.Z,(0,x.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),r.createElement(U,null))}const H="blogPostFooterDetailsFull_mRVl";function S(){var e=(0,n.C)(),t=e.metadata,a=e.isBlogPostPage,o=t.tags,i=t.title,s=t.editUrl,m=t.hasTruncateMarker,c=!a&&m,u=o.length>0;return u||c||s?r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",a&&H)},u&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},r.createElement(R.Z,{tags:o})),a&&s&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(L.Z,{editUrl:s})),c&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":u})},r.createElement(D,{blogPostTitle:i,to:t.permalink}))):null}function j(e){var t=e.children,a=e.className,o=(0,n.C)().isBlogPostPage?void 0:"margin-bottom--xl";return r.createElement(i,{className:(0,l.Z)(o,a)},r.createElement(B,null),r.createElement(M,null,t),r.createElement(S,null))}},9460:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>o});var r=a(7294),l=a(9688),n=r.createContext(null);function o(e){var t=e.children,a=e.content,l=e.isBlogPostPage,o=function(e){var t=e.content,a=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==l&&l});return r.createElement(n.Provider,{value:o},t)}function i(){var e=(0,r.useContext)(n);if(null===e)throw new l.i6("BlogPostProvider");return e}}}]);