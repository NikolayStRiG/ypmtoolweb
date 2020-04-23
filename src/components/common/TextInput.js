import {useState} from "react";
import * as React from "react";

function TextInput(props) {
    const [value, setValue] = useState('');

    const inputType = props.type != null ? props.type : "text";
    return (
        <div>
            <label>{props.label}:
                <input type={inputType}
                       value={value}
                       onChange={event => {
                           setValue(event.target.value);
                           props.onChange(event.target.value)
                       }}
                />
            </label>
        </div>
    );
}

export default TextInput;
