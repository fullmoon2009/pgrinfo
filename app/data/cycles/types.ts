export type CycleTab = { key: string; label: string }

export type CycleMode = 'first' | 'repeat'

export type RowItem =
  | { kind: 'arrow' }
  | { kind: 'icon'; src: string; label?: string; rounded?: boolean; bordered?: boolean; count?: number }
  | { kind: 'duo'; left: string; right: string; label?: string; count?: number }

export type SlideRows = { kind: 'rows'; rows: RowItem[][] }
export type SlideText = { kind: 'text'; lines: string[] }

export type ModeContent = { video?: string; slides: (SlideRows | SlideText)[] }

export type Section = {
  typeIcon: string
  typeBorderCls?: string
  pillText?: Partial<Record<CycleMode, string>>
  noticeHtml?: string
  content: Partial<Record<CycleMode, ModeContent>>
}

export interface CharacterCycles {
  tabs: CycleTab[]
  ranks: CycleTab[]
  sections: Record<string, Section>
}
