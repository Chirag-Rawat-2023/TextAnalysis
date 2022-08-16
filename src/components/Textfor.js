import React ,{useState} from 'react'

export default function Textfor(props) {
    const handleUPclick=()=>{
        console.log("clicked") 
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showalert("converted to upperCase","success") 

    }
    const handleOnclick=()=>{
        console.log("clicked") 
        let newtext=text.toLowerCase()
        setText(newtext) 
        props.showalert("converted to lowerCase","success") 
    }
    const handleOnChange=(event)=>{
        console.log("hande clicked") 
        setText(event.target.value)
    }
    const [text,setText]=useState('enter text here') 

    return (
        <>
        <div className="container"  style={{color:props.mode==='light'?'black':'white'}} >
           
                      <h1>{props.heading}</h1>
            <div className="mb-3">
          
            <textarea className="form-control" value={text} onChange={handleOnChange}id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUPclick} >Convert To Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleOnclick} >Convert To LowerCase</button>
        </div>
        <div className="container my-3 " style={{color:props.mode==='light'?'black':'white'}}  >
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter somthing in text box"}</p>
        </div>
        </>
    )
}
