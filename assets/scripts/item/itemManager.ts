import { _decorator, Component, Node, SpriteFrame, Sprite, sp } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { RenderManager } from '../Base/RenderManager';
const { ccclass, property } = _decorator;

@ccclass('itemManager')
export class itemManager extends RenderManager {

    type: itemTypeEnum

    @property(SpriteFrame)
    scenesf: SpriteFrame = null

    @property(SpriteFrame)
    inventorysf: SpriteFrame = null


    start() {
        super.start()
        this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
    }

    onDestroy() {
        super.onDestroy()
        this.node.off(Node.EventType.TOUCH_END, this.touchEnd, this);
    }

    render(){
        const status = DataManager.Instance.items.find(i=>i.type === this.type)?.status
        const spriteComponent = this.getComponent(Sprite)
        switch(status){
            case itemStatusEnum.Scene:
                this.node.active = true
                spriteComponent.spriteFrame = this.scenesf
                break;
            case itemStatusEnum.Inventory:
                this.node.active = true
                spriteComponent.spriteFrame = this.inventorysf
                break;
            case itemStatusEnum.Disable:
                this.node.active = false
                break;
            default:
                break;
        }
    }

    touchEnd() {

        const item = DataManager.Instance.items.find(i=>i.type === this.type)

        if(!item){
            return
        }

        if (item.status === itemStatusEnum.Scene) {
            item.status = itemStatusEnum.Inventory
            DataManager.Instance.items = [...DataManager.Instance.items]
            this.onDestroy()
        }
    }
}

