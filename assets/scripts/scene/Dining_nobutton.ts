import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Dining_nobutton')
export class Dining_nobutton extends Component {
    start() {
        
    }
    move1(){
        this.node.setPosition(-360,-175)
    }
    move2(){
        this.node.setPosition(-340,-175)
    }
    move3(){
        this.node.setPosition(-400,-180)
    }
    move4(){
        this.node.setPosition(-310,-180)
    }
    move5(){
        this.node.setPosition(-240,-185)
    }
    move6(){
        this.node.setPosition(-250,-185)
    }
    move7(){
        this.node.setPosition(-260,-190)
    }
    move8(){
        this.node.setPosition(-270,-190)
    }
    move9(){
        this.node.setPosition(-280,-195)
    }
    move10(){
        this.node.setPosition(-390,-195)
    }
    move11(){
        this.node.setPosition(-300,-200)
    }
    move12(){
        this.node.setPosition(-410,-200)
    }
    move13(){
        this.node.setPosition(-320,-205)
    }
    move14(){
        this.node.setPosition(-350,-205)
    }
    update(deltaTime: number) {
        
    }
}

