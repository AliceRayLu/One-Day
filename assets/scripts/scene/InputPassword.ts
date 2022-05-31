import { _decorator, Component, Node, EditBox, director, labelAssembler, Label } from 'cc';
import { Sceneenum } from '../enum/index';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('InputPassword')
export class InputPassword extends Component {

    password = null;
    status = 0;
    outcome = -1;

    start() {
        console.log('---------InputPassword Start');
        this.password = this.node.getChildByName('DoorPassword'); //获取节点
        if(this.status == 0) {
            this.node.active = false;
        }
    }
    
    ChangeScene(scene:string){
        director.loadScene(scene as Sceneenum)
    }

    ChangeStatus(event: Event, customEventData: string) {
        if(customEventData == "1") {
            if(this.status == 1) {
                this.node.active = false;
                this.status = 0;
            }
            else {
                this.node.active = true;
                this.status = 1;
            }
        }
    }
    
    checkPassword(event: Event, customEventData: string) {
        console.log('---------' + customEventData);
        let str = this.password.getComponent(EditBox).string; //获取节点的组件
        console.log(str)
        if(str == 'covid') {
            this.ChangeScene("DormiS1_Open");
            this.outcome = 1;
        }
        else this.outcome = 0;
    }
    
}