$(document) .ready(function(){
    $('.header') .height ($(window) .height());
})


$(function () {
    $("#schemaTable tbody tr").on('click','.reservering', function()
    {
        let thisElement = $(this);
        if (thisElement.hasClass('bg-success')) {
            document.getElementById('id01').style.display='block';
            var ghettoTimeString = thisElement.attr("id");
            $("#tijdstipForm").val(`${ghettoTimeString.slice(0, 2)}:${ghettoTimeString.slice(2)}`);
            $("#kapperForm").val($("#keuze-kapper").val());
        }
    })

    $("#id01form").submit(function (obj) {
        var tijdValue = $("#tijdstipForm").val();
        var kapperValue = $("#keuze-kapper").val();
        var datumValue = $("#TheDate").val();
        var kokerGeileString = `metadata ${tijdValue}*${kapperValue}*${datumValue}`;

        $("<input />").attr("type", "hidden")
        .attr("name", "datum")
        .attr("value",$("#TheDate").val()).appendTo(this);
        window.localStorage.setItem(kokerGeileString, "yes");
    });
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

    $("#TheDate,#keuze-kapper").change(function() {
        $(".reservering").each(function(i, obj) {
            var ghettoTimeString = $(this).attr("id");
            var realTime = `${ghettoTimeString.slice(0, 2)}:${ghettoTimeString.slice(2)}`;
            var kapperValue = $("#keuze-kapper").val();
            var datumValue = $("#TheDate").val();
            var kokerGeileString = `metadata ${realTime}*${kapperValue}*${datumValue}`;
            var localItem = window.localStorage.getItem(kokerGeileString);
            if(localItem !== null) {
                $(this).addClass('bg-danger');
                $(this).removeClass('bg-success');
                $(this).children('h2').text('GERESERVEERD');
            }
            else {
                $(this).removeClass('bg-danger');
                $(this).addClass('bg-success');
                $(this).children('h2').text('BESCHIKBAAR');
            }
          });
    });
  /*  var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;     */  
  //  $("#theDate").attr("value", today);

  $(".reservering").each(function(i, obj) {
    var ghettoTimeString = $(this).attr("id");
    var realTime = `${ghettoTimeString.slice(0, 2)}:${ghettoTimeString.slice(2)}`;
    var kapperValue = $("#keuze-kapper").val();
    var datumValue = $("#TheDate").val();
    var kokerGeileString = `metadata ${realTime}*${kapperValue}*${datumValue}`;
    var localItem = window.localStorage.getItem(kokerGeileString);
    if(localItem !== null) {
        $(this).addClass('bg-danger');
        $(this).removeClass('bg-success');
        $(this).children('h2').text('GERESERVEERD');
    }
  });
});