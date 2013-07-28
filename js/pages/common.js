
//如果專案有多個頁面的話，可以將requirejs.config提出來當共用模組
requirejs.config({
    baseUrl: "js",//基礎模組載入入徑
    paths: {
        "module_a": "module/module_a",
        "module_b": "module/module_b",
        "module_c": "module/module_c",
        "jquery": "lib/jquery-1.7.2.min"//path的路徑會基於baseUrl做串接
    }
});

