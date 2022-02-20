
function go_To_Crafting_Page(){
    document.getElementsByClassName("Craft_Mud_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Craft_Bronze_Gui")[0].style.visibility="visible"; 
    document.getElementById("Craft_Mud_IMG").style.visibility="visible";
    document.getElementById("Craft_Mud_Name").style.visibility="visible";
    document.getElementById("Craft_Mud_Need").style.visibility="visible";
    document.getElementById("Craft_Mud_Button").style.visibility="visible";

    document.getElementById("Craft_Bronze_IMG").style.visibility="visible";
    document.getElementById("Craft_Bronze_Name").style.visibility="visible";
    document.getElementById("Craft_Bronze_Need").style.visibility="visible";
    document.getElementById("Craft_Bronze_Button").style.visibility="visible";

    document.getElementById("Close_Craft_Button").style.visibility="visible";
    Clean_Main_Screen()
}

function Clean_Craft_Gui(){
    console.log("good")
    document.getElementsByClassName("Craft_Mud_Gui")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Craft_Bronze_Gui")[0].style.visibility="hidden"; 
    document.getElementById("Craft_Mud_IMG").style.visibility="hidden";
    document.getElementById("Craft_Mud_Name").style.visibility="hidden";
    document.getElementById("Craft_Mud_Need").style.visibility="hidden";
    document.getElementById("Craft_Mud_Button").style.visibility="hidden";

    document.getElementById("Craft_Bronze_IMG").style.visibility="hidden";
    document.getElementById("Craft_Bronze_Name").style.visibility="hidden";
    document.getElementById("Craft_Bronze_Need").style.visibility="hidden";
    document.getElementById("Craft_Bronze_Button").style.visibility="hidden";

    document.getElementById("Close_Craft_Button").style.visibility="hidden";
    Print_Main_Screen()
}

function craft_Mud(){
    if (Inventory[0] >= 2){
        Inventory[0] -= 2
        Craft_Inventory[0] += 1
        document.getElementById('number_Of_Dirt').innerHTML = `Dirt: ${Inventory[0]}`;
        document.getElementById('number_Of_Mud').innerHTML = `Mud: ${Craft_Inventory[0]}`;

        xp_Incressment = 30
        xp = xp_Incressment
        Xp_Level_Check()
    }
    else{
        console.log("big fack up")
    }
}

function craft_Broze(){
    if (Melt_Inventory[0] >= 1 && Melt_Inventory[1] >= 1){
        Melt_Inventory[0] -= 1
        Melt_Inventory[1] -= 1
        Craft_Inventory[1] += 1
        document.getElementById('number_Of_Cobber').innerHTML = `Cobber: ${Melt_Inventory[0]}`;
        document.getElementById('number_Of_Tin').innerHTML = `Tin: ${Melt_Inventory[1]}`;
        document.getElementById('number_Of_Bronze').innerHTML = `Broze: ${Craft_Inventory[1]}`;

        xp_Incressment = 30
        xp = xp_Incressment
        Xp_Level_Check()
    }
    else{
        console.log("big fack up")
    }
}