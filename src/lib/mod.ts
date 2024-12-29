import { renderStatValue, Stat, StatDefinition } from "./stat"

export interface Mod {
    definition: ModDefinition,
    stats: Stat[]
}

export interface ModDefinition {
    id: string, // Uniquely identifies this modifier.
    name: string, // Display name of this modifier, e.g. "Flaring".
    groups: string[], // Exclusivity groups of this mod.
    type: string, // Identifies all tiers of this mod.
    domain: Domain, // Type of items this mod can generate on.
    generationType: GenerationType, // Where this mod is generated on an item, e.g. Prefix, Suffix, Implicit.
    levelRequirement: number, // Required character level.
    effect: Effect[], // Stats granted by this mod.
    spawnWeights: SpawnWeight[], // Weighting for this mod to appear.
    tags: Tag[], // Tags of this mod, interacted with various crafting methods.
    description: string // Display description of the mod. # characters indicate stat values.
}

interface SpawnWeight {
    tag: string, // Indicates where this weight applies
    weight: number
}

interface Effect { 
    min: number,
    max: number,
    stat: StatDefinition
}

type Domain = "Item"
type GenerationType = "Prefix" | "Suffix" | "Implicit"
type Tag = "Lightning" | "Cold" | "Fire"

export function renderModDescription(mod: Mod): string {
    const replacementIndex = 0;

    return mod.definition.description.replaceAll('#', () => {
        const stat = mod.stats[replacementIndex]
        
        return stat ? renderStatValue(stat) : "#"
    })
}
