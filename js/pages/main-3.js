requirejs.config({
    baseUrl: "js", //基礎模組載入入徑
    paths: {
        /*
         * <moduleID>:<module path，相對於baseUrl參數>
         *
         * Ends in ".js".
         * Starts with a "/".
         * Contains an URL protocol, like "http:" or "https:".
         */
        "jquery.who": "plugins/jquery.who",
        "jquery": "lib/jquery-1.7.2.min", //path的路徑會基於baseUrl做串接
        "shim": {//用於載入未使用AMD規範的模組
           //"<module name>":"["<require module name>"]"
        }
    }
});

//最後就可以使用簡單的module name來使用相關的module
//以下是以jquery為例
require(["jquery", "jquery.who"], function($) {
    $("body").who();
});