(window["webpackJsonpreact-map"]=window["webpackJsonpreact-map"]||[]).push([[0],{57:function(e,t,a){e.exports=a(86)},62:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),o=a.n(l),i=(a(62),a(63),a(56)),c=a(11),u=a(1),p=a(6),s=a(5),m=a(13),d=a(10),g=a(12),h=a(91),v=a(92),w=a(93),E=function(e){return r.a.createElement(h.a,{defaultActiveKey:"0"},r.a.createElement(v.a,null,r.a.createElement(v.a.Header,null,r.a.createElement(h.a.Toggle,{as:w.a,variant:"link",eventKey:"0"},"Map")),r.a.createElement(h.a.Collapse,{eventKey:"0"},r.a.createElement(v.a.Body,{style:{height:"50vh",padding:0}},e.map))),r.a.createElement(v.a,null,r.a.createElement(v.a.Header,null,r.a.createElement(h.a.Toggle,{as:w.a,variant:"link",eventKey:"1"},"Targets table")),r.a.createElement(h.a.Collapse,{eventKey:"1"},r.a.createElement(v.a.Body,{style:{padding:0}},e.table))))},f=a(89),k=a(90),b=function(e){var t=e.onSubmit,a=e.onCancel,n=e.onChange;return r.a.createElement("div",{style:{position:"fixed",zIndex:3,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,.25)"}},r.a.createElement(f.a.Dialog,{style:{postion:"absolute"}},r.a.createElement(f.a.Header,{closeButton:!0,onClick:a},r.a.createElement(f.a.Title,null,"New location")),r.a.createElement(k.a,{style:{padding:"16px"}},r.a.createElement(k.a.Group,{controlId:"formBasicEmail"},r.a.createElement(k.a.Label,null,"Location name"),r.a.createElement(k.a.Control,{type:"text",placeholder:"name",onChange:n})),r.a.createElement(w.a,{onClick:t,variant:"primary",type:"submit"},"Save"))))},y=a(39),O=function(e){var t=e.handleClick,a=e.changeViewport,n=e.viewport,l=e.markers,o=e.onDragStart,i=e.onDragEnd;return r.a.createElement(y.b,Object.assign({onClick:t,mapboxApiAccessToken:"pk.eyJ1Ijoic2FqcnVzMzMiLCJhIjoiY2p6ZmQ5Y3hhMGF6MjNocWs3Mnd0ZzhzZCJ9.euviib6S8dQJyse2LRvtTw",onViewportChange:a},n),l.length?l.map(function(e,t){return r.a.createElement(y.a,{draggable:!0,onDragStart:o,onDragEnd:i,latitude:e.lat,longitude:e.lng,key:t},e.name)}):null)},C=a(88),M=function(e){var t=e.i,a=e.name,n=e.lng,l=e.lat;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l))},S=function(e){var t=e.markers;return r.a.createElement(C.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"longitude"),r.a.createElement("th",null,"latitude"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement(M,{name:e.name,lng:e.lng,lat:e.lat,key:t,i:t+1})})))};function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var x=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={markers:[],viewport:{width:"100%",height:"100%",latitude:50,longitude:20,zoom:14.5,pitch:40,bearing:0},popupShow:!1,draggedMarkerName:null,newMarkerPos:null,newMarkerTxt:"location"},a.resizeMap=function(){var e=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach(function(t){Object(u.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a.state.viewport);e.width="100%",e.height="100%",a.setState({viewport:e})},a.changeMapViewport=function(e){a.setState({viewport:e})},a.handleMapClick=function(e){var t=Object(c.a)(e.lngLat,2),n=t[0],r=t[1];a.setState({newMarkerPos:{lng:n,lat:r},popupShow:!0})},a.popupOnChange=function(e){a.setState({newMarkerTxt:e.target.value})},a.validCounter=0,a.validateMarkerName=function(e){if(a.state.markers.find(function(t){return t.name===e})){a.validCounter++;var t=e;return a.validCounter>1&&(t=t.slice(0,-1)),t+=a.validCounter,a.validateMarkerName(t)}return a.validCounter=0,e},a.popupOnSubmit=function(e){e.preventDefault();var t=a.validateMarkerName(a.state.newMarkerTxt),n=Object.assign({},a.state.newMarkerPos,{name:t});a.setState({markers:[].concat(Object(i.a)(a.state.markers),[n]),newMarkerTxt:"location",popupShow:!1})},a.popupOnCancel=function(e){a.setState({popupShow:!1,newMarkerTxt:"location"})},a.dragStart=function(e){a.setState({draggedMarkerName:e.target.innerText})},a.dragEnd=function(e){var t=Object(c.a)(e.lngLat,2),n=t[0],r=t[1],l=a.state.draggedMarkerName,o=a.state.markers,i=o.find(function(e){return e.name===l}),u=o.indexOf(i);u>=0&&(o[u]=Object.assign(o[u],{lng:n,lat:r}),a.setState({markers:o}))},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeMap,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeMap)}},{key:"render",value:function(){var e=this.state,t=e.markers,a=e.viewport,l=e.popupShow;return r.a.createElement(n.Fragment,null,l?r.a.createElement(b,{onSubmit:this.popupOnSubmit,onCancel:this.popupOnCancel,onChange:this.popupOnChange}):null,r.a.createElement(E,{map:r.a.createElement(O,{handleClick:this.handleMapClick,changeViewport:this.changeMapViewport,markers:t,viewport:a,onDragStart:this.dragStart,onDragEnd:this.dragEnd}),table:r.a.createElement(S,{markers:t})}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[57,1,2]]]);
//# sourceMappingURL=main.b53e1b02.chunk.js.map