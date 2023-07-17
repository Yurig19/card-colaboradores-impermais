import { useState } from 'react'
import Button from '../Button'
import MenuDropDown from '../MenuDropDown'
import TextInput from '../TextInput'
import './Forms.css'

const Forms = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [departamento, setDepartamento] = useState('')

    const submit = (event) => {
        event.preventDefault()
        props.registered({
            nome,
            cargo,
            imagem,
            departamento
        })

        setNome('')
        setCargo('')
        setImagem('')
        setDepartamento('')
    }

    return (
        <section className='forms'>
            <form onSubmit={submit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextInput
                    required={true}
                    label='Nome'
                    placeholder='Digite seu Nome'
                    value={nome}
                    toChange={value => setNome(value)}
                />
                <TextInput
                    required={true}
                    label='Cargo'
                    placeholder='Digite seu Cargo'
                    value={cargo}
                    toChange={value => setCargo(value)}
                />
                <TextInput
                    label='Imagem'
                    placeholder='Informe a URL da Imagem'
                    value={imagem}
                    toChange={value => setImagem(value)}
                />
                <MenuDropDown
                    required={true}
                    label='Departamento'
                    itens={props.departments}
                    value={departamento}
                    toChange={value => setDepartamento(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Forms