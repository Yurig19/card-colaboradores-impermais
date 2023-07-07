import { useState } from "react"
import Banner from "./components/Banner"
import Forms from "./components/Forms"
import Department from "./components/Department"

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
      <Department name='Produção' />
      <Department name='Administração' />
      <Department name='Recursos Humanos' />
    </div>
  );
}

export default App
