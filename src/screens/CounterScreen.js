// import React, {useState} from "react";
// import {View, Text, StyleSheet, Button} from 'react-native'

// const CounterScreen = () => {
//     const [counter, setCounter] = useState(0)
//   return (
//     <View>
//         <Button title='decrease' onPress={() => {setCounter(counter - 1)}}/>
//         <Button title='increase' onPress={() => {setCounter(counter + 1)}}/>
//       <Text>hell ocouneter: {counter}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({})

// export default CounterScreen;


import { View, Text, Button } from 'react-native'
import React, { useReducer } from 'react'

const reducerCounter = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, value: state.value + action.payload }
    case 'decrease':
      return { ...state, value: state.value - action.payload }
    default:
      return state
  }
}

const CounterScreen = () => {
  const defaultCounterValue = { value: 0 }
  const STEP = 10
  const [stateCounter, dispatchCounter] = useReducer(reducerCounter, defaultCounterValue)
  const { value } = stateCounter
  return (
    <View>
      <Button onPress={() => dispatchCounter({ type: 'decrease', payload: STEP })} title='DECREASE' />
      <Button onPress={() => dispatchCounter({ type: 'increase', payload: STEP })} title='INCREASE' />
      <View><Text>Counter: {value}</Text></View>
    </View>
  )
}

export default CounterScreen