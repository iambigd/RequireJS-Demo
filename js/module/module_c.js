//module_c
//依靠 module_a與module_b
define(['module_a', 'module_b'], function(a, b) {
    //doSomethig
    return {
        who: function () {
            return a.who() + " | " + b.who();
        }
    }
})