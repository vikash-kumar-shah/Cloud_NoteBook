import React, {useEffect} from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
const Navbar = () => {
    const location = useLocation()
    useEffect(()=>{
    },[location])
    let navigate = useNavigate()

    const logout = (e) =>{
        e.preventDefault()
        localStorage.removeItem("token")
        navigate("/login")
    }
  return (
    <>
    <div className="container-fluid p-0" style={{fontFamily: "Madimi One,sans-serif",fontWeight: "400",fonStyle: "normal"}}>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark" style={{backgroundColor:"black"}}>
        <Link className="navbar-brand" to="/">Cloud NoteBook</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname==='/'?'active':''}`} to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname==='/notes'?'active':''}`} to="/notes">Notes</Link>
                </li>
                <li className="nav-item">
                    <Link className={`nav-link ${location.pathname==='/about'?'active':''}`} to="/about">About</Link>
                </li>
            </ul>
            <form className="form-inline ml-auto">
                {!localStorage.getItem("token") && <Link className="btn btn-outline-success my-2 mx-lg-4 mr-4" to="/login">Login</Link>}
                {!localStorage.getItem("token") && <Link className="btn btn-outline-primary my-2 mr-4" to="/signup">Sign up</Link>}
                {localStorage.getItem("token") && <Link className="btn btn-outline-danger my-2" to="/" onClick={logout}>Logout</Link>}
            </form>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar