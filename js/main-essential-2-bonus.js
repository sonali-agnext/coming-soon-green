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
    2. Canvas
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function() {
    "use strict";

    $("#fullpage , #fp-nav , #menu-access , .social-footer").css("opacity", "0");
    $("#fullpage").css("top", "100vh");
    setTimeout(function() {
        $("#loading").fadeOut();
    }, 1000);
    setTimeout(function() {
        $("#fullpage").css({
            top: "0",
            opacity: "1"
        });
    }, 1500);
    setTimeout(function() {
        $("#fp-nav , #menu-access , .social-footer").css("opacity", "1");
    }, 2210);
});

$(document).ready(function() {
    "use strict";

    /* ------------------------------------- */
    /* 2. Canvas ........................... */
    /* ------------------------------------- */

    function l() {
        var d = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        d.setAttribute("width", window.innerWidth);
        d.setAttribute("height", window.innerHeight);
        document.querySelector("#bg").appendChild(d);
        var a = (window.innerWidth + window.innerHeight) / 20;
        c = Math.ceil(window.innerWidth / a) + 1;
        m = Math.ceil(window.innerHeight / a) + 1;
        g = Math.ceil(window.innerWidth / (c - 1));
        h = Math.ceil(window.innerHeight / (m - 1));
        b = [];
        for (a = 0; a < m; a++) {
            for (var f = 0; f < c; f++) {
                b.push({
                    x: g * f,
                    y: h * a,
                    originX: g * f,
                    originY: h * a
                });
            }
        }
        x();
        for (a = 0; a < b.length; a++) {
            if (b[a].originX != g * (c - 1) && b[a].originY != h * (m - 1)) {
                for (var f = b[a].x, p = b[a].y, q = b[a + 1].x, r = b[a + 1].y, t = b[a + c].x, u = b[a + c].y, v = b[a + c + 1].x, w = b[a + c + 1].y, l = Math.floor(2 * Math.random()), k = 0; 2 > k; k++) {
                    var e = document.createElementNS(d.namespaceURI, "polygon");
                    0 == l ? 0 == k ? (e.point1 = a, e.point2 = a + c, e.point3 = a + c + 1, e.setAttribute("points", f + "," + p + " " + t + "," + u + " " + v + "," + w)) : 1 == k && (e.point1 = a, e.point2 = a + 1, e.point3 = a + c + 1, e.setAttribute("points", f + "," + p + " " + q + "," + r + " " + v + "," + w)) : 1 == l && (0 == k ? (e.point1 = a, e.point2 = a + c, e.point3 = a + 1, e.setAttribute("points", f + "," + p + " " + t + "," + u + " " + q + "," + r)) : 1 == k && (e.point1 = a + c, e.point2 =
                        a + 1, e.point3 = a + c + 1, e.setAttribute("points", t + "," + u + " " + q + "," + r + " " + v + "," + w)));
                    e.setAttribute("fill", "rgba(0,0,0," + Math.random() / 3 + ")");
                    var n = document.createElementNS("http://www.w3.org/2000/svg", "animate");
                    n.setAttribute("fill", "freeze");
                    n.setAttribute("attributeName", "points");
                    n.setAttribute("dur", "10000ms");
                    n.setAttribute("calcMode", "linear");
                    e.appendChild(n);
                    d.appendChild(e);
                }
            }
        }
        y();
    }

    function x() {
        for (var d = 0; d < b.length; d++) {
            0 != b[d].originX && b[d].originX != g * (c - 1) && (b[d].x = b[d].originX + Math.random() * g - g / 2), 0 != b[d].originY && b[d].originY != h * (m - 1) && (b[d].y = b[d].originY + Math.random() * h - h / 2);
        }
    }

    function y() {
        x();
        for (var d = 0; d < document.querySelector("#bg svg").childNodes.length; d++) {
            var a = document.querySelector("#bg svg").childNodes[d],
                c = a.childNodes[0];
            c.getAttribute("to") && c.setAttribute("from", c.getAttribute("to"));
            c.setAttribute("to", b[a.point1].x + "," + b[a.point1].y + " " + b[a.point2].x + "," + b[a.point2].y + " " + b[a.point3].x + "," + b[a.point3].y);
            c.beginElement();
        }
        z = setTimeout(function() {
            y();
        }, 10000);
    }
    var z, c, m, g, h, b;
    window.onload = l;
    window.onresize = function() {
        document.querySelector("#bg svg").remove();
        clearTimeout(z);
        l();
    };
});