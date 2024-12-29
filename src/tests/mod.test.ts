import { Mod, ModDefinition, renderModDescription } from '../lib/model/mod'
import { Stat, StatDefinition } from '../lib/model/stat'

describe('renderModDescription', () => {
  it('should correctly render mod single stat value', () => {
    const statDefinition: StatDefinition = {
      id: 'test-stat-id',
      stacking: 'Additive',
      scope: 'Global',
      type: 'Percentage',
    }
    const stat: Stat = {
      definition: statDefinition,
      value: 25,
    }
    const modDefinition: ModDefinition = {
      id: 'test-mod-id-01',
      name: 'Testing',
      groups: ['test-group-1'],
      type: 'test-mod-id',
      domain: 'Item',
      generationType: 'Prefix',
      levelRequirement: 1,
      effect: [
        {
          min: 1,
          max: 50,
          stat: statDefinition,
        },
      ],
      spawnWeights: [
        {
          weight: 1000,
          tag: 'weapon',
        },
      ],
      tags: ['Cold'],
      description: '+# to Testability',
    }
    const mod: Mod = {
      definition: modDefinition,
      stats: [stat],
    }
    expect(renderModDescription(mod)).toBe('+25% to Testability')
  })
})
