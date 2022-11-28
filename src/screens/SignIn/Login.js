//import liraries
import React, { Component ,useState} from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Custominput  from '../../components/LoginCustomInput'
import CustomButton  from  '../../components/CustomButton'
import Logo from '../../assets/images/download.png'



// create a component
const Login = () => {
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const [username ,setUsername]= useState('')
    const [password, setPassword] = useState('')
  

    const OnLogin=()=>{
        console.warn("Welcome!");
       navigation.navigate('Home');
    };
    const onSignUp = () => {
        console.warn("To SignUp");
        navigation.navigate('SignUp');
    };
    return (
        <View style={styles.container}>
            <Image  source={Logo} style={[styles.Logo,{height:height*0.3}]} resizeMode="contain"/>
            <Custominput placeholder ="Username"value={username} setValue={setUsername}/>
            <Custominput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton text="SigIn" onPress={OnLogin} /> 
            <CustomButton text="Don't have an Account? Create One" onPress={onSignUp} type="TERTIARY" /> 
        </View>
    );
};

// define your styles`
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',       
      
    },
    Logo:{
        width:'60%',
        maxWidth:300,
        height:100,
        padding:20
    }
});

//make this component available to the app
export default Login;
