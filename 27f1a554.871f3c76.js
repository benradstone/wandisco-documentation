(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(250)),i={id:"arch_adlsg1_adlsg2",title:"Architecture - Azure Data Lake Storage Gen1 to Gen2",sidebar_label:"ADLS Gen1 to ADLS Gen2"},c={id:"docs/architecture/arch_adlsg1_adlsg2",isDocsHomePage:!1,title:"Architecture - Azure Data Lake Storage Gen1 to Gen2",description:"Architecture: ADLS Gen1 to ADLS Gen2",source:"@site/../docs/docs/architecture/arch_adlsg1_adlsg2.md",permalink:"https://wandisco.github.io/wandisco-documentation/docs/docs/architecture/arch_adlsg1_adlsg2",sidebar_label:"ADLS Gen1 to ADLS Gen2",sidebar:"docs",previous:{title:"Reference documents",permalink:"https://wandisco.github.io/wandisco-documentation/docs/docs/doc1"},next:{title:"Architecture - Hortonworks (HDP) Sandbox to ADLS Gen2",permalink:"https://wandisco.github.io/wandisco-documentation/docs/docs/architecture/arch_hdp_sandbox_adlsg2"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/arch_adlsg1_adlsg2.jpg",alt:"Architecture: ADLS Gen1 to ADLS Gen2"}))),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"When initiating a migration, Fusion LiveMigrator will scan the ADLS Gen1 storage."),Object(a.b)("li",{parentName:"ol"},"Any new files or differences are read by the Fusion IHC in the ADLS Gen1 zone, and replicated to the Fusion Server in the ADLS Gen2 zone."),Object(a.b)("li",{parentName:"ol"},"The Fusion Server in the ADLS Gen2 zone will transform the ADLS Gen1 data to equivalent ADLS Gen2 changes. LiveMigrator will overwrite or skip existing files on the ADLS Gen2 storage depending on the settings used.")))}u.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?o.a.createElement(b,c(c({ref:t},l),{},{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);