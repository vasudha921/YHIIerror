import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import YourDetailsScreen from './screens/YourDetailsScreen';
import {AppTabNavigator} from './components/AppTabNavigator';

export default class App extends React.Component{
  render(){
    return(
      
        
        
       <AppContainer/>
      
      
    )
    
  }
}






const switchNavigator = createSwitchNavigator({
 LoginScreen: {screen: LoginScreen},
 SignUpScreen: {screen: SignUpScreen},
 TabNavigator:{screen:AppTabNavigator}

})
const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frontscr:{
    flex:1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center'
  }
});
