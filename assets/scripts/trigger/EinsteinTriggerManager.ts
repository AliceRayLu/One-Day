import { _decorator, Component, Node, director } from 'cc';
import { triggerManager } from './triggerManager';
import { itemStatusEnum, itemTypeEnum, EinsteinTriggerEnum, triggerTypeEnum } from '../enum/index';
import DataManager from '../Runtime/DataManager';
const { ccclass, property } = _decorator;

@ccclass('EinsteinTriggerManager')
export class EinsteinTriggerManager extends triggerManager {
    
    type: triggerTypeEnum = triggerTypeEnum.EinsteinTrigger

    @property(Node)
    empty: Node = null

    @property(Node)
    Einstein: Node = null

    

    handleTrigger(){
        if(DataManager.Instance.curItemType === itemTypeEnum.jiandao && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.jiandao).status = itemStatusEnum.Disable
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.Einsteinstatus = EinsteinTriggerEnum.Einstein
            
        }
    }

    render(){
        super.render()
        const isEinstein = DataManager.Instance.Einsteinstatus === EinsteinTriggerEnum.Einstein
        this.empty.active = !isEinstein
        this.Einstein.active = isEinstein
        if(DataManager.Instance.Einsteinstatus === EinsteinTriggerEnum.Einstein){
            director.loadScene("ClassS4_ticket")
        }
    }
}
