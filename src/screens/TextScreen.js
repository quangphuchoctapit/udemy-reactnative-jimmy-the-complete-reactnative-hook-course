import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const TextScreen = () => {
    const [password, setPassword] = useState('')
    const [invalidPassword, setInvalidPassword] = useState(false)
    const validatePassword = () => {
        if (password.length < 5) {
            setInvalidPassword(true)
        }
        else {
            setInvalidPassword(false)
        }
    }
    return (
        <View>
            <Text>
                Password:</Text>
            <TextInput style={styles.input} onChangeText={newValue => setPassword(newValue)} value={password} />
            <Button title='submit' onPress={() => validatePassword()} />
            {invalidPassword ? <Text>Please enter a password at least 5 characters</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen