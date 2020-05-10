$(document).ready(function(){

    let supers = [
        "Spiderman",
        "Hulk",
        "Thanos",
        "Iron Man",
        "Joker",
        "Captain America",
        "Thor",
        "Wolverine",
        "Superman",
        "Juggernaut",
        "Rogue",
        "Batman",
        "Green Lantern",
        "Galactus",
        "Wonder Woman",
        "Doctor Octopus",
        "Black Widow",
        "Storm Xmen",
        "Deadpool",
        "Magneto",
        "Jean Grey Phoenix",
        "Aquaman",
        "Cyclops",
        "Doctor Doom",
        "Flash",
        "Gambit",
        "Venom",
        "Mystique",
    
    ];

  

    displayBut();
    
    function displayBut() {
        
        
        $("#button-area").empty();      // trying to remove buttons repeating
       
        
        for (let i = 0; i < supers.length; i++) {
           
            let buts = $("<button>");
            
            buts.addClass("heroButton");
            
            buts.attr("id", supers[i]);
            buts.attr("value", supers[i]);
            
            buts.text(supers[i]);
            
            $("#button-area").append(buts);
        }//End For Loop
    }//End display Function

    $("button").click (function () {                        // $('#button').hide(); -----------????????????
        var hero = $(this).attr("id");
        console.log(hero)
        
        searchGifs(hero)
        
        
    })

    function searchGifs(term) {
        var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=6a1KH6qz487fGIEahh9ecflbMI9e3ePZ&q="
            + term + "&limit=10&offset=0&rating=PG-13&lang=en";
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
                let heroImages = $("<img>");

                // Sets animated
                let active = results[i].images.fixed_width.url;
                // Sets still
                let still = results[i].images.fixed_width_still.url;
    
                heroImages.attr({ "src": still, "class": "gif img-responsive", "state": "still", "dataStill": still, "dataAnimate": active });
                gifDiv.attr("class", "col-lg-3");
                gifDiv.append(p, heroImages);
                $("#gif-images").prepend(gifDiv);
                
               
            } //ends for loop
        
        }); //ends then func
        
    }; //ends SearchGifs func

    $("body").on("click", ".gif", function () {

        var state = $(this).attr("state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("dataAnimate"));
            $(this).attr("state", "animate");
        } else {
            $(this).attr("src", $(this).attr("dataStill"));
            $(this).attr("state", "still");
        }  //end If/else
    });  //End gif click

}); //end ready func


