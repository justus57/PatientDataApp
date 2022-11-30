//import liraries
import React, { Component } from 'react';
import JsonData from '../../data.json'
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

// create a component
const CustomViewPatient = () => {
    const header = ['USERNAME', 'EMAIL', 'City']
  const  componentDidMount=()=>{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = "";

      var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
      };

      fetch("http://127.0.0.1:5000/patient", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        }
    const data = JsonData.map(
        (info) => {
            return (
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                </tr>
                <tr>

                </tr>
            )
        }
    )
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CustomViewPatient;
