import './TextInput.css'

const TextInput = (props) => {

    const toListen = (event) => {
        props.toChange(event.target.value)
    }

    return (
        <div className='text-input'>
            <label>{props.label}</label>
            <input value={props.value} onChange={toListen} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextInput