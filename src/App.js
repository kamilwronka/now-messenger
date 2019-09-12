import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import AppNavigation from './navigation';
import AppSocketWrapper from './AppSocketWrapper';
import {persistor, store} from './store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.appContainer}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <AppSocketWrapper>
              <AppNavigation />
            </AppSocketWrapper>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
