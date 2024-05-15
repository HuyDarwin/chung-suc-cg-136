import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {

        const db = getDatabase();

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();

            if(data.sd_short_intro == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/441260484_5846150375508658_2529419483320996984_n.mp3?v=1715757335615',1)
              update(ref(db), { sd_short_intro : 0 })
            }
            if(data.sd_intro == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20m%E1%BB%9F%20%C4%91%E1%BA%A7u.mp3?v=1715746744008',4)
              update(ref(db), { sd_intro : 0 })
            }
            if(data.sd_credits == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20k%E1%BA%BFt%20th%C3%BAc.mp3?v=1715746741708',4)
              update(ref(db), { sd_credits : 0 })
            }
            if(data.sd_comm_in == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20k%E1%BA%BFt%20th%C3%BAc.mp3?v=1715746741708',1)
              update(ref(db), { sd_comm_in : 0 })
            }
            if(data.sd_round == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20b%E1%BA%AFt%20%C4%91%E1%BA%A7u%20v%C3%B2ng%20thi.mp3?v=1715746745718',1)
              update(ref(db), { sd_round : 0 })
            }

            if(data.sd_stop_sounds == 1){
              con.StopAllSounds()
              update(ref(db), { sd_stop_sounds : 0 })
            }
        });

    }(window.CONTROLLER = window.CONTROLLER || {}));
});