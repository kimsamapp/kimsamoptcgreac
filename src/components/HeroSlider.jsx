import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import proof from '../images/proof.jpg';
import proof1 from '../images/proof1.jpg';
import proof3 from '../images/proof3.jpg';

const INTERVAL = 5500

/**
 * Each slide's `art` is a CSS background (placeholder). Replace with
 * `background-image:url(...)` once you have real banner artwork —
 * or pass an <img> in instead, whichever is easier for you to swap.
 */
const SLIDES = [
  // {
  //   art: 'linear-gradient(135deg,#0a1826 0%, #123a52 45%, #1c4a5e 100%)',
  //   eyebrow: 'Batch #1 · Now Loading',
  //   title: <>Pull your fortune<br />from the Grand Line.</>,
  //   lead: "95 packs. Real One Piece TCG hits. One chest goes home a legend. This is KimSamOPTCG's first oripa batch — place your banner art here.",
  //   actions: (
  //     <>
  //       <a href="#newsletter" className="btn btn-solid">Get notified</a>
  //       <Link to="/prizepool" className="btn">View prize pool</Link>
  //     </>
  //   ),
  // },
  {
  art: `url(${proof})`,
  type: 'photo',
  eyebrow: 'FIRST BATCH MYSTERY PACK',
  title: <>What’s hiding<br />inside?</>,
  lead: 'Every pack holds a surprise. Will yours reveal a rare hit?',
  actions: <Link to="/prizepool" className="btn btn-solid">Explore the Pool</Link>,
  },
  {
  art: `url(${proof1})`,
  type: 'photo',
  eyebrow: 'BATCH #1 · NOW LOADING',
  title: <>Your next hit<br />awaits on the Grand Line.</>,
  lead: "100 packs. Real One Piece TCG hits. One lucky collector takes home the grand prize. Welcome to KimSamOPTCG's first mystery pack.",
  actions: (
    <>
      <a href="#newsletter" className="btn btn-solid">Get Notified</a>
      <Link to="/prizepool" className="btn">View Prize Pool</Link>
    </>
  ),
  },
  // {
  //   art: 'linear-gradient(135deg,#1a1210 0%, #5a2a20 55%, #8c4a3a 100%)',
  //   eyebrow: 'Random Hits Ready to be Claimed',
  //   title: <>The chest is<br />ready to be open.</>,
  //   lead: "Every pack pulled brings the batch closer to its Last One prize. Track exactly what's left before you pick a slot.",
  //   actions: <Link to="/prizepool" className="btn btn-solid">See what's left</Link>,
  // },
  {
    art: `url(${proof3})`,
    type: 'photo',
    eyebrow: 'Random Hits Ready to be Claimed',
    title: <>The chest is<br />ready to be open.</>,
    lead: "Every pack pulled brings the batch closer to its Last One prize. Track exactly what's left before you pick a slot.",
    actions: <Link to="/prizepool" className="btn btn-solid">See what's left</Link>,
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const goTo = (i) => setCurrent((i + SLIDES.length) % SLIDES.length)

  const restart = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), INTERVAL)
  }

  useEffect(() => {
    restart()
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header
      className="hero"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={restart}
    >
      {SLIDES.map((slide, i) => (
        <div key={i} className={`hero-slide ${slide.type === 'photo' ? 'hero-slide-photo' : ''} ${i === current ? 'is-active' : ''}`}>
          <div className="art" style={{ backgroundImage: slide.art }} />
          <div className="hero-copy">
            <div className="eyebrow">{slide.eyebrow}</div>
            <h1>{slide.title}</h1>
            <p className="lead">{slide.lead}</p>
            <div className="hero-actions">{slide.actions}</div>
          </div>
        </div>
      ))}

      <div className="hero-arrows">
        <button className="hero-arrow prev" aria-label="Previous banner" onClick={() => { goTo(current - 1); restart() }}>‹</button>
        <button className="hero-arrow next" aria-label="Next banner" onClick={() => { goTo(current + 1); restart() }}>›</button>
      </div>

      <div className="hero-nav">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'is-active' : ''}`}
            aria-label={`Go to banner ${i + 1}`}
            onClick={() => { goTo(i); restart() }}
          >
            <span className="fill" />
          </button>
        ))}
      </div>

      <div className="wave-line">
        <svg viewBox="0 0 1600 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 30 Q 100 5 200 30 T 400 30 T 600 30 T 800 30 T 1000 30 T 1200 30 T 1400 30 T 1600 30 T 1800 30 T 2000 30 T 2200 30 T 2400 30 T 2600 30 T 2800 30 T 3000 30 T 3200 30 V60 H0 Z"
            fill="rgba(217,164,65,0.12)"
          />
        </svg>
      </div>
    </header>
  )
}
