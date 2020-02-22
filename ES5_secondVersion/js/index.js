;
(function(doc, initTools, initCompute) {
    let myCalculator = doc.getElementsByClassName('J_calculator')[0];
    let myAnswer = myCalculator.getElementsByTagName('span')[0];
    let myInput = myCalculator.getElementsByTagName('input');
    let btnGroup = myCalculator.getElementsByClassName('btnGroup')[0];

    let init = function() {
        bindEvent()
    }

    function bindEvent() {
        btnGroup.addEventListener('click', handleClick, false);
    }

    function handleClick(ev) {
        let tar = initTools.getEventTarget(ev)
        tagName = tar.tagName.toLowerCase();
        if (tagName === 'button') {
            let fVal = initTools.digitalNum(myInput[0].value),
                sVal = initTools.digitalNum(myInput[1].value),
                method = tar.getAttribute('data-method');
            handleResult(initCompute[method](fVal, sVal));
        };
    };

    function handleResult(val) {
        myAnswer.innerText = val;
    };

    init();
})(document, initTools, initCompute)