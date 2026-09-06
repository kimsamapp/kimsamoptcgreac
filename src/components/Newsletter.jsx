import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
  }

  return (
    <section id="newsletter">
      <div className="container">
        <Reveal className="newsletter">
          <div>
            <div className="eyebrow">Don't miss the next batch</div>
            <h2>Get word the moment<br />a new batch drops.</h2>
            <p>Leave your email and we'll ping you when Batch #2 opens — plus you can jump straight into the current prize pool right now.</p>
            <form className="nl-form" onSubmit={handleSubmit}>
              <input type="email" placeholder="you@email.com" required aria-label="Email address" />
              <button type="submit" className="btn btn-solid">Notify me</button>
            </form>
            <p className="nl-note">We'll only email you about new batches — no spam.</p>
            {submitted && (
              <p className="nl-success" style={{ display: 'block' }}>
                You're on the list! While you wait, check the live prize pool below.
              </p>
            )}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/prizepool" className="btn" style={{ padding: '18px 30px', fontSize: '1.05rem' }}>
              View Batch #1 Prize Pool →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
