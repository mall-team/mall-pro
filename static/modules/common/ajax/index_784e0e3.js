define("common/ajax/index",function(o,e,t){function a(){}var n=o("zepto"),r=o("common/bubble/bubble"),i=o("common/config/index"),u=o("common/login-pop/index");a.prototype={send:function(o,e,t){var c=this;o||(o={}),"dev"==i.mod?(o.dataType="jsonp",o.type="get",o.url=i.host+o.url):o.dataType=o.dataType||"json",o.url+=o.url.match(/\?[^=]+=.*$/)?"&isAjax=1":"?isAjax=1",o.success=function(n){if(o.selfBack)return void(e&&e(n));var i=n.msg,s=n.url;if(0==n.code){if(e&&e(n.result,n),o.selfSucBack)return}else{if(1e3==n.code)return void u.show({Ajax:a,loginSuc:function(){return o.selfLoginSuc?void o.selfLoginSuc():void c.send(o,e,t)}});if(t&&t(n),o.selfErrorBack)return}i?(r.show(i),s&&setTimeout(function(){location.href=s},2e3)):s&&(location.href=s)},o.error=function(){r.show("啊哦，网络异常啦！检查下网络吧~"),t&&t()},n.ajax(o)}},a.formatAjaxParams=function(o){var e=n(o),t=e.attr("ajax-data"),a={url:e.attr("ajax-url"),type:e.attr("ajax-type")||"get"};return t&&(a.data=JSON.parse(t)),a},t.exports=a});