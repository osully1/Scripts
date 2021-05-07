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

export default function NoteInput(props) {

  const [ noteText, setNoteText ] = useState({content: '', book: '', chapter: null, verse: null})

  const handleSubmit = () => {
    props.addNoteToList(noteText)
  }

  return(
    <View>
      <TextInput
          style={{
            height: 120,
            borderWidth: 1
          }}
          placeholder='Add Note'
          onChangeText={text => 
            setNoteText({
              content: text,
              book: props.currentPassage.book,
              chapter: props.currentPassage.chapter,
              verse: props.currentPassage.verse  
            })
          }
          defaultValue={props.noteText}
          keyboardAppearance='dark'
          multiline={true}
          // onSubmitEditing={}
      />
      <Text style={{padding: 10, fontSize: 42}} />
      <TouchableOpacity
        onPress={() => handleSubmit()}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}