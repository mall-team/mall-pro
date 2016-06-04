define("common/copyright/index",function(require,exports,module){function render(){if(!($("#copyright").length>0||$(".copyright").length>0)){var t=$body.attr("no-copyright");1!=t&&($body.append($(_tmpl())),$copyright=$("#copyright"),reset())}}function reset(){var t=$body.height(),o=$win.height();o>t+HEI?($body.css({"min-height":o+"px",position:"relative"}),$copyright.css({position:"absolute",width:"100%",bottom:$body.css("padding-bottom")})):$copyright.css({position:"static",width:"auto"})}var $copyright,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="copyright">大泽商城&nbsp;提供技术支持</div>';return __p},HEI=64,$body=$(document.body),$win=$(window);module.exports={render:render,reset:reset}});
;define("common/util/index",function(n,t,a){function r(n,t){return n+Math.ceil(Math.random()*t)}function e(n,t){return n+Math.floor(Math.random()*t)}function i(n,t){var a=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),t=t||location.search,r=t.substr(1).match(a);return t&&r?r[2]:""}function o(){function n(n){for(var a in n)if(void 0!==t.style[a])return n[a]}var t=document.createElement("trans"),a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},r={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return{transEvtName:n(a),aniEvtName:n(r)}}function s(n){return"object"==typeof phpdata?void(n&&n(phpdata)):void setTimeout(function(){s(n)},200)}var u={};!function(n){function t(n){if(n=i(n.replace(/ /g,"")),15==n.length)return e(n);if(18==n.length){var t=n.split("");return r(n)&&a(t)?!0:!1}return!1}function a(n){var t=0;"x"==n[17].toLowerCase()&&(n[17]=10);for(var a=0;17>a;a++)t+=o[a]*n[a];return valCodePosition=t%11,n[17]==s[valCodePosition]?!0:!1}function r(n){var t=n.substring(6,10),a=n.substring(10,12),r=n.substring(12,14),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getFullYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function e(n){var t=n.substring(6,8),a=n.substring(8,10),r=n.substring(10,12),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function i(n){return n.replace(/(^\s*)|(\s*$)/g,"")}var o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],s=[1,0,10,9,8,7,6,5,4,3,2];n.valid=t}(u),a.exports={getParam:i,random:r,random2:e,getAniEndName:o,phpdataReady:s,IdCard:u}});
;define("common/alert/alert",function(require,exports,module){function show(e,t,o,n){$alert?$alert.css("display","block"):($(document.body).append(_tmpl()),$alert=$("#J-alert"),$contentWrap=$("#J-alert-content-wrap"),$content=$("#J-alert-content"),$mask=$("#J-alert-mask"),$close=$("#J-alert-close"),$close.on("click",function(e){hide(),e.preventDefault(),n&&n()})),o&&(addClsName=o,$contentWrap.addClass(o)),winScrollY=window.scrollY,htmlStyle=$html.attr("style"),bodyStyle=$body.attr("style"),$html.attr("style","position: relative; overflow: hidden; height: "+winHei+"px;"),$body.attr("style","overflow: hidden; height: "+winHei+"px; padding: 0px;"),"string"!=typeof e||/<.*>/.test(e)?$content.html($(e)):(/close=0/.test(e)&&(t=!1),$content.html($(_createIframe(e)))),t===!0||void 0===t?$close.css("display","block"):$close.css("display","none"),_resize(),$win.on("resize",_resize)}function hide(){addClsName&&($contentWrap.removeClass(addClsName),addClsName=void 0),$alert.css("display","none"),$win.off("resize",_resize),$html.attr("style",htmlStyle),$body.attr("style",bodyStyle),window.scroll(0,winScrollY)}function _createIframe(e){var t=document.createElement("iframe");return t.src=e,t.onload=function(){_hasCloseByUrl(t.contentWindow.location.search),t.style.height=t.contentWindow.document.body.offsetHeight+"px",_resize()},t}function _resize(){var e=$win.height(),t=$contentWrap.height();$contentWrap.css("margin-top",(e-t)/2)}function _hasCloseByUrl(e){var t=Util.getParam("close",e);"0"===t?$close.css("display","none"):$close.css("display","block")}var $alert,$mask,$contentWrap,$content,$close,bodyStyle,htmlStyle,addClsName,$=require("zepto"),Util=require("common/util/index"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="J-alert" class="alert">\r\n	<div id="J-alert-mask" class="mask"></div>\r\n	<div id="J-alert-content-wrap" class="alert-content">\r\n		<i id="J-alert-close" class="icon-close"></i>\r\n		<div id="J-alert-content"></div>\r\n	</div>\r\n</div>';return __p},$win=$(window),$html=$("html"),$body=$(document.body),winHei=$win.height(),winScrollY=0;module.exports={show:show,hide:hide}});
;define("common/bubble/bubble",function(require,exports,module){function show(e,t){$b||($(document.body).append(_tmpl),$b=$("#J-bubble"),$content=$b.find(".bubble-content")),$content.text(e),$b.css("display","block").animate({opacity:1}),timer&&clearTimeout(timer),timer=setTimeout(function(){hide(),timer=null},t||2e3)}function hide(){$b.animate({opacity:0},function(){$b.css("display","none")})}var timer,$b,$content,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="J-bubble" class="bubble">\r\n	<div class="mask"></div>\r\n	<div class="bubble-content"></div>\r\n</div>';return __p}();module.exports={show:show,hide:hide}});
;define("z-person/index",function(e){var n=e("zepto"),o=e("common/alert/alert"),r=e("common/bubble/bubble");window.Bubble=r;var t=n("#J-register");t.on("click",function(e){var n=t.attr("alert");n&&o.show(n),e.preventDefault()})});