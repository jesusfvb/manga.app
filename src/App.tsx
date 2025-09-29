import { Text, View } from 'react-native';
import { IconButton, MD3Colors, PaperProvider } from 'react-native-paper';
import '../global.css';
import RouteTabs from './core/routes';
import { NavigationContainer } from '@react-navigation/native';

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
