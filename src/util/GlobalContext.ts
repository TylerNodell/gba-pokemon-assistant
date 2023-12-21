import React from 'react';

interface GlobalState {
  data: string | null;
  setData: React.Dispatch<React.SetStateAction<string | null>>;
}

export const GlobalContext = React.createContext<GlobalState | undefined>(undefined);