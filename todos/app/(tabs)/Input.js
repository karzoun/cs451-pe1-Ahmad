import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const Input = ({ inputValue, inputChange, onSubmit }) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder="What needs to be done?"
      placeholderTextColor="#CACACA"
      selectionColor="#666666"
      onChangeText={inputChange}
      onSubmitEditing={onSubmit} // optional: allow "Enter" to submit too
    />
    <Button title="Submit" onPress={onSubmit} />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
});

export default Input;
