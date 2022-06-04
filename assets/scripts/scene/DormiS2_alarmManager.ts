import { _decorator, Component, Node ,find,director} from 'cc';
import { Sceneenum } from '../enum/index';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;


@ccclass('DormiS2_alarmManager')
export class DormiS2_alarmManager extends SceneManager {

    onLoad(){
        var _node=find("Canvas/闹钟-001")
        var script=find('AlarmRoot').getComponent('AlarmRootManager')
        var _z1=script.alarm1
        var _z2=script.alarm2
        _node.children[0].setRotationFromEuler(0, 0, _z1);
        _node.children[1].setRotationFromEuler(0, 0, _z2);
    }
    ChangeScene(e:Event, scene:string){
        director.loadScene(scene as Sceneenum)
        var _node=find("Canvas/闹钟-001")
        var script=find('AlarmRoot').getComponent('AlarmRootManager')
        script.alarm1=_node.children[0].eulerAngles.z
        script.alarm2=_node.children[1].eulerAngles.z
        
    }

}

