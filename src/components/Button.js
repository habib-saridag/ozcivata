import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/styles';

export default function Button(props) {
    return (
        <View style={styles.inputContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={props.onPress}
                
            >
                <Text style={{ color: "#fff", fontSize:20 }}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}