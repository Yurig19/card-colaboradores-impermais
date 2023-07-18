import { useState } from "react"
import Banner from "./components/Banner"
import Forms from "./components/Forms"
import Department from "./components/Department"
import Footer from "./components/Footer"

function App() {

  const [departments, setDepartments] = useState([
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
  ])

  const initialCollaborators = [
    {
      nome: 'Yuri Gonçalves',
      cargo: 'Auxiliar Administrativo',
      imagem: 'https://github.com/Yurig19.png',
      departamento: departments[1].name
    }
  ]

  const [collaborators, setCollaborators] = useState(initialCollaborators)

  const addCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  const deleteCollaborator = () => {
    console.log('Deletando colaborador')
  }

  const changeColor = (color, name) => {
    setDepartments(departments.map(department => {
      if (department.name === name) {
        department.cardColor = color
      }
      return department
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Forms departments={departments.map(department => department.name)} registered={collaborator => { addCollaborator(collaborator) }} />
      {departments.map(department =>
        <Department
          changeColor={changeColor}
          key={department.name}
          name={department.name}
          cardColor={department.cardColor}
          backgroundColor={department.backgroundColor}
          collaborators={collaborators.filter(collaborator => collaborator.departamento === department.name)}
          toDelete={deleteCollaborator}
        />
      )}
      <Footer />
    </div>
  );
}

export default App
