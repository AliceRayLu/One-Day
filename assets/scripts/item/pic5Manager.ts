import { _decorator, Component, Node } from 'cc';
import { itemManager } from './itemManager';
import { itemTypeEnum } from '../enum/index';
const { ccclass, property } = _decorator;

@ccclass('pic5Manager')
export class pic5Manager extends itemManager {
    type: itemTypeEnum = itemTypeEnum.pic5
}

