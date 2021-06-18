import React,{useState,useEffect} from 'react';
import axios from 'axios'
import UserList from './UserList'
import './App.css';


function App() {
  const [users,setUsers]=useState([])

  useEffect(() =>{
    fetchUsers();
  }, [])

  const fetchUsers=async()=>{
    const response=await axios('https://jsonplaceholder.typicode.com/users');
    setUsers(response.data)
  }

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App

