
$.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    var craft = data['craft']
    $('#SpacePeople').html(number);


    data['people'].forEach(function (d) {

        if ((d['craft']) == 'ISS') {
            $('#astroNames').append('<div class="ISS">' + d['name'] + " - " + d['craft'] + '</div>');
    
        }
        else{
            $('#astroNames').append('<div class="container">' + d['name'] + " - " + d['craft'] + '</div>');
        }

         

    });


    
});
