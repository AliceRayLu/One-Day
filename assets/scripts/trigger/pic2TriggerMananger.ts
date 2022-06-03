import { _decorator, Component, Node } from 'cc';
import { itemStatusEnum, itemTypeEnum, triggerStatusEnum, triggerTypeEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { triggerManager } from './triggerManager';
const { ccclass, property } = _decorator;

@ccclass('pic2TriggerMananger')
export class pic2TriggerMananger extends triggerManager {
    
    type: triggerTypeEnum = triggerTypeEnum.pic1trigger

    @property(Node)
    empty: Node = null

    @property(Node)
    pic1: Node = null

    @property(Node)
    pic2: Node = null

    @property(Node)
    pic3: Node = null

    @property(Node)
    pic4: Node = null

    @property(Node)
    pic5: Node = null

    handleTrigger(){
        if(DataManager.Instance.curItemType === itemTypeEnum.pic1 && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic1).status = itemStatusEnum.Disable
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic2) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic2).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic3) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic3).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic4) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic4).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic5) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic5).status = itemStatusEnum.Inventory
            }
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.pic2Status = triggerStatusEnum.pic1
        }
        if(DataManager.Instance.curItemType === itemTypeEnum.pic2 && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic2).status = itemStatusEnum.Disable
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic1) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic1).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic3) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic3).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic4) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic4).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic5) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic5).status = itemStatusEnum.Inventory
            }
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.pic2Status = triggerStatusEnum.pic2
        }
        if(DataManager.Instance.curItemType === itemTypeEnum.pic3 && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic3).status = itemStatusEnum.Disable
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic2) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic2).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic1) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic1).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic4) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic4).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic5) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic5).status = itemStatusEnum.Inventory
            }
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.pic2Status = triggerStatusEnum.pic3
        }

        if(DataManager.Instance.curItemType === itemTypeEnum.pic4 && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic4).status = itemStatusEnum.Disable
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic2) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic2).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic3) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic3).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic1) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic1).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic5) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic5).status = itemStatusEnum.Inventory
            }
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.pic2Status = triggerStatusEnum.pic4
        }
        if(DataManager.Instance.curItemType === itemTypeEnum.pic5 && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic5).status = itemStatusEnum.Disable
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic2) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic2).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic3) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic3).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic1) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic4).status = itemStatusEnum.Inventory
            }
            if(DataManager.Instance.pic1Status != triggerStatusEnum.pic1) {
                DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic1).status = itemStatusEnum.Inventory
            }
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.pic2Status = triggerStatusEnum.pic5
        }
    }

    render(){
        super.render()
        const ispic1 = DataManager.Instance.pic2Status === triggerStatusEnum.pic1
        const ispic2 = DataManager.Instance.pic2Status === triggerStatusEnum.pic2
        const ispic3 = DataManager.Instance.pic2Status === triggerStatusEnum.pic3
        const ispic4 = DataManager.Instance.pic2Status === triggerStatusEnum.pic4
        const ispic5 = DataManager.Instance.pic2Status === triggerStatusEnum.pic5
        this.empty.active = !ispic1 && !ispic2 && !ispic3 && !ispic4 && !ispic5
        this.pic1.active = ispic1
        this.pic2.active = ispic2
        this.pic3.active = ispic3
        this.pic4.active = ispic4
        this.pic5.active = ispic5
    }

}

