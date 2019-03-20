$(document).ready(function () {

//Replace image url in HTML
  $('img').each(function() {
    var img = $(this);
    var imgsrc = img.attr("src");
    var src = img.attr("src", imgsrc.replace("i.imgur.com", "imgur.kageurufu.net"));
    console.log("Resimler değiştirildi."); 
  });

//EXAMPLE
//https://i.imgur.com/mjARxOe.jpg
//https://imgur.kageurufu.net/mjARxOe.jpg
//https://proxy.duckduckgo.com/iu/?u=http://i.imgur.com/mjARxOe.jpg


    if (/^https?:\/\/proxy\.duckduckgo\.com\/iu\/\?u=https?:\/\/.*\.?imgur.com\/?.*$/.test(window.location.href)) {
        // Replace relative image sources and link destinations with full paths
        // when imgur page loads from Duckduckgo proxy
            $("img").each(function () {
                var img = $(this);
                var src = img.attr("src");
                if (src) {
                    if (src.match("^/") && !src.match("^//")) {
                        img.attr("src", "https://imgur.com" + src);
                    }
                }
            });

        $("a").each(function () {
            var a = $(this);
            var href = a.attr("href");
            if (href) {
                if (href.match("^/") && !href.match("^//")) {
                    a.attr("href", "https://imgur.com" + href);
                }
            }
        });

        // Replace logo bg
        var logo = $("#topbar .logo-icon");
        if (logo) {
            var logoBg = logo.css("background");
            if (logoBg) {
                logo.css("background", logoBg.replace("//proxy.duckduckgo.com", "//imgur.com"));
            }
        }



        // Modify imgur font
        $("head").append('<style>@font-face{font-family:imgur;src:url(https://imgur.com/include/fonts/imgur.eot?6);src:url(https://imgur.com/include/fonts/imgur.eot?6#iefix) format("embedded-opentype"),url(https://imgur.com/include/fonts/imgur.woff?6) format("woff"),url(https://imgur.com/include/fonts/imgur.ttf?6) format("truetype"),url(https://imgur.com/include/fonts/imgur.svg?6#imgur) format("svg");font-weight:400;font-style:normal}</style>');
    }
});