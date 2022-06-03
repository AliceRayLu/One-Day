import { _decorator, Component, Node } from 'cc';
import { itemTypeEnum } from '../enum/index';
import { itemManager } from './itemManager';
const { ccclass, property } = _decorator;

@ccclass('TodolistManager')
export class TodolistManager extends itemManager {
    type: itemTypeEnum = itemTypeEnum.todolist
}

