import Notescontext from "./Notescontext";
import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
function NotesState(props) {
  const navigate = useNavigate()
  const localhost = "http://localhost:5000/"
  const [notes,setNotes] = useState([]) 
  const [toggle,setToggle] = useState(false)
  const [noteUpdateCounter, setNoteUpdateCounter] = useState(0)
  const [notificationAlert, setNotificationAlert] = useState({msg:"",type:""})



  useEffect(()=>{
    const load_data =async () =>{
      try {
        const fetch_data = await fetch(localhost+"api/notes/getallnotes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
          }
        });
        let data = await fetch_data.json();
        setNotes(data)
        
      } catch (error) {
        console.log("Server Down")
        navigate("/error")
      }
    }
    load_data()

  },[noteUpdateCounter])



  useEffect(()=>{
    setTimeout(() => {
      setToggle(false)
    }, 2000);
  },[notificationAlert])

  // Add Note
  const addNote = async (new_note) =>{
    if(!(/^\s*$/.test(new_note.title)) && !(/^\s*$/.test(new_note.description)))
    {
      try {
        const fetch_data = await fetch(localhost+"api/notes/addnote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
          },
          body: JSON.stringify(new_note)
        });
        setNotificationAlert({msg:"Your Note is Added",type:"primary"})
        setToggle(true)
        setNoteUpdateCounter((prevCounter) => prevCounter + 1);
      } catch (error) {
        console.log("Server Down")
      }
    }
  }

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tag:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  // Delete Note
  const deleteNote = async (id) =>{
    try {
      const fetch_data = await fetch(localhost+`api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        }
      });
      setNotificationAlert({msg:"Your Note is deleted",type:"warning"})
      setToggle(true)
      setNoteUpdateCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.log("Server Down")
    }
  }


  // Edit Note
  const [selectedNote, setSelectedNote] = useState(true);

  const handleCardClick = (noteData) => {
    const btn = document.querySelector("#btn")
    setSelectedNote(noteData);
    btn.click()
  }
  const updateNote =async () => {
    const id = selectedNote._id
    try {
      const fetch_data = await fetch(localhost+`api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify(selectedNote)
      });
      setNotificationAlert({msg:"Your Note is Updated",type:"primary"})
      setToggle(true)
      setNoteUpdateCounter((prevCounter) => prevCounter + 1);
    } catch (error) {
      console.log("Server Down")
    }
  }
  return (
      <Notescontext.Provider value={{notes,setNotes,selectedNote,setSelectedNote,handleCardClick,addNote,formData, setFormData,handleChange,deleteNote,updateNote,toggle,setToggle,notificationAlert, setNotificationAlert,setNoteUpdateCounter}}>
        {props.children}
    </Notescontext.Provider>
  )
}

export default NotesState