(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[195],{3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return l},Z:function(){return i}});var r=n(2263),a=n(3919);function l(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var l=void 0===r?{}:r,i=l.forcePrependBaseUrl,c=void 0!==i&&i,s=l.absolute,m=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var o=n.startsWith(t)?n:t+n.replace(/^\//,"");return m?e+o:o}(l,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},5600:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r=n(2122),a=n(7294),l=n(2263),i="body_1Z-l",c="buttons_irzW",s="nav_q9m4",m="menu_3Tz5",o="menuItem_1mNa",u="footer_1LVh",f="philosophy_82K5",h="more_1QI1",d="divider_10E3",v="subscribe_2bHY",E="hero_39XR",p="secondary_2clI",g="primary_3gi_",y="heroSnapshot_3398",w="dropdown_2PfG",b="dropdownContent_B-HK",N=n(9105),_=n(4996),k="container_2NuU",C=function(e){var t=e.size,n=e.color,r=e.scale,l=void 0===r?.5:r;return a.createElement("div",{style:{"--size":t+"px","--color":n,"--scale":l},className:k},a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null))},z=n(6010),H="imageWrapper_2HF1",L=function(e){var t=e.height,n=e.width,r=e.className,l=e.src,i=(0,a.useState)(!1),c=i[0],s=i[1],m=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e;null!=(e=m.current)&&e.complete&&s(!0)}),[]),a.createElement("div",{className:(0,z.Z)(H,r),style:{paddingTop:100*t/n+"%"}},a.createElement("img",{src:l,style:{opacity:c?1:.1},onLoad:function(e){return s(!0)},ref:m}))},V="videoWrapper_lLmX",R=function(e){var t=e.height,n=e.width,r=e.className,l=e.src,i=(0,a.useRef)(null);return a.createElement("div",{className:(0,z.Z)(V,r),style:{paddingTop:100*t/n+"%"}},a.createElement("video",{src:l,ref:i,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"preload","x5-video-player-type":"h5-page"}))},x="features_pzNA",Z="feature_2eOt",S="irisPieChart_1Nx_",F="chartHeader_1Il7",M="pidChart_13ih",T="chartFotter_3Xkr",A="chart_3vuD",I="text_36AV",P="divider_PELW",U="featureInteractive_l15M",B="featureInteractiveRow_3TUT",W="shadow_3MsH",D="featureSlashCommand_3pPF",O="featureTableAndNumber_3xtw",j="featureNumberChart_2uYY",G=function(){return a.createElement("div",{className:S},a.createElement("div",{className:A},a.createElement("div",{className:F},"data from iris_csv"),a.createElement("div",{className:M},a.createElement("img",{src:(0,_.Z)("/img/home/feature-pie-chart.png"),width:92,height:92})),a.createElement("div",{className:T},"2 days ago")),a.createElement("div",{className:P}),a.createElement("div",{className:I},'This is the "Iris" dataset. Originally published at UCI Machine Learning Repository: Iris Data Set, this small dataset from 1936 is often used for testing out machine learning algorithms and visualizations (for example, Scatter Plot). Each row of the table represents an iris flower, including its species and dimensions of its botanical parts, sepal and petal, in centimeters.'))},Q=[{Left:function(){return a.createElement("div",{className:U},a.createElement("div",{className:B},a.createElement("div",{className:O},a.createElement(L,{className:W,src:(0,_.Z)("/img/home/feature-table.png"),width:716,height:468}),a.createElement("div",{className:j},a.createElement(L,{className:W,src:(0,_.Z)("/img/home/feature-number-chart.png"),width:486,height:284}))),a.createElement("div",{className:D},a.createElement(L,{className:W,src:(0,_.Z)("/img/home/slash-command.png"),width:300,height:611}))),a.createElement(G,null))},Right:function(){return a.createElement(a.Fragment,null," ",a.createElement("h3",null,"Build beautiful documents & dashboards visually"),a.createElement("p",null,"An editor with rich text styling features, slash commands, and markdown support. Share insights across your team."))}},{Left:function(){return a.createElement(a.Fragment,null," ",a.createElement("h3",null,"Give your non-tech teams superpowers"),a.createElement("p",null,"Let business users extract metrics in just a few clicks. No longer communicate in tables and columns."))},Right:function(){return a.createElement(L,{src:(0,_.Z)("/img/home/feature-non-tech.png"),width:928,height:585})}},{Right:function(){return a.createElement(a.Fragment,null," ",a.createElement("h3",null,"Design for collaborative analytics"),a.createElement("p",null,"Tellery allows you model your data with just SQL. Metrics are no longer scattered across tools and recreated with no oversight."))},Left:function(){return a.createElement(L,{src:(0,_.Z)("/img/home/feature-2.png"),width:1800,height:1446})}}],X=function(){return a.createElement("section",{id:"features",className:x},Q.map((function(e,t){return a.createElement(Y,{key:t,Left:e.Left,Right:e.Right,contentOnLeft:t%2==1})})))},Y=function(e){var t=e.Left,n=e.Right;return a.createElement("div",{className:Z},a.createElement("div",null,a.createElement(t,null)),a.createElement("div",null,a.createElement(n,null)))};function K(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function q(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var J=["mousedown","touchstart"],$=function(e,t,n){void 0===n&&(n=J);var r=(0,a.useRef)(t);(0,a.useEffect)((function(){r.current=t}),[t]),(0,a.useEffect)((function(){for(var t=function(t){var n=e.current;n&&!n.contains(t.target)&&r.current(t)},a=0,l=n;a<l.length;a++){var i=l[a];K(document,i,t)}return function(){for(var e=0,r=n;e<r.length;e++){var a=r[e];q(document,a,t)}}}),[n,e])},ee=function(e){var t=e.fill,n=e.size,r=void 0===n?30:n;return a.createElement("svg",{width:r,height:r,viewBox:"0 0 30 30",fill:"none"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 0C6.713 0 0 6.713 0 15c0 6.637 4.294 12.244 10.256 14.231.75.131 1.031-.319 1.031-.712 0-.356-.018-1.538-.018-2.794-3.769.694-4.744-.919-5.044-1.763-.169-.43-.9-1.762-1.537-2.118-.526-.282-1.275-.975-.02-.994 1.182-.019 2.026 1.087 2.307 1.537 1.35 2.27 3.506 1.632 4.369 1.238.131-.975.525-1.631.956-2.006-3.338-.375-6.825-1.669-6.825-7.406 0-1.632.581-2.982 1.538-4.032-.15-.375-.675-1.912.15-3.975 0 0 1.256-.394 4.124 1.538 1.2-.338 2.475-.506 3.75-.506s2.55.168 3.75.506c2.87-1.95 4.126-1.538 4.126-1.538.825 2.063.3 3.6.15 3.975.956 1.05 1.537 2.382 1.537 4.032 0 5.756-3.506 7.03-6.844 7.406.544.468 1.013 1.369 1.013 2.775 0 2.006-.019 3.619-.019 4.125 0 .394.281.862 1.031.712C25.706 27.244 30 21.62 30 15c0-8.287-6.712-15-15-15z",fill:t}))},te=function(){var e=(0,l.default)().siteConfig;return a.createElement(N.Z,null,a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap",rel:"stylesheet"}),a.createElement("title",null,"Tellery"),a.createElement("link",{rel:"icon",href:"/img/icon.svg"}),a.createElement("link",{rel:"mask-icon",href:"/img/mask-icon.svg",color:"#002FA7"}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/apple-touch-icon.png"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon-32x32.png"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon-16x16.png"}),a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),a.createElement("link",{rel:"mask-icon",href:"/img/safari-pinned-tab.svg",color:"#5bbad5"}),a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),a.createElement("meta",{name:"theme-color",content:"#ffffff"}),a.createElement("meta",{name:"viewport",key:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:site",content:"@TelleryHQ"}),a.createElement("meta",{name:"twitter:title",content:e.title}),a.createElement("meta",{name:"twitter:description",content:e.customFields.copy.hero.subtitle}),a.createElement("meta",{name:"twitter:image",content:"https://tellery.io/img/twitter-card.png"}),a.createElement("meta",{name:"og:image",content:(0,_.Z)("/img/twitter-card.png")}))};function ne(){(0,l.default)().siteConfig;return a.createElement(a.Fragment,null,a.createElement(te,null),a.createElement(re,null),a.createElement(me,null),a.createElement(ce,null),a.createElement(fe,null))}var re=function(){return a.createElement("nav",{className:s},a.createElement(ae,null),a.createElement(ie,null))},ae=function(e){return a.createElement("svg",(0,r.Z)({width:105,height:30,fill:"none"},e),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0h24.375v30h-13.75l1.875-3.75h8.125V3.75H3.75V7.5H0V0zm0 11.25v13.125A5.625 5.625 0 005.625 30h1.25l1.875-3.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.25h5v-3.75h-5V11.25H0zm55-8.125V23.75h3.75V3.125H55zM35.625 23.75h1.25L38.75 20h-3.125a1.875 1.875 0 01-1.875-1.875v-6.25h5v-3.75h-5V5H30v13.125a5.625 5.625 0 005.625 5.625zm60.625-5.625v-10H92.5v10a5.625 5.625 0 005.625 5.625h.625c.657 0 1.289-.113 1.875-.32v.945c0 1.035-.84 1.875-1.875 1.875h-2.5V30h2.5a5.625 5.625 0 005.625-5.625V8.125h-3.75v10c0 1.035-.84 1.875-1.875 1.875h-.625a1.875 1.875 0 01-1.875-1.875zM61.875 23.75V3.125h3.75V23.75h-3.75zm26.25-15.625A5.625 5.625 0 0082.5 13.75v10h3.75v-10c0-1.036.84-1.875 1.875-1.875h2.5v-3.75h-2.5zM76.25 13.75c0-1.036-.84-1.875-1.875-1.875h-.625c-1.035 0-1.875.84-1.875 1.875v.625h4.375v-.625zm3.75.625v.938c0 1.208-.98 2.187-2.188 2.187h-5.937v.625c0 1.035.84 1.875 1.875 1.875h5.625L77.5 23.75h-3.75a5.625 5.625 0 01-5.625-5.625V13.75a5.625 5.625 0 015.625-5.625h.625A5.625 5.625 0 0180 13.75v.625zm-31.25-.625c0-1.036-.84-1.875-1.875-1.875h-.625c-1.035 0-1.875.84-1.875 1.875v.625h4.375v-.625zm3.75.625v.938c0 1.208-.98 2.187-2.188 2.187h-5.937v.625c0 1.035.84 1.875 1.875 1.875h5.625L50 23.75h-3.75a5.625 5.625 0 01-5.625-5.625V13.75a5.625 5.625 0 015.625-5.625h.625A5.625 5.625 0 0152.5 13.75v.625z",fill:"#fff"}))},le=function(e){var t=e.small,n=(0,l.default)().siteConfig.themeConfig.navbar.items,r=void 0===n?[]:n;return a.createElement(a.Fragment,null,r.map((function(e){return a.createElement(se,{key:e.label,title:e.label,href:e.href,small:t})})))},ie=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],r=(0,a.useRef)(null);return $(r,(function(){n(!1)})),a.createElement(a.Fragment,null,a.createElement("ul",{className:m},a.createElement(le,null)),a.createElement("ul",{className:w,ref:r},a.createElement("span",{onClick:function(e){e.preventDefault(),e.stopPropagation(),n(!t)}},"Menu"),a.createElement("div",{className:b,style:{opacity:t?1:0,pointerEvents:t?"auto":"none"}},a.createElement(le,{small:!0}))))},ce=function(){var e=(0,a.useRef)(null),t=(0,a.useState)(!1),n=t[0],r=t[1],l=(0,a.useState)(!1),i=l[0],c=l[1];return a.createElement("section",{className:v},a.createElement("div",null,a.createElement("h2",null,"Get the latest news and product updates"),a.createElement("form",{onSubmit:function(t){r(!0),fetch("https://subscribe.tellery.io/subscribe",{body:JSON.stringify({email:e.current.value}),method:"POST",headers:{"content-type":"application/json"}}).then((function(e){r(!1),c(!0)})).finally((function(e){r(!1)})),t.preventDefault()}},a.createElement("input",{ref:e,placeholder:"Enter your email",type:"email"}),a.createElement("button",null,n?a.createElement(C,{size:12,color:"#ffffff",scale:1}):i?"Subscribe success!":" Subscribe to newsletter"))))},se=function(e){var t=e.title,n=e.href,r=e.small;return a.createElement("li",{className:o},a.createElement("a",{href:n},"GitHub"===t&&a.createElement(ee,{fill:r?"#1B1F23":"#ffffff",size:20}),t))},me=function(){return a.createElement("main",{className:i},a.createElement(oe,null),a.createElement(X,null))},oe=function(){var e=(0,l.default)().siteConfig.customFields.copy.hero;return a.createElement("section",{className:E},a.createElement("h2",null,e.title.split(/(\n)/).map((function(e){return a.createElement(a.Fragment,{key:e},"\n"===e?a.createElement("br",null):e)}))),a.createElement("h3",null,e.subtitle),a.createElement("div",{className:c},a.createElement("a",{className:p,href:"/docs"},"Learn More"),a.createElement("a",{className:g,href:"https://demo.tellery.io"},"Try Demo")),a.createElement(ue,null))},ue=function(){return a.createElement("div",{className:y},a.createElement(R,{src:(0,_.Z)("/img/home/hero.mp4"),width:1913,height:1040}))},fe=function(){return a.createElement("footer",{className:u},a.createElement(de,null),a.createElement(he,null),a.createElement(ve,null))},he=function(){return a.createElement("div",{className:d})},de=function(){var e=(0,l.default)().siteConfig.customFields.copy.philosophy;return a.createElement("div",{className:f},a.createElement("div",null,a.createElement("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("mask",{id:"mask0","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"60",height:"60"},a.createElement("rect",{width:"60",height:"60",fill:"#C4C4C4"})),a.createElement("g",{mask:"url(#mask0)"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M53.565 1H6.44V15.5H13.69V8.25H46.315V51.75H30.6064L26.9814 59H53.565V1ZM6.44 48.125V22.75H13.69V30H23.3567V37.25H13.69V48.125C13.69 50.127 15.313 51.75 17.315 51.75H23.3564L19.7314 59H17.315C11.3089 59 6.44 54.1311 6.44 48.125Z",fill:"white"})))),a.createElement("p",null,e))},ve=function(){var e=(0,l.default)().siteConfig.themeConfig.footer.links,t=void 0===e?[]:e;return a.createElement("div",{className:h},t.map((function(e,t){var n;return a.createElement(Ee,{title:e.title,key:e.title},null==(n=e.items)?void 0:n.map((function(e){return a.createElement(pe,{key:e.label,title:e.label,href:e.href})})))})))},Ee=function(e){var t=e.children,n=e.title;return a.createElement("ul",null,a.createElement("h5",null,n),t)},pe=function(e){var t=e.title,n=e.href;return a.createElement("li",null,a.createElement("a",{href:n},t))}},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);