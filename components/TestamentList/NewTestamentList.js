import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const NewTestamentList = (props) => {

    const newBookArr = ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation']

    return newBookArr.map((book, idx) => {
        return (
            <TouchableOpacity key={`${book}${idx}`}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{book}</Text>
                </View>
            </TouchableOpacity>
        )
    })

} 

const styles = StyleSheet.create({
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default NewTestamentList