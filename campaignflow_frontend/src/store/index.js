import React, { createContext, useContext, useMemo, useReducer } from 'react';

/**
 * PUBLIC_INTERFACE
 * AppStoreProvider
 * Minimal Context + Reducer setup to scale later without external libs.
 */

const AppStateContext = createContext(undefined);
const AppDispatchContext = createContext(undefined);

const initialState = {
  user: null,
  notifications: [],
};

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// PUBLIC_INTERFACE
export function AppStoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateValue = useMemo(() => state, [state]);

  return (
    <AppStateContext.Provider value={stateValue}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (ctx === undefined) throw new Error('useAppState must be used within AppStoreProvider');
  return ctx;
}

// PUBLIC_INTERFACE
export function useAppDispatch() {
  const ctx = useContext(AppDispatchContext);
  if (ctx === undefined) throw new Error('useAppDispatch must be used within AppStoreProvider');
  return ctx;
}
