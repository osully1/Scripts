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

export default function NoteUpdate(props) {

  const [ updateText, setUpdateText ] = useState({content: '', book: '', chapter: null, verse: null})
  const [ formState, setFormState ] = useState('')

  useEffect(() => {
    setFormState(props.item)
  }, [props.item])

  const handleSubmit = () => {
    props.setEditFormVisible(!props.editFormVisible)
    // CREATE UPDATE FUNCTION IN TABONESCREEN AND PASS HERE AS PROPS
  }

  return(
    <View>
      <TextInput
          style={{
            height: 120,
            borderWidth: 1,
            backgroundColor: '#fff'
          }}
        //   placeholder='Add Note'
          onChangeText={text => 
            setUpdateText({
              content: text,
              book: props.currentPassage.book,
              chapter: props.currentPassage.chapter,
              verse: props.currentPassage.verse  
            })
          }
          value={props.item.content}
          keyboardAppearance='dark'
          multiline={true}
          // onSubmitEditing={}
      />
      <Text style={{padding: 10, fontSize: 42}} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSubmit()}
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
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});