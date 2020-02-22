let initTools = (function() {
    function digitalNum(str) {
        return Number(str.replace(/\s+/g, '')) || 0;
    };

    function getEventTarget(ev) {
        let e = ev || window.event;
        return e.target || e.srcElement;
    }
    return {
        digitalNum,
        getEventTarget
    }
})()

let initCompute = (function() {
    function plus(a, b) {
        return a + b;
    };

    function minus(a, b) {
        return a - b;
    };

    function mul(a, b) {
        return a * b;
    };

    function div(a, b) {
        return a / b;
    };
    return {
        plus,
        minus,
        mul,
        div
    }
})()