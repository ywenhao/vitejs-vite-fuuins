import React from 'react';
import counterStore from './counter';

const store = React.createContext({
  counterStore,
});

export const useStore = () => React.useContext(store);
