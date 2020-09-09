(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(259)),i={id:"general_troubleshooting",title:"General troubleshooting",sidebar_label:"General"},s={id:"quickstarts/troubleshooting/general_troubleshooting",isDocsHomePage:!1,title:"General troubleshooting",description:"The issues listed here are not specific to any distribution or plugin, and may be seen on any LiveData Plane deployment.",source:"@site/../docs/quickstarts/troubleshooting/general_troubleshooting.md",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/general_troubleshooting",sidebar_label:"General",sidebar:"quickstarts",previous:{title:"Shut down or start up HDP Sandbox and LiveData Plane",permalink:"/wandisco-documentation/docs/quickstarts/operation/hdp_sandbox_fusion_stop_start"},next:{title:"Troubleshooting Cloudera (CDH) Sandbox",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/cdh_sandbox_troubleshooting"}},c=[{value:"Common issues and resolutions",id:"common-issues-and-resolutions",children:[{value:"Permission denied when installing packages or services",id:"permission-denied-when-installing-packages-or-services",children:[]},{value:"Error &#39;connection refused&#39; after starting LiveData Plane for the first time",id:"error-connection-refused-after-starting-livedata-plane-for-the-first-time",children:[]},{value:"LiveData Plane zones not inducted together",id:"livedata-plane-zones-not-inducted-together",children:[]}]},{value:"Azure specific",id:"azure-specific",children:[{value:"Unable to access Ambari, Cloudera or LiveData Plane UI on VM",id:"unable-to-access-ambari-cloudera-or-livedata-plane-ui-on-vm",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The issues listed here are not specific to any distribution or plugin, and may be seen on any LiveData Plane deployment."),Object(a.b)("p",null,"If looking for an issue that is specific to a distribution or plugin, select the appropriate option on the sidebar."),Object(a.b)("p",null,"See the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/useful_info"}),"Useful information")," section for additional commands and help. It also includes a rebuild section for starting over."),Object(a.b)("h2",{id:"common-issues-and-resolutions"},"Common issues and resolutions"),Object(a.b)("h3",{id:"permission-denied-when-installing-packages-or-services"},"Permission denied when installing packages or services"),Object(a.b)("p",null,"The commands given in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/preparation/vm_prep#install-services"}),"VM Preparation")," guide assume that you are running as root user. If you are not, then an error similar to below will be seen:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ apt-get update && apt install -y git\n__\nReading package lists... Done\nE: Could not open lock file /var/lib/apt/lists/lock - open (13: Permission denied)\nE: Unable to lock directory /var/lib/apt/lists/\nW: Problem unlinking the file /var/cache/apt/pkgcache.bin - RemoveCaches (13: Permission denied)\nW: Problem unlinking the file /var/cache/apt/srcpkgcache.bin - RemoveCaches (13: Permission denied)\n")),Object(a.b)("p",null,"To resolve this, either switch to root user (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"sudo -i"),") or run the commands with sudo if your VM user has sufficient privileges, e.g."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"$ sudo apt-get update && sudo apt install -y git")),Object(a.b)("h3",{id:"error-connection-refused-after-starting-livedata-plane-for-the-first-time"},"Error 'connection refused' after starting LiveData Plane for the first time"),Object(a.b)("p",null,"You may see this error when running ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose up -d")," for the first time inside the ",Object(a.b)("inlineCode",{parentName:"p"},"fusion-docker-compose")," directory:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),"ERROR: Get https://registry-1.docker.io/v2/: dial tcp: lookup registry-1.docker.io on [::1]:53: read udp [::1]:52155->[::1]:53: read: connection refused\n")),Object(a.b)("p",null,"Running the ",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose up -d")," command a second time will fix the issue."),Object(a.b)("h3",{id:"livedata-plane-zones-not-inducted-together"},"LiveData Plane zones not inducted together"),Object(a.b)("p",null,"If the LiveData Plane zones are not inducted together after starting LiveData Plane for the first time (",Object(a.b)("inlineCode",{parentName:"p"},"docker-compose up -d"),"), run the same command again to start the induction container:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(a.b)("h2",{id:"azure-specific"},"Azure specific"),Object(a.b)("h3",{id:"unable-to-access-ambari-cloudera-or-livedata-plane-ui-on-vm"},"Unable to access Ambari, Cloudera or LiveData Plane UI on VM"),Object(a.b)("p",null,"Depending on how your Network IP or DNS hostname resolution is set up for your Azure environment, you may experience issues when trying to access hosted services on the VM."),Object(a.b)("p",null,"These services require you to access them on a standard port such as 8080 (Ambari), 7180 (Cloudera) or 8081 (LiveData Plane UI), for example:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"http://<vm_ip_address>:8081")),Object(a.b)("p",null,"You may experience issues sooner if you are unable to log in to your Azure VM via SSH (this uses the standard port 22)."),Object(a.b)("p",null,"If you cannot access these services or log in to your VM, you may need admin assistance from whoever manages your Azure environment/subscription. See the Microsoft docs for more info:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-ip-addresses-overview-arm"}),"IP address types and allocation methods in Azure"))))}u.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);