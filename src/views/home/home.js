import React from 'react'
import { Link } from 'react-router-dom'
import { meeting } from './../../data'

function home() {
  return (
    <div>
        <h1>Welcome To Meet App</h1>
        {meeting.map((meetingObject)=>{
            const {id , title} = meetingObject;
            return(
                <div>
            <Link to={`/${id}`}>{title}</Link>
            <hr/>
        </div>
            )
        })}

    </div>
  )
}

export default home