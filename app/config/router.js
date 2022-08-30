import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { capitalizeFirstLetter } from '../helpers/string'

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';

const Stack = createNativeStackNavigator();

const ContactsStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { headerTitleAlign: 'center' } }}>
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={({ route }) => ({
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
    </NavigationContainer>
  );
}

export default ContactsStack;