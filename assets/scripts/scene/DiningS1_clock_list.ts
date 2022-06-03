import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { itemTypeEnum, itemStatusEnum} from '../enum';
import DataManager from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('DiningS1_clock_listManager')
export class DiningS1_clock_listManager extends SceneManager {
    @property(Prefab)
    listPrefab: Prefab = null

    @property(Node)
    listPlaceholder: Node = null

    render(){
        super.render()
        this.items.destroyAllChildren()

        const list = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.list)
        if(list && list.status === itemStatusEnum.Scene){
            const listNode = instantiate(this.listPrefab)
            this.items.addChild(listNode)
            listNode.setPosition(this.listPlaceholder.position)
        }

    }
}