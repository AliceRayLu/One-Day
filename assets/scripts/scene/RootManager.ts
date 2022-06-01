import { _decorator, Component, Node,game } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RootManager')
export class RootManager extends Component {
    Dining_clock1:60
    Dining_clock2:240
    onLoad(){
        game.addPersistRootNode(this.node)
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}

