import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    FlatList,
    ImageBackground
  } from 'react-native';
import { useEffect, useState } from 'react';
import { fetchMegaVerse } from '../assets/services/bible-api';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function ChapterScreen(props) {

    const navigation = useNavigation()

    const [ verseArray, setVerseArray ] = useState('')

    const currentBook = props.currentPassage.book
    const currentChapter = props.currentPassage.chapter

    async function verseSplit () {
        const data = await fetchMegaVerse(currentBook, currentChapter)
        const megaVerse = data['Output']
        const iHopeThisWorksArray = megaVerse.split(/\s\d*\s/g)
        setVerseArray(iHopeThisWorksArray)
    }

    useEffect(() => {
        verseSplit()
        props.setCurrentPassage({book: currentBook, chapter: currentChapter, verse: null})
    }, [currentChapter])

    const renderItem = ({item, index}) => {
        return (
          <View key={index} style={styles.itemContainer}>
            <TouchableOpacity 
              style={styles.itemButton}
              onPress={() =>  {
                props.setCurrentPassage({book: currentBook, chapter: currentChapter, verse: index + 1})
                navigation.navigate('Notes', {
                  paramKey: [currentBook, currentChapter, index + 1]
                })}}
            >
              <Text style={styles.itemName}>{item}</Text>
            </TouchableOpacity>
          </\View>
        )
      }

    const separator = () => {
        return <View style={{height: 1.5, backgroundColor: 'rgb(50,50,50)'}} />
    }

    return (
        <SafeAreaView style={styles.tabContainer}>
            <ImageBackground source={require('../assets/images/parchmenttile.jpeg')} style={styles.backgroundImage}>
                <Text style={styles.chapterHeader}>{currentBook} {currentChapter}</Text>
                <View style={styles.backBtnContainer}>
                  <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={styles.backBtn}
                  >
                    <View style={styles.backBtnGroup}>
                      <View style={styles.backBtnCaretContainer}>
                        <Ionicons name="chevron-back" size={25} color="#B2081C" style={styles.backCaret} />
                      </View>
                      <Text style={styles.backBtnText}> Chapters </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <FlatList
                    data={verseArray}
                    keyExtractor={(e, i) => i.toString()}
                    renderItem={renderItem}
                    ItemSeparatorComponent={separator}
                />
            </ImageBackground>
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
      backgroundColor: 'transparent'
    },
    itemButton: {
      flex: 1,
      paddingHorizontal: 2,
      paddingVertical: 12,
      justifyContent: 'center',
    },
    itemName: {
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 8
    },
    chapterHeader: {
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: '600',
      marginTop: 80,
      marginBottom: 20
    },
    backgroundImage: {

    },
    itemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
    },
    caret: {
      fontSize: 23,
      right: 10
    },
    backBtnContainer: {
      position: 'absolute',
      marginTop: 80,
      // marginLeft: 6,
    },
    backBtn: {
      width: 100,
      height: 40,
      justifyContent: 'center'
      // backgroundColor: 'red'
    },
    backBtnGroup: {
      flexDirection: 'row'
    },
    backBtnText: {
      fontWeight: '600',
      fontSize: 18,
      color: '#B2081C',
      marginLeft: -8
    },
    backCaret: {
      marginTop: -3
    },
    backBtnCaretContainer: {
      height: 40,
    }
  })