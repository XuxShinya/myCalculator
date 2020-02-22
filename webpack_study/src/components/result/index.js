import tpl from './index.tpl'
export default class ResultComponent {
    constructor(ev) {
        this.name = 'ResultComponent'
    }

    tpl() {
        const myDiv = document.createElement('div')
        myDiv.innerHTML = tpl()
        return myDiv
    }
}