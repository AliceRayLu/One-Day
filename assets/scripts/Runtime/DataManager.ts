import { itemStatusEnum, itemTypeEnum } from '../enum';
import Singleton from '../Base/Singleton';
import EventManager from './EventMnager';
import { EventEnum, triggerStatusEnum, cupTriggerStatusEnum, maoliangTriggerEnum } from '../enum/index';
import { teaTriggerMananger } from '../trigger/teaTriggerManager';

interface IItem{
    status: itemStatusEnum
    type: itemTypeEnum
}

export default class DataManager extends Singleton{

    static get Instance(){
        return super.getInstance<DataManager>()
    }

    private _curItemType: itemTypeEnum | null = null
    private _items: Array<IItem> = [
        {type: itemTypeEnum.Chahu, status: itemStatusEnum.Scene},
        {type: itemTypeEnum.Maoliang, status: itemStatusEnum.Scene},
        {type: itemTypeEnum.pic1, status: itemStatusEnum.Scene},
        {type: itemTypeEnum.pic2, status: itemStatusEnum.Scene},
        {type: itemTypeEnum.pic3, status: itemStatusEnum.Scene},
        {type: itemTypeEnum.Chaye, status: itemStatusEnum.Scene},
    ]
  
    private _isSelect = false
    private _pic1Status: triggerStatusEnum = triggerStatusEnum.empty

    get pic1Status(){
        return this._pic1Status
    }

    set pic1Status(newData: triggerStatusEnum){
        this._pic1Status = newData

        this.render()
    }

    private _pic2Status: triggerStatusEnum = triggerStatusEnum.empty

    get pic2Status(){
        return this._pic2Status
    }

    set pic2Status(newData: triggerStatusEnum){
        this._pic2Status = newData

        this.render()
    }

    private _maoliangstatus: maoliangTriggerEnum = maoliangTriggerEnum.empty

    get maoliangstatus(){
        return this._maoliangstatus
    }

    set maoliangstatus(newData: maoliangTriggerEnum){
        this._maoliangstatus = newData

        this.render()
    }

    private _teaStatus: cupTriggerStatusEnum = cupTriggerStatusEnum.cupempty

    get teaStatus(){
        return this._teaStatus
    }

    set teaStatus(newData: cupTriggerStatusEnum){
        this._teaStatus = newData

        this.render()
    }

    get isSelect(){
        return this._isSelect
    }

    set isSelect(newData: boolean){
        this._isSelect = newData
        this.render()
    }

    get curItemType(){
        return this._curItemType
    }

    set curItemType(newData: itemTypeEnum){
        this._curItemType = newData

        this.render()
    }

    get items(){
        return this._items
    }

    set items(newData: IItem[]){
        this._items = newData

        //触发渲染
        
        this.render()
    }

    render(){
        EventManager.Instance.emit(EventEnum.Render)
    }
}
