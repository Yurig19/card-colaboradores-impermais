import Collaborator from '../Collaborator'
import './Department.css'

const Department = (props) => {
    return (
        <section className='department' style={{ backgroundColor: props.backgroundColor }}>
            <h3 style={{ borderColor: props.cardColor }}>{props.name}</h3>
            <Collaborator />
        </section>
    )
}

export default Department