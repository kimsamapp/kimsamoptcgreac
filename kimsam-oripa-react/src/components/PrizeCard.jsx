import Reveal from './Reveal.jsx'

export default function PrizeCard({ prize }) {
  const { serial, name, tier, image, quantity } = prize

  return (
    <Reveal as="div" className="prize-card">
      <div
        className={`prize-art ${image ? 'has-image' : ''}`}
      >
        {image ? <img src={image} alt={name} /> : (tier || 'PRIZE')}
        <span className="tier">{tier || ''}</span>
      </div>
      <div className="prize-body">
        <div className="prize-serial">{serial}</div>
        <div className="prize-name">{name}</div>
        <div className="prize-quantity">Quantity: {quantity ?? 1}</div>
      </div>
    </Reveal>
  )
}
