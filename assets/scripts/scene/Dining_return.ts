import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Dining_return')
export class Dining_return extends Component {
    start() {

    }
    regain(x:number,y:number){
        this.node.setPosition(x,y)
    }
    update(deltaTime: number) {
        
    }
}

