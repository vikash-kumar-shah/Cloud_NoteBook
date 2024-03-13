import React,{useContext,useState,useEffect} from 'react'
import Notescontext from '../context/Notes/Notescontext'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  let navigate = useNavigate()
  const context = useContext(Notescontext)
  const {notes,setNotes,selectedNote,setSelectedNote,handleCardClick,addNote,formData, setFormData,handleChange,deleteNote,updateNote,setNoteUpdateCounter} = context 
  useEffect(()=>{
    if(!localStorage.getItem("token")) navigate("/login")
    setNoteUpdateCounter((prevCounter) => prevCounter + 1);
},[])
  const demo = "Demo Description - Welcome to our cloud-based notebook platform, the ultimate solution for storing your notes online securely! Our website offers a user-friendly interface designed to streamline your note-taking experience and ensure your valuable information is accessible anytime, anywhere."
  const tag = "Add Tags - Work , Personal , Fitness , Finance"
  return (
    <>
    <div className='container-fluid vh-100' style={{backgroundImage: "linear-gradient(to right top, #ff6f91, #ff7c81, #ff8b72, #ff9c67, #ffae61, #ffba60, #ffc660, #ffd361, #fedc64, #fde567, #fbef6c, #f9f871)",color:"#0d1117",fontFamily: "Roboto,sans-serif",fontWeight: "300",fonStyle: "normal"}}>
      <h2 className='text-center pt-3' style={{fontFamily: "Madimi One,sans-serif",fontWeight: "200",fonStyle: "normal",color:"white"}}>Add-a-Note</h2>
      <form className='container col-sm-10 col-xs-10 col-md-10 col-lg-6 p-5 mt-5' style={{borderRadius:"10px",backgroundColor:"white"}}>
        <div className="form-group">
          <label htmlFor="title " className='font-weight-normal'>Title</label>
          <input type="text" className="form-control font-weight-light" id="title" name="title" required onChange={handleChange} placeholder='Enter Title'/>
        </div>
        <div className="form-group">
        <label htmlFor="description" className='font-weight-normal'>Description</label>
        <textarea className="form-control font-weight-light" rows="4" id="description" required name="description" onChange={handleChange} placeholder={demo}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tag" className='font-weight-normal'>Tag</label>
          <input type="text" className="form-control font-weight-light" id="tag" name="tag" onChange={handleChange} placeholder={tag}/>
        </div>
        <button type="button" className="btn btn-success" onClick={()=>addNote(formData)}>Add Note</button>
    </form>
    </div>
    </>
  )
}


export default Home