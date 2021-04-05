import './input.css'


function Input({onKeyPress, onChange, value}) {

    const textValue = value.text

    return (
        <div className="input">
            <div className="input__container">
                <input onChange={onChange} onKeyPress={onKeyPress} value={textValue} type="text"
                       className="input__text"/>
            </div>
        </div>
    );
}

export default Input;