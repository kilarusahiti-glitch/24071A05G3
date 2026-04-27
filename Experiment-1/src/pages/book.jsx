import React from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function Book() {

  const [searchParams] = useSearchParams()
  const eventFromDashboard = searchParams.get('event') || ''

  const [name, setName] = useState('')
  const [selectedEvent, setSelectedEvent] = useState(eventFromDashboard)
  const [seats, setSeats] = useState(1)
  const [isBooked, setIsBooked] = useState(false)

  const navigate = useNavigate()

  function handleBooking(e) {
    e.preventDefault()
    setIsBooked(true)
  }

  if (isBooked) {
    return (
      <div>
        <div className="center-box">
          <h2>Booking Confirmed!</h2>
          <p>Name: {name}</p>
          <p>Event: {selectedEvent}</p>
          <p>Seats: {seats}</p>
          <br />
          <button onClick={function() { navigate('/dashboard') }}>
            Back to Dashboard
          </button>
        </div>
        <footer className="footer">24071A05G3 (Kilaru Sahiti)</footer>
      </div>
    )
  }

  return (
    <div>
      <div className="center-box">
        <h2>Book an Event</h2>
        <form onSubmit={handleBooking}>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={function(e) { setName(e.target.value) }}
            required
          />

          <input
            type="text"
            value={selectedEvent}
            readOnly
          />

          <input
            type="number"
            placeholder="Number of seats"
            value={seats}
            min="1"
            max="10"
            onChange={function(e) { setSeats(e.target.value) }}
          />

          <button type="submit">Confirm Booking</button>

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

export default Book
