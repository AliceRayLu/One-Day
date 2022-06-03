import { _decorator, Component, Node, AudioSource, assert } from 'cc';
const { ccclass, property } = _decorator;

@ccclass("AudioController")
export class AudioController extends Component { 

    @property(AudioSource)
    public audioSource: AudioSource = null!;

    play () {
        this.audioSource.play();
    }

    pause () {
        this.audioSource.pause();
    }
}

