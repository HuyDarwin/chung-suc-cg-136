import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {

        const db = getDatabase();

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();

            if(data.sd_intro == 1){
              con.PlaySound('',1)
              update(ref(db), { sd_intro : 0 })
            }
            if(data.sd_round == 1){
              con.PlaySound('',1)
              update(ref(db), { sd_round : 0 })
            }

            if(data.sd_stop_sounds == 1){
              con.StopAllSounds()
              update(ref(db), { sd_stop_sounds : 0 })
            }
        });

    }(window.CONTROLLER = window.CONTROLLER || {}));
});