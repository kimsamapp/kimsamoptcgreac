import { Link } from 'react-router-dom'

export default function Footer({ variant = 'home' }) {
  return (
    <footer id="footer">
      <div className="container footer-row">
        <span>© 2026 KimSamOPTCG. Fan-run oripa — not affiliated with Shueisha, Toei Animation, or Bandai.</span>
        <div style={{ display: 'flex', gap: 18 }}>
          {variant === 'home' ? (
            <>
              <a
                href="https://www.facebook.com/profile.php?id=61594259068021"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a href="#">Instagram</a>
              <Link to="/prizepool">Prize Pool</Link>
            </>
          ) : (
            <>
              <Link to="/">Back home</Link>
              <Link to="/#newsletter">Get notified</Link>
            </>
          )}
        </div>
      </div>
    </footer>
  )
}
