import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import OzImage from '../../components/OzImage';
import Button from '../../components/Button'

export default function App(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <OzImage />
      <ScrollView>
        <View style={{ marginTop: 25 }}>
          
          <Button title='Genel Disli Hesabi Formulu' onPress={() => navigation.navigate("GenelDisliHesabiFormulu")} />
          <Button title='Somun Degisimi Disli Hesabi' onPress={() => navigation.navigate("SomunDegisimiDisliHesabi")} />
          <Button title='Cap Degisimi Disli Hesabi' onPress={() => navigation.navigate("CapDegisimiDisliHesabi")} />
          <Button title='Genel Formul' onPress={() => navigation.navigate("GenelFormul")} />
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

