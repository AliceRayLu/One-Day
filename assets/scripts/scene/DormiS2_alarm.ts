import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('DormiS2_alarm')
export class DormiS2_alarm extends Component {
    start(){
        
        this.node.children[0].on(Node.EventType.TOUCH_END, this.rotateThing0, this)
        this.node.children[1].on(Node.EventType.TOUCH_END, this.rotateThing1, this)
        this.node.on('done',this.finish,this)
    }
    rotateThing0(){
        this.node.children[0].setRotationFromEuler(this.node.children[0].eulerAngles.x, this.node.children[0].eulerAngles.y, this.node.children[0].eulerAngles.z-30);
        if(this.node.children[0].eulerAngles.z==60&&this.node.children[1].eulerAngles.z==-90){
            this.node.emit('done')
        }
    }
    rotateThing1(){
        this.node.children[1].setRotationFromEuler(this.node.children[1].eulerAngles.x, this.node.children[1].eulerAngles.y, this.node.children[1].eulerAngles.z-30);
        if(this.node.children[0].eulerAngles.z==60&&this.node.children[1].eulerAngles.z==-90){
            this.node.emit('done')
        }
        
    }

    finish(){
        console.debug('horayyy')
    }



    update(deltaTime: number) {
        
    }
}

