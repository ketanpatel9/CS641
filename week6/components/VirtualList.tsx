import React from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

type ItemData = {
  id: string;
  title: string;
};

const getItem = (_data: unknown, index: number): ItemData => ({
  id: index.toString(), // Use index as the stable ID
  title: `Item ${index + 1}`, // Proper string interpolation for title
});

const getItemCount = (_data: unknown): number => 50;

type ItemProps = {
  title: string;
};

const Item: React.FC<ItemProps> = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const VirtualList: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Virtual List</Text>
      <VirtualizedList
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0, // Handle StatusBar height
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 32,
  },
});

export default VirtualList;
