define("common/cart-ani/index",function(t,e,o){function i(t,e){this.$cart=n(e),this.$img=n(t)}var n=t("zepto");i.prototype={fly:function(t){var e=this.$img,o=this.$cart,i=n(document.createElement("div")),f=e.clone(),s=o.width(),h=o.height();i.on("touchstart",function(t){t.preventDefault(),t.stopPropagation()}),i.offset({top:e.offset().top,left:e.offset().left}).css({opacity:"1",position:"absolute",height:e.height(),width:e.width(),"z-index":"10000"}).append(f.css({position:"absolute",width:"100%",height:"100%"})).appendTo(n("body")),i.animate({top:o.offset().top+(h-10)/2,left:o.offset().left+(s-10)/2,width:"20px",height:"20px"},800,"ease-in-out",function(){i.remove(),t&&t()})}},o.exports=i});