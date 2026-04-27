import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home(){
  const navigate=useNavigate()
  function goToLogin(){
    navigate('/login')
  }
  function goToRegister(){
    navigate('/register')
  }
  return(
    <div>
      <div className="center-box">
        <h1>Welcome to HubVerse!</h1>
        <p>Find and book events near you.</p>
        <br />
        <button onClick={goToLogin}>Login</button>
        <button onClick={goToRegister}>Register</button>
      </div>
      <footer className="footer">24071A05G3 (Kilaru Sahiti)</footer>
    </div>
  )
}
export default Home