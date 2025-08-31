import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';
import { useCountries } from '../contexts/CountriesContext';

export default function Country({ route }) {
  const { countries, addCurrency, toggleCurrencyUsed } = useCountries();
  const { countryId } = route.params;

  const country = useMemo(
    () => countries.find((c) => c.id === countryId),
    [countries, countryId]
  );

  // values to add
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');

  // simple modal prompt used when the buttons are tapped
  const [promptVisible, setPromptVisible] = useState(false);
  const [promptField, setPromptField] = useState('name'); 
  const [promptValue, setPromptValue] = useState('');

  const openPrompt = (field) => {
    setPromptField(field);
    setPromptValue(field === 'name' ? name : info);
    setPromptVisible(true);
  };
  const closePrompt = () => setPromptVisible(false);
  const savePrompt = () => {
    if (promptField === 'name') setName(promptValue.trim());
    else setInfo(promptValue.trim());
    setPromptVisible(false);
  };

  const onAdd = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    addCurrency(country.id, {
      id: uuid.v4(),
      name: trimmed,
      info: info.trim(),
      used: false,
    });
    setName('');
    setInfo('');
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={country?.currencies || []}
        keyExtractor={(i) => i.id.toString()}
        ListHeaderComponent={
          <Text style={styles.header}>{country?.country || 'Country'}</Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => toggleCurrencyUsed(country.id, item.id)}
            style={styles.row}
          >
            <Text style={[styles.currency, item.used && styles.used]}>
              {item.name}
            </Text>
            {!!item.info && <Text style={styles.info}>{item.info}</Text>}
            <Text style={[styles.badge, item.used && styles.badgeUsed]}>
              {item.used ? 'Used' : 'Not used'}
            </Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        contentContainerStyle={{ padding: 10 }}
      />

      {}
      <View style={styles.addBox}>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => openPrompt('name')}
          activeOpacity={0.8}
        >
          <Text style={styles.inputButtonText}>
            {name ? `Name: ${name}` : 'Currency name'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => openPrompt('info')}
          activeOpacity={0.8}
        >
          <Text style={styles.inputButtonText}>
            {info ? `Info: ${info}` : 'Currency info'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onAdd}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Currency</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Small cross-platform prompt modal */}
      <Modal
        transparent
        animationType="fade"
        visible={promptVisible}
        onRequestClose={closePrompt}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>
              {promptField === 'name' ? 'Currency name' : 'Currency info'}
            </Text>
            <TextInput
              autoFocus
              value={promptValue}
              onChangeText={setPromptValue}
              style={styles.modalInput}
              placeholder={
                promptField === 'name' ? 'e.g., Dollar' : 'e.g., US Dollars'
              }
            />
            <View style={styles.modalActions}>
              <TouchableOpacity onPress={closePrompt} style={styles.modalBtnGhost}>
                <Text style={styles.modalBtnGhostText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={savePrompt} style={styles.modalBtn}>
                <Text style={styles.modalBtnText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
    marginVertical: 6,
  },
  row: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e4e6eb',
  },
  currency: { fontSize: 16, fontWeight: '700', color: '#123' },
  used: { color: '#1B5E20' },
  info: { marginTop: 4, color: 'rgba(0,0,0,0.6)' },
  badge: { marginTop: 6, fontSize: 12, color: 'rgba(0,0,0,0.5)' },
  badgeUsed: { color: '#1B5E20' },

  addBox: { padding: 10, borderTopWidth: 1, borderColor: '#e4e6eb' },

  // Button-like fields
  inputButton: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  inputButtonText: { color: '#fff', fontWeight: '700' },

  button: {
    height: 48,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    borderRadius: 6,
  },
  buttonText: { color: 'white', fontWeight: '700' },

  // Modal styles
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: '88%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
  },
  modalTitle: { fontSize: 16, fontWeight: '700', marginBottom: 8, color: '#111' },
  modalInput: {
    borderWidth: 1,
    borderColor: '#d9e2ef',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 46,
  },
  modalActions: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginLeft: 8,
  },
  modalBtnText: { color: '#fff', fontWeight: '700' },
  modalBtnGhost: { paddingVertical: 10, paddingHorizontal: 12 },
  modalBtnGhostText: { color: '#666', fontWeight: '600' },
});
