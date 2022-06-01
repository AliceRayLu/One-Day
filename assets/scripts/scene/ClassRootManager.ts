import { _decorator, Component, Node,game } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ClassRootManager')
export class ClassRootManager extends Component {
    Class_clock1:90
    Class_clock2:240
   
    onLoad(){
        game.addPersistRootNode(this.node)
    }


    update(deltaTime: number) {
        
    }
}

