import React, { createContext, useContext, useMemo, useState } from 'react';
import uuid from 'react-native-uuid';

export const CountriesContext = createContext();

const initial = [
  {
    id: 'usa',
    country: 'USA',
    currencies: [
      { id: 'usd', name: 'Dollar', info: 'US Dollars', used: true },
      { id: 'krw', name: 'Won', info: 'Korean Won. Not used.', used: false },
    ],
  },
];

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState(initial);

  // same shape your AddCountry creates
  const addCountry = (newCountry) => setCountries((prev) => [...prev, newCountry]);

  // add a currency to a country
  const addCurrency = (countryId, currency) => {
    const withId = { id: currency.id || uuid.v4(), ...currency };
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? { ...c, currencies: [...(c.currencies || []), withId] }
          : c
      )
    );
  };

  // NEW: toggle Used/Not used by tapping a row
  const toggleCurrencyUsed = (countryId, currencyId) => {
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? {
              ...c,
              currencies: (c.currencies || []).map((cur) =>
                cur.id === currencyId ? { ...cur, used: !cur.used } : cur
              ),
            }
          : c
      )
    );
  };

  const value = useMemo(
    () => ({ countries, addCountry, addCurrency, toggleCurrencyUsed }),
    [countries]
  );

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}

export const useCountries = () => useContext(CountriesContext);
