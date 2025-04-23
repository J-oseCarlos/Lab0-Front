// src/screens/restaurants/RestaurantsScreen.js
/* eslint-disable react/prop-types */ // Desactiva temporalmente aviso de ESLint sobre props no tipadas
import React from 'react'
import { Button, Text, View } from 'react-native'
import SystemInfo from '../../components/SystemInfo'; // Importa el componente SystemInfo

// Recibe 'navigation' como prop automáticamente del Stack Navigator
export default function RestaurantsScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Random Restaurant</Text>
      {/* Incluye el componente SystemInfo aquí */}
      <SystemInfo />
      <Button
        onPress={() => {
          // Navega a 'RestaurantDetailScreen' (el nombre definido en RestaurantsStack.js)
          // y le pasa un objeto { id: ... } como parámetro
          navigation.navigate('RestaurantDetailScreen', { id: Math.floor(Math.random() * 100) })
        }}
        title="Go to Random Restaurant Details"
      />
    </View>
  )
}