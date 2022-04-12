function Clean_Inventory_Gui(){
    document.getElementsByClassName("Inventory")[0].style.visibility="hidden";
    document.getElementById("Close_Inventory_Button").style.visibility="hidden";  
    Open_Personal_Gui()
}


function Open_Inventory(){
    Next_Gui = "Inventroy"
    document.getElementById("Close_Inventory_Button").style.visibility="visible"; 
    document.getElementsByClassName("Inventory")[0].style.visibility="visible"; 
    Clean_Personal_Screen()
}