import React, { useState , useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Notescontext from '../context/Notes/Notescontext'

function Login() {
    const context = useContext(Notescontext)
    const {setToggle,setNotificationAlert} = context
    const [credentials,setCredentials] = useState({email:"",password:""})
    const localhost = "https://cloud-notebook-be.onrender.com"
    let navigate = useNavigate()
    const handleclick =async (e) =>{
        e.preventDefault()
        try {
            const fetch_data = await fetch(localhost+"api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
                });
                const response = await fetch_data.json();
                
                if(response.authToken)
                {
                    
                    let token=response.authToken
                    localStorage.setItem('token', token);
                    navigate("/")
                    setNotificationAlert({msg:"You Have Successfully Loggedin",type:"success"})
                    setToggle(true)
                }
                else{
                    setNotificationAlert({msg:"Invalid Credentials",type:"danger"})
                    setToggle(true)
                }
        } catch (error) {
            console.log("Server Down")
            navigate("/error")
        }
    }
    const handleChange = (evt) =>{
        const {name,value} = evt.target
        setCredentials(prev=>({...prev,[name]:value}))
    }
  return (
    <>
    <div className="d-flex justify-content-center align-items-center " style={{height:"89vh",backgroundImage: "linear-gradient(to right top, #ff6f91, #ff7c81, #ff8b72, #ff9c67, #ffae61, #ffba60, #ffc660, #ffd361, #fedc64, #fde567, #fbef6c, #f9f871)"}}>
    <form style={{borderRadius:"10px",backgroundColor:"white",color:"black"}} className='p-5' onSubmit={handleclick}>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" name="email" value={credentials.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
    </div>
    <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
    </>
  )
}

export default Login
