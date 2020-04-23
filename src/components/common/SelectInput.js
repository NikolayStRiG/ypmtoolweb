import {useState} from "react";
import * as React from "react";

function SelectInput(props) {
    const [value, setValue] = useState('');

    const list = props.list == null ? [] : props.list.map((item) => {
        return (
            <option key={item.id} value={item.id}>{item.name}</option>
        );
    });

    return (
        <div>
            <label>{props.label}:
                <select value={value}
                        onChange={event => {
                            setValue(event.target.value);
                            props.onChange(event.target.value)
                        }}>
                    {list}
                </select>
            </label>
        </div>
    );
}

export default SelectInput;
