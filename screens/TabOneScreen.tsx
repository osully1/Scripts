import * as React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { fetchBooks } from '../assets/services/bible-api';
import OldTestamentList from '../components/TestamentList/OldTestamentList'
import NewTestamentList from '../components/TestamentList/NewTestamentList'

export default function TabOneScreen() {

  const [ bookList, setBookList ] = useState([])

  async function getBookInfo() {
    const data = await fetchBooks()
    const booksArray = Object.keys(data)
    // console.log(booksArray)
    setBookList(data)
    // console.log(bookList)
  }

  useEffect(() => {
    getBookInfo()
  }, [])
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <OldTestamentList />
        <NewTestamentList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
