define("common/tabs/index",function(t,n,i){function c(t){this.nav=a(t.nav),this.content=a(t.content),this.active=t.active||"active",this.switchBack=t.switchBack,this._init()}var a=t("zepto");c.prototype={_init:function(){var t=this,n=t.nav.filter(".active"),i=a(t.content[t._getOrder(n)]);t.content.css("display","none"),i.css("display","block"),t._addEvent()},_addEvent:function(){var t=this;t.nav.on("click",function(n){t._switch(n)})},_switch:function(t){{var n,i=this,c=i.active,e=a(t.currentTarget);i.nav.parent()}e.hasClass(c)||(n=a(i.content[i._getOrder(e)]),i.nav.removeClass(c),e.addClass(c),i.content.css("display","none"),n.css("display","block"),i.switchBack&&i.switchBack())},_getOrder:function(t){var n=this,i=0;return n.nav.each(function(n,c){return c===t[0]?(i=n,!1):void 0}),i}},i.exports=c});