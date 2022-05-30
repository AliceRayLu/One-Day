import { _decorator, Component, Node } from 'cc';
import { itemStatusEnum, itemTypeEnum, triggerStatusEnum, triggerTypeEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { triggerManager } from './triggerManager';
const { ccclass, property } = _decorator;

@ccclass('pic1TriggerMananger')
export class pic1TriggerMananger extends triggerManager {
    
    type: triggerTypeEnum = triggerTypeEnum.pic1trigger

    @property(Node)
    empty: Node = null

    @property(Node)
    match: Node = null

    handleTrigger(){
        if(DataManager.Instance.curItemType === itemTypeEnum.pic1 && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic1).status = itemStatusEnum.Disable
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.pic1Status = triggerStatusEnum.match
        }
    }

    render(){
        super.render()
        const ismatch = DataManager.Instance.pic1Status === triggerStatusEnum.match
        this.empty.active = !ismatch
        this.match.active = ismatch
    }

}

