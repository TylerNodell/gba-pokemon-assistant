import React from 'react';

export interface GlobalState {
  partyData: Array<object> | null;
  setPartyData: React.Dispatch<React.SetStateAction<Array<object> | null>>;
  enemyData: object | null;
  setEnemyData: React.Dispatch<React.SetStateAction<object | null>>;
}

export const GlobalContext = React.createContext<GlobalState | undefined>(undefined);