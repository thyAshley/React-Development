import React, { Component } from "react";
// import axios from 'axios';
import axios from "../../axios";
import { Route } from "react-router-dom";
import Posts from "./Posts/Posts";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <Posts />} />
      </div>
    );
  }
}

export default Blog;
