import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, Image, ActivityIndicator, Button, View } from 'react-native'

const TextComponent = ({ initialText }) => {
  const [text, setText] = useState(initialText)

  return (
    <View style={styles.componentContainer}>
      <Text>{text}</Text>
      <Button 
        title="Change Text" 
        onPress={() => setText(`Updated: ${Math.random().toString(36).substring(7)}`)}
      />
    </View>
  )
}

const NumberComponent = ({ initialNumber }) => {
  const [number, setNumber] = useState(initialNumber)

  return (
    <View style={styles.componentContainer}>
      <Text>Number: {number}</Text>
      <Button 
        title="Increment" 
        onPress={() => setNumber(prevNumber => prevNumber + 1)}
      />
    </View>
  )
}

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextComponent initialText="Initial text" />
      <NumberComponent initialNumber={0} />
      <Text>Text 1 is this</Text>
      <Text>text 2 is this</Text>
      <ActivityIndicator />
      <Image 
        source={{uri: "https://cdn.vox-cdn.com/thumbor/RvcSv_hd-VrlfPg8Tl_JOfhoIoU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19534169/171109_08_11_37_5DS_0545_1.jpg"}} 
        style={styles.tinyLogo}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  componentContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
})