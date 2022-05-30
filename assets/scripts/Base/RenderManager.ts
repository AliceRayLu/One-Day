import { _decorator, Component, Node } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import EventManager from '../Runtime/EventMnager';
import { EventEnum } from '../enum/index';
const { ccclass, property } = _decorator;

@ccclass('RenderManager')
export abstract class RenderManager extends Component {

    onLoad(){
        EventManager.Instance.on(EventEnum.Render, this.render, this)
    }

    onDestroy(){
        EventManager.Instance.off(EventEnum.Render, this.render, this)
    }

    start(){
        this.render()
    }
    
    abstract render(): void


}

