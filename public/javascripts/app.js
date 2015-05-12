/**
 * Created by brianaamodt on 5/12/15.
 */

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

    function display(res){
        var entry;
        var date;
        var button = "<button class='remove'>Remove</button>";

        for (var i = 0; i < res.length; i ++){
            entry = res[i];
            var date = $.trim(entry.date_completed).substring(0,10);
            $('.entries').append("<li id=" + entry["_id"] + ">Name: " + entry["name"] + " Score: " + entry["score"] + " Date Completed: " + date + button + "</li>" );
        }
    }
});