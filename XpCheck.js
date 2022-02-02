var Xp_To_Next_Level = 100
var x = 0

async function Xp_Level_Check(){
    var prsoent_Xp = (xp / 100 * Xp_To_Next_Level)
    console.log(prsoent_Xp, "Prsent XP")
    for (let i = 0; i < xp_Incressment; i++) {
        document.getElementsByClassName("Xp_Progress")[0].style.width = `${x}%`;
        x += 1
        await delay(0.01);
    }


    if (xp >= Xp_To_Next_Level){
        Level += 1
        document.getElementById('Level_Up_Text').innerHTML = `Level Up ${Level} !!`;
        document.getElementById("Level_Up_Text").style.visibility="visible"; 
        
        xp -= Xp_To_Next_Level
        Xp_To_Next_Level / 0.15
        
        x = xp

        await delay(2);
        document.getElementById("Level_Up_Text").style.visibility="hidden"; 
        document.getElementsByClassName("Xp_Progress")[0].style.width = `${xp}%`;
        document.getElementById('Xp_Count').innerHTML = `XP ${xp}`;
    }
}