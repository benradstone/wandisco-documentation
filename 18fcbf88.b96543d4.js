(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),r=(n(0),n(250)),o={id:"cdh-s3",title:"Cloudera (CDH) to S3",sidebar_label:"Cloudera (CDH) to S3"},c={id:"quickstarts/installation/cdh-s3",isDocsHomePage:!1,title:"Cloudera (CDH) to S3",description:"Use this quickstart if you want to configure Fusion to connect to Cloudera (CDH) and an S3 bucket.",source:"@site/../docs/quickstarts/installation/cdh-s3.md",permalink:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/installation/cdh-s3",sidebar_label:"Cloudera (CDH) to S3"},l=[{value:"Limitations of this quickstart",id:"limitations-of-this-quickstart",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Guidance",id:"guidance",children:[{value:"Setup prompts",id:"setup-prompts",children:[]},{value:"Startup",id:"startup",children:[]},{value:"Replication",id:"replication",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Use this quickstart if you want to configure Fusion to connect to Cloudera (CDH) and an S3 bucket."),Object(r.b)("p",null,"Please see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/troubleshooting/useful_info"}),"Useful information")," section for additional commands and help."),Object(r.b)("h2",{id:"limitations-of-this-quickstart"},"Limitations of this quickstart"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This guide does not currently offer configuration of Fusion to a ",Object(r.b)("strong",{parentName:"li"},"Kerberized")," CDH cluster."),Object(r.b)("li",{parentName:"ul"},"Migration of existing data will be available after configuration, but not live replication.")),Object(r.b)("p",null,"We are working to include these additional items as soon as possible."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"EC2 VM instance set up and running, with root access available (instructions were tested on RHEL 7)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/install/"}),"Docker")," (v19.03.3 or higher), ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/"}),"Docker Compose")," (v1.24.1 or higher), and ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"Git")," installed on instance."),Object(r.b)("li",{parentName:"ul"},"Administrator credentials for the Cloudera Manager."),Object(r.b)("li",{parentName:"ul"},"Network connectivity to the Cloudera Manager and NameNodes."),Object(r.b)("li",{parentName:"ul"},"Credentials for accessing the S3 bucket."),Object(r.b)("li",{parentName:"ul"},"Network connectivity to the S3 bucket.")),Object(r.b)("h2",{id:"guidance"},"Guidance"),Object(r.b)("p",null,"Clone the Fusion docker repository to your EC2 instance:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"git clone https://github.com/WANdisco/fusion-docker-compose.git")),Object(r.b)("p",null,"Switch to the repository directory, and run the setup script:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cd fusion-docker-compose")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"./setup-env.sh")),Object(r.b)("p",null,"Follow the prompts to configure your zones."),Object(r.b)("h3",{id:"setup-prompts"},"Setup prompts"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Zone name")),Object(r.b)("p",null,"If defining a zone name, please note that each zone must have a different name (i.e. they cannot match)."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Licenses")),Object(r.b)("p",null,"Trial licenses will last 30 days and are limited to 1TB of replicated data."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example entries for CDH")),Object(r.b)("p",null,"Hadoop NameNode IP/hostname: ",Object(r.b)("inlineCode",{parentName:"p"},"namenode.example.com")," - if NameNode HA is configured, this should be the Active NameNode."),Object(r.b)("p",null,"NameNode port: ",Object(r.b)("inlineCode",{parentName:"p"},"8020")," - if NameNode HA is configured, this value will be defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"dfs.namenode.rpc-address.<nameservice>.<namenode_id>")," property. If NameNode HA is not configured, the value will be defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"fs.defaultFS")," property."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example entries for S3")),Object(r.b)("p",null,"Region: ",Object(r.b)("inlineCode",{parentName:"p"},"us-west-1")),Object(r.b)("p",null,"Bucket name: ",Object(r.b)("inlineCode",{parentName:"p"},"fusion-bucket")),Object(r.b)("p",null,"Access key: ",Object(r.b)("inlineCode",{parentName:"p"},"ACCESS_KEY")," - If using AWS, this can be found under ",Object(r.b)("em",{parentName:"p"},"My security credentials")," in the IAM management page (Access key ID)."),Object(r.b)("p",null,"Secret key: ",Object(r.b)("inlineCode",{parentName:"p"},"SECRET_KEY"),"- If using AWS, this will have been provided during the initial creation of the Access Key."),Object(r.b)("p",null,"Buffer directory: ",Object(r.b)("inlineCode",{parentName:"p"},"/tmp")," - this can be left as default."),Object(r.b)("p",null,"S3 endpoint: ",Object(r.b)("inlineCode",{parentName:"p"},"s3.us-west-1.amazonaws.com")),Object(r.b)("h3",{id:"startup"},"Startup"),Object(r.b)("p",null,"After all the prompts have been completed, you will be able to start the containers."),Object(r.b)("p",null,"Ensure that Docker is started:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"systemctl status docker")),Object(r.b)("p",null,"If not, start the Docker service:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"systemctl start docker")),Object(r.b)("p",null,"Start the Fusion containers with:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(r.b)("p",null,"Log in to the UI via a web browser with the VM's hostname and port 8081."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"http://<docker-hostname>:8081/")),Object(r.b)("p",null,"Register your email address and password, and then use these to log in to the UI."),Object(r.b)("h3",{id:"replication"},"Replication"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"You now have the ability to create replication rules via the UI, feel free to create one and test replication.")))}b.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);