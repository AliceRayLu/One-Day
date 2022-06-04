import { _decorator, Component, Node, director } from 'cc';
import { maoliangTriggerEnum } from '../enum';
import DataManager from '../Runtime/DataManager';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('DormiS3Manager')
export class DormiS3Manager extends SceneManager {



    change_node(){
        if(DataManager.Instance.maoliangstatus === maoliangTriggerEnum.maoliang || 
            DataManager.Instance.maoliangstatus === maoliangTriggerEnum.xiaoshi){
            director.loadScene("DormiS3_maomao")
            DataManager.Instance.maoliangstatus = maoliangTriggerEnum.xiaoshi
            
        }
    }

}

