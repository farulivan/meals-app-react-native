import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4A69A8' },
        headerTintColor: 'white',
      }}
      sceneContainerStyle={{ backgroundColor: '#32405C' }}
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          tabBarIcon: () => (
            <Ionicons name="home" color='white' size={22} />
          ),
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#4A69A8',
          tabBarInactiveBackgroundColor: '#32405C',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          tabBarIcon: () => (
            <Ionicons name="star" color='white' size={22} />
          ),
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: '#4A69A8',
          tabBarInactiveBackgroundColor: '#32405C',
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#4A69A8' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#32405C' },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={TabNavigator}
            options={{
              title: 'All Categories',
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
