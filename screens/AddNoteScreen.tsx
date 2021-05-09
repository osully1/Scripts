import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ImageBackground
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
    <ImageBackground source={require('../assets/images/parchmenttile.jpeg')} style={styles.backgroundImage}>
        <View>
            <TextInput
                style={{
                    height: 250,
                    borderWidth: 1,
                    padding: 10,
                    fontSize: 20,
                    backgroundColor: 'rgba(255,255,255,0.0)',
                    marginTop: 180,
                    marginLeft: 8,
                    marginRight: 8
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
            <View style={styles.addCancelView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handleSubmit()
                        navigation.goBack()
                    }}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.spaceFill}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'rgba(255,255,255,0.0)',
    width: '37%',
    height: 50,
    marginTop: -20
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backgroundImage: {
      
  },
  spaceFill: {
      height: '80%'
  },
  addCancelView: {
      flexDirection: 'row',
      justifyContent: 'space-around'
  }
});