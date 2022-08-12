import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import './index.css';


function App() {
  const [userList, setUserList] = useState([]);

  const registerUserHandler = (newUser) =>{
    setUserList((prevUserList) => {
      return [newUser, ...prevUserList];
    });
  } 

  return (
    <div>
      <AddUser onAddUser={registerUserHandler}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
