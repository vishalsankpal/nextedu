// navbar toggle
$(document).ready(function () {
    $("#menu").click(function () {
        $("#ham").toggle();
        $(".left-side-panel").animate({
            height: 'toggle'
        });
    })
})
// accordian
var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
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
// preloder
$(document).ready(function () {
    $(window).on('load', function () {
        $(".preloder").hide();
    })
})