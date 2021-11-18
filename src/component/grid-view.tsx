import { HexColor } from '../lib/interfaces'
import { preColors } from '../lib/predefined'
import Square from './square'

type GridProps = {
  data: HexColor[];
}

const GridView = (props: GridProps) =>
  <div className="grid">
    {
      props.data && props.data.map((v, i) => (
        // define each square color value and wether the "x" button should hidden or not
        <Square hex={v} key={v} isPermanent={preColors.includes(v)} />
      ))
    }
  </div>

export default GridView