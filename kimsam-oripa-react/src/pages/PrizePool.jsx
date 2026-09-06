import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import Reveal from '../components/Reveal.jsx'
import PrizeCard from '../components/PrizeCard.jsx'
import PackInventory from '../components/PackInventory.jsx'
import { useCountUp, useReveal } from '../hooks/useReveal.js'
import { PRIZE_POOL_PLACEHOLDER, BATCH_STATS } from '../data/prizePool.js'

export default function PrizePool() {
  const [countRef, count] = useCountUp(BATCH_STATS.hits)
  const [ringRef, ringVisible] = useReveal()
  const pct = Math.round((BATCH_STATS.hits / BATCH_STATS.total) * 100)

  return (
    <>
      <Nav />

      <header className="page-header">
        <div className="container">
          <div className="eyebrow">Batch #1</div>
          <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)' }}>Prize pool &amp; pack status</h1>
          <p>Serial, name, and photo for every prize in this batch — plus every pack's live status. </p>

          <Reveal className="batch-progress">
            <div ref={ringRef} className="ring" style={{ '--pct': ringVisible ? pct : 0 }}>
              <div className="ring-inner">
                <strong ref={countRef}>{count}</strong>
                <small>/ {BATCH_STATS.total} HITS</small>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: '.2em' }}>{BATCH_STATS.hits} of {BATCH_STATS.total} packs opened</h3>
              <p style={{ margin: 0 }}>{BATCH_STATS.total - BATCH_STATS.hits} packs are still On Hand and waiting to be claimed.</p>
            </div>
          </Reveal>
        </div>
      </header>

      <section id="pool">
        <div className="container">
          <Reveal className="eyebrow">The loot</Reveal>
          <Reveal as="h2">What's in Batch #1</Reveal>
          <Reveal as="p">Each card below is one prize slot in the pool. name, image, quantity and serial are presented as to your guide.</Reveal>

          <div className="prize-grid">
            {PRIZE_POOL_PLACEHOLDER.map((prize) => (
              <PrizeCard key={prize.serial} prize={prize} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="inventory">
        <div className="container">
          <Reveal className="eyebrow">Inventory</Reveal>
          <Reveal as="h2">All 95 packs</Reveal>
          <Reveal as="p">Every pack has a unique ID (A-001 through A-095). Filter by status or search a specific ID to check it before you buy.</Reveal>

          <PackInventory />
        </div>
      </section>

      <Footer variant="prizepool" />
    </>
  )
}
