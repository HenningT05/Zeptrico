var BLC_Lot = "Cock"
var BLC_Last_Lot = "NOT Cock"
var BLC_Lot_IMG = ""
var BLC_Lot_Number = 0

var BLC_Timer = 3 

async function Start_BLC(){
    document.getElementsByClassName("Get_Lot_BLC_Gui")[0].style.visibility="visible";
    document.getElementById('Get_Lot_BLC_Name').innerHTML = BLC_Lot;
    document.getElementById("Get_Log_BLC_IMG").src=BLC_Lot_IMG;
    document.getElementById('Get_Log_BLC_Number').innerHTML = BLC_Lot_Number+"+";
    do{
        await delay(0.5)
        BLC_Timer -= 0.5
    }
    while(BLC_Timer > 0)
    Hide_BLC_Lot()
}

async function Hide_BLC_Lot(){
    document.getElementsByClassName("Get_Lot_BLC_Gui")[0].style.visibility="hidden";
    BLC_Lot_Number = 0
}

function Print_BLC_Lot(){
    if (BLC_Lot == BLC_Last_Lot){
        console.log("GOOD")
        BLC_Lot_Number = BLC_Lot_Number + 0.5
        BLC_Timer = 3
        Start_BLC()
    }
    else{
        console.log("not good")
        BLC_Last_Lot = BLC_Lot
        BLC_Lot_Number = 0
        BLC_Timer = 3
        Start_BLC()
    }
}