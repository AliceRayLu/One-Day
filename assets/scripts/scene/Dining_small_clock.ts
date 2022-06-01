import { _decorator, Component, Node,find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Dining_small_clock')
export class Dining_small_clock extends Component {
    onLoad(){
        var script=find('Root').getComponent('RootManager')
        var _z1=script.Dining_clock1
        var _z2=script.Dining_clock2
        this.node.children[0].setRotationFromEuler(this.node.children[0].eulerAngles.x, this.node.children[0].eulerAngles.y, _z1);
        this.node.children[1].setRotationFromEuler(this.node.children[1].eulerAngles.x, this.node.children[1].eulerAngles.y, _z2);
    }

    update(deltaTime: number) {
        
    }
}

