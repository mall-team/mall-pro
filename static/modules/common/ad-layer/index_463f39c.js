define("common/ad-layer/index",function(require,exports,module){function init(){window.shareSuccess=show}function show(e){e=e||{link:""},e.hasMask=0==$("#J-guide").length,$(document.body).append($(_tmpl(e))),$layer=$("#J-ad-layer"),$mask=$layer.find(".mask"),$close=$layer.find(".close"),$close.on("click",close),$mask.on("click",close)}function close(){return $layer.remove(),!1}var $layer,$mask,$close,$=require("zepto"),_tmpl=function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='<div id="J-ad-layer" class="ad-layer">\r\n	',hasMask&&(__p+='\r\n		<div class="mask"></div>\r\n	'),__p+='\r\n	<a href="'+(null==(__t=link)?"":__t)+'" class="ad-content">\r\n		<span class="close"></span>\r\n	</a>\r\n</div>';return __p};init()});