import { _decorator, Component, VideoPlayer, Node, director } from 'cc';
const { ccclass, property} = _decorator;

@ccclass('videoPlayer')
export class videoPlayer extends Component {
    @property(VideoPlayer)
    videoPlayer: VideoPlayer = null

    start(){
        this.videoPlayer.node.on(VideoPlayer.EventType.READY_TO_PLAY, this.callback, this)
        this.videoPlayer.node.on(VideoPlayer.EventType.COMPLETED, this.changeScene, this)
    }

    callback(videoplayer){
        this.videoPlayer.play()
    }

    changeScene(){
        director.loadScene("Start")
    }
}

