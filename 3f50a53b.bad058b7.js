(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{166:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return d}));var o=t(2),r=t(9),a=(t(0),t(259)),i={id:"hdp_sandbox_fusion_stop_start",title:"Shut down or start up HDP Sandbox and LiveData Plane",sidebar_label:"Stop/Start HDP Sandbox & LiveData Plane"},s={id:"quickstarts/operation/hdp_sandbox_fusion_stop_start",isDocsHomePage:!1,title:"Shut down or start up HDP Sandbox and LiveData Plane",description:"Shutting down",source:"@site/../docs/quickstarts/operation/hdp_sandbox_fusion_stop_start.md",permalink:"/wandisco-documentation/docs/quickstarts/operation/hdp_sandbox_fusion_stop_start",sidebar_label:"Stop/Start HDP Sandbox & LiveData Plane",sidebar:"quickstarts",previous:{title:"Shut down or start up CDH Sandbox and LiveData Plane",permalink:"/wandisco-documentation/docs/quickstarts/operation/cdh_sandbox_fusion_stop_start"},next:{title:"General troubleshooting",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/general_troubleshooting"}},p=[{value:"Shutting down",id:"shutting-down",children:[{value:"Stop HDP Sandbox services",id:"stop-hdp-sandbox-services",children:[]},{value:"Stop all containers",id:"stop-all-containers",children:[]},{value:"Shutdown the Docker host",id:"shutdown-the-docker-host",children:[]}]},{value:"Starting up",id:"starting-up",children:[{value:"Start all containers",id:"start-all-containers",children:[]}]}],c={rightToc:p};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"shutting-down"},"Shutting down"),Object(a.b)("p",null,"The steps should be carried out prior to shutting down the Docker host itself."),Object(a.b)("h3",{id:"stop-hdp-sandbox-services"},"Stop HDP Sandbox services"),Object(a.b)("p",null,"Log in to the Ambari UI, and stop all services."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"http://<dockerhost_IP_address>:8080")),Object(a.b)("p",null,"Username: ",Object(a.b)("inlineCode",{parentName:"p"},"admin"),"\nPassword: ",Object(a.b)("inlineCode",{parentName:"p"},"admin")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Ambari UI -> Services (...) -> Stop All -> CONFIRM STOP")),Object(a.b)("p",null,"Wait until all services have stopped before continuing."),Object(a.b)("h3",{id:"stop-all-containers"},"Stop all containers"),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"fusion-docker-compose")," directory on the Docker host, stop all containers by using:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker-compose stop")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example output")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"Stopping fusion-oneui-server               ... done\nStopping fusion-server-adls2               ... done\nStopping induction                         ... done\nStopping fusion-ihc-server-adls2           ... done\nStopping fusion-server-sandbox-hdp         ... done\nStopping sshd-sandbox-hdp                  ... done\nStopping fusion-ihc-server-sandbox-hdp     ... done\nStopping fusion-nn-proxy-sandbox-hdp       ... done\nStopping fusion-livehive-proxy-sandbox-hdp ... done\nStopping fusion-ui-server-adls2            ... done\nStopping fusion-ui-server-sandbox-hdp      ... done\nStopping sandbox-hdp                       ... done\nStopping debug                             ... done\n")),Object(a.b)("h3",{id:"shutdown-the-docker-host"},"Shutdown the Docker host"),Object(a.b)("p",null,"You can now safely shut down the Docker host."),Object(a.b)("h2",{id:"starting-up"},"Starting up"),Object(a.b)("p",null,"Ensure the Docker host is started and that the docker containers have been created previously (using ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose up -d"),")."),Object(a.b)("h3",{id:"start-all-containers"},"Start all containers"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In the ",Object(a.b)("inlineCode",{parentName:"p"},"fusion-docker-compose")," directory on the Docker host, verify that the containers are stopped."),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"docker-compose ps")),Object(a.b)("p",{parentName:"li"},"All containers should have an ",Object(a.b)("inlineCode",{parentName:"p"},"Exit")," state.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Start all containers."),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"docker-compose start")),Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},"Example output")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-text"}),"Starting fusion-oneui-server               ... done\nStarting fusion-server-adls2               ... done\nStarting induction                         ... done\nStarting fusion-ihc-server-adls2           ... done\nStarting fusion-server-sandbox-hdp         ... done\nStarting sshd-sandbox-hdp                  ... done\nStarting fusion-ihc-server-sandbox-hdp     ... done\nStarting fusion-nn-proxy-sandbox-hdp       ... done\nStarting fusion-livehive-proxy-sandbox-hdp ... done\nStarting fusion-ui-server-adls2            ... done\nStarting fusion-ui-server-sandbox-hdp      ... done\nStarting sandbox-hdp                       ... done\nStarting debug                             ... done\n")))),Object(a.b)("p",null,"The HDP sandbox services will automatically start once the container is running. This can take 5-10 minutes."))}d.isMDXComponent=!0},259:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return h}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),d=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(t),b=o,h=l["".concat(i,".").concat(b)]||l[b]||u[b]||a;return t?r.a.createElement(h,s(s({ref:n},c),{},{components:t})):r.a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);