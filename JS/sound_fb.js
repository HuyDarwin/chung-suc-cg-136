import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {

        const db = getDatabase();

        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();

            if(data.sd_short_intro == 1){
              con.PlaySound("Assets/441260484_5846150375508658_2529419483320996984_n.mp3", 1)
              update(ref(db), { sd_short_intro : 0 })
            }
            if(data.sd_intro == 1){
              con.PlaySound("Assets/nhạc%20mở%20đầu.mp3", 4)
              update(ref(db), { sd_intro : 0 })
            }
            if(data.sd_credits == 1){
              con.PlaySound("Assets/nhạc%20kết%20thúc.mp3", 4)
              update(ref(db), { sd_credits : 0 })
            }
            if(data.sd_comm_in == 1){
              con.PlaySound("Assets/nhạc%20vô%20giải%20lao.mp3", 1)
              update(ref(db), { sd_comm_in : 0 })
            }
            if(data.sd_comm_out == 1){
              con.PlaySound("Assets/nhạc%20hình%20hiệu%20kết%20thúc%20giải%20lao.mp3", 1)
              update(ref(db), { sd_comm_out : 0 })
            }
            if(data.sd_round == 1){
              con.PlaySound("Assets/nhạc%20bắt%20đầu%20vòng%20thi.mp3", 1)
              update(ref(db), { sd_round : 0 })
            }
            if(data.sd_round_win == 1){
              con.PlaySound("Assets/nhạc%20đội%20thắng%20vòng.mp3", 1)
              update(ref(db), { sd_round_win : 0 })
            }
            if(data.sd_2_players_chosen == 1){
              con.PlaySound("Assets/nhạc%20chọn%202%20người%20vào%20vđb.mp3", 1)
              update(ref(db), { sd_2_players_chosen : 0 })
            }
          
            if(data.sd_buzzer == 1){
              con.PlaySound("Assets/nhạc%20bấm%20chuông_main.mp3", 2)
              update(ref(db), { sd_buzzer : 0 })
            }
            if(data.sd_buzzer_alt == 1){
              con.PlaySound("Assets/nhạc%20bấm%20chuông_alt.mp3", 2)
              update(ref(db), { sd_buzzer_alt : 0 })
            }
          
            if(data.sd_reveal_iterator_4 == 1){
              con.PlaySound("Assets/nhạc%20hiện%20số%20đáp%20án%20vòng%20(4%20đáp%20án).mp3", 3)
              update(ref(db), { sd_reveal_iterator_4 : 0 })
            }
            if(data.sd_reveal_iterator_5 == 1){
              con.PlaySound("Assets/nhạc%20hiện%20số%20đáp%20án%20vòng%20(5%20đáp%20án).mp3", 3)
              update(ref(db), { sd_reveal_iterator_5 : 0 })
            }
            if(data.sd_reveal_iterator_6 == 1){
              con.PlaySound("Assets/nhạc%20hiện%20số%20đáp%20án%20vòng%20(6%20đáp%20án).mp3", 3)
              update(ref(db), { sd_reveal_iterator_6 : 0 })
            }
            if(data.sd_reveal_iterator_7 == 1){
              con.PlaySound("Assets/nhạc%20hiện%20số%20đáp%20án%20vòng%20(7%20đáp%20án).mp3", 3)
              update(ref(db), { sd_reveal_iterator_7 : 0 })
            }
            if(data.sd_reveal_iterator_8 == 1){
              con.PlaySound("Assets/nhạc%20hiện%20số%20đáp%20án%20vòng%20(8%20đáp%20án).mp3", 3)
              update(ref(db), { sd_reveal_iterator_8 : 0 })
            }
            if(data.sd_reveal_ans == 1){
              con.PlaySound("Assets/nhạc%20mở%20đáp%20án%20đúng.mp3", 3)
              update(ref(db), { sd_reveal_ans : 0 })
            }
            if(data.sd_wrong == 1){
              con.PlaySound("Assets/nhạc%20đáp%20án%20sai.mp3", 3)
              update(ref(db), { sd_wrong : 0 })
            }
            if(data.sd_reveal_br_ans == 1){
              con.PlaySound("Assets/nhạc%20hiện%20đáp%20án%20vđb.mp3", 3)
              update(ref(db), { sd_reveal_br_ans : 0 })
            }
            if(data.sd_reveal_br_ans_score == 1){
              con.PlaySound("Assets/Family_Feud_2010_file_FF201020.mp3", 3)
              update(ref(db), { sd_reveal_br_ans_score : 0 })
            }
            if(data.sd_br_wrong == 1){
              con.PlaySound("Assets/Family_Feud_2010_file_FF201021.mp3", 3)
              update(ref(db), { sd_br_wrong : 0 })
            }
            if(data.sd_br_finished == 1){
              con.PlaySound("Assets/Family_Feud_2010_file_FF201023.mp3", 3)
              update(ref(db), { sd_br_finished : 0 })
            }     
          
            if(data.sd_timer_20s == 1){
              con.PlaySound("Assets/Family_Feud_2010_file_FF201010.mp3", 5)
              update(ref(db), { sd_timer_20s : 0 })
            }
            if(data.sd_timer_25s == 1){
              con.PlaySound("Assets/Family_Feud_2010_file_FF201011.mp3", 5)
              update(ref(db), { sd_timer_25s : 0 })
            }
          
            if(data.sd_music_1 == 1){
              con.PlaySound("Assets/y2mate.com%20-%20Cute%20Dog%20%20Cat%20Song.mp3", 1)
              update(ref(db), { sd_music_1 : 0 })
            }
            if(data.sd_music_2 == 1){
              con.PlaySound("Assets/utomp3.com%20-%20miaw%20miaw%20miaw%20miaw%20sound%20sad%20viral%20tiktok.mp3", 1)
              update(ref(db), { sd_music_2 : 0 })
            }
            if(data.sd_music_3 == 1){
              con.PlaySound("Assets/tuyệt%20đỉnh%20song%20ca.mp3", 1)
              update(ref(db), { sd_music_3 : 0 })
            }

            if(data.sd_stop_sounds == 1){
              con.StopAllSounds()
              update(ref(db), { sd_stop_sounds : 0 })
            }
        });

    }(window.CONTROLLER = window.CONTROLLER || {}));
});