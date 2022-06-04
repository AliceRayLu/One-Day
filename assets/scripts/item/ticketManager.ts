import { _decorator, Component, Node } from 'cc';
import { itemManager } from './itemManager';
import { itemTypeEnum } from '../enum/index';
const { ccclass, property } = _decorator;

@ccclass('ticketManager')
export class ticketManager extends itemManager {
    type: itemTypeEnum = itemTypeEnum.ticket
}

