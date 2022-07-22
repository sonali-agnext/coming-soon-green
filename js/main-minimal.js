/*
* iSOON - Ideal Coming Soon Template
* Release Date: April 2017
* Last Update: April 2017
* Author: Madeon08
* Copyright (C) 2017 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Countdown
    3. Responsive
    4. Newsletter
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function() {
    "use strict";

    $("#right-block-top , #right-block-bottom , #fullpage , #fp-nav , #menu-access , .social-footer").css("opacity", "0");
    $("#fullpage").css("top", "100vh");
    setTimeout(function() {
        $("#loading").fadeOut();
    }, 1000);
    setTimeout(function() {
        $("#fullpage").css({
            top: "0",
            opacity: "1"
        });
        $("#right-block-top").addClass("animated-quick fadeInUp").css("opacity", "1");
    }, 1500);
    setTimeout(function() {
        $("#right-block-bottom").addClass("animated-quick fadeInUp").css("opacity", "1");
    }, 1600);
    setTimeout(function() {
        $("#fp-nav , #menu-access , .social-footer").css("opacity", "1");
        $("#right-block-bottom , #right-block-top").removeClass("animated-middle fadeInUp");
    }, 2210);
});

$(document).ready(function() {
    "use strict";

    /* ------------------------------------- */
    /* 2. Countdown ........................ */
    /* ------------------------------------- */

                                  // Year/Month/Day Hour:Minute:Second
    $("#getting-started").countdown("2017/10/24 15:30:30", function(a) {
        $(this).html(a.strftime('%D Days <br> <span class="time">%Hh %Mm %Ss</span> <span class="text">... Before the launch</span>'));
    });

    /* ------------------------------------- */
    /* 3. Responsive ....................... */
    /* ------------------------------------- */

    1025 > $(window).width() && ($("#right-block").insertAfter("#section0"), $("a").on("click", function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
        return !1;
    }));
    
    if( !/Android/i.test(navigator.userAgent) ) {
        $(window).resize(function() {
            1025 > $(window).width() ? ($("#right-block").insertAfter("#section0"), $("a#anchor").attr("href", "#right-block")) : ($("#right-block").insertAfter("#fullpage"), $("a#anchor").attr("href", "#2"));
        });
    }

    /* ------------------------------------- */
    /* 4. Newsletter ....................... */
    /* ------------------------------------- */
    
    $("#notifyMe").notifyMe();
});