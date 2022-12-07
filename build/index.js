(()=>{"use strict";var e={420:e=>{e.exports=require("react-latex")}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{r.r(a),r.d(a,{Chatbot:()=>I,createChatBotMessage:()=>i,createClientMessage:()=>u,createCustomMessage:()=>l,default:()=>R,useChatbot:()=>B});const e=require("react");var t=r.n(e);const n=require("react-conditionally-render");var o=r.n(n),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},c=function(e,t){return{message:e,type:t,id:Math.round(Date.now()*Math.random())}},i=function(e,t){return s(s(s({},c(e,"bot")),t),{loading:!0})},l=function(e,t,r){return s(s({},c(e,t)),r)},u=function(e,t){return s(s({},c(e,"user")),t)},m=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(e)return e.apply(void 0,t)};function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},d.apply(this,arguments)}const g=({styles:e={},...r})=>t().createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r),t().createElement("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"}));var f=r(420);const p=function(e){var r=e.message,a=e.customComponents;return t().createElement("div",{className:"react-chatbot-kit-user-chat-message-container"},t().createElement(o(),{condition:!!a.userChatMessage,show:m(a.userChatMessage,{message:r}),elseShow:t().createElement("div",{className:"react-chatbot-kit-user-chat-message"},t().createElement(f,null,r),t().createElement("div",{className:"react-chatbot-kit-user-chat-message-arrow"}))}),t().createElement(o(),{condition:!!a.userAvatar,show:m(a.userAvatar),elseShow:t().createElement("div",{className:"react-chatbot-kit-user-avatar"},t().createElement("div",{className:"react-chatbot-kit-user-avatar-container"},t().createElement(g,{className:"react-chatbot-kit-user-avatar-icon"})))}))},v=function(){return t().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar"},t().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar-container"},t().createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"B")))},h=function(){return t().createElement("div",{className:"chatbot-loader-container"},t().createElement("svg",{id:"dots",width:"50px",height:"21px",viewBox:"0 0 132 58",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t().createElement("g",{stroke:"none",fill:"none"},t().createElement("g",{id:"chatbot-loader",fill:"#fff"},t().createElement("circle",{id:"chatbot-loader-dot1",cx:"25",cy:"30",r:"13"}),t().createElement("circle",{id:"chatbot-loader-dot2",cx:"65",cy:"30",r:"13"}),t().createElement("circle",{id:"chatbot-loader-dot3",cx:"105",cy:"30",r:"13"})))))};var y=function(){return y=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},y.apply(this,arguments)};const b=function(r){var a=r.message,n=r.withAvatar,s=void 0===n||n,c=r.loading,i=r.messages,l=r.customComponents,u=r.setState,d=r.customStyles,g=r.delay,f=r.id,p=(0,e.useState)(!1),b=p[0],E=p[1];(0,e.useEffect)((function(){var e;return function(t,r){var a=750;g&&(a+=g),e=setTimeout((function(){var e=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}([],t,!0).find((function(e){return e.id===f}));e&&(e.loading=!1,e.delay=void 0,r((function(t){var r=t.messages,a=r.findIndex((function(e){return e.id===f}));return r[a]=e,y(y({},t),{messages:r})})))}),a)}(i,u),function(){clearTimeout(e)}}),[g,f]),(0,e.useEffect)((function(){g?setTimeout((function(){return E(!0)}),g):E(!0)}),[g]);var w={backgroundColor:""},S={borderRightColor:""};return d&&(w.backgroundColor=d.backgroundColor,S.borderRightColor=d.backgroundColor),t().createElement(o(),{condition:b,show:t().createElement("div",{className:"react-chatbot-kit-chat-bot-message-container"},t().createElement(o(),{condition:s,show:t().createElement(o(),{condition:!!(null==l?void 0:l.botAvatar),show:m(null==l?void 0:l.botAvatar),elseShow:t().createElement(v,null)})}),t().createElement(o(),{condition:!!(null==l?void 0:l.botChatMessage),show:m(null==l?void 0:l.botChatMessage,{message:a,loader:t().createElement(h,null)}),elseShow:t().createElement("div",{className:"react-chatbot-kit-chat-bot-message",style:w},t().createElement(o(),{condition:c,show:t().createElement(h,null),elseShow:t().createElement("span",null,a)}),t().createElement(o(),{condition:s,show:t().createElement("div",{className:"react-chatbot-kit-chat-bot-message-arrow",style:S})}))}))})};function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},E.apply(this,arguments)}const w=({styles:e={},...r})=>t().createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r),t().createElement("path",{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}));var S=function(){return S=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},S.apply(this,arguments)},P=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))},O=r(420);const M=function(r){var a=r.state,n=r.setState,s=r.widgetRegistry,i=r.messageParser,l=r.parse,u=r.customComponents,m=r.actionProvider,d=r.botName,g=r.customStyles,f=r.headerText,v=r.customMessages,h=r.placeholderText,y=r.validator,E=r.setMessageContainerRef,M=r.disableScrollToBottom,k=r.messageHistory,x=r.actions,C=a.messages,N=(0,e.useRef)(null),j=(0,e.useState)(""),T=j[0],A=j[1],B=(0,e.useState)(!1),H=(B[0],B[1],(0,e.useState)("f(x)=\\log _10 x")),I=(H[0],H[1],t().createElement("div",{style:{display:"flex",justifyContent:"left",alignItems:"left",flexDirection:"column",padding:24}},t().createElement("p",null,"Preview:"),t().createElement("h6",null,t().createElement(O,{displayMode:!0},T)))),R=function(){setTimeout((function(){var e;N.current&&(N.current.scrollTop=null===(e=null==N?void 0:N.current)||void 0===e?void 0:e.scrollHeight)}),50)};(0,e.useEffect)((function(){M||R()})),(0,e.useEffect)((function(){E(N)}),[N.current]);var W=function(){n((function(e){return S(S({},e),{messages:P(P([],e.messages,!0),[c(T,"user")],!1)})})),R(),A("")},_={backgroundColor:""};g&&g.chatButton&&(_.backgroundColor=g.chatButton.backgroundColor);var F="Conversation with "+d;f&&(F=f);var V="Write your message here";return h&&(V=h),t().createElement("div",{className:"react-chatbot-kit-chat-container"},t().createElement("div",{className:"react-chatbot-kit-chat-inner-container"},t().createElement(o(),{condition:!!u.header,show:u.header&&u.header(m),elseShow:t().createElement("div",{className:"react-chatbot-kit-chat-header"},F)}),t().createElement("div",{className:"react-chatbot-kit-chat-message-container",ref:N},t().createElement(o(),{condition:"string"==typeof k&&Boolean(k),show:t().createElement("div",{dangerouslySetInnerHTML:{__html:k}})}),C.map((function(e,r){return"bot"===e.type?t().createElement(t().Fragment,{key:e.id},function(e,r){var c;c=e.withAvatar?e.withAvatar:function(e,t){if(0===t)return!0;var r=e[t-1];return!("bot"===r.type&&!r.widget)}(C,r);var i=S(S({},e),{setState:n,state:a,customComponents:u,widgetRegistry:s,messages:C,actions:x});if(e.widget){var l=s.getWidget(i.widget,S(S({},a),{scrollIntoView:R,payload:e.payload,actions:x}));return t().createElement(t().Fragment,null,t().createElement(b,S({customStyles:g.botMessageBox,withAvatar:c},i,{key:e.id})),t().createElement(o(),{condition:!i.loading,show:l||null}))}return t().createElement(b,S({customStyles:g.botMessageBox,key:e.id,withAvatar:c},i,{customComponents:u,messages:C,setState:n}))}(e,r)):"user"===e.type?t().createElement(t().Fragment,{key:e.id},function(e){var r=s.getWidget(e.widget,S(S({},a),{scrollIntoView:R,payload:e.payload,actions:x}));return t().createElement(t().Fragment,null,t().createElement(p,{message:e.message,key:e.id,customComponents:u}),r||null)}(e)):function(e,t){return!!t[e.type]}(e,v)?t().createElement(t().Fragment,{key:e.id},function(e){var r=v[e.type],o={setState:n,state:a,scrollIntoView:R,actionProvider:m,payload:e.payload,actions:x};if(e.widget){var c=s.getWidget(e.widget,S(S({},a),{scrollIntoView:R,payload:e.payload,actions:x}));return t().createElement(t().Fragment,null,r(o),c||null)}return r(o)}(e)):void 0})),t().createElement("div",{style:{paddingBottom:"15px"}})),t().createElement("div",{className:"react-chatbot-kit-chat-input-container"},I,t().createElement("form",{className:"react-chatbot-kit-chat-input-form",onSubmit:function(e){if(e.preventDefault(),y&&"function"==typeof y){if(y(T)){if(W(),l)return l(T);i.parse(T)}}else{if(W(),l)return l(T);i.parse(T)}}},t().createElement("input",{className:"react-chatbot-kit-chat-input",placeholder:V,value:T,onChange:function(e){return A(e.target.value)}}),t().createElement("button",{className:"react-chatbot-kit-chat-btn-send",style:_},t().createElement(w,{className:"react-chatbot-kit-chat-btn-send-icon"}))))))},k=function(e){var r=e.message;return t().createElement("div",{className:"react-chatbot-kit-error"},t().createElement("h1",{className:"react-chatbot-kit-error-header"},"Ooops. Something is missing."),t().createElement("div",{className:"react-chatbot-kit-error-container"},t().createElement(b,{message:r,withAvatar:!0,loading:!1,id:1,customStyles:{backgroundColor:""},messages:[]})),t().createElement("a",{href:"https://fredrikoseberg.github.io/react-chatbot-kit-docs/",rel:"noopener norefferer",target:"_blank",className:"react-chatbot-kit-error-docs"},"View the docs"))};var x=function(e){return e.widgets?e.widgets:[]},C=function(e){try{new e}catch(e){return!1}return!0},N=function(){return N=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},N.apply(this,arguments)};const j=function(e,t){var r=this;this.addWidget=function(e,t){var a=e.widgetName,n=e.widgetFunc,o=e.mapStateToProps,s=e.props;r[a]={widget:n,props:s,mapStateToProps:o,parentProps:N({},t)}},this.getWidget=function(e,t){var a=r[e];if(a){var n,o=N(N(N(N({scrollIntoView:t.scrollIntoView},a.parentProps),"object"==typeof(n=a.props)?n:{}),r.mapStateToProps(a.mapStateToProps,t)),{setState:r.setState,actionProvider:r.actionProvider||t.actions,actions:t.actions,state:t,payload:t.payload});return a.widget(o)||null}},this.mapStateToProps=function(e,t){if(e)return e.reduce((function(e,r){return e[r]=t[r],e}),{})},this.setState=e,this.actionProvider=t};var T=function(){return T=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},T.apply(this,arguments)},A=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const B=function(r){var a=r.config,n=r.actionProvider,o=r.messageParser,s=r.messageHistory,c=r.runInitialMessagesWithHistory,m=r.saveMessages,d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(r,["config","actionProvider","messageParser","messageHistory","runInitialMessagesWithHistory","saveMessages"]),g="",f="";if(!a||!n||!o)return{configurationError:g="I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"};var p=function(e,t){var r=[];return e.initialMessages||r.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."),r}(a);if(p.length)return{invalidPropsError:f=p.reduce((function(e,t){return e+t}),"")};var v=(0,e.useState)({}),h=v[0],y=v[1],b=function(e){return e.state?e.state:{}}(a);s&&Array.isArray(s)?a.initialMessages=A([],s,!0):"string"==typeof s&&Boolean(s)&&(c||(a.initialMessages=[]));var E,w,S,P=t().useState(T({messages:A([],a.initialMessages,!0)},b)),O=P[0],M=P[1],k=t().useRef(O.messages),N=t().useRef();(0,e.useEffect)((function(){k.current=O.messages})),(0,e.useEffect)((function(){s&&Array.isArray(s)&&M((function(e){return T(T({},e),{messages:s})}))}),[]),(0,e.useEffect)((function(){return function(){var e;if(m&&"function"==typeof m){var t=null===(e=null==h?void 0:h.current)||void 0===e?void 0:e.innerHTML.toString();if(!h.current)return;m(k.current,t)}}}),[h.current]),(0,e.useEffect)((function(){N.current=O}),[O]);var B=n,H=o;return C(B)&&C(H)?(E=new n(i,M,u,N.current,l,d),w=new j(M,E),S=new o(E,N.current),x(a).forEach((function(e){return null==w?void 0:w.addWidget(e,d)}))):(E=n,S=o,w=new j(M,null),x(a).forEach((function(e){return null==w?void 0:w.addWidget(e,d)}))),{widgetRegistry:w,actionProv:E,messagePars:S,configurationError:g,invalidPropsError:f,state:O,setState:M,setMessageContainerRef:y,ActionProvider:B,MessageParser:H}};var H=function(){return H=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},H.apply(this,arguments)};const I=function(e){var r=e.actionProvider,a=e.messageParser,n=e.config,o=e.headerText,s=e.placeholderText,c=e.saveMessages,l=e.messageHistory,u=e.runInitialMessagesWithHistory,m=e.disableScrollToBottom,d=e.validator,g=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["actionProvider","messageParser","config","headerText","placeholderText","saveMessages","messageHistory","runInitialMessagesWithHistory","disableScrollToBottom","validator"]),f=B(H({config:n,actionProvider:r,messageParser:a,messageHistory:l,saveMessages:c,runInitialMessagesWithHistory:u},g)),p=f.configurationError,v=f.invalidPropsError,h=f.ActionProvider,y=f.MessageParser,b=f.widgetRegistry,E=f.actionProv,w=f.messagePars,S=f.state,P=f.setState,O=f.setMessageContainerRef;if(p)return t().createElement(k,{message:p});if(v.length)return t().createElement(k,{message:v});var x=function(e){return e.customStyles?e.customStyles:{}}(n),N=function(e){return e.customComponents?e.customComponents:{}}(n),j=function(e){return e.botName?e.botName:"Bot"}(n),T=function(e){return e.customMessages?e.customMessages:{}}(n);return C(h)&&C(y)?t().createElement(M,{state:S,setState:P,widgetRegistry:b,actionProvider:E,messageParser:w,customMessages:T,customComponents:H({},N),botName:j,customStyles:H({},x),headerText:o,placeholderText:s,setMessageContainerRef:O,validator:d,messageHistory:l,disableScrollToBottom:m}):t().createElement(h,{setState:P,createChatBotMessage:i},t().createElement(y,null,t().createElement(M,{state:S,setState:P,widgetRegistry:b,actionProvider:h,messageParser:y,customMessages:T,customComponents:H({},N),botName:j,customStyles:H({},x),headerText:o,placeholderText:s,setMessageContainerRef:O,validator:d,messageHistory:l,disableScrollToBottom:m})))},R=I})(),module.exports=a})();