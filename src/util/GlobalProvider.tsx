import { GlobalContext } from './GlobalContext';
import { ReactNode, useState } from 'react';

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [data, setData] = useState<string | null>(null);

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;