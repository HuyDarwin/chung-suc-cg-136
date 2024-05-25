import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {

        const db = getDatabase();

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
          
            if(data.buzzer_active == 1){
              update(ref(db), { buzzer_enabled : 0 })
              
              $('.buzz-team').css('opacity', 0)
              if(data.buzzer_team == 1){
                $('#buzz-team-1').css('opacity', 1).trigger('play')
              }
              else if(data.buzzer_team == 2){
                $('#buzz-team-2').css('opacity', 1).trigger('play')
              }
              
              update(ref(db), { buzzer_active : 0 })
            }
        });

    }(window.CONTROLLER = window.CONTROLLER || {}));
});