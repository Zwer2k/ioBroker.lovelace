(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{383:function(e,t,r){"use strict";r.r(t);var n=r(0),i=(r(302),["zone"]),o=function(e,t){if("call-service"===t.action&&t.service_data&&t.service_data.entity_id){var r=t.service_data.entity_id;Array.isArray(r)||(r=[r]);var n=!0,i=!1,o=void 0;try{for(var s,a=r[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var c=s.value;e.add(c)}}catch(l){i=!0,o=l}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}}},s=function(e,t){"string"!=typeof t?(t.entity&&e.add(t.entity),t.camera_image&&e.add(t.camera_image),t.tap_action&&o(e,t.tap_action),t.hold_action&&o(e,t.hold_action)):e.add(t)},a=function(e){var t=new Set;return e.views.forEach(function(e){return function e(t,r){r.entity&&s(t,r.entity),r.entities&&r.entities.forEach(function(e){return s(t,e)}),r.card&&e(t,r.card),r.cards&&r.cards.forEach(function(r){return e(t,r)}),r.elements&&r.elements.forEach(function(r){return e(t,r)}),r.badges&&r.badges.forEach(function(e){return s(t,e)})}(t,e)}),t},c=r(250),l=r(168);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){var e=h(["\n      <style>\n        #root {\n          padding: 4px;\n          display: flex;\n          flex-wrap: wrap;\n        }\n        hui-entities-card {\n          max-width: 400px;\n          padding: 4px;\n          flex: 1 auto;\n        }\n      </style>\n    "]);return u=function(){return e},e}function d(){var e=h(["\n      ",'\n      <div id="root">',"</div>\n    "]);return d=function(){return e},e}function p(){var e=h([""]);return p=function(){return e},e}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t,r=_(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function w(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function k(e){return e.decorators&&e.decorators.length}function E(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function _(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f(t)?t:String(t)}r.d(t,"HuiUnusedEntities",function(){return O});var O=function(e,t,r,n){var i=function(){var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(n){t.forEach(function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,i)},this),e.forEach(function(e){if(!k(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)},this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var f=0;f<l.length;f++)this.addElementPlacement(l[f],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=_(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=g(e,"finisher"),n=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:n}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=g(e,"finisher"),n=this.toElementDescriptors(e.elements);return{elements:n,finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var s=t(function(e){i.initializeInstanceElements(e,a.elements)},r),a=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(E(o.descriptor)||E(i.descriptor)){if(k(o)||k(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(k(o)){if(k(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}w(o,i)}else t.push(o)}return t}(s.d.map(b)),e);return i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}(null,function(e,t){return{F:function(r){function n(){var t,r,i,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return i=this,r=!(o=(t=m(n)).call.apply(t,[this].concat(a)))||"object"!==f(o)&&"function"!=typeof o?y(i):o,e(y(r)),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(n,t),n}(),d:[{kind:"field",key:"_hass",value:void 0},{kind:"field",decorators:[Object(n.f)()],key:"_config",value:void 0},{kind:"field",key:"_elements",value:void 0},{kind:"get",static:!0,key:"properties",value:function(){return{_hass:{},_config:{}}}},{kind:"set",key:"hass",value:function(e){if(this._hass=e,this._elements){var t=!0,r=!1,n=void 0;try{for(var i,o=this._elements[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.hass=this._hass}}catch(s){r=!0,n=s}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}}else this._createElements()}},{kind:"method",key:"setConfig",value:function(e){this._config=e,this._createElements()}},{kind:"method",key:"render",value:function(){return this._config&&this._hass?Object(n.e)(d(),this.renderStyle(),this._elements):Object(n.e)(p())}},{kind:"method",key:"renderStyle",value:function(){return Object(n.e)(u())}},{kind:"method",key:"_createElements",value:function(){var e=this;if(this._hass){var t,r,n,o={};(t=this._hass,r=this._config,n=a(r),Object.keys(t.states).filter(function(e){return!n.has(e)&&!i.includes(e.split(".",1)[0])}).sort()).forEach(function(e){var t=Object(l.a)(e);t in o||(o[t]=[]),o[t].push(e)}),this._elements=Object.keys(o).sort().map(function(t){var r=Object(c.a)({type:"entities",title:e._hass.localize("domain.".concat(t))||t,entities:o[t].map(function(e){return{entity:e,secondary_info:"entity-id"}}),show_header_toggle:!1});return r.hass=e._hass,r})}}}]}},n.a);customElements.define("hui-unused-entities",O)}}]);
//# sourceMappingURL=chunk.65a4eece17db5a5b64ca.js.map