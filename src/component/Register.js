import React, { useState } from 'react'
import { Link , useHistory } from 'react-router-dom';
// import './login.css'




export default function Signup() {
    const [data, setData] = useState({
        Name: "",
        Contact :"",
        Username: "",
        password: ""
    });
    const Handleonchange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setData({ ...data, [name]: value })
    }

    const history=useHistory()

    const register = () => {
        const { Name, Contact, Username, password } = data
        if(Name && Contact && Username &&password){
            
            fetch("http://localhost:4000/Register", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                history.push("/Login")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }else{
            alert("invalid input")
        }

        

        


    }
    return (
        <>
            <div className='main'>
                {console.log("Data", data)}
                <form className='content container' >

                    <h1>Welcome Back</h1>
                    <h2>Create Your Account</h2>

                    <input type="text" placeholder='Name' className='inputdiv' name='Name' onChange={Handleonchange} />
                    <input type="text" placeholder='Contact' className='inputdiv' name='Contact' onChange={Handleonchange} />
                    <input type="email" placeholder='Email' className='inputdiv' name='Username' onChange={Handleonchange} />
                    <input type="password" placeholder='Password' className='inputdiv' name='password' onChange={Handleonchange} />


                    <button type='button' className='submit btn btn-success' onClick={register}>Register</button>
                    <p>If you have register already? <Link className='submit btn btn-success'to="/Login">Login</Link>

                    </p>

                </form>


            </div>
        </>
    )
}
