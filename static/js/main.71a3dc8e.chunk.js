(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{26:function(e,t,n){e.exports=n(39)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),i=n.n(r),c=n(5),l=n(10);n(31),n(32),n(33);function s(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"jumbotron col-10 offset-1"},o.a.createElement("h1",null,"Quiz"),o.a.createElement("p",null,"Select the book written by the author shown")))}function u(e){var t=e.title,n=e.onClick;return o.a.createElement("div",{className:"answer",onClick:function(){n(t)}},o.a.createElement("h4",null,t))}function m(e){var t=e.author,n=e.books,a=e.highlight,r=e.onAnswerSelected;return o.a.createElement("div",{className:"row turn",style:{backgroundColor:function(e){return{none:"",correct:"green",wrong:"red"}[e]}(a)}},o.a.createElement("div",{className:"col-4 offset-1"},o.a.createElement("img",{src:t.imageUrl,className:"questionimage",alt:"Author"})),o.a.createElement("div",{className:"col-6"},n.map((function(e){return o.a.createElement(u,{title:e,key:e,onClick:r})}))))}function d(e){var t=e.show,n=e.onContinue;return o.a.createElement("div",{className:"row continue"},t?o.a.createElement("div",{className:"col-11"},o.a.createElement("button",{className:"btn btn-primary btn-lg float-right",onClick:n},"Continue")):null)}function h(){return o.a.createElement("div",{id:"footer",className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("p",{className:"text-muted credit"},"by Nisan Sabag")))}var g=function(e){var t=e.turnData,n=e.highlight,a=e.onAnswerSelected,r=e.onContinue;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(s,null),o.a.createElement(m,Object.assign({highlight:n},t,{onAnswerSelected:a})),o.a.createElement(d,{show:"correct"===n,onContinue:r}),o.a.createElement("p",null,o.a.createElement(l.b,{to:"/add"},"Add a question")),o.a.createElement(h,null))},p=n(21),v=n(22),b=n(23),f=n(8),E=n(25),k=n(24),w=(n(38),function(e){Object(E.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).state={name:"",imageUrl:"",books:[],bookTemp:""},a.onFieldChange=a.onFieldChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.handleAddBook=a.handleAddBook.bind(Object(f.a)(a)),a}return Object(b.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onAddQuestion(this.state)}},{key:"onFieldChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleAddBook",value:function(e){this.setState({books:this.state.books.concat([this.state.bookTemp]),bookTemp:""})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"AddQuestionForm__input"},o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.onFieldChange})),o.a.createElement("div",{className:"AddQuestionForm__input"},o.a.createElement("label",{htmlFor:"imageUrl"},"Image URL"),o.a.createElement("input",{type:"text",name:"imageUrl",value:this.state.imageUrl,onChange:this.onFieldChange})),o.a.createElement("div",{className:"AddQuestionForm__input"},o.a.createElement("label",{htmlFor:"bookTemp"},"Books"),this.state.books.map((function(e){return o.a.createElement("p",{key:e},e)})),o.a.createElement("input",{type:"text",name:"bookTemp",value:this.state.bookTemp,onChange:this.onFieldChange}),o.a.createElement("input",{type:"button",value:"+",onClick:this.handleAddBook})),o.a.createElement("input",{type:"submit",value:"Add"}))}}]),n}(o.a.Component));var S=function(e){e.match;var t=e.onAddQuestion;return o.a.createElement("div",{className:"AddQuestionForm"},o.a.createElement("h1",null,"Add a Question"),o.a.createElement(w,{onAddQuestion:t}))},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=n(14),y=[{name:"Kyle Simpson",imageUrl:"images/authors/kyle-simpson.jpeg",imageSource:"",books:["You Don\u2019t Know JS"]},{name:"Douglas Crockford",imageUrl:"images/authors/douglas-crockford.jpg",imageSource:"",books:["How Javascript Works","Javascript: The Good Parts"]},{name:"Marijn Haverbeke",imageUrl:"images/authors/marijn-haverbeke.jpg",imageSource:"",books:["Eloquent JavaScript"]},{name:" Eric Elliott",imageUrl:"images/authors/eric-elliott.jpeg",imageSource:"",books:["Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries"]},{name:"David Flanagan",imageUrl:"images/authors/david-flanagan.jpg",imageSource:"",books:["JavaScript: The Definitive Guide"]},{name:"Reginald Braithwaite",imageUrl:"images/authors/reginald-braithwaite.jpg",imageSource:"",books:["JavaScript Allong\xe9: The Six Edition"]}];function N(e){var t=e.reduce((function(e,t,n){return e.concat(t.books)}),[]),n=Object(j.b)(t).slice(0,4),a=Object(j.a)(n);return{books:n,author:e.find((function(e){return e.books.some((function(e){return e===a}))}))}}function O(){return{turnData:N(y),highlight:""}}var T=O();function U(e){var t=T.turnData.author.books.some((function(t){return t===e}));T.highlight=t?"correct":"wrong",W()}function F(){return o.a.createElement(g,Object.assign({},T,{onAnswerSelected:U,onContinue:function(){T=O(),W()}}))}var _=Object(c.e)((function(e){var t=e.history;return o.a.createElement(S,{onAddQuestion:function(e){y.push(e),t.push("/")}})}));function W(){i.a.render(o.a.createElement(l.a,{basename:"/react-quiz-app"},o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{exact:!0,path:"/react-quiz-app",component:F}),o.a.createElement(c.a,{path:"/add",component:_}))),document.getElementById("root"))}W(),function(e){if(console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/react-quiz-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),"serviceWorker"in navigator){if(new URL("/react-quiz-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-quiz-app","/service-worker.js");A?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.71a3dc8e.chunk.js.map