import { _decorator,Component, Animation, Node ,AnimationClip} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Kite')
export abstract class Kite extends Component {

    onLoad(){
        const animationComponent = this.node.getComponent(Animation);
        // 获取动画组件上的动画剪辑
        const [ idleClip, runClip ] = animationComponent.clips;

        // 获取 idleClip 的动画状态
        const idleState = animationComponent.getState('kite');

        idleState.wrapMode = AnimationClip.WrapMode.PingPong;
        idleState.play();
    }

    start(): void {
        const animationComponent = this.node.getComponent(Animation);
        const state = animationComponent.getState('kite');
        state.wrapMode = AnimationClip.WrapMode.PingPong;
        state.repeatCount = Number.POSITIVE_INFINITY;
        state.play();
    }

}
