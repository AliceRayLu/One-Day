import { _decorator, Component, Node } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import { itemManager } from './itemManager';
const { ccclass, property } = _decorator;

@ccclass('pic3Manager')
export class pic3Manager extends itemManager {
    
    type: itemTypeEnum = itemTypeEnum.pic3
}


