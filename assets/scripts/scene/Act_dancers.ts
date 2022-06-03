import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
export const Sleep = (ms)=> {
    return new Promise(resolve=>setTimeout(resolve, ms))
  }
@ccclass('Act_dancers')
export class Act_dancers extends Component {
    // async start() {
    //     console.log(1)
    //     await Sleep(5000)
    //     console.log(2)
    // }
    arr:number[]=[]
    ans:number[]=[4,2,2,3,4,1]
    start(){
        this.node.children[1].active=false
    }
    async left(){
        if(this.node.children[0].getPosition().x<-240){
            return
        }
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x-10,this.node.children[1].getPosition().y)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].active=false
        this.node.children[0].setPosition(this.node.children[0].getPosition().x-20,this.node.children[0].getPosition().y)
        this.node.children[0].active=true
        await Sleep(250)
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x-20,this.node.children[1].getPosition().y)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].active=false
        this.node.children[0].setPosition(this.node.children[0].getPosition().x-20,this.node.children[0].getPosition().y)
        this.node.children[0].active=true
        await Sleep(250)
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x-20,this.node.children[1].getPosition().y)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].setPosition(this.node.children[0].getPosition().x-10,this.node.children[0].getPosition().y)
        this.node.children[1].active=false
        this.node.children[0].active=true
        this.node.children[0].setPosition(this.node.children[0].getPosition().x-20,this.node.children[0].getPosition().y)
    }
    async right(){
        if(this.node.children[0].getPosition().x>120){
            return
        }
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x+10,this.node.children[1].getPosition().y)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].active=false
        this.node.children[0].setPosition(this.node.children[0].getPosition().x+20,this.node.children[0].getPosition().y)
        this.node.children[0].active=true
        await Sleep(250)
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x+20,this.node.children[1].getPosition().y)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].active=false
        this.node.children[0].setPosition(this.node.children[0].getPosition().x+20,this.node.children[0].getPosition().y)
        this.node.children[0].active=true
        await Sleep(250)
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x+20,this.node.children[1].getPosition().y)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].setPosition(this.node.children[0].getPosition().x+10,this.node.children[0].getPosition().y)
        this.node.children[1].active=false
        this.node.children[0].setPosition(this.node.children[0].getPosition().x+20,this.node.children[0].getPosition().y)
        this.node.children[0].active=true
    }
    async up(){
        if(this.node.children[0].getPosition().y<-180){
            return
        }
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x,this.node.children[1].getPosition().y-10)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].active=false
        this.node.children[0].setPosition(this.node.children[0].getPosition().x,this.node.children[0].getPosition().y-20)
        this.node.children[0].active=true
        await Sleep(250)
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x,this.node.children[1].getPosition().y-20)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].active=false
        this.node.children[0].setPosition(this.node.children[0].getPosition().x,this.node.children[0].getPosition().y-20)
        this.node.children[0].active=true
        await Sleep(250)
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x,this.node.children[1].getPosition().y-20)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].setPosition(this.node.children[0].getPosition().x,this.node.children[0].getPosition().y-10)
        this.node.children[1].active=false
        this.node.children[0].setPosition(this.node.children[0].getPosition().x,this.node.children[0].getPosition().y-20)
        this.node.children[0].active=true
    }
    async down(){
        if(this.node.children[0].getPosition().y>-52){
            return
        }
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x,this.node.children[1].getPosition().y+10)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].active=false
        this.node.children[0].setPosition(this.node.children[0].getPosition().x,this.node.children[0].getPosition().y+20)
        this.node.children[0].active=true
        await Sleep(250)
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x,this.node.children[1].getPosition().y+20)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].active=false
        this.node.children[0].setPosition(this.node.children[0].getPosition().x,this.node.children[0].getPosition().y+20)
        this.node.children[0].active=true
        await Sleep(250)
        this.node.children[0].active=false
        this.node.children[1].setPosition(this.node.children[1].getPosition().x,this.node.children[1].getPosition().y+20)
        this.node.children[1].active=true
        await Sleep(250)
        this.node.children[1].setPosition(this.node.children[0].getPosition().x,this.node.children[0].getPosition().y+10)
        this.node.children[1].active=false
        this.node.children[0].setPosition(this.node.children[0].getPosition().x,this.node.children[0].getPosition().y+20)
        this.node.children[0].active=true
    }
    addleft(){
        this.arr.push(1)
        this.check()
    }
    addright(){
        this.arr.push(2)
    }
    addup(){
        this.arr.push(3)
    }
    adddown(){
        this.arr.push(4)
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
        //加载下一场景
    }
    update(deltaTime: number) {
        
    }
}

