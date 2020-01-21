$(document) .ready(function(){
    $('.header') .height ($(window) .height());
})


$(function () {
    $("#schemaTable tbody tr").on('click','.reservering', function()
    {
        let thisElement = $(this);
        if (thisElement.hasClass('bg-success')) 
        {
            document.getElementById('id01').style.display='block';
            var ghettoTimeString = thisElement.attr("id");
            $("#tijdstipForm").val(`${ghettoTimeString.slice(0, 2)}:${ghettoTimeString.slice(2)}`);
            $("#kapperForm").val($("#keuze-kapper").val());
        }
    })

    $("#id01form").submit(function (obj) 
    {
        var tijdValue = $("#tijdstipForm").val();
        var kapperValue = $("#keuze-kapper").val();
        var datumValue = $("#TheDate").val();
        var kokerGeileString = `metadata ${tijdValue}*${kapperValue}*${datumValue}`;

        $("<input />").attr("type", "hidden")
        .attr("name", "datum")
        .attr("value",$("#TheDate").val()).appendTo(this);
        window.localStorage.setItem(kokerGeileString, "yes");
        alert("Uw reservering is geslaagd");
    });
});

$(document).ready(function() {

    $("#TheDate,#keuze-kapper").change(function() 
    {
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
  

  $(".reservering").each(function(i, obj) 
  {
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