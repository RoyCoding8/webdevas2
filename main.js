var mr=true,mb=true;
var el,p,pos_red,pos_blue,indx;
let l=[];

function store_pos(x){
    for(let j=0;j<28;j++){
        p=document.getElementById(`pos_${i}`);
        l.push(p);
    }
    _init_(x);
}

function _init_(x){
    pos_red=l[0],pos_blue=l[14];
    if(el.innerHTML == "It's Red's turn") position_red(x);
    else if(el.innerHTML == "It's Blue's turn") position_blue(x);
}

function isInLocker(x){
    if(x==6&&el.innerHTML=="It's Red's turn") mr=false;
    else if(x==6&&el.innerHTML=="It's Blue's turn") mb=false;
    console.log(mr,mb);
}

function display_peg(ind,peg_name){
    l[ind].innerHTML=peg_name;
}

function position_red(x){
    if(!mr){
        if(pos_red+x<=27) pos_red+=x;
        else{
            alert('Red won, Game Over!');
        }
    }
}

function position_blue(x){
    if(!mb){
        if(pos_blue+x<=42) pos_blue=(pos_blue+x)%28;
        else{
           alert('Blue won, Game Over!');
        }
    }
}

function move1(){
    el = document.getElementById('player');
    store_pos();
    if(el.innerHTML=="It's Red's turn") display_peg(pos_red,1);
    else if(el.innerHTML=="It's Blue's turn") display_peg(pos_blue,1);
}

function move2(){
    el = document.getElementById('player');
    store_pos();
    if(el.innerHTML=="It's Red's turn") display_peg(pos_red,2);
    else if(el.innerHTML=="It's Blue's turn") display_peg(pos_blue,2);
}

function move3(){
    el = document.getElementById('player');
    store_pos();
    if(el.innerHTML=="It's Red's turn") display_peg(pos_red,3);
    else if(el.innerHTML=="It's Blue's turn") display_peg(pos_blue,3);
}

function move4(){
    let el = document.getElementById('player');
    store_pos();
    if(el.innerHTML=="It's Red's turn") display_peg(pos_red,4);
    else if(el.innerHTML=="It's Blue's turn") display_peg(pos_blue,4);
}

function change_player(x){
    el = document.getElementById('player');
    if(x!=6){
        if(el.innerHTML == "It's Red's turn"){
            el.innerHTML = "It's Blue's turn";
        }
        else if(el.innerHTML == "It's Blue's turn"){
            el.innerHTML = "It's Red's turn";
        }
    }
    store_pos(x);
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