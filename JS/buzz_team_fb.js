import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {

        const db = getDatabase();

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
          
            if(data.buzzer_enabled == 1) {
              $('.buzzer').removeAttr('disabled')
            }
            else{
              $('.buzzer').attr('disabled',true)
            }
          
            if(data.buzzer_team == 1) {
              $('.who-buzzers').html('Team 1: ')
              if(data.team_1_name != null){
                $('.who-buzzers').html('Team 1: ' + data.team_1_name)
              }
            }
            else if(data.buzzer_team == 2) {
              $('.who-buzzers').html('Team 2: ')
              if(data.team_2_name != null){
                $('.who-buzzers').html('Team 2: ' + data.team_2_name)
              }
            }
            else{
              $('.who-buzzers').html('')
            }
        });
      
        $('.buzzer').click(function(){
          update(ref(db), { buzzer_active : 1 })
          if(this.id == 'buzzer-1'){
            update(ref(db), { buzzer_team : 1 })
          }
          else if(this.id == 'buzzer-2'){
            update(ref(db), { buzzer_team : 2 })
          }
        })
      
        

    }(window.CONTROLLER = window.CONTROLLER || {}));
});