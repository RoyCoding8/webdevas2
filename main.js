let el = document.getElementById('player').innerHTML;

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
    position_red(x);
}

function change_player(x){
    if(x!=6){
        if(el == "It's Red's turn"){
            el = "It's Blue's turn";
        }
        else if(el == "It's Blue's turn"){
            el = "It's Red's turn";
        }
    }
}

let mr=true,mb=true;

function isInLocker(x){
    if(mr==true){
        if(x==6&&el=="It's Red's turn") mr=false;
        else if(x==6&&el=="It's Blue's turn") mb=false;
    }
}

function position_red(x){
    let pos_red;
    if(!mr){
        pos_red=pos_{$};
    }
}