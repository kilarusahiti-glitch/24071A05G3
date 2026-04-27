import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  function handleLogin(e) {
    e.preventDefault()
    alert('Login successful!')
    navigate('/dashboard')
  }
  return (
    <div>
      <div className="center-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
      <footer className="footer">24071A05G3 (Kilaru Sahiti)</footer>
    </div>
  )
}
export default Login
