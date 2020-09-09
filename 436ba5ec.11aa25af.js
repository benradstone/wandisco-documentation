(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(9),r=(n(0),n(259)),o={id:"migration_replication",title:"Migration vs. Replication",sidebar_label:"Migration vs. Replication"},c={id:"product-concepts/migration_replication",isDocsHomePage:!1,title:"Migration vs. Replication",description:"LiveData Plane provides the LiveMigrator plugin as part of its standard Dockerized deployment. This allows you to conduct bulk migrations as well as continual live replication on selected paths.",source:"@site/../docs/product-concepts/migration_replication.md",permalink:"/wandisco-documentation/docs/product-concepts/migration_replication",sidebar_label:"Migration vs. Replication",sidebar:"Product Concepts",previous:{title:"Consistency Checks",permalink:"/wandisco-documentation/docs/product-concepts/concepts_consistency_checks"},next:{title:"Bandwidth Considerations",permalink:"/wandisco-documentation/docs/product-concepts/bandwidth_considerations"}},s=[{value:"What is a Migration?",id:"what-is-a-migration",children:[]},{value:"What is Replication?",id:"what-is-replication",children:[]},{value:"When should I use them?",id:"when-should-i-use-them",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"LiveData Plane provides the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://wandisco.com/products/live-migrator"}),"LiveMigrator plugin")," as part of its standard Dockerized deployment. This allows you to conduct bulk migrations as well as continual live replication on selected paths."),Object(r.b)("h2",{id:"what-is-a-migration"},"What is a Migration?"),Object(r.b)("p",null,"LiveMigrator allows you to migrate data in a single pass while keeping up with all changes occurring in the source zone. This results in guaranteed consistency between source and target at the completion of the migration."),Object(r.b)("p",null,"LiveMigrator uses a single scan iterator which visits every source file once and once only, replicating data from the source to the target zone. This ensures the target has a complete copy of the data. If data is changed which the iterator hasn\u2019t seen yet then the change will simply be picked up when the iterator reaches that content and replicated to the target environment. If changes occur in an area which has already been scanned by the iterator then LiveMigrator transfers the change as soon as it occurs. The result is a completely consistent data copy at the end of migration.\nYou can manually trigger a migration whenever you are ready to begin."),Object(r.b)("h2",{id:"what-is-replication"},"What is Replication?"),Object(r.b)("p",null,"Replication is the standard functionality provided by the LiveData Plane software. LiveData Plane provides the capability of active file transfers to and from source and target filesystems. Replication occurs once a specific path in a filesystem is associated as a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/wandisco-documentation/docs/product-concepts/concepts_replication_rules"}),"replication rule"),"."),Object(r.b)("p",null,"Client requests are intercepted by the LiveData Plane Client. This sends the requests to the LiveData Plane Server and coordinates it with the associated LiveData Plane servers in its ecosystem. The LiveData Plane Servers will then run those operations on their configured filesystem(s). This action is called replication and unlike migrations it is automatically enabled once a replication rule is defined."),Object(r.b)("h2",{id:"when-should-i-use-them"},"When should I use them?"),Object(r.b)("p",null,"How you choose to use LiveData Plane will depend on your ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/wandisco-documentation/docs/product-concepts/deployment_models"}),"deployment model"),"."),Object(r.b)("p",null,"For a Migration, you may only need to perform a one-time transfer of data from a source to a target filesystem. As such, a migration using LiveMigrator will be required to perform this task."),Object(r.b)("p",null,"For a Disaster Recovery or Hybrid Cloud, if you have existing data on source, you will need to transfer it first using LiveMigrator. Once the migration\nis complete, live data replication can then be used to keep the data in sync between source and target filesystems."))}p.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||r;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);