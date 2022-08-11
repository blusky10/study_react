import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState(0);

  const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    // props.onAddUser({ enteredUsername, enteredAge });

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      return ;
    }

    if (+enteredAge < 1){
      return ;
    }

    console.log(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const onClickEvent = (event) => {};

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        ></input>
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
        <Button type="submit" onClick={onClickEvent}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
