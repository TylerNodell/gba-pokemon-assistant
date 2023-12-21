import { createRoot } from 'react-dom/client';
import { useEffect, useContext } from 'react';
import GlobalProvider from './util/GlobalProvider';
import { GlobalContext } from './util/GlobalContext';


const App = () => {

  const globalState = useContext(GlobalContext);

  useEffect(() => {
    dataGBA.onData((incomingData) => {
      console.log(incomingData);
      globalState.setData(JSON.stringify(incomingData));
    });
  }, []);

  return <div>Hello from React, data: </div>;
};

const root = createRoot(document.body);
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);