import { _decorator, Component, Node, Prefab, instantiate, director } from 'cc';
import { itemStatusEnum, itemTypeEnum, Sceneenum, triggerStatusEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
import { pic2TriggerMananger } from '../trigger/pic2TriggerMananger';
import { pic1Manager } from '../item/pic1Manager';
const { ccclass, property } = _decorator;

@ccclass('DormiS4_1Manager')
export class DormiS4_1Manager extends SceneManager {


   change_node(){
       if(DataManager.Instance.pic1Status === triggerStatusEnum.pic1 && 
        DataManager.Instance.pic2Status === triggerStatusEnum.pic3){
            director.loadScene("DormiS4_2")
        }
   }
    
      
}

