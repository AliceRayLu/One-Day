import { _decorator, Component, Node, instantiate, Prefab } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('DormiS2Manager')
export class DormiS2Manager extends SceneManager {
    @property(Prefab)
    pic1Prefab: Prefab = null

    @property(Node)
    pic1Placeholder: Node = null

    render(){
        super.render()
        this.items.removeAllChildren

        const Chahu = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.Chahu)
        if(Chahu && Chahu.status === itemStatusEnum.Scene){
            const ChahuNode = instantiate(this.pic1Prefab)
            this.items.addChild(ChahuNode)
            ChahuNode.setPosition(this.pic1Placeholder.position)
        }

    }
}

