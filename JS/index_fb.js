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

            if (data.var_holder != null) {
                if (data.var_holder == 0) {
                    $('#main-qs-holder').css('opacity', 0);
                    $('#bonus-round-1-holder').css('opacity', 0);
                    $('#bonus-round-2-holder').css('opacity', 0);
                }
                else if (data.var_holder == 1) {
                    $('#main-qs-holder').css('opacity', 0);
                    $('#bonus-round-1-holder').css('opacity', 0);
                    $('#bonus-round-2-holder').css('opacity', 0);
                    $('#main-qs-holder').css('opacity', 1);
                }
                else if (data.var_holder == 2) {
                    $('#main-qs-holder').css('opacity', 0);
                    $('#bonus-round-1-holder').css('opacity', 0);
                    $('#bonus-round-2-holder').css('opacity', 0);
                    $('#bonus-round-1-holder').css('opacity', 1);
                }
                else if (data.var_holder == 3) {
                    $('#main-qs-holder').css('opacity', 0);
                    $('#bonus-round-1-holder').css('opacity', 0);
                    $('#bonus-round-2-holder').css('opacity', 0);
                    $('#bonus-round-2-holder').css('opacity', 1);
                }
            }

            if (data.timec != null) {
                $('#timer-holder').css('opacity', data.timec);
            }

            if (data.ticout != null) {
                $('#titles-holder').css('opacity', data.ticout);
            }

            if (data.scout != null) {
                $('#score-holder').css('opacity', data.scout);
            }

            if (data.score_backdrop != null) {
                $('.score-backdrop').css('opacity', data.score_backdrop)
            }

            $('.question-score div svg text, .br-total-score svg text').html(data.total_score);
            $('#team-1-score div svg text').html(data.team_1_score);
            $('#team-2-score div svg text').html(data.team_2_score);

            for (var i = 1; i <= 8; i++) {
                $('#ans-' + i + ' .ans-text svg text').html(eval('data.q_' + data.round + '_a_t_' + i))
                $('#ans-' + i + ' .ans-score svg text').html(eval('data.q_' + data.round + '_a_s_' + i))
                con.revealanswer(i, eval('data.ans_' + i + '_open'))
            }

            if (data.reveal_ans == 0) {
                $('.ans-iterator').css('opacity', 0)
            }
            if (data.reveal_ans == 1) {
                var num_ans = eval('data.q_' + data.round + '_num_a');
                for (var i = 1; i <= num_ans; i++) {
                    $('#ans-' + i + ' .ans-front .ans-iterator').css('opacity', 1)
                }
                for (var j = num_ans + 1; j <= 8; j++) {
                    $('#ans-' + j + ' .ans-front .ans-iterator').css('opacity', 0)
                }
            }
            if (data.reveal_ans == 11) {
                var num_ans = eval('data.q_' + data.round + '_num_a');
                con.revealiterator(num_ans)
            }

            if (data.cross_1 == 1) {
                con.crosspop(1);
                update(ref(db), { cross_1: 0 })
            }

            if (data.cross_2 == 1) {
                con.crosspop(2);
                update(ref(db), { cross_2: 0 })
            }

            if (data.cross_3 == 1) {
                con.crosspop(3);
                update(ref(db), { cross_3: 0 })
            }

            if (data.reload == 1) {
                location.reload(true)
                update(ref(db), { reload: 0 })
            }

            if (data.timer != null) {
                $('.timer svg text').html(data.timer)
            }

            for (var i = 1; i <= 10; i++) {
                if(eval('data.br_ans_player_input_' + i) != null){
                  $('#br-ans-' + i + ' .br-ans-text svg text').html(eval('data.br_ans_player_input_' + i).toUpperCase());
                }
                $('#br-ans-' + i + ' .br-ans-score svg text').html(eval('data.br_ans_player_score_input_' + i));
                con.revealbrans(i, eval('data.br_ans_' + i + '_open'))
            }

            if(data.camera_url_input != null && data.change_camera_url == 1){
                con.loadcamera(data.camera_url_input)
                update(ref(db), { change_camera_url : 0 })
            }
          
            if(data.scale_all_text == 1){
              con.scaletext()
              update(ref(db), { scale_all_text : 0 })
            }

            $('#scoreboard-1 .scoreboard-team-name svg text').html(data.team_1_name)
            $('#scoreboard-1 .scoreboard-team-score svg text').html(data.team_1_score)
            $('#scoreboard-2 .scoreboard-team-name svg text').html(data.team_2_name)
            $('#scoreboard-2 .scoreboard-team-score svg text').html(data.team_2_score)
          
            con.scaletext()
          
            if(data.sd_play_vid == 1) {
              $('#video-holder').css('opacity',1)
              $('#video-1').trigger('play');
                $('#video-1')[0].playbackRate = 1;
              $('#video-1').on('ended',function(){
                $('#video-holder').css('opacity',0)
                $('#video-1').trigger('pause');
                $('#video-1')[0].currentTime = 0;
              });
              update(ref(db), { sd_play_vid : 0 })
            }
          
            if(data.sd_play_vid_2 == 1) {
              $('#video-holder').css('opacity',1)
              $('#video-1').trigger('play');
                $('#video-1')[0].playbackRate = 5;
              $('#video-1').on('ended',function(){
                $('#video-holder').css('opacity',0)
                $('#video-1').trigger('pause');
                $('#video-1')[0].currentTime = 0;
              });
              update(ref(db), { sd_play_vid_2 : 0 })
            }
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