import React, { useContext } from 'react';
//import Pages from './pages';
import { InfoContext } from "../src/contexts/infoContext";

function App() {
  const { info } = useContext(InfoContext);

  if (!info) {
    return <div />;
  }
  return <div>Hi</div>
  // return <Pages user={info} />;
}

export default App;