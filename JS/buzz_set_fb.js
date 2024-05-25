import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {

        const db = getDatabase();

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
          
            if(data.buzzer_active == 1 || data.buzzer_active == 2){
              update(ref(db), { buzzer_enabled : 0 })
              
              $('.buzz-team').css('opacity', 0)
              setTimeout(function(){
                if(data.buzzer_active == 1){
                  $('#buzz-team-1').css('opacity', 1).trigger('play')
                }
                else if(data.buzzer_active == 2){
                  $('#buzz-team-2').css('opacity', 1).trigger('play')
                }                
              }, 250)

              
              update(ref(db), { buzzer_active : 0 })
            }                   
          
        });

    }(window.CONTROLLER = window.CONTROLLER || {}));
});