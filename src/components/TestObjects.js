import { useState, useRef, useEffect } from "react";
import "./style.css"

const TestObjects = () => {
  //State to delete the current person added to the list
  const [deleted, deletePerson] = useState(null);
  const[newPerson, setNewPerson] = useState('');
  //Declare our ref, in this case the user input will be our ref
  const textInput = useRef();
  //When the button is clicked we will use state to set our input
  //you must use .current to access ref values... We can then access our ref through "textInput"
  const handleClick = () => {
    setNewPerson(textInput.current.value);
  }

  const handleStrike = e =>{
    if(e.target.style.textDecoration) {
      e.target.style.removeProperty('text-decoration');
    }else{
      e.target.style.setProperty('text-decoration','line-through');
    }
  }
  
  const remove = (newPerson) => {
    newPerson = setNewPerson(null);
  }

  useEffect(() => {
    localStorage.setItem(newPerson, String(newPerson))
    console.log(newPerson)
  }, [newPerson])
  const users = [
    { id: 1, name: "Garrett", Diet: "vegetarian" },
    { id: 2, name: "Stella", Diet: "vegan" },
    { id: 3, name: "Lori", Diet: "Paleo" },
    { id: 4, name: "Dexter", Diet: "Hills Science Diet"}
  ];

  return (
    <div className="user">
      {users.map((user) => (
        <p key={user.id}>
          {user.name}
          {":"} {user.Diet} <input type='checkbox'/>
        </p>
      ))}

      <input className="userInput" type="text" ref={textInput}></input>
      <button className="myButtons" onClick={handleClick}>Create New Entry</button>
      <button className="myButtons" onClick={remove}>Remove Person</button>
      <p onClick={handleStrike} className="userText">{newPerson}</p>
    </div>
  );
};

export default TestObjects;
