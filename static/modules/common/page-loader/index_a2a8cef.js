define("common/page-loader/index",function(o,n,i){function e(o){this.options=o,this.$container=l(o.container),this.$seeMore=l(o.seeMore),this.$loading=l(o.loading),this.getHtml=o.getHtml,this.pageNum=o.pageBegin||1,this.loading=!1,this.hasAll=!1,this.scrollKey=o.scrollKey,this.isScrollInit=!0,this._init()}var t="click",l=o("zepto"),s=window,r=l(s),a=s.scrollY,c=r.height();e.prototype={loadFirst:function(){return this._rendData(),this},loadEnd:function(o){this._loadEndBack=o},_init:function(){this._addEvents()},_addEvents:function(){function o(){return"none"==n.$container.css("display")?!1:n.hasAll?!1:!0}var n=this;n.options.seeMore?n.$seeMore.on(t,function(i){o()&&(n._rendData(),i.preventDefault())}):(n.scrollKey?n._scollTo(n.scrollKey):n.isScrollInit=!1,r.on("scroll",function(){!n.isScrollInit&&n.scrollKey&&sessionStorage.setItem(n.scrollKey,scrollY),o()&&n._scroll()}))},_scollTo:function(o){var n=sessionStorage.getItem(o),i=this;return n?window.scrollY>=n?void(i.isScrollInit=!1):void setTimeout(function(){window.scroll(0,n),i._scollTo(o)},50):void(i.isScrollInit=!1)},_scroll:function(){var o,n=this,i=s.scrollY,e=i>=.9*(l(document).height()-c);o=i>=a?"up":"down",a=i,!n.loading&&"up"==o&&e&&n._rendData()},_rendData:function(){var o=this,n=o.pageNum,i=o.$loading.length>0?o.$loading:l("#J-loading");return o.loading?!1:(o.loading=!0,i.css("display","block"),void o.getHtml(n,function(n,e){o.loading=!1,i.css("display","none"),1==o.pageNum?(o.$container.html(n),o.$seeMore[0]&&o.$seeMore.css("display","block")):o.$container.append(n),o.pageNum++,(!n.trim()||e&&o.$container.children().length>=e)&&(o.hasAll=!0,o._loadEndBack&&o._loadEndBack(),o.$seeMore[0]&&o.$seeMore.remove())}))}},i.exports=e});