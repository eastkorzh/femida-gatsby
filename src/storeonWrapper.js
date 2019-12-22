import React from 'react';
import StoreContext from 'storeon/react/context'

import store from './store';

export default ({ element }) => (
  <StoreContext.Provider value={store}>{element}</StoreContext.Provider>
);