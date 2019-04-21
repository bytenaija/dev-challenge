import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import client from './apollo';
import Scenes from './Scenes';

const theme = {
  dark: true,
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200EE',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <ApolloProvider client={client}>
        <Scenes />
      </ApolloProvider>
    </PaperProvider>
  );
}
