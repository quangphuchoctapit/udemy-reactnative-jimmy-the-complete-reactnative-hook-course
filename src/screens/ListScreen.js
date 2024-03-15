import React from 'react'
import {View, Text , StyleSheet, FlatList, TouchableOpacity} from 'react-native'

const ListScreen = (props) => {
    const Friends = [
        {name: 'fren 1', id: 'bla1', age: 21},
        {name: 'fren 2', id: 'bla2', age: 18},
        {name: 'fren 3', id: 'bla3', age: 19},
        {name: 'fren 4', id: 'bla4', age: 21},
        {name: 'fren 5', id: 'bla5', age: 20},
    ]
    return (
        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}><Text>Back</Text></TouchableOpacity>
        <FlatList data={Friends} keyExtractor={dog => dog.id} renderItem={({item}) => <Text style={styles.txtStyle}>{item.name} - {item.age}</Text>}/>

        </View>
    )
}

const styles = StyleSheet.create({
    txtStyle: {
        marginVertical: 50
    }
})

export default ListScreen