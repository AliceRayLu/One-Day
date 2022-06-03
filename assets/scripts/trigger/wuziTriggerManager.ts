import { _decorator, Component, Node, Sprite } from 'cc';
import { itemStatusEnum, itemTypeEnum, triggerTypeEnum, wuziTriggerEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { triggerManager } from './triggerManager';
const { ccclass, property } = _decorator;

@ccclass('wuziTriggerManager')
export class wuziTriggerManager extends triggerManager {
    type: triggerTypeEnum = triggerTypeEnum.wuzitrigger

    @property(Node)
    empty: Node = null

    @property(Node)
    Sprite: Node = null

    handleTrigger(){
        if(DataManager.Instance.curItemType === itemTypeEnum.tuoba && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.tuoba).status = itemStatusEnum.Disable
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.wuziStatus = wuziTriggerEnum.empty
            
        }
    }

    render(){
        super.render()
        const iswuzi = DataManager.Instance.wuziStatus === wuziTriggerEnum.empty
        this.empty.active = iswuzi
        this.Sprite.active = !iswuzi
        
    } 
}

