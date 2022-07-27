




$(document).ready(function(){

    // jQuery methods go here...
    
    $("#box").mouseenter(function(){
        $("h1").hide();
    });

    $("#box").mouseleave(function(){
        $("h1").show();
    });


    //Slide-down 
    $("#boxChild").click(function(){
        $("#slide-down").animate({top: '90px'}, 1000, ()=>{$("#slide-down").animate({top: '-10px'}, 300);});
        $("#slide-up").animate({top: '-110px'}, 1000, ()=>{$("#slide-up").animate({top: '-10px'}, 300);});
        $("#slide-right").animate({left: '90px'}, 1000, ()=>{$("#slide-right").animate({left: '-10px'}, 300);});
        $("#slide-left").animate({left: '-110px'}, 1000, ()=>{$("#slide-left").animate({left: '-10px'}, 300);});
        $("#boxChild").hide(1200, ()=>{$("#boxChild").show();});
    });
    
  
  });