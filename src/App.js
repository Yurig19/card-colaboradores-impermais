import { useState } from "react"
import Banner from "./components/Banner"
import Forms from "./components/Forms"
import Department from "./components/Department"
import Footer from "./components/Footer"

function App() {

  const departments = [
    {
      name: 'Produção',
      cardColor: '#57C278',
      backgroundColor: '#D9F7E9'
    },
    {
      name: 'Administração',
      cardColor: '#82CFFA',
      backgroundColor: '#E8F8FF'
    },
    {
      name: 'Recursos Humanos',
      cardColor: '#A6D157',
      backgroundColor: '#F0F8E2'
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const addCollaborator = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Forms departments={departments.map(department => department.name)} registred={collaborator => { addCollaborator(collaborator) }} />

      {departments.map(department => <Department
        key={department.name}
        name={department.name}
        cardColor={department.cardColor}
        backgroundColor={department.backgroundColor}
        collaborators={collaborators.filter(collaborator => collaborator.departamento === department.name)}
      />)}
      <Footer />

    </div>
  );
}

export default App
