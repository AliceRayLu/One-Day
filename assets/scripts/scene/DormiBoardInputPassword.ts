import { _decorator, Component, EditBox, Node } from 'cc';
import { InputPassword } from './InputPassword';
const { ccclass, property } = _decorator;

@ccclass('DormiBoardInputPassword')
export class DormiBoardInputPassword extends InputPassword {

    checkPassword(event: Event, customEventData: string) {
        let str = this.password.getComponent(EditBox).string; //获取节点的组件
        if(str == '2142') {
            this.ChangeScene("DormiS2_1_2");
        }
    }
    
}