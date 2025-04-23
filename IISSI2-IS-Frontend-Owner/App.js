// Importaciones necesarias para la navegación y tus pantallas
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import ControlPanelScreen from './src/screens/controlPanel/ControlPanelScreen' // Asegúrate que la ruta es correcta
import ProfileScreen from './src/screens/profile/ProfileScreen'           // Asegúrate que la ruta es correcta
import RestaurantsStack from './src/screens/restaurants/RestaurantsStack' // Asegúrate que la ruta es correcta

// Crea el navegador de pestañas inferiores
const Tab = createBottomTabNavigator()

// Este es el componente principal de tu aplicación ahora
export default function App () {
  return (
    // El NavigationContainer envuelve toda la navegación
    <NavigationContainer>
      {/* Tab.Navigator contiene las pantallas de las pestañas */}
      <Tab.Navigator>
        {/* Cada Tab.Screen define una pestaña */}
        <Tab.Screen
          name="Restaurants" // Nombre que se muestra en la pestaña
          component={RestaurantsStack} // Componente que se renderiza
        />
        <Tab.Screen
          name="Control Panel"
          component={ControlPanelScreen}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

