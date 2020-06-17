(this["webpackJsonpreact-app-starterkit"]=this["webpackJsonpreact-app-starterkit"]||[]).push([[0],{1086:function(e,t,a){},1087:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(104),s=a.n(c),r=a(77),l=a(78),i=a(59),m=a(304),u=a(37),h=a(19),p=Object(i.c)({auth:Object(h.auth)(),form:Object(h.form)({name:"form"}),forms:Object(h.forms)({name:"forms",query:{type:"form",tags:"common"}}),submission:Object(h.submission)({name:"submission"}),submissions:Object(h.submissions)({name:"submissions"}),event:Object(i.c)({form:Object(h.form)({name:"event"}),submission:Object(h.submission)({name:"event"}),submissions:Object(h.submissions)({name:"event"})})});const d=Object(u.a)(),v=[m.a,Object(l.routerMiddleware)(d)];const b=Object(i.d)(Object(i.a)(...v));var f=Object(i.e)(Object(l.connectRouter)(d)(p),{},b),E=a(1094),g=a(1092),k=a(1091),x=a(1093);class C extends n.Component{render(){const e=this.props,t=e.to,a=e.location,n=e.exact,c=e.role,s=e.className,r=e.children,l=Object(k.a)(a.pathname,{path:t,exact:n,strict:!1})?"nav-item active":"nav-item";return o.a.createElement("li",{className:l},o.a.createElement(g.a,{to:t,role:c,className:s},r))}}C.defaultProps={exact:!1};var N=Object(x.a)(e=>o.a.createElement(C,e)),j="https://ivzftkhgysqjtha.form.io",y="https://api.form.io",O={};window.location.search.substr(1).split("&").forEach((function(e){O[e.split("=")[0]]=e.split("=")[1]&&decodeURIComponent(e.split("=")[1])}));const R={projectUrl:j=O.projectUrl||j,apiUrl:y=O.apiUrl||y},w="/auth",z=class extends n.Component{render(){const e=this.props,t=e.auth;e.logout;return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("div",{className:"container"},o.a.createElement(g.a,{className:"navbar-brand",to:"/"},o.a.createElement("img",{className:"logo",alt:"logo CM",src:"https://comunitamurialdo.github.io/iscrizioni/static/logo.png",height:"100px"})),o.a.createElement("ul",{className:"nav navbar-nav mr-auto"},o.a.createElement(N,{exact:!0,to:"/",role:"navigation button",className:"nav-link"},o.a.createElement("span",{className:"fa fa-home"})),t.is.hasOwnProperty("administrator")&&t.is.administrator?o.a.createElement(N,{to:"/form",role:"navigation link",className:"nav-link"},o.a.createElement("i",{className:"fa fa-wpforms"}),"\xa0 Forms"):null,t.authenticated?o.a.createElement(N,{to:"/colonie",role:"navigation link",className:"nav-link"},o.a.createElement("i",{className:"fa fa-calendar"}),"\xa0 Events"):null)))}};var M=Object(r.connect)(e=>({auth:Object(h.selectRoot)("auth",e)}),e=>({logout:()=>{e(Object(h.logout)()),e(Object(l.push)(w))}}))(z);class U extends n.Component{render(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"container text-center",style:{padding:"15px"}},"Coded with \u2665 by ",o.a.createElement("a",{href:"mailto:xavitorne@gmail.com"},"Xavier Torn\xe9")," for Comunit\xe0 Murialdo"))}}class I extends n.Component{render(){const e=this.props,t=e.to,a=e.role,n=e.className,c=e.children;return o.a.createElement(g.a,{to:t,role:a,className:n},c)}}I.defaultProps={exact:!1};var S=Object(x.a)(e=>o.a.createElement(I,e));class A extends n.Component{render(){return o.a.createElement("div",{className:"jumbotron text-center",style:{marginTop:"-40px"}},o.a.createElement("h2",{className:"title"},"ISCRIZIONI Colonie estive 2020",o.a.createElement("br",null),o.a.createElement("span",{className:"text-blue"},"C\u2019entro Anch\u2019io \u2013 Comunit\xe0 Murialdo")),o.a.createElement("div",{className:"row mt-50"},o.a.createElement("div",{className:"col-sm-12 col-sm-offset-3 text-justify"},o.a.createElement("p",{className:"lead"},"Attraverso questo modulo \xe8 possibile effettuare on-line la prenotazione alle colonie estive del C\u2019entro Anch\u2019io della Comunit\xe0 Murialdo in collaborazione con il Comune di Rovereto. Una volta cliccato su -Invia- riceverete sulla email indicata la ricevuta dell'avvenuta prenotazione."),o.a.createElement("p",{className:"lead"},"Scarica ",o.a.createElement("a",{href:"https://comunitamurialdo.github.io/iscrizioni/static/RecapEstate2020.pdf"},"QUI")," il dettaglio delle proposte.")),o.a.createElement("div",{className:"col-sm-12 col-sm-offset-3 text-center"},o.a.createElement("p",{className:"lead"},"Costi: 30 euro a settimana"),o.a.createElement("p",{className:"lead"},"Hai bisogno di aiuto per l'iscrizione?"),o.a.createElement("ul",{className:"list-inline"},o.a.createElement("li",null,"Chiama al ",o.a.createElement("a",{href:"tel:0464-412886"},"0464-412886")),o.a.createElement("li",null,"Scrivici a ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"mailto:centroanchio@murialdo.taa.it"},"centroanchio@murialdo.taa.it"))),o.a.createElement(S,{to:"/colonie",className:"btn btn-lg btn-success nolist"},"Fai l'iscrizione"))),o.a.createElement("div",{className:"row text-center mt-50"},o.a.createElement("div",{className:"col-sm-12 col-sm-offset-3 text-center"},o.a.createElement("p",null,o.a.createElement("img",{src:"https://comunitamurialdo.github.io/iscrizioni/static/stemma_cr.png",height:"100px"}),o.a.createElement("img",{src:"https://comunitamurialdo.github.io/iscrizioni/static/logo.png",height:"100px"}),o.a.createElement("img",{src:"https://comunitamurialdo.github.io/iscrizioni/static/logoCA.png",height:"100px"})))))}}const V=class extends n.Component{render(){const e=this.props.auth;return o.a.createElement("div",null,o.a.createElement(A,null),o.a.createElement("div",{className:"container"},e.authenticated?o.a.createElement("div",{className:"well text-center"},e.user&&e.user.data?o.a.createElement("h3",null,"You are logged in as\xa0",o.a.createElement("strong",null,e.user.data.email),"!"):null):null))}};var F=Object(r.connect)(e=>({auth:Object(h.selectRoot)("auth",e)}),()=>({}))(V),q=a(306),P=a.n(q);class T extends n.Component{constructor(e){super(e),this.state={visible:!1}}openModal(){this.setState({visible:!0})}closeModal(){this.setState({visible:!1})}render(){return o.a.createElement("div",null,o.a.createElement(h.Form,{src:"https://ivzftkhgysqjtha.form.io/iscrizioni",onSubmit:()=>this.openModal()}),o.a.createElement(P.a,{visible:this.state.visible,width:"400",height:"300",effect:"fadeInUp",onClickAway:()=>this.closeModal()},o.a.createElement("div",{className:"p-5"},o.a.createElement("h1",null,"Richiesta inviata"),o.a.createElement("p",{className:"lead"},"Verrete contattati dall'equipe educativa per la conferma o meno dell'iscrizione."),o.a.createElement("a",{href:"javascript:void(0);",onClick:()=>this.closeModal()},"Chiudi"))))}}var B=()=>o.a.createElement("div",null,o.a.createElement(M,null),o.a.createElement("div",{className:"container",id:"main"},o.a.createElement(E.a,{exact:!0,path:"/",component:F}),o.a.createElement(E.a,{path:"/colonie",component:T})),o.a.createElement(U,null)),J=a(30),L=a.n(J),_=a(207),D=a.n(_);class H extends L.a{constructor(e,t,a){super(e,t,a),this.foo="bar"}static schema(){return L.a.schema({type:"checkmatrix",numRows:3,numCols:3})}render(e){let t="table ";["striped","bordered","hover","condensed"].forEach(e=>{this.component[e]&&(t+="table-".concat(e," "))});let a="";for(let n=0;n<this.component.numRows;n++){let e="<tr>";for(let t=0;t<this.component.numCols;t++){let a="<td>";a+=this.renderTemplate("input",{input:{type:"input",ref:"".concat(this.component.key,"-").concat(n),attr:{id:"".concat(this.component.key,"-").concat(n,"-").concat(t),class:"form-control",type:"checkbox"}}}),a+="</td>",e+=a}e+="</tr>",a+=e}return super.render("\n<table class=".concat(t,">\n  <tbody>\n     ").concat(a,"\n  </tbody>\n</table>\n    "))}attach(e){const t={};for(let a=0;a<this.component.numRows;a++)t["".concat(this.component.key,"-").concat(a)]="multiple";this.loadRefs(e,t),this.checks=[];for(let a=0;a<this.component.numRows;a++)this.checks[a]=Array.prototype.slice.call(this.refs["".concat(this.component.key,"-").concat(a)],0),this.checks[a].forEach(e=>{this.addEventListener(e,"click",()=>this.updateValue())});return super.attach(e)}getValue(){var e=[];for(var t in this.checks){var a=this.checks[t];for(var n in e[t]=[],a){var o=a[n];e[t][n]=!!o.checked}}return e}setValue(e){if(e)for(var t in this.checks){var a=this.checks[t];if(!e[t])break;for(var n in a){var o=a[n];if(!e[t][n])return!1;let c=e[t][n]?1:0;o.value=c,o.checked=c}}}}H.builderInfo={title:"Check Matrix",group:"basic",icon:"fa fa-table",weight:70,documentation:"http://help.form.io/userguide/#table",schema:H.schema()},H.editForm=D.a;var Q=a(14),X=a.n(Q);const Y=class extends n.Component{constructor(e){super(e),this.setValue=()=>{this.setState({value:"Changed"},()=>this.props.onChange(null,this.state.value))},this.state={value:e.value}}render(){return o.a.createElement("h1",{onClick:this.setValue},"Click Me ",this.state.value)}};class Z extends h.ReactComponent{static get builderInfo(){return{title:"React Example",icon:"square",group:"basic",documentation:"",weight:-10,schema:Z.schema()}}static schema(){return h.ReactComponent.schema({type:"reactexample",label:"Default Label"})}attachReact(e){return console.log("attachReact",e),s.a.render(o.a.createElement(Y,{component:this.component,value:this.dataValue,onChange:this.updateValue}),e)}detachReact(e){console.log("detachReact",e),e&&s.a.unmountComponentAtNode(e)}}Z.editForm=(...e)=>X()([{key:"display",components:[{key:"placeholder",ignore:!0},{type:"textfield",input:!0,label:"My Custom Setting",weight:12,key:"myCustomSetting"}]},{key:"data",components:[]},{key:"validation",components:[]},{key:"api",components:[]},{key:"conditional",components:[]},{key:"logic",components:[]}],...e);var G={checkmatrix:H,reactexample:Z};a(1086);h.Formio.setProjectUrl(R.projectUrl),h.Formio.setBaseUrl(R.apiUrl),h.Components.setComponents(G),f.dispatch(Object(h.initAuth)()),Object(c.render)(o.a.createElement(r.Provider,{store:f},o.a.createElement(l.ConnectedRouter,{history:d},o.a.createElement("div",null,o.a.createElement(B,null)))),document.getElementById("root"))},307:function(e,t,a){e.exports=a(1087)}},[[307,1,2]]]);
//# sourceMappingURL=main.97bc1f90.chunk.js.map