import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail'


const ImageScreen = () => {
  return (
    <View>
        <ImageDetail title={'forest'} score={2} image={require('../../assets/avatar/kendricklmar.jpg')}/>
        <ImageDetail title={'ocean'} score={22} image={require('../../assets/avatar/masteryay.jpg')}/>
        <ImageDetail title={'mountain'} score={12} image={require('../../assets/avatar/user-female.png')}/>
        <ImageDetail title={'city'} score={21} image={require('../../assets/avatar/buluser.jpg')}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageScreen
