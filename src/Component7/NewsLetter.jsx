import React ,{useState} from 'react'
import './NewsLetter.css'
export default function NewsLetter() {
  const [clicked , setClicked] = useState(false);
  const addstyle =()=>{
    setClicked(true)
  }
 

  return (
    <section className="news-letter" id="new-letter">
      <div className="column1" id="column1">
        <h2>SignUp For News-Letters</h2>
        <p>Get E-mail update of our latest shop trends  and <br id='br' /><strong> Special Offers</strong></p>
      </div>
      <div className="column2" id="column2">
        <input type="text" placeholder='example@mail.com' autoComplete='off' />
        <button onClick={addstyle} className={`custom-button ${clicked ? 'hover-effect' : ''}`}> Sign-Up </button>
      </div>
    </section> 
  )
}
