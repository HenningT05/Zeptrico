var Ship_Level = 0
var Ship_Progress = 0
var Ship_Progress_COM = 7

function Render_Level1(){
    if (Ship_Progress_COM == 0){
        
    }
    Print_Ship_Screen()
}

function Open_Ship(){
    document.getElementById('Ship_Level').innerHTML =  "Level "+ Ship_Level;
    document.getElementById('Ship_Level_Up').innerHTML =  Ship_Progress + " / "+ Ship_Progress_COM;

    if (Ship_Level == 0){
        Render_Level1()
    }
}


function Print_Ship_Screen(){
    document.getElementsByClassName("Upgrade_Ship_Gui")[0].style.visibility="visible"; 
    document.getElementById("Close_Ship_Button").style.visibility="visible"; 
    Clean_Main_Screen()
}


function Close_Ship(){
    document.getElementsByClassName("Upgrade_Ship_Gui")[0].style.visibility="hidden";
    document.getElementById("Close_Ship_Button").style.visibility="hidden";  
    Print_Main_Screen()
}