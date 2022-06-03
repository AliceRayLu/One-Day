import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('DiningS1_aftersand')
export class DiningS1_aftersand extends SceneManager {
    @property(Prefab)
    yinliaoPrefab: Prefab = null

    @property(Node)
    yinliaoPlaceholder: Node = null

    render(){
        super.render()
        this.items.destroyAllChildren()

        const yinliao = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.yinliao)
        if(yinliao && yinliao.status === itemStatusEnum.Scene){
            const yinliaoNode = instantiate(this.yinliaoPrefab)
            this.items.addChild(yinliaoNode)
            yinliaoNode.setPosition(this.yinliaoPlaceholder.position)
        }

        

    }
}

