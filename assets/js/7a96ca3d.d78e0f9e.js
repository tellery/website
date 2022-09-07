(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[835],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},509:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:1},l={unversionedId:"getting-started/overview",id:"getting-started/overview",isDocsHomePage:!1,title:"Overview",description:"There are two ways to setup Tellery:",source:"@site/docs/getting-started/overview.md",sourceDirName:"getting-started",slug:"/getting-started/overview",permalink:"/docs/getting-started/overview",editUrl:"https://github.com/tellery/website/edit/master/docs/getting-started/overview.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Available Connectors",permalink:"/docs/available-connectors"},next:{title:"Quick Setup",permalink:"/docs/getting-started/quick-setup"}},s=[],u={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are two ways to setup Tellery:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-setup"},"Using Docker Compose")," (locally)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/production-setup"},"Using Helm")," (on Kubernetes)")),(0,i.kt)("p",null,"Using docker-compose is a quick way to try out Tellery. It brings up all the necessary infrastructure locally. Please check ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/quick-setup"},"Quick Setup")," for details."),(0,i.kt)("p",null,"If you want to setup Tellery in the production environment, we recommend you using Helm to deploy Tellery on Kubernetes. Please check ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/production-setup"},"Production Setup")," for details."),(0,i.kt)("p",null,"If you don't have a Kubernetes cluster, please ",(0,i.kt)("a",{parentName:"p",href:"mailto:contact@tellery.io"},"contact us")," to get help."))}p.isMDXComponent=!0}}]);