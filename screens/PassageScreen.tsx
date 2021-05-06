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
import { fetchVerses } from '../assets/services/bible-api';
import { fetchMegaVerse } from '../assets/services/bible-api';
import { useNavigation } from '@react-navigation/native'

export default function ChapterScreen({route}) {

    const navigation = useNavigation()

    const [ verseArray, setVerseArray ] = useState('')

    const currentBook = route.params.paramKey[0]
    const currentChapter = route.params.paramKey[1]

    async function verseSplit () {
        const data = await fetchMegaVerse(currentBook, currentChapter)
        const megaVerse = data['Output']
        const iHopeThisWorksArray = megaVerse.split(/\s\d*\s/g)
        setVerseArray(iHopeThisWorksArray)
    }

    useEffect(() => {
        verseSplit()
    }, [currentChapter])

    const renderItem = ({item, index}) => {
        return (
          <View key={index} style={styles.itemContainer}>
            <TouchableOpacity 
              style={styles.itemButton}
            >
              <Text style={styles.itemName}>{item}</Text>
            </TouchableOpacity>
          </View>
        )
      }

    const separator = () => {
        return <View style={{height: 2, backgroundColor: '#f1f1f1'}} />
      }

    return (
        <SafeAreaView style={styles.tabContainer}>
            <Text style={styles.chapterHeader}>{currentBook} {currentChapter}</Text>
            <FlatList
                data={verseArray}
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