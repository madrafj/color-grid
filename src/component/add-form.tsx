import { FormEvent, useContext, useState } from 'react'
import { AppContext } from '../lib/context'
import { HexColor } from '../lib/interfaces'

const AddForm = () => {
  const { dispatch } = useContext(AppContext)
  const [hexInput, setHexInput] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      newHex: { value: HexColor };
    }
    dispatch({
      type: 'Add',
      val: target.newHex.value
    })
    setHexInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="addHex">
      <label htmlFor="newHex">Add New Color</label>
      <input
        id="newHex" name="newHex"
        pattern="#[A-Z0-9]{6}"
        title="# + A-Z | 0-9, eg: #FA1B24"
        value={hexInput}
        onChange={e => setHexInput(e.target.value)}
      />
      <input type="submit" />
    </form>
  )
}

export default AddForm