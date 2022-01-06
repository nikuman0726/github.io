



window.addEventListener('DOMContentLoaded', function(){
  /** jQueryの処理 */


    var url = $(location).attr('href');
if(url == 'http://localhost:3000/'){
    $('#icon').click(function(){
    $('#mene1').fadeIn(400); 
    $('body').css('background-color','rgba(0,0,0,0.7');
    $('a').click(function(){
        $('#mene1').fadeOut(400);
        $('body').css('background-color','rgba(0,0,0,0');
    });
 });   
    $('.fa-times').click(function(){
    $('#mene1').fadeOut(400);  
    $('body').css('background-color','rgba(0,0,0,0');

});
}else if(url == 'http://localhost:3000/link1'){
    $('#icon').click(function(){
        $('#mene2').fadeIn(400);
        $('body').css('background-color','rgba(0,0,0,0.7');
        $('a').click(function(){
            $('#mene2').fadeOut(400);
            $('body').css('background-color','rgba(0,0,0,0');
        });
     });
        $('.fa-times').click(function(){
            $('#mene2').fadeOut(400);  
            $('body').css('background-color','rgba(0,0,0,0');
    });
}else if(url == 'http://localhost:3000/link2'){
    $('#icon').click(function(){
        $('#mene3').fadeIn(400);
        $('body').css('background-color','rgba(0,0,0,0.7');
        $('a').click(function(){
            $('#mene3').fadeOut(400);
            $('body').css('background-color','rgba(0,0,0,0');
        });
    });
        $('.fa-times').click(function(){
            $('#mene3').fadeOut(400);  
            $('body').css('background-color','rgba(0,0,0,0');
        
    });
}
//クリックしたらスライドダウン
$(function(){
    $('a[href^=#]').click(function() {
    var speed = 500; // スクロール速度(ミリ秒)
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html').animate({scrollTop:position-80}, speed, 'swing');
    return false;
    });
    });

    



//mene　クリックしたらめにゅーのidを取得してそれに応じたメニューを表示させる。
});
