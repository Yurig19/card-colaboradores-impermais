import Collaborator from '../Collaborator'
import './Department.css'
import hexToRgba from 'hex-to-rgba'

const Department = (props) => {
    return (
        props.collaborators.length > 0 && <section className='department' style={{ backgroundImage: 'url(/img/fundo.png)', backgroundColor: hexToRgba(props.color, '0.6') }}>
            <input onChange={event => props.changeColor(event.target.value, props.name)} value={props.color} type='color' className='input-color' />
            <h3 style={{ borderColor: props.color }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => {
                    return <Collaborator key={collaborator.nome} name={collaborator.nome} office={collaborator.cargo} image={collaborator.imagem} color={props.color} toDelete={props.toDelete} />
                })}
            </div>
        </section>
    )
}

export default Department