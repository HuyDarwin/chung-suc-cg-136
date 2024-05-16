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
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20v%C3%B4%20gi%E1%BA%A3i%20lao.mp3?v=1715746744890',1)
              update(ref(db), { sd_comm_in : 0 })
            }
            if(data.sd_comm_out == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20h%C3%ACnh%20hi%E1%BB%87u%20k%E1%BA%BFt%20th%C3%BAc%20gi%E1%BA%A3i%20lao.mp3?v=1715746740323',1)
              update(ref(db), { sd_comm_out : 0 })
            }
            if(data.sd_round == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20b%E1%BA%AFt%20%C4%91%E1%BA%A7u%20v%C3%B2ng%20thi.mp3?v=1715746745718',1)
              update(ref(db), { sd_round : 0 })
            }
            if(data.sd_round_win == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20%C4%91%E1%BB%99i%20th%E1%BA%AFng%20v%C3%B2ng.mp3?v=1715746732004',1)
              update(ref(db), { sd_round_win : 0 })
            }
            if(data.sd_2_players_chosen == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20ch%E1%BB%8Dn%202%20ng%C6%B0%E1%BB%9Di%20v%C3%A0o%20v%C4%91b.mp3?v=1715746729926',1)
              update(ref(db), { sd_2_players_chosen : 0 })
            }
          
            if(data.sd_buzzer == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20b%E1%BA%A5m%20chu%C3%B4ng_main.mp3?v=1715746747917',2)
              update(ref(db), { sd_buzzer : 0 })
            }
            if(data.sd_buzzer_alt == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20b%E1%BA%A5m%20chu%C3%B4ng_alt.mp3?v=1715746747111',2)
              update(ref(db), { sd_buzzer_alt : 0 })
            }
          
            if(data.sd_reveal_iterator_4 == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20hi%E1%BB%87n%20s%E1%BB%91%20%C4%91%C3%A1p%20%C3%A1n%20v%C3%B2ng%20(4%20%C4%91%C3%A1p%20%C3%A1n).mp3?v=1715746733735',3)
              update(ref(db), { sd_reveal_iterator_4 : 0 })
            }
            if(data.sd_reveal_iterator_5 == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20hi%E1%BB%87n%20s%E1%BB%91%20%C4%91%C3%A1p%20%C3%A1n%20v%C3%B2ng%20(5%20%C4%91%C3%A1p%20%C3%A1n).mp3?v=1715746734553',3)
              update(ref(db), { sd_reveal_iterator_5 : 0 })
            }
            if(data.sd_reveal_iterator_6 == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20hi%E1%BB%87n%20s%E1%BB%91%20%C4%91%C3%A1p%20%C3%A1n%20v%C3%B2ng%20(6%20%C4%91%C3%A1p%20%C3%A1n).mp3?v=1715746735310',3)
              update(ref(db), { sd_reveal_iterator_6 : 0 })
            }
            if(data.sd_reveal_iterator_7 == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20hi%E1%BB%87n%20s%E1%BB%91%20%C4%91%C3%A1p%20%C3%A1n%20v%C3%B2ng%20(7%20%C4%91%C3%A1p%20%C3%A1n).mp3?v=1715746737103',3)
              update(ref(db), { sd_reveal_iterator_7 : 0 })
            }
            if(data.sd_reveal_iterator_8 == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20hi%E1%BB%87n%20s%E1%BB%91%20%C4%91%C3%A1p%20%C3%A1n%20v%C3%B2ng%20(8%20%C4%91%C3%A1p%20%C3%A1n).mp3?v=1715746738107',3)
              update(ref(db), { sd_reveal_iterator_8 : 0 })
            }
            if(data.sd_reveal_ans == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20m%E1%BB%9F%20%C4%91%C3%A1p%20%C3%A1n%20%C4%91%C3%BAng.mp3?v=1715746742588',3)
              update(ref(db), { sd_reveal_ans : 0 })
            }
            if(data.sd_wrong == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20%C4%91%C3%A1p%20%C3%A1n%20sai.mp3?v=1715746730723',3)
              update(ref(db), { sd_wrong : 0 })
            }
            if(data.sd_reveal_br_ans == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/nh%E1%BA%A1c%20hi%E1%BB%87n%20%C4%91%C3%A1p%20%C3%A1n%20v%C4%91b.mp3?v=1715746732911',3)
              update(ref(db), { sd_reveal_br_ans : 0 })
            }
            if(data.sd_reveal_br_ans_score == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/Family_Feud_2010_file_FF201020.mp3?v=1715873757004',3)
              update(ref(db), { sd_reveal_br_ans_score : 0 })
            }
            if(data.sd_br_wrong == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/Family_Feud_2010_file_FF201021.mp3?v=1715770711647',3)
              update(ref(db), { sd_br_wrong : 0 })
            }
            if(data.sd_br_finished == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/Family_Feud_2010_file_FF201023.mp3?v=1715770707935',3)
              update(ref(db), { sd_br_finished : 0 })
            }     
          
            if(data.sd_timer_20s == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/Family_Feud_2010_file_FF201010.mp3?v=1715770709335',4)
              update(ref(db), { sd_timer_20s : 0 })
            }
            if(data.sd_timer_25s == 1){
              con.PlaySound('https://cdn.glitch.global/d26ba743-6712-4bf4-b28e-013addcf9d55/Family_Feud_2010_file_FF201011.mp3?v=1715770710979',4)
              update(ref(db), { sd_timer_25s : 0 })
            }

            if(data.sd_stop_sounds == 1){
              con.StopAllSounds()
              update(ref(db), { sd_stop_sounds : 0 })
            }
        });

    }(window.CONTROLLER = window.CONTROLLER || {}));
});