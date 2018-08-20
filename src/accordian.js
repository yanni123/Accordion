function loadtemp() {
    hide_show();
    other();
    //sections();  
    section_Jquery();

}

function hide_show() {

    var allPanels = $('.accordion > dd').hide();

    $('.accordion > dt > a').click(function () {
        allPanels.slideUp();
        $(this).parent().next().slideDown();
        return false;
    });

}

function other() {
    $("#part1").hide();
    $("#part2").hide();
    $("#part3").hide();
    $(".accordion2").css("margin-bottom","100px");
    $("#flip1").click(function () {
        $("#part1").slideToggle();
        //$("#part2").slideUp();
        // $("#part3").slideUp();
    });
    $("#flip2").click(function () {
        $("#part2").slideToggle();
        //$("#part3").slideUp();
        //$("#part1").slideUp();
    });
    $("#flip3").click(function () {
        $("#part3").slideToggle();
        //$("#part1").slideUp();
        //$("#part2").slideUp();
    });
}


function sections() {
    var acc = document.getElementsByClassName("accordion4");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}


function section_Jquery() {
    $("button").click(function () {
        //$(this).next().slideToggle();
        // this.classList.toggle("active");
        $(this).toggleClass("active");
        if ($(this).next().height() === 0) {
            $(this).next().css("max-height", "100px");
        } else {
            $(this).next().css("max-height", "0px");
        }

    });

}