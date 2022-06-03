import { _decorator, Component, Node } from 'cc';
import { itemManager } from './itemManager';
import { itemTypeEnum } from '../enum/index';
const { ccclass, property } = _decorator;

@ccclass('listManager')
export class listManager extends itemManager {
    type: itemTypeEnum = itemTypeEnum.list
}

