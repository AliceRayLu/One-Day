import { _decorator, Component, Node } from 'cc';
import { itemStatusEnum, itemTypeEnum } from '../enum';
import { itemManager } from './itemManager';
const { ccclass, property } = _decorator;

@ccclass('ChayeManager')
export class ChayeManager extends itemManager {
    
    type: itemTypeEnum = itemTypeEnum.Chaye
}

