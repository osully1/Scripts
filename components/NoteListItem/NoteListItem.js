import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  TextInput
} from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import NoteUpdate from '../NoteInput/NoteUpdate'

export default function NoteListItem(props) {

  const [ updateText, setUpdateText ] = useState({content: '', book: '', chapter: null, verse: null})
  const [editFormVisible, setEditFormVisible] = useState(false)

  const toggleForm = () => {
      setEditFormVisible(!editFormVisible);
  }

  return(
    <View key={props.index} style={styles.itemContainer}>
        {
            editFormVisible ?
            <NoteUpdate 
                item={props.item}
                noteText={props.noteText}
                setNoteText={props.setNoteText}
                noteState={props.noteState}
                setNoteState={props.setNoteState}
                addNoteToList={props.addNoteToList}
                currentPassage={props.currentPassage}
                setCurrentPassage={props.setCurrentPassage}
                editFormVisible={editFormVisible}
                setEditFormVisible={setEditFormVisible}
            />
            :
            <View key={props.index} style={styles.itemContainer}>
                <TouchableOpacity 
                    style={styles.itemButton}
                    onPress={() =>  {toggleForm()}}
                >
                    <Text style={styles.itemName}>{props.item.content}</Text>
                </TouchableOpacity>
            </View>
        }
    </View>
  )
}


const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#EBEBEB',
      backgroundColor: '#fff',
      width: '37%',
      height: 50,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
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
    //   flexDirection: 'row',
      paddingVertical: 10,
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
    }
  });