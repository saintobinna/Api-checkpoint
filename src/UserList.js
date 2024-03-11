import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";
// import useState and useEffect
// set the useState

// add the axios inside the useEffect

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  useEffect(() => {
    axios
      // .get is used to add the url
      .get("https://jsonplaceholder.typicode.com/users")
      // .then is used to get a response from the server or backend or end point
      .then(function (response) {
        // console.log(response.data);
        setListOfUser(response.data);
      })
      // .catch is used to fecth or detect error from the end-point
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(listOfUser);
  return (
    // map each user using ul
    <ul>
      {listOfUser.map((eachUser) => {
        return (
          <li>
            {eachUser.name} {eachUser.email} {eachUser.phone}
            <hr></hr>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
