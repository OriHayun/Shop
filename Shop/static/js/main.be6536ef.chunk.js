(this.webpackJsonphw2=this.webpackJsonphw2||[]).push([[0],{235:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(87),l=a.n(i),c=(a(95),a(96),a(7)),s=a(8),o=a(13),m=a(11),u=a(14),p=(a(97),a(98),a(239)),h=a(240),d=(a(235),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).add=function(){a.props.addToCart(a.props.item)},a.remove=function(){a.props.removeFromCart(a.props.item)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.available?n.a.createElement("div",null,n.a.createElement(p.a,{className:"availableCard"},n.a.createElement(p.a.Img,{variant:"top",className:"availableImg",src:this.props.item.imgUrl}),n.a.createElement(p.a.Body,null,n.a.createElement(p.a.Title,null,this.props.item.name),n.a.createElement(p.a.Text,null,"price: ",this.props.item.price," \u20ac"),n.a.createElement(h.a,{variant:"primary",onClick:this.add},"Add")))):n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(p.a,{className:"cartCard"},n.a.createElement(p.a.Img,{variant:"top",className:"cartImg",src:this.props.item.imgUrl}),n.a.createElement(h.a,{onClick:this.remove},"X"))))}}]),t}(r.Component)),v=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("h5",null,"items in cart:"),n.a.createElement("h6",null,"Total price: ",this.props.totalPrice," \u20ac"),this.props.itemsInCart.map((function(t){return n.a.createElement(d,{item:t,removeFromCart:e.props.removeFromCart,available:!1})})))}}]),t}(r.Component),E=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("h5",null,"Choose your items"),this.props.availableItemsList.map((function(t){return n.a.createElement(d,{item:t,addToCart:e.props.addToCart,available:!0})})))}}]),t}(r.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).addToCart=function(e){var t=a.state.availableItemsList,r=a.state.itemsInCart;r.push(e),t=t.filter((function(t){return t.id!==e.id}));var n=a.state.totalPrice+e.price;a.setState({availableItemsList:t,itemsInCart:r,totalPrice:n})},a.removeFromCart=function(e){var t=a.state.availableItemsList,r=a.state.itemsInCart;t.push(e),r=r.filter((function(t){return t.id!==e.id}));var n=a.state.totalPrice-e.price;a.setState({availableItemsList:t,itemsInCart:r,totalPrice:n})},a.state={availableItemsList:a.props.itemsList,itemsInCart:a.props.itemsInCart,totalPrice:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{id:"CCShop-header",className:"col-12"},n.a.createElement("img",{id:"logo",src:"/images/Hayun'sLogo.jpg"}),n.a.createElement("h3",null,"Welcome to Hayun's shop"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{id:"cart",className:"col-sm-6 col-md-4 col-lg-2"},n.a.createElement(v,{itemsInCart:this.state.itemsInCart,removeFromCart:this.removeFromCart,totalPrice:this.state.totalPrice})),n.a.createElement("div",{id:"shop",className:"col-sm-6 col-md-8 col-lg-10"},n.a.createElement(E,{availableItemsList:this.state.availableItemsList,addToCart:this.addToCart}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{id:"footer",className:"col-12"},n.a.createElement("hr",null),n.a.createElement("h6",null,"All rights reserved to Hayun's Group"))))}}]),t}(r.Component),f=function(){function e(t,a,r,n){Object(c.a)(this,e),this.id=t,this.name=a,this.price=r,this.imgUrl=n}return Object(s.a)(e,[{key:"show",value:function(){var e="";return e+="<p>ID: ".concat(this.id,"</p><p>Name: ").concat(this.name,"</p><p>Price: ").concat(this.price,'</p>\n        <img src="').concat(this.imgUrl,'" />')}}]),e}(),C=[new f(1,"Hurley hat",100,"./images/HurleyHat.png"),new f(2,"Nike air force1",350,"./images/nikeShose.png"),new f(3,"Nike shirt",130,"./images/NikeShirt.jpg"),new f(4,"Nike pants",150,"./images/NikePants.png")],g=[];var j=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(b,{itemsList:C,itemsInCart:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(236);l.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},90:function(e,t,a){e.exports=a(237)},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.be6536ef.chunk.js.map