import React, { useContext } from 'react'
import Notescontext from '../context/Notes/Notescontext'

function Alert() {
  const context = useContext(Notescontext)
  const {toggle,notificationAlert} = context
  return (
    <>
    {toggle && <div className={`alert alert-${notificationAlert.type} m-0`} role="alert">
    {notificationAlert.msg}
    </div>}
    </>
  )
}

export default Alert