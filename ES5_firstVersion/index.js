;
(function() {
    let myCalculator = document.getElementsByClassName('J_calculator')[0];
    let myAnswer = myCalculator.getElementsByTagName('span')[0];
    let fInput = myCalculator.getElementsByTagName('input')[0];
    let sInput = myCalculator.getElementsByTagName('input')[1];
    let btnGroup = myCalculator.getElementsByClassName('btnGroup')[0];

    let init = function() {
        bindEvent()
    }

    function bindEvent() {
        btnGroup.addEventListener('click', handleClick, false);
    }

    function handleClick(ev) {
        let e = ev || window.event,
            tar = e.target || e.srcElement,
            tagName = tar.tagName.toLowerCase();
        if (tagName === 'button') {
            let fVal = Number(fInput.value.replace(/\s+/g, '')) || 0,
                sVal = Number(sInput.value.replace(/\s+/g, '')) || 0,
                method = tar.getAttribute('data-method');
            switch (method) {
                case 'plus':
                    myAnswer.innerText = fVal + sVal;
                    break;
                case 'minus':
                    myAnswer.innerText = fVal - sVal;
                    break;
                case 'mul':
                    myAnswer.innerText = fVal * sVal;
                    break;
                case 'div':
                    myAnswer.innerText = fVal / sVal;
                    break;
                default:
                    break;
            }
        }
    }


    init()

})()