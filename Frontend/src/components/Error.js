import React from 'react'

function Error() {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center vh-100 flex-column' style={{backgroundImage: "linear-gradient(to right top, #ff6f91, #ff7c81, #ff8b72, #ff9c67, #ffae61, #ffba60, #ffc660, #ffd361, #fedc64, #fde567, #fbef6c, #f9f871)"}}>
        <i className="fa-solid fa-house-crack" style={{fontSize:"60px"}}></i><p style={{fontSize:"20px"}}>Server Down</p>
    </div>
  )
}

export default Error