function Clean_Inventory_Gui(){
    document.getElementById("Inventory_Head_Title").style.visibility="hidden";

    document.getElementsByClassName("Inventory_Dirt")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Inventory_Stone")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Inventory_Coal")[0].style.visibility="hidden";
    document.getElementsByClassName("Inventory_Cobber_Ore")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Inventory_Tin_Ore")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Inventory_Iron_Ore")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Inventory_Silver_Ore")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Inventory_Gold_Ore")[0].style.visibility="hidden";  
    document.getElementsByClassName("Inventory_Diamond")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Inventory_Cobber")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Inventory_Tin")[0].style.visibility="hidden";
    document.getElementsByClassName("Inventory_Iron")[0].style.visibility="hidden";
    document.getElementsByClassName("Inventory_Mud")[0].style.visibility="hidden";
    document.getElementsByClassName("Inventory_Bronze")[0].style.visibility="hidden";

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

    document.getElementById("Silver_Ore_Inventory_IMG").style.visibility="hidden"; 
    document.getElementById("number_Of_Silver_Ore").style.visibility="hidden"; 

    document.getElementById("Gold_Ore_Inventory_IMG").style.visibility="hidden"; 
    document.getElementById("number_Of_Gold_Ore").style.visibility="hidden"; 

    document.getElementById("Diamond_Inventory_IMG").style.visibility="hidden"; 
    document.getElementById("number_Of_Diamond").style.visibility="hidden"; 

    document.getElementById("Cobber_Inventory_IMG").style.visibility="hidden"; 
    document.getElementById("number_Of_Cobber").style.visibility="hidden"; 

    document.getElementById("Tin_Inventory_IMG").style.visibility="hidden"; 
    document.getElementById("number_Of_Tin").style.visibility="hidden"; 

    document.getElementById("Iron_Inventory_IMG").style.visibility="hidden"; 
    document.getElementById("number_Of_Iron").style.visibility="hidden"; 
    
    document.getElementById("Mud_Inventory_IMG").style.visibility="hidden"; 
    document.getElementById("number_Of_Mud").style.visibility="hidden"; 

    document.getElementById("Bronze_Inventory_IMG").style.visibility="hidden";
    document.getElementById("number_Of_Bronze").style.visibility="hidden"; 
    
    document.getElementById("Close_Inventory_Button").style.visibility="hidden";
    Print_Main_Screen()    
}


function Open_Inventory(){
    Next_Gui = "Inventroy"
    
    document.getElementById("Inventory_Head_Title").style.visibility="visible";

    document.getElementById("Close_Inventory_Button").style.visibility="visible"; 

    document.getElementsByClassName("Inventory_Dirt")[0].style.visibility="visible"; 
    document.getElementsByClassName("Inventory_Stone")[0].style.visibility="visible"; 
    document.getElementsByClassName("Inventory_Coal")[0].style.visibility="visible"; 
    document.getElementsByClassName("Inventory_Cobber_Ore")[0].style.visibility="visible"; 
    document.getElementsByClassName("Inventory_Tin_Ore")[0].style.visibility="visible"; 
    document.getElementsByClassName("Inventory_Iron_Ore")[0].style.visibility="visible"; 
    document.getElementsByClassName("Inventory_Silver_Ore")[0].style.visibility="visible"; 
    document.getElementsByClassName("Inventory_Gold_Ore")[0].style.visibility="visible";
    document.getElementsByClassName("Inventory_Diamond")[0].style.visibility="visible";  
    document.getElementsByClassName("Inventory_Cobber")[0].style.visibility="visible"; 
    document.getElementsByClassName("Inventory_Tin")[0].style.visibility="visible";
    document.getElementsByClassName("Inventory_Iron")[0].style.visibility="visible";
    document.getElementsByClassName("Inventory_Mud")[0].style.visibility="visible";
    document.getElementsByClassName("Inventory_Bronze")[0].style.visibility="visible";


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
    
    document.getElementById("Silver_Ore_Inventory_IMG").style.visibility="visible"; 
    document.getElementById("number_Of_Silver_Ore").style.visibility="visible"; 

    document.getElementById("Gold_Ore_Inventory_IMG").style.visibility="visible"; 
    document.getElementById("number_Of_Gold_Ore").style.visibility="visible"; 

    document.getElementById("Diamond_Inventory_IMG").style.visibility="visible"; 
    document.getElementById("number_Of_Diamond").style.visibility="visible"; 

    document.getElementById("Cobber_Inventory_IMG").style.visibility="visible"; 
    document.getElementById("number_Of_Cobber").style.visibility="visible"; 

    document.getElementById("Tin_Inventory_IMG").style.visibility="visible"; 
    document.getElementById("number_Of_Tin").style.visibility="visible"; 

    document.getElementById("Iron_Inventory_IMG").style.visibility="visible"; 
    document.getElementById("number_Of_Iron").style.visibility="visible"; 

    document.getElementById("Mud_Inventory_IMG").style.visibility="visible"; 
    document.getElementById("number_Of_Mud").style.visibility="visible"; 

    document.getElementById("Bronze_Inventory_IMG").style.visibility="visible"; 
    document.getElementById("number_Of_Bronze").style.visibility="visible"; 
    Clean_Main_Screen()
}