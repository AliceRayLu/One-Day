import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { itemTypeEnum, itemStatusEnum} from '../enum';
import DataManager from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('ClassS4_ticket')
export class ClassS4_ticket extends SceneManager {
    @property(Prefab)
    ticketPrefab: Prefab = null

    @property(Node)
    ticketPlaceholder: Node = null

    render(){
        super.render()
        this.items.destroyAllChildren()

        const ticket = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.ticket)
        if(ticket && ticket.status === itemStatusEnum.Scene){
            const ticketNode = instantiate(this.ticketPrefab)
            this.items.addChild(ticketNode)
            ticketNode.setPosition(this.ticketPlaceholder.position)
        }

    }
}

