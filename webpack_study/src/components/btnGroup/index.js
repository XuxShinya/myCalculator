import tpl from './index.tpl';
import './index.css';
export default class BtnGroup {
    constructor(ev) {
        this.name = 'BtnGroup'
    }
    tpl() {
        const myDiv = document.createElement('div');
        myDiv.classList = 'btnGroup';
        myDiv.innerHTML = tpl();
        return myDiv;
    }
}