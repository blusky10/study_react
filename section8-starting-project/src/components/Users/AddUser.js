import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState(0);

  const usernameInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setUsername(event.target.value);
    }
  };

  const ageInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setAge(event.target.value);
    }
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    props.onAddUser({ enteredUsername, enteredAge });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameInputChangeHandler}
        ></input>
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" onChange={ageInputChangeHandler}></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
