import { ColorStatType, HexColor } from './interfaces'
import { preColors } from './predefined'

// split hex to r,g,b with decimal value (0-1)
export const parseHex = (hex: HexColor): number[] =>
  hex.split('').filter((_, i) => i%2).map((v, i) => + `0x${v}${hex[(i+1)*2]}` / 255)

// saturation formula source https://www.rapidtables.com/convert/color/rgb-to-hsl.html
// We don't need Hue value to calculate Saturation
export const getSaturation = (r: number, g: number, b: number): number => {
  const cMax: number = Math.max(r, g, b)
  const cMin: number = Math.min(r, g, b)
  const lumens: number = (cMax + cMin) / 2
  const delta: number = cMax - cMin

  const result: number = delta !== 0 ? delta / (1 - Math.abs(2 * lumens - 1)) : 0
  return result
}

// filter hexcolor array based on colorStat value
export const filterHex = (arr: HexColor[], type: ColorStatType) =>
  arr.filter(v => {
    const [r, g, b] = parseHex(v)
    const s = getSaturation(r, g, b)
    // either value greater than half(127) or colorStat param[unChecked], will return true
    const stat: boolean =
      !(type.r && r <= 0.5) &&
      !(type.g && g <= 0.5) &&
      !(type.b && b <= 0.5) &&
      !(type.s && s <= 0.5)
    return stat
  })

// get colors from local storage
export const getItems = (): HexColor[] => {
  const strData: string | null = localStorage.getItem('data')
  if (strData) {
    return JSON.parse(strData)
  }
  else {
    return preColors
  }
}

// update colors to local storage
export const setItems = (data: HexColor[]): void => {
  const strData: string = JSON.stringify(data)
  localStorage.setItem('data', strData)
}