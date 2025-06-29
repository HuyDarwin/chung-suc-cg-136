/*
=== TEMPLATE for window code ===

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {
        
    }(window.CONTROLLER = window.CONTROLLER || {}));

});

*/

import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {
      
        // sound
      
        var at = '';
        var at2 = '';
        var at3 = '';
        var at4 = '';
        var at5 = '';

        con.PlaySound = function(filename, n){
          if (n == 1){
            try{			
              at =  new Audio(filename);
              at.play();
              at.volume = 0.5;
            }
            catch(e){
              // do nothing
            }				
          }
          else if (n == 2){
            try{			
              at2 =  new Audio(filename);
              at2.play();
              at2.volume = 0.5;
            }
            catch(e){
              // do nothing
            }				
          }
          else if (n == 3){
            try{			
              at3 =  new Audio(filename);
              at3.play();
              at3.volume = 0.5;
            }
            catch(e){
              // do nothing
            }				
          }
          else if (n == 4){
            try{			
              at4 =  new Audio(filename);
              at4.play();
              at4.volume = 0.4;
            }
            catch(e){
              // do nothing
            }				
          }
          else if (n == 5){
            try{			
              at5 =  new Audio(filename);
              at5.play();
              at5.volume = 0.2;
            }
            catch(e){
              // do nothing
            }				
          }
        };

        con.StopAllSounds = function(a,b) {
          try {
            if(a == 1 && at != ''){
              at.pause();
              if(b != 1){
                at.currentTime = 0;
                at = '';
              }
            }
            if(a == 2 && at2 != ''){
              at2.pause();
              if(b != 1){
                at2.currentTime = 0;
                at2 = '';
              }
            }
            if(a == 3 && at3 != ''){
              at3.pause();
              if(b != 1){
                at3.currentTime = 0;
                at3 = '';
              }
            }
            if(a == 4 && at4 != ''){
              at4.pause();
              if(b != 1){
                at4.currentTime = 0;
                at4 = '';
              }
            }
            if(a == 5 && at5 != ''){
              at5.pause();
              if(b != 1){
                at5.currentTime = 0;
                at5 = '';
              }
            }
            if(a != 1 && a != 2 && a != 3 && a != 4 && a != 5){
              if(at != ''){
                at.pause();
                if(b != 1){
                  at.currentTime = 0;
                  at = '';
                }
              }
              if(at2 != ''){
                at2.pause();
                if(b != 1){
                  at2.currentTime = 0;
                  at2 = '';
                }
              }
              if(at3 != ''){
                at3.pause();
                if(b != 1){
                  at3.currentTime = 0;
                  at3 = '';
                }
              }
              if(at4 != ''){
                at4.pause();
                if(b != 1){
                  at4.currentTime = 0;
                  at4 = '';
                }
              }
              if(at5 != ''){
                at5.pause();
                if(b != 1){
                  at5.currentTime = 0;
                  at5 = '';
                }
              }
            }
          }
          catch(e){
            // swallow
          }
        };	
      
        // variables

        var squareblink = 0;
        var timer = 0;

        const db=getDatabase();

        // functions

        con.resetquestion = function () {
            $('.br-ans-text').css('opacity', '0');
            $('.br-ans-score').css('opacity', '0');
            $('.red-square').css('opacity', '0');
        }

        con.scl = function (id) {
            var svg = $(id + ' svg');
            var text = $(id + ' svg text');
            var width = text[0].getComputedTextLength();
            text.attr('textLength', Math.min(svg.width(), width));
        }

        con.scaletext = function () {
            for (var i = 1; i <= 8; i++) {
                con.scl('#ans-' + i + ' .ans-text');
                //con.scl('#ans-' + i + ' .ans-score');
            }

            for (var i = 1; i <= 10; i++) {
                con.scl('#br-ans-' + i + ' .br-ans-text');
               // con.scl('#br-ans-' + i + ' .br-ans-score');
            }

            con.scl('.br-total-text');
            //con.scl('.br-total-score');
            //con.scl('.question-score div');
            //con.scl('.timer');
            //con.scl('#team-1-score div');
            //con.scl('#team-2-score div');
            con.scl('#scoreboard-1 .scoreboard-team-name');
            //con.scl('#scoreboard-1 .scoreboard-team-score');
            con.scl('#scoreboard-2 .scoreboard-team-name');
            //con.scl('#scoreboard-2 .scoreboard-team-score');
        }

        con.updatequestion = function (num) {
            con.resetquestion();
            $('.ans-iterator').css('opacity', 0);
            for (var i = 1; i <= num; i++) {
                $('#ans-' + i + ' .ans-iterator').css('opacity', 1);
            }
            $('.br-total-text svg text').html('TỔNG');
            con.scaletext();
        }

        con.revealiterator = function (num){
            function loop(i,m){
                //$('#ans-' + i + ' .ans-front .ans-iterator').css('filter')
                //$('#ans-' + i + ' .ans-front .ans-iterator').animate({"opacity":"1"}, 125, 'linear');
                $('#ans-' + i + ' .ans-iterator').addClass('reveal-iterator-key')
                $('#ans-' + i + ' .ans-iterator').css('opacity','1')
                setTimeout(function(){
                }, 125)
                if(i+1<=m){
                    setTimeout(function(){
                        loop(i+1,m);
                    }, 125)
                }
            }
            if(1 <= num && num <= 8){
                loop(1,num);
                setTimeout(function(){
                    $('.ans-iterator').removeClass('reveal-iterator-key')
                }, 1000)
            }
        }

        con.revealanswer = function (x, y) {
            var front = $('#ans-' + x + ' .ans-front');
            var back = $('#ans-' + x + ' .ans-back');
            if (y == 10) {
                front.addClass('reveal-ans-key');
                setTimeout(function(){
                    front.removeClass('reveal-ans-key')
                }, 1000)
                back.addClass('hide-ans-key');
                setTimeout(function(){
                    back.removeClass('hide-ans-key')
                }, 1000)
            }
            else if (y == 0) {
                front.css({'transform': 'rotateX(0deg)', 'opacity': '1'})
                back.css({'transform': 'rotateX(180deg)', 'opacity': '0'})
            }
            else if(y == 11){
                front.addClass('hide-ans-key');
                setTimeout(function(){
                    front.removeClass('hide-ans-key')
                }, 1000)
                back.addClass('reveal-ans-key');
                setTimeout(function(){
                    back.removeClass('reveal-ans-key')
                }, 1000)
            }
            else if(y == 1){
                back.css({'transform': 'rotateX(0deg)', 'opacity': '1'})
                front.css({'transform': 'rotateX(180deg)', 'opacity': '0'})
            }
            //con.scl('.question-score div');
        }

        con.crosspop = function(x){
            $('#rc-' + x).css('opacity',1);
            $('#rc-' + x + ' img').addClass('cross-pop-key');
            setTimeout(function(){
                $('#rc-' + x + ' img').removeClass('cross-pop-key');
            }, 1000)
            setTimeout(function(){
                $('#rc-' + x).css('opacity',0);
            }, 2500)
        }

        con.redsquareblink = function (which,status=0) {
            var square = $('#red-square-' + which);
            var timeout;
            function loop() {
                if (squareblink == 1) {
                    square.css('opacity', '1');
                    setTimeout(function () {
                        square.css('opacity', '0');
                        setTimeout(loop, 500);
                    }, 500);
                }
            }
            if (status == 1) {
                squareblink = 1;
                loop();
            }
            else {
                squareblink = 0;
                clearTimeout(timeout);
            }
        }

        con.revealbrans = function (num, step) {
            var square = $('#red-square-' + num);
            var text = $('#br-ans-' + num + ' .br-ans-text');
            var score = $('#br-ans-' + num + ' .br-ans-score');

            if (step == 11) {
                square.css({ 'opacity': '1', 'left': '0%' });
                con.redsquareblink(num,1);
                square.animate({ 'left': '87.75%' }, 450, 'linear');
                text.addClass('wipe-text-key')
                setTimeout(function(){
                    text.removeClass('wipe-text-key')
                }, 350)
            }
            else if (step == 1) {
                square.css({ 'opacity': '1', 'left': '87.75%' });
                con.redsquareblink(num,1);
                text.css({ 'opacity': '1', 'width': '83.5%' });
            }
            else if (step == 2) {
                con.redsquareblink(num,0);
                square.css({ 'opacity': '0', 'left': '0%' });
                text.css({ 'opacity': '1', 'width': '83.5%' });
                score.css('opacity', '1');
            }
            else if(step == 0){
                text.css('opacity','0')
                score.css('opacity','0')
            }
        }

        con.loadcamera = function (url) {
            if (url != '') {
                var iframe = $('.camera iframe');
                iframe.attr('src', url);
                iframe.attr('allow', "document-domain;encrypted-media;sync-xhr;usb;web-share;cross-origin-isolated;accelerometer;midi;geolocation;autoplay;camera;microphone;fullscreen;picture-in-picture;display-capture;gyroscope;");
            }
            else{
                var iframe = $('.camera iframe');
                iframe.attr('src', '');
            }
        }

        var timeout_loop;
        con.playtimer = function(time,start=0){
            timer = time;
            update(ref(db), { timer : time })
            if(start==1){
                function loop(){
                    if(timer > 0){
                        timer--;
                        update(ref(db), { timer : timer })
                        timeout_loop = setTimeout(loop, 1000);
                    }
                }
                timeout_loop = setTimeout(loop, 1000);
            }
        }
      
        con.pausetimer = function(){
          clearTimeout(timeout_loop)
        }

    }(window.CONTROLLER = window.CONTROLLER || {}));
});
