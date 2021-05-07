import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  TextInput
} from 'react-native';
import { useEffect, useState } from 'react';
import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native'
import NoteInput from '../components/NoteInput/NoteInput'

export default function AddNoteScreen(props) {

    const [ noteText, setNoteText ] = useState('')

    // const currentVerse = route.param.paramKey[2]

    // useEffect(() => {
    //     props.setCurrentPassage(prevState => ({
    //         ...prevState,
    //         verse: route.params.paramKey[2]
    //     }))
    // }, [currentVerse])

    return (
        // <View>
        //     <TextInput
        //         style={{height: 200}}
        //         placeholder='Add Note'
        //         onChangeText={text => setNoteText(text)}
        //         defaultValue={noteText}
        //         keyboardAppearance='dark'
        //         multiline='true'
        //         returnKeyType='done'
        //         // onSubmitEditing={}
        //     />
        //     <Text style={{padding: 10, fontSize: 42}}>
        //     </Text>
        // </View>
        <NoteInput 
            noteText={noteText}
            setNoteText={setNoteText}
            noteState={props.noteState}
            setNoteState={props.setNoteState}
            addNoteToList={props.addNoteToList}
            currentPassage={props.currentPassage}
            setCurrentPassage={props.setCurrentPassage}
        />
    )
}