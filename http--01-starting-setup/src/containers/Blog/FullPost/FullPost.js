import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    post: null,
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    if (id) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + id)
        .then((response) => {
          this.setState({ post: response.data });
        });
    }
  }
  onDeleteHandler = (id) => {
    console.log(id);
    axios.delete("/posts/" + id).then((response) => {
      console.log(response);
    });
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
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
                this.onDeleteHandler(this.props.match.params.id);
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
