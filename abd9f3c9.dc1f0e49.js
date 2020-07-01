(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{207:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(9),o=(a(0),a(250)),i={id:"adlsg1-adlsg2",title:"ADLS Gen1 to ADLS Gen2",sidebar_label:"ADLS Gen1 to ADLS Gen2"},c={id:"quickstarts/installation/adlsg1-adlsg2",isDocsHomePage:!1,title:"ADLS Gen1 to ADLS Gen2",description:"Use this quickstart if you want to configure Fusion to replicate from ADLS Gen1 to ADLS Gen2 storage.",source:"@site/../docs/quickstarts/installation/adlsg1-adlsg2.md",permalink:"/wandisco-documentation/docs/quickstarts/installation/adlsg1-adlsg2",sidebar_label:"ADLS Gen1 to ADLS Gen2",sidebar:"quickstarts",previous:{title:"Introduction to Quickstarts",permalink:"/wandisco-documentation/docs/quickstarts/installation/quickstart-config"},next:{title:"Cloudera (CDH) Sandbox to ADLS Gen2 with LiveMigrator",permalink:"/wandisco-documentation/docs/quickstarts/installation/cdh_sandbox-adlsg2_lm"}},l=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Info you will require",id:"info-you-will-require",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Setup Fusion",id:"setup-fusion",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Configure the ADLS Gen1 storage",id:"configure-the-adls-gen1-storage",children:[]},{value:"Configure the ADLS Gen2 storage",id:"configure-the-adls-gen2-storage",children:[]}]},{value:"Migration",id:"migration",children:[{value:"Get sample data",id:"get-sample-data",children:[]},{value:"Create replication rule",id:"create-replication-rule",children:[]},{value:"Migrate your data",id:"migrate-your-data",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],b={rightToc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use this quickstart if you want to configure Fusion to replicate from ADLS Gen1 to ADLS Gen2 storage."),Object(o.b)("p",null,"What this guide will cover:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Installing WANdisco Fusion using the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/compose/"}),"docker-compose")," tool."),Object(o.b)("li",{parentName:"ul"},"Integrating WANdisco Fusion with ADLS Gen1 and ADLS Gen2 storage.")),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"For info on how to create a suitable VM with all services installed, see our ",Object(o.b)("a",Object(r.a)({parentName:"th"},{href:"/wandisco-documentation/docs/quickstarts/preparation/azure_vm_creation"}),"Azure VM creation")," guide. See our ",Object(o.b)("a",Object(r.a)({parentName:"th"},{href:"/wandisco-documentation/docs/quickstarts/preparation/vm_prep"}),"VM Preparation")," guide for how to install the services only."))),Object(o.b)("tbody",{parentName:"table"})),Object(o.b)("p",null,"To complete this install, you will need:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"ADLS Gen1 storage account.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"ADLS Gen2 storage account with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-namespace"}),"hierarchical namespace")," enabled."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You will also need a container created inside this account."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Azure Virtual Machine (VM)."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Minimum size recommendation = ",Object(o.b)("strong",{parentName:"li"},"16 vcpus, 32 GiB memory")," (e.g. ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/fsv2-series?toc=/azure/virtual-machines/linux/toc.json&bc=/azure/virtual-machines/linux/breadcrumb/toc.json"}),"Standard F16s v2"),")."),Object(o.b)("li",{parentName:"ul"},"A minimum of 24GB available storage for the ",Object(o.b)("inlineCode",{parentName:"li"},"/var/lib/docker")," directory.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If creating your VM through the Azure portal (and not via our ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/wandisco-documentation/docs/quickstarts/preparation/azure_vm_creation"}),"guide"),"), you may have insufficient disk space by default. See the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/expand-os-disk"}),"Microsoft docs")," for further info."))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The following services must be installed on the VM:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"Git")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/install/"}),"Docker")," (v19.03.5 or higher)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/compose/install/#install-compose"}),"Docker Compose for Linux")," (v1.25.0 or higher)")))),Object(o.b)("h3",{id:"info-you-will-require"},"Info you will require"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"ADLS Gen1 storage account details:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-get-started-portal#create-a-data-lake-storage-gen1-account"}),"Hostname / Endpoint")," (Example: ",Object(o.b)("inlineCode",{parentName:"li"},"<account-name>.azuredatalakestore.net"),")",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The following ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/cli/azure/dls/account?view=azure-cli-latest#az-dls-account-list"}),"Azure CLI")," command will get a list of Data Lake Store accounts and endpoints:\n",Object(o.b)("inlineCode",{parentName:"li"},"az dls account list --output table")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-get-started-portal#createfolder"}),"Home Mount Point / Directory")," (Example: ",Object(o.b)("inlineCode",{parentName:"li"},"/")," or ",Object(o.b)("inlineCode",{parentName:"li"},"/path/to/mountpoint"),")",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Fusion will be able to read and write to everything contained within the Mount Point."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#get-values-for-signing-in"}),"Client ID / Application ID")," (Example: ",Object(o.b)("inlineCode",{parentName:"li"},"a73t6742-2e93-45ty-bd6d-4a8art6578ip"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/azuread-dev/v1-oauth2-on-behalf-of-flow#service-to-service-access-token-request"}),"Refresh URL")," (Example: ",Object(o.b)("inlineCode",{parentName:"li"},"https://login.microsoftonline.com/<tenant-id>/oauth2/token"),")",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"<tenant-id>")," is a value given to the service principal during creation, see the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#get-values-for-signing-in"}),"Microsoft docs")," for how to retrieve this."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#create-an-azure-active-directory-application"}),"Handshake User / Service principal name")," (Example: ",Object(o.b)("inlineCode",{parentName:"li"},"fusion-app"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal#create-a-new-application-secret"}),"ADL credential / Application secret")," (Example: ",Object(o.b)("inlineCode",{parentName:"li"},"8A767YUIa900IuaDEF786DTY67t-u=:]"),")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"ADLS Gen2 storage account details:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-create?tabs=azure-portal#create-a-storage-account"}),"Account name")," (Example: ",Object(o.b)("inlineCode",{parentName:"li"},"adlsg2storage"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal#create-a-container"}),"Container name")," (Example: ",Object(o.b)("inlineCode",{parentName:"li"},"fusionreplication"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage#view-access-keys-and-connection-string"}),"Access key")," (Example: ",Object(o.b)("inlineCode",{parentName:"li"},"eTFdESnXOuG2qoUrqlDyCL+e6456789opasweghtfFMKAHjJg5JkCG8t1h2U1BzXvBwtYfoj5nZaDF87UK09po=="),")")))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Log in to your VM prior to starting these steps."),Object(o.b)("h3",{id:"setup-fusion"},"Setup Fusion"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the Fusion docker repository:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"git clone https://github.com/WANdisco/fusion-docker-compose.git"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Change to the repository directory:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"cd fusion-docker-compose"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the setup script:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"./setup-env.sh"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Choose the ",Object(o.b)("inlineCode",{parentName:"p"},"ADLS Gen1 to Gen2")," option when prompted.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You have now completed the setup. To create and start your containers run:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(o.b)("p",{parentName:"li"},"Docker will now download all required images and create the containers."))),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("h3",{id:"configure-the-adls-gen1-storage"},"Configure the ADLS Gen1 storage"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log in to Fusion via a web browser."),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"http://<docker_IP_address>:8081")),Object(o.b)("p",{parentName:"li"},"Enter your email address and choose a password you will remember.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on the ",Object(o.b)("strong",{parentName:"p"},"Settings")," cog for the ",Object(o.b)("strong",{parentName:"p"},"ADLS GEN1")," storage, and select the ",Object(o.b)("strong",{parentName:"p"},"ADLS Gen1")," storage type.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fill in the details for your ADLS Gen1 storage account. See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#info-you-will-require"}),"Info you will require")," section for reference.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Apply Configuration")," and wait for this to complete."))),Object(o.b)("h3",{id:"configure-the-adls-gen2-storage"},"Configure the ADLS Gen2 storage"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on the ",Object(o.b)("strong",{parentName:"p"},"Settings")," cog for the ",Object(o.b)("strong",{parentName:"p"},"ADLS GEN2")," storage, and select the ",Object(o.b)("strong",{parentName:"p"},"ADLS Gen2")," storage type.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fill in the details for your ADLS Gen2 storage account. See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#info-you-will-require"}),"Info you will require")," section for reference.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check the ",Object(o.b)("strong",{parentName:"p"},"Use Secure Protocol")," box.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Apply Configuration")," and wait for this to complete."))),Object(o.b)("h2",{id:"migration"},"Migration"),Object(o.b)("p",null,"Follow the steps below to demonstrate the migration of data from your ADLS Gen1 to Gen2 storage."),Object(o.b)("h3",{id:"get-sample-data"},"Get sample data"),Object(o.b)("p",null,"Upload sample data to your ADLS Gen1 storage account, see the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/data-lake-store/data-lake-store-get-started-portal#uploaddata"}),"Microsoft docs")," for guidance."),Object(o.b)("p",null,"You can get the sample data from the link below:"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/pivotalsoftware/pivotal-samples/raw/master/sample-data/customer_addresses_dim.tsv.gz"}),"customer_addresses_dim.tsv.gz")),Object(o.b)("p",null,"Place it within your ",Object(o.b)("strong",{parentName:"p"},"Home Mount Point")," (see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#info-you-will-require"}),"info you will require")," for reference)."),Object(o.b)("h3",{id:"create-replication-rule"},"Create replication rule"),Object(o.b)("p",null,"On the dashboard, create a ",Object(o.b)("strong",{parentName:"p"},"HCFS")," rule with the following parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Rule Name = ",Object(o.b)("inlineCode",{parentName:"li"},"migration")),Object(o.b)("li",{parentName:"ul"},"Path for all storages = ",Object(o.b)("inlineCode",{parentName:"li"},"/")),Object(o.b)("li",{parentName:"ul"},"Default exclusions"),Object(o.b)("li",{parentName:"ul"},"Preserve HCFS Block Size = ",Object(o.b)("em",{parentName:"li"},"False"))),Object(o.b)("h3",{id:"migrate-your-data"},"Migrate your data"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the dashboard, view the ",Object(o.b)("inlineCode",{parentName:"p"},"migration")," rule.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start your migration with the following settings:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Source Storage = ",Object(o.b)("strong",{parentName:"li"},"adls1")),Object(o.b)("li",{parentName:"ul"},"Target Storage = ",Object(o.b)("strong",{parentName:"li"},"adls2")),Object(o.b)("li",{parentName:"ul"},"Overwrite Settings = ",Object(o.b)("strong",{parentName:"li"},"Skip")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Wait until the migration is complete, and check the contents of your ADLS Gen2 container."),Object(o.b)("p",{parentName:"li"},"A new ~50MB file will exist inside (",Object(o.b)("inlineCode",{parentName:"p"},"customer_addresses_dim.tsv.gz"),")."))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"You have now successfully migrated data from your ADLS Gen1 to your ADLS Gen2 storage using LiveMigrator.")),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"See our ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/wandisco-documentation/docs/quickstarts/troubleshooting/general_troubleshooting"}),"Troubleshooting")," guide for help.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Contact ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://wandisco.com/contact"}),"WANdisco")," for further information about Fusion and what it can offer you.")))}s.isMDXComponent=!0},250:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return a?n.a.createElement(d,c(c({ref:t},b),{},{components:a})):n.a.createElement(d,c({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);