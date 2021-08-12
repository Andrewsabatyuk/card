import React, { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./components/SocialCard";

function App() {

  const [users, setUsers] = useState([]);
  const [cards, setCards] = useState([]);


  useEffect(()=>{
    async function fetchUsers(){
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/");
        const responseJSON = await response.json();
        // console.log(responseJSON);
        setUsers(responseJSON)
      } catch {
        console.error('Error');
      }
    }
    fetchUsers();

    async function fetchPosts(){
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const responseJSON = await response.json();
        // console.log(responseJSON);
        setCards(responseJSON)
      } catch {
        console.error('Error');
      }
    }
    fetchPosts();
   
  }, [])

  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }

  const cardList = users.map((item) => {
    const userPosts = cards ? cards.filter((post) => post.userId === item.id) : null;
    return { ...item, posts: [ ...userPosts ]}
  });

  cardList.sort(dynamicSort("id"));

  return (
    <div className="App">
     
     {cardList && cardList.map((user) =>
      <SocialCard key={user.id} user={user}/>
     )}
     
    </div>
  );
}

export default App;