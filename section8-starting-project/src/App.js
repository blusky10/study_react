import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import './index.css';


function App() {
  const [users, setUsers] = useState([]);

  const registerUserHandler = (user) =>{
    console.log(user);
    // setUsers((users) => {
    //   return [user, ...users];
    // });
  } 

  return (
    <div>
      <AddUser onAddUser={registerUserHandler}></AddUser>
      <ul >{users}   </ul>
    </div>
  );
}

export default App;
