import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function Button(props) {
    return (
        <View style={styles.inputContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={props.onPress}
            >
                <Text style={{ color: "#fff" }}>Hesapla</Text>
            </TouchableOpacity>
        </View>
    )
}

