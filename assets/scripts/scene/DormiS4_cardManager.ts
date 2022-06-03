import { _decorator, Component, Node, instantiate, Prefab } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import { SceneManager } from './SceneManager';
import DataManager from '../Runtime/DataManager';
const { ccclass, property } = _decorator;

@ccclass('DormiS4_cardManager')
export class DormiS4_cardManager extends SceneManager {
    @property(Prefab)
    cardPrefab: Prefab = null

    @property(Node)
    cardPlaceholder: Node = null


    render(){
        super.render()
        this.items.destroyAllChildren()

        const card = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.card)
        if(card && card.status === itemStatusEnum.Scene){
            const cardNode = instantiate(this.cardPrefab)
            this.items.addChild(cardNode)
            cardNode.setPosition(this.cardPlaceholder.position)
        }


    }
   
}

