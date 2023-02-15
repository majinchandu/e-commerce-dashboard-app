import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            navigate('/');
        }
    })
    

    async function collectData() {
        console.warn(name,email,password);
        console.log("chandu");
        let resultt = await fetch('http://localhost:5000/register',{ // connecting frontend with backend
            method:'POST',// method post hai
            body: JSON.stringify({name,email,password}),//connecting frontend and backend , jo idhar se data jaaye wo backend me store hojaye aur firr backend me jaake wo data mongoDB me store hojayee
            // ye name ,email,password wala data backend ki body me jaake store ho rha hai
            headers:{
                'Content-Type':'application/json'// ratlo
            }
        });
        resultt = await resultt.json()//converting result to json format
        console.log(resultt); // agar result ache se store hogya hai to home page load kardo
        localStorage.setItem("user",JSON.stringify(resultt));//user naam ka variable banao localstorage me jisme tum nye user ko store karlo localstorage me
        console.log("chandu")
        navigate('/')
    }

  return (
    <div className='signupForm'>
        <h1>Register</h1>
        <input className='inputBox' type="text" placeholder='Enter name' value={name} onChange = {(e)=>setname(e.target.value)}  />
        <input className='inputBox' type="text" placeholder='Enter email' value={email} onChange = {(e)=>setemail(e.target.value)} />
        <input className='inputBox' type="password" placeholder='Enter password'  value={password} onChange = {(e)=>setpassword(e.target.value)} />
        <button className='appbutton' onClick={collectData}>SignUp</button>
    </div>
  )
}
