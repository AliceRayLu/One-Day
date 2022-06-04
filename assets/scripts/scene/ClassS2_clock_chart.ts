import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { itemTypeEnum, itemStatusEnum} from '../enum';
import DataManager from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('ClassS2_clock_chart')
export class ClassS2_clock_chart extends SceneManager {
    @property(Prefab)
    chartPrefab: Prefab = null

    @property(Node)
    chartPlaceholder: Node = null

    render(){
        super.render()
        this.items.destroyAllChildren()

        const chart = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.chart)
        if(chart && chart.status === itemStatusEnum.Scene){
            const chartNode = instantiate(this.chartPrefab)
            this.items.addChild(chartNode)
            chartNode.setPosition(this.chartPlaceholder.position)
        }

    }
}

