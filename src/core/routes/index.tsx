import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from '../../features/manga/presentation/views/home_view';
import AppBar from '../../features/manga/presentation/components/app_bar';

const Tab = createBottomTabNavigator();

function RouteTabs() {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{ header:AppBar}}>
      <Tab.Screen name="Home" component={HomeView} />
    </Tab.Navigator>
  );
}

export default RouteTabs;