import * as stylex from '@stylexjs/stylex'
import {
  GRAY,
  GRAY_A,
  JADE,
  JADE_A,
  SKY,
  SKY_A,
  RED,
  RED_A,
} from './primitiveColors.stylex'

/**
 * Semantic Color Tokens
 *
 * Maps primitive Radix UI colors to semantic tokens that components use.
 * Each variant (neutral, accent, informative, danger) contains 16 tokens
 * mapped to the appropriate steps in the Radix UI scale.
 *
 * Token Usage:
 * - background: Step 1 - Page/app background
 * - backgroundWeak: Step 2 - Subtle background alternative
 * - componentWeak: Step 3 - Subtle component background
 * - component: Step 4 - Normal component background
 * - componentHover: Step 5 - Hovered component background
 * - componentActive: Step 6 - Active/selected component background
 * - borderWeak: Step 6 - Subtle borders
 * - border: Step 7 - Normal borders
 * - borderHover: Step 8 - Hovered borders
 * - borderFocus: Alpha color - Focus rings (accessible)
 * - borderActive: Step 9 - Active/pressed borders
 * - backgroundStrong: Step 9 - Solid backgrounds (buttons!)
 * - backgroundStrongHover: Step 10 - Hovered solid backgrounds
 * - textDisabled: Step 10 - Disabled text
 * - textWeak: Step 11 - Secondary text
 * - text: Step 12 - Primary text (high contrast)
 * - textOnStrong: White - Text on solid backgrounds (for contrast)
 */

// NEUTRAL variant - Uses GRAY scale
export const neutral = stylex.defineVars({
  background: GRAY.gray1,
  backgroundWeak: GRAY.gray2,
  componentWeak: GRAY.gray3,
  component: GRAY.gray4,
  componentHover: GRAY.gray5,
  componentActive: GRAY.gray6,
  borderWeak: GRAY.gray6,
  border: GRAY.gray7,
  borderHover: GRAY.gray8,
  borderFocus: GRAY_A.grayA8,
  borderActive: GRAY.gray9,
  backgroundStrong: GRAY.gray9,
  backgroundStrongHover: GRAY.gray10,
  textDisabled: GRAY.gray10,
  textWeak: GRAY.gray11,
  text: GRAY.gray12,
  textOnStrong: '#ffffff',
})

// ACCENT variant - Uses JADE scale
export const accent = stylex.defineVars({
  background: JADE.jade1,
  backgroundWeak: JADE.jade2,
  componentWeak: JADE.jade3,
  component: JADE.jade4,
  componentHover: JADE.jade5,
  componentActive: JADE.jade6,
  borderWeak: JADE.jade6,
  border: JADE.jade7,
  borderHover: JADE.jade8,
  borderFocus: JADE_A.jadeA8,
  borderActive: JADE.jade9,
  backgroundStrong: JADE.jade9,
  backgroundStrongHover: JADE.jade10,
  textDisabled: JADE.jade10,
  textWeak: JADE.jade11,
  text: JADE.jade12,
  textOnStrong: '#ffffff',
})

// INFORMATIVE variant - Uses SKY scale
export const informative = stylex.defineVars({
  background: SKY.sky1,
  backgroundWeak: SKY.sky2,
  componentWeak: SKY.sky3,
  component: SKY.sky4,
  componentHover: SKY.sky5,
  componentActive: SKY.sky6,
  borderWeak: SKY.sky6,
  border: SKY.sky7,
  borderHover: SKY.sky8,
  borderFocus: SKY_A.skyA8,
  borderActive: SKY.sky9,
  backgroundStrong: SKY.sky9,
  backgroundStrongHover: SKY.sky10,
  textDisabled: SKY.sky10,
  textWeak: SKY.sky11,
  text: SKY.sky12,
  textOnStrong: '#ffffff',
})

// DANGER variant - Uses RED scale
export const danger = stylex.defineVars({
  background: RED.red1,
  backgroundWeak: RED.red2,
  componentWeak: RED.red3,
  component: RED.red4,
  componentHover: RED.red5,
  componentActive: RED.red6,
  borderWeak: RED.red6,
  border: RED.red7,
  borderHover: RED.red8,
  borderFocus: RED_A.redA8,
  borderActive: RED.red9,
  backgroundStrong: RED.red9,
  backgroundStrongHover: RED.red10,
  textDisabled: RED.red10,
  textWeak: RED.red11,
  text: RED.red12,
  textOnStrong: '#ffffff',
})
