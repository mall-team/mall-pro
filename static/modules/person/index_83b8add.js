define("person/index",function(n){function o(){m.initCart(),t()}function t(){c("#J-exit").on("click",e),c("#J-other").on("click",i)}function e(){return(new r).send({url:"/User/Login/logout"}),!1}function i(){return u.show({title:"其它",content:c("#J-other-tmpl").html()}),!1}var c=n("zepto"),r=n("common/ajax/index"),u=n("common/pop/index"),m=n("common/nav/index");o()});