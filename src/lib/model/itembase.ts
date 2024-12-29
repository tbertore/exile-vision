import { Mod } from './mod'

export interface ItemBase {
  itemClass: string
  name: string
  modPool: Mod[]
}
