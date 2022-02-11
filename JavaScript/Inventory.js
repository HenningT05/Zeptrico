var Inventory_Opend = false

function Open_Inventory(){
    if (Inventory_Opend == false){
        Inventory_Opend = true

        document.getElementsByClassName("Inventory_Dirt")[0].style.visibility="visible"; 
        document.getElementsByClassName("Inventory_Stone")[0].style.visibility="visible"; 
        document.getElementsByClassName("Inventory_Coal")[0].style.visibility="visible"; 
        document.getElementsByClassName("Inventory_Cobber_Ore")[0].style.visibility="visible"; 
        document.getElementsByClassName("Inventory_Tin_Ore")[0].style.visibility="visible"; 
        document.getElementsByClassName("Inventory_Iron_Ore")[0].style.visibility="visible"; 


        document.getElementById("Dirt_Inventroy_IMG").style.visibility="visible"; 
        document.getElementById("number_Of_Dirt").style.visibility="visible"; 

        document.getElementById("Stone_Inventory_IMG").style.visibility="visible"; 
        document.getElementById("number_Of_Stone").style.visibility="visible"; 

        document.getElementById("Coal_Inventory_IMG").style.visibility="visible"; 
        document.getElementById("number_Of_Coal").style.visibility="visible"; 

        document.getElementById("Cobber_Ore_Inventory_IMG").style.visibility="visible"; 
        document.getElementById("number_Of_Cobber_Ore").style.visibility="visible"; 

        document.getElementById("Tin_Ore_Inventory_IMG").style.visibility="visible"; 
        document.getElementById("number_Of_Tin_Ore").style.visibility="visible"; 

        document.getElementById("Iron_Ore_Inventory_IMG").style.visibility="visible"; 
        document.getElementById("number_Of_Iron_Ore").style.visibility="visible"; 
        
        if (Inventory[0] == 0){
            document.getElementById("Dirt_Inventroy_IMG").style.opacity=0.5; 
        }
    }
    else{
        Inventory_Opend = false
        
        document.getElementsByClassName("Inventory_Dirt")[0].style.visibility="hidden"; 
        document.getElementsByClassName("Inventory_Stone")[0].style.visibility="hidden"; 
        document.getElementsByClassName("Inventory_Coal")[0].style.visibility="hidden";
        document.getElementsByClassName("Inventory_Cobber_Ore")[0].style.visibility="hidden"; 
        document.getElementsByClassName("Inventory_Tin_Ore")[0].style.visibility="hidden"; 
        document.getElementsByClassName("Inventory_Iron_Ore")[0].style.visibility="hidden";  

        document.getElementById("Dirt_Inventroy_IMG").style.visibility="hidden"; 
        document.getElementById("number_Of_Dirt").style.visibility="hidden"; 

        document.getElementById("Stone_Inventory_IMG").style.visibility="hidden"; 
        document.getElementById("number_Of_Stone").style.visibility="hidden"; 

        document.getElementById("Coal_Inventory_IMG").style.visibility="hidden"; 
        document.getElementById("number_Of_Coal").style.visibility="hidden"; 

        document.getElementById("Cobber_Ore_Inventory_IMG").style.visibility="hidden"; 
        document.getElementById("number_Of_Cobber_Ore").style.visibility="hidden"; 

        document.getElementById("Tin_Ore_Inventory_IMG").style.visibility="hidden"; 
        document.getElementById("number_Of_Tin_Ore").style.visibility="hidden"; 

        document.getElementById("Iron_Ore_Inventory_IMG").style.visibility="hidden"; 
        document.getElementById("number_Of_Iron_Ore").style.visibility="hidden"; 
    }
}