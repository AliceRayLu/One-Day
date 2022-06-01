import { _decorator, Component, Node,find } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Act_small_clock')
export class Act_small_clock extends Component {
    onLoad(){
        var script=find('Act_Root').getComponent('ActRootManager')
        var _z1=script.Act_clock1
        var _z2=script.Act_clock2
        this.node.children[0].setRotationFromEuler(this.node.children[0].eulerAngles.x, this.node.children[0].eulerAngles.y, _z1);
        this.node.children[1].setRotationFromEuler(this.node.children[1].eulerAngles.x, this.node.children[1].eulerAngles.y, _z2);
    }


    update(deltaTime: number) {
        
    }
}

