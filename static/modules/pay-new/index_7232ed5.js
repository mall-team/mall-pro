define("pay-new/index",function(require,exports,module){function init(){new Timer("#J-wait-timer",function(e){var t=parseInt(e/60,10),a=e-60*t;return Timer.addZero(t)+":"+Timer.addZero(a)}).start(),calculateMoney(),initLastMoney(),addEvent(),$address.hasClass("no-address")&&showAddr()}function addEvent(){$address.on("click",showAddr),$("#J-pay-other").on("click",function(){Pop.show({content:payTmpl(),hasClose:!1}),$payBtn=$(".J-pay-btn"),$payBtn.off("click",toPay),$payBtn.on("click",toPay)}),$payBtn.on("click",toPay),$("#J-ticket-section").on("click",showTicket)}function showTicket(){var e=$(this),t=$("#J-ajaxurl-ticketList"),a=t.val(),n=JSON.parse(t.attr("ajaxParams"));return e.hasClass("disabled")?!1:void TicketPop.show({curId:$useTicket.val(),ajaxUrl:a,ajaxParams:n,orderMoney:totalVal,selected:function(t,a){-1==t?(e.find(".ticket-num b").text(a),e.addClass("nouse-ticket"),$useTicket.val(""),$minusTicket.css("display","none")):($("#J-ticket-price").text(t.coupon_amount),e.removeClass("nouse-ticket"),$useTicket.val(t.id),$minusTicket.find(".price b").text(t.coupon_amount),$minusTicket.css("display","inline")),calculateMoney()}})}function showAddr(){Address.show({selected:function(e){e&&e.recipient_name?(e.recipient_identity_card&&$("#J-idcard").val(e.recipient_identity_card),$address.find(".user-name").text(e.recipient_name),$address.find(".tel").text(e.recipient_phone),$address.find(".addr-addr").text(e.province_name+e.city_name+e.region_name+e.recipient_address),$address.removeClass("no-address"),$("#J-addr-id").val(e.id)):$("#J-address").addClass("no-address")}})}function toPay(){var e=$(this),t=$("#J-pay-form"),a=e.attr("type"),n=$("#J-idcard");if(n.length>0){var i=n.parent().find(".icon-warning"),s=n.val();if(18!=s.length||!Util.IdCard.valid(s))return Bubble.show(""===s?"请输入身份证号！":"身份证号格式错误！"),window.scroll(0,0),i.css("display","inline-block"),!1}return $payTypeInput.val(a),wxLoading?!1:(wxLoading=!0,curBtnText=e.text(),e.addClass("disabled").text("正在努力加载，请稍候..."),(new Ajax).send({url:t.attr("action"),data:t.serialize(),type:t.attr("method")},function(e){var t=e.orderId;t&&$("#J-order-id").val(t),e.wxPayParams&&(wxPayData=e,wxPay())},function(t){wxLoading=!1,e.text(curBtnText).removeClass("disabled");var a=t.result.orderId;a&&$("#J-order-id").val(a)}),!1)}function wxPay(){"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",jsApiCall,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",jsApiCall),document.attachEvent("onWeixinJSBridgeReady",jsApiCall)):jsApiCall()}function jsApiCall(){WeixinJSBridge.invoke("getBrandWCPayRequest",JSON.parse(wxPayData.wxPayParams),function(e){wxLoading=!1,$(".J-pay-btn.btnl-wx").removeClass("disabled").text("微信安全支付"),WeixinJSBridge.log(e.err_msg),"get_brand_wcpay_request:ok"==e.err_msg?setTimeout(function(){location.href=wxPayData.wxPaySucUrl},500):"get_brand_wcpay_request:cancel"!=e.err_msg&&alert(e.err_code+" "+e.err_desc)})}function initLastMoney(){0==lastVal?$moneyLast.addClass("disabled"):$moneyLast.addClass("usable").on("click",function(){var e=$(this);e.hasClass("selected")?(e.removeClass("selected"),$useLastInput.val(0)):(e.addClass("selected"),$useLastInput.val(1),$("#J-taobi-last").removeClass("selected"),$("#J-use-taobi").val(0)),calculateMoney()})}function calculateMoney(){var e=0!=$useLastInput.val(),t=!!$useTicket.val(),a=0!=$("#J-use-taobi").val(),n=+$("#J-ticket-price").text(),i=totalVal,s=i,d=$("#J-minus-taobi"),l=+$("#J-taobi-last-val").val()||0;t?(s=i=(i-n).toFixed(2),$lastPay.text(i),$minusTicket.find(".price b").text(n),$minusTicket.css("display","inline")):(isInit||$lastPay.text(i),$minusTicket.css("display","none")),$minusContent.css("display","none"),d.css("display","none"),e?(i=(i-lastVal).toFixed(2),0>=i?(i=0,$lastPay.text(s),$minusContent.css("display","none"),$lastPayLabel.text("需付"),$(".btnl-yue").text("余额安全支付"),$("footer").addClass("use-yue")):($lastPay.text(i),$minusContent.find(".price b").text(lastVal),$minusContent.css("display","inline"),$lastPayLabel.text("还需支付"),$("footer").removeClass("use-yue"))):a?(i=(i-l).toFixed(2),0>=i?(i=0,$lastPay.text(s),d.css("display","none"),$lastPayLabel.text("需付"),$(".btnl-yue").text("淘币安全支付"),$("footer").addClass("use-yue")):($lastPay.text(i),d.find(".price b").text(l),d.css("display","inline"),$lastPayLabel.text("还需支付"),$("footer").removeClass("use-yue"))):($lastPayLabel.text("需付"),$("footer").removeClass("use-yue")),isInit=!1,$needPayInput.val(i)}var wxPayData,curBtnText,$=require("zepto"),Pop=require("common/pop/index"),Address=require("common/address/index"),Ajax=require("common/ajax/index"),Timer=require("common/timer/timer"),Util=require("common/util/index"),Bubble=require("common/bubble/bubble"),TicketPop=require("common/ticket-pop/index"),payTmpl=function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div class="pay-types">\r\n	<button class="J-pay-btn btnl btnl-default" type="1">支付宝</button>\r\n	<!-- <button class="J-pay-btn btnl btnl-default" type="3">银联支付</button> -->\r\n</div>';return __p},totalVal=+$("#J-total-val").val(),lastVal=+$("#J-last-val").val(),$moneyLast=$("#J-money-last"),$minusTicket=$("#J-minus-ticket"),$minusContent=$("#J-minus-content"),$lastPay=$("#J-last-pay"),$lastPayLabel=$("#J-last-text"),$useTicket=$("#J-use-ticket"),$useLastInput=$("#J-use-last"),$payTypeInput=$("#J-pay-type"),$needPayInput=$("#J-need-pay"),$payBtn=$(".J-pay-btn"),$address=$("#J-address"),wxLoading=!1,isInit=!0;!function(){var e=$("#J-idcard"),t=e.parent().find(".icon-warning"),a=e.parent().find(".icon-suc");e.on("input",function(){var n=e.val();18==n.length&&Util.IdCard.valid(n)?(t.css("display","none"),a.css("display","inline-block")):(t.css("display","inline-block"),a.css("display","none"))})}(),init()});