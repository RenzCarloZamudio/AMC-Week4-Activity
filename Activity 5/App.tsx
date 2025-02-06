import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
  backgroundColor: string;
  backgroundColor2: string;
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wake Up',
    backgroundColor: 'cyan',
    backgroundColor2: 'maroon',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Walk to PC',
    backgroundColor: 'red',
    backgroundColor2: 'blue',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Plug the Cord',
    backgroundColor: 'yellow',
    backgroundColor2: 'green',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Boot Up PC',
    backgroundColor: 'orange',
    backgroundColor2: 'black',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Open League',
    backgroundColor: 'purple',
    backgroundColor2: 'indigo',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);



const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? item.backgroundColor2 : item.backgroundColor;
    const color = item.id === selectedId ? 'white' : 'black';
  
  
  

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;