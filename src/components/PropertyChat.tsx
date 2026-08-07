import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'
import { Link, useLocation } from 'wouter'

type ChatAction = {
  label: string
  href: string
}

type ChatMessage = {
  id: string
  speaker: 'assistant' | 'visitor'
  text: string
  action?: ChatAction
}

type ChatOption = {
  label: string
  response: string
  action: ChatAction
}

const options: ChatOption[] = [
  {
    label: 'Lawn & grounds',
    response: 'You’re in the right pasture. We handle mowing, mulching, cleanups, landscaping, and ongoing grounds care.',
    action: { label: 'Explore grounds care', href: '/services/grounds' },
  },
  {
    label: 'Cleaning inside',
    response: 'Black Sheep cares for the spaces people use every day—from homes and offices to carpets and upholstery.',
    action: { label: 'Explore interior care', href: '/services/interiors' },
  },
  {
    label: 'Snow & winter',
    response: 'Tell us what needs clearing and where the property is. Winter availability is confirmed property by property.',
    action: { label: 'Explore winter care', href: '/services/winter' },
  },
  {
    label: 'Something unusual',
    response: 'That’s very on-brand. Pools, ponds, handyman work, and odd jobs all start with a few details about the property.',
    action: { label: 'See specialty care', href: '/services/specialty-care' },
  },
  {
    label: 'Where do you work?',
    response: 'Essex is home base, with Chittenden County and greater Burlington as the best places to start.',
    action: { label: 'Open the service map', href: '/service-area' },
  },
]

const welcomeMessage: ChatMessage = {
  id: 'welcome',
  speaker: 'assistant',
  text: 'Hey—I’m the black sheep. Point me toward the job and I’ll get you to the right place.',
}

export function PropertyChat() {
  const [location] = useLocation()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage])
  const launcherRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const logRef = useRef<HTMLOListElement>(null)
  const messageIdRef = useRef(0)

  const closeChat = useCallback((returnFocus = true) => {
    setOpen(false)
    if (returnFocus) window.requestAnimationFrame(() => launcherRef.current?.focus())
  }, [])

  useEffect(() => {
    if (!open) return
    panelRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeChat()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeChat, open])

  useEffect(() => {
    if (!open) return
    const log = logRef.current
    if (log) log.scrollTop = log.scrollHeight
  }, [messages, open])

  useEffect(() => {
    setOpen(false)
  }, [location])

  const addExchange = (visitorText: string, response: string, action?: ChatAction) => {
    messageIdRef.current += 1
    const exchangeId = messageIdRef.current
    setMessages((current) => [
      ...current,
      { id: `visitor-${exchangeId}`, speaker: 'visitor', text: visitorText },
      { id: `assistant-${exchangeId}`, speaker: 'assistant', text: response, action },
    ])
  }

  const chooseOption = (option: ChatOption) => {
    addExchange(option.label, option.response, option.action)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const visitorText = input.trim()
    if (!visitorText) return

    addExchange(
      visitorText,
      'That sounds like something Jeffrey should look at. This preview can’t send messages yet, so the estimate form is the safest next step.',
      { label: 'Tell us what needs doing', href: '/contact' },
    )
    setInput('')
  }

  return (
    <div className={`property-chat ${open ? 'is-open' : ''}`}>
      {open ? (
        <section
          ref={panelRef}
          className="property-chat__panel"
          id="property-chat-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="property-chat-title"
          tabIndex={-1}
        >
          <div className="property-chat__header">
            <div className="property-chat__identity">
              <span className="property-chat__avatar" aria-hidden="true">
                <img src="/brand/black-sheep-mark-reversed.svg" alt="" />
              </span>
              <div>
                <h2 id="property-chat-title">Black Sheep</h2>
                <span>Property helper · Guided preview</span>
              </div>
            </div>
            <button type="button" className="property-chat__close" onClick={() => closeChat()} aria-label="Close property helper">
              <span aria-hidden="true" />
            </button>
          </div>

          <ol ref={logRef} className="property-chat__log" role="log" aria-live="polite" aria-relevant="additions">
            {messages.map((message) => (
              <li key={message.id} className={`property-chat__message property-chat__message--${message.speaker}`}>
                {message.speaker === 'assistant' ? (
                  <span className="property-chat__message-mark" aria-hidden="true">
                    <img src="/brand/black-sheep-mark.svg" alt="" />
                  </span>
                ) : null}
                <div>
                  <p>{message.text}</p>
                  {message.action ? (
                    <Link className="property-chat__message-action" href={message.action.href} onClick={() => closeChat(false)}>
                      {message.action.label} <span aria-hidden="true">↗</span>
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          <div className="property-chat__prompts" aria-label="Common questions">
            {options.map((option) => (
              <button key={option.label} type="button" onClick={() => chooseOption(option)}>{option.label}</button>
            ))}
          </div>

          <form className="property-chat__composer" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="property-chat-input">Describe what the property needs</label>
            <input
              id="property-chat-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Describe the job…"
              autoComplete="off"
              enterKeyHint="send"
            />
            <button type="submit" aria-label="Add message" disabled={!input.trim()}>
              <span aria-hidden="true">↗</span>
            </button>
          </form>

          <p className="property-chat__notice">Preview mode · Nothing is sent</p>
        </section>
      ) : null}

      <button
        ref={launcherRef}
        className="property-chat__launcher"
        type="button"
        aria-label="Open Black Sheep property helper"
        aria-hidden={open}
        aria-expanded={open}
        aria-controls={open ? 'property-chat-panel' : undefined}
        aria-haspopup="dialog"
        tabIndex={open ? -1 : undefined}
        onClick={() => setOpen(true)}
      >
        <span className="property-chat__launcher-mark" aria-hidden="true">
          <img src="/brand/black-sheep-mark.svg" alt="" />
        </span>
        <span className="property-chat__launcher-copy">
          <small>Need a hand?</small>
          <strong>Ask the black sheep</strong>
        </span>
        <span className="property-chat__launcher-arrow" aria-hidden="true">↗</span>
      </button>
    </div>
  )
}
