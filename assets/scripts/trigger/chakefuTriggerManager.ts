import { _decorator, Component, Node, director } from 'cc';
import { triggerManager } from './triggerManager';
import { itemStatusEnum, itemTypeEnum, Class_doorTriggerEnum, triggerTypeEnum, chakefuTriggerEnum } from '../enum/index';
import DataManager from '../Runtime/DataManager';
const { ccclass, property } = _decorator;

@ccclass('chakefuTriggerManager')
export class chakefuTriggerManager extends triggerManager {
    type: triggerTypeEnum = triggerTypeEnum.chakefuTrigger

    @property(Node)
    chakefu: Node = null

    @property(Node)
    xuanzhuan: Node = null

    

    handleTrigger(){
        if(DataManager.Instance.curItemType === itemTypeEnum.huochai && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.huochai).status = itemStatusEnum.Disable
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.chakeStatus = chakefuTriggerEnum.xuanzhuan
            
        }
    }

    render(){
        super.render()
        const isxuanzhuan = DataManager.Instance.chakeStatus === chakefuTriggerEnum.xuanzhuan
        this.chakefu.active = !isxuanzhuan
        this.xuanzhuan.active = isxuanzhuan
    }
}

