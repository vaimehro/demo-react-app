(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{53:function(e,t,n){e.exports=n(90)},58:function(e,t,n){},59:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},63:function(e,t){},64:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),l=n.n(o),c=(n(58),n(10)),i=(n(59),n(60),n(30)),u=n(7),s=n(1),m=n(2),d=n(5),p=n(4),h=(a.Component,a.Component,function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={count:0},a}return Object(m.a)(n,[{key:"increment",value:function(){var e=this;this.setState({count:this.state.count+1},(function(){console.log("Callback Value",e.state.count)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Count -",this.state.count),r.a.createElement("button",{onClick:function(){return e.increment()}},"Increment"))}}]),n}(a.Component)),f=(a.Component,function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).clickHandler=function(){a.setState({message:"Good Bye"})},a.state={message:"hi there"},a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.state.message),r.a.createElement("button",{onClick:this.clickHandler},"Hello"))}}]),n}(a.Component)),b=n(27),v=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.greetHandler("child")}},"Greet Parent"))},g=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={parentName:"Parent"},a.greetParent=a.greetParent.bind(Object(b.a)(a)),a}return Object(m.a)(n,[{key:"greetParent",value:function(e){alert("Hello ".concat(this.state.parentName," from ").concat(e))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{greetHandler:this.greetParent}))}}]),n}(a.Component),E=n(22),y=n(13),j=n(14);function C(){var e=Object(y.a)(["\npadding: 7px 0;\nwidth: 100%;\nfont-family: inherit;\nfont-size: 14px;\nborder-top: 0;\nborder-right: 0;\nborder-bottom: 1px solid #ddd;\nborder-left: 0;\ntransition: border-bottom-color .25s ease-in;\n\n&:focus {\n  border-bottom-color: #e5195f;\n  outline: 0;\n}\n"]);return C=function(){return e},e}var O=j.b.input(C());function k(){var e=Object(y.a)(["\ndisplay: block;\n  width: 100%;\n  padding: 12px 0;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: 700;\n  color: #fff;\n  \n  background-color: rgba(75, 132, 243, 1);\n  border: 0;\n  border-radius: 35px;\n  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);\n  cursor: pointer;\n  transition: all .25s cubic-bezier(.02, .01, .47, 1);\n\n  &:hover {\n    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);\n    transform: translate(0, -5px);\n    background-color: rgb(65, 105, 225,1);\n    \n\n  }\n"]);return k=function(){return e},e}var S=j.b.button(k());function x(){var e=Object(y.a)(["\n padding: 2em 1em;\n width: 40%;\n"]);return x=function(){return e},e}var w=j.b.form(x());function L(){var e=Object(y.a)(["\nposition: relative;\npadding: 0;\nmargin: 0;\nborder: 0;\n\n& + & {\n  margin-top: 24px;\n}\n\n&:nth-last-of-type(2) {\n  margin-top: 32px;\n}\n\n&:last-of-type {\n  text-align: center;\n}\n"]);return L=function(){return e},e}var P=j.b.fieldset(L());function N(){var e=Object(y.a)(["\npadding: 7px 0;\n\n\nborder-top: 0;\nborder-right: 0;\nborder-bottom: 1px solid #ddd;\nborder-left: 0;\nborder-bottom-color: rgba(75,132,243,1);\n\n"]);return N=function(){return e},e}var A=j.b.h2(N());function B(){var e=Object(E.a)(),t=e.register,n=e.handleSubmit,a=e.formState.errors;return console.log(a),r.a.createElement(w,null,r.a.createElement(P,null,r.a.createElement(A,null,"Log In")),r.a.createElement(P,null,r.a.createElement(O,Object.assign({type:"text",placeholder:"Email"},t("Email",{required:!0,pattern:/^\S+@\S+$/i})))),r.a.createElement(P,null,r.a.createElement(O,Object.assign({type:"PASSWORD",placeholder:"Password"},t("Password",{required:!0,minLength:6})))),r.a.createElement(P,null,r.a.createElement(S,{onClick:n((function(e){return console.log(e)})),jump:!0},"Log In")))}function U(){var e=Object(E.a)(),t=e.register,n=e.handleSubmit,a=e.formState.errors;return console.log(a),r.a.createElement(w,null,r.a.createElement(P,null,r.a.createElement(A,null,"Create An Account")),r.a.createElement(P,null,r.a.createElement(O,Object.assign({type:"text",placeholder:"First Name"},t("First name",{required:!0,maxLength:80})))),r.a.createElement(P,null,r.a.createElement(O,Object.assign({type:"text",placeholder:"Last Name"},t("Last name",{required:!0,maxLength:100})))),r.a.createElement(P,null,r.a.createElement(O,Object.assign({type:"text",placeholder:"Email"},t("Email",{required:!0,pattern:/^\S+@\S+$/i})))),r.a.createElement(P,null,r.a.createElement(O,Object.assign({type:"tel",placeholder:"Mobile Number"},t("Mobile number",{required:!0,minLength:6,maxLength:12})))),r.a.createElement(P,null,r.a.createElement(O,Object.assign({type:"PASSWORD",placeholder:"Password"},t("Password",{required:!0,minLength:6})))),r.a.createElement(P,null,r.a.createElement(S,{onClick:n((function(e){return console.log(e)})),jump:!0},"Sign Up")))}function M(){var e=Object(E.a)(),t=(e.register,e.handleSubmit,e.formState.errors);console.log(t);return r.a.createElement("div",{className:"login-form-container",style:{display:"flex",justifyContent:"space-around"}},r.a.createElement(B,null),r.a.createElement(U,null))}var D=function(){var e=[{id:1,name:"ram",age:20},{id:2,name:"shyam",age:30},{id:3,name:"gopal",age:40}].map((function(e){return r.a.createElement(M,{key:e.id,person:e})}));return r.a.createElement("div",null,e)},I=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleUsernameChange=function(t){console.log("username entered"+t.target.value),e.setState({username:t.target.value})},e.handleTopicChange=function(t){console.log("selected topic value : "+t.target.value),e.setState({topic:t.target.value})},e.handleSubmit=function(t){alert("".concat(e.event.username," ").concat(e.event.topic)),t.preventDefault()},e.state={username:"",topic:"react"},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",value:this.state.username,onChange:this.handleUsernameChange})),r.a.createElement("div",null,r.a.createElement("label",null,"Topic:"),r.a.createElement("select",{value:this.state.topic,onChange:this.handleTopicChange},r.a.createElement("option",{value:"react"},"React"),r.a.createElement("option",{value:"angularjs"},"Angularjs"),r.a.createElement("option",{value:"vue"},"VUE"))),r.a.createElement("div",null,r.a.createElement("button",null,"Submit")))}}]),n}(a.Component),H=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={name:"Vaibhav"},console.log("Lifecycle B Constructor"),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){console.log("Lifecycle B componentDidMount")}},{key:"shouldComponentUpdate",value:function(){return console.log("Life Cycle B shouldComponentUpdate"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("Life Cycle B getSnapshotBeforeUpdate"),null}},{key:"componentDidUpdate",value:function(){console.log("Life Cycle B componentDidUpdate")}},{key:"render",value:function(){return console.log("Lifecycle B Render"),r.a.createElement("div",null," Life Cycle B ")}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("Lifecycle B getDerivedStateFromProps"),null}}]),n}(a.Component),T=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).changeState=function(){a.setState({name:"Vaibhav"}),console.log(a.state.name)},a.state={name:"mehrotra"},console.log("Lifecycle A Constructor"),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){console.log("Lifecycle A componentDidMount")}},{key:"shouldComponentUpdate",value:function(e,t,n){return console.log("Life Cycle A shouldComponentUpdate"),!0}},{key:"getSnapshotBeforeUpdate",value:function(e,t){return console.log("Life Cycle A getSnapshotBeforeUpdate"),null}},{key:"componentDidUpdate",value:function(e,t,n){console.log("Life Cycle A componentDidUpdate")}},{key:"render",value:function(){return console.log("Lifecycle A Render"),r.a.createElement("div",null,"Life Cycle A value ",this.state.name,r.a.createElement("button",{onClick:this.changeState},"Change State"),r.a.createElement(H,null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("Lifecycle A getDerivedStateFromProps"),null}}]),n}(a.Component),F=(a.PureComponent,a.Component,function(e,t){return function(n){Object(d.a)(o,n);var a=Object(p.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=a.call(this,e)).incrementCount=function(){n.setState((function(e){return{count:e.count+t}}))},n.state={count:0},n}return Object(m.a)(o,[{key:"render",value:function(){return r.a.createElement(e,Object.assign({incrementCount:this.incrementCount,count:this.state.count},this.props))}}]),o}(r.a.Component)}(function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.incrementCount;return r.a.createElement("div",null,r.a.createElement("button",{onClick:n},"Clicked ",t," Times"))}}]),n}(a.Component),5)),_=r.a.createContext(),R=(_.Provider,_.Consumer),q=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement(R,null,(function(e){return r.a.createElement("div",null,"hello ",e)}))}}]),n}(a.Component),z=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,null))}}]),n}(a.Component),W=function(){return r.a.createElement(r.a.Fragment,null,"This is Fragement Demo")},V=(document.getElementById("root"),document.getElementById("modal-root")),G=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createPortal(r.a.createElement("div",{style:{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",display:"grid",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.3)"},onClick:this.props.onClose},r.a.createElement("div",{style:{padding:20,background:"#fff",borderRadius:"2px",display:"inline-block",minHeight:"300px",margin:"1rem",position:"relative",minWidth:"300px",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",justifySelf:"center"}},this.props.children,r.a.createElement("hr",null),r.a.createElement("button",{onClick:this.props.onClose},"Close"))),V)}}]),n}(r.a.Component),$=(document.getElementById("root"),document.getElementById("modal-root"),function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.handleShowMessageClick=function(){return e.setState({showModal:!0})},e.handleCloseModal=function(){return e.setState({showModal:!1})},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%",display:"grid",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:{maxWidth:400,position:"relative"}},r.a.createElement("h1",null,"My App"),r.a.createElement("p",null,"This is an example of how you might use React.createPortal. I think it is a pretty neat API that is yet another awesome escape hatch that React provides for practical reasons. Sometimes you just need to render something completely outside the React Tree."),r.a.createElement("button",{onClick:this.handleShowMessageClick},"Show Secret Modal"),this.state.showModal?r.a.createElement(G,{onClose:this.handleCloseModal},"This is the secret modal message!"):null))}}]),n}(r.a.Component)),J=(n(63),n(64),n(28)),K=n.n(J),Q=n(49),X=n(26),Y=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={userList:[],errorMessage:""},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;K.a.get("https://jsonplaceholder.typicode.com/albums/1/photos").then((function(t){e.setState({userList:t.data})})).catch((function(t){e.setState({errorMessage:"error occurred !!!"})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.userList.length>0?this.state.userList.map((function(e){return r.a.createElement(X.a,{border:"secondary",style:{width:"18rem",height:"25rem",float:"left",margin:"2em"}},r.a.createElement(X.a.Img,{variant:"top",src:e.thumbnailUrl}),r.a.createElement(X.a.Body,null,r.a.createElement(X.a.Title,null,e.title)))})):r.a.createElement(Q.a,{animation:"grow"}))}}]),n}(a.Component),Z=(function(e){var t=function(t){Object(d.a)(a,t);var n=Object(p.a)(a);function a(e){var t;return Object(s.a)(this,a),(t=n.call(this,e)).incrementCounterBy5=function(){t.setState((function(e){return{count:e.count+5}}))},t.state={count:0},t}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(e,Object.assign({count:this.state.count,increment:this.incrementCounterBy5},this.props))}}]),a}(r.a.Component)}(function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.increment;return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:n},"Inrement by 5"))}}]),n}(a.Component)),n(92)),ee=function(e){var t=Object(a.useState)(!0),n=Object(c.a)(t,2),o=n[0],l=n[1],i=function(){return l(!o)};return r.a.createElement("div",null,r.a.createElement(Z.a,{show:o,onClose:i},r.a.createElement(Z.a.Header,null,r.a.createElement("img",{src:"holder.js/20x20?text=%20",onClick:i,className:"rounded mr-2",alt:""}),r.a.createElement("strong",{className:"mr-auto"},e.user),r.a.createElement("small",null)),r.a.createElement(Z.a.Body,null,e.title)))},te=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){K.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){o(e.data)})).catch((function(e){}))}),[]);var l=function(){};return r.a.createElement("div",{className:"flex-container"},n.map((function(e){return r.a.createElement(ee,{onClick:l,key:e.id,user:e.userId,title:e.title})})))},ne=(n(84),n(85),function(e){return r.a.createElement("button",{className:"toggle_button",onClick:e.click},r.a.createElement("span",{className:"drawer_lines"}),r.a.createElement("span",{className:"drawer_lines"}),r.a.createElement("span",{className:"drawer_lines"}))}),ae=function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",null,r.a.createElement(ne,{click:e.drawerClickHandler})),r.a.createElement("div",{className:"toolbar__logo"},r.a.createElement("a",{href:"/"},"THE LOGO")),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar__navigation__items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Product")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Contact Us"))))))},re=(n(86),function(e){var t="side-drawer sidebar-container";return e.show&&(t="side-drawer open sidebar-container"),r.a.createElement("nav",{className:t},r.a.createElement("ul",{className:"sidebar-navigation "},r.a.createElement("li",{className:"header list-group-item"},"Navigation"),e.navList.map((function(e){return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("a",{href:e.path},e.title))}))))}),oe=(n(87),function(e){return r.a.createElement("div",{className:"back-drop",onClick:e.click})});function le(){var e=Object(y.a)(["\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n html {\n  font-size: 80%;\n  font-family: 'Lato', sans-serif;\n  box-sizing: border-box;\n }\n\n body {\n \n }\n"]);return le=function(){return e},e}var ce=Object(j.a)(le());var ie=function(){var e,t=Object(a.useState)(!1),n=Object(c.a)(t,2),o=n[0],l=n[1];return o&&(e=r.a.createElement(oe,{click:function(){l(!1)}})),r.a.createElement("div",{className:"App",style:{height:"100%"}},r.a.createElement(ce,null),r.a.createElement(i.a,null,r.a.createElement(re,{show:o,navList:[{path:"TodoList",title:"My Activities"},{path:"UserList",title:"People"},{path:"TodoList",title:"Duplicate Activities"},{path:"Person",title:"Add User"}]}),r.a.createElement(ae,{drawerClickHandler:function(){l((function(e){return!e}))}}),void 0,e,r.a.createElement("div",{className:"container"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/TodoList",component:te}),r.a.createElement(u.a,{path:"/SetStateCounter",component:h}),r.a.createElement(u.a,{path:"/EventBindInClassComponent",component:f}),r.a.createElement(u.a,{path:"/AccessFunctionParentComponentFromChildComponent",component:g}),r.a.createElement(u.a,{path:"/ListRenderingComponent",component:D}),r.a.createElement(u.a,{path:"/Form",component:I}),r.a.createElement(u.a,{path:"/LifeCycleA",component:T}),r.a.createElement(u.a,{path:"/FragmentDemo",component:W}),r.a.createElement(u.a,{path:"/PortalParent",component:$}),r.a.createElement(u.a,{path:"/HOCExample",component:F}),r.a.createElement(u.a,{path:"/ContextApi",component:z}),r.a.createElement(u.a,{path:"/UserList",component:Y}),r.a.createElement(u.a,{path:"/",component:M})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.25e2a5c2.chunk.js.map