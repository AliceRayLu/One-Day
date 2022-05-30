import { _decorator, Component, Node } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import { itemManager } from './itemManager';
const { ccclass, property } = _decorator;

@ccclass('pic2Manager')
export class pic2Manager extends itemManager {
    
    type: itemTypeEnum = itemTypeEnum.pic2
}
