import { useEffect, useReducer, useState } from 'react'
import './App.scss'
import AddForm from './component/add-form'
import FilterForm from './component/filter-form'
import GridView from './component/grid-view'
import { AppContext } from './lib/context'
import { filterHex } from './lib/hooks'
import { ColorEl, ColorStatType, HexColor } from './lib/interfaces'
import { initialState, reducer } from './lib/reducer'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [data, setData] = useState<HexColor[]>(initialState)
  const [filterStat, setFilterStat] = useState<ColorStatType>({
    r: false,
    g: false,
    b: false,
    s: false
  })

  const handleChange = (param: ColorEl) => setFilterStat({
    ...filterStat,
    [param]: !filterStat[param]
  })

  // update data on every change in filter-color checkbox and state 
  useEffect(() => setData(filterHex(state, filterStat)), [filterStat, state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <main>
        <AddForm />
        <FilterForm filterStat={filterStat} onChange={handleChange} />
        <GridView data={data.sort().reverse()} />
      </main>
    </AppContext.Provider>
  )
}

export default App