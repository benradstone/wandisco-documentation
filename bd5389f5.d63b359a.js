(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{215:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(9),o=(a(0),a(250)),i={id:"create-rule",title:"How to Create a Rule",sidebar_label:"Create a Rule"},c={id:"quickstarts/operation/create-rule",isDocsHomePage:!1,title:"How to Create a Rule",description:"Before you can migrate or replicate data, you will need to create replication rules.",source:"@site/../docs/quickstarts/operation/create-rule.md",permalink:"/wandisco-documentation/docs/quickstarts/operation/create-rule",sidebar_label:"Create a Rule",sidebar:"quickstarts",previous:{title:"AWS S3 and Azure Data Lake Storage Gen2 with LiveMigrator",permalink:"/wandisco-documentation/docs/quickstarts/installation/s3-adlsg2_bi_lm"},next:{title:"Run a Consistency Check",permalink:"/wandisco-documentation/docs/quickstarts/operation/consistency-check"}},l=[{value:"HCFS",id:"hcfs",children:[]},{value:"Hive",id:"hive",children:[]}],s={rightToc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before you can migrate or replicate data, you will need to create ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/glossary/r#replication-rules"}),"replication rules"),"."),Object(o.b)("p",null,"From the rules section of the dashboard, you can create a rule. By default, this will be a ",Object(o.b)("strong",{parentName:"p"},"HCFS")," rule. If you have Live Hive installed, you will also have the ",Object(o.b)("strong",{parentName:"p"},"Hive")," rule option."),Object(o.b)("h2",{id:"hcfs"},"HCFS"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Define the rule you wish to create:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Give the rule a unique name (i.e. one you haven't used before)."),Object(o.b)("li",{parentName:"ul"},"Provide the path for all storages. If wanting to ",Object(o.b)("strong",{parentName:"li"},"replicate to a different path on target"),", select the option and provide the paths for the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/wandisco-documentation/docs/glossary/s#source"}),"source storage")," and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/wandisco-documentation/docs/glossary/t#target"}),"target storage"),"."))),Object(o.b)("li",{parentName:"ol"},"Files or directories can be excluded from replication using glob patterns:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The default exclusions shown are for Fusion\u2019s housekeeping files, trash directories and Hive staging directories."),Object(o.b)("li",{parentName:"ul"},"You can add any other exclusions required."))),Object(o.b)("li",{parentName:"ol"},"Additional rule options can be applied:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Preserve HCFS Block Size")," - Must be enabled when your path contains columnar file formats, such as ORC, Parquet, Avro. These are commonly used in Hadoop for Hive tables.")))),Object(o.b)("p",null,"After a few moments the rule will appear on your dashboard.\nYou can now perform a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/operation/consistency-check"}),"consistency check")," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/operation/migration"}),"start migrating")," your data."),Object(o.b)("h2",{id:"hive"},"Hive"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Always create a HCFS rule that will match the location of your underlying Hive data. Without this, Hive queries on the target storage will not work."))),Object(o.b)("tbody",{parentName:"table"})),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Define a unique rule name."),Object(o.b)("li",{parentName:"ol"},"Enter the pattern to match the Database(s) that you want to replicate. For example, using the pattern ",Object(o.b)("inlineCode",{parentName:"li"},"test*")," will match any database that has 'test' at the beginning of its name, such as ",Object(o.b)("inlineCode",{parentName:"li"},"test01"),", ",Object(o.b)("inlineCode",{parentName:"li"},"test02"),", ",Object(o.b)("inlineCode",{parentName:"li"},"test03"),"."),Object(o.b)("li",{parentName:"ol"},"Following the same method, enter the pattern to match the Table(s) that you want to replicate.")),Object(o.b)("p",null,"After a few moments the rule will appear on your dashboard."))}u.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(a),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return a?n.a.createElement(m,c(c({ref:t},s),{},{components:a})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);