import { _decorator, Component, Node,game } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AlarmRootManager')
export class AlarmRootManager extends Component {
    alarm1:120
    alarm2:-30
    onLoad(){
        game.addPersistRootNode(this.node)
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}

