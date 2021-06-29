import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home/Home'
import GenelFormul from '../pages/DisliHesabi/GenelFormul'
import GenelDisliHesabiFormulu from '../pages/DisliHesabi/GenelDisliHesabiFormulu'
import SomunDegisimiDisliHesabi from '../pages/DisliHesabi/SomunDegisimiDisliHesabi'
import CapDegisimiDisliHesabi from '../pages/DisliHesabi/CapDegisimiDisliHesabi'




const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                 <Stack.Screen name="Home" component={Home} />
                 <Stack.Screen name="GenelFormul" component={GenelFormul} />
                 <Stack.Screen name="GenelDisliHesabiFormulu" component={GenelDisliHesabiFormulu} />
                 <Stack.Screen name="SomunDegisimiDisliHesabi" component={SomunDegisimiDisliHesabi} />
                 <Stack.Screen name="CapDegisimiDisliHesabi" component={CapDegisimiDisliHesabi} />
                 
                
                 
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;