var Xp_To_Next_Level = 100
var x = 0
var xp_Prosent_Andel = 0

var Level_Exeler = 115

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
    
    
    if (xp_Prosent_Andel >= 100){
        Level += 1
        document.getElementById('Level_Up_Text').innerHTML = `Level Up ${Level} !!`;
        document.getElementById("Level_Up_Text").style.visibility="visible"; 
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

        await delay(2);
        document.getElementById("Level_Up_Text").style.visibility="hidden"; 
        document.getElementsByClassName("Xp_Progress")[0].style.width = `${xp_Prosent_Andel}%`;
        document.getElementById('Xp_Count').innerHTML = `XP ${xp_Prosent_Show_Data} %`;
    }
}