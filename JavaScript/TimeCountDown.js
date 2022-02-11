var on_Going_Mining = false

var mining_Speed = 2
var meters_Down = 0
var random_Mining_Object = 0 

var xp = 0
var Level = 1

var xp_Incressment = 0

const Inventory = [/*Dirt  0*/ 0,   /*Stone  1*/ 0,   /*Coal  2*/ 0,   /*Cobber ore 3*/ 0,   /*Tin ore  4*/0,   /*Iron ore  5*/0,   /*Silver ore  6*/0,   /*Gold ore 7*/0,   /*Diamond  8*/0]
const Craft_Inventory = [/*Mud  0*/0,   /*Bronze  1*/0]
const Melt_Inventory = [/*Cobber  0*/0,   /*Tin  1*/0,   /*Iron   2*/0]

var Dirt_Chance_Of_Getting_Top = -1
var Dirt_Chance_Of_Getting_Buttom = -1

var Stone_Chance_Of_Getting_Top = -1
var Stone_Chance_Of_Getting_Buttom = -1

var Coal_Chance_Of_Getting_Top = -1
var Coal_Chance_Of_Getting_Buttom = -1

var Cobber_Chance_Of_Getting_Top = -1
var Cobber_Chance_Of_Getting_Buttom = -1

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
    console.log(random_Mining_Object, " random minding object")

    if (Dirt_Chance_Of_Getting_Buttom <= random_Mining_Object && Dirt_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Dirt";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Dirt.png";
        document.getElementById("Dirt_Inventroy_IMG").src="../Zeptrico/Mining_Images/Dirt.png";
        document.getElementById("Dirt_Inventroy_IMG").style.opacity=1; 
        Inventory[0] += 1
        document.getElementById('number_Of_Dirt').innerHTML = `Dirt ${Inventory[0]}`;
    }
    if (Stone_Chance_Of_Getting_Buttom <= random_Mining_Object && Stone_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Stone";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Stone.png";
        document.getElementById("Stone_Inventory_IMG").src="../Zeptrico/Mining_Images/Stone.png";
        Inventory[1] += 1
        document.getElementById('number_Of_Stone').innerHTML = `Stone ${Inventory[1]}`;
    }
    if (Coal_Chance_Of_Getting_Buttom <= random_Mining_Object && Coal_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Coal";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Coal.png";
        document.getElementById("Coal_Inventory_IMG").src="../Zeptrico/Mining_Images/Coal.png";
        Inventory[2] += 2
        document.getElementById('number_Of_Coal').innerHTML = `Coal ${Inventory[2]}`;
    }
    if (Cobber_Chance_Of_Getting_Buttom <= random_Mining_Object && Cobber_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Cobber Ore";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Cobber_Ore.png";
        document.getElementById("Cobber_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Cobber_Ore.png";
        Inventory[3] += 1
        document.getElementById('number_Of_Cobber_Ore').innerHTML = `Cobber Ore ${Inventory[3]}`;
    }
    if (Tin_Chance_Of_Getting_Buttom <= random_Mining_Object && Tin_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Tin Ore";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Tin_Ore.png";
        document.getElementById("Tin_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Tin_Ore.png";
        Inventory[4] += 1
        document.getElementById('number_Of_Tin_Ore').innerHTML = `Tin Ore: ${Inventory[4]}`;
    }
    if (Iron_Chance_Of_Getting_Buttom <= random_Mining_Object && Iron_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Iron Ore";
        document.getElementById("Mine_Get_Object_IMG").src="../Zeptrico/Mining_Images/Iron_Ore.png";
        document.getElementById("Iron_Ore_Inventory_IMG").src="../Zeptrico/Mining_Images/Iron_Ore.png";
        Inventory[5] += 1
        document.getElementById('number_Of_Iron_Ore').innerHTML = `Iron Ore: ${Inventory[5]}`;
    }
    if (Silver_Chance_Of_Getting_Buttom <= random_Mining_Object && Silver_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Silver Ore";
        document.getElementById("Mine_Get_Object_IMG").src="";
        Inventory[6] += 1
        document.getElementById('number_Of_Silver_Ore').innerHTML = `Silver Ore: ${Inventory[6]}`;
    }
    if (Gold_Chance_Of_Getting_Buttom <= random_Mining_Object && Gold_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Gold Ore";
        document.getElementById("Mine_Get_Object_IMG").src="";
        Inventory[7] += 1
        document.getElementById('number_Of_Gold_Ore').innerHTML = `Gold Ore: ${Inventory[7]}`;
    }
    if (Diamond_Chance_Of_Getting_Buttom <= random_Mining_Object && Diamond_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Diamond";
        document.getElementById("Mine_Get_Object_IMG").src="";
        Inventory[8] += 1
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

        Cobber_Chance_Of_Getting_Top = 100
        Cobber_Chance_Of_Getting_Buttom = 90
    }
    if (meters_Down >= 20 ){
        Dirt_Chance_Of_Getting_Top = -1
        Dirt_Chance_Of_Getting_Buttom = -1

        Stone_Chance_Of_Getting_Top = 50
        Stone_Chance_Of_Getting_Buttom = 0

        Coal_Chance_Of_Getting_Top = 70
        Coal_Chance_Of_Getting_Buttom = 50

        Cobber_Chance_Of_Getting_Top = 80
        Cobber_Chance_Of_Getting_Buttom = 70
        
        Tin_Chance_Of_Getting_Top = 90
        Tin_Chance_Of_Getting_Buttom = 80

        Iron_Chance_Of_Getting_Top = 100
        Iron_Chance_Of_Getting_Buttom = 90
    }
    if (meters_Down >= 50 ){
        Stone_Chance_Of_Getting_Top = 25
        Stone_Chance_Of_Getting_Buttom = 0

        Coal_Chance_Of_Getting_Top = 50
        Coal_Chance_Of_Getting_Buttom = 25

        Cobber_Chance_Of_Getting_Top = 65
        Cobber_Chance_Of_Getting_Buttom = 50

        Tin_Chance_Of_Getting_Top = 80
        Tin_Chance_Of_Getting_Buttom = 65

        Iron_Chance_Of_Getting_Top = 100
        Iron_Chance_Of_Getting_Buttom = 80
    }
    if (meters_Down >= 150 ){
        Stone_Chance_Of_Getting_Top = 25
        Stone_Chance_Of_Getting_Buttom = 0

        Coal_Chance_Of_Getting_Top = 50
        Coal_Chance_Of_Getting_Buttom = 25

        Cobber_Chance_Of_Getting_Top = 60
        Cobber_Chance_Of_Getting_Buttom = 50

        Tin_Chance_Of_Getting_Top = 70
        Tin_Chance_Of_Getting_Buttom = 60

        Iron_Chance_Of_Getting_Top = 85
        Iron_Chance_Of_Getting_Buttom = 70

        Silver_Chance_Of_Getting_Top = 95
        Silver_Chance_Of_Getting_Buttom = 85
        
        Gold_Chance_Of_Getting_Top = 100
        Gold_Chance_Of_Getting_Buttom = 95
    }
    if (meters_Down >= 300 ){
        Stone_Chance_Of_Getting_Top = 25
        Stone_Chance_Of_Getting_Buttom = 0

        Coal_Chance_Of_Getting_Top = 50
        Coal_Chance_Of_Getting_Buttom = 25

        Cobber_Chance_Of_Getting_Top = -1
        Cobber_Chance_Of_Getting_Buttom = -1

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
            document.getElementById('Text').innerHTML = i;
            i = i - 0.01
            await delay(0.009);
        }
        while(i > 0)
        on_Going_Mining = false
        document.getElementById('Text').innerHTML = "Done";
        check_Meters()
    }
    if (on_Going_Mining == true){
        console.log("Alredey mining")
    }
}