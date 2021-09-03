$(function(){ 
   
    $(window).scroll(function(){
        $('.title').each(function(){
        //each 반복문 => 선택한 요소를 찾아서 반복실행

        //스크롤의 수직 값 $(window).scrollTop()
        //보여지는 화면의 높이값 $(window).height();
        
        //문서의 높이값 $('.title).height();
        //브라우저 시작점에서부터 문서가 떨어진 높이값 $('.title).offset().top;

        var scroll_window = $(window).scrollTop() + $(window).height();
        //var scroll_window = 스크롤의 수직 값 + 보여지는 화면의 높이값
        var scroll_object = $('.title').offset().top + $('.title').height();
        //var scroll_object = 시작지점에서부터 문서가 떨어진 높이값 + 문서가 가지고 있는 높이값

            console.log(scroll_window);
            console.log(scroll_object);
            if(scroll_window >= scroll_object) {
                $(this).animate({'opacity':'1'}, 800);
                $('.title h3').animate({'left':'0'}, 1000);
                $('.title dl:nth-child(1)').animate({'opacity':'1'}, 800);
                $('.title dl:nth-child(2)').delay(500).animate({'opacity':'1'}), 800;
                $('.title dl:nth-child(3)').delay(1000).animate({'opacity':'1'}), 800;
                $('.title dl:nth-child(4)').delay(1500).animate({'opacity':'1'}), 800;
                $('.title dl:last-child').delay(2000).animate({'opacity':'1'}), 800;
            }

       });
    });
});

//  $(function(){
//      $(window).scroll(function(){
//          $('.title').each(function(){
//             var scroll_window=$(window).scrollTop() + $(window).height();
//             var scroll_object = $('.title').offset().top + $('.title').height();
//             console.log(scroll_window);
//             console.log(scroll_object);
//             if(scroll_window >= scroll_object){
//                 $(this).animate({'opacity':'1'}, 800);
//                 $('.title h3').animate({'left':'0'}, 1000);
//                 $('.title dl:nth-child(1)').animate({'opacity':'1'}, 800);
//                 $('.title dl:nth-child(2)').delay(500).animate({'opacity':'1'}, 800);
//                 $('.title dl:nth-child(3)').delay(1000).animate({'opacity':'1'}, 800);
//                 $('.title dl:nth-child(4)').delay(1500).animate({'opacity':'1'}, 800);
//                 $('.title dl:nth-child(5)').delay(2000).animate({'opacity':'1'}, 800);
//             }
//          });
//     });
//  });