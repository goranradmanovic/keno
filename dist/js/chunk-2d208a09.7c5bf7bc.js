(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208a09"],{a631:function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10 col-sm-12 offset-md-1"},[s("div",{staticClass:"saleplaces"},[s("h1",{staticClass:"saleplaces__title"},[a._v("Prodajna Mjesta")]),s("gmap-map",{staticClass:"mt-5 mb-5 saleplaces__map",attrs:{center:a.center,zoom:9}},a._l(a.markers,function(a,t){return s("gmap-marker",{key:t,attrs:{position:a.position}})}),1),s("b-table",{attrs:{striped:"",hover:"",items:a.places}})],1)])])])},n=[],o={name:"saleplaces",data:function(){return{center:{lat:44.772182,lng:17.191},markers:[{position:{lat:44.772182,lng:17.191}},{position:{lat:45.147991,lng:17.25268}},{position:{lat:44.73164,lng:18.0837}},{position:{lat:44.757401,lng:19.217779}},{position:{lat:42.7094,lng:18.345301}},{position:{lat:44.978748,lng:16.71006}}],places:[{br:1,grad:"Banja Luka",adresa:"Maldena Stojanovica br. 1"},{br:2,grad:"Prijedor",adresa:"Maldena Stojanovica br. 1"},{br:3,grad:"Doboja",adresa:"Maldena Stojanovica br. 1"},{br:4,grad:"Gradiska",adresa:"Vidovdanska br. 3"},{br:5,grad:"Trebinje",adresa:"Vidovdanska br. 3"}]}},methods:{geolocate:function(){var a=this;navigator.geolocation.getCurrentPosition(function(t){a.center={lat:t.coords.latitude,lng:t.coords.longitude}})}},mounted:function(){this.geolocate()}},r=o,i=s("2877"),l=Object(i["a"])(r,e,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d208a09.7c5bf7bc.js.map