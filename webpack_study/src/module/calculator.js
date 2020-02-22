import compute from '../lib/compute'
import { replaceSpace, digitalize } from '../util/tool'

import ResultComponent from '../components/result'
import InputGroupComponent from '../components/inputGroup'
import BtnGroupComponent from '../components/btnGroup'

@compute
export default class Calculator {
    constructor(el) {
        this.name = 'Calculator';
        this.resultComponent = new ResultComponent();
        this.inputGroupComponent = new InputGroupComponent();
        this.btnGroupComponent = new BtnGroupComponent();
        this.el = el;
        // this.data = {
        //     method: 'plus',
        //     fVal: 0,
        //     sVal: 0
        // };
        this.data = this.defineData();
        this.selectIndex = 0;
    }

    init() {
        this.render()
        this.bindEvent()

    }

    render() {
        const myFrag = document.createDocumentFragment();
        myFrag.appendChild(this.resultComponent.tpl())
        myFrag.appendChild(this.inputGroupComponent.tpl())
        myFrag.appendChild(this.btnGroupComponent.tpl())
        this.el.appendChild(myFrag)

    }

    bindEvent() {
        const el = this.el;
        this.myAnswer = el.getElementsByTagName('span')[0];
        this.myInputs = el.getElementsByTagName('input');
        this.btnGroup = el.getElementsByClassName('btnGroup')[0];
        this.btnGroup.addEventListener('click', this.handleBtnClick.bind(this), false);
        this.myInputs[0].addEventListener('input', this.onInput.bind(this), false);
        this.myInputs[1].addEventListener('input', this.onInput.bind(this), false);
        this.myBtns = el.getElementsByClassName('btn');
        // 改变this指向的原因是：事件处理函数内部的this总是指向被绑定的这个元素，而我想将其指向这个类的实例。
    }

    defineData() {
        /*  
        // Object.defineProperties()
        let _obj = {},
            method = 'plus',
            fVal = 0,
            sVal = 0;
        const _self = this;
        Object.defineProperties(_obj, {
            method: {
                get() {
                    return method;
                },
                set(newVal) {
                    method = newVal;
                    _self.renderResult(_self.data.method, _self.data.fVal, _self.data.sVal)
                }
            },
            fVal: {
                get() {
                    return fVal;
                },
                set(newVal) {
                    fVal = newVal;
                    _self.renderResult(_self.data.method, _self.data.fVal, _self.data.sVal)
                }
            },
            sVal: {
                get() {
                    return sVal;
                },
                set(newVal) {
                    sVal = newVal;
                    _self.renderResult(_self.data.method, _self.data.fVal, _self.data.sVal)
                }
            }
        });
        return _obj;
        */

        //proxy代理实现
        let target = {
            method: 'plus',
            fVal: 0,
            sVal: 0
        }
        const _self = this;
        return new Proxy(target, {
            get(target, prop) {
                return target[prop]
            },
            set(target, prop, value) {
                target[prop] = value;
                _self.renderResult(_self.data.method, _self.data.fVal, _self.data.sVal);
                return true;
            }

        })
    }

    handleBtnClick(ev) {
        const e = ev || window.event,
            tar = e.target || e.srcElement,
            tagName = tar.tagName.toLowerCase();

        if (tagName === 'button') {
            const method = tar.getAttribute('data-method');
            this.setMethod(method);
            this.setSelected(tar);
            // this.renderResult(this.data.method, this.data.fVal, this.data.sVal)      //Object.defineProperties中调用


            //     fVal = digitalize(replaceSpace(this.myInputs[0].value)),
            //     sVal = digitalize(replaceSpace(this.myInputs[1].value));
            // this.renderResult(method, fVal, sVal);
        }
    }

    onInput(ev) {
        const e = ev || window.event,
            tar = e.target || e.srcElement,
            id = tar.getAttribute('data-id'),
            val = digitalize(replaceSpace(tar.value));

        switch (id) {
            case 'fVal':
                this.data.fVal = val
                break;
            case 'sVal':
                this.data.sVal = val
                break;
        }
        // this.renderResult(this.data.method, this.data.fVal, this.data.sVal)
    }

    setMethod(method) {
        this.data.method = method;
    }

    setSelected(target) {
        this.myBtns[this.selectIndex].classList = 'btn';
        this.selectIndex = [].indexOf.call(this.myBtns, target);
        this.myBtns[this.selectIndex].classList = 'btn selected';
    }

    renderResult(method, val1, val2) {
        this.myAnswer.innerHTML = this[method](val1, val2);
    }

}