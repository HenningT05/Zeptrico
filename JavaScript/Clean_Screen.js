var Next_Gui = ""
var Screen_Clead = false

function Print_Main_Screen(){
    document.getElementsByClassName("TC_Gui")[0].style.visibility="visible"; 
    document.getElementById("TC_Level").style.visibility="visible"; 

    document.getElementsByClassName("Object_Gotten")[0].style.visibility="visible"; 
    document.getElementById("Object_Get_Text").style.visibility="visible"; 
    document.getElementById("Mine_Get_Object_IMG").style.visibility="visible"; 

    document.getElementsByClassName("Start_Mining_Button_Div")[0].style.visibility="visible"; 
    document.getElementById("Start_Mine_Button").style.visibility="visible"; 
    document.getElementById("Mine_Button_IMG").style.visibility="visible"; 
    document.getElementById("meters_Down").style.visibility="visible"; 

    document.getElementById("Inventory_Button").style.visibility="visible"; 
    document.getElementById("upgrade_Tool_Button").style.visibility="visible"; 
    document.getElementById("crafting_Button").style.visibility="visible"; 
    document.getElementById("furness_Open_Button").style.visibility="visible";
    document.getElementById("Market_Open_Button").style.visibility="visible"; 

    document.getElementById("Xp_Count").style.visibility="visible"; 
    document.getElementsByClassName("Xp_BackBar")[0].style.visibility="visible"; 
    document.getElementsByClassName("Xp_LevelBar")[0].style.visibility="visible"; 
    document.getElementsByClassName("Xp_Progress")[0].style.visibility="visible"; 
    
}


function Clean_Main_Screen(){
    document.getElementsByClassName("TC_Gui")[0].style.visibility="Hidden"; 
    document.getElementById("TC_Level").style.visibility="Hidden"; 

    document.getElementsByClassName("Object_Gotten")[0].style.visibility="Hidden"; 
    document.getElementById("Object_Get_Text").style.visibility="Hidden"; 
    document.getElementById("Mine_Get_Object_IMG").style.visibility="Hidden"; 

    document.getElementsByClassName("Start_Mining_Button_Div")[0].style.visibility="Hidden"; 
    document.getElementById("Start_Mine_Button").style.visibility="Hidden"; 
    document.getElementById("Mine_Button_IMG").style.visibility="Hidden"; 
    document.getElementById("meters_Down").style.visibility="Hidden"; 

    document.getElementById("upgrade_Tool_Button").style.visibility="Hidden"; 
    document.getElementById("crafting_Button").style.visibility="Hidden"; 
    document.getElementById("furness_Open_Button").style.visibility="Hidden"; 
    document.getElementById("Inventory_Button").style.visibility="Hidden"; 
    document.getElementById("Market_Open_Button").style.visibility="Hidden"; 

    document.getElementById("Xp_Count").style.visibility="Hidden"; 
    document.getElementsByClassName("Xp_BackBar")[0].style.visibility="Hidden"; 
    document.getElementsByClassName("Xp_LevelBar")[0].style.visibility="Hidden"; 
    document.getElementsByClassName("Xp_Progress")[0].style.visibility="Hidden"; 
}

function Clean_ScreenF(){
    console.log(Screen_Clead)
    if (Screen_Clead == true){
        Clean_Screen_Ture()
    }
    if (Screen_Clead == false){
        Clean_Screen_False()
    }    
}