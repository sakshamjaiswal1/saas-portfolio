import React from "react";
import "./contact.scss";

function Contact() {
    const [message,setMessage]=React.useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setMessage(true)
  }  
  return (
    <div className="contact" id="contact">
      <div className="left">
          <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} >
              <input type="email" placeholder="Email" />
              <textarea  placeholder='Message'></textarea>
              <button type='submit'>Send</button>
              {message && <span>Thnks for contacting,I'll reply ASAP </span>}
          </form>
      </div>
    </div>
  );
}

export default Contact;
