import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import AddCountry from './src/AddCountry/AddCountry';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ cities }) {
  function CityPlaceholder() { return (<View><Text>City Details Placeholder</Text></View>); }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities">{(p) => <Cities {...p} cities={cities} />}</Stack.Screen>
      <Stack.Screen name="City" component={CityPlaceholder} />
    </Stack.Navigator>
  );
}

function CountriesStackScreen({ countries }) {
  function CountryPlaceholder() { return (<View><Text>Country Details Placeholder</Text></View>); }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Countries">{(p) => <Countries {...p} countries={countries} />}</Stack.Screen>
      <Stack.Screen name="Country" component={CountryPlaceholder} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);

  const addCity = (city) => setCities((prev) => [...prev, city]);
  const addCountry = (country) => setCountries((prev) => [...prev, country]);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CitiesNav">{(p) => <CitiesStackScreen {...p} cities={cities} />}</Tab.Screen>
        <Tab.Screen name="AddCity">{(p) => <AddCity {...p} addCity={addCity} />}</Tab.Screen>

        {/* NEW */}
        <Tab.Screen name="CountriesNav">{(p) => <CountriesStackScreen {...p} countries={countries} />}</Tab.Screen>
        <Tab.Screen name="AddCountry">{(p) => <AddCountry {...p} addCountry={addCountry} />}</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
