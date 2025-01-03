/* eslint-disable @typescript-eslint/no-explicit-any */

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends Record<string, unknown>,
  K extends keyof T,
> = Partial<Record<K, never>>
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  _: { input: any; output: any }
  bool: { input: any; output: any }
  f32: { input: any; output: any }
  i16: { input: any; output: any }
  i32: { input: any; output: any }
  rid: { input: any; output: any }
  string: { input: any; output: any }
  u16: { input: any; output: any }
  u32: { input: any; output: any }
}

export interface AchievementItems {
  __typename?: 'AchievementItems'
  AchievementsKey?: Maybe<Achievements>
  CompletionsRequired?: Maybe<Scalars['i32']['output']>
  Id?: Maybe<Scalars['string']['output']>
  Name?: Maybe<Scalars['string']['output']>
  _?: Maybe<Scalars['bool']['output']>
}

export interface AchievementSetsDisplay {
  __typename?: 'AchievementSetsDisplay'
  Id?: Maybe<Scalars['i32']['output']>
  Title?: Maybe<Scalars['string']['output']>
}

export interface Achievements {
  __typename?: 'Achievements'
  Description?: Maybe<Scalars['string']['output']>
  HASH16?: Maybe<Scalars['i16']['output']>
  HardcoreOnly?: Maybe<Scalars['bool']['output']>
  HideAchievementItems?: Maybe<Scalars['bool']['output']>
  Id?: Maybe<Scalars['string']['output']>
  MinCompletedItems?: Maybe<Scalars['i32']['output']>
  Objective?: Maybe<Scalars['string']['output']>
  SetId?: Maybe<AchievementSetsDisplay>
  ShowItemCompletionsAsOne?: Maybe<Scalars['bool']['output']>
  SoftcoreOnly?: Maybe<Scalars['bool']['output']>
  TwoColumnLayout?: Maybe<Scalars['bool']['output']>
  _?: Maybe<Scalars['string']['output']>
}

export interface ActionTypes {
  __typename?: 'ActionTypes'
  Id?: Maybe<Scalars['string']['output']>
  _?: Maybe<Scalars['bool']['output']>
}

export enum ActiveSkillTargetTypes {
  AnywhereSelfTarget = 'ANYWHERE_SELF_TARGET',
  BehindMonster = 'BEHIND_MONSTER',
  Corpse = 'CORPSE',
  Enemy = 'ENEMY',
  Item = 'ITEM',
  NoLineOfSight = 'NO_LINE_OF_SIGHT',
  RotateToTarget = 'ROTATE_TO_TARGET',
  SelfOrigin = 'SELF_ORIGIN',
  TargetableGround = 'TARGETABLE_GROUND',
  WalkableGround = 'WALKABLE_GROUND',
  _ = '_',
}

export interface ActiveSkillType {
  __typename?: 'ActiveSkillType'
  FlagStat?: Maybe<Stats>
  Id?: Maybe<Scalars['string']['output']>
}

export interface ActiveSkills {
  __typename?: 'ActiveSkills'
  AIFile?: Maybe<Scalars['string']['output']>
  ActionType?: Maybe<ActionTypes>
  ActiveSkillTargetTypes?: Maybe<Maybe<ActiveSkillTargetTypes>[]>
  ActiveSkillTypes?: Maybe<Maybe<ActiveSkillType>[]>
  AiScript?: Maybe<Scalars['string']['output']>
  AlternateSkillTargetingBehaviour?: Maybe<AlternateSkillTargetingBehaviours>
  Description?: Maybe<Scalars['string']['output']>
  DisplayedName?: Maybe<Scalars['string']['output']>
  GrantedEffect?: Maybe<Scalars['string']['output']>
  HideOnWebsite?: Maybe<Scalars['bool']['output']>
  Icon_DDSFile?: Maybe<Scalars['string']['output']>
  Id?: Maybe<Scalars['string']['output']>
  Input_Stats?: Maybe<Maybe<Stats>[]>
  IsManuallyCasted?: Maybe<Scalars['bool']['output']>
  MinionActiveSkillTypes?: Maybe<Maybe<ActiveSkillType>[]>
  Output_Stats?: Maybe<Maybe<Stats>[]>
  SecondarySkillSpecificStats?: Maybe<Maybe<Stats>[]>
  SkillMine?: Maybe<Scalars['i32']['output']>
  SkillTotemId?: Maybe<SkillTotems>
  StatContextFlags?: Maybe<Maybe<VirtualStatContextFlags>[]>
  StatDescription?: Maybe<Scalars['string']['output']>
  StatDescriptionType?: Maybe<Scalars['i32']['output']>
  TransfigureBase?: Maybe<ActiveSkills>
  VideoClip?: Maybe<Scalars['string']['output']>
  WeaponRestriction_ItemClasses?: Maybe<Maybe<ItemClasses>[]>
  WebsiteDescription?: Maybe<Scalars['string']['output']>
  WebsiteImage?: Maybe<Scalars['string']['output']>
  _?: Maybe<Scalars['string']['output']>
  isGem?: Maybe<Scalars['bool']['output']>
}

export interface AlternateSkillTargetingBehaviours {
  __typename?: 'AlternateSkillTargetingBehaviours'
  ClientStrings?: Maybe<ClientStrings>
  Id?: Maybe<Scalars['string']['output']>
  _?: Maybe<Maybe<Scalars['i32']['output']>[]>
}

export interface Animation {
  __typename?: 'Animation'
  Id?: Maybe<Scalars['string']['output']>
  Mainhand_AnimationKey?: Maybe<Animation>
  Offhand_AnimationKey?: Maybe<Animation>
  _?: Maybe<Maybe<Scalars['string']['output']>[]>
}

export interface ArmourTypes {
  __typename?: 'ArmourTypes'
  Armour?: Maybe<Scalars['i32']['output']>
  BaseItemType?: Maybe<BaseItemTypes>
  EnergyShield?: Maybe<Scalars['i32']['output']>
  Evasion?: Maybe<Scalars['i32']['output']>
  IncreasedMovementSpeed?: Maybe<Scalars['i32']['output']>
  Ward?: Maybe<Scalars['i32']['output']>
  _?: Maybe<Scalars['i32']['output']>
}

export interface BaseItemTypes {
  __typename?: 'BaseItemTypes'
  Achievement?: Maybe<Maybe<AchievementItems>[]>
  DropLevel?: Maybe<Scalars['i32']['output']>
  Equip_AchievementItem?: Maybe<AchievementItems>
  FlavourText?: Maybe<FlavourText>
  /** the item which represents this item in the fragment stash tab */
  FragmentBaseItemType?: Maybe<BaseItemTypes>
  HASH32?: Maybe<Scalars['u32']['output']>
  Height?: Maybe<Scalars['i32']['output']>
  Id?: Maybe<Scalars['string']['output']>
  IdentifyMagic_AchievementItems?: Maybe<Maybe<AchievementItems>[]>
  Identify_AchievementItems?: Maybe<Maybe<AchievementItems>[]>
  Implicit_Mods?: Maybe<Maybe<Mods>[]>
  /** the inflection identifier used for i18n in related fields */
  Inflection?: Maybe<Scalars['string']['output']>
  InheritsFrom?: Maybe<Scalars['string']['output']>
  IsCorrupted?: Maybe<Scalars['bool']['output']>
  ItemClass?: Maybe<ItemClasses>
  ItemVisualIdentity?: Maybe<ItemVisualIdentity>
  ModDomain?: Maybe<ModDomains>
  Name?: Maybe<Scalars['string']['output']>
  SiteVisibility?: Maybe<Scalars['i32']['output']>
  SizeOnGround?: Maybe<Scalars['i32']['output']>
  SoundEffect?: Maybe<SoundEffects>
  Tags?: Maybe<Maybe<Tags>[]>
  TradeMarketCategory?: Maybe<TradeMarketCategory>
  Unmodifiable?: Maybe<Scalars['bool']['output']>
  VendorRecipe_AchievementItems?: Maybe<Maybe<AchievementItems>[]>
  Width?: Maybe<Scalars['i32']['output']>
  _?: Maybe<Scalars['rid']['output']>
}

export interface BeltTypes {
  __typename?: 'BeltTypes'
  BaseItem?: Maybe<BaseItemTypes>
  CharmSlots?: Maybe<Scalars['i32']['output']>
}

export interface BuffDefinitions {
  __typename?: 'BuffDefinitions'
  BuffCategory?: Maybe<Scalars['i32']['output']>
  BuffLimit?: Maybe<Scalars['i32']['output']>
  BuffVisual?: Maybe<BuffVisuals>
  CancelOnDeath?: Maybe<Scalars['bool']['output']>
  ConditionStats?: Maybe<Maybe<Stats>[]>
  Current_Stat?: Maybe<Stats>
  Description?: Maybe<Scalars['string']['output']>
  GrantedFlags?: Maybe<Maybe<Stats>[]>
  GrantedStats?: Maybe<Maybe<Stats>[]>
  Id?: Maybe<Scalars['string']['output']>
  Implementation?: Maybe<Scalars['string']['output']>
  Invisible?: Maybe<Scalars['bool']['output']>
  IsRecovery?: Maybe<Scalars['bool']['output']>
  IsSkillBuff?: Maybe<Scalars['bool']['output']>
  Maximum_Stat?: Maybe<Stats>
  MergeMode?: Maybe<BuffMergeModes>
  MinStat?: Maybe<Stats>
  Name?: Maybe<Scalars['string']['output']>
  Removable?: Maybe<Scalars['bool']['output']>
  ShowCount?: Maybe<Scalars['bool']['output']>
  Stats?: Maybe<Maybe<Stats>[]>
  Stats2?: Maybe<Maybe<Stats>[]>
  UIStackMode?: Maybe<Scalars['i32']['output']>
  _?: Maybe<Maybe<Scalars['rid']['output']>[]>
}

export enum BuffMergeModes {
  _ = '_',
}

export interface BuffTemplates {
  __typename?: 'BuffTemplates'
  AuraRadius?: Maybe<Scalars['i32']['output']>
  BuffDefinition?: Maybe<BuffDefinitions>
  BuffVisual?: Maybe<BuffVisuals>
  Buff_StatValues?: Maybe<Maybe<Scalars['i32']['output']>[]>
  Id?: Maybe<Scalars['string']['output']>
  Stats?: Maybe<Maybe<Stats>[]>
  _?: Maybe<Scalars['bool']['output']>
}

export interface BuffVisualOrbArt {
  __typename?: 'BuffVisualOrbArt'
  Id?: Maybe<Scalars['string']['output']>
  MiscAnimated?: Maybe<MiscAnimated>
  _?: Maybe<Scalars['i32']['output']>
}

export interface BuffVisualOrbTypes {
  __typename?: 'BuffVisualOrbTypes'
  HeightStat?: Maybe<Stats>
  Id?: Maybe<Scalars['string']['output']>
  RadiusStat?: Maybe<Stats>
  _?: Maybe<Scalars['f32']['output']>
}

export interface BuffVisualOrbs {
  __typename?: 'BuffVisualOrbs'
  BuffVisualOrbArtKeys?: Maybe<Maybe<BuffVisualOrbArt>[]>
  BuffVisualOrbArtKeys2?: Maybe<Maybe<BuffVisualOrbArt>[]>
  BuffVisualOrbTypesKey?: Maybe<BuffVisualOrbTypes>
  Id?: Maybe<Scalars['string']['output']>
  Player_BuffVisualOrbArtKeys?: Maybe<Maybe<BuffVisualOrbArt>[]>
}

export interface BuffVisuals {
  __typename?: 'BuffVisuals'
  BuffDDSFile?: Maybe<Scalars['string']['output']>
  BuffDescription?: Maybe<Scalars['string']['output']>
  BuffName?: Maybe<Scalars['string']['output']>
  BuffVisualOrbs?: Maybe<Maybe<BuffVisualOrbs>[]>
  EPKFile?: Maybe<Scalars['string']['output']>
  EPKFiles?: Maybe<Maybe<Scalars['string']['output']>[]>
  EPKFiles1?: Maybe<Maybe<Scalars['string']['output']>[]>
  EPKFiles2?: Maybe<Maybe<Scalars['string']['output']>[]>
  ExtraArt?: Maybe<Scalars['string']['output']>
  HasExtraArt?: Maybe<Scalars['bool']['output']>
  Id?: Maybe<Scalars['string']['output']>
  MiscAnimated1?: Maybe<MiscAnimated>
  MiscAnimated2?: Maybe<MiscAnimated>
  MiscAnimated3?: Maybe<MiscAnimated>
  PreloadGroups?: Maybe<Maybe<PreloadGroups>[]>
  _?: Maybe<Scalars['string']['output']>
}

export interface ClientStrings {
  __typename?: 'ClientStrings'
  HASH32?: Maybe<Scalars['i32']['output']>
  Id?: Maybe<Scalars['string']['output']>
  PlaystationText?: Maybe<Scalars['string']['output']>
  Text?: Maybe<Scalars['string']['output']>
  XBoxText?: Maybe<Scalars['string']['output']>
  XBoxText2?: Maybe<Scalars['string']['output']>
}

export enum CooldownBypassTypes {
  _ = '_',
}

export interface CostTypes {
  __typename?: 'CostTypes'
  Divisor?: Maybe<Scalars['i32']['output']>
  FormatText?: Maybe<Scalars['string']['output']>
  Id?: Maybe<Scalars['string']['output']>
  PerMinute?: Maybe<Scalars['bool']['output']>
  Stat?: Maybe<Stats>
}

export interface CurrencyItems {
  __typename?: 'CurrencyItems'
  Action?: Maybe<Scalars['string']['output']>
  BaseItemType?: Maybe<BaseItemTypes>
  ChangedForHardmode?: Maybe<Scalars['bool']['output']>
  CombineAchievements?: Maybe<Maybe<AchievementItems>[]>
  CurrencyTab_StackSize?: Maybe<Scalars['i32']['output']>
  CurrencyUseType?: Maybe<Scalars['i32']['output']>
  Description?: Maybe<Scalars['string']['output']>
  DescriptionHardmode?: Maybe<Scalars['string']['output']>
  Directions?: Maybe<Scalars['string']['output']>
  /** Full stack transforms into this item */
  FullStack_BaseItemType?: Maybe<BaseItemTypes>
  IsGold?: Maybe<Scalars['bool']['output']>
  ModifyContractsAchievements?: Maybe<Maybe<AchievementItems>[]>
  ModifyMapsAchievements?: Maybe<Maybe<AchievementItems>[]>
  Possession_AchievementItem?: Maybe<AchievementItems>
  Scroll?: Maybe<Scalars['bool']['output']>
  StackSize?: Maybe<Scalars['i32']['output']>
  UsageHint?: Maybe<Scalars['string']['output']>
  Usage_AchievementItems?: Maybe<Maybe<AchievementItems>[]>
  XBoxDirections?: Maybe<Scalars['string']['output']>
  _?: Maybe<Scalars['bool']['output']>
}

export interface FlavourText {
  __typename?: 'FlavourText'
  HASH16?: Maybe<Scalars['u16']['output']>
  Id?: Maybe<Scalars['string']['output']>
  Text?: Maybe<Scalars['string']['output']>
}

export interface GrantedEffectLabels {
  __typename?: 'GrantedEffectLabels'
  Id?: Maybe<Scalars['string']['output']>
  Text?: Maybe<Scalars['string']['output']>
  _?: Maybe<Scalars['bool']['output']>
}

export interface GrantedEffectStatSets {
  __typename?: 'GrantedEffectStatSets'
  BaseEffectiveness?: Maybe<Scalars['f32']['output']>
  ConstantStats?: Maybe<Maybe<Stats>[]>
  ConstantStatsValues?: Maybe<Maybe<Scalars['i32']['output']>[]>
  DamageIncrementalEffectiveness?: Maybe<Scalars['f32']['output']>
  Id?: Maybe<Scalars['string']['output']>
  ImplicitStats?: Maybe<Maybe<Stats>[]>
  IncrementalEffectiveness?: Maybe<Scalars['f32']['output']>
  Label?: Maybe<GrantedEffectLabels>
  _?: Maybe<Scalars['bool']['output']>
}

export interface GrantedEffects {
  __typename?: 'GrantedEffects'
  ActiveSkill?: Maybe<ActiveSkills>
  /** This support gem adds these types to supported active skills */
  AddedActiveSkillTypes?: Maybe<Maybe<ActiveSkillType>[]>
  AddedMinionActiveSkillTypes?: Maybe<Maybe<ActiveSkillType>[]>
  AdditionalStatSets?: Maybe<Maybe<GrantedEffectStatSets>[]>
  /** This support gem only supports active skills with at least one of these types */
  AllowedActiveSkillTypes?: Maybe<Maybe<ActiveSkillType>[]>
  Animation?: Maybe<Animation>
  Audio?: Maybe<Scalars['string']['output']>
  CannotBeSupported?: Maybe<Scalars['bool']['output']>
  CastTime?: Maybe<Scalars['i32']['output']>
  CooldownNotRecoverDuringActive?: Maybe<Scalars['bool']['output']>
  CostTypes?: Maybe<Maybe<CostTypes>[]>
  /** This support gem does not support active skills with one of these types */
  ExcludedActiveSkillTypes?: Maybe<Maybe<ActiveSkillType>[]>
  HASH32?: Maybe<Scalars['u32']['output']>
  Id?: Maybe<Scalars['string']['output']>
  IgnoreMinionTypes?: Maybe<Scalars['bool']['output']>
  IsSupport?: Maybe<Scalars['bool']['output']>
  LifeLeech?: Maybe<Scalars['i32']['output']>
  MultiPartAchievement?: Maybe<MultiPartAchievements>
  RegularVariant?: Maybe<GrantedEffects>
  StatSet?: Maybe<GrantedEffectStatSets>
  SupportGemLetter?: Maybe<Scalars['string']['output']>
  SupportWeaponRestrictions?: Maybe<Maybe<ItemClasses>[]>
  /** This support gem only supports active skills that come from gem items */
  SupportsGemsOnly?: Maybe<Scalars['bool']['output']>
  _?: Maybe<Scalars['i32']['output']>
}

export interface GrantedEffectsPerLevel {
  __typename?: 'GrantedEffectsPerLevel'
  AttackSpeedMultiplier?: Maybe<Scalars['i32']['output']>
  AttackTime?: Maybe<Scalars['i32']['output']>
  Cooldown?: Maybe<Scalars['i32']['output']>
  CooldownBypassType?: Maybe<CooldownBypassTypes>
  CooldownGroup?: Maybe<Scalars['i32']['output']>
  CostAmounts?: Maybe<Maybe<Scalars['i32']['output']>[]>
  CostMultiplier?: Maybe<Scalars['i32']['output']>
  EffectOnPlayer?: Maybe<Scalars['i32']['output']>
  GrantedEffect?: Maybe<GrantedEffects>
  Level?: Maybe<Scalars['i32']['output']>
  PvPDamageMultiplier?: Maybe<Scalars['i32']['output']>
  Reservation?: Maybe<Scalars['i32']['output']>
  SoulGainPreventionDuration?: Maybe<Scalars['i32']['output']>
  StoredUses?: Maybe<Scalars['i32']['output']>
  VaalSouls?: Maybe<Scalars['i32']['output']>
  VaalStoredUses?: Maybe<Scalars['i32']['output']>
  _?: Maybe<Scalars['f32']['output']>
}

export enum InfluenceTypes {
  Adjudicator = 'ADJUDICATOR',
  Basilisk = 'BASILISK',
  Crusader = 'CRUSADER',
  Elder = 'ELDER',
  Eyrie = 'EYRIE',
  None = 'NONE',
  Shaper = 'SHAPER',
}

export interface ItemClassCategories {
  __typename?: 'ItemClassCategories'
  Id?: Maybe<Scalars['string']['output']>
  Text?: Maybe<Scalars['string']['output']>
  _?: Maybe<Scalars['rid']['output']>
}

export interface ItemClasses {
  __typename?: 'ItemClasses'
  AllocateToMapOwner?: Maybe<Scalars['bool']['output']>
  AlwaysAllocate?: Maybe<Scalars['bool']['output']>
  AlwaysShow?: Maybe<Scalars['bool']['output']>
  CanBeCorrupted?: Maybe<Scalars['bool']['output']>
  CanBeDoubleCorrupted?: Maybe<Scalars['bool']['output']>
  CanBeFractured?: Maybe<Scalars['bool']['output']>
  CanHaveAspects?: Maybe<Scalars['bool']['output']>
  CanHaveIncubators?: Maybe<Scalars['bool']['output']>
  CanHaveInfluence?: Maybe<Scalars['bool']['output']>
  CanHaveVeiledMods?: Maybe<Scalars['bool']['output']>
  CanScourge?: Maybe<Scalars['bool']['output']>
  CanTransferSkin?: Maybe<Scalars['bool']['output']>
  CanUpgradeRarity?: Maybe<Scalars['bool']['output']>
  EquipAchievement?: Maybe<AchievementItems>
  Id?: Maybe<Scalars['string']['output']>
  IdentifyAchievements?: Maybe<Maybe<AchievementItems>[]>
  InventoryDimensions?: Maybe<Maybe<Scalars['i32']['output']>[]>
  ItemClassCategory?: Maybe<ItemClassCategories>
  ItemClassFlags?: Maybe<Maybe<Scalars['i32']['output']>[]>
  ItemStance?: Maybe<ItemStances>
  Name?: Maybe<Scalars['string']['output']>
  PickedUpQuest?: Maybe<QuestFlags>
  RemovedIfLeavesArea?: Maybe<Scalars['bool']['output']>
  TradeMarketCategory?: Maybe<TradeMarketCategory>
  Unmodfiable?: Maybe<Scalars['bool']['output']>
  UsableInMapDevice?: Maybe<Scalars['bool']['output']>
  _?: Maybe<Scalars['bool']['output']>
}

export interface ItemStances {
  __typename?: 'ItemStances'
  Id?: Maybe<Scalars['string']['output']>
}

export interface ItemVisualIdentity {
  __typename?: 'ItemVisualIdentity'
  AOFile?: Maybe<Scalars['string']['output']>
  AOFile2?: Maybe<Scalars['string']['output']>
  AnimationLocation?: Maybe<Scalars['string']['output']>
  /** 0: Standard, 1: Flask, 2: Divination Card, 3: Gem */
  Composition?: Maybe<Scalars['i32']['output']>
  Corrupt_AchievementItemsKeys?: Maybe<Maybe<AchievementItems>[]>
  CreateCorruptedJewelAchievementItemsKey?: Maybe<AchievementItems>
  DDSFile?: Maybe<Scalars['string']['output']>
  DuelistDexSMFiles?: Maybe<Maybe<Scalars['string']['output']>[]>
  DuelistShape?: Maybe<Scalars['string']['output']>
  EPKFile?: Maybe<Scalars['string']['output']>
  HASH16?: Maybe<Scalars['i16']['output']>
  Id?: Maybe<Scalars['string']['output']>
  Identify_AchievementItemsKeys?: Maybe<Maybe<AchievementItems>[]>
  InventorySoundEffect?: Maybe<SoundEffects>
  IsAlternateArt?: Maybe<Scalars['bool']['output']>
  IsAtlasOfWorldsMapIcon?: Maybe<Scalars['bool']['output']>
  IsTier16Icon?: Maybe<Scalars['bool']['output']>
  MarauderSMFiles?: Maybe<Maybe<Scalars['string']['output']>[]>
  MarauderShape?: Maybe<Scalars['string']['output']>
  Pickup_AchievementItemsKeys?: Maybe<Maybe<AchievementItems>[]>
  RangerSMFiles?: Maybe<Maybe<Scalars['string']['output']>[]>
  RangerShape?: Maybe<Scalars['string']['output']>
  SMFiles?: Maybe<Maybe<Scalars['string']['output']>[]>
  ScionSMFiles?: Maybe<Maybe<Scalars['string']['output']>[]>
  ScionShape?: Maybe<Scalars['string']['output']>
  ShadowSMFiles?: Maybe<Maybe<Scalars['string']['output']>[]>
  ShadowShape?: Maybe<Scalars['string']['output']>
  TemplarSMFiles?: Maybe<Maybe<Scalars['string']['output']>[]>
  TemplarShape?: Maybe<Scalars['string']['output']>
  WitchSMFiles?: Maybe<Maybe<Scalars['string']['output']>[]>
  WitchShape?: Maybe<Scalars['string']['output']>
  _?: Maybe<Scalars['bool']['output']>
}

export interface MiscAnimated {
  __typename?: 'MiscAnimated'
  AOFile?: Maybe<Scalars['string']['output']>
  HASH32?: Maybe<Scalars['i32']['output']>
  Id?: Maybe<Scalars['string']['output']>
  PreloadGroupsKeys?: Maybe<Maybe<PreloadGroups>[]>
  _?: Maybe<Scalars['i32']['output']>
}

export enum ModAuraFlags {
  _ = '_',
}

export enum ModDomains {
  AbyssJewel = 'ABYSS_JEWEL',
  AfflictionJewel = 'AFFLICTION_JEWEL',
  AnimalCharm = 'ANIMAL_CHARM',
  Area = 'AREA',
  Atlas = 'ATLAS',
  BaseJewel = 'BASE_JEWEL',
  Chest = 'CHEST',
  Crafted = 'CRAFTED',
  CrucibleMap = 'CRUCIBLE_MAP',
  Delve = 'DELVE',
  DelveArea = 'DELVE_AREA',
  Dummy = 'DUMMY',
  EldritchAltar = 'ELDRITCH_ALTAR',
  ExpeditionRelic = 'EXPEDITION_RELIC',
  Flask = 'FLASK',
  HeistArea = 'HEIST_AREA',
  HeistNpc = 'HEIST_NPC',
  HeistTrinket = 'HEIST_TRINKET',
  Item = 'ITEM',
  Leaguestone = 'LEAGUESTONE',
  MapDevice = 'MAP_DEVICE',
  MemoryLine = 'MEMORY_LINE',
  Monster = 'MONSTER',
  NecropolisMonster = 'NECROPOLIS_MONSTER',
  SanctumRelic = 'SANCTUM_RELIC',
  SanctumSpecial = 'SANCTUM_SPECIAL',
  Sentinel = 'SENTINEL',
  SynthesisA = 'SYNTHESIS_A',
  SynthesisBonus = 'SYNTHESIS_BONUS',
  SynthesisGlobals = 'SYNTHESIS_GLOBALS',
  Tincture = 'TINCTURE',
  UberMap = 'UBER_MAP',
  Unveiled = 'UNVEILED',
  Veiled = 'VEILED',
  Watchstone = 'WATCHSTONE',
  _ = '_',
}

export interface ModFamily {
  __typename?: 'ModFamily'
  Id?: Maybe<Scalars['string']['output']>
}

export enum ModGenerationType {
  Bestiary = 'BESTIARY',
  Blight = 'BLIGHT',
  BlightTower = 'BLIGHT_TOWER',
  Bloodlines = 'BLOODLINES',
  Corrupted = 'CORRUPTED',
  DelveArea = 'DELVE_AREA',
  EaterImplicit = 'EATER_IMPLICIT',
  Enchantment = 'ENCHANTMENT',
  Essence = 'ESSENCE',
  ExarchImplicit = 'EXARCH_IMPLICIT',
  ExpeditionLogbook = 'EXPEDITION_LOGBOOK',
  FlaskEnchantmentEnkindling = 'FLASK_ENCHANTMENT_ENKINDLING',
  FlaskEnchantmentInstilling = 'FLASK_ENCHANTMENT_INSTILLING',
  MonsterAffliction = 'MONSTER_AFFLICTION',
  NecropolisDevoted = 'NECROPOLIS_DEVOTED',
  NecropolisHaunted = 'NECROPOLIS_HAUNTED',
  Nemesis = 'NEMESIS',
  Prefix = 'PREFIX',
  ScourgeDownside = 'SCOURGE_DOWNSIDE',
  ScourgeMap = 'SCOURGE_MAP',
  ScourgeUpside = 'SCOURGE_UPSIDE',
  Suffix = 'SUFFIX',
  SynthesisA = 'SYNTHESIS_A',
  SynthesisBonus = 'SYNTHESIS_BONUS',
  SynthesisGlobals = 'SYNTHESIS_GLOBALS',
  Talisman = 'TALISMAN',
  Tempest = 'TEMPEST',
  Torment = 'TORMENT',
  Unique = 'UNIQUE',
  WeaponTree = 'WEAPON_TREE',
  WeaponTreeRecombined = 'WEAPON_TREE_RECOMBINED',
  _ = '_',
}

export interface ModSellPriceTypes {
  __typename?: 'ModSellPriceTypes'
  Id?: Maybe<Scalars['string']['output']>
}

export interface ModType {
  __typename?: 'ModType'
  ModSellPriceTypesKeys?: Maybe<Maybe<ModSellPriceTypes>[]>
  Name?: Maybe<Scalars['string']['output']>
  _?: Maybe<Scalars['bool']['output']>
}

export interface Mods {
  __typename?: 'Mods'
  AchievementItems?: Maybe<Maybe<AchievementItems>[]>
  ArchnemesisMinionMod?: Maybe<Mods>
  AuraFlags?: Maybe<Maybe<ModAuraFlags>[]>
  BuffTemplate?: Maybe<BuffTemplates>
  ChestModType?: Maybe<Maybe<ModType>[]>
  CraftingItemClassRestrictions?: Maybe<Maybe<ItemClasses>[]>
  Domain?: Maybe<ModDomains>
  Families?: Maybe<Maybe<ModFamily>[]>
  FullAreaClear_AchievementItems?: Maybe<Maybe<AchievementItems>[]>
  GenerationType?: Maybe<ModGenerationType>
  GenerationWeight_Tags?: Maybe<Maybe<Tags>[]>
  GenerationWeight_Values?: Maybe<Maybe<Scalars['i32']['output']>[]>
  GrantedEffectsPerLevel?: Maybe<Maybe<GrantedEffectsPerLevel>[]>
  HASH16?: Maybe<Scalars['u16']['output']>
  HASH32?: Maybe<Scalars['u32']['output']>
  HeistAchievements?: Maybe<Maybe<AchievementItems>[]>
  Heist_AddStatValue1?: Maybe<Scalars['i32']['output']>
  Heist_AddStatValue2?: Maybe<Scalars['i32']['output']>
  Heist_Stat0?: Maybe<Stats>
  Heist_Stat1?: Maybe<Stats>
  Heist_SubStatValue1?: Maybe<Scalars['i32']['output']>
  Heist_SubStatValue2?: Maybe<Scalars['i32']['output']>
  Id?: Maybe<Scalars['string']['output']>
  ImplicitTags?: Maybe<Maybe<Tags>[]>
  InfluenceType?: Maybe<InfluenceTypes>
  IsEssenceOnlyModifier?: Maybe<Scalars['bool']['output']>
  Level?: Maybe<Scalars['i32']['output']>
  MaxLevel?: Maybe<Scalars['i32']['output']>
  ModType?: Maybe<ModType>
  ModifyMapsAchievements?: Maybe<Maybe<AchievementItems>[]>
  MonsterKillAchievements?: Maybe<Maybe<AchievementItems>[]>
  MonsterMetadata?: Maybe<Scalars['string']['output']>
  MonsterOnDeath?: Maybe<Scalars['string']['output']>
  Name?: Maybe<Scalars['string']['output']>
  RadiusJewelType?: Maybe<Scalars['i32']['output']>
  SpawnWeight_Tags?: Maybe<Maybe<Tags>[]>
  SpawnWeight_Values?: Maybe<Maybe<Scalars['i32']['output']>[]>
  Stat1?: Maybe<Stats>
  Stat1Value?: Maybe<Scalars['i32']['output']>
  Stat2?: Maybe<Stats>
  Stat2Value?: Maybe<Scalars['i32']['output']>
  Stat3?: Maybe<Stats>
  Stat3Value?: Maybe<Scalars['i32']['output']>
  Stat4?: Maybe<Stats>
  Stat4Value?: Maybe<Scalars['i32']['output']>
  Stat5?: Maybe<Stats>
  Stat5Value?: Maybe<Scalars['i32']['output']>
  Stat6?: Maybe<Stats>
  Stat6Value?: Maybe<Scalars['i32']['output']>
  Tags?: Maybe<Maybe<Tags>[]>
  _?: Maybe<Maybe<GrantedEffectsPerLevel>[]>
}

export interface MultiPartAchievements {
  __typename?: 'MultiPartAchievements'
  AchievementItemsKey?: Maybe<AchievementItems>
  Id?: Maybe<Scalars['string']['output']>
  Threshold?: Maybe<Scalars['i32']['output']>
  _?: Maybe<Scalars['i32']['output']>
}

export interface PassiveSkillStatCategories {
  __typename?: 'PassiveSkillStatCategories'
  Id?: Maybe<Scalars['string']['output']>
  Name?: Maybe<Scalars['string']['output']>
}

export interface PreloadGroups {
  __typename?: 'PreloadGroups'
  Id?: Maybe<Scalars['string']['output']>
}

export interface QuestFlags {
  __typename?: 'QuestFlags'
  HASH32?: Maybe<Scalars['i32']['output']>
  Id?: Maybe<Scalars['string']['output']>
}

export enum SkillTotems {
  _ = '_',
}

export interface SoundEffects {
  __typename?: 'SoundEffects'
  Id?: Maybe<Scalars['string']['output']>
  SoundFile?: Maybe<Scalars['string']['output']>
  SoundFile_2D?: Maybe<Scalars['string']['output']>
  _?: Maybe<Scalars['string']['output']>
}

export enum StatSemantics {
  Flag = 'FLAG',
  OverridePercent = 'OVERRIDE_PERCENT',
  OverridePermyriad = 'OVERRIDE_PERMYRIAD',
  OverrideValue = 'OVERRIDE_VALUE',
  Percent = 'PERCENT',
  Permyriad = 'PERMYRIAD',
  Value = 'VALUE',
}

export interface Stats {
  __typename?: 'Stats'
  BelongsActiveSkills?: Maybe<Maybe<ActiveSkills>[]>
  Category?: Maybe<PassiveSkillStatCategories>
  ContextFlags?: Maybe<Maybe<VirtualStatContextFlags>[]>
  DotFlag?: Maybe<Maybe<VirtualStatContextFlags>[]>
  HASH32?: Maybe<Scalars['u32']['output']>
  Id?: Maybe<Scalars['string']['output']>
  IsLocal?: Maybe<Scalars['bool']['output']>
  /** If not, displayed in advanced mod description as " — Unscalable Value" */
  IsScalable?: Maybe<Scalars['bool']['output']>
  IsVirtual?: Maybe<Scalars['bool']['output']>
  IsWeaponLocal?: Maybe<Scalars['bool']['output']>
  MainHandAlias_Stat?: Maybe<Stats>
  OffHandAlias_Stat?: Maybe<Stats>
  Semantic?: Maybe<StatSemantics>
  Text?: Maybe<Scalars['string']['output']>
  WeaponHandCheck?: Maybe<Scalars['bool']['output']>
  _?: Maybe<Scalars['bool']['output']>
}

export interface Tags {
  __typename?: 'Tags'
  DisplayString?: Maybe<Scalars['string']['output']>
  HASH32?: Maybe<Scalars['u32']['output']>
  Id?: Maybe<Scalars['string']['output']>
  UiHints?: Maybe<Scalars['string']['output']>
  _?: Maybe<Maybe<Scalars['rid']['output']>[]>
}

export interface TradeMarketCategory {
  __typename?: 'TradeMarketCategory'
  Group?: Maybe<TradeMarketCategoryGroups>
  Id?: Maybe<Scalars['string']['output']>
  IsDisabled?: Maybe<Scalars['bool']['output']>
  Name?: Maybe<Scalars['string']['output']>
  StyleFlag?: Maybe<TradeMarketCategoryStyleFlag>
  _?: Maybe<Scalars['bool']['output']>
}

export interface TradeMarketCategoryGroups {
  __typename?: 'TradeMarketCategoryGroups'
  Id?: Maybe<Scalars['string']['output']>
  Name?: Maybe<Scalars['string']['output']>
}

export enum TradeMarketCategoryStyleFlag {
  _ = '_',
}

export interface VirtualStatContextFlags {
  __typename?: 'VirtualStatContextFlags'
  Id?: Maybe<Scalars['string']['output']>
  _?: Maybe<Scalars['i32']['output']>
}

export interface WeaponClasses {
  __typename?: 'WeaponClasses'
  ItemClass?: Maybe<ItemClasses>
  RangeMax?: Maybe<Scalars['i32']['output']>
  _?: Maybe<Scalars['rid']['output']>
}

export interface WeaponTypes {
  __typename?: 'WeaponTypes'
  BaseItemType?: Maybe<BaseItemTypes>
  Critical?: Maybe<Scalars['i32']['output']>
  DamageMax?: Maybe<Scalars['i32']['output']>
  DamageMin?: Maybe<Scalars['i32']['output']>
  RangeMax?: Maybe<Scalars['i32']['output']>
  /** 1000 / speed -> attacks per second */
  Speed?: Maybe<Scalars['i32']['output']>
  _?: Maybe<Scalars['i32']['output']>
}
