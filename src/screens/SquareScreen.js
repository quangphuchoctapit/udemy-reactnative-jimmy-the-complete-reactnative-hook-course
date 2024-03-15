import { useReducer } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const reducerColor = (state, action) => {
  switch (action.colorType) {
    case 'red':
      return { ...state, red: state.red + action.amount }
    case 'green':
      return { ...state, green: state.green + action.amount }
    case 'blue':
      return { ...state, blue: state.blue + action.amount }
    default:
      return state
  }
}

const SquareScreen = () => {
  const COLOR_AMOUNT = 40
  const defaultColor = { red: 0, green: 0, blue: 0 }
  const [stateColor, dispatchColor] = useReducer(reducerColor, defaultColor)
  const { red, green, blue } = stateColor

  return (
    <View>
      <ColorCounter color='red' onIncrease={() => { dispatchColor({ colorType: 'red', amount: COLOR_AMOUNT }) }} onDecrease={() => { dispatchColor({ colorType: 'red', amount: -1 * COLOR_AMOUNT }) }} />
      <ColorCounter color='green' onIncrease={() => { dispatchColor({ colorType: 'green', amount: COLOR_AMOUNT }) }} onDecrease={() => { dispatchColor({ colorType: 'green', amount: -1 * COLOR_AMOUNT }) }} />
      <ColorCounter color='blue' onIncrease={() => { dispatchColor({ colorType: 'blue', amount: COLOR_AMOUNT }) }} onDecrease={() => { dispatchColor({ colorType: 'blue', amount: -1 * COLOR_AMOUNT }) }} />
      <View style={{ width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
    </View>
  )
}

export default SquareScreen