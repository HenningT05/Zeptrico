var Sell_All_Price_Dirt = 0
var Sell_All_Price_Stone = 0
var Sell_All_Price_Coal = 0
var Sell_All_Price_Copper_Ore = 0
var Sell_All_Price_Tin_Ore = 0
var Sell_All_Price_Iron_Ore = 0

function Run_Market(){
    document.getElementById('Market_Number_OF_Dirt').innerHTML = Inventory[0];
    document.getElementById('Market_Number_OF_Stone').innerHTML = Inventory[1];
    document.getElementById('Market_Number_OF_Coal').innerHTML = Inventory[2];
    document.getElementById('Market_Number_OF_Copper_Ore').innerHTML = Inventory[3];
    document.getElementById('Market_Number_OF_Tin_Ore').innerHTML = Inventory[4];
    document.getElementById('Market_Number_OF_Iron_Ore').innerHTML = Inventory[5];

    Sell_All_Price_Dirt = 2 * Inventory[0]
    Sell_All_Price_Stone = 3 * Inventory[1]
    Sell_All_Price_Coal = 2 * Inventory[2]
    Sell_All_Price_Copper_Ore = 3 * Inventory[3]
    Sell_All_Price_Tin_Ore = 2 * Inventory[4]
    Sell_All_Price_Iron_Ore = 3 * Inventory[5]

    document.getElementById('Dirt_Sell_Price_All').innerHTML = Sell_All_Price_Dirt;
    document.getElementById('Stone_Sell_Price_All').innerHTML = Sell_All_Price_Stone;
    document.getElementById('Coal_Sell_Price_All').innerHTML = Sell_All_Price_Coal;
    document.getElementById('Copper_Ore_Sell_Price_All').innerHTML = Sell_All_Price_Copper_Ore;
    document.getElementById('Tin_Ore_Sell_Price_All').innerHTML = Sell_All_Price_Tin_Ore;
    document.getElementById('Iron_Ore_Sell_Price_All').innerHTML = Sell_All_Price_Iron_Ore;
    Clean_Main_Screen()
}


function Open_Market(){
    document.getElementById("Market_Close_Button").style.visibility="visible";

    document.getElementsByClassName("Dirt_Market_Gui")[0].style.visibility="visible"; 

    document.getElementsByClassName("Stone_Market_Gui")[0].style.visibility="visible";

    document.getElementsByClassName("Coal_Market_Gui")[0].style.visibility="visible";

    document.getElementsByClassName("Copper_Ore_Market_Gui")[0].style.visibility="visible";

    document.getElementsByClassName("Tin_Ore_Market_Gui")[0].style.visibility="visible";

    document.getElementsByClassName("Iron_Ore_Market_Gui")[0].style.visibility="visible";
    Run_Market()
}


function Close_Market(){
    document.getElementById("Market_Close_Button").style.visibility="hidden";

    document.getElementsByClassName("Dirt_Market_Gui")[0].style.visibility="hidden"; 

    document.getElementsByClassName("Stone_Market_Gui")[0].style.visibility="hidden";

    document.getElementsByClassName("Coal_Market_Gui")[0].style.visibility="hidden";

    document.getElementsByClassName("Copper_Ore_Market_Gui")[0].style.visibility="hidden";

    document.getElementsByClassName("Tin_Ore_Market_Gui")[0].style.visibility="hidden";

    document.getElementsByClassName("Iron_Ore_Market_Gui")[0].style.visibility="hidden";
    Print_Main_Screen()
}