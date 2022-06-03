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
        director.preloadScene("DormiS1")
        director.preloadScene("DormiS2")
        director.preloadScene("DormiS3")
        director.preloadScene("DormiS4")
        director.preloadScene("DormiS2_1")
        director.preloadScene("DormiS2_1_2")
        director.preloadScene("DormiS2_2")
        director.preloadScene("DormiS2_2_2")
        director.preloadScene("DormiS4_1")
        director.preloadScene("DormiS4_2")
        director.preloadScene("DormiS4_tea")
        director.preloadScene("DormiS2_alarm")
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

