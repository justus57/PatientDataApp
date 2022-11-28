//import liraries
import React, { Component } from 'react';
import { View, Text,TextInput ,StyleSheet } from 'react-native';

// create a component
const MyComponent = ({value,setValue,placeholder,secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder} 
            style={styles.input}
            secureTextEntry ={secureTextEntry}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        width :'100%',
        borderColor:'#e8e8e8',
        borderRadius:5,
        borderWidth:1,
        paddingHorizontal:10,
        marginVertical:5,
    },
    input:{

    }
});

//make this component available to the app
export default MyComponent;
