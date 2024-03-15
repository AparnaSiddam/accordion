let buttons = document.getElementsByClassName('accordion');
let panels = document.getElementsByClassName('panel');

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(e){
        buttons[i].classList.toggle('active');
        if(panels[i].style.maxHeight){
            panels[i].style.maxHeight = null;
        }else{
            panels[i].style.maxHeight = panels[i].scrollHeight + "px";
            
        }
    });
}

