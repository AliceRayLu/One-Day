import { _decorator, Component, Node,resources,SpriteFrame,Sprite,director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Dining_Dad')
export class Dining_Dad extends Component {
    arr:number[]=[]
    ans:number[]=[1,2,3,4,5]
    start() {
        for(var i=0;i<8;i++){
            this.node.children[i].active=false
        }
    }
    addbread(){
        if(this.arr.indexOf(1)!=-1){
            if(this.compare()){
                director.loadScene('DiningS1_aftersand')
            }
            else{
                return
            }
        }
        this.arr.push(1)
        //this.check()
        this.node.children[0].active=true
        this.node.children[0].setPosition(0,(this.arr.length-1)*10,0)
    }
    addvegetable(){
        if(this.arr.indexOf(5)!=-1){
            return
        }
        this.arr.push(5)
        //this.check()
        this.node.children[4].active=true
        this.node.children[4].setPosition(0,(this.arr.length-1)*10,0)
    }
    addleg(){
        if(this.arr.indexOf(6)!=-1){
            return
        }
        this.arr.push(6)
        //this.check()
        this.node.children[5].active=true
        this.node.children[5].setPosition(0,(this.arr.length-1)*10,0)
    }
    addmeat(){
        if(this.arr.indexOf(4)!=-1){
            return
        }
        this.arr.push(4)
        //this.check()
        this.node.children[3].active=true
        this.node.children[3].setPosition(0,(this.arr.length-1)*10,0)
    }
    addcheese(){
        if(this.arr.indexOf(3)!=-1){
            return
        }
        this.arr.push(3)
        //this.check()
        this.node.children[2].active=true
        this.node.children[2].setPosition(0,(this.arr.length-1)*10,0)
    }
    addcorn(){
        if(this.arr.indexOf(7)!=-1){
            return
        }
        this.arr.push(7)
        //this.check()
        this.node.children[6].active=true
        this.node.children[6].setPosition(0,(this.arr.length-1)*10,0)
    }
    addtomato(){
        if(this.arr.indexOf(2)!=-1){
            return
        }
        this.arr.push(2)
        //this.check()
        this.node.children[1].active=true
        this.node.children[1].setPosition(0,(this.arr.length-1)*10,0)
    }
    addbaozi(){
        if(this.arr.indexOf(8)!=-1){
            return
        }
        this.arr.push(8)
        //this.check()
        this.node.children[7].active=true
        this.node.children[7].setPosition(0,(this.arr.length-1)*10,0)
    }
    // check(){
    //     if(this.compare()){
    //         console.debug('yes')
    //     }else{
    //         console.debug('no')
    //     }
    // }
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
    cancel(){
        if(this.arr.length<=0){
            return
        }
        this.node.children[this.arr[this.arr.length-1]-1].active=false
        this.arr.pop()
    }
    update(deltaTime: number) {
        
    }
}

