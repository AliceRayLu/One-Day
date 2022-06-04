import { Sprite } from 'cc';
export enum Sceneenum{
    DormiS1 = "DormiS1",
    DormiS2 = "DormiS2",
    DormiS3 = "DormiS3",
    DormiS4 = "DormiS4",
    DormiS2_1 = "DormiS2_1",
    DormiS2_1_2 = "DormiS2_1_2",
    DormiS2_2 = "DormiS2_2",
    DormiS2_2_2 = "DormiS2_2_2",
    DormiS4_1 = "DormiS4_1",
    DormiS4_2 = "DormiS4_2",
    DormiS4_tea = "DormiS4_tea",
    DormiS2_alarm="DormiS2_alarm",
    Act_clock="Act_clock",
    ClassS2_clock="ClassS2_clock",
    DiningS1_clock="DiningS1_clock",
    DormiS1_Open="DormiS1_Open",
    DiningS2_Open="DiningS2_Open",
    DormiS3_maomao = "DormiS3_maomao",
    DormiS4_card = "DormiS4_card",
    DiningS1_clock_list = "DiningS1_clock_list",
    Act_piano="Act_piano",
    Act_dance="Act_dance",
    DormiS4_3="DormiS4_3",
    DiningS2_card = "DiningS2_card",
    ClassS1 = "ClassS1",
    ClassS2 = "ClassS2",
    ClassS3 = "ClassS3",
    ClassS4 = "ClassS4",
    ClassS3_blackboard1 = "ClassS3_blackboard1",
    ClassS3_blackboard2 = "ClassS3_blackboard2",
    ClassS3_blackboard3 = "ClassS3_blackboard3",
    ClassS3_blackboard4 = "ClassS3_blackboard4",
}

export enum itemStatusEnum{
    Scene = "Scene",
    Inventory = "Inventory",
    Disable = "Disable",
}

export enum itemTypeEnum{
    Chahu = "Chahu",
    Maoliang = "Maoliang",
    pic1 = "pic1",
    pic2 = "pic2",
    pic3 = "pic3",
    pic4 = "pic4",
    pic5 = "pic5",
    Chaye = "Chaye",
    todolist = "todolist",
    tuoba = "tuoba",
    card = "card",
    list = "list",
    yinliao = "yinliao",
    chart = "chart",
    jiandao = "jiandao",
    ticket = "ticket",
}

export enum EventEnum{
    Render = "Render"
}

export enum triggerTypeEnum{
    pic1trigger = "pic1trigger",
    pic2trigger = "pic1trigger",
    teatrigger = "teatrigger",
    maoliangtrigger = "maoliangtrigger",
    panzitrigger = "panzitrigger",
    wuzitrigger = "wuzitrigger",
    shuakatrigger = "shuakatrigger",
    EinsteinTrigger = "EinsteinTrigger"
}

export enum triggerStatusEnum{
    empty = "empty",
    pic1 = "pic1",
    pic2 = "pic2",
    pic3 = "pic3",
    pic4 = "pic4",
    pic5 = "pic5",
}

export enum cupTriggerStatusEnum{
    cupempty = "cupempty",
    water = "water",
    tea = "tea"
}

export enum maoliangTriggerEnum{
    empty = "empty",
    maoliang = "maoliang",
    xiaoshi = "xiaoshi"
}

export enum panziTriggerEnum{
    empty = "empty",
    mianbao = "mianbao",
    cai = "cai",
    meat = "meat",
    cheese = "cheese",
    tomato = "tomato",
    sandwitch = "sandwitch"
}

export enum wuziTriggerEnum{
    empty = "empty",
    Sprite ="Sprite"
}

export enum shuakaTriggerEnum{
    shuaka = "shuaka",
    money = "money"
}

export enum EinsteinTriggerEnum{
    empty = "empty",
    Einstein = "Einstein"
}