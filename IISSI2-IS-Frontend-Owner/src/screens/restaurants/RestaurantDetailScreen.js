// src/screens/restaurants/RestaurantDetailScreen.js
/* eslint-disable react/prop-types */ // Desactiva temporalmente aviso de ESLint
import React from 'react'
import { View, Text } from 'react-native'

// Recibe 'route' como prop, que contiene los parámetros pasados
export default function RestaurantDetailScreen ({ route }) {
  // Extrae el 'id' del objeto 'params' dentro de 'route'
  const { id } = route.params
  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* Muestra el ID recibido */}
            <Text>Restaurant details. Id: {id}</Text>
        </View>
  )
}