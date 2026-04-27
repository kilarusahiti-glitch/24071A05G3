import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Host() {

  const [eventName, setEventName] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [seats, setSeats] = useState('')
  const [isHosted, setIsHosted] = useState(false)

  const navigate = useNavigate()

  function handleHost(e) {
    e.preventDefault()
    setIsHosted(true)
  }

  if (isHosted) {
    return (
      <div className="center-box">
        <h2>Event Created!</h2>
        <p>Event: {eventName}</p>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
        <p>Total Seats: {seats}</p>
        <br />
        <button onClick={function() { navigate('/dashboard') }}>
          Back to Dashboard
        </button>
      </div>
    )
  }

  return (
    <div className="center-box">
      <h2>Host an Event</h2>
      <form onSubmit={handleHost}>

        <input
          type="text"
          placeholder="Event name"
          value={eventName}
          onChange={function(e) { setEventName(e.target.value) }}
          required
        />

        <input
          type="date"
          value={date}
          onChange={function(e) { setDate(e.target.value) }}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={function(e) { setLocation(e.target.value) }}
          required
        />

        <input
          type="number"
          placeholder="Total seats available"
          value={seats}
          min="1"
          onChange={function(e) { setSeats(e.target.value) }}
          required
        />

        <button type="submit">Create Event</button>

      </form>
      <br />
      <button onClick={function() { navigate('/dashboard') }}>
        Back to Dashboard
      </button>
    </div>
  )
}

export default Host
