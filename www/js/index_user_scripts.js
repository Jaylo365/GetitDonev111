/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #add */
    
    
        /* button  #add */
    $(document).on("click", "#add", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
