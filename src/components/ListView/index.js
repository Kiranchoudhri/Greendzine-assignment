import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ListItem from "../ListItem";
import "./index.css";

const ListView = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedUsers, setSearchedUsers] = useState(users);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        const { data } = response;
        const requiredData = data.data;
        const requiredFormat = requiredData.map((data) => ({
          id: data.id,
          email: data.email,
          firstName: data.first_name,
          lastName: data.last_name,
          avatar: data.avatar
        }));

        setUsers(requiredFormat);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    searchResults();
  }, [searchText]);

  const updateSearch = (e) => {
    setSearchText(e.target.value);
  };

  const searchResults = () => {
    const filteredUsers = users.filter((value) =>
      value.firstName.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchedUsers(filteredUsers);
  };

  const userList = searchText.length ? searchedUsers : users;

  return (
    <div className="listViewContainer">
      <h1 className="title">WEBAPP DEVELOPMENT</h1>
      <input
        className="searchField"
        type="search"
        placeholder="Search user"
        onChange={updateSearch}
      />
      {userList.length ? (
        <ul className="userContainer">
          {userList.map((eachUser) => (
            <ListItem key={eachUser.id} userDetails={eachUser} />
          ))}
        </ul>
      ) : (
        <p className="emptySearch">No results found</p>
      )}
    </div>
  );
};

export default ListView;
