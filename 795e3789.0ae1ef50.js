(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var i=a(2),n=a(9),r=(a(0),a(259)),o={id:"hive_replication",title:"Hive Replication & Databricks Integration",sidebar_label:"Hive Replication & Databricks Integration"},c={id:"product-concepts/hive_replication",isDocsHomePage:!1,title:"Hive Replication & Databricks Integration",description:"Overview",source:"@site/../docs/product-concepts/hive_replication.md",permalink:"/wandisco-documentation/docs/product-concepts/hive_replication",sidebar_label:"Hive Replication & Databricks Integration",sidebar:"Product Concepts",previous:{title:"Bandwidth Considerations",permalink:"/wandisco-documentation/docs/product-concepts/bandwidth_considerations"}},l=[{value:"Overview",id:"overview",children:[]},{value:"WANdisco LiveData Hive Plugin",id:"wandisco-livedata-hive-plugin",children:[]},{value:"WANdisco LiveData for Databricks",id:"wandisco-livedata-for-databricks",children:[]},{value:"Deployment overview for Databricks integration",id:"deployment-overview-for-databricks-integration",children:[]}],s={rightToc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"WANdisco offers two plugins that can be used together to replicate to your Databricks cluster."),Object(r.b)("p",null,"The Hive Plugin provides a method of replicating Hive metadata and LiveData for Databricks is used with LiveData Plane to transform this data so that it is compatible with the Spark-based cloud analytics platform that Databricks provides."),Object(r.b)("p",null,"The Hive Plugin can also be used as a standalone plugin in multiple LiveData Plane environments, allowing Hive metadata replication to occur between Hadoop zones."),Object(r.b)("h2",{id:"wandisco-livedata-hive-plugin"},"WANdisco LiveData Hive Plugin"),Object(r.b)("p",null,"LiveData Plane provides a method of replicating Hive metadata with the Hive Plugin. The deployment of this plugin includes the installation of the Hive Plugin and the Live Hive proxy."),Object(r.b)("p",null,"The Live Hive Proxy service coordinates actions performed by client applications that interact with the Hive Metastore. This could either be directly using its thrift interface, or indirectly via another client application (such as ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://cwiki.apache.org/confluence/display/Hive/HiveServer2+Clients#HiveServer2Clients-Beeline%E2%80%93CommandLineShell"}),"Beeline"),")."),Object(r.b)("p",null,"The Live Hive Proxy passes on read commands directly to the local Hive Metastore, and coordinates any write commands with the Hive Plugin, so all metastores on all environments within the replicated ecosystem will perform the write operations (e.g. database/table creation)."),Object(r.b)("p",null,"The Hive Plugin will automatically start to replicate Hive databases and tables when their names match a user defined rule. This must also include a matching HCFS rule for the underlying filesystem data of the database/table."),Object(r.b)("p",null,Object(r.b)("img",Object(i.a)({parentName:"p"},{src:"/wandisco-documentation/img/arch_live_hive.png",alt:"Hive Plugin Replication - workflow example"}))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Write access needs to be coordinated by LiveData Plane before executing the command on the Hive Metastore."),Object(r.b)("li",{parentName:"ol"},"Read commands are 'passed-through' straight to the Hive Metastore as they do not need to be coordinated via LiveData Plane."),Object(r.b)("li",{parentName:"ol"},"LiveData Plane makes a connection to the Hive Metastore on the cluster and coordinates any write requests with the rest of the replicated ecosystem.")),Object(r.b)("h2",{id:"wandisco-livedata-for-databricks"},"WANdisco LiveData for Databricks"),Object(r.b)("p",null,"LiveData for Databricks works in conjunction with LiveData Plane and the Hive Plugin."),Object(r.b)("p",null,"When Hive tables are created in the source Hadoop zone, LiveData for Databricks will create replicas of those tables in ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.databricks.com/getting-started/overview.html"}),"Databricks"),". Modify Hive schemas and see the same structure reflected in changes to matching Delta Lake tables."),Object(r.b)("p",null,"Data ingestion to Hive tables is also replicated to the Databricks cluster, which allows you to access the same information as Delta Lake content in a Databricks environment."),Object(r.b)("h2",{id:"deployment-overview-for-databricks-integration"},"Deployment overview for Databricks integration"),Object(r.b)("p",null,"A deployment consists of two zones:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Zone 1"),Object(r.b)("br",{parentName:"p"}),"\n","This represents the source environment, where your ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://hive.apache.org/"}),"Apache Hive")," content and metadata reside. Your table content will reside in the cluster storage (typically HDFS), and your Hive metadata are managed by and maintained in a Hive Metastore. An operational deployment will include:  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"LiveData Plane"),Object(r.b)("li",{parentName:"ul"},"Hive Plugin")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Zone 2"),Object(r.b)("br",{parentName:"p"}),"\n","This is the target environment, where your ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.databricks.com/getting-started/overview.html"}),"Databricks")," instance is available. Hive content from Zone 1 will be replicated to cloud storage and transformed to the format used by Delta Lake. Metadata changes made to Hive tables in Zone 1 will be replicated to equivalent changes to Databricks Delta Lake tables. An operational deployment of the solution will include:  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"LiveData Plane"),Object(r.b)("li",{parentName:"ul"},"LiveData for Databricks")))}d.isMDXComponent=!0},259:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return v}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,v=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return a?n.a.createElement(v,c(c({ref:t},s),{},{components:a})):n.a.createElement(v,c({ref:t},s))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);