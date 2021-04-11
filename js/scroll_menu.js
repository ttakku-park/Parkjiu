$(function(){/* $(document).ready(function){} */
   var $menu = $('.fir_bottom_wrap ul li');
        $contents = $('.click_contents');
        


    $menu.click(function(x){
        x.preventDefault();//a 링크 속성 삭제하기

        var idx = $(this).index();
        var section = $contents.eq(idx)//index 순서를 정해 메뉴클릭 시 각각 순서대로 이동
        
        var sectionDistance = section.offset().top;
        //console.log(sectionDistance); menu를 눌렀을때 이동하는 높이 
        //A.scrollTop() 스크롤양을 확인
        $('html').stop().animate({scrollTop:sectionDistance});
    }); 
});


