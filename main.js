var bx = [];
bx[0] = document.getElementById('o1');
bx[1] = document.getElementById('o2');
bx[2] = document.getElementById('o3');
bx[3] = document.getElementById('t1');
bx[4] = document.getElementById('t2');
bx[5] = document.getElementById('t3');
bx[6] = document.getElementById('th1');
bx[7] = document.getElementById('th2');
bx[8] = document.getElementById('th3');
var pl = true;

function cl0() {
    if (pl == true && bx[0].innerHTML == ' ') {bx[0].innerHTML = 'X'; pl = false;}
    else if (pl == false && bx[0].innerHTML == ' ') {bx[0].innerHTML = 'O'; pl = true;}
    setInterval(chk, 500);
}
function cl1() {
    if (pl == true && bx[1].innerHTML == ' ') {bx[1].innerHTML = 'X'; pl = false;}
    else if (pl == false && bx[1].innerHTML == ' ') {bx[1].innerHTML = 'O'; pl = true;}
    setInterval(chk, 500);
}
function cl2() {
    if (pl == true && bx[2].innerHTML == ' ') {bx[2].innerHTML = 'X'; pl = false;}
    else if (pl == false && bx[2].innerHTML == ' ') {bx[2].innerHTML = 'O'; pl = true;}
    setInterval(chk, 500);
}
function cl3() {
    if (pl == true && bx[3].innerHTML == ' ') {bx[3].innerHTML = 'X'; pl = false;}
    else if (pl == false && bx[3].innerHTML == ' ') {bx[3].innerHTML = 'O'; pl = true;}
    setInterval(chk, 500);
}
function cl4() {
    if (pl == true && bx[4].innerHTML == ' ') {bx[4].innerHTML = 'X'; pl = false;}
    else if (pl == false && bx[4].innerHTML == ' ') {bx[4].innerHTML = 'O'; pl = true;}
    setInterval(chk, 500);
}
function cl5() {
    if (pl == true && bx[5].innerHTML == ' ') {bx[5].innerHTML = 'X'; pl = false;}
    else if (pl == false && bx[5].innerHTML == ' ') {bx[5].innerHTML = 'O'; pl = true;}
    setInterval(chk, 500);
}
function cl6() {
    if (pl == true && bx[6].innerHTML == ' ') {bx[6].innerHTML = 'X'; pl = false;}
    else if (pl == false && bx[6].innerHTML == ' ') {bx[6].innerHTML = 'O'; pl = true;}
    setInterval(chk, 500);
}
function cl7() {
    if (pl == true && bx[7].innerHTML == ' ') {bx[7].innerHTML = 'X'; pl = false;}
    else if (pl == false && bx[7].innerHTML == ' ') {bx[7].innerHTML = 'O'; pl = true;}
    setInterval(chk, 500);
}
function cl8() {
    if (pl == true && bx[8].innerHTML == ' ') {bx[8].innerHTML = 'X'; pl = false;}
    else if (pl == false && bx[8].innerHTML == ' ') {bx[8].innerHTML = 'O'; pl = true;}
    setInterval(chk, 500);
}

function chk() {
    if (bx[0].innerHTML == 'X' && bx[1].innerHTML == 'X' && bx[2].innerHTML == 'X' || bx[3].innerHTML == 'X' && bx[4].innerHTML == 'X' && bx[5].innerHTML == 'X' || bx[6].innerHTML == 'X' && bx[7].innerHTML == 'X' && bx[8].innerHTML == 'X' || bx[0].innerHTML == 'X' && bx[3].innerHTML == 'X' && bx[6].innerHTML == 'X' || bx[1].innerHTML == 'X' && bx[4].innerHTML == 'X' && bx[7].innerHTML == 'X' || bx[2].innerHTML == 'X' && bx[5].innerHTML == 'X' && bx[8].innerHTML == 'X' || bx[0].innerHTML == 'X' && bx[4].innerHTML == 'X' && bx[8].innerHTML == 'X' || bx[2].innerHTML == 'X' && bx[4].innerHTML == 'X' && bx[6].innerHTML == 'X') {alert('X win!'); location.reload();}
    else if (bx[0].innerHTML == 'O' && bx[1].innerHTML == 'O' && bx[2].innerHTML == 'O' || bx[3].innerHTML == 'O' && bx[4].innerHTML == 'O' && bx[5].innerHTML == 'O' || bx[6].innerHTML == 'O' && bx[7].innerHTML == 'O' && bx[8].innerHTML == 'O' || bx[0].innerHTML == 'O' && bx[3].innerHTML == 'O' && bx[6].innerHTML == 'O' || bx[1].innerHTML == 'O' && bx[4].innerHTML == 'O' && bx[7].innerHTML == 'O' || bx[2].innerHTML == 'O' && bx[5].innerHTML == 'O' && bx[8].innerHTML == 'O' || bx[0].innerHTML == 'O' && bx[4].innerHTML == 'O' && bx[8].innerHTML == 'O' || bx[2].innerHTML == 'O' && bx[4].innerHTML == 'O' && bx[6].innerHTML == 'O') {alert('O win!'); location.reload();}
    else if (bx[0].innerHTML != ' ' && bx[1].innerHTML != ' ' && bx[2].innerHTML != ' ' && bx[3].innerHTML != ' ' && bx[4].innerHTML != ' ' && bx[5].innerHTML != ' ' && bx[6].innerHTML != ' ' && bx[7].innerHTML != ' ' && bx[8].innerHTML != ' ') {alert('O|X'); location.reload();}
}