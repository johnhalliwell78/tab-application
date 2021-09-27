export interface Action {
  readonly type: string
  readonly payload?: any
}

export enum CODE {
  ERROR = 'error',
}

export interface Tab {
  readonly id: string
  readonly label: string
  readonly content_endpoint: string
}

export interface ReduxStore {
  readonly tab: any
}

export interface TabState {
  readonly loading: boolean
  readonly error: string
  readonly tabs: object
  readonly selectedTab: object
  readonly content: object
  readonly selectedFont: string
}

export interface Font {
  readonly id: string
  readonly label: string
  readonly abbr: string
}
