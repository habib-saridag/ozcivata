import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import OzImage from '../../components/OzImage';
import Button from '../../components/Button';
import Input from '../../components/Input';



export default class App extends Component {
    state = {
        m1: "", m2: "",
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
        let new_m1 = parseFloat(this.state.m1);
        if (this.validateForm(new_m1)) { return; }
        let new_m2 = parseFloat(this.state.m2);
        if (this.validateForm(new_m2)) { return; }
        let new_D1 = parseFloat(this.state.D1);
        if (this.validateForm(new_D1)) { return; }

        let sonuc = parseFloat((new_m1 * new_D1) / (new_m2));
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
                                { title: "m1: Vurulan somun gramajı (gr)", name: "m1" },
                                { title: "m2: Vurulacak somun gramajı (gr)", name: "m2" },
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

