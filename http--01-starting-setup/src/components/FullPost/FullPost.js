import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    post: null,
  };
  componentDidUpdate() {
    if (this.props.id) {
      if (!this.state.post || this.state.post.id !== this.props.id) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then((response) => {
            this.setState({ post: response.data });
          });
      }
    }
  }
  onDeleteHandler = (id) => {
    console.log(id);
    axios
      .delete("https://my-json-server.typicode.com/typicode/demo/posts/" + id)
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.post) {
      post = (
        <div className="FullPost">
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.body}</p>
          <div className="Edit">
            <button
              onClick={() => {
                this.onDeleteHandler(this.props.id);
              }}
              className="Delete"
            >
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
