import { _decorator, Component, Node,game } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ActRootManager')
export class ActRootManager extends Component {
    Act_clock1:60
    Act_clock2:90
    onLoad(){
        game.addPersistRootNode(this.node)
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}

