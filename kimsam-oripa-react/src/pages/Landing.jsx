import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import HeroSlider from '../components/HeroSlider.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Reveal from '../components/Reveal.jsx'
import { useCountUp, useReveal } from '../hooks/useReveal.js'
import { BATCH_STATS } from '../data/prizePool.js'

export default function Landing() {
  const [countRef, count] = useCountUp(BATCH_STATS.hits)
  const [invRef, invVisible] = useReveal()
  const pct = Math.round((BATCH_STATS.hits / BATCH_STATS.total) * 100)

  return (
    <>
      <Nav />
      <HeroSlider />

      <section id="how">
        <div className="container">
          <Reveal className="eyebrow">The process</Reveal>
          <Reveal as="h2">Three steps to your hit</Reveal>
          <Reveal stagger className="steps">
            <div className="step">
              <span className="num">01</span>
              <h3>Pick a pack</h3>
              <p>Choose any On Hand slot from the 100-pack batch. Each slot is numbered and locked to one buyer.</p>
            </div>
            <div className="step">
              <span className="num">02</span>
              <h3>Wait for reveal day</h3>
              <p>Once your slot is claimed, it's marked Sold and held until the batch's scheduled opening.</p>
            </div>
            <div className="step">
              <span className="num">03</span>
              <h3>Claim your hit</h3>
              <p>Your pull is logged straight to the prize pool page with your serial, card name, and photo proof.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      <section id="inventory">
        <div className="container inv-strip">
          <Reveal>
            <div className="eyebrow">Live inventory</div>
            <h2>Every pack, tracked<br />from hand to sold.</h2>
            <p>KimSamOPTCG numbers all 95 packs in a batch and marks each one On Hand or Sold in real time, so the inventory itself is your proof of fairness. Full breakdown lives on the prize pool page.</p>
            <Link to="/prizepool" className="btn btn-solid">Open full inventory</Link>
          </Reveal>

          <div ref={invRef} className={`inv-card reveal ${invVisible ? 'is-visible' : ''}`}>
            <div className="eyebrow">Batch #1</div>
            <div className="inv-count">
              <span className="big" ref={countRef}>{count}</span>
              <span className="of">/ {BATCH_STATS.total} packs sold</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: invVisible ? `${pct}%` : '0%' }} />
            </div>
            <div className="inv-legend">
              <span><span className="legend-dot" style={{ background: 'var(--sold-rust)' }} />Sold</span>
              <span><span className="legend-dot" style={{ background: '#d9cba0' }} />On hand</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <Newsletter />

      <Footer variant="home" />
    </>
  )
}
