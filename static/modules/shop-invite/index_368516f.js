define("shop-invite/index",function(i){function e(){return"app"==c.getParam("tjz_from")?void t("#J-invite-friend").on("click",function(){taojinzi.share(JSON.stringify({title:title,link:link,imgUrl:imgUrl,desc:desc,objectType:objectType,objectId:objectId,type:c.getParam("type")||"1980"}))}):(new o("#J-invite-friend"),void n())}function n(){}var t=i("zepto"),o=i("common/guide/guide"),c=i("common/util/index");e()});