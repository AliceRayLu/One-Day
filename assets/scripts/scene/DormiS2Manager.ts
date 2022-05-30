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

    @property(Prefab)
    pic2Prefab: Prefab = null

    @property(Node)
    pic2Placeholder: Node = null

    @property(Prefab)
    pic3Prefab: Prefab = null

    @property(Node)
    pic3Placeholder: Node = null

    render(){
        super.render()
        this.items.destroyAllChildren()

        const pic1 = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic1)
        if(pic1 && pic1.status === itemStatusEnum.Scene){
            const pic1Node = instantiate(this.pic1Prefab)
            this.items.addChild(pic1Node)
            pic1Node.setPosition(this.pic1Placeholder.position)
        }

        const pic2 = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic2)
        if(pic2 && pic2.status === itemStatusEnum.Scene){
            const pic2Node = instantiate(this.pic2Prefab)
            this.items.addChild(pic2Node)
            pic2Node.setPosition(this.pic2Placeholder.position)
        }

        const pic3 = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.pic3)
        if(pic3 && pic3.status === itemStatusEnum.Scene){
            const pic3Node = instantiate(this.pic3Prefab)
            this.items.addChild(pic3Node)
            pic3Node.setPosition(this.pic3Placeholder.position)
        }

    }
}

