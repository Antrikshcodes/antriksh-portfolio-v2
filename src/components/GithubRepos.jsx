import { useState, useEffect } from 'react'
import { GITHUB_REPOS, PERSONAL } from '../data/content'
import { Github, ArrowUpRight, GitFork, Star, Code2 } from 'lucide-react'

export default function GithubRepos() {
  const [repos, setRepos] = useState(GITHUB_REPOS)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Attempt client-side public API fetch with graceful fallback to verified repos
    const fetchGithubRepos = async () => {
      try {
        setLoading(true)
        const res = await fetch('https://api.github.com/users/Antrikshcodes/repos?sort=updated&per_page=6', {
          headers: { Accept: 'application/vnd.github.v3+json' },
        })
        if (!res.ok) return // Silently fallback to verified GITHUB_REPOS

        const data = await res.json()
        if (Array.isArray(data) && data.length > 0) {
          // Map real public repos from GitHub
          const fetched = data
            .filter((r) => !r.fork) // Prioritize original repos
            .map((r) => ({
              name: r.name,
              displayName: r.name,
              description: r.description || 'Public repository and source code experiments.',
              language: r.language || 'Code',
              languageColor:
                r.language === 'Python'
                  ? '#3572A5'
                  : r.language === 'JavaScript'
                  ? '#F7DF1E'
                  : r.language === 'TypeScript'
                  ? '#3178C6'
                  : r.language === 'C++'
                  ? '#F34B7D'
                  : '#9AA88F',
              url: r.html_url,
              tags: [r.language || 'Software'],
            }))

          // Merge with our verified CONVERGE repo if not present
          const hasConverge = fetched.some((r) => r.name.toLowerCase().includes('converge'))
          const combined = hasConverge ? fetched : [GITHUB_REPOS[0], ...fetched]
          setRepos(combined.slice(0, 6))
        }
      } catch (err) {
        // Fallback gracefully without breaking the layout or console
      } finally {
        setLoading(false)
      }
    }

    fetchGithubRepos()
  }, [])

  return (
    <section id="github" className="github-section">
      <div className="container">
        {/* Section Header */}
        <div className="github-header-editorial">
          <div className="section-meta-tag reveal">OPEN SOURCE / 04</div>
          <h2 className="section-heading-large reveal reveal-delay-1">
            From the <span className="serif">codebase.</span>
          </h2>
          <p className="section-subtext reveal reveal-delay-2">
            The repositories, experiments, and code behind the things I build. Explore actual implementations,
            microcontroller firmware, and application source code.
          </p>
        </div>

        {/* Repositories Grid */}
        <div className="github-repos-grid">
          {repos.map((repo, i) => (
            <a
              key={repo.name + i}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-repo-card reveal reveal-delay-2"
              aria-label={`View ${repo.displayName} on GitHub`}
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
                {repo.language && (
                  <div className="github-lang-indicator">
                    <span
                      className="github-lang-dot"
                      style={{ backgroundColor: repo.languageColor || 'var(--accent-sage)' }}
                    />
                    <span className="mono github-lang-name">{repo.language}</span>
                  </div>
                )}

                {repo.tags && (
                  <div className="github-tags-mini">
                    {repo.tags.slice(0, 2).map((t) => (
                      <span key={t} className="github-tag-pill mono">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Profile Callout Bar */}
        <div className="github-profile-bar reveal reveal-delay-3">
          <div className="github-bar-left">
            <Github size={20} />
            <div>
              <div className="github-bar-title">Antrikshcodes on GitHub</div>
              <div className="github-bar-sub">Repositories, commits, and experimental prototypes</div>
            </div>
          </div>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github-profile"
          >
            <span>Visit Full Profile</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

