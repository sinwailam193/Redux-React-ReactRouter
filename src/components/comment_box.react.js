import React, { Component } from 'react';
import { connect } from 'react-redux';
// grab all the action creators from this folder as actions
import * as actions from '../actions/new_comment.action';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: ""
    };
  }

  _handleChange = (event) => {
    const {target: {name, value}} = event;
    let obj = {};
    obj[name] = value;
    this.setState(obj);
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state.textarea);
    this.setState({
      textarea: ""
    });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit} className="comment-box">
        <h4>Add a Comment</h4>
        <textarea name="textarea" value={this.state.textarea} onChange={this._handleChange} />
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
