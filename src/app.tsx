import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    dataGBA.onData((incomingData) => {
      console.log(incomingData);
      setData(JSON.stringify(incomingData));
    });
  }, []);

  return <div>Hello from React, data: {data}</div>;
};

const root = createRoot(document.body);
root.render(<App />);