import { _decorator, Component, EditBox, Node } from 'cc';
import { InputPassword } from './InputPassword';
const { ccclass, property } = _decorator;

@ccclass('DiningDoorInputPassword')
export class DiningDoorInputPassword extends InputPassword {

    checkPassword(event: Event, customEventData: string) {
        let str = this.password.getComponent(EditBox).string;
        if(str == '5307') {
            this.ChangeScene("DiningS2_Open");
        }
    }
    
}