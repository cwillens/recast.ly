var CommentsListEntry = (props) => {
  if (props.comment.id !== undefined) {
    return (
      <div className="comments-list-entry">
        <h5>{props.comment.snippet.topLevelComment.snippet.authorDisplayName}</h5>
        <p>{props.comment.snippet.topLevelComment.snippet.textDisplay}</p>
      </div>
    );
  } else {
    return (
      <div className="comments-list-entry"></div> 
    );
  }
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
CommentsListEntry.propTypes = {
  comments: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.CommentsListEntry = CommentsListEntry;
