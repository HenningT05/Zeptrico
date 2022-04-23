function RunGodMode(){
    //Inventory = [/*Dirt  0*/ 100,   /*Stone  1*/ 100,   /*Coal  2*/ 100,   /*Cobber ore 3*/ 100,   /*Tin ore  4*/100,   /*Iron ore  5*/100,   /*Silver ore  6*/100,   /*Gold ore 7*/100,   /*Diamond  8*/100,   /*Titanium ore  9*/100,   /*Niter   10*/100]
    //Craft_Inventory = [/*Mud  0*/100,   /*Bronze  1*/100,   /*Bronze nails 2*/100,   /*Iron nails 3*/100,   /*Bronze Boltes 4*/100,   /*Iron Boltes 5*/100,   /*Iron Plate 6*/100,   /*Cobber Plate  7*/100,    /*Electrum  8*/100,   /*Copper Iron Alloys  9*/100,   /*Circuit board  10*/100,   /*Oxidizer   11*/100,    /*Rocket Fuel  12*/100,]
    //Melt_Inventory = [/*Cobber  0*/100,   /*Tin  1*/100,   /*Iron   2*/100,   /*Silver  3*/100,    /*Gold   4*/100,   /*Titanium   5*/100]

    //UNL_Inventory = [true /*Dirt  0*/, true /*Stone  1*/, true /*Coal  2*/ , true /*Copper Ore  3*/, true /*Tin Ore  4*/, true /*Iron Ore  5*/, true /*Silver ore  6*/, true /*Gold ore  7*/, true /*Diamond  8*/, true /*Titanium ore  9*/, true /*Niter  10*/]
    //UNL_Inventory_Craft = [true /*Mud  0*/, true /*Bronze  1*/, true /*Bronze Nails  2*/, true /*Iron Nails  3*/, true /*Bronze Boltes  4*/, true /*Iron Boltes  5*/, true /*Iron Plate  6*/, true /*Copper Plate  7*/, true /*Electrum  8*/, true /*Copper Iron Alloys  9*/, true /*Cocriot board  10*/, true /*Oxidizer  11*/, true /*Rocket Fuel  12*/]
    //UNL_Inventory_Melt = [true /*Copper  0*/, true /*Tin  1*/, true /*Iron  2*/, true /*Silver  3*/, true /*Gold  4*/, true /*Titanium  5*/]

    Level = 100
    Coin = 9999
    Craft_Card = 1000
    document.getElementById('Coins_TC').innerHTML =  `${Coin}`;
    document.getElementById('Craft_Card_TC').innerHTML =  `${Craft_Card}`;
}