import { Component, Fragment } from 'react'
import { ColorEl, ColorStatType } from '../lib/interfaces'

type FilterProps = {
  filterStat: ColorStatType;
  onChange: (param: ColorEl) => void;
}

export default class FilterForm extends Component<FilterProps> {
  // Generate checkboxes and labels based on color stat params
  render() {
    const params: ColorEl[] = ['r', 'g', 'b', 's']
    const labels: string[] = ['Red', 'Blue', 'Green', 'Saturation']
    return (
      <form className="filter">
        {
          labels.map<JSX.Element>((v, i) =>
            <Fragment>
              <input type="checkbox"
                checked={this.props.filterStat[params[i]]}
                onChange={() => this.props.onChange(params[i])}
              />
              <label>
                {`${v} > 50%`}
              </label>
            </Fragment>
          )
        }
      </form>
    )
  }
}