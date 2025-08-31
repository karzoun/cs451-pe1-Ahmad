import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';
import { CountriesContext } from '../contexts/CountriesContext';

export default class Countries extends React.Component {
  static contextType = CountriesContext;

  render() {
    const { countries } = this.context;
    const { navigation } = this.props;

    return (
      <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
        <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
          {!countries.length && <CenterMessage message="No saved countries!" />}
          {countries.map((item) => {
            const firstCurrency = item.currencies?.[0]?.name || '';
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate('Country', { countryId: item.id })}
                activeOpacity={0.7}
              >
                <View style={styles.row}>
                  <Text style={styles.country}>{item.country}</Text>
                  {!!firstCurrency && <Text style={styles.currency}>{firstCurrency}</Text>}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: { padding: 10, borderBottomWidth: 2, borderBottomColor: colors.primary },
  country: { fontSize: 20 },
  currency: { color: 'rgba(0,0,0,0.5)' },
});
