define("common/gold/index",function(n){function o(){t(),c(),i()}function t(){var o=n("zepto");o(".btn").on("touchstart",function(){})}function c(){var o=n("zepto"),t=o("body").attr("no-fastclick"),c=n("fastclick");t||c(document.body)}function i(){n("common/copyright/index").render()}o()});