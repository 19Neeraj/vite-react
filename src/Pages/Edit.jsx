import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Edit.css";
export default function Edit() {
  const { Name: editName } = useParams();
  // console.log(Name);
  const initialstate = {
    Name: "",
    Email: "",
    Subject: "",
    Text: "",
  };
  const [state, setState] = useState(initialstate);
  const { Name, Email, Subject, Text } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/coustmers/${editName}`)
      .then((res) => {
        // console.log(res);
        const info = {};
        info.Name = res.data[0].Name;
        info.Email = res.data[0].Email;
        info.Subject = res.data[0].Subject;
        info.Text = res.data[0].Text;
        setState(info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [editName]);

  const update = async (e) => {
    e.preventDefault();
    try {
      let put = await axios.put(
        `http://localhost:5000/coustmers/${Name}/${Email}/${Subject}/${Text}`
      );
      if (put) {
        console.log("data updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="edit" id="edit">
      <h1>Api data for Update {editName}</h1>
      <div className="form" id="from">
        <span>Leave A Message</span>
        <h4>We Love To Hear From You</h4>
        <form action="#" onSubmit={update}>
          <input
            type="text"
            id="name"
            required
            name="Name"
            value={Name}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
          {/* ---------------------------------- */}
          <input
            type="text"
            id="email"
            required
            name="Email"
            value={Email}
            onChange={handleChange}
          />
          <label htmlFor="email">E-mail</label>
          {/* ---------------------------------- */}
          <input
            type="text"
            id="subject"
            required
            name="Subject"
            value={Subject}
            onChange={handleChange}
          />
          <label htmlFor="subject">Subject</label>
          {/* ---------------------------------- */}
          <textarea
            id="text"
            cols="30"
            rows="10"
            placeholder="Your Message"
            name="Text"
            value={Text}
            onChange={handleChange}
          ></textarea>
          <button id="form-button" type="submit" onSubmit={update}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
