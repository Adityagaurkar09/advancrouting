import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { meeting } from './../../data'

function Meeting() {

    const {meetingId} = useParams();
    const [meetingDetail , setMeetingDetails] = useState({
        title:"",
        date:"",
        attendance:[]
    });

    useEffect(()=>{
     const meetingObject = meeting.find((obj)=>{
        return obj.id === meetingId;
    })

    setMeetingDetails(meetingObject);

    } ,[meetingId] );

  return (
    <div>
        <p>meeting Id :{meetingId}</p>
        <h1>meeting</h1>
        <h2>Title : {meetingDetail.title}</h2>
        <h3> date : {meetingDetail.date}</h3>
        <h3> Attendence : {meetingDetail.attendance.join(" ,")}</h3>
    </div>
  )
}

export default Meeting