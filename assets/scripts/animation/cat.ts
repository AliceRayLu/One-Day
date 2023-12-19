import { _decorator, Component, Node ,Animation, AnimationClip} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('cat')
export class cat extends Component {
    start() {
        const animationComponent = this.node.getComponent(Animation);
        // 获取动画组件上的动画剪辑
        const [ idleClip, runClip ] = animationComponent.clips;

        // 获取 idleClip 的动画状态
        const idleState = animationComponent.getState('cat');

        idleState.wrapMode = AnimationClip.WrapMode.PingPong;
        idleState.play();
    }

    update(deltaTime: number) {
        
    }
}

