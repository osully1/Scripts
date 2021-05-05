import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    SafeAreaView,
    FlatList,
    Image
  } from 'react-native';
import { useEffect, useState } from 'react';
import { fetchBooks } from '../assets/services/bible-api';

export default function ChapterScreen() {
    const bookChapterCount = [
        {count: 50, name: 'Genesis'},
        {count: 40, name: 'Exodus'},
        {count: 27, name: 'Leviticus'},
        {count: 36, name: 'Numbers'},
        {count: 34, name: 'Deuteronomy'},
        {count: 24, name: 'Joshua'},
        {count: 21, name: 'Judges'},
        {count: 4, name: 'Ruth'},
        {count: 31, name: '1 Samuel'},
        {count: 24, name: '2 Samuel'},
        {count: 22, name: '1 Kings'}, 
        {count: 25, name: '2 Kings'}, 
        {count: 29, name: '1 Chronicles'}, 
        {count: 36, name: '2 Chronicles'}, 
        {count: 10, name: 'Ezra'}, 
        {count: 13, name: 'Nehemiah'}, 
        {count: 10, name: 'Esther'}, 
        {count: 42, name: 'Job'}, 
        {count: 150, name: 'Psalm'}, 
        {count: 31, name: 'Proverbs'}, 
        {count: 12, name: 'Ecclesiastes'}, 
        {count: 8, name: 'Song of Solomon'}, 
        {count: 66, name: 'Isaiah'}, 
        {count: 52, name: 'Jeremiah'}, 
        {count: 5, name: 'Lamentations'}, 
        {count: 48, name: 'Ezekiel'}, 
        {count: 12, name: 'Daniel'}, 
        {count: 14, name: 'Hosea'}, 
        {count: 3, name: 'Joel'}, 
        {count: 9, name: 'Amos'}, 
        {count: 1, name: 'Obadiah'}, 
        {count: 4, name: 'Jonah'}, 
        {count: 7, name: 'Micah'}, 
        {count: 3, name: 'Nahum'}, 
        {count: 3, name: 'Habakkuk'}, 
        {count: 3, name: 'Zephaniah'}, 
        {count: 2, name: 'Haggai'}, 
        {count: 14, name: 'Zechariah'}, 
        {count: 4, name: 'Malachi'},
        {count: 28, name: 'Matthew'},
        {count: 16, name: 'Mark'},
        {count: 24, name: 'Luke'},
        {count: 21, name: 'John'},
        {count: 28, name: 'Acts'},
        {count: 16, name: 'Romans'},
        {count: 16, name: '1 Corinthians'},
        {count: 13, name: '2 Corinthians'},
        {count: 6, name: 'Galatians'},
        {count: 6, name: 'Ephesians'},
        {count: 4, name: 'Philippians'},
        {count: 4, name: 'Colossians'},
        {count: 5, name: '1 Thessalonians'},
        {count: 3, name: '2 Thessalonians'},
        {count: 6, name: '1 Timothy'},
        {count: 4, name: '2 Timothy'},
        {count: 3, name: 'Titus'},
        {count: 1, name: 'Philemon'},
        {count: 13, name: 'Hebrews'},
        {count: 5, name: 'James'},
        {count: 5, name: '1 Peter'},
        {count: 3, name: '2 Peter'},
        {count: 5, name: '1 John'},
        {count: 1, name: '2 John'},
        {count: 1, name: '3 John'},
        {count: 1, name: 'Jude'},
        {count: 22, name: 'Revelation'}
    ]

    const chapterArray = []

    const separator = () => {
        return <View style={{height: 2, backgroundColor: '#f1f1f1'}} />
      }

    const renderItem = ({item, idx}) => {
    return (
        <View key={idx} style={styles.itemContainer}>
        <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemName}>{item.name}</Text>
        </TouchableOpacity>
        </View>
    )
    }

    return (
        <FlatList
        data={bookChapterCount}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
      />
    )
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
    itemName: {
      fontWeight: 'bold',
      fontSize: 20
    }
  })