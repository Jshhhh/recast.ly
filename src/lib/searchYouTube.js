var searchYouTube = (query, callback) => {
  $.ajax({
    method:'GET',
    url:'https://www.googleapis.com/youtube/v3/search',
    contentType: "application/jason; charset=utf-8",
    dataType: "json",
    data: {'key': window.YOUTUBE_API_KEY,'q': `${query}`, 'maxResults' : '5', 'videoEmbeddable' : 'true', 'type' : 'video', 'part': 'snippet'},
    success: function(data) {
      console.log(data);
      return data;
    }  
  });
};

window.searchYouTube = searchYouTube;
