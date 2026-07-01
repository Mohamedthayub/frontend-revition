import {useState} from "react";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Card from "./components/Card";
import "./App.css"
const App = () => {
  const [x, setx] = useState(0);
  const [name, showName] = useState("");

  const btnClick = () => {
    console.log("Button Clicked");
    setx(x  + 1);
    console.log(x);
  }
  const names = ["Thayub","Riyaz","Sajid","Shahul","Fazil"];
  return (
    <div>
      <Navbar/> 
      <Test name = {name}show = {showName}/> // here we pass the props
      <p>This is how we should render the list</p>
      {
        names.map((item,index) => (
          <h1 key={index}>{item}</h1>
        ))
      }
      <p>This is X value {x}</p>
      <button onClick={btnClick}>Click</button>
      <Card name = {"thayub"} about = {"i am software engineer "} />
    </div>
  )
}
export default App;