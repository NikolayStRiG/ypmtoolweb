import {useEffect, useState} from "react";
import * as React from "react";

function SelectInput({label, list, onChange, getKey, getName}) {

    const [init, setInit] = useState(false);
    const [value, setValue] = useState('');

    const body = list == null ? [] : list.map((item) => {
        const key = getKey != null ? getKey(item) : item.id;
        const name = getName != null ? getName(item) : item.name

        return (
            <option key={key} value={key}>{name}</option>
        );
    });

    useEffect(() => {
        if (body.length > 0 && !init) {
            const v = body[0].key;
            setValue(v);
            onChange(v);
            setInit(true);
        }
    });
    return (
        <div>
            <label>{label}:
                <select value={value}
                        onChange={event => {
                            setValue(event.target.value);
                            onChange(event.target.value);
                        }}>
                    {body}
                </select>
            </label>
        </div>
    );
}

export default SelectInput;
