import { _decorator, Component, Node } from 'cc';
import { triggerManager } from './triggerManager';
const { ccclass, property } = _decorator;

@ccclass('panziTriggerManager')
export class panziTriggerManager extends triggerManager {

    @property(Node)
    mianbao: Node = null

    @property(Node)
    cai: Node = null

    @property(Node)
    cheese: Node = null

    @property(Node)
    tomato: Node = null

    @property(Node)
    meat: Node = null

    @property(Node)
    sandwitch: Node = null

    handleTrigger() {
        
    }
    
}

