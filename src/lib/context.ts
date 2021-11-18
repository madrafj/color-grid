import { createContext, Dispatch } from 'react'
import { HexColor } from './interfaces'
import { initialState } from './reducer'

type Actions = {
  type: 'Add' | 'Delete';
  val: HexColor;
}

export const AppContext = createContext<{
  state: HexColor[];
  dispatch: Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => undefined
})
