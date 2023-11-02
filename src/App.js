import './App.css';
import {useState} from "react";
import Keypad from './keypad';

function App() {

  const [userinput,Setuserinput] = useState("")

 function Result(value)
 {

  Setuserinput(userinput + value)

 }
  function Functionality(value)
  {
    const output=eval(userinput)
    Setuserinput(output)


  
}

function Clear()
{
  Setuserinput("");

}

function del()
{
  Setuserinput(userinput.slice(0,-1));

}


  return (
    <div className="caliculator">
      <h1>CALICULATOR</h1>
<div className="inputdiv">
<input className="userinput" value={userinput} type="text" />
</div>
<div>
<Keypad Result={Result} Clear={Clear} Functionality={Functionality} del={del}/>
</div>
    </div>


  )
}

export default App;