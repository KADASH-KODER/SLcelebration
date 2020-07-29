
$(document).ready(
function(){
 $("#giftbox").one("click" , showBox );
   }
)
function showBox(){
    
    anime({
        targets: '#giftcover',
        keyframes:[
        {translateY:-80 },
        {translateX:80},
        {rotateZ:90 },
        {translateY:35 },
        ],
        duration:6000,
        loop:false,
        update:open
        
    })
    
    function open(){
          anime({
        delay:100,
        targets: '#ball',
        keyframes:[
        {translateY:-150},
        {translateX:40},
        {rotateZ:90 },
        {translateX:-80},
        {translateY:-5 },
        {rotateZ:0 },
        {translateY:-200},
        
        {translateY:-150 },
        {translateX:20},
        {rotateZ:90 },
        {translateX:-40},
        {translateY:0 },
        {rotateZ:0 },
        {translateY:-200}, 
         
        {translateY:-150 },
        {translateX:20},
        {rotateZ:90 },
        {translateX:-40},
        {translateY:0 },
        {rotateZ:0 },
        {translateY:-200},
        
        ],
        duration:12000,
        loop:false,
      
        
        
    })
        
    }
    
    
    
}



function coming(){
    $(".coming").css("display"," block");
    anime({
        targets:".coming h1",
        scale:1.2,
        duration:1500,
    });
    anime({
        targets:".coming p",
        marginTop:0,
        delay:2000,
        duration:4000
    })
  setTimeout( comingsoon,6000);
    
}
function comingsoon(){
        $(".coming").css("display"," block");
    anime({
        targets:".coming h1",
        scale:0,
        duration:1500,
    });
    anime({
        targets:".coming p",
        marginTop:100,
        delay:2000,
        duration:3000
    });
    $(".coming").fadeOut(5000);
}

function showHome(){
    $("#about").fadeOut(500)
    $("#why").fadeOut(500)
    $("#special").fadeOut(500)
    $("#mainSection").fadeIn(500)
    $("#home").fadeOut(500)
    $("#block").fadeOut(500)
    $("#birthday").fadeOut(500)
    $("#princessgift").fadeOut(500)
    $("#celegift").fadeOut(500) 
    
}

function  showAbout(){
    $("#mainSection").fadeOut(500)
    $("#about").fadeIn(500)
    $("#why").fadeOut(500)
    $("#special").fadeOut(500)
    $("#home").fadeIn(500)
    $("#block").fadeOut(500)
    $("#birthday").fadeOut(500)
    $("#princessgift").fadeOut(500)
    $("#hbdp").fadeOut(500)
     $("#celegift").fadeOut(500)  
}


function  showWhy(){
    $("#mainSection").fadeOut(500)
    $("#about").fadeOut(500)
    $("#why").fadeIn(500)
    $("#special").fadeOut(500)
    $("#home").fadeIn(500)
    $("#block").fadeOut(500)
    $("#birthday").fadeOut(500)
    $("#princessgift").fadeOut(500)
    $("#hbdp").fadeOut(500)
    $("#celegift").fadeOut(500) 
}


function  showSpecial(){
    $("#mainSection").fadeOut(500)
    $("#about").fadeOut(500)
    $("#why").fadeOut(500)
    $("#special").fadeIn(500)
    $("#block").fadeOut(500)
    $("#home").fadeIn(500)
    $("#birthday").fadeOut(500)
    $("#princessgift").fadeOut(500)
     $("#hbdp").fadeOut(500)
     $("#celegift").fadeOut(500)  
}


function  showBlock(){
    $("#mainSection").fadeOut(500)
    $("#about").fadeOut(500)
    $("#why").fadeOut(500)
    $("#special").fadeOut(500)
    $("#home").fadeIn(500)
    $("#block").fadeIn(500)
    $("#birthday").fadeOut(500)
    $("#princessgift").fadeOut(500)
     $("#hbdp").fadeOut(500)
     $("#celegift").fadeOut(500) 
}



function  showBd(){
    $("#mainSection").fadeOut(500)
    $("#about").fadeOut(500)
    $("#why").fadeOut(500)
    $("#special").fadeOut(500)
    $("#home").fadeIn(500)
    $("#block").fadeOut(500)
    $("#birthday").fadeIn(500)
    $("#hbdp").fadeOut(500)
    $("#celegift").fadeOut(500) 
}

function  showPg(){
    $("#princessgift").slideToggle(500)
}

function  closePg(){
    $("#princessgift").slideToggle(100)
}

function  closePg2(){
    $("#hbdp").slideToggle(100)   
    $("#princessgift").fadeOut(100)
    $("#mainSection").fadeIn(500)
}


function displayGift(){
  var p = document.getElementById("giftpassword").value;

    if (p == "Tree"){
    $("#hbdp").slideToggle(500)
       
    $("#mainSection").fadeOut(500)
    $("#about").fadeOut(500)
    $("#why").fadeOut(500)
    $("#special").fadeOut(500)
    $("#home").fadeOut(500)
    $("#block").fadeOut(500)
    $("#birthday").fadeOut(500)
    $("#celegift").fadeOut(500) 
    }
        else if (p == "tree"){
    $("#hbdp").slideToggle(500)
       
    $("#mainSection").fadeOut(500)
    $("#about").fadeOut(500)
    $("#why").fadeOut(500)
    $("#special").fadeOut(500)
    $("#home").fadeOut(500)
    $("#block").fadeOut(500)
    $("#birthday").fadeOut(500)
    $("#celegift").fadeOut(500) 
    }
    
    
        if (p == "TREE"){
    $("#hbdp").slideToggle(500)
    $("#celegift").fadeOut(500)     
    $("#mainSection").fadeOut(500)
    $("#about").fadeOut(500)
    $("#why").fadeOut(500)
    $("#special").fadeOut(500)
    $("#home").fadeOut(500)
    $("#block").fadeOut(500)
    $("#birthday").fadeOut(500)
    }

    

    else{
     $("#passresult").text("Incorrect Keywords... If you are Aakaanksha you should know the answer !!!")
    }
    
}

function giftz(){
    $("#celegift").css("overflow" , "hidden")
    $("#celegift").fadeIn(500)
    $("#mainSection").fadeOut(500)
    $("#about").fadeOut(500)
    $("#why").fadeOut(500)
    $("#special").fadeOut(500)
    $("#home").fadeIn(500)
    $("#block").fadeOut(500)
    $("#birthday").fadeOut(500)
    $("#princessgift").fadeOut(500)
    $("#hbdp").fadeOut(500)
}




