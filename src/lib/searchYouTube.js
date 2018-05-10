var searchYouTube = (params, callback) => {
  $.ajax({
    method:'GET',
    url:'https://www.googleapis.com/youtube/v3/search',
    contentType: "application/jason; charset=utf-8",
    dataType: "json",
    data: {
            'key': `${params.key}`,
            'q': `${params.query}`,
            'maxResults' : `${params.max}`,
            'videoEmbeddable' : 'true',
            'type' : 'video',
            'part': 'snippet'
          },
    success: function(data) {
      callback({data: data.items});

    }
  })
};


window.searchYouTube = searchYouTube;
