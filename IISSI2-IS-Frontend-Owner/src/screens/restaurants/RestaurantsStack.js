// src/screens/restaurants/RestaurantsStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import RestaurantDetailScreen from './RestaurantDetailScreen' // Importa la pantalla de detalle
import RestaurantsScreen from './RestaurantsScreen'         // Importa la pantalla de lista

const Stack = createNativeStackNavigator() // Crea el navegador de tipo Stack

export default function RestaurantsStack () {
  return (
    // Stack.Navigator contiene las pantallas de esta "pila"
        <Stack.Navigator>
        {/* Define la primera pantalla del stack */}
            <Stack.Screen
                name='RestaurantsScreen' // Nombre interno para navegar a ella
                component={RestaurantsScreen} // Componente a renderizar
            />
        {/* Define la segunda pantalla del stack */}
            <Stack.Screen
                name='RestaurantDetailScreen'
                component={RestaurantDetailScreen}
            />
        </Stack.Navigator>
  )
}