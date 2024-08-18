import React,{useState} from 'react'


const Regester = () => {
    const [name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

// onclick full name
    const OnChageFullName =(event)=>{
        setFullName(event.target.value);
        // console.log(e.target.value);
    };

// onclick email

    const OnChageEmail =(event)=>{
        setEmail(event.target.value);
        // console.log(e.target.value);
    };

// onclick password

    const OnChagePassword =(event)=>{
        setPassword(event.target.value);
        // console.log(e.target.value);
    };

// for submit Selection
const OnSubmit = (event) => {
    event.preventDefault();
    console.log(name,email,password);
}

  return (
    <div>
        <h2>Regester From</h2>
        <from OnSubmit={OnSubmit}>
            <div>
                <input onChange={OnChageFullName} placeholder='Full Name'type='text' value={name}/>
            </div>
            <div>
                <input onChange={OnChageEmail} placeholder='Email'type='email'value={email}/>
            </div>
            <div>
                <input onChange={OnChagePassword} placeholder='password'type='Password'value={password}/>
            </div>
            <div>
                <button>Submit</button>
            </div>

        </from>
    </div>
  )
}

export default Regester