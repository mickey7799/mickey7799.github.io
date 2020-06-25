import React from "react";
import Pages from "./pages/Pages";
import InfoContextProvider from "./contexts/infoContext";

function App() {
  return (
    <InfoContextProvider>
      <Pages />
    </InfoContextProvider>
  );
}

export default App;
