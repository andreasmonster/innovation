import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailsScreenC from './components/DetailsScreen';
import HomeScreenC from './components/HomeScreen';
import SettingsScreenC from './components/SettingsScreen';
import StackNavigatorC from './components/StackNavigator';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HomeScreenC/>
    </View>
  );
}


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SettingsScreenC/>
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Details" component={StackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}