var movie = [
    {
        title: "Kiss Kiss, Bang Bang",
        haveSeen: true,
        rating: 5
    },
    {
        title: "Fantastic Four",
        haveSeen: false,
        rating: 0
    },
    {
        title: "The Martian",
        haveSeen: true,
        rating: 5
    },
    {
        title: "Les Miserables",
        haveSeen: false,
        rating: 4
    }
];

movie.forEach(function(movie){
    var result = "You have ";
    if(movie.haveSeen){
        result += "seen ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result)
});