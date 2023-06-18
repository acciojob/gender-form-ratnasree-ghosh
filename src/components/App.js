
import React , {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [code, setCode] = useState("dress");
  return (
    <div>
      <h2>Select your gender:</h2>
        <input name="gender" id="male" type="radio" onChange={()=>setCode("shirt")}/>
        <label for="male">Male</label>
        <input name="gender"  id="female" type="radio" onChange={()=>setCode("dress")}/>
        <label for="female">Female</label>

        <h2>Select your {code} size:</h2>
        <select>
          <option  value="2">2</option>
          <option  value="4">4</option>
          <option value="6">6</option>
        </select>
    </div>
  )
}

export default App
