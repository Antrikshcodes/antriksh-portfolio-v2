import { useState, useEffect } from 'react'
import { PERSONAL_REPOS, PERSONAL } from '../data/content'
import { Github, ArrowUpRight, Star, GitFork, Code2, GitCommit, Activity } from 'lucide-react'

export default function GithubSection() {
  const [repos, setRepos] = useState(PERSONAL_REPOS)
  const [recentCommit, setRecentCommit] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const languages = [
    { name: 'Python', pct: 42, color: '#85836A' },
    { name: 'JavaScript / TS', pct: 36, color: '#C5B69D' },
    { name: 'C++ (Hardware)', pct: 14, color: '#B8795E' },
    { name: 'HTML / CSS', pct: 8, color: '#788A91' },
  ]

  // Fetch real public repositories & events from GitHub API
  useEffect(() => {
    const fetchPublicData = async () => {
      try {
        setIsLoading(true)

        // 1. Fetch public repos
        const reposRes = await fetch(
          'https://api.github.com/users/Antrikshcodes/repos?sort=updated&per_page=8',
          {
            headers: { Accept: 'application/vnd.github.v3+json' },
          }
        )

        if (reposRes.ok) {
          const data = await reposRes.json()
          if (Array.isArray(data) && data.length > 0) {
            const liveRepos = data
              .filter((r) => !r.fork)
              .map((r) => ({
                name: r.name,
                displayName: r.name,
                description: r.description || 'Public repository and technical source code.',
                language: r.language || 'Code',
                languageColor:
                  r.language === 'Python'
                    ? '#85836A'
                    : r.language === 'JavaScript'
                    ? '#C5B69D'
                    : r.language === 'TypeScript'
                    ? '#788A91'
                    : r.language === 'C++'
                    ? '#B8795E'
                    : '#AAA397',
                url: r.html_url,
                stars: r.stargazers_count,
                forks: r.forks_count,
                tags: [r.language || 'Software', 'Source'],
              }))

            const merged = [...liveRepos]
            PERSONAL_REPOS.forEach((verified) => {
              if (!merged.some((m) => m.name.toLowerCase() === verified.name.toLowerCase())) {
                merged.push(verified)
              }
            })

            setRepos(merged.slice(0, 6))
          }
        }

        // 2. Fetch public push events
        const eventsRes = await fetch(
          'https://api.github.com/users/Antrikshcodes/events?per_page=10',
          {
            headers: { Accept: 'application/vnd.github.v3+json' },
          }
        )

        if (eventsRes.ok) {
          const events = await eventsRes.json()
          if (Array.isArray(events) && events.length > 0) {
            const pushEvent = events.find((e) => e.type === 'PushEvent')
            if (pushEvent) {
              setRecentCommit({
                repo: pushEvent.repo.name.replace('Antrikshcodes/', ''),
                date: new Date(pushEvent.created_at).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }),
                message:
                  pushEvent.payload?.commits?.[0]?.message || 'Pushed commit to repository',
              })
            }
          }
        }
      } catch (err) {
        // Fallback gracefully without breaking UI
      } finally {
        setIsLoading(false)
      }
    }

    fetchPublicData()
  }, [])

  return (
    <section id="github" className="github-section">
      <div className="container">
        {/* Section Header with Direct Profile Link */}
        <div className="github-header-editorial">
          <div className="github-header-left">
            <div className="section-meta-tag reveal">OPEN SOURCE / 06</div>
            <h2 className="section-heading-large reveal reveal-delay-1">
              Public Repositories & <span className="serif">Activity.</span>
            </h2>
            <p className="section-subtext reveal reveal-delay-2">
              Authentic open-source codebases, microcontroller firmware, and live commit telemetry
              authored and maintained by me on GitHub.
            </p>
          </div>

          <div className="github-header-right reveal reveal-delay-2">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-light github-profile-cta"
            >
              <Github size={16} />
              <span>Visit @Antrikshcodes</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* 1. Live GitHub Telemetry Bar */}
        <div className="github-telemetry-banner reveal reveal-delay-1">
          <div className="banner-activity-col">
            <div className="activity-label mono">
              <span className="live-dot" />
              <span>LATEST GITHUB COMMIT</span>
            </div>
            <div className="activity-message">
              {recentCommit ? (
                <>
                  <span className="commit-repo mono">{recentCommit.repo}</span>
                  <span className="commit-msg">"{recentCommit.message}"</span>
                  <span className="commit-date mono">({recentCommit.date})</span>
                </>
              ) : (
                <span className="commit-msg">
                  Actively pushing code to CONVERGE, OrderShield & Robotics firmware.
                </span>
              )}
            </div>
          </div>

          <div className="banner-languages-col">
            <div className="languages-header mono">LANGUAGE COMPOSITION</div>
            <div className="languages-bar-track">
              {languages.map((l) => (
                <div
                  key={l.name}
                  className="lang-bar-segment"
                  style={{ width: `${l.pct}%`, backgroundColor: l.color }}
                  title={`${l.name}: ${l.pct}%`}
                />
              ))}
            </div>
            <div className="languages-legend">
              {languages.map((l) => (
                <span key={l.name} className="legend-item mono">
                  <span className="legend-dot" style={{ backgroundColor: l.color }} />
                  <span>{l.name} {l.pct}%</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Repositories Grid */}
        <div className="github-repos-grid">
          {repos.map((repo, idx) => (
            <a
              key={`${repo.name}-${idx}`}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-repo-card reveal reveal-delay-2"
              aria-label={`View ${repo.displayName || repo.name} on GitHub`}
            >
              <div className="github-card-top">
                <div className="github-title-group">
                  <Github size={16} className="github-title-icon" />
                  <span className="github-repo-name">{repo.displayName || repo.name}</span>
                </div>
                <ArrowUpRight size={14} className="github-external-icon" />
              </div>

              <p className="github-repo-desc">{repo.description}</p>

              <div className="github-card-bottom">
                <div className="github-meta-left">
                  {repo.language && (
                    <div className="github-lang-indicator">
                      <span
                        className="github-lang-dot"
                        style={{ backgroundColor: repo.languageColor || 'var(--muted-olive)' }}
                      />
                      <span className="mono github-lang-name">{repo.language}</span>
                    </div>
                  )}

                  {typeof repo.stars === 'number' && repo.stars > 0 && (
                    <div className="github-stars-indicator mono">
                      <Star size={12} className="star-icon" />
                      <span>{repo.stars}</span>
                    </div>
                  )}
                </div>

                <div className="github-tags-mini">
                  {repo.tags?.slice(0, 2).map((t) => (
                    <span key={t} className="github-tag-pill mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
