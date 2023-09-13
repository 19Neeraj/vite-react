import React , {useState, useEffect}from 'react'
import './Api.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Api() {
  const [data, setData]=useState([]);
  useEffect(() => {
    let info = axios.get("http://localhost:5000/coustmers");
    info.then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <section className="api" id="api">
        <h1>API data for CRUD app</h1> 
        <table>
          <thead>
            <tr>
              <th>Name</th> 
              <th>Email</th>
              <th>Subject</th>
              <th>Text</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e)=>(
              <tr key={e._id}>
                <td>{e.Name}</td>
                <td>{e.Email}</td>
                <td>{e.Subject}</td>
                <td>{e.Text}</td>
                <td><Link to={`/Edit/${e.Name}`}>Update</Link></td>
                <td><Link to={`/Delete/${e.Name}`}>Delete</Link></td>
              </tr>
            ))}            
          </tbody>
        </table>
    </section>
  )
}
