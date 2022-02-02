var on_Going_Mining = false

var mining_Speed = 3

var meters_Down = 0
var random_Mining_Object = 0 

var xp = 0
var Level = 1

var xp_Incressment = 0

const Inventory = [/*Stone  0*/ 0,   /*Dirt  1*/ 0,   /*Coal  2*/ 0,   /*Cobber  3*/ 0,   /*Iron  4*/0,   /*Mud  5*/0]

var Dirt_Chance_Of_Getting_Top = 0
var Dirt_Chance_Of_Getting_Buttom = 0

var Stone_Chance_Of_Getting_Top = 0
var Stone_Chance_Of_Getting_Buttom = 0

var Cual_Chance_Of_Getting_Top = 0
var Cual_Chance_Of_Getting_Buttom = 0

var Cobber_Chance_Of_Getting_Top = 0
var Cobber_Chance_Of_Getting_Buttom = 0

var Iron_Chance_Of_Getting_Top = 0
var Iron_Chance_Of_Getting_Buttom = 0

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

function pick_Mining_Object(){
    xp_Incressment = 50
    xp += xp_Incressment
    document.getElementById('Xp_Count').innerHTML = `XP ${xp}`;

    meters_Down += 2
    document.getElementById('meters_Down').innerHTML = `Meters down ${meters_Down}`;

    on_Going_Mining = false
    random_Mining_Object = Math.floor(Math.random()*100)
    console.log(random_Mining_Object)

    if (Stone_Chance_Of_Getting_Buttom <= random_Mining_Object && Stone_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Stone";
        Inventory[0] += 1
        document.getElementById('number_Of_Stone').innerHTML = `stone: ${Inventory[0]}`;
    }
    if (Cual_Chance_Of_Getting_Buttom <= random_Mining_Object && Cual_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Cual";
        Inventory[2] += 1
        document.getElementById('number_Of_Cual').innerHTML = `Cual: ${Inventory[2]}`;
    }
    if (Iron_Chance_Of_Getting_Buttom <= random_Mining_Object && Iron_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Iron";
        Inventory[4] += 1
        document.getElementById('number_Of_Iron').innerHTML = `Iron: ${Inventory[4]}`;
    }
    if (Cobber_Chance_Of_Getting_Buttom <= random_Mining_Object && Cobber_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Cobber";
        Inventory[3] += 1
        document.getElementById('number_Of_Cobber').innerHTML = `Cobber: ${Inventory[3]}`;
    }
    if (Dirt_Chance_Of_Getting_Buttom <= random_Mining_Object && Dirt_Chance_Of_Getting_Top >= random_Mining_Object){
        document.getElementById('Text').innerHTML = "Dirt";
        Inventory[1] += 1
        document.getElementById('number_Of_Dirt').innerHTML = `Dirt: ${Inventory[1]}`;
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

        Cual_Chance_Of_Getting_Top = 90
        Cual_Chance_Of_Getting_Buttom = 70

        Cobber_Chance_Of_Getting_Top = 100
        Cobber_Chance_Of_Getting_Buttom = 90
    }
    if (meters_Down >= 20 ){
        Stone_Chance_Of_Getting_Top = 50
        Stone_Chance_Of_Getting_Buttom = 0

        Cual_Chance_Of_Getting_Top = 75
        Cual_Chance_Of_Getting_Buttom = 50

        Cobber_Chance_Of_Getting_Top = 90
        Cobber_Chance_Of_Getting_Buttom = 75

        Iron_Chance_Of_Getting_Top = 100
        Iron_Chance_Of_Getting_Buttom = 90
    }
    if (meters_Down >= 50 ){
        Stone_Chance_Of_Getting_Top = 50
        Stone_Chance_Of_Getting_Buttom = 0

        Cual_Chance_Of_Getting_Top = 65
        Cual_Chance_Of_Getting_Buttom = 50

        Cobber_Chance_Of_Getting_Top = 80
        Cobber_Chance_Of_Getting_Buttom = 65

        Iron_Chance_Of_Getting_Top = 100
        Iron_Chance_Of_Getting_Buttom = 80
    }
    pick_Mining_Object()
}

async function start_Mine(){
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