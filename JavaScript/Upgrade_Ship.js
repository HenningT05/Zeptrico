var Ship_Level = 0
var Ship_Progress = 5
var Ship_Progress_COM = 6
var Number_Of_Slot = 5
var Ship_Info_Print = ""
var Ship_Info_IMG = ""

function Place_Slots(){
    if (Number_Of_Slot == 5){
        document.getElementsByClassName("upgrade_Need1")[0].style.left= "1%"; 
        document.getElementById("Ship_Info1_Button").style.left="1%"; 

        document.getElementsByClassName("upgrade_Need2")[0].style.left= "20%"; 
        document.getElementById("Ship_Info2_Button").style.left="20%"; 

        document.getElementsByClassName("upgrade_Need3")[0].style.left= "40%";
        document.getElementById("Ship_Info3_Button").style.left="40%"; 
        
        document.getElementsByClassName("upgrade_Need4")[0].style.left= "60%";
        document.getElementById("Ship_Info4_Button").style.left="60%"; 

        document.getElementsByClassName("upgrade_Need5")[0].style.left= "81%";
        document.getElementById("Ship_Info5_Button").style.left="81%"; 
    }

    if (Number_Of_Slot == 4){
        document.getElementsByClassName("upgrade_Need1")[0].style.left= "4%"; 
        document.getElementById("Upgrade_Ship_Need_Text1").style.left="4%"; 
        document.getElementById("Upgrade_Ship_Need_Text1").style.fontSize="12px"; 
        document.getElementById("Ship_Info1_Button").style.left="4%"; 

        document.getElementsByClassName("upgrade_Need2")[0].style.left= "29%"; 
        document.getElementById("Upgrade_Ship_Need_Text2").style.left="27%"; 
        document.getElementById("Upgrade_Ship_Need_Text2").style.fontSize="12px"; 
        document.getElementById("Ship_Info2_Button").style.left="29%"; 

        document.getElementsByClassName("upgrade_Need3")[0].style.left= "54%";
        document.getElementById("Upgrade_Ship_Need_Text3").style.left="50%"; 
        document.getElementById("Upgrade_Ship_Need_Text3").style.fontSize="12px"; 
        document.getElementById("Ship_Info3_Button").style.left="54%"; 
        
        document.getElementsByClassName("upgrade_Need4")[0].style.left= "79%";
        document.getElementById("Upgrade_Ship_Need_Text4").style.left="85%"; 
        document.getElementById("Upgrade_Ship_Need_Text4").style.fontSize="12px"; 
        document.getElementById("Ship_Info4_Button").style.left="79%"; 
    }

    if (Number_Of_Slot == 3){
        document.getElementsByClassName("upgrade_Need1")[0].style.left= "12%"; 
        document.getElementById("Upgrade_Ship_Need_Text1").style.left="5%"; 
        document.getElementById("Ship_Info1_Button").style.left="12%"; 

        document.getElementsByClassName("upgrade_Need2")[0].style.left= "42%"; 
        document.getElementById("Upgrade_Ship_Need_Text2").style.left="37%"; 
        document.getElementById("Ship_Info2_Button").style.left="42%"; 

        document.getElementsByClassName("upgrade_Need3")[0].style.left= "72%";
        document.getElementById("Upgrade_Ship_Need_Text3").style.left="72%"; 
        document.getElementById("Ship_Info3_Button").style.left="72%"; 
    }
}

function Render_Level1(){
    if (Ship_Progress == 0){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text4").style.visibility="hidden"; 
        document.getElementById("Ship_Info4_Button").style.visibility="hidden"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="hidden"; 
        document.getElementById("Ship_Info5_Button").style.visibility="hidden"; 

        document.getElementById('Upgrade_Ship_Need_Text1').innerHTML =  "Bronze Nails";
        document.getElementById('Upgread_Need1_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text2').innerHTML =  "Bronze Boltes";
        document.getElementById('Upgread_Need2_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text3').innerHTML =  "Iron Plate";
        document.getElementById('Upgread_Need3_Number').innerHTML =  "1";
        Number_Of_Slot = 3
        Place_Slots()
    }
    if (Ship_Progress == 1){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text4").style.visibility="hidden"; 
        document.getElementById("Ship_Info4_Button").style.visibility="hidden"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="hidden"; 
        document.getElementById("Ship_Info5_Button").style.visibility="hidden"; 
        
        document.getElementById('Upgrade_Ship_Need_Text1').innerHTML =  "Iron Nails";
        document.getElementById('Upgread_Need1_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text2').innerHTML =  "Iron Boltes";
        document.getElementById('Upgread_Need2_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text3').innerHTML =  "Iron Plate";
        document.getElementById('Upgread_Need3_Number').innerHTML =  "1";
        Number_Of_Slot = 3
        Place_Slots()
    }
    if (Ship_Progress == 2){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text4").style.visibility="hidden"; 
        document.getElementById("Ship_Info4_Button").style.visibility="hidden"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="hidden"; 
        document.getElementById("Ship_Info5_Button").style.visibility="hidden"; 
        
        document.getElementById('Upgrade_Ship_Need_Text1').innerHTML =  "Iron Nails";
        document.getElementById('Upgread_Need1_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text2').innerHTML =  "Iron Boltes";
        document.getElementById('Upgread_Need2_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text4').innerHTML =  "Copper Iron alloys";
        document.getElementById('Upgread_Need4_Number').innerHTML =  "1";
        Number_Of_Slot = 3
        Place_Slots()
    }
    if (Ship_Progress == 3){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="visible"; 
        document.getElementById("Ship_Info4_Button").style.visibility="visible"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="hidden"; 
        document.getElementById("Ship_Info5_Button").style.visibility="hidden"; 
        
        document.getElementById('Upgrade_Ship_Need_Text1').innerHTML =  "Iron Nails";
        document.getElementById('Upgread_Need1_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text2').innerHTML =  "Iron Boltes";
        document.getElementById('Upgread_Need2_Number').innerHTML =  "5";
        document.getElementById('Upgrade_Ship_Need_Text3').innerHTML =  "Copper Iron alloys";
        document.getElementById('Upgread_Need3_Number').innerHTML =  "1";
        document.getElementById('Upgrade_Ship_Need_Text4').innerHTML =  "Circuit board";
        document.getElementById('Upgread_Need4_Number').innerHTML =  "1";
        Number_Of_Slot = 4
        Place_Slots()
    }
    if (Ship_Progress == 4){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text4").style.visibility="hidden"; 
        document.getElementById("Ship_Info4_Button").style.visibility="hidden"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="hidden"; 
        document.getElementById("Upgrade_Ship_Need_Text5").style.visibility="hidden"; 
        document.getElementById("Ship_Info5_Button").style.visibility="hidden"; 
        
        document.getElementById('Upgrade_Ship_Need_Text1').innerHTML =  "Iron Nails";
        document.getElementById('Upgread_Need1_Number').innerHTML =  "10";
        document.getElementById('Upgrade_Ship_Need_Text2').innerHTML =  "Iron Plates";
        document.getElementById('Upgread_Need2_Number').innerHTML =  "2";
        document.getElementById('Upgrade_Ship_Need_Text3').innerHTML =  "Rocket Fuel";
        document.getElementById('Upgread_Need3_Number').innerHTML =  "2";
        Number_Of_Slot = 3
        Place_Slots()
    }
    if (Ship_Progress == 5){
        document.getElementsByClassName("upgrade_Need4")[0].style.visibility="visible"; 
        document.getElementById("Ship_Info4_Button").style.visibility="visible"; 
        document.getElementsByClassName("upgrade_Need5")[0].style.visibility="visible"; 
        document.getElementById("Ship_Info5_Button").style.visibility="visible"; 
        
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
        Number_Of_Slot = 5
        Place_Slots()
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
    document.getElementById("Ship_Info_BC_Button").style.visibility="hidden"; 
    document.getElementsByClassName("Ship_Info_BC")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Ship_Info_Box")[0].style.visibility="hidden"; 
    document.getElementById("Ship_Info1_Button").style.visibility="hidden"; 
    document.getElementById("Ship_Info2_Button").style.visibility="hidden"; 
    document.getElementById("Ship_Info3_Button").style.visibility="hidden"; 
    document.getElementById("Ship_Info4_Button").style.visibility="hidden"; 
    document.getElementById("Ship_Info5_Button").style.visibility="hidden"; 

    Print_Main_Screen()
}



function Show_Ship_Info1(){
    document.getElementById("Ship_Info_BC_Button").style.visibility="visible"; 
    document.getElementsByClassName("Ship_Info_BC")[0].style.visibility="visible"; 
    document.getElementsByClassName("Ship_Info_Box")[0].style.visibility="visible"; 
    if (Ship_Progress == 0){
        Ship_Info_Print = "Bronze Nails"

    }
    if (Ship_Progress == 1 || Ship_Progress == 2 || Ship_Progress == 3 || Ship_Progress == 4){
        Ship_Info_Print = "Iron Nails"
    }
    if (Ship_Progress == 5){
        Ship_Info_Print = "Iron Boltes"
    }
}

function Show_Ship_Info2(){
    document.getElementById("Ship_Info_BC_Button").style.visibility="visible"; 
    document.getElementsByClassName("Ship_Info_BC")[0].style.visibility="visible"; 
    document.getElementsByClassName("Ship_Info_Box")[0].style.visibility="visible"; 
    if (Ship_Progress == 0){
        Ship_Info_Print = "Bronze Boltes"

    }
    if (Ship_Progress == 1 || Ship_Progress == 2 || Ship_Progress == 3){
        Ship_Info_Print = "Iron Boltes"
    }
    if (Ship_Progress == 4 || Ship_Progress == 5){
        Ship_Info_Print = "Iron Plates"
    }
}

function Show_Ship_Info3(){
    document.getElementById("Ship_Info_BC_Button").style.visibility="visible"; 
    document.getElementsByClassName("Ship_Info_BC")[0].style.visibility="visible"; 
    document.getElementsByClassName("Ship_Info_Box")[0].style.visibility="visible"; 
    if (Ship_Progress == 0 || Ship_Progress == 1){
        Ship_Info_Print = "Iron Plate"

    }
    if (Ship_Progress == 2 || Ship_Progress == 3){
        Ship_Info_Print = "Copper Iron alloys"
    }
    if (Ship_Progress == 4){
        Ship_Info_Print = "Iron Plates"
    }
    if (Ship_Progress == 5){
        Ship_Info_Print = "Circuit board"
    }
}

function Show_Ship_Info4(){
    document.getElementById("Ship_Info_BC_Button").style.visibility="visible"; 
    document.getElementsByClassName("Ship_Info_BC")[0].style.visibility="visible"; 
    document.getElementsByClassName("Ship_Info_Box")[0].style.visibility="visible"; 
    if (Ship_Progress == 3){
        Ship_Info_Print = "Circuit board"

    }
    if (Ship_Progress == 5){
        Ship_Info_Print = "Copper Iron Alloys"
    }
}

function Show_Ship_Info5(){
    document.getElementById("Ship_Info_BC_Button").style.visibility="visible"; 
    document.getElementsByClassName("Ship_Info_BC")[0].style.visibility="visible"; 
    document.getElementsByClassName("Ship_Info_Box")[0].style.visibility="visible"; 
    if (Ship_Progress == 5){
        Ship_Info_Print = "Rocket Fuel"
    }
}

function Leave_Info_Ship(){
    document.getElementById("Ship_Info_BC_Button").style.visibility="hidden"; 
    document.getElementsByClassName("Ship_Info_BC")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Ship_Info_Box")[0].style.visibility="hidden"; 
}