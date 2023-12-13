import { _decorator, Component, EventTouch, Node, systemEvent, SystemEvent, Tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NewComponent')
export class NewComponent extends Component {
    private isDragging: boolean = false;
    private touchStartPos: Vec3 = new Vec3();
    private touchMoveDistance: number = 0;
    private curNum: number = 0;

    start() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);

    }

    onTouchStart(event: EventTouch) {
        this.isDragging = true;
        this.touchStartPos.set(event.getLocationX(), event.getLocationY(), 0);
        event.propagationStopped = true; // 防止触摸事件继续传播
        this.touchMoveDistance = 0;
    }

    onTouchMove(event: EventTouch) {
        if (this.isDragging) {
            var deltaY = event.getLocationY() - this.touchStartPos.y;
            if(deltaY > 0 && this.curNum == 9 || deltaY < 0 && this.curNum == 0){
                this.touchMoveDistance = 0;
                return;
            }
            this.touchStartPos.set(event.getLocationX(), event.getLocationY(), 0);
            if (deltaY > 75 - this.touchMoveDistance) {
                deltaY = 75 - this.touchMoveDistance;
            } else if (deltaY < -75 - this.touchMoveDistance) {
                deltaY = -75 - this.touchMoveDistance;
            }
            this.touchMoveDistance += deltaY;
            this.node.setPosition(this.node.position.x, this.node.position.y + deltaY, this.node.position.z);
        }
    }

    onTouchEnd(event: EventTouch) {
        this.isDragging = false;

        if (this.touchMoveDistance > 0) {
            if (this.touchMoveDistance < 75) {
                const moveUp = new Tween(this.node);
                moveUp.to(0.2, { position: new Vec3(this.node.position.x, this.node.position.y + (75 - this.touchMoveDistance), this.node.position.z) });

                // 播放动画
                moveUp.start();

                this.touchMoveDistance = 0;
            }
            this.curNum++;
        } else if (this.touchMoveDistance < 0) {
            if (this.touchMoveDistance > -75) {
                // 创建一个移动动画
                const moveUp = new Tween(this.node);
                moveUp.to(0.2, { position: new Vec3(this.node.position.x, this.node.position.y + (-75 - this.touchMoveDistance), this.node.position.z) });

                // 播放动画
                moveUp.start();

                this.touchMoveDistance = 0;
            }
            this.curNum--;
        }
    }


    onDestroy() {
        this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }
}
