import { _decorator, Component, Node, Sprite, director, Vec3, tween} from 'cc';
import { NewComponent } from './DormiS2_lock';
const { ccclass, property } = _decorator;

@ccclass('Dormi_lock')
export class Dormi_lock extends Component {
    static isLock: boolean = true;

    @property(Node)
    guideLabel: Node;

    @property(Node)
    bubble: Node;

    start() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        console.log('lock or' + Dormi_lock.isLock)
        if(!Dormi_lock.isLock){
            let node1 = this.node.getChildByName('mask1')?.getChildByName('num');
            node1.setPosition(node1.getPosition().x, node1.getPosition().y + 75 * 2);
            node1.getComponent(NewComponent).curNum = 2;

            let node2 = this.node.getChildByName('mask2')?.getChildByName('num');
            node2.setPosition(node2.getPosition().x, node2.getPosition().y + 75 * 1);
            node2.getComponent(NewComponent).curNum = 1;

            let node3 = this.node.getChildByName('mask3')?.getChildByName('num');
            node3.setPosition(node3.getPosition().x, node3.getPosition().y + 75 * 4);
            node3.getComponent(NewComponent).curNum = 4;

            let node4 = this.node.getChildByName('mask4')?.getChildByName('num');
            node4.setPosition(node4.getPosition().x, node4.getPosition().y + 75 * 2);
            node4.getComponent(NewComponent).curNum = 2;

        }
    }

    update(deltaTime: number) {
    }

    onLoad() {
        this.guideLabel.active = false;
        this.bubble.active = false;
    }

    onTouchStart() {
        let num1 = this.node.getChildByName('mask1')?.getChildByName('num').getComponent(NewComponent).curNum;
        let num2 = this.node.getChildByName('mask2')?.getChildByName('num').getComponent(NewComponent).curNum;
        let num3 = this.node.getChildByName('mask3')?.getChildByName('num').getComponent(NewComponent).curNum;
        let num4 = this.node.getChildByName('mask4')?.getChildByName('num').getComponent(NewComponent).curNum;
        console.log("Num1: ", num1, "Num2: ", num2, "Num3: ", num3, "Num4: ", num4);
        if (!Dormi_lock.isLock || num1 == 2 && num2 == 1 && num3 == 4 && num4 == 2) {
            director.loadScene('DormiS2_1_2');
            Dormi_lock.isLock = false;
        } else {
            this.showHint();
        }
    }

    showHint(){
        this.showPopUpEffect();
        this.scheduleOnce(this.vanish, 3);
    }
    showPopUpEffect() {
        this.guideLabel.active = true;
        this.bubble.active = true;

        // 设置初始缩放为0
        this.guideLabel.scale = new Vec3(0, 0, 1);
        this.bubble.scale = new Vec3(0, 0, 1);

        // 创建弹出动画
        this.playPopUpAnimation(this.guideLabel, 0.2);
        this.playPopUpAnimation(this.bubble, 0.2);
    }

    playPopUpAnimation(node: Node, duration: number) {
        let scaleTo = new Vec3(1, 1, 1);
        let fadeInAction = tween(node)
            .to(duration, { scale: scaleTo })
            ;

        fadeInAction.start();
    }

    vanish() {
        tween(this.bubble)
            .to(0.2, {
                scale: new Vec3(0, 0, 1),                     // 缩放缓动
            }                                 // 旋转缓动
            )
            .start();

        tween(this.guideLabel)
            .to(0.1, {
                scale: new Vec3(0, 0, 1),                     // 缩放缓动
            }                                 // 旋转缓动
            )
            .start();
    }
}

