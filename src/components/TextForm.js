import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }

    const handleLoClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");

    }
    const handleClearClick=()=>{
        // console.log("Uppercase was clicked"+text);
        setText('');
        props.showAlert("Cleared the text successfully","success");

    }

    const handleCopy=()=>{
        console.log('I am a copy');
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to ClipBoard!","success");

    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);//regex used here
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces!","success");


    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
const [text,setText]=useState('');
// setText("Bunny changed");
// text="dhcgduiv"; wrong gives error

  return (
    <>
    <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
     <h1 >{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length)} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text :"Enter something in the text box above to preview"}</p>
    </div>
    </>
  )
}


