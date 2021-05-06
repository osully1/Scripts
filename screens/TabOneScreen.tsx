import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from '../screens/BookScreen'
import ChapterScreen from '../screens/ChapterScreen';
import PassageScreen from '../screens/PassageScreen';
import { BibleParamList } from '../types';

export default function TabOneScreen() {

  const AddBibleStack = createStackNavigator<BibleParamList>()

  return (
    <AddBibleStack.Navigator>
      <AddBibleStack.Screen name="Books" component={BookScreen} />
      <AddBibleStack.Screen name="Chapters" component={ChapterScreen} />
      <AddBibleStack.Screen name="Passages" component={PassageScreen} />
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
});
