import './Department.css'

const Department = (props) => {
    return (
        <section className='department'>
            <h3>{props.name}</h3>
        </section>
    )
}

export default Department