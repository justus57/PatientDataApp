import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, useWindowDimensions } from 'react-native';
import Custominput from '../../components/LoginCustomInput'
import CustomButton from '../../components/CustomButton'
import Logo from '../../assets/images/download.png'
import Home from '../CustomHome'

// create a component
const AddPatient = () => {
    const { height } = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [City, setCity] = useState('');
    const [Address, setAddress] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    

    const CustomAddPatient = () => {
        // sending to our nodejs server
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": username,
            "Email": Email,
            "City": City,
            "Address": Address,
            "PhoneNumber": PhoneNumber
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:5000/patient", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
            
    };
    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }

    return (
        <View style={styles.container}>
            <Image source={Logo} style={[styles.Logo, { height: height * 0.3 }]} resizeMode="contain" />
            <Custominput
                placeholder="Username"
                value={username}
                setValue={setUsername} />
            <Custominput placeholder="Email" value={Email} setValue={setEmail}  />
            <Custominput
                placeholder="City"
                value={City}
                setValue={setCity} />
            <Custominput placeholder="Address" value={Address} setValue={setAddress} />          
            <Custominput placeholder="PhoneNumber" value={PhoneNumber} setValue={setPhoneNumber}  />
            <CustomButton text="Submit" onPress={CustomAddPatient} />
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
export default AddPatient;

