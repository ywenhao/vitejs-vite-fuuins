import React from 'react';
import counter from './counter';

const store = React.createContext({
  counter,
});

export const useStore = () => React.useContext(store);
