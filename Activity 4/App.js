import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'm1',
    title: 'Wake Up',
  },
  {
    id: 'm2',
    title: 'Stand Up',
  },
  {
    id: 'm3',
    title: 'Walk To PC',
  },
  {
    id: 'm3',
    title: 'Plug the cord',
  },
  {
    id: 'm5',
    title: 'Press button',
  },
  {
    id: 'm6',
    title: 'Wait for PC to boot up',
  },
  {
    id: 'm7',
    title: 'Sit down',
  },
  {
    id: 'm8',
    title: 'Play league',
  },
];

const DATA2 = [
  {
    id: 'm1',
    title: 'Walk to Table',
  },
  {
    id: 'm2',
    title: 'Eat Lunch',
  },
  {
    id: 'm3',
    title: 'Rest for a bit',
  },
  {
    id: 'm3',
    title: 'Walk to PC',
  },
  {
    id: 'm5',
    title: 'Play league again',
  },
];

const DATA3 = [
  {
    id: 'm1',
    title: 'Taking Bath',
  },
  {
    id: 'm2',
    title: 'Breakfast',
  },
  {
    id: 'm3',
    title: 'Toothbrush',
  },
  {
    id: 'm3',
    title: 'Social Media',
  },
  {
    id: 'm5',
    title: 'Play league',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 30}}>Morning</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />    
        <Text style={{fontSize: 30}}>Afternoon</Text>
          <FlatList
          data={DATA2}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          />  
        <Text style={{fontSize: 30}}>Evening</Text>
        <FlatList
          data={DATA3}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </ScrollView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
});

export default App