$(document) .ready(function(){
    $('.header') .height ($(window) .height());
})


$(function () {
    $("#schemaTable tbody tr").on('click','.reservering', function()
    {
        let thisElement = $(this);
        if (thisElement.hasClass('bg-success')) {
            document.getElementById('id01').style.display='block';
        }
    })
});

// $(function () {
//     $("#id01").on('click','.resbtn', function()
//     {
//         document.getElementById('id01').style.display='none';
//         let clickid = document.getElementById('id01').dataset.clickedelementid.toString();
//         alert(clickid);
//         let thisElement = document.getElementById(clickid);
//         alert(thisElement.id);
//         if (thisElement.hasClass('bg-success')) {  
//             thisElement.addClass('bg-danger');
//             thisElement.removeClass('bg-success');
//             thisElement.children('h2').text('GERESERVEERD');
//         }
//     })
// });

//$(function () {
    //$("#schemaTable tbody tr").on('click', '.reservering', function()
     //{
        //let thisElement = $(this);
        //if (thisElement.hasClass('bg-danger')) {
            //thisElement.removeClass('bg-danger');
            //thisElement.addClass('bg-success');
            //thisElement.children('h2').text('BESCHIKBAAR');
        //}
        //else {
            //document.getElementById('id01').style.display='block'
            //thisElement.addClass('bg-danger');
            //thisElement.removeClass('bg-success');
            //thisElement.children('h2').text('GERESERVEERD');
        //}
    //})
//});

$(document).ready(function() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;       
    $("#theDate").attr("value", today);
});