import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useEffect, useState } from 'react';

export default function NoteUpdate(props) {

  const [ defaultText, setDefaultText ] = useState('')
  const [ formState, setFormState ] = useState({
      id: null,
      content: '',
      book: '',
      chapter: null,
      verse: null
  })

  useEffect(() => {
    setFormState({
        id: props.item.id,
        content: '',
        book: props.currentPassage.book,
        chapter: props.currentPassage.chapter,
        verse: props.currentPassage.verse
    })
  }, [props.item])

  const handleSubmit = () => {
    props.setEditFormVisible(!props.editFormVisible)
    props.setUpdateText(formState.content)
    props.handleUpdate(formState)
  }

  return(
    <View>
        <TextInput
            style={{
                height: 120,
                borderWidth: 1,
                backgroundColor: 'transparent',
                borderWidth: 1.5,
                padding: 10,
                marginLeft: 5,
                marginRight: 5
            }}
            //   placeholder='Add Note'
            onChangeText={text => 
                setFormState(prevState => ({
                    ...prevState,
                content: text,  
                }))
            }
            defaultValue={props.item.content}
            editable={true}
            keyboardAppearance='dark'
            multiline={true}
        />
        <Text style={{padding: 10, fontSize: 42}} />
        <View style={styles.buttonRow}>
            <TouchableOpacity
                style={styles.editButton}
                onPress={() => handleSubmit()}
            >
                <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.editButton}
                onPress={() => props.setEditFormVisible(!props.editFormVisible)}
            >
                <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -22,
  },
  editButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#000',
    backgroundColor: 'transparent',
    width: '37%',
    height: 50,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});