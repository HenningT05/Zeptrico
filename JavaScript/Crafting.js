var Needls_Resorses = "Bronze"
var Bolts_Resores = "Bronze"

function go_To_Crafting_Page(){
    document.getElementsByClassName("Craft_Mud_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Craft_Bronze_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Craft_Needles_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Craft_Boltes_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Craft_Iron_Plate_Gui")[0].style.visibility="visible";

    document.getElementById("Close_Craft_Button").style.visibility="visible";
    Clean_Main_Screen()
}

function Clean_Craft_Gui(){
    document.getElementsByClassName("Craft_Mud_Gui")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Craft_Bronze_Gui")[0].style.visibility="hidden";
    document.getElementsByClassName("Craft_Needles_Gui")[0].style.visibility="hidden";
    document.getElementsByClassName("Craft_Boltes_Gui")[0].style.visibility="hidden";  
    document.getElementsByClassName("Craft_Iron_Plate_Gui")[0].style.visibility="hidden";

    document.getElementById("Close_Craft_Button").style.visibility="hidden";
    Print_Main_Screen()
}

function Upgrade_Craft_Data(){
    
    Xp_Level_Check()
}

function craft_Mud(){
    if (Inventory[0] >= 2){
        Inventory[0] -= 2
        Craft_Inventory[0] += 1

        xp_Incressment = 30
        xp = xp_Incressment
        Upgrade_Craft_Data()
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

        xp_Incressment = 30
        xp = xp_Incressment
        Upgrade_Craft_Data()
    }
    else{
        console.log("big fack up")
    }
}

function Craft_Needls(){
    if (Needls_Resorses == "Bronze"){
        if (Craft_Inventory[1] >=1){
            Craft_Inventory[1] -= 1
            Craft_Inventory[2] += 1

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("Big fack up")
        }
    }
    if (Needls_Resorses == "Iron"){
        if (Melt_Inventory[2] >= 1){
            Melt_Inventory[2] -= 1
            Craft_Inventory[3] += 1
            
            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("Big fack up")
        }
    }
}

function Craft_Bolts(){
    if (Bolts_Resores == "Bronze"){
        if (Craft_Inventory[1] >= 1){
            Craft_Inventory[1] -= 1
            Craft_Inventory[4] += 1

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("Big fack up")
        }
    }
    if (Bolts_Resores == "Iron"){
        if (Melt_Inventory[2] >= 1){
            Melt_Inventory[2] -= 1
            Craft_Inventory[5] += 1

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("Big fack up")
        }
    }
}

function Craft_Iron_Plate(){
    if (Melt_Inventory[2] >= 2){
        Melt_Inventory[2] -= 2
        Craft_Inventory[6] += 1

        xp_Incressment = 30
        xp = xp_Incressment
        Upgrade_Craft_Data()
    }
    else{
        console.log("Big fack up")
    }
}