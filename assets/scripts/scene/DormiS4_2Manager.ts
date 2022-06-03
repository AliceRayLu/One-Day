import { _decorator, Component, Node, instantiate, Prefab } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import { SceneManager } from './SceneManager';
import DataManager from '../Runtime/DataManager';
const { ccclass, property } = _decorator;

@ccclass('DormiS4_2Manager')
export class DormiS4_2Manager extends SceneManager {
    @property(Prefab)
    tuobaPrefab: Prefab = null

    @property(Node)
    tuobaPlaceholder: Node = null


    render(){
        super.render()
        this.items.destroyAllChildren()

        const tuoba = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.tuoba)
        if(tuoba && tuoba.status === itemStatusEnum.Scene){
            const tuobaNode = instantiate(this.tuobaPrefab)
            this.items.addChild(tuobaNode)
            tuobaNode.setPosition(this.tuobaPlaceholder.position)
        }


    }
   
}

