import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [listofuser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <ul>
      {listofuser.map((eachUser, index) => (
        <li>{eachUser.phone}</li>
      ))}
    </ul>
  );
};

export default UserList;
