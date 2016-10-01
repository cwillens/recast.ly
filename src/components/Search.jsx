var Search = (props) => (
  <div className="search-bar form-inline">
    <input onKeyPress={() => { props.handleSearch(document.getElementsByClassName('form-control')[0].value); }} onKeyUp={() => { props.handleSearch(document.getElementsByClassName('form-control')[0].value); }} className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
