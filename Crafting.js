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
    if (Inventory[1] >= 2){
        Inventory[1] -= 2
        Inventory[5] += 1
        document.getElementById('number_Of_Dirt').innerHTML = `Dirt: ${Inventory[1]}`;
        document.getElementById('number_Of_Mud').innerHTML = `Mud: ${Inventory[5]}`;
    }
    else{
        console.log("big fack up")
    }
}