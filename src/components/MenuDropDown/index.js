import './MenuDropDown.css'

const MenuDropDown = (props) => {
    return (
        <div className='menu__drop-down'>
            <label>{props.label}</label>
            <select onChange={event => props.toChange(event.target.value)} required={props.required} value={props.value} >{props.itens.map(item => <option key={item}>{item}</option>)}</select>
        </div>
    )
}

export default MenuDropDown