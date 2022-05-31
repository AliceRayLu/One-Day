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
    pic1: Node = null

    @property(Node)
    pic2: Node = null

    @property(Node)
    pic3: Node = null

    handleTrigger(){
        if(DataManager.Instance.curItemType === itemTypeEnum.pic1 && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic1).status = itemStatusEnum.Scene
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.pic2Status = triggerStatusEnum.pic1
        }
        if(DataManager.Instance.curItemType === itemTypeEnum.pic2 && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic2).status = itemStatusEnum.Scene
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.pic2Status = triggerStatusEnum.pic2
        }
        if(DataManager.Instance.curItemType === itemTypeEnum.pic3 && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic3).status = itemStatusEnum.Scene
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.pic2Status = triggerStatusEnum.pic3
        }
    }

    render(){
        super.render()
        const ispic1 = DataManager.Instance.pic2Status === triggerStatusEnum.pic1
        const ispic2 = DataManager.Instance.pic2Status === triggerStatusEnum.pic2
        const ispic3 = DataManager.Instance.pic2Status === triggerStatusEnum.pic3
        this.empty.active = !ispic1 && !ispic2 && !ispic3
        this.pic1.active = ispic1
        this.pic2.active = ispic2
        this.pic3.active = ispic3
    }

}

