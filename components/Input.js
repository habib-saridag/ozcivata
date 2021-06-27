import React from 'react'
import { View, Text, TextInput } from 'react-native';
import  styles  from '../styles/styles';

export default function Input(props){
    return (
        <View style={styles.inputContainer}>
            <Text>{props.label}</Text>
            <TextInput
                keyboardType="decimal-pad"
                style={styles.input}
                value={props.value}// string hatası alınmaması için +"" konulmuştur
                onChangeText={props.onChangeText}
            />
        </View>
    )
}





