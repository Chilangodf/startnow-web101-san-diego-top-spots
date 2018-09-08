$(document).ready(function() {
// write your code here

    $.getJSON("./data.json", function(results) {
        console.log(results);

        var maps = 'http://www.google.com/maps?q=';

        results.forEach(function(result) {
            $('#pagetable').append('<tr><td>' + result.name + '</td><td>' + result.description + '</td><td><a href="' + maps + result.location + '"><button type="button" class="btn btn-info">open in google maps</button></a></td></tr>');
        })
    });
});
