// IEのスムーズスクロールを切る
if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
    $('body').on("mousewheel", function (event) {
        event.preventDefault();
        var wd = event.wheelDelta;
        var csp = window.pageYOffset;
        window.scrollTo(0, csp - wd);
    });
}

$(document).ready(function() {
    // Fixed Header
    $('.nav').clingify();

    // Navigation
    $('nav').meanmenu({
        meanMenuClose: "X", // クローズボタン
        meanMenuCloseSize: "18px", // クローズボタンのフォントサイズ
        meanMenuOpen: "<span /><span /><span />", // 通常ボタン
        meanRevealPosition: "right", // 表示位置
        meanRevealColour: "",
        meanScreenWidth: "1023", // 表示させるウィンドウサイズ(ブレイクポイント)
    });

    // ScrollToTop
    var pagetop = $('.pagetop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });

    // SmoothScroll
    $('a[href^=#]').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href= $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
            // スムーススクロール
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
        });
});