$(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:7777/get_equipes",
        success: function (data) {
            console.log(data);
            let html ='';
            $.each(data, function (i, d) { 
                html +='<li class="text-center">';
                html +=`<img src=${d.flag} alt="" srcset="" class="border">`;
                html +=`<b>${d.pays}</b></li>`;
                $('#list').html(html);
            });           
        }
    });
});