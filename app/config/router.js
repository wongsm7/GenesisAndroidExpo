import React from 'react';
import { Platform, Text } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import { capitalizeFirstLetter } from '../helpers/string'

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import Me from '../screens/Me'
import NewContact from '../screens/NewContact'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const ContactsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { headerTitleAlign: 'center' } }}>
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={() => ({
          headerTitleAlign: 'center'
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          title: `${capitalizeFirstLetter(route.params.name.first + ' ' + route.params.name.last)}`,
          headerTitleAlign: 'center'
        })}
      />
    </Stack.Navigator>
  );
}

const NewContactStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { headerTitleAlign: 'center' } }}>
      <Stack.Screen
        name="New Contact"
        component={NewContact}
        options={() => ({
          headerTitleAlign: 'center'
        })}
      />
    </Stack.Navigator>
  )
}

const MeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { headerTitleAlign: 'center' } }}>
      <Stack.Screen
        name="Me"
        component={Me}
        options={() => ({
          headerTitleAlign: 'center'
        })}
      />
    </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Tab.Screen
        name="Contacts"
        component={ContactsStack}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color, size }) => (
            <Icon name='md-list' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="New Contact"
        component={NewContactStack}
        options={{
          tabBarLabel: 'New Contact',
          tabBarIcon: ({ color, size }) => (
            <Icon name="md-person-add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={MeStack}
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({ color, size }) => (
            <Icon name="md-person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export {
  ContactsStack, Tabs
}