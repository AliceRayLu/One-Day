import { _decorator, Component, Node, director } from 'cc';
import { Sceneenum } from '../enum/index';
const { ccclass, property } = _decorator;

@ccclass('SceneManager')
export class SceneManager extends Component {
    ChangeScene(e:Event, scene:string){
        director.loadScene(scene as Sceneenum)
    }
}

