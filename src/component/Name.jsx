import {useState} from "react";

export default function DisplayName(){

    const [first, setFirst] =useState("");
    const [second, setSecond] =useState("");
    const [showName, setShowName]=useState(false);

    const handlerFirstName=(e)=>{
        setFirst(e.target.value);        
    }

    const handlerSecondName=(e)=>{
        setSecond(e.target.value);        
    }

    const submitForm=(e)=>{
        e.preventDefault(); // to prevent default loading after submit button
        if(!first || !second){
            window.alert('Please fill out this field');
        }
        setShowName(true)
    }

    return(
        <div className="App">
        <h1>Full Name Display</h1>
        <form style={{display:"flex", flexDirection:"column"}}>
            <label >First Name:
                <input type="text" value={first} onChange={handlerFirstName} />
            </label>
            <label>Last Name:
                <input type="text" value={second} onChange={handlerSecondName} />
            </label>
            <button type="submit" style={{width:"100px", margin:"8px"}} onClick={submitForm}>submit</button>
            
        </form> 

        {showName && first && second && (<p>Full Name: {first} {second}</p>)}         
        
              
        </div>
    )
}