import Calculator from '../module/calculator';
((doc) => {
    const myCalculator = doc.getElementsByClassName('J_calculator')[0];

    const init = () => {
        new Calculator(myCalculator).init()
    }
    init()
})(document)