import { _decorator, Component, Node, director, Prefab, instantiate } from 'cc';
import { Sceneenum } from '../enum/index';
import { RenderManager } from '../Base/RenderManager';
const { ccclass, property } = _decorator;

@ccclass('SceneManager')
export class SceneManager extends RenderManager {

    @property(Prefab)
    inventory: Prefab = null

    @property(Node)
    items: Node = null

    start(){
        super.start()
        
        //director.preloadScene("Act_clock")

        if(this.inventory){
            const inventory = instantiate(this.inventory)
            this.node.addChild(inventory)
        }
    }
    ChangeScene(e:Event, scene:string){
        director.loadScene(scene as Sceneenum)
    }

    render(){

    }
}

