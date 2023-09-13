import React ,{useState, useEffect} from 'react'
import './Delete.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function Delete() {
  const {Name}=useParams();
  // console.log(Name);
  useEffect(()=>{
    axios.delete(`http://localhost:5000/coustmers/${Name}`).then((res)=>{
      console.log('data deleted :');
    }).catch((err)=>{
      console.log('error occured : ',err);
    })
  },[Name])
  return (
    <section className="delete" id="delete">
        <h1>Api data for Delete</h1>
        <p>{Name}</p>
    </section>
  )
}
