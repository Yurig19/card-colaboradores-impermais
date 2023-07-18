import Collaborator from '../Collaborator'
import './Department.css'

const Department = (props) => {
    return (
        props.collaborators.length > 0 && <section className='department' style={{ backgroundColor: props.backgroundColor }}>
            <input onChange={event => props.changeColor(event.target.value, props.name)} value={props.cardColor} type='color' className='input-color' />
            <h3 style={{ borderColor: props.cardColor }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => {
                    return <Collaborator key={collaborator.nome} name={collaborator.nome} office={collaborator.cargo} image={collaborator.imagem} color={props.cardColor} toDelete={props.toDelete} />
                })}
            </div>
        </section>
    )
}

export default Department