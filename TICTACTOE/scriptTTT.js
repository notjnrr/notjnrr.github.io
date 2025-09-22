
let winner=false;
let xTurn =true;
let turn = 0;



function changeMark(buttonId){
    if (winner) return;
    let currentMark = document.getElementById(buttonId).innerHTML;

    if(!currentMark){
        if(xTurn){
            document.getElementById(buttonId).innerHTML = 'X';
            document.getElementById(buttonId).style.color = 'pink';
            
        }
        else {
            document.getElementById(buttonId).innerHTML = 'O';
            document.getElementById(buttonId).style.color = 'yellow';
        }

        xTurn = !xTurn;
        turn = turn + 1;
        checkWin();

    }

}

function checkWin(){
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;

    //columns
    if (a1 && a1 == b1 && b1 == c1) {
        winner = true;
        document.getElementById("winner").innerHTML = a1 + " wins!";
    }
    else if  (a2 && a2 == b2 && b2 == c2){
        winner = true;
        document.getElementById("winner").innerHTML = a2 + " wins!"; 
    }
    else if(a3 && a3 == b3 && b3 == c3){
        winner = true;
        document.getElementById("winner").innerHTML = a3 + " wins!"; 
    }
    //rows
    else if (a1 && a1 == a2 && a2 == a3){
        winner = true;
        document.getElementById("winner").innerHTML = a1 + " wins!";
     }
    else if (b1 && b1 == b2 && b2 == b3){
        winner = true;
        document.getElementById("winner").innerHTML = b1 + " wins!";
     }
    else if(c1 && c1 == c2 && c2 == c3){ 
        winner = true;
        document.getElementById("winner").innerHTML = c1 + " wins!"; 
    }
    //diag
    else if (a1 && a1 == b2 && b2 == c3){ 
        winner = true;
        document.getElementById("winner").innerHTML = a1 + " wins!";
     } 
    else if (c1 && c1 == b2 && b2 == a3){ 
        winner = true;
        document.getElementById("winner").innerHTML = c1 + " wins!";
     }

     if (!winner && turn == 9)
        document.getElementById("winner").innerHTML = "Draw Game.";
}

function resetGame(){
    //remove eveyhthing 
    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("winner").innerHTML = "";

    turn = 0;
    xTurn = true;
    winner = false;

}