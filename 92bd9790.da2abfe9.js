(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(9),a=(n(0),n(259)),i={id:"hdp_sandbox_troubleshooting",title:"Troubleshooting Hortonworks (HDP) Sandbox",sidebar_label:"HDP Sandbox"},s={id:"quickstarts/troubleshooting/hdp_sandbox_troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Hortonworks (HDP) Sandbox",description:"See the Useful information section for additional commands and help.",source:"@site/../docs/quickstarts/troubleshooting/hdp_sandbox_troubleshooting.md",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/hdp_sandbox_troubleshooting",sidebar_label:"HDP Sandbox",sidebar:"quickstarts",previous:{title:"Troubleshooting Cloudera (CDH) Sandbox",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/cdh_sandbox_troubleshooting"},next:{title:"Troubleshooting ADLS Gen2",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/adlsg2_troubleshooting"}},c=[{value:"Common issues and resolutions",id:"common-issues-and-resolutions",children:[{value:"No Route to Host after docker container restart",id:"no-route-to-host-after-docker-container-restart",children:[]},{value:"Hiveserver2 down after HDP Sandbox is started",id:"hiveserver2-down-after-hdp-sandbox-is-started",children:[]},{value:"Spark2 History Server down after HDP Sandbox is started for first time",id:"spark2-history-server-down-after-hdp-sandbox-is-started-for-first-time",children:[]},{value:"Hue reports <strong>database is locked</strong>",id:"hue-reports-database-is-locked",children:[]}]},{value:"Rebuild",id:"rebuild",children:[]}],b={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/useful_info"}),"Useful information")," section for additional commands and help."),Object(a.b)("h2",{id:"common-issues-and-resolutions"},"Common issues and resolutions"),Object(a.b)("h3",{id:"no-route-to-host-after-docker-container-restart"},"No Route to Host after docker container restart"),Object(a.b)("p",null,"After restarting a single docker container, such as the HDP Sandbox, you may encounter connectivity issues between LiveData Plane and the Sandbox."),Object(a.b)("p",null,"The internal IP address of the container can change when restarting the container. This can cause the ",Object(a.b)("inlineCode",{parentName:"p"},"No Route to Host")," error as LiveData Plane will have cached the old address."),Object(a.b)("p",null,"To resolve, you must restart all containers within the ",Object(a.b)("inlineCode",{parentName:"p"},"fusion-docker-compose")," directory:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker-compose restart")),Object(a.b)("h3",{id:"hiveserver2-down-after-hdp-sandbox-is-started"},"Hiveserver2 down after HDP Sandbox is started"),Object(a.b)("p",null,"The Hiveserver2 component in the HDP sandbox may be down after starting the cluster. To start it up:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"On the docker host, change to the ",Object(a.b)("inlineCode",{parentName:"p"},"fusion-docker-compose")," directory and restart the LiveData Plane Server container for the HDP zone."),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"docker-compose restart fusion-server-sandbox-hdp")),Object(a.b)("p",{parentName:"li"},"Wait until the container has finished restarting before continuing.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Access the Ambari UI, and manually start the Hiveserver2 component."),Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},'Ambari UI -> Hive -> Summary -> Click on the "HIVESERVER2" written in blue text.'))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Locate the HiveServer2 in the component list and click the ",Object(a.b)("inlineCode",{parentName:"p"},"...")," in the Action column. Select to ",Object(a.b)("strong",{parentName:"p"},"Start")," the component in the drop-down list."))),Object(a.b)("h3",{id:"spark2-history-server-down-after-hdp-sandbox-is-started-for-first-time"},"Spark2 History Server down after HDP Sandbox is started for first time"),Object(a.b)("p",null,"When starting the HDP Sandbox for the first time, the Spark2 History Server may be in a stopped state."),Object(a.b)("p",null,"To bring the History Server online:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the Ambari UI, select to Refresh configs for the WANdisco Fusion service."),Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Ambari UI -> WANdisco Fusion -> Actions -> Refresh configs -> OK"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Start the Spark2 service."),Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Ambari UI -> Spark2 -> Actions -> Start -> CONFIRM START")))),Object(a.b)("h3",{id:"hue-reports-database-is-locked"},"Hue reports ",Object(a.b)("strong",{parentName:"h3"},"database is locked")),Object(a.b)("p",null,"When logging in to the Hue UI for the first time, the ",Object(a.b)("strong",{parentName:"p"},"database is locked")," message may appear. This also results in the Hive databases not being loaded, and you will be unable to run queries."),Object(a.b)("p",null,"To resolve this, click the refresh icon on the Hive database list on the left-hand panel. You should then see the ",Object(a.b)("inlineCode",{parentName:"p"},"default")," database appear and you will now be able to run queries."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"database is locked")," message may still appear, click to close it afterwards."),Object(a.b)("h2",{id:"rebuild"},"Rebuild"),Object(a.b)("p",null,"Use these steps if looking to start over."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Stop and delete all containers, volumes and unused networks using:"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"docker-compose down -v"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"You may need to clean up additional items depending on your deployment. Check the ",Object(a.b)("strong",{parentName:"p"},"rebuild")," section for your chosen distributions and plugins by navigating the options on the sidebar."),Object(a.b)("p",{parentName:"li"},"For example, if your use case is ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/installation/hdp_sandbox_lhv_client-adlsg2_lan"}),"HDP Sandbox to Azure Databricks with LiveAnalytics"),", check the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/adlsg2_troubleshooting#rebuild"}),"ADLS Gen2")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/databricks_troubleshooting"}),"Databricks")," rebuild sections.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Run the setup script again (it will not prompt for any questions), followed by the docker compose ",Object(a.b)("inlineCode",{parentName:"p"},"up")," command to recreate the environment:"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"./setup-env.sh")),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"docker-compose up -d")))))}l.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(i,".").concat(u)]||d[u]||p[u]||a;return n?o.a.createElement(h,s(s({ref:t},b),{},{components:n})):o.a.createElement(h,s({ref:t},b))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);