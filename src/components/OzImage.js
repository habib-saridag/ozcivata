
import React from 'react'
import { View, Image } from 'react-native';
import styles from '../assets/styles/styles';

export default function OzImage(props) {
    return (

        <View style={styles.header}>
            <View style={styles.header_view}>
                <Image style={styles.header_image} source={require('../assets/images/ozcivata.jpeg')} />
            </View>
        </View>

    )
}