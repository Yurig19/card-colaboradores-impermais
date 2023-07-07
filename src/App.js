import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Forms";

function App() {

  const [colaborators, setColaborators] = useState([])
  const addColaborator = (colaborator) => {
    console.log(colaborator)
    setColaborators([...colaborators, colaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Forms registred={colaborator => { addColaborator(colaborator) }} />
    </div>
  );
}

export default App;
