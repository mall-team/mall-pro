define("common/copyright/index",function(require,exports,module){function render(){if(!($("#copyright").length>0||$(".copyright").length>0)){var t=$body.attr("no-copyright");1!=t&&($body.append($(_tmpl())),$copyright=$("#copyright"),reset())}}function reset(){var t=$body.height(),o=$win.height();o>t+HEI?($body.css({"min-height":o+"px",position:"relative"}),$copyright.css({position:"absolute",width:"100%",bottom:$body.css("padding-bottom")})):$copyright.css({position:"static",width:"auto"})}var $copyright,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="copyright">大泽商城&nbsp;提供技术支持</div>';return __p},HEI=64,$body=$(document.body),$win=$(window);module.exports={render:render,reset:reset}});
;define("common/swipe/swipe",function(n,t,e){function i(n,t){"use strict";function e(){m=x.children,w=m.length,m.length<2&&(t.continuous=!1),h.transitions&&t.continuous&&m.length<3&&(x.appendChild(m[0].cloneNode(!0)),x.appendChild(x.children[1].cloneNode(!0)),m=x.children),E=new Array(m.length),p=n.getBoundingClientRect().width||n.offsetWidth,x.style.width=m.length*p+"px";for(var e=m.length;e--;){var i=m[e];i.style.width=p+"px",i.setAttribute("data-index",e),h.transitions&&(i.style.left=e*-p+"px",a(e,b>e?-p:e>b?p:0,0))}t.continuous&&h.transitions&&(a(s(b-1),-p,0),a(s(b+1),p,0)),h.transitions||(x.style.left=b*-p+"px"),n.style.visibility="visible"}function i(){t.continuous?r(b-1):b&&r(b-1)}function o(){t.continuous?r(b+1):b<m.length-1&&r(b+1)}function s(n){return(m.length+n%m.length)%m.length}function r(n,e){if(b!=n){if(h.transitions){var i=Math.abs(b-n)/(b-n);if(t.continuous){var o=i;i=-E[s(n)]/p,i!==o&&(n=-i*m.length+n)}for(var r=Math.abs(b-n)-1;r--;)a(s((n>b?n:b)-r-1),p*i,0);n=s(n),a(b,p*i,e||g),a(n,0,e||g),t.continuous&&a(s(n-i),-(p*i),0)}else n=s(n),c(b*-p,n*-p,e||g);b=n,f(t.callback&&t.callback(b,m[b]))}}function a(n,t,e){u(n,t,e),E[n]=t}function u(n,t,e){var i=m[n],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=e+"ms",o.webkitTransform="translate("+t+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+t+"px)")}function c(n,e,i){if(!i)return void(x.style.left=e+"px");var o=+new Date,s=setInterval(function(){var r=+new Date-o;return r>i?(x.style.left=e+"px",L&&d(),t.transitionEnd&&t.transitionEnd.call(event,b,m[b]),void clearInterval(s)):void(x.style.left=(e-n)*(Math.floor(r/i*100)/100)+n+"px")},4)}function d(){T=setTimeout(o,L)}function l(){L=0,clearTimeout(T)}var v=function(){},f=function(n){setTimeout(n||v,0)},h={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(n){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var e in t)if(void 0!==n.style[t[e]])return!0;return!1}(document.createElement("swipe"))};if(n){var m,E,p,w,x=n.children[0];t=t||{};var b=parseInt(t.startSlide,10)||0,g=t.speed||300;t.continuous=void 0!==t.continuous?t.continuous:!0;var T,y,L=t.auto||0,k={},D={},M={handleEvent:function(n){switch(n.type){case"touchstart":this.start(n);break;case"touchmove":this.move(n);break;case"touchend":f(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":f(this.transitionEnd(n));break;case"resize":f(e.call())}t.stopPropagation&&n.stopPropagation()},start:function(n){var t=n.touches[0];k={x:t.pageX,y:t.pageY,time:+new Date},y=void 0,D={},x.addEventListener("touchmove",this,!1),x.addEventListener("touchend",this,!1)},move:function(n){if(!(n.touches.length>1||n.scale&&1!==n.scale)){t.disableScroll&&n.preventDefault();var e=n.touches[0];D={x:e.pageX-k.x,y:e.pageY-k.y},"undefined"==typeof y&&(y=!!(y||Math.abs(D.x)<Math.abs(D.y))),y||(n.preventDefault(),l(),t.continuous?(u(s(b-1),D.x+E[s(b-1)],0),u(b,D.x+E[b],0),u(s(b+1),D.x+E[s(b+1)],0)):(D.x=D.x/(!b&&D.x>0||b==m.length-1&&D.x<0?Math.abs(D.x)/p+1:1),u(b-1,D.x+E[b-1],0),u(b,D.x+E[b],0),u(b+1,D.x+E[b+1],0)))}},end:function(){var n=+new Date-k.time,e=Number(n)<250&&Math.abs(D.x)>20||Math.abs(D.x)>p/2,i=!b&&D.x>0||b==m.length-1&&D.x<0;t.continuous&&(i=!1);var o=D.x<0;y||(e&&!i?(o?(t.continuous?(a(s(b-1),-p,0),a(s(b+2),p,0)):a(b-1,-p,0),a(b,E[b]-p,g),a(s(b+1),E[s(b+1)]-p,g),b=s(b+1)):(t.continuous?(a(s(b+1),p,0),a(s(b-2),-p,0)):a(b+1,p,0),a(b,E[b]+p,g),a(s(b-1),E[s(b-1)]+p,g),b=s(b-1)),t.callback&&t.callback(b,m[b])):t.continuous?(a(s(b-1),-p,g),a(b,0,g),a(s(b+1),p,g)):(a(b-1,-p,g),a(b,0,g),a(b+1,p,g))),x.removeEventListener("touchmove",M,!1),x.removeEventListener("touchend",M,!1)},transitionEnd:function(n){parseInt(n.target.getAttribute("data-index"),10)==b&&(L&&d(),t.transitionEnd&&t.transitionEnd.call(n,b,m[b]))}};return e(),L&&d(),h.addEventListener?(h.touch&&x.addEventListener("touchstart",M,!1),h.transitions&&(x.addEventListener("webkitTransitionEnd",M,!1),x.addEventListener("msTransitionEnd",M,!1),x.addEventListener("oTransitionEnd",M,!1),x.addEventListener("otransitionend",M,!1),x.addEventListener("transitionend",M,!1)),window.addEventListener("resize",M,!1)):window.onresize=function(){e()},{setup:function(){e()},slide:function(n,t){l(),r(n,t)},prev:function(){l(),i()},next:function(){l(),o()},getPos:function(){return b},getNumSlides:function(){return w},kill:function(){l(),x.style.width="auto",x.style.left=0;for(var n=m.length;n--;){var t=m[n];t.style.width="100%",t.style.left=0,h.transitions&&u(n,0,0)}h.addEventListener?(x.removeEventListener("touchstart",M,!1),x.removeEventListener("webkitTransitionEnd",M,!1),x.removeEventListener("msTransitionEnd",M,!1),x.removeEventListener("oTransitionEnd",M,!1),x.removeEventListener("otransitionend",M,!1),x.removeEventListener("transitionend",M,!1),window.removeEventListener("resize",M,!1)):window.onresize=null}}}}e.exports=i});
;define("common/swiper/index",function(i,e,n){function t(i){this.$container="string"==typeof i.container?a("#"+i.container):i.container,this.$pager="string"==typeof i.container?a("#"+i.pager):i.pager,this.swipeOptions=i.swipeOptions,this._init()}var a=i("zepto"),s=i("common/swipe/swipe");t.prototype={_init:function(){this._initSwipe()},_initSwipe:function(){var i=this,e=a.extend({startSlide:0,auto:2500,continuous:!0,disableScroll:!1,stopPropagation:!0,callback:function(){},transitionEnd:function(e){i._changePager(e)}},i.swipeOptions);i.swipe=s(i.$container[0],e),i._initPager(i.swipe.getNumSlides()),i._changePager(e.startSlide||0)},_initPager:function(i){var e=this,n=e.$pager.find("span"),t=1,a=e.sLen=i;for(n.html('<a href="javascript:;" class="sel"></a>'),t;a>t;t++)n.append('<a href="javascript:;" class="nosel"></a>')},_changePager:function(i){var e=this,n=(e.$pager,e.$pager.find("span")),t=e.sLen;if(n.children("a").attr("class","nosel"),2==t&&i>1)switch(i){case 2:n.children("a").eq(0).attr("class","sel");break;case 3:n.children("a").eq(1).attr("class","sel")}else n.children("a").eq(i).attr("class","sel")}},n.exports=t});
;define("common/bubble/bubble",function(require,exports,module){function show(e,t){$b||($(document.body).append(_tmpl),$b=$("#J-bubble"),$content=$b.find(".bubble-content")),$content.text(e),$b.css("display","block").animate({opacity:1}),timer&&clearTimeout(timer),timer=setTimeout(function(){hide(),timer=null},t||2e3)}function hide(){$b.animate({opacity:0},function(){$b.css("display","none")})}var timer,$b,$content,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="J-bubble" class="bubble">\r\n	<div class="mask"></div>\r\n	<div class="bubble-content"></div>\r\n</div>';return __p}();module.exports={show:show,hide:hide}});
;define("common/util/index",function(n,t,a){function r(n,t){return n+Math.ceil(Math.random()*t)}function e(n,t){return n+Math.floor(Math.random()*t)}function i(n,t){var a=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),t=t||location.search,r=t.substr(1).match(a);return t&&r?r[2]:""}function o(){function n(n){for(var a in n)if(void 0!==t.style[a])return n[a]}var t=document.createElement("trans"),a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},r={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return{transEvtName:n(a),aniEvtName:n(r)}}function s(n){return"object"==typeof phpdata?void(n&&n(phpdata)):void setTimeout(function(){s(n)},200)}var u={};!function(n){function t(n){if(n=i(n.replace(/ /g,"")),15==n.length)return e(n);if(18==n.length){var t=n.split("");return r(n)&&a(t)?!0:!1}return!1}function a(n){var t=0;"x"==n[17].toLowerCase()&&(n[17]=10);for(var a=0;17>a;a++)t+=o[a]*n[a];return valCodePosition=t%11,n[17]==s[valCodePosition]?!0:!1}function r(n){var t=n.substring(6,10),a=n.substring(10,12),r=n.substring(12,14),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getFullYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function e(n){var t=n.substring(6,8),a=n.substring(8,10),r=n.substring(10,12),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function i(n){return n.replace(/(^\s*)|(\s*$)/g,"")}var o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],s=[1,0,10,9,8,7,6,5,4,3,2];n.valid=t}(u),a.exports={getParam:i,random:r,random2:e,getAniEndName:o,phpdataReady:s,IdCard:u}});
;define("common/alert/alert",function(require,exports,module){function show(e,t,o,n){$alert?$alert.css("display","block"):($(document.body).append(_tmpl()),$alert=$("#J-alert"),$contentWrap=$("#J-alert-content-wrap"),$content=$("#J-alert-content"),$mask=$("#J-alert-mask"),$close=$("#J-alert-close"),$close.on("click",function(e){hide(),e.preventDefault(),n&&n()})),o&&(addClsName=o,$contentWrap.addClass(o)),winScrollY=window.scrollY,htmlStyle=$html.attr("style"),bodyStyle=$body.attr("style"),$html.attr("style","position: relative; overflow: hidden; height: "+winHei+"px;"),$body.attr("style","overflow: hidden; height: "+winHei+"px; padding: 0px;"),"string"!=typeof e||/<.*>/.test(e)?$content.html($(e)):(/close=0/.test(e)&&(t=!1),$content.html($(_createIframe(e)))),t===!0||void 0===t?$close.css("display","block"):$close.css("display","none"),_resize(),$win.on("resize",_resize)}function hide(){addClsName&&($contentWrap.removeClass(addClsName),addClsName=void 0),$alert.css("display","none"),$win.off("resize",_resize),$html.attr("style",htmlStyle),$body.attr("style",bodyStyle),window.scroll(0,winScrollY)}function _createIframe(e){var t=document.createElement("iframe");return t.src=e,t.onload=function(){_hasCloseByUrl(t.contentWindow.location.search),t.style.height=t.contentWindow.document.body.offsetHeight+"px",_resize()},t}function _resize(){var e=$win.height(),t=$contentWrap.height();$contentWrap.css("margin-top",(e-t)/2)}function _hasCloseByUrl(e){var t=Util.getParam("close",e);"0"===t?$close.css("display","none"):$close.css("display","block")}var $alert,$mask,$contentWrap,$content,$close,bodyStyle,htmlStyle,addClsName,$=require("zepto"),Util=require("common/util/index"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="J-alert" class="alert">\r\n	<div id="J-alert-mask" class="mask"></div>\r\n	<div id="J-alert-content-wrap" class="alert-content">\r\n		<i id="J-alert-close" class="icon-close"></i>\r\n		<div id="J-alert-content"></div>\r\n	</div>\r\n</div>';return __p},$win=$(window),$html=$("html"),$body=$(document.body),winHei=$win.height(),winScrollY=0;module.exports={show:show,hide:hide}});
;define("common/confirm-service/index",function(require,exports,module){function validService(e,n,r,o,t){Ajax=r,recommend="",recommendLog={},(new Ajax).send({url:"/WeChat/Band/checkUserRecommend",type:"post",data:{phone:e,code:n}},function(n){var r=n.type;switch(recommendLog.type=r,recommendLog.phone=e,r){case 0:o&&o();break;case 1:selServicePeople(n,function(){recommendLog.userList=n.user,recommendLog.selRecommend=recommend,recordLog(),o&&o(recommend)});break;case 2:showPhoneService(function(){10==recommendLog.type||(recommendLog.selRecommend=recommend),recordLog(),o&&o(recommend)})}},function(){t&&t()})}function recordLog(){(new Ajax).send({url:"/User/Register/selectRecommendLog",type:"post",data:{data:JSON.stringify(recommendLog)}},function(e){console.log(e)})}function selServicePeople(e,n){var r;Alert.show(_selServiceTmpl({userList:e.user}),!1,"service-alert"),r=$(".service-alert-content"),r.find(".J-sel-btn").on("click",function(){Alert.hide(),recommend=$(this).attr("recommend"),n&&n()})}function showPhoneService(e){var n,r,o;Alert.show(_phoneServiceTmpl(),!1,"service-alert"),n=$(".service-alert-content"),r=n.find(".J-phone"),o=n.find(".J-submit"),r.get(0).focus(),r.on("input",function(){var e=r.val().trim();/^1[3-8]\d{9}$/.test(e)?getService(e,function(e){recommendLog.userList=[e],o.removeClass("disabled"),recommend=e.recommend,n.find(".userinfo").html('<div class="head-img" style="background-image:url('+e.headImg+')"></div><div class="user-name">'+e.userName+"</div>")},function(e){o.addClass("disabled"),n.find(".userinfo").html('<p class="err">'+e.msg+"</p>")}):(o.addClass("disabled"),n.find(".userinfo").html(""))}),o.on("click",function(){r.val();return o.hasClass("disabled")?!1:(Alert.hide(),void(e&&e()))}),n.find(".J-self-link").on("click",function(){recommend="",Alert.hide(),recommendLog.type=10,e&&e()})}function getService(e,n,r){(new Ajax).send({url:"/WeChat/Band/getRecommendPhone",data:{phone:e},selfErrorBack:!0},function(e){n&&n(e)},function(e){r&&r(e)})}var Ajax,recommend,recommendLog,$=require("zepto"),Alert=(require("common/bubble/bubble"),require("common/alert/alert")),_selServiceTmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div class="service-alert-content">\r\n	',__p+=2==userList.length?'\r\n	<p class="title">请选择一位朋友作为您的推荐人(<b>2选1</b>)</p>\r\n	':'\r\n	<p class="title">请确认您的推荐人</p>\r\n	',__p+='\r\n	<ul class="service-list">\r\n		',$.each(userList,function(e,n){__p+='\r\n		<li>\r\n			<div class="img-wrap headimg" style="background-image:url('+(null==(__t=n.headImg)?"":__t)+')"></div>\r\n			<p class="user-name">'+(null==(__t=n.userName)?"":__t)+'</p>\r\n			<p class="phone-label">'+(null==(__t=n.phone)?"":__t)+'</p>\r\n			<a class="J-sel-btn btnl" recommend="'+(null==(__t=n.recommend)?"":__t)+'">就Ta了</a>\r\n		</li>\r\n		'}),__p+="\r\n	</ul>\r\n</div>";return __p},_phoneServiceTmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div class="service-alert-content">\r\n	<p class="title">请填写您的推荐人</p>\r\n	<div class="input-wrap phone-wrap">\r\n        <label>手机号</label>\r\n        <input class="J-phone" type="tel" name="phone" placeholder="请输入推荐人手机号码" autocomplete="off">\r\n    </div>\r\n    <div class="userinfo"></div>\r\n    <div class="btn-content">\r\n    	<button type="button" class="J-submit btnl btnl-wx disabled">确认</button>\r\n    </div>\r\n    <div class="link-wrap">\r\n        <a class="J-self-link link">我自己逛来的</a>\r\n    </div>\r\n</div>';return __p};module.exports={start:validService}});
;define("common/config/index",function($,n,o){o.exports={cutArr:["华丽的一刀！砍掉了$0元！","好狠的一刀！砍掉了$0元！","帅气的一刀！砍掉了$0元！","猥琐的一刀！砍掉了$0元！","霸气的一刀！砍掉了$0元！","精彩的一刀！砍掉了$0元！","犀利的一刀！砍掉了$0元！","轻轻的一刀！砍掉了$0元！","温柔的一刀！砍掉了$0元！","潇洒的一刀！砍掉了$0元！","漂亮的一刀！砍掉了$0元！"]}});
;define("common/pop/index",function(require,exports,module){function _init(){$pop||($(document.body).append(_tmpl()),$pop=$("#J-pop"),$mask=$pop.find(".mask"),$container=$pop.find(".container"),$title=$pop.find(".title"),$content=$pop.find(".content"),$close=$pop.find(".close")),$mask.add($close).on("click",function(){curOptions.manualClose!==!1&&hide()})}function show(o){curOptions=o,winScrollY=o.autoY?window.scrollY:0,$content.html($(o.content)),$("input").on("focus",inputFocus),o.hasClose===!1?$close.css("display","none"):$close.css("display","block"),o.title?$title.text(o.title).css("display","block"):$title.css("display","none"),o.scroll?$pop.css("position","fixed"):($pop.css("position","absolute"),$("html").attr("style","position: relative; overflow: hidden; height: "+winHei+"px;"),$("body").attr("style","overflow: hidden; height: "+winHei+"px; padding: 0px;")),$pop.css("display","block"),$container.animate({translateY:"0"},500,"ease-out")}function hide(o){$container.animate({translateY:"100%"},500,"ease-in",function(){$("html").attr("style",""),$("body").attr("style",""),$pop.css("display","none"),!curOptions.scroll&&winScrollY&&window.scroll(0,winScrollY),o&&o()})}function inputFocus(){function o(){$(window).off("resize",o)}$(this);$(window).on("resize",o)}var curOptions,$pop,$mask,$container,$content,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="J-pop" class="pop">\r\n	<div class="mask"></div>\r\n	<div class="container">\r\n		<div class="close"></div>\r\n		<div class="title"></div>\r\n		<div class="content"></div>\r\n	</div>\r\n</div>';return __p},winHei=$(window).height(),winScrollY=0;_init(),module.exports={show:show,hide:hide}});
;define("common/login-pop/index",function(require,exports,module){function show(n){Pop.show({content:_tmpl(),hasClose:!1,manualClose:n.manualClose}),init(n)}function init(n){options=n,Ajax=n.Ajax,$yzmBt=$("#J-yzm-bt"),$submitBt=$("#J-phone-ok"),$phone=$("#J-phone"),$code=$("#J-code"),$yzmBt.on("click",getCode),$submitBt.on("click",login)}function getCode(){function n(){setTimeout(function(){return o--,$yzmBt.text(o),0>=o?(disabled=!1,void $yzmBt.text("获取验证码").removeClass("disabled")):void n()},1e3)}if(disabled)return!1;var e=$phone.val(),o=60;return(new Ajax).send({url:"/WeChat/Band/sendMsg",data:{phone:e}},function(){disabled=!0,$yzmBt.text(o).addClass("disabled"),n()}),!1}function login(){function n(){(new Ajax).send({url:"/WeChat/Band/bandAccount",type:"post",data:e},function(){loagining=!1,Pop.hide(),options.loginSuc&&options.loginSuc()},function(){loagining=!1})}var e,o=$phone.val(),t=$code.val();return o?/^\d{11}$/.test(o)?t?loagining?!1:(e={phone:o,code:t},"object"==typeof phpdata&&$.each(["channelType","channelId"],function(n,o){phpdata[o]&&(e[o]=phpdata[o])}),loagining=!0,options.noSelRecommend?n():ConfirmService.start(o,t,Ajax,function(o){o&&(e.recommend=o),n()},function(){loagining=!1}),!1):(Bubble.show("请输入验证码"),!1):(Bubble.show("请输入正确的手机号码"),!1):(Bubble.show("请输入您的手机号码"),!1)}var Ajax,options,$yzmBt,$submitBt,$phone,$code,$=require("zepto"),Pop=require("common/pop/index"),Bubble=require("common/bubble/bubble"),ConfirmService=(require("common/alert/alert"),require("common/confirm-service/index")),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<section class="phone-panel">\r\n	<div class="input-wrap">\r\n		<label>手机号</label>\r\n		<input id="J-phone" type="tel" placeholder="请输入您的手机号码" />\r\n	</div>\r\n	<div class="yzm">\r\n		<div class="input-wrap">\r\n			<label>验证码</label>\r\n			<input id="J-code" type="tel" placeholder="输入验证码" />\r\n		</div>\r\n		<button style="vertical-align: top;" id="J-yzm-bt" type="button">获取验证码</button>\r\n	</div>\r\n	<div>\r\n		<button id="J-phone-ok" class="btnl btnl-wx">确认</button>\r\n	</div>\r\n</section>';return __p},disabled=!1,loagining=!1;module.exports={show:show,init:init}});
;define("common/ajax/index",function(o,e,t){function a(){}var n=o("zepto"),r=o("common/bubble/bubble"),i=o("common/config/index"),u=o("common/login-pop/index");a.prototype={send:function(o,e,t){var c=this;o||(o={}),"dev"==i.mod?(o.dataType="jsonp",o.type="get",o.url=i.host+o.url):o.dataType=o.dataType||"json",o.url+=o.url.match(/\?[^=]+=.*$/)?"&isAjax=1":"?isAjax=1",o.success=function(n){if(o.selfBack)return void(e&&e(n));var i=n.msg,s=n.url;if(0==n.code){if(e&&e(n.result,n),o.selfSucBack)return}else{if(1e3==n.code)return void u.show({Ajax:a,loginSuc:function(){return o.selfLoginSuc?void o.selfLoginSuc():void c.send(o,e,t)}});if(t&&t(n),o.selfErrorBack)return}i?(r.show(i),s&&setTimeout(function(){location.href=s},2e3)):s&&(location.href=s)},o.error=function(){r.show("啊哦，网络异常啦！检查下网络吧~"),t&&t()},n.ajax(o)}},a.formatAjaxParams=function(o){var e=n(o),t=e.attr("ajax-data"),a={url:e.attr("ajax-url"),type:e.attr("ajax-type")||"get"};return t&&(a.data=JSON.parse(t)),a},t.exports=a});
;define("common/guide/guide",function(require,exports,module){function Guide(t,i,e){this.$btn=$(t),this.type=i,this.text=e,this._init()}var $=require("zepto");Guide.prototype={_tmpl:function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div id="J-guide" class="guide '+(null==(__t=type?type:"")?"":__t)+'"><i class="icon-guide">'+(null==(__t=text)?"":__t)+"</i></div>";return __p},_init:function(){var t=this;t.$btn.on("click",function(){t.show()})},show:function(){var t=this;$(document.body).append(t._tmpl({type:t.type,text:t.text})),$("#J-guide").on("click",function(){t._close()})},_close:function(){$("#J-guide").off("click").remove()}},module.exports=Guide});
;define("common/amount/index",function(t,e,i){function n(t){this.$el=s(t?t:".J-amount-bar"),this.$el.length>1&&(this.$el=s($el[0])),this.$minus=this.$el.find(".btn-minus"),this.$add=this.$el.find(".btn-add"),this.$val=this.$el.find(".amount-val"),this._timer=null}var a="click",s=t("zepto");n.prototype={resetBtn:function(){this._resetBtn()},init:function(t){var e=this;e.ajaxUpdate=t;var i=e.$el,n=e.$minus,s=e.$add,l=e.$val;e._resetBtn(),n.on(a,function(){var t=i.attr("min"),n=+l.text();return n-=1,null!==t&&+t>n?void 0:(l.text(n),e._resetBtn(),e._ajax(n),!1)}),s.on(a,function(){var t=i.attr("max"),n=+l.text();return n+=1,null!==t&&n>+t?void 0:(l.text(n),e._resetBtn(),e._ajax(n),!1)})},_ajax:function(t){var e=this,i=e.ajaxUpdate;i&&(e._timer&&clearTimeout(e._timer),e._timer=setTimeout(function(){i(t,e.$el)},500))},_resetBtn:function(){var t=this.$el,e=this.$minus,i=this.$add,n=this.$val,a=t.attr("min"),s=t.attr("max"),l=+n.text();null!=a&&a>=l?e.addClass("disabled"):e.removeClass("disabled"),null!=s&&l>=s?i.addClass("disabled"):i.removeClass("disabled")}},i.exports=n});
;define("common/preview/index",function(require,exports,module){function show(n,e){var r=e||0;$(document.body).append($el=$(_tmpl({imgArr:n}))),$close=$el.find(".preview-close"),$close.on("click",close),S=new Swiper({container:$el.find(".J-banner"),pager:$el.find(".J-bannerPager"),swipeOptions:{auto:0,continuous:!1,startSlide:r}})}function close(){S.swipe.kill(),$el.remove()}var $el,$close,S,$=require("zepto"),Swiper=require("common/swiper/index"),_tmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div class="preview-container">\r\n	<div class="preview-close"></div>\r\n	<div id="banner" class=\'J-banner swipe\'>\r\n		<div class="swipe-wrap">\r\n			',$.each(imgArr,function(n,e){__p+='\r\n			<div>\r\n				<a>\r\n					<div class="img-wrap">\r\n						<div class="img-inner">\r\n							<div class="img-table">\r\n								<div class="img-v">\r\n									<img src="'+(null==(__t=e)?"":__t)+'" />\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</a>\r\n			</div>\r\n		    '}),__p+='\r\n	    </div>\r\n	    <div id="bannerPager" class="J-bannerPager"><span id="page"></span></div>\r\n	</div>\r\n</div>';return __p};module.exports={show:show}});
;define("common/page-loader/index",function(o,n,i){function e(o){this.options=o,this.$container=l(o.container),this.$seeMore=l(o.seeMore),this.$loading=l(o.loading),this.getHtml=o.getHtml,this.pageNum=o.pageBegin||1,this.loading=!1,this.hasAll=!1,this.scrollKey=o.scrollKey,this.isScrollInit=!0,this._init()}var t="click",l=o("zepto"),s=window,r=l(s),a=s.scrollY,c=r.height();e.prototype={loadFirst:function(){return this._rendData(),this},loadEnd:function(o){this._loadEndBack=o},_init:function(){this._addEvents()},_addEvents:function(){function o(){return"none"==n.$container.css("display")?!1:n.hasAll?!1:!0}var n=this;n.options.seeMore?n.$seeMore.on(t,function(i){o()&&(n._rendData(),i.preventDefault())}):(n.scrollKey?n._scollTo(n.scrollKey):n.isScrollInit=!1,r.on("scroll",function(){!n.isScrollInit&&n.scrollKey&&sessionStorage.setItem(n.scrollKey,scrollY),o()&&n._scroll()}))},_scollTo:function(o){var n=sessionStorage.getItem(o),i=this;return n?window.scrollY>=n?void(i.isScrollInit=!1):void setTimeout(function(){window.scroll(0,n),i._scollTo(o)},50):void(i.isScrollInit=!1)},_scroll:function(){var o,n=this,i=s.scrollY,e=i>=.9*(l(document).height()-c);o=i>=a?"up":"down",a=i,!n.loading&&"up"==o&&e&&n._rendData()},_rendData:function(){var o=this,n=o.pageNum,i=o.$loading.length>0?o.$loading:l("#J-loading");return o.loading?!1:(o.loading=!0,i.css("display","block"),void o.getHtml(n,function(n,e){o.loading=!1,i.css("display","none"),1==o.pageNum?(o.$container.html(n),o.$seeMore[0]&&o.$seeMore.css("display","block")):o.$container.append(n),o.pageNum++,(!n.trim()||e&&o.$container.children().length>=e)&&(o.hasAll=!0,o._loadEndBack&&o._loadEndBack(),o.$seeMore[0]&&o.$seeMore.remove())}))}},i.exports=e});
;define("common/comment-section/index",function(require,exports,module){function init(t){t=t||{},productId=t.id||Util.getParam("g"),productName=t.name||$(".item-title").text(),addEvent(),initPageLoader(),initSupport()}function addEvent(){$("#J-support-btn").on("click",support),$discussList.on("click",".img-list > li",previewImg),$discussList.on("click",".yes-bar",discussSupport),$("#J-layer-btn").on("click",showLayer),$(document.body).on("click",function(){$("#J-layer-btn").parent().removeClass("show")})}function showLayer(t){t.stopPropagation();var n=$(this).parent();n.hasClass("show")?n.removeClass("show"):n.addClass("show")}function initPageLoader(){var ajaxUrl=$("#J-ajaxurl-moreComment").val();ajaxUrl&&new PageLoader({container:"#J-discuss-list",seeMore:".see-more",getHtml:function(pageNum,back){(new Ajax).send({url:ajaxUrl,data:{g:productId,page:pageNum}},function(result){var list=result.commentlist.data;0==list.length&&1==pageNum&&$("#J-discuss-list").parent().addClass("empty"),1==pageNum&&($("#J-discuss-amount").text(result.commentlist.total_num),resetLayer({canComment:result.commentlist.canComment,link:result.commentlist.commentUrl})),back&&back(function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+="",$.each(list,function(t,n){__p+='\r\n<li>\r\n	<div class="img-wrap" style="background-image:url('+(null==(__t=n.head_sculpture)?"":__t)+')"></div>\r\n	<div class="info">\r\n		<div class="name-wrap">\r\n			<label class="name">'+(null==(__t=n.customer_name)?"":__t)+'</label>\r\n			<span item-id="'+(null==(__t=n.id)?"":__t)+'" class="yes-bar '+(null==(__t=n.isSupport?"active":"")?"":__t)+'"><i class="icon-yes"></i><b>'+(null==(__t=n.comment_praise_num)?"":__t)+'</b></span>\r\n		</div>\r\n		<div class="star-wrap">\r\n			<div class="star-bar">\r\n				<div class="star-gray"></div>\r\n				<div class="star-inner" style="width:'+(null==(__t=n.product_score/5*100)?"":__t)+'%;">\r\n					<div class="star-active"></div>\r\n				</div>\r\n			</div>\r\n			<span class="date">'+(null==(__t=n.create_time)?"":__t)+'</span>\r\n		</div>\r\n		<p class="cotent">'+(null==(__t=n.comment_content)?"":__t)+"</p>\r\n		",n.imgList&&n.imgList.length>0&&(__p+='\r\n		<ul class="img-list">\r\n			',$.each(n.imgList,function(t,n){__p+='\r\n			<li style="background-image:url('+(null==(__t=n)?"":__t)+')"></li>\r\n			'}),__p+="\r\n		</ul>\r\n		"),__p+="\r\n		",$.each(n.reply,function(t,e){__p+='\r\n		<p class="cotent-replay"><b>'+(null==(__t=e.reply_user)?"":__t)+"</b>回复<b>"+(null==(__t=n.customer_name)?"":__t)+"</b>："+(null==(__t=e.back_content)?"":__t)+"</p>\r\n		"}),__p+="\r\n	</div>\r\n</li>\r\n"}),__p+="";return __p}({list:list}),result.commentlist.total_num)})}}).loadFirst().loadEnd(function(){$(".see-more").remove()})}function resetLayer(t){var n=$("#J-discuss-layer");1==t.canComment&&(n.find(".J-comment").attr("href",t.link),n.css("display","block"))}function initSupport(){var ajaxUrl=$("#J-ajaxurl-initProductLikeData").val();ajaxUrl&&(new Ajax).send({url:ajaxUrl,data:{g:productId}},function(result){var $btn=$("#J-support-btn"),$supportList=$(".support-list");isInitSupport=!0,result.isSupport&&$btn.addClass("active"),$btn.find(".J-num").text(result.supportTotal),$supportList.html(function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+="",$.each(list,function(t,n){__p+='\r\n<li style="background-image:url('+(null==(__t=n.headImg)?"":__t)+')"></li>\r\n'}),__p+="";return __p}({list:result.supportList})),result.supportList.length>0&&$supportList.css("display","block")})}function support(){var t=$(this),n=t.find(".J-num");return isInitSupport?t.hasClass("active")?void Bubble.show("您已赞过，不能重复点赞"):(t.addClass("active"),n.text(parseInt(n.text(),10)+1),void(new Ajax).send(Ajax.formatAjaxParams(t),function(t){t.headImg&&$(".support-list").prepend('<li style="background-image:url('+t.headImg+')"></li>').css("display","block")})):!1}function discussSupport(){var t=$(this),n=t.find("b");t.hasClass("active")||(t.addClass("active"),n.text(+n.text()+1),(new Ajax).send({url:"/Mall/Goods/setCommentLike",data:{id:t.attr("item-id")}},function(){}))}function previewImg(){var t=$(this),n=[],e=0;t.parent().children().each(function(s,i){t[0]==i&&(e=s),n.push($(i).css("background-image").match(/url\((.*)\)/)[1])}),Preview.show(n,e)}var productId,productName,$=require("zepto"),Ajax=require("common/ajax/index"),Preview=require("common/preview/index"),PageLoader=require("common/page-loader/index"),Util=require("common/util/index"),Bubble=require("common/bubble/bubble"),isInitSupport=!1,$discussList=$("#J-discuss-list");module.exports={init:init}});
;define("common/gotop/index",function(require,exports,module){function _onscroll(){var o=win.scrollY;o/winHei>=1.5?($gotop||($body.append($(tmpl)),$gotop=$("#J-gotop"),$gotop.on("click",function(){win.scroll(0,0),hidden()})),show()):isShow&&hidden()}function show(){isShow||(isShow=!0,$gotop.css("display","block").animate({opacity:1},1e3,"ease-in"))}function hidden(){isShow&&(isShow=!1,$gotop.animate({opacity:0},1e3,"ease-in",function(){$gotop.css("display","none")}))}var $gotop,$=require("zepto"),tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<i id="J-gotop" class="icon-gotop"></i>';return __p}(),win=window,$win=$(win),$body=$(document.body),winHei=$win.height(),isShow=!1;$win.on("scroll",_onscroll)});
;define("goods/index",function(n){function t(){function n(){setTimeout(function(){return e--,S.text(e),0>=e?(V=!1,void S.text("获取验证码").removeClass("disabled")):void n()},1e3)}if(V)return!1;var t=C.val(),e=60;return(new p).send({url:"/WeChat/Band/sendMsg",data:{phone:t}},function(){V=!0,S.text(e).addClass("disabled"),n()}),!1}function e(n){n.preventDefault();var t,e=C.val(),a=j.val();return e?/^\d{11}$/.test(e)?a?(t={phone:e,code:a},void f.start(e,a,p,function(n){n&&(t.recommend=n),(new p).send({url:"/WeChat/Band/bandAccount",type:"post",data:t},function(){D.hidden(),"cart"==D.type?r():u()})})):(v.show("请输入验证码"),!1):(v.show("请输入正确的手机号码"),!1):(v.show("请输入您的手机号码"),!1)}function a(){D.init(),o(),b.init()}function o(){l("#J-btn-cart").on(c,function(n){D.show("cart"),n.preventDefault()}),l("#J-btn-buy").on(c,function(n){D.show("buy"),n.preventDefault()}),l("#J-make-money").on("click",i)}function i(n){function t(){(new p).send({url:"/Mall/Goods/goodsShareMoney"},function(n){var t=n.hasPermission;phpdata.isLogin=1,1==t?J.show():location.href=e.attr("href")})}n.preventDefault();var e=l(this);return phpdata&&1!=phpdata.isLogin?(g.show({Ajax:p,loginSuc:function(){t()}}),!1):(t(),!1)}function r(){if(l("#spe_id").val()>0&&0==l("#spe_already_start").val())return!1;var n=l("#gid").val(),t=s(),e=parseInt(l("#J-cm-amount").find(".amount-val").text(),10),a=l("#J-ajaxurl-addCart").val(),o={goodsId:n,skuAttr:t.skuAttr,skuValue:t.skuValue,amount:e};(new p).send({url:a,data:o,type:"post"},function(){v.show("加入购物车成功"),d()})}function u(){var n=l("#gid").val(),t=s(),e=parseInt(l("#J-cm-amount").find(".amount-val").text(),10);if(parseInt(l("#J-last-num").text())<e)return void v.show("库存不足，下次早点哦!");var a=l("#J-ajaxurl-quickBuy").val(),o={goodsId:n,skuAttr:t.skuAttr,skuValue:t.skuValue,amount:e};(new p).send({url:a,data:o,type:"post",selfSucBack:!0},function(n,t){var e='<form action="'+t.url+'" method="post">';l.each(o,function(n,t){"tjzAjax"!=n&&(e+='<input type="hidden" name="'+n+'" value="'+t+'" />')}),e+="</form>",l(e).appendTo(l("body")).submit()})}function s(){var n=[],t=l("#J-cm").find("dt"),e=l("#J-cm").find("dd");t.each(function(t,a){var o=(l(a),l(e[t]));n.push(o.find(".sel").text())});var a,o=l("#goods_sku_json").val(),i={};try{a=JSON.parse(o)}catch(r){return}for(var u=0;u<a.length;u++)if(n[0]==a[u].skuValue){i=a[u];break}return{skuId:i.skuId,skuAttr:i.skuAttr,skuValue:i.skuValue,price:i.price,amount:i.amount}}function d(){var n=l("#J-ajaxurl-initCart").val();n&&(new p).send({url:n},function(n){var t=+n.number,e=l("#J-cart-num");t>0?e.text(t).parent().css("display","block"):e.parent().css("display","none")})}var c="click",l=n("zepto"),m=n("common/swiper/index"),f=n("common/confirm-service/index"),p=(n("common/config/index"),n("common/ajax/index")),v=n("common/bubble/bubble"),h=n("common/guide/guide"),k=n("common/util/index"),x=n("common/amount/index"),g=(n("common/alert/alert"),n("common/login-pop/index")),y=new x,b=n("common/comment-section/index");n("common/gotop/index");var J=new h;k.phpdataReady(function(){var n=l("#J-share");"undefined"==typeof taojinzi?new h(n):n.on("click",function(){taojinzi.share(JSON.stringify({title:title,link:link,imgUrl:imgUrl,desc:desc}))})});var w=l("#J-phone-ok2"),C=l("#phone2"),j=l("#code2"),S=l("#J-yzm-bt2"),_=l(window).height();new m({container:"banner",pager:"bannerPager"}),k.phpdataReady(function(n){var a=n.isLogin;0==a&&(l("#J-panel-cm").addClass("add-phone"),S.on("click",t),w.on("click",e))});var A=k.getParam("minnum"),D={type:"",init:function(){var n=this,t=l("#J-panel-cm"),e=t.find(".close"),a=t.find(".mask"),o=t.find(".J-ok");t.on("click",function(){return!1}),e.on(c,function(t){n.hidden(),t.preventDefault()}),a.on(c,function(t){n.hidden(),t.preventDefault()}),o.on(c,function(t){n.hidden(),"cart"==n.type?r():u(),t.preventDefault()}),n._initSel()},_initSel:function(){var n=this;n._resetSku(),y.init(),l("#J-cm").delegate("label",c,function(t){var e=l(t.target);e.siblings("label").removeClass("sel"),e.addClass("sel"),e.siblings("input").val(e.attr("value")),n._resetSku(),y.resetBtn()})},_resetSku:function(){var n=s(),t=l(".J-amount-bar");l("#J-last-num").text(n.amount),t.attr("max",n.amount),l("#J-sku-price").text(n.price)},show:function(n){var t=l("#J-panel-cm"),e=(t.find(".mask"),t.find(".panel-content"));this.type=n,t.find(".amount-val").text(A?A:1),y.resetBtn(),l("html").attr("style","position: relative; overflow: hidden; height: "+_+"px;"),l("body").attr("style","overflow: hidden; height: "+_+"px; padding: 0px;"),t.css("display","block"),e.animate({translateY:"0"},300,"ease-out")},hidden:function(){var n=l("#J-panel-cm"),t=(n.find(".mask"),n.find(".panel-content"));t.animate({translateY:"100%"},300,"ease-in",function(){l("html").attr("style",""),l("body").attr("style",""),n.css("display","none")})}},I={init:function(){var n=l("#J-cart-num"),t=+n.text();t&&t>0?n.addClass("has-num"):n.removeClass("has-num")},add:function(n){var t=l("#J-cart-num"),e=+t.text();t.text(e+n).addClass("has-num")}};I.init();var V=!1;window.jumpurl=location.href,a(),setTimeout(function(){d()},0)});