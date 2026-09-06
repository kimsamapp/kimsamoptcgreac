import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import PrizePool from './pages/PrizePool.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/prizepool" element={<PrizePool />} />
    </Routes>
  )
}
