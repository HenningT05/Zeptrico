var level_PickAks = 1

function go_To_Level_5(){
    if (Melt_Inventory[2] >= 3){
        console.log(mining_Speed," Start Speed")
        mining_Speed = mining_Speed - 0.5
        console.log(mining_Speed, " Speed")
        Melt_Inventory[2] -= 3
        document.getElementById('number_Of_Iron').innerHTML = `Iron: ${Melt_Inventory[2]}`;
        document.getElementById('upgrade_Tool_Button').innerHTML = `Upgrade 3 Iron`; 
        level_PickAks += 1

        xp_Incressment = 40
        xp = xp_Incressment
        Xp_Level_Check()
    }
    else{
        console.log("big fack up")
    }
}


function go_To_Level_4(){
    if (Craft_Inventory[1] >= 2){
        console.log(mining_Speed," Start Speed")
        mining_Speed = mining_Speed - 0.5
        console.log(mining_Speed, " Speed")
        Craft_Inventory[1] -= 2
        document.getElementById('number_Of_Bronze').innerHTML = `Bronze: ${Craft_Inventory[1]}`;
        document.getElementById('upgrade_Tool_Button').innerHTML = `Upgrade 3 Iron`; 
        level_PickAks += 1

        xp_Incressment = 40
        xp = xp_Incressment
        Xp_Level_Check()
    }
    else{
        console.log("big fack up")
    }
}

function go_To_Level_3(){
    if (Inventory[1] >= 3){
        console.log(mining_Speed," Start Speed")
        mining_Speed = mining_Speed - 0.5
        console.log(mining_Speed, " Speed")
        Inventory[1] -= 3
        document.getElementById('number_Of_Stone').innerHTML = `stone: ${Inventory[1]}`;
        document.getElementById('upgrade_Tool_Button').innerHTML = `Upgrade 2 Bronze`;        
        level_PickAks += 1

        xp_Incressment = 40
        xp = xp_Incressment
        Xp_Level_Check()
    }
    else{
        console.log("big fack up")
    }
}

function go_To_Level_2(){
    if (Craft_Inventory[0] >= 1){
        console.log(mining_Speed," Start Speed")
        mining_Speed = mining_Speed - 0.5
        console.log(mining_Speed, " Speed")
        Craft_Inventory[0] -= 1
        document.getElementById('number_Of_Mud').innerHTML = `Mud: ${Craft_Inventory[0]}`;
        document.getElementById('upgrade_Tool_Button').innerHTML = `Upgrade 3 Stone`;
        level_PickAks += 1

        document.getElementById("Mine_Button_IMG").src="../Zeptrico/Pickaxe_Images/Pickaxe_Level2.png";

        xp_Incressment = 40
        xp = xp_Incressment
        Xp_Level_Check()
    }
    else{
        console.log("big fack up")
    }
}

function upgrade_Toll(){
    if (level_PickAks == 1){
        go_To_Level_2()
    }
    if (level_PickAks == 2){
        go_To_Level_3()
    }
    if (level_PickAks == 3){
        go_To_Level_4()
    }
    if (level_PickAks == 4){
        go_To_Level_5()
    }
}