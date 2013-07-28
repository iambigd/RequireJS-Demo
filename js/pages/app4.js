define(function (require) {

    //在需求的頁面再載入相關的模組
    var $ = require("jquery");

    var moduleA = require("module_a");
    // console.log(moduleA);

    $(function () {

        $("body").append("Load App4")
        console.log(moduleA.who());

    });
});
