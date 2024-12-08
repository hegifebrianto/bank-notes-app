import React from 'react'

function Input(attributes) {

    const changeHandler = (event) => {
        console.log(event.target.value);
        if (attributes.name === "title") {
            const currentText = event.target.value;
            attributes.onChange((oldText) =>
                currentText.length <= 50 ? currentText : oldText
            );
        } else {
            attributes.onChange(event.target.value);
        }
    };
    return (
        <div>
            {attributes.type === "textarea" ? (
                <textarea
                    {...attributes}
                    className="note-input__body margin-right-20"
                    value={attributes.value}
                    spellCheck={false}
                    onChange={changeHandler}
                />
            ) : (
                <input
                    {...attributes}
                    className="note-input__title margin-right-20"
                    value={attributes.value}
                    spellCheck={false}
                    onChange={changeHandler}
                />
            )}
        </div>
    )
}

export default Input
