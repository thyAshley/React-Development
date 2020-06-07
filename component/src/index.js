import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="John"
          text="First Post"
          date="Yesterday at 2:45PM"
          imgAvatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        {" "}
        <CommentDetail
          author="Jack"
          text="Second Post"
          date="Yesterday at 6:00AM"
          imgAvatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Josh"
          text="Next Post"
          date="Today at 4:45PM"
          imgAvatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
