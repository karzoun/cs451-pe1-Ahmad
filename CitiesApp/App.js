import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Cities from './src/Cities/Cities';
import AddCity from './src/AddCity/AddCity';

import Countries from './src/Countries/Countries';
import Country from './src/Countries/Country';
import AddCountry from './src/AddCountry/AddCountry';

import { CountriesProvider } from './src/contexts/CountriesContext';

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

function CountriesStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Countries" component={Countries} />
      <Stack.Screen name="Country" component={Country} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [cities, setCities] = useState([]);
  const addCity = (city) => setCities((prev) => [...prev, city]);

  return (
    <CountriesProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="CitiesNav">
            {(p) => <CitiesStackScreen {...p} cities={cities} />}
          </Tab.Screen>
          <Tab.Screen name="AddCity">
            {(p) => <AddCity {...p} addCity={addCity} />}
          </Tab.Screen>

          {/* Countries now read/write via context */}
          <Tab.Screen name="CountriesNav" component={CountriesStackScreen} />
          <Tab.Screen name="AddCountry" component={AddCountry} />
        </Tab.Navigator>
      </NavigationContainer>
    </CountriesProvider>
  );
}
