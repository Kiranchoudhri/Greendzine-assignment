import React from "react";
import "./index.css";

const ListItem = ({ userDetails }) => {
  const { id, firstName, avatar } = userDetails;
  return (
    <li className="userCard">
      <div className="userImageWrapper">
        <p className="userId">{id}</p>
        <img src={avatar} alt="userImage" className="userImage" />
      </div>

      <h1 className="userName">{firstName}</h1>
    </li>
  );
};

export default ListItem;
