import { _decorator, Component, Node ,find} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ClassSmallClock')
export class ClassSmallClock extends Component {
    onLoad(){
        var script=find('ClassRoot').getComponent('ClassRootManager')
        var _z1=script.Class_clock1
        var _z2=script.Class_clock2
        this.node.children[0].setRotationFromEuler(this.node.children[0].eulerAngles.x, this.node.children[0].eulerAngles.y, _z1);
        this.node.children[1].setRotationFromEuler(this.node.children[1].eulerAngles.x, this.node.children[1].eulerAngles.y, _z2);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}

