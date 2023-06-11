// provider.ts
// Common Type for Custom Provider
import { Dispatch } from 'react'

type Resolver<T_State, T_Action> = (state: T_State, action: T_Action) => T_State
type ProviderProps = {
  children: React.ReactNode
}
type ContextType<T_State, T_action> = {
  state: T_State
  dispatch: Dispatch<T_action>
}

export type { Resolver, ProviderProps, ContextType }
