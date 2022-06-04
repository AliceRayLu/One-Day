import { _decorator, Component, Node } from 'cc';
import { itemManager } from './itemManager';
import { itemTypeEnum } from '../enum/index';
const { ccclass, property } = _decorator;

@ccclass('jiandaoManager')
export class jiandaoManager extends itemManager {
    type: itemTypeEnum = itemTypeEnum.jiandao
}

