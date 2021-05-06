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
import { useNavigation } from '@react-navigation/native'

export default function ChapterScreen({route}) {

    const bookChapterCount = {
        'Genesis': 50,
        'Exodus': 40,
        'Leviticus': 27,
        'Numbers': 36,
        'Deuteronomy': 34,
        'Judges': 21,
        'Ruth': 4,
        '1 Samuel': 31,
        '2 Samuel': 24,
        '1 Kings': 22, 
        '2 Kings': 25,
        '1 Chronicles': 29,
        '2 Chronicles': 36, 
        'Ezra': 10, 
        'Nehemiah': 13, 
        'Esther': 10, 
        'Job': 42, 
        'Psalms': 150, 
        'Proverbs': 31, 
        'Ecclesiastes': 12, 
        'Song of Solomon': 8, 
        'Isaiah': 66, 
        'Jeremiah': 52, 
        'Lamentations': 5, 
        'Ezekiel': 48, 
        'Daniel': 12, 
        'Hosea': 14, 
        'Joel': 3, 
        'Amos': 9, 
        'Obadiah': 1, 
        'Jonah': 4, 
        'Micah': 7, 
        'Nahum': 3, 
        'Habakkuk': 3, 
        'Zephaniah': 3, 
        'Haggai': 2, 
        'Zechariah': 14,
        'Malachi': 4,
        'Matthew': 28,
        'Mark': 16,
        'Luke': 24,
        'John': 21,
        'Acts': 28,
        'Romans': 16,
        '1 Corinthians': 16,
        '2 Corinthians': 13,
        'Galatians': 6,
        'Ephesians': 6,
        'Philippians': 4,
        'Colossians': 4,
        '1 Thessalonians': 5,
        '2 Thessalonians': 3,
        '1 Timothy': 6,
        '2 Timothy': 4,
        'Titus': 3,
        'Philemon': 1,
        'Hebrews': 13,
        'James': 5,
        '1 Peter': 5,
        '2 Peter': 3,
        '1 John': 5,
        '2 John': 1,
        '3 John': 1,
        'Jude': 1,
        'Revelation': 22
    }

    const bookSelected = route.params.paramKey

    let chapterArray = []
    var i
    for (i = 0; i < bookChapterCount[`${bookSelected}`]; i++) {
        chapterArray.push(`Chapter ${i+1}`)
    }

    const navigation = useNavigation()

    const separator = () => {
        return <View style={{height: 2, backgroundColor: '#f1f1f1'}} />
      }

    const renderItem = ({item, index}) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <TouchableOpacity
                    style={styles.itemButton}
                    onPress={() =>  {
                        console.log(index)
                        navigation.navigate('Passages', {
                          paramKey: [bookSelected, index + 1]
                    })}}
                >
                    <Text style={styles.itemName}>{item}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.tabContainer}>
            <Text style={styles.chapterHeader}>{bookSelected}</Text>
            <FlatList
                data={chapterArray}
                keyExtractor={(e, i) => i.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={separator}
            />
        </SafeAreaView>
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
      paddingVertical: 15,
      backgroundColor: 'white'
    },
    itemButton: {
      flex: 1,
      paddingHorizontal: 2,
      paddingVertical: 12,
      justifyContent: 'center',
    },
    itemName: {
      fontWeight: 'bold',
      fontSize: 20
    },
    chapterHeader: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 9,
        marginBottom: 20
    }
  })