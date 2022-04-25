var opening_Craft = true

var Nails_Resorses = "Bronze"
var Bolts_Resores = "Bronze"
var Plate_Resrose = "Copper"

var M_Change_Runing = false

var Mud_Unlocked = false
var Bronze_Unlocked = false
var Nails_Unlocked = false
var Boltes_Unlocked = false
var Iron_Plate_Unlocked = false
var Electrum_Unlocked = false
var Illegal_Zeptiums_Unlocked = false
var Copper_Iron_Alloys_Unlocked = false
var Circuit_Board_Unlocked = false
var Oxidizer_Unlocked = false
var Rocket_Fuel_Unlocked = false

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

    if (Electrum_Unlocked == true){
        document.getElementsByClassName("Cover_Up_GUI_Electrum")[0].style.visibility="hidden";
    }
    if (Electrum_Unlocked == false){
        document.getElementsByClassName("Cover_Up_GUI_Electrum")[0].style.visibility="visible";
    }

    if (Illegal_Zeptiums_Unlocked == true){
        document.getElementsByClassName("Cover_Up_GUI_Illegal_Zeptiums")[0].style.visibility="hidden";
    }
    if (Illegal_Zeptiums_Unlocked == false){
        document.getElementsByClassName("Cover_Up_GUI_Illegal_Zeptiums")[0].style.visibility="visible";
    }

    if (Copper_Iron_Alloys_Unlocked == true){
        document.getElementsByClassName("Cover_Up_GUI_Copper_Iron_Alloys")[0].style.visibility="hidden";
    }
    if (Copper_Iron_Alloys_Unlocked == false){
        document.getElementsByClassName("Cover_Up_GUI_Copper_Iron_Alloys")[0].style.visibility="visible";
    }

    if (Circuit_Board_Unlocked == true){
        document.getElementsByClassName("Cover_Up_GUI_Circuit_Board")[0].style.visibility="hidden";
    }
    if (Circuit_Board_Unlocked == false){
        document.getElementsByClassName("Cover_Up_GUI_Circuit_Board")[0].style.visibility="visible";
    }

    if (Oxidizer_Unlocked == true){
        document.getElementsByClassName("Cover_Up_GUI_Oxidizer")[0].style.visibility="hidden";
    }
    if (Oxidizer_Unlocked == false){
        document.getElementsByClassName("Cover_Up_GUI_Oxidizer")[0].style.visibility="visible";
    }

    if (Rocket_Fuel_Unlocked == true){
        document.getElementsByClassName("Cover_Up_GUI_Rocket_Fuel")[0].style.visibility="hidden";
    }
    if (Rocket_Fuel_Unlocked == false){
        document.getElementsByClassName("Cover_Up_GUI_Rocket_Fuel")[0].style.visibility="visible";
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
    if (Plate_Resrose == "Iron"){
        if (Melt_Inventory[2] >= 2){
            document.getElementById("Craft_Iron_Plate_Need").style.color="Green";
        }
        else{
            document.getElementById("Craft_Iron_Plate_Need").style.color="Red";
        }
    }
    else{
        if (Melt_Inventory[0] >= 2){
            document.getElementById("Craft_Iron_Plate_Need").style.color="Green";
        }
        else{
            document.getElementById("Craft_Iron_Plate_Need").style.color="Red";
        }
    }


    //Electrum
    if (Melt_Inventory[3] >= 1){
        document.getElementById("Craft_Electrum_Need").style.color="Green";
    }
    else{
        document.getElementById("Craft_Electrum_Need").style.color="Red";
    }
    if (Melt_Inventory[4] >= 1){
        document.getElementById("Craft_Electrum_Need2").style.color="Green";
    }
    else{
        document.getElementById("Craft_Electrum_Need2").style.color="Red";
    }
    
    //Illegal Zeptiums
    if (Craft_Inventory[8] >= 1){
        document.getElementById("Craft_Illegal_Zeptiums_Need").style.color="Green";
    }
    else{
        document.getElementById("Craft_Illegal_Zeptiums_Need").style.color="Red";
    }

    //Copper Iron Alloys
    if (Melt_Inventory[0] >= 1){
        document.getElementById("Craft_Copper_Iron_Alloys_Need").style.color="Green";
    }
    else{
        document.getElementById("Craft_Copper_Iron_Alloys_Need").style.color="Red";
    }
    if (Melt_Inventory[2] >= 1){
        document.getElementById("Craft_Copper_Iron_Alloys_Need2").style.color="Green";
    }
    else{
        document.getElementById("Craft_Copper_Iron_Alloys_Need2").style.color="Red";
    }

    //Circuit Board
    if (Craft_Inventory[7] >= 1){
        document.getElementById("Craft_Circuit_Board_Need1").style.color="Green";
    }
    else{
        document.getElementById("Craft_Circuit_Board_Need1").style.color="Red";
    }
    if (Craft_Inventory[9] >= 1){
        document.getElementById("Craft_Circuit_Board_Need2").style.color="Green";
    }
    else{
        document.getElementById("Craft_Circuit_Board_Need2").style.color="Red";
    }

    //Oxidizer 
    if (Inventory[2] >= 1){
        document.getElementById("Craft_Oxidizer_Need1").style.color="Green";
    }
    else{
        document.getElementById("Craft_Oxidizer_Need1").style.color="Red";
    }
    if (Inventory[10] >= 1){
        document.getElementById("Craft_Oxidizer_Need2").style.color="Green";
    }
    else{
        document.getElementById("Craft_Oxidizer_Need2").style.color="Red";
    }

    //Rocket Fuel 
    if (Inventory[10] >= 2){
        document.getElementById("Craft_Rocket_Fuel_Need1").style.color="Green";
    }
    else{
        document.getElementById("Craft_Rocket_Fuel_Need1").style.color="Red";
    }
    if (Craft_Inventory[11] >= 1){
        document.getElementById("Craft_Rocket_Fuel_Need2").style.color="Green";
    }
    else{
        document.getElementById("Craft_Rocket_Fuel_Need2").style.color="Red";
    }

    if (opening_Craft == false){
        if (M_Change_Runing == false){
            Print_BLC_Lot()
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
        UNL_Inventory_Craft[0] = true

        BLC_Lot = "Mud"
        BLC_Lot_IMG = "../Zeptrico/Mining_Images/Dirt_Locked.png"
        BLC_Lot_Number = BLC_Lot_Number + 1

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
        UNL_Inventory_Craft[1] = true

        xp_Incressment = 30
        xp = xp_Incressment

        BLC_Lot = "Bronze"
        BLC_Lot_IMG = "../Zeptrico/Mining_Images/Bronze_Bar.png"

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
            UNL_Inventory_Craft[2] = true

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("You need more bronze")
        }
    }
    if (Nails_Resorses == "Iron"){
        if (Melt_Inventory[2] >= 1){
            Melt_Inventory[2] -= 1
            Craft_Inventory[3] += 1
            UNL_Inventory_Craft[3] = true
            
            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("You need more iron")
        }
    }
}

function Craft_Bolts(){
    if (Bolts_Resores == "Bronze"){
        if (Craft_Inventory[1] >= 1){
            Craft_Inventory[1] -= 1
            Craft_Inventory[4] += 1
            UNL_Inventory_Craft[4] = true

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("You need more bronze")
        }
    }
    if (Bolts_Resores == "Iron"){
        if (Melt_Inventory[2] >= 1){
            Melt_Inventory[2] -= 1
            Craft_Inventory[5] += 1
            UNL_Inventory_Craft[5] = true

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("You need more iron")
        }
    }
}


function Craft_Iron_Plate(){
    if (Plate_Resrose == "Copper"){
        if (Melt_Inventory[1] >= 2){
            Melt_Inventory[1] -= 2
            Craft_Inventory[7] += 1
            UNL_Inventory_Craft[7] = true

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("You need more Copper")
        }
    }
    if (Plate_Resrose == "Iron"){
        if (Melt_Inventory[3] >= 2){
            Melt_Inventory[3] -= 2
            Craft_Inventory[6] += 1
            UNL_Inventory_Craft[6] = true

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("You need more Iron")
        }
    }
}

function Craft_Electrum(){
    if (Melt_Inventory[3] >= 1){
        if (Melt_Inventory[4] >= 1){
            Melt_Inventory[3] -= 1
            Melt_Inventory[4] -= 1

            Craft_Inventory[8] += 1
            UNL_Inventory_Craft[8] = true

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("You need more Gold")
        }
    }
    else{
        console.log("You need more Silver")
    }
}

function Craft_Illegal_Zeptiums(){
    if (Craft_Inventory[8] >= 1){
        Craft_Inventory[8] -= 1

        coin += 100

        xp_Incressment = 30
        xp = xp_Incressment
        Upgrade_Craft_Data()
    }
    else{
        console.log("You need more Electrum")
    }
}

function Craft_Copper_Iron_Alloys(){
    if (Melt_Inventory[1] >= 1){
        if (Melt_Inventory[3] >= 1){
            Melt_Inventory[1] -= 1
            Melt_Inventory[3] -= 1

            Craft_Inventory[9] += 1
            UNL_Inventory_Craft[9] = true

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("You need more Iron")
        }
    }
    else{
        console.log("You need more Copper")
    }
}

function Craft_Circuit_Board(){
    if (Craft_Inventory[7] >= 1){
        if (Craft_Inventory[9] >= 1){
            Craft_Inventory[7] -= 1
            Craft_Inventory[9] -= 1

            Craft_Inventory[10] += 1
            UNL_Inventory_Craft[10] = true

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("You need some Copper-Iron-Alloys")
        }
    }
    else{
        console.log("You need a Copper Plate")
    }
}

function Craft_Oxidizer(){
    if (Inventory[2] >= 1){
        if (Inventory[10] >= 1){
            Inventory[2] -= 1
            Inventory[10] -= 1

            Craft_Inventory[11] += 1
            UNL_Inventory_Craft[11] = true

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("You need more Niter")
        }
    }
    else{
        console.log("You need more coal")
    }
}

function Craft_Rocket_Fuel(){
    if (Inventory[10] >= 2){
        if (Craft_Inventory[11] >= 1){
            Inventory[10] -= 2
            Craft_Inventory[11] -= 1

            Craft_Inventory[12] += 1
            UNL_Inventory_Craft[12] = true

            xp_Incressment = 30
            xp = xp_Incressment
            Upgrade_Craft_Data()
        }
        else{
            console.log("You need more Oxidizer")
        }
    }
    else{
        console.log("You need more Niter")
    }
}

//Unlock 
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

function Unlock_Electrum(){
    if (Level >= 12){
        if (Craft_Card >= 25){
            Electrum_Unlocked = true

            Craft_Card -= 25
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

function Unlock_Illegal_Zeptiums(){
    if (Level >= 12){
        if (Craft_Card >= 25){
            Illegal_Zeptiums_Unlocked = true

            Craft_Card -= 25
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

function Unlock_Copper_Iron_Alloys(){
    if (Level >= 14){
        if (Craft_Card >= 30){
            Copper_Iron_Alloys_Unlocked = true

            Craft_Card -= 30
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

function Unlock_Circuit_Board(){
    if (Level >= 14){
        if (Craft_Card >= 30){
            Circuit_Board_Unlocked = true

            Craft_Card -= 30
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

function Unlock_Oxidizer(){
    if (Level >= 16){
        if (Craft_Card >= 40){
            Oxidizer_Unlocked = true

            Craft_Card -= 40
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

function Unlock_Rocket_Fuel(){
    if (Level >= 20){
        if (Craft_Card >= 50){
            Rocket_Fuel_Unlocked = true

            Craft_Card -= 50
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

        document.getElementById("Craft_Nails_IMG").src="../Zeptrico/Mining_Images/Iron_Nails.png";
        document.getElementById("Craft_Nails_Need_IMG").src="../Zeptrico/Mining_Images/Iron_Bar.png";
        Upgrade_Craft_Data()
    }
    else{
        Nails_Resorses = "Bronze"

        document.getElementById('Craft_Nails_Name').innerHTML = "Bronze Nails";
        document.getElementById('Craft_Nails_Need').innerHTML = "1 Bronze";

        document.getElementById("Craft_Nails_IMG").src="../Zeptrico/Mining_Images/Bronze_Nails.png";
        document.getElementById("Craft_Nails_Need_IMG").src="../Zeptrico/Mining_Images/Bronze_Bar.png";
        Upgrade_Craft_Data()
    }
}

function Bolt_Change_M(){
    M_Change_Runing = true
    if (Bolts_Resores == "Bronze"){
        Bolts_Resores = "Iron"

        document.getElementById('Craft_Boltes_Name').innerHTML = "Iron Boltes";
        document.getElementById('Craft_Boltes_Need').innerHTML = "1 Iron";

        document.getElementById("Craft_Boltes_IMG").src="../Zeptrico/Mining_Images/Iron_Bolts.png";
        document.getElementById("Craft_Boltes_Need_IMG").src="../Zeptrico/Mining_Images/Iron_Bar.png";
        Upgrade_Craft_Data()
    }
    else{
        Bolts_Resores = "Bronze"

        document.getElementById('Craft_Boltes_Name').innerHTML = "Bronze Boltes";
        document.getElementById('Craft_Boltes_Need').innerHTML = "1 Bronze";

        document.getElementById("Craft_Boltes_IMG").src="../Zeptrico/Mining_Images/Bronze_Bolts.png";
        document.getElementById("Craft_Boltes_Need_IMG").src="../Zeptrico/Mining_Images/Bronze_Bar.png";
        Upgrade_Craft_Data()
    }
}

function Plate_Change_M(){
    M_Change_Runing = true
    if (Plate_Resrose == "Copper"){
        Plate_Resrose = "Iron"

        document.getElementById('Craft_Iron_Plate_Name').innerHTML = "Iron Plate";
        document.getElementById('Craft_Iron_Plate_Need').innerHTML = "2 Iron";

        document.getElementById("Craft_Iron_Plate_IMG").src="../Zeptrico/Mining_Images/Iron_Plate.png";
        document.getElementById("Craft_Iron_Plate_Need_IMG").src="../Zeptrico/Mining_Images/Iron_Bar.png";
        Upgrade_Craft_Data()
    }
    else{
        Plate_Resrose = "Copper"

        document.getElementById('Craft_Iron_Plate_Name').innerHTML = "Copper Plate";
        document.getElementById('Craft_Iron_Plate_Need').innerHTML = "2 Copper";

        document.getElementById("Craft_Iron_Plate_IMG").src="../Zeptrico/Mining_Images/Copper_Plate.png";
        document.getElementById("Craft_Iron_Plate_Need_IMG").src="../Zeptrico/Mining_Images/Copper_Bar.png";
        Upgrade_Craft_Data()
    }
}