import React from 'react';
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './src/Signin';
import Home from './src/Home'
import Meals from './src/Bottomtab/Meals'
import More from './src/Bottomtab/More';
import Profile from './src/Bottomtab/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const BottomTab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function MyStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen
        name='BottomTab'
        component={MyBottomTab}
        options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function MyBottomTab() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor="green"
      inactiveColor="black"
      barStyle={{ backgroundColor: 'white' }}
    >
      <BottomTab.Screen name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen name='Meals'
        component={Meals}
        options={{
          tabBarLabel: 'Meals',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="Meals" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen name='More'
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="More" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-man-profile" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({


})