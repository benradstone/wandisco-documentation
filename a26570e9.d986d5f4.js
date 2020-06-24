(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{202:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var o=t(2),i=t(9),r=(t(0),t(250)),a={id:"logs",title:"Logs",sidebar_label:"Logs"},c={id:"quickstarts/troubleshooting/logs",isDocsHomePage:!1,title:"Logs",description:"Components",source:"@site/../docs/quickstarts/troubleshooting/logs.md",permalink:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/troubleshooting/logs",sidebar_label:"Logs",sidebar:"quickstarts",previous:{title:"Troubleshooting Databricks Delta Lake",permalink:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/troubleshooting/databricks_troubleshooting"},next:{title:"Useful Information",permalink:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/troubleshooting/useful_info"}},l=[{value:"Components",id:"components",children:[]},{value:"Viewing log files",id:"viewing-log-files",children:[{value:"Individual containers",id:"individual-containers",children:[]},{value:"Debug container",id:"debug-container",children:[]}]},{value:"Obtaining log files",id:"obtaining-log-files",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"components"},"Components"),Object(r.b)("p",null,"Log files are split into the various components that make up a Fusion installation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fusion Server - one per zone."),Object(r.b)("li",{parentName:"ul"},"IHC Server - one per zone."),Object(r.b)("li",{parentName:"ul"},"UI Server - one per zone."),Object(r.b)("li",{parentName:"ul"},"OneUI - one per installation.")),Object(r.b)("p",null,"For Hadoop zones (i.e. CDH or HDP), additional components could be:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"NameNode Proxy"),Object(r.b)("li",{parentName:"ul"},"Live Hive Proxy")),Object(r.b)("p",null,"All of these components are contained within their specific containers, as shown below from an example output of ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose ps"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),"Name                                         Command                          State   Ports\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\nfusion_debug_1                               tail -f /dev/null                Up\nfusion_fusion-ihc-server-adls2_1             /usr/bin/entrypointd.sh /b ...   Up      0.0.0.0:7500->7500/tcp, 0.0.0.0:7501->7501/tcp, 0.0.0.0:9502->9502/tcp\nfusion_fusion-ihc-server-sandbox-hdp_1       /usr/bin/entrypointd.sh /b ...   Up      0.0.0.0:7000->7000/tcp, 0.0.0.0:9002->9002/tcp\nfusion_fusion-livehive-proxy-sandbox-hdp_1   /usr/bin/entrypointd.sh /b ...   Up      0.0.0.0:9083->9083/tcp\nfusion_fusion-nn-proxy-sandbox-hdp_1         /usr/bin/entrypointd.sh /b ...   Up      0.0.0.0:8890->8890/tcp\nfusion_fusion-oneui-server_1                 /bin/sh -c /etc/alternativ ...   Up      0.0.0.0:8081->8081/tcp\nfusion_fusion-server-adls2_1                 /usr/bin/entrypointd.sh /b ...   Up      0.0.0.0:6944->6944/tcp, 0.0.0.0:8523->8523/tcp, 0.0.0.0:8524->8524/tcp, 0.0.0.0:8582->8582/tcp, 0.0.0.0:8584->8584/tcp\nfusion_fusion-server-sandbox-hdp_1           /usr/bin/entrypointd.sh /b ...   Up      0.0.0.0:6444->6444/tcp, 0.0.0.0:8023->8023/tcp, 0.0.0.0:8024->8024/tcp, 0.0.0.0:8082->8082/tcp, 0.0.0.0:8084->8084/tcp\nfusion_fusion-ui-server-adls2_1              /usr/bin/entrypointd.sh /b ...   Up      0.0.0.0:8583->8583/tcp, 0.0.0.0:8943->8943/tcp\nfusion_fusion-ui-server-sandbox-hdp_1        /usr/bin/entrypointd.sh /b ...   Up      0.0.0.0:8083->8083/tcp, 0.0.0.0:8443->8443/tcp\nfusion_induction_1                           /usr/bin/entrypointd.sh /s ...   Up\nfusion_sandbox-hdp_1                         /sbin/init                       Up      0.0.0.0:50010->50010/tcp, 0.0.0.0:50070->50070/tcp, 8020/tcp, 8042/tcp, 0.0.0.0:8080->8080/tcp, 8088/tcp, 9083/tcp\nfusion_sshd-sandbox-hdp_1                    /usr/local/bin/entrypointd ...   Up      0.0.0.0:2022->22/tcp, 0.0.0.0:8670->8670/tcp\n")),Object(r.b)("h2",{id:"viewing-log-files"},"Viewing log files"),Object(r.b)("h3",{id:"individual-containers"},"Individual containers"),Object(r.b)("p",null,"You can log in to a container and view the logs for a specific component in a zone. For example, if you are wanting to view the Fusion Server's logs for the HDP Sandbox zone, run:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"docker-compose exec fusion-server-sandbox-hdp bash")),Object(r.b)("p",null,"Once inside, you can access the log directory for the Fusion Server."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cd /var/log/fusion/server")),Object(r.b)("h4",{id:"log-locations"},"Log locations"),Object(r.b)("p",null,"The list below highlights the log directory for each component in their individual containers:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Fusion Server:"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/fusion/server/")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Fusion IHC Server:"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/fusion/ihc/server/")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Fusion UI Server:"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/fusion/ui/")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Fusion NameNode Proxy:"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/fusion/plugins/live-nn/")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Fusion Live Hive Proxy:"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/fusion/plugins/live-hive-proxy/")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Fusion OneUI:"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/fusion/oneui/")),Object(r.b)("h3",{id:"debug-container"},"Debug container"),Object(r.b)("p",null,"The debug container holds all the Fusion log files for each component. You can log in to this container to view any log file in either zone."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"docker-compose exec debug bash")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"vim")," and ",Object(r.b)("inlineCode",{parentName:"p"},"less")," commands are not available by default, to install them:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"apt-get update && apt install vim less")),Object(r.b)("h4",{id:"log-locations-1"},"Log locations"),Object(r.b)("p",null,"You will be logged inside of the ",Object(r.b)("inlineCode",{parentName:"p"},"/debug")," directory, which contains directories for each Fusion zone and the OneUI (which is not linked to a specific zone)."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"drwxr-xr-x 3 root root 4096 Mar 31 11:51 oneui-server\ndrwxr-xr-x 7 1000 1000 4096 Mar 31 11:51 adls2\ndrwxr-xr-x 7 1000 1000 4096 Mar 31 11:51 sandbox-hdp\n")),Object(r.b)("p",null,"The log locations for each component are slightly different to that of the individual containers."),Object(r.b)("p",null,"Fusion Server:\n",Object(r.b)("inlineCode",{parentName:"p"},"/debug/<zone-name>/server/")),Object(r.b)("p",null,"IHC Server:\n",Object(r.b)("inlineCode",{parentName:"p"},"/debug/<zone-name>/ihc/server/")),Object(r.b)("p",null,"UI Server:\n",Object(r.b)("inlineCode",{parentName:"p"},"/debug/<zone-name>/ui/")),Object(r.b)("p",null,"NameNode Proxy:\n",Object(r.b)("inlineCode",{parentName:"p"},"/debug/<zone-name>/plugins/live-nn/")),Object(r.b)("p",null,"Live Hive Proxy:\n",Object(r.b)("inlineCode",{parentName:"p"},"/debug/<zone-name>/plugins/live-hive-proxy/")),Object(r.b)("p",null,"OneUI:\n",Object(r.b)("inlineCode",{parentName:"p"},"/debug/oneui-server/oneui/")),Object(r.b)("h2",{id:"obtaining-log-files"},"Obtaining log files"),Object(r.b)("p",null,"You can compress and copy the log files to your Docker host from the debug container."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"docker-compose exec -T debug tar -cvzf - /debug > /tmp/logs.tar.gz")),Object(r.b)("p",null,"This stores all container log files in a gzip file in the ",Object(r.b)("inlineCode",{parentName:"p"},"/tmp")," directory on the Docker host. The file can then be transferred to your local machine if desired."))}s.isMDXComponent=!0},250:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),d=o,m=b["".concat(a,".").concat(d)]||b[d]||u[d]||r;return t?i.a.createElement(m,c(c({ref:n},p),{},{components:t})):i.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<r;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);