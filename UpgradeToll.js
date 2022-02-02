var level_PickAks = 1

function go_To_Level_3(){
    if (Inventory[0] >= 3){
        console.log(mining_Speed," Start Speed")
        mining_Speed = mining_Speed - 0.5
        console.log(mining_Speed, " Speed")
        Inventory[0] -= 3
        document.getElementById('number_Of_Stone').innerHTML = `stone: ${Inventory[0]}`;
    }
    else{
        console.log("big fack up")
    }
}

function go_To_Level_2(){
    if (Inventory[5] >= 1){
        console.log(mining_Speed," Start Speed")
        mining_Speed = mining_Speed - 0.5
        console.log(mining_Speed, " Speed")
        Inventory[5] -= 1
        document.getElementById('number_Of_Mud').innerHTML = `Mud: ${Inventory[5]}`;
        document.getElementById('upgrade_Tool_Button').innerHTML = `Upgrade 3 Stone`;
        level_PickAks += 1
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
}