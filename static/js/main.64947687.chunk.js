(this["webpackJsonpwonderful-lexus"]=this["webpackJsonpwonderful-lexus"]||[]).push([[0],{161:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABEZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACagAwAEAAAAAQAAACYAAAAAhPIgWwAAAHJQTFRFTGlxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASLHv7wAAACV0Uk5TAClGAu3DAytZzPaDJwbACjMaCFqI35uYaR3NYVji/vj9YgsQmXWK2xgAAAEsSURBVDjLlVTbsoIwEAMttAUB5X4TQU/+/xdPEasFitR9WobMdJJNYlnLcR3HtfbHBmwDGAXoPup4AA7H75iTzz2I8bh/2gSdQygTnrWgKO8BUgwMYENBgD6P1qgLBzIWSAoBywB+WaGuQBqrTOMUuC5wEcctmdY7IfdpS27g83dzIJH74yG3BMhnHDukOlopepVviCzWweIMoaKq0EAvpVDno7MPEuhhAYH//qhRbF2mQP2+todmC9bAe/rAtanwREsrHaiirfALtV3Lkacu16hS/nNMYdOjbOtR9np0h8LworAjyB/4r/IaHsvw9KZGmtnyM0tbqia3Sin02uRKZCqg2oqMaQDHOHdjnBvhibYZ49zp4mxaDlPV1FPV1F+qxri4zGvQtFS1Ff0PR3klyzG+fhAAAAAASUVORK5CYII="},164:function(e,t,a){e.exports=a(375)},373:function(e,t,a){},374:function(e,t,a){},375:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(30),i=a.n(r),c=a(154),s=a(155),o=a(162),A=a(156),m=a(44),d=a(163),u=a(47),f=a(20);var g=function(){return n.a.createElement("div",{className:"header"},n.a.createElement(u.a,{sticky:"top",bg:"white",expand:"lg"},n.a.createElement(u.a.Brand,{href:"https://lexus.com"}),n.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(f.a,{className:"mr-auto"},n.a.createElement(f.a.Link,{className:"menu-item",href:"#home"},"HOME"),n.a.createElement(f.a.Link,{className:"menu-item",href:"#about"},"ABOUT"),n.a.createElement(f.a.Link,{className:"menu-item",href:"#contact"},"CONTACT")),n.a.createElement(f.a,null,n.a.createElement(f.a,{className:"mr-auto name-tag"},n.a.createElement(f.a.Link,{className:"profile-badge-text name-tag-only",href:"#profile"},"Richard Montgomery"),n.a.createElement(f.a.Link,{href:"#home",className:"profile-badge profile-badge-text"},"RM"))))))},h=(a(173),a(158));var p=function(e){var t=e.carData,a=t[0],l=t[1],r=t[2];return n.a.createElement("div",{className:"hero"},n.a.createElement("div",{className:"info"},n.a.createElement("p",{className:"p-light"},"INTRODUCING THE NEW"),n.a.createElement("h1",null,e.selectedCar.title),n.a.createElement("p",{className:"p-light"},e.selectedCar.info)),n.a.createElement(h.Carousel,{className:"carousel-custom",selectedItem:1,showThumbs:!1,showArrows:!1,centerMode:!0,onChange:function(t){return e.handleChange(t)},centerSlidePercentage:50,statusFormatter:function(){}},n.a.createElement("div",{onClick:function(){return e.handleClick(a.id)}},n.a.createElement("img",{className:"car-image far-left",src:a.imageUrl,alt:a.title})),n.a.createElement("div",{onClick:function(){return e.handleClick(l.id)}},n.a.createElement("img",{className:"car-image",src:l.imageUrl,alt:l.title})),n.a.createElement("div",{onClick:function(){return e.handleClick(r.id)}},n.a.createElement("img",{className:"car-image",src:r.imageUrl,alt:r.title}))),n.a.createElement("div",{className:"text"},n.a.createElement("p",{className:"car-model"},e.selectedCar.title),n.a.createElement("p",{className:"price-tag"},"STARTING AT $",e.selectedCar.price)))},E=a(45),y=a(46),b=[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}];var C=Object(y.withScriptjs)(Object(y.withGoogleMap)((function(e){return n.a.createElement(y.GoogleMap,{defaultZoom:11,defaultCenter:{lat:40.712776,lng:-74.005974},defaultOptions:{styles:b}},e.locationData.map((function(t){return n.a.createElement(y.Marker,{key:t.id,position:{lat:t.coordinates.lat,lng:t.coordinates.lon},onClick:function(){e.handleClick(t)},icon:{url:e.selectedLocation.id===t.id?"/images/red_pin.png":"/images/black_pin.png",scaledSize:new window.google.maps.Size(17,24)}})})))}))),v=[{id:1,title:"2020 LS",info:"Pairing a potent engine with powerful electric motors and a self-charging lithium-ion battery, this is the highest performance LS Hybrid yet. Delivering instant torque, instinctive feel of a 10-speed automatic transmission, it is efficiency at the peak of luxury.",imageUrl:"images/ls.jpg",thumbUrl:"images/thumb_ls.png",price:"75,450"},{id:2,title:"2020 LS HYBRID",info:"Built on the platform of the high-performance LC coupe, the LS 500 features our twin-turbocharged engine and offers meticulous craftsmanship like three premium wood-trim designs so unique they can take up to four months and 32 steps to complete.",imageUrl:"images/ls-hybrid.jpg",thumbUrl:"images/thumb_ls-hybrid.png",price:"80,010"},{id:3,title:"2020 LS F SPORT",info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",imageUrl:"images/ls-f-sport.jpg",thumbUrl:"images/thumb_ls-f-sport.png",price:"81,450"}];var k=function(e){var t=Object(l.useState)(!1),a=Object(E.a)(t,2),r=a[0],i=a[1],c=Object(l.useState)(!1),s=Object(E.a)(c,2),o=s[0],A=s[1];return n.a.createElement("button",{className:r?"btn-clicked":"btn-non-clicked",onClick:function(){i(!0),A(!0)}},o?"REQUESTED!":"REQUEST QUOTE")};var T=function(e){return n.a.createElement("img",{className:"thumb",src:e.src,alt:e.alt})};var N=function(e){var t=e.selectedLocation.name?e.selectedLocation.name:e.locationData[0].name,a=[];v.forEach((function(t){e.selectedLocation.inStock.includes(t.id)&&a.push(t)}));var l=a.map((function(e,t){return n.a.createElement("div",{key:t,className:"car-container"},n.a.createElement(T,{src:e.thumbUrl,alt:e.title}),n.a.createElement("h1",null,e.title),n.a.createElement("p",null,"STARTING AT $",e.price),n.a.createElement(k,null))}));return n.a.createElement("div",{className:"sidebar-container"},n.a.createElement("h2",null,"Availability at ",t,":"),n.a.createElement("div",{className:"car-list"},l))},w={googleAPIKey:"AIzaSyAdWpXjEI0TocAY1LALj3Lo3T99A3OIN4M"},S=[{id:1,name:"Brooklyn",coordinates:{lat:40.678177,lon:-73.94416},inStock:[1,2,3]},{id:2,name:"Queens",coordinates:{lat:40.728226,lon:-73.794853},inStock:[1,2]},{id:3,name:"Newark",coordinates:{lat:40.7357,lon:-74.1724},inStock:[3]},{id:4,name:"Plainfield",coordinates:{lat:40.6337,lon:-74.4074},inStock:[]}],O=a(161),L=a.n(O);var U=function(){var e=Object(l.useState)(S[0]),t=Object(E.a)(e,2),a=t[0],r=t[1];return n.a.createElement("div",{className:"dealership"},n.a.createElement("div",{className:"headline-container"},n.a.createElement("div",{className:"headline"},n.a.createElement("div",{className:"crosshair"},n.a.createElement("img",{src:L.a,alt:"crosshair-icon"})),n.a.createElement("h1",{className:"section-title"},"SELECT YOUR DEALERSHIP")),n.a.createElement("p",null,"Using the map, below, click on the map marker that represents the nearest dealership to see all available LS trims.")),n.a.createElement("div",{className:"map-sidebar-container"},n.a.createElement("div",{className:"custom-google-map"},n.a.createElement(C,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat(w.googleAPIKey),loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{height:"400px"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}}),handleClick:function(e){r(e)},selectedLocation:a,locationData:S})),n.a.createElement(N,{className:"sidebar",selectedLocation:a,locationData:S})))},j=(a(373),a(374),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(A.a)(t).call(this,e))).handleClick=function(e){a.setState({selectedCar:v[e-1]}),console.log("Current selected car",a.state.selectedCar.title)},a.handleChange=function(e){a.setState({selectedCar:v[e]})},a.state={selectedCar:v[1]},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(g,null),n.a.createElement(p,{carData:v,handleClick:this.handleClick,selectedCar:this.state.selectedCar,handleChange:this.handleChange}),n.a.createElement(U,null)))}}]),t}(l.Component));i.a.render(n.a.createElement(j,null),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.64947687.chunk.js.map