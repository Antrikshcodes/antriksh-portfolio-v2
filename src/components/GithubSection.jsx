import { useState, useEffect } from 'react'
import { PERSONAL_REPOS, PERSONAL } from '../data/content'
import { Github, ArrowUpRight, Star, GitFork, Code2, ExternalLink } from 'lucide-react'

export default function GithubSection() {
  const [repos, setRepos] = useState(PERSONAL_REPOS)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Attempt live fetch from GitHub API for real repos & real stars
    const fetchPublicRepos = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          'https://api.github.com/users/Antrikshcodes/repos?sort=updated&per_page=8',
          {
            headers: { Accept: 'application/vnd.github.v3+json' },
          }
        )

        if (!response.ok) return // Graceful fallback to verified repos

        const data = await response.json()
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

          // Merge live repos with verified CONVERGE and OrderShield
          const merged = [...liveRepos]
          PERSONAL_REPOS.forEach((verified) => {
            if (!merged.some((m) => m.name.toLowerCase() === verified.name.toLowerCase())) {
              merged.push(verified)
            }
          })

          setRepos(merged.slice(0, 6))
        }
      } catch (err) {
        // Keep verified PERSONAL_REPOS
      } finally {
        setIsLoading(false)
      }
    }

    fetchPublicRepos()
  }, [])

  return (
    <section id="github" className="github-section">
      <div className="container">
        {/* Section Header with Direct Profile Link */}
        <div className="github-header-editorial">
          <div className="github-header-left">
            <div className="section-meta-tag reveal">OPEN SOURCE / 06</div>
            <h2 className="section-heading-large reveal reveal-delay-1">
              Public <span className="serif">Repositories.</span>
            </h2>
            <p className="section-subtext reveal reveal-delay-2">
              Authentic open-source codebases, microcontroller firmware, and application architectures
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

        {/* Repositories Grid */}
        <div className="github-repos-grid">
          {repos.map((repo, idx) => (
            <a
              key={`${repo.name}-${idx}`}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-repo-card reveal reveal-delay-1"
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

