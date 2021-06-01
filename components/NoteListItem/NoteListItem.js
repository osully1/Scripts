import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import NoteUpdate from '../NoteInput/NoteUpdate'

export default function NoteListItem(props) {

  const [editFormVisible, setEditFormVisible] = useState(false)
  const [ deleteFormVisible, setDeleteFormVisible ] = useState(false)
  const [ updateText, setUpdateText ] = useState('')

  const toggleForm = () => {
      setEditFormVisible(!editFormVisible)
  }
  const toggleDeleteForm = () => {
      setDeleteFormVisible(!deleteFormVisible)
  }

  useEffect(() => {
    setUpdateText(props.item.content)
  }, [])

  const handleDeleteSubmit = (id) => {
      props.handleDelete(id)
      setDeleteFormVisible(!deleteFormVisible)
  }

  return(
    <View key={props.index} style={styles.itemContainer}>
        {
            editFormVisible ?
            <NoteUpdate 
                item={props.item}
                noteState={props.noteState}
                setNoteState={props.setNoteState}
                currentPassage={props.currentPassage}
                editFormVisible={editFormVisible}
                setEditFormVisible={setEditFormVisible}
                setUpdateText={setUpdateText}
                handleUpdate={props.handleUpdate}
            />
            :
            deleteFormVisible ?
            <View>
                <Text style={styles.deleteWarning}>Do you want to delete this note?</Text>
                <View style={styles.deleteOrCancel}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {handleDeleteSubmit(props.item.id)}}
                    >
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {setDeleteFormVisible(!deleteFormVisible)}}
                    >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
            :
            <View key={props.index} style={styles.itemContainer}>
                <View style={styles.itemButton}>
                    <Text style={styles.itemName}>{updateText}</Text>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={() =>  {toggleForm()}}
                        >
                            <Image 
                                style={styles.updateImage}
                                source={require('../../assets/images/editicon.png')} 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {toggleDeleteForm()}}
                        >
                            <Image 
                                style={styles.deleteImage}
                                source={require('../../assets/images/erasericon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
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
      borderColor: '#000',
      backgroundColor: 'transparent',
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
      backgroundColor: 'transparent'
    },
    itemButton: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 2,
      paddingVertical: 12,
      justifyContent: 'space-between',
      backgroundColor: 'transparent'
    },
    itemButtonActive: {
      flex: 1,
      paddingHorizontal: 2,
      paddingVertical: 12,
      justifyContent: 'center',
      backgroundColor: '#B2081C'
    },
    itemName: {
      fontSize: 18,
      width: '85%',
      marginLeft: 8,
      fontWeight: '500'
    },
    updateButton: {
      height: 35,
      width: 35,
      marginTop: -25,
      marginBottom: 15,
      alignSelf: 'flex-end',
      right: 5
    },
    updateImage: {
        height: 35,
        width: 35
    },
    deleteImage: {
        height: 40,
        width: 40,
        marginBottom: -30
    },
    buttonView: {
        justifyContent: 'space-around',
        right: 5
    },
    deleteOrCancel: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    deleteWarning: {
        fontSize: 25
    }
  });