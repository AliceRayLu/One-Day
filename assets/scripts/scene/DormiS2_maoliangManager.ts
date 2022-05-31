import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { itemTypeEnum, itemStatusEnum} from '../enum';
import DataManager from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('DormiS2_maoliangManager')
export class DormiS2_maoliangManager extends SceneManager {
    @property(Prefab)
    MaoliangPrefab: Prefab = null

    @property(Node)
    MaoliangPlaceholder: Node = null

    render(){
        super.render()
        this.items.destroyAllChildren()

        const Maoliang = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.Maoliang)
        if(Maoliang && Maoliang.status === itemStatusEnum.Scene){
            const MaoliangNode = instantiate(this.MaoliangPrefab)
            this.items.addChild(MaoliangNode)
            MaoliangNode.setPosition(this.MaoliangPlaceholder.position)
        }

    }
}

