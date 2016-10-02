var searchYouTubeComments = (options, currentVideoId, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/commentThreads',
    type: 'GET',
    data: {
      part: 'snippet, replies',
      maxResults: options.max,
      videoId: currentVideoId,
      key: options.key
    },
    success: function (data) {
      callback(data.items);
    },
    error: function (data) {
      console.error('Failed to get data', data);
    }
  });
};

window.searchYouTubeComments = searchYouTubeComments;