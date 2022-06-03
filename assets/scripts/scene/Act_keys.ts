import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Act_keys')
export class Act_keys extends Component {
    arr:number[]=[]
    ans:number[]=[3,1,15,3,5,4,3]
    start() {

    }
    do(){
        this.arr.push(1)
    }
    mi(){
        this.arr.push(3)
        this.check()
    }
    fa(){
        this.arr.push(4)
    }
    so(){
        this.arr.push(5)
    }
    lowso(){
        this.arr.push(15)
    }
    other(){
        this.arr.push(2)
    }
    check(){
        if(this.compare()){
            this.finish()
        }
    }
    compare(){
        if (this.arr.length!=this.ans.length){
            return false
        }else{
            for(let i=0;i<this.arr.length;i++){
                if(this.arr[i]!=this.ans[i]){
                    return false
                }
            }
        }
        return true
    }
    finish(){

    }
    update(deltaTime: number) {
        
    }
}

