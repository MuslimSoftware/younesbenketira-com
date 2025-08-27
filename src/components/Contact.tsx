import React, { useState } from 'react'
import { socialsData } from '../data/socialsData'
import { MdCheck, MdContentCopy } from 'react-icons/md'

const Contact: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleSocialClick = (social: typeof socialsData[0]) => {
    if (social.opensInNewTab) {
      window.open(social.url, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = social.url
    }
  }

  const handleCopyClick = async (social: typeof socialsData[0], e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(social.copyText)
      setCopiedId(social.id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section id="contact" className="contact" aria-label="Contact information and social media links">
      <div className="contact-content">
        <h2 className="contact-title">Let's Connect 🔥</h2>
        <div className="socials-grid" role="list" aria-label="Social media and contact options">
          {socialsData.map((social) => {
            const IconComponent = social.icon
            return (
              <div key={social.id} className="social-card" role="listitem">
                <button
                  className="social-link"
                  onClick={() => handleSocialClick(social)}
                  aria-label={`Contact via ${social.name}`}
                >
                  <IconComponent className="social-icon" aria-hidden="true" />
                  <div className="social-info">
                    <span className="social-name">{social.name}</span>
                    <span className="social-handle">{social.handle}</span>
                  </div>
                </button>
                <button
                  className="copy-button"
                  onClick={(e) => handleCopyClick(social, e)}
                  aria-label={`Copy ${social.name} handle`}
                  title="Copy to clipboard"
                >
                  {copiedId === social.id ? (
                    <MdCheck className="copy-icon" aria-hidden="true" />
                  ) : (
                    <MdContentCopy className="copy-icon" aria-hidden="true" />
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact