import { Mod } from './mod.js'

export interface ItemBase {
  itemClass: string
  name: string
  modPool: Mod[]
}
