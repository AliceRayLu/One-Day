import { itemStatusEnum, itemTypeEnum } from '../enum';
import Singleton from '../Base/Singleton';
import EventManager from './EventMnager';
import { EventEnum } from '../enum/index';

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

    get isSelect(){
        return this.isSelect
    }

    set isSelect(newData: boolean){
        this._isSelect = newData
        this.render()
    }

    get items(){
        return this._items
    }

    get curItemType(){
        return this._curItemType
    }

    set curItemType(newData: itemTypeEnum){
        this._curItemType = newData

        this.render()
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
