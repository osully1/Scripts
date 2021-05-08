import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'

export default function AddNoteScreen(props) {

  const navigation = useNavigation()

  const [ noteText, setNoteText ] = useState({content: '', book: '', chapter: null, verse: null})

  const handleSubmit = () => {
    props.addNoteToList(noteText)
    const newNoteArray = props.noteState
    newNoteArray.push(noteText)
    props.setNoteState(newNoteArray)
    console.log(newNoteArray)
  }

  return(
    <View>
      <TextInput
          style={{
            height: 120,
            borderWidth: 1,
            backgroundColor: '#fff'
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
        style={styles.button}
        onPress={() => {
            handleSubmit()
            navigation.goBack()
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
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
    marginTop: -20
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});