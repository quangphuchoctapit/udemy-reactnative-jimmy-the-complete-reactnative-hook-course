import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Heloo there</Text>
      {/* <Button title='Go to Component Demo' onPress={() => console.log('clicked')}/> */}
      <TouchableOpacity onPress={() => {navigation.navigate('List')}}>
        <Text>Go to LIST Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Components')}}>
        <Text>Go to Components Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Image')}}>
        <Text>Go to Image Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Counter')}}>
        <Text>Go to Counter Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Color')}}>
        <Text>Go to Color Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Square')}}>
        <Text>Go to Square Demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

