import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const Navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem("user")
        if (auth) {
            Navigate('/');
        }
    })

    async  function handleLogin() {
        console.log(email,password);
        let resulttt = await fetch('http://localhost:5000/login',{  // resulttt ke andar user naam ki uski saari details aajaengi aur uske corresponding unique token aayega 
            method:'POST',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        resulttt = await resulttt.json() 
        console.log(resulttt,"suraj"); 
        if (resulttt.name) { // agar result mila to chalao  ||    aur comparison kara rhe hai authToken ke basis pe 
            localStorage.setItem("user",JSON.stringify(resulttt)) //storage me uss user ko store kardo dobara se 
            Navigate('/')// aur fir home page pe chale jao login karke
        } else {
            alert('please enter correct details')// agar user hi na mila ho toh
        }
    }
    return (
        <div className='loginForm'>
            <h1>Login</h1>
            <input className='inputBox' type="text" placeholder='Enter email' value={email} onChange = {(e)=>setemail(e.target.value)} />
            <input className='inputBox' type="password" placeholder='Enter password'value={password} onChange = {(e)=>setpassword(e.target.value)} />
            <button className='appbutton'  onClick={handleLogin} >SignUp</button>
        </div>
    )
}
