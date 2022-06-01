import { _decorator, Component, Node ,find,director} from 'cc';
import { Sceneenum } from '../enum/index';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;


@ccclass('DiningClockManager')
export class DiningClockManager extends SceneManager {
    start() {
        super.start()
    }
    onLoad(){
        var _node=find("Canvas/钟无针2")
        var script=find('Root').getComponent('RootManager')
        var _z1=script.Dining_clock1
        var _z2=script.Dining_clock2
        _node.children[0].setRotationFromEuler(0, 0, _z1);
        _node.children[1].setRotationFromEuler(0, 0, _z2);
    }
    ChangeScene(e:Event, scene:string){
        director.loadScene(scene as Sceneenum)
        var _node=find("Canvas/钟无针2")
        var script=find('Root').getComponent('RootManager')
        script.Dining_clock1=_node.children[0].eulerAngles.z
        script.Dining_clock2=_node.children[1].eulerAngles.z
        
    }

    update(deltaTime: number) {
        
    }
}

