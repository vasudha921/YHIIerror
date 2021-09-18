import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import YourDetailsScreen from '../screens/YourDetailsScreen';
console.log("************************************************************************");
export const AppTabNavigator = createBottomTabNavigator({
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions:{
            
            tabBarLabel: "Home",
         }
    },
    YourDetailsScreen:{
        screen:YourDetailsScreen,
        navigationOptions:{
            
            tabBarLabel: "Your details",
        }
    }
})