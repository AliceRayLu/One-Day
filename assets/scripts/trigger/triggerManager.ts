import { _decorator, Component, Node, SpriteFrame, Sprite, sp } from 'cc';
import { itemStatusEnum, itemTypeEnum, triggerStatusEnum, triggerTypeEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { RenderManager } from '../Base/RenderManager';
const { ccclass, property } = _decorator;

@ccclass('triggerManager')
export abstract class triggerManager extends RenderManager {

    type: triggerTypeEnum

    render(){
        
    }

    abstract handleTrigger(): void

}