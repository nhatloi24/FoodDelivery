/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  SplashScreens from "../screens";

const Stack = createStackNavigator()

const Navigators = () => {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="SplashScreens" component={SplashScreens} />
        </Stack.Navigator>
    </NavigationContainer>
}
export default Navigators;