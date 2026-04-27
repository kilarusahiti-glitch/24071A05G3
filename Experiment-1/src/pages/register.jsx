import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Register() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  function handleRegister(e){
    e.preventDefault()
    alert('Registration successful!')
    navigate('/dashboard')
  }
  return (
    <div>
      <div className="center-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={function(e) { setName(e.target.value) }}
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={function(e) { setEmail(e.target.value) }}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={function(e) { setPassword(e.target.value) }}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p>Have an account? <a href="/login">Login here</a></p>
      </div>
      <footer className="footer">24071A05G3 (Kilaru Sahiti)</footer>
    </div>
  )
}
export default Register