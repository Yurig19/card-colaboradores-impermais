import Button from '../Button'
import MenuDropDown from '../MenuDropDown'
import TextInput from '../TextInput'
import './Forms.css'

const Forms = () => {

    const departament = [
        'Produção',
        'Administração',
        'Recursos Humanos'
    ]

    const submit = (event) => {
        event.preventDefault()
        console.log('salvou')
    }

    return (
        <section className='forms'>
            <form onSubmit={submit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextInput required={true} label='Nome' placeholder='Digite seu Nome' />
                <TextInput required={true} label='Cargo' placeholder='Digite seu Cargo' />
                <TextInput label='Imagem' placeholder='Informe a URL da Imagem' />
                <MenuDropDown required={true} label='Departamento' itens={departament} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Forms