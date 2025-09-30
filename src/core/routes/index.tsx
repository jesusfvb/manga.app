import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconsSVG } from '../../assets';
import AppBar from '../../features/manga/presentation/components/app_bar';
import HomeView from '../../features/manga/presentation/views/home_view';

const Tab = createBottomTabNavigator();

function RouteTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={route => ({
        header: AppBar,
        tabBarIcon: ({ color, size }) => {
          return (
            <IconsSVG.iconTorii width={size} height={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeView} />
    </Tab.Navigator>
  );
}

export default RouteTabs;
