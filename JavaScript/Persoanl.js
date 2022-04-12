function Open_Armory(){
    document.getElementsByClassName("Armory_Equiped_Gui")[0].style.visibility="visible"; 
    document.getElementById("Personal_Button").style.visibility="hidden"; 
    document.getElementById("Personal_Close_Button").style.visibility="visible"; 
    Clean_Main_Screen()
}

function Close_Armory_Equiped_Gui_Gui(){
    document.getElementsByClassName("Armory_Equiped_Gui")[0].style.visibility="hidden"; 
    document.getElementById("Personal_Close_Button").style.visibility="hidden"; 
    Print_Main_Screen()
}

function Open_Personal_Gui(){
    document.getElementsByClassName("Personal_Gui")[0].style.visibility="visible"; 
    document.getElementById("Close_Personal_Button").style.visibility="visible"; 
    Clean_Main_Screen()
}

function Clean_Personal_Screen(){
    document.getElementsByClassName("Personal_Gui")[0].style.visibility="hidden";
    document.getElementById("Close_Personal_Button").style.visibility="hidden"; 
}

function Close_Personal_Gui(){
    document.getElementsByClassName("Personal_Gui")[0].style.visibility="hidden";
    document.getElementById("Close_Personal_Button").style.visibility="hidden"; 
    Print_Main_Screen()
}