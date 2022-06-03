import { _decorator, Component, Node, instantiate, Prefab } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import { SceneManager } from './SceneManager';
import DataManager from '../Runtime/DataManager';
const { ccclass, property } = _decorator;

@ccclass('DormiS1Manager')
export class DormiS1Manager extends SceneManager {
    @property(Prefab)
    todolistPrefab: Prefab = null

    @property(Node)
    todolistPlaceholder: Node = null


    render(){
        super.render()
        this.items.destroyAllChildren()

        const todolist = DataManager.Instance.items.find(i=>i.type === itemTypeEnum.todolist)
        if(todolist && todolist.status === itemStatusEnum.Scene){
            const todolistNode = instantiate(this.todolistPrefab)
            this.items.addChild(todolistNode)
            todolistNode.setPosition(this.todolistPlaceholder.position)
        }


    }
}

