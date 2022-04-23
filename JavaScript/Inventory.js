const UNL_Inventory = [false /*Dirt  0*/, false /*Stone  1*/, false /*Coal  2*/ , false /*Copper Ore  3*/, false /*Tin Ore  4*/, false /*Iron Ore  5*/, false /*Silver ore  6*/, false /*Gold ore  7*/, false /*Diamond  8*/, false /*Titanium ore  9*/, false /*Niter  10*/]
const UNL_Inventory_Craft = [false /*Mud  0*/, false /*Bronze  1*/, false /*Bronze Nails  2*/, false /*Iron Nails  3*/, false /*Bronze Boltes  4*/, false /*Iron Boltes  5*/, false /*Iron Plate  6*/, false /*Copper Plate  7*/, false /*Electrum  8*/, false /*Copper Iron Alloys  9*/, false /*Cocriot board  10*/, false /*Oxidizer  11*/, false /*Rocket Fuel  12*/]
const UNL_Inventory_Melt = [false /*Copper  0*/, false /*Tin  1*/, false /*Iron  2*/, false /*Silver  3*/, false /*Gold  4*/, false /*Titanium  5*/]

function Rerender_Invneotry_IMG(){
    if (UNL_Inventory[0] == true){
        document.getElementById("Dirt_Inventroy_IMG").src="../Zeptrico/Mining_Images/Dirt.png";
        document.getElementById('number_Of_Dirt').innerHTML =  `Dirt ${Inventory[0]}`;
    }
    else{
        document.getElementById("Dirt_Inventroy_IMG").src="../Zeptrico/Mining_Images/Dirt_Locked.png";
    }
    if (UNL_Inventory[1] == true){
        document.getElementById("Stone_Inventory_IMG").src="../Zeptrico/Mining_Images/Stone.png";
        document.getElementById('number_Of_Stone').innerHTML =  `Stone ${Inventory[1]}`;
    }
    else{
        document.getElementById("Stone_Inventory_IMG").src="../Zeptrico/Mining_Images/Stone_Locked.png";
    }
    if (UNL_Inventory[2] == true){
        document.getElementById("Coal_Inventory_IMG").src="../Zeptrico/Mining_Images/Coal.png";
        document.getElementById('number_Of_Coal').innerHTML =  `Coal ${Inventory[2]}`;
    }
    else{
        document.getElementById("Coal_Inventory_IMG").src="../Zeptrico/Mining_Images/Coal_Locked.png";
    }
    if (UNL_Inventory[3] == true){
        document.getElementById("Copper_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Copper_Ore.png";
        document.getElementById('number_Of_Copper_Ore').innerHTML =  `Copper Ore ${Inventory[3]}`;
    }
    else{
        document.getElementById("Copper_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Copper_Ore_Locked.png";
    }
    if (UNL_Inventory[4] == true){
        document.getElementById("Tin_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Tin_Ore.png";
        document.getElementById('number_Of_Tin_Ore').innerHTML =  `Tin Ore ${Inventory[4]}`;
    }
    else{
        document.getElementById("Tin_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Tin_Ore_Locked.png";
    }
    if (UNL_Inventory[5] == true){
        document.getElementById("Iron_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Iron_Ore.png";
        document.getElementById('number_Of_Iron_Ore').innerHTML =  `Iron Ore ${Inventory[5]}`;
    }
    else{
        document.getElementById("Iron_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Iron_Ore_Locked.png";
    }
    if (UNL_Inventory[6] == true){
        document.getElementById("Silver_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Silver_Ore.png";
        document.getElementById('number_Of_Silver_Ore').innerHTML =  `Silver Ore ${Inventory[6]}`;
    }
    else{
        document.getElementById("Silver_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Silver_Ore_Locked.png";
    }
    if (UNL_Inventory[7] == true){
        document.getElementById("Gold_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Gold_Ore.png";
        document.getElementById('number_Of_Gold_Ore').innerHTML =  `Gold Ore ${Inventory[7]}`;
    }
    else{
        document.getElementById("Gold_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Gold_Ore_Locked.png";
    }
    if (UNL_Inventory[8] == true){
        document.getElementById("Diamond_Inventory_IMG").src="../Zeptrico/Mining_Images/Diamond_Ore.png";
        document.getElementById('number_Of_Diamond').innerHTML =  `Diamond ${Inventory[8]}`;
    }
    else{
        document.getElementById("Diamond_Inventory_IMG").src="../Zeptrico/Mining_Images/Diamond_Ore_Locked.png";
    }
    if (UNL_Inventory[9] == true){
        document.getElementById("Titanium_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Titanium_Ore.png";
        document.getElementById('number_Of_Titanium_Ore').innerHTML =  `Titanium Ore ${Inventory[9]}`;
    }
    else{
        document.getElementById("Titanium_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Titanium_Ore_Locked.png";
    }
    if (UNL_Inventory[10] == true){
        document.getElementById("Niter_Inventory_IMG").src="../Zeptrico/Mining_Images/Niter.png";
        document.getElementById('number_Of_Niter').innerHTML =  `Niter ${Inventory[10]}`;
    }
    else{
        document.getElementById("Niter_Inventory_IMG").src="../Zeptrico/Mining_Images/Niter_Locked.png";
    }
    //Need IMG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (UNL_Inventory_Craft[8] == true){
        document.getElementById("Electrum_Inventory_IMG").src="../Zeptrico/Mining_Images/Niter.png";
        document.getElementById('number_Of_Electrum').innerHTML =  `Electrum ${Craft_Inventory[8]}`;
    }
    else{
        document.getElementById("Electrum_Inventory_IMG").src="../Zeptrico/Mining_Images/Niter_Locked.png";
    }
    if (UNL_Inventory_Melt[0] == true){
        document.getElementById("Copper_Inventory_IMG").src="../Zeptrico/Mining_Images/Copper_Bar.png";
        document.getElementById('number_Of_Copper').innerHTML =  `Copper ${Melt_Inventory[0]}`;
    }
    else{
        document.getElementById("Copper_Inventory_IMG").src="../Zeptrico/Mining_Images/Bar_Locked.png";
    }
    if (UNL_Inventory_Melt[1] == true){
        document.getElementById("Tin_Inventory_IMG").src="../Zeptrico/Mining_Images/Tin_Bar.png";
        document.getElementById('number_Of_Tin').innerHTML =  `Tin ${Melt_Inventory[1]}`;
    }
    else{
        document.getElementById("Tin_Inventory_IMG").src="../Zeptrico/Mining_Images/Bar_Locked.png";
    }
    if (UNL_Inventory_Melt[2] == true){
        document.getElementById("Iron_Inventory_IMG").src="../Zeptrico/Mining_Images/Iron_Bar.png";
        document.getElementById('number_Of_Iron').innerHTML =  `Iron ${Melt_Inventory[2]}`;
    }
    else{
        document.getElementById("Iron_Inventory_IMG").src="../Zeptrico/Mining_Images/Bar_Locked.png";
    }
    if (UNL_Inventory_Melt[3] == true){
        document.getElementById("Silver_Inventory_IMG").src="../Zeptrico/Mining_Images/Silver_Bar.png";
        document.getElementById('number_Of_Silver').innerHTML =  `Silver ${Melt_Inventory[3]}`;
    }
    else{
        document.getElementById("Silver_Inventory_IMG").src="../Zeptrico/Mining_Images/Bar_Locked.png";
    }
    if (UNL_Inventory_Melt[4] == true){
        document.getElementById("Gold_Inventory_IMG").src="../Zeptrico/Mining_Images/Silver_Bar.png";
        document.getElementById('number_Of_Gold').innerHTML =  `Gold ${Melt_Inventory[4]}`;
    }
    else{
        document.getElementById("Gold_Inventory_IMG").src="../Zeptrico/Mining_Images/Bar_Locked.png";
    }
    //Need IMG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (UNL_Inventory_Melt[5] == true){
        document.getElementById("Titanium_Inventory_IMG").src="../Zeptrico/Mining_Images/Silver_Bar.png";
        document.getElementById('number_Of_Titanium').innerHTML =  `Titanium ${Melt_Inventory[5]}`;
    }
    else{
        document.getElementById("Titanium_Inventory_IMG").src="../Zeptrico/Mining_Images/Bar_Locked.png";
    }
    //Need IMG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (UNL_Inventory_Craft[0] == true){
        document.getElementById("Mud_Inventory_IMG").src="../Zeptrico/Mining_Images/Niter.png";
        document.getElementById('number_Of_Mud').innerHTML =  `Mud ${Craft_Inventory[0]}`;
    }
    else{
        document.getElementById("Mud_Inventory_IMG").src="../Zeptrico/Mining_Images/Niter_Locked.png";
    }
    if (UNL_Inventory_Craft[1] == true){
        document.getElementById("Bronze_Inventory_IMG").src="../Zeptrico/Mining_Images/Bronze_Bar.png";
        document.getElementById('number_Of_Bronze').innerHTML =  `Bronze ${Craft_Inventory[1]}`;
    }
    else{
        document.getElementById("Bronze_Inventory_IMG").src="../Zeptrico/Mining_Images/Bar_Locked.png";
    }
    if (UNL_Inventory_Craft[2] == true){
        document.getElementById("Bronze_Nails_Inventory_IMG").src="../Zeptrico/Mining_Images/Bronze_Nails.png";
        document.getElementById('number_Of_Bronze').innerHTML =  `Bronze Nails ${Craft_Inventory[2]}`;
    }
    else{
        document.getElementById("Bronze_Nails_Inventory_IMG").src="../Zeptrico/Mining_Images/Nails_Locked.png";
    }
    if (UNL_Inventory_Craft[3] == true){
        document.getElementById("Iron_Nails_Inventory_IMG").src="../Zeptrico/Mining_Images/Iron_Nails.png";
        document.getElementById('number_Of_Iron_Nails').innerHTML =  `Iron Nails ${Craft_Inventory[3]}`;
    }
    else{
        document.getElementById("Iron_Nails_Inventory_IMG").src="../Zeptrico/Mining_Images/Nails_Locked.png";
    }
    if (UNL_Inventory_Craft[4] == true){
        document.getElementById("Bronze_Boltes_Inventory_IMG").src="../Zeptrico/Mining_Images/Bronze_Bolts.png";
        document.getElementById('number_Of_Bronze_Boltes').innerHTML =  `Bronze Bolts ${Craft_Inventory[4]}`;
    }
    else{
        document.getElementById("Bronze_Boltes_Inventory_IMG").src="../Zeptrico/Mining_Images/Bolts_Locked.png";
    }
    if (UNL_Inventory_Craft[5] == true){
        document.getElementById("Iron_Boltes_Inventory_IMG").src="../Zeptrico/Mining_Images/Iron_Bolts.png";
        document.getElementById('number_Of_Iron_Boltes').innerHTML =  `Iron Bolts ${Craft_Inventory[5]}`;
    }
    else{
        document.getElementById("Iron_Boltes_Inventory_IMG").src="../Zeptrico/Mining_Images/Bolts_Locked.png";
    }
    if (UNL_Inventory_Craft[7] == true){
        document.getElementById("Copper_PLate_Inventory_IMG").src="../Zeptrico/Mining_Images/Copper_Plate.png";
        document.getElementById('number_Of_Copper_Plate').innerHTML =  `Copper Plate ${Craft_Inventory[7]}`;
    }
    else{
        document.getElementById("Copper_PLate_Inventory_IMG").src="../Zeptrico/Mining_Images/Plates_Locked.png";
    }
    if (UNL_Inventory_Craft[6] == true){
        document.getElementById("Iron_PLate_Inventory_IMG").src="../Zeptrico/Mining_Images/Iron_Plate.png";
        document.getElementById('number_Of_Iron_Plate').innerHTML =  `Iron Plate ${Craft_Inventory[6]}`;
    }
    else{
        document.getElementById("Iron_PLate_Inventory_IMG").src="../Zeptrico/Mining_Images/Plates_Locked.png";
    }
    if (UNL_Inventory_Craft[9] == true){
        document.getElementById("Copper_Iron_Alloys_Inventory_IMG").src="../Zeptrico/Mining_Images/Copper_Iron_Alloys.png";
        document.getElementById('number_Of_Copper_Iron_Alloys').innerHTML =  `Copper Iron Alloy ${Craft_Inventory[8]}`;
    }
    else{
        document.getElementById("Copper_Iron_Alloys_Inventory_IMG").src="../Zeptrico/Mining_Images/Copper_Iron_Alloys_Locked.png";
    }
    if (UNL_Inventory_Craft[10] == true){
        document.getElementById("Circuit_Board_Inventory_IMG").src="../Zeptrico/Mining_Images/Circuit_Board.png";
        document.getElementById('number_Of_Circuit_Board').innerHTML =  `Circuit Board ${Craft_Inventory[9]}`;
    }
    else{
        document.getElementById("Circuit_Board_Inventory_IMG").src="../Zeptrico/Mining_Images/Circuit_Board_Locked.png";
    }
    if (UNL_Inventory_Craft[11] == true){
        document.getElementById("Oxidizer_Inventory_IMG").src="../Zeptrico/Mining_Images/Oxidizer.png";
        document.getElementById('number_Of_Oxidizer').innerHTML =  `Oxidizer ${Craft_Inventory[10]}`;
    }
    else{
        document.getElementById("Oxidizer_Inventory_IMG").src="../Zeptrico/Mining_Images/Oxidizer_Locked.png";
    }
    //Need IMG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    if (UNL_Inventory_Craft[12] == true){
        document.getElementById("Rocket_Fuel_Inventory_IMG").src="../Zeptrico/Mining_Images/Oxidizer.png";
        document.getElementById('number_Of_Rocket_Fuel').innerHTML =  `Rocket Fuel ${Craft_Inventory[10]}`;
    }
    else{
        document.getElementById("Rocket_Fuel_Inventory_IMG").src="../Zeptrico/Mining_Images/Oxidizer_Locked.png";
    }
    Clean_Personal_Screen()
}

function Clean_Inventory_Gui(){
    document.getElementsByClassName("Inventory")[0].style.visibility="hidden";
    document.getElementById("Close_Inventory_Button").style.visibility="hidden";  
    Open_Personal_Gui()
}


function Open_Inventory(){
    Next_Gui = "Inventroy"
    document.getElementById("Close_Inventory_Button").style.visibility="visible"; 
    document.getElementsByClassName("Inventory")[0].style.visibility="visible"; 
    Rerender_Invneotry_IMG()
}