var Coin = 0

var Sell_All_Price_Dirt = 0
var Sell_All_Price_Stone = 0

function Run_Market(){
    document.getElementById('Market_Number_OF_Dirt').innerHTML = Inventory[0];
    document.getElementById('Market_Number_OF_Stone').innerHTML = Inventory[1];

    Sell_All_Price_Dirt = 2 * Inventory[0]
    Sell_All_Price_Stone = 3 * Inventory[1]

    document.getElementById('Dirt_Sell_Price_All').innerHTML = Sell_All_Price_Dirt+ "$";
    document.getElementById('Stone_Sell_Price_All').innerHTML = Sell_All_Price_Stone+"$";
    Clean_Main_Screen()
}


function Open_Market(){
    document.getElementById("Market_Close_Button").style.visibility="visible";

    document.getElementsByClassName("Dirt_Market_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Dirt_Market_IMG_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Dirt_Market_Under_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Market_Dirt_Coin_Gui")[0].style.visibility="visible"; 

    document.getElementsByClassName("Stone_Market_Gui")[0].style.visibility="visible";
    document.getElementsByClassName("Stone_Market_IMG_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Stone_Market_Under_Gui")[0].style.visibility="visible"; 
    document.getElementsByClassName("Market_Stone_Coin_Gui")[0].style.visibility="visible"; 
    
    document.getElementById("Dirt_Market_Name").style.visibility="visible";
    document.getElementById("Dirt_Market_IMG").style.visibility="visible";
    document.getElementById("Market_Number_OF_Dirt").style.visibility="visible";
    document.getElementById("Dirt_Market_Sell1").style.visibility="visible";
    document.getElementById("Dirt_Market_Sell_All").style.visibility="visible";
    document.getElementById("Dirt_Market_Buy").style.visibility="visible";
    document.getElementById("Dirt_Buy_Price").style.visibility="visible";
    document.getElementById("Dirt_Sell_Price").style.visibility="visible";
    document.getElementById("Dirt_Sell_Price_All").style.visibility="visible";

    document.getElementById("Stone_Market_Name").style.visibility="visible";
    document.getElementById("Stone_Market_IMG").style.visibility="visible";
    document.getElementById("Market_Number_OF_Stone").style.visibility="visible";
    document.getElementById("Stone_Market_Sell1").style.visibility="visible";
    document.getElementById("Stone_Market_Sell_All").style.visibility="visible";
    document.getElementById("stone_Market_Buy").style.visibility="visible";
    document.getElementById("Stone_Buy_Price").style.visibility="visible";
    document.getElementById("Stone_Sell_Price").style.visibility="visible";
    document.getElementById("Stone_Sell_Price_All").style.visibility="visible";
    Run_Market()
}


function Close_Market(){
    document.getElementById("Market_Close_Button").style.visibility="hidden";

    document.getElementsByClassName("Dirt_Market_Gui")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Dirt_Market_IMG_Gui")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Dirt_Market_Under_Gui")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Market_Dirt_Coin_Gui")[0].style.visibility="hidden"; 

    document.getElementsByClassName("Stone_Market_Gui")[0].style.visibility="hidden";
    document.getElementsByClassName("Stone_Market_IMG_Gui")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Stone_Market_Under_Gui")[0].style.visibility="hidden"; 
    document.getElementsByClassName("Market_Stone_Coin_Gui")[0].style.visibility="hidden"; 
    
    document.getElementById("Dirt_Market_Name").style.visibility="hidden";
    document.getElementById("Dirt_Market_IMG").style.visibility="hidden";
    document.getElementById("Market_Number_OF_Dirt").style.visibility="hidden";
    document.getElementById("Dirt_Market_Sell1").style.visibility="hidden";
    document.getElementById("Dirt_Market_Sell_All").style.visibility="hidden";
    document.getElementById("Dirt_Market_Buy").style.visibility="hidden";
    document.getElementById("Dirt_Buy_Price").style.visibility="hidden";
    document.getElementById("Dirt_Sell_Price").style.visibility="hidden";
    document.getElementById("Dirt_Sell_Price_All").style.visibility="hidden";

    document.getElementById("Stone_Market_Name").style.visibility="hidden";
    document.getElementById("Stone_Market_IMG").style.visibility="hidden";
    document.getElementById("Market_Number_OF_Stone").style.visibility="hidden";
    document.getElementById("Stone_Market_Sell1").style.visibility="hidden";
    document.getElementById("Stone_Market_Sell_All").style.visibility="hidden";
    document.getElementById("stone_Market_Buy").style.visibility="hidden";
    document.getElementById("Stone_Buy_Price").style.visibility="hidden";
    document.getElementById("Stone_Sell_Price").style.visibility="hidden";
    document.getElementById("Stone_Sell_Price_All").style.visibility="hidden";
    Print_Main_Screen()
}