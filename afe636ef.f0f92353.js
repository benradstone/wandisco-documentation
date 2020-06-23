(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),i=(n(0),n(250)),o={id:"kerberos_cdh",title:"Kerberos (CDH) integration with Fusion",sidebar_label:"Kerberos (CDH) integration with Fusion"},p={id:"quickstarts/kerberos_cdh",isDocsHomePage:!1,title:"Kerberos (CDH) integration with Fusion",description:"THIS GUIDE IS WORK IN PROGRESS, PLEASE DO NOT FOLLOW ANYTHING HERE UNTIL THIS WARNING IS REMOVED",source:"@site/../docs/quickstarts/kerberos_cdh.md",permalink:"/docs/quickstarts/kerberos_cdh",sidebar_label:"Kerberos (CDH) integration with Fusion"},c=[{value:"Considerations",id:"considerations",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Guidance",id:"guidance",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"THIS GUIDE IS WORK IN PROGRESS, PLEASE DO NOT FOLLOW ANYTHING HERE UNTIL THIS WARNING IS REMOVED")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"This guide should only be followed if you have already completed the ",Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"https://wandisco.github.io/wandisco-documentation/docs/quickstarts/installation/cdh-adlsg2"}),"Cloudera (CDH) to ADLS Gen2")," quickstart.")),Object(i.b)("h2",{id:"considerations"},"Considerations"),Object(i.b)("p",null,"There are a number considerations when enabling Fusion to function with a kerberized cluster."),Object(i.b)("p",null,"An existing keytab and principal that the cluster provides can be used with Fusion (e.g. the ",Object(i.b)("inlineCode",{parentName:"p"},"hdfs")," keytab). The cluster is already likely to be configured to work with an existing keytab. As such, a restart of cluster services should not be required for Fusion to use an existing keytab."),Object(i.b)("p",null,"Alternatively, you can create a new principal/keytab for use with Fusion but additional configuration will be needed. Please consider your own security requirements before deciding on the options available."),Object(i.b)("p",null,"If creating a new principal/keytab for Fusion, the following configuration is required. If selecting an existing keytab, ensure that the following configuration requirements are already met."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The Kerberos principal to be used with Fusion can be headless, or mapped to a hostname."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example of a headless principal:")," ",Object(i.b)("inlineCode",{parentName:"p"},"fusion@REALM.COM")),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example of a service/host principal:")," ",Object(i.b)("inlineCode",{parentName:"p"},"fusion/hostname@REALM.COM")),Object(i.b)("p",{parentName:"li"},"Please note that if a ",Object(i.b)("em",{parentName:"p"},"service/host principal")," is to be used, the hostname must match that of the Fusion docker host.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"An appropriate ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://web.mit.edu/kerberos/krb5-latest/doc/admin/conf_files/krb5_conf.html#realms"}),"auth_to_local")," rule must exist for the principal to be used with Fusion. This must align to a superuser (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"hdfs"),")."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example to map fusion principal to local superuser")),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Headless format"),": ",Object(i.b)("inlineCode",{parentName:"p"},"RULE:[1:$1@$0](fusion@REALM.COM)s/.*/hdfs/")),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Service/host format"),": ",Object(i.b)("inlineCode",{parentName:"p"},"RULE:[2:$1@$0](fusion@WANDISCO.HADOOP)s/.*/hdfs/")),Object(i.b)("p",{parentName:"li"},"Alternatively, you can map the principal to its shortname, and then add this user to the HDFS superuser group (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"hdfs"),")."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example to map fusion principal to shortname")),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Headless format"),": ",Object(i.b)("inlineCode",{parentName:"p"},"RULE:[1:$1@$0](fusion@REALM.COM)s/.*/fusion/")),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Service/host format"),": ",Object(i.b)("inlineCode",{parentName:"p"},"RULE:[2:$1@$0](fusion@WANDISCO.HADOOP)s/.*/fusion/")),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example to add fusion user to HDFS superuser group")),Object(i.b)("p",{parentName:"li"},"This task must be performed on the NameNode host(s) for the cluster (i.e. both active and standby if NameNode HA is enabled)."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"useradd fusion")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"usermod -G hdfs fusion"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Appropriate proxyuser rules must exist in the HDFS configuration (",Object(i.b)("inlineCode",{parentName:"p"},"core-site.xml"),") for the Fusion user. In the example below, the Fusion user is ",Object(i.b)("inlineCode",{parentName:"p"},"fusion"),":"),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"hadooop.proxyuser.fusion.groups=*")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"hadooop.proxyuser.fusion.hosts=*")),Object(i.b)("p",{parentName:"li"},"If they do not exist, additional proxyuser rules can be added in the ",Object(i.b)("em",{parentName:"p"},"Cluster-wide Advanced Configuration Snippet (Safety Valve) for core-site.xml")," section."))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Kerberos keytab and principal to be used with Fusion has already been created."),Object(i.b)("li",{parentName:"ul"},"Root access to the Kerberos KDC or a cluster node to retrieve the keytab and ",Object(i.b)("inlineCode",{parentName:"li"},"krb5.conf")," files.")),Object(i.b)("h2",{id:"guidance"},"Guidance"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Transfer the keytab and ",Object(i.b)("inlineCode",{parentName:"p"},"krb5.conf")," to the Fusion docker host from the Kerberos KDC or a cluster node that contains the required files. This can be done by copying the files to your local machine, and then copying them to the Fusion docker host."),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Example for local transfer")),Object(i.b)("p",{parentName:"li"},"Open a terminal session and download the required files from the KDC/node via SCP to your local machine."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"scp $HOSTNAME:/etc/krb5.conf .")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"scp $HOSTNAME:/etc/security/keytabs/${fusion.keytab} .")),Object(i.b)("p",{parentName:"li"},"Once obtained locally, transfer the files to the Fusion docker host."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"scp krb5.conf $DOCKER_HOST:~")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"scp ${fusion.keytab} $DOCKER_HOST:~"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Obtain the HDFS client config from the cluster manager."),Object(i.b)("p",{parentName:"li"},"Cloudera Manager UI -> HDFS -> Actions -> Download Client Configuration")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Transfer the Client config to the Fusion docker host."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"scp hdfs1-clientconfig.zip $DOCKER_HOST:~"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log into the Fusion docker host, and copy the keytab and ",Object(i.b)("inlineCode",{parentName:"p"},"krb5.conf")," into the specified staging directories within the git repository."),Object(i.b)("p",{parentName:"li"},"Ensure the keytab is renamed to ",Object(i.b)("inlineCode",{parentName:"p"},"fusion.keytab")," inside the ",Object(i.b)("inlineCode",{parentName:"p"},"fusion-docker-compose/keytabs")," directory."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cp ${fusion.keytab} /path/to/fusion-docker-compose/keytabs/fusion.keytab")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cp krb5.conf /path/to/fusion-docker-compose/config_files/"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Decompress the HDFS Client config and edit the ",Object(i.b)("inlineCode",{parentName:"p"},"core-site.xml")," file to include additional properties."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"unzip hdfs1-clientconfig.zip")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cd hadoop-conf")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"vi core-site.xml")),Object(i.b)("p",{parentName:"li"},"First, add the following properties as they are displayed below:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"  <property>\n    <name>fusion.client.ssl.enabled</name>\n    <value>false</value>\n  </property>\n  <property>\n    <name>fusion.handshakeToken.dir</name>\n    <value>/wandisco/handshake_tokens</value>\n  </property>\n  <property>\n    <name>fusion.http.authentication.enabled</name>\n    <value>false</value>\n  </property>\n  <property>\n    <name>fusion.http.authorization.enabled</name>\n    <value>false</value>\n  </property>\n  <property>\n    <name>fusion.keytab</name>\n    <value>/etc/security/keytabs/fusion.keytab</value>\n  </property>\n  <property>\n    <name>fusion.replicated.dir.exchange</name>\n    <value>/wandisco/exchange_dir</value>\n  </property>\n")),Object(i.b)("p",{parentName:"li"},"Next, add the following properties below but adjust the values (prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"$"),") so that they are correct for your environment:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"  <property>\n    <name>fs.fusion.underlyingFs</name>\n    <value>hdfs://${CLUSTER_NAMESERVICE} or hdfs://${NAMENODE}:${PORT}</value>\n  </property>\n  <property>\n    <name>fusion.principal</name>\n    <value>${FUSION_PRINCIPAL}@${REALM}</value>\n  </property>\n  <property>\n    <name>fusion.server</name>\n    <value>${docker-hostname}:8023</value>\n  </property>\n")),Object(i.b)("p",{parentName:"li"},"Note that the ",Object(i.b)("inlineCode",{parentName:"p"},"fs.fusion.underlyingFs")," value will depend if your cluster has NameNode HA enabled or not."),Object(i.b)("p",{parentName:"li"},"Once complete, save and quit the file.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Transfer the relevant files to one of the docker containers in the CDH zone."),Object(i.b)("p",{parentName:"li"},"You will first need to obtain an Container ID from the CDH zone, this will be a 12 digit hexadecimal string. Note that the ",Object(i.b)("inlineCode",{parentName:"p"},"oneui")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ubuntu")," images cannot be used as they are not zone specific."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"docker ps")," ",Object(i.b)("em",{parentName:"p"},"- obtain ID.")),Object(i.b)("p",{parentName:"li"}," Transfer the files to a persistent storage directory that is shared amongst all containers for the specified zone (i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"/etc/hadoop"),")."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"docker cp core-site.xml $CONTAINER_ID:/etc/hadoop/conf/core-site.xml")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"docker cp hdfs-site.xml $CONTAINER_ID:/etc/hadoop/conf/hdfs-site.xml")),Object(i.b)("p",{parentName:"li"},"As this location is shared amongst all containers in the zone, it is only necessary to transfer these files to one of them.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log into the Fusion UI container for the CDH zone, and edit the ",Object(i.b)("inlineCode",{parentName:"p"},"ui.properties")," file."),Object(i.b)("p",{parentName:"li"},"You will first need to obtain an Container ID from the CDH zone for the Fusion UI, this will be a 12 digit hexadecimal string. The name of the image will appear much like this example - ",Object(i.b)("inlineCode",{parentName:"p"},"fusion-docker-compose_fusion-ui-server-cdh_1"),"."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"docker ps")," ",Object(i.b)("em",{parentName:"p"},"- obtain ID.")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"docker exec -u root -it $CONTAINER_ID /bin/bash")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"vi /opt/wandisco/fusion-ui-server/properties/ui.properties")),Object(i.b)("p",{parentName:"li"},"Add the following properties below, but adjust the values (prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"$"),") so that they are correct for your environment:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"cluster.kerberos.configured=true\nkerberos.enabled=true\nkerberos.config.path=/etc/krb5.conf\nkerberos.principal=${FUSION_PRINCIPAL}@${REALM}\nkerberos.keytab.path=/etc/security/keytabs/fusion.keytab\nkerberos.generated.config.path=/opt/wandisco/fusion-ui-server/lib/kerberos.conf\n")),Object(i.b)("p",{parentName:"li"},"Once complete, save and quit the file.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Restart the container services via docker compose."),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cd /path/to/fusion-docker-compose")),Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"docker-compose restart")))))}s.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=s(n),u=a,d=l["".concat(o,".").concat(u)]||l[u]||m[u]||i;return n?r.a.createElement(d,p(p({ref:t},b),{},{components:n})):r.a.createElement(d,p({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);