import { _decorator, Component, Node, Button, Prefab, instantiate } from 'cc';
import { RenderManager } from '../Base/RenderManager';
import { itemStatusEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { itemTypeEnum } from '../enum/index';
const { ccclass, property } = _decorator;

@ccclass('inventoryManager')
export class inventoryManager extends RenderManager {

    @property(Prefab)
    ChahuPrefab: Prefab = null

    @property(Prefab)
    ChayePrefab: Prefab = null

    @property(Prefab)
    pic1Prefab: Prefab = null

    @property(Prefab)
    pic2Prefab: Prefab = null

    @property(Prefab)
    pic3Prefab: Prefab = null

    @property(Prefab)
    MaoliangPrefab: Prefab = null

    @property(Button)
    leftbtn: Button = null

    @property(Button)
    rightbtn: Button = null

    @property(Node)
    placeholder: Node = null

    render() {
        this.placeholder.destroyAllChildren()
        const isInventoryItem = DataManager.Instance.items.filter(i => i.status === itemStatusEnum.Inventory)
        this.node.active = isInventoryItem.length > 0
        if (isInventoryItem.length) {
            if (DataManager.Instance.curItemType) {
                const item = DataManager.Instance.items.find(i => i.type === DataManager.Instance.curItemType)
                if (item.status === itemStatusEnum.Inventory) {
                    this.generateItem(DataManager.Instance.curItemType)
                } else {
                    const type = isInventoryItem[0].type
                    this.generateItem(type)
                    DataManager.Instance.curItemType = type
                }
            } else {
                const type = isInventoryItem[0].type
                this.generateItem(type)
                DataManager.Instance.curItemType = type
            }
        }
    }

    generateItem(type: itemTypeEnum) {
        switch (type) {
            case itemTypeEnum.Chahu:
                const ChahuNode = instantiate(this.ChahuPrefab)
                this.placeholder.addChild(ChahuNode)
                break;
            case itemTypeEnum.Chaye:
                const ChayeNode = instantiate(this.ChayePrefab)
                this.placeholder.addChild(ChayeNode)
                break;
            case itemTypeEnum.pic1:
                const pic1Node = instantiate(this.pic1Prefab)
                this.placeholder.addChild(pic1Node)
                break;
            case itemTypeEnum.pic2:
                const pic2Node = instantiate(this.pic2Prefab)
                this.placeholder.addChild(pic2Node)
                break;
            case itemTypeEnum.pic3:
                const pic3Node = instantiate(this.pic3Prefab)
                this.placeholder.addChild(pic3Node)
                break;
            case itemTypeEnum.Maoliang:
                const MaoliangNode = instantiate(this.MaoliangPrefab)
                this.placeholder.addChild(MaoliangNode)
                break;
            default:
                break;
        }
    }

    handleSelect(){
        DataManager.Instance.isSelect = !DataManager.Instance.isSelect
        
    }

    handleLeftbtn(){
        if(DataManager.Instance.curItemType === null){
            return
        }

        const isInventoryItem = DataManager.Instance.items.filter(i => i.status === itemStatusEnum.Inventory)
        const index = isInventoryItem.findIndex(i=>i.type === DataManager.Instance.curItemType)
        if(index > 0){
            DataManager.Instance.isSelect = false
            DataManager.Instance.curItemType = isInventoryItem[index - 1].type
        } else{
            DataManager.Instance.isSelect = false
            DataManager.Instance.curItemType = isInventoryItem[isInventoryItem.length - 1].type
        }
    }

    handleRightbtn(){
        if(DataManager.Instance.curItemType === null){
            return
        }

        const isInventoryItem = DataManager.Instance.items.filter(i => i.status === itemStatusEnum.Inventory)
        const index = isInventoryItem.findIndex(i=>i.type === DataManager.Instance.curItemType)
        if(index < isInventoryItem.length - 1){
            //DataManager.Instance.isSelect = false
            DataManager.Instance.curItemType = isInventoryItem[index + 1].type
        } else{
            //DataManager.Instance.isSelect = false
            DataManager.Instance.curItemType = isInventoryItem[0].type
        }
    }
}

