//import liraries
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/SignIn';
import CustomSignUp from '../screens/CustomSignUp';
import CustomHome from '../screens/CustomHome';
import CustomViewPatient from '../screens/CustomViewPatient';
import CustomEditRecord from '../screens/CustomEditRecord';
import CustomAddPatient from '../screens/CustomAddPatient';


const Stack = createNativeStackNavigator();

// create a component
const Navigation = () => {
    return (
        <NavigationContainer>           
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Home' component={CustomHome} />
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='ViewPatient' component={CustomViewPatient} />
                <Stack.Screen name='SignUp' component={CustomSignUp} options={{ headerShown: false }} />
                <Stack.Screen name='EditRecord' component={CustomEditRecord} />
                <Stack.Screen name='AddPatient' component={CustomAddPatient} />
            </Stack.Navigator> 
        </NavigationContainer>
    );
};
//make this component available to the app
export default Navigation;
