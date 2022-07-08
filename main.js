let list=[];
for(let i=0;i<27;i++) list.append(i); 

var mr=true,mb=true;
var pos_red=p[0],pos_blue=p[14],indx;

let l=[];
let p;
for(let i=0;i<27;i++){
    p=document.getElementById('pos_'+String(i));
    l.append(p);
}

function isInLocker(x){
    let el=document.getElementById('player');
    if(x==6&&el.innerHTML=="It's Red's turn") mr=false;
    else if(x==6&&el.innerHTML=="It's Blue's turn") mb=false;
}

function display_peg(ind,peg_name){
    l[ind].innerHTML=peg_name;
}

function position_red(x){
    if(!mr){
        indx=list.indexOf(pos_red);
        if(indx+x<=27) pos_red=list[indx+x];
        else{
            alert('Red won!');
        }
    }
}

function position_blue(x){
    if(!mb){
        indx=list.indexOf(pos_blue);
        if(indx+x<=42) pos_blue=list[(indx+x)%28];
        else{
           alert('Blue won!');
        }
    }
}

function move1(){
    let el=document.getElementById('player');
    if(el.innerHTML=="It's Red's turn") display_peg(pos_red,1);
    else if(el.innerHTML=="It's Blue's turn") display_peg(pos_blue,1);
}

function move2(){
    let el=document.getElementById('player');
    if(el.innerHTML=="It's Red's turn") display_peg(pos_red,2);
    else if(el.innerHTML=="It's Blue's turn") display_peg(pos_blue,2);
}

function move3(){
    let el=document.getElementById('player');
    if(el.innerHTML=="It's Red's turn") display_peg(pos_red,3);
    else if(el.innerHTML=="It's Blue's turn") display_peg(pos_blue,3);
}

function move4(){
    let el=document.getElementById('player');
    if(el.innerHTML=="It's Red's turn") display_peg(pos_red,4);
    else if(el.innerHTML=="It's Blue's turn") display_peg(pos_blue,4);
}

function change_player(x){
    let el = document.getElementById('player');
    if(el.innerHTML == "It's Red's turn") position_red(x);
    else if(el.innerHTML == "It's Blue's turn") position_blue(x);
    if(x!=6){
        if(el.innerHTML == "It's Red's turn"){
            el.innerHTML = "It's Blue's turn";
        }
        else if(el.innerHTML == "It's Blue's turn"){
            el.innerHTML = "It's Red's turn";
        }
    }
}

function roll(){
    let x = Math.floor(Math.random()*6)+1;
    document.getElementById('dice').innerHTML = x;
    if(x==6){
        document.getElementById('i').innerHTML = 'Roll Again!';
    }
    else{
        document.getElementById('i').innerHTML = '';
    }
    change_player(x);
}