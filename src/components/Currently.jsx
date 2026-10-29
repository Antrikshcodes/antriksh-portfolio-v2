import { CURRENTLY } from '../data/content'

export default function Currently() {
  const items = [
    { label: 'Building', value: CURRENTLY.building },
    { label: 'Learning', value: CURRENTLY.learning },
    { label: 'Exploring', value: CURRENTLY.exploring },
  ]

  return (
    <section className="currently">
      <div className="container">
        <div className="currently-header">
          <span className="section-label reveal">Right Now</span>
          <h2 className="section-heading reveal reveal-delay-1">
            Currently <span className="serif">exploring.</span>
          </h2>
        </div>

        <div className="currently-grid">
          {items.map((item, i) => (
            <div key={item.label} className={`currently-card reveal reveal-delay-${i + 1}`}>
              <div className="currently-label">{item.label}</div>
              <p className="currently-value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
