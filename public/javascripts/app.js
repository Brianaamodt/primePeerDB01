/**
 * Created by brianaamodt on 5/12/15.
 */

var el;

$(document).ready(function(){

    function getData() {
        $.ajax({
            dataType: 'json',
            url: '/assignments',
            success: function (data) {
                $('.entries').empty();
                display(data);;
            }
        });
    }

    getData();

    $(".entries").on("click", ".remove", function(){
        var id = $(this).parent().attr('id');
        $.ajax({
            url: '/assignments/' + id,
            type: 'DELETE',
            success: function(data){
                console.log(data);
                getData();
            },
            error: function(xhr){
                console.log(xhr);
            }
        });
    });

    $('.entries').on('click', '.update', function(){
        console.log('hi');
        $('.revise').removeClass('hidden');
        el = $(this).parent();
        var id = $(el).attr('id');
        $('.name').val(el.find('.userName').attr('id'));
        $('.score').val(el.find('.userScore').attr('id'));
        $('.date').val(el.find('.userDate').attr('id'));
        });

    $('.submit').click(function(){
        var dataObject = {'name': $('.name').val(), 'score': $('.score').val(), 'date_completed': $('.date').val()};
        var id = (el).attr('id');
        $.ajax({
            type: 'PUT',
            url: '/assignments/' +id,
            data: JSON.stringify(dataObject),
            contentType: 'application/json',
            success: function (data) {
                console.log(data);
                getData();
            }
        });

    })

    function display(res){
        var entry;
        var name;
        var score;
        var date;
        var id;
        var button = "<button class='remove'>Remove</button>";
        var update = "<button class='update'>Update</button>";
        for (var i = 0; i < res.length; i ++){
            entry = res[i];
            name = entry["name"];
            score = entry["score"];
            id= entry["_id"];
            date = $.trim(entry.date_completed).substring(0,10);
            $('.entries').append("<li id='" + id + "'><p class='userName' id='" + name + "'>Name: " + name + "</p><p class='userScore' id='" + score + "'> Score: " + score + "</p><p class='userDate' id='" + date + "'> Date Completed: " + date + "</p>" + button + update + "</li>");
        }
    }
});