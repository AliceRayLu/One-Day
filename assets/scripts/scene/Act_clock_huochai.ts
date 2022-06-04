import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { itemTypeEnum, itemStatusEnum} from '../enum';
import DataManager from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('Act_clock_huochai')
export class Act_clock_huochai extends SceneManager {
    @property(Prefab)
    huochaiPrefab: Prefab = null

    @property(Node)
    huochaiPlaceholder: Node = null

    render(){
        super.render()
        this.items.destroyAllChildren()

        const huochai = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.huochai)
        if(huochai && huochai.status === itemStatusEnum.Scene){
            const huochaiNode = instantiate(this.huochaiPrefab)
            this.items.addChild(huochaiNode)
            huochaiNode.setPosition(this.huochaiPlaceholder.position)
        }

    }
}
