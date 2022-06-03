import { _decorator, Component, Node ,find} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Dining_bottles')
export class Dining_bottles extends Component {
    arr:number[]=[]
    ans:number[]=[3,3,6]
    start() {
    }
    addmilk(){
        this.arr.push(1)
    }
    addcoke(){
        this.arr.push(2)
    }
    addsprite(){
        this.arr.push(3)
        this.arr.sort()
        if(this.compare()){
            this.finish()
        }
    }
    addbluenongfu(){
        this.arr.push(4)
    }
    addnongfu(){
        this.arr.push(5)
    }
    addwater(){
        this.arr.push(6)
        this.arr.sort()
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
        //加载下一个场景
    }
    update(deltaTime: number) {
        
    }
}

