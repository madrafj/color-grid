import { getItems, setItems } from './hooks'
import { HexColor } from './interfaces'

export const initialState: HexColor[] = getItems()

type ActionType = {
  type: string;
  val: HexColor;
}

// reducer with state: colors array, action: add color and remove color
export const reducer = (state: HexColor[] = initialState, action: ActionType) => {
  let nuState = [...state]
  switch (action.type) {
    case 'Delete':
      nuState.splice(state.indexOf(action.val))
      setItems(nuState)
      return nuState
    case 'Add':
      nuState.push(action.val)
      setItems(nuState)
      return nuState
    default:
      return nuState
  }
}