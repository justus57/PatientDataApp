//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


// create a component
const CustomButton = ({ onPress, text, type="PRIMARY",bgColor }) => {
    return (
        <Pressable 
        onPress={onPress} 
        style={[styles.container,styles[`container_${type}`],bgColor?{backgroundColor:bgColor}:{}]}>
            <Text style={[styles.Text,styles[`Text_${type}`]]}>{text}</Text>
        </Pressable>
    ); 
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#3B71F3',
        padding :15,
        width:'90%',
        marginVertical:6,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:8,
   
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',
      
    },
    container_TERTIARY: {},
    Text:{
        fontWeight:'bold',
        color:'white',

    },
    Text_TERTIARY: {
        fontWeight: 'bold',
        color: 'grey',

    }
});

//make this component available to the app
export default CustomButton;

