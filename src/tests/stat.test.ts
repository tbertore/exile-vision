import { describe, expect, it } from 'vitest'
import { renderStatValue, Stat, StatDefinition } from '../lib/model/stat.js'

describe('renderStatValue', () => {
  it('should correctly render percentage value', () => {
    const definition: StatDefinition = {
      id: 'test-stat-id',
      stacking: 'Additive',
      scope: 'Global',
      type: 'Percentage',
    }
    const stat: Stat = {
      definition,
      value: 25,
    }
    expect(renderStatValue(stat)).toBe('25%')
  })

  it('should correctly render int value', () => {
    const definition: StatDefinition = {
      id: 'test-stat-id',
      stacking: 'Additive',
      scope: 'Global',
      type: 'Int',
    }
    const stat: Stat = {
      definition,
      value: 25,
    }
    expect(renderStatValue(stat)).toBe('25')
  })
})

export default {}
