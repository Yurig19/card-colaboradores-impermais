import './MenuDropDown.css'

const MenuDropDown = (props) => {
    return (
        <div className='menu__drop-down'>
            <label>{props.label}</label>
            <select>{props.itens.map(item => <option key={item}>{item}</option>)}</select>
        </div>
    )
}

export default MenuDropDown