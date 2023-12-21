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
  }, [globalState.enemyData]);

  useEffect(() => {
    console.log(globalState.partyData);
    // const partyData = parsePartyData(globalState.partyData)
  }, [globalState.partyData]);

  return <div>Hello from React, data: </div>;
};

const root = createRoot(document.body);
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);