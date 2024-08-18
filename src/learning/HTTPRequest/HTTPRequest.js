import React,{useEffect,useState } from 'react'
import axios from 'axios';

const HTTPRequest = () =>{
  const apiUrl="https://jsonplaceholder.typicode.com/posts";


  useEffect(() => {
    const fatchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
      }
      catch(error){
        console.error(error);
      }
    }
    fatchData();
  },[])
  return (
    <div>
        <h1>Macking HTTP Request using useEffict</h1>
    </div>
  ) 
}

export default HTTPRequest