function init(){addEvent()}function addEvent(){$(".signin-btn").on("click",sign),$("#prizestar").on("click",start)}function sign(){var t=$(this);t.hasClass("disabled")||$.ajax({url:" /Game/LotteryDraw/sign",dataType:"json",type:"POST",success:function(a){console.log(a),t.addClass("disabled").text("已签到")}})}function start(){$.ajax({url:"/Game/LotteryDraw/startLucky",dataType:"json",type:"POST",success:function(){rotateFunc(prizeDeg[2],prizeDes[0])}})}function rotateFunc(t,a){var n=720;t+=n,$("#rotatebg").stopRotate(),$("#rotatebg").rotate({angle:0,duration:1e4,animateTo:t,callback:function(){webh5v2.showWindow("<span>"+a+"</span>",{title:"提示",width:280,height:80,modal:!0,actions:[{name:"确定",callback:function(){webh5v2.hideWindow()}}]})}})}var Ajax=require("common/ajax/index"),prizeDeg=[360,318,278,238,200,159,119,80,40],prizeDes=["恭喜您获得荣事达咖啡机，请回复消息“#欢乐颂荣事达咖啡机#+中奖人姓名+手机号+收货地址”到铂涛会官方微信，我们将以此作为寄送奖品时的收货信息。","恭喜您获得10元抵用券,我们会在48小时内将奖品存入您账户，届时请注意查收。","恭喜您获得100积分,我们会在48小时内将奖品存入您账户，届时请注意查收。","恭喜您获得免费房法宝，我们会在48小时内将奖品存入您账户，届时请注意查收。","恭喜您获得20积分,我们会在48小时内将奖品存入您账户，届时请注意查收。","恭喜您抽中伊莱克斯电饭煲，请回复消息“#欢乐颂伊莱克斯电饭煲#+中奖人姓名+手机号+收货地址”到铂涛会官方微信，我们将以此作为寄送奖品时的收货信息。","恭喜您抽中梦百合记忆枕，请回复消息“#欢乐颂梦百合记忆枕#+中奖人姓名+手机号+收货地址”到铂涛会官方微信，我们将以此作为寄送奖品时的收货信息。","谢谢您的参与","恭喜您获得50积分,我们会在48小时内将奖品存入您账户，届时请注意查收。"];init();