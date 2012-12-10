(function(){var a=Function.prototype.call,b=Object.prototype,h=Array.prototype.slice,m,f;if(!Function.prototype.bind)Function.prototype.bind=function(a){var f=this;if("function"!=typeof f)throw new TypeError;var k=h.call(arguments,1),l=function(){if(this instanceof l){var c=function(){};c.prototype=f.prototype;var c=new c,b=f.apply(c,k.concat(h.call(arguments)));return null!==b&&Object(b)===b?b:c}return f.apply(a,k.concat(h.call(arguments)))};return l};f=a.bind(b.toString);m=a.bind(b.hasOwnProperty);
if(!Array.isArray)Array.isArray=function(a){return"[object Array]"==f(a)};if(!Array.prototype.forEach)Array.prototype.forEach=function(a,c){var k=q(this),l=0,b=k.length>>>0;if("[object Function]"!=f(a))throw new TypeError;for(;l<b;)l in k&&a.call(c,k[l],l,k),l++};if(!Array.prototype.map)Array.prototype.map=function(a,c){var k=q(this),l=k.length>>>0,b=Array(l);if("[object Function]"!=f(a))throw new TypeError;for(var g=0;g<l;g++)g in k&&(b[g]=a.call(c,k[g],g,k));return b};if(!Array.prototype.filter)Array.prototype.filter=
function(a,c){var k=q(this),l=k.length>>>0,b=[];if("[object Function]"!=f(a))throw new TypeError;for(var g=0;g<l;g++)g in k&&a.call(c,k[g],g,k)&&b.push(k[g]);return b};if(!Array.prototype.every)Array.prototype.every=function(a,c){var k=q(this),l=k.length>>>0;if("[object Function]"!=f(a))throw new TypeError;for(var b=0;b<l;b++)if(b in k&&!a.call(c,k[b],b,k))return!1;return!0};if(!Array.prototype.some)Array.prototype.some=function(a,c){var k=q(this),l=k.length>>>0;if("[object Function]"!=f(a))throw new TypeError;
for(var b=0;b<l;b++)if(b in k&&a.call(c,k[b],b,k))return!0;return!1};if(!Array.prototype.reduce)Array.prototype.reduce=function(a){var b=q(this),k=b.length>>>0;if("[object Function]"!=f(a))throw new TypeError;if(!k&&1==arguments.length)throw new TypeError;var c=0,g;if(2<=arguments.length)g=arguments[1];else{do{if(c in b){g=b[c++];break}if(++c>=k)throw new TypeError;}while(1)}for(;c<k;c++)c in b&&(g=a.call(void 0,g,b[c],c,b));return g};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(a){var c=
q(this),b=c.length>>>0;if("[object Function]"!=f(a))throw new TypeError;if(!b&&1==arguments.length)throw new TypeError;var g,b=b-1;if(2<=arguments.length)g=arguments[1];else{do{if(b in c){g=c[b--];break}if(0>--b)throw new TypeError;}while(1)}do b in this&&(g=a.call(void 0,g,c[b],b,c));while(b--);return g};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(a){var b=q(this),c=b.length>>>0;if(!c)return-1;var f=0;1<arguments.length&&(f=r(arguments[1]));for(f=0<=f?f:c-Math.abs(f);f<c;f++)if(f in
b&&b[f]===a)return f;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(a){var b=q(this),c=b.length>>>0;if(!c)return-1;var f=c-1;1<arguments.length&&(f=r(arguments[1]));for(f=0<=f?f:c-Math.abs(f);0<=f;f--)if(f in b&&a===b[f])return f;return-1};if(!Object.keys){var g=!0,c="toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor".split(","),n=c.length,j;for(j in{toString:null})g=!1;Object.keys=function(a){if("object"!=typeof a&&"function"!=
typeof a||null===a)throw new TypeError("Object.keys called on a non-object");var b=[],f;for(f in a)m(a,f)&&b.push(f);if(g)for(f=0;f<n;f++){var j=c[f];m(a,j)&&b.push(j)}return b}}if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){var a,f,b;if(!isFinite(this))throw new RangeError;a=[this.getUTCFullYear(),this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];for(f=a.length;f--;)b=a[f],10>b&&(a[f]="0"+b);return a.slice(0,3).join("-")+"T"+
a.slice(3).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()};a="\t\n\u000b\u000c\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";if(!String.prototype.trim||a.trim()){var a="["+a+"]",p=RegExp("^"+a+a+"*"),x=
RegExp(a+a+"*$");String.prototype.trim=function(){return(""+this).replace(p,"").replace(x,"")}}var r=function(a){a=+a;a!==a?a=-1:0!==a&&a!==1/0&&a!==-(1/0)&&(a=(0<a||-1)*Math.floor(Math.abs(a)));return a},u="a"!="a"[0],q=function(a){if(null==a)throw new TypeError;return u&&"string"==typeof a&&a?a.split(""):Object(a)}})();
(function(a,b){var h=!(!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor);h&&!a.browser.msie&&Object.defineProperty&&Object.prototype.__defineGetter__&&function(){try{var a=document.createElement("foo");Object.defineProperty(a,"bar",{get:function(){return!0}});h=!!a.bar}catch(b){h=!1}a=null}();Modernizr.objectAccessor=!(!(h||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__)||a.browser.opera&&!(11<=b.browserVersion));Modernizr.advancedObjectProperties=h;
if(!h||!Object.create||!Object.defineProperties||!Object.getOwnPropertyDescriptor||!Object.defineProperty){var m=Function.prototype.call.bind(Object.prototype.hasOwnProperty);b.objectCreate=function(a,g,c,n){var j;j=function(){};j.prototype=a;j=new j;if(!n&&!("__proto__"in j)&&!Modernizr.objectAccessor)j.__proto__=a;g&&b.defineProperties(j,g);if(c)j.options=jQuery.extend(!0,{},j.options||{},c),c=j.options;j._create&&jQuery.isFunction(j._create)&&j._create(c);return j};b.defineProperties=function(a,
g){for(var c in g)m(g,c)&&b.defineProperty(a,c,g[c]);return a};b.defineProperty=function(a,b,c){if("object"!=typeof c||null===c)return a;if(m(c,"value"))return a[b]=c.value,a;a.__defineGetter__&&("function"==typeof c.get&&a.__defineGetter__(b,c.get),"function"==typeof c.set&&a.__defineSetter__(b,c.set));return a};b.getPrototypeOf=function(a){return Object.getPrototypeOf&&Object.getPrototypeOf(a)||a.__proto__||a.constructor&&a.constructor.prototype};b.getOwnPropertyDescriptor=function(a,b){if("object"!==
typeof a&&"function"!==typeof a||null===a)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object");var c;if(Object.defineProperty&&Object.getOwnPropertyDescriptor)try{return c=Object.getOwnPropertyDescriptor(a,b)}catch(n){}c={configurable:!0,enumerable:!0,writable:!0,value:void 0};var j=a.__lookupGetter__&&a.__lookupGetter__(b),h=a.__lookupSetter__&&a.__lookupSetter__(b);if(!j&&!h){if(!m(a,b))return;c.value=a[b];return c}delete c.writable;delete c.value;c.get=c.set=void 0;if(j)c.get=
j;if(h)c.set=h;return c}}})(jQuery,jQuery.webshims);(function(a){if(!Modernizr.genericDOM){var b=document,h,m,f=/<([\w:]+)/,g={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};a.webshims.fixHTML5=function(a){if("string"!=typeof a||g[(f.exec(a)||["",""])[1].toLowerCase()])return a;if(!m){h=b.body;if(!h)return a;m=b.createElement("div");m.style.display="none"}var n=m.cloneNode(!1);h.appendChild(n);n.innerHTML=a;h.removeChild(n);return n.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(a,b,h,m,f){var g=b.modules,c=/\s*,\s*/,n={},j={},p={},x={},r={},u=a.fn.val,q=function(i,d,e,b,c){return c?u.call(a(i)):u.call(a(i),e)};a.fn.val=function(i){var d=this[0];arguments.length&&null==i&&(i="");if(!arguments.length)return!d||1!==d.nodeType?u.call(this):a.prop(d,"value",i,"val",!0);if(a.isArray(i))return u.apply(this,arguments);var e=a.isFunction(i);return this.each(function(b){d=this;1===d.nodeType&&(e?(b=i.call(d,b,a.prop(d,"value",f,"val",
!0)),null==b&&(b=""),a.prop(d,"value",b,"val")):a.prop(d,"value",i,"val"))})};var t="_webshimsLib"+Math.round(1E3*Math.random()),w=function(i,d,e){i=i.jquery?i[0]:i;if(!i)return e||{};var b=a.data(i,t);e!==f&&(b||(b=a.data(i,t,{})),d&&(b[d]=e));return d?b&&b[d]:b};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){a.fn[b.name]=function(){return this.map(function(){var a=w(this,
"shadowData");return a&&a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(i){n[i]=a[i];a[i]=function(d,e,b,c,g){var y="val"==c,k=!y?n[i]:q;if(!d||!j[e]||1!==d.nodeType||!y&&c&&"attr"==i&&a.attrFn[e])return k(d,e,b,c,g);var z=(d.nodeName||"").toLowerCase(),s=p[z],v="attr"==i&&(!1===b||null===b)?"removeAttr":i,h,m,l;s||(s=p["*"]);s&&(s=s[e]);s&&(h=s[v]);if(h){if("value"==e)m=h.isVal,h.isVal=y;if("removeAttr"===v)return h.value.call(d);if(b===f)return h.get?h.get.call(d):h.value;h.set&&
("attr"==i&&!0===b&&(b=e),l=h.set.call(d,b));if("value"==e)h.isVal=m}else l=k(d,e,b,c,g);if((b!==f||"removeAttr"===v)&&r[z]&&r[z][e]){var o;o="removeAttr"==v?!1:"prop"==v?!!b:!0;r[z][e].forEach(function(a){if(!a.only||(a.only="prop"==i)||"attr"==a.only&&"prop"!=i)a.call(d,b,o,y?"val":v,i)})}return l};x[i]=function(d,e,c){p[d]||(p[d]={});p[d][e]||(p[d][e]={});var B=p[d][e][i],g=function(a,b,d){return b&&b[a]?b[a]:d&&d[a]?d[a]:"prop"==i&&"value"==e?function(a){return c.isVal?q(this,e,a,!1,0===arguments.length):
n[i](this,e,a)}:"prop"==i&&"value"==a&&c.value.apply?function(a){var b=n[i](this,e);b&&b.apply&&(b=b.apply(this,arguments));return b}:function(a){return n[i](this,e,a)}};p[d][e][i]=c;if(c.value===f){if(!c.set)c.set=c.writeable?g("set",c,B):b.cfg.useStrict&&"prop"==e?function(){throw e+" is readonly on "+d;}:a.noop;if(!c.get)c.get=g("get",c,B)}["value","get","set"].forEach(function(a){c[a]&&(c["_sup"+a]=g(a,B))})}});var k=!a.browser.msie||8<parseInt(a.browser.version,10),l=function(){var a=b.getPrototypeOf(m.createElement("foobar")),
d=Object.prototype.hasOwnProperty;return function(e,c,f){var g=m.createElement(e),h=b.getPrototypeOf(g);if(k&&h&&a!==h&&(!g[c]||!d.call(g,c))){var j=g[c];f._supvalue=function(){return j&&j.apply?j.apply(this,arguments):j};h[c]=f.value}else f._supvalue=function(){var a=w(this,"propValue");return a&&a[c]&&a[c].apply?a[c].apply(this,arguments):a&&a[c]},o.extendValue(e,c,f.value);f.value._supvalue=f._supvalue}}(),o=function(){var i={};b.addReady(function(d,e){var c={},f=function(b){c[b]||(c[b]=a(d.getElementsByTagName(b)),
e[0]&&a.nodeName(e[0],b)&&(c[b]=c[b].add(e)))};a.each(i,function(a,d){f(a);!d||!d.forEach?b.warn("Error: with "+a+"-property. methods: "+d):d.forEach(function(b){c[a].each(b)})});c=null});var d,e=a([]),c=function(b,e){i[b]?i[b].push(e):i[b]=[e];a.isDOMReady&&(d||a(m.getElementsByTagName(b))).each(e)};return{createTmpCache:function(b){a.isDOMReady&&(d=d||a(m.getElementsByTagName(b)));return d||e},flushTmpCache:function(){d=null},content:function(b,d){c(b,function(){var b=a.attr(this,d);null!=b&&a.attr(this,
d,b)})},createElement:function(a,b){c(a,b)},extendValue:function(b,d,e){c(b,function(){a(this).each(function(){w(this,"propValue",{})[d]=this[d];this[d]=e})})}}}(),A=function(a,b){if(a.defaultValue===f)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};a.extend(b,{getID:function(){var b=(new Date).getTime();return function(d){var d=a(d),e=d.attr("id");e||(b++,e="ID-"+b,d.attr("id",e));return e}}(),extendUNDEFProp:function(b,
d){a.each(d,function(a,d){a in b||(b[a]=d)})},createPropDefault:A,data:w,moveToFirstEvent:function(){var b=a._data?"_data":"data";return function(d,e,c){if((d=(a[b](d,"events")||{})[e])&&1<d.length)e=d.pop(),c||(c="bind"),"bind"==c&&d.delegateCount?d.splice(d.delegateCount,0,e):d.unshift(e)}}(),addShadowDom:function(b,d,e){e=e||{};b.jquery&&(b=b[0]);d.jquery&&(d=d[0]);if(!e.shadowFocusElement)e.shadowFocusElement=d;var c=a.data(b,t)||a.data(b,t,{}),f=a.data(d,t)||a.data(d,t,{});c.hasShadow=d;f.nativeElement=
b;f.shadowData=c.shadowData={nativeElement:b,shadowElement:d,shadowFocusElement:e.shadowFocusElement};e.shadowChilds&&e.shadowChilds.each(function(){w(this,"shadowData",f.shadowData)});if(e.data)c.shadowData.data=e.data,f.shadowData.data=e.data;e=null},propTypes:{standard:function(a){A(a);if(!a.prop)a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){A(a);if(!a.prop)a.prop={set:function(b){b?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(f,d){"string"==typeof d&&(d=d.split(c));d.forEach(function(d){b.defineNodeNamesProperty(f,d,{prop:{set:function(b){a.attr(this,d,b)},get:function(){return a.attr(this,d)||""}}})})},defineNodeNameProperty:function(c,d,e){j[d]=!0;if(e.reflect)b.propTypes[e.propType||"standard"](e);["prop","attr","removeAttr"].forEach(function(f){var g=e[f];g&&(g="prop"===f?a.extend({writeable:!0},g):a.extend({},
g,{writeable:!0}),x[f](c,d,g),"*"!=c&&b.cfg.extendNative&&"prop"==f&&g.value&&a.isFunction(g.value)&&l(c,d,g),e[f]=g)});e.initAttr&&o.content(c,d);return e},defineNodeNameProperties:function(a,d,c,f){for(var g in d)!f&&d[g].initAttr&&o.createTmpCache(a),c&&(d[g][c]?b.log("override: "+a+"["+g+"] for "+c):(d[g][c]={},["value","set","get"].forEach(function(a){a in d[g]&&(d[g][c][a]=d[g][a],delete d[g][a])}))),d[g]=b.defineNodeNameProperty(a,g,d[g]);f||o.flushTmpCache();return d},createElement:function(c,
d,e){var f;a.isFunction(d)&&(d={after:d});o.createTmpCache(c);d.before&&o.createElement(c,d.before);e&&(f=b.defineNodeNameProperties(c,e,!1,!0));d.after&&o.createElement(c,d.after);o.flushTmpCache();return f},onNodeNamesPropertyModify:function(b,d,e,f){"string"==typeof b&&(b=b.split(c));a.isFunction(e)&&(e={set:e});b.forEach(function(a){r[a]||(r[a]={});"string"==typeof d&&(d=d.split(c));e.initAttr&&o.createTmpCache(a);d.forEach(function(b){r[a][b]||(r[a][b]=[],j[b]=!0);if(e.set){if(f)e.set.only=f;
r[a][b].push(e.set)}e.initAttr&&o.content(a,b)});o.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,d,e){e||(e={});if(a.isFunction(e))e.set=e;b.defineNodeNamesProperty(c,d,{attr:{set:function(a){this.setAttribute(d,a);e.set&&e.set.call(this,!0)},get:function(){return null==this.getAttribute(d)?f:d}},removeAttr:{value:function(){this.removeAttribute(d);e.set&&e.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:e.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){if(c===
f)return c=(a.attributes[b]||{}).value,null==c?f:c;"boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c)}},activeLang:function(){var c=[],d={},e,f,h=/:\/\/|^\.*\//,k=function(c,d,e){return d&&e&&-1!==a.inArray(d,e.availabeLangs||[])?(c.loading=!0,e=e.langSrc,h.test(e)||(e=b.cfg.basePath+e),b.loader.loadScript(e+d+".js",function(){c.langObj[d]?(c.loading=!1,l(c,!0)):a(function(){c.langObj[d]&&l(c,!0);c.loading=!1})}),!0):!1},j=function(a){d[a]&&d[a].forEach(function(a){a.callback()})},
l=function(a,b){if(a.activeLang!=e&&a.activeLang!==f){var c=g[a.module].options;if(a.langObj[e]||f&&a.langObj[f])a.activeLang=e,a.callback(a.langObj[e]||a.langObj[f],e),j(a.module);else if(!b&&!k(a,e,c)&&!k(a,f,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],e),j(a.module)}};return function(b){if("string"==typeof b&&b!==e)e=b,f=e.split("-")[0],e==f&&(f=!1),a.each(c,function(a,b){l(b)});else if("object"==typeof b)if(b.register)d[b.register]||(d[b.register]=[]),d[b.register].push(b),
b.callback();else{if(!b.activeLang)b.activeLang="";c.push(b);l(b)}return e}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,d){b[a]=function(a,f,g,i){"string"==typeof a&&(a=a.split(c));var h={};a.forEach(function(a){h[a]=b[d](a,f,g,i)});return h}});b.isReady("webshimLocalization",!0)});
(function(a,b){var h=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<h)&&(!a.browser.msie||12>h&&7<h)){var m={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},f=function(a,b){a.getAttribute("role")||a.setAttribute("role",b)};a.webshims.addReady(function(g,c){a.each(m,function(b,h){for(var j=a(b,g).add(c.filter(b)),m=0,n=j.length;m<n;m++)f(j[m],h)});if(g===b){var h=b.getElementsByTagName("header")[0],j=b.getElementsByTagName("footer"),p=j.length;
h&&!a(h).closest("section, article")[0]&&f(h,"banner");p&&(h=j[p-1],a(h).closest("section, article")[0]||f(h,"contentinfo"))}})}})(jQuery,document);