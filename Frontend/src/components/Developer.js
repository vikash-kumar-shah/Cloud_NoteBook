import React from 'react'

function Developer() {
  return (
    <>
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" style={{backgroundImage: "linear-gradient(to right top, #ff6f91, #ff7c81, #ff8b72, #ff9c67, #ffae61, #ffba60, #ffc660, #ffd361, #fedc64, #fde567, #fbef6c, #f9f871)",color:"#0d1117",fontFamily: "Roboto,sans-serif",fontWeight: "300",fonStyle: "normal"}}>
    <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={process.env.PUBLIC_URL + '/Profile.png'} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title text-center">Vikash Kumar Shah</h5>
        <p className="card-text text-center">My cloud NoteBook provides a seamless online platform for storing and managing notes securely</p>
        <div className="d-flex justify-content-center align-items-center"><a href="https://github.com/vikash-kumar-shah" className="btn btn-dark">Git Hub</a></div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Developer