import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import DebugScreen from '../screens/DebugScreen';
import { BottomTabParamList, HomeParamList, AboutParamList, DebugParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={TabAboutNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name={Platform.OS === 'ios' ? 'ios-information' : 'md-information'} />,
        }}
      />
      <BottomTab.Screen
        name="Debug"
        component={TabDebugNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

const AboutTabStack = createStackNavigator<AboutParamList>();

function TabAboutNavigator() {
  return (
    <AboutTabStack.Navigator>
      <AboutTabStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ headerTitle: 'About' }}
      />
    </AboutTabStack.Navigator>
  );
}

const DebugTabStack = createStackNavigator<DebugParamList>();

function TabDebugNavigator() {
  return (
    <DebugTabStack.Navigator>
      <DebugTabStack.Screen
        name="DebugScreen"
        component={DebugScreen}
        options={{ headerTitle: 'Debug' }}
      />
    </DebugTabStack.Navigator>
  );
}