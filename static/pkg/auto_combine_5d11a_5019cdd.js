define("common/copyright/index",function(require,exports,module){function render(){if(!($("#copyright").length>0||$(".copyright").length>0)){var t=$body.attr("no-copyright");1!=t&&($body.append($(_tmpl())),$copyright=$("#copyright"),reset())}}function reset(){var t=$body.height(),o=$win.height();o>t+HEI?($body.css({"min-height":o+"px",position:"relative"}),$copyright.css({position:"absolute",width:"100%",bottom:$body.css("padding-bottom")})):$copyright.css({position:"static",width:"auto"})}var $copyright,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="copyright">一惠到家&nbsp;提供技术支持</div>';return __p},HEI=64,$body=$(document.body),$win=$(window);module.exports={render:render,reset:reset}});
;define("common/bubble/bubble",function(require,exports,module){function show(e,t){$b||($(document.body).append(_tmpl),$b=$("#J-bubble"),$content=$b.find(".bubble-content")),$content.text(e),$b.css("display","block").animate({opacity:1}),timer&&clearTimeout(timer),timer=setTimeout(function(){hide(),timer=null},t||2e3)}function hide(){$b.animate({opacity:0},function(){$b.css("display","none")})}var timer,$b,$content,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="J-bubble" class="bubble">\r\n	<div class="mask"></div>\r\n	<div class="bubble-content"></div>\r\n</div>';return __p}();module.exports={show:show,hide:hide}});
;define("common/config/index",function($,n,o){o.exports={cutArr:["华丽的一刀！砍掉了$0元！","好狠的一刀！砍掉了$0元！","帅气的一刀！砍掉了$0元！","猥琐的一刀！砍掉了$0元！","霸气的一刀！砍掉了$0元！","精彩的一刀！砍掉了$0元！","犀利的一刀！砍掉了$0元！","轻轻的一刀！砍掉了$0元！","温柔的一刀！砍掉了$0元！","潇洒的一刀！砍掉了$0元！","漂亮的一刀！砍掉了$0元！"]}});
;define("common/pop/index",function(require,exports,module){function _init(){$pop||($(document.body).append(_tmpl()),$pop=$("#J-pop"),$mask=$pop.find(".mask"),$container=$pop.find(".container"),$title=$pop.find(".title"),$content=$pop.find(".content"),$close=$pop.find(".close")),$mask.add($close).on("click",function(){curOptions.manualClose!==!1&&hide()})}function show(o){curOptions=o,winScrollY=o.autoY?window.scrollY:0,$content.html($(o.content)),$("input").on("focus",inputFocus),o.hasClose===!1?$close.css("display","none"):$close.css("display","block"),o.title?$title.text(o.title).css("display","block"):$title.css("display","none"),o.scroll?$pop.css("position","fixed"):($pop.css("position","absolute"),$("html").attr("style","position: relative; overflow: hidden; height: "+winHei+"px;"),$("body").attr("style","overflow: hidden; height: "+winHei+"px; padding: 0px;")),$pop.css("display","block"),$container.animate({translateY:"0"},500,"ease-out")}function hide(o){$container.animate({translateY:"100%"},500,"ease-in",function(){$("html").attr("style",""),$("body").attr("style",""),$pop.css("display","none"),!curOptions.scroll&&winScrollY&&window.scroll(0,winScrollY),o&&o()})}function inputFocus(){function o(){$(window).off("resize",o)}$(this);$(window).on("resize",o)}var curOptions,$pop,$mask,$container,$content,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="J-pop" class="pop">\r\n	<div class="mask"></div>\r\n	<div class="container">\r\n		<div class="close"></div>\r\n		<div class="title"></div>\r\n		<div class="content"></div>\r\n	</div>\r\n</div>';return __p},winHei=$(window).height(),winScrollY=0;_init(),module.exports={show:show,hide:hide}});
;define("common/util/index",function(n,t,a){function r(n,t){return n+Math.ceil(Math.random()*t)}function e(n,t){return n+Math.floor(Math.random()*t)}function i(n,t){var a=new RegExp("(^|&)"+n+"=([^&]*)(&|$)","i"),t=t||location.search,r=t.substr(1).match(a);return t&&r?r[2]:""}function o(){function n(n){for(var a in n)if(void 0!==t.style[a])return n[a]}var t=document.createElement("trans"),a={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},r={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",OTransition:"oAnimationEnd",transition:"animationend"};return{transEvtName:n(a),aniEvtName:n(r)}}function s(n){return"object"==typeof phpdata?void(n&&n(phpdata)):void setTimeout(function(){s(n)},200)}var u={};!function(n){function t(n){if(n=i(n.replace(/ /g,"")),15==n.length)return e(n);if(18==n.length){var t=n.split("");return r(n)&&a(t)?!0:!1}return!1}function a(n){var t=0;"x"==n[17].toLowerCase()&&(n[17]=10);for(var a=0;17>a;a++)t+=o[a]*n[a];return valCodePosition=t%11,n[17]==s[valCodePosition]?!0:!1}function r(n){var t=n.substring(6,10),a=n.substring(10,12),r=n.substring(12,14),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getFullYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function e(n){var t=n.substring(6,8),a=n.substring(8,10),r=n.substring(10,12),e=new Date(t,parseFloat(a)-1,parseFloat(r));return e.getYear()!=parseFloat(t)||e.getMonth()!=parseFloat(a)-1||e.getDate()!=parseFloat(r)?!1:!0}function i(n){return n.replace(/(^\s*)|(\s*$)/g,"")}var o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],s=[1,0,10,9,8,7,6,5,4,3,2];n.valid=t}(u),a.exports={getParam:i,random:r,random2:e,getAniEndName:o,phpdataReady:s,IdCard:u}});
;define("common/alert/alert",function(require,exports,module){function show(e,t,o,n){$alert?$alert.css("display","block"):($(document.body).append(_tmpl()),$alert=$("#J-alert"),$contentWrap=$("#J-alert-content-wrap"),$content=$("#J-alert-content"),$mask=$("#J-alert-mask"),$close=$("#J-alert-close"),$close.on("click",function(e){hide(),e.preventDefault(),n&&n()})),o&&(addClsName=o,$contentWrap.addClass(o)),winScrollY=window.scrollY,htmlStyle=$html.attr("style"),bodyStyle=$body.attr("style"),$html.attr("style","position: relative; overflow: hidden; height: "+winHei+"px;"),$body.attr("style","overflow: hidden; height: "+winHei+"px; padding: 0px;"),"string"!=typeof e||/<.*>/.test(e)?$content.html($(e)):(/close=0/.test(e)&&(t=!1),$content.html($(_createIframe(e)))),t===!0||void 0===t?$close.css("display","block"):$close.css("display","none"),_resize(),$win.on("resize",_resize)}function hide(){addClsName&&($contentWrap.removeClass(addClsName),addClsName=void 0),$alert.css("display","none"),$win.off("resize",_resize),$html.attr("style",htmlStyle),$body.attr("style",bodyStyle),window.scroll(0,winScrollY)}function _createIframe(e){var t=document.createElement("iframe");return t.src=e,t.onload=function(){_hasCloseByUrl(t.contentWindow.location.search),t.style.height=t.contentWindow.document.body.offsetHeight+"px",_resize()},t}function _resize(){var e=$win.height(),t=$contentWrap.height();$contentWrap.css("margin-top",(e-t)/2)}function _hasCloseByUrl(e){var t=Util.getParam("close",e);"0"===t?$close.css("display","none"):$close.css("display","block")}var $alert,$mask,$contentWrap,$content,$close,bodyStyle,htmlStyle,addClsName,$=require("zepto"),Util=require("common/util/index"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="J-alert" class="alert">\r\n	<div id="J-alert-mask" class="mask"></div>\r\n	<div id="J-alert-content-wrap" class="alert-content">\r\n		<i id="J-alert-close" class="icon-close"></i>\r\n		<div id="J-alert-content"></div>\r\n	</div>\r\n</div>';return __p},$win=$(window),$html=$("html"),$body=$(document.body),winHei=$win.height(),winScrollY=0;module.exports={show:show,hide:hide}});
;define("common/confirm-service/index",function(require,exports,module){function validService(e,n,r,o,t){Ajax=r,recommend="",recommendLog={},(new Ajax).send({url:"/WeChat/Band/checkUserRecommend",type:"post",data:{phone:e,code:n}},function(n){var r=n.type;switch(recommendLog.type=r,recommendLog.phone=e,r){case 0:o&&o();break;case 1:selServicePeople(n,function(){recommendLog.userList=n.user,recommendLog.selRecommend=recommend,recordLog(),o&&o(recommend)});break;case 2:showPhoneService(function(){10==recommendLog.type||(recommendLog.selRecommend=recommend),recordLog(),o&&o(recommend)})}},function(){t&&t()})}function recordLog(){(new Ajax).send({url:"/User/Register/selectRecommendLog",type:"post",data:{data:JSON.stringify(recommendLog)}},function(e){console.log(e)})}function selServicePeople(e,n){var r;Alert.show(_selServiceTmpl({userList:e.user}),!1,"service-alert"),r=$(".service-alert-content"),r.find(".J-sel-btn").on("click",function(){Alert.hide(),recommend=$(this).attr("recommend"),n&&n()})}function showPhoneService(e){var n,r,o;Alert.show(_phoneServiceTmpl(),!1,"service-alert"),n=$(".service-alert-content"),r=n.find(".J-phone"),o=n.find(".J-submit"),r.get(0).focus(),r.on("input",function(){var e=r.val().trim();/^1[3-8]\d{9}$/.test(e)?getService(e,function(e){recommendLog.userList=[e],o.removeClass("disabled"),recommend=e.recommend,n.find(".userinfo").html('<div class="head-img" style="background-image:url('+e.headImg+')"></div><div class="user-name">'+e.userName+"</div>")},function(e){o.addClass("disabled"),n.find(".userinfo").html('<p class="err">'+e.msg+"</p>")}):(o.addClass("disabled"),n.find(".userinfo").html(""))}),o.on("click",function(){r.val();return o.hasClass("disabled")?!1:(Alert.hide(),void(e&&e()))}),n.find(".J-self-link").on("click",function(){recommend="",Alert.hide(),recommendLog.type=10,e&&e()})}function getService(e,n,r){(new Ajax).send({url:"/WeChat/Band/getRecommendPhone",data:{phone:e},selfErrorBack:!0},function(e){n&&n(e)},function(e){r&&r(e)})}var Ajax,recommend,recommendLog,$=require("zepto"),Alert=(require("common/bubble/bubble"),require("common/alert/alert")),_selServiceTmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div class="service-alert-content">\r\n	',__p+=2==userList.length?'\r\n	<p class="title">请选择一位朋友作为您的推荐人(<b>2选1</b>)</p>\r\n	':'\r\n	<p class="title">请确认您的推荐人</p>\r\n	',__p+='\r\n	<ul class="service-list">\r\n		',$.each(userList,function(e,n){__p+='\r\n		<li>\r\n			<div class="img-wrap headimg" style="background-image:url('+(null==(__t=n.headImg)?"":__t)+')"></div>\r\n			<p class="user-name">'+(null==(__t=n.userName)?"":__t)+'</p>\r\n			<p class="phone-label">'+(null==(__t=n.phone)?"":__t)+'</p>\r\n			<a class="J-sel-btn btnl" recommend="'+(null==(__t=n.recommend)?"":__t)+'">就Ta了</a>\r\n		</li>\r\n		'}),__p+="\r\n	</ul>\r\n</div>";return __p},_phoneServiceTmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div class="service-alert-content">\r\n	<p class="title">请填写您的推荐人</p>\r\n	<div class="input-wrap phone-wrap">\r\n        <label>手机号</label>\r\n        <input class="J-phone" type="tel" name="phone" placeholder="请输入推荐人手机号码" autocomplete="off">\r\n    </div>\r\n    <div class="userinfo"></div>\r\n    <div class="btn-content">\r\n    	<button type="button" class="J-submit btnl btnl-wx disabled">确认</button>\r\n    </div>\r\n    <div class="link-wrap">\r\n        <a class="J-self-link link">我自己逛来的</a>\r\n    </div>\r\n</div>';return __p};module.exports={start:validService}});
;define("common/login-pop/index",function(require,exports,module){function show(n){Pop.show({content:_tmpl(),hasClose:!1,manualClose:n.manualClose}),init(n)}function init(n){options=n,Ajax=n.Ajax,$yzmBt=$("#J-yzm-bt"),$submitBt=$("#J-phone-ok"),$phone=$("#J-phone"),$code=$("#J-code"),$yzmBt.on("click",getCode),$submitBt.on("click",login)}function getCode(){function n(){setTimeout(function(){return o--,$yzmBt.text(o),0>=o?(disabled=!1,void $yzmBt.text("获取验证码").removeClass("disabled")):void n()},1e3)}if(disabled)return!1;var e=$phone.val(),o=60;return(new Ajax).send({url:"/WeChat/Band/sendMsg",data:{phone:e}},function(){disabled=!0,$yzmBt.text(o).addClass("disabled"),n()}),!1}function login(){function n(){(new Ajax).send({url:"/WeChat/Band/bandAccount",type:"post",data:e},function(){loagining=!1,Pop.hide(),options.loginSuc&&options.loginSuc()},function(){loagining=!1})}var e,o=$phone.val(),t=$code.val();return o?/^\d{11}$/.test(o)?t?loagining?!1:(e={phone:o,code:t},"object"==typeof phpdata&&$.each(["channelType","channelId"],function(n,o){phpdata[o]&&(e[o]=phpdata[o])}),loagining=!0,options.noSelRecommend?n():ConfirmService.start(o,t,Ajax,function(o){o&&(e.recommend=o),n()},function(){loagining=!1}),!1):(Bubble.show("请输入验证码"),!1):(Bubble.show("请输入正确的手机号码"),!1):(Bubble.show("请输入您的手机号码"),!1)}var Ajax,options,$yzmBt,$submitBt,$phone,$code,$=require("zepto"),Pop=require("common/pop/index"),Bubble=require("common/bubble/bubble"),ConfirmService=(require("common/alert/alert"),require("common/confirm-service/index")),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<section class="phone-panel">\r\n	<div class="input-wrap">\r\n		<label>手机号</label>\r\n		<input id="J-phone" type="tel" placeholder="请输入您的手机号码" />\r\n	</div>\r\n	<div class="yzm">\r\n		<div class="input-wrap">\r\n			<label>验证码</label>\r\n			<input id="J-code" type="tel" placeholder="输入验证码" />\r\n		</div>\r\n		<button style="vertical-align: top;" id="J-yzm-bt" type="button">获取验证码</button>\r\n	</div>\r\n	<div>\r\n		<button id="J-phone-ok" class="btnl btnl-wx">确认</button>\r\n	</div>\r\n</section>';return __p},disabled=!1,loagining=!1;module.exports={show:show,init:init}});
;define("common/ajax/index",function(o,e,t){function a(){}var n=o("zepto"),r=o("common/bubble/bubble"),i=o("common/config/index"),u=o("common/login-pop/index");a.prototype={send:function(o,e,t){var c=this;o||(o={}),"dev"==i.mod?(o.dataType="jsonp",o.type="get",o.url=i.host+o.url):o.dataType=o.dataType||"json",o.url+=o.url.match(/\?[^=]+=.*$/)?"&isAjax=1":"?isAjax=1",o.success=function(n){if(o.selfBack)return void(e&&e(n));var i=n.msg,s=n.url;if(0==n.code){if(e&&e(n.result,n),o.selfSucBack)return}else{if(1e3==n.code)return void u.show({Ajax:a,loginSuc:function(){return o.selfLoginSuc?void o.selfLoginSuc():void c.send(o,e,t)}});if(t&&t(n),o.selfErrorBack)return}i?(r.show(i),s&&setTimeout(function(){location.href=s},2e3)):s&&(location.href=s)},o.error=function(){r.show("啊哦，网络异常啦！检查下网络吧~"),t&&t()},n.ajax(o)}},a.formatAjaxParams=function(o){var e=n(o),t=e.attr("ajax-data"),a={url:e.attr("ajax-url"),type:e.attr("ajax-type")||"get"};return t&&(a.data=JSON.parse(t)),a},t.exports=a});
;define("common/page-loader/index",function(o,n,i){function e(o){this.options=o,this.$container=l(o.container),this.$seeMore=l(o.seeMore),this.$loading=l(o.loading),this.getHtml=o.getHtml,this.pageNum=o.pageBegin||1,this.loading=!1,this.hasAll=!1,this.scrollKey=o.scrollKey,this.isScrollInit=!0,this._init()}var t="click",l=o("zepto"),s=window,r=l(s),a=s.scrollY,c=r.height();e.prototype={loadFirst:function(){return this._rendData(),this},loadEnd:function(o){this._loadEndBack=o},_init:function(){this._addEvents()},_addEvents:function(){function o(){return"none"==n.$container.css("display")?!1:n.hasAll?!1:!0}var n=this;n.options.seeMore?n.$seeMore.on(t,function(i){o()&&(n._rendData(),i.preventDefault())}):(n.scrollKey?n._scollTo(n.scrollKey):n.isScrollInit=!1,r.on("scroll",function(){!n.isScrollInit&&n.scrollKey&&sessionStorage.setItem(n.scrollKey,scrollY),o()&&n._scroll()}))},_scollTo:function(o){var n=sessionStorage.getItem(o),i=this;return n?window.scrollY>=n?void(i.isScrollInit=!1):void setTimeout(function(){window.scroll(0,n),i._scollTo(o)},50):void(i.isScrollInit=!1)},_scroll:function(){var o,n=this,i=s.scrollY,e=i>=.9*(l(document).height()-c);o=i>=a?"up":"down",a=i,!n.loading&&"up"==o&&e&&n._rendData()},_rendData:function(){var o=this,n=o.pageNum,i=o.$loading.length>0?o.$loading:l("#J-loading");return o.loading?!1:(o.loading=!0,i.css("display","block"),void o.getHtml(n,function(n,e){o.loading=!1,i.css("display","none"),1==o.pageNum?(o.$container.html(n),o.$seeMore[0]&&o.$seeMore.css("display","block")):o.$container.append(n),o.pageNum++,(!n.trim()||e&&o.$container.children().length>=e)&&(o.hasAll=!0,o._loadEndBack&&o._loadEndBack(),o.$seeMore[0]&&o.$seeMore.remove())}))}},i.exports=e});
;define("chat/client-list/index",function(require,exports,module){function init(){initPageLoader(),addEvent()}function addEvent(){$clientList.on("click",".J-contact-him",showPop)}function initPageLoader(){var curList,curPageNum=1;new PageLoader({container:$clientList,seeMore:".see-more",getHtml:function(pageNum,back){curPageNum=pageNum,(new Ajax).send({url:"/User/Customer/customerList",data:{type:listType,atten:atten,page:pageNum}},function(result){curList=result.list,back&&back(function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+="",$.each(list,function(t,n){__p+='\r\n<li>\r\n	<div class="img-content">\r\n		<div class="img-wrap" \r\n		',n.headimgurl&&(__p+='\r\n		style="background-image: url('+(null==(__t=n.headimgurl)?"":__t)+');"\r\n		'),__p+="\r\n		>\r\n		</div>\r\n		",1==n.newOne&&(__p+='\r\n		<i class="new"></i>\r\n		'),__p+='\r\n	</div>\r\n	<div class="info">\r\n		<p class="name"><span>'+(null==(__t=n.nickname)?"":__t)+'</span></p>\r\n		<p class="time">'+(null==(__t=n.remark)?"":__t)+'</p>\r\n	</div>\r\n	<div class="opt-wrap">\r\n		',__p+=1==n.canChat?'\r\n		<a chart-href="/User/Customer/single?touser='+(null==(__t=n.uid)?"":__t)+'" tel="'+(null==(__t=n.phone)?"":__t)+'" class="J-contact-him contact-btn">联系他</a>\r\n		':'\r\n		<a tel="'+(null==(__t=n.phone)?"":__t)+'" class="J-contact-him contact-btn disabled">联系他</a>\r\n		',__p+="\r\n	</div>\r\n</li>\r\n"}),__p+="";return __p}({list:curList,pageNum:pageNum}),+$(".atten-nav .active .amount").text())})}}).loadFirst().loadEnd(function(){1==curPageNum&&0==curList.length&&$clientList.html('<li class="nodata">暂无客户</li>')})}function showPop(){var $cur=$(this),tel=$cur.attr("tel"),chartHref=$cur.attr("chart-href");if(2==listType)return void(location.href=chartHref);var _tmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div class="contact-panel">\r\n	<div class="title">联系方式</div>\r\n	<div class="btn-wrap">\r\n		',chartHref&&(__p+='\r\n		<a href="'+(null==(__t=chartHref)?"":__t)+'" class="J-chat-chat btnl btnl-wx">聊一聊</a>\r\n		'),__p+='\r\n		<a href="tel:'+(null==(__t=tel)?"":__t)+'" class="btnl btnl-default">打电话</a>\r\n		<a href="sms:'+(null==(__t=tel)?"":__t)+'" class="btnl btnl-default">发短信</a>\r\n	</div>\r\n</div>';return __p};Pop.show({autoY:!0,content:_tmpl({chartHref:chartHref,tel:tel})})}var $=require("zepto"),Ajax=require("common/ajax/index"),PageLoader=require("common/page-loader/index"),Util=(require("common/bubble/bubble"),require("common/util/index")),Pop=require("common/pop/index"),listType=Util.getParam("type")||0,atten=Util.getParam("atten")||0,$clientList=$(".client-list");init()});