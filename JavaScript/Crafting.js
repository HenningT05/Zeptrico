var opening_Craft = true

var Nails_Resorses = "Bronze"
var Bolts_Resores = "Bronze"

var M_Change_Runing = false

var Mud_Unlocked = false
var Bronze_Unlocked = false
var Nails_Unlocked = false
var Boltes_Unlocked = false
var Iron_Plate_Unlocked = false

function Clean_Craft_Gui_Step1(){
    opening_Craft = true
    Clean_Craft_Gui()
}


function Craft_Check_Unloked(){
    if (Mud_Unlocked == true){
        document.getElementsByClassName("Cover_Up_GUI_Mud")[0].style.visibility="hidden";
    }
    if (Mud_Unlocked == false){
        document.getElementsByClassName("Cover_Up_GUI_Mud")[0].style.visibility="visible";
    }
    
    if (Bronze_Unlocked == true){
        document.getElementsByClassName("Cover_Up_GUI_Bronze")[0].style.visibility="hidden";
    }
    if (Bronze_Unlocked == false){
        document.getElementsByClassName("Cover_Up_GUI_Bronze")[0].style.visibility="visible";
    }

    if (Nails_Unlocked == true){
        document.getElementsByClassName("Cover_Up_GUI_Nails")[0].style.visibility="hidden";
    }
    if (Nails_Unlocked == false){
        document.getElementsByClassName("Cover_Up_GUI_Nails")[0].style.visibility="visible";
    }

    if (Boltes_Unlocked == true){
        document.getElementsByClassName("Cover_Up_GUI_Boltes")[0].style.visibility="hidden";
    }
    if (Boltes_Unlocked == false){
        document.getElementsByClassName("Cover_Up_GUI_Boltes")[0].style.visibility="visible";
    }

    if (Iron_Plate_Unlocked == true){
        document.getElementsByClassName("Cover_Up_GUI_Iron_Plate")[0].style.visibility="hidden";
    }
    if (Iron_Plate_Unlocked == false){
        document.getElementsByClassName("Cover_Up_GUI_Iron_Plate")[0].style.visibility="visible";
    }
    Upgrade_Craft_Data()  
}

function go_To_Crafting_Page(){
    document.getElementsByClassName("Craft_Mud_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Craft_Bronze_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Craft_Nails_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Craft_Boltes_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Craft_Iron_Plate_Gui")[0].style.visibility="visible";
    document.getElementsByClassName("Craft_Electrum_Gui")[0].style.visibility="visible";
    document.getElementsByClassName("Craft_Illegal_Zeptiums_Gui")[0].style.visibility="visible";
    document.getElementsByClassName("Craft_Copper_Iron_Alloys_Gui")[0].style.visibility="visible";
    document.getElementsByClassName("Craft_Circuit_Board_Gui")[0].style.visibility="visible";
    document.getElementsByClassName("Craft_Oxidizer_Gui")[0].style.visibility="visible";
    document.getElementsByClassName("Craft_Rocket_Fuel_Gui")[0].style.visibility="visible";

    document.getElementsByClassName("Cover_Up_GUI_Mud")[0].style.visibility="visible";
    document.getElementsByClassName("Cover_Up_GUI_Bronze")[0].style.visibility="visible";
    document.getElementsByClassName("Cover_Up_GUI_Nails")[0].style.visibility="visible";
    document.getElementsByClassName("Cover_Up_GUI_Boltes")[0].style.visibility="visible";
    document.getElementsByClassName("Cover_Up_GUI_Iron_Plate")[0].style.visibility="visible";
    document.getElementsByClassName("Cover_Up_GUI_Electrum")[0].style.visibility="visible";
    document.getElementsByClassName("Cover_Up_GUI_Illegal_Zeptiums")[0].style.visibility="visible";
    document.getElementsByClassName("Cover_Up_GUI_Copper_Iron_Alloys")[0].style.visibility="visible";
    document.getElementsByClassName("Cover_Up_GUI_Circuit_Board")[0].style.visibility="visible";
    document.getElementsByClassName("Cover_Up_GUI_Oxidizer")[0].style.visibility="visible";
    document.getElementsByClassName("Cover_Up_GUI_Rocket_Fuel")[0].style.visibility="visible";

    document.getElementById("Close_Craft_Button").style.visibility="visible";
    Craft_Check_Unloked()
}

function Clean_Craft_Gui(){
    document.getElementsByClassName("Craft_Mud_Gui")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Craft_Bronze_Gui")[0].style.visibility="hidden";
    document.getElementsByClassName("Craft_Nails_Gui")[0].style.visibility="hidden";
    document.getElementsByClassName("Craft_Boltes_Gui")[0].style.visibility="hidden";  
    document.getElementsByClassName("Craft_Iron_Plate_Gui")[0].style.visibility="hidden";
    document.getElementsByClassName("Craft_Electrum_Gui")[0].style.visibility="hidden";
    document.getElementsByClassName("Craft_Illegal_Zeptiums_Gui")[0].style.visibility="hidden";
    document.getElementsByClassName("Craft_Copper_Iron_Alloys_Gui")[0].style.visibility="hidden";
    document.getElementsByClassName("Craft_Circuit_Board_Gui")[0].style.visibility="hidden";
    document.getElementsByClassName("Craft_Oxidizer_Gui")[0].style.visibility="hidden";
    document.getElementsByClassName("Craft_Rocket_Fuel_Gui")[0].style.visibility="hidden";

    document.getElementsByClassName("Cover_Up_GUI_Mud")[0].style.visibility="hidden";
    document.getElementsByClassName("Cover_Up_GUI_Bronze")[0].style.visibility="hidden";
    document.getElementsByClassName("Cover_Up_GUI_Nails")[0].style.visibility="hidden";
    document.getElementsByClassName("Cover_Up_GUI_Boltes")[0].style.visibility="hidden";
    document.getElementsByClassName("Cover_Up_GUI_Iron_Plate")[0].style.visibility="hidden";
    document.getElementsByClassName("Cover_Up_GUI_Electrum")[0].style.visibility="hidden";
    document.getElementsByClassName("Cover_Up_GUI_Illegal_Zeptiums")[0].style.visibility="hidden";
    document.getElementsByClassName("Cover_Up_GUI_Copper_Iron_Alloys")[0].style.visibility="hidden";
    document.getElementsByClassName("Cover_Up_GUI_Circuit_Board")[0].style.visibility="hidden";
    document.getElementsByClassName("Cover_Up_GUI_Oxidizer")[0].style.visibility="hidden";
    document.getElementsByClassName("Cover_Up_GUI_Rocket_Fuel")[0].style.visibility="hidden";

    document.getElementById("Close_Craft_Button").style.visibility="hidden";
    Print_Main_Screen()
}

function Upgrade_Craft_Data(){
    //Mud
    if (Inventory[0] >= 2){
        document.getElementById("Craft_Mud_Need").style.color="Green";
    }
    else{
        document.getElementById("Craft_Mud_Need").style.color="Red";
    }
    //Bronze
    if (Melt_Inventory[0] >= 1){
        document.getElementById("Craft_Bronze_Need1").style.color="Green";
    }
    else{
        document.getElementById("Craft_Bronze_Need1").style.color="Red";
    }

    if (Melt_Inventory[1] >= 1){
        document.getElementById("Craft_Bronze_Need2").style.color="Green";
    }
    else{
        document.getElementById("Craft_Bronze_Need2").style.color="Red";
    }
    //Nails
    if (Nails_Resorses == "Bronze"){
        if (Craft_Inventory[1] >= 1){
            document.getElementById("Craft_Nails_Need").style.color="Green";
        }
        else{
            document.getElementById("Craft_Nails_Need").style.color="Red";
        }
    }  
    else{
        if (Melt_Inventory[2] >= 1){
            document.getElementById("Craft_Nails_Need").style.color="Green";
        }
        else{
            document.getElementById("Craft_Nails_Need").style.color="Red";
        }
    }

    //Boltes
    if (Bolts_Resores == "Bronze"){
        if (Craft_Inventory[1] >= 1){
            document.getElementById("Craft_Boltes_Need").style.color="Green";
        }
        else{
            document.getElementById("Craft_Boltes_Need").style.color="Red";
        }
    }
    else{
        if (Melt_Inventory[2] >= 1){
            document.getElementById("Craft_Boltes_Need").style.color="Green";
        }
        else{
            document.getElementById("Craft_Boltes_Need").style.color="Red";
        }
    }

    //Iron plate
    if (Melt_Inventory[2] >= 2){
        document.getElementById("Craft_Iron_Plate_Need").style.color="Green";
    }
    else{
        document.getElementById("Craft_Iron_Plate_Need").style.color="Red";
    }

    if (opening_Craft == false){
        if (M_Change_Runing == false){
            Xp_Level_Check()
        }
        else{
            M_Change_Runing = false
        }
    }  
    else{
        opening_Craft = false
        Clean_Main_Screen()
    }
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

function Craft_Nails(){
    if (Nails_Resorses == "Bronze"){
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
    if (Nails_Resorses == "Iron"){
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

//function Craft_Electrum{
    if (Melt_Inventory[3] >= 1){
        if (Melt_Inventory[4] >= 1){

        }
    }
//}

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

function Unlock_Mud(){
    if (Level >= 2){
        if (Craft_Card >= 5){
            Mud_Unlocked = true

            Craft_Card -= 5
            document.getElementById('Craft_Card_TC').innerHTML = Craft_Card;
            Craft_Check_Unloked()
        }
        else{
            console.log("Not enough Craft Cards")
        }
    }
    else{
        console.log("Not high enough level")
    }
}

function Unlock_Bronze(){
    if (Level >= 4){
        if (Craft_Card >= 10){
            Bronze_Unlocked = true

            Craft_Card -= 5
            document.getElementById('Craft_Card_TC').innerHTML = Craft_Card;
            Craft_Check_Unloked()
        }
        else{
            console.log("Not enough Craft Cards")
        }
    }
    else{
        console.log("Not high enough level")
    }
}

function Unlock_Nails(){
    if (Level >= 8){
        if (Craft_Card >= 15){
            Nails_Unlocked = true

            Craft_Card -= 15
            document.getElementById('Craft_Card_TC').innerHTML = Craft_Card;
            Craft_Check_Unloked()
        }
        else{
            console.log("Not enough Craft Cards")
        }
    }
    else{
        console.log("Not high enough level")
    }
}

function Unlock_Boltes(){
    if (Level >= 8){
        if (Craft_Card >= 15){
            Boltes_Unlocked = true

            Craft_Card -= 15
            document.getElementById('Craft_Card_TC').innerHTML = Craft_Card;
            Craft_Check_Unloked()
        }
        else{
            console.log("Not enough Craft Cards")
        }
    }
    else{
        console.log("Not high enough level")
    }
}

function Unlock_Iron_Plate(){
    if (Level >= 10){
        if (Craft_Card >= 20){
            Iron_Plate_Unlocked = true

            Craft_Card -= 20
            document.getElementById('Craft_Card_TC').innerHTML = Craft_Card;
            Craft_Check_Unloked()
        }
        else{
            console.log("Not enough Craft Cards")
        }
    }
    else{
        console.log("Not high enough level")
    }
}

function Nail_Change_M(){
    M_Change_Runing = true
    if (Nails_Resorses == "Bronze"){
        Nails_Resorses = "Iron"

        document.getElementById('Craft_Nails_Name').innerHTML = "Iron Nails";
        document.getElementById('Craft_Nails_Need').innerHTML = "1 Iron";
        Upgrade_Craft_Data()
    }
    else{
        Nails_Resorses = "Bronze"

        document.getElementById('Craft_Nails_Name').innerHTML = "Bronze Nails";
        document.getElementById('Craft_Nails_Need').innerHTML = "1 Bronze";
        Upgrade_Craft_Data()
    }
}

function Bolt_Change_M(){
    M_Change_Runing = true
    if (Bolts_Resores == "Bronze"){
        Bolts_Resores = "Iron"

        document.getElementById('Craft_Boltes_Name').innerHTML = "Iron Boltes";
        document.getElementById('Craft_Boltes_Need').innerHTML = "1 Iron";
        Upgrade_Craft_Data()
    }
    else{
        Bolts_Resores = "Bronze"

        document.getElementById('Craft_Boltes_Name').innerHTML = "Bronze Boltes";
        document.getElementById('Craft_Boltes_Need').innerHTML = "1 Bronze";
        Upgrade_Craft_Data()
    }
}