webpackJsonp([1],{"9M+g":function(t,i){},Jmt5:function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("7+uW"),e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var l=s("VU/8")({name:"App"},e,!1,function(t){s("qlqf")},null,null).exports,c=s("/ocq"),r={name:"HelloWorld",data:function(){return{msg:"Vue tutorial!",slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}},mounted:function(){var t=this,i=!1,s=$("#description");$("#form-contact").on("submit",function(i){return i.preventDefault(),$(t),$.ajax({url:$form.attr("action"),method:"POST",data:$form.formObject(),dataType:"json",success:function(){alert("Everything Ok!")}}),!1}),$(window).scroll(function(){var t,a=(t=$("#description").height(),$(window).scrollTop()>$(window).height()-2*t);a&&!i&&(i=!0,s.addClass("fixed").removeClass("absolute"),s.removeClass("text-center"),$("#navigation").slideUp("fast"),$("#sticky-navigation").slideDown("fast")),!a&&i&&(i=!1,s.removeClass("fixed").addClass("absolute"),s.addClass("text-center"),$("#navigation").slideDown("fast"),$("#sticky-navigation").slideUp("fast"))})}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"main"}},[t._m(0),t._m(1),t._m(2),s("div",{attrs:{id:"gallery"}},[s("b-carousel",{attrs:{id:"gallery-carousel",controls:"controls",background:"#ababab",interval:2e3,"img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(i){t.slide=i},expression:"slide"}},[s("b-carousel-slide",{attrs:{"img-src":"static/img/babyshower1024x480.jpeg"}}),s("b-carousel-slide",{attrs:{"img-src":"static/img/birthday.jpeg"}}),s("b-carousel-slide",{attrs:{"img-src":"static/img/homepic-1024x480.jpg"}}),s("b-carousel-slide",{attrs:{"img-src":"static/img/buffet.jpg"}}),s("b-carousel-slide",{attrs:{"img-src":"static/img/mantel.jpeg"}}),s("b-carousel-slide",{attrs:{"img-src":"static/img/tables.jpeg"}}),s("b-carousel-slide",{attrs:{"img-src":"static/img/wedding1024x480.jpg"}})],1)],1),t._m(3),t._m(4),t._m(5)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"video-container",attrs:{id:"header"}},[i("video",{attrs:{autoplay:"autoplay",height:"720",loop:"loop",poster:"static/img/wine.jpg",width:"1280"}},[i("source",{attrs:{src:"static/video/mp4/wine.mp4",type:"video/mp4"}}),i("source",{attrs:{src:"static/video/webm/wine.webm",type:"video/webm"}})])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container-fluid no-padding no-margin relative h-100",attrs:{id:"home"}},[s("nav",{staticClass:"fixed top right navigation white-text row full-width up",attrs:{id:"navigation"}},[s("div",{staticClass:"col-12"},[s("ul",{staticClass:"list-inline float-right"},[s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"#header"}},[t._v("Inicio")])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"#menu"}},[t._v("Servicios")])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"#gallery"}},[t._v("Galeria")])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"#contact-form"}},[t._v("Contacto")])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"#location"}},[t._v("Como llegar")])])])])]),s("div",{staticClass:"row no-padding h-100"},[s("div",{staticClass:"white-text col-12 h-100 no-padding text-center",attrs:{id:"parent"}},[s("div",{staticClass:"h-100",attrs:{id:"child"}},[s("img",{attrs:{src:"static/img/logo.png",width:"200"}}),s("h1",{staticClass:"satisfy title no-margin"},[t._v("Alquileres y Eventos")]),s("p",{attrs:{id:"is-open"}},[s("i",{staticClass:"fa fa-clock-o"},[t._v("Abierto Ahora")])])])])]),s("div",{staticClass:"black large-padding white-text full-width absolute up",attrs:{id:"description"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 white-text medium mx-auto text-center"},[t._v("El servicio con la mejor calidad...")]),s("div",{staticClass:"col-6 hidden",attrs:{id:"sticky-navigation"}},[s("nav",{staticClass:"text-right navigation"},[s("ul",{staticClass:"list-inline"},[s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"#header"}},[t._v("Inicio")])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"#menu"}},[t._v("Servicios")])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"#gallery"}},[t._v("Galeria")])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"#contact-form"}},[t._v("Contacto")])]),s("li",{staticClass:"list-inline-item"},[s("a",{attrs:{href:"#location"}},[t._v("Como llegar")])])])])])])])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"text-center relative",attrs:{id:"menu"}},[s("div",{staticClass:"absolute white",attrs:{id:"menu-title"}},[s("h2",{staticClass:"satisfy title",attrs:{id:"service"}},[t._v(" Servicios")])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-3 services",staticStyle:{"background-image":"url(static/img/servicios/sillas-thumb.jpg)"}},[s("div",{staticClass:"screen"},[s("div",{staticClass:"row full-height t-div"},[s("div",{staticClass:"col-12 white-text t-child"},[s("h3",{staticClass:"satisfy subtitle"},[t._v("Alquiler de Sillas")]),s("p",{staticClass:"no-margin"},[t._v("10.00 NIO")])])])])]),s("div",{staticClass:"col-3 services",staticStyle:{"background-image":"url(static/img/servicios/bodas-thumb.jpg)"}},[s("div",{staticClass:"screen"},[s("div",{staticClass:"row full-height t-div"},[s("div",{staticClass:"col-12 white-text t-child"},[s("h3",{staticClass:"satisfy subtitle"},[t._v("Organizacion de bodas")]),s("p",{staticClass:"no-margin"},[t._v("100.00 NIO")])])])])]),s("div",{staticClass:"col-3 services",staticStyle:{"background-image":"url(static/img/servicios/mesas-thumb.jpg)"}},[s("div",{staticClass:"screen"},[s("div",{staticClass:"row full-height t-div"},[s("div",{staticClass:"col-12 white-text t-child"},[s("h3",{staticClass:"satisfy subtitle"},[t._v("Alquiler de Mesas")]),s("p",{staticClass:"no-margin"},[t._v("15.00 NIO")])])])])]),s("div",{staticClass:"col-3 services",staticStyle:{"background-image":"url(static/img/servicios/quinceaños-thumb.jpg)"}},[s("div",{staticClass:"screen"},[s("div",{staticClass:"row full-height t-div"},[s("div",{staticClass:"col-12 white-text t-child"},[s("h3",{staticClass:"satisfy subtitle"},[t._v("Organizacion de quinceaños")]),s("p",{staticClass:"no-margin"},[t._v("100.00 NIO")])])])])]),s("div",{staticClass:"col-3 services",staticStyle:{"background-image":"url(static/img/servicios/manteles-thumb.jpg)"}},[s("div",{staticClass:"screen"},[s("div",{staticClass:"row full-height t-div"},[s("div",{staticClass:"col-12 white-text t-child"},[s("h3",{staticClass:"satisfy subtitle"},[t._v("Alquiler de Manteles")]),s("p",{staticClass:"no-margin"},[t._v("5.00 NIO")])])])])]),s("div",{staticClass:"col-3 services",staticStyle:{"background-image":"url(static/img/servicios/babyshower-thumb.jpg)"}},[s("div",{staticClass:"screen"},[s("div",{staticClass:"row full-height t-div"},[s("div",{staticClass:"col-12 white-text t-child"},[s("h3",{staticClass:"satisfy subtitle"},[t._v("Organizacion de Baby-Shower")]),s("p",{staticClass:"no-margin"},[t._v("150.00 NIO")])])])])]),s("div",{staticClass:"col-3 services",staticStyle:{"background-image":"url(static/img/servicios/buffet-thumb.jpg)"}},[s("div",{staticClass:"screen"},[s("div",{staticClass:"row full-height t-div full-width"},[s("div",{staticClass:"col-12 white-text t-child text-center"},[s("h3",{staticClass:"satisfy subtitle"},[t._v("Buffet")]),s("p",{staticClass:"no-margin"},[t._v("170.00 NIO")])])])])]),s("div",{staticClass:"col-3 services",staticStyle:{"background-image":"url(static/img/servicios/utensilios-thumb.jpg)"}},[s("div",{staticClass:"screen"},[s("div",{staticClass:"row full-height t-div"},[s("div",{staticClass:"col-12 white-text t-child"},[s("h3",{staticClass:"satisfy subtitle"},[t._v("Alquiler de Utensilios")]),s("p",{staticClass:"no-margin"},[t._v("30.00 NIO")])])])])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"card white black-text text-center relative"},[i("h3",{staticClass:"medium slim"},[this._v("En "),i("strong",{staticClass:"satisfy medium"},[this._v(" Alquileres y Eventos")]),this._v(" el cliente no es una opinion, es una ley")]),i("p",{staticClass:"top-space"},[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n         proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i("strong",{staticClass:"satisfy"},[this._v("- CEO")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"black white-text full-height container-fluid no-padding",attrs:{id:"contact-form"}},[i("div",{staticClass:"row full-height"},[i("div",{staticClass:"col-12 contact-wrap no-padding"},[i("div",{staticClass:"form-wrapper"},[i("div",{staticClass:"form-div"},[i("form",{attrs:{id:"form"}},[i("div",{staticClass:"input-wrap"},[i("input",{staticClass:"feedback-input",attrs:{type:"text",name:"name",placeholder:"Nombre *",maxlength:"33",required:"required"}}),i("input",{staticClass:"feedback-input",attrs:{type:"tel",name:"phone",placeholder:"Telefono *",maxlength:"33",required:"required"}})]),i("input",{staticClass:"feedback-input",attrs:{type:"email",name:"email",placeholder:"Correo *",maxlength:"99",required:"required"}}),i("textarea",{staticClass:"feedback-input message",attrs:{name:"message",placeholder:"Mensaje *",maxlength:"999",required:"required"}}),i("button",{staticClass:"send-button",attrs:{type:"submit"}},[this._v("Contactanos!")])])])])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"location"}},[i("div",{attrs:{id:"map"}},[i("div",{staticClass:"black large-padding white-text text-center medium",attrs:{id:"mensaje"}})])])}]};var o=s("VU/8")(r,n,!1,function(t){s("vAAe")},"data-v-a05b9f8a",null).exports;a.a.use(c.a);var d=new c.a({routes:[{path:"/",name:"MainIndex",component:o}]}),u=s("sCSS");s("Jmt5"),s("9M+g");a.a.config.productionTip=!1,a.a.use(u.a),a.a.use(o),new a.a({el:"#app",router:d,components:{App:l},template:"<App/>"})},qlqf:function(t,i){},vAAe:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.895eec5f6e68f1618d93.js.map