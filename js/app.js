//Variables

const box = document.querySelector('.box');
const arrowSRC = 'http://127.0.0.1:5500/images/icon-share.svg';
const shareDesktop = document.querySelector(".shareDesktop");
const arrow = document.getElementById('arrow'),       
        shareDisplay = document.querySelector('.shareDisplay'),
        michelle = document.querySelector('.michelle'),
        shareMobile = document.querySelector('.shareMobile'); 


//Event listeners
  
window.addEventListener('load', viewport);



//Functions


function viewport() {
    var ancho= screen.width;
    var alto = screen.height;    

    if(ancho < 600){
        console.log ("Ancho: "+ancho+" "+"alto: "+alto);  
        arrow.addEventListener('click', mobileView);    
    }
      
    else {
        console.log ("Ancho: "+ancho+" "+"alto: "+alto);        
        arrow.addEventListener('click', desktopView);        
    }


}




function mobileView(){    

  if(arrow.src === arrowSRC ){
    arrow.src = 'http://127.0.0.1:5500/images/icon-share_2.svg';        
    michelle.style.display = 'none';
    shareMobile.style.display = 'flex';
    arrow.style.backgroundColor = '#707f9c';
    shareDisplay.style.backgroundColor = '#4b566c';        
  }

  else {
    arrow.src = arrowSRC;
    arrow.style.backgroundColor = '#eff4fa';       
    michelle.style.display = 'flex';
    shareMobile.style.display = 'none';
    shareDisplay.style.backgroundColor = '#ffffff';       
  }  
}


        

function desktopView(){

    if(arrow.src === arrowSRC ){
       arrow.src = 'http://127.0.0.1:5500/images/icon-share_2.svg';            
       arrow.style.backgroundColor = '#707f9c';
      shareDesktop.style.display = 'flex';            
    }
    else{
      arrow.src = arrowSRC;
      arrow.style.backgroundColor = '#eff4fa';
      shareDesktop.style.display = 'none';           
    }
}





