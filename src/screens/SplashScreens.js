/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from  '@react-navigation/native';

const SplashScreens = () => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
}

export default SplashScreens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})