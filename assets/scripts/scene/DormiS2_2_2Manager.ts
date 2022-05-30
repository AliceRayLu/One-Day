import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('DormiS2_2_2Manager')
export class DormiS2_2_2Manager extends SceneManager {
    @property(Prefab)
    ChayePrefab: Prefab = null

    @property(Node)
    ChayePlaceholder: Node = null

    render(){
        super.render()
        this.items.destroyAllChildren()

        const Chaye = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.Chaye)
        if(Chaye && Chaye.status === itemStatusEnum.Scene){
            const ChayeNode = instantiate(this.ChayePrefab)
            this.items.addChild(ChayeNode)
            ChayeNode.setPosition(this.ChayePlaceholder.position)
        }

    }
}

