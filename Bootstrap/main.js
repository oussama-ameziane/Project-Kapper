$(document) .ready(function(){
    $('.header') .height ($(window) .height());
})


$(function () {
    $("#schemaTable tbody tr").on('click', '.reservering', function()
     {
        let thisElement = $(this);
        if (thisElement.hasClass('bg-danger')) {
            thisElement.removeClass('bg-danger');
            thisElement.addClass('bg-success');
            thisElement.children('h2').text('BESCHIKBAAR');
        }
        else {
            thisElement.addClass('bg-danger');
            thisElement.removeClass('bg-success');
            thisElement.children('h2').text('GERESERVEERD');
        }
    })
});