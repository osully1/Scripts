import * as React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

export default function NoteInput(props) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'flex-end',
            }}
        >
            <Text
                style={{
                    color: '#000',
                    fontWeight: '600',
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                }}
            >Delete</Text>
        </TouchableOpacity>
    )
}