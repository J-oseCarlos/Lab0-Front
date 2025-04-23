import React from 'react'
import { View, Text } from 'react-native'
import SystemInfo from '../../components/SystemInfo'; // Importa el componente SystemInfo

export default function ControlPanelScreen () {
  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Control Panel</Text>
            {/* Incluye el componente SystemInfo aquí */}
            <SystemInfo />
        </View>
  )
}