import React from "react"
import "../App.css"

function SimpleTextArea({text, onChangeValue}) {
    const onChangeText = (event) => {
        onChangeValue(event.target.value);
    }
    return (
    <div className="SimpleTextArea">
        <input type="textarea" value={text} onChange={onChangeText} style={{height: 200}}/>
        <div className="TextLength">{text?.length??0}</div>
    </div>)
}

export default SimpleTextArea;