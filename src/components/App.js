
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [Name, setName] = useState("");
  return (
    <div className = "app-container">
        {/* Do not remove the main div */}
    <input 
    type = "text"
    placeholder = "Enter your name"
    value = {name}
    onChange = {(e) => setName(e.target.value)}
   className = "input-field" 
   />
     {name && <h1 calssname = "greeting">Hello, {name}!<h1/>
    </div>
  );
};

export default App;
