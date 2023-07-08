import './Department.css'

const Department = (props) => {
    return (
        <section className='department' style={{ backgroundColor: props.backgroundColor }}>
            <h3 style={{ borderColor: props.cardColor }}>{props.name}</h3>
        </section>
    )
}

export default Department