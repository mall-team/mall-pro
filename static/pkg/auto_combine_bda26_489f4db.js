define("common/copyright/index",function(require,exports,module){function render(){if(!($("#copyright").length>0||$(".copyright").length>0)){var t=$body.attr("no-copyright");1!=t&&($body.append($(_tmpl())),$copyright=$("#copyright"),reset())}}function reset(){var t=$body.height(),o=$win.height();o>t+HEI?($body.css({"min-height":o+"px",position:"relative"}),$copyright.css({position:"absolute",width:"100%",bottom:$body.css("padding-bottom")})):$copyright.css({position:"static",width:"auto"})}var $copyright,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="copyright">大泽商城&nbsp;提供技术支持</div>';return __p},HEI=64,$body=$(document.body),$win=$(window);module.exports={render:render,reset:reset}});
;define("common/guide/guide",function(require,exports,module){function Guide(t,i,e){this.$btn=$(t),this.type=i,this.text=e,this._init()}var $=require("zepto");Guide.prototype={_tmpl:function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div id="J-guide" class="guide '+(null==(__t=type?type:"")?"":__t)+'"><i class="icon-guide">'+(null==(__t=text)?"":__t)+"</i></div>";return __p},_init:function(){var t=this;t.$btn.on("click",function(){t.show()})},show:function(){var t=this;$(document.body).append(t._tmpl({type:t.type,text:t.text})),$("#J-guide").on("click",function(){t._close()})},_close:function(){$("#J-guide").off("click").remove()}},module.exports=Guide});
;define("common/util/index",function(n,t,a){function r(n,t){return n+Math.ceil(Math.random()*t)}function e(n,t){return n+Math.floor(Math.random()*t)}function i(n,t){var a=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),t=t||location.search,r=t.substr(1).match(a);return t&&r?r[2]:""}function o(){function n(n){for(var a in n)if(void 0!==t.style[a])return n[a]}var t=document.createElement("trans"),a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},r={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return{transEvtName:n(a),aniEvtName:n(r)}}function s(n){return"object"==typeof phpdata?void(n&&n(phpdata)):void setTimeout(function(){s(n)},200)}var u={};!function(n){function t(n){if(n=i(n.replace(/ /g,"")),15==n.length)return e(n);if(18==n.length){var t=n.split("");return r(n)&&a(t)?!0:!1}return!1}function a(n){var t=0;"x"==n[17].toLowerCase()&&(n[17]=10);for(var a=0;17>a;a++)t+=o[a]*n[a];return valCodePosition=t%11,n[17]==s[valCodePosition]?!0:!1}function r(n){var t=n.substring(6,10),a=n.substring(10,12),r=n.substring(12,14),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getFullYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function e(n){var t=n.substring(6,8),a=n.substring(8,10),r=n.substring(10,12),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function i(n){return n.replace(/(^\s*)|(\s*$)/g,"")}var o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],s=[1,0,10,9,8,7,6,5,4,3,2];n.valid=t}(u),a.exports={getParam:i,random:r,random2:e,getAniEndName:o,phpdataReady:s,IdCard:u}});
;define("shop-invite/index",function(i){function e(){return"app"==c.getParam("tjz_from")?void t("#J-invite-friend").on("click",function(){taojinzi.share(JSON.stringify({title:title,link:link,imgUrl:imgUrl,desc:desc,objectType:objectType,objectId:objectId,type:c.getParam("type")||"1980"}))}):(new o("#J-invite-friend"),void n())}function n(){}var t=i("zepto"),o=i("common/guide/guide"),c=i("common/util/index");e()});