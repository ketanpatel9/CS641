import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import RefreshControlExample from './components/RefreshControlExample';
import VirtualList from './components/VirtualList';
import FlatListExample from './components/FlatListExample';
import SectionListExample from './components/SectionListExample';
import ModalExample from './components/ModalExample';

export default function App() {
  const [displayText, setDisplayText] = useState('Press or long press the button!');
  const [isHovered, setIsHovered] = useState(false);

  const handlePress = () => {
    setDisplayText('Button pressed!');
  };

  const handleLongPress = () => {
    setDisplayText('Button long pressed!');
  };

  const handleHoverIn = () => {
    setIsHovered(true);
    setDisplayText('Button hovered!');
  };

  const handleHoverOut = () => {
    setIsHovered(false);
    setDisplayText('Press or long press the button!');
  };

  return (
    <View style={styles.container}>
      <RefreshControlExample />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text>{displayText}</Text>
          <Pressable 
            onPress={handlePress} 
            onLongPress={handleLongPress}
            delayLongPress={2000}  // 2000 milliseconds = 2 seconds
            onHoverIn={handleHoverIn}
            onHoverOut={handleHoverOut}
          >
            <Text style={isHovered ? { color: 'blue' } : null}>Press Me</Text>
          </Pressable>
        </View>
        <FlatListExample />
        <SectionListExample />
        <ModalExample />
        <VirtualList />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures all content inside ScrollView is scrollable
  },
});
