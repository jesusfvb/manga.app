import { Text, View } from 'react-native';
import { IconButton, MD3Colors, PaperProvider } from 'react-native-paper';
import '../global.css';

function App() {
  return (
    <PaperProvider>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind! Manga App
        </Text>
        <IconButton
          icon="camera"
          iconColor={MD3Colors.error50}
          size={20}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </PaperProvider>
  );
}

export default App;
