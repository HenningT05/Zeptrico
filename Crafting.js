var Crafting_open = false

function go_To_Crafting_Page(){
    if (Crafting_open == false){
        document.getElementById("Craft_Mud_Button").style.visibility="visible";  
        Crafting_open = true
    }
    else{
        document.getElementById("Craft_Mud_Button").style.visibility="hidden"; 
        Crafting_open = false 
    }
}


function craftMud(){
    if (Inventory[0] >= 2){
        Inventory[0] -= 2
        Craft_Inventory[1] += 1
        document.getElementById('number_Of_Dirt').innerHTML = `Dirt: ${Inventory[0]}`;
        document.getElementById('number_Of_Mud').innerHTML = `Mud: ${Craft_Inventory[1]}`;

        xp_Incressment = 30
        xp = xp_Incressment
        Xp_Level_Check()
    }
    else{
        console.log("big fack up")
    }
}