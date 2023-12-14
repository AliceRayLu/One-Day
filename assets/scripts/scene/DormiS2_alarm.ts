import { _decorator, Component, Node, director, EventTouch, AnimationClip, tween, Vec3 } from 'cc';
import { SceneManager } from './SceneManager';
const { ccclass, property } = _decorator;

@ccclass('DormiS2_alarm')
export class DormiS2_alarm extends Component {
    // @property(Node)
    // guideLabel: Node;

    // @property(Node)
    // bubble: Node;


    start(){
        
        this.node.children[0].on(Node.EventType.TOUCH_START, this.rotateThing0, this)
        this.node.children[1].on(Node.EventType.TOUCH_START, this.rotateThing1, this)
        // this.node.children[0].on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // this.node.children[1].on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this)

        this.node.on('done',this.finish,this)
    }

    // onLoad() {
    //     this.guideLabel.active = false;
    //     this.bubble.active = false;
    //     this.guide();
    // }

    // guide() {
    //     if (!DormiS2_alarm.guideTouch) {
    //         this.scheduleOnce(this.showPopUpEffect, 2);
    //         this.scheduleOnce(this.vanish, 5);
    //     }
    // }

    rotateThing0(){
        this.playRotationTween(this.node.children[0], -30);

        // this.node.children[0].setRotationFromEuler(this.node.children[0].eulerAngles.x, this.node.children[0].eulerAngles.y, this.node.children[0].eulerAngles.z-30);
        if(this.node.children[0].eulerAngles.z%360==60&&this.node.children[1].eulerAngles.z%360==-90){
            this.node.emit('done')
        }
    }
    rotateThing1(){
        this.playRotationTween(this.node.children[1], -30);

        // this.node.children[1].setRotationFromEuler(this.node.children[1].eulerAngles.x, this.node.children[1].eulerAngles.y, this.node.children[1].eulerAngles.z-30);
        if(this.node.children[0].eulerAngles.z%360==60&&this.node.children[1].eulerAngles.z%360==-90){
            this.node.emit('done')
        }
        
    }

    onTouchMove(event: EventTouch) {
        let touchLocation = event.getLocation();
        console.log('location :' + touchLocation)
        let angle = Math.atan2(touchLocation.y - this.node.children[0].getPosition()[1], 
        touchLocation.x - this.node.children[0].getPosition()[0]) * 180 / Math.PI;
        console.log('angle :' + Math.atan2(touchLocation.y - this.node.children[0].getPosition()[1], 
        touchLocation.x - this.node.children[0].getPosition()[0]) * 180)

        this.node.children[0].angle = -angle;
        this.node.children[1].angle = -angle;
    }

    playRotationTween(node: Node, angle: number){
        tween(node)
            .to(0.3, { eulerAngles: new Vec3(node.eulerAngles.x, node.eulerAngles.y, node.eulerAngles.z + angle) })
            .start();
    }





    finish(){
        director.loadScene("DormiS2_maoliang")
    }

    update(deltaTime: number) {
        
    }
}

