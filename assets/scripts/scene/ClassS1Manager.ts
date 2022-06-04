import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { itemTypeEnum, itemStatusEnum} from '../enum';
import DataManager from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('ClassS1Manager')
export class ClassS1Manager extends SceneManager {
    @property(Prefab)
    jiandaoPrefab: Prefab = null

    @property(Node)
    jiandaoPlaceholder: Node = null

    render(){
        super.render()
        this.items.destroyAllChildren()

        const jiandao = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.jiandao)
        if(jiandao && jiandao.status === itemStatusEnum.Scene){
            const jiandaoNode = instantiate(this.jiandaoPrefab)
            this.items.addChild(jiandaoNode)
            jiandaoNode.setPosition(this.jiandaoPlaceholder.position)
        }

    }
}

