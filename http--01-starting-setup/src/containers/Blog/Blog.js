import React, { Component, Suspense } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import "./Blog.css";
// import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";
import NewPost from "./NewPost/NewPost";
const Posts = React.lazy(() => import("./Posts/Posts"));

class Blog extends Component {
  state = {
    auth: true,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}
          <Route
            path="/posts"
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <Posts />
              </Suspense>
            )}
          />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
