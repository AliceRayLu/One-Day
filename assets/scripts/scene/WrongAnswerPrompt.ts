import { _decorator, Component, Node } from 'cc';
import { DiningDoorInputPassword } from './DiningDoorInputPassword';
const { ccclass, property } = _decorator;

@ccclass('WrongAnswerPrompt')
export class WrongAnswerPrompt extends DiningDoorInputPassword {

    start() {
        if(this.status == 0) {
            this.node.active = false;
        }
    }

    ChangeStatus(event: Event, customEventData: string) {
        if(this.outcome == 1) {
            this.node.active = false;
            this.status = 0;
        }
        else {
            this.node.active = true;
            this.status = 1;
        } 
    }
    
}