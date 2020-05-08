$(document).ready(function(){






    $("button").on("click", function () {
        var hero = $(this).attr("super-hero");
        var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=6a1KH6qz487fGIEahh9ecflbMI9e3ePZ&q="
            + hero + "&limit=10&offset=0&rating=PG-13&lang=en";



        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;
                console.log (response.data)

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var heroImages = $("<img>");
                    heroImages.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(p);
                    gifDiv.prepend(heroImages);

                    $("#gif-images").prepend(gifDiv);
                }
            });
    });


});











// var searchURL = "http://api.giphy.com/v1/gifs/search?api_key=6a1KH6qz487fGIEahh9ecflbMI9e3ePZ&q=&limit=25&offset=0&rating=G&lang=en";
      
// var queryURL = "http://api.giphy.com/v1/gifs/trending?api_key=6a1KH6qz487fGIEahh9ecflbMI9e3ePZ&limit=25&rating=G";

// var randoURL = "http://api.giphy.com/v1/gifs/random?api_key=6a1KH6qz487fGIEahh9ecflbMI9e3ePZ&tag=&rating=G";

// https://vignette.wikia.nocookie.net/marvel_dc/images/0/02/Justice_League_of_America_Vol_2_1_Full.jpg/revision/latest?cb=20171010185905
