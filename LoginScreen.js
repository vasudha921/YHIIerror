import React from 'react';
import { Alert, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Touchable, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
//import * as firebase from 'firebase';
import SignUpScreen from './SignUpScreen';

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            emailId: '',
            password: ''
        }
    }
    login = async (emailId, password) => {
        //if (emailId && password) {
            //try {
               // const response = await firebase.auth().signInWithEmailAndPassword(emailId, password)
               // if (response) {
                   // this.props.navigation.navigate('HomeScreen')
                }
            //}
           // catch (error) {
                //switch (error.code) {
                  //  case 'auth/user-not-found':
                       // Alert.alert("user doesn't exist")

                      //  break
                    //case 'auth/invalid/email':
                      //  Alert.alert('incorrect email or password')

                        //break
                //}
           // }
        //}
        //else {
          //  Alert.alert("enter email and password")

      //  }
    
    render() {
        return (
            <KeyboardAvoidingView>

                <View>
                    <View>
                    <Header
              
                            centerComponent={{ text:"YHII", style: { fontSize: 40, color:'black', alignItems: 'center', justifyContent:'center', paddingLeft:10, marginTop: 50 } }}
                            backgroundColor =  '#ffffff'
                    />
                    <Header
                         centerComponent={{ text:"Your Health is Important", style: { fontSize: 19, color:'black', fontStyle: 'italic', textDecorationLine: 'underline'} }}
                         backgroundColor = '#ffffff'
                 />
                   
                    </View>
                    <TextInput
                        style={styles.loginBox}
                        placeholder="abc@example.com"
                        keyboardType='email-address'
                        onChangeText={(text) => {
                            this.setState({
                                emailId: text
                            })
                        }}
                    />

                    <TextInput
                        style={styles.loginBox}
                        secureTextEntry={true}
                        placeholder="enter password"
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                    />
                    <View>
                        <TouchableOpacity
                            onPress={() => { this.login(this.state.emailId, this.state.password) }}
                            style= {styles.loginButton}
                            >
                            <Text style={{ textAlign: "center", marginBottom:10 }}>Login </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                         onPress = {()=> {this.props.navigation.navigate("SignUpScreen")}}
                         style = {styles.loginButton}
                         >
                             
                            <Text style = {{textAlign:"center"}}> SignUp</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAvoidingView>

        )
    }

}

const styles = StyleSheet.create({
    loginBox:
    {
    marginTop:25,
      width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin:10,
    paddingLeft:30,
    borderRadius:40
    },
    loginButton:{
        marginTop:25,
      width: 200,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin:10,
    paddingLeft:10,
    borderRadius:40,
    marginLeft:50
    }
  })