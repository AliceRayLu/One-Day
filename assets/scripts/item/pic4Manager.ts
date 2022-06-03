import { _decorator, Component, Node } from 'cc';
import { itemManager } from './itemManager';
import { itemTypeEnum } from '../enum/index';
const { ccclass, property } = _decorator;

@ccclass('pic4Manager')
export class pic4Manager extends itemManager {
    type: itemTypeEnum = itemTypeEnum.pic4
}

