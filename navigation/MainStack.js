import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const stack = createNativeStackNavigator

const MainStack = () => {
  return (
    <View>
      <Text>MainStack</Text>
    </View>
  )
}

export default MainStack