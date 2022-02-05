var Furness_Opend = false

function Start_Melt_Cobber(){
    if (Inventory[3] >= 1 && Inventory[2] >= 1){
        Inventory[3] -= 1
        Inventory[2] -= 1

        Melt_Inventory[1] += 1 

        document.getElementById('number_Of_Cobber_Ore').innerHTML = `Cobber Ore: ${Inventory[3]}`;
        document.getElementById('number_Of_Coal').innerHTML = `Coal: ${Inventory[2]}`;
        document.getElementById('number_Of_Cobber').innerHTML = `Cobber: ${Melt_Inventory[1]}`;

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
        document.getElementById('number_Of_Tin').innerHTML = `Tin: ${Melt_Inventory[2]}`;

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

        Melt_Inventory[3] += 1 

        document.getElementById('number_Of_Iron_Ore').innerHTML = `Iron Ore: ${Inventory[5]}`;
        document.getElementById('number_Of_Coal').innerHTML = `Coal: ${Inventory[2]}`;
        document.getElementById('number_Of_Iron').innerHTML = `Iron: ${Melt_Inventory[3]}`;

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
        console.log("Open furness")
        Furness_Opend = true
        if (Inventory[3] > 0 ){
            document.getElementById("melt_Cobber_Button").style.visibility="visible";     
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
    }
    else{
        console.log("close furness")
        Furness_Opend = false
        document.getElementById("melt_Iron_Button").style.visibility="hidden";  
        document.getElementById("melt_Cobber_Button").style.visibility="hidden";
        document.getElementById("melt_Tin_Button").style.visibility="hidden";        
    }
}