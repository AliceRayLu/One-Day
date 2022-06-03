import { _decorator, Component, EditBox, Node } from 'cc';
import { InputPassword } from './InputPassword';
const { ccclass, property } = _decorator;

@ccclass('DormiCptInputPassword')
export class DormiCptInputPassword extends InputPassword {

    checkPassword(event: Event, customEventData: string) {
        let str = this.password.getComponent(EditBox).string; //获取节点的组件
        if(str == '4311') {
            this.ChangeScene("DormiS4_3");
            this.node.active = false;
        }
    }

}