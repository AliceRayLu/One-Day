import { _decorator, AudioSource, Component, Node } from 'cc';
import { cupTriggerStatusEnum, itemStatusEnum, itemTypeEnum, triggerStatusEnum, triggerTypeEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { triggerManager } from './triggerManager';
const { ccclass, property } = _decorator;

@ccclass('teaTriggerMananger')
export class teaTriggerMananger extends triggerManager {
    
    type: triggerTypeEnum = triggerTypeEnum.teatrigger

    @property(Node)
    empty: Node = null

    @property(Node)
    water: Node = null

    @property(Node)
    tea: Node = null

    @property(AudioSource)
    public audioSource: AudioSource = null!;

    handleTrigger(){
        if(DataManager.Instance.curItemType === itemTypeEnum.Chahu && DataManager.Instance.isSelect){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.Chahu).status = itemStatusEnum.Disable
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.teaStatus = cupTriggerStatusEnum.water
            this.audioSource.play();
        }
        if(DataManager.Instance.curItemType === itemTypeEnum.Chaye && DataManager.Instance.isSelect && DataManager.Instance.teaStatus === cupTriggerStatusEnum.water){
            DataManager.Instance.curItemType = null
            DataManager.Instance.isSelect = false
            DataManager.Instance.items.find(i=>i.type === itemTypeEnum.Chaye).status = itemStatusEnum.Disable
            DataManager.Instance.items = [...DataManager.Instance.items]
            DataManager.Instance.teaStatus = cupTriggerStatusEnum.tea
        }
    }

    render(){
        super.render()
        const iswater = DataManager.Instance.teaStatus === cupTriggerStatusEnum.water
        const istea = DataManager.Instance.teaStatus === cupTriggerStatusEnum.tea
        this.empty.active = !istea && !iswater
        this.water.active = iswater
        this.tea.active = istea
        
    }

}

