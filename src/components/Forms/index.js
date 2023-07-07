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

    return (
        <section className='forms'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextInput label='Nome' placeholder='Digite seu Nome' />
                <TextInput label='Cargo' placeholder='Digite seu Cargo' />
                <TextInput label='Imagem' placeholder='Informe a URL da Imagem' />
                <MenuDropDown label='Departamento' itens={departament} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Forms