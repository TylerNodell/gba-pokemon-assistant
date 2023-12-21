import { GlobalContext, GlobalState } from './GlobalContext';
import { ReactNode, useState } from 'react';

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [partyData, setPartyData] = useState<Array<object> | null>(null);
  const [enemyData, setEnemyData] = useState<object | null>(null);

  const value: GlobalState = {
    partyData: partyData,
    setPartyData: setPartyData,
    enemyData: enemyData,
    setEnemyData: setEnemyData,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;