import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, useWindowDimensions } from 'react-native';
import Logo from '../../assets/images/download.png'
import { useNavigation } from '@react-navigation/native';
import Custominput from '../../components/LoginCustomInput'
import CustomButton from '../../components/CustomButton'

// create a component
const Home = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const OnLogin = () => {
        console.warn("SignIn!");
        navigation.navigate("Login");
    };
    const OnViewPatient = () => {
        navigation.navigate('ViewPatient');
    };
    const onAddPatient = () => {
        navigation.navigate('AddPatient');
    };

    const onSignUp = () => {
        navigation.navigate('SignUp');
    };
    const OnEditPatient = () => {
        navigation.navigate('EditRecord');
    };
return (
    <View style={styles.container}>
        <Image source={Logo} style={[styles.Logo, { height: height * 0.3 }]} resizeMode="contain" />
        <CustomButton text="Login" onPress={OnLogin} />
        <CustomButton text="SignUp" onPress={onSignUp} />
        <CustomButton text="ViewPatient" onPress={OnViewPatient} />
        <CustomButton text="EditRecord" onPress={OnEditPatient} />
        <CustomButton text="AddPatient" onPress={onAddPatient} />
    </View>
);
};

// define your styles`
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Logo: {
        width: '60%',
        maxWidth: 300,
        height: 100,
        padding: 20
    }
});

//make this component available to the app
export default Home;
