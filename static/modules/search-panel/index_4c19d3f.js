define("search-panel/index",function(n){function i(){l=!0,s.css("display","block")}function c(){l=!1,s.css("display","none")}var e=n("zepto"),o=e("#J-search-panel"),a=o.find('input[type="search"]'),s=o.find(".icon-clear"),l=!1,t=!1;a.val()&&i(),a.addClass("noOpt"),s.on("click",function(){a.val(""),c()}),a.on("focus",function(){t||(a.val("").removeClass("noOpt"),c(),t=!0)}),a.on("input",function(){if(a.val()){if(l)return;i()}else c()})});