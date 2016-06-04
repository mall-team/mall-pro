define("common/copyright/index",function(require,exports,module){function render(){if(!($("#copyright").length>0||$(".copyright").length>0)){var t=$body.attr("no-copyright");1!=t&&($body.append($(_tmpl())),$copyright=$("#copyright"),reset())}}function reset(){var t=$body.height(),o=$win.height();o>t+HEI?($body.css({"min-height":o+"px",position:"relative"}),$copyright.css({position:"absolute",width:"100%",bottom:$body.css("padding-bottom")})):$copyright.css({position:"static",width:"auto"})}var $copyright,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="copyright">大泽商城&nbsp;提供技术支持</div>';return __p},HEI=64,$body=$(document.body),$win=$(window);module.exports={render:render,reset:reset}});
;define("common/timer/timer",function(t,e,r){function i(t,e){this.$el=a(t),this.format=e;var r=+this.$el.attr("timer-end"),i="object"==typeof phpdata?phpdata.serverTime:null,o=+this.$el.attr("timer");r&&i?this.lastTime=r-i:(o||0==o)&&(this.lastTime=this.oTime=o),this.day=0,this.hour=0,this.min=0,this.sec=0,this._timer=null}var a=t("zepto");i.prototype={start:function(){var t=this;if(t.lastTime||0==t.lastTime)return t._walk(),t},end:function(t){return this._endBack=t,this},_walk:function(){var t=this;return t.$el.html(t._format(t.lastTime<0?0:t.lastTime)),t.lastTime<=0?void(this.oTime>0&&t._endBack&&t._endBack()):(t.lastTime--,void(t._timer=setTimeout(function(){t._walk()},1e3)))},_format:function(t){var e=this,r=parseInt(t/3600,10),i=parseInt((t-3600*r)/60),a=t-3600*r-60*i,o=parseInt(r/24);return r-=24*o,e.day=o,e.hour=r,e.min=i,e.sec=a,"function"==typeof e.format?e.format(t):"single"==e.format?o>0?e._addZero(o)+"天":r>0?e._addZero(r)+"小时":i>0?e._addZero(i)+"分钟":a>0?e._addZero(a)+"秒":"0秒":"time"==e.format?e._addZero(24*o+r)+":"+e._addZero(i)+":"+e._addZero(a):(o>0?e._addZero(o)+"天":"")+e._addZero(r)+"时"+e._addZero(i)+"分"+e._addZero(a)+"秒"},_addZero:function(t){return t.toString().length<2?"0"+t:t}},i.addZero=function(t){return t.toString().length<2?"0"+t:t},r.exports=i});
;define("common/util/index",function(n,t,a){function r(n,t){return n+Math.ceil(Math.random()*t)}function e(n,t){return n+Math.floor(Math.random()*t)}function i(n,t){var a=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),t=t||location.search,r=t.substr(1).match(a);return t&&r?r[2]:""}function o(){function n(n){for(var a in n)if(void 0!==t.style[a])return n[a]}var t=document.createElement("trans"),a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},r={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return{transEvtName:n(a),aniEvtName:n(r)}}function s(n){return"object"==typeof phpdata?void(n&&n(phpdata)):void setTimeout(function(){s(n)},200)}var u={};!function(n){function t(n){if(n=i(n.replace(/ /g,"")),15==n.length)return e(n);if(18==n.length){var t=n.split("");return r(n)&&a(t)?!0:!1}return!1}function a(n){var t=0;"x"==n[17].toLowerCase()&&(n[17]=10);for(var a=0;17>a;a++)t+=o[a]*n[a];return valCodePosition=t%11,n[17]==s[valCodePosition]?!0:!1}function r(n){var t=n.substring(6,10),a=n.substring(10,12),r=n.substring(12,14),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getFullYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function e(n){var t=n.substring(6,8),a=n.substring(8,10),r=n.substring(10,12),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function i(n){return n.replace(/(^\s*)|(\s*$)/g,"")}var o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],s=[1,0,10,9,8,7,6,5,4,3,2];n.valid=t}(u),a.exports={getParam:i,random:r,random2:e,getAniEndName:o,phpdataReady:s,IdCard:u}});
;define("crab/index",function(n){var e=n("zepto"),t=n("common/timer/timer"),i=n("common/util/index");i.phpdataReady(function(){e(".J-timer").each(function(n,e){new t(e,"time").start().end(function(){})})})});