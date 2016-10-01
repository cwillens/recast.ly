var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      videoEmbeddable: 'true',
      type: 'video'
    },
    success: function (data) {
      callback(data.items);
    },
    error: function (data) {
      console.error('Failed to get data', data);
    }
  });
};

window.searchYouTube = searchYouTube;
