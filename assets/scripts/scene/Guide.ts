import { _decorator, Component, Node, Label, Tween, v3, Vec3, Sprite, Color, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Guide')
export class Guide extends Component {
    @property(Node)
    guideLabel: Node;

    @property(Node)
    bubble: Node;

    static guideDir: boolean = false;
    start() {
        // this.node.on(Node.EventType.TOUCH_END, this.vanish, this);
    }

    onLoad() {
        this.guideLabel.active = false;
        this.bubble.active = false;
        this.guide();
    }

    guide() {
        if (!Guide.guideDir) {
            this.scheduleOnce(this.showPopUpEffect, 0.5);
            this.scheduleOnce(this.vanish, 5);
        }
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
        Guide.guideDir = true;
    }

}
