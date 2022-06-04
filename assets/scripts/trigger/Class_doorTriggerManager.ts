import { _decorator, Component, Node, director } from 'cc';
import { triggerManager } from './triggerManager';
import { itemStatusEnum, itemTypeEnum, Class_doorTriggerEnum, triggerTypeEnum } from '../enum/index';
import DataManager from '../Runtime/DataManager';
const { ccclass, property } = _decorator;

@ccclass('Class_doorTriggerManager')
export class Class_doorTriggerManager extends triggerManager {
    type: triggerTypeEnum = triggerTypeEnum.Class_doorTrigger

    @property(Node)
    empty: Node = null

    @property(Node)
    open: Node = null

    

    handleTrigger(){
        if(DataManager.Instance.curItemType === itemTypeEnum.ticket && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.ticket).status = itemStatusEnum.Disable
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.Class_doorstatus = Class_doorTriggerEnum.open
            
        }
    }

    render(){
        super.render()
        const isClass_door = DataManager.Instance.Class_doorstatus === Class_doorTriggerEnum.open
        this.empty.active = !isClass_door
        this.open.active = isClass_door
    }
}

