import { _decorator, Component, Node } from 'cc';
import { triggerManager } from './triggerManager';
import { itemStatusEnum, itemTypeEnum, maoliangTriggerEnum, triggerTypeEnum } from '../enum/index';
import DataManager from '../Runtime/DataManager';
const { ccclass, property } = _decorator;

@ccclass('MaoliangTriggerManager')
export class MaoliangTriggerManager extends triggerManager {
    
    type: triggerTypeEnum = triggerTypeEnum.maoliangtrigger

    @property(Node)
    empty: Node = null

    @property(Node)
    maoliang: Node = null

    handleTrigger(){
        if(DataManager.Instance.curItemType === itemTypeEnum.Maoliang && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.Maoliang).status = itemStatusEnum.Disable
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.maoliangstatus = maoliangTriggerEnum.maoliang
            
        }
    }

    render(){
        super.render()
        const ismaoliang = DataManager.Instance.maoliangstatus === maoliangTriggerEnum.maoliang
        const isxiaoshi = DataManager.Instance.maoliangstatus === maoliangTriggerEnum.xiaoshi 
        this.empty.active = !ismaoliang
        this.maoliang.active = ismaoliang && !isxiaoshi
        
    }
}

