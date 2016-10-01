var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleSearch={props.handleSearch} />
    </div>
    <div className="col-md-6 col-md-offset-3" >
      <div className="search-bar form-inline">
        <button onClick={props.handleAutoplay} className="btn hidden-sm-down">Autoplay</button>
      </div>
    </div>
  </nav>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
