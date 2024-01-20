"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4827],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4569:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"azure",title:"Azure"},c=void 0,p={unversionedId:"configuration/providers/azure",id:"configuration/providers/azure",title:"Azure",description:"1. Add an application//portal.azure.com, choose Azure Active Directory, select",source:"@site/docs/configuration/providers/azure.md",sourceDirName:"configuration/providers",slug:"/configuration/providers/azure",permalink:"/oauth2-proxy/docs/next/configuration/providers/azure",draft:!1,editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/docs/configuration/providers/azure.md",tags:[],version:"current",frontMatter:{id:"azure",title:"Azure"},sidebar:"docs",previous:{title:"Google (default)",permalink:"/oauth2-proxy/docs/next/configuration/providers/google"},next:{title:"ADFS",permalink:"/oauth2-proxy/docs/next/configuration/providers/adfs"}},l={},u=[],m={toc:u},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add an application: go to ",(0,i.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"https://portal.azure.com"),", choose ",(0,i.kt)("strong",{parentName:"li"},"Azure Active Directory"),", select\n",(0,i.kt)("strong",{parentName:"li"},"App registrations")," and then click on ",(0,i.kt)("strong",{parentName:"li"},"New registration"),"."),(0,i.kt)("li",{parentName:"ol"},"Pick a name, check the supported account type(single-tenant, multi-tenant, etc). In the ",(0,i.kt)("strong",{parentName:"li"},"Redirect URI")," section create a new\n",(0,i.kt)("strong",{parentName:"li"},"Web")," platform entry for each app that you want to protect by the oauth2 proxy(e.g.\n",(0,i.kt)("a",{parentName:"li",href:"https://internal.yourcompanycom/oauth2/callback"},"https://internal.yourcompanycom/oauth2/callback"),"). Click ",(0,i.kt)("strong",{parentName:"li"},"Register"),"."),(0,i.kt)("li",{parentName:"ol"},"Next we need to add group read permissions for the app registration, on the ",(0,i.kt)("strong",{parentName:"li"},"API Permissions")," page of the app, click on\n",(0,i.kt)("strong",{parentName:"li"},"Add a permission"),", select ",(0,i.kt)("strong",{parentName:"li"},"Microsoft Graph"),", then select ",(0,i.kt)("strong",{parentName:"li"},"Application permissions"),", then click on ",(0,i.kt)("strong",{parentName:"li"},"Group")," and select\n",(0,i.kt)("strong",{parentName:"li"},"Group.Read.All"),". Hit ",(0,i.kt)("strong",{parentName:"li"},"Add permissions")," and then on ",(0,i.kt)("strong",{parentName:"li"},"Grant admin consent")," (you might need an admin to do this).",(0,i.kt)("br",null),'**IMPORTANT**: Even if this permission is listed with **"Admin consent required=No"** the consent might actually be required, due to AAD policies you won\'t be able to see. If you get a **"Need admin approval"** during login, most likely this is what you\'re missing!'),(0,i.kt)("li",{parentName:"ol"},"Next, if you are planning to use v2.0 Azure Auth endpoint, go to the ",(0,i.kt)("strong",{parentName:"li"},"Manifest")," page and set ",(0,i.kt)("inlineCode",{parentName:"li"},'"accessTokenAcceptedVersion": 2'),"\nin the App registration manifest file."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Certificates & secrets")," page of the app, add a new client secret and note down the value after hitting ",(0,i.kt)("strong",{parentName:"li"},"Add"),"."),(0,i.kt)("li",{parentName:"ol"},"Configure the proxy with:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for V1 Azure Auth endpoint (Azure Active Directory Endpoints - ",(0,i.kt)("a",{parentName:"li",href:"https://login.microsoftonline.com/common/oauth2/authorize"},"https://login.microsoftonline.com/common/oauth2/authorize"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   --provider=azure\n   --client-id=<application ID from step 3>\n   --client-secret=<value from step 5>\n   --azure-tenant={tenant-id}\n   --oidc-issuer-url=https://sts.windows.net/{tenant-id}/\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for V2 Azure Auth endpoint (Microsoft Identity Platform Endpoints - ",(0,i.kt)("a",{parentName:"li",href:"https://login.microsoftonline.com/common/oauth2/v2.0/authorize"},"https://login.microsoftonline.com/common/oauth2/v2.0/authorize"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   --provider=azure\n   --client-id=<application ID from step 3>\n   --client-secret=<value from step 5>\n   --azure-tenant={tenant-id}\n   --oidc-issuer-url=https://login.microsoftonline.com/{tenant-id}/v2.0\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Notes")),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When using v2.0 Azure Auth endpoint (",(0,i.kt)("inlineCode",{parentName:"li"},"https://login.microsoftonline.com/{tenant-id}/v2.0"),") as ",(0,i.kt)("inlineCode",{parentName:"li"},"--oidc_issuer_url"),", in conjunction\nwith ",(0,i.kt)("inlineCode",{parentName:"li"},"--resource")," flag, be sure to append ",(0,i.kt)("inlineCode",{parentName:"li"},"/.default")," at the end of the resource name. See\n",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#the-default-scope"},"https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#the-default-scope")," for more details."),(0,i.kt)("li",{parentName:"ul"},"When using the Azure Auth provider with nginx and the cookie session store you may find the cookie is too large and doesn't\nget passed through correctly. Increasing the proxy_buffer_size in nginx or implementing the\n",(0,i.kt)("a",{parentName:"li",href:"/oauth2-proxy/docs/next/configuration/session_storage#redis-storage"},"redis session storage")," should resolve this.")))}f.isMDXComponent=!0}}]);