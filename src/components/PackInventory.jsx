import { useMemo, useState } from 'react'
import { generatePackInventory } from '../data/packInventory.js'

export default function PackInventory() {
  const packs = useMemo(() => generatePackInventory(100, 0), [])
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const visible = packs.filter((p) => {
    const matchesFilter = filter === 'all' || p.status === filter
    const matchesSearch = !query.trim() || p.id.toLowerCase().includes(query.trim().toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <>
      <div className="filter-row">
        <button className={`chip ${filter === 'all' ? 'is-active' : ''}`} onClick={() => setFilter('all')}>All 100</button>
        <button className={`chip ${filter === 'hand' ? 'is-active' : ''}`} onClick={() => setFilter('hand')}>On Hand</button>
        <button className={`chip ${filter === 'sold' ? 'is-active' : ''}`} onClick={() => setFilter('sold')}>Sold</button>
        <input
          type="text"
          className="search-input"
          placeholder="Search pack ID…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="pack-grid">
        {visible.map((p) => (
          <div key={p.id} className="pack-chip" data-status={p.status}>
            <span className="pid">{p.id}</span>
            <span className="status">{p.status === 'sold' ? 'Sold' : 'On Hand'}</span>
          </div>
        ))}
      </div>

      {visible.length === 0 && <p className="empty-state" style={{ display: 'block' }}>No packs match that search.</p>}
    </>
  )
}
