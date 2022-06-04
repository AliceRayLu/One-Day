import { _decorator, Component, Node, director } from 'cc';
import { Sceneenum } from '../enum';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('finish')
export class finish extends Component {
    ChangeScene(e:Event, scene:string){
        director.loadScene("finish_2")
    }
}

