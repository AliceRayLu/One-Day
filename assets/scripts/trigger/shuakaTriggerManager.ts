import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { itemStatusEnum, itemTypeEnum, shuakaTriggerEnum, triggerTypeEnum, wuziTriggerEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { triggerManager } from './triggerManager';
const { ccclass, property } = _decorator;

@ccclass('shuakaTriggerManager')
export class shuakaTriggerManager extends triggerManager {
    type: triggerTypeEnum = triggerTypeEnum.shuakatrigger

    @property(Node)
    shuaka: Node = null

    @property(Node)
    money: Node = null

    handleTrigger(){
        if(DataManager.Instance.curItemType === itemTypeEnum.card && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.card).status = itemStatusEnum.Disable
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.shuakaStatus = shuakaTriggerEnum.money
            
        }
    }

    render(){
        super.render()
        const ismoney = DataManager.Instance.shuakaStatus === shuakaTriggerEnum.money
        this.money.active = ismoney
        this.shuaka.active = !ismoney
        
    } 
}

