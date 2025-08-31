import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';
import { CountriesContext } from '../contexts/CountriesContext';

export default class AddCountry extends React.Component {
  static contextType = CountriesContext;

  state = { country: '', currency: '' };

  onChangeText = (key, value) => this.setState({ [key]: value });

  submit = () => {
    const country = this.state.country.trim();
    const currency = this.state.currency.trim();
    if (!country || !currency) {
      alert('Please complete the form'); return;
    }

    const newCountry = {
      id: uuid.v4(),
      country,
      currencies: [{ id: uuid.v4(), name: currency, info: '', used: true }],
    };

    this.context.addCountry(newCountry);      // <-- context
    this.setState({ country: '', currency: '' }, () => {
      this.props.navigation.navigate('CountriesNav'); // switch to the list tab
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Countries</Text>
        <TextInput
          placeholder="Country name"
          value={this.state.country}
          onChangeText={(v) => this.onChangeText('country', v)}
          style={styles.input}
        />
        <TextInput
          placeholder="Currency"
          value={this.state.currency}
          onChangeText={(v) => this.onChangeText('currency', v)}
          style={styles.input}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', backgroundColor: colors.primary },
  heading: { color: 'white', fontSize: 40, marginBottom: 10, alignSelf: 'center' },
  input: { margin: 10, backgroundColor: 'white', paddingHorizontal: 8, height: 50 },
  button: { height: 50, backgroundColor: '#666', justifyContent: 'center', alignItems: 'center', margin: 10 },
  buttonText: { color: 'white', fontSize: 18 },
});
