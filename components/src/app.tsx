import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './screens/BottomTabs.navigator';
import {AppProvider} from './App.provider';
import {store} from './Redux/store';
import {Provider} from 'react-redux';
// import { Provider } from 'react';
const App: React.FC = () => {
  return (
    <AppProvider>
      {/* <Provider store={store}> */}
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
      {/* </Provider> */}
    </AppProvider>
  );
};

export default App;
