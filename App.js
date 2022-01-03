import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./pages/Home";
import Home2 from "./pages/Home2";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="test" component={Home2} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
