import React from "react";
import Information from "../Components/Information";
import Dynamic_content from "../Components/Dynamic_content";
import Chat_box from "../Components/Chat_box";

const Dashboard = () => {
  return (
    <div className="chat-container row">
      <div className="col-md-1">
        <Information />
      </div>
      <div className="col-md-3">
        <Dynamic_content />
      </div>
      <div className="col-md-8">
        <Chat_box />
      </div>
    </div>
  );
};

export default Dashboard;
