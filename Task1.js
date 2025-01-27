 // mouseover the screen
    let move=document.getElementById("nsa");
    move.addEventListener("mouseover",function(){
    
     if(MouseEvent==true)
     {
        MouseEvent=false;
        move.style.backgroundColor="Blue";
     }
    else
    {
      move.style.backgroundColor="green";
      MouseEvent=true;
    }
    });

//scrolling the screen
    let scor=document.getElementById('nsa');
    window.addEventListener('scroll',function(){
     console.log("done");
     if(scrollY>0)
     {
      scor.style.backgroundColor="red";
     }
     else
     {
     scor.style.backgroundColor="pink";
     }
    });

   