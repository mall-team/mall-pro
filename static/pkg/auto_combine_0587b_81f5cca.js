define("common/copyright/index",function(require,exports,module){function render(){if(!($("#copyright").length>0||$(".copyright").length>0)){var t=$body.attr("no-copyright");1!=t&&($body.append($(_tmpl())),$copyright=$("#copyright"),reset())}}function reset(){var t=$body.height(),o=$win.height();o>t+HEI?($body.css({"min-height":o+"px",position:"relative"}),$copyright.css({position:"absolute",width:"100%",bottom:$body.css("padding-bottom")})):$copyright.css({position:"static",width:"auto"})}var $copyright,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="copyright">大泽商城&nbsp;提供技术支持</div>';return __p},HEI=64,$body=$(document.body),$win=$(window);module.exports={render:render,reset:reset}});
;define("common/swipe/swipe",function(n,t,e){function i(n,t){"use strict";function e(){m=x.children,w=m.length,m.length<2&&(t.continuous=!1),h.transitions&&t.continuous&&m.length<3&&(x.appendChild(m[0].cloneNode(!0)),x.appendChild(x.children[1].cloneNode(!0)),m=x.children),E=new Array(m.length),p=n.getBoundingClientRect().width||n.offsetWidth,x.style.width=m.length*p+"px";for(var e=m.length;e--;){var i=m[e];i.style.width=p+"px",i.setAttribute("data-index",e),h.transitions&&(i.style.left=e*-p+"px",a(e,b>e?-p:e>b?p:0,0))}t.continuous&&h.transitions&&(a(s(b-1),-p,0),a(s(b+1),p,0)),h.transitions||(x.style.left=b*-p+"px"),n.style.visibility="visible"}function i(){t.continuous?r(b-1):b&&r(b-1)}function o(){t.continuous?r(b+1):b<m.length-1&&r(b+1)}function s(n){return(m.length+n%m.length)%m.length}function r(n,e){if(b!=n){if(h.transitions){var i=Math.abs(b-n)/(b-n);if(t.continuous){var o=i;i=-E[s(n)]/p,i!==o&&(n=-i*m.length+n)}for(var r=Math.abs(b-n)-1;r--;)a(s((n>b?n:b)-r-1),p*i,0);n=s(n),a(b,p*i,e||g),a(n,0,e||g),t.continuous&&a(s(n-i),-(p*i),0)}else n=s(n),c(b*-p,n*-p,e||g);b=n,f(t.callback&&t.callback(b,m[b]))}}function a(n,t,e){u(n,t,e),E[n]=t}function u(n,t,e){var i=m[n],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=e+"ms",o.webkitTransform="translate("+t+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+t+"px)")}function c(n,e,i){if(!i)return void(x.style.left=e+"px");var o=+new Date,s=setInterval(function(){var r=+new Date-o;return r>i?(x.style.left=e+"px",L&&d(),t.transitionEnd&&t.transitionEnd.call(event,b,m[b]),void clearInterval(s)):void(x.style.left=(e-n)*(Math.floor(r/i*100)/100)+n+"px")},4)}function d(){T=setTimeout(o,L)}function l(){L=0,clearTimeout(T)}var v=function(){},f=function(n){setTimeout(n||v,0)},h={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(n){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var e in t)if(void 0!==n.style[t[e]])return!0;return!1}(document.createElement("swipe"))};if(n){var m,E,p,w,x=n.children[0];t=t||{};var b=parseInt(t.startSlide,10)||0,g=t.speed||300;t.continuous=void 0!==t.continuous?t.continuous:!0;var T,y,L=t.auto||0,k={},D={},M={handleEvent:function(n){switch(n.type){case"touchstart":this.start(n);break;case"touchmove":this.move(n);break;case"touchend":f(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":f(this.transitionEnd(n));break;case"resize":f(e.call())}t.stopPropagation&&n.stopPropagation()},start:function(n){var t=n.touches[0];k={x:t.pageX,y:t.pageY,time:+new Date},y=void 0,D={},x.addEventListener("touchmove",this,!1),x.addEventListener("touchend",this,!1)},move:function(n){if(!(n.touches.length>1||n.scale&&1!==n.scale)){t.disableScroll&&n.preventDefault();var e=n.touches[0];D={x:e.pageX-k.x,y:e.pageY-k.y},"undefined"==typeof y&&(y=!!(y||Math.abs(D.x)<Math.abs(D.y))),y||(n.preventDefault(),l(),t.continuous?(u(s(b-1),D.x+E[s(b-1)],0),u(b,D.x+E[b],0),u(s(b+1),D.x+E[s(b+1)],0)):(D.x=D.x/(!b&&D.x>0||b==m.length-1&&D.x<0?Math.abs(D.x)/p+1:1),u(b-1,D.x+E[b-1],0),u(b,D.x+E[b],0),u(b+1,D.x+E[b+1],0)))}},end:function(){var n=+new Date-k.time,e=Number(n)<250&&Math.abs(D.x)>20||Math.abs(D.x)>p/2,i=!b&&D.x>0||b==m.length-1&&D.x<0;t.continuous&&(i=!1);var o=D.x<0;y||(e&&!i?(o?(t.continuous?(a(s(b-1),-p,0),a(s(b+2),p,0)):a(b-1,-p,0),a(b,E[b]-p,g),a(s(b+1),E[s(b+1)]-p,g),b=s(b+1)):(t.continuous?(a(s(b+1),p,0),a(s(b-2),-p,0)):a(b+1,p,0),a(b,E[b]+p,g),a(s(b-1),E[s(b-1)]+p,g),b=s(b-1)),t.callback&&t.callback(b,m[b])):t.continuous?(a(s(b-1),-p,g),a(b,0,g),a(s(b+1),p,g)):(a(b-1,-p,g),a(b,0,g),a(b+1,p,g))),x.removeEventListener("touchmove",M,!1),x.removeEventListener("touchend",M,!1)},transitionEnd:function(n){parseInt(n.target.getAttribute("data-index"),10)==b&&(L&&d(),t.transitionEnd&&t.transitionEnd.call(n,b,m[b]))}};return e(),L&&d(),h.addEventListener?(h.touch&&x.addEventListener("touchstart",M,!1),h.transitions&&(x.addEventListener("webkitTransitionEnd",M,!1),x.addEventListener("msTransitionEnd",M,!1),x.addEventListener("oTransitionEnd",M,!1),x.addEventListener("otransitionend",M,!1),x.addEventListener("transitionend",M,!1)),window.addEventListener("resize",M,!1)):window.onresize=function(){e()},{setup:function(){e()},slide:function(n,t){l(),r(n,t)},prev:function(){l(),i()},next:function(){l(),o()},getPos:function(){return b},getNumSlides:function(){return w},kill:function(){l(),x.style.width="auto",x.style.left=0;for(var n=m.length;n--;){var t=m[n];t.style.width="100%",t.style.left=0,h.transitions&&u(n,0,0)}h.addEventListener?(x.removeEventListener("touchstart",M,!1),x.removeEventListener("webkitTransitionEnd",M,!1),x.removeEventListener("msTransitionEnd",M,!1),x.removeEventListener("oTransitionEnd",M,!1),x.removeEventListener("otransitionend",M,!1),x.removeEventListener("transitionend",M,!1),window.removeEventListener("resize",M,!1)):window.onresize=null}}}}e.exports=i});
;define("common/swiper/index",function(i,e,n){function t(i){this.$container="string"==typeof i.container?a("#"+i.container):i.container,this.$pager="string"==typeof i.container?a("#"+i.pager):i.pager,this.swipeOptions=i.swipeOptions,this._init()}var a=i("zepto"),s=i("common/swipe/swipe");t.prototype={_init:function(){this._initSwipe()},_initSwipe:function(){var i=this,e=a.extend({startSlide:0,auto:2500,continuous:!0,disableScroll:!1,stopPropagation:!0,callback:function(){},transitionEnd:function(e){i._changePager(e)}},i.swipeOptions);i.swipe=s(i.$container[0],e),i._initPager(i.swipe.getNumSlides()),i._changePager(e.startSlide||0)},_initPager:function(i){var e=this,n=e.$pager.find("span"),t=1,a=e.sLen=i;for(n.html('<a href="javascript:;" class="sel"></a>'),t;a>t;t++)n.append('<a href="javascript:;" class="nosel"></a>')},_changePager:function(i){var e=this,n=(e.$pager,e.$pager.find("span")),t=e.sLen;if(n.children("a").attr("class","nosel"),2==t&&i>1)switch(i){case 2:n.children("a").eq(0).attr("class","sel");break;case 3:n.children("a").eq(1).attr("class","sel")}else n.children("a").eq(i).attr("class","sel")}},n.exports=t});
;define("common/timer/timer",function(t,e,r){function i(t,e){this.$el=a(t),this.format=e;var r=+this.$el.attr("timer-end"),i="object"==typeof phpdata?phpdata.serverTime:null,o=+this.$el.attr("timer");r&&i?this.lastTime=r-i:(o||0==o)&&(this.lastTime=this.oTime=o),this.day=0,this.hour=0,this.min=0,this.sec=0,this._timer=null}var a=t("zepto");i.prototype={start:function(){var t=this;if(t.lastTime||0==t.lastTime)return t._walk(),t},end:function(t){return this._endBack=t,this},_walk:function(){var t=this;return t.$el.html(t._format(t.lastTime<0?0:t.lastTime)),t.lastTime<=0?void(this.oTime>0&&t._endBack&&t._endBack()):(t.lastTime--,void(t._timer=setTimeout(function(){t._walk()},1e3)))},_format:function(t){var e=this,r=parseInt(t/3600,10),i=parseInt((t-3600*r)/60),a=t-3600*r-60*i,o=parseInt(r/24);return r-=24*o,e.day=o,e.hour=r,e.min=i,e.sec=a,"function"==typeof e.format?e.format(t):"single"==e.format?o>0?e._addZero(o)+"天":r>0?e._addZero(r)+"小时":i>0?e._addZero(i)+"分钟":a>0?e._addZero(a)+"秒":"0秒":"time"==e.format?e._addZero(24*o+r)+":"+e._addZero(i)+":"+e._addZero(a):(o>0?e._addZero(o)+"天":"")+e._addZero(r)+"时"+e._addZero(i)+"分"+e._addZero(a)+"秒"},_addZero:function(t){return t.toString().length<2?"0"+t:t}},i.addZero=function(t){return t.toString().length<2?"0"+t:t},r.exports=i});
;define("common/bubble/bubble",function(require,exports,module){function show(e,t){$b||($(document.body).append(_tmpl),$b=$("#J-bubble"),$content=$b.find(".bubble-content")),$content.text(e),$b.css("display","block").animate({opacity:1}),timer&&clearTimeout(timer),timer=setTimeout(function(){hide(),timer=null},t||2e3)}function hide(){$b.animate({opacity:0},function(){$b.css("display","none")})}var timer,$b,$content,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="J-bubble" class="bubble">\r\n	<div class="mask"></div>\r\n	<div class="bubble-content"></div>\r\n</div>';return __p}();module.exports={show:show,hide:hide}});
;define("common/config/index",function($,n,o){o.exports={cutArr:["华丽的一刀！砍掉了$0元！","好狠的一刀！砍掉了$0元！","帅气的一刀！砍掉了$0元！","猥琐的一刀！砍掉了$0元！","霸气的一刀！砍掉了$0元！","精彩的一刀！砍掉了$0元！","犀利的一刀！砍掉了$0元！","轻轻的一刀！砍掉了$0元！","温柔的一刀！砍掉了$0元！","潇洒的一刀！砍掉了$0元！","漂亮的一刀！砍掉了$0元！"]}});
;define("common/pop/index",function(require,exports,module){function _init(){$pop||($(document.body).append(_tmpl()),$pop=$("#J-pop"),$mask=$pop.find(".mask"),$container=$pop.find(".container"),$title=$pop.find(".title"),$content=$pop.find(".content"),$close=$pop.find(".close")),$mask.add($close).on("click",function(){curOptions.manualClose!==!1&&hide()})}function show(o){curOptions=o,winScrollY=o.autoY?window.scrollY:0,$content.html($(o.content)),$("input").on("focus",inputFocus),o.hasClose===!1?$close.css("display","none"):$close.css("display","block"),o.title?$title.text(o.title).css("display","block"):$title.css("display","none"),o.scroll?$pop.css("position","fixed"):($pop.css("position","absolute"),$("html").attr("style","position: relative; overflow: hidden; height: "+winHei+"px;"),$("body").attr("style","overflow: hidden; height: "+winHei+"px; padding: 0px;")),$pop.css("display","block"),$container.animate({translateY:"0"},500,"ease-out")}function hide(o){$container.animate({translateY:"100%"},500,"ease-in",function(){$("html").attr("style",""),$("body").attr("style",""),$pop.css("display","none"),!curOptions.scroll&&winScrollY&&window.scroll(0,winScrollY),o&&o()})}function inputFocus(){function o(){$(window).off("resize",o)}$(this);$(window).on("resize",o)}var curOptions,$pop,$mask,$container,$content,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="J-pop" class="pop">\r\n	<div class="mask"></div>\r\n	<div class="container">\r\n		<div class="close"></div>\r\n		<div class="title"></div>\r\n		<div class="content"></div>\r\n	</div>\r\n</div>';return __p},winHei=$(window).height(),winScrollY=0;_init(),module.exports={show:show,hide:hide}});
;define("common/util/index",function(n,t,a){function r(n,t){return n+Math.ceil(Math.random()*t)}function e(n,t){return n+Math.floor(Math.random()*t)}function i(n,t){var a=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),t=t||location.search,r=t.substr(1).match(a);return t&&r?r[2]:""}function o(){function n(n){for(var a in n)if(void 0!==t.style[a])return n[a]}var t=document.createElement("trans"),a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},r={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return{transEvtName:n(a),aniEvtName:n(r)}}function s(n){return"object"==typeof phpdata?void(n&&n(phpdata)):void setTimeout(function(){s(n)},200)}var u={};!function(n){function t(n){if(n=i(n.replace(/ /g,"")),15==n.length)return e(n);if(18==n.length){var t=n.split("");return r(n)&&a(t)?!0:!1}return!1}function a(n){var t=0;"x"==n[17].toLowerCase()&&(n[17]=10);for(var a=0;17>a;a++)t+=o[a]*n[a];return valCodePosition=t%11,n[17]==s[valCodePosition]?!0:!1}function r(n){var t=n.substring(6,10),a=n.substring(10,12),r=n.substring(12,14),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getFullYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function e(n){var t=n.substring(6,8),a=n.substring(8,10),r=n.substring(10,12),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function i(n){return n.replace(/(^\s*)|(\s*$)/g,"")}var o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],s=[1,0,10,9,8,7,6,5,4,3,2];n.valid=t}(u),a.exports={getParam:i,random:r,random2:e,getAniEndName:o,phpdataReady:s,IdCard:u}});
;define("common/alert/alert",function(require,exports,module){function show(e,t,o,n){$alert?$alert.css("display","block"):($(document.body).append(_tmpl()),$alert=$("#J-alert"),$contentWrap=$("#J-alert-content-wrap"),$content=$("#J-alert-content"),$mask=$("#J-alert-mask"),$close=$("#J-alert-close"),$close.on("click",function(e){hide(),e.preventDefault(),n&&n()})),o&&(addClsName=o,$contentWrap.addClass(o)),winScrollY=window.scrollY,htmlStyle=$html.attr("style"),bodyStyle=$body.attr("style"),$html.attr("style","position: relative; overflow: hidden; height: "+winHei+"px;"),$body.attr("style","overflow: hidden; height: "+winHei+"px; padding: 0px;"),"string"!=typeof e||/<.*>/.test(e)?$content.html($(e)):(/close=0/.test(e)&&(t=!1),$content.html($(_createIframe(e)))),t===!0||void 0===t?$close.css("display","block"):$close.css("display","none"),_resize(),$win.on("resize",_resize)}function hide(){addClsName&&($contentWrap.removeClass(addClsName),addClsName=void 0),$alert.css("display","none"),$win.off("resize",_resize),$html.attr("style",htmlStyle),$body.attr("style",bodyStyle),window.scroll(0,winScrollY)}function _createIframe(e){var t=document.createElement("iframe");return t.src=e,t.onload=function(){_hasCloseByUrl(t.contentWindow.location.search),t.style.height=t.contentWindow.document.body.offsetHeight+"px",_resize()},t}function _resize(){var e=$win.height(),t=$contentWrap.height();$contentWrap.css("margin-top",(e-t)/2)}function _hasCloseByUrl(e){var t=Util.getParam("close",e);"0"===t?$close.css("display","none"):$close.css("display","block")}var $alert,$mask,$contentWrap,$content,$close,bodyStyle,htmlStyle,addClsName,$=require("zepto"),Util=require("common/util/index"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="J-alert" class="alert">\r\n	<div id="J-alert-mask" class="mask"></div>\r\n	<div id="J-alert-content-wrap" class="alert-content">\r\n		<i id="J-alert-close" class="icon-close"></i>\r\n		<div id="J-alert-content"></div>\r\n	</div>\r\n</div>';return __p},$win=$(window),$html=$("html"),$body=$(document.body),winHei=$win.height(),winScrollY=0;module.exports={show:show,hide:hide}});
;define("common/confirm-service/index",function(require,exports,module){function validService(e,n,r,o,t){Ajax=r,recommend="",recommendLog={},(new Ajax).send({url:"/WeChat/Band/checkUserRecommend",type:"post",data:{phone:e,code:n}},function(n){var r=n.type;switch(recommendLog.type=r,recommendLog.phone=e,r){case 0:o&&o();break;case 1:selServicePeople(n,function(){recommendLog.userList=n.user,recommendLog.selRecommend=recommend,recordLog(),o&&o(recommend)});break;case 2:showPhoneService(function(){10==recommendLog.type||(recommendLog.selRecommend=recommend),recordLog(),o&&o(recommend)})}},function(){t&&t()})}function recordLog(){(new Ajax).send({url:"/User/Register/selectRecommendLog",type:"post",data:{data:JSON.stringify(recommendLog)}},function(e){console.log(e)})}function selServicePeople(e,n){var r;Alert.show(_selServiceTmpl({userList:e.user}),!1,"service-alert"),r=$(".service-alert-content"),r.find(".J-sel-btn").on("click",function(){Alert.hide(),recommend=$(this).attr("recommend"),n&&n()})}function showPhoneService(e){var n,r,o;Alert.show(_phoneServiceTmpl(),!1,"service-alert"),n=$(".service-alert-content"),r=n.find(".J-phone"),o=n.find(".J-submit"),r.get(0).focus(),r.on("input",function(){var e=r.val().trim();/^1[3-8]\d{9}$/.test(e)?getService(e,function(e){recommendLog.userList=[e],o.removeClass("disabled"),recommend=e.recommend,n.find(".userinfo").html('<div class="head-img" style="background-image:url('+e.headImg+')"></div><div class="user-name">'+e.userName+"</div>")},function(e){o.addClass("disabled"),n.find(".userinfo").html('<p class="err">'+e.msg+"</p>")}):(o.addClass("disabled"),n.find(".userinfo").html(""))}),o.on("click",function(){r.val();return o.hasClass("disabled")?!1:(Alert.hide(),void(e&&e()))}),n.find(".J-self-link").on("click",function(){recommend="",Alert.hide(),recommendLog.type=10,e&&e()})}function getService(e,n,r){(new Ajax).send({url:"/WeChat/Band/getRecommendPhone",data:{phone:e},selfErrorBack:!0},function(e){n&&n(e)},function(e){r&&r(e)})}var Ajax,recommend,recommendLog,$=require("zepto"),Alert=(require("common/bubble/bubble"),require("common/alert/alert")),_selServiceTmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div class="service-alert-content">\r\n	',__p+=2==userList.length?'\r\n	<p class="title">请选择一位朋友作为您的推荐人(<b>2选1</b>)</p>\r\n	':'\r\n	<p class="title">请确认您的推荐人</p>\r\n	',__p+='\r\n	<ul class="service-list">\r\n		',$.each(userList,function(e,n){__p+='\r\n		<li>\r\n			<div class="img-wrap headimg" style="background-image:url('+(null==(__t=n.headImg)?"":__t)+')"></div>\r\n			<p class="user-name">'+(null==(__t=n.userName)?"":__t)+'</p>\r\n			<p class="phone-label">'+(null==(__t=n.phone)?"":__t)+'</p>\r\n			<a class="J-sel-btn btnl" recommend="'+(null==(__t=n.recommend)?"":__t)+'">就Ta了</a>\r\n		</li>\r\n		'}),__p+="\r\n	</ul>\r\n</div>";return __p},_phoneServiceTmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div class="service-alert-content">\r\n	<p class="title">请填写您的推荐人</p>\r\n	<div class="input-wrap phone-wrap">\r\n        <label>手机号</label>\r\n        <input class="J-phone" type="tel" name="phone" placeholder="请输入推荐人手机号码" autocomplete="off">\r\n    </div>\r\n    <div class="userinfo"></div>\r\n    <div class="btn-content">\r\n    	<button type="button" class="J-submit btnl btnl-wx disabled">确认</button>\r\n    </div>\r\n    <div class="link-wrap">\r\n        <a class="J-self-link link">我自己逛来的</a>\r\n    </div>\r\n</div>';return __p};module.exports={start:validService}});
;define("common/login-pop/index",function(require,exports,module){function show(n){Pop.show({content:_tmpl(),hasClose:!1,manualClose:n.manualClose}),init(n)}function init(n){options=n,Ajax=n.Ajax,$yzmBt=$("#J-yzm-bt"),$submitBt=$("#J-phone-ok"),$phone=$("#J-phone"),$code=$("#J-code"),$yzmBt.on("click",getCode),$submitBt.on("click",login)}function getCode(){function n(){setTimeout(function(){return o--,$yzmBt.text(o),0>=o?(disabled=!1,void $yzmBt.text("获取验证码").removeClass("disabled")):void n()},1e3)}if(disabled)return!1;var e=$phone.val(),o=60;return(new Ajax).send({url:"/WeChat/Band/sendMsg",data:{phone:e}},function(){disabled=!0,$yzmBt.text(o).addClass("disabled"),n()}),!1}function login(){function n(){(new Ajax).send({url:"/WeChat/Band/bandAccount",type:"post",data:e},function(){loagining=!1,Pop.hide(),options.loginSuc&&options.loginSuc()},function(){loagining=!1})}var e,o=$phone.val(),t=$code.val();return o?/^\d{11}$/.test(o)?t?loagining?!1:(e={phone:o,code:t},"object"==typeof phpdata&&$.each(["channelType","channelId"],function(n,o){phpdata[o]&&(e[o]=phpdata[o])}),loagining=!0,options.noSelRecommend?n():ConfirmService.start(o,t,Ajax,function(o){o&&(e.recommend=o),n()},function(){loagining=!1}),!1):(Bubble.show("请输入验证码"),!1):(Bubble.show("请输入正确的手机号码"),!1):(Bubble.show("请输入您的手机号码"),!1)}var Ajax,options,$yzmBt,$submitBt,$phone,$code,$=require("zepto"),Pop=require("common/pop/index"),Bubble=require("common/bubble/bubble"),ConfirmService=(require("common/alert/alert"),require("common/confirm-service/index")),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<section class="phone-panel">\r\n	<div class="input-wrap">\r\n		<label>手机号</label>\r\n		<input id="J-phone" type="tel" placeholder="请输入您的手机号码" />\r\n	</div>\r\n	<div class="yzm">\r\n		<div class="input-wrap">\r\n			<label>验证码</label>\r\n			<input id="J-code" type="tel" placeholder="输入验证码" />\r\n		</div>\r\n		<button style="vertical-align: top;" id="J-yzm-bt" type="button">获取验证码</button>\r\n	</div>\r\n	<div>\r\n		<button id="J-phone-ok" class="btnl btnl-wx">确认</button>\r\n	</div>\r\n</section>';return __p},disabled=!1,loagining=!1;module.exports={show:show,init:init}});
;define("common/ajax/index",function(o,e,t){function a(){}var n=o("zepto"),r=o("common/bubble/bubble"),i=o("common/config/index"),u=o("common/login-pop/index");a.prototype={send:function(o,e,t){var c=this;o||(o={}),"dev"==i.mod?(o.dataType="jsonp",o.type="get",o.url=i.host+o.url):o.dataType=o.dataType||"json",o.url+=o.url.match(/\?[^=]+=.*$/)?"&isAjax=1":"?isAjax=1",o.success=function(n){if(o.selfBack)return void(e&&e(n));var i=n.msg,s=n.url;if(0==n.code){if(e&&e(n.result,n),o.selfSucBack)return}else{if(1e3==n.code)return void u.show({Ajax:a,loginSuc:function(){return o.selfLoginSuc?void o.selfLoginSuc():void c.send(o,e,t)}});if(t&&t(n),o.selfErrorBack)return}i?(r.show(i),s&&setTimeout(function(){location.href=s},2e3)):s&&(location.href=s)},o.error=function(){r.show("啊哦，网络异常啦！检查下网络吧~"),t&&t()},n.ajax(o)}},a.formatAjaxParams=function(o){var e=n(o),t=e.attr("ajax-data"),a={url:e.attr("ajax-url"),type:e.attr("ajax-type")||"get"};return t&&(a.data=JSON.parse(t)),a},t.exports=a});
;define("index",function(n){function e(){(new o).send({url:a("#J-ajaxurl-initCart").val()},function(n){var e=+n.number,i=a(".cart"),t=a(".cart > i");e>0&&(i.css("display","block"),t.text(e))})}var a=n("zepto");n("common/gold/index");var i=n("common/swiper/index"),t=n("common/timer/timer"),o=n("common/ajax/index"),c=n("common/util/index");new i({container:"banner",pager:"bannerPager"}),c.phpdataReady(function(n){0==n.subscribe&&a(".atten-panel").css("display","block"),a(".J-timer").each(function(n,e){new t(e,"time").start().end(function(){})})}),e()});