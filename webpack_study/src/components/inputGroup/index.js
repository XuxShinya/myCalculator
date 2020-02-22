import tpl from './index.tpl'
export default class InputGroupConponent {
    constructor(ev) {
        this.name = 'InputGroupConponent';
    }
    tpl() {
        const myDiv = document.createElement('div')
        myDiv.innerHTML = tpl()
        return myDiv
    }
}