var Furness_Opend = false

var Melting_Ore = "Cobber"

function Start_Melt_Cobber(){
    if (Inventory[3] >= 1 && Inventory[2] >= 1){
        Inventory[3] -= 1
        Inventory[2] -= 1

        Melt_Inventory[0] += 1 

        document.getElementById('Melt_Ore_Number').innerHTML = `${Inventory[3]}`;
        document.getElementById('Melt_Coal_Number').innerHTML = `${Inventory[2]}`;

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

        document.getElementById('Melt_Ore_Number').innerHTML = `${Inventory[4]}`;
        document.getElementById('Melt_Coal_Number').innerHTML = `${Inventory[2]}`;

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

        document.getElementById('Melt_Ore_Number').innerHTML = `${Inventory[5]}`;
        document.getElementById('Melt_Coal_Number').innerHTML = `${Inventory[2]}`;

        xp_Incressment = 20
        xp = xp_Incressment
        Xp_Level_Check()
    }  
    else{
        console.log("You need more coal")
    }
}

function Start_Melt(){
    if (Melting_Ore == "Cobber"){
        Start_Melt_Cobber()
    }
    if (Melting_Ore == "Tin"){
        start_Melt_Tin()
    }
    if (Melting_Ore == "Iron"){
        Start_Melt_Iron()
    }
}


function Melt_Selc_Cobber(){
    Melting_Ore = "Cobber"
    document.getElementById('Melt_Name').innerHTML = "Cobber Ore";
    document.getElementById('Melt_Ore_Number').innerHTML = Inventory[3];
    document.getElementById('Melted_Name').innerHTML = "Cobber";
    document.getElementById("Melt_ore_Gui").src="../Zeptrico/Mining_Images/Cobber_Ore.png";
}

function Melt_Selc_Tin(){
    Melting_Ore = "Tin"
    document.getElementById('Melt_Name').innerHTML = "Tin Ore";
    document.getElementById('Melt_Ore_Number').innerHTML = Inventory[4];
    document.getElementById('Melted_Name').innerHTML = "Tin";
    document.getElementById("Melt_ore_Gui").src="../Zeptrico/Mining_Images/Tin_Ore.png"
}

function Melt_Selc_Iron(){
    Melting_Ore = "Iron"
    document.getElementById('Melt_Name').innerHTML = "Iron Ore";
    document.getElementById('Melt_Ore_Number').innerHTML = Inventory[5];
    document.getElementById('Melted_Name').innerHTML = "Iron";
    document.getElementById("Melt_ore_Gui").src="../Zeptrico/Mining_Images/Iron_Ore.png"
}


function Furness_Open_Function(){
    if (Furness_Opend == false){
        Furness_Opend = true
        document.getElementById('Melt_Coal_Number').innerHTML = Inventory[2];

        document.getElementById("Close_Furness_Butto").style.visibility="visible";

        document.getElementsByClassName("Melt_Gui")[0].style.visibility="visible"; 
        document.getElementsByClassName("Melt_Ore_IMG_Gui")[0].style.visibility="visible"; 
        document.getElementsByClassName("Melt_Ore_Coal_IMG_Gui")[0].style.visibility="visible"; 
        document.getElementsByClassName("Melt_IMG_Gui")[0].style.visibility="visible"; 
        
        document.getElementsByClassName("Dif_Ore_Class")[0].style.visibility="visible"; 

        document.getElementById("Melt_ore_Gui").style.visibility="visible";
        document.getElementById("Melt_Ore_Number").style.visibility="visible";
        document.getElementById("Melt_coal").style.visibility="visible";
        document.getElementById("Melt_Coal_Number").style.visibility="visible";
        document.getElementById("Melt_Resalt_IMG").style.visibility="visible";
        document.getElementById("Melt_Button").style.visibility="visible";
        Clean_Main_Screen()
    }
    else{
        Furness_Opend = false

        document.getElementById("Close_Furness_Butto").style.visibility="hidden";

        document.getElementsByClassName("Melt_Gui")[0].style.visibility="hidden"; 
        document.getElementsByClassName("Melt_Ore_IMG_Gui")[0].style.visibility="hidden"; 
        document.getElementsByClassName("Melt_Ore_Coal_IMG_Gui")[0].style.visibility="hidden"; 
        document.getElementsByClassName("Melt_IMG_Gui")[0].style.visibility="hidden"; 

        document.getElementsByClassName("Dif_Ore_Class")[0].style.visibility="hidden"; 

        document.getElementById("Melt_ore_Gui").style.visibility="hidden";
        document.getElementById("Melt_Ore_Number").style.visibility="hidden";
        document.getElementById("Melt_coal").style.visibility="hidden";
        document.getElementById("Melt_Coal_Number").style.visibility="hidden";
        document.getElementById("Melt_Resalt_IMG").style.visibility="hidden";
        document.getElementById("Melt_Button").style.visibility="hidden";  
        Print_Main_Screen()    
    }
}