import Collaborator from '../Collaborator'
import './Department.css'

const Department = (props) => {
    return (
        props.collaborators.length > 0 && <section className='department' style={{ backgroundColor: props.backgroundColor }}>
            <h3 style={{ borderColor: props.cardColor }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => {
                    console.log(<Collaborator key={collaborator.nome} name={collaborator.nome} office={collaborator.cargo} image={collaborator.imagem} color={props.cardColor} delete={props.toDelete} />)
                    return <Collaborator key={collaborator.nome} name={collaborator.nome} office={collaborator.cargo} image={collaborator.imagem} color={props.cardColor} delete={props.toDelete} />
                })}
            </div>
        </section>
    )
}

export default Department