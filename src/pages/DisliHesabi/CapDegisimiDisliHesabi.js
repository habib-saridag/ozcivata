import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import OzImage from '../../components/OzImage';
import Button from '../../components/Button';
import Input from '../../components/Input';



export default class App extends Component {
    state = {
        d1: "", d2: "",
        D1: "",
        isPost: false
    };

    onChangeHandler = (value, name) => {
        const new_name = name;
        const new_value = value.replace(",", ".");
        this.setState({
            [new_name]: new_value,
            isPost: false
        })
    };

    onSubmitHandler = () => {
        this.setState({ isPost: true })
        let new_d1 = parseFloat(this.state.d1);
        if (this.validateForm(new_d1)) { return; }
        let new_d2 = parseFloat(this.state.d2);
        if (this.validateForm(new_d2)) { return; }
        let new_D1 = parseFloat(this.state.D1);
        if (this.validateForm(new_D1)) { return; }

        sonuc = parseFloat((new_d2 * new_d2 * new_D1) / (new_d1 * new_d1));
        // console.log("sonuç = " + sonuc)
        Alert.alert("Sonuç", `${sonuc}`, [{ text: "Anladım", style: "cancel" }])
    };

    validateForm(value) {
        if (value > 0) {
            return false
        } else {
            return "* Bu alan zorunlu ve 0 dan büyük olmalıdır"
        }
    }




    render() {


        return (
            <View style={styles.container}>
                <OzImage />
                <ScrollView>

                    <View style={{ marginTop: 25 }}>

                        {
                            [

                                { title: "d1: Kullanılan malzeme çapı (mm)", name: "d1" },
                                { title: "d2: Kullanılacak malzeme çapı (mm)", name: "d2" },
                                { title: "D1: Kullanılan Dişli", name: "D1" },

                            ].map((item, index) => {

                                return (<Input
                                    validateText={this.state.isPost && this.validateForm(this.state[item.name])}
                                    key={index}
                                    title={item.title}
                                    onChangeText={value => {
                                        this.onChangeHandler(value, item.name)
                                    }}

                                    value={this.state[item.name]} //state.m1 veya state["m1"]
                                />)
                            })
                        }

                        <Button title='Hesapla' onPress={() => this.onSubmitHandler()} />
                    </View>
                    <StatusBar style="auto" />

                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});

