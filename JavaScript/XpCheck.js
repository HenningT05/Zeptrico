var Xp_To_Next_Level = 100
var x = 0
var xp_Prosent_Andel = 0

var Level_Exeler = 115

var Coin_Get_LevelUp = 30
var Coin_Increes = 15

var Craft_Card_Get_LevelUp = 5
var Craft_Card_Increes = 1

function Hide_Level_Up_Screen(){
    document.getElementById("Start_Mine_Button").style.visibility="visible"; 
    document.getElementById("Level_Up_Text").style.visibility="hidden"; 
    document.getElementsByClassName("Level_Up_GUI")[0].style.visibility = "hidden";
    document.getElementById("Level_AC").style.visibility="hidden"; 
    document.getElementById("LevelUp_Get_Coin").style.visibility="hidden"; 
    document.getElementById("LevelUp_Get_Craft_card").style.visibility="hidden"; 

    document.getElementById('Xp_Count').innerHTML = `XP ${xp_Prosent_Show_Data} %`;

}

async function Print_Level_Up_Screen(){
    document.getElementsByClassName("Level_Up_GUI")[0].style.visibility = "visible";
    document.getElementById("Level_Up_Text").style.visibility="visible"; 
    document.getElementById("Level_AC").style.visibility="visible"; 
    document.getElementById("LevelUp_Get_Coin").style.visibility="visible"; 
    document.getElementById("LevelUp_Get_Craft_card").style.visibility="visible"; 

    document.getElementById('Level_Up_Text').innerHTML = `Level Up`;
    document.getElementById('Level_AC').innerHTML = `Level ${Level}`;

    await delay(4);
    Hide_Level_Up_Screen()   
}

function Get_LevelUp_Lot(){
    Coin += Coin_Get_LevelUp
    Craft_Card += Craft_Card_Get_LevelUp

    document.getElementById('Coins_TC').innerHTML = Coin;
    document.getElementById('Craft_Card_TC').innerHTML = Craft_Card;

    document.getElementById('LevelUp_Get_Coin').innerHTML = Coin_Get_LevelUp + " +";
    document.getElementById('LevelUp_Get_Craft_card').innerHTML = Craft_Card_Get_LevelUp + " +";

    Coin_Get_LevelUp += Coin_Increes
    Craft_Card_Get_LevelUp += Craft_Card_Increes
    Print_Level_Up_Screen()
}


async function Xp_Level_Check(){
    var prsoent_Xp = (xp / Xp_To_Next_Level * 100)
    xp_Prosent_Andel += prsoent_Xp

    xp_Prosent_Show_Data = xp_Prosent_Andel.toFixed(0)
    prsoent_Xp = prsoent_Xp.toFixed(0)
    document.getElementById('Xp_Count').innerHTML = `XP ${xp_Prosent_Show_Data} %`;
    console.log(prsoent_Xp," Prosent XP")
    for (let i = 0; i < prsoent_Xp; i++) {
        document.getElementsByClassName("Xp_Progress")[0].style.width = `${x}%`;
        x += 1
        await delay(0.01);
        if (xp_Prosent_Andel >= 100){
            x = 100
        }
    }

    xp = 0
    
    if (xp_Prosent_Andel >= 100){
        Level += 1
        document.getElementById("Start_Mine_Button").style.visibility="hidden"; 

        document.getElementById('Level_Up_Text').innerHTML = `Level Up ${Level} !!`;
        document.getElementById('TC_Level').innerHTML = `Level ${Level}`;
        document.getElementsByClassName("Xp_Progress")[0].style.width = `0%`;

        
        
        xp = 0
        Xp_To_Next_Level = Xp_To_Next_Level / 100 * Level_Exeler
        console.log(`${Xp_To_Next_Level} Xp to next level`)
        if (Level_Exeler < 140){
            Level_Exeler = Level_Exeler / 100 * 103
            console.log(Level_Exeler, "Level exeleration")
            console.log("")
        }
        
        xp_Prosent_Andel -= 100
        
        xp_Prosent_Show_Data = xp_Prosent_Andel
        xp_Prosent_Show_Data = xp_Prosent_Show_Data.toFixed(0)

        xp_Prosent_Andel = (xp_Prosent_Andel / Xp_To_Next_Level * 100)
        xp_Prosent_Show_Data = xp_Prosent_Andel.toFixed(0)

        x = xp_Prosent_Andel
        document.getElementsByClassName("Xp_Progress")[0].style.width = `${xp_Prosent_Andel}%`;
        Get_LevelUp_Lot()
    }
    Print_BLC_Lot()
}