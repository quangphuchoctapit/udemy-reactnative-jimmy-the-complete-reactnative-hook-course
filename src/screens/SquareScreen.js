import { useState } from 'react'

import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  const COLOR_CHANGE = 40
  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 | red + change < 0 ? null : setRed(prev => prev + change)
        return
      case 'blue':
        blue + change > 255 | blue + change < 0 ? null : setBlue(prev => prev + change)
        return
      case 'green':
        green + change > 255 | green + change < 0 ? null : setGreen(prev => prev + change)
        return
    }
  }
  return (
    <View>
      <ColorCounter onDecrease={() => { setColor('red', -1 * COLOR_CHANGE) }} onIncrease={() => { setColor('red', COLOR_CHANGE) }} color='red' />
      <ColorCounter onDecrease={() => { setColor('green', -1 * COLOR_CHANGE) }} onIncrease={() => { setColor('green', COLOR_CHANGE) }} color='green' />
      <ColorCounter onDecrease={() => { setColor('blue', -1 * COLOR_CHANGE) }} onIncrease={() => { setColor('blue', COLOR_CHANGE) }} color='green' />
      <View style={{ width: 150, height: 150, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   Width
// })

export default SquareScreen
