import { _decorator, Component, Node } from 'cc';
import { itemStatusEnum, itemTypeEnum, triggerStatusEnum, triggerTypeEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { triggerManager } from './triggerManager';
const { ccclass, property } = _decorator;

@ccclass('pic2TriggerMananger')
export class pic2TriggerMananger extends triggerManager {
    
    type: triggerTypeEnum = triggerTypeEnum.pic2trigger

    @property(Node)
    empty: Node = null

    @property(Node)
    match: Node = null

    handleTrigger(){
        if(DataManager.Instance.curItemType === itemTypeEnum.pic3 && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic3).status = itemStatusEnum.Disable
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.pic2Status = triggerStatusEnum.match
        }
    }

    render(){
        super.render()
        const ismatch = DataManager.Instance.pic2Status === triggerStatusEnum.match
        this.empty.active = !ismatch
        this.match.active = ismatch
    }

}

