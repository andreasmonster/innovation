import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreenC from './components/ProfileScreen';
import BuyScreenC from './components/BuyScreen';
import StackNavigatorC from './components/StackNavigator';

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ProfileScreenC/>
    </View>
  );
}


function BuyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BuyScreenC/>
    </View>
  );
}

function StackNavigator() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StackNavigatorC/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Buy / Rent" component={BuyScreen} />
        <Tab.Screen name="Recent" component={StackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}