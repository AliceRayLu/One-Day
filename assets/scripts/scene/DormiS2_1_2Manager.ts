import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { SceneManager } from './SceneManager';
import DataManager from '../Runtime/DataManager';
import { itemStatusEnum, itemTypeEnum } from '../enum';
const { ccclass, property } = _decorator;

@ccclass('DormiS2_1_2Manager')
export class DormiS2_1_2Manager extends SceneManager {

    @property(Prefab)
    ChahuPrefab: Prefab = null

    @property(Node)
    ChahuPlaceholder: Node = null

    render(){
        super.render()
        this.items.destroyAllChildren()

        const Chahu = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.Chahu)
        if(Chahu && Chahu.status === itemStatusEnum.Scene){
            const ChahuNode = instantiate(this.ChahuPrefab)
            this.items.addChild(ChahuNode)
            ChahuNode.setPosition(this.ChahuPlaceholder.position)
        }

    }
}

