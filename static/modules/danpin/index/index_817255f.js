define("danpin/index/index",function(require,exports,module){function init(){addEvent(),initPreTimer(),CommentSection.init({id:productId,name:$("#J-product-name").val()}),JAjax.init(),JDisabled.init(),new Guide("#J-invite-btn","guide-klj","邀请好友来参与活动吧～<br/><i>怎么邀请？你懂得！</i>"),1==$(document.body).attr("is-over")&&remindOver(1)}function addEvent(){$(".J-remind-btn").on("click",function(){remindOver(2)}),$("#J-award-guide").on("click",function(){$(this).remove()}),$(".J-quick-buy").on("click",quickBuy)}function quickBuy(e){e.preventDefault();var n=$(this),r=$("#"+n.attr("form"));n.trigger("disabled:click"),buyRank(function(){(new Ajax).send({url:r.attr("action"),type:r.attr("method"),data:r.serialize()},function(){},function(){n.trigger("disabled:ok")})},function(){n.trigger("disabled:ok")})}function buyRank(sucBack,errorBack){(new Ajax).send({url:"/Activity/DanPin/addQueue"},function(result){0==result?sucBack&&sucBack():(firRank&&(Alert.show(function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div class="rank-alert-panel">\r\n	<div class="img-wrap"></div>\r\n	<p>努力排队中...</p>\r\n</div>';return __p}(),!1,"rank-alert"),firRank=!1),setTimeout(function(){buyRank(sucBack,errorBack)},1e3))},function(){errorBack&&errorBack()})}function remindOver(e){var n,r=1==e?!1:!0;Alert.show($("#J-remind-over").html(),r,"remind-over"),n=$("#J-bullet-screen").css("top","-"+$("#J-alert-content-wrap").css("margin-top")),(new Ajax).send({url:"/Mall/Goods/moreComment",data:{g:productId,page:2}},function(e){var r=e.commentlist.data;!r||r.length<=0||new Bullet(n,r.map(function(e){return e.customer_name+"："+e.comment_content})).start()}),new Guide("#J-share-friend","guide-klj","邀请好友来参与活动吧～<br/><i>怎么邀请？你懂得！</i>")}function initPreTimer(){var e=$(document.body).hasClass("pre");if(!e)return void start();var n=new Timer("#J-pre-timer",function(){var e=this;return(e.day>0?Timer.addZero(e.day)+"天 ":"")+Timer.addZero(e.hour)+":"+Timer.addZero(e.min)+":"+Timer.addZero(e.sec)});n.start().end(function(){location.reload()})}function start(){rendSendMoney(),setTimeout(start,5e3)}function rendSendMoney(e){(new Ajax).send({url:"/Activity/DanPin/alreadySendRedPackage"},function(n){var r=$("#J-send-money");n.redPackage!=r.text()&&(r.html(n.redPackage).addClass("money-ani"),setTimeout(function(){$("#J-send-money").removeClass("money-ani")},1e3)),e&&e()})}var $=require("zepto"),Ajax=require("common/ajax/index"),JAjax=require("common/j-ajax/index"),Guide=require("common/guide/guide"),Alert=require("common/alert/alert"),Timer=require("common/timer/timer"),JDisabled=(require("common/util/index"),require("common/j-disabled/index")),Bullet=require("common/bullet/index"),CommentSection=require("common/comment-section/index"),productId=$("#J-product-id").val(),firRank=!0;init()});