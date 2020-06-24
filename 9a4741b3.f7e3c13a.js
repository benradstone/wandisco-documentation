(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{196:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(9),i=(a(0),a(250)),o={id:"hdp_sandbox-s3_ld",title:"Hortonworks (HDP) Sandbox to AWS S3 with LiveData",sidebar_label:"HDP Sandbox to AWS S3 with LiveData"},c={id:"quickstarts/installation/hdp_sandbox-s3_ld",isDocsHomePage:!1,title:"Hortonworks (HDP) Sandbox to AWS S3 with LiveData",description:"Use this quickstart if you want to configure Fusion to replicate from a non-kerberized Hortonworks (HDP) Sandbox to an AWS S3 bucket.",source:"@site/../docs/quickstarts/installation/hdp_sandbox-s3_ld.md",permalink:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/installation/hdp_sandbox-s3_ld",sidebar_label:"HDP Sandbox to AWS S3 with LiveData",sidebar:"quickstarts",previous:{title:"Hortonworks (HDP) Sandbox to AWS S3 with LiveMigrator",permalink:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/installation/hdp_sandbox-s3_lm"},next:{title:"AWS S3 and Azure Data Lake Storage Gen2 (bi-directional) with LiveMigrator",permalink:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/installation/s3-adlsg2_bi_lm"}},l=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Info you will require",id:"info-you-will-require",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Setup Fusion",id:"setup-fusion",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Check HDP services are started",id:"check-hdp-services-are-started",children:[]},{value:"Configure the S3 storage",id:"configure-the-s3-storage",children:[]}]},{value:"Replication",id:"replication",children:[{value:"Create replication rule",id:"create-replication-rule",children:[]},{value:"Test HCFS replication",id:"test-hcfs-replication",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],b={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use this quickstart if you want to configure Fusion to replicate from a non-kerberized Hortonworks (HDP) Sandbox to an AWS S3 bucket."),Object(i.b)("p",null,"What this guide will cover:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Installing WANdisco Fusion and a HDP Sandbox using the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/compose/"}),"docker-compose")," tool."),Object(i.b)("li",{parentName:"ul"},"Integrating WANdisco Fusion with AWS S3."),Object(i.b)("li",{parentName:"ul"},"Live replication of sample data.")),Object(i.b)("p",null,"If you would like to try something different with the HDP Sandbox, see:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/installation/hdp_sandbox-s3_lm"}),"Migration of data to AWS S3"))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"For info on how to create a suitable VM with all services installed, see our ",Object(i.b)("a",Object(n.a)({parentName:"th"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/preparation/aws_vm_creation"}),"AWS VM creation")," guide. See our ",Object(i.b)("a",Object(n.a)({parentName:"th"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/preparation/vm_prep"}),"VM Preparation")," guide for how to install the services only."))),Object(i.b)("tbody",{parentName:"table"})),Object(i.b)("p",null,"To complete this install, you will need:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"AWS S3 bucket."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Only ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/general/latest/gr/signature-version-2.html"}),"regions that support Signature Version 2")," are currently supported."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Linux Virtual Machine (e.g. AWS EC2 instance)."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Minimum size recommendation = ",Object(i.b)("strong",{parentName:"li"},"4 vcpus, 32 GiB memory")," (e.g. ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://aws.amazon.com/ec2/instance-types/"}),"r5.xlarge"),")."),Object(i.b)("li",{parentName:"ul"},"A minimum of 24GB available storage for the ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/docker")," directory."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The following services must be installed on the VM:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"Git")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/install/"}),"Docker")," (v19.03.5 or higher)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/#install-compose"}),"Docker Compose for Linux")," (v1.25.0 or higher)")))),Object(i.b)("h3",{id:"info-you-will-require"},"Info you will require"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"AWS S3 details:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html"}),"Bucket name")," (Example: ",Object(i.b)("inlineCode",{parentName:"li"},"fusion-bucket"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints"}),"Bucket region")," (Example: ",Object(i.b)("inlineCode",{parentName:"li"},"eu-west-1"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"}),"Access key")," (Example: ",Object(i.b)("inlineCode",{parentName:"li"},"AOIPUFY7ETYAHBCYT765"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"}),"Secret key")," (Example: ",Object(i.b)("inlineCode",{parentName:"li"},"TY76eI3no3cdaWghr5tBkzPOP090bcD9c0lqpoL5"),")")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"These instructions have been tested on Ubuntu LTS.")),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Log in to your VM prior to starting these steps."),Object(i.b)("h3",{id:"setup-fusion"},"Setup Fusion"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Clone the Fusion docker repository:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"git clone https://github.com/WANdisco/fusion-docker-compose.git"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change to the repository directory:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cd fusion-docker-compose"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run the setup script:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"./setup-env.sh"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Choose the ",Object(i.b)("inlineCode",{parentName:"p"},"HDP Sandbox to S3")," option when prompted.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You have now completed the setup, to create and start your containers run:"),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(i.b)("p",{parentName:"li"},"Docker will now download all required images and create the containers."))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("h3",{id:"check-hdp-services-are-started"},"Check HDP services are started"),Object(i.b)("p",null,"The HDP Sandbox services can take up to 5-10 minutes to start. To check that the HDFS service is started:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to Ambari via a web browser."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"http://<docker_IP_address>:8080")),Object(i.b)("p",{parentName:"li"},"Username: ",Object(i.b)("inlineCode",{parentName:"p"},"admin"),"\nPassword: ",Object(i.b)("inlineCode",{parentName:"p"},"admin"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the ",Object(i.b)("strong",{parentName:"p"},"HDFS")," service.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Wait until all the HDFS components are showing as ",Object(i.b)("strong",{parentName:"p"},"Started"),"."))),Object(i.b)("h3",{id:"configure-the-s3-storage"},"Configure the S3 storage"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to Fusion via a web browser."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"http://<docker_IP_address>:8081")),Object(i.b)("p",{parentName:"li"},"Enter your email address and choose a password you will remember.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on the ",Object(i.b)("strong",{parentName:"p"},"Settings")," cog for the ",Object(i.b)("strong",{parentName:"p"},"s3")," storage, and fill in the details for your AWS S3 bucket. See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#info-you-will-require"}),"Info you will require")," section for reference.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Apply Configuration")," and wait for this to complete."))),Object(i.b)("h2",{id:"replication"},"Replication"),Object(i.b)("p",null,"Follow the steps below to demonstrate live replication of HCFS data from the HDP Sandbox to your AWS S3 bucket."),Object(i.b)("h3",{id:"create-replication-rule"},"Create replication rule"),Object(i.b)("p",null,"On the dashboard, create a ",Object(i.b)("strong",{parentName:"p"},"HCFS")," rule with the following parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Rule Name = ",Object(i.b)("inlineCode",{parentName:"li"},"replicate")),Object(i.b)("li",{parentName:"ul"},"Path for all storages = ",Object(i.b)("inlineCode",{parentName:"li"},"/testdir")),Object(i.b)("li",{parentName:"ul"},"Default exclusions"),Object(i.b)("li",{parentName:"ul"},"Preserve HCFS Block Size = ",Object(i.b)("em",{parentName:"li"},"False"))),Object(i.b)("h3",{id:"test-hcfs-replication"},"Test HCFS replication"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to ",Object(i.b)("strong",{parentName:"p"},"Hue")," via a web browser."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"http://<docker_IP_address>:8000")),Object(i.b)("p",{parentName:"li"},"Username: ",Object(i.b)("inlineCode",{parentName:"p"},"hdfs"),"\nPassword: ",Object(i.b)("inlineCode",{parentName:"p"},"hdfs"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("strong",{parentName:"p"},"Menu")," -> ",Object(i.b)("strong",{parentName:"p"},"Files"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Move to ",Object(i.b)("inlineCode",{parentName:"p"},"/testdir")," path and ",Object(i.b)("strong",{parentName:"p"},"Upload")," any file from your host machine.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Check that the file you uploaded is now located in your ",Object(i.b)("inlineCode",{parentName:"p"},"/testdir")," directory in your AWS S3 bucket."))),Object(i.b)("h4",{id:"test-large-data-sets-optional"},"Test large data sets (optional)"),Object(i.b)("p",null,"If you want to replicate larger amounts of data, see our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/testing/test_hdp_sandbox"}),"HDP Sandbox testing")," guide."),Object(i.b)("h4",{id:"test-large-data-sets-optional-1"},"Test large data sets (optional)"),Object(i.b)("p",null,"If you want to replicate larger amounts of data, see our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/testing/test_hdp_sandbox"}),"HDP Sandbox testing")," guide."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"You have now set up live replication from your HDP Sandbox to your AWS S3 bucket. Contact ",Object(i.b)("a",Object(n.a)({parentName:"em"},{href:"https://wandisco.com/contact"}),"WANdisco")," for further information about Fusion and what it can offer you.")),Object(i.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"See our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/troubleshooting/general_troubleshooting"}),"Troubleshooting")," guide for help.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/operation/hdp_sandbox_fusion_stop_start"}),"shutdown and start up")," guide for when you wish to safely shutdown or start back up the environment."))))}s.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,c(c({ref:t},b),{},{components:a})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);