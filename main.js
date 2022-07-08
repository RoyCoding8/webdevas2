function roll(){
    let x = Math.floor(Math.random()*6)+1;
    document.getElementById('dice').innerHTML = x;
    if(x==6){
        document.getElementById('i').innerHTML = 'Roll Again!';
    }
    else{
        document.getElementById('i').innerHTML = '';
    }
}

function getBgColor(element) 
{
  if (element.currentStyle)
    return element.currentStyle.backgroundColor;
  if (window.getComputedStyle){
    let elementStyle=window.getComputedStyle(element,"");
    if (elementStyle)
      return elementStyle.getPropertyValue("background-color");
  } 
}

function change_color(){
    let x = document.getElementById('dice');
    if(x.innerHTML!=6){
        let el = document.createElement('i1');
        let el1 = document.querySelector('#i1');
        bgclr = getBgColor(el1);
        if(bgclr == 'blue'){
            el.innerHTML = '.i1{'+'background-color: red;'+'}';
        }
        else if(bgclr == 'red'){
            el.innerHTML = '.i1{'+'background-color: blue;'+'}';
        }
    }
}