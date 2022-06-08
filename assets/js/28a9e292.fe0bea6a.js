"use strict";(self.webpackChunkhexnicks_docs=self.webpackChunkhexnicks_docs||[]).push([[792],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6657:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"config-options",title:"Configuration Options",slug:"/config-options"},l=void 0,c={unversionedId:"config-options",id:"config-options",title:"Configuration Options",description:"HexNicks' config is documented fairly",source:"@site/docs/config-options.md",sourceDirName:".",slug:"/config-options",permalink:"/config-options",editUrl:"https://github.com/MajekDev/HexNicks/edit/main/docs/docs/config-options.md",tags:[],version:"current",frontMatter:{id:"config-options",title:"Configuration Options",slug:"/config-options"},sidebar:"sidebar",previous:{title:"Commands",permalink:"/commands"},next:{title:"Developers",permalink:"/developers"}},p=[{value:"Require Alphanumeric",id:"require-alphanumeric",children:[],level:2},{value:"Legacy Colors",id:"legacy-colors",children:[],level:2},{value:"Update Prompt",id:"update-prompt",children:[],level:2},{value:"Override Essentials",id:"override-essentials",children:[],level:2},{value:"<code>/nickother</code> Override",id:"nickother-override",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"HexNicks' ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MajekDev/HexNicks/blob/main/src/main/resources/config.yml"},"config")," is documented fairly\nwell but this page will try to explain some of the more confusing bits."),(0,o.kt)("h2",{id:"require-alphanumeric"},"Require Alphanumeric"),(0,o.kt)("p",null,"This config option requires all nicknames to contain nothing but characters a-z, lower and upper case,\nand numbers. That does not include color codes, but the raw nickname you see in chat ignoring colors must\nonly contain alphanumeric characters."),(0,o.kt)("h2",{id:"legacy-colors"},"Legacy Colors"),(0,o.kt)("p",null,"By default, legacy colors like ",(0,o.kt)("inlineCode",{parentName:"p"},"&a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"&6")," ",(0,o.kt)("strong",{parentName:"p"},"will not work"),". This is because they are ",(0,o.kt)("strong",{parentName:"p"},"legacy"),". However,\nbecause so many people like to use them, HexNicks does support them with this config option enabled."),(0,o.kt)("h2",{id:"update-prompt"},"Update Prompt"),(0,o.kt)("p",null,"When this is enabled and the server isn't running the latest version of HexNicks, the plugin will send a message\nto any player who is an operator when they join saying that the plugin has an update available."),(0,o.kt)("h2",{id:"override-essentials"},"Override Essentials"),(0,o.kt)("p",null,"Compatibility with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EssentialsX/Essentials"},"Essentials")," has plagued HexNicks since it was\nreleased. Essentials just tries to do so many things it frequently causes conflicts. If this config options is\nenabled and Essentials is detected, HexNicks will set the player's Essentials nickname as well as their display\nname on nickname creation. This is just meant to prevent conflicts."),(0,o.kt)("p",null,"If HexNicks is doing something like setting tab names to nicknames even though that setting\nis disabled, you probably need to disable this."),(0,o.kt)("h2",{id:"nickother-override"},(0,o.kt)("inlineCode",{parentName:"h2"},"/nickother")," Override"),(0,o.kt)("p",null,"When enabled, this allows players who have the ability to use ",(0,o.kt)("inlineCode",{parentName:"p"},"/nickother")," to override the target player's permissions for formatting codes."),(0,o.kt)("p",null,"This means you can now give someone a nickname using the color aqua even if they don't have permission to use that color."),(0,o.kt)("p",null,"If the config option is disabled then ",(0,o.kt)("inlineCode",{parentName:"p"},"/nickother")," will obey the target player's permissions for formatting."))}d.isMDXComponent=!0}}]);