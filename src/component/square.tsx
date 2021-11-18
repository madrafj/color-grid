import { useContext } from 'react'
import { AppContext } from '../lib/context'
import { HexColor } from '../lib/interfaces'

type SquareProps = {
  hex: HexColor;
  isPermanent: boolean
}

// the solution i came up with for not using inline-style css is using SVG
// because data-* + attr() not working for other than content prop
const Square = (props: SquareProps) => {
  const { dispatch } = useContext(AppContext)

  const handleDelete = (): void => {
    dispatch({ type: 'Delete', val: props.hex })
  }

  return (
    <div className="square" data-bg={props.hex}>
      <svg width="12rem" height="8rem" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" >
        <rect x="0" y="0" width="120" height="80" fill={props.hex} />
      </svg>
      <span>
        {props.hex}
      </span>
      <button
        title="Delete"
        data-xhidden={props.isPermanent}
        onClick={handleDelete}
      >
        &times;
      </button>
    </div>
  )
}

export default Square