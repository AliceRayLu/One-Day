import { _decorator, Component, Node } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import { itemManager } from './itemManager';
const { ccclass, property } = _decorator;

@ccclass('MaoliangManager')
export class MaoliangManager extends itemManager {
    
    type: itemTypeEnum = itemTypeEnum.Maoliang
}

