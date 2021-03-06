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
    pic4Prefab: Prefab = null

    @property(Prefab)
    pic5Prefab: Prefab = null

    @property(Prefab)
    MaoliangPrefab: Prefab = null

    @property(Prefab)
    todolistPrefab: Prefab = null

    @property(Prefab)
    tuobaPrefab: Prefab = null

    @property(Prefab)
    cardPrefab: Prefab = null

    @property(Prefab)
    yinliaoPrefab: Prefab = null

    @property(Prefab)
    listPrefab: Prefab = null

    @property(Prefab)
    chartPrefab: Prefab = null

    @property(Prefab)
    jiandaoPrefab: Prefab = null

    @property(Prefab)
    ticketPrefab: Prefab = null

    @property(Prefab)
    huochaiPrefab: Prefab = null

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
            case itemTypeEnum.pic4:
                const pic4Node = instantiate(this.pic4Prefab)
                this.placeholder.addChild(pic4Node)
                break;
            case itemTypeEnum.pic5:
                const pic5Node = instantiate(this.pic5Prefab)
                this.placeholder.addChild(pic5Node)
                break;   
            case itemTypeEnum.Maoliang:
                const MaoliangNode = instantiate(this.MaoliangPrefab)
                this.placeholder.addChild(MaoliangNode)
                break;
            case itemTypeEnum.todolist:
                const todolistNode = instantiate(this.todolistPrefab)
                this.placeholder.addChild(todolistNode)
                break;
            case itemTypeEnum.tuoba:
                const tuobaNode = instantiate(this.tuobaPrefab)
                this.placeholder.addChild(tuobaNode)
                break;
            case itemTypeEnum.card:
                const cardNode = instantiate(this.cardPrefab)
                this.placeholder.addChild(cardNode)
                break;
            case itemTypeEnum.yinliao:
                const yinliaoNode = instantiate(this.yinliaoPrefab)
                this.placeholder.addChild(yinliaoNode)
                break;
            case itemTypeEnum.list:
                const listNode = instantiate(this.listPrefab)
                this.placeholder.addChild(listNode)
                break;
            case itemTypeEnum.chart:
                const chartNode = instantiate(this.chartPrefab)
                this.placeholder.addChild(chartNode)
                break;
            case itemTypeEnum.jiandao:
                const jiandaoNode = instantiate(this.jiandaoPrefab)
                this.placeholder.addChild(jiandaoNode)
                break;
            case itemTypeEnum.ticket:
                const ticketNode = instantiate(this.ticketPrefab)
                this.placeholder.addChild(ticketNode)
                break;
            case itemTypeEnum.huochai:
                const huochaiNode = instantiate(this.huochaiPrefab)
                this.placeholder.addChild(huochaiNode)
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
            DataManager.Instance.isSelect = false
            DataManager.Instance.curItemType = isInventoryItem[index + 1].type
        } else{
            DataManager.Instance.isSelect = false
            DataManager.Instance.curItemType = isInventoryItem[0].type
        }
    }
}

