(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{230:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(250)),c={id:"consistency-check",title:"Run a Consistency Check",sidebar_label:"Consistency Check"},i={id:"quickstarts/operation/consistency-check",isDocsHomePage:!1,title:"Run a Consistency Check",description:"Once you have created a replication rule, run a consistency check to compare the contents between all zones.",source:"@site/../docs/quickstarts/operation/consistency-check.md",permalink:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/operation/consistency-check",sidebar_label:"Consistency Check",sidebar:"quickstarts",previous:{title:"How to Create a Rule",permalink:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/operation/create-rule"},next:{title:"Start a Migration",permalink:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/operation/migration"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once you have ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/operation/create-rule"}),"created a replication rule"),", run a consistency check to compare the contents between all zones."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the ",Object(o.b)("strong",{parentName:"p"},"Rules")," table, click to ",Object(o.b)("strong",{parentName:"p"},"View rule"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the rule page, ",Object(o.b)("strong",{parentName:"p"},"start consistency check")," and wait for the ",Object(o.b)("strong",{parentName:"p"},"Consistency status")," to update. The more objects contained within the path, the longer it will take to complete the check."),Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("strong",{parentName:"p"},"Consistency Status")," will determine the next steps:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Consistent")," - no further action is required."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Inconsistent")," - consider ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/operation/migration"}),"starting a migration"),".")))))}u.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,d=l["".concat(c,".").concat(m)]||l[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);