import React, {useState} from 'react'


function Forms() {
    const[input, setInput]= useState('')
    const[input2,setInput2] = useState('')
    let ButtonClick = () => {
        // alert ("Name is " + input + " and Phone number is " + input2)
        document.getElementById('display').innerHTML='Name is '+ input 
    };
    const handleSubmit =(event) => {
        event.preventDefault();
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
            <label>Phone No:</label>
            <input type= "text" value={input2} onChange={(event) => setInput2(event.target.value)}/>
            <button onClick={ButtonClick} style={{color:"red"}}>SUBMIT</button>
            <div id="display">

            </div>
        </form>
    </div>
  )
  }

export default Forms