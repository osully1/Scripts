import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { Text, View } from '../components/Themed';
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from '../screens/BookScreen'
import ChapterScreen from '../screens/ChapterScreen';
import PassageScreen from '../screens/PassageScreen';
import NoteScreen from '../screens/NoteScreen';
import AddNoteScreen from './AddNoteScreen';
import { BibleParamList } from '../types';
import { useEffect, useState } from 'react';

export default function TabOneScreen() {

  const AddBibleStack = createStackNavigator<BibleParamList>()

  const [ noteState, setNoteState ] = useState([])
  const [ currentPassage, setCurrentPassage ] = useState({book: '', chapter: null, verse: null})



  useEffect(() => {
    const acquireNotes = async () => {
      console.log('fetching data')
      const notes = await fetch('http://ca7192ff5731.ngrok.io/notes')
        .then(res => res.json())
      console.log(notes)
      setNoteState(notes)
    }
    acquireNotes()
  }, [])

  const addNoteToList = async (noteObject) => {
    try {
      const note = await fetch('http://ca7192ff5731.ngrok.io/notes', {
        body: JSON.stringify(noteObject),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json());
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (formInputs) => {
    try {
      await fetch(`http://ca7192ff5731.ngrok.io/notes/${formInputs.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(formInputs)
      })
    } catch (error) {
      console.log(error)
    }
    const noteIdx = noteState.findIndex(note => note.id === formInputs.id)
    const updatedNoteArray = noteState
    updatedNoteArray.splice(noteIdx, 1, formInputs)
    setNoteState(updatedNoteArray)
  }

  const handleDelete = async (noteId) => {
    try {
      await fetch(`http://ca7192ff5731.ngrok.io/notes/${noteId}`, {
        method: 'DELETE'
      })
      const updatedNotes = noteState.filter(note => note.id !== noteId);
      setNoteState({
        updatedNotes
      })
    } catch (error) {
      console.log(error);
    }
    const noteIdx = noteState.findIndex(note => note.id === noteId)
    const updatedNoteArray = noteState
    updatedNoteArray.splice(noteIdx, 1)
    setNoteState(updatedNoteArray)
  }

  return (
    <AddBibleStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'rgb(50,50,50)' }
      }}
    >
      <AddBibleStack.Screen 
        name="Books"
        options={{
          backgroundColor: 'blue'
        }}
      >
        {(props) => <BookScreen {...props}
          currentPassage={currentPassage}
          setCurrentPassage={setCurrentPassage} 
        />}
      </AddBibleStack.Screen>
      <AddBibleStack.Screen name="Chapters">
        {(props) => <ChapterScreen {...props}
          currentPassage={currentPassage}
          setCurrentPassage={setCurrentPassage}
        />}
      </AddBibleStack.Screen>
      <AddBibleStack.Screen name="Passages">
        {(props) => <PassageScreen {...props}
          currentPassage={currentPassage}
          setCurrentPassage={setCurrentPassage}
        />}
      </AddBibleStack.Screen>
      <AddBibleStack.Screen name="Notes">
        {(props) => <NoteScreen {...props} 
          noteState={noteState}
          setNoteState={setNoteState}
          addNoteToList={addNoteToList}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          currentPassage={currentPassage}
          setCurrentPassage={setCurrentPassage}
        />}
      </AddBibleStack.Screen>
      <AddBibleStack.Screen 
        name="Add Note"
        options={{
          headerStyle: {
            backgroundColor: 'transparent'
          }
        }}
      >
        {(props) => <AddNoteScreen {...props} 
          noteState={noteState}
          setNoteState={setNoteState}
          addNoteToList={addNoteToList}
          currentPassage={currentPassage}
          setCurrentPassage={setCurrentPassage}
        />}
      </AddBibleStack.Screen>
    </AddBibleStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  backgroundImage: {

  }
});
