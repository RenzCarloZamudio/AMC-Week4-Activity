import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, ScrollView} from 'react-native';
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
    title: 'Lunch',
  },
  {
    id: 'm2',
    title: 'Play League',
  },
  {
    id: 'm4',
    title: 'Mald',
  },
  {
    id: 'm5',
    title: 'Play',
  },
  {
    id: 'm6',
    title: 'Play league',
  },
  {
    id: 'm7',
    title: 'Get frustrated',
  },
  {
    id: 'm8',
    title: 'Quit',
  },
];



const DATA3 = [
  {
    id: 'm1',
    title: 'Dinner',
  },
  {
    id: 'm2',
    title: 'Play League for the third time',
  },
  {
    id: 'm4',
    title: 'Mald again',
  },
  {
    id: 'm5',
    title: 'Rage queue',
  },
  {
    id: 'm6',
    title: 'Get frustrated again and again',
  },
  {
    id: 'm7',
    title: 'Ponder about my sanity',
  },
  {
    id: 'm8',
    title: 'Cry',
  },
  {
    id: 'm8',
    title: 'Sleep',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
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
    backgroundColor: 'cyan',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
});

export default App;