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

    return (
        
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