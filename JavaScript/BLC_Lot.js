var BLC_Lot = "Cock"
var BLC_Last_Lot = "NOT Cock"
var BLC_Lot_IMG = ""
var BLC_Lot_Number = 1

var BLC_Timer_Running = false

var BLC_Timer = 3 

var BLC_Exspand_Number = 1

async function Run_BLC_Timer(){
    BLC_Timer_Running = true
    do{
        await delay(0.5)
        BLC_Timer -= 0.5
    }
    while(BLC_Timer > 0)
    BLC_Timer_Running = false
    Hide_BLC_Lot()
}

function Start_BLC(){
    document.getElementsByClassName("Get_Lot_BLC_Gui")[0].style.visibility="visible";
    document.getElementById('Get_Lot_BLC_Name').innerHTML = BLC_Lot;
    document.getElementById("Get_Log_BLC_IMG").src=BLC_Lot_IMG;
    document.getElementById('Get_Log_BLC_Number').innerHTML = BLC_Lot_Number+"+";
    if (BLC_Timer_Running == false){
        Run_BLC_Timer()
    }
    else{}
}

async function Hide_BLC_Lot(){
    document.getElementsByClassName("Get_Lot_BLC_Gui")[0].style.visibility="hidden";
    BLC_Lot = ""
    BLC_Lot_Number = 0
}

async function Print_BLC_Lot(){
    BLC_Timer = 3
    if (BLC_Lot == BLC_Last_Lot){
        BLC_Lot_Number = BLC_Lot_Number + BLC_Exspand_Number
        BLC_Exspand_Number = 1
        Start_BLC()
    }
    else{
        document.getElementsByClassName("Get_Lot_BLC_Gui")[0].style.visibility="hidden";
        BLC_Last_Lot = BLC_Lot
        BLC_Lot_Number = 1
        await delay(0.1)
        Start_BLC()
    }
}