import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

const ComponentsScreen = () => {
    const intro = <Text style={{fontSize: 20}}>My name is Tommy</Text>
    return (
        <View>
            <Text style={styles.firstText}>Getting Started with React Native!</Text>
            <Text>{intro}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    firstText: {
        fontSize: 45
    }
})

export default ComponentsScreen

