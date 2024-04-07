import Login from 'app/screens/Login';
import React from 'react';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from 'tamagui.config';

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Login />
    </TamaguiProvider>
  );
}

