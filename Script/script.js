$(document).ready(function(){
    var scale=false;
    $("#selected").on('click',function(){
        
        function change_list(){
            $(".menu").toggle();
            if (scale==false){
                $(".arrow").css("transform","scale(1, -1)");
                scale=true;
            }
            else {
                $(".arrow").css("transform","scale(1, 1)");
                scale=false;
            }
        }
        change_list();

    });
    var li = $(".menu ul").children("li");
        li.on('click',function(){
            $("li").removeClass("selected_li");
            $(this).toggleClass("selected_li");
            $("#selected span").text(" ");
            var text = $(".selected_li").text();
            $("#selected span").text(text);
        });
    });



