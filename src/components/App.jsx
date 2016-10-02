class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: {},
      videoList: [],
      commentsList: [],
      options: {
        key: window.YOUTUBE_API_KEY,
        query: '3-Year-Old Completely Covers Baby Brother with Peanut Butter',
        max: 10
      },
      currentVideoId: '',
      changed: true,
      autoplay: 0
    };
  }

  componentDidMount() {
    this.props.searchYouTube(this.state.options, data => {   
      this.setState({
        videoList: data,
        currentVideo: data[0],
        currentVideoId: data[0].id.videoId
      });
    });
    this.props.searchYouTubeComments(this.state.options, this.state.currentVideoId, data => {   
      this.setState({
        commentsList: data
      });
    });
    window.setInterval(() => {
      if (this.state.changed) {
        this.setState({
          changed: false
        });
        this.props.searchYouTube(this.state.options, data => {   
          this.setState({
            videoList: data,
            currentVideo: data[0],
            currentVideoId: data[0].id.videoId
          });
        });
      }
    }, 500);
  }

  handleClick(video) {
    this.setState({
      currentVideo: video,
      currentVideoId: video.id.videoId
    });
  }

  handleSearch(input) {
    if (input !== undefined) {
      this.setState({
        changed: true,
        options: { 
          key: window.YOUTUBE_API_KEY,
          query: input,
          max: 10
        }
      });
    }
  }

  handleAutoplay() {
    this.setState({
      autoplay: this.state.autoplay ? 0 : 1
    });
  }

  render() {
    return (
      <div>
        <Nav handleSearch = {this.handleSearch.bind(this)} handleAutoplay = {this.handleAutoplay.bind(this)}/>
        <div className='col-md-7'>
          <VideoPlayer video = {this.state.currentVideo} autoplay = {this.state.autoplay}/>
          <CommentsList comments = {this.state.commentsList} />
        </div>
        <div className='col-md-5'>
          <VideoList videos = {this.state.videoList} handleClick = {this.handleClick.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
