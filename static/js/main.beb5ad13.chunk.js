(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{42:function(e,t,n){e.exports=n(75)},47:function(e,t,n){},48:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},50:function(e,t){},51:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=(n(47),n(48),n(49),n(22)),i=n(7),u=n(77),s=n(2),m=n(3),h=n(5),d=n(4),p=(a.Component,function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={message:"Welcome Visiter"},e}return Object(m.a)(n,[{key:"changeText",value:function(){this.setState({message:"Thank you Subscribing"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.message),r.a.createElement("button",{onClick:function(){return e.changeText()}},"Subscribe"))}}]),n}(a.Component)),f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={count:0},a}return Object(m.a)(n,[{key:"increment",value:function(){var e=this;this.setState({count:this.state.count+1},(function(){console.log("Callback Value",e.state.count)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Count -",this.state.count),r.a.createElement("button",{onClick:function(){return e.increment()}},"Increment"))}}]),n}(a.Component),v=(a.Component,function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).clickHandler=function(){a.setState({message:"Good Bye"})},a.state={message:"hi there"},a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.state.message),r.a.createElement("button",{onClick:this.clickHandler},"Hello"))}}]),n}(a.Component)),E=n(18),b=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.greetHandler("child")}},"Greet Parent"))},g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={parentName:"Parent"},a.greetParent=a.greetParent.bind(Object(E.a)(a)),a}return Object(m.a)(n,[{key:"greetParent",value:function(e){alert("Hello ".concat(this.state.parentName," from ").concat(e))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{greetHandler:this.greetParent}))}}]),n}(a.Component),y=function(e){var t=e.person;return r.a.createElement("div",null,r.a.createElement("h2",null,"My name is ",t.name," and my age is ",t.age))},C=function(){var e=[{id:1,name:"ram",age:20},{id:2,name:"shyam",age:30},{id:3,name:"gopal",age:40}].map((function(e){return r.a.createElement(y,{key:e.id,person:e})}));return r.a.createElement("div",null,e)},j=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleUsernameChange=function(t){console.log("username entered"+t.target.value),e.setState({username:t.target.value})},e.handleTopicChange=function(t){console.log("selected topic value : "+t.target.value),e.setState({topic:t.target.value})},e.handleSubmit=function(t){alert("".concat(e.event.username," ").concat(e.event.topic)),t.preventDefault()},e.state={username:"",topic:"react"},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",value:this.state.username,onChange:this.handleUsernameChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Topic:"),r.a.createElement("select",{value:this.state.topic,onChange:this.handleTopicChange},r.a.createElement("option",{value:"react"},"React"),r.a.createElement("option",{value:"angularjs"},"Angularjs"),r.a.createElement("option",{value:"vue"},"VUE"))),r.a.createElement("div",null,r.a.createElement("button",null,"Submit")))}}]),n}(a.Component),O=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={name:"Vaibhav"},console.log("Lifecycle B Constructor"),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){console.log("Lifecycle B componentDidMount")}},{key:"shouldComponentUpdate",value:function(){return console.log("Life Cycle B shouldComponentUpdate"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("Life Cycle B getSnapshotBeforeUpdate"),null}},{key:"componentDidUpdate",value:function(){console.log("Life Cycle B componentDidUpdate")}},{key:"render",value:function(){return console.log("Lifecycle B Render"),r.a.createElement("div",null," Life Cycle B ")}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("Lifecycle B getDerivedStateFromProps"),null}}]),n}(a.Component),k=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).changeState=function(){a.setState({name:"Vaibhav"}),console.log(a.state.name)},a.state={name:"mehrotra"},console.log("Lifecycle A Constructor"),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){console.log("Lifecycle A componentDidMount")}},{key:"shouldComponentUpdate",value:function(e,t,n){return console.log("Life Cycle A shouldComponentUpdate"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("Life Cycle A getSnapshotBeforeUpdate"),null}},{key:"componentDidUpdate",value:function(e,t,n){console.log("Life Cycle A componentDidUpdate")}},{key:"render",value:function(){return console.log("Lifecycle A Render"),r.a.createElement("div",null,"Life Cycle A value ",this.state.name,r.a.createElement("button",{onClick:this.changeState},"Change State"),r.a.createElement(O,null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("Lifecycle A getDerivedStateFromProps"),null}}]),n}(a.Component),S=(a.PureComponent,a.Component,function(e,t){return function(n){Object(h.a)(o,n);var a=Object(d.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=a.call(this,e)).incrementCount=function(){n.setState((function(e){return{count:e.count+t}}))},n.state={count:0},n}return Object(m.a)(o,[{key:"render",value:function(){return r.a.createElement(e,Object.assign({incrementCount:this.incrementCount,count:this.state.count},this.props))}}]),o}(r.a.Component)}(function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.incrementCount;return r.a.createElement("div",null,r.a.createElement("button",{onClick:n},"Clicked ",t," Times"))}}]),n}(a.Component),5)),w=r.a.createContext(),L=(w.Provider,w.Consumer),B=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(L,null,(function(e){return r.a.createElement("div",null,"hello ",e)}))}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B,null))}}]),n}(a.Component),M=function(){return r.a.createElement(r.a.Fragment,null,"This is Fragement Demo")},N=(document.getElementById("root"),document.getElementById("modal-root")),P=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return c.a.createPortal(r.a.createElement("div",{style:{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",display:"grid",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.3)"},onClick:this.props.onClose},r.a.createElement("div",{style:{padding:20,background:"#fff",borderRadius:"2px",display:"inline-block",minHeight:"300px",margin:"1rem",position:"relative",minWidth:"300px",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",justifySelf:"center"}},this.props.children,r.a.createElement("hr",null),r.a.createElement("button",{onClick:this.props.onClose},"Close"))),N)}}]),n}(r.a.Component),A=(document.getElementById("root"),document.getElementById("modal-root"),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.handleShowMessageClick=function(){return e.setState({showModal:!0})},e.handleCloseModal=function(){return e.setState({showModal:!1})},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%",display:"grid",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{maxWidth:400,position:"relative"}},r.a.createElement("h1",null,"My App"),r.a.createElement("p",null,"This is an example of how you might use React.createPortal. I think it is a pretty neat API that is yet another awesome escape hatch that React provides for practical reasons. Sometimes you just need to render something completely outside the React Tree."),r.a.createElement("button",{onClick:this.handleShowMessageClick},"Show Secret Modal"),this.state.showModal?r.a.createElement(P,{onClose:this.handleCloseModal},"This is the secret modal message!"):null))}}]),n}(r.a.Component)),I=(n(50),n(51),n(19)),U=n.n(I),D=n(36),T=n(17),F=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={userList:[],errorMessage:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;U.a.get("https://jsonplaceholder.typicode.com/albums/1/photos").then((function(t){e.setState({userList:t.data})})).catch((function(t){e.setState({errorMessage:"error occurred !!!"})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.userList.length>0?this.state.userList.map((function(e){return r.a.createElement(T.a,{border:"secondary",style:{width:"18rem",height:"25rem",float:"left",margin:"2em"}},r.a.createElement(T.a.Img,{variant:"top",src:e.thumbnailUrl}),r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,null,e.title)))})):r.a.createElement(D.a,{animation:"grow"}))}}]),n}(a.Component),H=function(e){var t=function(t){Object(h.a)(a,t);var n=Object(d.a)(a);function a(e){var t;return Object(s.a)(this,a),(t=n.call(this,e)).incrementCounterBy5=function(){t.setState((function(e){return{count:e.count+5}}))},t.state={count:0},t}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(e,Object.assign({count:this.state.count,increment:this.incrementCounterBy5},this.props))}}]),a}(r.a.Component);return t}(function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.increment;return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:n},"Inrement by 5"))}}]),n}(a.Component)),R=n(20),V=n(78),W=function(e){var t=Object(a.useState)(!0),n=Object(R.a)(t,2),o=n[0],c=n[1],l=function(){return c(!o)};return r.a.createElement("div",null,r.a.createElement(V.a,{show:o,onClose:l},r.a.createElement(V.a.Header,null,r.a.createElement("img",{src:"holder.js/20x20?text=%20",onClick:l,className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},e.user),r.a.createElement("small",null)),r.a.createElement(V.a.Body,null,e.title)))},G=function(){var e=Object(a.useState)([]),t=Object(R.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){U.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){o(e.data)})).catch((function(e){}))}),[]);var c=function(){};return r.a.createElement("div",{className:"flex-container"},n.map((function(e){return r.a.createElement(W,{onClick:c,key:e.id,user:e.userId,title:e.title})})))};var J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(u.a,{className:"container"},r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("div",{className:"sidebar-logo"},"Project Name"),r.a.createElement("ul",{className:"sidebar-navigation"},r.a.createElement("li",{className:"header"},"Navigation"),r.a.createElement("li",null,r.a.createElement("a",{href:"TodoList"},r.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"})," MY ACTIVITIES")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-tachometer","aria-hidden":"true"})," Dashboard")),r.a.createElement("li",{className:"header"},"Another Menu"),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-users","aria-hidden":"true"})," Friends")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-cog","aria-hidden":"true"})," Settings")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"fa fa-info-circle","aria-hidden":"true"})," Information")))),r.a.createElement("div",{className:"content-container shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/TodoList",component:G}),r.a.createElement(i.a,{path:"/StateExampleComponent",component:p}),r.a.createElement(i.a,{path:"/SetStateCounter",component:f}),r.a.createElement(i.a,{path:"/EventBindInClassComponent",component:v}),r.a.createElement(i.a,{path:"/AccessFunctionParentComponentFromChildComponent",component:g}),r.a.createElement(i.a,{path:"/ListRenderingComponent",component:C}),r.a.createElement(i.a,{path:"/Form",component:j}),r.a.createElement(i.a,{path:"/LifeCycleA",component:k}),r.a.createElement(i.a,{path:"/FragmentDemo",component:M}),r.a.createElement(i.a,{path:"/PortalParent",component:A}),r.a.createElement(i.a,{path:"/HOCExample",component:S}),r.a.createElement(i.a,{path:"/ContextApi",component:x}),r.a.createElement(i.a,{path:"/UserList",component:F})))))),r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.beb5ad13.chunk.js.map