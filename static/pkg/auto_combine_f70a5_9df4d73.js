define("common/copyright/index",function(require,exports,module){function render(){if(!($("#copyright").length>0||$(".copyright").length>0)){var t=$body.attr("no-copyright");1!=t&&($body.append($(_tmpl())),$copyright=$("#copyright"),reset())}}function reset(){var t=$body.height(),o=$win.height();o>t+HEI?($body.css({"min-height":o+"px",position:"relative"}),$copyright.css({position:"absolute",width:"100%",bottom:$body.css("padding-bottom")})):$copyright.css({position:"static",width:"auto"})}var $copyright,$=require("zepto"),_tmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div id="copyright">大泽商城&nbsp;提供技术支持</div>';return __p},HEI=64,$body=$(document.body),$win=$(window);module.exports={render:render,reset:reset}});
;define("common/swipe/swipe",function(n,t,e){function i(n,t){"use strict";function e(){m=x.children,w=m.length,m.length<2&&(t.continuous=!1),h.transitions&&t.continuous&&m.length<3&&(x.appendChild(m[0].cloneNode(!0)),x.appendChild(x.children[1].cloneNode(!0)),m=x.children),E=new Array(m.length),p=n.getBoundingClientRect().width||n.offsetWidth,x.style.width=m.length*p+"px";for(var e=m.length;e--;){var i=m[e];i.style.width=p+"px",i.setAttribute("data-index",e),h.transitions&&(i.style.left=e*-p+"px",a(e,b>e?-p:e>b?p:0,0))}t.continuous&&h.transitions&&(a(s(b-1),-p,0),a(s(b+1),p,0)),h.transitions||(x.style.left=b*-p+"px"),n.style.visibility="visible"}function i(){t.continuous?r(b-1):b&&r(b-1)}function o(){t.continuous?r(b+1):b<m.length-1&&r(b+1)}function s(n){return(m.length+n%m.length)%m.length}function r(n,e){if(b!=n){if(h.transitions){var i=Math.abs(b-n)/(b-n);if(t.continuous){var o=i;i=-E[s(n)]/p,i!==o&&(n=-i*m.length+n)}for(var r=Math.abs(b-n)-1;r--;)a(s((n>b?n:b)-r-1),p*i,0);n=s(n),a(b,p*i,e||g),a(n,0,e||g),t.continuous&&a(s(n-i),-(p*i),0)}else n=s(n),c(b*-p,n*-p,e||g);b=n,f(t.callback&&t.callback(b,m[b]))}}function a(n,t,e){u(n,t,e),E[n]=t}function u(n,t,e){var i=m[n],o=i&&i.style;o&&(o.webkitTransitionDuration=o.MozTransitionDuration=o.msTransitionDuration=o.OTransitionDuration=o.transitionDuration=e+"ms",o.webkitTransform="translate("+t+"px,0)translateZ(0)",o.msTransform=o.MozTransform=o.OTransform="translateX("+t+"px)")}function c(n,e,i){if(!i)return void(x.style.left=e+"px");var o=+new Date,s=setInterval(function(){var r=+new Date-o;return r>i?(x.style.left=e+"px",L&&d(),t.transitionEnd&&t.transitionEnd.call(event,b,m[b]),void clearInterval(s)):void(x.style.left=(e-n)*(Math.floor(r/i*100)/100)+n+"px")},4)}function d(){T=setTimeout(o,L)}function l(){L=0,clearTimeout(T)}var v=function(){},f=function(n){setTimeout(n||v,0)},h={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(n){var t=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var e in t)if(void 0!==n.style[t[e]])return!0;return!1}(document.createElement("swipe"))};if(n){var m,E,p,w,x=n.children[0];t=t||{};var b=parseInt(t.startSlide,10)||0,g=t.speed||300;t.continuous=void 0!==t.continuous?t.continuous:!0;var T,y,L=t.auto||0,k={},D={},M={handleEvent:function(n){switch(n.type){case"touchstart":this.start(n);break;case"touchmove":this.move(n);break;case"touchend":f(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":f(this.transitionEnd(n));break;case"resize":f(e.call())}t.stopPropagation&&n.stopPropagation()},start:function(n){var t=n.touches[0];k={x:t.pageX,y:t.pageY,time:+new Date},y=void 0,D={},x.addEventListener("touchmove",this,!1),x.addEventListener("touchend",this,!1)},move:function(n){if(!(n.touches.length>1||n.scale&&1!==n.scale)){t.disableScroll&&n.preventDefault();var e=n.touches[0];D={x:e.pageX-k.x,y:e.pageY-k.y},"undefined"==typeof y&&(y=!!(y||Math.abs(D.x)<Math.abs(D.y))),y||(n.preventDefault(),l(),t.continuous?(u(s(b-1),D.x+E[s(b-1)],0),u(b,D.x+E[b],0),u(s(b+1),D.x+E[s(b+1)],0)):(D.x=D.x/(!b&&D.x>0||b==m.length-1&&D.x<0?Math.abs(D.x)/p+1:1),u(b-1,D.x+E[b-1],0),u(b,D.x+E[b],0),u(b+1,D.x+E[b+1],0)))}},end:function(){var n=+new Date-k.time,e=Number(n)<250&&Math.abs(D.x)>20||Math.abs(D.x)>p/2,i=!b&&D.x>0||b==m.length-1&&D.x<0;t.continuous&&(i=!1);var o=D.x<0;y||(e&&!i?(o?(t.continuous?(a(s(b-1),-p,0),a(s(b+2),p,0)):a(b-1,-p,0),a(b,E[b]-p,g),a(s(b+1),E[s(b+1)]-p,g),b=s(b+1)):(t.continuous?(a(s(b+1),p,0),a(s(b-2),-p,0)):a(b+1,p,0),a(b,E[b]+p,g),a(s(b-1),E[s(b-1)]+p,g),b=s(b-1)),t.callback&&t.callback(b,m[b])):t.continuous?(a(s(b-1),-p,g),a(b,0,g),a(s(b+1),p,g)):(a(b-1,-p,g),a(b,0,g),a(b+1,p,g))),x.removeEventListener("touchmove",M,!1),x.removeEventListener("touchend",M,!1)},transitionEnd:function(n){parseInt(n.target.getAttribute("data-index"),10)==b&&(L&&d(),t.transitionEnd&&t.transitionEnd.call(n,b,m[b]))}};return e(),L&&d(),h.addEventListener?(h.touch&&x.addEventListener("touchstart",M,!1),h.transitions&&(x.addEventListener("webkitTransitionEnd",M,!1),x.addEventListener("msTransitionEnd",M,!1),x.addEventListener("oTransitionEnd",M,!1),x.addEventListener("otransitionend",M,!1),x.addEventListener("transitionend",M,!1)),window.addEventListener("resize",M,!1)):window.onresize=function(){e()},{setup:function(){e()},slide:function(n,t){l(),r(n,t)},prev:function(){l(),i()},next:function(){l(),o()},getPos:function(){return b},getNumSlides:function(){return w},kill:function(){l(),x.style.width="auto",x.style.left=0;for(var n=m.length;n--;){var t=m[n];t.style.width="100%",t.style.left=0,h.transitions&&u(n,0,0)}h.addEventListener?(x.removeEventListener("touchstart",M,!1),x.removeEventListener("webkitTransitionEnd",M,!1),x.removeEventListener("msTransitionEnd",M,!1),x.removeEventListener("oTransitionEnd",M,!1),x.removeEventListener("otransitionend",M,!1),x.removeEventListener("transitionend",M,!1),window.removeEventListener("resize",M,!1)):window.onresize=null}}}}e.exports=i});
;define("common/swiper/index",function(i,e,n){function t(i){this.$container="string"==typeof i.container?a("#"+i.container):i.container,this.$pager="string"==typeof i.container?a("#"+i.pager):i.pager,this.swipeOptions=i.swipeOptions,this._init()}var a=i("zepto"),s=i("common/swipe/swipe");t.prototype={_init:function(){this._initSwipe()},_initSwipe:function(){var i=this,e=a.extend({startSlide:0,auto:2500,continuous:!0,disableScroll:!1,stopPropagation:!0,callback:function(){},transitionEnd:function(e){i._changePager(e)}},i.swipeOptions);i.swipe=s(i.$container[0],e),i._initPager(i.swipe.getNumSlides()),i._changePager(e.startSlide||0)},_initPager:function(i){var e=this,n=e.$pager.find("span"),t=1,a=e.sLen=i;for(n.html('<a href="javascript:;" class="sel"></a>'),t;a>t;t++)n.append('<a href="javascript:;" class="nosel"></a>')},_changePager:function(i){var e=this,n=(e.$pager,e.$pager.find("span")),t=e.sLen;if(n.children("a").attr("class","nosel"),2==t&&i>1)switch(i){case 2:n.children("a").eq(0).attr("class","sel");break;case 3:n.children("a").eq(1).attr("class","sel")}else n.children("a").eq(i).attr("class","sel")}},n.exports=t});
;define("langsha-index/index",function(n){var e=n("common/swiper/index"),o=$(".fix-panel");new e({container:"banner",pager:"bannerPager"}),o.on("click",".close",function(){o.remove(),$(document.body).css("padding-bottom","10px")})});