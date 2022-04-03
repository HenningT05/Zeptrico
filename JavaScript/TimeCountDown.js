var on_Going_Mining = false

var mining_Speed = 2
var meters_Down = 0
var random_Mining_Object = 0 

var xp_Incressment = 0

var Dirt_Chance_Of_Getting_Top = -1
var Dirt_Chance_Of_Getting_Buttom = -1

var Stone_Chance_Of_Getting_Top = -1
var Stone_Chance_Of_Getting_Buttom = -1

var Coal_Chance_Of_Getting_Top = -1
var Coal_Chance_Of_Getting_Buttom = -1

var Copper_Chance_Of_Getting_Top = -1
var Copper_Chance_Of_Getting_Buttom = -1

var Tin_Chance_Of_Getting_Top = -1
var Tin_Chance_Of_Getting_Buttom = -1

var Iron_Chance_Of_Getting_Top = -1
var Iron_Chance_Of_Getting_Buttom = -1

var Silver_Chance_Of_Getting_Top = -1
var Silver_Chance_Of_Getting_Buttom = -1

var Gold_Chance_Of_Getting_Top = -1
var Gold_Chance_Of_Getting_Buttom = -1

var Diamond_Chance_Of_Getting_Top = -1
var Diamond_Chance_Of_Getting_Buttom = -1

var Titanium_Chance_Of_Getting_Top = -1
var Titanium_Chance_Of_Getting_Buttom = -1

var Niter_Chance_Of_Getting_Top = -1
var Niter_Chance_Of_Getting_Buttom = -1

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

function pick_Mining_Object(){
    xp_Incressment = 20
    xp = xp_Incressment
    

    meters_Down += 2
    document.getElementById('meters_Down').innerHTML = `Meters down ${meters_Down}`;

    on_Going_Mining = false
    random_Mining_Object = Math.floor(Math.random()*100)

    if (Dirt_Chance_Of_Getting_Buttom <= random_Mining_Object && Dirt_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Object_Get_Text').innerHTML = "Dirt";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Dirt.png";
        document.getElementById("Dirt_Inventroy_IMG").src="../Zeptrico/Mining_Images/Dirt.png";
        document.getElementById("Dirt_Inventroy_IMG").style.opacity=1; 
        Inventory[0] += 1
        document.getElementById('number_Of_Dirt').innerHTML = `Dirt ${Inventory[0]}`;
    }
    if (Stone_Chance_Of_Getting_Buttom <= random_Mining_Object && Stone_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Object_Get_Text').innerHTML = "Stone";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Stone.png";
        document.getElementById("Stone_Inventory_IMG").src="../Zeptrico/Mining_Images/Stone.png";
        Inventory[1] += 1
        document.getElementById('number_Of_Stone').innerHTML = `Stone ${Inventory[1]}`;
    }
    if (Coal_Chance_Of_Getting_Buttom <= random_Mining_Object && Coal_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Object_Get_Text').innerHTML = "Coal";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Coal.png";
        document.getElementById("Coal_Inventory_IMG").src="../Zeptrico/Mining_Images/Coal.png";
        Inventory[2] += 2
        document.getElementById('number_Of_Coal').innerHTML = `Coal ${Inventory[2]}`;
    }
    if (Copper_Chance_Of_Getting_Buttom <= random_Mining_Object && Copper_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Object_Get_Text').innerHTML = "Copper Ore";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Copper_Ore.png";
        document.getElementById("Copper_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Copper_Ore.png";
        Inventory[3] += 1
        document.getElementById('number_Of_Copper_Ore').innerHTML = `Copper Ore ${Inventory[3]}`;
    }
    if (Tin_Chance_Of_Getting_Buttom <= random_Mining_Object && Tin_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Object_Get_Text').innerHTML = "Tin Ore";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Tin_Ore.png";
        document.getElementById("Tin_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Tin_Ore.png";
        Inventory[4] += 1
        document.getElementById('number_Of_Tin_Ore').innerHTML = `Tin Ore: ${Inventory[4]}`;
    }
    if (Iron_Chance_Of_Getting_Buttom <= random_Mining_Object && Iron_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Object_Get_Text').innerHTML = "Iron Ore";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Iron_Ore.png";
        document.getElementById("Iron_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Iron_Ore.png";
        Inventory[5] += 1
        document.getElementById('number_Of_Iron_Ore').innerHTML = `Iron Ore: ${Inventory[5]}`;
    }
    if (Silver_Chance_Of_Getting_Buttom <= random_Mining_Object && Silver_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Object_Get_Text').innerHTML = "Silver Ore";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Silver_Ore.png";
        document.getElementById("Silver_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Silver_Ore.png";
        Inventory[6] += 1
        document.getElementById('number_Of_Silver_Ore').innerHTML = `Silver Ore: ${Inventory[6]}`;
    }
    if (Gold_Chance_Of_Getting_Buttom <= random_Mining_Object && Gold_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Object_Get_Text').innerHTML = "Gold Ore";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Gold_Ore.png";
        document.getElementById("Gold_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Gold_Ore.png";
        
        Inventory[7] += 1
        document.getElementById('number_Of_Gold_Ore').innerHTML = `Gold Ore: ${Inventory[7]}`;
    }
    if (Diamond_Chance_Of_Getting_Buttom <= random_Mining_Object && Diamond_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Object_Get_Text').innerHTML = "Diamond";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Diamond_Ore.png";
        document.getElementById("Diamond_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Diamond_Ore.png";
        Inventory[8] += 1
        document.getElementById('number_Of_Diamond').innerHTML = `Diamond: ${Inventory[8]}`;
    }
    if (Titanium_Chance_Of_Getting_Buttom <= random_Mining_Object && Titanium_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Object_Get_Text').innerHTML = "Titanium";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Diamond_Ore.png";
        document.getElementById("Diamond_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Diamond_Ore.png";
        Inventory[9] += 1
        document.getElementById('number_Of_Diamond').innerHTML = `Diamond: ${Inventory[8]}`;
    }
    if (Niter_Chance_Of_Getting_Buttom <= random_Mining_Object && Niter_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Object_Get_Text').innerHTML = "Niter";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Diamond_Ore.png";
        document.getElementById("Diamond_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Diamond_Ore.png";
        Inventory[10] += 1
        document.getElementById('number_Of_Diamond').innerHTML = `Diamond: ${Inventory[8]}`;
    }
    Xp_Level_Check()
}

function check_Meters(){
    if (meters_Down >= 0){
        Dirt_Chance_Of_Getting_Top = 100
        Dirt_Chance_Of_Getting_Buttom = 0
    }
    if (meters_Down >= 4 ){
        Dirt_Chance_Of_Getting_Top = 50
        Dirt_Chance_Of_Getting_Buttom = 0

        Stone_Chance_Of_Getting_Top = 100
        Stone_Chance_Of_Getting_Buttom = 50
    }
    if (meters_Down >= 10 ){
        Dirt_Chance_Of_Getting_Top = 10
        Dirt_Chance_Of_Getting_Buttom = 0

        Stone_Chance_Of_Getting_Top = 70
        Stone_Chance_Of_Getting_Buttom = 10

        Coal_Chance_Of_Getting_Top = 90
        Coal_Chance_Of_Getting_Buttom = 70

        Copper_Chance_Of_Getting_Top = 100
        Copper_Chance_Of_Getting_Buttom = 90
    }
    if (meters_Down >= 20 ){
        Dirt_Chance_Of_Getting_Top = -1
        Dirt_Chance_Of_Getting_Buttom = -1

        Stone_Chance_Of_Getting_Top = 50
        Stone_Chance_Of_Getting_Buttom = 12

        Coal_Chance_Of_Getting_Top = 70
        Coal_Chance_Of_Getting_Buttom = 50

        Copper_Chance_Of_Getting_Top = 80
        Copper_Chance_Of_Getting_Buttom = 70
        
        Tin_Chance_Of_Getting_Top = 90
        Tin_Chance_Of_Getting_Buttom = 80

        Iron_Chance_Of_Getting_Top = 100
        Iron_Chance_Of_Getting_Buttom = 90

        Niter_Chance_Of_Getting_Top = 12
        Niter_Chance_Of_Getting_Buttom = 0
    }
    if (meters_Down >= 50 ){
        Stone_Chance_Of_Getting_Top = 25
        Stone_Chance_Of_Getting_Buttom = 12

        Coal_Chance_Of_Getting_Top = 50
        Coal_Chance_Of_Getting_Buttom = 25

        Copper_Chance_Of_Getting_Top = 65
        Copper_Chance_Of_Getting_Buttom = 50

        Tin_Chance_Of_Getting_Top = 75
        Tin_Chance_Of_Getting_Buttom = 65

        Iron_Chance_Of_Getting_Top = 90
        Iron_Chance_Of_Getting_Buttom = 75

        Niter_Chance_Of_Getting_Top = 12
        Niter_Chance_Of_Getting_Buttom = 0

        Titanium_Chance_Of_Getting_Top = 100
        Titanium_Chance_Of_Getting_Buttom = 90
    }
    if (meters_Down >= 150 ){
        Stone_Chance_Of_Getting_Top = 25
        Stone_Chance_Of_Getting_Buttom = 0

        Coal_Chance_Of_Getting_Top = 50
        Coal_Chance_Of_Getting_Buttom = 35

        Copper_Chance_Of_Getting_Top = 60
        Copper_Chance_Of_Getting_Buttom = 50

        Tin_Chance_Of_Getting_Top = 65
        Tin_Chance_Of_Getting_Buttom = 60

        Iron_Chance_Of_Getting_Top = 85
        Iron_Chance_Of_Getting_Buttom = 70

        Silver_Chance_Of_Getting_Top = 95
        Silver_Chance_Of_Getting_Buttom = 85
        
        Gold_Chance_Of_Getting_Top = 100
        Gold_Chance_Of_Getting_Buttom = 95

        Niter_Chance_Of_Getting_Top = 35
        Niter_Chance_Of_Getting_Buttom = 25

        Titanium_Chance_Of_Getting_Top = 70
        Titanium_Chance_Of_Getting_Buttom = 65
    }
    if (meters_Down >= 300 ){
        Stone_Chance_Of_Getting_Top = 25
        Stone_Chance_Of_Getting_Buttom = 0

        Coal_Chance_Of_Getting_Top = 35
        Coal_Chance_Of_Getting_Buttom = 25

        Copper_Chance_Of_Getting_Top = -1
        Copper_Chance_Of_Getting_Buttom = -1

        Tin_Chance_Of_Getting_Top = -1
        Tin_Chance_Of_Getting_Buttom = -1

        Iron_Chance_Of_Getting_Top = 65
        Iron_Chance_Of_Getting_Buttom = 50

        Silver_Chance_Of_Getting_Top = 83
        Silver_Chance_Of_Getting_Buttom = 65
        
        Gold_Chance_Of_Getting_Top = 95
        Gold_Chance_Of_Getting_Buttom = 83

        Diamond_Chance_Of_Getting_Top = 100
        Diamond_Chance_Of_Getting_Buttom = 95

        Niter_Chance_Of_Getting_Top = -1
        Niter_Chance_Of_Getting_Buttom = -1

        Titanium_Chance_Of_Getting_Top = 50
        Titanium_Chance_Of_Getting_Buttom = 35
    }
    pick_Mining_Object()
}

async function start_Mine(){
    document.getElementById("Mine_Get_Object_IMG").src="";
    var i = mining_Speed
    
    if (on_Going_Mining == false){
        on_Going_Mining = true
        do{
            i = i.toFixed(2)
            document.getElementById('Object_Get_Text').innerHTML = i;
            i = i - 0.01
            await delay(0.009);
        }
        while(i > 0)
        on_Going_Mining = false
        document.getElementById('Object_Get_Text').innerHTML = "Done";
        check_Meters()
    }
    if (on_Going_Mining == true){
        console.log("Alredey mining")
    }
}