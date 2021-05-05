import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const OldTestamentList = (props) => {

    const oldBookArr = ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalm', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi']

    return oldBookArr.map((book, idx) => {
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

export default OldTestamentList