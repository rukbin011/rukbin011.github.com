!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();(function(){a(function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.num1=t,this.num2=n},[{key:"add",value:function(){return this.num1+this.num2}},{key:"multiply",value:function(){return this.num1*this.num2}}])})(),n(4);var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.goToPage=n.goToPage.bind(n),n.goToSite=n.goToSite.bind(n),n.getActiveTemplate=n.getActiveTemplate.bind(n),n.fetchPhotos=n.fetchPhotos.bind(n),n.openPhoto=n.openPhoto.bind(n),n.loadq=new createjs.LoadQueue(!0,null,!0),n.loadq.setMaxConnections(10),n.state={menu:[{title:"HOME",link:"",state:!0},{title:"INFORMATION",link:"",state:!1},{title:"WORK",link:"",state:!1},{title:"PHOTOGRAPHY",link:"",state:!1}],work:[{title:"PamanGoken",url:"https://www.pamangoken.com"},{title:"GelandangBola",url:"https://www.gelandangbola.com"},{title:"Poker",url:""},{title:"Bandar",url:""},{title:"Ceme",url:""}],originalPhotos:[],photos:[],photoLoading:!0},n}return c(t,React.Component),o(t,[{key:"createCube",value:function(){var e=new THREE.Scene,t=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),n=new THREE.WebGLRenderer({canvas:document.getElementById("canvas")});e.background=new THREE.Color("rgb(116,119,124)"),n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement);var a=new THREE.BoxGeometry(2,2,2),o=new THREE.MeshNormalMaterial,r=new THREE.Mesh(a,o);if(e.add(r),t.position.z=5,function a(){requestAnimationFrame(a),r.rotation.x+=.01,r.rotation.y+=.01,n.render(e,t)}(),window.innerWidth>799){var i=new THREE.Scene,c=new THREE.PerspectiveCamera(75,1,.1,1e3),l=new THREE.WebGLRenderer({canvas:document.getElementById("logo-canvas"),alpha:!0});l.setSize(100,100),document.getElementById("main-logo-desktop").appendChild(l.domElement);for(var s=new THREE.BoxGeometry(2,2,2),u=0;u<s.faces.length;u++);var m=new THREE.MeshNormalMaterial,p=new THREE.Mesh(s,m);i.add(p),c.position.z=4,function e(){requestAnimationFrame(e),p.rotation.x+=.01,p.rotation.y+=.01,l.render(i,c)}()}}},{key:"fetchPhotos",value:function(){var e=this;fetch("https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=1bebc2dcb88a22bf64c2e90eb20dd3e5&user_id=43569478%40N04&format=json&nojsoncallback=1").then(function(e){return e.json()}).then(function(t){if("ok"===t.stat){for(var n=t.photos.photo,a=[],o=[],r=0;r<n.length;r++){var i={};i.index=r,i.thumbnail="https://farm"+n[r].farm+".staticflickr.com/"+n[r].server+"/"+n[r].id+"_"+n[r].secret+"_z.jpg",i.url="https://farm"+n[r].farm+".staticflickr.com/"+n[r].server+"/"+n[r].id+"_"+n[r].secret+"_b.jpg",i.src="https://farm"+n[r].farm+".staticflickr.com/"+n[r].server+"/"+n[r].id+"_"+n[r].secret+"_b.jpg",a.push(i)}e.loadq.loadManifest(a),e.loadq.addEventListener("complete",function(){for(var t=a.length/4,n=1;n<=4;n++){for(var r=[],i=function(t){r.push(React.createElement("img",{className:"photo",key:t,src:a[t].thumbnail,style:{width:"100%"},onClick:function(){return e.openPhoto(a[t].index)}}))},c=Math.floor(t*(n-1));c<Math.floor(t*n);c++)i(c);var l=React.createElement("div",{key:n,className:"photo-column"},r);o.push(l)}e.setState({originalPhotos:a,photos:o,photoLoading:!1})}),e.loadq.addEventListener("error",function(){})}},function(e){})}},{key:"componentDidMount",value:function(){var e=this;this.fetchPhotos(),this.createCube(),window.onresize=function(){e.createCube()}}},{key:"componentDidUpdate",value:function(e,t){}},{key:"openPhoto",value:function(e){}},{key:"goToPage",value:function(e){for(var t=this.state.menu,n=0;n<t.length;n++)t[n].state=!1,n===e&&(t[n].state=!0);this.setState({menu:t})}},{key:"goToSite",value:function(e){}},{key:"getActiveTemplate",value:function(){var e=this.state.menu[0].state,t=this.state.menu[1].state,n=this.state.menu[2].state,a=void this.state.menu[3].state;return e?a=React.createElement("span",{className:"main-body"},React.createElement("span",{className:"main-logo"},"KR"),React.createElement("span",{className:"main-name"},"Hi!, I'm Kristoffer Robin Canlas"),React.createElement("span",{className:"main-intro"},"Web Developer by day, Speedster and Photographer by night.")):t?a=React.createElement("span",{className:"information-wrapper"},React.createElement("span",{className:"information-intro"},"Hello, my name is Kristoffer Robin Canlas, and I'm the fastest Web Developer alive! I started Web Development around 2014. You can contact me using my contact number and email address below."),React.createElement("span",{className:"information-email"},"+63906-4636-752 | kristofferrobincanlas@gmail.com")):n||(a=React.createElement(React.Fragment,null,this.state.photoLoading?React.createElement("span",{className:"hourglass-wrapper"},React.createElement("div",{className:"hourglass"})):React.createElement("div",{className:"photo-row"},this.state.photos))),a}},{key:"getTitle",value:function(){var e=this;return this.state.menu.map(function(t,n){var a="header-btns left text-center c-pointer";return t.state&&(a+=" color-white"),React.createElement("label",{key:n,htmlFor:"nav-checkbox"},React.createElement("span",{onClick:function(){return e.goToPage(n)},className:a},t.title))})}},{key:"render",value:function(){return this.state.work,React.createElement(React.Fragment,null,React.createElement("span",{className:"main-bg"},React.createElement("canvas",{id:"canvas",width:"500",height:"400"})),React.createElement("span",{className:"main-wrapper"},React.createElement("input",{type:"checkbox",id:"nav-checkbox",className:"nav-checkbox"}),React.createElement("label",{className:"nav-checkbox-label c-pointer",htmlFor:"nav-checkbox"},React.createElement("span",{className:"nav-checkbox-icon"})),React.createElement("span",{className:"main-header"},React.createElement("span",{id:"main-logo-desktop",className:"main-logo-desktop"},React.createElement("span",null,"KR"),React.createElement("canvas",{id:"logo-canvas",width:"100",height:"100"})),this.getTitle()),this.getActiveTemplate()))}}]),t}();!function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}c(t,React.Component),o(t,[{key:"render",value:function(){var e=this,t=this.props.workPage,n=this.props.work.map(function(t,n){return React.createElement("span",{onClick:function(){return e.props.goToSite(t.url)},className:"color-white work-container",key:n},t.title)});return React.createElement(React.Fragment,null,React.createElement("span",{className:"header-content work"+(t?" active-content":"")},n))}}])}(),ReactDOM.render(React.createElement(l,null),document.getElementById("root"))},,,,function(e,t,n){}]);
//# sourceMappingURL=build.js.map