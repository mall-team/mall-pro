define("question/index",function(i){function n(){e(),t(),h.init()}function e(){r("#J-file-input").on("change",o),g.on("click",".item-preview .img-wrap",c),g.on("click",".J-close",l),r(".J-star-bar").on("click",a)}function a(i){var n=r(this),e=n.width()/5,a=Math.ceil(i.layerX/e);0==a&&(a=1),n.find(".star-inner").width(a*e),r("#J-score-input").val(a)}function t(){u.init({validateFunc:function(){return f.val()?!0:(d.show("请输入你的建议"),!1)}})}function o(){function i(){m(a[o],{width:500}).then(function(c){return(new s).send({url:r("#J-uploader-url").val(),type:"post",data:{image:c.base64,size:c.base64Len}},function(c){var c=c||{url:""};o>=t-1||o>=8?(uploading=!1,a=null,v.reset()):i(),o++,n.removeClass("loading"),e.before('<div class="item item-preview">								<div class="J-close close"></div>								<div class="img-wrap item-inner" style="background-image:url('+c.url+')"></div>								<input type="hidden" name="imgUrl[]" value="'+c.url+'" />							</div>'),g.children().length>9&&e.css("display","none")}),c}).catch(function(){})}var n=r(this).parent(),e=n.parent(".item"),a=this.files,t=a.length,o=0;uploading=!0,n.addClass("loading"),i()}function c(){var i=r(this),n=[],e=0;g.find(".item-preview .img-wrap").each(function(a,t){i[0]==t&&(e=a),n.push(r(t).css("background-image").match(/url\((.*)\)/)[1])}),p.show(n,e)}function l(i){i.stopPropagation();var n=r(this);n.parent(".item").remove(),g.children(".item-upload").css("display","block")}var r=i("zepto"),s=i("common/ajax/index"),d=i("common/bubble/bubble"),u=i("common/j-ajax/index"),m=i("common/lrz/index"),p=i("common/preview/index"),h=i("common/j-disabled/index"),v=i("common/copyright/index"),f=r("#J-area"),g=(r("#J-phone"),r("#J-uploader-list"));n()});