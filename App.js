import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import  styles  from './styles/styles';

export default class App extends Component {
  state = {
    m1: "", m2: "", 
    d1: "", d2: "", 
    D1: "", D2: "",

    GenelFormul: "",
    GenelDisliHesabiFormulu: "",
    SomunGramajDegisimiIcinDisliHesabi: "",
    CapDegisimiIcinDisliHesabi: "",

  };

  onChangeHandler = (value, name) => {
    const names = name;
    const values = value;
    this.setState({ [names]: values })


  };


  onSubmitHandler = () => {
    let M1=parseFloat(this.state.m1)
    let M2=parseFloat(this.state.m2)
    let Dd1=parseFloat(this.state.d1)
    let Dd2=parseFloat(this.state.d2)
    let DD1=parseFloat(this.state.D1)
    let DD2=parseFloat(this.state.D2)

    let genelFormul=(M1*(Dd1*Dd1)*DD1) / (M2*(Dd2*Dd2)*DD2)
    this.setState({GenelFormul:genelFormul})
    alert(genelFormul)

  }

  render() {
    return (
      <View style={styles.view}>

        {/* header start */}
        <View style={styles.header}>
          <View style={styles.header_view}>
            {/* <Text style={{color: 'white', fontSize: 25 }}>Öz civata</Text> */}
            <Image style={styles.header_image} source={require('./assets/ozcivata.jpeg')} />
          </View>
        </View>
        {/* header finish */}


        <ScrollView>
          <View style={styles.container}>
            <Text>Dişli Hesabı</Text>

            {
              [
                { label: "m1: Vurulan somun gramajı (gr)", name: "m1" },
                { label: "m2: Vurulacak somun gramajı (gr)", name: "m2" },
                { label: "d1: Kullanılan malzeme çapı (mm)", name: "d1" },
                { label: "d2: Kullanılacak malzeme çapı (mm)" ,name: "d2" },
                { label: "D1: Kullanılan Dişli", name: "D1" },
                { label: "D1: Kullanılacak Dişli", name: "D2" },
              ].map((item, index) => {
                
                return (<Input
                  key={index}
                  label={item.label}
                  onChangeText={value => this.onChangeHandler(value, item.name)}
                  value={this.state[item.name]} //   state.m1 veya state["m1"]
                />)
              })

            }

            <Button onPress={this.onSubmitHandler} />

            <View style={styles.inputContainer}>
              <Text style={styles.result}>GenelFormul : {this.state.GenelFormul} </Text>
            </View>
           

          </View>

        </ScrollView>
        <StatusBar style="auto" />
      </View>
    );
  }
}

