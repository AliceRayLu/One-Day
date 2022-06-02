import { _decorator, Component, Node,find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mytest')
export class mytest extends Component {
    start() {

    }
    test(){
        var script=find('Dad').getComponent("Dining_Dad")
        var num=script.arr
        console.debug(num)
    }
    update(deltaTime: number) {
        
    }
}

