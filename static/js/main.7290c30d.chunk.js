(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(t,e,n){t.exports=n(35)},31:function(t,e,n){},32:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(8),s=n.n(r),i=n(6),c=n(7),l=n.n(c),u=n(9),p=n(10),d=n(11),m=n(13),b=n(12),h=n(14);n(31);function O(t){return o.a.createElement("div",{className:"ml-3 mt-3 post-block"},o.a.createElement("button",{type:"button",className:"btn btn-danger delete-btn",onClick:function(){return t.delete(t.id)}},"Delete"),o.a.createElement("img",{src:t.img,alt:"postPhoto",className:"img w-30"}),o.a.createElement("p",{className:"font-weight-light text"},t.description),o.a.createElement("p",null,"Likes: ",t.likes),o.a.createElement("button",{type:"button",className:"btn btn-primary mr-2 mb-2",onClick:function(){return t.click(t.id)}},"Like"),o.a.createElement("button",{type:"button",className:"btn btn-primary mb-2",onClick:function(){return t.disLike(t.id)}},"Dislike"))}var f=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return{type:"ADD_NEW_POST",payload:e}},y=(n(32),function(t){function e(){return Object(p.a)(this,e),Object(m.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"popup-bck"}),o.a.createElement("div",{className:"modal-window popup-content-box"},o.a.createElement("button",{type:"button",className:"btn btn-danger close-btn",onClick:this.props.close},"Close"),o.a.createElement("form",null,o.a.createElement("input",{id:"link",className:"input mt-4",type:"text",placeholder:"Photo link",required:!0}),o.a.createElement("input",{id:"description",className:"input mt-4",type:"text",placeholder:"Photo description",required:!0}),o.a.createElement("button",{type:"button",className:"button btn btn-primary mt-3",onClick:function(){return t.props.newPost(document.getElementById("link").value,document.getElementById("description").value)}},"Post"))))}}]),e}(a.Component)),E=Object(i.b)(null,function(t){return{newPost:function(e,n){t(f(e,n)),t({type:"CLOSE_MODAL_WINDOW"})}}})(y);function v(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(l.a.mark(function t(){var e,n,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/photos/").then(function(t){return t.json()}).then(function(t){return t.splice(0,7)});case 2:for(e=t.sent,n=[],a=0;a<e.length;a++)n.push({id:e[a].id-1,img:e[a].url,description:e[a].title.length>=8?e[a].title.split(" ").splice(0,7).join(" "):e[a].title,likes:0});return t.abrupt("return",n);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}var w=function(t){function e(){return Object(p.a)(this,e),Object(m.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(d.a)(e,[{key:"componentDidMount",value:function(){var t=Object(u.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this.props,t.next=3,v();case 3:t.t1=t.sent,t.t0.getPost.call(t.t0,t.t1);case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.props.posts.map(function(e){return o.a.createElement(O,Object.assign({key:e.id},e,{click:t.props.addLike,delete:t.props.deletePost,disLike:t.props.disLike}))}),n=this.props.modal?o.a.createElement(E,{close:this.props.closeModal}):null;return o.a.createElement("div",null,n,e,o.a.createElement("div",{className:"add-post-btn"},o.a.createElement("button",{className:"btn btn-primary btn-lg ml-3 mb-3 mt-3 add-post-btn",onClick:this.props.showModal},"Add New Post")))}}]),e}(a.Component),k=Object(i.b)(function(t){return{posts:t.posts.postsList,modal:t.modalWindow.showModalWindow}},function(t){return{addLike:function(e){return t({type:"ADD_LIKE",payload:e})},disLike:function(e){return t({type:"DIS_LIKE",payload:e})},deletePost:function(e){return t({type:"DELETE_POST",payload:e})},addNewPost:function(){return t(f())},showModal:function(){return t({type:"SHOW_MODAL_WINDOW"})},closeModal:function(){return t({type:"CLOSE_MODAL_WINDOW"})},getPost:function(e){return t({type:"GET_POST",payload:e})}}})(w);var L=function(t){return o.a.createElement("div",null,o.a.createElement(k,null))};var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(L,null))},D=n(5),N=n(1),W=n(4),_={postsList:[]};var P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_LIKE":var n=Object(W.a)(t.postsList);return n[e.payload].likes++,Object(N.a)({},t,{postsList:n});case"DIS_LIKE":var a=Object(W.a)(t.postsList);return a[e.payload].likes<=0?Object(N.a)({},t,{postsList:a}):(a[e.payload].likes--,Object(N.a)({},t,{postsList:a}));case"ADD_NEW_POST":var o=Object(W.a)(t.postsList),r="http"!==e.payload[0].substr(0,4)?"http://i.imgur.com/u2oPC.jpg":e.payload[0],s={id:o.length,img:r,description:"".concat(e.payload[1]),likes:0};return o.push(s),Object(N.a)({},t,{postsList:o});case"GET_POST":var i=Object(W.a)(t.postsList);return i.push.apply(i,Object(W.a)(e.payload)),Object(N.a)({},t,{postsList:i});case"DELETE_POST":for(var c=Object(W.a)(t.postsList),l=c[e.payload].id,u=l;u<c.length;u++)c[u].id--;return console.log(c),c.splice(l,1),Object(N.a)({},t,{postsList:c});default:return Object(N.a)({},t)}},M={showModalWindow:!1};var I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;switch((arguments.length>1?arguments[1]:void 0).type){case"SHOW_MODAL_WINDOW":var e=!t.showModalWindow;return Object(N.a)({},t,{showModalWindow:e});case"CLOSE_MODAL_WINDOW":var n=!t.showModalWindow;return Object(N.a)({},t,{showModalWindow:n});default:return Object(N.a)({},t)}},C=Object(D.b)({posts:P,modalWindow:I}),S=Object(D.c)(C);n(33),n(34);s.a.render(o.a.createElement(i.a,{store:S},o.a.createElement(g,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.7290c30d.chunk.js.map