//Console.log out elements in JSON file
$(document).ready(function() {

    $.getJSON('author.json', function(authors) {

        for (var i = 0; i <= authors.video.length-1; i++) {
            console.log('Video #'+(i+1));
            console.log('id: '+ authors.video[i]['id']);
            console.log('name: '+ authors.video[i]['name']);
            console.log('url: '+ authors.video[i]['url']);

            for (var j = 0;j <=  authors.video[i]['author'].data.length -1; j++) {
                console.log('--- Author #'+(j+1));
                console.log('--- Name of the author: '+ authors.video[i]['author'].data[j].name_author);
                console.log('--- Url of the author: '+ authors.video[i]['author'].data[j].url);
                console.log('--- Type of the author: '+ authors.video[i]['author'].data[j].type);
            } // looping through the authors of a video
        } // looping through the videos
    }); // getJSON
}); // Document ready
