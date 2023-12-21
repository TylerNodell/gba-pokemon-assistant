import { createRoot } from 'react-dom/client';
import { useEffect, useContext } from 'react';
import GlobalProvider from './util/GlobalProvider';
import { GlobalContext } from './util/GlobalContext';


const App = () => {

  const globalState = useContext(GlobalContext);

  useEffect(() => {
    dataGBA.onData((incomingData) => {
      const parsedData = JSON.parse(JSON.stringify(incomingData));
      globalState.setPartyData(parsedData.party);
      globalState.setEnemyData(parsedData.enemy);
    });
  }, []);

  useEffect(() => {
    console.log(globalState.enemyData);
    console.log(globalState.partyData);
  }, [globalState.enemyData]);

  return <div>Hello from React, data: </div>;
};

const root = createRoot(document.body);
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);