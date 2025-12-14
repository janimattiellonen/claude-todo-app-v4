import * as stylex from '@stylexjs/stylex'

/**
 * Radix UI Primitive Color Scales (Light Mode)
 * Source: @radix-ui/colors v3.0.0
 *
 * Each scale contains 12 steps designed for specific use cases:
 * Steps 1-2: App backgrounds
 * Steps 3-6: Component backgrounds and states
 * Steps 7-8: Borders
 * Step 9: Solid backgrounds (highest chroma)
 * Steps 10-12: Text
 */

// GRAY scale - Neutral gray for backgrounds, borders, and text
export const GRAY = stylex.defineVars({
  gray1: '#fcfcfc',
  gray2: '#f9f9f9',
  gray3: '#f0f0f0',
  gray4: '#e8e8e8',
  gray5: '#e0e0e0',
  gray6: '#d9d9d9',
  gray7: '#cecece',
  gray8: '#bbbbbb',
  gray9: '#8d8d8d',
  gray10: '#838383',
  gray11: '#646464',
  gray12: '#202020',
})

// GRAY_A scale - Alpha (transparent) gray variants for overlays
export const GRAY_A = stylex.defineVars({
  grayA1: '#00000003',
  grayA2: '#00000006',
  grayA3: '#0000000f',
  grayA4: '#00000017',
  grayA5: '#0000001f',
  grayA6: '#00000026',
  grayA7: '#00000031',
  grayA8: '#00000044',
  grayA9: '#00000072',
  grayA10: '#0000007c',
  grayA11: '#0000009b',
  grayA12: '#000000df',
})

// JADE scale - Green/teal for success states and accent
export const JADE = stylex.defineVars({
  jade1: '#fbfefd',
  jade2: '#f4fbf7',
  jade3: '#e6f7ed',
  jade4: '#d6f1e3',
  jade5: '#c3e9d7',
  jade6: '#acdec8',
  jade7: '#8bceb6',
  jade8: '#56ba9f',
  jade9: '#29a383',
  jade10: '#26997b',
  jade11: '#208368',
  jade12: '#1d3b31',
})

// JADE_A scale - Alpha jade variants
export const JADE_A = stylex.defineVars({
  jadeA1: '#00c08004',
  jadeA2: '#00a3460b',
  jadeA3: '#00ae4819',
  jadeA4: '#00a85129',
  jadeA5: '#00a2553c',
  jadeA6: '#009a5753',
  jadeA7: '#00945f74',
  jadeA8: '#00976ea9',
  jadeA9: '#00916bd6',
  jadeA10: '#008764d9',
  jadeA11: '#007152df',
  jadeA12: '#002217e2',
})

// SKY scale - Blue for informative states
export const SKY = stylex.defineVars({
  sky1: '#f9feff',
  sky2: '#f1fafd',
  sky3: '#e1f6fd',
  sky4: '#d1f0fa',
  sky5: '#bee7f5',
  sky6: '#a9daed',
  sky7: '#8dcae3',
  sky8: '#60b3d7',
  sky9: '#7ce2fe',
  sky10: '#74daf8',
  sky11: '#00749e',
  sky12: '#1d3e56',
})

// SKY_A scale - Alpha sky variants
export const SKY_A = stylex.defineVars({
  skyA1: '#00d5ff06',
  skyA2: '#00a4db0e',
  skyA3: '#00b3ee1e',
  skyA4: '#00ace42e',
  skyA5: '#00a1d841',
  skyA6: '#0092ca56',
  skyA7: '#0089c172',
  skyA8: '#0085bf9f',
  skyA9: '#00c7fe83',
  skyA10: '#00bcf38b',
  skyA11: '#00749e',
  skyA12: '#002540e2',
})

// RED scale - Red for error/danger states
export const RED = stylex.defineVars({
  red1: '#fffcfc',
  red2: '#fff7f7',
  red3: '#feebec',
  red4: '#ffdbdc',
  red5: '#ffcdce',
  red6: '#fdbdbe',
  red7: '#f4a9aa',
  red8: '#eb8e90',
  red9: '#e5484d',
  red10: '#dc3e42',
  red11: '#ce2c31',
  red12: '#641723',
})

// RED_A scale - Alpha red variants
export const RED_A = stylex.defineVars({
  redA1: '#ff000003',
  redA2: '#ff000008',
  redA3: '#f3000d14',
  redA4: '#ff000824',
  redA5: '#ff000632',
  redA6: '#f8000442',
  redA7: '#df000356',
  redA8: '#d2000571',
  redA9: '#db0007b7',
  redA10: '#d10005c1',
  redA11: '#c40006d3',
  redA12: '#55000de8',
})
