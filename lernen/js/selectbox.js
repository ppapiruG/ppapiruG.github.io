$(document).ready(function(){
    //옵션이 10개 이상일 경우 - input placeholder 
    $('.select2-container--default .selection').on('click',function(e){
        e.stopPropagation();
        e.preventDefault();
        $('.select2-search').append('<span class="placeholder_txt">옵션을 검색해주세요.</span>');
        $(".select2-search").on("propertychange change keyup paste input", function(event){
            var inputVal = $(this).find('.placeholder_txt');
            if(!!event.target.value) {
               inputVal.hide();
           } else { 
               inputVal.show();
           }
        });
    });
});