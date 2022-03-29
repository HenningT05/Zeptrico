var Furness_Opend = false

function Start_Melt_Cobber(){
    if (Inventory[3] >= 1 && Inventory[2] >= 1){
        Inventory[3] -= 1
        Inventory[2] -= 1

        Melt_Inventory[0] += 1 

        document.getElementById('number_Of_Cobber_Ore').innerHTML = `Cobber Ore: ${Inventory[3]}`;
        document.getElementById('number_Of_Coal').innerHTML = `Coal: ${Inventory[2]}`;
        document.getElementById('number_Of_Cobber').innerHTML = `Cobber: ${Melt_Inventory[0]}`;

        xp_Incressment = 20
        xp = xp_Incressment
        Xp_Level_Check()
    }  
    else{
        console.log("You need more coal")
    }
}

function start_Melt_Tin(){
    if (Inventory[4] >= 1 && Inventory[2] >= 1){
        Inventory[4] -= 1
        Inventory[2] -= 1

        Melt_Inventory[1] += 1 

        document.getElementById('number_Of_Tin_Ore').innerHTML = `Tin Ore: ${Inventory[4]}`;
        document.getElementById('number_Of_Coal').innerHTML = `Coal: ${Inventory[2]}`;
        document.getElementById('number_Of_Tin').innerHTML = `Tin: ${Melt_Inventory[1]}`;

        xp_Incressment = 20
        xp = xp_Incressment
        Xp_Level_Check()
    }  
    else{
        console.log("You need more coal")
    }
}

function Start_Melt_Iron(){
    if (Inventory[5] >= 1 && Inventory[2] >= 1){
        Inventory[5] -= 1
        Inventory[2] -= 1

        Melt_Inventory[2] += 1 

        document.getElementById('number_Of_Iron_Ore').innerHTML = `Iron Ore: ${Inventory[5]}`;
        document.getElementById('number_Of_Coal').innerHTML = `Coal: ${Inventory[2]}`;
        document.getElementById('number_Of_Iron').innerHTML = `Iron: ${Melt_Inventory[2]}`;

        xp_Incressment = 20
        xp = xp_Incressment
        Xp_Level_Check()
    }  
    else{
        console.log("You need more coal")
    }
}


function Furness_Open_Function(){
    if (Furness_Opend == false){
        Furness_Opend = true

        document.getElementById("Close_Furness_Butto").style.visibility="visible";

        document.getElementsByClassName("Melt_Cobber_Gui")[0].style.visibility="visible"; 
        document.getElementsByClassName("Melt_Cobber_Ore_IMG_Gui")[0].style.visibility="visible"; 
        document.getElementsByClassName("Melt_Cobber_Ore_Coal_IMG_Gui")[0].style.visibility="visible"; 
        document.getElementsByClassName("Melt_Cobber_IMG_Gui")[0].style.visibility="visible"; 

        document.getElementById("Melt_Cobber_ore_Gui").style.visibility="visible";
        document.getElementById("Melt_Cobber_Ore_Number").style.visibility="visible";
        document.getElementById("Melt_Cobber_coal").style.visibility="visible";
        document.getElementById("Melt_Cobber_Coal_Number").style.visibility="visible";
        document.getElementById("Melt_Cobber_Resalt_IMG").style.visibility="visible";
        document.getElementById("Melt_Cobber_Button").style.visibility="visible";



        
        if (Inventory[3] > 0 ){
            document.getElementById("Melt_Cobber_Button").style.visibility="visible";     
            console.log(Inventory[3], "Cobber ore")  
        }
        if (Inventory[5] > 0){
            document.getElementById("melt_Iron_Button").style.visibility="visible"; 
            console.log(Inventory[5], "Iron ore")   
        }
        if (Inventory[4] > 0){
            document.getElementById("melt_Tin_Button").style.visibility="visible"; 
            console.log(Inventory[4], "Tin ore")   
        }
        Clean_Main_Screen()
    }
    else{
        Furness_Opend = false

        document.getElementById("Close_Furness_Butto").style.visibility="hidden";

        document.getElementsByClassName("Melt_Cobber_Gui")[0].style.visibility="hidden"; 
        document.getElementsByClassName("Melt_Cobber_Ore_IMG_Gui")[0].style.visibility="hidden"; 
        document.getElementsByClassName("Melt_Cobber_Ore_Coal_IMG_Gui")[0].style.visibility="hidden"; 
        document.getElementsByClassName("Melt_Cobber_IMG_Gui")[0].style.visibility="hidden"; 

        document.getElementById("Melt_Cobber_ore_Gui").style.visibility="hidden";
        document.getElementById("Melt_Cobber_Ore_Number").style.visibility="hidden";
        document.getElementById("Melt_Cobber_coal").style.visibility="hidden";
        document.getElementById("Melt_Cobber_Coal_Number").style.visibility="hidden";
        document.getElementById("Melt_Cobber_Resalt_IMG").style.visibility="hidden";
        document.getElementById("Melt_Cobber_Button").style.visibility="hidden";

        document.getElementById("melt_Iron_Button").style.visibility="hidden";  
        document.getElementById("Melt_Cobber_Button").style.visibility="hidden";
        document.getElementById("melt_Tin_Button").style.visibility="hidden";    
        Print_Main_Screen()    
    }
}