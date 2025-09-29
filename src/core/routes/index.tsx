import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from '../../features/manga/presentation/views/home_view';

const Tab = createBottomTabNavigator();

function RouteTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={HomeView} />
    </Tab.Navigator>
  );
}

export default RouteTabs;