!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./public/scripts/script.jsx")}({"./node_modules/classnames/index.js":function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a))e.push(r.apply(null,a));else if("object"===s)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}void 0!==e&&e.exports?e.exports=r:void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},"./public/scripts/script.jsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/classnames/index.js");var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.goToPage=n.goToPage.bind(n),n.state={menu:[{title:"HOME",link:"",state:!0},{title:"INFORMATION",link:"",state:!1},{title:"WORK",link:"",state:!1},{title:"PHOTOGRAPHY",link:"",state:!1}]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),a(t,[{key:"componentDidMount",value:function(){var e=new THREE.Scene,t=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),n=new THREE.WebGLRenderer({canvas:document.getElementById("canvas")});n.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(n.domElement);var a=new THREE.BoxGeometry(1.8,1.8,1.8),r=new THREE.MeshNormalMaterial,s=new THREE.Mesh(a,r);e.add(s),t.position.z=5;!function a(){requestAnimationFrame(a),s.rotation.x+=.01,s.rotation.y+=.01,n.render(e,t)}()}},{key:"goToPage",value:function(e){for(var t=this.state.menu,n=0;n<t.length;n++)t[n].state=!1,n===e&&(t[n].state=!0);this.setState({menu:t})}},{key:"render",value:function(){var e=this,t=this.state.menu.map(function(t,n){var a="header-btns left text-center c-pointer";return t.state&&(a+=" color-white"),React.createElement("span",{onClick:function(){return e.goToPage(n)},key:n,className:a},t.title)});return React.createElement("span",null,React.createElement("span",{className:"main-bg"},React.createElement("canvas",{id:"canvas",width:"500",height:"400"})),React.createElement("span",{className:"main-wrapper"},React.createElement("span",{className:"header bin-relative-block-wh-100"},React.createElement("span",{className:"header-nav c-pointer"},t),React.createElement("span",{className:"header-content home"+(this.state.menu[0].state?" active-content":"")},React.createElement("span",{className:"robins-content"},React.createElement("span",{className:"name-letters text-center"+(this.state.menu[0].state?" name-letters-active":"")}," KR "),React.createElement("span",{className:"name-letters2 text-center"+(this.state.menu[0].state?" name-letters-active":"")}," Kristoffer Robin "),React.createElement("span",{className:"name-letters2 text-center"+(this.state.menu[0].state?" name-letters-active":"")}," Canlas "),React.createElement("span",{className:"bin-relative-block-wh-100 header-desc-wrap"},React.createElement("p",{className:"header-desc text-center"+(this.state.menu[0].state?" name-letters-active":"")}," Hello!, I'm a Web Developer by day, Speedster and Photographer by night.")))),React.createElement("span",{className:"header-content information"+(this.state.menu[1].state?" active-content":"")},React.createElement("span",{className:"robins-content"},React.createElement("span",{className:"name-letters information-title text-center"+(this.state.menu[1].state?" name-letters-active":"")},"Hero for hire."),React.createElement("span",{className:"header-desc information-desc text-center"+(this.state.menu[1].state?" name-letters-active":"")},"Hello, my name is Kristoffer Robin Canlas, and I'm the fastest Web Developer alive! I started Web Development about 4 years ago and have enjoyed working in the internet industry. You can get in touch with me using my email address below.",React.createElement("br",null),React.createElement("br",null),React.createElement("br",null),"kristofferrobincanlas@gmail.com"))))))}}]),t}();ReactDOM.render(React.createElement(r,null),document.getElementById("root"))}});
//# sourceMappingURL=build.js.map