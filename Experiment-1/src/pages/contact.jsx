import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    alert('Your message has been sent!')
    navigate('/dashboard')
  }

  return (
    <div>
      <div className="center-box">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={function(e) { setName(e.target.value) }}
            required
          />

          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={function(e) { setEmail(e.target.value) }}
            required
          />

          <textarea
            placeholder="Write your message here"
            value={message}
            onChange={function(e) { setMessage(e.target.value) }}
            rows="5"
            required
          />

          <button type="submit">Send Message</button>

        </form>
        <br />
        <button onClick={function() { navigate('/dashboard') }}>
          Back to Dashboard
        </button>
      </div>
      <footer className="footer">24071A05G3 (Kilaru Sahiti)</footer>
    </div>
  )
}

export default Contact
