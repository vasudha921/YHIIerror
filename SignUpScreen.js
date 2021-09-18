import React from 'react';
import { Alert, StyleSheet, Text, View, ScrollView,KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import {Header, ThemeConsumer} from 'react-native-elements';
import LoginScreen from './LoginScreen';
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase';
import db from "../config";
export default class SignUpScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId: "",
            password:"",
            firstName:"",
            lastName:"",
            address:"",
            contact:"",
            confirmPassword:"",
            
        }
    }

    //userSignUp = (emailId,password, confirmPassword )=>{
        //if(password!== confirmPassword){
           // return Alert.alert("password does not match")
       // }else{
           // firebase.auth().createUserWithEmailAndPassword(emailId,password)
           // .then(()=>{
             //   db.collection("users").add({
               //     first_name:this.state.firstName,
                //    last_name:this.state.lastName,
                  //  contact: this.state.contact,
                  //  emailId:this.state.emailId,
                  //  address:this.state.address
               // })
             //   return Alert.alert("Thank you for signing up")
          //  }
          //  )
            //.catch(error =>{
            //    return Alert.alert(error.message);
           // })
       // }
   // }
    render(){
        return(
            <ScrollView style={styles.scrollview}>
                    <Header
                
                centerComponent={{ text:"YHII", style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
                
                />
              
          
          <View style={{ flex: 0.95 }}>
            <Text style={styles.label}>First Name </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"First Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  firstName: text
                });
              }}
            />

            <Text style={styles.label}>Last Name </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Last Name"}
              maxLength={12}
              onChangeText={text => {
                this.setState({
                  lastName: text
                });
              }}
            />

            <Text style={styles.label}>Contact </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Contact"}
              maxLength={10}
              keyboardType={"numeric"}
              onChangeText={text => {
                this.setState({
                  contact: text
                });
              }}
            />

            <Text style={styles.label}> Address </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Address"}
              multiline={true}
              onChangeText={text => {
                this.setState({
                  address: text
                });
              }}
            />

            <Text style={styles.label}>Email </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Email Address"}
              keyboardType={"email-address"}
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />

            <Text style={styles.label}> Password </Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.formInput}
              placeholder={"Confirm Password"}
              secureTextEntry={true}
              onChangeText={text => {
                this.setState({
                  confirmPassword: text
                });
              }}
            />
          </View>

          <View style={{ flex: 0.2, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() =>
                this.userSignUp(
                  this.state.emailId,
                  this.state.password,
                  this.state.confirmPassword
                )
              }
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton1}
            onPress = {()=> {this.props.navigation.navigate("LoginScreen")}}>
            <Text
              style={styles.registerButtonText}
               >
              Cancel
            </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
       
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6fc0b8"
      },
      
      label: {
        fontSize: RFValue(13),
        color: "#717D7E",
        fontWeight: "bold",
        paddingLeft: RFValue(10),
        marginLeft: RFValue(20)
      },
      formInput: {
        width: "90%",
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "grey",
        paddingBottom: RFValue(10),
        marginLeft: RFValue(20),
        marginBottom: RFValue(14)
      },
      registerButton: {
        width: "75%",
        height: RFValue(50),
        marginTop: RFValue(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(3),
        backgroundColor: "#32867d",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: RFValue(10)
      },
      registerButton1: {
        width: "75%",
        height: RFValue(50),
        marginTop: RFValue(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(3),
        backgroundColor: "#32867d",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: RFValue(10)
      },
      registerButtonText: {
        fontSize: RFValue(20),
        fontWeight: "bold",
        color: "#fff"
      },
})
