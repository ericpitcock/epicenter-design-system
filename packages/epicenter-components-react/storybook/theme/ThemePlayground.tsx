import React, { useEffect, useMemo, useState } from 'react'

import { EpBadge, EpButton, EpCheckbox, EpInput, EpToggle } from '@ericpitcock/epicenter-components-react'

import {
  DERIVED,
  applySeeds,
  clearSeeds,
  readDerived,
  serializeThemeCss,
} from '../../../storybook-shared/theme-presets.js'

import './ThemePlayground.scss'

const STATUSES = ['danger', 'warning', 'success', 'info'] as const

/**
 * The seeds are written onto <html> exactly as a consumer's theme.css writes
 * them onto :root. Every swatch and sample below is then read back from the
 * stylesheet, so what this story shows is what the CSS derives — not a JS
 * re-implementation of it.
 */
export const ThemePlayground = () => {
  const [primary, setPrimary] = useState({ l: 0.6, c: 0.2, h: 257 })
  const [neutral, setNeutral] = useState({ c: 0, h: 0 })
  const [contrast, setContrast] = useState('#ffffff')
  const [accentShift, setAccentShift] = useState(15)
  const [status, setStatus] = useState({
    danger: '#ef4444',
    warning: '#f59e0b',
    success: '#16a34a',
    info: '#0ea5e9',
  })
  const [link, setLink] = useState('#0284c7')

  const [derived, setDerived] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)
  const [checked, setChecked] = useState(true)
  const [toggled, setToggled] = useState(true)
  const [text, setText] = useState('')

  const seeds = useMemo(
    () => ({
      '--primary-color': `oklch(${primary.l} ${primary.c} ${primary.h})`,
      '--primary-color--contrast': contrast,
      '--accent-hue-shift': String(accentShift),
      '--neutral-color': `oklch(0.5 ${neutral.c} ${neutral.h})`,
      '--status-danger-color': status.danger,
      '--status-warning-color': status.warning,
      '--status-success-color': status.success,
      '--status-info-color': status.info,
      '--link-color': link,
    }),
    [primary, neutral, contrast, accentShift, status, link]
  )

  useEffect(() => {
    applySeeds(seeds)
    setDerived(readDerived())
    setCopied(false)
  }, [seeds])

  // The seeds would otherwise leak into the next story.
  useEffect(() => () => clearSeeds(), [])

  const themeCss = serializeThemeCss(seeds)

  const copy = async () => {
    await navigator.clipboard?.writeText(themeCss)
    setCopied(true)
  }

  const range = (
    label: string,
    value: number,
    onChange: (value: number) => void,
    min: number,
    max: number,
    step: number,
    display = String(value)
  ) => (
    <label>
      {label} <span>{display}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={event => onChange(Number(event.target.value))}
      />
    </label>
  )

  return (
    <div className="theme-playground">
      <section className="theme-playground__controls">
        <h3>Primary</h3>
        {range('Lightness', primary.l, l => setPrimary({ ...primary, l }), 0.3, 0.9, 0.01, primary.l.toFixed(2))}
        {range('Chroma', primary.c, c => setPrimary({ ...primary, c }), 0, 0.35, 0.005, primary.c.toFixed(3))}
        {range('Hue', primary.h, h => setPrimary({ ...primary, h }), 0, 360, 1, `${primary.h}°`)}
        {range('Accent hue shift', accentShift, setAccentShift, -60, 60, 1, `${accentShift}°`)}
        <label className="theme-playground__color">
          Text on primary
          <input type="color" value={contrast} onChange={event => setContrast(event.target.value)} />
        </label>

        <h3>Neutral</h3>
        {range('Chroma', neutral.c, c => setNeutral({ ...neutral, c }), 0, 0.06, 0.001, neutral.c.toFixed(3))}
        {range('Hue', neutral.h, h => setNeutral({ ...neutral, h }), 0, 360, 1, `${neutral.h}°`)}

        <h3>Status &amp; links</h3>
        {STATUSES.map(name => (
          <label key={name} className="theme-playground__color">
            {name}
            <input
              type="color"
              value={status[name]}
              onChange={event => setStatus({ ...status, [name]: event.target.value })}
            />
          </label>
        ))}
        <label className="theme-playground__color">
          link
          <input type="color" value={link} onChange={event => setLink(event.target.value)} />
        </label>
      </section>

      <section className="theme-playground__preview">
        <h3>
          Derived ramp <small>read back from the stylesheet</small>
        </h3>
        <div className="theme-playground__swatches">
          {DERIVED.map(name => (
            <div
              key={name}
              className="theme-playground__swatch"
              style={{ background: `var(${name})` }}
              title={`${name}: ${derived[name] ?? ''}`}
            >
              <span>{name.replace('--primary-color', 'primary').replace('--accent-color', 'accent')}</span>
            </div>
          ))}
        </div>

        <h3>Components</h3>
        <div className="theme-playground__row">
          <EpButton className="ep-button-var--primary">Primary</EpButton>
          <EpButton className="ep-button-var--secondary">Secondary</EpButton>
          <EpButton className="ep-button-var--outline">Outline</EpButton>
          <EpButton className="ep-button-var--success">Success</EpButton>
          <EpButton className="ep-button-var--danger">Danger</EpButton>
          <EpButton className="ep-button-var--warning">Warning</EpButton>
        </div>
        <div className="theme-playground__row">
          <EpInput value={text} onChange={setText} label="Focus me" />
          <EpCheckbox checked={checked} onChange={event => setChecked(event.target.checked)} label="Checked" />
          <EpToggle checked={toggled} onChange={event => setToggled(event.target.checked)} />
          <EpBadge label="Badge" />
          <a href="#" className="text-color--link" onClick={event => event.preventDefault()}>
            A link
          </a>
          <span className="text-color--primary">Primary text</span>
        </div>

        <h3>Status</h3>
        <div className="theme-playground__row">
          {STATUSES.map(name => (
            <div
              key={name}
              className="theme-playground__status"
              style={{
                background: `var(--status-${name}-bg-color)`,
                borderColor: `var(--status-${name}-border-color)`,
                color: `var(--status-${name}-text-color)`,
              }}
            >
              {name}
            </div>
          ))}
        </div>

        <h3>
          theme.css <small>only the seeds — everything else derives</small>
        </h3>
        <pre className="theme-playground__css">{themeCss}</pre>
        <EpButton className="ep-button-var--secondary" onClick={copy}>
          {copied ? 'Copied' : 'Copy theme.css'}
        </EpButton>
      </section>
    </div>
  )
}
