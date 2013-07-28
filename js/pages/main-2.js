
requirejs.config({
    baseUrl: "js",//基礎模組載入入徑
    paths: {
        
        // * <moduleID>:<module path，相對於baseUrl參數>
        // *
        // * Ends in ".js".
        // * Starts with a "/".
        // * Contains an URL protocol, like "http:" or "https:".
        
        "module_a": "module/module_a",
        "module_b": "module/module_b",
        "module_c": "module/module_c",

        "jquery": "lib/jquery-1.7.2.min"//path的路徑會基於baseUrl做串接
    }
});

// 最後就可以使用簡單的module name來使用相關的module
// 以下是以jquery為例
require(["jquery","module_a","module_b","module_c"],
    function ($,module_a,module_b,module_c) {

    $("body").append("Hello RequireJS Module")
    console.log("print module_a result:");
    console.log(module_a.who());

    console.log("print module_b result:");
    console.log(module_b.who());

    console.log("print module_c result:");
    console.log(module_c.who());
});
