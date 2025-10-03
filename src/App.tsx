import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import '../global.css';
import RouteTabs from './core/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <RouteTabs />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
