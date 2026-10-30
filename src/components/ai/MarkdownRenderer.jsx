import React from 'react'

/**
 * Lightweight safe Markdown renderer for ANTRIKSH AI responses
 * Supports headers (###), bold (**), italic (*), code blocks (```), inline code (`), unordered/ordered lists, and links.
 */
export default function MarkdownRenderer({ content = '', onInternalLink }) {
  if (!content) return null

  // Split lines
  const lines = content.split('\n')
  const elements = []
  let inCodeBlock = false
  let codeBlockContent = []
  let listItems = []
  let listType = null // 'ul' | 'ol'

  const flushList = () => {
    if (listItems.length > 0) {
      if (listType === 'ol') {
        elements.push(
          <ol key={`ol-${elements.length}`} className="ai-md-ol">
            {listItems.map((item, idx) => (
              <li key={idx}>{parseInline(item)}</li>
            ))}
          </ol>
        )
      } else {
        elements.push(
          <ul key={`ul-${elements.length}`} className="ai-md-ul">
            {listItems.map((item, idx) => (
              <li key={idx}>{parseInline(item)}</li>
            ))}
          </ul>
        )
      }
      listItems = []
      listType = null
    }
  }

  // Parse inline styles: bold, italic, code, link
  function parseInline(text) {
    if (!text) return ''

    // Match links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts = []
    let lastIdx = 0
    let match

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        parts.push(parseFormatting(text.slice(lastIdx, match.index)))
      }
      const label = match[1]
      const href = match[2]

      if (href.startsWith('/')) {
        parts.push(
          <a
            key={`link-${match.index}`}
            href={href}
            className="ai-md-link"
            onClick={(e) => {
              e.preventDefault()
              if (onInternalLink) {
                onInternalLink(href)
              } else {
                window.history.pushState({}, '', href)
                window.dispatchEvent(new PopStateEvent('popstate'))
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          >
            {label}
          </a>
        )
      } else {
        parts.push(
          <a
            key={`link-${match.index}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="ai-md-link"
          >
            {label}
          </a>
        )
      }
      lastIdx = linkRegex.lastIndex
    }

    if (lastIdx < text.length) {
      parts.push(parseFormatting(text.slice(lastIdx)))
    }

    return parts.length > 0 ? parts : parseFormatting(text)
  }

  function parseFormatting(txt) {
    // Replace bold **text** and inline `code`
    const tokens = []
    const regex = /(\*\*.*?\*\*|`.*?`)/g
    let last = 0
    let m

    while ((m = regex.exec(txt)) !== null) {
      if (m.index > last) {
        tokens.push(txt.slice(last, m.index))
      }
      const val = m[0]
      if (val.startsWith('**') && val.endsWith('**')) {
        tokens.push(
          <strong key={`b-${m.index}`} className="ai-md-strong">
            {val.slice(2, -2)}
          </strong>
        )
      } else if (val.startsWith('`') && val.endsWith('`')) {
        tokens.push(
          <code key={`c-${m.index}`} className="ai-md-code-inline mono">
            {val.slice(1, -1)}
          </code>
        )
      }
      last = regex.lastIndex
    }

    if (last < txt.length) {
      tokens.push(txt.slice(last))
    }

    return tokens
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Code block fences
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${i}`} className="ai-md-pre mono">
            <code>{codeBlockContent.join('\n')}</code>
          </pre>
        )
        codeBlockContent = []
        inCodeBlock = false
      } else {
        flushList()
        inCodeBlock = true
      }
      continue
    }

    if (inCodeBlock) {
      codeBlockContent.push(line)
      continue
    }

    // Headers
    if (line.startsWith('### ')) {
      flushList()
      elements.push(
        <h4 key={`h3-${i}`} className="ai-md-h3">
          {parseInline(line.slice(4))}
        </h4>
      )
      continue
    }
    if (line.startsWith('## ')) {
      flushList()
      elements.push(
        <h3 key={`h2-${i}`} className="ai-md-h2">
          {parseInline(line.slice(3))}
        </h3>
      )
      continue
    }
    if (line.startsWith('# ')) {
      flushList()
      elements.push(
        <h2 key={`h1-${i}`} className="ai-md-h1">
          {parseInline(line.slice(2))}
        </h2>
      )
      continue
    }

    // Unordered lists (- or *)
    if (/^[\*\-]\s+/.test(line)) {
      listType = 'ul'
      listItems.push(line.replace(/^[\*\-]\s+/, ''))
      continue
    }

    // Ordered lists (1., 2., etc.)
    if (/^\d+\.\s+/.test(line)) {
      listType = 'ol'
      listItems.push(line.replace(/^\d+\.\s+/, ''))
      continue
    }

    // Normal line or empty line
    flushList()

    if (!line.trim()) {
      elements.push(<div key={`sp-${i}`} className="ai-md-spacing" />)
    } else {
      elements.push(
        <p key={`p-${i}`} className="ai-md-p">
          {parseInline(line)}
        </p>
      )
    }
  }

  flushList()

  return <div className="ai-md-content">{elements}</div>
}

