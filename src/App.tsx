import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import '../global.css';
import RouteTabs from './core/routes';

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RouteTabs />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
