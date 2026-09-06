import { useReveal } from '../hooks/useReveal.js'

/** Wrap any block of content to fade/rise it in on scroll. */
export default function Reveal({ as: Tag = 'div', stagger = false, className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  const base = stagger ? 'reveal-stagger' : 'reveal'
  return (
    <Tag ref={ref} className={`${base} ${visible ? 'is-visible' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
