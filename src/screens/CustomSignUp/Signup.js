import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Custominput from '../../components/LoginCustomInput'
import CustomButton from '../../components/CustomButton'
import Logo from '../../assets/images/download.png'

// create a component
const SignUp = () => {

const { height } = useWindowDimensions();
const navigation = useNavigation();

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [repassword, setrePassword] = useState('')

    const OnSignUP = () => {
    console.warn("Welcome!");
    navigation.navigate('Home');
};

return (
    <View style={styles.container}>
        <Image source={Logo} style={[styles.Logo, { height: height * 0.3 }]} resizeMode="contain" />
        <Custominput
            placeholder="Username"
            value={username}
            setValue={setUsername} />
        <Custominput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
        <Custominput placeholder="Re-Password" value={repassword} setValue={setrePassword} secureTextEntry={true} />
        <CustomButton text="SignUp" onPress={OnSignUP} />
    </View>
);
};

// define your styles`
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,


    },
    Logo: {
        width: '60%',
        maxWidth: 300,
        height: 100,
        padding: 20
    }
});

//make this component available to the app
export default SignUp;

