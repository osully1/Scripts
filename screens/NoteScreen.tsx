import * as React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react';
import { Text, View } from '../components/Themed';
import NoteInput from '../components/NoteInput/NoteInput'
import NoteListItem from '../components/NoteListItem/NoteListItem'

export default function AddNoteScreen(props) {

    const navigation = useNavigation()
    
    const currentBook = props.currentPassage.book
    const currentChapter = props.currentPassage.chapter
    const currentVerse = props.currentPassage.verse

    const separator = () => {
        return <View style={{height: 2, backgroundColor: '#f1f1f1'}} />
    }

    const renderItem = ({item, index}) => {
        if (
            item.book === props.currentPassage.book
            && item.chapter === props.currentPassage.chapter
            && item.verse === props.currentPassage.verse
        ) {
            return (
                <NoteListItem 
                    item={item}
                    index={index}
                    noteState={props.noteState}
                    setNoteState={props.setNoteState}
                    addNoteToList={props.addNoteToList}
                    handleUpdate={props.handleUpdate}
                    handleDelete={props.handleDelete}
                    currentPassage={props.currentPassage}
                    setCurrentPassage={props.setCurrentPassage}
                />
            )
        }
    }

    return (
        <View style={styles.flatListView}>
            <Text style={styles.chapterHeader}>{currentBook} {currentChapter}:{currentVerse}</Text>
            <FlatList
                data={props.noteState}
                keyExtractor={(e, i) => i.toString()}
                renderItem={renderItem}
                ItemSeparatorComponent={separator}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  navigation.navigate('Add Note', {
                    paramKey: [currentBook, currentChapter]
                  })}}
            >
                <Image
                    style={styles.addButtonIcon}
                    source={require('../assets/images/addnoteicon.png')}
                />
            </TouchableOpacity>
        </View>
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
      fontSize: 16
    },
    chapterHeader: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 9,
        marginBottom: 20
    },
    addButton: {
        height: 40,
        width: 40,
        alignSelf: 'flex-start',
        position: 'absolute',
        top: 8,
        left: 5
    },
    addButtonIcon: {
        height: 40,
        width: 40,
    },
    addField: {
        position: 'absolute',
        bottom: 70,
        width: '80%',
        height: 60
    },
    flatListView: {
      height: '100%',
      top: 10
    }
  });