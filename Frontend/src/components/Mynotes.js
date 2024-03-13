import React,{useContext,useState,useEffect} from 'react'
import Notescontext from '../context/Notes/Notescontext'
import { useNavigate } from 'react-router-dom'
export const Mynotes = () => {
  let navigate = useNavigate()
  const context = useContext(Notescontext)
  const {notes,setNotes,selectedNote,setSelectedNote,handleCardClick,addNote,formData, setFormData,handleChange,deleteNote,updateNote,setNoteUpdateCounter} = context 
  useEffect(()=>{
    if(!localStorage.getItem("token")) navigate("/login")
    setNoteUpdateCounter((prevCounter) => prevCounter + 1);
},[])
  return (
    <>
    <div className='container-fluid' style={{backgroundImage: "linear-gradient(to right top, #ff6f91, #ff7c81, #ff8b72, #ff9c67, #ffae61, #ffba60, #ffc660, #ffd361, #fedc64, #fde567, #fbef6c, #f9f871)",color:"#0d1117",fontFamily: "Roboto,sans-serif",fontWeight: "300",fonStyle: "normal",minHeight:"100vh"}}>
      <div className="container" >
      <h2 className='text-center pt-3' key="1"><button type="button" className="btn btn-dark">Your Notes <span className="badge badge-light">{notes.length}</span></button></h2>
      <div className="row">
      {notes.length >0 ? notes.map((note) =>(
      <>
        <div className="col-sm-4" key={note._id}>
          <div className="card my-5" id="float">
            <div className="card-header">
              {note.title}
              <span className="m-2 badge badge-success">{note.tag}</span>
            </div>
            <div className="card-body h-auto">
              <textarea name="" className='h-auto' value={note.description} disabled style={{border:"none" , outline:"none",background:"transparent",width:"100%",height:"auto" ,resize: 'none'}}></textarea>
            </div>
            <div className="div">
              <i className='far fa-trash-alt ml-3 mb-2 auto' style={{ cursor: 'pointer' }} onClick={(e)=>{deleteNote(e.target.id)}} id={note._id}></i>
              <i className="fa-regular fa-pen-to-square ml-3 mb-2 auto" style={{ cursor: 'pointer' }} onClick={() => handleCardClick(note)}></i>
            </div>
          </div>
        </div>
      </>
    )) : <div className='container-fluid m-0 p-0 vh-100 text-center d-flex justify-content-center align-items-center flex-column'><i className="fa-solid fa-face-surprise mb-3" style={{fontSize:"80px"}}></i><pre>  </pre><p style={{fontSize:"20px"}}>Sorry, no Notes to Display Here</p></div>}
      </div>
      </div>
    </div>


    <button type="button" id='btn' className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModalCenter">
    </button>

    {selectedNote && <div className="modal fade " id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xs h-auto" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <input className="modal-title" id="exampleModalLongTitle" value={selectedNote.title} style={{border:"none" , outline:"none",background:"transparent",width:"100%",height:"auto" ,resize: 'none'}} onChange={(e)=>{setSelectedNote(prev=>({...prev,title:e.target.value}))}} ></input>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <textarea className="p-3 container-fluid h-auto" value={selectedNote.description} style={{border:"none" , outline:"none",background:"transparent",width:"100%",minHeight: "300px",height:"auto"}} onChange={(e)=>{setSelectedNote(prev=>({...prev,description:e.target.value}))}}></textarea>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={updateNote} data-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>}
    </>
  )
}


export default Mynotes