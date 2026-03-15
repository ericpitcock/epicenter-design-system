import type { Decorator } from '@storybook/react'
import React from 'react'

export const centeredBg: Decorator = (Story) => (
  <div className="decorator decorator--centered decorator--bg">
    <Story />
  </div>
)

export const centeredSurface: Decorator = (Story) => (
  <div className="decorator decorator--centered decorator--surface">
    <Story />
  </div>
)

export const centeredCyanBlueGradient: Decorator = (Story) => (
  <div className="decorator decorator--centered decorator--gradient-bg">
    <Story />
  </div>
)

export const paddedBg: Decorator = (Story) => (
  <div className="decorator decorator--padded decorator--bg">
    <Story />
  </div>
)

export const paddedSurface: Decorator = (Story) => (
  <div className="decorator decorator--padded decorator--surface">
    <Story />
  </div>
)

export const surfaceOverflow: Decorator = (Story) => (
  <div className="decorator decorator--surface decorator--overflow">
    <Story />
  </div>
)

export const surface: Decorator = (Story) => (
  <div className="decorator--padded decorator--surface" style={{ minHeight: '100%' }}>
    <Story />
  </div>
)

export const paddedSurfaceOverflow: Decorator = (Story) => (
  <div className="decorator decorator--padded decorator--surface decorator--overflow">
    <Story />
  </div>
)

export const paddedBgOverflow: Decorator = (Story) => (
  <div className="decorator decorator--padded decorator--bg decorator--overflow">
    <Story />
  </div>
)
