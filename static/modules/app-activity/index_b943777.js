define("app-activity/index",function(t){var i=t("zepto"),a=t("common/timer/timer"),n=t("common/util/index");n.phpdataReady(function(){i(".J-timer").each(function(t,i){new a(i,"time").start().end(function(){})})}),i(".section-item").on("click",function(){var t=i(this),a="",n=t.attr("act-id"),c=t.attr("act-link"),e=t.find(".img-wrap").css("background-image").match(/url\((.*)\)/)[1],r="",o=t.attr("act-type"),m=4;switch(o){case"cut":a="快来帮我砍价哇，我看中这个商品啦",r="【越砍越便宜】限时好货，价格砍到底。--淘金子";break;case"group":a="亲，这个商品太划算啦，一起来拼团购哟~",r="【底价拼团】抄底好货，拼团抢购。--淘金子",m=5}taojinzi.share(JSON.stringify({actId:n,title:a,link:c,imgUrl:e,desc:r,type:m}))})});