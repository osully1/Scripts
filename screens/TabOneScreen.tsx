import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  FlatList,
  Image
} from 'react-native';
import { useEffect, useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native'

const {width, height} = Dimensions.get('screen')

export default function TabOneScreen() {

  const data = [
    {test: 'old', name: 'Genesis'},
    {test: 'old', name: 'Exodus'},
    {test: 'old', name: 'Leviticus'},
    {test: 'old', name: 'Numbers'},
    {test: 'old', name: 'Deuteronomy'},
    {test: 'old', name: 'Joshua'},
    {test: 'old', name: 'Judges'},
    {test: 'old', name: 'Ruth'},
    {test: 'old', name: '1 Samuel'},
    {test: 'old', name: '2 Samuel'},
    {test: 'old', name: '1 Kings'}, 
    {test: 'old', name: '2 Kings'}, 
    {test: 'old', name: '1 Chronicles'}, 
    {test: 'old', name: '2 Chronicles'}, 
    {test: 'old', name: 'Ezra'}, 
    {test: 'old', name: 'Nehemiah'}, 
    {test: 'old', name: 'Esther'}, 
    {test: 'old', name: 'Job'}, 
    {test: 'old', name: 'Psalms'}, 
    {test: 'old', name: 'Proverbs'}, 
    {test: 'old', name: 'Ecclesiastes'}, 
    {test: 'old', name: 'Song of Solomon'}, 
    {test: 'old', name: 'Isaiah'}, 
    {test: 'old', name: 'Jeremiah'}, 
    {test: 'old', name: 'Lamentations'}, 
    {test: 'old', name: 'Ezekiel'}, 
    {test: 'old', name: 'Daniel'}, 
    {test: 'old', name: 'Hosea'}, 
    {test: 'old', name: 'Joel'}, 
    {test: 'old', name: 'Amos'}, 
    {test: 'old', name: 'Obadiah'}, 
    {test: 'old', name: 'Jonah'}, 
    {test: 'old', name: 'Micah'}, 
    {test: 'old', name: 'Nahum'}, 
    {test: 'old', name: 'Habakkuk'}, 
    {test: 'old', name: 'Zephaniah'}, 
    {test: 'old', name: 'Haggai'}, 
    {test: 'old', name: 'Zechariah'}, 
    {test: 'old', name: 'Malachi'},
    {test: 'new', name: 'Matthew'},
    {test: 'new', name: 'Mark'},
    {test: 'new', name: 'Luke'},
    {test: 'new', name: 'John'},
    {test: 'new', name: 'Acts'},
    {test: 'new', name: 'Romans'},
    {test: 'new', name: '1 Corinthians'},
    {test: 'new', name: '2 Corinthians'},
    {test: 'new', name: 'Galatians'},
    {test: 'new', name: 'Ephesians'},
    {test: 'new', name: 'Philippians'},
    {test: 'new', name: 'Colossians'},
    {test: 'new', name: '1 Thessalonians'},
    {test: 'new', name: '2 Thessalonians'},
    {test: 'new', name: '1 Timothy'},
    {test: 'new', name: '2 Timothy'},
    {test: 'new', name: 'Titus'},
    {test: 'new', name: 'Philemon'},
    {test: 'new', name: 'Hebrews'},
    {test: 'new', name: 'James'},
    {test: 'new', name: '1 Peter'},
    {test: 'new', name: '2 Peter'},
    {test: 'new', name: '1 John'},
    {test: 'new', name: '2 John'},
    {test: 'new', name: '3 John'},
    {test: 'new', name: 'Jude'},
    {test: 'new', name: 'Revelation'}
  ]

  const navigation = useNavigation()
  const [ dataList, setDataList ] = useState(data)
  const [ status, setStatus ] = useState('Old Testament')
  // May use below state array to set active button styles
  // const [ isPressed, setIsPressed ] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false, false, false, false, false, false])

  const setStatusFilter = status => {
    setStatus(status)
    if (status === 'Old Testament') {
      setDataList([...data.filter(e => e.test === 'old')])
    } else {
      setDataList([...data.filter(e => e.test === 'new')])
    }
  }

  const bookTabs = [{title: 'Old Testament'}, {title: 'New Testament'}]

  const renderItem = ({item, idx}) => {
    return (
      <View key={idx} style={styles.itemContainer}>
        <TouchableOpacity 
          style={styles.itemButton}
          onPress={() =>  {
            navigation.navigate('Chapters', {
              paramKey: item.name
          })}}
        >
          <Text style={styles.itemName}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  const separator = () => {
    return <View style={{height: 2, backgroundColor: '#f1f1f1'}} />
  }

  return (
    <>
      <SafeAreaView style={styles.tabContainer}>
        <View style={styles.listTab}>
          {
            bookTabs.map((e, i) => (
              <TouchableOpacity 
                key={i}
                style={[styles.btnTab, status === e.title && styles.btnTabActive]}
                onPress={() => setStatusFilter(e.title)}
              >
                <Text style={[styles.textTab, status === e.title && styles.textTabActive]}>{e.title}</Text>
              </TouchableOpacity>
            ))
          }
        </View>

        <FlatList
          data={dataList}
          keyExtractor={(e, i) => i.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={separator}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnTab: {
    width: Dimensions.get('window').width / 2,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#EBEBEB',
    padding: 14,
    justifyContent: 'center'
  },
  btnTabActive: {
    backgroundColor: '#B2081C'
  },
  textTab: {
    fontSize: 16
  },
  textTabActive: {
    color: '#fff'
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15
  },
  itemButton: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 12,
    justifyContent: 'center'
  },
  itemButtonActive: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 12,
    justifyContent: 'center',
    backgroundColor: '#B2081C'
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
