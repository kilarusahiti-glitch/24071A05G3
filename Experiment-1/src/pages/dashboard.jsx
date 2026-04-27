import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const navigate = useNavigate()

  const events = [
    { id: 1, name: 'Lollapalooza', date: '3-05-2026', location: 'Mumbai', seats: 100 },
    { id: 2, name: 'Build with AI: GDG Workshop', date: '13-05-2026', location: 'Banglore', seats: 50 },
    { id: 3, name: 'Flea Market', date: '26-05-2026', location: 'Hyderabad', seats: 200 },
    { id: 4, name: 'Shipala Kala Vedika: Art Expo', date: '30-5-2026', location: 'Hyderabad', seats: 75 },
  ]

  return (
    <div>
      <div className="page-box">
        <p>Here are all the available events.</p>
        <br />
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Seats Available</th>
              <th>Book Now!</th>
            </tr>
          </thead>
          <tbody>
            {events.map(function(event) {
              return (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.seats}</td>
                  <td>
                    <button onClick={function() { navigate('/book?event=' + event.name) }}>
                      Book
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <br />
        <button onClick={function() { navigate('/contact') }}>
          Contact Us
        </button>
        <button onClick={function() { navigate('/') }}>
          Logout
        </button>
      </div>
      <footer className="footer">24071A05G3 (Kilaru Sahiti)</footer>
    </div>
  )
}

export default Dashboard
