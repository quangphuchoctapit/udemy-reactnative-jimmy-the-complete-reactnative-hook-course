import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ImageDetail = (props) => {
  return (
    <View>
        <Image source={props.image}/>
        <Text>hello img {props.title}</Text>
        <Text>Score: {props.score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageDetail
