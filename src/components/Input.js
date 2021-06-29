import React from 'react'
import { View, Text, TextInput } from 'react-native';
import styles from '../assets/styles/styles';

export default function Input({ title, value, onChangeText, validateText }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={{ marginLeft: 7 }}
            >{title}</Text>
            <TextInput
                maxLength={20}
                keyboardType="numeric"
                returnKeyType="done"
                returnKeyLabel="Tamam"

                style={styles.input}
                value={value}
                onChangeText={onChangeText}

            />
            {validateText && <Text style={{ color: '#F00' }}>{validateText}</Text>}

        </View>
    )
}