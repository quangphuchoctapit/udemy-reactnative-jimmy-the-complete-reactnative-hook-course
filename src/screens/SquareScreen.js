import { useReducer } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const reducerColor = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return (state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload })
    case 'change_green':
      return (state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload })
    case 'change_blue':
      return (state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload })
    default:
      return state
  }
}

const SquareScreen = () => {
  const COLOR_CHANGE = 40
  const defaultColor = { red: 0, green: 0, blue: 0 }
  const [stateColor, dispatchColor] = useReducer(reducerColor, defaultColor)
  const { red, green, blue } = stateColor

  return (
    <View>
      <ColorCounter color='red' onIncrease={() => { dispatchColor({ type: 'change_red', payload: COLOR_CHANGE }) }} onDecrease={() => { dispatchColor({ type: 'change_red', payload: -1 * COLOR_CHANGE }) }} />
      <ColorCounter color='green' onIncrease={() => { dispatchColor({ type: 'change_green', payload: COLOR_CHANGE }) }} onDecrease={() => { dispatchColor({ type: 'change_green', payload: -1 * COLOR_CHANGE }) }} />
      <ColorCounter color='blue' onIncrease={() => { dispatchColor({ type: 'change_blue', payload: COLOR_CHANGE }) }} onDecrease={() => { dispatchColor({ type: 'change_blue', payload: -1 * COLOR_CHANGE }) }} />
      <View style={{ width: 150, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
    </View>
  )
}

export default SquareScreen