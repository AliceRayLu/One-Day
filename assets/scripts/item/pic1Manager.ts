import { _decorator, Component, Node } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import { itemManager } from './itemManager';
const { ccclass, property } = _decorator;

@ccclass('pic1Manager')
export class pic1Manager extends itemManager {
    
    type: itemTypeEnum = itemTypeEnum.pic1
}
