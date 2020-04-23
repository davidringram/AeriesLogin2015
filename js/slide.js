$(document).ready(function() {
             
          //   $("#pass").hide();
    
           

            $("#next").click(function(){
               $("#name").hide( "slide", { direction: "left"  }, 400 );
                 $("#pass").show( "slide", {direction: "right" }, 500 );
            });

        
         });