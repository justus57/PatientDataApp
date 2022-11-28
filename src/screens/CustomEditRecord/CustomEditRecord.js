import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, useWindowDimensions } from 'react-native';
import Logo from '../../assets/images/download.png'
import Home from '../CustomHome'
import Custominput from '../../components/LoginCustomInput'
import CustomButton from '../../components/CustomButton'

// create a component
const CustomAddPatient = () => {
    const { height } = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [BloodPressure, setBloodPressure] = useState('');
    const [HeartRate, setHeartRate] = useState('');
    const [Respiratoryrate, setRespiratoryrate] = useState('');

    const OnLogin = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": username,
            "BloodPressure": BloodPressure,
            "HeartRate": HeartRate,
            "Respiratoryrate": Respiratoryrate
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/record", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };

    return (
        <View style={styles.container}>
            <Image source={Logo} style={[styles.Logo, { height: height * 0.3 }]} resizeMode="contain" />
            <Custominput
                placeholder="Username"
                value={username}
                setValue={setUsername} />
            <Custominput placeholder="BloodPressure" value={BloodPressure} setValue={setBloodPressure} secureTextEntry={true} />
            <Custominput
                placeholder="HeartRate"
                value={HeartRate}
                setValue={setHeartRate} />
            <Custominput placeholder="Respiratoryrate" value={Respiratoryrate} setValue={setRespiratoryrate} secureTextEntry={true} />
            <CustomButton text="Submit" onPress={OnLogin} />
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
export default CustomAddPatient;

