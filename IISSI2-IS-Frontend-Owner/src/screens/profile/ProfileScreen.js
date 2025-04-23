import React from 'react'
import { View, Text } from 'react-native'
import SystemInfo from '../../components/SystemInfo'; // Importa el componente SystemInfo

export default function ProfileScreen () {
  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile</Text>
            {/* Incluye el componente SystemInfo aquí */}
            <SystemInfo />
        </View>
  )
}