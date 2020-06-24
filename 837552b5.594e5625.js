(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{188:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return u}));var n=o(2),r=o(9),a=(o(0),o(250)),i={id:"deployment_models",title:"Deployment models",sidebar_label:"Deployment models"},s={id:"why-fusion/deployment_models",isDocsHomePage:!1,title:"Deployment models",description:"There are numerous use cases for WANdisco Fusion, some of these are explored below.",source:"@site/../docs/why-fusion/deployment_models.md",permalink:"https://wandisco.github.io/wandisco-documentation/docs/why-fusion/deployment_models",sidebar_label:"Deployment models",sidebar:"Why Fusion?",previous:{title:"Features",permalink:"https://wandisco.github.io/wandisco-documentation/docs/why-fusion/features"},next:{title:"Core Platform & DConE",permalink:"https://wandisco.github.io/wandisco-documentation/docs/why-fusion/core_platform_and_dcone"}},c=[{value:"Migration",id:"migration",children:[]},{value:"Disaster Recovery",id:"disaster-recovery",children:[]},{value:"Hybrid Cloud",id:"hybrid-cloud",children:[]},{value:"Backup &amp; Recovery",id:"backup--recovery",children:[]}],l={rightToc:c};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are numerous use cases for WANdisco Fusion, some of these are explored below."),Object(a.b)("h2",{id:"migration"},"Migration"),Object(a.b)("p",null,"WANdisco Fusion allows you to replicate all your data from an on-premise cluster to cloud-based infrastructure. Fusion supports a variety of on-premise platforms, and is able to replicate seamlessly to multiple cloud vendors."),Object(a.b)("p",null,"The migration can happen without impact to your Hadoop operations and cluster activity can be maintained as normal."),Object(a.b)("p",null,"Fusion also offers replication for associated Hive metadata that can be ingested into a target metastore, or a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.databricks.com/getting-started/index.html"}),"Databricks")," cluster."),Object(a.b)("h2",{id:"disaster-recovery"},"Disaster Recovery"),Object(a.b)("p",null,"WANdisco Fusion offers live replication of data between environments, which allows you to safeguard your data from loss. If disaster does occur, the data will be available on your alternative environment(s). This will allow normal operations to proceed regardless of impact on the affected zone."),Object(a.b)("p",null,"Fusion also offers replication of security policies used in Hadoop distributions such as Ranger and Sentry. This will help provide consistent interaction between all your environments."),Object(a.b)("h2",{id:"hybrid-cloud"},"Hybrid Cloud"),Object(a.b)("p",null,"Fusion allows you to divide up your workflows across separate environments through live replication. You can ingest data on-premise (or where ever the data is generated) and query it at scale in another optimized environment. For example, a cloud environment with elastic scaling."),Object(a.b)("p",null,"When running all your work streams on a single cluster, it requires careful coordination with different types of workloads. By using Fusion, you get more control over each environment's performance as you can split this activity across multiple clusters."),Object(a.b)("h2",{id:"backup--recovery"},"Backup & Recovery"),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.wandisco.com/bigdata/wdfusion/plugins/fusion-backup/5.0/"}),"Fusion Backup")," plugin allows a zone to be marked for backup purposes on a per-location basis. You can schedule how long to retain a backup as well as the timing and frequency of each backup."),Object(a.b)("p",null,"Hadoop compatible file system (HCFS) data is snapshotted and stored within Fusion on designated paths. You can recover the state of a designated path in the file system using standard Hadoop commands."))}u.isMDXComponent=!0},250:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(o),m=n,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return o?r.a.createElement(b,s(s({ref:t},l),{},{components:o})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);