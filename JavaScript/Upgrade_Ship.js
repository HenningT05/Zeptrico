var Ship_Level = 0
var Ship_Progress = 3
var Ship_Progress_COM = 6

function Render_Level1(){
    if (Ship_Progress == 0){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text4").style.visibility="hidden"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="hidden"; 

        document.getElementById('Upgrade_Ship_Need_Text1').innerHTML =  "Bronze Nails";
        document.getElementById('Upgread_Need1_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text2').innerHTML =  "Bronze Boltes";
        document.getElementById('Upgread_Need2_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text3').innerHTML =  "Iron Plate";
        document.getElementById('Upgread_Need3_Number').innerHTML =  "1";
    }
    if (Ship_Progress == 1){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text4").style.visibility="hidden"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="hidden";
        
        document.getElementById('Upgrade_Ship_Need_Text1').innerHTML =  "Iron Nails";
        document.getElementById('Upgread_Need1_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text2').innerHTML =  "Iron Boltes";
        document.getElementById('Upgread_Need2_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text3').innerHTML =  "Iron Plate";
        document.getElementById('Upgread_Need3_Number').innerHTML =  "1";
    }
    if (Ship_Progress == 2){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text4").style.visibility="hidden"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="hidden";
        
        document.getElementById('Upgrade_Ship_Need_Text1').innerHTML =  "Iron Nails";
        document.getElementById('Upgread_Need1_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text2').innerHTML =  "Iron Boltes";
        document.getElementById('Upgread_Need2_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text4').innerHTML =  "Copper Iron alloys";
        document.getElementById('Upgread_Need4_Number').innerHTML =  "1";
    }
    if (Ship_Progress == 3){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="visible"; 
        document.getElementById("Upgrade_Ship_Need_Text4").style.visibility="visible"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="hidden"; 
        
        document.getElementById('Upgrade_Ship_Need_Text1').innerHTML =  "Iron Nails";
        document.getElementById('Upgread_Need1_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text2').innerHTML =  "Iron Boltes";
        document.getElementById('Upgread_Need2_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text3').innerHTML =  "Copper Iron alloys";
        document.getElementById('Upgread_Need3_Number').innerHTML =  "1";
        document.getElementById('Upgrade_Ship_Need_Text4').innerHTML =  "Circuit board";
        document.getElementById('Upgread_Need4_Number').innerHTML =  "1";
    }
    if (Ship_Progress == 4){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text4").style.visibility="hidden"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="hidden";
        
        document.getElementById('Upgrade_Ship_Need_Text1').innerHTML =  "Iron Nails";
        document.getElementById('Upgread_Need1_Number').innerHTML =  "10";
        document.getElementById('Upgrade_Ship_Need_Text2').innerHTML =  "Iron Plates";
        document.getElementById('Upgread_Need2_Number').innerHTML =  "2";
        document.getElementById('Upgrade_Ship_Need_Text3').innerHTML =  "Rocket Fuel";
        document.getElementById('Upgread_Need3_Number').innerHTML =  "2";
    }
    if (Ship_Progress == 5){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="visible"; 
        document.getElementById("Upgrade_Ship_Need_Text4").style.visibility="visible"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="visible"; 
        document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="visible";
        
        document.getElementById('Upgrade_Ship_Need_Text1').innerHTML =  "Iron Boltes";
        document.getElementById('Upgread_Need1_Number').innerHTML =  "10";
        document.getElementById('Upgrade_Ship_Need_Text2').innerHTML =  "Iron Plates";
        document.getElementById('Upgread_Need2_Number').innerHTML =  "1";
        document.getElementById('Upgrade_Ship_Need_Text3').innerHTML =  "Circuit board";
        document.getElementById('Upgread_Need3_Number').innerHTML =  "1";
        document.getElementById('Upgrade_Ship_Need_Text4').innerHTML =  "Copper Iron Alloys";
        document.getElementById('Upgread_Need4_Number').innerHTML =  "1";
        document.getElementById('Upgrade_Ship_Need_Text5').innerHTML =  "Rocket Fuel";
        document.getElementById('Upgread_Need5_Number').innerHTML =  "2";
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
    document.getElementsByClassName("upgrade_Need4")[0].style.visibility="hidden"; 
    document.getElementById("Upgrade_Ship_Need_Text4").style.visibility="hidden"; 
    document.getElementsByClassName("upgrade_Need5")[0].style.visibility="hidden"; 
    document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="hidden";
    Print_Main_Screen()
}