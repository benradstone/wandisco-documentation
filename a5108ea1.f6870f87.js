(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(9),a=(n(0),n(259)),i={id:"deployment_models",title:"Deployment models",sidebar_label:"Deployment models"},c={id:"product-concepts/deployment_models",isDocsHomePage:!1,title:"Deployment models",description:"There are numerous use cases for WANdisco LiveData Plane, some of these are explored below.",source:"@site/../docs/product-concepts/deployment_models.md",permalink:"/wandisco-documentation/docs/product-concepts/deployment_models",sidebar_label:"Deployment models",sidebar:"Product Concepts",previous:{title:"Features",permalink:"/wandisco-documentation/docs/product-concepts/features"},next:{title:"Core Platform & DConE",permalink:"/wandisco-documentation/docs/product-concepts/core_platform_and_dcone"}},s=[{value:"Migration",id:"migration",children:[]},{value:"Disaster Recovery",id:"disaster-recovery",children:[]},{value:"Hybrid Cloud",id:"hybrid-cloud",children:[]},{value:"Backup &amp; Recovery",id:"backup--recovery",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are numerous use cases for WANdisco LiveData Plane, some of these are explored below."),Object(a.b)("h2",{id:"migration"},"Migration"),Object(a.b)("p",null,"LiveData Plane allows you to replicate all your data from an on-premise cluster to cloud-based infrastructure. LiveData Plane supports a variety of on-premise platforms, and is able to replicate seamlessly to multiple cloud vendors."),Object(a.b)("p",null,"The migration can happen without impact to your Hadoop operations and cluster activity can be maintained as normal."),Object(a.b)("p",null,"LiveData Plane also offers replication for associated Hive metadata that can be ingested into a target metastore, or a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.databricks.com/getting-started/index.html"}),"Databricks")," cluster."),Object(a.b)("h2",{id:"disaster-recovery"},"Disaster Recovery"),Object(a.b)("p",null,"LiveData Plane offers live replication of data between environments, which allows you to safeguard your data from loss. If disaster does occur, the data will be available on your alternative environment(s). This will allow normal operations to proceed regardless of impact on the affected zone."),Object(a.b)("p",null,"LiveData Plane also offers replication of security policies used in Hadoop distributions such as Ranger and Sentry. This will help provide consistent interaction between all your environments."),Object(a.b)("h2",{id:"hybrid-cloud"},"Hybrid Cloud"),Object(a.b)("p",null,"LiveData Plane allows you to divide up your workflows across separate environments through live replication. You can ingest data on-premise (or where ever the data is generated) and query it at scale in another optimized environment. For example, a cloud environment with elastic scaling."),Object(a.b)("p",null,"When running all your work streams on a single cluster, it requires careful coordination with different types of workloads. By using LiveData Plane, you get more control over each environment's performance as you can split this activity across multiple clusters."),Object(a.b)("h2",{id:"backup--recovery"},"Backup & Recovery"),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.wandisco.com/bigdata/wdfusion/plugins/fusion-backup/5.0/"}),"Backup Plugin")," allows a zone to be marked for backup purposes on a per-location basis. You can schedule how long to retain a backup as well as the timing and frequency of each backup."),Object(a.b)("p",null,"Hadoop compatible file system (HCFS) data is snapshotted and stored within LiveData Plane on designated paths. You can recover the state of a designated path in the file system using standard Hadoop commands."))}u.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.a.createElement(b,c(c({ref:t},l),{},{components:n})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);