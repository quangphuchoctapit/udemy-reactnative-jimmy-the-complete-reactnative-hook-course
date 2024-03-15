import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BoxScreen = () => {
    return (
        <View>
            <View style={styles.viewStyle}>
                <Text style={styles.text1Style}>Box screen 1</Text>
                <View style={styles.text2Style}><View style={{ alignSelf: 'flex-start' }}><Text style={{ padding: 5, margin: 5 }}></Text></View><View style={{ flex: 1 }}><Text style={styles.customText2Style}>Box screen 2</Text></View></View>
                <Text style={styles.text3Style}>Box screen 3</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        padding: 5,
        height: 500,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    text1Style: {
        backgroundColor: 'orange',
        padding: 5,
        margin: 5
    },
    text2Style: {
        alignSelf: 'stretch',
    },
    customText2Style: {
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        backgroundColor: 'green',
        padding: 5,
        margin: 5
    },
    text3Style: {
        backgroundColor: 'violet',
        padding: 5,
        margin: 5

    },
})

export default BoxScreen