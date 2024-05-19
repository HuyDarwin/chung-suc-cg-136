import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {
        // Init

        const db = getDatabase();

        con.updatequestion();
        con.scaletext();
        con.loadcamera('');

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();

            if (data.score_backdrop != null) {
                $('.score-backdrop').css('opacity', data.score_backdrop)
            }

            $('.question-score div svg text, .br-total-score svg text').html(data.total_score);
            $('#team-1-score div svg text').html(data.team_1_score);
            $('#team-2-score div svg text').html(data.team_2_score);
          
            //con.scaletext()
        });
      
      /*
      var timeout;
      
      function loop(){
        con.scaletext();
        timeout = setTimeout(function(){
          loop();
        }, 500)
      }
      
      function stoploop(){
        clearTimeout(timeout);
      }
      
      loop();
      */

    }(window.CONTROLLER = window.CONTROLLER || {}));
});