export interface Stat {
    definition: StatDefinition,
    value: number
}

export interface StatDefinition {
    // Uniquely identifies this stat. Stats with the same id always stack.
    id: string,
    // Defines how multiples of this stat combine together.
    stacking: StackabilityType,
    // Defines if this stat is local to a source, or global
    scope: Scope
    // The format of values for this stat.
    type: "Percentage" | "Int"
}

type StackabilityType = "Additive" | "Multiplicative"
type Scope = "Local" | "Global"

const percentageFormat = Intl.NumberFormat('en-US', { style: "decimal", maximumFractionDigits: 2 })

export function renderStatValue(stat: Stat): string {
    switch (stat.definition.type) {
        case "Percentage":
            return percentageFormat.format(stat.value) + "%"
        case "Int":
            return stat.value.toString()
    }
}
